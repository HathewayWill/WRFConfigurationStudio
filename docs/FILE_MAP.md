# WRF Configuration Studio File Map

Generated for WRF Configuration Studio v1.0.0 stable main public-release review.

This map describes the package contents after comment, notes, and README cleanup. The package intentionally excludes `.git/` and temporary audit files.

## Summary

- Files: 356
- Total unpacked size: 56,570,595 bytes
- Compatibility rules: 184 total, 184 valid/enforced, 0 unreviewed, 0 needs_review

## Folder counts

| Folder | Files | Role |
|---|---:|---|
| `.gitignore/` | 1 | Root-level project file |
| `.nojekyll/` | 1 | GitHub Pages marker |
| `LICENSE/` | 1 | License |
| `README.md/` | 1 | Root README |
| `data/` | 112 | Runtime and raw metadata |
| `docs/` | 30 | Documentation and references |
| `examples/` | 140 | WRF examples |
| `images/` | 1 | Application images |
| `img/` | 2 | Application icons |
| `index.html/` | 1 | Application shell |
| `launch-local.bat/` | 1 | Project content |
| `launch-local.command/` | 1 | Project content |
| `launch-local.sh/` | 1 | Project content |
| `launch_local_server.py/` | 1 | Project content |
| `package.json/` | 1 | Package metadata |
| `src/` | 13 | First-party source |
| `styles/` | 3 | First-party CSS |
| `tools/` | 2 | Validation tools |
| `vendor/` | 43 | Third-party dependencies |

## Complete file inventory

