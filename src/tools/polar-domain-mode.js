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
      boundaryLat: 50,
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
      boundaryLat: -50,
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
        /*
         * The polar browser map represents one geographic hemisphere inside
         * a circular projected footprint. Leaflet controls can occasionally
         * request LatLng values for container points outside that circle,
         * especially during zoom animation, scale-control updates, and mouse
         * movement over the gray area surrounding the polar map.
         *
         * Passing those coordinates directly to proj4 can produce a finite
         * longitude with NaN latitude. Clamp inverse-projection requests to
         * just inside the hemisphere boundary before calling proj4.
         */
        var x = Number(point.x);
        var y = Number(point.y);

        if (!Number.isFinite(x) || !Number.isFinite(y)) {
          return global.L.latLng(
            config.center[0],
            config.center[1]
          );
        }

        var radius = Math.sqrt(
          x * x +
          y * y
        );

        /*
         * config.extent is the projected radius of the hemisphere edge used
         * by the GBIF polar tile scheme. Stay slightly inside that edge to
         * avoid numerical instability at the projection boundary.
         */
        var maximumRadius =
          extent * 0.999999;

        if (
          radius > maximumRadius &&
          radius > 0
        ) {
          var factor =
            maximumRadius / radius;

          x *= factor;
          y *= factor;
        }

        var lonlat =
          global.proj4(
            config.proj4,
            'EPSG:4326',
            [x, y]
          );

        var longitude =
          Number(lonlat[0]);

        var latitude =
          Number(lonlat[1]);

        /*
         * A second defensive guard prevents a projection-library failure from
         * ever reaching L.latLng as NaN.
         */
        if (
          !Number.isFinite(latitude) ||
          !Number.isFinite(longitude)
        ) {
          return global.L.latLng(
            config.center[0],
            config.center[1]
          );
        }

        /*
         * Numerical noise immediately along the equator must not cause the
         * opposite hemisphere to appear in the coordinate readout.
         */
        if (
          config.mode === 'north' &&
          latitude < 0
        ) {
          latitude = 0;
        }

        if (
          config.mode === 'south' &&
          latitude > 0
        ) {
          latitude = 0;
        }

        /*
         * Normalize longitude to the conventional -180..180 range.
         */
        longitude =
          ((longitude + 180) % 360 + 360) %
          360 -
          180;

        return global.L.latLng(
          latitude,
          longitude
        );
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

  /*
   * Hide all browser cartography equatorward of the configured polar
   * workspace boundary.
   *
   * The GBIF EPSG:3575 / EPSG:3031 tile grids remain square and retain their
   * published CRS extents. Rather than modifying those extents, this layer
   * places a viewport-sized SVG mask above the background/reference
   * cartography with a circular hole corresponding to exactly 50N or 50S.
   *
   * This avoids exposing the square corners of the underlying polar tile
   * matrix while preserving correct tile alignment and WRF geometry.
   */
  function createPolarBoundaryMask(map) {
    var config = getActiveConfig();

    if (
      !map ||
      !config ||
      !global.L ||
      !global.document ||
      !Number.isFinite(Number(config.boundaryLat))
    ) {
      return null;
    }

    var paneName =
      'polarBoundaryMaskPane';

    var pane =
      map.getPane(paneName);

    if (!pane) {
      pane =
        map.createPane(paneName);
    }

    /*
     * Tile pane:                         ~200
     * Natural Earth boundaries/labels:  330/340
     * Polar cutoff mask:                350
     * Normal Leaflet/WRF overlays:      ~400+
     */
    pane.style.zIndex =
      '350';

    pane.style.pointerEvents =
      'none';

    var svgNamespace =
      'http://www.w3.org/2000/svg';

    var svg =
      global.document.createElementNS(
        svgNamespace,
        'svg'
      );

    svg.setAttribute(
      'class',
      'polar-boundary-mask-svg'
    );

    svg.style.position =
      'absolute';

    svg.style.pointerEvents =
      'none';

    svg.style.overflow =
      'visible';

    var maskPath =
      global.document.createElementNS(
        svgNamespace,
        'path'
      );

    maskPath.setAttribute(
      'fill',
      '#dddddd'
    );

    maskPath.setAttribute(
      'fill-rule',
      'evenodd'
    );

    maskPath.setAttribute(
      'pointer-events',
      'none'
    );

    var edgeCircle =
      global.document.createElementNS(
        svgNamespace,
        'circle'
      );

    edgeCircle.setAttribute(
      'fill',
      'none'
    );

    edgeCircle.setAttribute(
      'stroke',
      '#56616b'
    );

    edgeCircle.setAttribute(
      'stroke-width',
      '1.25'
    );

    edgeCircle.setAttribute(
      'stroke-opacity',
      '0.88'
    );

    edgeCircle.setAttribute(
      'pointer-events',
      'none'
    );

    svg.appendChild(
      maskPath
    );

    svg.appendChild(
      edgeCircle
    );

    pane.appendChild(
      svg
    );

    var boundaryLat =
      Number(config.boundaryLat);

    var poleLat =
      config.mode === 'north'
        ? 90
        : -90;


    function updateMask() {
      if (
        !map ||
        !map._loaded
      ) {
        return;
      }

      var size =
        map.getSize();

      /*
       * The SVG lives inside a Leaflet pane, whose parent mapPane moves as
       * Leaflet pans. Position the SVG at the layer point corresponding to
       * the viewport's upper-left corner so its local coordinate system
       * remains identical to container pixels.
       */
      var topLeft =
        map.containerPointToLayerPoint(
          global.L.point(
            0,
            0
          )
        );

      global.L.DomUtil.setPosition(
        svg,
        topLeft
      );

      svg.setAttribute(
        'width',
        size.x
      );

      svg.setAttribute(
        'height',
        size.y
      );

      svg.setAttribute(
        'viewBox',
        '0 0 ' +
        size.x +
        ' ' +
        size.y
      );

      var center =
        map.latLngToContainerPoint(
          global.L.latLng(
            poleLat,
            0
          )
        );

      var boundaryPoint =
        map.latLngToContainerPoint(
          global.L.latLng(
            boundaryLat,
            0
          )
        );

      var dx =
        boundaryPoint.x -
        center.x;

      var dy =
        boundaryPoint.y -
        center.y;

      var radius =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      if (
        !Number.isFinite(center.x) ||
        !Number.isFinite(center.y) ||
        !Number.isFinite(radius) ||
        radius <= 0
      ) {
        return;
      }

      /*
       * Even-odd path:
       *
       *   outer path = entire browser viewport
       *   inner path = circular transparent polar workspace
       */
      var d =
        'M 0 0 ' +
        'H ' + size.x + ' ' +
        'V ' + size.y + ' ' +
        'H 0 Z ' +

        'M ' +
        (center.x - radius) +
        ' ' +
        center.y +

        ' A ' +
        radius +
        ' ' +
        radius +
        ' 0 1 0 ' +
        (center.x + radius) +
        ' ' +
        center.y +

        ' A ' +
        radius +
        ' ' +
        radius +
        ' 0 1 0 ' +
        (center.x - radius) +
        ' ' +
        center.y +

        ' Z';

      maskPath.setAttribute(
        'd',
        d
      );

      edgeCircle.setAttribute(
        'cx',
        center.x
      );

      edgeCircle.setAttribute(
        'cy',
        center.y
      );

      edgeCircle.setAttribute(
        'r',
        radius
      );
    }


    /*
     * Keep the circular boundary attached to geographic 50N/50S as the user
     * pans, zooms, or resizes the browser.
     */
    map.on(
      'move zoom zoomend moveend viewreset resize',
      updateMask
    );

    updateMask();


    return {
      remove: function remove() {
        map.off(
          'move zoom zoomend moveend viewreset resize',
          updateMask
        );

        if (
          svg &&
          svg.parentNode
        ) {
          svg.parentNode.removeChild(
            svg
          );
        }
      },

      update: updateMask
    };
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
      'Polar World Street': global.L.tileLayer(
        getTileUrl('osm-bright-en'),
        common
      ),
      'Polar Natural': global.L.tileLayer(
        getTileUrl('gbif-natural-en'),
        common
      ),
      'Polar Light': global.L.tileLayer(
        getTileUrl('gbif-light'),
        common
      ),
      'Polar Dark': global.L.tileLayer(
        getTileUrl('gbif-dark'),
        common
      )
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
      /*
       * The WRF domain location determines the browser hemisphere.
       *
       * ref_lat is the geographic reference latitude of d01 and therefore
       * takes precedence over truelat1, which is a projection parameter.
       * Only fall back to truelat1 for unusual imported files where ref_lat
       * is unavailable.
       */
      if (
        isFinite(refLat) &&
        Math.abs(refLat) > 1e-9
      ) {
        return refLat < 0
          ? 'south'
          : 'north';
      }

      if (
        isFinite(trueLat1) &&
        Math.abs(trueLat1) > 1e-9
      ) {
        return trueLat1 < 0
          ? 'south'
          : 'north';
      }

      /*
       * Do not guess a hemisphere when neither geographic latitude is
       * usable. Leave the user on the Standard Map instead.
       */
      return 'standard';
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
    createPolarBoundaryMask: createPolarBoundaryMask,
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
