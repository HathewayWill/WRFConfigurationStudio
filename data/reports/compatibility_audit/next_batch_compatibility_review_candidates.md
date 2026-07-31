# Next batch compatibility review candidates

This report prioritizes candidates not already covered by valid trigger rules.

## 1. review score 145 · triage 145

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2610`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq; minShallowFreq; rBinSize`
- Phrases: `require`

> rconfig real rBinSize namelist,physics max_domains 1 - "bin size of mixing ratio bins of PDF" / rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection"

## 2. review score 145 · triage 145

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2611`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq; minShallowFreq; shcu_aerosols_opt`
- Phrases: `require`

> rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection" / rconfig integer shcu_aerosols_opt namelist,physics max_domains 0 - "aerosols in shcu: 0=none, 2=prognostic " ""

## 3. review score 145 · triage 145

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2637`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq; minShallowFreq; rBinSize`
- Phrases: `require`

> rconfig real rBinSize namelist,physics max_domains 1 - "bin size of mixing ratio bins of PDF" / rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection"

## 4. review score 145 · triage 145

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2638`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq; minShallowFreq; shcu_aerosols_opt`
- Phrases: `require`

> rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection" / rconfig integer shcu_aerosols_opt namelist,physics max_domains 0 - "aerosols in shcu: 0=none, 2=prognostic " ""

## 5. review score 145 · triage 145

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2637`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq; minShallowFreq; rBinSize`
- Phrases: `require`

> rconfig real rBinSize namelist,physics max_domains 1 - "bin size of mixing ratio bins of PDF" / rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection"

## 6. review score 145 · triage 145

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2638`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq; minShallowFreq; shcu_aerosols_opt`
- Phrases: `require`

> rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection" / rconfig integer shcu_aerosols_opt namelist,physics max_domains 0 - "aerosols in shcu: 0=none, 2=prognostic " ""

## 7. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `ra_sw_physics; swrad_scat`
- Phrases: `only works with`

> physics.swrad_scat: scattering tuning parameter; default is 1.e-5 m2 kg-1; increase for more scattering; only works with ra_sw_physics=1

## 8. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `IFSNOW; ifsnow; sf_surface_physics`
- Phrases: `only works with`

> physics.ifsnow: use snow-cover effects; only works with sf_surface_physics=1

## 9. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `sf_sfclay_physics; shalwater_z0`
- Phrases: `only works with`

> physics.shalwater_z0: set to =1 to turn on shallow water roughness scheme; only works with sf_sfclay_physics=1; new since V4.4

## 10. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `mosaic_lu; sf_surface_physics`
- Phrases: `only works with`

> physics.mosaic_lu: set to =1 to specify landuse parameters based on a mosaic approach; only works with RUC LSM (sf_surface_physics=3)

## 11. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `mosaic_soil; sf_surface_physics`
- Phrases: `only works with`

> physics.mosaic_soil: set to =1 to specify soil parameters based on a mosaic approach; only works with RUC LSM (sf_surface_physics=3)

## 12. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `ISFFLX; isfflx; sf_sfclay_physics`
- Phrases: `only works with`

> physics.isfflx: heat and moisture fluxes from the surface for real-data cases when a PBL option is used; only works with sf_sfclay_physics=1,5,7,11;

## 13. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; kfeta_trigger`
- Phrases: `only works with`

> physics.kfeta_trigger: the method to determine whether a grid point is convective; only works with cu_physics=1;

## 14. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; ishallow`
- Phrases: `only works with`

> physics.ishallow: set to =1 to turn on shallow convection; only works with cu_physics=3 or 5

## 15. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; kf_edrates`
- Phrases: `only works with`

> physics.kf_edrates: set to =1 to output entrainment/ detrainment rates and convective timescale output variables for KF-based cumulus schemes; only works with cu_physics=1,11,99

## 16. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `convtrans_avglen_m; cu_physics`
- Phrases: `only works with`

> physics.convtrans_avglen_m: averaging time (in mins) for convective transport output variables; only works with cu_physics=3,5,93

## 17. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_diag; cu_physics; cu_rad_feedback`
- Phrases: `only works with`

> physics.cu_rad_feedback: set to =.true. to use sub-grid cloud effect to the optical depth in radiation; only works with cu_physics=1,3,5,10,11,93,99; if using cu_physics=3,5,93 must set cu_diag=1

## 18. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; maxiens`
- Phrases: `only works with`

> physics.maxiens: only works with cu_physics=3,5,93

## 19. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; maxens`
- Phrases: `only works with`

> physics.maxens: only works with cu_physics=3,5,93

## 20. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; maxens2`
- Phrases: `only works with`

> physics.maxens2: only works with cu_physics=3,5,93

