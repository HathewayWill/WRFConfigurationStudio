# 🌎 WRF Configuration Studio

**WRF Configuration Studio** is a browser-based configuration environment for designing Weather Research and Forecasting Model domains, editing `namelist.wps`, editing `namelist.input`, exporting `namelist.obsproc`, and reviewing WRF, WRFDA, OBSPROC, Registry, and compatibility-rule metadata.

WRF Configuration Studio is distributed as a static browser application and can be used through a local HTTP server or a static website host such as GitHub Pages.

The project continues the technical lineage of browser-based WRF domain design tools, including the WRF Domain Wizard web build. The original WRF Domain Wizard project by Jiří Richter remains credited in the About section and project documentation. WRF Configuration Studio also acknowledges earlier NOAA Forecast Systems Laboratory WRF Standard Initialization GUI work as part of the broader history of graphical WRF configuration and initialization tools.

---

## Package overview

```text
Application label: WRF Configuration Studio v1.0.0
Compatibility rules: 184 total, 184 valid/enforced, 0 unreviewed, 0 needs_review
Primary package contents: static browser app, runtime catalogs, source/provenance data, polar reference cartography, examples, documentation, and validation tools
```

---

## What WRF Configuration Studio includes

- Interactive WRF domain creation and editing
- Standard, Northern Hemisphere, and Southern Hemisphere map modes
- Polar Stereographic domain support with automatic Northern/Southern Hemisphere routing
- Regional latitude-longitude and rotated latitude-longitude domain support
- Polar reference cartography, including coastlines, lakes, administrative boundaries, populated-place labels, marine labels, and Antarctic ice-shelf lines
- Latitude-longitude overlap and near-360-degree domain safeguards
- `namelist.wps` workflow support
- Full-catalog `namelist.input` editor
- WRFDA groups exposed as `&wrfvar*`
- OBSPROC records displayed as `obsproc_record1` through `obsproc_record9` in the editor and exported as `&record1` through `&record9` in `namelist.obsproc`
- WRF Registry metadata for reference and discovery
- Runtime JSON catalogs for browser-based use
- Validated WRF namelist compatibility-rule engine
- WRFDA and OBSPROC workflow compatibility rules
- WRFDA and OBSPROC workflow presets
- Collapsed group warning/error highlighting
- Click-to-jump compatibility issue navigation
- Natural numeric WRFVAR group sorting, so `wrfvar1`, `wrfvar2`, `wrfvar3`, and later groups appear in numeric order
- Version-aware metadata support for the stable WRF 4.7.1 baseline and the development `4.8.1-dev` Registry preview
- Required-field save warnings
- Suggested starting values for `time_step`, `radt`, `run_*`, and `cudt`, including automatic `time_step ≈ 6 × d01 dx_km` initialization when appropriate
- Global and polar graticule behavior with collision-aware geographic and place labeling
- Desktop touch-screen and trackpad interaction fixes
- Desktop browser compatibility shims for Chrome, Edge, Firefox, and Safari
- Local vendored JavaScript, CSS, and webfont dependencies
- Raw provenance data under `data/raw/`
- Source/reference materials under `docs/references/`
- WRF example documentation and test-case namelists under `examples/`
- Package validation tools under `tools/`

---

## Important WRF version note

WRF Configuration Studio currently includes a development Registry preview labeled:

```text
data/raw/wrf/4.8.1-dev/
```

That material is retained as development/provenance metadata and is separate from the stable WRF 4.7.1 baseline used for version-aware reference support.

Use this label when describing the material:

```text
WRF 4.8.1-dev Registry preview
```

---

## Compatibility-rule engine

WRF Configuration Studio includes a conservative validated compatibility-rule framework for `namelist.input`.

Validated-rule state for this package:

```text
184 total compatibility rules
184 valid/enforced rules
0 unreviewed rules
0 needs_review rules
```

Only rules with `validationStatus: "valid"` are enforced by the browser interface. In this package, every compatibility rule in the runtime validation file is valid and enforced according to its rule strength and trigger conditions.

Rule strengths are used as follows:

```text
Hard      configuration conflicts or requirements that should be treated as errors
Soft      warnings where user review is recommended
Workflow  external-file, domain-role, compile-option, or workflow guidance
```

Supported compatibility-condition modes include:

