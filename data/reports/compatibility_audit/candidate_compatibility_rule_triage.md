# Candidate compatibility rule triage

Highest-priority candidates are Registry-backed or Users-Guide-backed, mention actual namelist variables, and contain explicit compatibility language.

## Top candidates

### 1. score 165 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `fractional_seaice; seaice_threshold; sf_sfclay_physics`
- Phrases: `must also set; only works with`
- Review status: `candidate`

> physics.fractional_seaice: set to =1 to treat seaice as a fractional field; only works with sf_sfclay_physics=1,2,3,4,5,7,91; must also set seaice_threshold=0; if set to 0, uses flag for ice or no ice

### 2. score 160 · registry_primary 4.7.1 line 2590

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_asy_opt`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig integer aer_asy_opt namelist,physics max_domains 1 irh "aer_asy_opt" "input option for aerosol asymmetry parameter" "" / rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" ""

### 3. score 160 · registry_primary 4.7.1 line 2591

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" ""

### 4. score 160 · registry_primary 4.7.1 line 2592

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" ""

### 5. score 160 · registry_primary 4.7.1 line 2593

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val; cu_rad_feedback; feedback`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" "" / rconfig logical cu_rad_feedback namelist,physics max_domains .false. irh "feedback of cumulus cloud to radiation" ""

### 6. score 160 · registry_primary 4.7.1 line 2702

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `opt_infdv; opt_irrm; opt_run; opt_tdrn`
- Phrases: `only works with; works with`
- Review status: `candidate`

> rconfig integer opt_irrm namelist,noah_mp 1 0 h "opt_irrm" "Noah-MP irrigation method option" "" / rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme"

### 7. score 160 · registry_primary 4.7.1 line 2703

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `opt_infdv; opt_run; opt_tdrn; soiltstep`
- Phrases: `only works with; works with`
- Review status: `candidate`

> rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme" / rconfig real soiltstep namelist,noah_mp 1 0. h "soiltstep" "NoahMP soil process timestep (s) for solving soil temperature and water (default:0->same as main noahmp timestep)"

### 8. score 160 · registry_primary 4.8.0 line 2617

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_asy_opt`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig integer aer_asy_opt namelist,physics max_domains 1 irh "aer_asy_opt" "input option for aerosol asymmetry parameter" "" / rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" ""

### 9. score 160 · registry_primary 4.8.0 line 2618

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" ""

### 10. score 160 · registry_primary 4.8.0 line 2619

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" ""

### 11. score 160 · registry_primary 4.8.0 line 2620

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val; cu_rad_feedback; feedback`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" "" / rconfig logical cu_rad_feedback namelist,physics max_domains .false. irh "feedback of cumulus cloud to radiation" ""

### 12. score 160 · registry_primary 4.8.0 line 2736

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `opt_infdv; opt_irrm; opt_run; opt_tdrn`
- Phrases: `only works with; works with`
- Review status: `candidate`

> rconfig integer opt_irrm namelist,noah_mp 1 0 h "opt_irrm" "Noah-MP irrigation method option" "" / rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme"

### 13. score 160 · registry_primary 4.8.0 line 2737

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `opt_infdv; opt_run; opt_tdrn; soiltstep`
- Phrases: `only works with; works with`
- Review status: `candidate`

> rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme" / rconfig real soiltstep namelist,noah_mp 1 0. h "soiltstep" "NoahMP soil process timestep (s) for solving soil temperature and water (default:0->same as main noahmp timestep)"

### 14. score 160 · registry_primary 4.8.1-dev line 2617

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_asy_opt`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig integer aer_asy_opt namelist,physics max_domains 1 irh "aer_asy_opt" "input option for aerosol asymmetry parameter" "" / rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" ""

### 15. score 160 · registry_primary 4.8.1-dev line 2618

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_aod550_opt; aer_aod550_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_aod550_val namelist,physics max_domains 0.12 irh "aer_aod550_val" "fixed value for aerosol optical depth at 550 nm. Valid when aer_aod550_opt=1" "" / rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" ""

### 16. score 160 · registry_primary 4.8.1-dev line 2619

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_angexp_opt; aer_angexp_val; aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_angexp_val namelist,physics max_domains 1.3 irh "aer_angexp_val" "fixed value for aerosol Angstrom exponent. Valid when aer_angexp_opt=1" "" / rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" ""

### 17. score 160 · registry_primary 4.8.1-dev line 2620

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aer_asy_opt; aer_asy_val; aer_ssa_opt; aer_ssa_val; cu_rad_feedback; feedback`
- Phrases: `valid when`
- Review status: `candidate`

