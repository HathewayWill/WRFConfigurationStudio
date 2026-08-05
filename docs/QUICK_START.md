# Quick Start

WRF Configuration Studio is a static browser application. Use a local HTTP server rather than opening `index.html` directly.

## Start the local server

From the package root:

```bash
python3 -m http.server 8001
```

Open:

```text
http://127.0.0.1:8001
```

Alternative launcher:

```bash
python3 launch_local_server.py
```

## Basic workflow

1. Open the application in a supported desktop browser.
2. Use the map and domain controls to create or edit WRF domains.
3. Review and export `namelist.wps`.
4. Open the `namelist.input` editor.
5. Review required fields, compatibility warnings, WRFDA settings, and workflow presets.
6. Export `namelist.input`.
7. Export `namelist.obsproc` when OBSPROC records are configured.

## Validate a package

From the package root:

```bash
python3 tools/validate_release.py
```

Expected result:

```text
Compatibility rules:
  total: 184
  statuses: Counter({'valid': 184})
  strengths: Counter({'Hard': 125, 'Workflow': 35, 'Soft': 24})
Compatibility numeric condition mode tests passed.
Release validation passed.
```

## Map note

The app files run locally, but map tiles are loaded from online tile providers unless the application is configured to use another tile source.
