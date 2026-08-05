#!/usr/bin/env python3
import json
import subprocess
from collections import Counter
from pathlib import Path

root = Path(__file__).resolve().parents[1]

required_paths = [
    "index.html",
    "README.md",
    "LICENSE",
    "src",
    "styles",
    "vendor",
    "images",
    "data/runtime",
    "data/raw",
    "examples",
    "docs/user-guide",
    "docs/references",
    "docs/references/legacy_source_docs.zip",
    "docs/release-notes",
    "tools/test_compatibility_condition_modes.js",
]

missing = [p for p in required_paths if not (root / p).exists()]
if missing:
    raise SystemExit("Missing required release paths: " + ", ".join(missing))

compat = root / "data/runtime/namelist.input.compatibility.validated.json"
data = json.loads(compat.read_text())
rules = data["rules"]
statuses = Counter(r.get("validationStatus", "") for r in rules)
strengths = Counter(r.get("strength", "") for r in rules)

print("Compatibility rules:")
print("  total:", len(rules))
print("  statuses:", statuses)
print("  strengths:", strengths)

assert len(rules) == 184, "Expected 184 total compatibility rules"
assert statuses["valid"] == 184, "Expected 184 valid rules"
assert statuses["unreviewed"] == 0, "Expected 0 unreviewed rules"
assert statuses["needs_review"] == 0, "Expected 0 needs_review rules"

subprocess.check_call(["node", "tools/test_compatibility_condition_modes.js"], cwd=root)

print("Release validation passed.")
