# WRF v4.7.1 release notes

- Tag: v4.7.1
- Name: WRF Version v4.7.1 (Bug-fix Release)
- Published: 2025-06-03T02:21:51Z

The WRF model has been update to Version  on June  2, 2025

__Acknowledgements__:  We would like to thank

*  Einara Zahn, Princeton University
*  Max Balsmeier

for their contributions to this release.

## Physics

* Corrected evaporation rate calculation for water budget over impervious surfaces in SLUCM when IMP_SCHEME == 2. Affects available water in impervious surfaces and latent heat flux output in urban simulations with impervious scheme enabled.  (#2227) [Details](https://github.com/wrf-model/WRF/commit/5a0af46f)
## Software

* Fix compilation with GCC 15 by correcting function declaration syntax to explicitly list function arguments.  (#2228) [Details](https://github.com/wrf-model/WRF/commit/259d7e33)
* Add dependent files to custom command call to enable recompilation timestamp check (#2221)  [Details](https://github.com/wrf-model/WRF/commit/37839a62)
* CMake bug fix to ensure ideal cases compile correctly again.  (#2229) [Details](https://github.com/wrf-model/WRF/commit/0f4eff15)
* Bugfix: CMake confcheck result variables passed correctly to main CMakeLists.txt.  (#2219) [Details](https://github.com/wrf-model/WRF/commit/6220bffe)
* Fix in KPP compilation during integration edit to use correct make variable (#2222)  [Details](https://github.com/wrf-model/WRF/commit/3491c037)
* Fix errant line contiuation syntax in chem code (#2223)  [Details](https://github.com/wrf-model/WRF/commit/d0e793e7)
* In collect_on_comm.c, use a temporary pass through errhandler to allow MPI_Type_match_size to fail correctly with error code rather than fully abort the program.  (#2231) [Details](https://github.com/wrf-model/WRF/commit/46f97507)

## Miscellaneous

* Modify MYNN PBL descriptions (#2230)  [Details](https://github.com/wrf-model/WRF/commit/6152b3ad)
* Fix and clarify the README.namelist regarding MYNN PBL scheme.  (#2220) [Details](https://github.com/wrf-model/WRF/commit/e6472cbd)

### NOTE!!!! : If downloading the files from the section below, please choose either the v4.7.1.tar.gz file, or the v4.7.1.zip file. DO NOT choose those named "Source Code." They do not include the mandatory NoahMP, MYNN-EDMF, and MMM-physics submodules - needed for compiling WRF.
