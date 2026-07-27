# Validation scorecard: facebook-ad-account-restricted-prevention

> Unit: `validate` · Run date: 2026-07-27 · Rubric: `rules/scorecard.md`
> Supersedes an earlier same-day run of this unit; keyword expansion, live SERP and Reddit sweeps were re-done and are wider (see §1 "reasons" term, §2 madgicx entrant, §6 prevention-intent threads). Reachability is scored lower here than in that run — rationale in §2.

## 0. Sanity checks (rules/aeo-rules.md Part A, DI-3)

| Integration | Call | Result |
|---|---|---|
| Ahrefs | `subscription-info-limits-and-usage` | OK — Lite plan, 17,464/100,000 workspace units used, key valid to 2027-04-28 |
| GSC (direct) | `bash scripts/gsc.sh --pages 1 --days 7` | OK — exit 0, data returned (scalemate.co, 8 clicks / 545 impr / pos 6.6 over 7d) |
| SerpAPI | `search` (`google_light`, q=test, num=1) | OK — 9 organic results returned |

All three mandatory integrations for `validate` are alive → proceeding.

**Non-blocking note (DI-6/DI-7):** one `gsc.sh --raw` call failed with `TypeError: unexpected keyword argument 'rowLimit'` — an operator parameter-name error (the client expects `row_limit`), not an integration failure. Corrected and re-run successfully.

## Pre-check (SKILL step 0)

- Slug: `facebook-ad-account-restricted-prevention` (kebab-case, as supplied).
- `artifacts/topics/rejected.md`: **no entry** for this slug or any near-variant (grepped `restricted`/`restricted-prevention`, 2026-07-27) → no prior kill to respect.
- `artifacts/topics/legacy-backlog.md`: **no entry** → no legacy brief to reuse.
- **Pipeline gate (CLAUDE.md rule 6): PASSED.** Topic is card 1 in `.seo/topics/2026-07-14-candidates.md` on the target's `main` (verified live via `gh api repos/scalemate-dev/scalemate-landing/contents/.seo/topics`, 2026-07-27). Preliminary topic-research score ~67, flagged "strongest new candidate". That card's evidence is reused where cited and refreshed live below.
- Product-fit boundary (`rules/seed-map.md`): the ban-risk angle is named there verbatim as our "killer differentiator (ban-risk angle no competitor has)" via the verified Meta app. **In scope.**

---

## 1. Demand — 25/25

Ahrefs `keywords-explorer-overview`, country `us`, 2026-07-27:

| keyword | volume | KD | TP |
|---|---|---|---|
| facebook ad account restricted | 100 | 2 | 1,200 |
| facebook account restricted from advertising | 100 | 5 | 250 |
| meta ad account restricted | 80 | — | — |
| restricted ad account facebook | 70 | — | — |
| facebook ads account disabled | 50 | 10 | 1,200 |
| facebook ad account permanently restricted | 40 | 3 | 1,300 |
| facebook business account restricted | 30 | 4 | 1,300 |
| ad account restricted facebook | 30 | 3 | 1,200 |
| facebook ads account restricted | 20 | 4 | 1,300 |
| why is my facebook ad account restricted | 10 | — | — |
| facebook ad account suspended | 0 | — | — |

**Conservative cluster ≈ 530/mo** — 2.6× the rubric's 200/mo full-marks bar. KD across the cluster is **2–10**, i.e. genuinely low-competition at the keyword level.

**Larger term found, flagged low-confidence:** `keywords-explorer-matching-terms` (seed `facebook ad account restricted`, `terms=all`, US, 2026-07-27) surfaces **`facebook ad account restricted reasons` at 800/mo** (global 800). Treat with caution and do **not** build the traffic case on it: Ahrefs returns `null` for difficulty, traffic_potential and parent_topic, and `serp-overview` for that exact term returns an **empty SERP snapshot** — the metric is unverifiable against a live SERP today. If it is real, the cluster is ~1,330/mo; the 25/25 score stands on the 530/mo verified portion alone.

**Dead phrasing (recorded so `brief` does not chase it):** the "ban"/"avoid"/"prevent" phrasings have **no search demand**. `matching-terms` on seed `facebook ad account ban` returns 3 keywords, all **0/mo**; `facebook ad account disabled prevention`, `how to avoid facebook ad account ban`, `prevent facebook ad account ban` returned no rows at all from `keywords-explorer-overview`. Searchers use **"restricted"**, and they search it **reactively**. This directly constrains the title/H1 — see the intent kill-gate below.

**Trend** — `keywords-explorer-volume-history` (primary kw, US, 2024-07 → 2026-07): range 61–120/mo, one anomalous 286 spike in 2025-03 (likely a Meta enforcement-wave news moment). 2024-H2 mean ≈ 74/mo vs 2026-YTD mean ≈ 96/mo → flat-to-slightly-rising. **No 2-year-decline flag.**

