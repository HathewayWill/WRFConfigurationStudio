# Promoted user-edited tuning compatibility rules, 2026-07-31_user_edited_tuning

These soft rules use `user_edited_non_zero` to avoid warning on non-zero catalog defaults.

## SWRAD-SCAT-USER (added)

- Category: Radiation
- Strength: Soft
- Trigger: `physics.swrad_scat` `user_edited_non_zero`
- Requirements: ra_sw_physics must be one of 1
- Source excerpt: swrad_scat only works with ra_sw_physics=1
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## ISFFLX-USER (added)

- Category: Surface Flux
- Strength: Soft
- Trigger: `physics.isfflx` `user_edited_non_zero`
- Requirements: sf_sfclay_physics must be one of 1, 5, 7, 11
- Source excerpt: isfflx only works with sf_sfclay_physics=1,5,7,11
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## KFETA-TRIGGER-USER (added)

- Category: Cumulus Option
- Strength: Soft
- Trigger: `physics.kfeta_trigger` `user_edited_non_zero`
- Requirements: cu_physics must be one of 1
- Source excerpt: kfeta_trigger only works with cu_physics=1
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## CONVTRANS-AVGLEN-M-USER (added)

- Category: Cumulus Diagnostics
- Strength: Soft
- Trigger: `physics.convtrans_avglen_m` `user_edited_non_zero`
- Requirements: cu_physics must be one of 3, 5, 93
- Source excerpt: convtrans_avglen_m only works with cu_physics=3,5,93
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## MAXIENS-USER (added)

- Category: Cumulus Ensemble Controls
- Strength: Soft
- Trigger: `physics.maxiens` `user_edited_non_zero`
- Requirements: cu_physics must be one of 3, 5, 93
- Source excerpt: maxiens only works with cu_physics=3,5,93
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## MAXENS-USER (added)

- Category: Cumulus Ensemble Controls
- Strength: Soft
- Trigger: `physics.maxens` `user_edited_non_zero`
- Requirements: cu_physics must be one of 3, 5, 93
- Source excerpt: maxens only works with cu_physics=3,5,93
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## MAXENS2-USER (added)

- Category: Cumulus Ensemble Controls
- Strength: Soft
- Trigger: `physics.maxens2` `user_edited_non_zero`
- Requirements: cu_physics must be one of 3, 5, 93
- Source excerpt: maxens2 only works with cu_physics=3,5,93
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## MAXENS3-USER (added)

- Category: Cumulus Ensemble Controls
- Strength: Soft
- Trigger: `physics.maxens3` `user_edited_non_zero`
- Requirements: cu_physics must be one of 3, 5, 93
- Source excerpt: maxens3 only works with cu_physics=3,5,93
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

## ENSDIM-USER (added)

- Category: Cumulus Ensemble Controls
- Strength: Soft
- Trigger: `physics.ensdim` `user_edited_non_zero`
- Requirements: cu_physics must be one of 3, 5, 93
- Source excerpt: ensdim only works with cu_physics=3,5,93
- Validation notes: Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits the tuning/control field. This avoids default-page noise from non-zero catalog defaults.

