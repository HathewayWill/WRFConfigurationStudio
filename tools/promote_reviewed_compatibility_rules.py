#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
from pathlib import Path

RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

TODAY = "2026-07-31"
GUIDE = "WRF Users Guide Namelist Variables"
GUIDE_URL = "https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/namelist_variables.html"
REGISTRY = "WRF Registry Registry.EM_COMMON"
REGISTRY_URL = "data/raw/wrf/4.8.1-dev/Registry/Registry.EM_COMMON"


def req(group, variable, mode, values=None, raw=None, checkable=True):
    return {
        "checkable": checkable,
        "group": group,
        "mode": mode,
        "raw": raw or f"{variable} {mode} {', '.join(values or [])}",
        "values": list(values or []),
        "variable": variable,
    }


def note(variable, raw):
    return {
        "checkable": False,
        "group": None,
        "mode": "note",
        "raw": raw,
        "values": [],
        "variable": variable,
    }


def make_rule(rule_id, category, strength, trigger_group, trigger_variable, trigger_mode,
              trigger_values, requirements, source_excerpt, validation_source,
              validation_url, validation_notes, versions, notes=None):
    return {
        "category": category,
        "id": rule_id,
        "notes": notes,
        "requirements": requirements,
        "requirementsRaw": " | ".join(r["raw"] for r in requirements),
        "sourceExcerpt": source_excerpt,
        "strength": strength,
        "trigger": {"mode": trigger_mode, "values": list(trigger_values or [])},
        "triggerGroup": trigger_group,
        "triggerVariable": trigger_variable,
        "validationNotes": validation_notes,
        "validationSource": validation_source,
        "validationStatus": "valid",
        "validationUrl": validation_url,
        "validatedDate": TODAY,
        "validatedVersions": versions,
    }