## 21. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; maxens3`
- Phrases: `only works with`

> physics.maxens3: only works with cu_physics=3,5,93

## 22. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; ensdim`
- Phrases: `only works with`

> physics.ensdim: only works with cu_physics=3,5,93

## 23. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `km_opt; mix_upper_bound`
- Phrases: `only works with`

> dynamics.mix_upper_bound: non-dimensional upper limit for diffusion coefficients; only works with km_opt=2, 3

## 24. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `diff_opt; tke_drag_coefficient`
- Phrases: `only works with`

> dynamics.tke_drag_coefficient: surface drag coefficient (Cd, dimensionless); only works with diff_opt=2

## 25. review score 140 · triage 140

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `noahmp_acc_dt; noahmp_output`
- Phrases: `only works with`

> noah_mp.noahmp_acc_dt: bucket reset time interval (mins) between outputs for accumulation; only works with noahmp_output=3

## 26. review score 135 · triage 135

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `191`
- Already touched by valid trigger: `False`
- Variables: `restart`
- Phrases: `requires`

> # MAM chemistry interactions with cloud microphysics requires dgnum to be saved in restart files for each mode. / # 4D DGNUM4D is not saved correctly, so use these as a workaround.

## 27. review score 135 · triage 135

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `191`
- Already touched by valid trigger: `False`
- Variables: `restart`
- Phrases: `requires`

> # MAM chemistry interactions with cloud microphysics requires dgnum to be saved in restart files for each mode. / # 4D DGNUM4D is not saved correctly, so use these as a workaround.

## 28. review score 135 · triage 135

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `191`
- Already touched by valid trigger: `False`
- Variables: `restart`
- Phrases: `requires`

> # MAM chemistry interactions with cloud microphysics requires dgnum to be saved in restart files for each mode. / # 4D DGNUM4D is not saved correctly, so use these as a workaround.

## 29. review score 135 · triage 135

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `auxinput11_end_h; obs_nudge_opt`
- Phrases: `must also set`

> fdda.obs_nudge_opt: set to =1 to turn on observational nudging; must also set auxinput11_invterval and auxinput11_end_h under &time_control in namelist.input

## 30. review score 130 · triage 130

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2303`
- Already touched by valid trigger: `False`
- Variables: `aggregate_lu; interp_method_type; nest_interp_coord`
- Phrases: `only for`

> rconfig integer nest_interp_coord namelist,domains 1 0 irh "nest_interp_coord" "0=std horiz vi interpolation on eta, 1=attempt isobaric interpolation" / rconfig integer interp_method_type namelist,domains 1 2 irh "interp_method_type" "horiz interp for FG for nesting: 1=bilinear, 2=sint, 3=nearest neighbor is only for testing, 4=quadratic, 12=sint for infrastructure tests" / rconfig logical aggregate_lu namelist,domains 1 .false. irh "aggregate_lu" "T/F aggregate the grass, shrubs, trees in LU"

## 31. review score 130 · triage 130

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2558`
- Already touched by valid trigger: `False`
- Variables: `mp_zero_out; mp_zero_out_all; mp_zero_out_thresh`
- Phrases: `if mp_zero_out>0, then`

> rconfig integer mp_zero_out namelist,physics 1 0 - "mp_zero_out" "microphysics fields set to zero 0=no action taken, 1=all fields but Qv, 2=all fields including Qv" "flag" / rconfig integer mp_zero_out_all namelist,physics 1 0 - "mp_zero_out_all" "1= if mp_zero_out>0, then reproduce old behavior of also applying to scalar/chem/tracer" "flag" / rconfig real mp_zero_out_thresh namelist,physics 1 1.e-8 - "mp_zero_out_thresh" "minimum threshold for non-Qv moist fields, below are set to zero" "kg/kg"

## 32. review score 130 · triage 130

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2917`
- Already touched by valid trigger: `False`
- Variables: `coupled_filtering; fft_filter_lat; polar; pos_def`
- Phrases: `coupled with`

> rconfig real fft_filter_lat namelist,dynamics 1 91. h "fft_filter_lat" "degrees" "grid latitude to start polar filter" / rconfig logical coupled_filtering namelist,dynamics 1 .true. h "coupled_filtering" "for scalar/tracer/chem/moist, T/F filter the fields coupled with mu" / rconfig logical pos_def namelist,dynamics 1 .false. h "pos_def" "for scalar/tracer/chem/moist, T/F after filtering, reset negative values to zero"

## 33. review score 130 · triage 130

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `3812`
- Already touched by valid trigger: `False`
- Variables: `aerchem_onoff; cldchem_onoff; gaschem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`

> # gas and aerosol calculations turned on (gaschem_onoff=1 and aerchem_onoff=1), these can be turned off for debugging, etc. / # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

## 34. review score 130 · triage 130

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `3813`
- Already touched by valid trigger: `False`
- Variables: `cldchem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`

> # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

## 35. review score 130 · triage 130

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2319`
- Already touched by valid trigger: `False`
- Variables: `aggregate_lu; interp_method_type; nest_interp_coord`
- Phrases: `only for`