```text
active
set
required
truthy
falsy
equals
one_of
any_of
not_equals
not_one_of
non_zero
user_edited
user_edited_one_of
user_edited_non_zero
greater_than
greater_than_or_equal
less_than
less_than_or_equal
between
outside_range
```

The browser interface displays the number of validated rules being enforced and separates hard errors, soft warnings, workflow guidance, and source/reference metadata.

---

## Quick start

Use a local HTTP server rather than opening `index.html` directly. Static JSON catalogs load more reliably from an HTTP server than from the browser's direct file mode.

From the repository root:

```bash
python3 -m http.server 8001
```

Then open:

```text
http://127.0.0.1:8001
```

Convenience launchers are also provided:

```text
Windows:      launch-local.bat
macOS:        launch-local.command
Linux/macOS:  launch-local.sh
Python:       python3 launch_local_server.py
```

---

## Validate the package

From the repository root:

```bash
python3 tools/validate_release.py
```

Expected validation summary:

```text
Compatibility rules:
  total: 184
  statuses: Counter({'valid': 184})
  strengths: Counter({'Hard': 125, 'Workflow': 35, 'Soft': 24})
Compatibility numeric condition mode tests passed.
Release validation passed.
```

Optional JavaScript syntax checks:

```bash
node --check src/namelist/namelist-compatibility-engine.js
node --check src/namelist/namelist-runtime-engine.js
node --check src/namelist/namelist-input-editor.js
node --check src/tools/wps-tools.js
node --check tools/test_compatibility_condition_modes.js
```

---

## Supported desktop browsers

Supported desktop browsers:

- Windows: Chrome, Edge, Firefox
- macOS: Safari, Chrome, Firefox
- Linux: Chrome/Chromium, Firefox, Edge

Mobile layouts are not a supported target for this package.

---

## Repository layout

```text
WRFConfigurationStudio/
├── index.html
├── README.md
├── LICENSE
├── package.json
├── launch-local.sh
├── launch-local.bat
├── launch-local.command
├── launch_local_server.py
├── .nojekyll
├── src/
├── styles/
├── vendor/
├── images/
├── img/
├── data/
│   ├── runtime/
│   ├── raw/
│   │   ├── registry/
│   │   └── wrf/
│   └── polar-reference/
├── examples/
├── docs/
│   ├── images/
│   ├── references/
│   └── user-guide/
└── tools/
    ├── validate_release.py
    └── test_compatibility_condition_modes.js
```

---

## Folder guide

### `src/`

Main browser application source code.

Important files include:

```text
src/core/wrf-domain-wizard.js
src/core/browser-compat.js
src/core/app-version.js
src/namelist/namelist-input-editor.js
src/namelist/namelist-compatibility-engine.js
src/namelist/namelist-runtime-engine.js
src/tools/wps-tools.js
src/tools/polar-domain-mode.js
src/tools/polar-reference-overlay.js
```

`src/core/wrf-domain-wizard.js` contains the large domain-map and WPS editing layer inherited from the browser domain-wizard lineage. Smaller first-party layers under `src/namelist/` and `src/tools/` add the namelist editor, compatibility engine, WRFDA/OBSPROC workflow logic, WPS helper panels, polar-mode routing, and polar reference overlays.

### `styles/`

Project CSS files.

```text
styles/wrf-domain-wizard.css
styles/wrf-domain-wizard.min.css
styles/wps-tools.css
```

### `vendor/`

Vendored browser dependencies used by the local/static web application.

```text
vendor/css/
vendor/js/
vendor/webfonts/
```

These files are included so the application can run locally without a package install step. They should not be hand-commented as first-party source files.

### `data/runtime/`

Browser-ready runtime JSON catalogs used by the application.

Important files include:

```text
data/runtime/namelist.catalog.json
data/runtime/namelist.input.catalog.json
data/runtime/namelist.input.compatibility.validated.json
data/runtime/namelist.obsproc.catalog.json
data/runtime/namelist.registry.merged.v3.json
data/runtime/namelist.registry.group_index.v3.json
```

Runtime JSON files are generated or curated data. JSON does not support comments, so explanatory notes are stored in metadata fields and in `docs/SOURCE_FILE_NOTES.md`.

### `data/raw/`

Raw and provenance-oriented source data used to support the runtime catalogs.

Important contents include:

