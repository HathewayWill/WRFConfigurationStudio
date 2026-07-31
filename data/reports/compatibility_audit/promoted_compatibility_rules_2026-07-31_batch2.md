# Promoted compatibility rules, 2026-07-31_batch2

## IFSNOW (added)

- Category: Land Surface
- Strength: Hard
- Trigger: `physics.ifsnow` `one_of`
- Requirements: sf_surface_physics must be 1
- Source excerpt: ifsnow only works with sf_surface_physics=1

## SHALWATER-Z0 (added)

- Category: Surface Layer
- Strength: Hard
- Trigger: `physics.shalwater_z0` `one_of`
- Requirements: sf_sfclay_physics must be 1
- Source excerpt: shalwater_z0 only works with sf_sfclay_physics=1

## MOSAIC-LU (added)

- Category: Land Surface
- Strength: Hard
- Trigger: `physics.mosaic_lu` `one_of`
- Requirements: sf_surface_physics must be 3
- Source excerpt: mosaic_lu only works with RUC LSM, sf_surface_physics=3

## MOSAIC-SOIL (added)

- Category: Land Surface
- Strength: Hard
- Trigger: `physics.mosaic_soil` `one_of`
- Requirements: sf_surface_physics must be 3
- Source excerpt: mosaic_soil only works with RUC LSM, sf_surface_physics=3

## ISHALLOW (updated)

- Category: Shallow Cumulus
- Strength: Hard
- Trigger: `physics.ishallow` `one_of`
- Requirements: cu_physics must be 3 or 5
- Source excerpt: ishallow only works with cu_physics=3 or 5

## KF-EDRATES (updated)

- Category: Cumulus Diagnostics
- Strength: Hard
- Trigger: `physics.kf_edrates` `one_of`
- Requirements: cu_physics must be 1, 11, or 99
- Source excerpt: kf_edrates only works with cu_physics=1,11,99

## CU-RAD-FEEDBACK (added)

- Category: Cumulus ↔ Radiation
- Strength: Hard
- Trigger: `physics.cu_rad_feedback` `truthy`
- Requirements: cu_physics must be one of 1,3,5,10,11,93,99 | if using cu_physics=3,5,93, cu_diag should be set to 1
- Source excerpt: cu_rad_feedback only works with cu_physics=1,3,5,10,11,93,99; if using cu_physics=3,5,93 must set cu_diag=1

## MIX-UPPER-BOUND (added)

- Category: Dynamics / Diffusion
- Strength: Soft
- Trigger: `dynamics.mix_upper_bound` `non_zero`
- Requirements: km_opt must be 2 or 3
- Source excerpt: mix_upper_bound only works with km_opt=2,3

## TKE-DRAG-COEFFICIENT (added)

- Category: Dynamics / Diffusion
- Strength: Soft
- Trigger: `dynamics.tke_drag_coefficient` `non_zero`
- Requirements: diff_opt must be 2
- Source excerpt: tke_drag_coefficient only works with diff_opt=2

## NOAHMP-ACC-DT (added)

- Category: Noah-MP
- Strength: Soft
- Trigger: `noah_mp.noahmp_acc_dt` `non_zero`
- Requirements: noahmp_output must be 3
- Source excerpt: noahmp_acc_dt only works with noahmp_output=3

