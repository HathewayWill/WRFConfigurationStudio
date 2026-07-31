#!/usr/bin/env python3
"""
Mine candidate WRF namelist compatibility rules from local WRF sources.

This does not enforce anything. It only creates review reports.

Source priority:
  1. Registry files
  2. WRF Users Guide / Namelist Variables JSON
  3. GitHub release notes for discovery only
  4. README.namelist
  5. examples.namelist
"""

from __future__ import annotations

import csv
import json
import re
from collections import Counter
from pathlib import Path


REPO = Path(__file__).resolve().parents[1]
OUT_DIR = REPO / "data" / "reports" / "compatibility_audit"
OUT_DIR.mkdir(parents=True, exist_ok=True)

CANDIDATE_CSV = OUT_DIR / "candidate_compatibility_rule_mining.csv"
CANDIDATE_MD = OUT_DIR / "candidate_compatibility_rule_mining.md"
TRIAGE_MD = OUT_DIR / "candidate_compatibility_rule_triage.md"

WRF471 = Path.home() / "Downloads" / "v4.7.1" / "WRFV4.7.1"
WRF480 = Path.home() / "Downloads" / "v4.8.0" / "WRFV4.8.0"
WRF481 = Path.home() / "Downloads" / "WRF_481_source_work" / "WRF-v4.8.1-dev"

USERS_GUIDE_JSON = REPO / "data" / "raw" / "namelist.input.users.guide.json"

SOURCES = [
    ("registry_primary", "4.7.1", 1, "true", WRF471 / "Registry"),
    ("registry_primary", "4.8.0", 1, "true", WRF480 / "Registry"),
    ("registry_primary", "4.8.1-dev", 1, "true", WRF481 / "Registry"),
    ("users_guide_secondary", "current", 2, "true", USERS_GUIDE_JSON),
    ("release_notes_discovery", "4.7.1", 3, "false", REPO / "data" / "raw" / "wrf" / "releases" / "WRF_v4.7.1_release_notes.md"),
    ("release_notes_discovery", "4.8.0", 3, "false", REPO / "data" / "raw" / "wrf" / "releases" / "WRF_v4.8.0_release_notes.md"),
    ("readme_supporting", "4.7.1", 4, "review", WRF471 / "run" / "README.namelist"),
    ("readme_supporting", "4.8.0", 4, "review", WRF480 / "run" / "README.namelist"),
    ("readme_supporting", "4.8.1-dev", 4, "review", WRF481 / "run" / "README.namelist"),
    ("examples_supporting", "4.7.1", 5, "false", WRF471 / "test" / "em_real" / "examples.namelist"),
    ("examples_supporting", "4.8.0", 5, "false", WRF480 / "test" / "em_real" / "examples.namelist"),
    ("examples_supporting", "4.8.1-dev", 5, "false", WRF481 / "test" / "em_real" / "examples.namelist"),
]

PHRASES = [
    r"only\s+works?\s+with",
    r"must\s+also\s+set",
    r"must\s+be\s+set",
    r"must\s+be\s+used\s+with",
    r"requires?",
    r"required\s+when",
    r"not\s+compatible",
    r"incompatible",
    r"valid\s+when",
    r"only\s+used\s+when",
    r"used\s+only\s+when",
    r"only\s+for",
    r"works?\s+with",
    r"set\s+.*\s+when",
    r"if\s+.*\s+then",
    r"dependent\s+on",
    r"coupled\s+with",
]

PHRASE_RE = re.compile("|".join(f"({p})" for p in PHRASES), re.IGNORECASE)
RCONFIG_RE = re.compile(r"\brconfig\s+\S+\s+([A-Za-z_][A-Za-z0-9_]*)\s+namelist,([A-Za-z0-9_]+)", re.IGNORECASE)


def clean_line(line: str) -> str:
    return re.sub(r"\s+", " ", line).strip()


def iter_files(root: Path):
    if not root.exists():
        return
    if root.is_file():
        yield root
        return
    for path in sorted(root.rglob("*")):
        if path.is_file() and not path.name.startswith("."):
            yield path