> rconfig integer nest_interp_coord namelist,domains 1 0 irh "nest_interp_coord" "0=std horiz vi interpolation on eta, 1=attempt isobaric interpolation" / rconfig integer interp_method_type namelist,domains 1 2 irh "interp_method_type" "horiz interp for FG for nesting: 1=bilinear, 2=sint, 3=nearest neighbor is only for testing, 4=quadratic, 12=sint for infrastructure tests" / rconfig logical aggregate_lu namelist,domains 1 .false. irh "aggregate_lu" "T/F aggregate the grass, shrubs, trees in LU"

## 36. review score 130 · triage 130

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2585`
- Already touched by valid trigger: `False`
- Variables: `mp_zero_out; mp_zero_out_all; mp_zero_out_thresh`
- Phrases: `if mp_zero_out>0, then`

> rconfig integer mp_zero_out namelist,physics 1 0 - "mp_zero_out" "microphysics fields set to zero 0=no action taken, 1=all fields but Qv, 2=all fields including Qv" "flag" / rconfig integer mp_zero_out_all namelist,physics 1 0 - "mp_zero_out_all" "1= if mp_zero_out>0, then reproduce old behavior of also applying to scalar/chem/tracer" "flag" / rconfig real mp_zero_out_thresh namelist,physics 1 1.e-8 - "mp_zero_out_thresh" "minimum threshold for non-Qv moist fields, below are set to zero" "kg/kg"

## 37. review score 130 · triage 130

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2965`
- Already touched by valid trigger: `False`
- Variables: `coupled_filtering; fft_filter_lat; polar; pos_def`
- Phrases: `coupled with`

> rconfig real fft_filter_lat namelist,dynamics 1 91. h "fft_filter_lat" "degrees" "grid latitude to start polar filter" / rconfig logical coupled_filtering namelist,dynamics 1 .true. h "coupled_filtering" "for scalar/tracer/chem/moist, T/F filter the fields coupled with mu" / rconfig logical pos_def namelist,dynamics 1 .false. h "pos_def" "for scalar/tracer/chem/moist, T/F after filtering, reset negative values to zero"

## 38. review score 130 · triage 130

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `3827`
- Already touched by valid trigger: `False`
- Variables: `aerchem_onoff; cldchem_onoff; gaschem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`

> # gas and aerosol calculations turned on (gaschem_onoff=1 and aerchem_onoff=1), these can be turned off for debugging, etc. / # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

## 39. review score 130 · triage 130

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `3828`
- Already touched by valid trigger: `False`
- Variables: `cldchem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`

> # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

## 40. review score 130 · triage 130

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2319`
- Already touched by valid trigger: `False`
- Variables: `aggregate_lu; interp_method_type; nest_interp_coord`
- Phrases: `only for`

> rconfig integer nest_interp_coord namelist,domains 1 0 irh "nest_interp_coord" "0=std horiz vi interpolation on eta, 1=attempt isobaric interpolation" / rconfig integer interp_method_type namelist,domains 1 2 irh "interp_method_type" "horiz interp for FG for nesting: 1=bilinear, 2=sint, 3=nearest neighbor is only for testing, 4=quadratic, 12=sint for infrastructure tests" / rconfig logical aggregate_lu namelist,domains 1 .false. irh "aggregate_lu" "T/F aggregate the grass, shrubs, trees in LU"

## 41. review score 130 · triage 130

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2585`
- Already touched by valid trigger: `False`
- Variables: `mp_zero_out; mp_zero_out_all; mp_zero_out_thresh`
- Phrases: `if mp_zero_out>0, then`

> rconfig integer mp_zero_out namelist,physics 1 0 - "mp_zero_out" "microphysics fields set to zero 0=no action taken, 1=all fields but Qv, 2=all fields including Qv" "flag" / rconfig integer mp_zero_out_all namelist,physics 1 0 - "mp_zero_out_all" "1= if mp_zero_out>0, then reproduce old behavior of also applying to scalar/chem/tracer" "flag" / rconfig real mp_zero_out_thresh namelist,physics 1 1.e-8 - "mp_zero_out_thresh" "minimum threshold for non-Qv moist fields, below are set to zero" "kg/kg"

