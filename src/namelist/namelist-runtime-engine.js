(function (global) {
  'use strict';

  var ENGINE_VERSION = 'WRF Config Studio v1.0.0';

  function deepClone(value) {
    if (value === null || typeof value !== 'object') return value;
    try { return JSON.parse(JSON.stringify(value)); } catch (err) {}
    if (Array.isArray(value)) return value.slice();
    var out = {};
    Object.keys(value).forEach(function (key) { out[key] = value[key]; });
    return out;
  }

  function resolveEntries(entries, maxDom) {
    if (entries === 'max_dom' || entries === 'max_domains') return Math.max(1, maxDom || 1);
    var n = parseInt(entries, 10);
    return isNaN(n) || n < 1 ? 1 : n;
  }

  function defaultArrayEntry(field, index) {
    if (Array.isArray(field.defaultValue)) {
      if (field.defaultValue[index] !== undefined) return deepClone(field.defaultValue[index]);
      if (field.defaultValue.length) return deepClone(field.defaultValue[field.defaultValue.length - 1]);
      return '';
    }
    return deepClone(field.defaultValue);
  }

  function seedValueForField(field, maxDom) {
    var count = resolveEntries(field.entries, maxDom);
    if (count > 1) {
      var arr = [];
      for (var i = 0; i < count; i++) arr.push(defaultArrayEntry(field, i));
      return arr;
    }
    return Array.isArray(field.defaultValue) ? deepClone(field.defaultValue[0]) : deepClone(field.defaultValue);
  }

  function buildFieldIndex(catalog) {
    var index = {};
    Object.keys((catalog && catalog.groups) || {}).forEach(function (groupName) {
      (catalog.groups[groupName] || []).forEach(function (field) {
        if (field && field.key) index[field.key] = field;
      });
    });
    return index;
  }

  function asFirst(value) {
    if (Array.isArray(value)) return value.length ? value[0] : '';
    return value;
  }

  function asNumber(value) {
    value = asFirst(value);
    if (value === '' || value === null || typeof value === 'undefined') return NaN;
    var n = parseFloat(value);
    return isNaN(n) ? NaN : n;
  }


  function isBlankValue(value) {
    return value === '' || value === null || typeof value === 'undefined';
  }

  function getFirstNumeric(value) {
    value = asFirst(value);
    if (value === '' || value === null || typeof value === 'undefined') return NaN;
    var n = parseFloat(value);
    return isNaN(n) ? NaN : n;
  }

  function suggestTimeStepFromDx(dxMeters) {
    var dx = parseFloat(dxMeters);
    if (!isFinite(dx) || dx <= 0) return '';
    return Math.max(1, Math.round(6 * (dx / 1000)));
  }

  function finitePositiveNumber(value) {
    var n = parseFloat(value);
    return isFinite(n) && n > 0 ? n : NaN;
  }

  function suggestRadtFromDx(dxMeters) {
    var dx = finitePositiveNumber(dxMeters);
    if (!isFinite(dx)) return '';
    return Math.max(1, Math.round(dx / 1000));
  }

  function getLastFinitePositive(values) {
    if (!Array.isArray(values)) values = [values];
    for (var i = values.length - 1; i >= 0; i--) {
      var n = finitePositiveNumber(values[i]);
      if (isFinite(n)) return n;
    }
    return NaN;
  }

  function deriveInnermostDxMeters(snapshot, state, maxDom) {
    var snapValues = snapshot && snapshot.values ? snapshot.values : {};
    var dxValues = snapValues['domains.dx'];
    if (Array.isArray(dxValues) && dxValues.length > 1) {
      var direct = getLastFinitePositive(dxValues.slice(0, Math.max(1, maxDom || dxValues.length)));
      if (isFinite(direct)) return direct;
    }
    var stateDx = state && state.values ? state.values['domains.dx'] : undefined;
    if (Array.isArray(stateDx) && stateDx.length > 1) {
      var stateDirect = getLastFinitePositive(stateDx.slice(0, Math.max(1, maxDom || stateDx.length)));
      if (isFinite(stateDirect)) return stateDirect;
    }
    var parentRatios = snapValues['domains.parent_grid_ratio'] || (state && state.values ? state.values['domains.parent_grid_ratio'] : undefined);
    var baseDx = finitePositiveNumber(Array.isArray(dxValues) ? dxValues[0] : dxValues);
    if (!isFinite(baseDx)) baseDx = finitePositiveNumber(Array.isArray(stateDx) ? stateDx[0] : stateDx);
    if (!isFinite(baseDx)) return NaN;
    if (!Array.isArray(parentRatios)) return baseDx;
    var divisor = 1;
    var count = Math.max(1, maxDom || parentRatios.length);
    for (var i = 1; i < count && i < parentRatios.length; i++) {
      var ratio = parseInt(parentRatios[i], 10);
      if (isFinite(ratio) && ratio > 0) divisor *= ratio;
    }
    return baseDx / divisor;
  }

  function isUnsetOrSuggestedRadtValue(value) {
    if (Array.isArray(value)) return value.every(isUnsetOrSuggestedRadtValue);
    if (isBlankValue(value)) return true;
    var n = parseFloat(value);
    return isFinite(n) && n === 0;
  }

  function isUnsetOrSuggestedCudtValue(value) {
    if (Array.isArray(value)) return value.every(isUnsetOrSuggestedCudtValue);
    if (isBlankValue(value)) return true;
    var n = parseFloat(value);
    return isFinite(n) && n === 0;
  }

  function hasActiveCumulus(value) {
    if (Array.isArray(value)) return value.some(hasActiveCumulus);
    var n = parseFloat(value);
    return isFinite(n) && n > 0;
  }

  var RUN_DURATION_KEYS = [
    'time_control.run_days',
    'time_control.run_hours',
    'time_control.run_minutes',
    'time_control.run_seconds'
  ];

  function getFirstInteger(value, fallback) {
    var n = getFirstNumeric(value);
    if (!isFinite(n)) return fallback;
    return Math.trunc(n);
  }

  function makeUtcTimestamp(parts) {
    if (!parts) return NaN;
    var year = getFirstInteger(parts.year, NaN);
    var month = getFirstInteger(parts.month, NaN);
    var day = getFirstInteger(parts.day, NaN);
    var hour = getFirstInteger(parts.hour, 0);
    var minute = getFirstInteger(parts.minute, 0);
    var second = getFirstInteger(parts.second, 0);
    if (!isFinite(year) || !isFinite(month) || !isFinite(day)) return NaN;
    if (month < 1 || month > 12 || day < 1 || day > 31) return NaN;
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) return NaN;
    return Date.UTC(year, month - 1, day, hour, minute, second);
  }

  function decomposeSeconds(totalSeconds) {
    var remaining = Math.max(0, Math.floor(totalSeconds));
    var days = Math.floor(remaining / 86400);
    remaining -= days * 86400;
    var hours = Math.floor(remaining / 3600);
    remaining -= hours * 3600;
    var minutes = Math.floor(remaining / 60);
    var seconds = remaining - minutes * 60;
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
  }

  // Compatibility validation remains intentionally disabled in WRF Config Studio v1.0.0.
  // The runtime engine remains responsible for default seeding, max_dom reconciliation,
  // WPS overlay, metadata delivery, and export state. Compatibility metadata remains
  // available in the catalog for user reference, but no rule blocks, warnings, auto-fixes,
  // or row highlights are generated in this build.
  var RULES = [];

  function createNamelistRuntimeEngine(options) {
    options = options || {};
    var catalog = options.catalog || { groups: {} };
    var fieldIndex = buildFieldIndex(catalog);
    var defaultEnabledFields = options.defaultEnabledFields || {};
    var coreGroups = options.coreGroups || {};
    var groupOrder = typeof options.groupOrder === 'function' ? options.groupOrder : function (names) { return names.slice().sort(); };
    var state = options.state || { values: {}, enabled: {}, expanded: {}, subsectionExpanded: {} };
    state.userEditedFields = state.userEditedFields || {};
    state.suggestedFields = state.suggestedFields || {};
    state.suggestionNotes = state.suggestionNotes || {};
    var maxDom = Math.max(1, options.maxDom || 1);

    function reset(nextMaxDom) {
      maxDom = Math.max(1, nextMaxDom || maxDom || 1);
      state.enabled = {};
      state.values = {};
      state.expanded = {};
      state.subsectionExpanded = {};
      state.userEditedFields = state.userEditedFields || {};
      state.suggestedFields = {};
      state.suggestionNotes = {};
      state.hasSeededDefaults = false;
    }

    function reconcileArrayLengths() {
      Object.keys(catalog.groups || {}).forEach(function (groupName) {
        (catalog.groups[groupName] || []).forEach(function (field) {
          var count = resolveEntries(field.entries, maxDom);
          var current = state.values[field.key];
          if (count > 1) {
            if (!Array.isArray(current)) current = [current];
            while (current.length < count) current.push(current.length ? deepClone(current[current.length - 1]) : defaultArrayEntry(field, current.length));
            state.values[field.key] = current.slice(0, count);
          }
        });
      });
    }

    function seedDefaults(nextMaxDom) {
      reset(nextMaxDom);
      groupOrder(Object.keys(catalog.groups || {})).forEach(function (groupName) {
        state.expanded[groupName] = !!coreGroups[groupName];
        (catalog.groups[groupName] || []).forEach(function (field) {
          state.values[field.key] = seedValueForField(field, maxDom);
          state.enabled[field.key] = !!defaultEnabledFields[field.key];
        });
      });
      state.hasSeededDefaults = true;
      reconcileArrayLengths();
    }

    function applySuggestedTimeStepFromWps(snapshot) {
      var key = 'domains.time_step';
      var field = fieldIndex[key];
      if (!field || !snapshot || !snapshot.values) return;
      if (state.userEditedFields && state.userEditedFields[key]) return;
      var current = state.values[key];
      if (!isBlankValue(current)) return;
      var dx = getFirstNumeric(snapshot.values['domains.dx']);
      var suggested = suggestTimeStepFromDx(dx);
      if (suggested === '') return;
      state.values[key] = suggested;
      state.enabled[key] = true;
      state.suggestedFields[key] = true;
      state.suggestionNotes[key] = 'Suggested from 6 × d01 dx_km: dx=' + dx + ' m → time_step=' + suggested + ' s. This is a starting point only and can be changed by the user.';
    }

    function applySuggestedRadtFromWps(snapshot) {
      var key = 'physics.radt';
      var field = fieldIndex[key];
      if (!field || !snapshot || !snapshot.values) return;
      if (state.userEditedFields && state.userEditedFields[key]) return;
      var current = state.values[key];
      var alreadySuggested = state.suggestedFields && state.suggestedFields[key];
      if (!alreadySuggested && !isUnsetOrSuggestedRadtValue(current)) return;
      var innerDx = deriveInnermostDxMeters(snapshot, state, maxDom);
      var suggested = suggestRadtFromDx(innerDx);
      if (suggested === '') return;
      var count = resolveEntries(field.entries, maxDom);
      state.values[key] = count > 1 ? Array(count).fill(suggested) : suggested;
      state.enabled[key] = true;
      state.suggestedFields[key] = true;
      state.suggestionNotes[key] = 'Suggested from innermost active dx using radt ≈ 1 minute per km: innermost dx=' + innerDx + ' m → radt=' + suggested + ' min. The same value is applied to all active domains and can be changed by the user.';
    }

    function hasUserEditedAny(keys) {
      if (!state.userEditedFields) return false;
      return keys.some(function (key) { return !!state.userEditedFields[key]; });
    }

    function applySuggestedCudtFromWps(snapshot) {
      var key = 'physics.cudt';
      var field = fieldIndex[key];
      if (!field) return;
      if (state.userEditedFields && state.userEditedFields[key]) return;
      var current = state.values[key];
      var alreadySuggested = state.suggestedFields && state.suggestedFields[key];
      if (!alreadySuggested && !isUnsetOrSuggestedCudtValue(current)) return;
      var cu = state.values['physics.cu_physics'];
      var active = hasActiveCumulus(cu);
      var suggested = active ? 5 : 0;
      var count = resolveEntries(field.entries, maxDom);
      state.values[key] = count > 1 ? Array(count).fill(suggested) : suggested;
      state.enabled[key] = true;
      state.suggestedFields[key] = true;
      state.suggestionNotes[key] = active
        ? 'Suggested starting point: cudt=5 minutes for domains using cumulus parameterization. This is user-editable and not a compatibility rule.'
        : 'Suggested starting point: cudt=0 because no active cumulus scheme is currently selected. This is user-editable and not a compatibility rule.';
    }

    function applySuggestedRunDurationFromWps(snapshot) {
      if (!snapshot || !snapshot.values) return;
      if (hasUserEditedAny(RUN_DURATION_KEYS)) return;
      var startMs = makeUtcTimestamp({
        year: snapshot.values['time_control.start_year'],
        month: snapshot.values['time_control.start_month'],
        day: snapshot.values['time_control.start_day'],
        hour: snapshot.values['time_control.start_hour'],
        minute: snapshot.values['time_control.start_minute'],
        second: snapshot.values['time_control.start_second']
      });
      var endMs = makeUtcTimestamp({
        year: snapshot.values['time_control.end_year'],
        month: snapshot.values['time_control.end_month'],
        day: snapshot.values['time_control.end_day'],
        hour: snapshot.values['time_control.end_hour'],
        minute: snapshot.values['time_control.end_minute'],
        second: snapshot.values['time_control.end_second']
      });
      if (!isFinite(startMs) || !isFinite(endMs) || endMs < startMs) return;
      var parts = decomposeSeconds((endMs - startMs) / 1000);
      var values = {
        'time_control.run_days': parts.days,
        'time_control.run_hours': parts.hours,
        'time_control.run_minutes': parts.minutes,
        'time_control.run_seconds': parts.seconds
      };
      var note = 'Suggested from namelist.wps start_date/end_date duration: ' +
        parts.days + ' d ' + parts.hours + ' h ' + parts.minutes + ' m ' + parts.seconds +
        ' s. This is informational and user-editable; editing any run_* value stops automatic duration updates.';
      RUN_DURATION_KEYS.forEach(function (key) {
        if (!fieldIndex[key]) return;
        state.values[key] = values[key];
        state.enabled[key] = true;
        state.suggestedFields[key] = true;
        state.suggestionNotes[key] = note;
      });
    }

    function applyWpsOverlay(snapshot) {
      if (!snapshot || !snapshot.values) return;
      Object.keys(snapshot.values).forEach(function (key) {
        var field = fieldIndex[key];
        if (!field) return;
        var incoming = snapshot.values[key];
        if (incoming === null || typeof incoming === 'undefined' || incoming === '') return;
        var count = resolveEntries(field.entries, maxDom);
        if (count > 1) {
          var arr = Array.isArray(incoming) ? incoming.slice(0, count) : [incoming];
          while (arr.length < count) arr.push(arr.length ? deepClone(arr[arr.length - 1]) : '');
          state.values[key] = arr.slice(0, count);
        } else {
          state.values[key] = Array.isArray(incoming) ? incoming[0] : incoming;
        }
      });
      if (fieldIndex['domains.parent_time_step_ratio'] && Array.isArray(state.values['domains.parent_grid_ratio'])) {
        state.values['domains.parent_time_step_ratio'] = state.values['domains.parent_grid_ratio'].slice(0, maxDom);
      }
      if (fieldIndex['domains.max_dom']) state.values['domains.max_dom'] = snapshot.maxDom || maxDom;
      applySuggestedTimeStepFromWps(snapshot);
      applySuggestedRadtFromWps(snapshot);
      applySuggestedCudtFromWps(snapshot);
      applySuggestedRunDurationFromWps(snapshot);
    }

    function initialize(nextMaxDom, wpsSnapshot) {
      seedDefaults(nextMaxDom);
      applyWpsOverlay(wpsSnapshot);
      return state;
    }

    function isRequiredBlankField(field) {
      if (!field) return false;
      var sem = field.semantics || {};
      return !!(sem.requiresUserValue || sem.defaultSemantics === 'no_published_default');
    }

    function getBadMaxDomFieldKeys() {
      var keys = [];
      Object.keys(fieldIndex).forEach(function (key) {
        var field = fieldIndex[key];
        if (resolveEntries(field.entries, maxDom) <= 1) return;
        var value = state.values[key];
        if (!Array.isArray(value) || value.length !== maxDom) keys.push(key);
      });
      return keys;
    }

    function hasBadMaxDomLengths() {
      return getBadMaxDomFieldKeys().length > 0;
    }

    function getBlankRequiredFieldKeys() {
      var keys = [];
      Object.keys(fieldIndex).forEach(function (key) {
        var field = fieldIndex[key];
        if (!isRequiredBlankField(field)) return;
        if (!state.enabled[key]) return;
        var value = state.values[key];
        var blank = Array.isArray(value) ? value.some(isBlankValue) : isBlankValue(value);
        if (blank) keys.push(key);
      });
      return keys;
    }

    function hasBlankRequiredFields() {
      return getBlankRequiredFieldKeys().length > 0;
    }

    function hasUserValue(key) {
      if (!fieldIndex[key] || !state.enabled[key]) return false;
      var value = state.values[key];
      if (Array.isArray(value)) return value.some(function (v) { return v !== '' && v !== null && typeof v !== 'undefined'; });
      return value !== '' && value !== null && typeof value !== 'undefined';
    }

    function makeContext() {
      return {
        number: function (key) { return asNumber(state.values[key]); },
        value: function (key) { return asFirst(state.values[key]); },
        hasUserValue: hasUserValue,
        hasBadMaxDomLengths: hasBadMaxDomLengths,
        hasBlankRequiredFields: hasBlankRequiredFields,
        getBadMaxDomFieldKeys: getBadMaxDomFieldKeys,
        getBlankRequiredFieldKeys: getBlankRequiredFieldKeys
      };
    }

    function validate() {
      return [];
    }

    function normalizeValueForField(field, value) {
      if (!field) return value;
      var count = resolveEntries(field.entries, maxDom);
      if (count > 1) {
        var arr = Array.isArray(value) ? value.slice(0, count) : [];
        if (!arr.length) arr.push(value);
        while (arr.length < count) arr.push(arr.length ? deepClone(arr[arr.length - 1]) : defaultArrayEntry(field, arr.length));
        return arr.slice(0, count);
      }
      return Array.isArray(value) ? value[0] : value;
    }

    function applyFix(issueId) {
      return false;
    }

    function markUserEdited(key) {
      if (!key) return;
      state.userEditedFields = state.userEditedFields || {};
      var keys = RUN_DURATION_KEYS.indexOf(key) !== -1 ? RUN_DURATION_KEYS : [key];
      keys.forEach(function (editKey) {
        state.userEditedFields[editKey] = true;
        if (state.suggestedFields) delete state.suggestedFields[editKey];
        if (state.suggestionNotes) delete state.suggestionNotes[editKey];
      });
    }

    function getSuggestionNote(key) {
      return state.suggestionNotes ? state.suggestionNotes[key] : null;
    }

    return {
      version: ENGINE_VERSION,
      initialize: initialize,
      seedDefaults: seedDefaults,
      reconcileArrayLengths: reconcileArrayLengths,
      applyWpsOverlay: applyWpsOverlay,
      validate: validate,
      applyFix: applyFix,
      markUserEdited: markUserEdited,
      getSuggestionNote: getSuggestionNote,
      getSuggestedFields: function () { return Object.assign({}, state.suggestedFields || {}); },
      getRules: function () { return RULES.slice(); },
      getState: function () { return state; },
      getMaxDom: function () { return maxDom; }
    };
  }

  global.NamelistRuntimeEngine = {
    version: ENGINE_VERSION,
    create: createNamelistRuntimeEngine,
    resolveEntries: resolveEntries,
    deepClone: deepClone,
    rules: RULES
  };
})(typeof window !== 'undefined' ? window : this);