def load_known_variables() -> set[str]:
    names: set[str] = set()

    if USERS_GUIDE_JSON.exists():
        data = json.loads(USERS_GUIDE_JSON.read_text(errors="replace"))
        for group, fields in data.items():
            if isinstance(fields, dict):
                for name in fields:
                    names.add(name)
                    names.add(f"{group}.{name}")

    for root in [WRF471 / "Registry", WRF480 / "Registry", WRF481 / "Registry"]:
        for path in iter_files(root):
            try:
                text = path.read_text(errors="replace")
            except Exception:
                continue
            for var, group in RCONFIG_RE.findall(text):
                names.add(var)
                names.add(f"{group}.{var}")

    return names


KNOWN_VARS = sorted(load_known_variables(), key=lambda v: (-len(v), v.lower()))
KNOWN_VAR_PATTERNS = [
    (v, re.compile(r"(?<![A-Za-z0-9_\.])" + re.escape(v) + r"(?![A-Za-z0-9_])", re.IGNORECASE))
    for v in KNOWN_VARS
]


def find_known_vars(text: str) -> list[str]:
    hits = []
    seen = set()
    for name, pat in KNOWN_VAR_PATTERNS:
        if pat.search(text):
            base = name.split(".")[-1]
            if base not in seen:
                seen.add(base)
                hits.append(base)
    return sorted(hits)


def source_label(path: Path) -> str:
    try:
        return str(path.relative_to(REPO))
    except ValueError:
        return str(path)


def context_lines(lines: list[str], index: int, radius: int = 1) -> str:
    start = max(0, index - radius)
    end = min(len(lines), index + radius + 1)
    return " / ".join(clean_line(lines[i]) for i in range(start, end) if clean_line(lines[i]))


def score_row(r: dict) -> int:
    score = 0
    phrases = r["phrase_hits"].lower()
    vars_seen = [v for v in r["variables_seen"].split("; ") if v]

    if r["source_type"] == "registry_primary":
        score += 100
    elif r["source_type"] == "users_guide_secondary":
        score += 80
    elif r["source_type"] == "release_notes_discovery":
        score += 45
    elif r["source_type"] == "readme_supporting":
        score += 35
    elif r["source_type"] == "examples_supporting":
        score += 10

    if vars_seen:
        score += 20
    if len(vars_seen) >= 2:
        score += 10
    if "valid when" in phrases:
        score += 30
    if "only works with" in phrases or "must be used with" in phrases:
        score += 30
    if "must also set" in phrases or "must be set" in phrases:
        score += 25
    if "requires" in phrases or "require" in phrases:
        score += 15
    if "not compatible" in phrases or "incompatible" in phrases:
        score += 25

    return score


def mine_text_file(source_type, version, priority, enforcement_allowed, path: Path):
    rows = []
    try:
        text = path.read_text(errors="replace")
    except Exception:
        return rows

    lines = text.splitlines()
    for idx, line in enumerate(lines):
        if not PHRASE_RE.search(line):
            continue

        context = context_lines(lines, idx, radius=1)
        phrase_hits = sorted(set(m.group(0).lower() for m in PHRASE_RE.finditer(context)))
        variables = find_known_vars(context)

        rows.append({
            "review_status": "candidate",
            "source_priority": priority,
            "source_type": source_type,
            "source_version": version,
            "enforcement_allowed": enforcement_allowed,
            "source_file": source_label(path),
            "line": idx + 1,
            "phrase_hits": "; ".join(phrase_hits),
            "variables_seen": "; ".join(variables),
            "candidate_strength": "review_required",
            "proposed_rule_id": "",
            "proposed_category": "",
            "notes": "",
            "context": context,
        })
    return rows


def mine_users_guide(path: Path):
    rows = []
    if not path.exists():
        return rows

    data = json.loads(path.read_text(errors="replace"))
    for group, fields in data.items():
        if not isinstance(fields, dict):
            continue
        for name, meta in fields.items():
            desc = str(meta.get("description", "")) if isinstance(meta, dict) else str(meta)
            if not PHRASE_RE.search(desc):
                continue

            context = f"{group}.{name}: {clean_line(desc)}"
            phrase_hits = sorted(set(m.group(0).lower() for m in PHRASE_RE.finditer(context)))
            variables = find_known_vars(context)
            if name not in variables:
                variables.insert(0, name)

            rows.append({
                "review_status": "candidate",
                "source_priority": 2,
                "source_type": "users_guide_secondary",
                "source_version": "current",
                "enforcement_allowed": "true",
                "source_file": source_label(path),
                "line": 0,
                "phrase_hits": "; ".join(phrase_hits),
                "variables_seen": "; ".join(sorted(set(variables))),
                "candidate_strength": "review_required",
                "proposed_rule_id": "",
                "proposed_category": group,
                "notes": "",
                "context": context,
            })
    return rows