```text
data/raw/registry/
data/raw/wrf/
data/raw/wrf/4.8.1-dev/
```

### `data/polar-reference/`

Compact browser-ready geographic reference data used by the polar map modes.

Important contents include Natural Earth-derived subsets for:

```text
coastlines
lakes
administrative boundaries
populated places
marine labels
Antarctic ice-shelf lines
```

These subsets are used for polar reference cartography and labeling without changing WPS projection parameters.

### `examples/`

WRF example documentation and test-case namelists retained for reference.

```text
examples/doc/
examples/test/
```

These files are upstream/reference material and are not rewritten as first-party application comments.

### `docs/`

User-facing and maintainer documentation.

Important contents include:

```text
docs/QUICK_START.md
docs/USER_GUIDE.md
docs/TECHNICAL_REFERENCE.md
docs/PROJECT_LINEAGE.md
docs/SOURCE_FILE_NOTES.md
docs/COMMENT_AND_NOTES_AUDIT.md
docs/GITHUB_WEBSITE_STRUCTURE.md
docs/references/
docs/user-guide/
```

### `tools/`

Package validation tools.

```text
tools/validate_release.py
tools/test_compatibility_condition_modes.js
```

---

## Documentation

Primary documentation:

- [Quick Start](docs/QUICK_START.md)
- [User Guide](docs/USER_GUIDE.md)
- [Technical Reference](docs/TECHNICAL_REFERENCE.md)
- [Project Lineage](docs/PROJECT_LINEAGE.md)
- [Source File Notes](docs/SOURCE_FILE_NOTES.md)
- [Comment and Notes Audit](docs/COMMENT_AND_NOTES_AUDIT.md)
- [GitHub Website Structure](docs/GITHUB_WEBSITE_STRUCTURE.md)

User-guide images are stored in:

```text
docs/images/user-guide/
```

The printable DOCX user guide is stored in:

```text
docs/user-guide/print/WRF_CONFIG_STUDIO_WEBSITE_USER_GUIDE_ONLINE_LOCAL.docx
```

---

## Publication and citation language

For publications, this software can be described as:

> WRF Configuration Studio is a browser-based WRF configuration environment for standard, polar, and regional latitude-longitude domain design, `namelist.wps` editing, `namelist.input` editing, `namelist.obsproc` export, and metadata-assisted WRF configuration review. The package includes Northern and Southern Hemisphere polar map modes, polar reference cartography, automatic hemisphere routing for Polar Stereographic domains, a conservative validated compatibility-rule engine with 184 valid rules, WRFDA and OBSPROC workflow presets, issue navigation, and runtime Registry metadata for configuration review.

Suggested limitation statement:

> The compatibility-rule system is not intended to exhaustively encode every possible WRF namelist interaction. It prioritizes safe enforcement and clear user guidance. Rules that require external files, compile-time configuration, or domain-role interpretation are shown as workflow guidance rather than silent assumptions.

---

## NOAA/FSL WRF SI GUI lineage

WRF Configuration Studio acknowledges the earlier NOAA Forecast Systems Laboratory / Forecast Systems Laboratory WRF Standard Initialization GUI work by Paula T. McCaslin, John R. Smart, Brent Shaw, and Brian D. Jamison.

That work demonstrated a graphical workflow for WRF domain localization, projection and grid editing, initialization setup, and user guidance, and it is part of the technical lineage behind later WRF domain tools.

The historical reference PDF is included at:

```text
docs/references/WRF_GUI_original_source_69852.pdf
```

---

## WRF Domain Wizard lineage

WRF Configuration Studio continues the technical lineage of the WRF Domain Wizard web build.

The original WRF Domain Wizard project by Jiří Richter remains credited in the About section and project documentation. Legacy or internal source code names may still reference WRF Domain Wizard where needed for compatibility or historical attribution.

---

## License


This project is distributed under the GPL-3.0 License.

```text
GPL-3.0 License
https://choosealicense.com/licenses/gpl-3.0/
```

---

## Online map mode

This browser build uses online tile providers for map backgrounds. The application source, runtime metadata, and compact polar reference cartography are included locally, but background map tiles require network access unless the application is configured to point to local or alternative tile services.

---

## Repository identity

Public app name:

```text
WRF Configuration Studio
```

Repository name:

```text
WRFConfigurationStudio
```
