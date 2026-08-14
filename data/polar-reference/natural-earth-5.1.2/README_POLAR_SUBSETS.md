# WRF Configuration Studio Polar Natural Earth Data

These GeoJSON files are runtime subsets derived from Natural Earth vector
data version 5.1.2 for the WRF Configuration Studio polar browser maps.

Upstream project:
https://www.naturalearthdata.com/

Upstream vector repository:
https://github.com/nvkelso/natural-earth-vector

## Polar workspace

The WRF Configuration Studio polar browser workspace begins at 50 degrees
latitude:

- Northern Hemisphere: 50N through 90N
- Southern Hemisphere: 50S through 90S

The browser's circular 50-degree polar mask hides reference cartography
outside the active workspace without changing the underlying polar CRS.

## Runtime datasets

### Political boundaries

- `ne_50m_admin_0_boundary_lines_land_polar_50.geojson`
  - Natural Earth 1:50m Admin-0 country boundaries.
  - Contains features touching either polar workspace.
  - Used in both Northern and Southern Hemisphere modes.

- `ne_10m_admin_1_states_provinces_lines_north_50.geojson`
  - Natural Earth 1:10m Admin-1 state/province boundaries.
  - Northern Hemisphere only.
  - Loaded lazily at closer zoom levels.
  - No corresponding Southern Hemisphere runtime file is required because
    the Natural Earth source contains no Admin-1 features intersecting the
    Studio's 50S-90S Antarctic workspace.

### Populated places and scientific stations

- `ne_10m_populated_places_simple_north_50.geojson`
  - Natural Earth 1:10m populated places for the Northern Hemisphere
    polar workspace.

- `ne_10m_populated_places_simple_south_50.geojson`
  - Natural Earth 1:10m populated places and scientific stations for the
    Southern Hemisphere polar workspace.

Place properties are restricted to the fields required by the Studio's
label-selection, zoom-threshold, Unicode-name, and collision-priority logic.

### Physical geography

- `ne_50m_coastline_polar_50.geojson`
  - Natural Earth 1:50m coastline.
  - Contains coastline features reaching either polar workspace.
  - Used in both Northern and Southern Hemisphere modes.

- `ne_50m_lakes_polar_50.geojson`
  - Natural Earth 1:50m lake polygons.
  - Contains lake features reaching either polar workspace.
  - Used in both Northern and Southern Hemisphere modes.

- `ne_50m_antarctic_ice_shelves_lines_south_50.geojson`
  - Natural Earth 1:50m Antarctic ice-shelf edge linework.
  - Southern Hemisphere only.
  - Rendered separately from ordinary coastline so floating ice-shelf
    boundaries remain cartographically distinguishable.

## Rendering hierarchy

The Studio-controlled polar reference layers are ordered approximately as:

- Raster polar basemap
- Lakes
- Coastline
- Antarctic ice-shelf edges
- Admin-0 / Admin-1 political boundaries
- Marine labels
- Place and scientific-station points
- Place and scientific-station labels
- 50-degree polar workspace mask
- WRF domains and interactive editing overlays

Reference layers do not capture pointer events and must never interfere with
WRF-domain dragging, resizing, nesting, or other map interaction.

## Scope

These files affect browser cartography only.

They do not alter:

- WPS projection parameters
- WRF projection mathematics
- WRF domain geometry
- domain nesting
- namelist.wps generation
- namelist.input generation
