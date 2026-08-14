# WRFDA and OBSPROC workflow presets — 2026-08-05

This branch adds guided presets for common WRFDA and OBSPROC workflows.

## Starting point

- Compatibility rules: 184 total, 184 valid
- OBSPROC groups are available in the namelist editor as &record1 through &record9
- WRFDA, radar, precipitation DA, and WRFDA-Chem workflow rules are active

## Planned presets

- 3DVAR conventional observations
- FGAT conventional observations
- 4DVAR conventional observations
- 4DVAR radar
- 4DVAR precipitation DA
- WRFDA-Chem surface observations
- OBSPROC ASCII output
- OBSPROC PREPBUFR output
- OBSPROC ASCII + PREPBUFR output

## Goal

Turn validated compatibility guidance into guided configuration presets that enable and populate the most important namelist fields for each workflow.


## Initial implementation

- Added a WRFDA / OBSPROC workflow preset selector to the namelist editor.
- Added an Apply preset action that enables and populates known workflow fields.
- Added presets for conventional 3DVAR, conventional FGAT, conventional 4DVAR, 4DVAR radar, 4DVAR precipitation DA, WRFDA-Chem surface observations, OBSPROC ASCII output, OBSPROC PREPBUFR output, and combined OBSPROC ASCII + PREPBUFR output.
- Preset-applied fields are marked as user edited so compatibility guidance updates immediately.


## Follow-up usability improvements

- Highlighted collapsed namelist groups when any contained field has a compatibility warning or error.
- Made compatibility error and warning badges clickable so users can jump directly to the first affected field.
- Made group-level error and warning badges clickable so collapsed sections can be expanded and focused quickly.
- Updated fallback group sorting to use natural numeric order, so WRFVAR groups sort as wrfvar1, wrfvar2, wrfvar3, ... instead of wrfvar1, wrfvar10, wrfvar11, ... .