## 42. review score 130 · triage 130

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2965`
- Already touched by valid trigger: `False`
- Variables: `coupled_filtering; fft_filter_lat; polar; pos_def`
- Phrases: `coupled with`

> rconfig real fft_filter_lat namelist,dynamics 1 91. h "fft_filter_lat" "degrees" "grid latitude to start polar filter" / rconfig logical coupled_filtering namelist,dynamics 1 .true. h "coupled_filtering" "for scalar/tracer/chem/moist, T/F filter the fields coupled with mu" / rconfig logical pos_def namelist,dynamics 1 .false. h "pos_def" "for scalar/tracer/chem/moist, T/F after filtering, reset negative values to zero"

## 43. review score 130 · triage 130

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `3827`
- Already touched by valid trigger: `False`
- Variables: `aerchem_onoff; cldchem_onoff; gaschem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`

> # gas and aerosol calculations turned on (gaschem_onoff=1 and aerchem_onoff=1), these can be turned off for debugging, etc. / # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

## 44. review score 130 · triage 130

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `3828`
- Already touched by valid trigger: `False`
- Variables: `cldchem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`

> # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

## 45. review score 130 · triage 130

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `ra_sw_eclipse`
- Phrases: `only works with`

> physics.ra_sw_eclipse: set to =1 to turn on eclipse effect on shortwave radiation; only works with RRTMG, Goddard, old Goddard, and Dudhia radiation schemes

## 46. review score 125 · triage 125

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `nested`
- Phrases: `must be set`

> bdy_control.nested: set to =.true. to use nested boundary conditions; must be set to .true. for nests

## 47. review score 120 · triage 120

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `3993`
- Already touched by valid trigger: `False`
- Variables: `chem_opt`
- Phrases: `coupled with`

> # CB05 coupled with MADE/SORGAM-AQ / package cb05_sorg_aq_kpp chem_opt==131 - chem:no2,no,o,o3,no3,o1d,oh,ho2,n2o5,hno3,hono,pna,h2o2,xo2,xo2n,ntr,rooh,form,ald2,aldx,par,co,meo2,mepx,meoh,hco3,facd,c2o3,pan,pacd,aacd,cxo3,panx,ror,ole,eth,iole,tol,cres,to2,tolaer1,tolaer2,open,cro,cslaer,mgly,xyl,xylaer1,xylaer2,isop,ispd,isoaer1,isoaer2,so2,sulf,sulaer,etoh,etha,terp,terpaer,hum,humaer,lim,limaer1,limaer2,oci,ociaer1,ociaer2,apin,apinaer1,apinaer2,apinaer3,apinaer4,bpin,bpinaer1,bpinaer2,bpinaer3,bpinaer4,bpinaer5,ter,teraer1,teraer2,alkh,alkhaer1,pah,pahaer1,pahaer2,h2,ch4,cl,hcl,fmcl,hg0,hg2,hocl,clo,cl2,nh3,so4aj,so4ai,nh4aj,nh4ai,no3aj,no3ai,naaj,naai,claj,clai,orgaro1j,orgaro1i,orgaro2j,orgaro2i,orgalk1j,orgalk1i,orgole1j,orgole1i,orgba1j,orgba1i,orgba2j,orgba2i,orgba3j,orgba3i,orgba4j,orgba4i,orgpaj,orgpai,ecj,eci,p25j,p25i,antha,seas,soila,nu0,ac0,corn,so4cwj,so4cwi,nh4cwj,nh4cwi,no3cwj,no3cwi,nacwj,nacwi,clcwj,clcwi,orgaro1cwj,orgaro1cwi,orgaro2cwj,orgaro2cwi,orgalk1cwj,orgalk1cwi,orgole1cwj,orgole1cwi,orgba1cwj,orgba1cwi,orgba2cwj,orgba2cwi,orgba3cwj,orgba3cwi,orgba4cwj,orgba4cwi,orgpacwj,orgpacwi,eccwj,eccwi,p25cwj,p25cwi,anthcw,seascw,soilcw,nu0cw,ac0cw,corncw

## 48. review score 120 · triage 120

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `100`
- Already touched by valid trigger: `False`
- Variables: `erosion_dim`
- Phrases: `set up the dust erosion dimension irrespective of wrf-chem, but namelist erosion_dim=3 mandatory when`

> # Set up the dust erosion dimension irrespective of WRF-Chem, but namelist erosion_dim=3 mandatory when not using WRF-Chem (gthompsn, 2017Jun23) / dimspec . 3 namelist=erosion_dim z dust_erosion_dimension

## 49. review score 120 · triage 120

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `143`
- Already touched by valid trigger: `False`
- Variables: `vt4_radius`
- Phrases: `only for`

> # Vortex Tracking (physics namelist) / # Only for algorithm 4: / rconfig real vt4_radius namelist,physics max_domains 150000. - "vt4_radius" "Vortex Search Radius for vortex tracker #4" "m"

## 50. review score 120 · triage 120

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `4008`
- Already touched by valid trigger: `False`
- Variables: `chem_opt`
- Phrases: `coupled with`

> # CB05 coupled with MADE/SORGAM-AQ / package cb05_sorg_aq_kpp chem_opt==131 - chem:no2,no,o,o3,no3,o1d,oh,ho2,n2o5,hno3,hono,pna,h2o2,xo2,xo2n,ntr,rooh,form,ald2,aldx,par,co,meo2,mepx,meoh,hco3,facd,c2o3,pan,pacd,aacd,cxo3,panx,ror,ole,eth,iole,tol,cres,to2,tolaer1,tolaer2,open,cro,cslaer,mgly,xyl,xylaer1,xylaer2,isop,ispd,isoaer1,isoaer2,so2,sulf,sulaer,etoh,etha,terp,terpaer,hum,humaer,lim,limaer1,limaer2,oci,ociaer1,ociaer2,apin,apinaer1,apinaer2,apinaer3,apinaer4,bpin,bpinaer1,bpinaer2,bpinaer3,bpinaer4,bpinaer5,ter,teraer1,teraer2,alkh,alkhaer1,pah,pahaer1,pahaer2,h2,ch4,cl,hcl,fmcl,hg0,hg2,hocl,clo,cl2,nh3,so4aj,so4ai,nh4aj,nh4ai,no3aj,no3ai,naaj,naai,claj,clai,orgaro1j,orgaro1i,orgaro2j,orgaro2i,orgalk1j,orgalk1i,orgole1j,orgole1i,orgba1j,orgba1i,orgba2j,orgba2i,orgba3j,orgba3i,orgba4j,orgba4i,orgpaj,orgpai,ecj,eci,p25j,p25i,antha,seas,soila,nu0,ac0,corn,so4cwj,so4cwi,nh4cwj,nh4cwi,no3cwj,no3cwi,nacwj,nacwi,clcwj,clcwi,orgaro1cwj,orgaro1cwi,orgaro2cwj,orgaro2cwi,orgalk1cwj,orgalk1cwi,orgole1cwj,orgole1cwi,orgba1cwj,orgba1cwi,orgba2cwj,orgba2cwi,orgba3cwj,orgba3cwi,orgba4cwj,orgba4cwi,orgpacwj,orgpacwi,eccwj,eccwi,p25cwj,p25cwi,anthcw,seascw,soilcw,nu0cw,ac0cw,corncw

## 51. review score 120 · triage 120

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `101`
- Already touched by valid trigger: `False`
- Variables: `erosion_dim`
- Phrases: `set up the dust erosion dimension irrespective of wrf-chem, but namelist erosion_dim=3 mandatory when`

> # Set up the dust erosion dimension irrespective of WRF-Chem, but namelist erosion_dim=3 mandatory when not using WRF-Chem (gthompsn, 2017Jun23) / dimspec . 3 namelist=erosion_dim z dust_erosion_dimension

## 52. review score 120 · triage 120

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `143`
- Already touched by valid trigger: `False`
- Variables: `vt4_radius`
- Phrases: `only for`

> # Vortex Tracking (physics namelist) / # Only for algorithm 4: / rconfig real vt4_radius namelist,physics max_domains 150000. - "vt4_radius" "Vortex Search Radius for vortex tracker #4" "m"

## 53. review score 120 · triage 120

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `4008`
- Already touched by valid trigger: `False`
- Variables: `chem_opt`
- Phrases: `coupled with`

> # CB05 coupled with MADE/SORGAM-AQ / package cb05_sorg_aq_kpp chem_opt==131 - chem:no2,no,o,o3,no3,o1d,oh,ho2,n2o5,hno3,hono,pna,h2o2,xo2,xo2n,ntr,rooh,form,ald2,aldx,par,co,meo2,mepx,meoh,hco3,facd,c2o3,pan,pacd,aacd,cxo3,panx,ror,ole,eth,iole,tol,cres,to2,tolaer1,tolaer2,open,cro,cslaer,mgly,xyl,xylaer1,xylaer2,isop,ispd,isoaer1,isoaer2,so2,sulf,sulaer,etoh,etha,terp,terpaer,hum,humaer,lim,limaer1,limaer2,oci,ociaer1,ociaer2,apin,apinaer1,apinaer2,apinaer3,apinaer4,bpin,bpinaer1,bpinaer2,bpinaer3,bpinaer4,bpinaer5,ter,teraer1,teraer2,alkh,alkhaer1,pah,pahaer1,pahaer2,h2,ch4,cl,hcl,fmcl,hg0,hg2,hocl,clo,cl2,nh3,so4aj,so4ai,nh4aj,nh4ai,no3aj,no3ai,naaj,naai,claj,clai,orgaro1j,orgaro1i,orgaro2j,orgaro2i,orgalk1j,orgalk1i,orgole1j,orgole1i,orgba1j,orgba1i,orgba2j,orgba2i,orgba3j,orgba3i,orgba4j,orgba4i,orgpaj,orgpai,ecj,eci,p25j,p25i,antha,seas,soila,nu0,ac0,corn,so4cwj,so4cwi,nh4cwj,nh4cwi,no3cwj,no3cwi,nacwj,nacwi,clcwj,clcwi,orgaro1cwj,orgaro1cwi,orgaro2cwj,orgaro2cwi,orgalk1cwj,orgalk1cwi,orgole1cwj,orgole1cwi,orgba1cwj,orgba1cwi,orgba2cwj,orgba2cwi,orgba3cwj,orgba3cwi,orgba4cwj,orgba4cwi,orgpacwj,orgpacwi,eccwj,eccwi,p25cwj,p25cwi,anthcw,seascw,soilcw,nu0cw,ac0cw,corncw

## 54. review score 120 · triage 120

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `101`
- Already touched by valid trigger: `False`
- Variables: `erosion_dim`
- Phrases: `set up the dust erosion dimension irrespective of wrf-chem, but namelist erosion_dim=3 mandatory when`

> # Set up the dust erosion dimension irrespective of WRF-Chem, but namelist erosion_dim=3 mandatory when not using WRF-Chem (gthompsn, 2017Jun23) / dimspec . 3 namelist=erosion_dim z dust_erosion_dimension

## 55. review score 120 · triage 120

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `143`
- Already touched by valid trigger: `False`
- Variables: `vt4_radius`
- Phrases: `only for`

> # Vortex Tracking (physics namelist) / # Only for algorithm 4: / rconfig real vt4_radius namelist,physics max_domains 150000. - "vt4_radius" "Vortex Search Radius for vortex tracker #4" "m"

## 56. review score 115 · triage 115

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `input_from_hires`
- Phrases: `requires`

> time_control.input_from_hires: set to .true. to use high-resolution terrain and landuse in the nests; this requires special input data, and WRF must be compiled with environment variable setting TERRAIN_AND_LANDUSE

## 57. review score 115 · triage 115

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `minDeepFreq`
- Phrases: `require`

> physics.minDeepFreq: minimum frequency required before deep convection is allowed (0.333)

## 58. review score 115 · triage 115

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `minShallowFreq`
- Phrases: `require`

> physics.minShallowFreq: minimum frequency required before shallow convection is allowed (1.0e-2)

## 59. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `max_step_increase_pct; target_cfl`
- Phrases: `if the max(vert cfl, horiz cfl) <= target_cfl, then`

> domains.max_step_increase_pct: percentage of the previous time step to increase; if the max(vert CFL, horiz CFL) <= target_cfl, then the time step will increase by this percentage; use something much larger for nests (e.g. = 5, 51, 51)

## 60. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `mp_zero_out; mp_zero_out_thresh`
- Phrases: `set to zero when`

> physics.mp_zero_out_thresh: critical value for moisture variable threshold below which moisture arrays (except Qv) are set to zero when using mp_zero_out; unit: kg/kg

## 61. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `couple_farms; ra_sw_physics`
- Phrases: `set to =.true. to use farms shortwave radiation to drive the lsm; when`

> physics.couple_farms: set to =.true. to use FARMS shortwave radiation to drive the LSM; when set to .false., uses shortwave radiation from ra_sw_physics

## 62. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `mp_physics; qna_update`
- Phrases: `set to =1 to update time-varying surface aerosol emission from climatology or real-time data when`

> physics.qna_update: set to =1 to update time-varying surface aerosol emission from climatology or real-time data when using mp_physics=28; use with input file wrfqnainp_d0; must set auxinput17_interval and io_form_auxinput17; new since V4.4

## 63. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `shalwater_depth; shalwater_z0`
- Phrases: `set constant depth (in meters) when`

> physics.shalwater_depth: option to set constant depth (in meters) when shalwater_z0=1, if no bathymetry data is available; intended for depths between 10.0 and 100.0 m; depths outside this range are rounded to the nearest limit value; new since V4.4

## 64. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `CUDT; cu_physics; cudt`
- Phrases: `set to 0 (call every time step) when`

> physics.cudt: minutes between cumulus physics calls; set to 0 (call every time step) when using all cu_physics options except Kain-Fritsch; set all domains to the same value

## 65. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_diag; cu_physics`
- Phrases: `only for; set to =1 to compute time-averaged time-step surface rainfall and cloud water/ice when`

