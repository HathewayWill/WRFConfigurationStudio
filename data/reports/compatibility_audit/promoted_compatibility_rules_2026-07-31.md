# Promoted compatibility rules, 2026-07-31

These rules were promoted from candidate or unreviewed status after source review.

## FRAC-SEAICE (updated)

- Category: Sea Ice
- Strength: Hard
- Trigger: `physics.fractional_seaice` `one_of` `1`
- Requirements: sf_sfclay_physics must be one of 1, 2, 3, 4, 5, 7, 91 | seaice_threshold must be 0
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: fractional_seaice=1 only works with sf_sfclay_physics=1,2,3,4,5,7,91 and must also set seaice_threshold=0

## SEAICE-THRESH (updated)

- Category: Sea Ice
- Strength: Hard
- Trigger: `physics.seaice_threshold` `active` ``
- Requirements: sf_surface_physics must be one of 1, 2, 3, 4, 8
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: seaice_threshold only works with sf_surface_physics=1,2,3,4,8

## TOPO-WIND (updated)

- Category: Topographic Wind
- Strength: Workflow
- Trigger: `physics.topo_wind` `one_of` `1,2`
- Requirements: bl_pbl_physics must be 1 | requires extra topographic wind input from geogrid
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: topo_wind requires extra input from geogrid and only works with bl_pbl_physics=1

## RADARREF-MP (updated)

- Category: Radar Reflectivity
- Strength: Hard
- Trigger: `physics.do_radar_ref` `one_of` `1`
- Requirements: mp_physics must be one of 2, 4, 6, 7, 8, 10, 14, 16, 24, 26
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: do_radar_ref=1 only works for mp_physics=2,4,6,7,8,10,14,16,24,26

## PROGN-MP (added)

- Category: Radiation ↔ MP
- Strength: Hard
- Trigger: `physics.progn` `one_of` `1`
- Requirements: mp_physics must be one of 10, 14, 16, 17, 18
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: progn=1 only works with mp_physics=10,14,16,17,18

## USE-MP-RE (updated)

- Category: Radiation ↔ MP
- Strength: Hard
- Trigger: `physics.use_mp_re` `one_of` `1`
- Requirements: mp_physics must be one of 3, 4, 6, 7, 8, 10, 14, 16, 17, 18, 19, 20, 21, 24, 26, 28, 50, 51, 52, 53, 55
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: use_mp_re=1 only works with mp_physics=3,4,6,7,8,10,14,16,17-21,24,26,28,50-53,55

## ICLOUD (updated)

- Category: Radiation
- Strength: Hard
- Trigger: `physics.icloud` `one_of` `1`
- Requirements: ra_lw_physics must be 1 or 4 | ra_sw_physics must be 1 or 4
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: icloud=1 only works with ra_sw_physics and ra_lw_physics set to 1 or 4

## SST-UPDATE (updated)

- Category: Time Control
- Strength: Workflow
- Trigger: `physics.sst_update` `one_of` `1`
- Requirements: auxinput4_inname must be set | auxinput4_interval must be set | auxinput4_end_h must be set | io_form_auxinput4 must be set
- Validation source: WRF Users Guide Namelist Variables
- Versions: current-users-guide
- Source excerpt: sst_update=1 requires auxinput4_interval, auxinput4_end_h, io_form_auxinput4, and auxinput4_inname=wrflowinp_d<domain>

## NOAHMP-INFDV (added)

- Category: Noah-MP
- Strength: Hard
- Trigger: `noah_mp.opt_infdv` `one_of` `1,2,3`
- Requirements: opt_run must be 8
- Validation source: WRF Registry Registry.EM_COMMON
- Versions: 4.7.1, 4.8.0, 4.8.1-dev
- Source excerpt: opt_infdv only works with opt_run=8

## NOAHMP-TDRN (updated)

- Category: Noah-MP
- Strength: Workflow
- Trigger: `noah_mp.opt_tdrn` `one_of` `1,2`
- Requirements: opt_run must be 3 | geogrid should use GEOGRID.TBL.ARW.noahmp
- Validation source: WRF Registry Registry.EM_COMMON
- Versions: 4.7.1, 4.8.0, 4.8.1-dev
- Source excerpt: opt_tdrn is currently only tested and works with opt_run=3

## AER-AOD550-VAL (added)

- Category: Aerosol
- Strength: Soft
- Trigger: `physics.aer_aod550_val` `active` ``
- Requirements: aer_aod550_opt must be 1
- Validation source: WRF Registry Registry.EM_COMMON
- Versions: 4.7.1, 4.8.0, 4.8.1-dev
- Source excerpt: aer_aod550_val is valid when aer_aod550_opt=1

## AER-ANGEXP-VAL (added)

- Category: Aerosol
- Strength: Soft
- Trigger: `physics.aer_angexp_val` `active` ``
- Requirements: aer_angexp_opt must be 1
- Validation source: WRF Registry Registry.EM_COMMON
- Versions: 4.7.1, 4.8.0, 4.8.1-dev
- Source excerpt: aer_angexp_val is valid when aer_angexp_opt=1

## AER-SSA-VAL (added)

- Category: Aerosol
- Strength: Soft
- Trigger: `physics.aer_ssa_val` `active` ``
- Requirements: aer_ssa_opt must be 1
- Validation source: WRF Registry Registry.EM_COMMON
- Versions: 4.7.1, 4.8.0, 4.8.1-dev
- Source excerpt: aer_ssa_val is valid when aer_ssa_opt=1

## AER-ASY-VAL (added)

- Category: Aerosol
- Strength: Soft
- Trigger: `physics.aer_asy_val` `active` ``
- Requirements: aer_asy_opt must be 1
- Validation source: WRF Registry Registry.EM_COMMON
- Versions: 4.7.1, 4.8.0, 4.8.1-dev
- Source excerpt: aer_asy_val is valid when aer_asy_opt=1

