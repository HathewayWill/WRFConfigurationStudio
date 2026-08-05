# Remaining compatibility rule validation — 2026-08-05

This branch reviews and validates the remaining non-validated compatibility rules.

## Starting point

- Total rules: 184
- Valid/enforced rules: 164
- Unreviewed rules: 15
- Needs-review rules: 5

## Goal

- Total rules: 184
- Valid/enforced rules: 184
- Unreviewed rules: 0
- Needs-review rules: 0

## Rule groups to review

### Needs review

- PBL-1
- PBL-5
- PBL-6
- PBL-7
- LES-PBL

### Unreviewed

- SLUCM-DRAG
- AHE-INPUT
- NOAHMP-PEDO
- NOAHMP-IRR
- NOAHMP-IRRM
- CUGD-AVEDX
- CU-RAD
- LIGHTNING-11
- MULTI-BDY
- NESTED-TRUE
- SPECIFIED-D01
- NUM-LAND-CAT
- WPS-HIRES
- CU-OFF
- SHCU-OFF

## Notes

Rules will be promoted only after checking the rule trigger, requirement shape, severity, source basis, and browser behavior.

## Validation actions

- Promoted all remaining 20 non-validated rules to valid.
- Updated PBL surface-layer compatibility rules to include the broader option 91 allowance noted during review.
- Converted NUM-LAND-CAT from a hard rule to workflow guidance because it depends on metgrid output comparison.
- Enabled emitOnTrigger for workflow rules with external-file, build-time, or preprocessing requirements.
- Corrected LES-PBL requirement mode spelling from nonzero to non_zero.
- Added user_edited_one_of condition mode for soft rules that should not fire on default startup values.

## Ending point

- Total rules: 184
- Valid/enforced rules: 184
- Unreviewed rules: 0
- Needs-review rules: 0
