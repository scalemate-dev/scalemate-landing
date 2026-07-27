# Topic candidates — 2026-07-27

Unit: `topic-research` · run date 2026-07-27 · target: scalemate.co (repo scalemate-dev/scalemate-landing)

## Run log

**Sanity checks (rules/aeo-rules.md Part A, all 4 mandatory for this unit):**
- GSC direct `bash scripts/gsc.sh --pages 1 --days 7` → OK (data returned).
- Ahrefs `subscription-info-limits-and-usage` → OK (Lite plan, 354/100,000 workspace units used at start).
- SerpAPI `google_light q:test` → OK.
- Trends `google_trends q:"facebook ads automation" TIMESERIES` → OK (non-empty payload, breakout Apr–May 2026 visible).

All green — proceeded.

**⚠️ Backlog-pileup finding (read this before triaging new candidates below):** three prior `topic-research` runs already sit largely un-actioned in the target repo:
- PR #99 (2026-07-24, "SEO topic research: 5 candidates") — **OPEN**, not merged. 5 candidates: `creative-testing-small-budget`, `meta-ads-learning-phase-reset`, `advantage-plus-shopping-vs-manual-launch`, `tiktok-winner-scaling-automation`, `multi-account-meta-ads-agency-workflow`.
- PR #96 (2026-07-14, "topics: 6 evidenced candidates") — **OPEN**, not merged (13 days old). 6 candidates incl. `facebook-ad-account-restricted-prevention` (scored ~67, strongest single candidate found across all four runs) and `meta-ads-mcp-explainer` (likely UPDATE-EXISTING).
- `.seo/topics/2026-07-25-candidates.md` — **merged** (PR #100), but none of its 6 candidates have been picked up by `validate`/`brief` yet except `meta-pixel-helper-explainer` (shipped, PR #102, merged) and `tiktok-creative-center-guide` (validated NO-GO, logged in `rejected.md`). `ad-testing-tools-meta-tiktok`, `meta-ads-library-guide`, `meta-google-ads-mcp-exact-match-refresh`, `meta-ads-updates-2026-hub` remain unactioned.

Net: **~11 fully-evidenced, un-triaged candidates already waiting**, several scoring 55-73 on a preliminary pass. This run intentionally does **not** duplicate research effort on any of them — it dedupes hard against all three prior runs (not just merged ones) and focuses discovery on genuinely unswept ground. Recommend the human triage the existing backlog (start with PR #96's `facebook-ad-account-restricted-prevention` and the merged `meta-ads-library-guide`) before more topic-research volume accumulates.

**Signals collected this run (2026-07-27):**
- GSC (direct, 28d window): `--striking --days 28`, `--queries 100 --days 28`. Result: striking-distance and top-query clusters are the same ad-testing / automation-rules / MCP clusters already flagged as existing-page fixes in the 2026-07-24 and 2026-07-25 runs (and today's separate `analysis` run, PR #105) — no new blog-gap signal in GSC this week.
- Ahrefs competitor gap on **previously-unswept competitors** from `rules/seed-map.md`: `adamigo.ai` and `adstellar.ai` both returned 0 organic keywords ≥ 100 vol (US) — valid zero per DI-6, not an error; either very new/thin sites or not yet indexed at volume. `adsuploader.com` (unswept before today) returned a strong, previously-uncaptured cluster — see Candidate 1.
- Trends: seed terms `mobile user acquisition` and `tiktok ads scaling` (both listed in seed-map, neither swept by the 3 prior runs) — **no usable signal**. `mobile user acquisition` related-queries returned only generic/unrelated breakouts ("ai news today") and GA4-quiz-style queries; `tiktok ads scaling` returned empty (Google Trends has no data for this exact phrase).
- Reddit: `r/AppMarketingHelp` + `r/mobiledev` sweep for mobile-UA manual-work pain — **no relevant threads** (search returned unrelated r/mobiledev dev-tooling posts, not UA/ad-ops pain). Mobile UA JTBD (seed-map "JTBD 6 native") stays unconfirmed by live pain evidence as of today.
- Freshness check on legacy-backlog's `meta-tiktok-automated-ads-sunset-2026` (flagged "newsjack — check if still fresh"): **the standalone newsjack angle is stale.** SerpAPI (2026-07-27) shows the "Meta fully-automated-ads-by-2026" story has been public since mid-2025 (WSJ/SocialMediaToday, Jun 2025) and the SERP is now dominated by **actively-maintained competitor rolling hubs** — `adsuploader.com/blog/meta-ads-updates` (updated Jul 16, 2026), `admakeai.com` "July 2026 Changelog" (Jul 10, 2026), `commonthreadco.com` "Every Meta Ads Change in 2026, Updated Weekly" (5 days old), `digitalapplied.com` (Jan 30, 2026). This *confirms and strengthens* the already-surfaced `meta-ads-updates-2026-hub` candidate (2026-07-25 run cited only admanage.ai; now 4 competitors run this format) but kills the standalone "sunset" newsjack framing as its own piece — recommend the human mark that specific angle stale when triaging legacy-backlog.md. Not re-proposing the hub candidate itself (already sitting unactioned in the merged 2026-07-25 file).
- Checked, not proposed: `audience-overlap-meta-fix` (legacy-backlog, 200 vol/KD1). Reddit sweep (2026-07-27) found mostly 2018-2023 threads plus a couple from 2025, and the live practitioner consensus in-thread is split to skeptical ("audience overlap is not a concern", "myth or true?") — contested pain signal, not validated pain, on top of volume already thin. Not worth a card; flagging so it isn't re-checked again soon without a new signal.

**Dedupe performed against:**
- `content/blog/` listing (11 posts live now, via `gh api` — up from 10 on 2026-07-25; `meta-pixel-helper-explainer.md` shipped since).
- `artifacts/topics/rejected.md` — `tiktok-creative-center-guide` (2026-07-25 kill) not re-proposed.
- `artifacts/topics/legacy-backlog.md` — all items cross-checked; see freshness notes above.
- `.seo/topics/` in target (only `2026-07-25-candidates.md` exists there) + open PRs #96 and #99 (not yet merged, but already-proposed — treated as dedupe scope per this run's judgment call, see backlog finding above).

---

## Candidates

## meta-tiktok-ad-specs-2026 (legacy-backlog reactivation, new competitor evidence)
Primary keyword: `meta ad specs` (1,000/mo, KD 26) + `facebook ad specs` (1,000/mo, KD 35) — Ahrefs `site-explorer-organic-keywords` via adsuploader.com, US, 2026-07-27. Cluster (same source/date): `facebook ad size` (1,400/mo, KD 34), `meta ad sizes` (700/mo, KD 23), `facebook ad sizes` (700/mo, KD 38), `facebook ad dimensions` (600/mo, KD 38), `carousel ads` (800/mo, KD 22), `facebook ad image size` (400/mo, KD 42) — combined well over 5,000/mo. | GSC signal: none (zero coverage, confirmed via `--queries 100 --days 28`, 2026-07-27).
Pain evidence: **weak/indirect** — one stale (Mar 2024) Reddit thread on ad-size rejection errors found via SerpAPI (2026-07-27); does not meet the capability's "3+ live threads" bar. This is an honest gap: demand here reads as reference/lookup intent ("what size is a Facebook carousel ad") rather than a forum-discussed pain, which is consistent with the format hypothesis below (spec-sheet reference, not a pain-first narrative). Flagging for `validate`/`brief` to weigh Demand strongly against thin Pain evidence, per rules/scorecard.md.
Why us / product fit: adjacent-but-honest — we don't produce creative, but a canonical, always-current Meta+TikTok spec sheet is exactly the kind of citable reference a bulk-launch/creative-upload tool's audience needs before they upload (ties into `/features/automation-rules` and `/use-cases/automated-creative-upload-meta`); zero product overclaim risk if scoped as pure reference.
Format hypothesis: reference/resource page (Track G-style) or glossary-adjacent explainer — one canonical, dated spec table (per AEO-8, dates concrete) for Meta + TikTok side by side; strong AEO/citation candidate (a table an LLM can extract directly) per `rules/aeo-rules.md` AEO-1.
Preliminary score (scorecard.md quick pass, NOT full validate): Demand ~18/25 (>5,000/mo combined cluster, real Ahrefs volume, though individually moderate KD) / Reachability unscored — needs a SERP pull in `validate` (adsuploader.com and several DR 70+ generic "ad size" resource sites already occupy top positions per the KD 34-42 range; may be a harder entry than KD alone suggests) / Business fit ~14/25 (adjacent reference, not core execution-layer) / AEO ~13/15 (table format, dated, citable) / Existing-asset ~2/10 (greenfield) ≈ indicative mid-50s, **Reachability is the open question — send to `validate` before writing**.
Source trail: Ahrefs `site-explorer-organic-keywords` target=adsuploader.com, mode=domain, country=us, date=2026-07-27; GSC direct `--queries 100 --days 28`, 2026-07-27; SerpAPI `google_light` Reddit sweep, 2026-07-27; legacy signal in `artifacts/topics/legacy-backlog.md` (`meta-tiktok-ad-specs-2026`, recon 2026-05-25, previously unsourced "1,300" estimate — this run replaces it with a sourced, larger cluster).

---

## Non-candidate findings (existing-first / process notes, not new articles)

1. **Backlog triage is now the higher-priority action than more discovery** — see the pileup finding at the top of the run log. Three runs (2026-07-14, 2026-07-24, 2026-07-25) produced ~11 unactioned, fully-evidenced candidates, one scoring an indicative ~73 (`meta-ads-mcp-explainer`, likely UPDATE-EXISTING) and one ~67 (`facebook-ad-account-restricted-prevention`), both in the still-open PR #96. Running `topic-research` again before these are triaged mostly re-confirms known clusters (ad-testing, automation-rules, MCP) rather than surfacing new ones, as seen in this run's GSC pull.
2. **`meta-tiktok-automated-ads-sunset-2026`** (legacy-backlog) — standalone "sunset" newsjack angle is stale (public since mid-2025, no longer news); the underlying rolling-hub format it was meant to feed is validated further (now 4 competitors run one) but that candidate (`meta-ads-updates-2026-hub`) already sits in the merged 2026-07-25 file, unactioned. Recommend the human mark the sunset framing stale in `legacy-backlog.md` when next triaging (not edited here — that file is human-reviewed backlog, not this unit's output).
3. **`audience-overlap-meta-fix`** (legacy-backlog) — checked, not proposed. Thin volume (200/KD1) plus contested/skeptical live Reddit sentiment ("myth or true?") means weak pain evidence on top of weak demand. Do not re-check without a new signal.
4. **Mobile UA / TikTok-scaling seed terms** (`mobile user acquisition`, `tiktok ads scaling` — both in `rules/seed-map.md`, neither swept by prior runs) — Trends and Reddit both returned no usable signal today. Not a dead end permanently, just nothing found in this pass; worth a re-check with different search phrasing in a future run rather than more sweeps this cycle.

---

## Gate contract
A candidate becomes runnable by `production` only after a human merges it (or an edited version) into `.seo/topics/` in scalemate-landing. This file proposes; `validate` scores for real (rules/scorecard.md) and can kill any card above.
