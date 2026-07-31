#!/usr/bin/env python3
import csv
import json
from pathlib import Path

TODAY = "2026-07-31"
BATCH = "2026-07-31_batch2"
RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
CATALOG_PATH = Path("data/runtime/namelist.input.catalog.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"

RULE_DEFS = [
    ("IFSNOW", "Land Surface", "Hard", "physics", "ifsnow", "one_of", ["1"],
     [("physics", "sf_surface_physics", "one_of", ["1"], "sf_surface_physics must be 1", True)],
     "ifsnow only works with sf_surface_physics=1"),

    ("SHALWATER-Z0", "Surface Layer", "Hard", "physics", "shalwater_z0", "one_of", ["1"],
     [("physics", "sf_sfclay_physics", "one_of", ["1"], "sf_sfclay_physics must be 1", True)],
     "shalwater_z0 only works with sf_sfclay_physics=1"),

    ("MOSAIC-LU", "Land Surface", "Hard", "physics", "mosaic_lu", "one_of", ["1"],
     [("physics", "sf_surface_physics", "one_of", ["3"], "sf_surface_physics must be 3", True)],
     "mosaic_lu only works with RUC LSM, sf_surface_physics=3"),

    ("MOSAIC-SOIL", "Land Surface", "Hard", "physics", "mosaic_soil", "one_of", ["1"],
     [("physics", "sf_surface_physics", "one_of", ["3"], "sf_surface_physics must be 3", True)],
     "mosaic_soil only works with RUC LSM, sf_surface_physics=3"),

    ("ISHALLOW", "Shallow Cumulus", "Hard", "physics", "ishallow", "one_of", ["1"],
     [("physics", "cu_physics", "one_of", ["3", "5"], "cu_physics must be 3 or 5", True)],
     "ishallow only works with cu_physics=3 or 5"),

    ("KF-EDRATES", "Cumulus Diagnostics", "Hard", "physics", "kf_edrates", "one_of", ["1"],
     [("physics", "cu_physics", "one_of", ["1", "11", "99"], "cu_physics must be 1, 11, or 99", True)],
     "kf_edrates only works with cu_physics=1,11,99"),

    ("CU-RAD-FEEDBACK", "Cumulus ↔ Radiation", "Hard", "physics", "cu_rad_feedback", "truthy", [],
     [("physics", "cu_physics", "one_of", ["1", "3", "5", "10", "11", "93", "99"], "cu_physics must be one of 1,3,5,10,11,93,99", True),
      (None, "cu_diag", "note", [], "if using cu_physics=3,5,93, cu_diag should be set to 1", False)],
     "cu_rad_feedback only works with cu_physics=1,3,5,10,11,93,99; if using cu_physics=3,5,93 must set cu_diag=1"),

    ("MIX-UPPER-BOUND", "Dynamics / Diffusion", "Soft", "dynamics", "mix_upper_bound", "non_zero", [],
     [("dynamics", "km_opt", "one_of", ["2", "3"], "km_opt must be 2 or 3", True)],
     "mix_upper_bound only works with km_opt=2,3"),

    ("TKE-DRAG-COEFFICIENT", "Dynamics / Diffusion", "Soft", "dynamics", "tke_drag_coefficient", "non_zero", [],
     [("dynamics", "diff_opt", "one_of", ["2"], "diff_opt must be 2", True)],
     "tke_drag_coefficient only works with diff_opt=2"),

    ("NOAHMP-ACC-DT", "Noah-MP", "Soft", "noah_mp", "noahmp_acc_dt", "non_zero", [],
     [("noah_mp", "noahmp_output", "one_of", ["3"], "noahmp_output must be 3", True)],
     "noahmp_acc_dt only works with noahmp_output=3"),
]


def requirement(group, variable, mode, values, raw, checkable):
    return {
        "checkable": checkable,
        "group": group,
        "mode": mode,
        "raw": raw,
        "values": values,
        "variable": variable,
    }


def make_rule(d):
    rid, category, strength, tg, tv, tm, tvals, reqs, excerpt = d
    return {
        "category": category,
        "id": rid,
        "notes": None,
        "requirements": [requirement(*r) for r in reqs],
        "requirementsRaw": " | ".join(r[4] for r in reqs),
        "sourceExcerpt": excerpt,
        "strength": strength,
        "trigger": {"mode": tm, "values": tvals},
        "triggerGroup": tg,
        "triggerVariable": tv,
        "validationNotes": "Promoted from next-batch Users Guide compatibility review.",
        "validationSource": GUIDE,
        "validationStatus": "valid",
        "validationUrl": GUIDE_URL,
        "validatedDate": TODAY,
        "validatedVersions": ["current-users-guide"],
    }


def catalog_keys():
    catalog = json.loads(CATALOG_PATH.read_text())
    keys = set()
    for group, fields in catalog["groups"].items():
        for field in fields:
            keys.add(field.get("key"))
            keys.add(f"{group}.{field.get('name')}")
    return keys


def validate_new_rules(rules):
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
        print("Missing fields, aborting before write:")
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
        ensure(rule["triggerVariable"], rule["triggerGroup"])["triggerRules"].append(i)
        for req in rule.get("requirements", []):
            if not req.get("checkable", True):
                continue
            ensure(req["variable"], req["group"])["requirementRules"].append(i)

    return index


new_rules = [make_rule(d) for d in RULE_DEFS]
validate_new_rules(new_rules)

data = json.loads(RULE_PATH.read_text())
rules = data["rules"]
by_id = {r["id"]: i for i, r in enumerate(rules)}

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
data["metadata"]["notes"] = "Expanded validated compatibility coverage with Users Guide batch 2 rules."

RULE_PATH.write_text(json.dumps(data, indent=2) + "\n")

csv_path = REPORT_DIR / f"promoted_compatibility_rules_{BATCH}.csv"
md_path = REPORT_DIR / f"promoted_compatibility_rules_{BATCH}.md"

with csv_path.open("w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["action", "id", "category", "strength", "trigger", "requirements", "sourceExcerpt"])
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
    for action, rule in actions:
        f.write(f"## {rule['id']} ({action})\n\n")
        f.write(f"- Category: {rule['category']}\n")
        f.write(f"- Strength: {rule['strength']}\n")
        f.write(f"- Trigger: `{rule['triggerGroup']}.{rule['triggerVariable']}` `{rule['trigger']['mode']}`\n")
        f.write(f"- Requirements: {rule['requirementsRaw']}\n")
        f.write(f"- Source excerpt: {rule['sourceExcerpt']}\n\n")

print(f"Promoted {len(actions)} rules")
for action, rule in actions:
    print(f"{action:7} {rule['id']}")
print(csv_path)
print(md_path)
