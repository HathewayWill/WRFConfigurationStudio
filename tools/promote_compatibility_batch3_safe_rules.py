#!/usr/bin/env python3
import csv
import json
from pathlib import Path

TODAY = "2026-07-31"
BATCH = "2026-07-31_batch3_safe"

RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
CATALOG_PATH = Path("data/runtime/namelist.input.catalog.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"

RULES = [
    {
        "id": "RA-SW-ECLIPSE",
        "category": "Radiation",
        "strength": "Hard",
        "triggerGroup": "physics",
        "triggerVariable": "ra_sw_eclipse",
        "trigger": {"mode": "one_of", "values": ["1"]},
        "requirements": [
            {
                "checkable": True,
                "group": "physics",
                "mode": "one_of",
                "raw": "ra_sw_physics must be one of 1, 2, 4, 5",
                "values": ["1", "2", "4", "5"],
                "variable": "ra_sw_physics",
            }
        ],
        "sourceExcerpt": "ra_sw_eclipse only works with RRTMG, Goddard, old Goddard, and Dudhia radiation schemes. Existing catalog compatibility maps these to ra_sw_physics=1,2,4,5.",
        "validationNotes": "Promoted from existing unreviewed catalog rule and Users Guide text. Safe default-off trigger because ra_sw_eclipse default is 0.",
    },
    {
        "id": "OBS-NUDGE",
        "category": "FDDA",
        "strength": "Workflow",
        "triggerGroup": "fdda",
        "triggerVariable": "obs_nudge_opt",
        "trigger": {"mode": "one_of", "values": ["1"]},
        "requirements": [
            {
                "checkable": True,
                "group": "time_control",
                "mode": "set",
                "raw": "auxinput11_interval should be set for observational nudging",
                "values": [],
                "variable": "auxinput11_interval",
            },
            {
                "checkable": True,
                "group": "time_control",
                "mode": "set",
                "raw": "auxinput11_end_h should be set for observational nudging",
                "values": [],
                "variable": "auxinput11_end_h",
            },
        ],
        "sourceExcerpt": "obs_nudge_opt=1 turns on observational nudging and must also set auxinput11_interval and auxinput11_end_h under time_control.",
        "validationNotes": "Promoted from existing unreviewed workflow rule and Users Guide text. Both auxinput11 fields are present in the runtime catalog.",
    },
    {
        "id": "MP-ZERO-OUT-THRESH",
        "category": "Microphysics",
        "strength": "Workflow",
        "triggerGroup": "physics",
        "triggerVariable": "mp_zero_out",
        "trigger": {"mode": "one_of", "values": ["1", "2"]},
        "requirements": [
            {
                "checkable": True,
                "group": "physics",
                "mode": "set",
                "raw": "mp_zero_out_thresh should be reviewed when mp_zero_out is enabled",
                "values": [],
                "variable": "mp_zero_out_thresh",
            }
        ],
        "sourceExcerpt": "mp_zero_out_thresh is the critical threshold below which moisture arrays are set to zero when using mp_zero_out.",
        "validationNotes": "Workflow warning only. Safe default-off trigger because mp_zero_out default is 0.",
    },
]


def catalog_keys():
    catalog = json.loads(CATALOG_PATH.read_text())
    keys = set()
    for group, fields in catalog["groups"].items():
        for field in fields:
            keys.add(field.get("key"))
            keys.add(f"{group}.{field.get('name')}")
    return keys


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


validate_rules(RULES)

rules_to_write = []
for rule in RULES:
    rule = dict(rule)
    rule.update({
        "notes": None,
        "requirementsRaw": " | ".join(req["raw"] for req in rule["requirements"]),
        "validationSource": GUIDE,
        "validationStatus": "valid",
        "validationUrl": GUIDE_URL,
        "validatedDate": TODAY,
        "validatedVersions": ["current-users-guide", "catalog-compatibility-payload"],
    })
    rules_to_write.append(rule)

data = json.loads(RULE_PATH.read_text())
rules = data["rules"]
by_id = {rule["id"]: i for i, rule in enumerate(rules)}

actions = []
for rule in rules_to_write:
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
data["metadata"]["notes"] = "Added safe batch 3 default-off compatibility rules."

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
            "trigger": f"{rule['triggerGroup']}.{rule['triggerVariable']} {rule['trigger']['mode']} {','.join(rule['trigger']['values'])}",
            "requirements": rule["requirementsRaw"],
            "sourceExcerpt": rule["sourceExcerpt"],
        })

with md_path.open("w") as f:
    f.write(f"# Promoted compatibility rules, {BATCH}\n\n")
    f.write("This tiny batch promotes only default-off rules to avoid default-page noise.\n\n")
    for action, rule in actions:
        f.write(f"## {rule['id']} ({action})\n\n")
        f.write(f"- Category: {rule['category']}\n")
        f.write(f"- Strength: {rule['strength']}\n")
        f.write(f"- Trigger: `{rule['triggerGroup']}.{rule['triggerVariable']}` `{rule['trigger']['mode']}` `{','.join(rule['trigger']['values'])}`\n")
        f.write(f"- Requirements: {rule['requirementsRaw']}\n")
        f.write(f"- Source excerpt: {rule['sourceExcerpt']}\n")
        f.write(f"- Validation notes: {rule['validationNotes']}\n\n")

print(f"Promoted {len(actions)} safe batch-3 rules")
for action, rule in actions:
    print(f"{action:7} {rule['id']}")
print(csv_path)
print(md_path)
