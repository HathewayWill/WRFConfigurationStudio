# WRF v4.8.0 release notes

- Tag: v4.8.0
- Name: WRF Version 4.8.0
- Published: 2026-06-08T21:02:37Z

# WRF Version 
The WRF model has been update to Version v.4.8.0 on June 8, 2026

__Acknowledgements__: We would like to thank

*  Alexander Ukhov (KAUST)
*  Anders Jensen NOAA/GSL
*  Balthazar Sengers, Fraunhofer IWES, Germany
*  Barry H Lynn (Weather It Is, LTD and Hebrew University of Jerusalem)
*  Tzu-Shun Lin (NCAR)
*  Yuqi Huang (University of Oklahoma)
*  Chenghao Wang (University of Oklahoma)
*  Cenlin He (NCAR)
*  Haiqing SONG (宋海清) Ecological and Agricultural Meteorology
*  Haiqin Li (Haiqin.Li@noaa.gov, CIRES/CU Boulder at NOAA/GSL)
*  Jack Bartlett (Imperial College London)
*  Joseph Olson (NOAA/GSL)
*  Xia Sun (NOAA-GSL)
*  Lluís Fita Centro de Investigaciones del Mar y la Atmósfera
*  Massimo D'Isidoro (ENEA - Italian National Agency for New Technologies, Energy and Sustainable Economic Development)
*  Menda Chasteen
*  Miroslaw Andrejczuk (HPE)
*  Pedro Jimenez (NCAR/RAL)
*  Masih Eghdami (NCAR)
*  Sylwester Arabas (@slayoo)
*  Songyou Hong (NCAR)
*  Wen-Pu Ho (National Central University, Taiwan)
*  Yuxuan Xie (IGSNRR, CAS)
* Will Hatheway

for their contributions to this release.


