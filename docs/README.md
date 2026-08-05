# WRF Configuration Studio Documentation

This `docs/` folder is the documentation set for **WRF Configuration Studio v1.0.0**.

## Top-level documents

- `QUICK_START.md` — shortest path to launch the app and export files.
- `USER_GUIDE.md` — website-ready user guide with screenshots.
- `TECHNICAL_REFERENCE.md` — technical notes, browser compatibility, catalog behavior, export split, compatibility rules, and packaging notes.
- `PROJECT_LINEAGE.md` — NOAA/FSL WRF SI GUI lineage and Jiří Richter / WRF Domain Wizard credit.
- `RELEASE_HISTORY.md` — current release checkpoint summary.
- `SOURCE_FILE_NOTES.md` — maintainer notes for first-party, generated, vendor, reference, and example files.
- `COMMENT_AND_NOTES_AUDIT.md` — comment and documentation audit for this public-release review.
- `GITHUB_WEBSITE_STRUCTURE.md` — recommended GitHub Pages layout and static-site structure.
- `FILE_MAP.md` — generated package inventory.
- `PACKAGE_VALIDATION_REPORT.md` — generated package validation summary.

## Supporting folders

- `images/user-guide/` — screenshots used by `USER_GUIDE.md`.
- `references/` — preserved reference PDFs and lineage material.
- `release-notes/` — current publication notes and release layout guidance.
- `user-guide/` — printable/downloadable user-guide assets.

## Current file split behavior

WRF Configuration Studio exports:

```text
namelist.wps
namelist.input
namelist.obsproc
```

WRFDA settings stay in `namelist.input`. OBSPROC records are displayed in the editor as `obsproc_record*` groups and exported separately as `&record1` through `&record9` in `namelist.obsproc`.

## Online map mode

The package can run locally, but this build uses online tile providers for the map background. If online map tiles are unavailable, the map background may not render until the network connection or selected tile provider is available.

## Documentation policy

The top-level documents are intended for current users and maintainers. Generated data, vendor libraries, WRF examples, and binary references are documented by surrounding notes rather than edited directly.
