# Validate scorecard — meta-ads-learning-phase-reset

> Rubric: `rules/scorecard.md`. All numbers pulled live on **2026-07-27** (no memory, no estimates).
> Supersedes an earlier same-day run of this unit whose step-0 wrongly recorded `artifacts/topics/rejected.md` and `artifacts/topics/legacy-backlog.md` as "not present"; both were re-checked here and the keyword cluster was re-expanded (materially larger than that run found).

## 0. Sanity check (fail-fast, rules/aeo-rules.md Part A)

| Integration | Call | Result |
|---|---|---|
| Ahrefs | `subscription-info-limits-and-usage` | OK — Lite plan, 36,016 / 100,000 workspace units used (2026-07-27) |
| GSC (direct) | `bash scripts/gsc.sh --pages 1 --days 7` | OK — exit 0, data returned (`https://www.scalemate.co/` 8 clicks / 545 impressions / pos 6.6) |
| SerpAPI | `search` engine `google_light`, q=`test`, num=1 | OK — 9 organic results |

- `artifacts/topics/rejected.md` — **checked, present.** No entry for `meta-ads-learning-phase-reset` (8 logged kills, none this slug or cluster). Not a re-proposal.
- `artifacts/topics/legacy-backlog.md` — **checked, present** (30 lines). No legacy brief for this topic (`grep -i learning|phase|reset` → no match). No evidence to reuse; this run is from scratch.
- Product-fit boundary (`rules/seed-map.md`): Scalemate = launch/test/scale execution layer (multi-account Meta+TikTok, bulk launch, **automation rules**, free uploader). Topic sits inside the boundary — see §4.

## 1. Demand — 23/25

Source: Ahrefs `keywords-explorer-overview` + `keywords-explorer-matching-terms` (terms=all, volume ≥10, top 40 by volume) + `keywords-explorer-volume-history`, country **us**, 2026-07-27.

Head terms:

| keyword | volume | KD | TP | parent topic |
|---|---|---|---|---|
| facebook learning phase | 150/mo | 1 | 200 | facebook ads learning phase |
| facebook ads learning phase | 100/mo | 2 | 200 | facebook learning phase |
| meta ads learning phase | 100/mo | 4 | n/a | facebook learning phase |
| meta learning phase | 60/mo | 2 | 200 | facebook ads learning phase |
| meta ads learning limited | 20/mo | n/a | n/a | — |
| facebook ads learning limited | 20/mo | 1 | 30 | what does learning limited mean on facebook ads |

Long-tail (same `matching-terms` pull, Meta/Facebook-scoped only — Google Ads / TikTok / "lifetime learning credit" / "phase family learning center" / "motor learning" rows excluded as off-topic):

| keyword | volume |
|---|---|
| meta ads learning phase 50 conversions per week | 300/mo |
| meta ads learning phase duration | 150/mo |
| meta ads learning phase 50 conversions | 100/mo |
| facebook ads learning phase duration | 80/mo |
| learning phase (parent: facebook learning phase) | 80/mo |
| meta ads learning phase duration 2026 | 70/mo |
| about the learning phase meta ads help center | 70/mo |
| meta ads learning phase 50 optimization events | 60/mo |
| facebook ads learning phase 50 conversions | 60/mo |
| meta learning phase 50 conversions per week | 60/mo |
| facebook ads learning phase how long | 50/mo |
| meta ads learning phase explanation / duration 2025 | 40/mo each |
| 9 further variants (requirements 2026, 7 days official, 50 conversions per ad set, how long, learning phase facebook ads, facebook ad learning phase, learning phase meta, duration 2025, 50 conversions 7 days) | 30/mo each |

**Combined Meta/Facebook cluster ≈ 1,880/mo** (Ahrefs `keywords-explorer-matching-terms`, us, 2026-07-27) — ~9× the rubric's ≥200/mo "clear cluster" bar. KD where reported is 1–4 (trivially low).

Trend (`keywords-explorer-volume-history`, `meta ads learning phase`, us, 2024-01 → 2026-07): **strongly growing** — 2024 baseline 14–39/mo → 2025 19–46/mo → 2026: Jan 101, Feb 149, **Mar 454**, Apr 266, May 156, Jun 60, Jul 156. Post-spike floor (~150) sits ~5× above the 2024 baseline; not a one-off news spike collapsing back to zero. No 2-year decline.

