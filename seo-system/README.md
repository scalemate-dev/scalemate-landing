# SEO System — Entry Point

Read this before doing any SEO work. CLAUDE.md routes all SEO tasks here.

## Pipeline state (source of truth)

- [approved-queue.md](approved-queue.md) — what's queued, in progress, done. Natalia adds items, agent executes, agent moves to "Done".
- [prioritization-scorecard.md](prioritization-scorecard.md) — living backlog with scoring (refreshed weekly by intelligence agent).
- [intelligence-briefs/](intelligence-briefs/) — weekly recon outputs (GSC + Ahrefs + Trends + Brand Radar).
- [drafts/](drafts/) — draft articles produced by content-creator.

## Verbs → agents

| Task verb | What to run | Agent prompt |
|---|---|---|
| `research`, `run research`, `розвідка` | Weekly recon + scorecard refresh | [agents/intelligence-agent.md](agents/intelligence-agent.md) |
| `brief`, `discovery [topic]` | Validate topic via Ahrefs/GSC/SERP, produce Topic Brief | [agents/discovery-agent.md](agents/discovery-agent.md) |
| `draft`, `write [brief]` | Generate outline → approve → full draft | [agents/content-creator-agent.md](agents/content-creator-agent.md) |
| `QA`, `qa [draft]` | 4-stage pipeline: content-ops → copy-editing → humanizer → SEO check | [agents/qa-pipeline.md](agents/qa-pipeline.md) |
| `review` | Track deployed items: indexation, CTR, position deltas | [agents/review-agent.md](agents/review-agent.md) |
| `what's in pipeline` | Read [approved-queue.md](approved-queue.md) + scorecard `this-week`/`in-draft` rows | — |
| `update brief X` | Edit the brief file in place, log change in scorecard `Notes` | — |
| `reject X` | Move scorecard row to `deferred` with reason in `Notes` | — |

## Workflow (one cycle)

```
Mon:  research → intelligence-briefs/YYYY-MM-DD.md → human approves top 5 → scorecard updated
Tue–Thu (per approved item):
      brief [topic]   → Topic Brief (human approves)
      draft [brief]   → outline (human approves) → full draft → drafts/
      qa [draft]      → PASS → ready to publish | FAIL → back to draft
      human approves final → deploy
Fri:  review → review-reports/YYYY-MM-DD.md → feeds next research cycle
```

## Rules (non-negotiable, injected into every agent)

- **Data-first** — no proposal without Ahrefs/GSC/SERP numbers. If data missing, say so; don't invent.
- **Quality gate** — content-ops score ≥ 90, Anti-AI level = Low.
- **Existing-first** — check existing pages before proposing new content.
- **Human-in-the-loop** — 4 approval checkpoints (priorities → outline → input → final).
- **No competitor promotion** — neutral mention OK, active promotion banned.

Full rules and architecture: [seo-system-plan.md](seo-system-plan.md). Writing rules: [content-writing-rules.md](content-writing-rules.md). UA-language operator guide: [how-to-use.md](how-to-use.md).

## Tools (MCP / skills wired in)

Ahrefs MCP, SerpAPI MCP, GSC direct (`~/.claude/skills/seo-ops/gsc_client.py`), `trend_scout.py`, skills: `content-creator`, `content-ops`, `copywriting`, `copy-editing`, `seo-audit`.

## Remote pipeline

Headless agent runs via codespace — see [dev-handover-remote-pipeline.md](dev-handover-remote-pipeline.md).
