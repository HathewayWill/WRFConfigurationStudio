/*
 * WRF Configuration Studio polar browser-map integration.
 *
 * This module is intentionally limited to browser display behavior. It does
 * not create a second namelist.wps model and it does not add a WPS namelist
 * variable. The existing WRF Configuration Studio domain and WPS code remain
 * authoritative for map_proj, projection parameters, grid nesting, and export.
 *
 * The browser normally uses Leaflet's Web Mercator CRS. That CRS cannot show
 * either geographic pole. When a polar browser view is selected, this module
 * supplies a Leaflet-compatible CRS and GBIF polar raster-tile configuration:
 *
 *   north -> EPSG:3575, Arctic Lambert Azimuthal Equal Area
 *   south -> EPSG:3031, Antarctic Polar Stereographic
 *
 * Leaflet's CRS is fixed when the map is constructed, so changing hemisphere
 * requires a page navigation. Polar display mode is intentionally one-shot:
 * north/south is carried in a temporary URL parameter, consumed during startup,
 * and removed from the address bar immediately. An ordinary reload therefore
 * always returns to the original standard Domain Wizard.
 */
(function (global) {
  'use strict';

  // STORAGE_KEY is retained only so older experimental builds cannot leave a
  // persistent hemisphere preference behind in localStorage.
  var STORAGE_KEY = 'wrf_domain_wizard_polar_hemisphere';
  var MODE_URL_PARAMETER = 'wrf_polar_mode';
  var PENDING_WPS_KEY = 'wrf_domain_wizard_pending_wps_for_map_mode';
  var PENDING_NEW_KEY = 'wrf_domain_wizard_pending_new_domain_for_map_mode';
  var TILE_SIZE = 512;
  var ARCTIC_RADIUS = 6371007.2;

  var configurations = {
    north: {
      mode: 'north',
      label: 'Northern Hemisphere',
      shortLabel: 'North Polar',
      code: 'EPSG:3575',
      proj4: '+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
      extent: Math.sqrt(2) * ARCTIC_RADIUS,
      center: [80, 0],
      zoom: 2,
      tileSrs: '3575'
    },
    south: {
      mode: 'south',
      label: 'Southern Hemisphere',
      shortLabel: 'South Polar',
      code: 'EPSG:3031',
      proj4: '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
      // GBIF's published EPSG:3031 zoom-zero extent.
      extent: 12367396.2185,
      center: [-80, 0],
      zoom: 2,
      tileSrs: '3031'
    }
  };

  function normalizeMode(value) {
    return value === 'north' || value === 'south' ? value : 'standard';
  }

  function clearLegacyPersistentMode() {
    try {
      global.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {}
  }

  function consumeModeFromUrl() {
    var requested = 'standard';

    try {
      var url = new URL(global.location.href);
      requested = normalizeMode(url.searchParams.get(MODE_URL_PARAMETER));

      // The hemisphere parameter is a one-use handoff. Remove it immediately
      // so F5, Ctrl+R, Ctrl+Shift+R, and reopening the bare application URL all
      // start the original standard Domain Wizard.
      if (url.searchParams.has(MODE_URL_PARAMETER)) {
        url.searchParams.delete(MODE_URL_PARAMETER);

        var cleanUrl =
          url.pathname +
          (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') +
          url.hash;

        global.history.replaceState(
          global.history.state,
          global.document ? global.document.title : '',
          cleanUrl
        );
      }
    } catch (error) {
      requested = 'standard';
    }

    return requested;
  }

  clearLegacyPersistentMode();
  var activeMode = consumeModeFromUrl();

  function getMode() {
    return activeMode;
  }

  function navigateToMode(mode) {
    var normalized = normalizeMode(mode);

    try {
      var url = new URL(global.location.href);

      if (normalized === 'standard') {
        url.searchParams.delete(MODE_URL_PARAMETER);
      } else {
        url.searchParams.set(MODE_URL_PARAMETER, normalized);
      }

      global.location.replace(url.toString());
      return true;
    } catch (error) {
      return false;
    }
  }

  function getActiveConfig() {
    var mode = getMode();
    return configurations[mode] || null;
  }

  function isPolarMode() {
    return getMode() !== 'standard';
  }

  function getTileUrl(style) {
    var config = getActiveConfig();
    if (!config) return null;
    return 'https://tile.gbif.org/' + config.tileSrs + '/omt/{z}/{x}/{y}@2x.png?style=' + (style || 'osm-bright-en');
  }

  function createLeafletCrs() {
    var config = getActiveConfig();
    if (!config) return null;
    if (!global.L || !global.proj4) {
      throw new Error('Polar map mode requires Leaflet and proj4.');
    }

    var extent = config.extent;
    var initialResolution = 2 * extent / TILE_SIZE;

    var projection = {
      bounds: global.L.bounds(
        global.L.point(-extent, -extent),
        global.L.point(extent, extent)
      ),
      project: function (latlng) {
        var xy = global.proj4('EPSG:4326', config.proj4, [latlng.lng, latlng.lat]);
        return global.L.point(xy[0], xy[1]);
      },
      unproject: function (point) {
        var lonlat = global.proj4(config.proj4, 'EPSG:4326', [point.x, point.y]);
        return global.L.latLng(lonlat[1], lonlat[0]);
      }
    };

    return global.L.Util.extend({}, global.L.CRS, {
      code: config.code,
      projection: projection,
      transformation: new global.L.Transformation(1, extent, -1, extent),
      infinite: false,
      R: global.L.CRS.Earth.R,
      distance: global.L.CRS.Earth.distance,
      scale: function (zoom) {
        return Math.pow(2, zoom) / initialResolution;
      },
      zoom: function (scale) {
        return Math.log(scale * initialResolution) / Math.LN2;
      }
    });
  }

  function polarTileLayers() {
    if (!isPolarMode() || !global.L) return null;
    var common = {
      tileSize: TILE_SIZE,
      minZoom: 0,
      maxZoom: 16,
      noWrap: true,
      attribution: 'GBIF | OpenMapTiles | OpenStreetMap contributors'
    };
    return {
      'Polar Street': global.L.tileLayer(getTileUrl('osm-bright-en'), common),
      'Polar Natural': global.L.tileLayer(getTileUrl('gbif-natural-en'), common),
      'Polar Light': global.L.tileLayer(getTileUrl('gbif-light'), common),
      'Polar Dark': global.L.tileLayer(getTileUrl('gbif-dark'), common)
    };
  }

  function enforceProjectionOptions() {
    var select = global.document && global.document.querySelector('select[name="map_proj"]');
    if (!select) return;

    var polar = isPolarMode();
    Array.prototype.forEach.call(select.options, function (option) {
      var allowed = !polar || option.value === 'polar' || option.value === 'lat-lon';
      option.hidden = !allowed;
      option.disabled = !allowed;
    });

    if (polar && select.value !== 'polar' && select.value !== 'lat-lon') {
      select.value = 'polar';
    }
  }

  function configureHemisphereSelector() {
    if (!global.document) return;
    var select = global.document.querySelector('select[name="polar_hemisphere"]');
    if (!select) return;

    select.value = getMode();
    enforceProjectionOptions();

    select.addEventListener('change', function () {
      var nextMode = normalizeMode(select.value);
      var currentMode = getMode();
      if (nextMode === currentMode) return;

      var visibleGrid = Array.prototype.some.call(
        global.document.querySelectorAll('#grids .container-grid'),
        function (row) {
          return row.id !== 'grid_template' && row.offsetParent !== null;
        }
      );

      if (visibleGrid) {
        var proceed = global.confirm(
          'Changing the browser map hemisphere reloads the map. Save the current namelist.wps first if you need to preserve unsaved changes. Continue?'
        );
        if (!proceed) {
          select.value = currentMode;
          return;
        }
      }

      // If the user is still in the New-domain setup stage, reopen that same
      // native Studio workflow after the CRS-changing reload. Existing domains
      // are never silently serialized here; they retain the explicit save-first
      // warning above.
      var formContainer = global.document.getElementById('container-wps-form');
      if (!visibleGrid && formContainer && formContainer.offsetParent !== null) {
        queueNewDomainForReload();
      }

      if (!navigateToMode(nextMode)) {
        select.value = currentMode;
        global.alert('Unable to switch the polar browser-map mode.');
      }
    });

    var mapProj = global.document.querySelector('select[name="map_proj"]');
    if (mapProj) {
      mapProj.addEventListener('change', enforceProjectionOptions);
    }
  }

  function inferModeFromWps(wpsNamelist) {
    if (!wpsNamelist || !wpsNamelist.geogrid) return 'standard';
    var geogrid = wpsNamelist.geogrid;
    var mapProj = geogrid.map_proj;
    var refLat = parseFloat(geogrid.ref_lat);
    var trueLat1 = parseFloat(geogrid.truelat1);

    if (mapProj === 'polar') {
      var polarLatitude = isFinite(trueLat1) ? trueLat1 : refLat;
      return polarLatitude < 0 ? 'south' : 'north';
    }

    // Keep ordinary/global lat-lon files on the standard map. A regional
    // high-latitude lat-lon file is a polar-display candidate.
    if (mapProj === 'lat-lon' && isFinite(refLat) && Math.abs(refLat) >= 55) {
      return refLat < 0 ? 'south' : 'north';
    }

    return 'standard';
  }

  function queueWpsForReload(rawText, filename, desiredMode) {
    try {
      global.sessionStorage.setItem(PENDING_WPS_KEY, JSON.stringify({
        rawText: rawText,
        filename: filename || 'namelist.wps',
        mode: normalizeMode(desiredMode)
      }));
      return true;
    } catch (error) {
      return false;
    }
  }

  function consumePendingWps() {
    try {
      var raw = global.sessionStorage.getItem(PENDING_WPS_KEY);
      if (!raw) return null;
      global.sessionStorage.removeItem(PENDING_WPS_KEY);
      var payload = JSON.parse(raw);
      if (!payload || typeof payload.rawText !== 'string') return null;
      return payload;
    } catch (error) {
      return null;
    }
  }

  function queueNewDomainForReload() {
    try {
      global.sessionStorage.setItem(PENDING_NEW_KEY, '1');
      return true;
    } catch (error) {
      return false;
    }
  }

  function consumePendingNewDomain() {
    try {
      var pending = global.sessionStorage.getItem(PENDING_NEW_KEY) === '1';
      global.sessionStorage.removeItem(PENDING_NEW_KEY);
      return pending;
    } catch (error) {
      return false;
    }
  }

  var api = {
    STORAGE_KEY: STORAGE_KEY,
    MODE_URL_PARAMETER: MODE_URL_PARAMETER,
    getMode: getMode,
    navigateToMode: navigateToMode,
    isPolarMode: isPolarMode,
    getActiveConfig: getActiveConfig,
    getTileUrl: getTileUrl,
    createLeafletCrs: createLeafletCrs,
    polarTileLayers: polarTileLayers,
    enforceProjectionOptions: enforceProjectionOptions,
    inferModeFromWps: inferModeFromWps,
    queueWpsForReload: queueWpsForReload,
    consumePendingWps: consumePendingWps,
    queueNewDomainForReload: queueNewDomainForReload,
    consumePendingNewDomain: consumePendingNewDomain
  };

  global.WRFPolarDomainMode = api;

  if (global.document) {
    if (global.document.readyState === 'loading') {
      global.document.addEventListener('DOMContentLoaded', configureHemisphereSelector);
    } else {
      configureHemisphereSelector();
    }

    global.addEventListener('pageshow', function () {
      var select = global.document.querySelector('select[name="polar_hemisphere"]');
      if (select) {
        select.value = getMode();
      }
      enforceProjectionOptions();
    });
  }
})(window);