> physics.cu_diag: set to =1 to compute time-averaged time-step surface rainfall and cloud water/ice when using cu_physics=3,5,93; only for WRF-Chem use

## 66. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `diff_opt; tke_heat_flux`
- Phrases: `only work with`

> dynamics.tke_heat_flux: surface thermal flux (H/rho x cp); (K ms-1); only work with diff_opt=2

## 67. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `cu_physics; do_avgflx_cugd; do_avgflx_em`
- Phrases: `set to =1 to output time-averaged convective mass-fluxes from the grell-devenyi ensemble scheme; only works when`

> dynamics.do_avgflx_cugd: set to =1 to output time-averaged convective mass-fluxes from the Grell-Devenyi ensemble scheme; only works when do_avgflx_em =1 and cu_physics=93

## 68. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `spec_bdy_width; specified`
- Phrases: `only for`

> bdy_control.spec_bdy_width: total number of rows for specified boundary value nudging; only for real-data cases

## 69. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `spec_zone; specified`
- Phrases: `only for`

> bdy_control.spec_zone: number of points in specified zone when specified=.true.; only for real-data cases

## 70. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `relax_zone; specified`
- Phrases: `only for`

> bdy_control.relax_zone: number of points in relaxation zone when specified=.true.; only for real-data cases

## 71. review score 110 · triage 110

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `dx; spec_exp; specified`
- Phrases: `only for`

