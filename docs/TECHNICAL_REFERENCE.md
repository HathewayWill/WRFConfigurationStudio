# WRF Config Studio Technical Reference

Generated: 2026-05-04T23:20:07Z

This document consolidates technical notes that were previously separate files.


---

## Current Export Split

Generated: 2026-05-04T23:20:07Z

## Issue fixed

OBSPROC record groups were visible in the main `namelist.input` editor as `&obsproc_record*` groups. That was useful for visibility, but OBSPROC should not be written into `namelist.input`.

## Correct export behavior

WRF Config Studio now separates generated namelist files as follows:

| UI group type | Saved file | Export group name |
|---|---|---|
| WRF core groups | `namelist.input` | unchanged |
| WRFDA groups such as `&wrfvar*` | `namelist.input` | unchanged |
| WRFDA support groups | `namelist.input` | unchanged |
| OBSPROC groups `&obsproc_record*` | `namelist.obsproc` | converted to `&record*` |
| WPS | `namelist.wps` | unchanged |

## UI changes

The `namelist.input` editor footer now includes:

- **Save namelist.input**
- **Save namelist.obsproc**
- **Save both**
- **Copy namelist.input**

The Text tab preview shows `namelist.input` only. OBSPROC is exported through the separate `namelist.obsproc` save path.

## Behavior unchanged

This patch does not change:

- WRFDA group visibility,
- OBSPROC editor visibility,
- runtime catalog metadata,
- map behavior,
- WPS export behavior,
- compatibility metadata policy.

---

## Lambert Update Fix

Generated: 2026-05-04T23:20:07Z

## Issue fixed

Changing **Lambert parallels mode** and pressing **Update** did not apply the selected mode to `truelat1` and `truelat2` before the domain redraw.

## Fix

The Lambert mode dropdown now marks the selected mode as pending. When **Update** is clicked, WRF Config Studio applies the pending Lambert mode to `truelat1` and `truelat2` first, then the existing domain update handler redraws the domain.

## Additional cleanup

- The Lambert mode dropdown now restores the stored mode instead of resetting to `Legacy` every time the panel is injected.
- The UI cue now states that both **Auto-fill projection** and **Update** can apply the selected Lambert mode.

## Behavior unchanged

This patch does not change:
- map wrapping,
- export behavior,
- namelist catalogs,
- WRFDA/OBSPROC exposure,
- browser compatibility,
- touch/trackpad logic.

---

## UI Version Fix

Generated: 2026-05-04T23:20:07Z

## Issue fixed

Some user-facing UI badges still displayed the pre-rebrand `V3.0.0` label after the app title had already been rebranded to `WRF Config Studio v1.0.0`.

## Fixed locations

- Domain sidebar version badge fallback
- Domain Intelligence panel badge
- namelist runtime engine internal version label
- central version fallback in `src/core/wrf-domain-wizard.js`

## Behavior

This is a user-facing label fix only. It does not change:
- domain behavior,
- map wrapping,
- namelist catalogs,
- exports,
- browser compatibility,
- touch/trackpad behavior.

---

## Browser Compatibility

Generated: 2026-05-04T23:20:07Z

## Desktop Browser Compatibility

# Desktop Browser Compatibility

WRF Config Studio V3.0.0 is tested for desktop browsers only in this compatibility pass.

## Supported desktop browser targets

### Windows
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

### macOS
- Safari
- Google Chrome
- Mozilla Firefox

### Linux
- Google Chrome / Chromium
- Mozilla Firefox
- Microsoft Edge

## Local launch requirement

Use a local HTTP server, not direct `file://` launch.

Recommended:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## Compatibility safeguards added

- Element.matches fallback
- Element.closest fallback
- NodeList.forEach fallback
- HTMLCollection.forEach fallback
- Array.from fallback
- Object.assign fallback
- CustomEvent fallback
- requestAnimationFrame fallback
- URL/webkitURL fallback
- Clipboard copy fallback for browsers or local contexts where `navigator.clipboard` is unavailable

