# Current namelist.input compatibility rules audit

Source: `data/raw/namelist.input.compatibility.json`

Rule count: 69

| ID | Category | Strength | Trigger | Trigger values | Requirements | Status |
|---|---|---|---|---|---|---|
| PBL-1 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 1 | physics.sf_sfclay_physics one_of 1 | unreviewed |
| PBL-2 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 2 | physics.sf_sfclay_physics one_of 2 | unreviewed |
| PBL-4 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 4 | physics.sf_sfclay_physics one_of 4 | unreviewed |
| PBL-5 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 5 | physics.sf_sfclay_physics one_of 1,2,5 | unreviewed |
| PBL-6 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 6 | physics.sf_sfclay_physics one_of 5 | unreviewed |
| PBL-7 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 7 | physics.sf_sfclay_physics one_of 1,7 | unreviewed |
| PBL-8 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 8 | physics.sf_sfclay_physics one_of 1,2 | unreviewed |
| PBL-9 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 9 | physics.sf_sfclay_physics one_of 1,2 | unreviewed |
| PBL-10 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 10 | physics.sf_sfclay_physics one_of 10 | unreviewed |
| PBL-12 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 12 | physics.sf_sfclay_physics one_of 1 | unreviewed |
| PBL-16 | PBL ↔ Surface Layer | Hard | physics.bl_pbl_physics | 16 | physics.sf_sfclay_physics one_of 1,5,91 | unreviewed |
| LSM-7 | Land Surface | Hard | physics.sf_surface_physics | 7 | physics.sf_sfclay_physics one_of 7 | physics.bl_pbl_physics one_of 7 | unreviewed |
| LSM-8-RAD | Land Surface ↔ Radiation | Hard | physics.sf_surface_physics | 8 | physics.ra_lw_physics one_of 1,3,4 | physics.ra_sw_physics one_of 1,3,4 | unreviewed |
| URBAN-NOAH | Urban | Hard | physics.sf_urban_physics | 1,2,3 | physics.sf_surface_physics one_of 2 | unreviewed |
| URBAN-BEP | Urban ↔ PBL | Hard | physics.sf_urban_physics | 2 | physics.bl_pbl_physics one_of 1,2,8 | unreviewed |
| URBAN-BEM | Urban ↔ PBL | Hard | physics.sf_urban_physics | 3 | physics.bl_pbl_physics one_of 1,2,8 | unreviewed |
| SLUCM-DRAG | Urban Extra Input | Workflow | physics.slucm_distributed_drag | True | physics.sf_urban_physics one_of 1 | physics.use_wudapt_lcz one_of 0,False,.false.,off | None.wrfinput_extra note  | unreviewed |
| AHE-INPUT | Urban Extra Input | Workflow | physics.distributed_ahe_opt | 1,2 | None.wrfinput_extra note  | unreviewed |
| TOPO-WIND | Topographic Wind | Workflow | physics.topo_wind | 1,2 | physics.bl_pbl_physics one_of 1 | None.geogrid_extra note  | unreviewed |
| SEAICE-THRESH | Sea Ice | Hard | physics.seaice_threshold |  | physics.sf_surface_physics one_of 1,2,3,4,8 | unreviewed |
| FRAC-SEAICE | Sea Ice | Hard | physics.fractional_seaice | 1 | physics.sf_sfclay_physics one_of 1,2,3,4,5,7,91 | physics.seaice_threshold one_of 0 | unreviewed |
| SURF-IRR | Irrigation | Hard | physics.sf_surf_irr_scheme | 1 | physics.sf_surface_physics one_of 2 | unreviewed |
| NOAHMP-PEDO | Noah-MP | Workflow | noah_mp.opt_pedo | 1 | noah_mp.opt_soil one_of 3 | None.geogrid_tbl note  | unreviewed |
| NOAHMP-IRR | Noah-MP | Workflow | noah_mp.opt_irr | 1,2,3 | None.geogrid_tbl note  | unreviewed |
| NOAHMP-IRRM | Noah-MP | Hard | noah_mp.opt_irrm | 1,2,3 | noah_mp.opt_irr one_of 1,2,3 | None.geogrid_tbl note  | unreviewed |
| NOAHMP-TDRN | Noah-MP | Workflow | noah_mp.opt_tdrn | 1,2 | noah_mp.opt_run note  | None.geogrid_tbl note  | unreviewed |
| CU-7-PBL | Cumulus ↔ PBL | Hard | physics.cu_physics | 7 | physics.bl_pbl_physics one_of 2,9 | unreviewed |
| CU-14-SHCU | Cumulus ↔ Shallow | Soft | physics.cu_physics | 14 | physics.shcu_physics one_of 4 | unreviewed |
| KFETA | Cumulus Option | Hard | physics.kfeta_trigger | 1,2,3 | physics.cu_physics one_of 1 | unreviewed |
| ISHALLOW | Cumulus Option | Hard | physics.ishallow | 1 | physics.cu_physics one_of 3,5 | unreviewed |
| SHCU-DENG | Shallow Cumulus ↔ PBL | Hard | physics.shcu_physics | 5 | physics.bl_pbl_physics one_of 2,5,6 | unreviewed |
| CUGD-AVEDX | Cumulus Option | Hard | physics.cugd_avedx | 3 | physics.cu_physics one_of 5 | unreviewed |
| KF-EDRATES | Cumulus Option | Hard | physics.kf_edrates | 1 | physics.cu_physics one_of 1,11,99 | unreviewed |
| CONVTRANS | Cumulus Option | Hard | physics.convtrans_avglen_m | set | physics.cu_physics one_of 3,5,93 | unreviewed |
| CU-DIAG | Cumulus Option | Hard | physics.cu_diag | 1 | physics.cu_physics one_of 3,5,93 | unreviewed |
| CU-RAD | Cumulus ↔ Radiation | Hard | physics.cu_rad_feedback | True | physics.cu_physics one_of 1,3,5,10,11,93,99 | physics.cu_diag one_of 1 | unreviewed |
| MAXIENS | Cumulus Ensemble Controls | Hard | physics.maxiens | set | physics.cu_physics one_of 3,5,93 | unreviewed |
| MAXENS | Cumulus Ensemble Controls | Hard | physics.maxens | set | physics.cu_physics one_of 3,5,93 | unreviewed |
| MAXENS2 | Cumulus Ensemble Controls | Hard | physics.maxens2 | set | physics.cu_physics one_of 3,5,93 | unreviewed |
| MAXENS3 | Cumulus Ensemble Controls | Hard | physics.maxens3 | set | physics.cu_physics one_of 3,5,93 | unreviewed |
| ENSDIM | Cumulus Ensemble Controls | Hard | physics.ensdim | set | physics.cu_physics one_of 3,5,93 | unreviewed |
| LIGHTNING-RADAR | Lightning | Hard | physics.lightning_option |  | physics.do_radar_ref one_of 1,True | unreviewed |
| LIGHTNING-11 | Lightning | Workflow | physics.lightning_option | 11 | domains.dx note  | physics.cu_physics note  | unreviewed |
| ICCG-1 | Lightning | Hard | physics.iccg_method | 1 | physics.iccg_prescribed_num set  | physics.iccg_prescribed_den set  | unreviewed |
| RADARREF-MP | Radar Reflectivity | Hard | physics.do_radar_ref | 1 | physics.mp_physics note  | unreviewed |
| NWPDIAG | Diagnostics | Hard | time_control.nwp_diagnostics | 1 | physics.do_radar_ref one_of 1,True | unreviewed |
| USE-MP-RE | Radiation ↔ MP | Hard | physics.use_mp_re | 1 | physics.mp_physics one_of 3,4,6,7,8,10,14,16,18,24,26,28,50,51,52,53,55 | unreviewed |
| RA-SW-ECLIPSE | Radiation | Hard | physics.ra_sw_eclipse | 1 | physics.ra_sw_physics one_of 1,2,4,5 | unreviewed |
| ICLOUD | Radiation | Hard | physics.icloud |  | physics.ra_lw_physics one_of 1,4 | physics.ra_sw_physics one_of 1,4 | unreviewed |
| BUCKET-J | Accumulation Budgets | Hard | physics.bucket_j |  | physics.ra_lw_physics one_of 3,4,14,24 | physics.ra_sw_physics one_of 3,4,14,24 | unreviewed |
| AER-OPT-3 | Aerosol ↔ MP | Hard | physics.aer_opt | 3 | physics.mp_physics one_of 28 | unreviewed |
| KM-5 | Dynamics | Hard | dynamics.km_opt | 5 | dynamics.diff_opt one_of 2 | physics.bl_pbl_physics one_of 0 | physics.sf_sfclay_physics one_of 1,5,91 | unreviewed |
| SFS-1 | Dynamics | Soft | dynamics.sfs_opt | 1 | dynamics.diff_opt one_of 2 | dynamics.km_opt one_of 2,3 | unreviewed |
| SFS-2 | Dynamics | Soft | dynamics.sfs_opt | 2 | dynamics.diff_opt one_of 2 | dynamics.km_opt one_of 2 | unreviewed |
| LES-PBL | Dynamics / LES | Soft | physics.bl_pbl_physics | 0 | physics.isfflx one_of 1 | physics.sf_sfclay_physics nonzero  | physics.sf_surface_physics nonzero  | dynamics.diff_opt one_of 2 | dynamics.km_opt one_of 2,3 | unreviewed |
| ISFTCFLX | Surface Flux | Hard | physics.isftcflx | 1,2 | physics.sf_sfclay_physics one_of 1 | unreviewed |
| SST-UPDATE | Time Control | Workflow | physics.sst_update | 1 | time_control.auxinput4_inname set  | time_control.auxinput4_interval set  | time_control.io_form_auxinput4 set  | unreviewed |
| OBS-NUDGE | FDDA | Workflow | fdda.obs_nudge_opt | 1 | time_control.auxinput11_interval set  | time_control.auxinput11_end_h set  | unreviewed |
| MULTI-BDY | Boundary Files | Workflow | bdy_control.multi_bdy_files | True | time_control.bdy_inname note  | unreviewed |
| NESTED-TRUE | Boundary Control | Workflow | bdy_control.nested | True | None.domain_role note set for nest | unreviewed |
| SPECIFIED-D01 | Boundary Control | Hard | bdy_control.specified | True | None.domain_role note  | unreviewed |
| NUM-LAND-CAT | WPS ↔ WRF | Hard | physics.num_land_cat | set | None.metgrid_NUM_LAND_CAT note  | None.MODIS note  | None.USGS note  | unreviewed |
| WPS-HIRES | Moving Nest / Hi-Res | Workflow | time_control.input_from_hires | True | None.compile_env note  | None.geog_data_res note usgs_30s+default or matching hi-res | time_control.rsmas_data_path set  | unreviewed |
| OLD-FILES | Backward Compatibility | Workflow | time_control.force_use_old_data | True | dynamics.use_theta_m one_of 0 | dynamics.hybrid_opt one_of 0 | unreviewed |
| CU-OFF | Cumulus Parameterization | Soft | physics.cu_physics | 0 |  | unreviewed |
| SHCU-OFF | Shallow Cumulus | Soft | physics.shcu_physics | 0 |  | unreviewed |
| CUP-THBIN | Cumulus Option | Hard | physics.thBinSize |  | physics.cu_physics one_of 10 | unreviewed |
| CUP-MINDEEP | Cumulus Option | Hard | physics.minDeepFreq |  | physics.cu_physics one_of 10 | unreviewed |
| CUP-MINSHALLOW | Cumulus Option | Hard | physics.minShallowFreq |  | physics.cu_physics one_of 10 | unreviewed |
