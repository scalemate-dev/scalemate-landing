# SEO System v1

Pipeline of 5 agents that run weekly SEO analysis → discover topics → write drafts → QA them → review post-publish performance.

## Agents (in pipeline order)

| Agent | Trigger | Reads | Writes |
|---|---|---|---|
| [seo-analysis](agents/seo-analysis/) | weekly | GSC, Ahrefs, SerpAPI Trends, trend_scout | `output/seo-analysis/YYYY-MM-DD.md`, adds candidates to `workflow/pipeline.md` `1. New` |
| [discovery](agents/discovery/) | per-topic from pipeline `1. New` | latest seo-analysis brief, scorecard, rules | `output/topics/<slug>/brief.md`, moves item `1` → `2` → `3. Pending review` |
| [content-creator](agents/content-creator/) | per-topic from pipeline `4. Approved for writing` | brief, rules | `output/topics/<slug>/draft.md`, moves item `4` → `5. Pending review` |
| [qa](agents/qa/) | per-topic from pipeline `6. Approved for QA` | draft, brief, rules | `output/topics/<slug>/qa.md` (+ optional `revision-notes.md`), moves `6` → `7` (PASS) or `4`/`9` (FAIL) |
| [review](agents/review/) | manual (no cadence) | scorecard, pipeline, rules | `output/review/YYYY-MM-DD.md`, `output/topics/<slug>/tracking.md`, updates pipeline `8. Published` items |

## Layout

```
seo-system-v1/
  agents/                    Per-step specs for each agent (refactored from monolithic .md files)
  workflow/
    pipeline.md              Single source of truth — Kanban-style state across all 9 sections
    scorecard.md             Backlog with priority scores
  output/
    topics/<slug>/           Per-topic lifecycle artifacts
      prompt.md              Input for codespace autorun
      brief.md               Discovery output
      draft.md               Content-creator output
      qa.md                  QA verdict
      revision-notes.md      QA fail (optional)
      tracking.md            Review history (append-only)
      review-deepdive.md     Review escalation (optional)
    seo-analysis/YYYY-MM-DD.md   Weekly SEO analysis brief snapshots
    review/YYYY-MM-DD.md         Weekly review snapshots
    trends/flash-trends-*.md trend_scout dumps
  scripts/
    codespace-autorun.sh     Headless agent launch for `seo/<slug>` branches
```

## Soft-deps (legacy, lives in `seo-system/`)

These are read by v1 agents but не у v1:

- `seo-system/rules/content-writing.md` — content rules (with anchors `#anti-ai-rules`, `#self-check-checklist`, `#title-meta-prework`, `#post-publish-tracking`)
- `seo-system/rules/brand-guidelines.md` — brand voice
- `seo-system/rules/seo-copywriting.md` — SEO copy patterns
- `seo-system/context/icp/jtbd-messaging.md` — JTBD framework
- `seo-system/context/icp/customer-*.md` — case study source data
- `seo-system/context/project-state.md` — deployed/blocked/learnings
- `seo-system/docs/architecture.md` — system architecture (legacy brainstorm doc)

Будуть рефакторитись окремо.

## Tools

Стек описано у [agents/seo-analysis/TOOLS.md](agents/seo-analysis/TOOLS.md):
- **Ahrefs MCP** (`mcp__ahrefs__*`) — keywords, SERP, Brand Radar, site audit
- **SerpAPI MCP** (`mcp__serpapi__search`) — live SERP, Google Trends, PAA, Reddit search
- **GSC direct** (`.claude/skills/seo-ops/gsc_client.py`) — striking distance, queries, pages
- **trend_scout.py** — broad signal aggregator (HN/Reddit/Trends RSS/X)
- **content-ops, copy-editing skills** — used by QA agent

## Running an agent

### Locally (interactive)

```
/sm:run <agent> [slug]
```

де `<agent>` = `seo-analysis | discovery | content-creator | qa | review`. Slug потрібен для discovery/content-creator/qa (per-topic). Для seo-analysis/review — генерується з дати автоматично.

Slash-команда створить topic dir з prompt.md і запропонує git-команди для autorun.

### Codespace (headless)

1. Create branch `seo/<slug>` (де slug = `seo-analysis-YYYY-MM-DD`, `review-YYYY-MM-DD`, або topic slug)
2. Place prompt at `seo-system-v1/output/topics/<slug>/prompt.md`
3. Push branch → start/restart codespace
4. `postStartCommand` runs `seo-system-v1/scripts/codespace-autorun.sh` → reads prompt → triggers Claude Code headless

Idempotency:
- `.autorun.done` file → skip (delete to re-run)
- `.autorun.pid` alive → skip
- Otherwise → fire claude, log to `.autorun.log`

## Pipeline state machine

```
1. New (потребує discovery)
   ↓ seo-analysis adds, Natalia approves
2. Discovery in progress
   ↓ discovery agent locks, processes
3. Pending Natalia review (brief)
   ↓ Natalia approves
4. Approved for writing
   ↓ content-creator writes
5. Pending Natalia review (draft)
   ↓ Natalia approves
6. Approved for QA
   ↓ qa runs
7. Pending Natalia deploy        ← QA PASS
   ↓ Natalia deploys
8. Published                      ← review tracks here
   ↓ failed milestone (T+4wk)
9. Rejected / Archived            ← also QA reject (rejected-by: qa) and review escalate (rejected-by: review)
```

## Принципи

- **Data-first** — гіпотез без джерела не існує
- **Existing-first** — апдейт існуючого > створення нового
- **Не вигадувати** — `insufficient data` коли треба
- **Trust the brief** — agent не передвибирає рішення вище за нього в pipeline
- **Single source of truth** — pipeline.md (state) + per-topic dir (artifacts) + weekly briefs (snapshots)
- **Anchors замість номерів** — посилання на rules через `#anchor`, не `Section 4.1.1`