> bdy_control.spec_exp: exponential multiplier for relaxation zone ramp when specified=.true.; 0 = linear ramp; 0.33 = ~3*DX exp decay factor; only for real-data cases

## 72. review score 105 · triage 165

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `True`
- Variables: `fractional_seaice; seaice_threshold; sf_sfclay_physics`
- Phrases: `must also set; only works with`

> physics.fractional_seaice: set to =1 to treat seaice as a fractional field; only works with sf_sfclay_physics=1,2,3,4,5,7,91; must also set seaice_threshold=0; if set to 0, uses flag for ice or no ice

## 73. review score 100 · triage 160

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2590`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_asy_opt`
- Phrases: `valid when`

> rconfig integer aer_asy_opt namelist,physics max_domains 1 irh "aer_asy_opt" "input option for aerosol asymmetry parameter" "" / rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" ""

## 74. review score 100 · triage 160

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2591`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`

> rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" ""

## 75. review score 100 · triage 160

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2592`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`

> rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" ""

## 76. review score 100 · triage 160

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2593`
- Already touched by valid trigger: `True`
- Variables: `aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val; cu_rad_feedback; feedback`
- Phrases: `valid when`

> rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" "" / rconfig logical cu_rad_feedback namelist,physics max_domains .false. irh "feedback of cumulus cloud to radiation" ""

## 77. review score 100 · triage 160

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2702`
- Already touched by valid trigger: `True`
- Variables: `opt_infdv; opt_irrm; opt_run; opt_tdrn`
- Phrases: `only works with; works with`