## Excluded from this pass

- Android browser testing
- iOS / iPadOS browser testing
- Mobile/touch drag behavior

## Online-Only Browser Compatibility

# Online-Only Browser Compatibility

Release: WRF Config Studio v1.0.0 online-only map build

## Supported use modes

The application can run from a local HTTP server, and the editor/catalog assets are bundled locally. The map background uses online tile providers only.

## Recommended local launch method

For best cross-browser compatibility, run the included local server helper and open the provided local address in a browser. This avoids browser-specific `file://` restrictions that can block local JSON and example-file loading.

Recommended:

```text
python3 launch_local_server.py
```

Then open:

```text
http://127.0.0.1:8000/
```

Windows users may run `START_LOCAL_SERVER.bat`. macOS/Linux users may run `START_LOCAL_SERVER.sh` or `START_LOCAL_SERVER.command` after allowing execution permissions.

## Browser support target

Test target: current desktop releases of Chrome, Edge, Firefox, and Safari on Windows, macOS, and Linux. The app is not intended for Internet Explorer.

## Online map layers

The app loads the normal online OpenStreetMap basemap first. The previous bundled `Offline Vector Base Map` fallback has been removed. If online tiles fail, the map background may not render until the network connection or selected tile provider is available. Domain drawing, WPS editing, namelist.input editing, metadata help, and export remain local.

## Direct file opening

Opening `index.html` directly may work in some browsers, but it is not the recommended compatibility path because browser security rules differ across operating systems and vendors. The local server helper is the supported launch path.

## Current Direction

Desktop browser compatibility is the active target. Mobile and touch-specific behavior is excluded from this pass.

---

## Catalog Notes

Generated: 2026-05-04T23:20:07Z

## V3.1.0 ARW Context Full Catalog

# WRF Config Studio V3.1.0 ARW Context Full Catalog

## Purpose

This release expands the namelist catalog policy to expose all available namelist variables and registry metadata.

## Policy

- Everything visible
- No UI filtering by `uiStatus`
- Previous `uiStatus` values preserved as `uiStatusOriginal`
- Compatibility rules remain inactive
- Dependency hints remain metadata only
- Suggestions remain limited to existing helper behavior such as time step, radt, run duration, and cudt

## Runtime files updated

- `data/runtime/namelist.input.catalog.json`
- `data/runtime/namelist.input.metadata_semantics.json`
- `data/runtime/namelist.input.source_priority.json`
- `data/runtime/namelist.registry.group_index.v3.json`
- `data/runtime/namelist.registry.merged.v3.json`
- `data/runtime/namelist.catalog.json`
- `data/runtime/namelist.obsproc.catalog.json`

## Counts

- Visible namelist.input fields transformed: 1782
- OBSPROC record groups: 9
- OBSPROC variables extracted: 76

## Notes

This is a ARW context catalog expansion. It does not change map rendering, WPS export logic, namelist.input save/export logic, or browser compatibility code.

## V3.1.0 ARW Context Full Catalog, Merged Fixes

# WRF Config Studio V3.1.0 ARW Context Full Catalog, Merged Fixes

## What changed

This build merges all prior V3.1.0 ARW context full-catalog work and exposes OBSPROC records directly in the existing namelist editor group list.

## OBSPROC visibility fix

The separate runtime file remains available:

```text
data/runtime/namelist.obsproc.catalog.json
```

The same record groups are also merged into:

```text
data/runtime/namelist.input.catalog.json
```

They are exposed as:

```text
&obsproc_record1
&obsproc_record2
&obsproc_record3
&obsproc_record4
&obsproc_record5
&obsproc_record6
&obsproc_record7
&obsproc_record8
&obsproc_record9
```

The `obsproc_` prefix avoids collisions with normal WRF, WRFDA, and registry groups.

## Counts

