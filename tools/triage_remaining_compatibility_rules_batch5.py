#!/usr/bin/env python3
import json
from collections import Counter, defaultdict
from pathlib import Path

RULE_PATH = Path("data/runtime/namelist.input.compatibility.validated.json")
CATALOG_PATH = Path("data/runtime/namelist.input.catalog.json")
REPORT_DIR = Path("data/reports/compatibility_audit")
REPORT_DIR.mkdir(parents=True, exist_ok=True)

OUT_MD = REPORT_DIR / "remaining_compatibility_rules_batch5_triage.md"
OUT_JSON = REPORT_DIR / "remaining_compatibility_rules_batch5_triage.json"

VALID_STATUSES = {"valid", "validated"}

def norm(value):
    return "" if value is None else str(value).strip()

def first_existing(d, names, default=None):
    for name in names:
        if isinstance(d, dict) and name in d:
            return d.get(name)
    return default

def as_key(group, variable):
    group = norm(group)
    variable = norm(variable)
    if not group or not variable:
        return ""
    if "." in variable:
        return variable
    return f"{group}.{variable}"

def is_blank(value):
    return value is None or str(value).strip() == ""

def is_nonzero_default(value):
    if is_blank(value):
        return False
    raw = str(value).strip().lower()
    if raw in {".false.", "false", "0", "0.0", "0.00"}:
        return False
    try:
        return float(raw.replace("d", "e")) != 0.0
    except Exception:
        return False

def is_html_number_safe(value):
    if value is None:
        return True
    raw = str(value).strip()
    if raw == "":
        return True
    import re
    return bool(re.match(r"^[+-]?(?:(?:\d+\.?\d*)|(?:\.\d+))(?:[eE][+-]?\d+)?$", raw))

def get_field_default(field):
    return first_existing(field, [
        "default",
        "defaultValue",
        "default_value",
        "initial",
        "value",
        "values",
    ], "")

def get_requirement_keys(rule):
    keys = []

    for req in rule.get("requirements", []) or []:
        if isinstance(req, dict):
            k = req.get("key") or as_key(req.get("group") or req.get("requiredGroup"), req.get("variable") or req.get("requiredVariable"))
            if k:
                keys.append(k)

    # Older/alternate single requirement fields.
    k = rule.get("requiredKey") or as_key(rule.get("requiredGroup"), rule.get("requiredVariable"))
    if k:
        keys.append(k)

    # Best-effort from requirementsRaw for obvious names is intentionally skipped.
    # We only want catalog-verifiable structure here.

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

triaged = []
for rule in rules:
    status = rule.get("validationStatus", "")
    if status in VALID_STATUSES:
        continue

    trigger_group = rule.get("triggerGroup")
    trigger_variable = rule.get("triggerVariable")
    trigger_key = rule.get("triggerKey") or as_key(trigger_group, trigger_variable)
    trigger_field = fields_by_key.get(trigger_key)

    trigger = rule.get("trigger", {}) or {}
    trigger_mode = trigger.get("mode", "")

    req_keys = get_requirement_keys(rule)
    missing_req_keys = [k for k in req_keys if k not in fields_by_key]

    trigger_default = get_field_default(trigger_field or {})
    default_nonzero = is_nonzero_default(trigger_default)

    reasons = []
    if not trigger_key:
        reasons.append("missing structured trigger key")
    elif trigger_key not in fields_by_key:
        reasons.append("trigger field missing from runtime catalog")

    if missing_req_keys:
        reasons.append("one or more structured requirement fields missing from runtime catalog")

    if trigger_mode in {"active", "set", "truthy", "non_zero"} and default_nonzero:
        reasons.append("trigger has non-zero/default-active value; avoid default-page noise")

    if trigger_default and not is_html_number_safe(trigger_default):
        reasons.append("trigger default is not HTML-number-safe or is a complex literal")

    if status == "needs_review":
        review_bucket = "needs manual review"
    elif reasons:
        review_bucket = "hold"
    else:
        review_bucket = "candidate"

    triaged.append({
        "id": rule.get("id", ""),
        "status": status,
        "strength": rule.get("strength", ""),
        "trigger_key": trigger_key,
        "trigger_mode": trigger_mode,
        "trigger_default": trigger_default,
        "default_nonzero": default_nonzero,
        "requirements": req_keys,
        "missing_requirements": missing_req_keys,
        "bucket": review_bucket,
        "reasons": reasons,
        "description": rule.get("description", "") or rule.get("message", ""),
        "requirementsRaw": rule.get("requirementsRaw", ""),
        "validationNotes": rule.get("validationNotes", ""),
    })