**GSC (ground truth, direct)** — `bash scripts/gsc.sh --raw '{"dimensions":["query"],"row_limit":25000}' --days 90 --json`, 2026-07-27: 330 unique queries over 90d, **0 matches** on `restrict|disabl|suspend|ban|unban|appeal|account quality|policy violation|reinstat|blocked`. Zero organic footprint. Read as "no page targets this yet" (confirmed in §3), not as a demand contradiction — Ahrefs volume carries this dimension.

## 2. Reachability — 16/25

Our live DR: **2.9** (Ahrefs `site-explorer-domain-rating`, scalemate.co, 2026-07-27).

Live SERP — SerpAPI `google` (US/en, 2026-07-27). **Only 6 organic results were returned; analysis is on 6, not 10** (per `capabilities/serp.md`), supplemented by Ahrefs `serp-overview` (same keyword, US, 2026-07-27) for the remaining slots and DR:

| pos | URL | DR | type | note |
|---|---|---|---|---|
| 1 | facebook.com/business/help/422289316306981 | 100 | official docs | 1,335 est. traffic/mo, 310 kws |
| 2 | facebook.com/business/help/975570072950669 | 100 | official docs | 300 traffic/mo |
| 3 | reddit.com/r/FacebookAds/…/1791m6r | 95 | forum | 117 traffic/mo, + 3 Reddit sitelinks |
| 4 | facebook.com/business/help/530209463124901 | 100 | official docs | 402 traffic/mo |
| 5 | superads.ai/blog/fix-facebook-ads-account-restricted | **56** | SaaS blog | 24 traffic/mo, Ahrefs rank 396,235 |
| 6 | madgicx.com/blog/facebook-account-restricted-from-advertising | **72** | SaaS blog | tracked competitor (`rules/seed-map.md`) |
| 7–9 (Ahrefs) | facebook.com groups ×2, reddit r/facebook, youtube, quora.com | 100 / — / 92 | UGC, video, forum | |

**Why 16 and not higher.** Arguments both ways, scored honestly:

- *For reachability:* KD 2–5 (few backlinks needed). Forums/UGC genuinely occupy ~4 of 10 slots — the rubric counts these as reachable. superads.ai (DR 56, Ahrefs rank **396,235** — a weak site by any measure) holds live **position 5**, which is direct proof the SERP is not authority-locked. The DR-100 block is Meta's *own* policy documentation, which is expected and unavoidable on any platform-policy query — it is not a wall of competing *content*.
- *Against:* there is **no sub-DR-50 entrant anywhere in the top-10**, so the rubric's 25-point condition is not met. Our DR 2.9 vs a DR-56 floor is a real gap. And competitive pressure is **rising**: madgicx.com (DR 72) at position 6 was **not present** in the 2026-07-14 topic-research SERP nor in today's Ahrefs snapshot — it is a fresh live entrant on this exact cluster. An AI Overview is present and answers the fix question completely (click suppression on an already-reactive query).

Net: "mixed", above the rubric's 12-point midpoint because of the forum share and the DR-56 precedent, below 20 because the non-forum floor is DR 56 and climbing → **16/25**. (This is the one dimension where this run is more conservative than the earlier same-day run, which scored 20 before madgicx was visible in the SERP.)

**SERP features** — AI Overview: **present** (a step-by-step "unlock your account" walkthrough citing Meta Help + the r/FacebookAds thread). PAA (2026-07-27): "How do I unrestrict my Facebook ad account?", "Why is my Facebook ad account restricted?", "How do I fix my restricted account on Facebook?", "What to do if your ad account is restricted?". Related searches: "…how to fix", "…how to recover", "…appeal form", "…restricted from advertising for no reason". **Every single SERP feature is reactive fix/appeal intent — zero prevention intent.** See kill-gate below.

## 3. Existing-first / cannibalization — none

- **GSC cannibalization procedure** (`capabilities/gsc.md`): `--raw '{"dimensions":["query","page"],"row_limit":5000}' --days 90 --json`, 2026-07-27 → 379 query×page rows, **0 matches** on the restriction/ban/appeal pattern. No page of ours earns a single impression on this cluster, so no 2-pages-one-query conflict exists.
- **Target `content/blog/` scan** (`gh api repos/scalemate-dev/scalemate-landing/contents/content/blog`, 2026-07-27): 11 posts — adcreative-ai-alternative, best-ad-testing-tools, best-bulk-ad-launch-tools, best-facebook-ads-automation-tools, best-mcp-servers-meta-google-ads, bulk-upload-creatives-meta-tiktok, madgicx-review-alternative, meta-andromeda-update, meta-pixel-helper-explainer, what-are-static-ads, what-is-ad-fatigue. **None targets account restrictions.**

