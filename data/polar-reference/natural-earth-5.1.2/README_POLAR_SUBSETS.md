# WRF Configuration Studio Polar Natural Earth Data

These GeoJSON files are runtime subsets derived from Natural Earth vector
data version 5.1.2.

Upstream project:
https://www.naturalearthdata.com/

Upstream vector repository:
https://github.com/nvkelso/natural-earth-vector

Runtime subset policy:

- Browser polar workspace begins at 50 degrees latitude.
- Admin-0 includes features touching either 50N-90N or 50S-90S.
- Admin-1 is included only for the Northern Hemisphere because the Natural
  Earth 10m Admin-1 source contains no features intersecting the Studio's
  50S-90S Antarctic workspace.
- Populated places are split into separate Northern and Southern Hemisphere
  files.
- Boundary feature properties are removed because the Studio uses only their
  geometry.
- Populated-place properties are restricted to the fields required by the
  Studio's label-selection and collision-priority logic.

These files affect browser cartography only. They do not alter WPS projection
parameters or WRF domain geometry.
