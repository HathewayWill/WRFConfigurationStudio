# Comment and Notes Audit

Generated for the stable main public-release review.

## Audit goal

This audit checks whether the files in this package have enough comments, notes, and documentation for users and maintainers without adding noisy comments to generated data or third-party libraries.

## Review policy

- First-party source files should have a clear file header and section comments where the logic is non-obvious.
- Large generated or bundled files should not be hand-commented. They should instead be identified as generated/bundled in nearby README or maintainer notes.
- JSON files cannot contain comments, so explanatory notes belong in metadata fields and documentation.
- WRF example files and third-party vendor files should remain close to their source form.
- Internal development checkpoints and stale rule counts should not appear in the public-facing README.

## High-priority files reviewed

| File or folder | Result | Notes |
|---|---|---|
| `README.md` | Updated | Current 184-rule release state, WRFDA/OBSPROC presets, issue navigation, natural WRFVAR sorting, and 4.8.1-dev labeling are documented. |
| `index.html` | Commented | Added a page-level note explaining that it is the static application shell. |
| `src/core/wrf-domain-wizard.js` | Commented | Added a wrapper-level note explaining that this is the large domain-map and WPS lineage bundle. |
| `src/core/wrf-domain-wizard.min.js` | Leave as-is | Minified/bundled companion file. Do not hand-edit except during a deliberate rebuild. |
| `src/core/browser-compat.js` | Already adequate | Header explains the desktop compatibility shim role. |
| `src/core/app-version.js` | Already adequate | Header explains centralized visible app labels and legacy aliases. |
| `src/namelist/namelist-input-editor.js` | Commented | Added file and section notes for runtime loading, compatibility display, presets, navigation, rendering, descriptions, and export. |
| `src/namelist/namelist-compatibility-engine.js` | Commented | Added file and section notes for condition evaluation and issue creation. |
| `src/namelist/namelist-runtime-engine.js` | Commented | Added file and section notes for catalog seeding and global export. |
| `src/tools/wps-tools.js` | Commented | Added file and section notes for WPS helper calculations and UI behavior. |
| `styles/*.css` | Commented | Added file headers explaining visual ownership. |
| `tools/validate_release.py` | Commented | Added module docstring describing release validation. |
| `tools/test_compatibility_condition_modes.js` | Commented | Added file header explaining engine-mode tests. |
| `launch_local_server.py` and launcher scripts | Commented | Existing role is simple; comments and script labels are adequate. |
| `data/runtime/` | Documented | Runtime JSON files are generated/curated metadata. Notes are in metadata fields and `docs/SOURCE_FILE_NOTES.md`. |
| `data/raw/` | Documented | Raw/provenance files should not be manually rewritten except through a documented catalog update. |
| `vendor/` | Leave as-is | Third-party libraries and webfont files should not be rewritten. |
| `examples/` | Leave as-is | WRF reference examples should stay close to source. |
| `docs/references/` | Leave as-is | Reference PDFs and archives are provenance assets. |

## Result

The package is now better commented at the first-party source layer and better documented at the README/docs layer. Generated, vendor, reference, and example assets remain intentionally unmodified except for nearby explanatory documentation.
