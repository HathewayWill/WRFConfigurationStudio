/*
 * WRF Configuration Studio WPS helper tools.
 *
 * This file provides browser-side checks and helper calculations for WPS-style
 * grid configuration. It does not run WPS executables. The helpers are intended
 * to catch common setup issues before users export namelist.wps.
 */
(function () {
  const WPS_TOOLS_VERSION = (window.WRF_CONFIG_STUDIO_VERSION_TEXT || window.WRF_DOMAIN_WIZARD_VERSION_TEXT || 'v1.0.0');

  function getStoredSetting(key, fallback) {
    try {
      const v = localStorage.getItem('wrfdw.tools.' + key);
      if (v !== null) return v;
    } catch (e) {}
    return fallback;
  }

  function setStoredSetting(key, value) {
    try { localStorage.setItem('wrfdw.tools.' + key, value); } catch (e) {}
  }

  function q(sel, root) { return (root || document).querySelector(sel); }
  function qa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
  function num(input) { return input ? parseFloat(input.value) : NaN; }
  function intVal(input) { return input ? parseInt(input.value, 10) : NaN; }
  function round3(v) { return Math.round(v * 1000) / 1000; }
  function normLon(v) {
    if (!isFinite(v)) return v;
    let x = ((v + 180) % 360 + 360) % 360 - 180;
    if (x === -180 && v > 0) x = 180;
    return round3(x);
  }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function ensureCameraStyleTooltip(el) {
    if (!el || !window.jQuery || typeof window.jQuery.fn.tooltip !== 'function') return;
    try {
      el.removeAttribute('data-native-tooltip');
      const $el = window.jQuery(el);
      $el.tooltip('dispose');
      $el.tooltip({ container: 'body', trigger: 'hover', html: true });
    } catch (err) {}
  }
  function refreshToolsTooltips(root) {
    const scope = root || document;
    qa('[title]', scope).forEach(function (el) { ensureCameraStyleTooltip(el); });
  }
  function disposeBootstrapTooltips(root) {
    const scope = root || document;
    qa('[title]', scope).forEach(function (el) {
      try {
        if (window.bootstrap && window.bootstrap.Tooltip && typeof window.bootstrap.Tooltip.getInstance === 'function') {
          const instance = window.bootstrap.Tooltip.getInstance(el);
          if (instance) instance.dispose();
        }
      } catch (err) {}
      try {
        if (window.jQuery && typeof window.jQuery.fn.tooltip === 'function') {
          window.jQuery(el).tooltip('dispose');
        }
      } catch (err) {}
    });
    qa('.tooltip').forEach(function (tip) {
      try { tip.remove(); } catch (err) {}
    });
  }
  function snapDim(v, ratio) {
    if (!isFinite(v) || !isFinite(ratio) || ratio < 1) return v;
    const n = Math.max(1, Math.round((v - 1) / ratio));
    return n * ratio + 1;
  }
  function getVisibleGridRows() {
    return qa('#grids .container-grid').filter(el => el.id !== 'grid_template' && el.offsetParent !== null);
  }
  // Read one visible WPS grid row into a normalized object used by helper
  // checks. Keeping this in one place avoids scattered DOM parsing.
  function getGridData(row) {
    return {
      row,
      ratio: intVal(q('input[name="parent_grid_ratio"]', row)),
      i: intVal(q('input[name="i_parent_start"]', row)),
      j: intVal(q('input[name="j_parent_start"]', row)),
      e_we: intVal(q('input[name="e_we"]', row)),
      e_sn: intVal(q('input[name="e_sn"]', row)),
      geog: ((q('[data-name="geog_data_res"]', row) || {}).textContent || '').trim(),
      label: ((q('.grid-label', row) || {}).textContent || '').trim() || 'grid'
    };
  }
  // Provide a user-facing starting suggestion for map projection. This is
  // guidance only; final projection choice remains a modeling decision.
  function recommendedProjection(refLat, eWe, eSn) {
    const a = Math.abs(refLat);
    if (!isFinite(a)) return 'lambert';
    if (a >= 55) return 'polar';
    if (a <= 20 || (isFinite(eWe) && isFinite(eSn) && eWe > eSn * 1.4 && a < 35)) return 'mercator';
    return 'lambert';
  }
  function projectionReason(current, suggested, refLat, eWe, eSn) {
    const a = Math.abs(refLat);
    if (suggested === 'polar') return 'high-latitude domains usually fit polar stereographic best';
    if (suggested === 'mercator') {
      if (a <= 20) return 'low-latitude domains usually fit mercator best';
      if (isFinite(eWe) && isFinite(eSn) && eWe > eSn * 1.4) return 'west-east elongated domains often fit mercator well';
      return 'mercator is often a better fit for this domain';
    }
    if (suggested === 'lambert') return 'mid-latitude domains usually fit lambert conformal best';
    if (suggested === 'lat-lon') return 'global ARW domains should use lat-lon';
    return 'this projection is usually a better fit';
  }
  function getProjectionRecommendation(state) {
    const mapProj = state.mapProj;
    const suggested = recommendedProjection(state.refLat, state.rootEwe, state.rootEsn);
    const hasRegionalDxDy = isFinite(state.dx) && isFinite(state.dy) && state.dx > 0 && state.dy > 0;
    const maybeGlobal = mapProj === 'lat-lon' && !hasRegionalDxDy;
    if (maybeGlobal) return null;
    if (mapProj !== 'lat-lon' && suggested !== mapProj) {
      return {
        suggested: suggested,
        reason: projectionReason(mapProj, suggested, state.refLat, state.rootEwe, state.rootEsn)
      };
    }
    return null;
  }
  function computeProjectionAdvice(state) {
    const advice = [];
    const refLat = state.refLat;
    const mapProj = state.mapProj;
    const eWe = state.rootEwe;
    const eSn = state.rootEsn;
    const hasRegionalDxDy = isFinite(state.dx) && isFinite(state.dy) && state.dx > 0 && state.dy > 0;
    const looksGlobalLatLon = mapProj === 'lat-lon' && !hasRegionalDxDy;
    const suggested = recommendedProjection(refLat, eWe, eSn);
    if (mapProj !== 'lat-lon' && mapProj !== suggested) {
      advice.push({ level: 'warning', text: 'Projection fit: ' + suggested + ' is usually a better match for ref_lat=' + round3(refLat) + '°.' });
    } else {
      advice.push({ level: 'valid', text: 'Projection fit looks reasonable for the current domain latitude.' });
    }
    if (mapProj === 'lat-lon') {
      if (looksGlobalLatLon) {
        advice.push({ level: 'valid', text: 'lat-lon global mode is supported. Global ARW domains should omit dx and dy, and ref_lat/ref_lon do not apply.' });
      } else {
        advice.push({ level: 'valid', text: 'lat-lon regional mode is supported. dx and dy are in degrees, and ref_lat/ref_lon should be set.' });
      }
      advice.push({ level: 'info', text: 'lat-lon is the only ARW projection that supports global domains.' });
      if (!looksGlobalLatLon && Math.abs(refLat) > 35) {
        advice.push({ level: 'warning', text: 'Regional lat-lon away from the computational equator can increase map-scale distortion.' });
      }
    } else {
      advice.push({ level: 'info', text: 'For ' + mapProj + ', dx and dy should be in meters.' });
    }
    if (mapProj === 'polar' && Math.abs(refLat) < 45) {
      advice.push({ level: 'warning', text: 'Polar stereographic is best suited for high-latitude domains.' });
    }
    if (mapProj === 'mercator' && Math.abs(refLat) > 35) {
      advice.push({ level: 'warning', text: 'Mercator is usually best for low latitudes or west-east oriented domains.' });
    }
    if (mapProj === 'lambert' && (Math.abs(refLat) < 15 || Math.abs(refLat) > 75)) {
      advice.push({ level: 'warning', text: 'Lambert conformal is usually best for mid-latitudes.' });
    }
    return advice;
  }
  function collectState() {
    const form = q('#wps-form');
    const rows = getVisibleGridRows();
    const first = rows[0] ? getGridData(rows[0]) : {};
    return {
      form,
      rows,
      mapProj: (q('select[name="map_proj"]', form) || {}).value,
      refLat: num(q('input[name="ref_lat"]', form)),
      refLon: num(q('input[name="ref_lon"]', form)),
      dx: num(q('input[name="dx"]', form)),
      dy: num(q('input[name="dy"]', form)),
      rootEwe: first.e_we,
      rootEsn: first.e_sn,
      rootGeog: first.geog || ''
    };
  }
  function applyChanges() {
    const updateBtn = q('#tools-update-domain') || q('#update-domain');
    if (!updateBtn) return;
    updateBtn.click();
  }

  function sanitizeNestRows(showToast) {
    const rows = getVisibleGridRows();
    let changed = 0;
    rows.forEach((row, idx) => {
      const ratioInput = q('input[name="parent_grid_ratio"]', row);
      const eWeInput = q('input[name="e_we"]', row);
      const eSnInput = q('input[name="e_sn"]', row);
      const iInput = q('input[name="i_parent_start"]', row);
      const jInput = q('input[name="j_parent_start"]', row);
      if (!ratioInput || !eWeInput || !eSnInput || !iInput || !jInput) return;
      const ratio = Math.max(1, intVal(ratioInput) || 1);
      if (idx === 0) {
        if (intVal(iInput) !== 1) { iInput.value = 1; changed++; }
        if (intVal(jInput) !== 1) { jInput.value = 1; changed++; }
        return;
      }
      const parent = getGridData(rows[idx - 1]);
      let eWe = intVal(eWeInput) || ratio + 1;
      let eSn = intVal(eSnInput) || ratio + 1;
      const snappedEwe = snapDim(eWe, ratio);
      const snappedEsn = snapDim(eSn, ratio);
      if (snappedEwe !== eWe) { eWeInput.value = snappedEwe; eWe = snappedEwe; changed++; }
      if (snappedEsn !== eSn) { eSnInput.value = snappedEsn; eSn = snappedEsn; changed++; }
      const spanI = Math.round((eWe - 1) / ratio);
      const spanJ = Math.round((eSn - 1) / ratio);
      const maxI = Math.max(1, (parent.e_we || 1) - spanI);
      const maxJ = Math.max(1, (parent.e_sn || 1) - spanJ);
      const safeI = clamp(intVal(iInput) || 1, 1, maxI);
      const safeJ = clamp(intVal(jInput) || 1, 1, maxJ);
      if (safeI !== intVal(iInput)) { iInput.value = safeI; changed++; }
      if (safeJ !== intVal(jInput)) { jInput.value = safeJ; changed++; }
    });
    if (changed && showToast) {
      showToast.textContent = 'Snap adjusted ' + changed + ' nest value' + (changed === 1 ? '' : 's') + '.';
      showToast.className = 'wps-tools-toast show';
      setTimeout(() => showToast.classList.remove('show'), 2200);
    }
  }
  function switchProjectionTo(newProj, showToast) {
    const form = q('#wps-form');
    if (!form) return;
    const mapProjSelect = q('select[name="map_proj"]', form);
    if (!mapProjSelect || !newProj) return;
    mapProjSelect.value = newProj;
    mapProjSelect.dispatchEvent(new Event('change', { bubbles: true }));
    applyProjectionAutofill(showToast);
    applyChanges();

    qa('#new-domain, #open-wps, #button-wps-save, #reset-domain, #save-png, #button-save-legacy-namelist-input, #button-copy-legacy-namelist-input, #button-copy-wps, #button-download-wps, #button-save-namelist-input, #button-copy-namelist-input').forEach(function (btn) {
      btn.removeAttribute('data-native-tooltip');
    });
    const btnNew = q('#new-domain'); if (btnNew) btnNew.title = 'Create a new domain configuration.';
    const btnOpen = q('#open-wps'); if (btnOpen) btnOpen.title = 'Open a saved namelist.wps file.';
    const btnNml = q('#button-wps-save'); if (btnNml) { btnNml.title = 'Open the namelist.wps export dialog.'; btnNml.setAttribute('data-native-tooltip', 'true'); }
    const btnReset = q('#reset-domain'); if (btnReset) { btnReset.title = 'Restore the current editor to its last loaded state.'; btnReset.setAttribute('data-native-tooltip', 'true'); }
    const btnCam = q('#save-png'); if (btnCam) { btnCam.title = 'Capture an image of the current map view.'; btnCam.setAttribute('data-native-tooltip', 'true'); }
    const exportSave = q('#button-save-legacy-namelist-input'); if (exportSave) exportSave.title = 'Save the current text output to a local file.';
    const exportCopy = q('#button-copy-legacy-namelist-input'); if (exportCopy) exportCopy.title = 'Copy the current text output to the clipboard.';
    qa('[data-dismiss="modal"].btn-secondary').forEach(function (btn) { btn.title = 'Close this dialog'; btn.removeAttribute('data-native-tooltip'); });

    refreshToolsPanel();
  }
  function domainOptimizedLambertParallels(refLat) {
    const base = clamp(refLat, -84, 84);
    const span = Math.abs(base) >= 25 ? 5 : 8;
    let lat1 = round3(clamp(base - span, -89, 89));
    let lat2 = round3(clamp(base + span, -89, 89));
    if (lat1 === lat2) lat2 = round3(clamp(lat2 + (base >= 0 ? 1 : -1), -89, 89));
    return { truelat1: lat1, truelat2: lat2 };
  }
  function wrfConventionalLambertParallels() {
    return { truelat1: 30.0, truelat2: 60.0 };
  }
  function normalizeLambertMode(mode) {
    if (mode === 'domain_optimized') return 'domain';
    if (mode === 'wrf_conventional') return 'wrf';
    if (mode === 'legacy' || mode === 'domain' || mode === 'wrf') return mode;
    return 'legacy';
  }
  function getStoredLambertMode() {
    let raw = 'legacy';
    try {
      raw = localStorage.getItem('wrfdw.tools.lambertMode') || 'legacy';
    } catch (e) {}
    return normalizeLambertMode(raw);
  }
  function setStoredLambertMode(mode) {
    const normalized = normalizeLambertMode(mode);
    try { localStorage.setItem('wrfdw.tools.lambertMode', normalized); } catch (e) {}
    return normalized;
  }
  let lambertModePendingApply = false;

  function getLambertParallelsMode() {
    const select = q('#tools-lambert-parallels-mode');
    if (select && select.value) return normalizeLambertMode(select.value);
    return getStoredLambertMode();
  }

  function needsInitialLambertAutofill() {
    const form = q('#wps-form');
    if (!form) return false;
    const mapProj = (q('select[name="map_proj"]', form) || {}).value;
    if (mapProj !== 'lambert') return false;
    const refLat = num(q('input[name="ref_lat"]', form));
    const refLon = num(q('input[name="ref_lon"]', form));
    const t1 = num(q('input[name="truelat1"]', form));
    const t2 = num(q('input[name="truelat2"]', form));
    if (!isFinite(refLat) || !isFinite(refLon)) return false;
    if (!isFinite(t1) || !isFinite(t2)) return true;
    return Math.abs(t1 - t2) < 1e-9;
  }
  function applyInitialLambertDefaults() {
    if (!needsInitialLambertAutofill()) return;
    applyProjectionAutofill();
    applyChanges();
  }
  function scheduleInitialLambertDefaults() {
    [0, 80, 180, 350, 700].forEach(function (delay) {
      window.setTimeout(function () {
        applyInitialLambertDefaults();
      }, delay);
    });
  }
  function applyProjectionAutofill(showToast) {
    const form = q('#wps-form');
    if (!form) return;
    const mapProj = (q('select[name="map_proj"]', form) || {}).value;
    const refLatInput = q('input[name="ref_lat"]', form);
    const refLonInput = q('input[name="ref_lon"]', form);
    const truelat1Input = q('input[name="truelat1"]', form);
    const truelat2Input = q('input[name="truelat2"]', form);
    const standLonInput = q('input[name="stand_lon"]', form);
    const poleLatInput = q('input[name="pole_lat"]', form);
    const poleLonInput = q('input[name="pole_lon"]', form);
    const refLat = num(refLatInput);
    const refLon = normLon(num(refLonInput));
    if (!isFinite(refLat) || !isFinite(refLon)) return;
    let helperMode = mapProj;
    if (mapProj === 'lambert') {
      const lambertMode = getLambertParallelsMode();
      if (lambertMode === 'wrf') {
        const conventional = wrfConventionalLambertParallels();
        truelat1Input.value = conventional.truelat1;
        truelat2Input.value = conventional.truelat2;
        helperMode = 'lambert (WRF standard (30/60))';
      } else if (lambertMode === 'domain') {
        const optimized = domainOptimizedLambertParallels(refLat);
        truelat1Input.value = optimized.truelat1;
        truelat2Input.value = optimized.truelat2;
        helperMode = 'lambert (domain-optimized parallels)';
      } else {
        truelat1Input.value = round3(refLat);
        truelat2Input.value = round3(clamp(refLat + (refLat >= 0 ? 15 : -15), -89, 89));
        helperMode = 'lambert (legacy helper)';
      }
      standLonInput.value = refLon;
    } else if (mapProj === 'mercator') {
      truelat1Input.value = round3(clamp(refLat, -80, 80));
      standLonInput.value = refLon;
    } else if (mapProj === 'polar') {
      const targetLat = Math.abs(refLat) < 45 ? (refLat >= 0 ? 60 : -60) : refLat;
      truelat1Input.value = round3(clamp(targetLat, -89, 89));
      standLonInput.value = refLon;
    } else if (mapProj === 'lat-lon') {
      const poleLat = refLat >= 0 ? 90 - refLat : 90 + refLat;
      poleLatInput.value = round3(clamp(poleLat, -90, 90));
      poleLonInput.value = refLat >= 0 ? 180 : 0;
      standLonInput.value = round3(refLat >= 0 ? -refLon : 180 - refLon);
    }
    lambertModePendingApply = false;
    if (showToast) {
      showToast.textContent = 'Projection helper filled recommended parameters for ' + helperMode + '.';
      showToast.className = 'wps-tools-toast show';
      setTimeout(() => showToast.classList.remove('show'), 2200);
    }
  }
  function buildValidation(state) {
    const issues = [];
    state.rows.forEach((row, idx) => {
      const g = getGridData(row);
      if (idx > 0) {
        if (((g.e_we - 1) % g.ratio) !== 0) issues.push({ level: 'warning', text: g.label + ': e_we should equal 1 + n×parent_grid_ratio.' });
        if (((g.e_sn - 1) % g.ratio) !== 0) issues.push({ level: 'warning', text: g.label + ': e_sn should equal 1 + n×parent_grid_ratio.' });
        const parent = getGridData(state.rows[idx - 1]);
        const spanI = Math.round((g.e_we - 1) / g.ratio);
        const spanJ = Math.round((g.e_sn - 1) / g.ratio);
        if (g.i < 1 || g.j < 1 || g.i + spanI > parent.e_we || g.j + spanJ > parent.e_sn) {
          issues.push({ level: 'error', text: g.label + ': nest exceeds the parent grid bounds.' });
        } else {
          issues.push({ level: 'valid', text: g.label + ': nest alignment inside parent looks valid.' });
        }
      }
      if (/usgs_lakes/.test(g.geog)) {
        issues.push({ level: 'info', text: g.label + ': USGS land-use implies num_land_cat=24 in namelist.input.' });
      }
      if (/^(default|modis|lowres)/.test(g.geog) && isFinite(state.dx) && state.dx >= 40000) {
        issues.push({ level: 'info', text: g.label + ': consider GWDO-prefixed geog_data_res such as 30m+default for coarser domains if gravity-wave drag is used.' });
      }
    });
    return issues.concat(computeProjectionAdvice(state));
  }
  
  function renderProjectionSuggestion(state, force) {
    const panel = q('#wps-tools-panel');
    if (!panel) return;
    const recommendationBox = q('#wps-tools-recommendation', panel);
    if (!recommendationBox) return;
    const recommendation = getProjectionRecommendation(state);
    if (!recommendation) {
      if (force) {
        recommendationBox.style.display = '';
        recommendationBox.innerHTML = '<div class="small"><strong>Projection check:</strong> current projection looks reasonable for this domain.</div>';
      } else {
        recommendationBox.style.display = 'none';
        recommendationBox.innerHTML = '';
      }
      return;
    }
    recommendationBox.style.display = '';
    recommendationBox.innerHTML = '<div class="small d-flex align-items-center justify-content-between"><div><strong>Suggested projection:</strong> ' + recommendation.suggested + '<br><span class="text-muted">' + recommendation.reason + '.</span></div></div><button id="tools-switch-projection" type="button" class="btn btn-sm btn-outline-primary mt-2" data-proj="' + recommendation.suggested + '" title="Switch to the recommended map projection, fill its projection parameters, and update the domain.">Switch to ' + recommendation.suggested + '</button>';
    const switchBtn = q('#tools-switch-projection', recommendationBox);
    if (switchBtn) ensureCameraStyleTooltip(switchBtn);
  }

  function ensureSuggestProjectionButton() {
    const form = q('#wps-form');
    if (!form) return;
    const mapProjSelect = q('select[name="map_proj"]', form);
    if (!mapProjSelect) return;
    if (q('#tools-suggest-projection-inline', form)) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'tools-suggest-projection-inline';
    btn.className = 'btn btn-sm btn-outline-primary ml-1';
    btn.textContent = 'Suggest';
    btn.title = 'Check whether this domain would work better with Lambert, Mercator, or Polar based on latitude and shape.';
    mapProjSelect.insertAdjacentElement('afterend', btn);
    ensureCameraStyleTooltip(btn);
    btn.addEventListener('click', function () {
      renderProjectionSuggestion(collectState(), true);
      refreshToolsTooltips(document);
    });
  }


  function renderToolsPanel() {
    const mount = q('#container-wps-form');
    const topButtons = q('.wps-top-buttons');
    if (!mount || !topButtons || q('#wps-tools-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'wps-tools-panel';
    panel.className = 'alert alert-secondary py-2 px-2 mt-2 mb-2';
    panel.innerHTML = [
      '<div class="d-flex justify-content-between align-items-center mb-2">',
      '<div><strong>Domain intelligence</strong> <span class="badge badge-info">' + WPS_TOOLS_VERSION + '</span></div>',
      '</div>',
      '<div class="wps-tools-actions-row mb-2">',
      '<label class="mb-0 small wps-tools-inline-toggle" title="Automatically refill projection parameters whenever map_proj changes. Uses the current domain center and projection type."><input id="tools-auto-fill-on-proj" type="checkbox"> auto-fill when projection changes</label>',
      '<label class="mb-0 small wps-tools-inline-toggle" title="<b>Lambert parallels mode</b><br><br><b>Legacy (default)</b><br>truelat1 = ref_lat<br>truelat2 = ref_lat ± 15 by hemisphere<br><br><b>Domain-optimized</b><br>Brackets the center latitude to reduce local distortion<br><br><b>WRF standard (30/60)</b><br>truelat1 = 30<br>truelat2 = 60<br>Matches the Users Guide example">Lambert parallels mode <select id="tools-lambert-parallels-mode" class="custom-select custom-select-sm ml-1" style="width:auto; display:inline-block;" aria-label="Lambert parallels mode"><option value="legacy">Legacy (default)</option><option value="domain">Domain-optimized</option><option value="wrf">WRF standard (30/60)</option></select></label>',
      '<button id="tools-autofill-proj" type="button" class="btn btn-sm btn-outline-primary" title="Fill projection parameters using the current projection and domain center, then update the domain.">Auto-fill projection</button>',
      '<button id="tools-snap-nests" type="button" class="btn btn-sm btn-outline-primary" title="Snap nested-domain size and placement to valid parent-grid spacing, then update the domain.">Snap nest values</button>',
      '</div>',
      '<div id="tools-lambert-mode-cue" class="small text-muted mb-2" title="The Lambert parallels mode changes what the Auto-fill projection helper will apply to truelat1 and truelat2.">Lambert parallels mode changes what <strong>Auto-fill projection</strong> and <strong>Update</strong> will apply to truelat1 and truelat2.</div>',
      '<div id="wps-tools-recommendation" class="wps-tools-recommendation mb-2" style="display:none"></div>',
      '<div id="wps-tools-summary" class="small mb-2"></div>',
      '<ul id="wps-tools-issues" class="wps-tools-issues mb-0"></ul>',
      '<div id="wps-tools-toast" class="wps-tools-toast"></div>'
    ].join('');
    topButtons.insertAdjacentElement('afterend', panel);

    const lambertModeSelect = q('#tools-lambert-parallels-mode', panel);
    if (lambertModeSelect) {
      lambertModeSelect.value = getStoredLambertMode();
      lambertModeSelect.addEventListener('change', function () {
        setStoredLambertMode(lambertModeSelect.value);
        lambertModePendingApply = true;
        refreshToolsPanel();
      });
    }

    q('#tools-autofill-proj', panel).addEventListener('click', function () {
      applyProjectionAutofill(q('#wps-tools-toast'));
      applyChanges();
      scheduleRefresh();
    });

    q('#tools-snap-nests', panel).addEventListener('click', function () {
      sanitizeNestRows(q('#wps-tools-toast'));
      applyChanges();
      scheduleRefresh();
    });

    panel.addEventListener('click', function (e) {
      const btn = e.target.closest('#tools-switch-projection');
      if (!btn) return;
      switchProjectionTo(btn.getAttribute('data-proj'), q('#wps-tools-toast'));
    });

    const form = q('#wps-form');
    if (form) {
      form.addEventListener('input', function (e) {
        if (e.target && e.target.name === 'map_proj' && q('#tools-auto-fill-on-proj', panel).checked) {
          applyProjectionAutofill(q('#wps-tools-toast'));
        }
        refreshToolsPanel();
      });
      form.addEventListener('change', function (e) {
        if (e.target && e.target.name === 'map_proj' && q('#tools-auto-fill-on-proj', panel).checked) {
          applyProjectionAutofill(q('#wps-tools-toast'));
        }
        refreshToolsPanel();
      });
    }

    const updateBtn = q('#tools-update-domain') || q('#update-domain');
    if (updateBtn) {
      updateBtn.title = 'Apply manual changes made in the form to the domain.';
      updateBtn.setAttribute('data-native-tooltip', 'true');
      const bottomToolbar = q('#wrf-map-bottom-toolbar');
      const actionsRow = q('.wps-tools-actions-row', panel);
      if (bottomToolbar) {
        updateBtn.classList.remove('btn-outline-primary');
        updateBtn.classList.add('btn-primary');
        bottomToolbar.insertBefore(updateBtn, bottomToolbar.firstChild);
      } else if (actionsRow && !q('#tools-update-domain', panel)) {
        updateBtn.id = 'tools-update-domain';
        updateBtn.classList.remove('btn-primary');
        updateBtn.classList.add('btn-outline-primary');
        actionsRow.appendChild(updateBtn);
      }
      updateBtn.addEventListener('click', function () {
        const form = q('#wps-form');
        const mapProj = form ? ((q('select[name="map_proj"]', form) || {}).value) : '';
        if (lambertModePendingApply && mapProj === 'lambert') {
          applyProjectionAutofill(q('#wps-tools-toast'));
        }
        sanitizeNestRows(q('#wps-tools-toast'));
        setTimeout(refreshToolsPanel, 0);
        scheduleRefresh();
      }, true);
    }

    ensureSuggestProjectionButton();
    refreshToolsTooltips(panel);
    refreshToolsPanel();
  }
  function refreshToolsPanel() {
    const panel = q('#wps-tools-panel');
    if (!panel) return;
    disposeBootstrapTooltips(panel);

    const state = collectState();
    const issues = buildValidation(state);
    const summary = q('#wps-tools-summary', panel);
    const list = q('#wps-tools-issues', panel);
    const recommendationBox = q('#wps-tools-recommendation', panel);
    const cueBox = q('#tools-lambert-mode-cue', panel);

    if (cueBox) cueBox.style.display = state.mapProj === 'lambert' ? '' : 'none';

    renderProjectionSuggestion(state, false);

    const validCount = issues.filter(x => x.level === 'valid').length;
    const warningCount = issues.filter(x => x.level === 'warning').length;
    const errorCount = issues.filter(x => x.level === 'error').length;
    summary.innerHTML = '<span class="mr-2"><strong>' + validCount + '</strong> valid</span>' +
      '<span class="mr-2 text-warning"><strong>' + warningCount + '</strong> warnings</span>' +
      '<span class="text-danger"><strong>' + errorCount + '</strong> errors</span>';
    list.innerHTML = issues.slice(0, 10).map(function (item) {
      return '<li class="' + item.level + '">' + item.text.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</li>';
    }).join('') || '<li class="valid">No domain intelligence issues detected.</li>';

    refreshToolsTooltips(panel);
    ensureSuggestProjectionButton();
  }
  function patchVersionText() {
    document.title = document.title.replace(/v[\d.\-a-z]+/i, WPS_TOOLS_VERSION);
    qa('.leaflet-sidebar-header .badge').forEach(function (badge) {
      if (/^v/i.test(badge.textContent.trim())) badge.textContent = WPS_TOOLS_VERSION;
    });
  }
  let refreshTimer = null;
  function scheduleRefresh() {
    if (refreshTimer) window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(function () {
      refreshTimer = null;
      refreshToolsPanel();
    }, 120);
  }
  function initWhenReady() {
    patchVersionText();
    renderToolsPanel();
    scheduleRefresh();
    const form = q('#wps-form');
    if (form) {
      form.addEventListener('input', scheduleRefresh, true);
      form.addEventListener('change', scheduleRefresh, true);
    }
    window.addEventListener('resize', scheduleRefresh);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhenReady);
  } else {
    initWhenReady();
  }


})();