> rconfig real aer_ssa_val namelist,physics max_domains 0.85 irh "aer_ssa_val" "fixed value for aerosol single-scattering albedo. Valid when aer_ssa_opt=1" "" / rconfig real aer_asy_val namelist,physics max_domains 0.90 irh "aer_asy_val" "fixed value for aerosol asymmetry parameter. Valid when aer_asy_opt=1" "" / rconfig logical cu_rad_feedback namelist,physics max_domains .false. irh "feedback of cumulus cloud to radiation" ""

### 18. score 160 · registry_primary 4.8.1-dev line 2736

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `opt_infdv; opt_irrm; opt_run; opt_tdrn`
- Phrases: `only works with; works with`
- Review status: `candidate`

> rconfig integer opt_irrm namelist,noah_mp 1 0 h "opt_irrm" "Noah-MP irrigation method option" "" / rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme"

### 19. score 160 · registry_primary 4.8.1-dev line 2737

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `opt_infdv; opt_run; opt_tdrn; soiltstep`
- Phrases: `only works with; works with`
- Review status: `candidate`

> rconfig integer opt_infdv namelist,noah_mp 1 0 h "opt_infdv" "Noah-MP infiltration option in dynamic VIC runoff scheme (only works with opt_run=8), 1->Philip; 2->Green-Ampt; 3->Smith-Parlange" / rconfig integer opt_tdrn namelist,noah_mp 1 0 h "opt_tdrn" "NoahMP tile drainage option (currently only tested & works with opt_run=3), 0->no tile drainage; 1->Simple drainage; 2->Hooghoudt scheme" / rconfig real soiltstep namelist,noah_mp 1 0. h "soiltstep" "NoahMP soil process timestep (s) for solving soil temperature and water (default:0->same as main noahmp timestep)"

### 20. score 155 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `bl_pbl_physics; topo_wind`
- Phrases: `only works with; requires`
- Review status: `candidate`

> physics.topo_wind: topographic surface wind correction; requires extra input from geogrid; only works with bl_pbl_physics=1;

### 21. score 145 · registry_primary 4.7.1 line 2610

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `minDeepFreq; minShallowFreq; rBinSize`
- Phrases: `require`
- Review status: `candidate`

> rconfig real rBinSize namelist,physics max_domains 1 - "bin size of mixing ratio bins of PDF" / rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection"

### 22. score 145 · registry_primary 4.7.1 line 2611

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `minDeepFreq; minShallowFreq; shcu_aerosols_opt`
- Phrases: `require`
- Review status: `candidate`

> rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection" / rconfig integer shcu_aerosols_opt namelist,physics max_domains 0 - "aerosols in shcu: 0=none, 2=prognostic " ""

### 23. score 145 · registry_primary 4.8.0 line 2637

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `minDeepFreq; minShallowFreq; rBinSize`
- Phrases: `require`
- Review status: `candidate`

> rconfig real rBinSize namelist,physics max_domains 1 - "bin size of mixing ratio bins of PDF" / rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection"

### 24. score 145 · registry_primary 4.8.0 line 2638

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `minDeepFreq; minShallowFreq; shcu_aerosols_opt`
- Phrases: `require`
- Review status: `candidate`

> rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection" / rconfig integer shcu_aerosols_opt namelist,physics max_domains 0 - "aerosols in shcu: 0=none, 2=prognostic " ""

### 25. score 145 · registry_primary 4.8.1-dev line 2637

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `minDeepFreq; minShallowFreq; rBinSize`
- Phrases: `require`
- Review status: `candidate`

> rconfig real rBinSize namelist,physics max_domains 1 - "bin size of mixing ratio bins of PDF" / rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection"

### 26. score 145 · registry_primary 4.8.1-dev line 2638

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `minDeepFreq; minShallowFreq; shcu_aerosols_opt`
- Phrases: `require`
- Review status: `candidate`

> rconfig real minDeepFreq namelist,physics max_domains 1 - "Minimum frequency required for deep convection" / rconfig real minShallowFreq namelist,physics max_domains 1 - "Minimum frequency required for shallow convection" / rconfig integer shcu_aerosols_opt namelist,physics max_domains 0 - "aerosols in shcu: 0=none, 2=prognostic " ""

### 27. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `mp_physics; progn`
- Phrases: `only works with`
- Review status: `candidate`

> physics.progn: set to =1 to use mix-activate scheme; only works with mp_physics=10,14,16,17,18