**Caveat recorded:** the exact "reset" phrasings (`learning phase reset`, `meta ads learning phase reset`, `facebook ads learning phase reset`, `how to avoid learning phase reset`, `ad set learning phase`) return **0 / no data** in Ahrefs (`keywords-explorer-overview`, 2026-07-27). Reset-specific demand is real but rides the "learning phase" head terms — confirmed by live SERP (§2, three of ten results are reset-titled) and Reddit (§6, four thread titles containing "reset").

GSC (ground truth for our site): `bash scripts/gsc.sh --raw '{"dimensions":["query"],"row_limit":25000}' --days 180 --json` → 330 query rows total, **zero** containing learning / phase / reset. No on-site footprint. Expected for greenfield, but it means no first-party proof of demand — the 2-point deduction from 25.

## 2. Reachability — 16/25 (mixed, with proven low-DR entrants)

Our live DR: **2.9** (Ahrefs `public-domain-rating-free`, scalemate.co, 2026-07-27).

Head term `meta ads learning phase` — Ahrefs `serp-overview` (us, top 10, 2026-07-27):

| pos | URL | DR | type |
|---|---|---|---|
| 1 | facebook.com/business/help/112167992830700 | 100 | official Meta docs |
| 2 | reddit.com/r/PPC + 2× r/FacebookAds, r/selfpublish sitelinks | 95 | UGC/forum |
| 3 | wordstream.com/blog/facebook-learning-phase | 90 | blog guide |
| 4 | — | — | PAA block |
| 5 | reddit.com/r/FacebookAds + 2× facebook.com/groups | 95 / 100 | discussions |
| 6 | bir.ch/blog/facebook-learning-phase | 72 | blog guide — **tracked competitor** (`rules/seed-map.md`) |
| 7 | ignitevisibility.com/meta-learning-phase | 76 | blog guide |
| 8 | **cyberlicious.com**/survive-the-meta-learning-phase-optimize-your-ads | **5** | blog guide — thin-authority page outranking DR 63–76 |
| 9 | facebook.com/business/help/316478108955072 ("Significant Edits and Learning Phase") | 100 | official Meta docs |
| 10 | lebesgue.io/facebook-ads/... | 63 | blog guide |

Reset-angle query `meta ads learning phase reset` — SerpAPI `search` (google_light, us, 2026-07-27); Ahrefs `serp-overview` returns no rows for this term (untracked), so DRs pulled individually via `public-domain-rating-free`:

| pos | URL | DR | type |
|---|---|---|---|
| 1 | facebook.com/business/help/112167992830700 | 100 | official docs |
| 2 | reddit.com/r/FacebookAds (Oct 10 2025) | 95 | UGC |
| 3 | modernmarketinginstitute.com/blog/how-to-exit-the-meta-ads-learning-phase-fast... | **21** | blog guide |
| 4 | niblin.com/blog/meta-ads-learning-phase ("Avoid Resets") | **42** | blog guide |
| 5 | linkedin.com (Jon Loomer post, Sep 28 2025) | — | social |
| 6 | bir.ch/blog/facebook-learning-phase (Feb 18 2026) | 72 | competitor blog |
| 7 | cyberlicious.com/... (Aug 22 2024) | **5** | blog guide |
| 8 | linkedin.com (Mar 6 2025) | — | social |
| 9 | instagram.com reel (Sep 28 2025) | — | social |
| 10 | digicom.io/post/you-can-now-exit-learning-on-meta-with-only-10-events-in-3-days | **16** | blog guide |

**Not a DR wall.** The head term is mixed (two unbeatable Meta doc slots + five UGC slots + DR 63–90 blogs), but the reset-specific SERP — our actual angle — has four entrants at DR 5, 16, 21, 42, i.e. content beating authority. This is materially more reachable than the killed `tiktok-creative-center-guide` (DR 63 floor) or `meta-tiktok-ad-specs-2026` (DR 60+ wall) cases. Held below 20 only because our DR 2.9 still trails even the DR 5 incumbent's page-level authority and half the SERP is structurally unwinnable (Meta's own docs + Reddit).

