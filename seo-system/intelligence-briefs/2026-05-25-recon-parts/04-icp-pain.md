# Part 4 — ICP Pain Discovery (Step 6.5)

> Run: 2026-05-25
> Inputs: 6 Reddit pain-query scans + 4 Google PAA scans (US, google engine via SerpAPI)
> Scope: Meta + TikTok only (per `scalemate_channel_scope.md`); execution/automation product, NOT creative production (per `feedback_product_scope.md`)

---

## Top pains this cycle

| # | Pain (exact quote) | Source | JTBD | ScaleMate solves? | Have content? | Search queries to validate |
|---|---|---|---|---|---|---|
| 1 | "I run meta ads for a company and we spend anywhere from $30k–$200k/mo on Meta… At any given time we have between 50–300 ads" — _"Am I spending too much time in optimizing Meta ads?"_ — top comment: "automated budget redistribution based on ROAS thresholds can cut daily management time by 70–80%" | r/FacebookAds 2026-08 — 20+ comments | JTBD 1 (reduce manual ops) + JTBD 4 (centralized control) | ✅ Rules library + automation | ⚠️ partial — `/automation-rules-library` covers cheat-sheet but no "how much time should optimizing take" content | "how much time should i spend on meta ads", "meta ads time spent optimizing", "automate meta ads optimization", "facebook ads automation rules ROAS" |
| 2 | "Running into a wall lately. We have: multiple Meta + Google accounts, different clients, random Google Sheets everywhere, Slack messages + notes…" — _"How are you managing multiple ad accounts + clients"_ | r/FacebookAds 2026-03 — 10+ comments | JTBD 4 (centralized control) + JTBD 5 (transfer insights) | ⚠️ partial — Scalemate is single-org execution, multi-account support exists but agency-workflow framing is missing | ❌ no | "managing multiple ad accounts agency", "best tool for managing client meta ad accounts", "multi-account meta ads dashboard" |
| 3 | "I currently work in the lifestyle vertical of my agency managing 7 accounts (like 1.25 hours daily per client), and I'm feeling like drowning" — _"How many accounts are too many?"_ | r/PPC 2026-09 — 10+ comments | JTBD 1 (reduce manual ops) + JTBD 3 (scale without time growth) | ✅ automation rules + bulk ops | ❌ no — `/blog/best-facebook-ads-automation-tools` listicle exists but doesn't address "how many accounts can one person realistically handle" | "how many ad accounts can one person manage", "ppc account capacity per person", "scaling agency ad ops without burnout" |
| 4 | "if testing new creatives is painful because production is slow you test less and the whole thing stalls" — _"Every time I test a new creative my performance drop WHY?"_ | r/FacebookAds 2026-11 — 20+ comments | JTBD 6 (fast-scale winners) + JTBD 3 | ✅ Bulk Launch + Rules | ⚠️ partial — `/blog/creative-testing-framework` covers system, but doesn't address volume/throughput bottleneck specifically | "how to test more meta creatives faster", "creative testing throughput meta", "scale creative testing without slowing campaigns" |
| 5 | "Most 'creative testing' is just expensive guessing" — _Unpopular opinion thread_, "Launch 3-5 ads… Wait for statistical significance (or more likely, wait until budget runs out)" | r/FacebookAds 2026-08 — 20+ comments | JTBD 6 + JTBD 7 (protect budget) | ✅ rules-based winner promotion + kill timers | ⚠️ partial — framework blog exists; pain-language "expensive guessing" angle missing | "how to test creatives without wasting budget", "creative testing budget waste", "data-driven creative testing meta" |
| 6 | "Andromeda rolled out, it feels like Meta is hungry for creatives. The more variations…" — _"How many creatives are you guys actually adding per [campaign]"_ | r/FacebookAds 2026-08 — 40+ comments | JTBD 6 (fast-scale winners) | ✅ Bulk Launch (volume) | ✅ Andromeda article in pipeline §3 covers this; ensure bulk-launch volume tie-in | "how many creatives per ad set 2026", "andromeda creative volume", "creative volume meta 2026" |
| 7 | "we test a lot of creatives on Tiktok and sometimes we find winners, however…" — _"How to scale TikTok Ads?"_ | r/PPC 2024-04 — 3 comments | JTBD 6 + JTBD 3 (TikTok-scale) | ✅ Bulk Launch + Rules (TikTok in scope) | ❌ no TikTok-specific scaling content | "how to scale tiktok ads winners", "tiktok ads scaling rules", "tiktok creative winner scaling" |

---

## New pains (outside JTBD / new product signals)

