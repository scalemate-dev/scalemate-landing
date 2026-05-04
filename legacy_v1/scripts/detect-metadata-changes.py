#!/usr/bin/env python3
"""
Detect title / meta description changes from git history, fetch GSC baseline
(30d before deploy) + current (deploy → today) metrics, and emit ready-to-paste
Markdown rows for `seo-system-v1/workflow/scorecard.md` `📊 Monitoring` section.

Why: prevents agents from re-suggesting title/meta fixes that were already
deployed and lets `review` agent track impact via the same scorecard table.

Usage:
    python3 seo-system-v1/scripts/detect-metadata-changes.py
    python3 seo-system-v1/scripts/detect-metadata-changes.py --days 60
    python3 seo-system-v1/scripts/detect-metadata-changes.py --no-gsc

Requires (only without --no-gsc):
    GSC_SITE_URL env var, .gsc-token.json — see .claude/skills/seo-ops/gsc_client.py
"""

import argparse
import re
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO_ROOT / ".claude" / "skills" / "seo-ops"))

TRACKED_PATHSPECS = [
    "app/**/page.jsx",
    "app/**/page.tsx",
    "app/**/layout.jsx",
    "app/**/layout.tsx",
    "content/blog/*.md",
]

# URL prefixes to drop from output — internal/dev/utility routes that aren't SEO targets.
EXCLUDED_URL_PREFIXES = (
    "/thumbnails/",
)

META_FIELDS = {
    "title": [
        re.compile(r'^\s*title:\s*["\']([^"\']*)["\']'),
    ],
    "description": [
        re.compile(r'^\s*description:\s*["\']([^"\']*)["\']'),
        re.compile(r'^\s*metaDescription:\s*["\']([^"\']*)["\']'),
    ],
}


def run(cmd):
    return subprocess.check_output(cmd, text=True, cwd=REPO_ROOT)


def commits_in_window(days):
    out = run([
        "git", "log",
        f"--since={days} days ago",
        "--pretty=format:%H|%ad|%s",
        "--date=short",
        "--", *TRACKED_PATHSPECS,
    ])
    commits = []
    for line in out.strip().split("\n"):
        if not line:
            continue
        sha, date, subject = line.split("|", 2)
        commits.append({"sha": sha, "date": date, "subject": subject})
    return commits


def diff_for_commit(sha):
    return run([
        "git", "show", "--no-color", "--unified=0", sha,
        "--", *TRACKED_PATHSPECS,
    ])


def parse_metadata_changes(diff_text):
    """Return list of {path, field, old, new} for diffs that touch tracked metadata fields."""
    by_file = {}
    current = None
    for line in diff_text.split("\n"):
        if line.startswith("diff --git"):
            m = re.search(r" b/(\S+)", line)
            current = m.group(1) if m else None
            if current:
                by_file.setdefault(current, {"-": [], "+": []})
        elif current and line.startswith("---"):
            continue
        elif current and line.startswith("+++"):
            continue
        elif current and line.startswith("-"):
            by_file[current]["-"].append(line[1:])
        elif current and line.startswith("+"):
            by_file[current]["+"].append(line[1:])

    changes = []
    for path, sides in by_file.items():
        for field, patterns in META_FIELDS.items():
            old = _first_match(sides["-"], patterns)
            new = _first_match(sides["+"], patterns)
            if old != new and (old is not None or new is not None):
                changes.append({"path": path, "field": field, "old": old, "new": new})
    return changes


def _first_match(lines, patterns):
    for line in lines:
        for pat in patterns:
            m = pat.search(line)
            if m:
                return m.group(1)
    return None


def file_to_url(path):
    if path.startswith("content/blog/"):
        return f"/blog/{Path(path).stem}"
    if path.startswith("app/") and Path(path).name in {"page.jsx", "page.tsx", "layout.jsx", "layout.tsx"}:
        rel = Path(path).parent.relative_to("app")
        url = "/" + str(rel) if str(rel) != "." else "/"
        # strip Next.js route groups: (group)/foo → /foo
        url = re.sub(r"/\([^/]+\)", "", url)
        return url
    return None


