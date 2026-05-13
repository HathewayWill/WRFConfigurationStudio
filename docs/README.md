# WRF Config Studio Documentation

Generated: 2026-05-13T14:21:27Z

This `docs/` folder is the GitHub website documentation set for **WRF Config Studio v1.0.0**.

## Top-level documents

- `QUICK_START.md` — shortest path to launch the app and export files.
- `USER_GUIDE.md` — website-ready user guide with screenshots.
- `print/WRF_CONFIG_STUDIO_WEBSITE_USER_GUIDE_ONLINE_LOCAL.docx` — printable/downloadable user guide.
- `TECHNICAL_REFERENCE.md` — consolidated technical notes, browser compatibility, catalog behavior, export split, Lambert update behavior, and packaging notes.
- `RELEASE_HISTORY.md` — consolidated timestamped release history, changelog, and patch notes.
- `PROJECT_LINEAGE.md` — NOAA/FSL WRF SI GUI lineage, Jiří Richter / WRF Domain Wizard credit, and v1.0.0 rebrand notes.
- `GITHUB_WEBSITE_STRUCTURE.md` — recommended GitHub Pages layout and static-site structure.
- `FILE_MAP.md` — package inventory, file roles, and SHA256 checksums.

## Supporting folders

- `images/user-guide/` — screenshots used by `USER_GUIDE.md`.
- `references/` — preserved reference PDFs, including NOAA/FSL GUI and ARW Technical Note material.
- `archive/` — preserved legacy source notes and historical documentation in archived form.

## Current file split behavior

WRF Config Studio v1.0.0 exports:

```text
namelist.wps
namelist.input
namelist.obsproc
```

WRFDA stays in `namelist.input`. OBSPROC saves separately as `namelist.obsproc`.

## Online-only map mode

The package can run locally, but this v1.0.0 build uses online tile providers only for the map background. If online map tiles are unavailable, the map background may not render until the network connection or selected tile provider is available.

## Documentation policy

The top-level documents are intended for current website users. The archive exists for traceability and historical review.
