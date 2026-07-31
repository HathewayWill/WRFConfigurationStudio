#!/usr/bin/env python3
import copy
import json
import re
import shutil
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(".")

MERGED = ROOT / "data/raw/namelist.input.registry.wrf_compat.canonical.json"

RAW_REGISTRY = ROOT / "data/raw/namelist.input.registry.json"
RUNTIME_INPUT_CATALOG = ROOT / "data/runtime/namelist.input.catalog.json"
RUNTIME_REGISTRY_MERGED = ROOT / "data/runtime/namelist.registry.merged.v3.json"
RUNTIME_GROUP_INDEX = ROOT / "data/runtime/namelist.registry.group_index.v3.json"
JS_BUNDLE = ROOT / "src/namelist/namelist-input-data.js"

REPORT = ROOT / "data/reports/wrf_compat_live_apply_report.txt"

TARGETS = [
    "physics.dyn_lightning_option",
    "physics.tempo_aerosolaware",
    "physics.tempo_hailaware",
    "physics.shinhong_scu_mixing",
    "physics.shinhong_nonlocal_flux",
    "physics.shinhong_ke_dissipation",
    "physics.bl_mynn_mixaerosols",
    "physics.bl_mynn_mixnumcon",
    "physics.bl_mynn_mixscalars",
    "physics.kim_tofd",
    "dynamics.gwd_dx_factor",
    "dynamics.gwd_if_nonhyd",
    "physics.windfarm_induction",
    "physics.sf_mynn_sfcflux_land",
    "physics.sf_mynn_sfcflux_water",
]

LIVE_FILES = [
    RAW_REGISTRY,
    RUNTIME_INPUT_CATALOG,
    RUNTIME_REGISTRY_MERGED,
    RUNTIME_GROUP_INDEX,
    JS_BUNDLE,
]


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path, data):
    path.write_text(json.dumps(data, indent=2, sort_keys=True, ensure_ascii=False) + "\n", encoding="utf-8")


def compact_json(data):
    return json.dumps(data, separators=(",", ":"), ensure_ascii=False)


def key_for(group, name):
    return f"{group}.{name}"


def flatten_groups(groups):
    out = {}
    for group, values in groups.items():
        if isinstance(values, dict):
            for name, entry in values.items():
                if isinstance(entry, dict):
                    out[key_for(group, name)] = entry
        elif isinstance(values, list):
            for entry in values:
                if not isinstance(entry, dict):
                    continue
                name = entry.get("name")
                if name:
                    out[key_for(group, name)] = entry
    return out


def description_from_entry(entry):
    comments = entry.get("comments")
    if isinstance(comments, list):
        clean = [str(x).strip() for x in comments if str(x).strip()]
        if clean:
            return " | ".join(clean)
    return None


def build_runtime_entry(existing, merged_entry, group, name):
    out = copy.deepcopy(existing) if isinstance(existing, dict) else {}

    out["name"] = name
    out["group"] = group
    out["key"] = key_for(group, name)

    for field in [
        "type",
        "defaultValue",
        "entries",
        "comments",
        "io",
        "sources",
        "errors",
        "duplicateRaw",
        "raw",
        "versionSupport",
        "originalKeys",
    ]:
        if field in merged_entry:
            out[field] = copy.deepcopy(merged_entry[field])

    desc = description_from_entry(merged_entry)
    if desc and not out.get("description"):
        out["description"] = desc

    if not out.get("uiStatus"):
        out["uiStatus"] = "generated_registry"

    return out


def index_existing_groups(groups):
    idx = {}
    for group, values in groups.items():
        if isinstance(values, dict):
            for name, entry in values.items():
                idx[f"{str(group).lower()}.{str(name).lower()}"] = entry
        elif isinstance(values, list):
            for entry in values:
                if not isinstance(entry, dict):
                    continue
                name = entry.get("name")
                if name:
                    idx[f"{str(group).lower()}.{str(name).lower()}"] = entry
    return idx


def rebuild_groups_from_merged(existing_groups, merged_groups):
    existing_index = index_existing_groups(existing_groups)
    out = {}

    for group, values in sorted(merged_groups.items()):
        out[group] = {}
        for name, merged_entry in sorted(values.items()):
            existing = existing_index.get(key_for(group, name))
            out[group][name] = build_runtime_entry(existing, merged_entry, group, name)

    return out


def rebuild_group_arrays_from_merged(existing_groups, merged_groups):
    existing_index = index_existing_groups(existing_groups)
    out = {}

    for group, values in sorted(merged_groups.items()):
        rows = []
        for name, merged_entry in sorted(values.items()):
            existing = existing_index.get(key_for(group, name))
            rows.append(build_runtime_entry(existing, merged_entry, group, name))
        out[group] = rows

    return out