RULES = [
    make_rule(
        "FRAC-SEAICE", "Sea Ice", "Hard", "physics", "fractional_seaice", "one_of", ["1"],
        [
            req("physics", "sf_sfclay_physics", "one_of", ["1", "2", "3", "4", "5", "7", "91"],
                "sf_sfclay_physics must be one of 1, 2, 3, 4, 5, 7, 91"),
            req("physics", "seaice_threshold", "one_of", ["0"], "seaice_threshold must be 0"),
        ],
        "fractional_seaice=1 only works with sf_sfclay_physics=1,2,3,4,5,7,91 and must also set seaice_threshold=0",
        GUIDE, GUIDE_URL, "Promoted from Users Guide candidate mining.", ["current-users-guide"],
    ),
    make_rule(
        "SEAICE-THRESH", "Sea Ice", "Hard", "physics", "seaice_threshold", "active", [],
        [req("physics", "sf_surface_physics", "one_of", ["1", "2", "3", "4", "8"],
             "sf_surface_physics must be one of 1, 2, 3, 4, 8")],
        "seaice_threshold only works with sf_surface_physics=1,2,3,4,8",
        GUIDE, GUIDE_URL, "Promoted from Users Guide candidate mining.", ["current-users-guide"],
    ),
    make_rule(
        "TOPO-WIND", "Topographic Wind", "Workflow", "physics", "topo_wind", "one_of", ["1", "2"],
        [
            req("physics", "bl_pbl_physics", "one_of", ["1"], "bl_pbl_physics must be 1"),
            note("geogrid_extra", "requires extra topographic wind input from geogrid"),
        ],
        "topo_wind requires extra input from geogrid and only works with bl_pbl_physics=1",
        GUIDE, GUIDE_URL, "PBL dependency is checkable; geogrid input remains a workflow note.", ["current-users-guide"],
    ),
    make_rule(
        "RADARREF-MP", "Radar Reflectivity", "Hard", "physics", "do_radar_ref", "one_of", ["1"],
        [req("physics", "mp_physics", "one_of", ["2", "4", "6", "7", "8", "10", "14", "16", "24", "26"],
             "mp_physics must be one of 2, 4, 6, 7, 8, 10, 14, 16, 24, 26")],
        "do_radar_ref=1 only works for mp_physics=2,4,6,7,8,10,14,16,24,26",
        GUIDE, GUIDE_URL, "Promoted and corrected to current Users Guide list.", ["current-users-guide"],
    ),
    make_rule(
        "PROGN-MP", "Radiation ↔ MP", "Hard", "physics", "progn", "one_of", ["1"],
        [req("physics", "mp_physics", "one_of", ["10", "14", "16", "17", "18"],
             "mp_physics must be one of 10, 14, 16, 17, 18")],
        "progn=1 only works with mp_physics=10,14,16,17,18",
        GUIDE, GUIDE_URL, "New valid rule from Users Guide candidate mining.", ["current-users-guide"],
    ),
    make_rule(
        "USE-MP-RE", "Radiation ↔ MP", "Hard", "physics", "use_mp_re", "one_of", ["1"],
        [req("physics", "mp_physics", "one_of",
             ["3", "4", "6", "7", "8", "10", "14", "16", "17", "18", "19", "20", "21", "24", "26", "28", "50", "51", "52", "53", "55"],
             "mp_physics must be one of 3, 4, 6, 7, 8, 10, 14, 16, 17, 18, 19, 20, 21, 24, 26, 28, 50, 51, 52, 53, 55")],
        "use_mp_re=1 only works with mp_physics=3,4,6,7,8,10,14,16,17-21,24,26,28,50-53,55",
        GUIDE, GUIDE_URL, "Promoted and corrected to include 17-21.", ["current-users-guide"],
    ),
    make_rule(
        "ICLOUD", "Radiation", "Hard", "physics", "icloud", "one_of", ["1"],
        [
            req("physics", "ra_lw_physics", "one_of", ["1", "4"], "ra_lw_physics must be 1 or 4"),
            req("physics", "ra_sw_physics", "one_of", ["1", "4"], "ra_sw_physics must be 1 or 4"),
        ],
        "icloud=1 only works with ra_sw_physics and ra_lw_physics set to 1 or 4",
        GUIDE, GUIDE_URL, "Trigger narrowed to icloud=1 to avoid disabled-option false warnings.", ["current-users-guide"],
    ),
    make_rule(
        "SST-UPDATE", "Time Control", "Workflow", "physics", "sst_update", "one_of", ["1"],
        [
            req("time_control", "auxinput4_inname", "set", [], "auxinput4_inname must be set"),
            req("time_control", "auxinput4_interval", "set", [], "auxinput4_interval must be set"),
            note("auxinput4_end_h", "auxinput4_end_h should be set when available in the namelist catalog"),
            req("time_control", "io_form_auxinput4", "set", [], "io_form_auxinput4 must be set"),
        ],
        "sst_update=1 requires auxinput4_interval, auxinput4_end_h, io_form_auxinput4, and auxinput4_inname=wrflowinp_d<domain>",
        GUIDE, GUIDE_URL, "Promoted and expanded to include auxinput4_end_h as a workflow note because it is not currently present in the runtime catalog.", ["current-users-guide"],
    ),
    make_rule(
        "NOAHMP-INFDV", "Noah-MP", "Hard", "noah_mp", "opt_infdv", "one_of", ["1", "2", "3"],
        [req("noah_mp", "opt_run", "one_of", ["8"], "opt_run must be 8")],
        "opt_infdv only works with opt_run=8",
        REGISTRY, REGISTRY_URL, "Registry-backed in WRF 4.7.1, 4.8.0, and 4.8.1-dev.", ["4.7.1", "4.8.0", "4.8.1-dev"],
    ),
    make_rule(
        "NOAHMP-TDRN", "Noah-MP", "Workflow", "noah_mp", "opt_tdrn", "one_of", ["1", "2"],
        [
            req("noah_mp", "opt_run", "one_of", ["3"], "opt_run must be 3"),
            note("geogrid_tbl", "geogrid should use GEOGRID.TBL.ARW.noahmp"),
        ],
        "opt_tdrn is currently only tested and works with opt_run=3",
        REGISTRY, REGISTRY_URL, "Registry-backed; kept Workflow because source says currently tested and works.", ["4.7.1", "4.8.0", "4.8.1-dev"],
    ),
    make_rule(
        "AER-AOD550-VAL", "Aerosol", "Soft", "physics", "aer_aod550_val", "active", [],
        [req("physics", "aer_aod550_opt", "one_of", ["1"], "aer_aod550_opt must be 1")],
        "aer_aod550_val is valid when aer_aod550_opt=1",
        REGISTRY, REGISTRY_URL, "Registry-backed valid-when rule; soft warning because value is ignored unless fixed input is selected.", ["4.7.1", "4.8.0", "4.8.1-dev"],
    ),
    make_rule(
        "AER-ANGEXP-VAL", "Aerosol", "Soft", "physics", "aer_angexp_val", "active", [],
        [req("physics", "aer_angexp_opt", "one_of", ["1"], "aer_angexp_opt must be 1")],
        "aer_angexp_val is valid when aer_angexp_opt=1",
        REGISTRY, REGISTRY_URL, "Registry-backed valid-when rule; soft warning because value is ignored unless fixed input is selected.", ["4.7.1", "4.8.0", "4.8.1-dev"],
    ),
    make_rule(
        "AER-SSA-VAL", "Aerosol", "Soft", "physics", "aer_ssa_val", "active", [],
        [req("physics", "aer_ssa_opt", "one_of", ["1"], "aer_ssa_opt must be 1")],
        "aer_ssa_val is valid when aer_ssa_opt=1",
        REGISTRY, REGISTRY_URL, "Registry-backed valid-when rule; soft warning because value is ignored unless fixed input is selected.", ["4.7.1", "4.8.0", "4.8.1-dev"],
    ),
    make_rule(
        "AER-ASY-VAL", "Aerosol", "Soft", "physics", "aer_asy_val", "active", [],
        [req("physics", "aer_asy_opt", "one_of", ["1"], "aer_asy_opt must be 1")],
        "aer_asy_val is valid when aer_asy_opt=1",
        REGISTRY, REGISTRY_URL, "Registry-backed valid-when rule; soft warning because value is ignored unless fixed input is selected.", ["4.7.1", "4.8.0", "4.8.1-dev"],
    ),
]


