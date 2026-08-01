# Promoted compatibility rule: BUCKET-J numeric trigger

Promoted `BUCKET-J` after numeric comparison trigger support was added.

## Rule

- ID: `BUCKET-J`
- Previous status: `valid`
- New status: `valid`
- Strength: `Hard`
- Trigger: `physics.bucket_j > 0`
- Trigger mode: `greater_than`
- Requirements raw: ra_lw_physics only works with 3, 4, 14, 24 | ra_sw_physics only works with 3, 4, 14, 24

## Reason

The old trigger used `active`, but `bucket_j` defaults to `-1`, which means inactive. A plain active/non-zero trigger would warn on the default page.

The new numeric trigger only fires when the user sets `bucket_j` greater than zero.

## Browser test

- Default page stayed quiet.
- Temporary local test promoted `BUCKET-J` to valid with `greater_than 0`.
- Setting `bucket_j = 1` produced the expected compatibility error when radiation schemes were not set to allowed values.
- Setting `ra_lw_physics = 4` and `ra_sw_physics = 4` cleared the error.
