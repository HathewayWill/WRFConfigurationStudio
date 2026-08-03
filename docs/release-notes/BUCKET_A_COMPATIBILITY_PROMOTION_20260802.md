# Bucket A compatibility rule promotion

Batch: `2026-08-02_bucket_a_promotion`

Promoted 13 retained compatibility rules from `unreviewed` to `valid`.

These rules were selected because they are checkable using existing `namelist.input` variables and do not require external file inspection, domain-role inference, or compile-state detection.

## Promoted rules

- `KFETA`
- `CONVTRANS`
- `MAXIENS`
- `MAXENS`
- `MAXENS2`
- `MAXENS3`
- `ENSDIM`
- `ICCG-1`
- `KM-5`
- `OLD-FILES`
- `CUP-THBIN`
- `CUP-MINDEEP`
- `CUP-MINSHALLOW`

## Trigger cleanups

- `KFETA` now uses `user_edited_non_zero`.
- `CONVTRANS`, `MAXIENS`, `MAXENS`, `MAXENS2`, `MAXENS3`, and `ENSDIM` now use `user_edited`.
- `CUP-THBIN`, `CUP-MINDEEP`, and `CUP-MINSHALLOW` now use `user_edited`.
- `OLD-FILES` now accepts true-style values: `True`, `.true.`, `true`, and `1`.

## Counts after promotion

- Total rules: 164
- Valid rules: 144
- Unreviewed rules: 15
- Needs-review rules: 5
- Hard rules: 120
- Soft rules: 24
- Workflow rules: 20
