# WRF Config Studio Project Lineage

Generated: 2026-05-04T23:20:07Z

This document consolidates project identity, historical lineage, and credit information.

## Summary

WRF Config Studio acknowledges three connected layers of project history:

1. NOAA/FSL's early WRF Standard Initialization GUI work, which demonstrated a graphical workflow for WRF domain localization and initialization setup.
2. Jiří Richter's original WRF Domain Wizard, which provided the direct foundation and first-generation implementation for this browser-based lineage.
3. WRF Config Studio v1.0.0, the current rebranded continuation focused on WRF domains, namelist editing, WRFDA, OBSPROC, and Registry metadata.

## Original project

```text
https://github.com/JiriRichter/WRFDomainWizard
```

## Historical NOAA/FSL PDF reference

```text
docs/references/WRF_GUI_original_source_69852.pdf
```


---

## NOAA/FSL WRF SI GUI Acknowledgment

Generated: 2026-05-04T23:20:07Z

## Purpose

This note documents the added About/Credits acknowledgment for the earlier NOAA Forecast Systems Laboratory / Forecast Systems Laboratory (FSL) WRF Standard Initialization GUI work.

## Historical lineage

WRF Config Studio acknowledges three connected layers of project history:

1. NOAA/FSL's early WRF Standard Initialization GUI work, which demonstrated a graphical workflow for WRF domain localization and initialization setup.
2. Jiří Richter's original WRF Domain Wizard, which provided the direct foundation and first-generation implementation for this browser-based tool lineage.
3. WRF Config Studio, the current rebranded continuation focused on WRF domains, namelist editing, WRFDA, OBSPROC, and Registry metadata.

## Added About text

The About panel now includes a NOAA/FSL acknowledgment describing the early WRF SI GUI contribution and linking to the included PDF reference:

```text
docs/references/WRF_GUI_original_source_69852.pdf
```

## Source reference included

The package includes the uploaded historical PDF reference:

```text
A Graphical User Interface to Prepare the Standard Initialization for WRF
Paula T. McCaslin, John R. Smart, Brent Shaw, and Brian D. Jamison
NOAA Research Forecast Systems Laboratory
```

## Behavior

This is a documentation and About-panel update only. It does not change:

- map behavior,
- domain geometry,
- Lambert update behavior,
- namelist exports,
- OBSPROC export splitting,
- WRFDA handling,
- runtime catalogs,
- browser compatibility,
- touch/trackpad behavior.

---

## Rebrand Notes

Generated: 2026-05-04T23:20:07Z

## Public name

The project is now branded as:

```text
WRF Config Studio
```

## Public version

```text
v1.0.0
```

## Recommended GitHub repository name

```text
wrf-config-studio
```

## Description

WRF Config Studio is a browser-based configuration environment for designing WRF domains, editing `namelist.wps` and `namelist.input`, and exploring WRF, WRFDA, OBSPROC, and Registry metadata.

## Legacy continuity

This release is the public rebrand of the V3.1.0 ARW context full-catalog touch/trackpad documentation-fixed build.

Legacy/internal names may still appear in:
- source file names,
- compatibility aliases,
- historical changelog entries,
- original project attribution,
- archived documentation under `docs/originals/`.

## Original project acknowledgment

WRF Config Studio is built upon the original WRF Config Studio developed by Jiří Richter.

Original project:

```text
https://github.com/JiriRichter/WRFDomainWizard
```

## Behavior changes

This is a rebrand release. It does not intentionally change:
- domain geometry,
- map wrapping,
- namelist export behavior,
- registry catalogs,
- OBSPROC catalog exposure,
- browser compatibility logic,
- touch/trackpad interaction logic.

---

## v1.0.0 User Guide Supplement

Generated: 2026-05-04T23:20:07Z

This supplement describes the v1.0.0 public rebrand.

## Current application name

**WRF Config Studio**

## Current behavior

- All namelist catalog variables are visible with no filtering.
- Previous hidden or advanced status is preserved as reference metadata.
- Compatibility validation remains inactive and reference-only.
- OBSPROC records are visible as `&obsproc_record1` through `&obsproc_record9`.
- WRFDA groups are visible as `&wrfvar*` groups.
- Required-field save warnings remain active.
- Suggested values remain user-editable starting points for `time_step`, `radt`, `run_*`, and `cudt` where available.
- Desktop browser compatibility support targets Chrome, Edge, Firefox, and Safari.
- Desktop touch-screen and trackpad interaction fixes are included.

## Legacy guide

The earlier WRF Config Studio guides are preserved in `docs/originals/` and the consolidated documentation files.

## OBSPROC export split

WRFDA groups remain in `namelist.input`. OBSPROC groups are visible in the editor as `&obsproc_record*`, but they export separately as `namelist.obsproc` using real OBSPROC group names `&record*`.

---

## v3.1 ARW Context User Guide Supplement

Generated: 2026-05-04T23:20:07Z

This supplement updates the prior user-guide lineage with V3.1.0 ARW context full-catalog behavior.

## Current ARW Context Behavior

- All namelist catalog variables are visible with no filtering.
- Previous hidden or advanced status is preserved as reference metadata.
- Compatibility validation remains inactive and reference-only.
- OBSPROC records are visible as `&obsproc_record1` through `&obsproc_record9`.
- WRFDA groups are visible as `&wrfvar*` groups.
- Required-field save warnings remain active.
- Suggested values remain user-editable starting points for `time_step`, `radt`, `run_*`, and `cudt` where available.
- Desktop browser compatibility support targets Chrome, Edge, Firefox, and Safari.

## Legacy Guide

The earlier user guide is preserved at `originals/USER_GUIDE_V2.0.0.md`.
