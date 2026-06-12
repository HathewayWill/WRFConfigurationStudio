# 🌎 WRF Config Studio — v1.0.0

A browser-based configuration environment for designing **WRF** domains, editing `namelist.wps` and `namelist.input`, and exploring WRF, WRFDA, OBSPROC, and Registry metadata.

This project is the rebranded continuation of the WRF Domain Wizard web build. The original WRF Domain Wizard project by Jiří Richter remains credited in the About section and project documentation.

### Citation for publications

## What v1.0.0 includes

- Interactive WRF domain creation and editing
- `namelist.wps` workflow support
- Full-catalog `namelist.input` editor
- WRFDA groups exposed as `&wrfvar*`
- OBSPROC records exposed as `&obsproc_record1` through `&obsproc_record9`
- Registry metadata included for reference and discovery
- Everything visible, with no UI filtering
- Compatibility metadata retained as reference-only
- Required-field save warnings
- Suggested starting values for `time_step`, `radt`, `run_*`, and `cudt`
- Full 360-degree map/graticule behavior
- Desktop touch-screen and trackpad interaction fixes
- Desktop browser compatibility shims for Chrome, Edge, Firefox, and Safari

## Quick start

Use a local HTTP server rather than opening `index.html` directly.

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

Windows users may run `START_LOCAL_SERVER.bat`. macOS/Linux users may run `START_LOCAL_SERVER.sh` or `START_LOCAL_SERVER.command`.

## Supported desktop browsers

- Windows: Chrome, Edge, Firefox
- macOS: Safari, Chrome, Firefox
- Linux: Chrome/Chromium, Firefox, Edge

Mobile layouts are not a release target for v1.0.0.

## Documentation

Primary GitHub website documentation:

- [Quick Start](docs/QUICK_START.md)
- [User Guide](docs/USER_GUIDE.md)
- [Printable DOCX User Guide](docs/print/WRF_CONFIG_STUDIO_WEBSITE_USER_GUIDE_ONLINE_LOCAL.docx)
- [Technical Reference](docs/TECHNICAL_REFERENCE.md)
- [Release History](docs/RELEASE_HISTORY.md)
- [Project Lineage](docs/PROJECT_LINEAGE.md)
- [GitHub Website Structure](docs/GITHUB_WEBSITE_STRUCTURE.md)

The user guide screenshots are stored in `docs/images/user-guide/`. Historical source notes and older patch documentation are preserved in `docs/archive/`.

## Project identity

Public app name: **WRF Config Studio**

Repository name recommendation:

```text
wrf-config-studio
```

Legacy/internal code names may still reference WRF Domain Wizard where needed for compatibility or historical attribution.

## Folder Tree

```text
└── WRFConfigurationStudio-main/
    ├── data/
    │   ├── raw/
    │   ├── registry/
    │   └── runtime/
    ├── docs/
    │   ├── archive/
    │   ├── images/
    │   │   └── user-guide/
    │   ├── print/
    │   └── references/
    ├── examples/
    │   ├── doc/
    │   └── test/
    │       ├── em_b_wave/
    │       ├── em_convrad/
    │       ├── em_esmf_exp/
    │       ├── em_fire/
    │       ├── em_grav2d_x/
    │       ├── em_heldsuarez/
    │       ├── em_hill2d_x/
    │       │   └── extras/
    │       ├── em_les/
    │       ├── em_quarter_ss/
    │       ├── em_real/
    │       ├── em_scm_xy/
    │       ├── em_seabreeze2d_x/
    │       ├── em_squall2d_x/
    │       ├── em_squall2d_y/
    │       └── em_tropical_cyclone/
    ├── images/
    ├── img/
    ├── src/
    │   ├── core/
    │   ├── namelist/
    │   ├── shared/
    │   ├── tools/
    │   └── wps/
    ├── styles/
    └── vendor/
        ├── css/
        │   └── images/
        ├── js/
        └── webfonts/
```

## NOAA/FSL WRF SI GUI lineage

WRF Config Studio also acknowledges the earlier NOAA Forecast Systems Laboratory / Forecast Systems Laboratory WRF Standard Initialization GUI work by Paula T. McCaslin, John R. Smart, Brent Shaw, and Brian D. Jamison. That work demonstrated a graphical workflow for WRF domain localization, projection and grid editing, initialization setup, and user guidance, and it is part of the technical lineage behind later WRF domain tools.

The historical reference PDF is included in `docs/references/WRF_GUI_original_source_69852.pdf`.

## License

[License:](https://github.com/HathewayWill/WRFConfigurationStudio/blob/main/LICENSE)

## Citation for publications

## Online-only map mode

This v1.0.0 build uses online tile providers only for the map background. The previous bundled offline vector map fallback has been removed.


## v1.0.0 ARW context note

This package is the v1.0.0 mainline build.

This build adds ARW Technical Note v4 scientific-context metadata to the namelist editor. This is reference-only and does not alter export behavior.
