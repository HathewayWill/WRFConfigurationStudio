#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
if command -v python3 >/dev/null 2>&1; then
  python3 launch_local_server.py "$@"
else
  python launch_local_server.py "$@"
fi