- OBSPROC groups merged into main catalog: 9
- OBSPROC variables merged into main catalog: 76
- Total main catalog groups after merge: 55

## Policy

- Everything visible
- No UI filtering
- Compatibility validation inactive
- Dependency hints and compatibility data remain metadata/reference only
- No WPS export logic changes
- No namelist.input save/export logic changes
- No map behavior changes

---

## Technical Reports

Generated: 2026-05-04T23:20:07Z

## GROUP_VALIDATION_REPORT.txt

Canonical inventory validation for v0.9.1

Groups: 46
Variables: 1782

## NAMELIST_INPUT_PDF_DEFAULTS_REPORT.txt

WRF Config Studio v4.0.0.0 namelist.input PDF default pass

Rule applied: nonblank Users Guide Default Setting values seed the editor; blank Default Setting cells seed blank and require a user selection.
Matched Users Guide variables in runtime editor catalog: 726
Published PDF defaults applied: 715
Blank/default-required fields: 11

Blank/default-required fields:
  - domains.ocean_s
  - domains.ocean_t
  - domains.ocean_z
  - domains.time_step
  - domains.time_step_dfi
  - physics.bl_pbl_physics
  - physics.cu_physics
  - physics.mp_physics
  - physics.sf_sfclay_physics
  - physics.sf_surface_physics
  - time_control.io_form_auxhist2

Manual PDF extraction fixes applied:
  - noah_mp.noahmp_acc_dt = 0.0
  - noah_mp.soiltstep = 0.0
  - physics.ra_sw_physics = -1

## PHYSICS_SUBSECTION_REPORT.txt

PHYSICS_SUBSECTION_REPORT
Total physics variables: 285
Assigned to subsection: 285

[microphysics] 48
[radiation] 39
[surface_layer] 6
[land_surface] 16
[urban] 5
[pbl] 26
[cumulus] 26
[ocean_lake_seaice] 18
[lightning] 9
[windfarm] 6
[irrigation] 8
[specialized] 78

Unassigned: 0

## REGISTRY_METADATA_AUDIT_V3.0.0.0.md

# WRF Config Studio V3.0.0 Registry Metadata Audit

Generated: 2026-05-04T23:20:07Z

This audit describes the registry metadata layer included in V3.0.0.

## Totals

- Registry files included: 40
- Parsed registry records: 11262
- Parsed rconfig records: 2075
- Unique namelist variables discovered: 1877
- Groups discovered: 47
- Potential conflicts retained for review: 19

## Design Rule

V3.0.0 includes registry variables and metadata for user reference and control. It does not re-enable compatibility validation, auto-fix enforcement, or hidden dependency policing.

Required-field save warnings remain active because they prevent malformed exports.

Suggested starting values remain active for:
- domains.time_step
- physics.radt
- time_control.run_*
- physics.cudt when available in the editor state

## Groups

- physics: 278
- fire: 164
- domains: 131
- fdda: 126
- chem: 118
- time_control: 118
- unknown: 114
- stoch: 96
- dynamics: 87
- wrfvar4: 82
- wrfvar14: 67
- wrfvar5: 64
- wrfvar7: 35
- wrfvar1: 30
- scm: 25
- noah_mp: 24
- perturbation: 24
- wrfvar13: 24
- bdy_control: 22
- wrfvar2: 20
- dfi_control: 19
- wrfvar11: 19
- wrfvar12: 18
- obs_opt: 17
- radar_da: 17
- wrfvar9: 15
- afwa: 14
- diags: 14
- wrfvar16: 14
- wrfvar6: 14
- tc: 9
- wrfvar15: 8
- wrfvarchem: 8
- wrfvar10: 6
- pio_control: 5
- wrf_cmaq: 5
- wrfvar8: 5
- grib2: 4
- wrfvar17: 4
- wrfvar3: 4
- namelist_adios2: 3
- ideal: 1
- wrfvar18: 1
- wrfvar19: 1
- wrfvar20: 1
- wrfvar21: 1
- wrfvar22: 1