### 28. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `mp_physics; use_mp_re`
- Phrases: `only works with`
- Review status: `candidate`

> physics.use_mp_re: when using RRTMG radiation, use effective radii computed in microphysics schemes; only works with mp_physics=3,4,6,7,8,10, 14,16,17-21,24,26,28,50-53,55

### 29. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `ICLOUD; icloud`
- Phrases: `only works with`
- Review status: `candidate`

> physics.icloud: cloud effect to the optical depth in radiation and controls the cloud fraction options; only works with ra_sw/lw_physics=1 or 4;

### 30. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `ra_sw_physics; swrad_scat`
- Phrases: `only works with`
- Review status: `candidate`

> physics.swrad_scat: scattering tuning parameter; default is 1.e-5 m2 kg-1; increase for more scattering; only works with ra_sw_physics=1

### 31. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `IFSNOW; ifsnow; sf_surface_physics`
- Phrases: `only works with`
- Review status: `candidate`

> physics.ifsnow: use snow-cover effects; only works with sf_surface_physics=1

### 32. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `sf_sfclay_physics; shalwater_z0`
- Phrases: `only works with`
- Review status: `candidate`

> physics.shalwater_z0: set to =1 to turn on shallow water roughness scheme; only works with sf_sfclay_physics=1; new since V4.4

### 33. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `mosaic_lu; sf_surface_physics`
- Phrases: `only works with`
- Review status: `candidate`

> physics.mosaic_lu: set to =1 to specify landuse parameters based on a mosaic approach; only works with RUC LSM (sf_surface_physics=3)

### 34. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `mosaic_soil; sf_surface_physics`
- Phrases: `only works with`
- Review status: `candidate`

> physics.mosaic_soil: set to =1 to specify soil parameters based on a mosaic approach; only works with RUC LSM (sf_surface_physics=3)

### 35. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `ISFFLX; isfflx; sf_sfclay_physics`
- Phrases: `only works with`
- Review status: `candidate`

> physics.isfflx: heat and moisture fluxes from the surface for real-data cases when a PBL option is used; only works with sf_sfclay_physics=1,5,7,11;

### 36. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; kfeta_trigger`
- Phrases: `only works with`
- Review status: `candidate`

> physics.kfeta_trigger: the method to determine whether a grid point is convective; only works with cu_physics=1;

### 37. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; ishallow`
- Phrases: `only works with`
- Review status: `candidate`

> physics.ishallow: set to =1 to turn on shallow convection; only works with cu_physics=3 or 5

### 38. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; kf_edrates`
- Phrases: `only works with`
- Review status: `candidate`

> physics.kf_edrates: set to =1 to output entrainment/ detrainment rates and convective timescale output variables for KF-based cumulus schemes; only works with cu_physics=1,11,99

### 39. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `convtrans_avglen_m; cu_physics`
- Phrases: `only works with`
- Review status: `candidate`

> physics.convtrans_avglen_m: averaging time (in mins) for convective transport output variables; only works with cu_physics=3,5,93

### 40. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_diag; cu_physics; cu_rad_feedback`
- Phrases: `only works with`
- Review status: `candidate`

> physics.cu_rad_feedback: set to =.true. to use sub-grid cloud effect to the optical depth in radiation; only works with cu_physics=1,3,5,10,11,93,99; if using cu_physics=3,5,93 must set cu_diag=1

### 41. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; maxiens`
- Phrases: `only works with`
- Review status: `candidate`

> physics.maxiens: only works with cu_physics=3,5,93

### 42. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; maxens`
- Phrases: `only works with`
- Review status: `candidate`

> physics.maxens: only works with cu_physics=3,5,93

### 43. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; maxens2`
- Phrases: `only works with`
- Review status: `candidate`

> physics.maxens2: only works with cu_physics=3,5,93

### 44. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; maxens3`
- Phrases: `only works with`
- Review status: `candidate`

> physics.maxens3: only works with cu_physics=3,5,93

### 45. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `cu_physics; ensdim`
- Phrases: `only works with`
- Review status: `candidate`

> physics.ensdim: only works with cu_physics=3,5,93

### 46. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `seaice_threshold; sf_surface_physics`
- Phrases: `only works with`
- Review status: `candidate`

> physics.seaice_threshold: if skin temperature (TSK) is < this value, water points are changed to sea ice; only works with sf_surface_physics=1,2,3,4,8

### 47. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `bl_pbl_physics; cu_physics; sf_surface_physics; spp`
- Phrases: `only works with`
- Review status: `candidate`

