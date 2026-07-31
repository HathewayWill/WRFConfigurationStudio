# Remaining compatibility rules batch 4 triage

This report reviews remaining non-valid compatibility rules after the user-edited trigger and console-cleanup milestones.

## Summary

- Remaining non-valid rules reviewed: 50
- Buckets: {'candidate': 41, 'needs manual review': 5, 'hold': 4}
- Statuses: {'unreviewed': 45, 'needs_review': 5}
- Strengths: {'Hard': 35, 'Soft': 6, 'Workflow': 9}

## Candidate rules

### AER-OPT-3

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.aer_opt` mode `one_of` default `0`
- Requirements: `physics.mp_physics`
- Requirements raw: mp_physics only works with 28

### CONVTRANS

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.convtrans_avglen_m` mode `one_of` default `30.0`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 3, 5, 93

### CU-7-PBL

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.cu_physics` mode `one_of` default `0`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics must be one of 2, 9

### CU-DIAG

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.cu_diag` mode `one_of` default `0`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics for use with 3, 5, 93

### CU-RAD

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.cu_rad_feedback` mode `one_of` default `False`
- Requirements: `physics.cu_diag, physics.cu_physics`
- Requirements raw: cu_physics only works with 1, 3, 5, 10, 11, 93, 99 | cu_diag required if cu_physics in 3,5,93 1

### CUGD-AVEDX

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.cugd_avedx` mode `one_of` default `1`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 5

### ENSDIM

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.ensdim` mode `one_of` default `144`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 3, 5, 93

### ICCG-1

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.iccg_method` mode `one_of` default `0`
- Requirements: `physics.iccg_prescribed_den, physics.iccg_prescribed_num`
- Requirements raw: iccg_prescribed_num must also set set | iccg_prescribed_den must also set set

### ISFTCFLX

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.isftcflx` mode `one_of` default `0`
- Requirements: `physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be 1

### KFETA

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.kfeta_trigger` mode `one_of` default `1`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 1

### KM-5

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `dynamics.km_opt` mode `one_of` default `-1`
- Requirements: `dynamics.diff_opt, physics.bl_pbl_physics, physics.sf_sfclay_physics`
- Requirements raw: diff_opt must be 2 | bl_pbl_physics must be 0 | sf_sfclay_physics must be one of 1, 5, 91

### LIGHTNING-RADAR

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.lightning_option` mode `active` default `0`
- Requirements: `physics.do_radar_ref`
- Requirements raw: do_radar_ref must be 1, True

### LSM-7

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.sf_surface_physics` mode `one_of` default `0`
- Requirements: `physics.bl_pbl_physics, physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be 7 | bl_pbl_physics must be 7

### LSM-8-RAD

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.sf_surface_physics` mode `one_of` default `0`
- Requirements: `physics.ra_lw_physics, physics.ra_sw_physics`
- Requirements raw: ra_lw_physics must be one of 1, 3, 4 | ra_sw_physics must be one of 1, 3, 4

### MAXENS

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.maxens` mode `one_of` default `3`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 3, 5, 93

### MAXENS2

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.maxens2` mode `one_of` default `3`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 3, 5, 93

### MAXENS3

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.maxens3` mode `one_of` default `16`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 3, 5, 93

### MAXIENS

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.maxiens` mode `one_of` default `1`
- Requirements: `physics.cu_physics`
- Requirements raw: cu_physics only works with 3, 5, 93

### NOAHMP-IRRM

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `noah_mp.opt_irrm` mode `one_of` default `0`
- Requirements: `noah_mp.opt_irr`
- Requirements raw: opt_irr must be > 0 1, 2, 3 | geogrid_tbl requires GEOGRID.TBL.ARW.noahmp

### NUM-LAND-CAT

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.num_land_cat` mode `one_of` default `24`
- Requirements: `none structured`
- Requirements raw: metgrid_NUM_LAND_CAT must match must match | MODIS default typical value 21 | USGS typical value 24

### NWPDIAG

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `time_control.nwp_diagnostics` mode `one_of` default `0`
- Requirements: `physics.do_radar_ref`
- Requirements raw: do_radar_ref must be 1, True

### SHCU-DENG

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.shcu_physics` mode `one_of` default `0`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics only works with 2, 5, 6

### SPECIFIED-D01

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `bdy_control.specified` mode `one_of` default `False`
- Requirements: `none structured`
- Requirements raw: domain_role for domain 1

### SURF-IRR

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.sf_surf_irr_scheme` mode `one_of` default `0`
- Requirements: `physics.sf_surface_physics`
- Requirements raw: sf_surface_physics must be 2

### URBAN-BEM

- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.sf_urban_physics` mode `one_of` default `0`
- Requirements: `physics.bl_pbl_physics`
- Requirements raw: bl_pbl_physics must be one of 1, 2, 8

## Hold or manual-review rules

### PBL-1

- Bucket: `needs manual review`
- Status: `needs_review`
- Strength: `Hard`
- Trigger: `physics.bl_pbl_physics` mode `one_of` default `0`
- Requirements: `physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be one of 1

### PBL-5

- Bucket: `needs manual review`
- Status: `needs_review`
- Strength: `Hard`
- Trigger: `physics.bl_pbl_physics` mode `one_of` default `0`
- Requirements: `physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be one of 1, 2, 5

### PBL-6

- Bucket: `needs manual review`
- Status: `needs_review`
- Strength: `Hard`
- Trigger: `physics.bl_pbl_physics` mode `one_of` default `0`
- Requirements: `physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be one of 5

### PBL-7

- Bucket: `needs manual review`
- Status: `needs_review`
- Strength: `Hard`
- Trigger: `physics.bl_pbl_physics` mode `one_of` default `0`
- Requirements: `physics.sf_sfclay_physics`
- Requirements raw: sf_sfclay_physics must be one of 1, 7

### LES-PBL

- Bucket: `needs manual review`
- Status: `needs_review`
- Strength: `Soft`
- Trigger: `physics.bl_pbl_physics` mode `one_of` default `0`
- Requirements: `dynamics.diff_opt, dynamics.km_opt, physics.isfflx, physics.sf_sfclay_physics, physics.sf_surface_physics`
- Requirements raw: isfflx template uses 1 | sf_sfclay_physics template uses any non-zero | sf_surface_physics template uses any non-zero | diff_opt template uses 2 | km_opt template uses 2, 3

### BUCKET-J

- Bucket: `hold`
- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.bucket_j` mode `active` default `-1.0`
- Requirements: `physics.ra_lw_physics, physics.ra_sw_physics`
- Reasons:
  - trigger has non-zero/default-active value; avoid default-page noise
- Requirements raw: ra_lw_physics only works with 3, 4, 14, 24 | ra_sw_physics only works with 3, 4, 14, 24

### CUP-MINDEEP

- Bucket: `hold`
- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.minDeepFreq` mode `active` default ``
- Requirements: `physics.cu_physics`
- Reasons:
  - trigger field missing from runtime catalog
- Requirements raw: cu_physics only works with 10

### CUP-MINSHALLOW

- Bucket: `hold`
- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.minShallowFreq` mode `active` default ``
- Requirements: `physics.cu_physics`
- Reasons:
  - trigger field missing from runtime catalog
- Requirements raw: cu_physics only works with 10

### CUP-THBIN

- Bucket: `hold`
- Status: `unreviewed`
- Strength: `Hard`
- Trigger: `physics.thBinSize` mode `active` default ``
- Requirements: `physics.cu_physics`
- Reasons:
  - trigger field missing from runtime catalog
- Requirements raw: cu_physics only works with 10

