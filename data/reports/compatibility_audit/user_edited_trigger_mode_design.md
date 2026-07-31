# User-edited compatibility trigger modes

Added two compatibility trigger modes for rules that should not fire on default values:

- `user_edited`: triggers only after the user edits the trigger field.
- `user_edited_non_zero`: triggers only after the user edits the trigger field and the value is non-zero.

Purpose:

Several WRF namelist controls are scheme-specific tuning controls but have non-zero defaults in the runtime catalog. Enforcing those with `active` or `non_zero` would create default-page warning noise. These modes allow soft compatibility warnings only after the user intentionally changes the field.

Initial target candidates:

- `physics.swrad_scat`
- `physics.isfflx`
- `physics.kfeta_trigger`
- `physics.convtrans_avglen_m`
- `physics.maxiens`
- `physics.maxens`
- `physics.maxens2`
- `physics.maxens3`
- `physics.ensdim`

Existing editor support:

The namelist editor already tracks edited fields in `state.userEditedFields`, and scalar/array input handlers call `markFieldUserEdited(key)`.