> stoch.spp: set to =1 to turn on stochastically-perturbed parameter scheme (SPP); only works with Grell Freitas convective scheme (cu_physics=3), MYNN PBL scheme (bl_pbl_physics=5 or 6), & RUC surface scheme (sf_surface_physics=3)

### 48. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `km_opt; mix_upper_bound`
- Phrases: `only works with`
- Review status: `candidate`

> dynamics.mix_upper_bound: non-dimensional upper limit for diffusion coefficients; only works with km_opt=2, 3

### 49. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `diff_opt; tke_drag_coefficient`
- Phrases: `only works with`
- Review status: `candidate`

> dynamics.tke_drag_coefficient: surface drag coefficient (Cd, dimensionless); only works with diff_opt=2

### 50. score 140 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `noahmp_acc_dt; noahmp_output`
- Phrases: `only works with`
- Review status: `candidate`

> noah_mp.noahmp_acc_dt: bucket reset time interval (mins) between outputs for accumulation; only works with noahmp_output=3

### 51. score 135 · registry_primary 4.7.1 line 191

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/registry.cam`
- Enforcement allowed: `true`
- Variables: `restart`
- Phrases: `requires`
- Review status: `candidate`

> # MAM chemistry interactions with cloud microphysics requires dgnum to be saved in restart files for each mode. / # 4D DGNUM4D is not saved correctly, so use these as a workaround.

### 52. score 135 · registry_primary 4.8.0 line 191

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/registry.cam`
- Enforcement allowed: `true`
- Variables: `restart`
- Phrases: `requires`
- Review status: `candidate`

> # MAM chemistry interactions with cloud microphysics requires dgnum to be saved in restart files for each mode. / # 4D DGNUM4D is not saved correctly, so use these as a workaround.

### 53. score 135 · registry_primary 4.8.1-dev line 191

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/registry.cam`
- Enforcement allowed: `true`
- Variables: `restart`
- Phrases: `requires`
- Review status: `candidate`

> # MAM chemistry interactions with cloud microphysics requires dgnum to be saved in restart files for each mode. / # 4D DGNUM4D is not saved correctly, so use these as a workaround.

### 54. score 135 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `auxinput4_inname; auxinput4_interval; io_form_auxinput4; sst_update`
- Phrases: `must be set`
- Review status: `candidate`

> physics.sst_update: set to =1 to turn on time-varying sea-surface temperature, seaice, vegetation fraction, and albedo during a wrf.exe simulation; must be set prior to running real.exe; real.exe creates file(s) (wrflowinp_d0x) that include(s) SST, XICE, ALBEDO, and VEGFRA, which wrf.exe will update at the same interval as the wrfbdy_d01 file; must set the following in &time_control in namelist.input: auxinput4_interval, auxinput4_end_h, io_form_auxinput4, and auxinput4_inname=wrflowinp_d<domain>

### 55. score 135 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `auxinput11_end_h; obs_nudge_opt`
- Phrases: `must also set`
- Review status: `candidate`

> fdda.obs_nudge_opt: set to =1 to turn on observational nudging; must also set auxinput11_invterval and auxinput11_end_h under &time_control in namelist.input

### 56. score 130 · registry_primary 4.7.1 line 2303

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aggregate_lu; interp_method_type; nest_interp_coord`
- Phrases: `only for`
- Review status: `candidate`

> rconfig integer nest_interp_coord namelist,domains 1 0 irh "nest_interp_coord" "0=std horiz vi interpolation on eta, 1=attempt isobaric interpolation" / rconfig integer interp_method_type namelist,domains 1 2 irh "interp_method_type" "horiz interp for FG for nesting: 1=bilinear, 2=sint, 3=nearest neighbor is only for testing, 4=quadratic, 12=sint for infrastructure tests" / rconfig logical aggregate_lu namelist,domains 1 .false. irh "aggregate_lu" "T/F aggregate the grass, shrubs, trees in LU"

### 57. score 130 · registry_primary 4.7.1 line 2558

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `mp_zero_out; mp_zero_out_all; mp_zero_out_thresh`
- Phrases: `if mp_zero_out>0, then`
- Review status: `candidate`

> rconfig integer mp_zero_out namelist,physics 1 0 - "mp_zero_out" "microphysics fields set to zero 0=no action taken, 1=all fields but Qv, 2=all fields including Qv" "flag" / rconfig integer mp_zero_out_all namelist,physics 1 0 - "mp_zero_out_all" "1= if mp_zero_out>0, then reproduce old behavior of also applying to scalar/chem/tracer" "flag" / rconfig real mp_zero_out_thresh namelist,physics 1 1.e-8 - "mp_zero_out_thresh" "minimum threshold for non-Qv moist fields, below are set to zero" "kg/kg"

