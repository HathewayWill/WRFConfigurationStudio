/*
 * WRF Configuration Studio
 * Polar Reference Overlay
 *
 * Adds Studio-controlled political boundaries and place labels to the
 * Northern and Southern Hemisphere polar browser maps.
 *
 * Reference data:
 * Natural Earth vector data, version 5.1.2.
 *
 * Runtime cartography uses a hybrid resolution:
 *   - 1:50m Admin-0 country boundaries
 *   - 1:10m Admin-1 state/province boundaries
 *   - 1:10m populated places
 *
 * This module changes browser cartography only. It does not modify WPS
 * projection parameters or WRF domain geometry.
 */

(function (global) {
  'use strict';

  var DATA_ROOT =
    'data/polar-reference/natural-earth-5.1.2/';

  var SOURCES = {
    north: {
      admin0:
        DATA_ROOT +
        'ne_50m_admin_0_boundary_lines_land_polar_50.geojson',

      admin1:
        DATA_ROOT +
        'ne_10m_admin_1_states_provinces_lines_north_50.geojson',

      places:
        DATA_ROOT +
        'ne_10m_populated_places_simple_north_50.geojson'
    },

    south: {
      admin0:
        DATA_ROOT +
        'ne_50m_admin_0_boundary_lines_land_polar_50.geojson',

      /*
       * Natural Earth 10m Admin-1 has no features intersecting the
       * Studio's 50S-90S Antarctic workspace.
       */
      admin1: null,

      places:
        DATA_ROOT +
        'ne_10m_populated_places_simple_south_50.geojson'
    }
  };

  /*
   * Use the browser-mode configuration as the single source of truth for the
   * polar cartographic cutoff. Current Studio polar workspaces stop at 50N
   * and 50S respectively.
   */
  function getPolarLatitudeLimit() {
    var config =
      global.WRFPolarDomainMode &&
      global.WRFPolarDomainMode.getActiveConfig
        ? global.WRFPolarDomainMode.getActiveConfig()
        : null;

    if (
      config &&
      Number.isFinite(
        Number(config.boundaryLat)
      )
    ) {
      return Math.abs(
        Number(config.boundaryLat)
      );
    }

    return 50;
  }

  var activeOverlay = null;
  var jsonCache = {};


  function isPolarMode(mode) {
    return mode === 'north' || mode === 'south';
  }


  function latitudeIsVisible(latitude, mode) {
    latitude = Number(latitude);

    if (!isFinite(latitude)) {
      return false;
    }

    var latitudeLimit =
      getPolarLatitudeLimit();

    if (mode === 'north') {
      return latitude >= latitudeLimit;
    }

    if (mode === 'south') {
      return latitude <= -latitudeLimit;
    }

    return false;
  }


  function getProperty(properties, names) {
    if (!properties) {
      return null;
    }

    for (var i = 0; i < names.length; i++) {
      if (
        Object.prototype.hasOwnProperty.call(
          properties,
          names[i]
        )
      ) {
        return properties[names[i]];
      }
    }

    return null;
  }


  function numberProperty(properties, names, fallback) {
    var value =
      getProperty(
        properties,
        names
      );

    value = Number(value);

    return isFinite(value)
      ? value
      : fallback;
  }


  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }


  function fetchJson(url) {
    if (!jsonCache[url]) {
      jsonCache[url] =
        fetch(url, {
          cache: 'force-cache'
        }).then(function (response) {
          if (!response.ok) {
            throw new Error(
              'Unable to load polar reference data: ' +
              url +
              ' (' +
              response.status +
              ')'
            );
          }

          return response.json();
        }).catch(function (error) {
          /*
           * Do not permanently cache a failed request. A later map event may
           * retry after a transient server or network failure.
           */
          delete jsonCache[url];
          throw error;
        });
    }

    return jsonCache[url];
  }


  function coordinateTreeTouchesPolarArea(
    coordinates,
    mode
  ) {
    if (!coordinates) {
      return false;
    }

    /*
     * GeoJSON positions are [longitude, latitude].
     */
    if (
      Array.isArray(coordinates) &&
      coordinates.length >= 2 &&
      typeof coordinates[0] === 'number' &&
      typeof coordinates[1] === 'number'
    ) {
      return latitudeIsVisible(
        coordinates[1],
        mode
      );
    }

    if (!Array.isArray(coordinates)) {
      return false;
    }

    for (
      var i = 0;
      i < coordinates.length;
      i++
    ) {
      if (
        coordinateTreeTouchesPolarArea(
          coordinates[i],
          mode
        )
      ) {
        return true;
      }
    }

    return false;
  }


  function featureTouchesPolarArea(feature, mode) {
    if (
      !feature ||
      !feature.geometry
    ) {
      return false;
    }

    return coordinateTreeTouchesPolarArea(
      feature.geometry.coordinates,
      mode
    );
  }


  function ensurePane(
    map,
    name,
    zIndex
  ) {
    var pane =
      map.getPane(name);

    if (!pane) {
      pane =
        map.createPane(name);
    }

    pane.style.zIndex =
      String(zIndex);

    /*
     * Reference cartography must never capture mouse events intended for
     * WRF domains, resize handles, map dragging, or the coordinate reader.
     */
    pane.style.pointerEvents =
      'none';

    return pane;
  }


  function getPlaceName(properties) {
    /*
     * Prefer Natural Earth's proper Unicode name for display. The ASCII name
     * remains a fallback only.
     */
    return (
      getProperty(
        properties,
        [
          'name',
          'NAME',
          'nameascii',
          'NAMEASCII'
        ]
      ) ||
      ''
    );
  }


  function normalizePlaceName(value) {
    var name =
      String(value || '')
        .toLowerCase()
        /*
         * Normalize typographic dash variants before ASCII-style curated
         * matching, for example Amundsen–Scott -> amundsen-scott.
         */
        .replace(
          /[\u2010\u2011\u2012\u2013\u2014\u2212]/g,
          '-'
        );

    if (name.normalize) {
      name =
        name
          .normalize('NFD')
          .replace(
            /[\u0300-\u036f]/g,
            ''
          );
    }

    return name
      .replace(/\s+/g, ' ')
      .trim();
  }


  function getPlaceSearchNames(properties) {
    var candidates = [
      getProperty(
        properties,
        [
          'name',
          'NAME'
        ]
      ),
      getProperty(
        properties,
        [
          'nameascii',
          'NAMEASCII'
        ]
      )
    ];

    var names = [];

    for (
      var i = 0;
      i < candidates.length;
      i++
    ) {
      var normalized =
        normalizePlaceName(
          candidates[i]
        );

      if (
        normalized &&
        names.indexOf(normalized) === -1
      ) {
        names.push(normalized);
      }
    }

    return names;
  }


  function getFeatureClass(properties) {
    return String(
      getProperty(
        properties,
        [
          'featurecla',
          'FEATURECLA'
        ]
      ) ||
      ''
    );
  }


  function isCapital(properties) {
    var adm0cap =
      getProperty(
        properties,
        [
          'adm0cap',
          'ADM0CAP'
        ]
      );

    return (
      adm0cap === 1 ||
      adm0cap === '1'
    );
  }


  function isWorldCity(properties) {
    var worldcity =
      getProperty(
        properties,
        [
          'worldcity',
          'WORLDCITY'
        ]
      );

    return (
      worldcity === 1 ||
      worldcity === '1'
    );
  }


  function isScientificStation(properties) {
    return (
      getFeatureClass(properties)
        .toLowerCase() ===
      'scientific station'
    );
  }


  function labelClass(properties) {
    if (isScientificStation(properties)) {
      return 'polar-reference-label-station';
    }

    if (isCapital(properties)) {
      return 'polar-reference-label-capital';
    }

    if (isWorldCity(properties)) {
      return 'polar-reference-label-world-city';
    }

    return 'polar-reference-label-city';
  }


  /*
   * Antarctic stations shown at the default whole-continent view.
   *
   * Natural Earth contains many scientific-station points. Showing all of
   * them simultaneously makes the default South Polar workspace unreadable,
   * so the most recognizable reference stations are given first priority.
   * Additional stations appear as the user zooms in.
   */
  /*
   * Curated whole-pole reference locations.
   *
   * These supplement Natural Earth's normal capital/world-city hierarchy
   * with geographically useful polar locations that should remain visible
   * at the default whole-hemisphere view.
   */
  var MAJOR_NORTHERN_PLACES = [
    'anchorage',
    'fairbanks',
    'whitehorse',
    'yellowknife',
    'iqaluit',
    'nuuk',
    'tromso',
    'murmansk',
    'longyearbyen'
  ];


  var MAJOR_ANTARCTIC_STATIONS = [
    'amundsen-scott',
    'mcmurdo',
    'rothera',
    'palmer',
    'scott base',
    'vostok',
    'casey',
    'davis',
    'mawson',
    "dumont d'urville"
  ];


  /*
   * Second-tier Antarctic stations. These provide additional geographic
   * reference without returning to the original all-stations clutter.
   */
  var SECONDARY_ANTARCTIC_STATIONS = [
    'neumayer',
    'halley',
    'belgrano',
    'syowa',
    'showa',
    'novolazarevsk',
    'concordia'
  ];


  function placeNameMatches(
    properties,
    names
  ) {
    var searchNames =
      getPlaceSearchNames(
        properties
      );

    for (
      var searchIndex = 0;
      searchIndex < searchNames.length;
      searchIndex++
    ) {
      for (
        var nameIndex = 0;
        nameIndex < names.length;
        nameIndex++
      ) {
        if (
          searchNames[searchIndex]
            .indexOf(
              names[nameIndex]
            ) !== -1
        ) {
          return true;
        }
      }
    }

    return false;
  }


  function isMajorNorthernPlace(properties) {
    return placeNameMatches(
      properties,
      MAJOR_NORTHERN_PLACES
    );
  }


  function isMajorAntarcticStation(properties) {
    return (
      isScientificStation(properties) &&
      placeNameMatches(
        properties,
        MAJOR_ANTARCTIC_STATIONS
      )
    );
  }


  function isSecondaryAntarcticStation(properties) {
    return (
      isScientificStation(properties) &&
      placeNameMatches(
        properties,
        SECONDARY_ANTARCTIC_STATIONS
      )
    );
  }


  function getPlaceScaleRank(properties) {
    return numberProperty(
      properties,
      [
        'scalerank',
        'SCALERANK'
      ],
      99
    );
  }


  function getPlacePopulation(properties) {
    return numberProperty(
      properties,
      [
        'pop_max',
        'POP_MAX',
        'pop_min',
        'POP_MIN'
      ],
      0
    );
  }


  /*
   * Core polar reference locations remain eligible at every zoom.
   *
   * This is deliberately monotonic: zooming farther into a polar map may
   * reveal additional places, but it must never remove an established
   * reference location that was visible at a lower zoom.
   */
  function isPersistentPolarPlace(
    properties,
    mode
  ) {
    if (mode === 'north') {
      return (
        isCapital(properties) ||
        isWorldCity(properties) ||
        isMajorNorthernPlace(properties)
      );
    }

    if (mode === 'south') {
      return (
        isMajorAntarcticStation(properties) ||
        isSecondaryAntarcticStation(properties)
      );
    }

    return false;
  }


  /*
   * Return the first zoom level at which a place becomes eligible.
   *
   * Once a place crosses this threshold, it remains eligible at every
   * subsequent closer zoom. This avoids locations disappearing when Leaflet
   * moves between integer zoom levels with different selection rules.
   */
  function placeMinimumVisibleZoom(
    properties,
    mode
  ) {
    if (
      isPersistentPolarPlace(
        properties,
        mode
      )
    ) {
      return 0;
    }

    var minimumZoom =
      numberProperty(
        properties,
        [
          'min_zoom',
          'MIN_ZOOM'
        ],
        3
      );

    var scaleRank =
      getPlaceScaleRank(
        properties
      );

    var population =
      getPlacePopulation(
        properties
      );


    /*
     * Non-curated scientific stations begin at zoom 3 when Natural Earth's
     * metadata identifies them as important enough. All remaining stations
     * begin at zoom 4.
     */
    if (
      isScientificStation(
        properties
      )
    ) {
      if (
        minimumZoom <= 3 ||
        scaleRank <= 3
      ) {
        return 3;
      }

      return 4;
    }


    /*
     * Important regional populated places may begin at zoom 3.
     */
    if (
      minimumZoom <= 3 &&
      (
        scaleRank <= 4 ||
        population >= 500000
      )
    ) {
      return 3;
    }


    /*
     * Other populated places begin no earlier than zoom 4, while still
     * respecting a later Natural Earth min_zoom value.
     */
    return Math.max(
      4,
      minimumZoom
    );
  }


  function placeVisibleAtZoom(
    properties,
    zoom,
    mode
  ) {
    return (
      zoom >=
      placeMinimumVisibleZoom(
        properties,
        mode
      )
    );
  }


  /*
   * Lower values mean higher label priority.
   *
   * Collision suppression uses this ordering so, for example, a capital
   * survives when its label competes for space with an ordinary city.
   */
  function placeLabelPriority(properties) {
    var score =
      100;

    var scaleRank =
      getPlaceScaleRank(properties);

    var population =
      getPlacePopulation(properties);

    if (isMajorAntarcticStation(properties)) {
      score = 0;
    } else if (isCapital(properties)) {
      score = 5;
    } else if (isWorldCity(properties)) {
      score = 10;
    } else if (isSecondaryAntarcticStation(properties)) {
      score = 12;
    } else if (isMajorNorthernPlace(properties)) {
      score = 14;
    } else if (isScientificStation(properties)) {
      score = 20;
    } else {
      score = 40;
    }

    if (
      isFinite(scaleRank) &&
      scaleRank < 99
    ) {
      score +=
        scaleRank * 2;
    }

    if (population >= 5000000) {
      score -= 8;
    } else if (population >= 1000000) {
      score -= 5;
    } else if (population >= 500000) {
      score -= 3;
    }

    return score;
  }


  function labelBoxesOverlap(
    first,
    second,
    padding
  ) {
    padding =
      padding || 0;

    return !(
      first.right + padding <
        second.left ||
      first.left - padding >
        second.right ||
      first.bottom + padding <
        second.top ||
      first.top - padding >
        second.bottom
    );
  }


  /*
   * Estimate the screen footprint of a divIcon label before adding it.
   *
   * Exact DOM text measurement is unnecessary here. A conservative estimate
   * gives stable collision suppression while keeping the implementation
   * independent of browser font metrics.
   */
  function estimatePlaceLabelBox(
    map,
    feature,
    properties
  ) {
    var coordinates =
      feature.geometry &&
      feature.geometry.coordinates;

    if (
      !coordinates ||
      coordinates.length < 2
    ) {
      return null;
    }

    var point =
      map.latLngToContainerPoint(
        L.latLng(
          Number(coordinates[1]),
          Number(coordinates[0])
        )
      );

    if (
      !isFinite(point.x) ||
      !isFinite(point.y)
    ) {
      return null;
    }

    var name =
      getPlaceName(properties);

    /*
     * Most labels use approximately 6-7 horizontal pixels per character at
     * the current Studio reference-label font size.
     */
    var width =
      Math.max(
        42,
        Math.min(
          190,
          18 + name.length * 6.4
        )
      );

    var height =
      isCapital(properties)
        ? 18
        : 16;

    return {
      left:
        point.x - 5,

      right:
        point.x + width,

      top:
        point.y - height / 2,

      bottom:
        point.y + height / 2
    };
  }


  function getPlaceLatLng(feature) {
    if (
      !feature ||
      !feature.geometry ||
      feature.geometry.type !== 'Point'
    ) {
      return null;
    }

    var coordinates =
      feature.geometry.coordinates;

    if (
      !coordinates ||
      coordinates.length < 2
    ) {
      return null;
    }

    var longitude =
      Number(coordinates[0]);

    var latitude =
      Number(coordinates[1]);

    if (
      !isFinite(latitude) ||
      !isFinite(longitude)
    ) {
      return null;
    }

    return L.latLng(
      latitude,
      longitude
    );
  }


  /*
   * Location points are independent from text labels.
   *
   * Collision suppression may hide a label, but it must never make the
   * underlying geographic location appear to vanish.
   */
  function createPlacePointMarker(
    feature,
    paneName
  ) {
    var latlng =
      getPlaceLatLng(feature);

    if (!latlng) {
      return null;
    }

    var properties =
      feature.properties || {};

    var radius = 1.8;
    var weight = 0.6;
    var color = '#4d5863';
    var fillColor = '#4d5863';

    if (isCapital(properties)) {
      radius = 3.0;
      weight = 0.8;
      color = '#28323c';
      fillColor = '#28323c';
    } else if (isWorldCity(properties)) {
      radius = 2.6;
      weight = 0.75;
      color = '#35404a';
      fillColor = '#35404a';
    } else if (isScientificStation(properties)) {
      radius = 2.2;
      weight = 0.7;
      color = '#46515c';
      fillColor = '#46515c';
    }

    return L.circleMarker(
      latlng,
      {
        pane: paneName,
        radius: radius,
        stroke: true,
        color: color,
        weight: weight,
        opacity: 0.9,
        fill: true,
        fillColor: fillColor,
        fillOpacity: 0.9,
        interactive: false,
        bubblingMouseEvents: false
      }
    );
  }


  /*
   * Text-only label marker.
   *
   * The geographic point itself is rendered separately by
   * createPlacePointMarker().
   */
  function createPlaceLabelMarker(
    feature,
    paneName
  ) {
    var latlng =
      getPlaceLatLng(feature);

    if (!latlng) {
      return null;
    }

    var properties =
      feature.properties || {};

    var name =
      getPlaceName(properties);

    if (!name) {
      return null;
    }

    var cssClass =
      labelClass(properties);

    var html =
      '<span class="polar-reference-label ' +
      cssClass +
      '">' +
      escapeHtml(name) +
      '</span>';

    return L.marker(
      latlng,
      {
        pane: paneName,
        interactive: false,
        keyboard: false,
        icon: L.divIcon({
          className:
            'polar-reference-label-icon',
          html: html,
          iconSize: [1, 1],
          iconAnchor: [0, 0]
        })
      }
    );
  }


  function createOverlay(map, mode) {
    if (
      !map ||
      !global.L ||
      !isPolarMode(mode)
    ) {
      return null;
    }

    var modeSources =
      SOURCES[mode];

    if (!modeSources) {
      return null;
    }

    var boundaryPaneName =
      'polarReferenceBoundaryPane';

    var pointPaneName =
      'polarReferencePointPane';

    var labelPaneName =
      'polarReferenceLabelPane';

    /*
     * Keep reference information beneath normal Leaflet overlays so WRF
     * domains remain visually dominant.
     */
    ensurePane(
      map,
      boundaryPaneName,
      330
    );

    ensurePane(
      map,
      pointPaneName,
      339
    );

    ensurePane(
      map,
      labelPaneName,
      340
    );

    var boundaryLayer =
      L.layerGroup().addTo(map);

    /*
     * Keep country and state/province boundaries independently controllable.
     * Admin-0 is always present. The much larger 10m Admin-1 layer is loaded
     * only when the map reaches a useful close zoom.
     */
    var admin0Layer =
      L.layerGroup().addTo(
        boundaryLayer
      );

    var admin1Layer =
      L.layerGroup().addTo(
        boundaryLayer
      );

    var pointLayer =
      L.layerGroup().addTo(map);

    var labelLayer =
      L.layerGroup().addTo(map);

    var state = {
      map: map,
      mode: mode,
      boundaryLayer: boundaryLayer,
      admin0Layer: admin0Layer,
      admin1Layer: admin1Layer,
      admin1Data: null,
      admin1Loading: false,
      admin1Rendered: false,
      pointLayer: pointLayer,
      labelLayer: labelLayer,
      placesData: null,
      destroyed: false,
      zoomHandler: null
    };


    function drawPlaceLabels() {
      if (
        state.destroyed ||
        !state.placesData
      ) {
        return;
      }

      pointLayer.clearLayers();
      labelLayer.clearLayers();

      var zoom =
        map.getZoom();

      var features =
        state.placesData.features || [];

      var candidates = [];

      var mapSize =
        map.getSize();


      /*
       * First collect all labels that qualify for this hemisphere and zoom.
       * They are ranked before collision filtering so important labels win.
       */
      for (
        var i = 0;
        i < features.length;
        i++
      ) {
        var feature =
          features[i];

        if (
          !featureTouchesPolarArea(
            feature,
            mode
          )
        ) {
          continue;
        }

        var properties =
          feature.properties || {};

        if (
          !placeVisibleAtZoom(
            properties,
            zoom,
            mode
          )
        ) {
          continue;
        }

        var box =
          estimatePlaceLabelBox(
            map,
            feature,
            properties
          );

        if (!box) {
          continue;
        }


        /*
         * Ignore labels whose anchor/estimated box is wholly outside the
         * current browser viewport.
         */
        if (
          box.right < 0 ||
          box.left > mapSize.x ||
          box.bottom < 0 ||
          box.top > mapSize.y
        ) {
          continue;
        }


        /*
         * The point is rendered before label collision filtering.
         *
         * If the text later collides with a higher-priority label, this point
         * remains visible so the geographic location never disappears.
         */
        var pointMarker =
          createPlacePointMarker(
            feature,
            pointPaneName
          );

        if (pointMarker) {
          pointMarker.addTo(
            pointLayer
          );
        }


        candidates.push({
          feature: feature,
          properties: properties,
          box: box,
          priority:
            placeLabelPriority(
              properties
            ),
          name:
            getPlaceName(
              properties
            )
        });
      }


      candidates.sort(
        function (a, b) {
          if (
            a.priority !==
            b.priority
          ) {
            return (
              a.priority -
              b.priority
            );
          }

          return a.name.localeCompare(
            b.name
          );
        }
      );


      var acceptedBoxes = [];

      /*
       * Default polar views need slightly more separation than close zooms.
       */
      var collisionPadding =
        zoom <= 2
          ? 5
          : zoom === 3
            ? 3
            : 2;


      for (
        var candidateIndex = 0;
        candidateIndex < candidates.length;
        candidateIndex++
      ) {
        var candidate =
          candidates[candidateIndex];

        var collides =
          false;

        for (
          var acceptedIndex = 0;
          acceptedIndex < acceptedBoxes.length;
          acceptedIndex++
        ) {
          if (
            labelBoxesOverlap(
              candidate.box,
              acceptedBoxes[acceptedIndex],
              collisionPadding
            )
          ) {
            collides = true;
            break;
          }
        }

        if (collides) {
          continue;
        }


        var marker =
          createPlaceLabelMarker(
            candidate.feature,
            labelPaneName
          );

        if (!marker) {
          continue;
        }


        marker.addTo(
          labelLayer
        );

        acceptedBoxes.push(
          candidate.box
        );
      }
    }


    /*
     * Render 10m Admin-1 detail only at useful close zooms.
     *
     * The 10m Admin-1 source is approximately 21 MiB, so broad whole-pole
     * views should not pay that download and parsing cost. Once fetched, the
     * existing fetchJson() cache keeps it available for the remainder of the
     * page session.
     */
    function updateAdmin1Detail() {
      if (state.destroyed) {
        return;
      }

      /*
       * The Antarctic workspace has no Natural Earth 10m Admin-1 features.
       * Avoid creating a network request, parser workload, or empty layer.
       */
      if (!modeSources.admin1) {
        admin1Layer.clearLayers();
        state.admin1Data = null;
        state.admin1Loading = false;
        state.admin1Rendered = false;
        return;
      }

      var zoom =
        map.getZoom();


      /*
       * Whole-pole views remain intentionally clean.
       */
      if (zoom < 3) {
        admin1Layer.clearLayers();
        state.admin1Rendered = false;
        return;
      }


      /*
       * If the data is already available, render it immediately.
       */
      if (state.admin1Data) {
        if (state.admin1Rendered) {
          return;
        }

        admin1Layer.clearLayers();

        L.geoJSON(
          state.admin1Data,
          {
            pane:
              boundaryPaneName,

            interactive:
              false,

            filter:
              function (feature) {
                return featureTouchesPolarArea(
                  feature,
                  mode
                );
              },

            style: {
              color: '#89929b',
              weight: 0.7,
              opacity: 0.68,
              fill: false
            }
          }
        ).addTo(
          admin1Layer
        );

        state.admin1Rendered = true;
        return;
      }


      /*
       * Avoid starting duplicate fetches if several map events fire while the
       * 10m file is still loading.
       */
      if (state.admin1Loading) {
        return;
      }

      state.admin1Loading = true;

      fetchJson(
        modeSources.admin1
      )
        .then(function (admin1) {
          state.admin1Loading = false;

          if (state.destroyed) {
            return;
          }

          state.admin1Data =
            admin1;

          /*
           * The user may have zoomed back out while the data was loading.
           * Re-check the current zoom before drawing anything.
           */
          updateAdmin1Detail();
        })
        .catch(function (error) {
          state.admin1Loading = false;

          if (
            global.console &&
            typeof global.console.error === 'function'
          ) {
            global.console.error(
              'Unable to load polar Admin-1 reference data.',
              error
            );
          }
        });
    }


    Promise.all([
      fetchJson(modeSources.admin0),
      fetchJson(modeSources.places)
    ])
      .then(function (results) {
        if (state.destroyed) {
          return;
        }

        var admin0 =
          results[0];

        state.placesData =
          results[1];

        L.geoJSON(
          admin0,
          {
            pane:
              boundaryPaneName,

            interactive:
              false,

            filter:
              function (feature) {
                return featureTouchesPolarArea(
                  feature,
                  mode
                );
              },

            style: {
              color: '#5f6872',
              weight: 1.15,
              opacity: 0.85,
              fill: false
            }
          }
        ).addTo(
          admin0Layer
        );



        drawPlaceLabels();
        updateAdmin1Detail();
      })
      .catch(function (error) {
        /*
         * Reference overlays are optional cartography. A loading failure must
         * never prevent WRF Configuration Studio from operating.
         */
        console.error(
          'Polar reference overlay:',
          error
        );
      });


    state.zoomHandler =
      function () {
        drawPlaceLabels();
        updateAdmin1Detail();
      };

    map.on(
      'zoomend moveend',
      state.zoomHandler
    );


    state.remove =
      function () {
        if (state.destroyed) {
          return;
        }

        state.destroyed = true;

        if (state.zoomHandler) {
          map.off(
            'zoomend moveend',
            state.zoomHandler
          );
        }

        boundaryLayer.remove();
        pointLayer.remove();
        labelLayer.remove();
      };


    return state;
  }


  function detach() {
    if (
      activeOverlay &&
      activeOverlay.remove
    ) {
      activeOverlay.remove();
    }

    activeOverlay = null;
  }


  function attach(map, mode) {
    detach();

    if (!isPolarMode(mode)) {
      return null;
    }

    activeOverlay =
      createOverlay(
        map,
        mode
      );

    return activeOverlay;
  }


  global.WRFPolarReferenceOverlay = {
    attach: attach,
    detach: detach
  };

})(window);
