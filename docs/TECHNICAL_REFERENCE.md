# WRF Configuration Studio Technical Reference

This document summarizes the current technical behavior of WRF Configuration Studio v1.0.0 for users and maintainers.

## Current release checkpoint

```text
Compatibility rules: 184 total, 184 valid/enforced, 0 unreviewed, 0 needs_review
Rule strengths: 125 Hard, 35 Workflow, 24 Soft
WRFDA and OBSPROC workflow presets: included
Compatibility issue navigation: included
Natural numeric WRFVAR sorting: included
WRF 4.8.1 material: 4.8.1-dev unreleased Registry preview only
```

## Browser application structure

WRF Configuration Studio is a static browser application. The root `index.html` file loads vendored browser libraries, first-party source under `src/`, styling under `styles/`, and runtime JSON catalogs under `data/runtime/`.

The application should be served through a local HTTP server or a static web host. Direct `file://` loading is not recommended because browser security rules can block JSON catalog loading.

## Main source layers

```text
src/core/wrf-domain-wizard.js
src/core/browser-compat.js
src/core/app-version.js
src/namelist/namelist-input-editor.js
src/namelist/namelist-compatibility-engine.js
src/namelist/namelist-runtime-engine.js
src/tools/wps-tools.js
```

### Domain and WPS layer

The domain-map and WPS layer owns the interactive map, WRF grid geometry, WPS form behavior, domain controls, and `namelist.wps` export support.

### Namelist editor layer

The namelist editor loads runtime catalogs, renders namelist groups and variables, applies WRFDA/OBSPROC workflow presets, evaluates compatibility issues, and exports `namelist.input` plus `namelist.obsproc`.

OBSPROC records are displayed internally as `obsproc_record1` through `obsproc_record9` so they can use the same editor UI. During export, those display groups are written as `&record1` through `&record9` in `namelist.obsproc`.

### Compatibility engine layer

The compatibility engine is data-driven. Runtime rules live in:

```text
data/runtime/namelist.input.compatibility.validated.json
```

The browser engine evaluates trigger conditions, requirement checks, numeric comparisons, user-edited gates, and target-WRF metadata checks. It returns hard errors, soft warnings, and workflow guidance to the editor.

## Runtime catalogs

Browser-ready runtime data lives under:

```text
data/runtime/
```

Important runtime files:

```text
namelist.input.catalog.json
namelist.input.compatibility.validated.json
namelist.obsproc.catalog.json
namelist.registry.merged.v3.json
namelist.registry.group_index.v3.json
namelist.input.metadata_semantics.json
namelist.input.source_priority.json
```

JSON files do not support comments. Explanatory notes are stored in metadata fields and in `docs/SOURCE_FILE_NOTES.md`.

## Raw and provenance data

Raw/provenance data lives under:

```text
data/raw/
```

The `data/raw/wrf/4.8.1-dev/` folder is an unreleased Registry preview. It is not an official WRF release tag.

## WRFDA and OBSPROC support

WRFDA groups remain part of `namelist.input` as `&wrfvar*` groups. OBSPROC records are exported separately as `namelist.obsproc`.

Workflow presets are intended as starting points. They set common companion fields but do not replace user review of the final configuration.

## Issue navigation

The compatibility panel shows counts for errors and warnings. The count buttons jump to the first matching issue. Collapsed namelist groups show warning/error indicators when they contain affected variables, and group-level issue badges can expand and jump to the relevant field.

## WRFVAR group ordering

WRFVAR groups use natural numeric ordering. This keeps groups in a user-readable order such as:

```text
wrfvar1, wrfvar2, wrfvar3, ..., wrfvar10, wrfvar11, ...
```

## Release validation

Run:

```bash
python3 tools/validate_release.py
```

Expected result:

```text
Compatibility rules:
  total: 184
  statuses: Counter({'valid': 184})
  strengths: Counter({'Hard': 125, 'Workflow': 35, 'Soft': 24})
Compatibility numeric condition mode tests passed.
Release validation passed.
```

Optional syntax checks:

```bash
node --check src/namelist/namelist-input-editor.js
node --check src/namelist/namelist-compatibility-engine.js
node --check src/namelist/namelist-runtime-engine.js
node --check src/tools/wps-tools.js
node --check tools/test_compatibility_condition_modes.js
```

## Comment policy

First-party source files include file headers and targeted section comments. Generated JSON, generated JavaScript fallback data, vendor libraries, WRF examples, and binary references are documented by surrounding README and maintainer notes rather than by manual inline edits.
