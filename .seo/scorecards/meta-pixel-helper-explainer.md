# Validation scorecard — meta-pixel-helper-explainer

> Unit: `validate` · Date: 2026-07-25 · Rubric: `rules/scorecard.md`

## 0. Sanity check

| Integration | Cheap call | Result |
|---|---|---|
| Ahrefs | `subscription-info-limits-and-usage` | OK — Lite plan, 36,930/100,000 workspace units used, key valid to 2027-04-28 |
| GSC (direct) | `bash scripts/gsc.sh --pages 1 --days 7 --json` | OK — 1 row returned (scalemate.co, 474 impr/7d) |
| SerpAPI | `search` engine `google_light`, q=`test` | OK — 9 organic results |

All three alive. Proceeding.

**Anti-re-proposal check:** `artifacts/topics/rejected.md` — no `meta-pixel-helper-explainer` entry (only `tiktok-creative-center-guide` present, unrelated). `artifacts/topics/legacy-backlog.md` — no matching slug or brief. Clean topic, no reuse available.

---

## 1. Demand

Ahrefs `keywords-explorer-overview`, country US, 2026-07-25:

| Keyword | Volume | KD | Traffic potential | Intents |
|---|---|---|---|---|
| meta pixel helper | 1,600 | 1 | 2,000 | informational, branded |
| facebook pixel helper | 1,400 | 9 | 1,900 | informational, branded |
| meta pixel helper chrome extension | 500 | 1 | 2,000 | informational, transactional, branded |
| meta pixel helper not working | 10 | – | – | – |
| meta pixel helper errors | 0 (no data returned) | – | – | – |
| meta pixel helper download | 10 | – | – | – |
| how to use meta pixel helper | 20 | – | – | – |

Combined primary+secondary cluster ≈ **3,500/mo** (well above the 200/mo full-mark threshold). Source: Ahrefs `keywords-explorer-overview`, 2026-07-25.

`keywords-explorer-volume-history` (US, 2024-07 → 2026-07) for "meta pixel helper": noisy month-to-month (222–2,721) but no 2-year decline — current month (1,417) is roughly flat vs. 24 months ago (1,648). No decay flag.

**GSC** (`bash scripts/gsc.sh --raw '{"dimensions":["query"],"filters":[{"dimension":"query","operator":"contains","expression":"pixel"}],"row_limit":50}' --days 90` and again `--days 480`): **zero rows both windows** — no impressions on any "pixel" query, ever, on scalemate.co. Expected: no existing page targets this cluster (confirmed in §3). Ahrefs volume stands alone as demand evidence here, per rubric's explicit allowance.

**Score: 25/25** — clear cluster ≥200/mo combined.

---

## 2. SERP / reachability

Ahrefs `serp-overview`, keyword "meta pixel helper", US, 2026-07-25, top-10:

| Pos | URL | DR | Type |
|---|---|---|---|
| 1 | chromewebstore.google.com/.../meta-pixel-helper | 99 | organic (Chrome Web Store listing) |
| 2 | developers.facebook.com/.../pixel-helper | 100 | organic (Meta official docs) |
| 3 | *(AI Overview)* — cites developers.facebook.com, facebook.com/business/help, **admanage.ai**, **superscale.ai** | – | ai_overview + sitelinks |
| 4 | *(PAA)* "What is meta pixel helper?" / "Is meta pixel necessary?" / "Is meta pixel illegal?" / "Is Meta Pixel Helper free?" | – | question |
| 5 | reddit.com/r/FacebookAds (thread) | 95 | organic (forum) |
| 6 | 3× reddit/Google support discussion boxes | – | discussion |
| 7 | adsuploader.com/blog/meta-pixel-helper | 35 | organic (guide) |
| 8 | admanage.ai/blog/meta-pixel-helper-chrome-extension | 45 | organic (guide) |
| 9 | askneedle.com/blog/meta-pixel-helper | 46 | organic (guide) |
| 10 | facebook.com/business/help (+3 sitelinks) | 100 | organic |

Our real DR (Ahrefs `public-domain-rating-free`, 2026-07-25): **2.1**.