def parse_js_payload(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^\s*window\.__NamelistInputData\s*=\s*(.*?);\s*$", text, flags=re.S)
    if not m:
        raise RuntimeError(f"Could not parse JS payload: {path}")
    return json.loads(m.group(1))


def write_js_payload(path, payload):
    path.write_text(
        "window.__NamelistInputData = " + compact_json(payload) + ";\n",
        encoding="utf-8",
    )


def audit_targets(groups):
    flat = flatten_groups(groups)
    rows = []
    for target in TARGETS:
        entry = flat.get(target)
        rows.append({
            "target": target,
            "found": entry is not None,
            "defaultValue": None if entry is None else entry.get("defaultValue"),
            "type": None if entry is None else entry.get("type"),
            "status": None if entry is None else (entry.get("versionSupport") or {}).get("status"),
            "presentIn": None if entry is None else (entry.get("versionSupport") or {}).get("presentIn"),
        })
    return rows


def main():
    timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    backup_dir = ROOT / "data/reports/backups" / f"before_wrf_471_48x_apply_{timestamp}"
    backup_dir.mkdir(parents=True, exist_ok=True)

    for path in LIVE_FILES:
        if path.exists():
            dest = backup_dir / path.as_posix()
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, dest)

    merged_payload = load_json(MERGED)
    merged_groups = merged_payload["_groups"]
    merged_meta = merged_payload["_metadata"]

    # 1. Raw registry keeps the existing schema: group -> variable -> metadata.
    write_json(RAW_REGISTRY, merged_groups)

    # 2. Runtime input catalog keeps its envelope but receives merged groups.
    runtime_catalog = load_json(RUNTIME_INPUT_CATALOG)
    runtime_catalog["groups"] = rebuild_group_arrays_from_merged(
        runtime_catalog.get("groups", {}),
        merged_groups,
    )
    runtime_catalog.setdefault("metadata", {})
    runtime_catalog["metadata"]["wrfCompatibilityMerge"] = {
        "generated": datetime.now(timezone.utc).isoformat(),
        "baseline": "4.7.1",
        "overlay": "4.8.1-dev",
        "mergedVariablesCanonical": merged_meta["counts"]["mergedVariablesCanonical"],
        "new48xVariablesCanonical": merged_meta["counts"]["new48xVariablesCanonical"],
        "legacy471OnlyVariablesCanonical": merged_meta["counts"]["legacy471OnlyVariablesCanonical"],
        "policy": "Merged 4.7.1 stable options with 4.8.x options. Older 4.7.1-only options are preserved as legacy-compatible.",
    }
    write_json(RUNTIME_INPUT_CATALOG, runtime_catalog)

    # 3. Runtime registry merged catalog keeps packages, dimspecs, and metadata, but updates groups.
    registry_merged = load_json(RUNTIME_REGISTRY_MERGED)
    registry_merged["groups"] = rebuild_groups_from_merged(
        registry_merged.get("groups", {}),
        merged_groups,
    )
    registry_merged.setdefault("meta", {})
    registry_merged["meta"]["generated_utc"] = datetime.now(timezone.utc).isoformat()
    registry_merged["meta"]["name"] = "WRF 4.7.1 + 4.8.x merged registry catalog"
    registry_merged["meta"]["unique_variable_count"] = merged_meta["counts"]["mergedVariablesCanonical"]
    registry_merged["meta"]["group_count"] = len(merged_groups)
    registry_merged.setdefault("metadata", {})
    registry_merged["metadata"]["wrfCompatibilityMerge"] = runtime_catalog["metadata"]["wrfCompatibilityMerge"]
    write_json(RUNTIME_REGISTRY_MERGED, registry_merged)

    # 4. Group index counts.
    group_index = load_json(RUNTIME_GROUP_INDEX)
    group_index["groups"] = [
        {"group": group, "count": len(values)}
        for group, values in sorted(merged_groups.items())
    ]
    group_index.setdefault("metadata", {})
    group_index["metadata"]["wrfCompatibilityMerge"] = runtime_catalog["metadata"]["wrfCompatibilityMerge"]
    write_json(RUNTIME_GROUP_INDEX, group_index)

    # 5. Browser JS bundle.
    js_payload = parse_js_payload(JS_BUNDLE)
    js_payload["registry"] = merged_groups
    js_payload["wrfCompatibilityMerge"] = runtime_catalog["metadata"]["wrfCompatibilityMerge"]
    write_js_payload(JS_BUNDLE, js_payload)

    # 6. Report.
    raw_targets = audit_targets(load_json(RAW_REGISTRY))
    runtime_targets = audit_targets(load_json(RUNTIME_INPUT_CATALOG)["groups"])
    js_targets = audit_targets(parse_js_payload(JS_BUNDLE)["registry"])

    lines = []
    lines.append("WRF 4.7.1 + 4.8.x live catalog apply report")
    lines.append("=" * 64)
    lines.append(f"generated: {datetime.now(timezone.utc).isoformat()}")
    lines.append(f"backup_dir: {backup_dir}")
    lines.append("")
    lines.append("Counts")
    lines.append("=" * 64)
    for k, v in merged_meta["counts"].items():
        lines.append(f"{k}: {v}")

    lines.append("")
    lines.append("Target audit: raw registry")
    lines.append("=" * 64)
    for row in raw_targets:
        lines.append(f"{row['target']}: {'FOUND' if row['found'] else 'MISSING'} default={row['defaultValue']} type={row['type']} status={row['status']} presentIn={row['presentIn']}")

    lines.append("")
    lines.append("Target audit: runtime input catalog")
    lines.append("=" * 64)
    for row in runtime_targets:
        lines.append(f"{row['target']}: {'FOUND' if row['found'] else 'MISSING'} default={row['defaultValue']} type={row['type']} status={row['status']} presentIn={row['presentIn']}")

    lines.append("")
    lines.append("Target audit: JS bundle registry")
    lines.append("=" * 64)
    for row in js_targets:
        lines.append(f"{row['target']}: {'FOUND' if row['found'] else 'MISSING'} default={row['defaultValue']} type={row['type']} status={row['status']} presentIn={row['presentIn']}")

    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(REPORT.read_text(encoding="utf-8"))


if __name__ == "__main__":
    main()
