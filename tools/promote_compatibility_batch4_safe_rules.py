#!/usr/bin/env python3
import csv
import json
from collections import Counter
from pathlib import Path

BATCH = "2026-07-31_batch4_safe_default_off"

RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
CATALOG_PATH = Path("data/runtime/namelist.input.catalog.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

OUT_CSV = REPORT_DIR / "promoted_compatibility_rules_2026-07-31_batch4_safe.csv"
OUT_MD = REPORT_DIR / "promoted_compatibility_rules_2026-07-31_batch4_safe.md"

GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"

PROMOTE_IDS = [
    "AER-OPT-3",
    "CU-7-PBL",
    "CU-DIAG",
    "ISFTCFLX",
    "LIGHTNING-RADAR",
    "LSM-7",
    "LSM-8-RAD",
    "NWPDIAG",
    "SHCU-DENG",
    "SURF-IRR",
    "URBAN-BEM",
    "URBAN-BEP",
    "URBAN-NOAH",
    "CU-14-SHCU",
    "SFS-1",
    "SFS-2",
]

HOLD_IDS = [
    "CONVTRANS",
    "KFETA",
    "MAXENS",
    "MAXENS2",
    "MAXENS3",
    "MAXIENS",
    "ENSDIM",
    "CU-RAD",
    "ICCG-1",
    "NOAHMP-IRRM",
    "LIGHTNING-11",
    "MULTI-BDY",
    "OLD-FILES",
    "SLUCM-DRAG",
    "WPS-HIRES",
    "NUM-LAND-CAT",
    "SPECIFIED-D01",
]

def norm(value):
    return "" if value is None else str(value).strip()

def as_key(group, variable):
    group = norm(group)
    variable = norm(variable)
    if not group or not variable:
        return ""
    if "." in variable:
        return variable
    return f"{group}.{variable}"

def get_field_default(field):
    if not field:
        return ""
    for name in ["default", "defaultValue", "default_value", "initial", "value", "values"]:
        if name in field:
            return field.get(name)
    return ""

def is_default_off(value):
    if value is None:
        return True
    if value is False:
        return True
    if value == 0:
        return True

    raw = str(value).strip().lower()
    if raw in {"", "0", "0.0", "0.00", "false", ".false."}:
        return True

    return False

def get_rule_trigger_key(rule):
    return rule.get("triggerKey") or as_key(rule.get("triggerGroup"), rule.get("triggerVariable"))

def get_requirement_keys(rule):
    keys = []

    for req in rule.get("requirements", []) or []:
        if not isinstance(req, dict):
            continue
        key = req.get("key") or as_key(
            req.get("group") or req.get("requiredGroup"),
            req.get("variable") or req.get("requiredVariable"),
        )
        if key:
            keys.append(key)

    key = rule.get("requiredKey") or as_key(rule.get("requiredGroup"), rule.get("requiredVariable"))
    if key:
        keys.append(key)

    return sorted(set(keys))

catalog = json.loads(CATALOG_PATH.read_text())
data = json.loads(RULE_PATH.read_text())
rules = data.get("rules", [])

fields_by_key = {}
for group, fields in catalog.get("groups", {}).items():
    for field in fields:
        name = field.get("name") or field.get("variable") or field.get("key")
        key = field.get("key") or as_key(group, name)
        if key:
            fields_by_key[key] = field

rules_by_id = {rule.get("id"): rule for rule in rules}

missing = [rid for rid in PROMOTE_IDS if rid not in rules_by_id]
if missing:
    raise SystemExit(f"Missing promotion rules: {missing}")

bad = []
for rid in PROMOTE_IDS:
    rule = rules_by_id[rid]
    trigger_key = get_rule_trigger_key(rule)
    req_keys = get_requirement_keys(rule)
    trigger_default = get_field_default(fields_by_key.get(trigger_key))

    if trigger_key not in fields_by_key:
        bad.append((rid, "trigger missing from catalog", trigger_key, trigger_default))

    missing_reqs = [key for key in req_keys if key not in fields_by_key]
    if missing_reqs:
        bad.append((rid, f"requirement missing from catalog: {missing_reqs}", trigger_key, trigger_default))

    if not req_keys:
        bad.append((rid, "no structured requirements", trigger_key, trigger_default))

    if not is_default_off(trigger_default):
        bad.append((rid, "trigger default is not off", trigger_key, trigger_default))

if bad:
    print("Refusing to promote unsafe batch 4 rules:")
    for item in bad:
        print(item)
    raise SystemExit(1)

promoted = []
for rid in PROMOTE_IDS:
    rule = rules_by_id[rid]
    before_status = rule.get("validationStatus", "")

    rule["validationStatus"] = "valid"
    rule["validationSource"] = GUIDE
    rule["validationUrl"] = GUIDE_URL

    versions = list(rule.get("validatedVersions") or [])
    for version in ["current-users-guide", BATCH]:
        if version not in versions:
            versions.append(version)
    rule["validatedVersions"] = versions

    notes = rule.get("validationNotes", "")
    batch_note = (
        "Promoted in batch 4 after safe default-off trigger review. "
        "The trigger default is off/zero/false, all structured trigger and requirement fields exist "
        "in the runtime catalog, and the rule remains conservative for browser enforcement."
    )
    rule["validationNotes"] = (notes + " " + batch_note).strip()
    rule["validationBatch"] = BATCH

    promoted.append({
        "id": rid,
        "beforeStatus": before_status,
        "afterStatus": rule["validationStatus"],
        "strength": rule.get("strength", ""),
        "trigger": get_rule_trigger_key(rule),
        "triggerMode": (rule.get("trigger") or {}).get("mode", ""),
        "requirements": ", ".join(get_requirement_keys(rule)),
        "requirementsRaw": rule.get("requirementsRaw", ""),
    })

metadata = data.setdefault("metadata", {})
metadata["ruleCount"] = len(rules)
metadata["validRuleCount"] = sum(1 for r in rules if r.get("validationStatus") in {"valid", "validated"})
metadata["lastPromotionBatch"] = BATCH

RULE_PATH.write_text(json.dumps(data, indent=2) + "\n")

with OUT_CSV.open("w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=[
        "id", "beforeStatus", "afterStatus", "strength",
        "trigger", "triggerMode", "requirements", "requirementsRaw",
    ])
    writer.writeheader()
    writer.writerows(promoted)

