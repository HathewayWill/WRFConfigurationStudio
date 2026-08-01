#!/usr/bin/env python3
import csv
import json
from collections import Counter
from pathlib import Path

BATCH = "2026-07-31_bucket_j_numeric"
RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

OUT_CSV = REPORT_DIR / "promoted_compatibility_rules_2026-07-31_bucket_j_numeric.csv"
OUT_MD = REPORT_DIR / "promoted_compatibility_rules_2026-07-31_bucket_j_numeric.md"

GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"

data = json.loads(RULE_PATH.read_text())
rules = data["rules"]

rule = next((r for r in rules if r.get("id") == "BUCKET-J"), None)
if not rule:
    raise SystemExit("BUCKET-J rule not found")

before_status = rule.get("validationStatus", "")

rule["validationStatus"] = "valid"
rule["validationSource"] = GUIDE
rule["validationUrl"] = GUIDE_URL
rule["trigger"] = {
    "mode": "greater_than",
    "values": [0]
}
rule["validatedVersions"] = ["current-users-guide", "numeric-condition-modes", BATCH]
rule["validationBatch"] = BATCH
rule["validationNotes"] = (
    "Promoted after numeric comparison mode support was added. "
    "The original active trigger was unsafe because bucket_j defaults to -1, which means inactive. "
    "The rule now triggers only when bucket_j > 0, avoiding default-page noise."
)

metadata = data.setdefault("metadata", {})
metadata.pop("scratchNumericConditionTest", None)
metadata["ruleCount"] = len(rules)
metadata["validRuleCount"] = sum(1 for r in rules if r.get("validationStatus") in {"valid", "validated"})
metadata["lastPromotionBatch"] = BATCH

RULE_PATH.write_text(json.dumps(data, indent=2) + "\n")

row = {
    "id": "BUCKET-J",
    "beforeStatus": before_status,
    "afterStatus": "valid",
    "strength": rule.get("strength", ""),
    "trigger": "physics.bucket_j",
    "triggerMode": "greater_than",
    "triggerValues": "0",
    "requirementsRaw": rule.get("requirementsRaw", ""),
}

with OUT_CSV.open("w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=row.keys())
    writer.writeheader()
    writer.writerow(row)

OUT_MD.write_text(f"""# Promoted compatibility rule: BUCKET-J numeric trigger

Promoted `BUCKET-J` after numeric comparison trigger support was added.

## Rule

- ID: `BUCKET-J`
- Previous status: `{before_status}`
- New status: `valid`
- Strength: `{rule.get("strength", "")}`
- Trigger: `physics.bucket_j > 0`
- Trigger mode: `greater_than`
- Requirements raw: {rule.get("requirementsRaw", "")}

## Reason

The old trigger used `active`, but `bucket_j` defaults to `-1`, which means inactive. A plain active/non-zero trigger would warn on the default page.

The new numeric trigger only fires when the user sets `bucket_j` greater than zero.

## Browser test

- Default page stayed quiet.
- Temporary local test promoted `BUCKET-J` to valid with `greater_than 0`.
- Setting `bucket_j = 1` produced the expected compatibility error when radiation schemes were not set to allowed values.
- Setting `ra_lw_physics = 4` and `ra_sw_physics = 4` cleared the error.
""")

print("Promoted BUCKET-J using greater_than 0.")
print("ruleCount:", len(rules))
print("statuses:", Counter(r.get("validationStatus", "") for r in rules))
print("strengths:", Counter(r.get("strength", "") for r in rules))
print(OUT_CSV)
print(OUT_MD)