def main():
    rows = []

    for source_type, version, priority, enforcement_allowed, root in SOURCES:
        if source_type == "users_guide_secondary":
            rows.extend(mine_users_guide(root))
            continue

        for path in iter_files(root):
            rows.extend(mine_text_file(source_type, version, priority, enforcement_allowed, path))

    for r in rows:
        r["triage_score"] = score_row(r)

    rows.sort(key=lambda r: (-int(r["triage_score"]), int(r["source_priority"]), r["source_type"], r["source_version"], r["source_file"], int(r["line"])))

    fieldnames = [
        "review_status",
        "triage_score",
        "source_priority",
        "source_type",
        "source_version",
        "enforcement_allowed",
        "source_file",
        "line",
        "phrase_hits",
        "variables_seen",
        "candidate_strength",
        "proposed_rule_id",
        "proposed_category",
        "notes",
        "context",
    ]

    with CANDIDATE_CSV.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    source_counts = Counter((r["source_type"], r["source_version"]) for r in rows)
    phrase_counts = Counter()
    for r in rows:
        for phrase in r["phrase_hits"].split("; "):
            if phrase:
                phrase_counts[phrase] += 1

    with CANDIDATE_MD.open("w") as f:
        f.write("# Candidate WRF namelist compatibility rule mining report\n\n")
        f.write("This report lists candidate compatibility rules only. Nothing here is enforced until manually reviewed and promoted to `valid`.\n\n")
        f.write("## Source priority\n\n")
        f.write("1. Registry files: primary\n")
        f.write("2. WRF Users Guide / Namelist Variables JSON: secondary\n")
        f.write("3. GitHub release notes: discovery only\n")
        f.write("4. README.namelist: supporting\n")
        f.write("5. examples.namelist: supporting\n\n")

        f.write("## Counts by source and version\n\n")
        for (source, version), count in sorted(source_counts.items()):
            f.write(f"- {source} {version}: {count}\n")

        f.write("\n## Top phrase hits\n\n")
        for phrase, count in phrase_counts.most_common(30):
            f.write(f"- `{phrase}`: {count}\n")

        f.write("\n## First 120 candidates\n\n")
        for i, r in enumerate(rows[:120], start=1):
            f.write(f"### {i}. score {r['triage_score']} · {r['source_type']} {r['source_version']} line {r['line']}\n\n")
            f.write(f"- Source: `{r['source_file']}`\n")
            f.write(f"- Enforcement allowed: `{r['enforcement_allowed']}`\n")
            f.write(f"- Variables seen: `{r['variables_seen']}`\n")
            f.write(f"- Phrase hits: `{r['phrase_hits']}`\n\n")
            f.write(f"> {r['context']}\n\n")

    with TRIAGE_MD.open("w") as f:
        f.write("# Candidate compatibility rule triage\n\n")
        f.write("Highest-priority candidates are Registry-backed or Users-Guide-backed, mention actual namelist variables, and contain explicit compatibility language.\n\n")
        f.write("## Top candidates\n\n")
        for i, r in enumerate(rows[:80], start=1):
            f.write(f"### {i}. score {r['triage_score']} · {r['source_type']} {r['source_version']} line {r['line']}\n\n")
            f.write(f"- Source: `{r['source_file']}`\n")
            f.write(f"- Enforcement allowed: `{r['enforcement_allowed']}`\n")
            f.write(f"- Variables: `{r['variables_seen']}`\n")
            f.write(f"- Phrases: `{r['phrase_hits']}`\n")
            f.write(f"- Review status: `candidate`\n\n")
            f.write(f"> {r['context']}\n\n")

    print(f"Wrote {len(rows)} candidates")
    print(CANDIDATE_CSV)
    print(CANDIDATE_MD)
    print(TRIAGE_MD)


if __name__ == "__main__":
    main()