### 58. score 130 · registry_primary 4.7.1 line 2917

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `coupled_filtering; fft_filter_lat; polar; pos_def`
- Phrases: `coupled with`
- Review status: `candidate`

> rconfig real fft_filter_lat namelist,dynamics 1 91. h "fft_filter_lat" "degrees" "grid latitude to start polar filter" / rconfig logical coupled_filtering namelist,dynamics 1 .true. h "coupled_filtering" "for scalar/tracer/chem/moist, T/F filter the fields coupled with mu" / rconfig logical pos_def namelist,dynamics 1 .false. h "pos_def" "for scalar/tracer/chem/moist, T/F after filtering, reset negative values to zero"

### 59. score 130 · registry_primary 4.7.1 line 3812

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `aerchem_onoff; cldchem_onoff; gaschem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`
- Review status: `candidate`

> # gas and aerosol calculations turned on (gaschem_onoff=1 and aerchem_onoff=1), these can be turned off for debugging, etc. / # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

### 60. score 130 · registry_primary 4.7.1 line 3813

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `cldchem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`
- Review status: `candidate`

> # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

### 61. score 130 · registry_primary 4.8.0 line 2319

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aggregate_lu; interp_method_type; nest_interp_coord`
- Phrases: `only for`
- Review status: `candidate`

> rconfig integer nest_interp_coord namelist,domains 1 0 irh "nest_interp_coord" "0=std horiz vi interpolation on eta, 1=attempt isobaric interpolation" / rconfig integer interp_method_type namelist,domains 1 2 irh "interp_method_type" "horiz interp for FG for nesting: 1=bilinear, 2=sint, 3=nearest neighbor is only for testing, 4=quadratic, 12=sint for infrastructure tests" / rconfig logical aggregate_lu namelist,domains 1 .false. irh "aggregate_lu" "T/F aggregate the grass, shrubs, trees in LU"

### 62. score 130 · registry_primary 4.8.0 line 2585

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `mp_zero_out; mp_zero_out_all; mp_zero_out_thresh`
- Phrases: `if mp_zero_out>0, then`
- Review status: `candidate`

> rconfig integer mp_zero_out namelist,physics 1 0 - "mp_zero_out" "microphysics fields set to zero 0=no action taken, 1=all fields but Qv, 2=all fields including Qv" "flag" / rconfig integer mp_zero_out_all namelist,physics 1 0 - "mp_zero_out_all" "1= if mp_zero_out>0, then reproduce old behavior of also applying to scalar/chem/tracer" "flag" / rconfig real mp_zero_out_thresh namelist,physics 1 1.e-8 - "mp_zero_out_thresh" "minimum threshold for non-Qv moist fields, below are set to zero" "kg/kg"

### 63. score 130 · registry_primary 4.8.0 line 2965

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `coupled_filtering; fft_filter_lat; polar; pos_def`
- Phrases: `coupled with`
- Review status: `candidate`

> rconfig real fft_filter_lat namelist,dynamics 1 91. h "fft_filter_lat" "degrees" "grid latitude to start polar filter" / rconfig logical coupled_filtering namelist,dynamics 1 .true. h "coupled_filtering" "for scalar/tracer/chem/moist, T/F filter the fields coupled with mu" / rconfig logical pos_def namelist,dynamics 1 .false. h "pos_def" "for scalar/tracer/chem/moist, T/F after filtering, reset negative values to zero"

### 64. score 130 · registry_primary 4.8.0 line 3827

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `aerchem_onoff; cldchem_onoff; gaschem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`
- Review status: `candidate`

> # gas and aerosol calculations turned on (gaschem_onoff=1 and aerchem_onoff=1), these can be turned off for debugging, etc. / # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

### 65. score 130 · registry_primary 4.8.0 line 3828

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `cldchem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`
- Review status: `candidate`

> # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

### 66. score 130 · registry_primary 4.8.1-dev line 2319

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `aggregate_lu; interp_method_type; nest_interp_coord`
- Phrases: `only for`
- Review status: `candidate`

> rconfig integer nest_interp_coord namelist,domains 1 0 irh "nest_interp_coord" "0=std horiz vi interpolation on eta, 1=attempt isobaric interpolation" / rconfig integer interp_method_type namelist,domains 1 2 irh "interp_method_type" "horiz interp for FG for nesting: 1=bilinear, 2=sint, 3=nearest neighbor is only for testing, 4=quadratic, 12=sint for infrastructure tests" / rconfig logical aggregate_lu namelist,domains 1 .false. irh "aggregate_lu" "T/F aggregate the grass, shrubs, trees in LU"

### 67. score 130 · registry_primary 4.8.1-dev line 2585

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `mp_zero_out; mp_zero_out_all; mp_zero_out_thresh`
- Phrases: `if mp_zero_out>0, then`
- Review status: `candidate`

> rconfig integer mp_zero_out namelist,physics 1 0 - "mp_zero_out" "microphysics fields set to zero 0=no action taken, 1=all fields but Qv, 2=all fields including Qv" "flag" / rconfig integer mp_zero_out_all namelist,physics 1 0 - "mp_zero_out_all" "1= if mp_zero_out>0, then reproduce old behavior of also applying to scalar/chem/tracer" "flag" / rconfig real mp_zero_out_thresh namelist,physics 1 1.e-8 - "mp_zero_out_thresh" "minimum threshold for non-Qv moist fields, below are set to zero" "kg/kg"

### 68. score 130 · registry_primary 4.8.1-dev line 2965

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/Registry.EM_COMMON`
- Enforcement allowed: `true`
- Variables: `coupled_filtering; fft_filter_lat; polar; pos_def`
- Phrases: `coupled with`
- Review status: `candidate`

