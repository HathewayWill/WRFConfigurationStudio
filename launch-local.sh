#!/usr/bin/env bash
# WRF Configuration Studio local launcher.
# Starts a simple HTTP server from the package root.
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  python3 launch_local_server.py "$@"
else
  python launch_local_server.py "$@"
fi
