# Namelist editor layer

Runtime namelist behavior currently lives in:

- `namelist-input-editor.js` — main editor UI, runtime catalog loading, workflow presets, issue navigation, rendering, and export.
- `namelist-compatibility-engine.js` — browser-side rule evaluation for hard errors, soft warnings, and workflow guidance.
- `namelist-runtime-engine.js` — catalog seeding and runtime helper utilities.
- `namelist-input-data.js` — generated fallback data bundle; do not hand-edit.
- `row_highlight.js` — small row-highlighting helper.

Current runtime compatibility state:

```text
184 total rules
184 valid/enforced rules
0 unreviewed
0 needs_review
```