triaged.sort(key=lambda r: (
    {"candidate": 0, "needs manual review": 1, "hold": 2}.get(r["bucket"], 9),
    r["strength"],
    r["id"],
))

OUT_JSON.write_text(json.dumps(triaged, indent=2) + "\n")

bucket_counts = Counter(r["bucket"] for r in triaged)
status_counts = Counter(r["status"] for r in triaged)
strength_counts = Counter(r["strength"] for r in triaged)

lines = []
lines.append("# Remaining compatibility rules batch 5 triage")
lines.append("")
lines.append("This report reviews remaining non-valid compatibility rules after batch 4 promotion.")
lines.append("")
lines.append("## Summary")
lines.append("")
lines.append(f"- Remaining non-valid rules reviewed: {len(triaged)}")
lines.append(f"- Buckets: {dict(bucket_counts)}")
lines.append(f"- Statuses: {dict(status_counts)}")
lines.append(f"- Strengths: {dict(strength_counts)}")
lines.append("")
lines.append("## Candidate rules")
lines.append("")
candidates = [r for r in triaged if r["bucket"] == "candidate"]
if not candidates:
    lines.append("No low-risk candidates found by this automated scan.")
else:
    for r in candidates[:25]:
        lines.append(f"### {r['id']}")
        lines.append("")
        lines.append(f"- Status: `{r['status']}`")
        lines.append(f"- Strength: `{r['strength']}`")
        lines.append(f"- Trigger: `{r['trigger_key']}` mode `{r['trigger_mode']}` default `{r['trigger_default']}`")
        lines.append(f"- Requirements: `{', '.join(r['requirements']) if r['requirements'] else 'none structured'}`")
        if r["requirementsRaw"]:
            lines.append(f"- Requirements raw: {r['requirementsRaw']}")
        if r["description"]:
            lines.append(f"- Description: {r['description']}")
        lines.append("")

lines.append("## Hold or manual-review rules")
lines.append("")
for r in triaged:
    if r["bucket"] == "candidate":
        continue
    lines.append(f"### {r['id']}")
    lines.append("")
    lines.append(f"- Bucket: `{r['bucket']}`")
    lines.append(f"- Status: `{r['status']}`")
    lines.append(f"- Strength: `{r['strength']}`")
    lines.append(f"- Trigger: `{r['trigger_key']}` mode `{r['trigger_mode']}` default `{r['trigger_default']}`")
    if r["requirements"]:
        lines.append(f"- Requirements: `{', '.join(r['requirements'])}`")
    if r["missing_requirements"]:
        lines.append(f"- Missing requirements: `{', '.join(r['missing_requirements'])}`")
    if r["reasons"]:
        lines.append("- Reasons:")
        for reason in r["reasons"]:
            lines.append(f"  - {reason}")
    if r["requirementsRaw"]:
        lines.append(f"- Requirements raw: {r['requirementsRaw']}")
    lines.append("")

OUT_MD.write_text("\n".join(lines) + "\n")

print(f"Wrote {OUT_MD}")
print(f"Wrote {OUT_JSON}")
print("remaining:", len(triaged))
print("buckets:", bucket_counts)
print("statuses:", status_counts)
print("strengths:", strength_counts)
print("top candidates:", [r["id"] for r in candidates[:15]])
