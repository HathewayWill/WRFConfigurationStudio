(function (global) {
  'use strict';

  function asArray(value) {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null) return [];
    return [value];
  }

  function norm(value) {
    if (value === undefined || value === null) return '';
    if (value === true) return '.true.';
    if (value === false) return '.false.';
    return String(value).trim().toLowerCase();
  }

  function valueAt(values, index) {
    if (!Array.isArray(values)) return values;
    if (index < values.length) return values[index];
    if (values.length) return values[0];
    return undefined;
  }

  function valuesMatch(value, ruleValues) {
    var normalizedValue = norm(value);
    return asArray(ruleValues).map(norm).indexOf(normalizedValue) !== -1;
  }

  function isNonZeroValue(value) {
    if (value === undefined || value === null) return false;
    var raw = String(value).trim().toLowerCase();
    if (!raw || raw === '.false.' || raw === 'false') return false;
    var numeric = Number(raw.replace(/[dD]/, 'e'));
    if (!isNaN(numeric)) return numeric !== 0;
    return raw !== '0' && raw !== '0.0';
  }

  function toFiniteNumber(value) {
    if (value === undefined || value === null || value === '') return null;
    var numeric = Number(String(value).trim().replace(/[dD]/, 'e'));
    if (!isFinite(numeric)) return null;
    return numeric;
  }

  function conditionNumber(condition, index, fallback) {
    condition = condition || {};
    var vals = condition.values || [];
    if (Array.isArray(vals) && vals.length > index) return toFiniteNumber(vals[index]);
    if (index === 0 && condition.value !== undefined) return toFiniteNumber(condition.value);
    if (index === 0 && condition.threshold !== undefined) return toFiniteNumber(condition.threshold);
    if (index === 0 && condition.min !== undefined) return toFiniteNumber(condition.min);
    if (index === 1 && condition.max !== undefined) return toFiniteNumber(condition.max);
    return fallback === undefined ? null : toFiniteNumber(fallback);
  }

  function numericComparisonMatches(value, condition, mode) {
    var numericValue = toFiniteNumber(value);
    if (numericValue === null) return false;

    if (mode === 'greater_than' || mode === 'gt') {
      var gt = conditionNumber(condition, 0);
      return gt !== null && numericValue > gt;
    }

    if (mode === 'greater_than_or_equal' || mode === 'gte') {
      var gte = conditionNumber(condition, 0);
      return gte !== null && numericValue >= gte;
    }

    if (mode === 'less_than' || mode === 'lt') {
      var lt = conditionNumber(condition, 0);
      return lt !== null && numericValue < lt;
    }

    if (mode === 'less_than_or_equal' || mode === 'lte') {
      var lte = conditionNumber(condition, 0);
      return lte !== null && numericValue <= lte;
    }

    if (mode === 'between') {
      var minValue = conditionNumber(condition, 0);
      var maxValue = conditionNumber(condition, 1);
      return minValue !== null && maxValue !== null && numericValue >= minValue && numericValue <= maxValue;
    }

    if (mode === 'outside_range') {
      var outsideMin = conditionNumber(condition, 0);
      var outsideMax = conditionNumber(condition, 1);
      return outsideMin !== null && outsideMax !== null && (numericValue < outsideMin || numericValue > outsideMax);
    }

    return false;
  }

  function conditionMatches(value, condition, userEdited) {
    condition = condition || {};
    var mode = condition.mode || 'one_of';
    var vals = condition.values || [];

    if (mode === 'active') return true;
    if (mode === 'set' || mode === 'required') return value !== undefined && value !== null && String(value).trim() !== '';
    if (mode === 'non_zero') return isNonZeroValue(value);
    if (mode === 'user_edited') return !!userEdited;
    if (mode === 'user_edited_one_of') return !!userEdited && valuesMatch(value, vals);
    if (mode === 'user_edited_non_zero') return !!userEdited && isNonZeroValue(value);
    if (mode === 'truthy') return value === true || norm(value) === '.true.' || norm(value) === '1';
    if (mode === 'falsy') return value === false || norm(value) === '.false.' || norm(value) === '0';

    if (
      mode === 'greater_than' || mode === 'gt' ||
      mode === 'greater_than_or_equal' || mode === 'gte' ||
      mode === 'less_than' || mode === 'lt' ||
      mode === 'less_than_or_equal' || mode === 'lte' ||
      mode === 'between' ||
      mode === 'outside_range'
    ) {
      return numericComparisonMatches(value, condition, mode);
    }

    if (mode === 'equals' || mode === 'one_of' || mode === 'any_of') {
      return valuesMatch(value, vals);
    }

    if (mode === 'not_equals' || mode === 'not_one_of') {
      return !valuesMatch(value, vals);
    }

    return false;
  }

  function isValidatedRule(rule) {
    var status = String(rule.validationStatus || '').toLowerCase();
    return status === 'valid' || status === 'validated';
  }

  function isHardRule(rule) {
    return String(rule.strength || '').toLowerCase() === 'hard';
  }

  function ruleSeverity(rule) {
    if (isHardRule(rule)) return 'error';
    return 'warning';
  }

  function fieldKey(group, variable) {
    return String(group || '') + '.' + String(variable || '');
  }

  function describeAllowed(values) {
    return asArray(values).map(String).join(', ');
  }

  function isWrf48PlusOnlyField(field) {
    var support = field && field.versionSupport ? field.versionSupport : null;
    if (!support) return false;

    if (support.status === 'new_48x') return true;

    var presentIn = Array.isArray(support.presentIn) ? support.presentIn : [];
    return presentIn.length > 0 &&
      presentIn.indexOf('4.7.1') === -1 &&
      presentIn.some(function (version) {
        return /^4\.(8|9)\b/.test(String(version)) || /^([5-9]|\d{2,})\./.test(String(version));
      });
  }

  function isLegacy471OnlyField(field) {
    var support = field && field.versionSupport ? field.versionSupport : null;
    if (!support) return false;
    var presentIn = Array.isArray(support.presentIn) ? support.presentIn : [];
    if (!presentIn.length) return false;
    return presentIn.indexOf('4.7.1') !== -1 &&
      !presentIn.some(function (version) {
        return /^4\.(8|9)\b/.test(String(version)) || /^([5-9]|\d{2,})\./.test(String(version));
      });
  }

  function CompatibilityEngine(opts) {
    opts = opts || {};
    this.catalog = opts.catalog || { groups: {} };
    this.compatibility = opts.compatibility || { rules: [] };
    this.state = opts.state || { enabled: {}, values: {} };
    this.targetWrfVersion = opts.targetWrfVersion || '≥ 4.8.0';
    this.fieldIndex = this.buildFieldIndex();
  }

  CompatibilityEngine.prototype.buildFieldIndex = function () {
    var index = {};
    var groups = this.catalog.groups || {};
    Object.keys(groups).forEach(function (groupName) {
      (groups[groupName] || []).forEach(function (field) {
        index[field.key] = field;
      });
    });
    return index;
  };

  CompatibilityEngine.prototype.isEnabled = function (key) {
    return !!(this.state.enabled && this.state.enabled[key]);
  };

  CompatibilityEngine.prototype.wasUserEdited = function (key) {
    return !!(this.state.userEditedFields && this.state.userEditedFields[key]);
  };

  CompatibilityEngine.prototype.getValue = function (key) {
    if (!this.state.values) return undefined;
    return this.state.values[key];
  };

  CompatibilityEngine.prototype.evaluateVersionIssues = function () {
    var issues = [];
    var self = this;

    Object.keys(this.fieldIndex).forEach(function (key) {
      var field = self.fieldIndex[key];
      if (!self.isEnabled(key)) return;

      if (self.targetWrfVersion === '4.7.1' && isWrf48PlusOnlyField(field)) {
        issues.push({
          id: 'version-' + key,
          type: 'error',
          fieldKeys: [key],
          ruleId: 'version-support',
          message: field.name + ' is available in WRF ≥ 4.8.0 but the target version is WRF ≤ 4.7.1.',
          sourcePriority: 'Registry',
          validationStatus: 'registry_backed'
        });
      }

      if (self.targetWrfVersion === '≥ 4.8.0' && isLegacy471OnlyField(field)) {
        issues.push({
          id: 'legacy-' + key,
          type: 'warning',
          fieldKeys: [key],
          ruleId: 'version-support',
          message: field.name + ' appears to be WRF ≤ 4.7.1-only. Confirm before using it with WRF ≥ 4.8.0.',
          sourcePriority: 'Registry',
          validationStatus: 'registry_backed'
        });
      }
    });

    return issues;
  };

  CompatibilityEngine.prototype.evaluateRuleIssues = function () {
    var issues = [];
    var rules = this.compatibility.rules || [];
    var self = this;

    rules.forEach(function (rule) {
      if (!isValidatedRule(rule)) return;

      var triggerKey = fieldKey(rule.triggerGroup, rule.triggerVariable);
      if (!self.isEnabled(triggerKey)) return;

      var triggerValues = asArray(self.getValue(triggerKey));
      if (!triggerValues.length) return;

      var triggeredIndexes = [];
      triggerValues.forEach(function (value, idx) {
        if (conditionMatches(value, rule.trigger, self.wasUserEdited(triggerKey))) triggeredIndexes.push(idx);
      });

      if (!triggeredIndexes.length) return;

      if (rule.emitOnTrigger === true) {
        issues.push({
          id: rule.id + '-workflow',
          type: ruleSeverity(rule),
          strength: rule.strength || '',
          fieldKeys: [triggerKey],
          triggerKey: triggerKey,
          ruleId: rule.id,
          category: rule.category || '',
          description: rule.description || '',
          message: rule.message || rule.sourceExcerpt || rule.requirementsRaw || rule.description || rule.id,
          fix: rule.fix || '',
          requirementsRaw: rule.requirementsRaw || '',
          sourceExcerpt: rule.sourceExcerpt || '',
          sourcePriority: rule.sourcePriority || 'WRF Users Guide / workflow guidance',
          validationStatus: rule.validationStatus || '',
          validationSource: rule.validationSource || '',
          validationUrl: rule.validationUrl || '',
          validationNotes: rule.validationNotes || ''
        });
      }

      (rule.requirements || []).forEach(function (req) {
        if (req.checkable === false) return;

        var reqKey = fieldKey(req.group, req.variable);
        var reqValue = self.getValue(reqKey);
        var reqValues = asArray(reqValue);
        var badIndexes = [];

        triggeredIndexes.forEach(function (idx) {
          var value = valueAt(reqValues, idx);
          var ok = self.isEnabled(reqKey) && conditionMatches(value, req, self.wasUserEdited(reqKey));
          if (!ok) badIndexes.push(idx + 1);
        });

        if (!badIndexes.length) return;

        var allowed = describeAllowed(req.values);
        var domainText = badIndexes.length ? ' Domain(s): d0' + badIndexes.join(', d0') + '.' : '';

        issues.push({
          id: rule.id + '-' + reqKey,
          type: ruleSeverity(rule),
          fieldKeys: [triggerKey, reqKey],
          ruleId: rule.id,
          category: rule.category || '',
          message: (rule.sourceExcerpt || rule.requirementsRaw || rule.id) +
            '. Set ' + reqKey + ' to ' + allowed + '.' + domainText,
          sourcePriority: 'Registry first, WRF Users Guide second',
          validationStatus: rule.validationStatus || '',
          validationSource: rule.validationSource || '',
          validationNotes: rule.validationNotes || ''
        });
      });
    });

    return issues;
  };

  CompatibilityEngine.prototype.getIssues = function () {
    return this.evaluateVersionIssues().concat(this.evaluateRuleIssues());
  };

  global.NamelistCompatibilityEngine = {
    create: function (opts) {
      return new CompatibilityEngine(opts || {});
    }
  };
})(window);