| Path | Type | Size bytes | SHA256 short | Purpose |
|---|---|---:|---|---|
| `.gitignore` | text | 19 | `862263fa1f46c20f` | Project file |
| `.nojekyll` | text | 0 | `e3b0c44298fc1c14` | Project file |
| `data/raw/geog.json` | text | 23046 | `c800632cbabd03c5` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.compatibility.json` | text | 77411 | `e208fc99c7360b6d` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.inventory.json` | text | 910438 | `69d3221757004750` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.manual.json` | text | 2846 | `3ad44fbb2e086ed8` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.readme.json` | text | 49534 | `8964093564e9a6d9` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.registry.json` | text | 1731434 | `c3b91e285e72630f` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.registry.wrf_compat.baseline.json` | text | 496104 | `f77a161a49befc78` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.registry.wrf_compat.canonical.json` | text | 1850087 | `a371ecc41764a84f` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.registry.wrf_compat.overlay.json` | text | 1309899 | `26aeb23945eef583` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.registry_metadata_catalog.v1.json` | text | 2874985 | `21ea41a3235034f2` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.select.values.json` | text | 24204 | `cad301f66ae63866` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.subsections.json` | text | 9244 | `c8136f6792c93f0e` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.templates.json` | text | 18416 | `b9a89cbd2d11d9e9` | Raw/provenance data used to support runtime metadata |
| `data/raw/namelist.input.users.guide.json` | text | 132680 | `e1023ac24ddcdb2f` | Raw/provenance data used to support runtime metadata |
| `data/raw/README.md` | text | 754 | `eef4fbf607bb5a25` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.afwa` | text | 14061 | `ea7861b2ebe00011` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.avgflx` | text | 3500 | `8027ca9397c84952` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.bdy_perturb` | text | 1291 | `c6a5b889bc839a16` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.cam` | text | 27245 | `19c143d4aed9e52f` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.chem` | text | 625642 | `a700c510bf0a6e9e` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.clm` | text | 21510 | `3ace44d2ef294578` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.CMAQ` | text | 7702 | `b35561203e1ee083` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.CONVERT` | text | 49524 | `01909e87a6b811ec` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.diags` | text | 5467 | `c0c648a5c1f15008` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.dimspec` | text | 8569 | `ff5742a275176b44` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.elec` | text | 5610 | `481afe9524b471f0` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.EM` | text | 4724 | `2bcaf5871914ad7f` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.EM_CHEM` | text | 2697 | `d377fdaeb72052dd` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.EM_COMMON` | text | 437707 | `6f3ee02175b76487` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.EM_COMMON.var` | text | 38238 | `91b59e7a972a4d5d` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.em_shared_collection` | text | 820 | `4182c38d265289b6` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.fire` | text | 48117 | `a4d146b593db3bb7` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.hyb_coord` | text | 3926 | `1f008d5f5a3bf0e7` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.iau` | text | 3879 | `9141be91350388aa` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.io_boilerplate` | text | 14914 | `2b0a6877b10c6ebd` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.lake` | text | 5696 | `f4897ffa57d2eae1` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.les` | text | 2099 | `d36ff30559f7f2d5` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.new3d_gca` | text | 7747 | `06a720c4304711f3` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.new3d_wif` | text | 12153 | `a3cdbadd8c0426e5` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.noahmp` | text | 38937 | `1d4c0e0dfb94d67b` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.polrad` | text | 8382 | `77671d204e7cef7e` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.rasm_diag` | text | 11677 | `3be086896cd8f670` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.sbm` | text | 47723 | `9882f8612c30111c` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.solar_fields` | text | 10049 | `40254d5deeb59d24` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.ssib` | text | 9871 | `7fa144a8741211ed` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.stoch` | text | 27624 | `7c781030e0dd2f6e` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.tladj` | text | 4912 | `dcd552c11f90364c` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.tornado` | text | 4906 | `905ec558883862ac` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.tracker` | text | 14280 | `a01a5c35267d9bef` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.trad_fields` | text | 2141 | `f90ccd0c06bfbf00` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.var` | text | 99172 | `77d16129d11abbbd` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.var_chem` | text | 44215 | `8aefccc8130f7789` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.wrfchemvar` | text | 688 | `aae20f1e33a84ef8` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/registry.wrfplus` | text | 84631 | `dcee5b3f5bc756e0` | Raw/provenance data used to support runtime metadata |
| `data/raw/registry/Registry.wrfvar` | text | 2277 | `e7d8d0f0db571fa1` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/README.namelist` | text | 167842 | `83ba363bc1512746` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.afwa` | text | 14061 | `ea7861b2ebe00011` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.avgflx` | text | 3500 | `8027ca9397c84952` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.bdy_perturb` | text | 1291 | `c6a5b889bc839a16` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.cam` | text | 27245 | `19c143d4aed9e52f` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.chem` | text | 627854 | `6f614cccae4c0a15` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.clm` | text | 21510 | `3ace44d2ef294578` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.CMAQ` | text | 7702 | `b35561203e1ee083` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.CONVERT` | text | 49524 | `01909e87a6b811ec` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.cordex` | text | 63950 | `f03bcf64138393c8` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.diags` | text | 9232 | `fa0b1c46bf0e6c8b` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.dimspec` | text | 8646 | `06d3b91baf7cdfda` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.dyn_light` | text | 2717 | `adcce4ed5889af1f` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.elec` | text | 5610 | `481afe9524b471f0` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.EM` | text | 4724 | `2bcaf5871914ad7f` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.EM_CHEM` | text | 2697 | `d377fdaeb72052dd` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.EM_COMMON` | text | 447730 | `78aa665d0488da08` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.EM_COMMON.var` | text | 38262 | `dbb45f8930233479` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.em_shared_collection` | text | 871 | `cf036edf05c3b1a4` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.fire` | text | 48571 | `ac84a1bce8ff1ee1` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.hyb_coord` | text | 3926 | `1f008d5f5a3bf0e7` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.iau` | text | 3879 | `9141be91350388aa` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.io_boilerplate` | text | 14914 | `2b0a6877b10c6ebd` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.lake` | text | 5696 | `f4897ffa57d2eae1` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.les` | text | 2099 | `d36ff30559f7f2d5` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.new3d_gca` | text | 7747 | `06a720c4304711f3` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.new3d_wif` | text | 12153 | `a3cdbadd8c0426e5` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.noahmp` | text | 43402 | `979fbf7c6816ebf5` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.polrad` | text | 8382 | `77671d204e7cef7e` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.rasm_diag` | text | 11677 | `3be086896cd8f670` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.sbm` | text | 47723 | `9882f8612c30111c` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.solar_fields` | text | 10049 | `40254d5deeb59d24` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.ssib` | text | 9871 | `7fa144a8741211ed` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.stoch` | text | 27624 | `7c781030e0dd2f6e` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.tladj` | text | 4912 | `dcd552c11f90364c` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.tornado` | text | 4906 | `905ec558883862ac` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.tracker` | text | 14280 | `a01a5c35267d9bef` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.trad_fields` | text | 2141 | `f90ccd0c06bfbf00` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.var` | text | 99172 | `77d16129d11abbbd` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.var_chem` | text | 44215 | `8aefccc8130f7789` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.wrfchemvar` | text | 688 | `aae20f1e33a84ef8` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/registry.wrfplus` | text | 84607 | `9f4afb2aa1424122` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/Registry/Registry.wrfvar` | text | 2277 | `e7d8d0f0db571fa1` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/4.8.1-dev/SOURCE_COMMIT.txt` | text | 363 | `72c49e0000d74376` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/releases/WRF_v4.7.1_release.json` | text | 2390 | `6e6d09e47bc96d68` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/releases/WRF_v4.7.1_release_notes.md` | text | 2343 | `5cf9406442245f9c` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/releases/WRF_v4.8.0_release.json` | text | 15100 | `2581b870ebe319ec` | Raw/provenance data used to support runtime metadata |
| `data/raw/wrf/releases/WRF_v4.8.0_release_notes.md` | text | 14833 | `2f77ece4d65831d1` | Raw/provenance data used to support runtime metadata |
| `data/runtime/namelist.arw_technical_note_context.json` | text | 16538 | `1ce1e490bca9af78` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.catalog.json` | text | 2129368 | `cfbf7ffd5527a4c8` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.input.catalog.json` | text | 1642817 | `24cd6d7618d19b04` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.input.compatibility.validated.json` | text | 259056 | `817309bff36f309e` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.input.metadata_semantics.json` | text | 6793 | `430a5edcf201b1bb` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.input.source_priority.json` | text | 21019 | `d4d81be3df36a083` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.obsproc.catalog.json` | text | 39608 | `8867ab8bebbda915` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.registry.group_index.v3.json` | text | 2426 | `a7d71fed5850bd42` | Browser-ready runtime JSON catalog or metadata |
| `data/runtime/namelist.registry.merged.v3.json` | text | 5984433 | `3a623b54fd9027ac` | Browser-ready runtime JSON catalog or metadata |
| `docs/COMMENT_AND_NOTES_AUDIT.md` | text | 3548 | `63df0c6b878da4ab` | Project documentation |
| `docs/CONTENT_REVIEW_AND_REORGANIZATION_REPORT.md` | text | 1578 | `74184ddc8caef893` | Project documentation |
| `docs/GITHUB_WEBSITE_STRUCTURE.md` | text | 2755 | `c864d787ade2dd10` | Project documentation |
| `docs/images/user-guide/fig01-domain-intelligence-compact.png` | binary | 50751 | `df4484cc42e94389` | User-guide image asset |
| `docs/images/user-guide/fig02-domain-intelligence-sidebar.png` | binary | 68716 | `086ce4a31c255e29` | User-guide image asset |
| `docs/images/user-guide/fig03-lambert-parallels-menu.png` | binary | 74885 | `1a8184941de00782` | User-guide image asset |
| `docs/images/user-guide/fig04-namelist-input-editor.png` | binary | 333227 | `b26c775c75b06d96` | User-guide image asset |
| `docs/images/user-guide/fig05-jump-to-group-menu.png` | binary | 110991 | `682e2778ead03e69` | User-guide image asset |
| `docs/images/user-guide/fig06-domain-wps-fields.png` | binary | 984213 | `613996a719155bba` | User-guide image asset |
| `docs/images/user-guide/fig07-polar-nested-domain.png` | binary | 873144 | `fdb832c69f0cfaa5` | User-guide image asset |
| `docs/images/user-guide/fig08-360-map-wrap.png` | binary | 1756255 | `99ef3bf3d80bef29` | User-guide image asset |
| `docs/images/user-guide/fig09-settings-panel.png` | binary | 15225 | `805febc61bf0fa2a` | User-guide image asset |
| `docs/images/user-guide/fig10-about-lineage-panel.png` | binary | 258294 | `adb22967f9a401b2` | User-guide image asset |
| `docs/images/user-guide/fig11-domain-size-warning.png` | binary | 669835 | `38d49fcb3ca5eeba` | User-guide image asset |
| `docs/MANIFEST.txt` | text | 39695 | `3694838638836c29` | Project documentation |
| `docs/PACKAGE_VALIDATION_REPORT.md` | text | 565 | `7e4dd49b61fc61d7` | Project documentation |
| `docs/PROJECT_LINEAGE.md` | text | 1859 | `73fb3b25386b6cf0` | Project documentation |
| `docs/QUICK_START.md` | text | 1235 | `4526b57cd79d9612` | Project documentation |
| `docs/README.md` | text | 2134 | `d2d536726d1e3cba` | Project documentation |
| `docs/references/legacy_source_docs.zip` | binary | 6954637 | `3e52d930df71d49c` | Reference/provenance material |
| `docs/references/v4_technote.pdf` | binary | 2979946 | `981cc9bf7e5428f2` | Reference/provenance material |
| `docs/references/WRF_GUI_original_source_69852.pdf` | binary | 1510850 | `5610efd8ce09df6e` | Reference/provenance material |
| `docs/release-notes/CURRENT_RELEASE_NOTES.md` | text | 924 | `9b7340a261287942` | Current release-note documentation |
| `docs/release-notes/PUBLICATION_LAYOUT.md` | text | 436 | `65648068e0574aaa` | Current release-note documentation |
| `docs/RELEASE_HISTORY.md` | text | 1410 | `e7668f1f4095322d` | Project documentation |
| `docs/SOURCE_FILE_NOTES.md` | text | 4212 | `a1a56684516d25f2` | Project documentation |
| `docs/TECHNICAL_REFERENCE.md` | text | 4669 | `e0dc74610de03a57` | Project documentation |
| `docs/user-guide/print/WRF_CONFIG_STUDIO_WEBSITE_USER_GUIDE_ONLINE_LOCAL.docx` | binary | 5177140 | `f8e9686199231350` | Project documentation |
| `docs/USER_GUIDE.md` | text | 19814 | `8af65791f52c4a17` | Project documentation |
| `examples/doc/INSTRUCTIONS` | text | 193 | `69791a67122f3d24` | WRF example or reference file |
| `examples/doc/README.adios2` | text | 4329 | `fed27577bed3f6ad` | WRF example or reference file |
| `examples/doc/README.cmake_build` | text | 13224 | `fb8c8f2b69ead836` | WRF example or reference file |
| `examples/doc/README.crtm` | text | 2658 | `2f2f0e48fbd6713a` | WRF example or reference file |
| `examples/doc/README.CTSM` | text | 1078 | `5d8b3615fa99da5b` | WRF example or reference file |
| `examples/doc/README.cygwin.md` | text | 3603 | `d701155a42f7bc8e` | WRF example or reference file |
| `examples/doc/README.DA` | text | 28609 | `7a31f78492434a77` | WRF example or reference file |
| `examples/doc/README.DA_chem` | text | 3973 | `3a7c03e57df36eb7` | WRF example or reference file |
| `examples/doc/README.hybrid_vert_coord` | text | 7286 | `3eddbbb2c5f4f867` | WRF example or reference file |
| `examples/doc/README.hydro` | text | 4512 | `933d469ea7c72c2e` | WRF example or reference file |
| `examples/doc/README.io_config` | text | 3402 | `264dd6bccde2faf5` | WRF example or reference file |
| `examples/doc/README.irr_diag` | text | 4001 | `381dd8f1cbe8a074` | WRF example or reference file |
| `examples/doc/README.madwrf` | text | 2101 | `a6633dba8cba5548` | WRF example or reference file |
| `examples/doc/README.netcdf4par` | text | 1895 | `0774e3b5f0cde3cd` | WRF example or reference file |
| `examples/doc/README.NMM` | text | 63 | `98b053a369eb8cc0` | WRF example or reference file |
| `examples/doc/README.NSSLmp` | text | 15050 | `9cf01e61f9f0ecd2` | WRF example or reference file |
| `examples/doc/README.rsl_output` | text | 1242 | `a4264cd47cf016dd` | WRF example or reference file |
| `examples/doc/README.SSIB` | text | 2185 | `d6456f3336ac9c8a` | WRF example or reference file |
| `examples/doc/README.test_cases` | text | 4339 | `dbebc2b3d4d7b388` | WRF example or reference file |
| `examples/doc/README.windturbine` | text | 6122 | `b19327428363c5be` | WRF example or reference file |
| `examples/doc/README.WRFPLUS` | text | 1658 | `5428ca73f3e15e4d` | WRF example or reference file |
| `examples/test/em_b_wave/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_b_wave/input_jet` | text | 61480 | `9f4cdc9e55c316df` | WRF example or reference file |
| `examples/test/em_b_wave/namelist.input` | text | 4535 | `c4e85a4dafca1908` | WRF example or reference file |
| `examples/test/em_b_wave/namelist.input.backwards` | text | 4538 | `43a6b1475fcb54a6` | WRF example or reference file |
| `examples/test/em_convrad/CMakeLists.txt` | text | 1133 | `a7144b21bd99a905` | WRF example or reference file |
| `examples/test/em_convrad/input_sounding` | text | 1906 | `2c23c4d47b445b05` | WRF example or reference file |
| `examples/test/em_convrad/namelist.input` | text | 4189 | `9cd6bbd5535254e9` | WRF example or reference file |
| `examples/test/em_convrad/README.convrad` | text | 1472 | `15e8ba1f33f7996c` | WRF example or reference file |
| `examples/test/em_esmf_exp/namelist.input.jan00.ESMFSST` | text | 4828 | `ad6995051563c54b` | WRF example or reference file |
| `examples/test/em_esmf_exp/namelist.input.jan00.NETCDFSST` | text | 4830 | `968aaed9904a9f2e` | WRF example or reference file |
| `examples/test/em_esmf_exp/README_WRF_CPL_SST.txt` | text | 9168 | `eb80bdbdafe2c7c1` | WRF example or reference file |
| `examples/test/em_esmf_exp/WRF_CPL_SST.tar.gz` | binary | 188398 | `0b214bb9e1bfe49d` | WRF example or reference file |
| `examples/test/em_fire/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_fire/create_links.sh` | text | 820 | `4077c6ba667d0390` | WRF example or reference file |
| `examples/test/em_fire/input_sounding` | text | 26 | `656a2dacc4d8fe9a` | WRF example or reference file |
| `examples/test/em_fire/input_sounding_hill_simple` | text | 1799 | `dd216f58064bbc1b` | WRF example or reference file |
| `examples/test/em_fire/input_sounding_rain` | text | 2517 | `020123fb2cfb2375` | WRF example or reference file |
| `examples/test/em_fire/input_sounding_two_fires` | text | 1799 | `8eb2ad8934d64117` | WRF example or reference file |
| `examples/test/em_fire/namelist.fire` | text | 2559 | `2ad6471a8c2e8eb6` | WRF example or reference file |
| `examples/test/em_fire/namelist.fire.sb40` | text | 7381 | `4ef67526cc110821` | WRF example or reference file |
| `examples/test/em_fire/namelist.fire_fmc` | text | 4770 | `aa24f26ab69a1eac` | WRF example or reference file |
| `examples/test/em_fire/namelist.fire_fmc.sb40` | text | 11577 | `aef625d2812966c2` | WRF example or reference file |
| `examples/test/em_fire/namelist.fire_hill_simple` | text | 2356 | `b6e0e7e0aba457d8` | WRF example or reference file |
| `examples/test/em_fire/namelist.fire_two_fires` | text | 2355 | `dfa8645e00cbcfd8` | WRF example or reference file |
| `examples/test/em_fire/namelist.input` | text | 26 | `7b473ee0dfba9742` | WRF example or reference file |
| `examples/test/em_fire/namelist.input_hill_simple` | text | 9587 | `d394bcdca69db101` | WRF example or reference file |
| `examples/test/em_fire/namelist.input_rain` | text | 11243 | `f1ee5f5ebedca7d6` | WRF example or reference file |
| `examples/test/em_fire/namelist.input_two_fires` | text | 9802 | `1a27984ec6e9879e` | WRF example or reference file |
| `examples/test/em_fire/README.txt` | text | 635 | `f577d5d6e2fbc73c` | WRF example or reference file |
| `examples/test/em_grav2d_x/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_grav2d_x/input_sounding` | text | 684 | `c84a29a082410ff8` | WRF example or reference file |
| `examples/test/em_grav2d_x/input_sounding.um=0` | text | 684 | `c84a29a082410ff8` | WRF example or reference file |
| `examples/test/em_grav2d_x/input_sounding.um=20` | text | 684 | `413a2cd5837589ba` | WRF example or reference file |
| `examples/test/em_grav2d_x/namelist.input` | text | 3494 | `e8f1791b2ae067ba` | WRF example or reference file |
| `examples/test/em_grav2d_x/namelist.input.100m` | text | 3495 | `357c7119b177f95e` | WRF example or reference file |
| `examples/test/em_grav2d_x/namelist.input.200m` | text | 3495 | `ccc5b1a2c34d393d` | WRF example or reference file |
| `examples/test/em_grav2d_x/namelist.input.400m` | text | 3495 | `049af0d2fe229398` | WRF example or reference file |
| `examples/test/em_grav2d_x/README.grav2d_x` | text | 2040 | `d02a5765ae254753` | WRF example or reference file |
| `examples/test/em_heldsuarez/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_heldsuarez/namelist.input` | text | 4609 | `349086813259f42c` | WRF example or reference file |
| `examples/test/em_heldsuarez/README.heldsuarez` | text | 2005 | `dbb64e20b5f02376` | WRF example or reference file |
| `examples/test/em_hill2d_x/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/input_sounding-layers-20mps` | text | 35494 | `d934408fb0848290` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/input_sounding-U=10,N=0.01` | text | 35494 | `2d33d13b9c22c623` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/input_sounding-U=15,N=0.01` | text | 35494 | `6c13cd50878502b1` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/namelist.input-100m_hill-10mps-N^2=0.0001-30km_deep-20km_damping-dampcoef=0.1-etac=0.2` | text | 3617 | `c59fd4e41923a5d1` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/namelist.input-700m_hill-15mps-n^2=0.0001-25km_deep-15km_damping-dampcoef=0.08-etac=0.2` | text | 3618 | `60daeeed5df1a8bc` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/namelist.input-HILL` | text | 3618 | `a2900dace2dd0afb` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/namelist.input-HILL-51` | text | 3619 | `9a8ff76dd4302037` | WRF example or reference file |
| `examples/test/em_hill2d_x/extras/namelist.input-HILL-schar` | text | 3615 | `c433249b7437df87` | WRF example or reference file |
| `examples/test/em_hill2d_x/input_sounding` | text | 35494 | `2d33d13b9c22c623` | WRF example or reference file |
| `examples/test/em_hill2d_x/namelist.input` | text | 3495 | `45f41ea7eb83d482` | WRF example or reference file |
| `examples/test/em_les/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_les/input_sounding` | text | 2204 | `6aed509b22519dcd` | WRF example or reference file |
| `examples/test/em_les/input_sounding.SGP` | text | 44933 | `9bd40b4c385842f8` | WRF example or reference file |
| `examples/test/em_les/input_sounding_free` | text | 2204 | `6aed509b22519dcd` | WRF example or reference file |
| `examples/test/em_les/input_sounding_meanwind` | text | 2204 | `099ffa56e7819eeb` | WRF example or reference file |
| `examples/test/em_les/input_sounding_shalconv` | text | 2345 | `ff044b473cc56389` | WRF example or reference file |
| `examples/test/em_les/namelist.input` | text | 4982 | `1e17d01bfc56b5db` | WRF example or reference file |
| `examples/test/em_les/namelist.input.SGP` | text | 5682 | `b84bcfb5a98a9da4` | WRF example or reference file |
| `examples/test/em_les/namelist.input_shalconv` | text | 5048 | `ea9ec89985dbcac3` | WRF example or reference file |
| `examples/test/em_les/README.les` | text | 2521 | `c3f59ffcf0a0ac8a` | WRF example or reference file |
| `examples/test/em_quarter_ss/CMakeLists.txt` | text | 1373 | `f432820626553c65` | WRF example or reference file |
| `examples/test/em_quarter_ss/input_sounding` | text | 14469 | `554a8b9c216c70d2` | WRF example or reference file |
| `examples/test/em_quarter_ss/input_sounding_preWRFV3.6` | text | 2517 | `020123fb2cfb2375` | WRF example or reference file |
| `examples/test/em_quarter_ss/namelist.input` | text | 4849 | `19c3453e1a8401d3` | WRF example or reference file |
| `examples/test/em_quarter_ss/namelist.input_2to1` | text | 4824 | `fc46982058abbd64` | WRF example or reference file |
| `examples/test/em_quarter_ss/namelist.input_3to1` | text | 4824 | `5c78abd231a0331f` | WRF example or reference file |
| `examples/test/em_quarter_ss/namelist.input_4to1` | text | 4826 | `91cdda92f509a0f3` | WRF example or reference file |
| `examples/test/em_quarter_ss/namelist.input_5to1` | text | 4826 | `9a33eda5a1fbbf48` | WRF example or reference file |
| `examples/test/em_quarter_ss/README.quarter_ss` | text | 1594 | `6cc08793ed9e9b68` | WRF example or reference file |
| `examples/test/em_real/.gitignore` | text | 1094 | `83c19e2e2fa046b3` | WRF example or reference file |
| `examples/test/em_real/CMakeLists.txt` | text | 6876 | `1848a19fb30b0d51` | WRF example or reference file |
| `examples/test/em_real/examples.namelist` | text | 31821 | `48fcdee4db7620e7` | WRF example or reference file |
| `examples/test/em_real/namelist.input` | text | 3831 | `9b003ba3700631a4` | WRF example or reference file |
| `examples/test/em_real/namelist.input.4km` | text | 3886 | `0041423dbca8df67` | WRF example or reference file |
| `examples/test/em_real/namelist.input.chem` | text | 6115 | `99c1c981f5cac230` | WRF example or reference file |
| `examples/test/em_real/namelist.input.diags` | text | 5414 | `7817501236fe0b91` | WRF example or reference file |
| `examples/test/em_real/namelist.input.fire` | text | 8672 | `0e669cda2cd9f8de` | WRF example or reference file |
| `examples/test/em_real/namelist.input.global` | text | 4015 | `3a9ae0362a6b9b35` | WRF example or reference file |
| `examples/test/em_real/namelist.input.IEVA.4km` | text | 3971 | `60a9b8cf5423626c` | WRF example or reference file |
| `examples/test/em_real/namelist.input.jan00` | text | 4836 | `da6d23fe0c082353` | WRF example or reference file |
| `examples/test/em_real/namelist.input.jun01` | text | 3977 | `72281cf87d92ca64` | WRF example or reference file |
| `examples/test/em_real/namelist.input.ndown_1` | text | 5414 | `0b0af78719d4f5f6` | WRF example or reference file |
| `examples/test/em_real/namelist.input.ndown_2` | text | 5511 | `8ed84fe8b2ba8979` | WRF example or reference file |
| `examples/test/em_real/namelist.input.ndown_3` | text | 5523 | `44d86864cb7edf94` | WRF example or reference file |
| `examples/test/em_real/namelist.input.pbl-les` | text | 4079 | `7ad14f3738bf0ad5` | WRF example or reference file |
| `examples/test/em_real/namelist.input.volc` | text | 5805 | `f088771746eb0671` | WRF example or reference file |
| `examples/test/em_real/README.grid_fdda` | text | 4095 | `1fb602259a9e5de5` | WRF example or reference file |
| `examples/test/em_real/README.obs_fdda` | text | 12204 | `938d2795028e3567` | WRF example or reference file |
| `examples/test/em_real/run_1way.tar` | binary | 10240 | `aa06a304d4a00780` | WRF example or reference file |
| `examples/test/em_real/run_2way.tar` | binary | 20480 | `b4bb18b31ccf57bd` | WRF example or reference file |
| `examples/test/em_real/run_restart.tar` | binary | 10240 | `67df95fe87450068` | WRF example or reference file |
| `examples/test/em_real/sample.txt` | text | 633 | `a242f5903a90530f` | WRF example or reference file |
| `examples/test/em_real/windturbines.txt` | text | 69 | `49633da16e0c02fe` | WRF example or reference file |
| `examples/test/em_scm_xy/CMakeLists.txt` | text | 1051 | `44e472ec81dead32` | WRF example or reference file |
| `examples/test/em_scm_xy/force_ideal.nc` | text | 8192 | `e352b653ec7312ab` | WRF example or reference file |
| `examples/test/em_scm_xy/forcing_file.cdl` | text | 7582 | `cdf184ab8e31bc74` | WRF example or reference file |
| `examples/test/em_scm_xy/GABLS_II_forcing.txt` | text | 185 | `1ae02691c555f4d5` | WRF example or reference file |
| `examples/test/em_scm_xy/input_soil` | text | 245 | `a0fc3318877bd834` | WRF example or reference file |
| `examples/test/em_scm_xy/input_sounding` | text | 591 | `3491a76cf81eaabd` | WRF example or reference file |
| `examples/test/em_scm_xy/make_scm_forcing.ncl` | text | 3119 | `0516744018604862` | WRF example or reference file |
| `examples/test/em_scm_xy/namelist.input` | text | 4226 | `b5de9a655751f7af` | WRF example or reference file |
| `examples/test/em_scm_xy/README.scm` | text | 3834 | `f99772cdda4d5d5a` | WRF example or reference file |
| `examples/test/em_seabreeze2d_x/CMakeLists.txt` | text | 882 | `3f66599ce544ed1e` | WRF example or reference file |
| `examples/test/em_seabreeze2d_x/input_sounding` | text | 6126 | `065eb5b89cf3a90d` | WRF example or reference file |
| `examples/test/em_seabreeze2d_x/namelist.input` | text | 4142 | `020dd58c6209e947` | WRF example or reference file |
| `examples/test/em_seabreeze2d_x/namelist.input.windfarm` | text | 4276 | `70ca97162cfbf881` | WRF example or reference file |
| `examples/test/em_seabreeze2d_x/README.seabreeze` | text | 1328 | `2f724b419f34d2c1` | WRF example or reference file |
| `examples/test/em_squall2d_x/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_squall2d_x/input_sounding` | text | 6126 | `8b16378c26b7602a` | WRF example or reference file |
| `examples/test/em_squall2d_x/namelist.input` | text | 3791 | `1da9010346c7565f` | WRF example or reference file |
| `examples/test/em_squall2d_y/CMakeLists.txt` | text | 758 | `b4196d968868941d` | WRF example or reference file |
| `examples/test/em_squall2d_y/input_sounding` | text | 6102 | `de83ac61fd4e91cc` | WRF example or reference file |
| `examples/test/em_squall2d_y/namelist.input` | text | 3790 | `a70407f23988077e` | WRF example or reference file |
| `examples/test/em_tropical_cyclone/CMakeLists.txt` | text | 828 | `098c30dbbcae4580` | WRF example or reference file |
| `examples/test/em_tropical_cyclone/input_sounding` | text | 2122 | `2d0c4aee7ac5dc57` | WRF example or reference file |
| `examples/test/em_tropical_cyclone/namelist.input` | text | 3602 | `8ea0f87cf76e290b` | WRF example or reference file |
| `examples/test/em_tropical_cyclone/README.tropical_cyclone` | text | 3365 | `b14a64603241799c` | WRF example or reference file |
| `images/clock-bg-sm.png` | binary | 7093 | `3bec8e79a1709963` | Application image asset |
| `img/globe.png` | binary | 8987 | `0809ea23b0e2ddc3` | Application image asset |
| `img/globe_32x32.png` | binary | 2838 | `b507ec4941d63cb8` | Application image asset |
| `index.html` | text | 49008 | `54c3e42802c7e18b` | Static browser application shell |
| `launch-local.bat` | text | 253 | `1f8e24071a342194` | Local server launcher |
| `launch-local.command` | text | 290 | `c7d1392940159f41` | Local server launcher |
| `launch-local.sh` | text | 264 | `767ab0f42468b744` | Local server launcher |
| `launch_local_server.py` | text | 2366 | `b74d133742d666b9` | Local server launcher |
| `LICENSE` | text | 35149 | `3972dc9744f6499f` | Project file |
| `package.json` | text | 565 | `b45cd73bad511cb9` | Project file |
| `README.md` | text | 12795 | `757ee468a8d86cb7` | Public landing page and release checkpoint summary |
| `src/core/app-version.js` | text | 1429 | `3f886324f54f7188` | First-party browser source or generated fallback bundle |
| `src/core/browser-compat.js` | text | 4881 | `0cd269223d134b26` | First-party browser source or generated fallback bundle |
| `src/core/wrf-domain-wizard.js` | text | 1306293 | `d1108575ebd513c9` | First-party browser source or generated fallback bundle |
| `src/core/wrf-domain-wizard.min.js` | text | 1296145 | `8a7069f4c1465a72` | First-party browser source or generated fallback bundle |
| `src/namelist/namelist-compatibility-engine.js` | text | 12344 | `f2e372d35752e061` | First-party browser source or generated fallback bundle |
| `src/namelist/namelist-input-data.js` | text | 2214217 | `1476399eb8846714` | First-party browser source or generated fallback bundle |
| `src/namelist/namelist-input-editor.js` | text | 412525 | `17e0a5dd7ee924d7` | First-party browser source or generated fallback bundle |
| `src/namelist/namelist-runtime-engine.js` | text | 20251 | `5c06a2c48bd3c3f7` | First-party browser source or generated fallback bundle |
| `src/namelist/README.md` | text | 668 | `bb3109f273ad01f0` | First-party browser source or generated fallback bundle |
| `src/namelist/row_highlight.js` | text | 444 | `aca00e3656ca6383` | First-party browser source or generated fallback bundle |
| `src/shared/README.md` | text | 401 | `df89254844f6778c` | First-party browser source or generated fallback bundle |
| `src/tools/wps-tools.js` | text | 28812 | `82118655bd67fc89` | First-party browser source or generated fallback bundle |
| `src/wps/README.md` | text | 325 | `51d7342ae12b3fef` | First-party browser source or generated fallback bundle |
| `styles/wps-tools.css` | text | 1868 | `f52963ee7ca0b2de` | First-party application CSS |
| `styles/wrf-domain-wizard.css` | text | 53747 | `ece0a4aaaa4ea566` | First-party application CSS |
| `styles/wrf-domain-wizard.min.css` | text | 48186 | `67030972ce19c4c3` | First-party application CSS |
| `tools/test_compatibility_condition_modes.js` | text | 3602 | `e0277e0bee993504` | Release validation or test tool |
| `tools/validate_release.py` | text | 1737 | `f9afc8eb0f455d0a` | Release validation or test tool |
| `vendor/css/all.min.css` | text | 59305 | `99464ceb71bc9bbd` | Vendored third-party browser dependency |
| `vendor/css/bootstrap-datetimepicker.min.css` | text | 9223 | `1037b4ab1af36456` | Vendored third-party browser dependency |
| `vendor/css/bootstrap-select.min.css` | text | 11179 | `a58e1dc9c68f4888` | Vendored third-party browser dependency |
| `vendor/css/bootstrap.min.css` | text | 162264 | `f886516f3d41e9e7` | Vendored third-party browser dependency |
| `vendor/css/images/layers-2x.png` | binary | 1259 | `066daca850d8ffbe` | Vendored third-party browser dependency |
| `vendor/css/images/layers.png` | binary | 696 | `1dbbe9d028e292f3` | Vendored third-party browser dependency |
| `vendor/css/images/marker-icon-2x.png` | binary | 2464 | `00179c4c1ee830d3` | Vendored third-party browser dependency |
| `vendor/css/images/marker-icon.png` | binary | 1466 | `574c3a5cca85f411` | Vendored third-party browser dependency |
| `vendor/css/images/marker-shadow.png` | binary | 618 | `264f5c640339f042` | Vendored third-party browser dependency |
| `vendor/css/leaflet-sidebar.min.css` | text | 4401 | `d74770c31b3fa5d5` | Vendored third-party browser dependency |
| `vendor/css/leaflet.css` | text | 14145 | `337bfca5cabd03b3` | Vendored third-party browser dependency |
| `vendor/js/Blob.js` | text | 20673 | `eb559a71c5884d27` | Vendored third-party browser dependency |
| `vendor/js/bootstrap-datetimepicker.min.js` | text | 40600 | `99caf37924c66778` | Vendored third-party browser dependency |
| `vendor/js/bootstrap-select.min.js` | text | 53644 | `aa8d026a6e172744` | Vendored third-party browser dependency |
| `vendor/js/bootstrap.bundle.min.js` | text | 83376 | `19126b874a32753d` | Vendored third-party browser dependency |
| `vendor/js/FileSaver.min.js` | text | 2749 | `c68874cbaa2fd165` | Vendored third-party browser dependency |
| `vendor/js/html-to-image.js` | text | 19568 | `0181b9a4ea335154` | Vendored third-party browser dependency |
| `vendor/js/immediate.min.js` | text | 3431 | `49a110c7957a803d` | Vendored third-party browser dependency |
| `vendor/js/jquery.min.js` | text | 87533 | `fc9a93dd241f6b04` | Vendored third-party browser dependency |
| `vendor/js/leaflet-providers.js` | text | 35853 | `4ffe1345cf9a1bae` | Vendored third-party browser dependency |
| `vendor/js/leaflet-sidebar.min.js` | text | 6993 | `e2bf3505829e3714` | Vendored third-party browser dependency |
| `vendor/js/leaflet.js` | text | 147552 | `db49d009c841f5ca` | Vendored third-party browser dependency |
| `vendor/js/leaflet.spin.min.js` | text | 950 | `8ecd8d9bdff05fe4` | Vendored third-party browser dependency |
| `vendor/js/leaflet.textpath.js` | text | 5770 | `296db08583608ef8` | Vendored third-party browser dependency |
| `vendor/js/moment-timezone-with-data.min.js` | text | 785330 | `2404ed433c928ea2` | Vendored third-party browser dependency |
| `vendor/js/moment.min.js` | text | 58890 | `845c524969edd5b3` | Vendored third-party browser dependency |
| `vendor/js/proj4.js` | text | 92739 | `9ecae61d88a97648` | Vendored third-party browser dependency |
| `vendor/js/spin.umd.js` | text | 6079 | `bc823526eb659f89` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-brands-400.eot` | binary | 134294 | `e4299464e7b01296` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-brands-400.svg` | binary | 747927 | `a3b9817780214caf` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-brands-400.ttf` | binary | 133988 | `cda59d6efffa6858` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-brands-400.woff` | binary | 89988 | `f9217f66874b0c01` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-brands-400.woff2` | binary | 76736 | `8ea8791754915a89` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-regular-400.eot` | binary | 34034 | `79d088064beb3826` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-regular-400.svg` | binary | 144714 | `be0a084962d80668` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-regular-400.ttf` | binary | 33736 | `e8711bbb871afd8e` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-regular-400.woff` | binary | 16276 | `cb9e9e693192413c` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-regular-400.woff2` | binary | 13224 | `e42a88444448ac3d` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-solid-900.eot` | binary | 203030 | `373c04fd2418f5c7` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-solid-900.svg` | binary | 918991 | `9674eb1bd5504717` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-solid-900.ttf` | binary | 202744 | `af6397503fcefbd6` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-solid-900.woff` | binary | 101648 | `3f6d3488cf65374f` | Vendored third-party browser dependency |
| `vendor/webfonts/fa-solid-900.woff2` | binary | 78268 | `9834b82ad26e2a37` | Vendored third-party browser dependency |