No existing page targets the cluster → **not** an UPDATE-EXISTING case; greenfield new post.

## 4. Business / product fit — 18/25

- **ICP:** media buyer / small-team founder running Meta ads — core ICP.
- **JTBD:** risk-avoidance / account hygiene (adjacent to the core launch-test-scale groups, not central to them).
- **Funnel:** MOFU informational how-to.
- **Product fit — honest reading.** Scalemate does **not** unban or appeal accounts, and the dominant query intent (fix/appeal, §2) is a job we cannot do. What we *can* legitimately own is the prevention half: account-structure hygiene, and specifically **API/tooling-induced ban risk**, where being a **verified Meta Business app** is a real, checkable differentiator that `rules/seed-map.md` names as our killer one.
- **This is now third-party-evidenced, not just an internal claim.** Live Reddit (SerpAPI, 2026-07-27) shows buyers making exactly this connection unprompted: *"Meta has been banning people that are connecting/using 3rd party tools via API. They can function because they are registered with meta as a…"* (r/FacebookAds `1soajtm`, 2026-04-18) and *"the ban risk comes from browser automation and DOM scraping"* (r/PPC `1sio511`, 2026-04-11). An unbranded informational query where the audience independently articulates our differentiator is an unusually direct tie for MOFU content.
- **Ceiling:** the conversion path is still indirect (read guide → trust → trial), and most of the traffic arrives wanting a fix we don't sell. MOFU how-to band is 12–18; top of band on the differentiator strength → **18/25**.

## 5. AEO / data potential — 10/15

- **Public sourceable (AEO-5 tier 2), strong:** three distinct Meta Business Help Center policy pages are live in the top-6 and can be cited per-claim with URL + check date; Meta Marketing API / app-review documentation supports the verified-app section.
- **First-party (AEO-5 tier 1), qualitative only:** Scalemate's verified Meta Business app status is a factual, externally checkable claim about our own product — usable, and it satisfies AEO-10's first-hand-experience requirement if paired with a real product screenshot.
- **Gap flagged as an input request for `brief`/`write` (do not invent — AEO-7):** no first-party **numeric** benchmark was identified. If one exists — e.g. app-review approval date, count of accounts operated through the verified app without a restriction incident, support-ticket rate — it would move this dimension into the 12–15 band and materially raise the information-gain case. Escalate as a human input request at brief stage.
- **YMYL note (AEO-9):** restriction/ban-risk claims are YMYL-adjacent. Every risk statement needs an inline citation + date + qualifier, and no "you won't get banned" promises.

Public-sourceable band is 6–11; top of band given the authoritative public base plus a genuine first-party qualitative claim → **10/15**.

## 6. Pain check — validated

**Data gap, declared (DI-6/DI-7):** direct Reddit thread fetch is **blocked — HTTP 403** on both `www.reddit.com/…​.json` and `old.reddit.com` (retried once per DI-4, 2026-07-27; same block the 2026-07-14 topic-research run hit). All quotes below are **verbatim excerpts as surfaced in live Google SERP results via SerpAPI, 2026-07-27**, each with thread URL and Google-reported date — real published text, but **`brief` must re-verify in-thread before quoting any of it in a draft**. Reddit is not a mandatory integration for `validate` (`rules/aeo-rules.md` A.1), and the pain signal is independently corroborated by live SERP structure, so this is a recorded gap, not a stop condition.

**Prevention-intent threads (the angle we actually want) — new in this run:**
- *"Avoiding getting Meta Account Restricted"* — r/PPC `1t9xtzt`, 2026-05-11. Snippet: *"I've heard different opinions about using proxies or a stable IP, especially to avoid issues when accessing an ad account from another country…"* https://www.reddit.com/r/PPC/comments/1t9xtzt/
- *"Avoid Meta Ban: Create new Ads account or use personal…"* — r/PPC `1sg27er`, 2026-04-08. Snippet: *"Creating burner accounts with proxies screams fraud to Meta… they detect device fingerprints… linking gets everything banned simultaneously."* https://www.reddit.com/r/PPC/comments/1sg27er/
- *"How to not get banned?"* — r/FacebookAds `1ckvvw5`, 2024-05-05. https://www.reddit.com/r/FacebookAds/comments/1ckvvw5/

**API / third-party-tool ban-risk threads (the product tie):**
- *"Lots of people report that accounts shut down after connecting external AI agents, like Claude, directly to Ads Manager via API."* — r/FacebookAds `1ryu8wk`, 2026-03-20. https://www.reddit.com/r/FacebookAds/comments/1ryu8wk/
- *"Meta has been banning people that are connecting/using 3rd party tools via API. They can function because they are registered with meta as a…"* — r/FacebookAds `1soajtm`, 2026-04-18. https://www.reddit.com/r/FacebookAds/comments/1soajtm/
- *"…the ban risk comes from browser automation and DOM scraping"* — r/PPC `1sio511`, 2026-04-11. https://www.reddit.com/r/PPC/comments/1sio511/