> rconfig real fft_filter_lat namelist,dynamics 1 91. h "fft_filter_lat" "degrees" "grid latitude to start polar filter" / rconfig logical coupled_filtering namelist,dynamics 1 .true. h "coupled_filtering" "for scalar/tracer/chem/moist, T/F filter the fields coupled with mu" / rconfig logical pos_def namelist,dynamics 1 .false. h "pos_def" "for scalar/tracer/chem/moist, T/F after filtering, reset negative values to zero"

### 69. score 130 · registry_primary 4.8.1-dev line 3827

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `aerchem_onoff; cldchem_onoff; gaschem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`
- Review status: `candidate`

> # gas and aerosol calculations turned on (gaschem_onoff=1 and aerchem_onoff=1), these can be turned off for debugging, etc. / # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

### 70. score 130 · registry_primary 4.8.1-dev line 3828

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `cldchem_onoff; vertmix_onoff; wetscav_onoff`
- Phrases: `only work with; works with`
- Review status: `candidate`

> # wet scavenging and cloud chemistry turned off (wetscav_onoff=0 and cldchem_onoff=0) since these only work with a subset of chemistry options / # vertical mixing turned on (vertmix_onoff=1) since this is done via the dry deposition routine and works with all chem options

### 71. score 130 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `ra_sw_eclipse`
- Phrases: `only works with`
- Review status: `candidate`

> physics.ra_sw_eclipse: set to =1 to turn on eclipse effect on shortwave radiation; only works with RRTMG, Goddard, old Goddard, and Dudhia radiation schemes

### 72. score 125 · users_guide_secondary current line 0

- Source: `data/raw/namelist.input.users.guide.json`
- Enforcement allowed: `true`
- Variables: `nested`
- Phrases: `must be set`
- Review status: `candidate`

> bdy_control.nested: set to =.true. to use nested boundary conditions; must be set to .true. for nests

### 73. score 120 · registry_primary 4.7.1 line 3993

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `chem_opt`
- Phrases: `coupled with`
- Review status: `candidate`

