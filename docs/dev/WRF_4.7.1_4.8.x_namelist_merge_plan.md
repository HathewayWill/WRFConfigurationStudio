# WRF 4.7.1 + 4.8.x namelist.input merge plan

This development branch updates WRF Configuration Studio for WRF 4.8.x Registry and namelist.input options while preserving WRF 4.7.1 stable options.

## Goal

Create a merged compatibility catalog:

- Keep existing WRF 4.7.1 stable namelist.input options.
- Add WRF 4.8.0 / 4.8.1-dev Registry and README.namelist options.
- Do not remove older WRF 4.7.1 options just because they are absent, renamed, replaced, or deprecated in 4.8.x.
- Mark version support where possible.

## Version rules

An option present in both 4.7.1 and 4.8.x should remain active.

An option present in 4.7.1 but absent from 4.8.x should remain available and be treated as legacy / older-version compatible.

An option present in 4.8.x but absent from 4.7.1 should be added as new 4.8.x metadata.

The editor should prefer warning or labeling over deletion.

## Priority WRF 4.8.x release-note targets to verify

- dyn_lightning_option
- bl_pbl_physics = 11 Shin-Hong replacement behavior
- shinhong_scu_mixing
- shinhong_nonlocal_flux
- shinhong_ke_dissipation
- gwd_dx_factor
- gwd_if_nonhyd
- kim_tofd
- Noah-MP v5.1.2 options
- urban vegetation / street tree UCM options
- bl_mynn_cloudpdf = 2
- bl_mynn_mixaerosols
- bl_mynn_mixnumcon
- bl_mynn_mixscalars
- sf_mynnsfc_sfcflux_land
- sf_mynnsfc_sfcflux_water
- tempo_aerosolaware
- tempo_hailaware
- &cdxwrf section and related CORDEX-WRF options
- windfarm_induction

## Source snapshot

WRF 4.8.1-dev source files are stored under:

data/raw/wrf/4.8.1-dev/

The source commit is recorded in:

data/raw/wrf/4.8.1-dev/SOURCE_COMMIT.txt
