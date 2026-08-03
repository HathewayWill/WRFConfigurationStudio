# 🌎 WRF Configuration Studio

**WRF Configuration Studio** is a browser-based configuration environment for designing Weather Research and Forecasting Model domains, editing `namelist.wps` and `namelist.input`, and exploring WRF, WRFDA, OBSPROC, Registry, and compatibility-rule metadata.

This README is written for the first public web release of WRF Configuration Studio.

The project continues the technical lineage of browser-based WRF domain design tools, including the WRF Domain Wizard web build. The original WRF Domain Wizard project by Jiří Richter remains credited in the About section and project documentation. WRF Configuration Studio also acknowledges earlier NOAA Forecast Systems Laboratory WRF Standard Initialization GUI work as part of the broader history of graphical WRF configuration and initialization tools.

---

## Current validated release checkpoint

```text
Compatibility rules: 164 total, 144 valid/enforced, 15 unreviewed, 5 needs_review
Validated UI checkpoint: stable-namelist-description-formatting-20260802
Package: build from the desired stable tag with git archive, then verify with unzip -t and sha256sum
```

---

## What WRF Configuration Studio includes

- Interactive WRF domain creation and editing
- `namelist.wps` workflow support
- Full-catalog `namelist.input` editor
- WRFDA groups exposed as `&wrfvar*`
- OBSPROC records exposed as `&obsproc_record1` through `&obsproc_record9`
- WRF Registry metadata for reference and discovery
- Runtime JSON catalogs for browser-based use
- Validated WRF namelist compatibility-rule engine
- Version-aware compatibility checks for WRF ≤ 4.7.1 and WRF 4.8.x metadata
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

## Compatibility-rule engine

WRF Configuration Studio includes a conservative validated compatibility-rule framework for `namelist.input`.

Validated-rule state for this release:

```text
164 total compatibility rules
144 valid/enforced rules
15 unreviewed rules retained but not enforced
5 needs_review rules retained but not enforced
```

Only validated rules are enforced by the browser interface. Rules marked `unreviewed` or `needs_review` are retained in the metadata for transparency and future review, but they are not enforced.

This behavior is intentional. The compatibility engine prioritizes safe enforcement over aggressive rule coverage.

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
user_edited_non_zero
greater_than
greater_than_or_equal
less_than
less_than_or_equal
between
outside_range
```

Example conservative rules in this release:

```text
BUCKET-J
- Enforced only when bucket_j is greater than 0.
- Avoids warnings on the default inactive value.

CUGD-AVEDX-USER
- Enforced only when the user edits cugd_avedx to a nonzero value.
- Avoids default-page noise while still warning when the setting is actively used.
```

The browser interface displays the number of validated rules being enforced and separates hard errors, soft warnings, workflow guidance, and review-only metadata.

---

## Quick start

Use a local HTTP server rather than opening `index.html` directly.

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
  total: 164
  statuses: Counter({'valid': 144, 'unreviewed': 15, 'needs_review': 5})
  strengths: Counter({'Hard': 120, 'Soft': 24, 'Workflow': 20})
Compatibility numeric condition mode tests passed.
Release validation passed.
```

Optional JavaScript syntax checks:

```bash
node --check src/namelist/namelist-compatibility-engine.js
node --check src/namelist/namelist-input-editor.js
node --check tools/test_compatibility_condition_modes.js
```

---

## Supported desktop browsers

Supported desktop browsers:

- Windows: Chrome, Edge, Firefox
- macOS: Safari, Chrome, Firefox
- Linux: Chrome/Chromium, Firefox, Edge

Mobile layouts are not a release target for this public release.

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

```text
src/core/
src/namelist/
src/shared/
src/tools/
src/wps/
```

Important files include:

```text
src/core/wrf-domain-wizard.js
src/namelist/namelist-input-editor.js
src/namelist/namelist-compatibility-engine.js
src/namelist/namelist-runtime-engine.js
```

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

These files are included so the application can run locally without a package install step.

### `data/runtime/`

Browser-ready runtime JSON catalogs used by the application.

Important files include:

```text
data/runtime/namelist.catalog.json
data/runtime/namelist.input.catalog.json
data/runtime/namelist.input.compatibility.validated.json
data/runtime/namelist.registry.merged.v3.json
data/runtime/namelist.registry.group_index.v3.json
```

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

### `docs/`

User-facing and reference documentation.

Important contents include:

```text
docs/QUICK_START.md
docs/USER_GUIDE.md
docs/TECHNICAL_REFERENCE.md
docs/PROJECT_LINEAGE.md
docs/RELEASE_HISTORY.md
docs/references/
docs/release-notes/
docs/user-guide/
```

### `docs/images/`

User-guide screenshots and visual documentation assets.

```text
docs/images/user-guide/
```

### `docs/references/`

Reference and lineage materials.

Important files include:

```text
docs/references/WRF_GUI_original_source_69852.pdf
docs/references/v4_technote.pdf
docs/references/legacy_source_docs.zip
```

The legacy source documentation archive is retained as part of the project provenance trail.

### `docs/release-notes/`

Release-note snapshots and publication layout notes.

```text
docs/release-notes/PUBLICATION_LAYOUT.md
docs/release-notes/WRF_v4.7.1_release.json
docs/release-notes/WRF_v4.7.1_release_notes.md
docs/release-notes/WRF_v4.8.0_release.json
docs/release-notes/WRF_v4.8.0_release_notes.md
```

### `docs/user-guide/`

User-guide publication assets.

```text
docs/user-guide/print/WRF_CONFIG_STUDIO_WEBSITE_USER_GUIDE_ONLINE_LOCAL.docx
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

> WRF Configuration Studio is a browser-based WRF configuration environment for domain design, `namelist.wps` editing, `namelist.input` editing, and metadata-assisted WRF configuration review. The first public release includes a conservative validated compatibility-rule engine that enforces only reviewed rules while retaining uncertain or workflow-dependent rules as non-enforcing metadata.

Suggested limitation statement:

> The compatibility-rule system is not intended to exhaustively encode every possible WRF namelist interaction. It prioritizes safe enforcement: validated rules are active, while uncertain, workflow-dependent, or manually reviewed rules remain documented but non-enforcing until additional validation or metadata support is added.

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

[License:](https://github.com/HathewayWill/WRFConfigurationStudio/blob/main/LICENSE) GPL-3.0 License

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
rules: 164 total, 144 valid, 15 unreviewed, 5 needs_review
latest validated UI checkpoint before final package: stable-namelist-description-formatting-20260802
package SHA256: generate after building the final release zip
```
---
<a href='https://mapmyvisitors.com/web/1c5d0'  title='Visit tracker'><img src='https://mapmyvisitors.com/map.png?cl=ffffff&w=500&t=tt&d=MQhYoa3dqHKn__1fbkfKyN4JddYCLARtWhmyUaa6iXg&co=2d78ad&ct=ffffff'/></a>
