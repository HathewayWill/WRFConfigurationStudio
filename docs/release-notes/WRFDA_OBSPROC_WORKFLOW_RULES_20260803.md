# WRFDA, OBSPROC, and WRFDA-Chem workflow rules — 2026-08-03

Adds the first WRFDA-focused compatibility and workflow rule batch.

## Scope

Added rules for:

- OBSPROC namelist.obsproc workflow checks
- WRFDA background-error / GEN_BE workflow
- WRFDA radar assimilation dependencies
- WRFDA precipitation assimilation workflow
- WRFDA-Chem build and surface-observation workflow

## Rule counts after this batch

- Total rules: 184
- Valid/enforced rules: 164
- Unreviewed rules: 15
- Needs-review rules: 5

## Strength counts after this batch

- Hard: 126
- Soft: 24
- Workflow: 34

## Notes

Pure external-file/workflow warnings use `emitOnTrigger: true`, so the compatibility engine can surface a warning even when the requirement cannot be checked directly from namelist values.

OBSPROC rules use runtime-merged editor keys such as `obsproc_record9.use_for`, while the displayed and exported namelist groups remain `&record1` through `&record9`.

The editor now always prefers the no-cache runtime file `data/runtime/namelist.input.compatibility.validated.json` instead of retaining the embedded `namelist-input-data.js` fallback when the catalog is already loaded.