> # CB05 coupled with MADE/SORGAM-AQ / package cb05_sorg_aq_kpp chem_opt==131 - chem:no2,no,o,o3,no3,o1d,oh,ho2,n2o5,hno3,hono,pna,h2o2,xo2,xo2n,ntr,rooh,form,ald2,aldx,par,co,meo2,mepx,meoh,hco3,facd,c2o3,pan,pacd,aacd,cxo3,panx,ror,ole,eth,iole,tol,cres,to2,tolaer1,tolaer2,open,cro,cslaer,mgly,xyl,xylaer1,xylaer2,isop,ispd,isoaer1,isoaer2,so2,sulf,sulaer,etoh,etha,terp,terpaer,hum,humaer,lim,limaer1,limaer2,oci,ociaer1,ociaer2,apin,apinaer1,apinaer2,apinaer3,apinaer4,bpin,bpinaer1,bpinaer2,bpinaer3,bpinaer4,bpinaer5,ter,teraer1,teraer2,alkh,alkhaer1,pah,pahaer1,pahaer2,h2,ch4,cl,hcl,fmcl,hg0,hg2,hocl,clo,cl2,nh3,so4aj,so4ai,nh4aj,nh4ai,no3aj,no3ai,naaj,naai,claj,clai,orgaro1j,orgaro1i,orgaro2j,orgaro2i,orgalk1j,orgalk1i,orgole1j,orgole1i,orgba1j,orgba1i,orgba2j,orgba2i,orgba3j,orgba3i,orgba4j,orgba4i,orgpaj,orgpai,ecj,eci,p25j,p25i,antha,seas,soila,nu0,ac0,corn,so4cwj,so4cwi,nh4cwj,nh4cwi,no3cwj,no3cwi,nacwj,nacwi,clcwj,clcwi,orgaro1cwj,orgaro1cwi,orgaro2cwj,orgaro2cwi,orgalk1cwj,orgalk1cwi,orgole1cwj,orgole1cwi,orgba1cwj,orgba1cwi,orgba2cwj,orgba2cwi,orgba3cwj,orgba3cwi,orgba4cwj,orgba4cwi,orgpacwj,orgpacwi,eccwj,eccwi,p25cwj,p25cwi,anthcw,seascw,soilcw,nu0cw,ac0cw,corncw

### 74. score 120 · registry_primary 4.7.1 line 100

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/registry.dimspec`
- Enforcement allowed: `true`
- Variables: `erosion_dim`
- Phrases: `set up the dust erosion dimension irrespective of wrf-chem, but namelist erosion_dim=3 mandatory when`
- Review status: `candidate`

> # Set up the dust erosion dimension irrespective of WRF-Chem, but namelist erosion_dim=3 mandatory when not using WRF-Chem (gthompsn, 2017Jun23) / dimspec . 3 namelist=erosion_dim z dust_erosion_dimension

### 75. score 120 · registry_primary 4.7.1 line 143

- Source: `/home/workhorse/Downloads/v4.7.1/WRFV4.7.1/Registry/registry.tracker`
- Enforcement allowed: `true`
- Variables: `vt4_radius`
- Phrases: `only for`
- Review status: `candidate`

> # Vortex Tracking (physics namelist) / # Only for algorithm 4: / rconfig real vt4_radius namelist,physics max_domains 150000. - "vt4_radius" "Vortex Search Radius for vortex tracker #4" "m"

### 76. score 120 · registry_primary 4.8.0 line 4008

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `chem_opt`
- Phrases: `coupled with`
- Review status: `candidate`

> # CB05 coupled with MADE/SORGAM-AQ / package cb05_sorg_aq_kpp chem_opt==131 - chem:no2,no,o,o3,no3,o1d,oh,ho2,n2o5,hno3,hono,pna,h2o2,xo2,xo2n,ntr,rooh,form,ald2,aldx,par,co,meo2,mepx,meoh,hco3,facd,c2o3,pan,pacd,aacd,cxo3,panx,ror,ole,eth,iole,tol,cres,to2,tolaer1,tolaer2,open,cro,cslaer,mgly,xyl,xylaer1,xylaer2,isop,ispd,isoaer1,isoaer2,so2,sulf,sulaer,etoh,etha,terp,terpaer,hum,humaer,lim,limaer1,limaer2,oci,ociaer1,ociaer2,apin,apinaer1,apinaer2,apinaer3,apinaer4,bpin,bpinaer1,bpinaer2,bpinaer3,bpinaer4,bpinaer5,ter,teraer1,teraer2,alkh,alkhaer1,pah,pahaer1,pahaer2,h2,ch4,cl,hcl,fmcl,hg0,hg2,hocl,clo,cl2,nh3,so4aj,so4ai,nh4aj,nh4ai,no3aj,no3ai,naaj,naai,claj,clai,orgaro1j,orgaro1i,orgaro2j,orgaro2i,orgalk1j,orgalk1i,orgole1j,orgole1i,orgba1j,orgba1i,orgba2j,orgba2i,orgba3j,orgba3i,orgba4j,orgba4i,orgpaj,orgpai,ecj,eci,p25j,p25i,antha,seas,soila,nu0,ac0,corn,so4cwj,so4cwi,nh4cwj,nh4cwi,no3cwj,no3cwi,nacwj,nacwi,clcwj,clcwi,orgaro1cwj,orgaro1cwi,orgaro2cwj,orgaro2cwi,orgalk1cwj,orgalk1cwi,orgole1cwj,orgole1cwi,orgba1cwj,orgba1cwi,orgba2cwj,orgba2cwi,orgba3cwj,orgba3cwi,orgba4cwj,orgba4cwi,orgpacwj,orgpacwi,eccwj,eccwi,p25cwj,p25cwi,anthcw,seascw,soilcw,nu0cw,ac0cw,corncw

### 77. score 120 · registry_primary 4.8.0 line 101

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/registry.dimspec`
- Enforcement allowed: `true`
- Variables: `erosion_dim`
- Phrases: `set up the dust erosion dimension irrespective of wrf-chem, but namelist erosion_dim=3 mandatory when`
- Review status: `candidate`

