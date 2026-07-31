#!/usr/bin/env python3
import csv
import json
from pathlib import Path

TODAY = "2026-07-31"
BATCH = "2026-07-31_user_edited_tuning"

RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
CATALOG_PATH = Path("data/runtime/namelist.input.catalog.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"

RULE_DEFS = [
    ("SWRAD-SCAT-USER", "Radiation", "physics", "swrad_scat",
     "physics", "ra_sw_physics", ["1"],
     "swrad_scat only works with ra_sw_physics=1"),

    ("ISFFLX-USER", "Surface Flux", "physics", "isfflx",
     "physics", "sf_sfclay_physics", ["1", "5", "7", "11"],
     "isfflx only works with sf_sfclay_physics=1,5,7,11"),

    ("KFETA-TRIGGER-USER", "Cumulus Option", "physics", "kfeta_trigger",
     "physics", "cu_physics", ["1"],
     "kfeta_trigger only works with cu_physics=1"),

    ("CONVTRANS-AVGLEN-M-USER", "Cumulus Diagnostics", "physics", "convtrans_avglen_m",
     "physics", "cu_physics", ["3", "5", "93"],
     "convtrans_avglen_m only works with cu_physics=3,5,93"),

    ("MAXIENS-USER", "Cumulus Ensemble Controls", "physics", "maxiens",
     "physics", "cu_physics", ["3", "5", "93"],
     "maxiens only works with cu_physics=3,5,93"),

    ("MAXENS-USER", "Cumulus Ensemble Controls", "physics", "maxens",
     "physics", "cu_physics", ["3", "5", "93"],
     "maxens only works with cu_physics=3,5,93"),

    ("MAXENS2-USER", "Cumulus Ensemble Controls", "physics", "maxens2",
     "physics", "cu_physics", ["3", "5", "93"],
     "maxens2 only works with cu_physics=3,5,93"),

    ("MAXENS3-USER", "Cumulus Ensemble Controls", "physics", "maxens3",
     "physics", "cu_physics", ["3", "5", "93"],
     "maxens3 only works with cu_physics=3,5,93"),

    ("ENSDIM-USER", "Cumulus Ensemble Controls", "physics", "ensdim",
     "physics", "cu_physics", ["3", "5", "93"],
     "ensdim only works with cu_physics=3,5,93"),
]


def catalog_keys():
    catalog = json.loads(CATALOG_PATH.read_text())
    keys = set()
    for group, fields in catalog["groups"].items():
        for field in fields:
            keys.add(field.get("key"))
            keys.add(f"{group}.{field.get('name')}")
    return keys


def make_rule(rule_id, category, trigger_group, trigger_var, req_group, req_var, req_values, excerpt):
    return {
        "category": category,
        "id": rule_id,
        "notes": None,
        "requirements": [
            {
                "checkable": True,
                "group": req_group,
                "mode": "one_of",
                "raw": f"{req_var} must be one of {', '.join(req_values)}",
                "values": req_values,
                "variable": req_var,
            }
        ],
        "requirementsRaw": f"{req_var} must be one of {', '.join(req_values)}",
        "sourceExcerpt": excerpt,
        "strength": "Soft",
        "trigger": {
            "mode": "user_edited_non_zero",
            "values": [],
        },
        "triggerGroup": trigger_group,
        "triggerVariable": trigger_var,
        "validationNotes": (
            "Soft warning promoted with user_edited_non_zero so this rule only fires after the user edits "
            "the tuning/control field. This avoids default-page noise from non-zero catalog defaults."
        ),
        "validationSource": GUIDE,
        "validationStatus": "valid",
        "validationUrl": GUIDE_URL,
        "validatedDate": TODAY,
        "validatedVersions": ["current-users-guide", "user-edited-trigger-mode"],
    }


def validate_rules(rules):
    keys = catalog_keys()
    missing = []
    for rule in rules:
        trigger = f"{rule['triggerGroup']}.{rule['triggerVariable']}"
        if trigger not in keys:
            missing.append((rule["id"], "trigger", trigger))
        for req in rule["requirements"]:
            if not req.get("checkable", True):
                continue
            key = f"{req['group']}.{req['variable']}"
            if key not in keys:
                missing.append((rule["id"], "requirement", key))
    if missing:
        print("Missing fields, aborting:")
        for item in missing:
            print(item)
        raise SystemExit(1)


def rebuild_index(rules, old_index):
    index = {}

    def ensure(var, group):
        old = old_index.get(var, {}) if isinstance(old_index, dict) else {}
        entry = index.setdefault(var, {
            "group": old.get("group") or group,
            "requirementRules": [],
            "summary": old.get("summary"),
            "triggerRules": [],
        })
        if entry["group"] is None and group is not None:
            entry["group"] = group
        return entry

    for i, rule in enumerate(rules):
        trigger_var = rule.get("triggerVariable")
        if trigger_var:
            ensure(trigger_var, rule.get("triggerGroup"))["triggerRules"].append(i)
        for req in rule.get("requirements", []):
            if not req.get("checkable", True):
                continue
            var = req.get("variable")
            if var:
                ensure(var, req.get("group"))["requirementRules"].append(i)
    return index


new_rules = [make_rule(*d) for d in RULE_DEFS]
validate_rules(new_rules)

data = json.loads(RULE_PATH.read_text())
rules = data["rules"]
by_id = {rule["id"]: i for i, rule in enumerate(rules)}

actions = []
for rule in new_rules:
    if rule["id"] in by_id:
        rules[by_id[rule["id"]]] = rule
        actions.append(("updated", rule))
    else:
        rules.append(rule)
        actions.append(("added", rule))

data["rules"] = rules
data["variableIndex"] = rebuild_index(rules, data.get("variableIndex", {}))
data["metadata"]["ruleCount"] = len(rules)
data["metadata"]["variableCount"] = len(data["variableIndex"])
data["metadata"]["lastReviewedDate"] = TODAY
data["metadata"]["notes"] = "Added user-edited soft compatibility tuning rules."

RULE_PATH.write_text(json.dumps(data, indent=2) + "\n")

csv_path = REPORT_DIR / f"promoted_compatibility_rules_{BATCH}.csv"
md_path = REPORT_DIR / f"promoted_compatibility_rules_{BATCH}.md"

with csv_path.open("w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=[
        "action", "id", "category", "strength", "trigger", "requirements", "sourceExcerpt"
    ])
    writer.writeheader()
    for action, rule in actions:
        writer.writerow({
            "action": action,
            "id": rule["id"],
            "category": rule["category"],
            "strength": rule["strength"],
            "trigger": f"{rule['triggerGroup']}.{rule['triggerVariable']} {rule['trigger']['mode']}",
            "requirements": rule["requirementsRaw"],
            "sourceExcerpt": rule["sourceExcerpt"],
        })

with md_path.open("w") as f:
    f.write(f"# Promoted user-edited tuning compatibility rules, {BATCH}\n\n")
    f.write("These soft rules use `user_edited_non_zero` to avoid warning on non-zero catalog defaults.\n\n")
    for action, rule in actions:
        f.write(f"## {rule['id']} ({action})\n\n")
        f.write(f"- Category: {rule['category']}\n")
        f.write(f"- Strength: {rule['strength']}\n")
        f.write(f"- Trigger: `{rule['triggerGroup']}.{rule['triggerVariable']}` `user_edited_non_zero`\n")
        f.write(f"- Requirements: {rule['requirementsRaw']}\n")
        f.write(f"- Source excerpt: {rule['sourceExcerpt']}\n")
        f.write(f"- Validation notes: {rule['validationNotes']}\n\n")

print(f"Promoted {len(actions)} user-edited tuning rules")
for action, rule in actions:
    print(f"{action:7} {rule['id']}")
print(csv_path)
print(md_path)