| Pain | Source | Why important |
|---|---|---|
| "We have… random Google Sheets everywhere, Slack messages + notes" — ad ops fragmentation across collaboration tools | r/FacebookAds — managing-multiple-accounts thread | Adjacent to JTBD 4 (centralized control) but specifically about CROSS-TOOL fragmentation (Sheets + Slack + Ads Manager). Product signal — Scalemate could position as "single pane of glass" but currently doesn't have Slack/Sheets integration story on marketing site. Content angle: "how to stop running ad ops out of Google Sheets". |
| Media-buyer burnout = career-exit, not just productivity. _"Feeling Burnt Out as a Media Buyer"_ (50+ comments), _"Dealing with Burnout. Next career move?"_ (40+ comments) | r/FacebookAds + r/PPC, multiple threads | Burnout content sits in career/personal space — Scalemate can't pitch tooling as a burnout cure. BUT angle exists: "the 3 manual tasks burning out media buyers (and how to delete them)" — frames automation as recovery, not productivity hack. JTBD 1 adjacent. |
| "I'm not sure [angle/pain-point separation] is the fastest" — _B2B Static Creative Testing — Sizing, Structure, Kill Timers_ | r/FacebookAds 2026-11 — 3 comments | Surfaces structural-decision pain ("test by ad set or one ad set?"). Existing framework blog covers methodology but not the specific kill-timer + structure-by-angle question. Light enrichment opportunity. |
| Cross-platform spillover: "Scaling TikTok reach tanking Meta ROAS via shared pixel is sneaky signal pollution" | r/FacebookAds 2026-08 — 10+ comments | Brand-new angle on multi-platform ops Scalemate uniquely supports (Meta + TikTok). Diagnostic content angle. JTBD 7 (budget protection) + JTBD 4. |

---

## Pain → Content pipeline (queries for Step 7 validation)

**Translated search queries — flow to Part 2 keyword validation:**

- Pain #1 (time-on-optimization):
  - `how much time should i spend on meta ads`
  - `automate meta ads daily optimization`
  - `meta ads time saving rules`

- Pain #2 (multi-client agency):
  - `managing multiple meta ad accounts agency`
  - `client ad account dashboard meta`
  - `multi-account meta ads management`

- Pain #3 (capacity per person):
  - `how many ad accounts can one person manage`
  - `ppc agency account ratio`
  - `media buyer account capacity`

- Pain #4 (creative throughput bottleneck):
  - `how to test more meta creatives faster`
  - `meta creative testing throughput`
  - `scale creative volume meta`

- Pain #5 ("expensive guessing"):
  - `data-driven creative testing meta`
  - `creative testing without wasting budget`
  - `stop guessing creative testing meta`

- Pain #6 (Andromeda volume) — already covered by `meta-andromeda-update` (pipeline §3); confirm bulk-launch internal link.

- Pain #7 (TikTok winner-scaling):
  - `how to scale tiktok ads winners`
  - `tiktok ads scaling automation rules`
  - `tiktok creative winner promotion`

**New-pain queries (outside JTBD):**

- Fragmentation pain → `ad ops google sheets workflow`, `single source of truth meta ads`, `stop managing ads in spreadsheets`
- Cross-platform signal pollution → `tiktok pixel meta roas drop`, `multi-platform ad attribution leak`, `cross-platform ad ops diagnostics`

---

## Pipeline dedup check

Already in pipeline.md sections 1-9 (SKIPPED):
- `meta-andromeda-update` (§3) — covers Pain #6
- `automation-rules-library` (§8 published) — partially covers Pain #1
- `/blog/creative-testing-framework` (§8) — partially covers Pain #4, #5
- `/blog/best-facebook-ads-automation-tools` (§8) — partially covers Pain #1, #3
- `scale-creative-volume-without-designers` (§9 rejected) — DO NOT re-propose; was creative-production pain

New opportunities (NOT in pipeline) most worth adding:
1. **Multi-account agency workflow** (Pain #2) — gap, ICP-strong (agencies = repeat-spend ICP)
2. **TikTok winner-scaling automation** (Pain #7) — gap, TikTok-in-scope, JTBD 6 native fit
3. **"Data-driven creative testing without wasting budget"** (Pain #5) — angle gap on existing cluster

---

## Google PAA — supplemental questions surfaced

From PAA scans (problem-language queries):

- "Why are my Meta ads running but very slowly?" — JTBD 1 adjacent, useful as FAQ in automation-rules or troubleshooting
- "What is the 3-2-2 method in Facebook ads?" — recurring across multiple queries — high-volume framework question; potential FAQ enrichment for creative-testing-framework
- "How to test meta ad creatives?" — direct method query — already covered by creative-testing-framework blog; verify internal linking
- "How to scale successful ad campaigns?" — direct match for Pain #7 and multi-platform scaling angle
- "What is the 3-3-3 rule in marketing?" — recurring framework question; AEO opportunity
- "Is $10/day enough for Facebook ads?" — small-budget pain — outside ICP (we target $30K+/mo spenders)

---

## Tool failures

- 1 SerpAPI call ("how to scale ad campaigns without hiring") returned 70K-char payload exceeding harness limit. Extracted PAA via filesystem grep — only 4 PAA questions recovered; full organic list not parsed. PAA captured above. Other 9 calls completed cleanly.
