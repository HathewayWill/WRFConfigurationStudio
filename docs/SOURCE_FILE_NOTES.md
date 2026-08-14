# Source File Notes

This document gives users and maintainers a practical map of the package. It explains which files are first-party source, which files are generated or provenance data, and which files should normally be left unchanged.

## Root files

### `index.html`

Static application shell. It loads vendor libraries, project CSS, the WRF domain map layer, WPS helper tools, the namelist editor, and runtime data hooks. Most application behavior lives in `src/`.

### `README.md`

Public landing page and release checkpoint summary. Keep this file current before each release package is built.

### `launch_local_server.py`

Small Python local-server helper. It sets MIME types for JavaScript, CSS, JSON, WASM, and SVG files, chooses an available localhost port, and opens the browser.

### `launch-local.sh`, `launch-local.command`, and `launch-local.bat`

Convenience launchers for users who do not want to type the Python command manually.

## `src/core/`

### `src/core/wrf-domain-wizard.js`

Large first-party/lineage JavaScript bundle for the interactive map, WRF domain geometry, grid interactions, WPS form behavior, and legacy-compatible hooks. It is intentionally kept as one large file for stable browser behavior.

### `src/core/wrf-domain-wizard.min.js`

Minified companion file. Do not hand-comment or manually edit it unless the minified asset is deliberately regenerated.

### `src/core/browser-compat.js`

Desktop browser compatibility shim. It provides small polyfills and consistency fixes for desktop Chrome, Edge, Firefox, and Safari.

### `src/core/app-version.js`

Centralized app-name and version-label file. Update visible version labels here instead of scattering them across source files.

## `src/namelist/`

### `src/namelist/namelist-input-editor.js`

Main namelist editor UI. It loads runtime catalogs, merges OBSPROC records into the editor, seeds defaults, renders groups and variables, evaluates compatibility issues, handles WRFDA/OBSPROC workflow presets, and exports `namelist.input` and `namelist.obsproc`.

### `src/namelist/namelist-compatibility-engine.js`

Browser-side compatibility engine. It evaluates rule triggers, requirement checks, numeric/user-edited condition modes, and returns hard errors, soft warnings, and workflow guidance.

### `src/namelist/namelist-runtime-engine.js`

Small runtime helper used to seed field values and expose catalog utilities for the browser.

### `src/namelist/namelist-input-data.js`

Generated JavaScript data bundle. It mirrors runtime catalog data for fallback/offline-like browser use. Do not hand-edit this file unless regenerating runtime data.

### `src/namelist/row_highlight.js`

Small UI helper for row highlighting.

## `src/tools/`

### `src/tools/wps-tools.js`

WPS helper panel logic. It provides domain-grid checks, projection suggestions, parent/child grid sanity checks, and related WPS export helpers.

## `styles/`

Project CSS for the main WRF domain wizard layout and WPS helper panels. Vendor CSS remains under `vendor/`.

## `data/runtime/`

Browser-ready JSON metadata. These files are loaded directly by the static web app. JSON does not support comments, so notes are carried in metadata fields and in this document.

Important runtime files:

```text
namelist.input.catalog.json
namelist.input.compatibility.validated.json
namelist.obsproc.catalog.json
namelist.registry.merged.v3.json
namelist.registry.group_index.v3.json
```

## `data/raw/`

Raw/provenance material used to build or support runtime catalogs. This includes Registry-derived material, user-guide-derived material, WRF release/provenance material, and the `4.8.1-dev` Registry preview. Treat these files as source evidence, not hand-authored UI docs.

## `examples/`

Bundled WRF example documentation and test-case namelists. These are reference examples and should remain close to upstream/source form.

## `vendor/`

Third-party browser libraries, CSS, and webfonts. Do not rewrite, reformat, or hand-comment these files. Replace them only through a documented dependency update.

## `docs/references/`

Reference PDFs and archives that support project lineage and technical context. Do not edit binary reference materials.