def merge_rules(existing, updates):
    by_id = {r["id"]: i for i, r in enumerate(existing)}
    actions = []
    for rule in updates:
        if rule["id"] in by_id:
            existing[by_id[rule["id"]]] = rule
            actions.append(("updated", rule))
        else:
            existing.append(rule)
            actions.append(("added", rule))
    return actions


def rebuild_variable_index(rules, old_index):
    index = {}

    def ensure(var, group):
        old = old_index.get(var, {}) if isinstance(old_index, dict) else {}
        entry = index.setdefault(var, {
            "group": old.get("group") or group,
            "requirementRules": [],
            "summary": old.get("summary"),
            "triggerRules": [],
        })
        if entry.get("group") is None and group is not None:
            entry["group"] = group
        return entry

    for i, rule in enumerate(rules):
        trigger_var = rule.get("triggerVariable")
        if trigger_var:
            ensure(trigger_var, rule.get("triggerGroup"))["triggerRules"].append(i)
        for requirement in rule.get("requirements", []):
            var = requirement.get("variable")
            if var:
                ensure(var, requirement.get("group"))["requirementRules"].append(i)

    return index


def main():
    data = json.loads(RULE_PATH.read_text())
    rules = data.get("rules", [])
    actions = merge_rules(rules, RULES)

    data["rules"] = rules
    data["variableIndex"] = rebuild_variable_index(rules, data.get("variableIndex", {}))
    data.setdefault("metadata", {})
    data["metadata"]["ruleCount"] = len(rules)
    data["metadata"]["variableCount"] = len(data["variableIndex"])
    data["metadata"]["lastReviewedDate"] = TODAY
    data["metadata"]["notes"] = "Expanded validated compatibility coverage from Registry and Users Guide candidate mining."

    RULE_PATH.write_text(json.dumps(data, indent=2) + "\n")

    csv_path = REPORT_DIR / f"promoted_compatibility_rules_{TODAY}.csv"
    md_path = REPORT_DIR / f"promoted_compatibility_rules_{TODAY}.md"

    with csv_path.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "action", "id", "category", "strength", "trigger", "requirements",
            "validationSource", "validatedVersions", "sourceExcerpt"
        ])
        writer.writeheader()
        for action, rule in actions:
            writer.writerow({
                "action": action,
                "id": rule["id"],
                "category": rule["category"],
                "strength": rule["strength"],
                "trigger": f"{rule['triggerGroup']}.{rule['triggerVariable']} {rule['trigger']['mode']} {','.join(rule['trigger'].get('values', []))}",
                "requirements": rule["requirementsRaw"],
                "validationSource": rule["validationSource"],
                "validatedVersions": ",".join(rule.get("validatedVersions", [])),
                "sourceExcerpt": rule["sourceExcerpt"],
            })

    with md_path.open("w") as f:
        f.write(f"# Promoted compatibility rules, {TODAY}\n\n")
        f.write("These rules were promoted from candidate or unreviewed status after source review.\n\n")
        for action, rule in actions:
            f.write(f"## {rule['id']} ({action})\n\n")
            f.write(f"- Category: {rule['category']}\n")
            f.write(f"- Strength: {rule['strength']}\n")
            f.write(f"- Trigger: `{rule['triggerGroup']}.{rule['triggerVariable']}` `{rule['trigger']['mode']}` `{','.join(rule['trigger'].get('values', []))}`\n")
            f.write(f"- Requirements: {rule['requirementsRaw']}\n")
            f.write(f"- Validation source: {rule['validationSource']}\n")
            f.write(f"- Versions: {', '.join(rule.get('validatedVersions', []))}\n")
            f.write(f"- Source excerpt: {rule['sourceExcerpt']}\n\n")

    print(f"Promoted {len(actions)} rules")
    for action, rule in actions:
        print(f"{action:7} {rule['id']}")
    print(csv_path)
    print(md_path)


if __name__ == "__main__":
    main()
