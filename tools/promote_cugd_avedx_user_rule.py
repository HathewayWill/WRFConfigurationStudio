#!/usr/bin/env python3
import csv
import json
from collections import Counter
from pathlib import Path

BATCH = "2026-07-31_cugd_avedx_user"
RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
CATALOG_PATH = Path("data/runtime/namelist.input.catalog.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

OUT_CSV = REPORT_DIR / "promoted_compatibility_rules_2026-07-31_cugd_avedx_user.csv"
OUT_MD = REPORT_DIR / "promoted_compatibility_rules_2026-07-31_cugd_avedx_user.md"

GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"

RULE_ID = "CUGD-AVEDX-USER"

def as_key(group, variable):
    return f"{group}.{variable}"

catalog = json.loads(CATALOG_PATH.read_text())
data = json.loads(RULE_PATH.read_text())
rules = data["rules"]

fields = set()
for group, group_fields in catalog.get("groups", {}).items():
    for field in group_fields:
        name = field.get("name") or field.get("variable") or field.get("key")
        key = field.get("key") or as_key(group, name)
        fields.add(key)

required_fields = {
    "physics.cugd_avedx",
    "physics.cu_physics",
}

missing = sorted(required_fields - fields)
if missing:
    raise SystemExit(f"Missing required catalog fields: {missing}")

existing = next((r for r in rules if r.get("id") == RULE_ID), None)
before_status = existing.get("validationStatus", "") if existing else "added"

rule = {
    "id": RULE_ID,
    "description": "cugd_avedx is only meaningful with Grell-Freitas cumulus physics.",
    "strength": "Soft",
    "triggerGroup": "physics",
    "triggerVariable": "cugd_avedx",
    "trigger": {
        "mode": "user_edited_non_zero",
        "values": []
    },
    "requirements": [
        {
            "group": "physics",
            "variable": "cu_physics",
            "mode": "one_of",
            "values": [5]
        }
    ],
    "requirementsRaw": "cu_physics only works with 5",
    "message": "cugd_avedx is intended for use with cu_physics=5.",
    "fix": "Set physics.cu_physics to 5, or leave cugd_avedx at its default unless you are using the Grell-Freitas cumulus option.",
    "sourceExcerpt": "cugd_avedx compatibility note from WRF namelist variable guidance.",
    "validationStatus": "valid",
    "validationSource": GUIDE,
    "validationUrl": GUIDE_URL,
    "validatedVersions": [
        "current-users-guide",
        "user-edited-trigger-mode",
        BATCH
    ],
    "validationBatch": BATCH,
    "validationNotes": (
        "Promoted as a soft user-edited rule because cugd_avedx has a nonzero default. "
        "The trigger uses user_edited_non_zero so the default page stays quiet and the warning "
        "only appears after the user edits the tuning/control field."
    )
}

if existing:
    idx = rules.index(existing)
    rules[idx] = rule
    action = "updated"
else:
    rules.append(rule)
    action = "added"

metadata = data.setdefault("metadata", {})
metadata["ruleCount"] = len(rules)
metadata["validRuleCount"] = sum(1 for r in rules if r.get("validationStatus") in {"valid", "validated"})
metadata["lastPromotionBatch"] = BATCH

RULE_PATH.write_text(json.dumps(data, indent=2) + "\n")

row = {
    "id": RULE_ID,
    "action": action,
    "beforeStatus": before_status,
    "afterStatus": "valid",
    "strength": "Soft",
    "trigger": "physics.cugd_avedx",
    "triggerMode": "user_edited_non_zero",
    "requirements": "physics.cu_physics one_of 5",
    "requirementsRaw": "cu_physics only works with 5",
}

with OUT_CSV.open("w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=row.keys())
    writer.writeheader()
    writer.writerow(row)

OUT_MD.write_text(f"""# Promoted compatibility rule: CUGD-AVEDX-USER

Promoted `CUGD-AVEDX-USER` as a soft user-edited compatibility rule.

## Rule

- ID: `{RULE_ID}`
- Action: `{action}`
- Previous status: `{before_status}`
- New status: `valid`
- Strength: `Soft`
- Trigger: `physics.cugd_avedx`
- Trigger mode: `user_edited_non_zero`
- Requirement: `physics.cu_physics = 5`

## Reason

The older hard `CUGD-AVEDX` rule should not be promoted directly because `cugd_avedx` defaults to a nonzero value. A normal `active` or `non_zero` trigger would create default-page warning noise.

This rule follows the same pattern as the other user-edited tuning-control rules. It only warns after the user edits `cugd_avedx`.

## Browser test plan

- Default page should stay quiet.
- Compatibility panel should increase by one validated rule.
- Editing `cugd_avedx` while `cu_physics = 0` should produce a soft warning.
- Setting `cu_physics = 5` should clear the warning.
""")

print(f"{action} {RULE_ID}")
print("ruleCount:", len(rules))
print("statuses:", Counter(r.get("validationStatus", "") for r in rules))
print("strengths:", Counter(r.get("strength", "") for r in rules))
print(OUT_CSV)
print(OUT_MD)
