#!/usr/bin/env python3
import json
import shlex
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(".")
SOURCE_REGISTRY_DIR = ROOT / "data/raw/wrf/4.8.1-dev/Registry"
BASELINE_REGISTRY_JSON = ROOT / "data/raw/namelist.input.registry.wrf_compat.baseline.json"

OUT_OVERLAY = ROOT / "data/raw/namelist.input.registry.wrf_compat.overlay.json"
OUT_AUDIT_JSON = ROOT / "data/reports/wrf_compat_registry_overlay_audit.json"
OUT_AUDIT_TXT = ROOT / "data/reports/wrf_compat_release_note_target_audit.txt"

VERSION_LABEL = "4.8.1-dev"
SOURCE_BRANCH = "release-v4.8.1"

TARGETS = [
    "dyn_lightning_option",
    "tempo_aerosolaware",
    "tempo_hailaware",
    "shinhong_scu_mixing",
    "shinhong_nonlocal_flux",
    "shinhong_ke_dissipation",
    "bl_mynn_mixaerosols",
    "bl_mynn_mixnumcon",
    "bl_mynn_mixscalars",
    "kim_tofd",
    "gwd_dx_factor",
    "gwd_if_nonhyd",
    "windfarm_induction",
]


def parse_default(value, typ):
    text = str(value).strip().rstrip(",")
    low = text.lower()

    if low in {".true.", "true", "t"}:
        return True
    if low in {".false.", "false", "f"}:
        return False
    if low in {"none", "null"}:
        return None

    if typ == "integer":
        try:
            return int(float(text))
        except Exception:
            return text

    if typ == "real":
        try:
            return float(text)
        except Exception:
            return text

    if typ == "logical":
        if low in {".true.", "true", "t"}:
            return True
        if low in {".false.", "false", "f"}:
            return False
        return text

    if typ in {"character", "string"}:
        return text.strip("'\"")

    return text


def normalize_type(reg_type):
    reg_type = reg_type.lower().strip()
    if reg_type in {"integer", "real", "logical", "character"}:
        return reg_type
    return reg_type


def parse_rconfig_line(line, source_file):
    stripped = line.strip()
    if not stripped or stripped.startswith("#"):
        return None
    if not stripped.startswith("rconfig"):
        return None

    try:
        parts = shlex.split(stripped, comments=False, posix=True)
    except Exception:
        return None

    if len(parts) < 7:
        return None

    if parts[0] != "rconfig":
        return None

    typ = normalize_type(parts[1])
    name = parts[2]
    namelist_token = parts[3]

    if not namelist_token.startswith("namelist"):
        return None

    pieces = namelist_token.split(",")
    if len(pieces) < 2:
        return None

    group = pieces[1].strip()
    entries = parts[4]
    default_raw = parts[5]
    io = parts[6]

    comments = []
    for item in parts[7:]:
        item = item.strip()
        if item and item not in comments:
            comments.append(item)

    default_value = parse_default(default_raw, typ)

    rel_source = source_file.relative_to(SOURCE_REGISTRY_DIR).as_posix()

    return group, name, {
        "type": typ,
        "defaultValue": default_value,
        "entries": entries,
        "comments": comments if comments else None,
        "io": io,
        "sources": [f"WRF/{VERSION_LABEL}/Registry/{rel_source}"],
        "versionSupport": {
            "firstSeen": VERSION_LABEL,
            "presentIn": [VERSION_LABEL],
            "sourceBranch": SOURCE_BRANCH,
            "status": "new_or_updated"
        },
        "raw": stripped
    }


def parse_registry_tree():
    parsed = {}
    files_seen = []
    rconfig_count = 0

    for path in sorted(SOURCE_REGISTRY_DIR.iterdir()):
        if not path.is_file():
            continue
        files_seen.append(path.name)

        with path.open("r", encoding="utf-8", errors="replace") as f:
            for line in f:
                row = parse_rconfig_line(line, path)
                if row is None:
                    continue
                group, name, entry = row
                parsed.setdefault(group, {})
                if name in parsed[group]:
                    prior_sources = parsed[group][name].setdefault("sources", [])
                    for src in entry["sources"]:
                        if src not in prior_sources:
                            prior_sources.append(src)
                    parsed[group][name].setdefault("duplicateRaw", []).append(entry["raw"])
                else:
                    parsed[group][name] = entry
                    rconfig_count += 1

    return parsed, files_seen, rconfig_count


def flatten_keys(grouped):
    keys = {}
    for group, vars_dict in grouped.items():
        if not isinstance(vars_dict, dict):
            continue
        for name, entry in vars_dict.items():
            if isinstance(entry, dict):
                keys[f"{group}.{name}"] = (group, name, entry)
    return keys


def comparable(entry):
    return {
        "type": entry.get("type"),
        "defaultValue": entry.get("defaultValue"),
        "entries": entry.get("entries"),
        "io": entry.get("io"),
        "comments": entry.get("comments"),
    }


