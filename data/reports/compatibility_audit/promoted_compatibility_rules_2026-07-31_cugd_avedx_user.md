# Promoted compatibility rule: CUGD-AVEDX-USER

Promoted `CUGD-AVEDX-USER` as a soft user-edited compatibility rule.

## Rule

- ID: `CUGD-AVEDX-USER`
- Action: `added`
- Previous status: `added`
- New status: `valid`
- Strength: `Soft`
- Trigger: `physics.cugd_avedx`
- Trigger mode: `user_edited_non_zero`
- Requirement: `physics.cu_physics = 5`

## Reason

The older hard `CUGD-AVEDX` rule should not be promoted directly because `cugd_avedx` defaults to a nonzero value. A normal `active` or `non_zero` trigger would create default-page warning noise.

This rule follows the same pattern as the other user-edited tuning-control rules. It only warns after the user edits `cugd_avedx`.

## Browser test plan

- Default page should stay quiet.
- Compatibility panel should increase by one validated rule.
- Editing `cugd_avedx` while `cu_physics = 0` should produce a soft warning.
- Setting `cu_physics = 5` should clear the warning.