> rconfig integer opt_irrm namelist,noah_mp 1 0 h "opt_irrm" "Noah-MP irrigation method option" "" / rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme"

## 78. review score 100 · triage 160

- Source: `registry_primary` `4.7.1`
- Priority: `1`
- Line: `2703`
- Already touched by valid trigger: `True`
- Variables: `opt_infdv; opt_run; opt_tdrn; soiltstep`
- Phrases: `only works with; works with`

> rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme" / rconfig real soiltstep namelist,noah_mp 1 0. h "soiltstep" "NoahMP soil process timestep (s) for solving soil temperature and water (default:0->same as main noahmp timestep)"

## 79. review score 100 · triage 160

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2617`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_asy_opt`
- Phrases: `valid when`

> rconfig integer aer_asy_opt namelist,physics max_domains 1 irh "aer_asy_opt" "input option for aerosol asymmetry parameter" "" / rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" ""

## 80. review score 100 · triage 160

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2618`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`

> rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" ""

## 81. review score 100 · triage 160

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2619`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`

> rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" ""

## 82. review score 100 · triage 160

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2620`
- Already touched by valid trigger: `True`
- Variables: `aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val; cu_rad_feedback; feedback`
- Phrases: `valid when`

> rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" "" / rconfig logical cu_rad_feedback namelist,physics max_domains .false. irh "feedback of cumulus cloud to radiation" ""

## 83. review score 100 · triage 160

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2736`
- Already touched by valid trigger: `True`
- Variables: `opt_infdv; opt_irrm; opt_run; opt_tdrn`
- Phrases: `only works with; works with`

> rconfig integer opt_irrm namelist,noah_mp 1 0 h "opt_irrm" "Noah-MP irrigation method option" "" / rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme"

## 84. review score 100 · triage 160

- Source: `registry_primary` `4.8.0`
- Priority: `1`
- Line: `2737`
- Already touched by valid trigger: `True`
- Variables: `opt_infdv; opt_run; opt_tdrn; soiltstep`
- Phrases: `only works with; works with`

> rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme" / rconfig real soiltstep namelist,noah_mp 1 0. h "soiltstep" "NoahMP soil process timestep (s) for solving soil temperature and water (default:0->same as main noahmp timestep)"

## 85. review score 100 · triage 160

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2617`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_asy_opt`
- Phrases: `valid when`

> rconfig integer aer_asy_opt namelist,physics max_domains 1 irh "aer_asy_opt" "input option for aerosol asymmetry parameter" "" / rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" ""

## 86. review score 100 · triage 160

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2618`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`

> rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" ""

## 87. review score 100 · triage 160

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2619`
- Already touched by valid trigger: `True`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`

> rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" ""

## 88. review score 100 · triage 160

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2620`
- Already touched by valid trigger: `True`
- Variables: `aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val; cu_rad_feedback; feedback`
- Phrases: `valid when`

> rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" "" / rconfig logical cu_rad_feedback namelist,physics max_domains .false. irh "feedback of cumulus cloud to radiation" ""

## 89. review score 100 · triage 160

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2736`
- Already touched by valid trigger: `True`
- Variables: `opt_infdv; opt_irrm; opt_run; opt_tdrn`
- Phrases: `only works with; works with`

> rconfig integer opt_irrm namelist,noah_mp 1 0 h "opt_irrm" "Noah-MP irrigation method option" "" / rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme"

## 90. review score 100 · triage 160

- Source: `registry_primary` `4.8.1-dev`
- Priority: `1`
- Line: `2737`
- Already touched by valid trigger: `True`
- Variables: `opt_infdv; opt_run; opt_tdrn; soiltstep`
- Phrases: `only works with; works with`

> rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme" / rconfig real soiltstep namelist,noah_mp 1 0. h "soiltstep" "NoahMP soil process timestep (s) for solving soil temperature and water (default:0->same as main noahmp timestep)"

## 91. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `hypsometric_opt`
- Phrases: `set to =2, computes height in real.exe and pressure in the model by using the hypsometric equation (less biased when`

> domains.hypsometric_opt: When set to =2, computes height in real.exe and pressure in the model by using the hypsometric equation (less biased when compared against input data); set to =1 to use a form of the hydrostatic equation that depends on air density

## 92. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `sfcp_to_sfcp`
- Phrases: `set to =.true. to compute model's sfc pressure when`

> domains.sfcp_to_sfcp: set to =.true. to compute model's sfc pressure when incoming data only has sfc pressure and terrain, but not sea-level pressure

## 93. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `rdlai2d`
- Phrases: `set to =.true. to use leaf area index (lai) from input data, instead of from table; when`

> physics.rdlai2d: set to =.true. to use leaf area index (LAI) from input data, instead of from table; when sst_udpate=1, LAI will also be included in wrflowinp file

## 94. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `pert_coriolis`
- Phrases: `only for`

> dynamics.pert_coriolis: set to =.true. to have coriolis only act on wind perturbation; only for idealized cases

## 95. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `top_lid`
- Phrases: `only for`

> dynamics.top_lid: set to =.true. for zero vertical motion at the top of domain; only for idealized cases

## 96. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `m_opt`
- Phrases: `set to =1 to add output of mij stress terms when`

> dynamics.m_opt: set to =1 to add output of Mij stress terms when NBA is not used

## 97. review score 100 · triage 100

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `False`
- Variables: `specified`
- Phrases: `only for`

> bdy_control.specified: set to =.true. to use a specified boundary condition; can only be used for domain 1; only for real-data cases

## 98. review score 95 · triage 155

- Source: `users_guide_secondary` `current`
- Priority: `2`
- Line: `0`
- Already touched by valid trigger: `True`
- Variables: `bl_pbl_physics; topo_wind`
- Phrases: `only works with; requires`

> physics.topo_wind: topographic surface wind correction; requires extra input from geogrid; only works with bl_pbl_physics=1;

## 99. review score 90 · triage 90

- Source: `readme_supporting` `4.7.1`
- Priority: `4`
- Line: `268`
- Already touched by valid trigger: `False`
- Variables: `rebalance; specified`
- Phrases: `must be set`

> 2: use specified or computed eta levels for vertical refinement (must set rebalance=1) / rebalance = 0 ! must be set to =1 if vertical nesting is used.

## 100. review score 90 · triage 90

- Source: `readme_supporting` `4.8.0`
- Priority: `4`
- Line: `268`
- Already touched by valid trigger: `False`
- Variables: `rebalance; specified`
- Phrases: `must be set`

> 2: use specified or computed eta levels for vertical refinement (must set rebalance=1) / rebalance = 0 ! must be set to =1 if vertical nesting is used.