lines = []
lines.append("# Promoted compatibility rules, batch 4 safe default-off")
lines.append("")
lines.append("Promoted only rules with default-off triggers and structured runtime-catalog requirements.")
lines.append("")
lines.append("## Promoted rules")
lines.append("")
for row in promoted:
    lines.append(f"### {row['id']}")
    lines.append("")
    lines.append(f"- Status: `{row['beforeStatus']}` → `{row['afterStatus']}`")
    lines.append(f"- Strength: `{row['strength']}`")
    lines.append(f"- Trigger: `{row['trigger']}` mode `{row['triggerMode']}`")
    lines.append(f"- Requirements: `{row['requirements']}`")
    if row["requirementsRaw"]:
        lines.append(f"- Requirements raw: {row['requirementsRaw']}")
    lines.append("")

lines.append("## Held for later")
lines.append("")
for rid in HOLD_IDS:
    lines.append(f"- `{rid}`")

OUT_MD.write_text("\n".join(lines) + "\n")

print(f"Promoted {len(promoted)} safe batch 4 rules")
for row in promoted:
    print(f"{row['beforeStatus']:10} -> {row['afterStatus']:5} {row['id']}")

print(OUT_CSV)
print(OUT_MD)

print("ruleCount:", len(rules))
print("statuses:", Counter(r.get("validationStatus", "") for r in rules))
print("strengths:", Counter(r.get("strength", "") for r in rules))