> # Set up the dust erosion dimension irrespective of WRF-Chem, but namelist erosion_dim=3 mandatory when not using WRF-Chem (gthompsn, 2017Jun23) / dimspec . 3 namelist=erosion_dim z dust_erosion_dimension

### 78. score 120 · registry_primary 4.8.0 line 143

- Source: `/home/workhorse/Downloads/v4.8.0/WRFV4.8.0/Registry/registry.tracker`
- Enforcement allowed: `true`
- Variables: `vt4_radius`
- Phrases: `only for`
- Review status: `candidate`

> # Vortex Tracking (physics namelist) / # Only for algorithm 4: / rconfig real vt4_radius namelist,physics max_domains 150000. - "vt4_radius" "Vortex Search Radius for vortex tracker #4" "m"

### 79. score 120 · registry_primary 4.8.1-dev line 4008

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/registry.chem`
- Enforcement allowed: `true`
- Variables: `chem_opt`
- Phrases: `coupled with`
- Review status: `candidate`

> # CB05 coupled with MADE/SORGAM-AQ / package cb05_sorg_aq_kpp chem_opt==131 - chem:no2,no,o,o3,no3,o1d,oh,ho2,n2o5,hno3,hono,pna,h2o2,xo2,xo2n,ntr,rooh,form,ald2,aldx,par,co,meo2,mepx,meoh,hco3,facd,c2o3,pan,pacd,aacd,cxo3,panx,ror,ole,eth,iole,tol,cres,to2,tolaer1,tolaer2,open,cro,cslaer,mgly,xyl,xylaer1,xylaer2,isop,ispd,isoaer1,isoaer2,so2,sulf,sulaer,etoh,etha,terp,terpaer,hum,humaer,lim,limaer1,limaer2,oci,ociaer1,ociaer2,apin,apinaer1,apinaer2,apinaer3,apinaer4,bpin,bpinaer1,bpinaer2,bpinaer3,bpinaer4,bpinaer5,ter,teraer1,teraer2,alkh,alkhaer1,pah,pahaer1,pahaer2,h2,ch4,cl,hcl,fmcl,hg0,hg2,hocl,clo,cl2,nh3,so4aj,so4ai,nh4aj,nh4ai,no3aj,no3ai,naaj,naai,claj,clai,orgaro1j,orgaro1i,orgaro2j,orgaro2i,orgalk1j,orgalk1i,orgole1j,orgole1i,orgba1j,orgba1i,orgba2j,orgba2i,orgba3j,orgba3i,orgba4j,orgba4i,orgpaj,orgpai,ecj,eci,p25j,p25i,antha,seas,soila,nu0,ac0,corn,so4cwj,so4cwi,nh4cwj,nh4cwi,no3cwj,no3cwi,nacwj,nacwi,clcwj,clcwi,orgaro1cwj,orgaro1cwi,orgaro2cwj,orgaro2cwi,orgalk1cwj,orgalk1cwi,orgole1cwj,orgole1cwi,orgba1cwj,orgba1cwi,orgba2cwj,orgba2cwi,orgba3cwj,orgba3cwi,orgba4cwj,orgba4cwi,orgpacwj,orgpacwi,eccwj,eccwi,p25cwj,p25cwi,anthcw,seascw,soilcw,nu0cw,ac0cw,corncw

### 80. score 120 · registry_primary 4.8.1-dev line 101

- Source: `/home/workhorse/Downloads/WRF_481_source_work/WRF-v4.8.1-dev/Registry/registry.dimspec`
- Enforcement allowed: `true`
- Variables: `erosion_dim`
- Phrases: `set up the dust erosion dimension irrespective of wrf-chem, but namelist erosion_dim=3 mandatory when`
- Review status: `candidate`

> # Set up the dust erosion dimension irrespective of WRF-Chem, but namelist erosion_dim=3 mandatory when not using WRF-Chem (gthompsn, 2017Jun23) / dimspec . 3 namelist=erosion_dim z dust_erosion_dimension