## Physics
* A new dynamic lightning scheme is added. The scheme of Lynn et al. (2012) is a prognostic lightning parameterization and it predicts the temporal evolution of a bulk potential electric energy associated with deep convection. Activated by dyn_lightning_option = 1. The DLS includes a simple scale-aware formulation that adjusts charging intensity relative to the original 4 km configuration.  (#2276) [Details](https://github.com/wrf-model/WRF/commit/618de0304)
* New version of Shin-Hong PBL that combines YSU scheme replaces bl_pbl_physics =11. Other new options are: shinhong_scu_mixing (top-down mixing, default off), shinhong_nonlocal_flux (gamma (f) or mass flux (t), default on), shinhong_ke_dissipation (tke dissipation heating, default off). The code is moved to shared MMM-physics repository, and available in phys/physics_mmm after compilation.  (#2286) [Details](https://github.com/wrf-model/WRF/commit/8564efdf4)
* Orographic gravity drag option gwd_opt = 1 is updated. Other added options are gwd_dx_factor = 2 (effective grid size) and gwd_if_nonhyd = .true. (nonhydrostatic effect option). Requires the use of orographic fields from WPS code updates (wrf-model/WPS#281) when using this option.  (#2285) [Details](https://github.com/wrf-model/WRF/commit/52a974496)
* Added a scale-aware turbulent orographic form drag option (kim_tofd) in revised MM5 surface layer scheme. The default value for the option is off and it would increase surface drag. Use this new option with care. Requires the use of var2 field from WPS code updates (wrf-model/WPS#281) when using this option. (#2284) [Details](https://github.com/wrf-model/WRF/commit/cc524de3e)
* Coupling with refactored Noah-MP v5.1.2. This new version of NoahMP has a few new options and improvements compared to the previous Noah-MP v4.7 in WRF v4.7.1. (#2268) [Details](https://github.com/wrf-model/WRF/commit/49e534287)
* New elements for single-layer urban canopy model (UCM): addition of urban ground vegetation and street trees into the single-layer UCM.
  This extension is based on the following two manuscripts in development.
  Huang, Y., Wang, C., & He, C: Integrating nature-based solutions into the WRF-urban modeling system (in preparation).
  Wang, C., Huang, Y., Miller, D. L., Katz, D., & Ghosh, A. K: Analytical view factors for urban canopy models with trees: model development and case study in New York City (in preparation). (#2272) [Details](https://github.com/wrf-model/WRF/commit/e39e090c9)
* The MYNN-EDMF submodule has been updated to be consistent with the updated [NOAA Tech Note](https://doi.org/10.25923/rahr-sj70) 
  - revised subgrid clouds option (bl_mynn_cloudpdf = 2) improves the low-level clouds.
  - improve the scale-awareness as well as the underlying physical representation of downdrafts.
  - a handful of related revisions/tunings was made to improve low level jet structures in stable conditions for several WFIP3 cases.
  - update to mixing of anthropogenic aerosols

  Beware of the new MYNN-EDMF-specific options (bl_mynn_mixaerosols, bl_mynn_mixnumcon, and bl_mynn_mixscalars). Their defaults may not be suitable for your research/applications, but in general, we suggest to use this options and set scalar_pblmix=0 and tracer_pblmix=0, since the MYNN can perform the associated nonlocal mixing.
  (#2267) (#2336) (#2291) (#2319) [Details](https://github.com/wrf-model/WRF/commit/88a2d5df6)
* The MYNN surface layer scheme has been updated to the [new modularized submodule version](https://github.com/NCAR/MYNN-SFC). It has been decomposed into 3 different modules for land, water, and ice. New MYNN-specific options (sf_mynnsfc_sfcflux_land and sf_mynnsfc_sfcflux_water) have been added to replace the shared options (iz0tlnd and isftcflx) that carried different meaning for different surface layer schemes.  (#2277) (#2290) (#2311) [Details](https://github.com/wrf-model/WRF/commit/9f8421100)
* Coupling the Community Fire Behavior model (Jimenez et al., 2024): https://gmd.copernicus.org/preprints/gmd-2024-124/gmd-2024-124.pdf  (#2279) (#2315) [Details](https://github.com/wrf-model/WRF/commit/f315dcee5)
* The Grell–Freitas (GF) cumulus convection scheme has been further developed as the Grell–Freitas–Li (GFL) submodule, which is implemented consistently across WRF, MPAS, and CCPP. Major updates include improved aerosol–convection interactions, several simplified approaches for cold-pool parameterization, and a new scale-awareness feature with subsidence spreading.  References: Li, H., G. Grell, and Freitas, S. (2026): Aerosol-dependence of cumulus convection in the United Forecast System (UFS) Weather Model, to be submitted.  Grell, G., S., Freitas, and Li, H. (2026): A New Scale Aware Technique for Convective Parameterizations, to be submitted. (#2269) (#2314) [Details](https://github.com/wrf-model/WRF/commit/0e046a6fb)
* TEMPO is the Thompson-Eidhammer Microphysics Parameterization for Operations. (#2270) (#2293) (#2302) [Details](https://github.com/wrf-model/WRF/commit/3c76c8b70)

  TEMPO lives here: https://github.com/NCAR/TEMPO and technical documentation lives here: https://ncar.github.io/TEMPO/.

  TEMPO specific release notes are here:
  https://github.com/NCAR/TEMPO/releases/tag/tempo_v3.0.0
  TEMPO version 3.0.0 is the current release version.

  In WRF, supported namelist options include `tempo_aerosolaware==1` to use the aerosol-aware version, and `tempo_hailaware==1` to use the hail-aware version. Both options are off by default.


  Info on table building can be found here: https://ncar.github.io/TEMPO/program/build_tables.html

  Prebuilt tables are available from from the TEMPO/tables directory (permalink) (this table is already in the WRF/run directory, it needs to be named in lower case ccn_activate.bin):
  [TEMPO/tables/ccn_activate.bin](https://github.com/NCAR/TEMPO/tree/881614f68aa65de8f383d56139162049baf600fa/tables)

  The larger tables are available via a NOAA server, and can be obtained with wget:
  ```
  wget -q https://gsl.noaa.gov/thredds/fileServer/retro/jensen/qr_acr_qg_data_tempo_v3
  wget -q https://gsl.noaa.gov/thredds/fileServer/retro/jensen/qr_acr_qs_data_tempo_v3
  wget -q https://gsl.noaa.gov/thredds/fileServer/retro/jensen/freeze_water_data_tempo_v3
  ```


## Diagnostics
* CORDEX WRF First version (v1.3) of the module was accompanied by an article in GMD: (#2245) (#2322) [Details](https://github.com/wrf-model/WRF/commit/31a2d2d49)
  Lluís Fita, Jan Polcher, Theodore M. Giannaros, Torge Lorenz, Josipa Milovac, Giannis Sofiadis, Eleni Katragkou and Sophie Bastin, 2019: CORDEX-WRF v1.3: development of a module for the Weather Research and Forecasting (WRF) model to support the CORDEX community, Geosci. Model Dev., 12, 1029-1066, 2019, doi [10.5194/gmd-12-1029-2019](https://www.geosci-model-dev.net/12/1029/2019/gmd-12-1029-2019.html)

  Current version of the module is v.3 and it provides about 150 new diagnostics a new section in the `namelist.input` labelled `&cdxwrf` with new parameters. Outputs are grouped in 3 files:
  - `wrfcdx_d<domain>_<date>`: main output file at `auxhist19` with most of the variables
  - `wrfhfcdx_d<domain>_<date>`: high-frequency (e,g, 10 minutes) output file at `auxhist18` only for `RAIN` and `COLMAX` implemented to assist the tracking convective systems
  - `wrfpress_d<domain>_<date>`: p-level interpolated variables at `auxhist23` with the additional variables

  You can find more details in the [CDXWRF WIKI](https://wiki.cima.fcen.uba.ar/mediawiki/index.php/CDXWRF)
* Corrected a bug in the WRF time series output, when solar_diagnostics is activated, where the last variable (ts_swddnic2) was written in a separate record. TS files now correctly includes all the 55 variables on the same record.  (#2265) [Details](https://github.com/wrf-model/WRF/commit/1957ed724)

## Chemistry
* Fix calculation of dry air density in module_chem_utilities.F. The bug had a very minor effect.  (#2185) [Details](https://github.com/wrf-model/WRF/commit/cb58c0b98)


## Hydro
* Hydro bug fixes plus modifications to add initial support for gage-assisted diversions in channel routing, which requires a new optional Diversion netCDF parameter file. This adds a C compiler dependency (#2263) [Details](https://github.com/wrf-model/WRF/commit/f2c697e69)


## Software
* Critical bug fix of core uninitialized values causing undefined behavior. Common manifestation of bug was model hangs during first restart write. (#2300)  [Details](https://github.com/wrf-model/WRF/commit/ff33f386a)
* Critical bug fix to ensure clearing of data handle upon freeing. Common manifestation of bug was sudden model crash when reading auxinput data. (#2292)  [Details](https://github.com/wrf-model/WRF/commit/0a39f4fbb)
* Add MMM-physics as a git submodule (#2282)  [Details](https://github.com/wrf-model/WRF/commit/aa6ad5b92)
  - Note: All submodules in WRF are now tracked with git submodules, and no longer uses `manage_externals`
* CMake DA Core : WRF CMake build can now build base DA core (not 4DVAR) (#2092)  [Details](https://github.com/wrf-model/WRF/commit/e462ce7dc)
* CMake PnetCDF Find Package implemented : WRF CMake build can now build using pnetcdf (#2145) [Details](https://github.com/wrf-model/WRF/commit/6710e816f)
* CMake build better nf-config libdir detection : Fix library finding issue with older versions of netcdf-fortran (#2161) [Details](https://github.com/wrf-model/WRF/commit/b148c1ef8)
* CMake check system for underscore requirements between C and Fortran : Replaces hard-coded underscore specification in stanza for CMake builds (#2091)  [Details](https://github.com/wrf-model/WRF/commit/28a9170e9)
* Fix relative pathing for tuv_kpp initial code generation (#2256)  [Details](https://github.com/wrf-model/WRF/commit/4276bd7be)
* Fix WRF-CHEM errors for CCE build (#2253)  [Details](https://github.com/wrf-model/WRF/commit/7329170e2)
* Fix a seg fault error due to early deallocation of array dz8w for diag_nwp2=2 option in start_em.F.  (#2240) [Details](https://github.com/wrf-model/WRF/commit/71e8e6f9f)
* Bug fix for registry path length checks when doing out-of-source code generation  (#2136) [Details](https://github.com/wrf-model/WRF/commit/b791a5978)
* Fix typo in the AOCC stanza in arch/configure.defaults for vectorization. (#2335) [Details](https://github.com/wrf-model/WRF/commit/4466746f1)


## Bug Fixes
* Fix floating point exception in phys/module_mp_radar.F related to new variables in UDM scheme (#2249)  [Details](https://github.com/wrf-model/WRF/commit/0b202759f)
* Fix a missed variable initialization and missed hail deposition term in ice generation for UDM microphysics scheme. (#2309) [Details](https://github.com/wrf-model/WRF/commit/c1cd5c4b8)
* Fix NTU microphysics floating-point exception caused by using value before being computed (#2317) [Details](https://github.com/wrf-model/WRF/commit/9dbdfebe7)
* Correct local (grid cell) wind speed to free wind speed using axial induction correction proposed by Vollmer et al. (2024) https://doi.org/10.5194/wes-9-1689-2024 in Fitch wind farm parameterization. The fix can be turned off by using windfarm_induction = 0. (#2242) [Details](https://github.com/wrf-model/WRF/commit/7f74ddd1a)
* Fix fractional year calculation and a parameter used in the reference equation for Equation of Time. (#2334) [Details](https://github.com/wrf-model/WRF/commit/e836cd6ab)
* Corrected the WetBulbTemp dewpoint temperature unit label to Celsius in comments.  (#2280) [Details](https://github.com/wrf-model/WRF/commit/f15568ccc)
* Fix a bug for gravitational settling of the ash, and adds new capabilities to simulate volcanic eruptions. (#2168) [Details](https://github.com/wrf-model/WRF/commit/0e7a54722)
* Fix an issue with not being able to execute idealized initialization program of tropical cyclone case with MPI. (#2295) [Details](https://github.com/wrf-model/WRF/commit/f88468186)


## Miscellaneous
* Change the surface layer option in tropical suite from old MM5 option (sf_sfclay_physics = 91) to revised MM5 option (sf_sfclay_physics = 1).  (#2278) [Details](https://github.com/wrf-model/WRF/commit/775c1c25a)
* Fix typo in Registry.EM_COMMON and README.namelist (Xiananjiang to Xinanjiang) (#2289)  [Details](https://github.com/wrf-model/WRF/commit/3fd1ed771)
* Fix units description of GW drag diagnostic variables dusfcg, dvsfcg, dtaux3d and dtauy3d.  (#2261) [Details](https://github.com/wrf-model/WRF/commit/7097d774b)
* em_les namelist e_vert now consistent across domains (#2274)  [Details](https://github.com/wrf-model/WRF/commit/5a13c83e5)
* Instruct GitHub to create empty, instead of incomplete, release tarballs (via .gitattributes) (#2155)  [Details](https://github.com/wrf-model/WRF/commit/8f71607ef)
* Use proxy workflow and commit statuses to record testing results for GitHub Actions Workflows (#2143)  [Details](https://github.com/wrf-model/WRF/commit/53b8571ad)
* WRF Coop em_real Tests Using SANE Workflows (#2264)  [Details](https://github.com/wrf-model/WRF/commit/eb88bc906)

### NOTE: This release of WRF is coupled to a newer version of WPS v4.7.0. To make use of new features please use of WPS v4.7.0 or greater.

### NOTE!!!! : If downloading the files from the section below, please choose either the v4.8.0.tar.gz file, or the v4.8.0.zip file. DO NOT choose those named "Source Code." They do not include the mandatory  submodules needed for compiling WRF and are deliberately forced to be empty.

