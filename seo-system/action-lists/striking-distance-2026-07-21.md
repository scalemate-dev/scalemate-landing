# Task: Striking-Distance On-Page Optimization

> **Owner:** (assigned agent) · **Created:** 2026-07-21 · **Source data:** GSC 28d (sc-domain:scalemate.co)
> **Goal:** Push pages already ranking pos 4–20 onto page 1 / lift CTR — the fastest, cheapest organic lever (no new links, no new content needed). Works even at our low DR (2.1).

## Why this task
scalemate.co gets ~14.7k impressions/mo but most clicks are brand + homepage. A large share of non-brand impressions **sit on page 2 (pos 11–20) with ~0% CTR** — they're "striking distance": small position/CTR improvements = big click gains, fast. This is higher-ROI right now than link building (which is a months-long compound track).

**Two opportunity types:**
- **A) Position push** — pos 11–20, needs to break into top 10 (on-page relevance + internal links).
- **B) CTR lift** — already pos 5–10 but CTR far below expected (title/meta/snippet rewrite).

## Target pages (from GSC 28d — VERIFY exact stats per URL before acting)

| # | Page (slug) | Impr | Pos | CTR | Type | Target keyword(s) |
|---|---|---|---|---|---|---|
| 1 | `/blog/best-mcp-servers…` | 2551 | 11.2 | 0.5% | A push | best non-brand performer; on edge of page 1 |
| 2 | `/blog/what-are-static-ads` | 1218 | 11.4 | 0.2% | A push | "static ads" (pos 17.6), "what is a static ad" (pos 18.9) — winnable KD-low cluster |
| 3 | `/ad-creative-uploader` | 885 | 14.2 | 2.3% | A push | "ads uploader" (pos 7.8), "ad uploader" (pos 9.4) — commercial intent, already converting |
| 4 | `/blog/best-ad-testing-tools` | 1935 | 17.0 | 0.0% | A push (hard) | "ad testing tools" (297 impr, pos 13.8), "ad testing software" (220, 17.1), "ad testing platform(s)" (73+65) — big impressions, stuck page 2 |
| 5 | `/features/bulk-launch…` | 523 | 11.6 | 0.6% | A push | bulk ad launch |
| 6 | `/features/automation…` | 486 | 19.6 | 0.6% | A push | automation rules |
| 7 | `/use-cases/automation…` | 559 | 7.3 | 0.9% | B CTR lift | already page 1, low CTR |
| 8 | `/use-cases/bulk-…` | 980 | 9.7 | 0.4% | B CTR lift | already page 1, low CTR |
| 9 | `/blog/madgicx-revealbot…` | 581 | 9.6 | 0.5% | B CTR lift | comparison, page 1, low CTR |

> ⚠️ Slugs above are truncated in GSC output. **Confirm the full URL + exact per-URL stats** before editing each (see Data access). Never pattern-match slugs.

## Method (per page)

**For Type A (position push):**
1. Pull the page's exact GSC queries (which keywords it ranks for, positions, impressions).
2. Read the live page + its metadata (`app/**/page.jsx` or `content/blog/*.md`).
3. Check on-page relevance for the target keyword: is it in H1, title, first 100 words, headers? Is search intent matched?
4. Improvements (cheapest first): tighten title/H1 to target keyword; add/expand a section that directly answers the query; add **internal links** from other relevant pages (anchor = target keyword) to pass authority; improve depth/coverage vs the top-10 SERP results.
5. For #4 (ad-testing cluster): check **cannibalization** — multiple pages compete for "ad testing" intent. Consider consolidating into one pillar rather than splitting authority. (See memory: verify canonical + SERP intent before calling it cannibalization.)

**For Type B (CTR lift):**
1. Page already ranks pos 5–10 but CTR is far below the position benchmark.
2. Rewrite **title + meta description** to be more clickable for the actual query (benefit + specificity + year). No "| Scalemate" brand suffix (wastes SERP budget; static pages omit suffix, blogs use `absoluteTitle: true`).
3. Verify title matches search intent of the top query for that URL.

## Data access (GSC = source of truth)
```bash
cd seo-system/skills/seo-ops   # or ~/.claude/skills/seo-ops
export GSC_SITE_URL="sc-domain:scalemate.co"
python3 gsc_client.py --striking --days 28          # striking-distance keywords
python3 gsc_client.py --pages 50 --days 28          # pages by impressions
# Per-URL queries (library): GSCClient.query(filters=[{"dimension":"page","operator":"contains","expression":"<slug>"}])
```
Ahrefs MCP (secondary): SERP overview / competitor top-10 for the target keyword to see what depth is needed to rank.

## Guardrails
- **Data integrity:** every recommendation backed by GSC/Ahrefs/SERP data — no guessing. If an integration fails, STOP.
- **Brand voice:** audience vocab, not product jargon (see `docs/brand-persona-framework.md`). Concise, scannable — no walls of text.
- **Don't break winners:** don't touch pages/keywords already ranking well. Only optimize the striking-distance targets.
- **Titles:** no "| Scalemate" suffix; metadata.title = openGraph.title = twitter.title.
- **NDA:** no client names — vertical labels only. Approved public logos: KitUp, ZeptoLab.
- **Metadata cooldown:** if a page's title/meta was edited <14 days ago, don't re-edit without a fresh signal (check `workflow/pipeline.md` §📊 Monitoring).