Classification: mixed, not a DR70+ wall. Positions 1–2 and 10 are brand-owned entity pages (Meta's own docs, Chrome Web Store) that no third party — including our own tracked competitors — outranks; that's structural, not a competitive loss. The genuinely contestable slots (3–9) are held by a forum thread (DR95, doesn't count against per rubric) plus three content guides at **DR35 / DR45 / DR46** — two of which (adsuploader.com, admanage.ai) are in our own competitor set (`rules/seed-map.md`). KD=1 confirms Ahrefs also reads this as low-competition on-page. But our DR (2.1) sits well below even that DR35 floor, so near-term organic entry into 3–9 is a real stretch despite the low KD — a content-quality argument, not a guarantee.

Intent check: dominant format in the contestable slots = explainer/troubleshooting guide ("Complete Guide", "install, debug, read output", "Founder's Guide") — matches our planned `-explainer` format. No intent mismatch.

AEO note: AI Overview at position 3 already cites two competitor blogs directly — live proof this exact query is AI-Overview-citable, and a concrete displacement target.

**Score: 14/25** (mixed SERP, reachable slots exist but our DR sits far below their current floor).

---

## 3. Existing-first / cannibalization

`bash scripts/gsc.sh --raw '{"dimensions":["query","page"],"filters":[{"dimension":"query","operator":"contains","expression":"pixel"}],"row_limit":100}' --days 480 --json` → **empty** (no page/query pair). `rules/seed-map.md` URL→keyword map has no pixel-related entry either. No existing page to update or cannibalize.

**Verdict contribution: greenfield** (feeds Existing-asset bonus below, not a separate kill-gate).

---

## 4. Business / product fit

Scalemate = launch/test/scale execution layer (multi-account Meta+TikTok, bulk launch, automation rules, free uploader) — NOT a tracking/pixel-debugging tool. This topic doesn't showcase a Scalemate feature directly; it's foundational ad-ops hygiene (verify tracking before you scale spend on it) that our exact ICP (media buyers, per the live Reddit pain below) hits constantly during setup and troubleshooting.

- ICP: media buyer / performance marketer — direct match (every Reddit thread found is r/FacebookAds, r/PPC, r/GoogleTagManager — our ICP's own forums).
- Funnel stage: MOFU educational/troubleshooting, not BOFU comparison.
- Conversion path: indirect — natural bridge to "automation rules" (ROAS-based rules are only as good as pixel signal accuracy) and to `/solutions/media-buyers`, but no direct feature showcase. Not the creative-production/MMP-replacement categories `rules/seed-map.md` excludes, so no product-fit kill-gate — but also not a BOFU use-case page.

**Score: 14/25** (solid MOFU how-to for the right ICP; weak direct product tie — `brief` should design a deliberate internal-link bridge rather than a bolt-on CTA).

---

## 5. AEO / data potential

Per `rules/aeo-rules.md` Part B: no first-party telemetry on pixel-error rates across our own client base currently available to cite (would need to be sourced from internal data before writing — flag as an input request to `brief`/`write`, do not invent). Public-sourceable facts are abundant and strong: Meta's own official error-message taxonomy and troubleshooting docs (developers.facebook.com, facebook.com/business/help), plus the AI-Overview-citable structure already proven live for this exact query (see §2).

**Score: 9/15** (public-sourceable, no first-party yet — note the gap for `brief`).

---

## 6. Pain check

Topic arrived without pre-attached pain evidence → live Reddit pass run (per `capabilities/reddit.md`).

SerpAPI `site:reddit.com` sweeps (2 queries, 2026-07-25) surfaced **10+ live, distinct threads**, comment-engaged, spanning r/FacebookAds, r/PPC, r/GoogleTagManager, dated across 2022–2026 with strong 2026 recency:

- "Meta Pixel Helper not working properly" — r/FacebookAds, 2024-03-15
- "Pixel Helper found your Meta Pixel, but the pixel has not [activated]" — r/FacebookAds, 2024-02-28
- "Issue with the pixel meta" — r/FacebookAds, 2026-05-04
- "Meta Pixel Helper is killing my Mac after the update" — r/FacebookAds, 2026-03-16
- "Meta pixel helper 2026 (update) — Chrome extension" (login-prompt trust concern) — r/FacebookAds, 2026-02-11
- "Meta Pixel Helper not detecting pixel most of the time" — r/GoogleTagManager, 2025-05-12
- "Meta Pixel Helper & Shopify show pixel working, but Events [Manager] not tracking" — r/FacebookAds, 2026-05-01
- "Shopify Meta pixel installation not working" (Pixel Helper shows nothing) — r/FacebookAds, 2026-01-27
- "Problems with GTM and MetaPixel" (GTM Preview fires, Pixel Helper doesn't detect) — r/GoogleTagManager, 2025-02-21
- "Pixel helper keeps throwing the error 'detected event code...'" — r/PPC, 2022-11-22

Distinct pain clusters: false-negative detection, GTM/Shopify install conflicts, event-not-activated errors, extension performance (CPU/battery) complaints, and trust concerns about a 2026 extension update requiring login. Well above the 3-thread validation threshold, most threads <12 months old.

**Pain validated — not a kill-gate.**

---

## Rubric summary

| Dimension | Max | Score |
|---|---|---|
| Demand | 25 | 25 |
| Reachability | 25 | 14 |
| Business fit | 25 | 14 |
| AEO/data potential | 15 | 9 |
| Existing-asset bonus | 10 | 2 |
| **Total** | **100** | **64** |

## Kill-gate checklist

- SERP intent mismatch → **No** (explainer/guide format dominates contestable slots, matches planned format).
- Cannibalization → **No** existing page (verified via GSC + seed-map).
- Zero pain evidence → **No** — 10+ live threads (§6).
- Product-fit fail (category we don't play in) → **No** — tracking-hygiene content adjacent to our ICP's real workflow, not creative-production/MMP-replacement.

No critical zero (Demand 25 ≥ 8, Reachability 14 ≥ 8, Business fit 14 ≥ 8) and total 64 ≥ 60.

## Notes for `brief`

- DR gap is the real risk: our DR 2.1 vs. a current DR35–46 floor in the contestable SERP slots. Low KD (1) suggests this is winnable on content merit/information-gain, not backlinks — but treat as a content-quality bar, not a guarantee.
- Design a deliberate internal-link bridge to `/features/automation-rules` and/or `/solutions/media-buyers` ("your automation rules are only as good as your pixel signal") rather than a generic CTA — business fit is real but indirect.
- AEO angle: AI Overview for the head term already cites admanage.ai and superscale.ai — concrete displacement target, not a hypothetical.
- First-party data gap: no internal pixel-error-rate benchmark currently available — either source one before writing, or lean on public (Meta official) sources only and flag first-party as a future input request. Do not invent.

---

**VERDICT: GO**