def gsc_window(client, url_path, start_date, end_date):
    rows = client.query(
        dimensions=["date"],
        row_limit=200,
        start_date=start_date,
        end_date=end_date,
        filters=[{"dimension": "page", "operator": "contains", "expression": url_path}],
    )
    if not rows:
        return {"imp": 0, "clicks": 0, "ctr": 0.0, "pos": None, "days": 0}
    imp = sum(r.get("impressions", 0) for r in rows)
    clicks = sum(r.get("clicks", 0) for r in rows)
    positions = [r["position"] for r in rows if r.get("position") is not None]
    return {
        "imp": imp,
        "clicks": clicks,
        "ctr": round((clicks / imp * 100) if imp else 0.0, 2),
        "pos": round(sum(positions) / len(positions), 1) if positions else None,
        "days": len(rows),
    }


def fmt_metrics(m):
    if not m or m.get("days") == 0:
        return "no data"
    pos = f"pos {m['pos']}" if m["pos"] is not None else "pos —"
    return f"{m['imp']} imp, {m['clicks']} clk, {m['ctr']}% CTR, {pos}"


def truncate(s, n=40):
    if not s:
        return "—"
    return s if len(s) <= n else s[: n - 1] + "…"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=30)
    ap.add_argument("--no-gsc", action="store_true")
    args = ap.parse_args()

    client = None
    if not args.no_gsc:
        try:
            from gsc_client import GSCClient
            client = GSCClient()
            client._get_service()
        except Exception as exc:
            print(f"# WARN: GSC unavailable ({exc}). Continuing without metrics.", file=sys.stderr)
            client = None

    today = datetime.now(timezone.utc).date()

    # url_path -> {field: [{sha, date, old, new}, ...]}
    by_url = {}
    for commit in commits_in_window(args.days):
        for change in parse_metadata_changes(diff_for_commit(commit["sha"])):
            url = file_to_url(change["path"])
            if not url or any(url.startswith(p) for p in EXCLUDED_URL_PREFIXES):
                continue
            by_url.setdefault(url, {}).setdefault(change["field"], []).append({
                "sha": commit["sha"][:7],
                "date": commit["date"],
                "old": change["old"],
                "new": change["new"],
            })

    # Collapse per-field history to single old (earliest non-None) → new (latest non-None);
    # drop URLs where every field is a brand-new addition (no prior value), since those are
    # content launches tracked separately in `pipeline.md § 8. Published`, not metadata edits.
    summarized = {}
    for url, field_hist in by_url.items():
        fields = []
        latest_date = None
        all_shas = []
        for field, entries in field_hist.items():
            entries.sort(key=lambda e: e["date"])
            old = next((e["old"] for e in entries if e["old"] is not None), None)
            new = next((e["new"] for e in reversed(entries) if e["new"] is not None), None)
            if old is None or new is None or old == new:
                continue
            fields.append({"field": field, "old": old, "new": new})
            field_latest = entries[-1]["date"]
            if latest_date is None or field_latest > latest_date:
                latest_date = field_latest
            all_shas.extend(e["sha"] for e in entries)
        if fields and latest_date:
            summarized[url] = {"fields": fields, "deploy_date": latest_date, "shas": list(dict.fromkeys(all_shas))}

    if not summarized:
        print(f"# No title/meta edits found in last {args.days} days (new files / content launches excluded).")
        return

    print(f"# Metadata changes — last {args.days} days (today: {today})")
    print()
    print("Paste the rows below into `seo-system-v1/workflow/scorecard.md` `📊 Monitoring` section.")
    print("Update existing rows if URL already tracked; otherwise append new row.")
    print()
    print(f"| Item | Deployed | Baseline (-30d) | Current (to {today}) | Next check | Change |")
    print("|---|---|---|---|---|---|")

    for url in sorted(summarized):
        info = summarized[url]
        deploy_date = info["deploy_date"]
        d = datetime.strptime(deploy_date, "%Y-%m-%d").date()

        baseline = current = None
        if client:
            try:
                baseline = gsc_window(client, url, str(d - timedelta(days=30)), str(d - timedelta(days=1)))
                current = gsc_window(client, url, deploy_date, str(today))
            except Exception as exc:
                print(f"# WARN: GSC query failed for {url}: {exc}", file=sys.stderr)

        change_summary = "; ".join(
            f"{f['field']} «{truncate(f['old'])}» → «{truncate(f['new'])}»"
            for f in info["fields"]
        )
        change_summary += f" ({', '.join(info['shas'])})"
        next_check = d + timedelta(days=14)

        print(
            f"| `{url}` metadata | {deploy_date} | "
            f"{fmt_metrics(baseline)} | {fmt_metrics(current)} | "
            f"{next_check} (T+2wk) | {change_summary} |"
        )


if __name__ == "__main__":
    main()