## Deliverable
For each target page: (1) current state (exact GSC stats + current title/meta), (2) diagnosis (why it's stuck / low CTR), (3) specific changes (new title/meta, content additions, internal links to add), (4) implement the changes (edit the files), (5) log the metadata edit into `workflow/pipeline.md` §📊 Monitoring with baseline stats + next-check date (+14–28d).

**Prioritize by ROI:** start with #1, #2, #3 (highest impressions × closest to page 1 × commercial intent). #4 is high-volume but harder (pos 17 → needs more work). #7–9 are quick CTR wins.

## Branching
Loose mode — work on `main` (or a `seo/striking-distance` branch if run as a cloud agent in a codespace). Commit per page with clear messages. Do NOT touch `app/pitch/*` or `app/thumbnails/*`.

---

## 🔎 Review & re-prioritization — 2026-07-21 (GSC 28d verified per-URL)

> Ran the Method against fresh GSC data. Verified exact per-URL queries (not truncated slugs). Two structural corrections to the original target table below. All 6 stale Monitoring rows (Apr–May edits, checks overdue since May 13–Jun 1) closed with current data in `pipeline.md §📊 Monitoring`.

### Correction 1 — original table over/under-ranked targets

- **`/use-cases/ad-campaign-automation-rules` was MISSING** — **872 imp, pos 9.4, 0% CTR** = biggest impression×position target on the site. (Original #7 "/use-cases/automation…" is actually `/automated-creative-upload-meta` 559/7.3/0.9%.)
- **#1 MCP + #2 static-ads over-ranked by raw impressions.** Per-URL, commercial queries are tiny (`best meta ads mcp` 9 imp; `static ad` 59 imp); the 2551/1218 impressions are dev/definitional long-tail — **AEO/brand intent, not ICP buyers.** Low click-ROI. Leave to mature; don't spend a cycle chasing page-1 "for clicks."

### Correction 2 — two 0-click pages are AIO zero-click, NOT title problems

`/use-cases/ad-campaign-automation-rules` ranks **pos 2.7** for `automatically pause ads when roas drops below threshold`; `/use-cases/automated-creative-upload-meta` ranks **pos 1.9** for `how can media buyers import creative assets from google drive…`. These are conversational queries where AI Overview eats the click. The Apr title rewrite already proved a title tweak does nothing here (0 clicks before & after). **Lever = SERP verification → FAQ/snippet-capture or accept as AEO surface. Not a title test.**

### Re-prioritized queue (what to actually do)

| Priority | Page | Real GSC (28d) | Action | Constraint |
|---|---|---|---|---|
| ~~Tier 1~~ **FROZEN** | `/ad-creative-uploader` | 885 imp, pos 7.8 head, converting | **Excluded** — new tool + content in design review on `/quick-launch`, migrates to `/ad-creative-uploader` after approval. Re-baseline post-relaunch. | — |
| **Tier 1 (active)** | `/use-cases/bulk-ad-launch` | 980 imp, pos 9.7 (`bulk ad launcher` 4.4, `ad launcher` 9.7, `launch ads` 11.8) | Body enrichment already pushed 18.6→9.7. Push clicks via internal links + on-page. | **Must follow `CLUSTER-PLAN-bulk-launch.md` anti-cannibalization rules** — do NOT optimize in isolation |
| **Tier 2** | `/features/automation-rules` | 486 imp, pos 19.6 | On-page relevance/content to break page 2 | — |
| **Tier 2 (blocker)** | `/blog/best-ad-testing-tools` | 1935 imp, pos 17, **0 clk after 2 title tests** | **Cluster consolidation decision first** (this + `/creative-testing-framework-library` pos 22.2 + `/blog/what-is-ad-testing`). Not a 3rd title test. | Needs canonical/SERP-intent check before consolidating |
| **Tier 3** | `/blog/madgicx-review-alternative` | 581 imp, pos 9.6, CTR 0.08%→0.5% (✅ worked) | Done — no further action; niche/low volume | — |
| **AEO / no-click-chase** | `/blog/best-mcp-servers`, `/blog/what-are-static-ads` | high imp, low-commercial tail | Leave to mature; track as AEO/brand, not click targets | — |
| **AIO re-diagnosis** | `/use-cases/ad-campaign-automation-rules` (872/9.4/0%), `/use-cases/automated-creative-upload-meta` (559/7.3) | pos 1.9–2.7 on conversational queries, 0 clicks | SERP verify → FAQ/snippet or accept AEO. No title test. | — |

### Recommended execution order
1. ✅ Close stale Monitoring loop with fresh data — **DONE 2026-07-21**.
2. Tier 1 active: `/use-cases/bulk-ad-launch` within cluster plan.
3. Testing-cluster consolidation decision (Tier 2 blocker).
4. AIO pages: SERP verification before any change.
5. `/features/automation-rules` on-page (Tier 2).