def main():
    if not SOURCE_REGISTRY_DIR.exists():
        raise SystemExit(f"Missing source registry folder: {SOURCE_REGISTRY_DIR}")

    if not BASELINE_REGISTRY_JSON.exists():
        raise SystemExit(f"Missing baseline registry JSON: {BASELINE_REGISTRY_JSON}")

    baseline = json.loads(BASELINE_REGISTRY_JSON.read_text(encoding="utf-8"))
    overlay_registry, files_seen, rconfig_count = parse_registry_tree()

    baseline_keys = flatten_keys(baseline)
    overlay_keys = flatten_keys(overlay_registry)

    new_keys = sorted(k for k in overlay_keys if k not in baseline_keys)
    shared_keys = sorted(k for k in overlay_keys if k in baseline_keys)
    baseline_only_keys = sorted(k for k in baseline_keys if k not in overlay_keys)

    changed = []
    for key in shared_keys:
        _, _, old_entry = baseline_keys[key]
        _, _, new_entry = overlay_keys[key]
        if comparable(old_entry) != comparable(new_entry):
            changed.append({
                "key": key,
                "old": comparable(old_entry),
                "new": comparable(new_entry),
                "newRaw": new_entry.get("raw")
            })

    target_audit = []
    for target in TARGETS:
        overlay_hits = []
        baseline_hits = []

        for key, (_, name, entry) in overlay_keys.items():
            if name == target:
                overlay_hits.append({
                    "key": key,
                    "defaultValue": entry.get("defaultValue"),
                    "type": entry.get("type"),
                    "entries": entry.get("entries"),
                    "sources": entry.get("sources"),
                    "raw": entry.get("raw"),
                })

        for key, (_, name, entry) in baseline_keys.items():
            if name == target:
                baseline_hits.append({
                    "key": key,
                    "defaultValue": entry.get("defaultValue"),
                    "type": entry.get("type"),
                    "entries": entry.get("entries"),
                    "sources": entry.get("sources"),
                })

        target_audit.append({
            "name": target,
            "inBaseline471": bool(baseline_hits),
            "inOverlay48x": bool(overlay_hits),
            "baselineHits": baseline_hits,
            "overlayHits": overlay_hits,
        })

    metadata = {
        "title": "WRF 4.8.1-dev namelist.input Registry overlay",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": {
            "versionLabel": VERSION_LABEL,
            "sourceBranch": SOURCE_BRANCH,
            "registryDir": str(SOURCE_REGISTRY_DIR),
        },
        "baseline": {
            "path": str(BASELINE_REGISTRY_JSON),
            "intendedBaseline": "WRF 4.7.1 stable catalog",
        },
        "counts": {
            "sourceFiles": len(files_seen),
            "parsedRconfigVariables": rconfig_count,
            "baselineVariables": len(baseline_keys),
            "overlayVariables": len(overlay_keys),
            "newIn48x": len(new_keys),
            "changedShared": len(changed),
            "baselineOnlyLegacy": len(baseline_only_keys),
        }
    }

    overlay_payload = {
        "metadata": metadata,
        "registry": overlay_registry,
    }

    audit = {
        "metadata": metadata,
        "newIn48x": new_keys,
        "changedShared": changed,
        "baselineOnlyLegacy": baseline_only_keys,
        "releaseNoteTargetAudit": target_audit,
    }

    OUT_OVERLAY.write_text(json.dumps(overlay_payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    OUT_AUDIT_JSON.write_text(json.dumps(audit, indent=2, sort_keys=True) + "\n", encoding="utf-8")

    lines = []
    lines.append("WRF 4.8.1-dev Registry overlay audit")
    lines.append("=" * 48)
    for key, value in metadata["counts"].items():
        lines.append(f"{key}: {value}")

    lines.append("")
    lines.append("Release-note target audit")
    lines.append("=" * 48)

    for row in target_audit:
        status = []
        status.append("baseline=yes" if row["inBaseline471"] else "baseline=no")
        status.append("overlay=yes" if row["inOverlay48x"] else "overlay=no")
        lines.append(f"{row['name']}: {', '.join(status)}")
        for hit in row["overlayHits"]:
            lines.append(f"  overlay {hit['key']} default={hit['defaultValue']} type={hit['type']} entries={hit['entries']}")
            lines.append(f"    raw: {hit['raw']}")

    lines.append("")
    lines.append("New 4.8.x keys")
    lines.append("=" * 48)
    for key in new_keys[:300]:
        lines.append(key)
    if len(new_keys) > 300:
        lines.append(f"... truncated, see JSON audit for all {len(new_keys)} new keys")

    OUT_AUDIT_TXT.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Wrote {OUT_OVERLAY}")
    print(f"Wrote {OUT_AUDIT_JSON}")
    print(f"Wrote {OUT_AUDIT_TXT}")
    print("")
    print("Counts:")
    for key, value in metadata["counts"].items():
        print(f"  {key}: {value}")


if __name__ == "__main__":
    main()
