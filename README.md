# 🌎 WRF Configuration Studio

**WRF Configuration Studio** is a browser-based configuration environment for designing Weather Research and Forecasting Model domains, editing `namelist.wps`, editing `namelist.input`, exporting `namelist.obsproc`, and reviewing WRF, WRFDA, OBSPROC, Registry, and compatibility-rule metadata.

This package is the current stable main checkpoint prepared for the public release review. It is intended to be used as a static web application through a local HTTP server or a static website host such as GitHub Pages.

The project continues the technical lineage of browser-based WRF domain design tools, including the WRF Domain Wizard web build. The original WRF Domain Wizard project by Jiří Richter remains credited in the About section and project documentation. WRF Configuration Studio also acknowledges earlier NOAA Forecast Systems Laboratory WRF Standard Initialization GUI work as part of the broader history of graphical WRF configuration and initialization tools.

---

## Current release checkpoint

```text
Application label: WRF Configuration Studio v1.0.0
Release channel: stable main public-release review
Compatibility rules: 184 total, 184 valid/enforced, 0 unreviewed, 0 needs_review
Primary package contents: static browser app, runtime catalogs, source/provenance data, examples, documentation, and validation tools
```

---

## What WRF Configuration Studio includes

- Interactive WRF domain creation and editing
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
- Version-aware metadata support for the stable WRF 4.7.1 baseline and the unreleased `4.8.1-dev` Registry preview
- Required-field save warnings
- Suggested starting values for `time_step`, `radt`, `run_*`, and `cudt`
- 360-degree map and graticule behavior
- Desktop touch-screen and trackpad interaction fixes
- Desktop browser compatibility shims for Chrome, Edge, Firefox, and Safari
- Local vendored JavaScript, CSS, and webfont dependencies
- Raw provenance data under `data/raw/`
- Source/reference materials under `docs/references/`
- WRF example documentation and test-case namelists under `examples/`
- Release validation tools under `tools/`

---

## Important WRF version note

WRF Configuration Studio currently includes a development Registry preview labeled:

```text
data/raw/wrf/4.8.1-dev/
```

That material is **not** labeled as an official WRF release. It is retained as development/provenance data from the WRF `release-v4.8.1` source branch and should be treated as an unreleased preview until an official WRF release tag exists.

Use these labels when describing this material:

```text
WRF 4.8.1-dev
unreleased Registry preview
source branch metadata
not an official WRF release tag
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

## Validate the release

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

Mobile layouts are not a release target for this package.

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
│   └── raw/
│       ├── registry/
│       └── wrf/
├── examples/
├── docs/
│   ├── images/
│   ├── references/
│   ├── release-notes/
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
```

`src/core/wrf-domain-wizard.js` contains the large domain-map and WPS editing layer inherited from the browser domain-wizard lineage. Smaller first-party layers under `src/namelist/` and `src/tools/` add the newer namelist editor, compatibility engine, WRFDA/OBSPROC workflow logic, and WPS helper panels.

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
data/raw/wrf/releases/
```

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
docs/RELEASE_HISTORY.md
docs/SOURCE_FILE_NOTES.md
docs/COMMENT_AND_NOTES_AUDIT.md
docs/GITHUB_WEBSITE_STRUCTURE.md
docs/references/
docs/release-notes/
docs/user-guide/
```

### `tools/`

Release validation tools.

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
- [Release History](docs/RELEASE_HISTORY.md)
- [Source File Notes](docs/SOURCE_FILE_NOTES.md)
- [Comment and Notes Audit](docs/COMMENT_AND_NOTES_AUDIT.md)
- [GitHub Website Structure](docs/GITHUB_WEBSITE_STRUCTURE.md)
- [Publication Layout](docs/release-notes/PUBLICATION_LAYOUT.md)

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

> WRF Configuration Studio is a browser-based WRF configuration environment for domain design, `namelist.wps` editing, `namelist.input` editing, `namelist.obsproc` export, and metadata-assisted WRF configuration review. The current package includes a conservative validated compatibility-rule engine with 184 valid rules, WRFDA and OBSPROC workflow presets, issue navigation, and runtime Registry metadata for configuration review.

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
---

## Online map mode

This browser build uses online tile providers for map backgrounds. The application source and runtime metadata are included locally, but map tiles require network access unless the application is configured to point to local or alternative tile services.

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

---

## Release summary

```text
release label: WRF Configuration Studio v1.0.0 stable main public-release review
compatibility rules: 184 total, 184 valid, 0 unreviewed, 0 needs_review
rule strengths: 125 Hard, 35 Workflow, 24 Soft
WRF 4.8.1 material: 4.8.1-dev, unreleased Registry preview only
package SHA256: generate after building the final release zip
```
