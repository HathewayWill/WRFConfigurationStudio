@REM WRF Configuration Studio local launcher.
@REM Starts a simple HTTP server from the package root.
@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 launch_local_server.py %*
) else (
  python launch_local_server.py %*
)
pause
