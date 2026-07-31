# Promoted compatibility rules, batch 4 safe default-off

Promoted only rules with default-off triggers and structured runtime-catalog requirements.

## Promoted rules

### AER-OPT-3

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.aer_opt` mode `one_of`
- Requirements: `physics.mp_physics`
- Requirements raw: mp_physics only works with 28

### CU-7-PBL

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.cu_physics` mode `one_of`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics must be one of 2, 9

### CU-DIAG

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.cu_diag` mode `one_of`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics for use with 3, 5, 93

### ISFTCFLX

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.isftcflx` mode `one_of`
- Requirements: `physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be 1

### LIGHTNING-RADAR

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.lightning_option` mode `active`
- Requirements: `physics.do_radar_ref`
- Requirements raw: do_radar_ref must be 1, True

### LSM-7

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.sf_surface_physics` mode `one_of`
- Requirements: `physics.bl_pbl_physics, physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be 7 | bl_pbl_physics must be 7

### LSM-8-RAD

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.sf_surface_physics` mode `one_of`
- Requirements: `physics.ra_lw_physics, physics.ra_sw_physics`
- Requirements raw: ra_lw_physics must be one of 1, 3, 4 | ra_sw_physics must be one of 1, 3, 4

### NWPDIAG

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `time_control.nwp_diagnostics` mode `one_of`
- Requirements: `physics.do_radar_ref`
- Requirements raw: do_radar_ref must be 1, True

### SHCU-DENG

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.shcu_physics` mode `one_of`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics only works with 2, 5, 6

### SURF-IRR

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.sf_surf_irr_scheme` mode `one_of`
- Requirements: `physics.sf_surface_physics`
- Requirements raw: sf_surface_physics must be 2

### URBAN-BEM

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.sf_urban_physics` mode `one_of`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics must be one of 1, 2, 8

### URBAN-BEP

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.sf_urban_physics` mode `one_of`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics must be one of 1, 2, 8

### URBAN-NOAH

- Status: `unreviewed` → `valid`
- Strength: `Hard`
- Trigger: `physics.sf_urban_physics` mode `one_of`
- Requirements: `physics.sf_surface_physics`
- Requirements raw: sf_surface_physics must be 2

### CU-14-SHCU

- Status: `unreviewed` → `valid`
- Strength: `Soft`
- Trigger: `physics.cu_physics` mode `one_of`
- Requirements: `physics.shcu_physics`
- Requirements raw: shcu_physics use with 4

### SFS-1

- Status: `unreviewed` → `valid`
- Strength: `Soft`
- Trigger: `dynamics.sfs_opt` mode `one_of`
- Requirements: `dynamics.diff_opt, dynamics.km_opt`
- Requirements raw: diff_opt should be used with 2 | km_opt should be used with 2, 3

### SFS-2

- Status: `unreviewed` → `valid`
- Strength: `Soft`
- Trigger: `dynamics.sfs_opt` mode `one_of`
- Requirements: `dynamics.diff_opt, dynamics.km_opt`
- Requirements raw: diff_opt should be used with 2 | km_opt should be used with 2

## Held for later

- `CONVTRANS`
- `KFETA`
- `MAXENS`
- `MAXENS2`
- `MAXENS3`
- `MAXIENS`
- `ENSDIM`
- `CU-RAD`
- `ICCG-1`
- `NOAHMP-IRRM`
- `LIGHTNING-11`
- `MULTI-BDY`
- `OLD-FILES`
- `SLUCM-DRAG`
- `WPS-HIRES`
- `NUM-LAND-CAT`
- `SPECIFIED-D01`
