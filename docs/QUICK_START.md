# WRF Config Studio Quick Start

Version: **v1.0.0**  
Generated: 2026-05-04T23:20:07Z

## 1. Extract the package

Unzip the WRF Config Studio release package.

## 2. Start a local server

From inside the extracted folder:

```bash
python -m http.server 8000
```

Or use one of the included launch helpers:

```text
START_LOCAL_SERVER.bat
START_LOCAL_SERVER.sh
START_LOCAL_SERVER.command
launch_local_server.py
```



### Port already in use

If port `8000` is already in use, the launcher automatically uses the next available port and prints the correct local URL.

Example:

```text
Port 8000 is already in use. Using port 8001 instead.
Open: http://127.0.0.1:8001/
```

You can also request a preferred port:

```bash
python launch_local_server.py 8010
```

## 3. Open the app

```text
http://127.0.0.1:8000
```

## 4. Create a domain

1. Open the Domains panel.
2. Click New.
3. Draw the parent domain on the map.
4. Adjust projection, grid, and nesting values.

## 5. Export files

Use the app to save or copy:

```text
namelist.wps
namelist.input
namelist.obsproc
```

## 6. Remember the file split

WRFDA stays in:

```text
namelist.input
```

OBSPROC saves separately as:

```text
namelist.obsproc
```

## 7. Hard refresh after updates

When replacing local builds, use:

```text
Ctrl+F5
```

Then reload the app.
