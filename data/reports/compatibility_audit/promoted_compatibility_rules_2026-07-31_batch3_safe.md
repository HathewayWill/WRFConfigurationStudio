# Promoted compatibility rules, 2026-07-31_batch3_safe

This tiny batch promotes only default-off rules to avoid default-page noise.

## RA-SW-ECLIPSE (updated)

- Category: Radiation
- Strength: Hard
- Trigger: `physics.ra_sw_eclipse` `one_of` `1`
- Requirements: ra_sw_physics must be one of 1, 2, 4, 5
- Source excerpt: ra_sw_eclipse only works with RRTMG, Goddard, old Goddard, and Dudhia radiation schemes. Existing catalog compatibility maps these to ra_sw_physics=1,2,4,5.
- Validation notes: Promoted from existing unreviewed catalog rule and Users Guide text. Safe default-off trigger because ra_sw_eclipse default is 0.

## OBS-NUDGE (updated)

- Category: FDDA
- Strength: Workflow
- Trigger: `fdda.obs_nudge_opt` `one_of` `1`
- Requirements: auxinput11_interval should be set for observational nudging | auxinput11_end_h should be set for observational nudging
- Source excerpt: obs_nudge_opt=1 turns on observational nudging and must also set auxinput11_interval and auxinput11_end_h under time_control.
- Validation notes: Promoted from existing unreviewed workflow rule and Users Guide text. Both auxinput11 fields are present in the runtime catalog.

## MP-ZERO-OUT-THRESH (added)

- Category: Microphysics
- Strength: Workflow
- Trigger: `physics.mp_zero_out` `one_of` `1,2`
- Requirements: mp_zero_out_thresh should be reviewed when mp_zero_out is enabled
- Source excerpt: mp_zero_out_thresh is the critical threshold below which moisture arrays are set to zero when using mp_zero_out.
- Validation notes: Workflow warning only. Safe default-off trigger because mp_zero_out default is 0.