**Freshness — the signal is live today, not a 2026-07-14 snapshot.** The SerpAPI `perspectives` block for the primary keyword (2026-07-27) returns Reddit posts dated **"20 hours ago"** ("Meta Disabled / Restricted Ad Account") and **"3 days ago"** ("Meta ads account restricted due to 'compromise', terrible support, fee"), plus a 1-month-old thread. The `discussions_and_forums` block returns r/FacebookAds `1qeej1f` (6 months, **20+ comments**).

Threshold per `capabilities/reddit.md`: ≥3 live threads with engaged comments → **pain validated** (6+ distinct threads, several within the trailing 90 days, two within the trailing week).

## Existing-asset bonus — 5/10

No existing page to update (0/10 baseline), but real adjacent-cluster support for internal linking:
- `/blog/best-mcp-servers-meta-google-ads` — shares the verified-API/app-access angle (natural inbound link to the ban-risk section)
- `/blog/madgicx-review-alternative` — madgicx.com is the DR-72 entrant at position 6 on this very SERP; a comparison bridge already exists
- `/blog/best-facebook-ads-automation-tools`, `/blog/bulk-upload-creatives-meta-tiktok` — the "third-party tool via API" context
- Product pages `/features/automation-rules`, `/features/bulk-launch` as CTA targets

Adjacent-cluster support, not greenfield → **5/10**.

---

## Rubric total

| Dimension | Score | Max |
|---|---|---|
| Demand | 25 | 25 |
| Reachability | 16 | 25 |
| Business fit | 18 | 25 |
| AEO / data potential | 10 | 15 |
| Existing-asset bonus | 5 | 10 |
| **Total** | **74** | **100** |

## Kill-gate checklist (rules/scorecard.md)

| Gate | Result |
|---|---|
| SERP intent mismatch | **No kill — but a mandatory angle correction, see below.** |
| Cannibalization | **No.** Zero GSC footprint (0/330 queries, 0/379 query×page rows, 90d) and no matching post among the target's 11 blog posts. |
| Zero pain evidence | **No.** 6+ distinct live threads incl. two within the trailing week; three are prevention-intent specifically. |
| Product-fit fail | **No.** Explicitly in scope per `rules/seed-map.md` — the ban-risk angle is the named differentiator. |

### Intent gate — detail, and a hard requirement for `brief`

Strictly read, there **is** an intent tension: 100% of SERP features (4/4 PAA, 8/8 related searches, the AI Overview, and both ranking SaaS blogs — titled *"Fix It Fast"* and *"How to Fix"*) express **reactive fix/appeal** intent, while the topic card's planned format is a **prevention** guide. The keyword data says the same thing: prevention phrasings have literally zero volume (§1).

This is **not** a kill, because the rubric's condition is "dominant format ≠ our planned format **and we won't change format**" — the dominant *format* here is a blog how-to, which we can serve, and we will adapt. But the correction is mandatory, not advisory:

- **Lead with the searcher's actual question** ("why is my account restricted / how do I get it back"). Diagnosis + Meta's official appeal path first, sourced to the three Meta Help URLs.
- **Then prevention as the information-gain half** — account-structure hygiene and, centrally, API/tooling-induced ban risk with the verified-vs-unverified app distinction (our differentiator, and the part no ranking page currently covers).
- **FAQ block answering the 4 PAA questions verbatim** (AEO-3.5) — this is where the literal query intent gets captured.
- **Do not title the page around "prevention" or "avoid ban"** — zero volume on those phrasings (§1). Target `facebook ad account restricted` / `…restricted reasons`. The slug may stay as-is for pipeline continuity; the H1/title must not.

**No critical zero** (Demand 25 ≥ 8, Reachability 16 ≥ 8, Business fit 18 ≥ 8). **Total 74 ≥ 60.**

## Carry-forward for `brief`

1. Reddit quotes are SERP-snippet verbatim — **re-verify in-thread** before any lands in a draft (Reddit 403 from this host).
2. Escalate the first-party-number input request (§5) to the human before writing.
3. Treat `facebook ad account restricted reasons` (800/mo) as unconfirmed until a live SERP for it can be pulled.
4. Fetch and gap-map the two beatable competitors: superads.ai (DR 56, pos 5) and madgicx.com (DR 72, pos 6) — we must cover their union and add the verified-app angle neither has.
5. AEO-9 applies throughout: qualifiers + dates on every ban-risk claim, no guarantees.

VERDICT: GO