## SOURCE_PRIORITY_IMPLEMENTATION.md

# Source Priority Implementation

Generated: 2026-05-04T23:20:07Z

## Source precedence
1. `namelist.wps`
2. user value
3. Users Guide default tables
4. `run/README.namelist`
5. Registry fallback

## Applied in this pass
- Added `data/runtime/namelist.input.source_priority.json`
- Seeded core groups:
  - `time_control`
  - `domains`
  - `physics`
  - `dynamics`
  - `bdy_control`

## Runtime intent
This file is intended to drive default initialization and protected WPS-mastered synchronization in a future code pass.

## Important rules
- WPS-mastered fields must not be silently overwritten by later default layers.
- Compatibility rules should run after default resolution.
- Registry remains the structure/type authority.


## Runtime status in this build
- Users Guide defaults are now selected first for startup seeding where a field is not WPS-mastered.
- `run/README.namelist` is the second default fallback.
- Registry defaults are only used after Users Guide and README layers for startup seeding.
- `namelist.wps` overlay still runs after initialization for WPS-mastered fields.


## Clean startup seeding flow in this build
The namelist editor now uses a dedicated startup seeding flow instead of relying on implicit state population:

1. build merged catalog
2. seed editor state from catalog defaults
3. expand entry counts for the current `max_dom`
4. overlay WPS-mastered values
5. render the editor

This keeps the namelist.wps editor unchanged while making namelist.input startup deterministic.


## Users Guide subsection ordering in this build
- Subsection blocks now follow the subsection order map instead of falling back to alphabetical subsection sorting.
- Repeated subsection headers caused by render-order jumps are reduced by grouping fields according to subsection order first.
- Subsection blocks are visually indented so they read as children of the main namelist group header.


## Subsection state and entry labels in this build
- Subsection open/closed state now persists across rerenders, including compatibility-color rerenders.
- Multi-value labels only use domain-style `d01`, `d02`, etc. for `max_dom` or `max_domains` fields.
- Other repeated-entry fields now use neutral labels or entry-type-specific prefixes so non-domain arrays are not mistaken for extra domains.


## Clean rebuild array rendering in this build
- Large non-domain repeated-entry variables now render in a compact array editor instead of exploding into dozens of visible rows.
- Domain-style repeated entries still render as per-domain rows.
- Subsection state persistence is preserved across compatibility-color rerenders.


## Text generation ordering in this build
- The namelist text-generation tab now uses the same ordered field list as the editor renderer.
- Group order still follows the editor group order.
- Variable order inside each group now follows subsection order, enabled/core precedence, and explicit field ordering the same way the editor does.


## Stable core-state rebuild in this build
- WPS-fed domain arrays for namelist.input now read from all grid rows, not only currently visible rows.
- Lambert parallels mode initializes to Legacy on startup.
- Polar projection now shows the polar-specific pole latitude and pole longitude fields in the namelist.wps editor.


## Metadata semantics rebuild in this build
Generated: 2026-05-04T23:20:07Z

This build adds a clean metadata semantics layer to support the next runtime pass.

### Core rule
A blank Users Guide default cell means:
- no published default

It does not mean:
- numeric zero
- logical false
- empty array to be auto-expanded as zeroes

### Separation of concerns
- source priority controls where values come from
- semantics controls whether a blank cell is a real default or a user-required/conditional field
- option metadata may exist even when a published default does not

### Intended next-runtime use
Before startup seeding:
1. inspect semantics for each field
2. if `hasPublishedDefault=false` and no alternate authoritative source exists, leave the field unset
3. keep option menus and descriptive help active
4. mark user-required and conditional fields visibly in the editor


## Blank selection option behavior in this build
- Selection and logical fields now render a true blank option.
- A blank Users Guide default remains blank in the UI instead of being coerced to the first enum choice.
- Blank selections serialize as unset values rather than forced numeric or logical defaults.


