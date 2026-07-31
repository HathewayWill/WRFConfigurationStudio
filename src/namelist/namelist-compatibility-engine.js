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

  function conditionMatches(value, condition) {
    condition = condition || {};
    var mode = condition.mode || 'one_of';
    var vals = condition.values || [];

    if (mode === 'active') return true;
    if (mode === 'set' || mode === 'required') return value !== undefined && value !== null && String(value).trim() !== '';
    if (mode === 'truthy') return value === true || norm(value) === '.true.' || norm(value) === '1';
    if (mode === 'falsy') return value === false || norm(value) === '.false.' || norm(value) === '0';

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
    this.targetWrfVersion = opts.targetWrfVersion || '4.8.0+';
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
          message: field.name + ' is available in WRF 4.8.0+ but the target version is WRF 4.7.1.',
          sourcePriority: 'Registry',
          validationStatus: 'registry_backed'
        });
      }

      if (self.targetWrfVersion === '4.8.0+' && isLegacy471OnlyField(field)) {
        issues.push({
          id: 'legacy-' + key,
          type: 'warning',
          fieldKeys: [key],
          ruleId: 'version-support',
          message: field.name + ' appears to be WRF 4.7.1-only. Confirm before using it with WRF 4.8.0+.',
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
        if (conditionMatches(value, rule.trigger)) triggeredIndexes.push(idx);
      });

      if (!triggeredIndexes.length) return;

      (rule.requirements || []).forEach(function (req) {
        if (req.checkable === false) return;

        var reqKey = fieldKey(req.group, req.variable);
        var reqValue = self.getValue(reqKey);
        var reqValues = asArray(reqValue);
        var badIndexes = [];

        triggeredIndexes.forEach(function (idx) {
          var value = valueAt(reqValues, idx);
          var ok = self.isEnabled(reqKey) && conditionMatches(value, req);
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
