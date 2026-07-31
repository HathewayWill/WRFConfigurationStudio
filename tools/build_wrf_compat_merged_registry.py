#!/usr/bin/env python3
import copy
import json
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(".")

BASELINE = ROOT / "data/raw/namelist.input.registry.wrf_compat.baseline.json"
OVERLAY = ROOT / "data/raw/namelist.input.registry.wrf_compat.overlay.json"

OUT_MERGED = ROOT / "data/raw/namelist.input.registry.wrf_compat.canonical.json"
OUT_AUDIT_JSON = ROOT / "data/reports/wrf_compat_merge_canonical_audit.json"
OUT_AUDIT_TXT = ROOT / "data/reports/wrf_compat_merge_canonical_audit.txt"

BASE_VERSION = "4.7.1"
NEW_VERSION = "4.8.1-dev"

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
    "sf_mynn_sfcflux_land",
    "sf_mynn_sfcflux_water",
]


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def canonical_key(group, name):
    return f"{str(group).lower()}.{str(name).lower()}"


def flatten(grouped):
    out = {}
    case_map = {}

    for group, values in grouped.items():
        if not isinstance(values, dict):
            continue

        for name, entry in values.items():
            if not isinstance(entry, dict):
                continue

            key = canonical_key(group, name)
            out[key] = (str(group).lower(), str(name).lower(), group, name, entry)
            case_map.setdefault(key, set()).add(f"{group}.{name}")

    return out, {k: sorted(v) for k, v in case_map.items()}


def comparable(entry):
    return {
        "type": entry.get("type"),
        "defaultValue": entry.get("defaultValue"),
        "entries": entry.get("entries"),
        "io": entry.get("io"),
        "comments": entry.get("comments"),
    }


def merge_sources(a, b):
    out = []
    for src_list in [a or [], b or []]:
        for src in src_list:
            if src not in out:
                out.append(src)
    return out


def canonicalize_entry(entry, group, name, original_group=None, original_name=None):
    e = copy.deepcopy(entry)
    e["name"] = name
    e["group"] = group

    originals = []
    if original_group is not None and original_name is not None:
        originals.append(f"{original_group}.{original_name}")

    old_originals = e.get("originalKeys")
    if isinstance(old_originals, list):
        originals.extend(old_originals)

    if originals:
        clean = []
        for item in originals:
            if item not in clean:
                clean.append(item)
        e["originalKeys"] = clean

    return e