## Semantics-wired startup in this build
- The runtime now loads `namelist.input.metadata_semantics.json` during editor startup.
- Catalog default resolution consults semantics before falling through to registry defaults.
- For fields marked `no_published_default`, blank Users Guide defaults remain blank instead of resolving to registry zero.
- Blank array entries are preserved during array-length reconciliation for semantically blank fields.


## Condensed runtime catalog in this build
- The namelist editor now prefers a single runtime file: `data/runtime/namelist.input.catalog.json`.
- That catalog carries merged groups, compatibility, semantics, and source-priority context together.
- This reduces the number of runtime files the editor must load and lowers the chance of load-order regressions.
- Raw source files are still preserved for reference and future regeneration, but the browser runtime now prefers the condensed catalog.


## Save dialog isolation and index cleanup in this build
- The namelist.input export dialog is now isolated from the main editor modal.
- Save no longer attempts to stack dialogs directly on top of each other.
- Duplicate generic button IDs in index.html were replaced with namespaced IDs to reduce cross-dialog collisions.
- Editor selection and focused field are restored after save-dialog close and normal close/reopen cycles.

## FULL_WRAP_FIX_NOTES.txt

V3.0.0 full-wrap fix

Changed:
- Reworked AutoGraticule so longitude and latitude grid lines render across all visible repeated 360-degree world copies.
- Kept longitude labels canonical while placing them in the correct repeated map copy.
- Reworked WRFDomainGrid display geometry so the primary domain is shifted into the currently visible world copy.
- Added display-only domain copies at adjacent world offsets without changing WPS/namelist output.
- Updated corner markers, resize markers, lock marker, and selected grid lines to use the same display-world shift.
- Removed reliance on Leaflet worldCopyJump for domain visibility.

Unchanged:
- WPS export values
- namelist.input editor behavior
- registry metadata
- runtime engine suggestions

## MIGRATION_CHECKLIST.md

# Structure baseline rebuild checklist

Release target: v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix

Generated: 2026-05-04T23:20:07Z

## Goals
- Separate vendor files from first-party runtime files.
- Create a clearer `src/`, `styles/`, `data/`, and `docs/` layout.
- Preserve current runtime behavior from v3.2.3.6-ARW context-save-dialog-isolation-and-index-fix.
- Prepare the next deeper split of WPS helpers, namelist sync, ordering, and shared tooltips.

## This pass implements
- `vendor/` quarantine for third-party CSS and JS
- `src/core/`, `src/tools/`, `src/namelist/` first-party layout
- `data/raw/` and `data/runtime/` organization
- `styles/` first-party stylesheet layer
- `docs/` documentation and report layer

## Follow-up split planned
- `src/wps/wps-helper-config.js`
- `src/wps/wps-helper-ui.js`
- `src/wps/wps-helper-export.js`
- `src/shared/tooltips.js`
- `src/shared/storage.js`
- `src/shared/dom.js`
- `src/namelist/namelist-sync.js`
- `src/namelist/namelist-save.js`
- `src/namelist/namelist-ordering.js`
- `src/namelist/namelist-compatibility.js`
- `src/namelist/namelist-templates.js`

## Acceptance checks
- namelist.wps save/export works
- namelist.input save/export works
- WPS helper labels still work
- WPS to namelist propagation still works
- dx and dy still export for all active domains
- example test/doc references still open

---

## Docs Section Rebuild Notes

Generated: 2026-05-04T23:20:07Z

## Build target

`WRFDomainWizard-web_V3.1.0_ARW context-full-catalog-touch-trackpad-docs-fix.zip`

## Source guidance

The docs folder was rebuilt using the uploaded consolidated documentation package structure as the guide.

## Primary documents

