#!/usr/bin/env python3
"""Launch a local HTTP server for WRF Config Studio v1.0.0."""
from __future__ import annotations

import http.server
import os
import socket
import socketserver
import sys
import webbrowser
from pathlib import Path

HOST = "127.0.0.1"
DEFAULT_PORT = 8000
MAX_PORT_TRIES = 50


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".wasm": "application/wasm",
        ".svg": "image/svg+xml",
    }


def port_is_available(host: str, port: int) -> bool:
    """Return True when the port can be bound on this host."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            sock.bind((host, port))
        except OSError:
            return False
    return True


def choose_port(host: str, preferred_port: int, max_tries: int = MAX_PORT_TRIES) -> int:
    """Use preferred_port when possible, otherwise try the next ports."""
    for port in range(preferred_port, preferred_port + max_tries):
        if port_is_available(host, port):
            return port
    raise OSError(
        f"No available local ports found from {preferred_port} to {preferred_port + max_tries - 1}."
    )


if __name__ == "__main__":
    root = Path(__file__).resolve().parent
    os.chdir(root)

    preferred_port = DEFAULT_PORT
    if len(sys.argv) > 1:
        try:
            preferred_port = int(sys.argv[1])
        except ValueError:
            print(f"Ignoring invalid port argument: {sys.argv[1]!r}")

    port = choose_port(HOST, preferred_port)
    url = f"http://{HOST}:{port}/"

    print("WRF Config Studio v1.0.0 local server")
    print(f"Serving: {root}")

    if port != preferred_port:
        print(f"Port {preferred_port} is already in use. Using port {port} instead.")

    print(f"Open: {url}")

    try:
        webbrowser.open(url)
    except Exception:
        pass

    with ReusableTCPServer((HOST, port), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