def main():
    baseline = load_json(BASELINE)
    overlay_payload = load_json(OVERLAY)
    overlay = overlay_payload["registry"]

    baseline_keys, baseline_case_map = flatten(baseline)
    overlay_keys, overlay_case_map = flatten(overlay)

    new_keys = sorted(k for k in overlay_keys if k not in baseline_keys)
    shared_keys = sorted(k for k in overlay_keys if k in baseline_keys)
    legacy_keys = sorted(k for k in baseline_keys if k not in overlay_keys)

    changed_shared = []
    unchanged_shared = []
    case_remapped_shared = []

    merged = {}

    for key in shared_keys:
        group, name, old_group, old_name, old_entry = baseline_keys[key]
        _, _, new_group, new_name, new_entry = overlay_keys[key]

        changed = comparable(old_entry) != comparable(new_entry)
        if changed:
            changed_shared.append(key)
        else:
            unchanged_shared.append(key)

        if f"{old_group}.{old_name}" != f"{new_group}.{new_name}":
            case_remapped_shared.append({
                "canonicalKey": key,
                "baselineKey": f"{old_group}.{old_name}",
                "overlayKey": f"{new_group}.{new_name}",
            })

        merged_entry = canonicalize_entry(
            new_entry,
            group,
            name,
            original_group=new_group,
            original_name=new_name,
        )

        merged_entry["sources"] = merge_sources(old_entry.get("sources"), new_entry.get("sources"))

        merged_entry["versionSupport"] = {
            "firstSeen": BASE_VERSION,
            "presentIn": [BASE_VERSION, NEW_VERSION],
            "status": "active",
            "baselineVersion": BASE_VERSION,
            "currentVersion": NEW_VERSION,
            "changedSinceBaseline": changed,
        }

        if changed:
            merged_entry["versionSupport"]["baseline471"] = comparable(old_entry)
            merged_entry["versionSupport"]["current48x"] = comparable(new_entry)

        merged.setdefault(group, {})[name] = merged_entry

    for key in new_keys:
        group, name, old_group, old_name, entry = overlay_keys[key]

        merged_entry = canonicalize_entry(
            entry,
            group,
            name,
            original_group=old_group,
            original_name=old_name,
        )

        merged_entry["versionSupport"] = {
            "firstSeen": NEW_VERSION,
            "presentIn": [NEW_VERSION],
            "status": "new_48x",
            "note": "Added from WRF 4.8.x Registry overlay.",
        }

        merged.setdefault(group, {})[name] = merged_entry

    for key in legacy_keys:
        group, name, old_group, old_name, entry = baseline_keys[key]

        merged_entry = canonicalize_entry(
            entry,
            group,
            name,
            original_group=old_group,
            original_name=old_name,
        )

        merged_entry["versionSupport"] = {
            "firstSeen": BASE_VERSION,
            "presentIn": [BASE_VERSION],
            "status": "legacy_471_only",
            "note": "Present in WRF 4.7.1 baseline catalog but not found in WRF 4.8.x overlay. Kept for backward compatibility.",
        }

        merged.setdefault(group, {})[name] = merged_entry

    merged = {
        group: dict(sorted(values.items()))
        for group, values in sorted(merged.items())
    }

    merged_keys, merged_case_map = flatten(merged)

    case_duplicate_keys = {
        key: sorted(set(baseline_case_map.get(key, [])) | set(overlay_case_map.get(key, [])))
        for key in sorted(set(baseline_case_map) | set(overlay_case_map))
        if len(set(baseline_case_map.get(key, [])) | set(overlay_case_map.get(key, []))) > 1
    }

    target_audit = []
    for target in TARGETS:
        ctarget = target.lower()
        hits = []

        for key, (group, name, _, _, entry) in merged_keys.items():
            if name == ctarget:
                hits.append({
                    "key": key,
                    "type": entry.get("type"),
                    "defaultValue": entry.get("defaultValue"),
                    "entries": entry.get("entries"),
                    "versionSupport": entry.get("versionSupport"),
                    "sources": entry.get("sources"),
                    "originalKeys": entry.get("originalKeys"),
                })

        target_audit.append({
            "name": target,
            "found": bool(hits),
            "hits": hits,
        })

    metadata = {
        "title": "Canonical merged WRF namelist.input registry catalog",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "canonicalization": "Group names and variable names are lowercased for editor consistency. Original Registry spellings are retained in originalKeys.",
        "mergePolicy": "Preserve WRF 4.7.1 baseline options and add WRF 4.8.x options. Shared options are merged case-insensitively.",
        "baseline": {
            "version": BASE_VERSION,
            "path": str(BASELINE),
        },
        "overlay": {
            "version": NEW_VERSION,
            "path": str(OVERLAY),
        },
        "counts": {
            "baselineVariablesCanonical": len(baseline_keys),
            "overlayVariablesCanonical": len(overlay_keys),
            "mergedVariablesCanonical": len(merged_keys),
            "new48xVariablesCanonical": len(new_keys),
            "sharedVariablesCanonical": len(shared_keys),
            "changedSharedVariablesCanonical": len(changed_shared),
            "unchangedSharedVariablesCanonical": len(unchanged_shared),
            "legacy471OnlyVariablesCanonical": len(legacy_keys),
            "caseRemappedSharedVariables": len(case_remapped_shared),
            "caseDuplicateKeysResolved": len(case_duplicate_keys),
            "groupCount": len(merged),
        },
    }

    payload = {
        "_metadata": metadata,
        "_groups": merged,
    }

    audit = {
        "metadata": metadata,
        "new48xKeysCanonical": new_keys,
        "changedSharedKeysCanonical": changed_shared,
        "legacy471OnlyKeysCanonical": legacy_keys,
        "caseRemappedSharedVariables": case_remapped_shared,
        "caseDuplicateKeysResolved": case_duplicate_keys,
        "releaseNoteTargetAudit": target_audit,
    }

    OUT_MERGED.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    OUT_AUDIT_JSON.write_text(json.dumps(audit, indent=2, sort_keys=True) + "\n", encoding="utf-8")

    lines = []
    lines.append("WRF 4.7.1 + 4.8.x canonical merged registry audit")
    lines.append("=" * 68)
    for k, v in metadata["counts"].items():
        lines.append(f"{k}: {v}")

    lines.append("")
    lines.append("Release-note target audit")
    lines.append("=" * 68)
    for row in target_audit:
        lines.append(f"{row['name']}: {'FOUND' if row['found'] else 'MISSING'}")
        for hit in row["hits"]:
            vs = hit.get("versionSupport") or {}
            lines.append(
                f"  {hit['key']} default={hit.get('defaultValue')} "
                f"type={hit.get('type')} entries={hit.get('entries')} "
                f"status={vs.get('status')} presentIn={vs.get('presentIn')}"
            )
            if hit.get("originalKeys"):
                lines.append(f"    originalKeys={hit.get('originalKeys')}")

    lines.append("")
    lines.append("Case remapped shared variables")
    lines.append("=" * 68)
    for row in case_remapped_shared[:160]:
        lines.append(f"{row['canonicalKey']}: {row['baselineKey']} + {row['overlayKey']}")
    if len(case_remapped_shared) > 160:
        lines.append(f"... truncated, see JSON audit for all {len(case_remapped_shared)}")

    lines.append("")
    lines.append("First 120 new 4.8.x canonical keys")
    lines.append("=" * 68)
    for key in new_keys[:120]:
        lines.append(key)

    lines.append("")
    lines.append("First 120 legacy 4.7.1-only canonical keys")
    lines.append("=" * 68)
    for key in legacy_keys[:120]:
        lines.append(key)

    OUT_AUDIT_TXT.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Wrote {OUT_MERGED}")
    print(f"Wrote {OUT_AUDIT_JSON}")
    print(f"Wrote {OUT_AUDIT_TXT}")
    print("")
    print("Counts:")
    for k, v in metadata["counts"].items():
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