- `README.md`
- `CONSOLIDATED_RELEASE_HISTORY.md`
- `CONSOLIDATED_TECHNICAL_REPORTS.md`
- `CONSOLIDATED_BROWSER_COMPATIBILITY.md`
- `CONSOLIDATED_V3.1_CATALOG_NOTES.md`
- `USER_GUIDE_V3.1.0_BETA_SUPPLEMENT.md`

## Preservation folders

- `originals/` contains the original patch notes, changelog, reports, compatibility notes, and prior user guide.
- `references/` contains the original WRF GUI PDF reference.

## Package-local compatibility files

For compatibility with prior package expectations, these are also available at the root of `docs/`:

- `CHANGELOG.txt`
- `ALL_PATCH_NOTES.txt`

## Behavior

This is a documentation-only package rebuild. It does not change source code, runtime catalog data, export logic, map interaction behavior, or browser compatibility logic.

---

## User Guide Update Note

Generated: 2026-05-04T23:20:07Z

## Updated for current export behavior

The user guide now documents:

- WRFDA groups remain in `namelist.input`.
- OBSPROC records export separately as `namelist.obsproc`.
- UI groups named `&obsproc_record*` are converted to `&record*` in `namelist.obsproc`.
- `namelist.input` excludes OBSPROC groups.
- Save options include `Save namelist.input`, `Save namelist.obsproc`, and `Save both`.
- Lambert parallels mode and Update behavior are documented.
- touch/trackpad behavior is documented.

---

## Online-Only Map Mode

Generated: 2026-05-04T23:20:07Z

## Change

The bundled offline vector map mode has been removed.

## Current behavior

WRF Config Studio v1.0.0 uses online tile providers only for the map background.

Available base layers remain:

- OpenStreetMap
- Esri World Topo
- Esri World Street
- Esri NatGeo
- Esri World Imagery
- OpenTopoMap

## What remains local

The app can still be launched through a local HTTP server, and these assets remain bundled locally:

- JavaScript
- CSS
- metadata catalogs
- WRF reference examples
- namelist editor data
- documentation
- export behavior

## What requires online access

The map background requires access to the selected online tile provider.

If online tiles are unavailable, the map background may not render until network access or the selected provider is available.

## Behavior unchanged

This patch does not change:

- domain geometry,
- WPS export,
- namelist.input export,
- namelist.obsproc export,
- WRFDA handling,
- OBSPROC export splitting,
- Lambert parallels behavior,
- browser compatibility shims,
- touch/trackpad handling.


## ARW Context

This package adds the ARW Technical Note v4 as a scientific-context source for the namelist editor. The ARW context is reference-only and does not change export behavior, compatibility policy, or user control. See `BETA_ARW_CONTEXT_V1.1.0.md`.

---

## ARW Context Notes

Generated: 2026-05-04T23:20:07Z

## Status

This is a separate mainline package. The **v1.0.0 is the mainline build**.

## What this ARW context adds

This release incorporates NCAR/TN-556+STR, *A Description of the Advanced Research WRF Model Version 4*, as a scientific-context source for the `namelist.input` editor.

Added files:

```text
docs/references/v4_technote.pdf
data/runtime/namelist.arw_technical_note_context.json
```

## Editor behavior

The Documentation tab can now show an **ARW Technical Note scientific context** block when a selected variable maps to ARW topics such as:

- temporal discretization
- stability constraints
- hybrid vertical coordinate
- map projections
- turbulent mixing and filters
- initialization
- lateral boundary conditions
- nesting
- physics
- stochastic parameterization
- nudging
- WRFDA / data assimilation

The editor also displays small topic badges next to mapped variables in the Editor tab.

## Policy

This release is **reference-only**.

It does not:

- block saves,
- auto-fix values,
- hide variables,
- enforce compatibility,
- change v1.0.0 export behavior,
- change the OBSPROC split,
- change WRFDA placement in `namelist.input`.

## Mainline separation

The ARW context feature is now part of the v1.0.0 mainline package.
