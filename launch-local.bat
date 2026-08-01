@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 launch_local_server.py %*
) else (
  python launch_local_server.py %*
)
pause