**Intent match:** dominant format is how-to/guide + forum discussion. Our planned format is a how-to/guide. **No intent mismatch.**

**SERP features** (SerpAPI `search`, engine `google`, us, 2026-07-27): **AI Overview present**, structured as "How the Learning Phase Works" / "Actions That Reset the Learning Phase" / "Best Practices" — and it cites **bir.ch** (our tracked competitor) *and* **cyberlicious.com (DR 5)** among 12 references. A DR 5 page earning an AI Overview citation on this query is the clearest available evidence that the citation slot is content-won, not authority-won.

PAA captured (feeds the FAQ block per `rules/aeo-rules.md` AEO-3.5): "How long do Facebook ads stay in the learning phase?" · "How to get Meta ads out of learning phase?" · "What are the three stages of Meta ads?" · "Why is my ad still in learning phase?" (head term) — plus "What is the learning phase in meta?" and "How long do ads stay in the learning phase?" from the `serp-overview` question block.

## 3. Existing-first / cannibalization — no conflict, adjacent support found

- GSC: the 180-day query pull (§1) returns zero rows for the cluster, so no scalemate.co page earns any impression for it — nothing to cannibalize.
- Target repo scan (`gh api repos/scalemate-dev/scalemate-landing/contents/content/blog`, 2026-07-27): 12 blog posts, **none** targeting the learning phase. Code search (`gh api search/code q='"learning phase" repo:scalemate-dev/scalemate-landing'`) → 10 hits, all passing mentions:
  - `content/blog/meta-andromeda-update.md` — "one media buyer split tests across 47 ad sets and watched every ad set fail to exit learning phase" (one line inside a broader Andromeda piece)
  - `content/blog/what-is-ad-fatigue.md` — learning phase named only in an image alt-text lifecycle diagram
  - `app/automation-rules-library/page.jsx` + `rules-data.js` — the mechanic referenced inside rule descriptions (JSX page, outside this pipeline's blog-only output track per `rules/target-profile.md`)
- **Verdict: greenfield.** Not UPDATE-EXISTING. The three assets above are ready internal-link targets, not competitors for the cluster.

## 4. Business/product fit — 20/25

- **ICP:** media buyers running live Meta campaigns — core ICP per `rules/seed-map.md` (`/solutions/media-buyers`).
- **JTBD:** "scale/edit my campaigns without destroying delivery" — the pain sits exactly at the moment of making changes at scale.
- **Funnel:** MOFU how-to with a native BOFU bridge, not a generic definition piece. The trigger for a learning reset *is* ad-hoc manual editing; Scalemate's automation rules + bulk launch/bulk edit exist to make controlled, batched changes instead. Conversion path: reset-avoidance → `/features/automation-rules`, `/use-cases/ad-campaign-automation-rules`, `/features/bulk-launch` (all in `rules/seed-map.md`).
- Held at 20 (not 22–25) because the article itself is a how-to, not a BOFU comparison/use-case page — the product tie is genuine and structural, but the search intent is informational.
- Corroboration that this is a category we play in: tracked competitor **bir.ch** ranks position 6 and is AI-Overview-cited on this exact query.

## 5. AEO / data potential — 10/15

- **Public-sourceable, citable facts: strong.** Meta's own documented mechanics — 50 optimization events per 7-day window, and the enumerated "significant edits" that restart learning — from two Meta Business Help Center pages that both rank in this SERP (`facebook.com/business/help/112167992830700`, `.../316478108955072`). Plus a live, dated platform-change claim to verify at write time (digicom.io, DR 16: "exit learning with only 10 events in 3 days") and Jon Loomer's Sep 28 2025 LinkedIn post on whether new ads restart learning — a genuine open question in the SERP.
- **First-party: not confirmed.** Scalemate could plausibly produce a real aggregate (e.g. reset frequency for automation-rule users vs. manual editors), which would lift this to the 12–15 band and satisfy AEO-10. **Not fabricated here — flagged as an input request for `brief`/`write`.**
- Scored in the "public-sourceable facts" band (6–11), top of range.

## 6. Pain check — validated

SerpAPI `search` (google_light, `site:reddit.com/r/FacebookAds OR site:reddit.com/r/PPC learning phase reset`, 2026-07-27) → **10 distinct threads**, four titled explicitly around the reset, spanning Oct 2021 → **Apr 2026** with a dense recent run:

| date | thread | snippet |
|---|---|---|
| Apr 24 2026 | "Learning Phase Reset Recovery" (`1sutr7l`) | "I launched new ads into my existing Adset Monday this week which reset my learning phase whilst I was scaling (7-10 conversions day)" |
| Mar 2 2026 | "Campaign learning phase" (`1riuaow`) | "The bigger learning resets come from ad set edits like targeting, placements, optimization event, bid strategy, or big budget swings, not just…" |
| Jan 11 2026 | "Learning Phase Reset" (`1qa3a6h`) | "Does turning ads off for a day reset the learning phase? I recently did this and I had 35 sales in a couple weeks and now I haven't had a…" |
| Oct 30 2025 | "Does turning off or adding new ads change the learning phase" (`1ojuko5`) | "Switching off ads or adding new creatives usually triggers the learning phase again…" |
| Oct 29 2025 | "Adding a new video ad to an ad set. Does it reset learning phase?" (`1ojd7tv`) | — |
| Oct 10 2025 | "Why Most People Don't Realize How Meta's Learning Phase Can Either Make Or Break Their Ads" (`1o38v0u`) | "Every edit (budget change, audience tweak, creative swap) resets that learning." — also ranks organically at position 2 |
| Jan 29 2025 · Dec 14 2023 · May 11 2022 · Oct 27 2021 | 4 further threads | sustained multi-year pain |

Threshold (`capabilities/reddit.md`: 3+ live threads) cleared several times over, with three threads inside the last 7 months.

**Data-gap disclosure (rules/aeo-rules.md DI-6/DI-7):** direct `WebFetch` of reddit.com is blocked by this environment ("unable to fetch from www.reddit.com") — a tool restriction, not a source failure. The evidence above is verbatim SerpAPI-returned snippets with thread URLs and dates, sufficient for the validate kill-gate but **not** for quote-mining. `brief` must obtain full-thread reads through an allowed path before lifting any quote into a draft; no quote here may be reused as if it were a full-thread read.

## Kill-gate checklist (rules/scorecard.md)

| Gate | Result |
|---|---|
| SERP intent mismatch | **No** — dominant format is how-to/guide + forum; matches planned format. |
| Cannibalization | **No** — no scalemate.co page targets the cluster; zero GSC impressions; repo scan finds passing mentions only (§3). |
| Zero pain evidence | **No** — 10 dated r/FacebookAds/r/PPC threads, 3 within the last 7 months (§6). |
| Product-fit fail | **No** — inside the `rules/seed-map.md` execution-layer boundary; competitor bir.ch ranks and is AI-Overview-cited here (§4). |

## Score summary

| Dimension | Score | Max |
|---|---|---|
| Demand | 23 | 25 |
| Reachability | 16 | 25 |
| Business fit | 20 | 25 |
| AEO / data potential | 10 | 15 |
| Existing-asset bonus | 6 | 10 |
| **Total** | **75** | **100** |

Existing-asset bonus 6/10: adjacent-cluster support ready for internal linking (`/blog/meta-andromeda-update`, `/blog/what-is-ad-fatigue`, `/automation-rules-library`) — no page to update outright (4–7 band).

Threshold check: total 75 ≥ 60; no critical zero (Demand 23 ≥ 8, Reachability 16 ≥ 8, Business fit 20 ≥ 8). All four mandatory kill-gates clear.

## Carry-forward for `brief`

1. **Input request:** first-party reset-frequency data (automation-rule users vs. manual editors) would lift AEO from 10 → 12–15 and satisfy AEO-10. Do not invent it; escalate.
2. Retry full-thread Reddit reads via an allowed path before quoting (§6).
3. Verify the digicom.io "10 events in 3 days" claim against Meta's own docs before repeating it — it contradicts the standard 50-events/7-days figure and is currently single-sourced from a DR 16 page.
4. Target the head cluster (`facebook/meta ads learning phase`, ~1,880/mo combined) with the *reset* angle as the differentiator — the reset phrasings have no independent Ahrefs volume but own the SERP titles and the Reddit pain.

VERDICT: GO
