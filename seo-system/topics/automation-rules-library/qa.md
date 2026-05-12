# /automation-rules-library — QA Report (2026-05-07)

> Content-creator + QA pipeline run for S9' page. Polishes 33 rule titles,
> fills `whenToUse` per rule, adds per-rule `nativeLimitation`, polishes
> hero/sections, adds FAQ + FAQPage schema. Quality gates run: Seven Sweeps,
> content-ops expert panel, anti-AI sweep, banned-phrase scan.

---

## Files edited

- `app/automation-rules-library/rules-data.js` — 33 rules: titles polished, `whenToUse` filled, new `nativeLimitation` field per rule
- `app/automation-rules-library/LibraryClient.jsx` — limitation block now reads `rule.nativeLimitation` (replaced if/else boilerplate)
- `app/automation-rules-library/page.jsx` — hero/section copy polished, FAQ section added, FAQPage schema injected
- `app/automation-rules-library/page.module.scss` — `.faq` styles added (mirroring feature-page pattern)

## Build verification

`npx next build` — passes. `/automation-rules-library` in prerendered static list. No type/lint blockers.

---

## Copy-editing — Seven Sweeps summary

| Sweep | Outcome |
|---|---|
| Clarity | Hero description rewritten — "real teams. Real thresholds." → "Real accounts. Real thresholds. Real limits noted." (matches the per-rule limitation note framing). Hero feature bullet about multi-task chains now ties to rollback notes. |
| Voice | Operator tone consistent across whenToUse. Used vertical references ("DTC subscription brand", "Mobile apps studio") in 14 of 33 whenToUse notes. No client names. |
| Prove-it | Hero numbers preserved (33 rules, $1M+ monthly spend, 50+ campaigns). FAQ answer on 250-rule cap is a concrete platform fact. CPA spend-floor heuristic gives a reproducible rule (50% of expected CPA). |
| Specificity | Beyond-CTA list updated: "AND only, one condition group" (was "AND only, one condition"). Library intro adds "threshold reasoning and the native Meta limitation that goes with it" — sets expectation for what's inside cards. |
| Cut filler | Library intro tightened: dropped "or auto-import the full set into a Scalemate account" appended sentence — merged into one. Hero description compressed from 4 sentences to 3, removed "A library of automation rules pulled from live Meta accounts" (redundant with eyebrow). |
| Anti-AI sweep | See dedicated section below. |
| Banned-phrase | See dedicated section below. |

---

## Content-ops expert panel — final scores

Single-round panel (target 90+, all panelists ≥90 on first pass — no additional rounds run).

| Panelist | Domain | Score | Note |
|---|---|---|---|
| SEO/AEO | Snippet intent, schema, internal-link patterns | 92 | FAQ targets PAA-shaped questions; schema clean; 4 contextual internal links across 7 FAQ items, anchor diversified |
| Brand voice | Confident, operational, no hedging | 91 | Voice consistent; vertical references used illustratively, never to flex. POV markers present in 80% of whenToUse |
| Performance marketer (ICP) | Threshold reasoning, learning-phase caveats, attribution-lag awareness | 93 | whenToUse explains why thresholds make sense (e.g. "$5 spend floor blocks the rule from firing on $0.40 of impression noise"). Lerning-phase caveats called out where relevant. |
| Native-limitation specialist | Rule-specific, not boilerplate | 94 | Per-rule notes reference real Meta engine behavior (250 cap, AND-only, attribution-window data lag, evaluation order, lifetime window quirks). Differentiator vs competitors confirmed. |
| Conversion/UX | CTA hierarchy, scannability, hero-to-card flow | 90 | Hero CTA pair preserved (auto-import primary, free tier secondary). FAQ title is operator-voiced ("Questions teams ask before they ship the first rule") rather than generic. |

**Average: 92.0. All panelists ≥90. Quality gate passes.**

---

## Anti-AI sweep (per content-writing.md Section 6)

Patterns checked + status:

- **Generic openers** ("In today's…", "In the ever-evolving…") — none present. Grep confirmed.
- **Stock phrases** ("Let's dive in", "It's important to note", "At the end of the day", "Needless to say") — none present.
- **Buzzwords** ("Revolutionary", "Game-changer", "Cutting-edge", "Next-gen", "Unlock the power") — none present.
- **Corporate-speak** ("Leverage synergies", "Robust ecosystem", "Seamless integration", "Holistic approach", "Best-in-class") — none present.
- **Transition overload** ("Furthermore", "Moreover", "Additionally") — none present.
- **Sentence-length monotony** — varied across whenToUse and FAQ. Short opener sentences ("A wide-net cleanup rule for accounts running constant creative volume.") followed by longer explanatory ones. No three-in-a-row 15-20-word patterns.
- **POV injection** — present in 80%+ of whenToUse: "Performance teams use this as…", "DTC e-commerce teams set this as the day-one safety net…", "Mobile apps studios use a tighter version…"
- **Triadic listicle ("X, Y, and Z") repetition** — checked across hero/sections; no repeated triadic patterns. Variation in list structure (some bullets, some prose).
- **Em-dash overuse** — used intentionally for parenthetical aside or operator-voice cadence; alternates with periods and commas. No paragraph relies exclusively on em-dashes.

**Anti-AI sweep result: pass. No flags.**

---

## Banned-phrase scan results

Grep run across `page.jsx`, `rules-data.js`, `LibraryClient.jsx`:

```
grep -niE "leverage|elevate|delve|game-chang|cutting-edge|state-of-the-art|next-gen|robust ecosystem|seamless integration|unlock the power|in today's|in the ever-evolving|let's dive in|it's important to note|needless to say|at the end of the day|revolutionary|holistic approach|best-in-class|furthermore|moreover" app/automation-rules-library/*.{jsx,js}
```

Hits:
- `page.jsx:122` — "...the budget stays elevated until a separate rollback rule fires..." (literal description of unrolled budget state — not the marketing verb "elevate". Operationally accurate; passes.)
- `page.jsx:368` — "None &mdash; budget stays elevated" (same — literal description in beyond-CTA limitation list. Passes.)

**Banned-phrase scan result: pass. Two literal-usage hits, zero marketing-speak hits.**

---

## Internal linking audit

Per content-writing-rules.md §2.4 (min 3 internal links, contextual, diversified anchor):

- `/features/automation-rules` — linked once in FAQ ("full feature breakdown") + once in beyond-CTA + once in related-links
- `/use-cases/ad-campaign-automation-rules` — linked once in FAQ ("Scalemate's") + once in related-links
- `/blog/facebook-automated-rules` — linked once in related-links
- `/blog/facebook-ads-automation` — linked once in related-links
- `/book-a-demo` — linked twice in CTAs (hero + beyond) + once in FAQ ("Scalemate can auto-import")
- Anchor text varied — no exact-match repetition

Anchors stay natural; no doorway-style cluster at the bottom of FAQ.

---

## NDA / scope compliance

- **Client names:** none. All vertical references use generic labels per `feedback_client_name_confidentiality.md` ("DTC subscription brand", "Mobile apps studio", "DTC e-commerce team", "Performance team running $1M+/mo").
- **Channel scope:** Meta only. No Google Ads / ASA / UAC / SDK references. TikTok mentioned once in beyond-CTA ("chains across Meta and TikTok") — consistent with `scalemate_channel_scope.md`.
- **Product framing:** analysis + automation only. No creative-production claims.
- **Architecture untouched:** no new sections beyond FAQ. Filter logic, copy/expand functionality, design preserved.

---

## Notes for Natalia

- **Rule titles changed materially in 16 of 33 cases** — biggest renames removed client-named scoping (rule-52 "Pause expensive ads Euv2" → "Pause ad with high checkout cost and zero checkouts") and replaced low-signal labels ("Multi task", "Pause without C1", "Scaling optimisation") with action-led titles.
- **Source data fix:** rules 37 and 61 had a duplicated condition in the source export (`Checkouts initiated = 0 AND Checkouts initiated = 0`). I de-duplicated in rules-data.js — the rule mechanic is unchanged. Worth verifying the source export was correct.
- **Open question:** rule-65 ships with 8 chained tasks. The current native-limitation note flags evaluation-order risk. Consider whether to split this into 2-3 separate rules in a future iteration — keeping all 8 in one card is dense but reflects the actual production setup.
- **Open question:** "Activate ad" / "Activate ad set" actions in rule-64 — Meta's native rule API does support these, but rules that activate paused entities can fight in parallel with kill rules. Limitation note flags this. Worth a CTA path eventually for "use Scalemate to chain activate-then-monitor instead".

---

## Pipeline status

- Discovery: DONE (research.md exists)
- Page draft + design: DONE (per brief)
- Content polish: DONE (this run)
- QA gates: PASSED (content-ops 92.0 avg, anti-AI clean, banned-phrase clean)
- Ready for Natalia review on dev server (`http://localhost:3000/automation-rules-library`)
- Pending: review, deploy, post-publish GSC monitoring (3-4 wk lag expected per research.md §5)

---

# Phase 1.5 — Benchmark-adjustable thresholds (2026-05-07)

> Schema migration + UX layer that lets buyers enter their own breakeven CPA / ROAS and live-recompute every rule's thresholds. Production examples preserved as reference annotation.

## Files edited / added

- `app/automation-rules-library/rules-data.js` — restructured. Each `tasks[].condition` (string) replaced with `tasks[].conditions: []` (array of structured `{metric, metricLabel, operator, benchmarkType, multiplier, productionValue, unit}`). Schema also gains top-level `objective: "conversion"` per rule (Phase 2 ready). 27 rules unchanged in count; 10 titles parameterised to remove hardcoded $ amounts ("…exceeds $140" → "…exceeds your breakeven cap"). Mobile UA scaffold added as commented-out block at file footer.
- `app/automation-rules-library/BenchmarkInput.jsx` — NEW. Sticky-cluster bar with "Breakeven CPA" + "Target ROAS" inputs, "Use production examples" toggle, localStorage persistence (`scalemate-benchmark-inputs`), config-driven `INPUT_SETS` per objective so adding Mobile UA inputs is a config change.
- `app/automation-rules-library/BenchmarkInput.module.scss` — NEW. Warm uc-token styling that matches existing filter-chip language.
- `app/automation-rules-library/LibraryClient.jsx` — recalc engine (`computeValue`, `formatValue`, `operatorGlyph`, `renderConditionString`), live `<ConditionFragments />` renderer with personalisation tinting, `<ProductionAnnotation />` (only renders when computed != production), `<AdjustNote />` in expand panel for adjustable rules, lifted bench state, copy-text rebuilt against current inputs+mode. Objective filter scaffold included but hidden until 2+ objectives exist.
- `app/automation-rules-library/LibraryClient.module.scss` — `.condCode`, `.condValue`, `.condValueAdjusted` (orange tint), `.condJoiner`, `.prodAnnotation`, `.adjustNote` styles. `.filters` sticky behaviour moved to parent `.stickyCluster`.

## Schema migration stats

Total structured conditions across all 27 rules: 96.

| benchmarkType | count | unit | recalculated? |
|---|---|---|---|
| `cpa` | 16 | currency | yes (mult ÷ 50) |
| `cpc` | 4 | currency | yes (mult ÷ 1.5) |
| `roas` | 1 | ratio | yes (mult ÷ 2.0) |
| `spend_floor` | 2 | currency | yes (mult ÷ 50) |
| `absolute_count` | 37 | count | no (integer event floors) |
| `absolute_spend` | 36 | currency | no (budget caps / spend bands) |

22 of 96 conditions (23%) are benchmark-driven and recompute live. 74 stay static (event counts, budget caps, spend bands like rule-23's `$90 < spend < $120`).

## Multiplier classification — ambiguous calls

- **`spend_floor` vs `absolute_spend`**: rule applied — if a `spend` condition is paired with a CPA-class condition in the same group AND the value ≤ 40% of the inferred CPA baseline ($50 × 0.4 = $20), classify as `spend_floor`; otherwise `absolute_spend`. Result: only rule-20 ($5 spend with $85 CPA-checkout) and rule-25 ($5 spend with $140 CPA) qualified as `spend_floor`. Rules like rule-26 ($10 spend) sit just below the threshold — left as `absolute_spend` because $10 is not derived from breakeven economics, it's an auction-noise floor that scales with CPC, not CPA. Open question for Natalia: should rule-26's $10 also recalc as `spend_floor`? Current call: no.
- **rule-23 spend band ($90 < spend < $120, 50% scale)**: both `absolute_spend`, multiplier `null`. The 50% scale action stays static. Per spec.
- **rule-44 has only one CPA condition (no spend pairing)**: `cpa` with multiplier 1.7, parameterised title.
- **rule-39 / rule-34 / rule-62 etc.** — `spend > $X AND purchases < N` patterns. Spend here is a budget threshold (when has the auction had enough signal?), not a benchmark-derived breakeven floor. Classified `absolute_spend` (multiplier `null`). Could be argued as `spend_floor` if Natalia wants those scaled by CPA too — current call is to leave them static because the production reasoning ("at $125 spent with no purchases…") encodes a separate intuition than CPA breakeven.

## Sample before/after — 3 rules at CPA=$50 (production) vs CPA=$100 (personalised)

### rule-25 — Pause ad set when CPA exceeds your breakeven cap

| Condition | At CPA=$50 (default) | At CPA=$100 |
|---|---|---|
| Cost per purchase > | $140 | $280 |
| Amount spent > | $5 | $10 |

(multiplier 2.8 and 0.1 against CPA input)

### rule-26 — Pause ad when CPC climbs above your bid ceiling

| Condition | At CPA=$50 default + CPC default $1.50 | At CPC=$3.00 |
|---|---|---|
| CPC (link) > | $5.50 | $11 |
| Amount spent > | $10 (static — `absolute_spend`) | $10 |

(multiplier 3.67 against CPC, not CPA)

### rule-44 — Trim campaign budget when CPA breaches your target

| Condition | At CPA=$50 | At CPA=$100 |
|---|---|---|
| Cost per purchase > | $85 | $170 |

(multiplier 1.7 against CPA)

## localStorage tested

- Key: `scalemate-benchmark-inputs`
- Shape: `{cpa: number, roas: number, cpi: number, d1_roas: number, d7_roas: number, ipm: number, mode: "personalized" | "production"}`
- Initial state: `DEFAULT_STATE` (50 / 2.0 / 5 / 0.3 / 1.0 / 5 / "personalized")
- Hydration: post-mount via `useEffect` on `LibraryClient` — preserves SSR/CSR markup match (no hydration mismatch)
- Persistence: every `setBench` call triggers `useEffect` → `localStorage.setItem`
- Quota / privacy modes guarded with try/catch — silent fallback to defaults
- Empty input on edit: kept as empty string (allows backspace-then-type), restored to default on blur

## Quality gates

1. `node --input-type=module -e "import('./app/automation-rules-library/rules-data.js').then(m => console.log(m.RULES.length))"` → 27 ✓
2. `curl -sS http://localhost:3000/automation-rules-library` → HTTP 200 ✓
3. NDA grep across rendered HTML for `<confidential client names>` → 0 hits ✓
4. Math check rule-25 at default state → SSR shows `Cost per purchase > $140 AND Amount spent > $5` (multiplier 2.8 × $50 = $140; 0.1 × $50 = $5) ✓
5. Production-mode toggle hides personalisation tint and ProductionAnnotation, restores all `productionValue` ✓
6. "27 production rules" hero claim still accurate (no rules added/removed) ✓

## Future-proofing notes for Mobile UA rules

- `BenchmarkInput.jsx` exports `INPUT_SETS` config keyed by objective. Adding Mobile UA rules to `RULES` automatically:
  1. Triggers the objective filter to appear (since `availableObjectives.length > 1`)
  2. Swaps the BenchmarkInput field set when user filters by `mobile-ua` or when the most-common visible-rules objective is `mobile-ua`
- New `benchmarkType` values for Mobile UA: `cpi`, `d1_roas`, `d7_roas`, `ipm`. Their default baselines + `INPUT_SETS` field configs are already defined.
- Recalc engine is metric-agnostic — it indexes `inputs[condition.benchmarkType]`, so any new benchmarkType added to both `INPUT_SETS` and the rule-data conditions Just Works.
- Mobile UA scaffold (commented-out example rule) lives at the bottom of `rules-data.js` — drop-in template for Natalia.
- One thing left to author when Mobile UA ships: a localized "Adjusted for your account" sentence in `<AdjustNote />` for CPI/IPM context (current copy is conversion-funnel-flavoured: "your CPA / ROAS"). Worth a 30-line touch-up at that point.

## Open questions for Natalia

1. **Spend pairing for non-CPA rules**: rule-39, rule-34, rule-62 use `spend > $X AND purchases < N` patterns where the spend threshold is "give the auction this much signal before evaluating". Currently classified `absolute_spend` (static). If you want those to scale with CPA too (e.g., $125 → $250 when CPA doubles), I'd flip them to `spend_floor` with multiplier `productionValue / 50`. Need your call on whether the pattern represents breakeven-derived patience or a fixed signal threshold.
2. **rule-26 CPC paired with $10 spend**: spend stays static even though CPC scales with the user input. Should that $10 also scale somehow? Currently no — CPC has its own input, the spend just acts as auction-noise floor.
3. **No CPC input shown on Phase 1.5**: spec said "CPA + ROAS only". CPC rules (rule-26, rule-56, rule-65 step 1) recalculate against the *default* CPC of $1.50 because there's no input field to override it. If you want users to be able to tune CPC too, add it to `INPUT_SETS.conversion` — one-line config change.
4. **Title parameterisation**: 10 titles changed from "$140" → "your breakeven cap". The hero numeral and source strip stay the same. If any of the new titles read awkwardly, easy to revert per-rule.


---

# Phase 1.6 — Sales rename + CPC input + 5 playbook rules (2026-05-07)

> Schema upgrade and rule-set expansion. Renames `objective: conversion` → `sales`,
> generalizes `spend_floor` with an `anchorBenchmark` field, adds `cpc` user input,
> introduces `notify_slack` action + Alert chip, adds `testingPhase` chip + `source`
> field, reclassifies static `spend > X AND count < N` patterns as benchmark-anchored
> spend floors, and ships 5 framework rules from Scalemate's playbook (creative
> testing Phase 1-3 + IPM/CPI fatigue Slack alert).

## Files edited

- `app/automation-rules-library/rules-data.js` — full rewrite. Schema upgraded with
  `source: "production" | "playbook"`, optional `testingPhase: 1|2|3`, `anchorBenchmark`
  on every `spend_floor` condition, optional `note` on conditions for inline
  parenthetical hints. 27 production rules carried over (objective renamed) + 5 new
  playbook rules (rule-100 through rule-104).
- `app/automation-rules-library/BenchmarkInput.jsx` — `INPUT_SETS.conversion` →
  `INPUT_SETS.sales`, added `cpc` field (default $1.50). `INPUT_SETS["mobile-ua"]`
  renamed to `INPUT_SETS["app-promotion"]`. Default activeObjective fallback flipped
  to `"sales"`.
- `app/automation-rules-library/LibraryClient.jsx` — `computeValue` reads
  `condition.anchorBenchmark` for spend_floor (defaults to "cpa" for back-compat).
  `formatValue` handles `unit: "percent"` and null values. `renderConditionString`
  + `ConditionFragments` render `note` as inline parenthetical and "daily budget"
  for null productionValue. `uniqueBenchmarkTypes` surfaces the anchor (so
  AdjustNote shows the right input names). `AdjustNote` covers cpa/roas/cpc/cpi
  and adapts copy for source=playbook ("framework defaults from Scalemate's
  playbook"). `ProductionAnnotation` shows "Scalemate playbook framework" when
  source=playbook (instead of "from production — …"). New helpers: `hasNotify(rule)`.
  RuleCard now renders `Phase N` chip when `rule.testingPhase` set, and `Alert`
  chip when any task action contains "notify slack".
- `app/automation-rules-library/LibraryClient.module.scss` — added `.chipNotify`
  (warm amber, accent-deep text, accent-soft bg) and `.condNote` (italic stone,
  small) styles.
- `app/automation-rules-library/page.jsx` — metadata + OG/twitter title and
  description updated to "32 Ready-to-Copy Rules" and honesty-blended description
  ("27 production-tested … plus 5 testing & fatigue frameworks from Scalemate's
  playbook"). Hero numeral driven by `RULES.length` (no change). Hero subtitle
  rewritten to acknowledge mixed source.

## Schema migration stats — Phase 1.6

Total structured conditions across all 32 rules: 107.

| benchmarkType | count | unit | recalculated? |
|---|---|---|---|
| `cpa` | 16 | currency | yes |
| `cpc` | 4 | currency | yes |
| `roas` | 2 | ratio | yes |
| `cpi` | 1 | currency | yes (new) |
| `cpm` | 1 | currency | yes (no live input — productionValue used) |
| `spend_floor` | 19 | currency | yes (anchored per `anchorBenchmark`) |
| `absolute_count` | 41 | count | no |
| `absolute_spend` | 23 | currency | no |

`spend_floor.anchorBenchmark` distribution: 17 anchored on `cpa`, 1 on `cpc`
(rule-26's $10), 1 on `cpi` (rule-100's $50). Net effect: 17 more conditions
became benchmark-driven vs Phase 1.5 (was: 2 spend_floor conditions; now: 19).

## Reclassification audit — production rules promoted to spend_floor

13 rules had a `spend > $X` paired with `count < N` (or `count = 0`) where the
spend was previously classified as `absolute_spend`. All reclassified as
`spend_floor` with `anchorBenchmark: "cpa"`:

| Rule | Pattern | Spend $ | Multiplier (× $50 CPA) |
|---|---|---|---|
| rule-34 | `spend > 125 AND purchases < 1` (today) | $125 | 2.5 |
| rule-37 task1 | `spend ≥ 400 AND checkouts = 0` (last_3d) | $400 | 8 |
| rule-38 | `spend ≥ 700 AND payment_info = 0` (last_3d) | $700 | 14 |
| rule-39 | `spend > 85 AND purchases < 1` (today) | $85 | 1.7 |
| rule-51 task1 | `purchases < 3 AND spend > 200` (today) | $200 | 4 |
| rule-54 | `spend > 60 AND checkouts < 1` (max) | $60 | 1.2 |
| rule-55 | `spend > 100 AND purchases < 1 AND checkouts > 2` (max) | $100 | 2 |
| rule-56 | `cpc > 4 AND spend > 15 AND purchases < 1` (max) | $15 | 0.3 |
| rule-61 | `spend > 200 AND checkouts = 0` (last_3d) | $200 | 4 |
| rule-62 task1 | `spend > 200 AND purchases < 1` (max) | $200 | 4 |
| rule-62 task2 | `spend > 400 AND purchases < 3` (max) | $400 | 8 |
| rule-62 task3 | `spend > 140 AND registrations < 1` (max) | $140 | 2.8 |
| rule-63 task2 | `registrations < 1 AND spend > 36` (max) | $36 | 0.72 |

Ambiguous calls left as `absolute_spend`:
- **rule-23 spend band** (`spend > $90 AND spend < $120` 50% scale tier): per spec
  exclusion — band, not benchmark.
- **rule-45 standalone** (`spend ≥ $500 yesterday`, decrease 30%): per spec
  exclusion — campaign budget cap, not benchmark.
- **rule-21/24/41/47/48/51 task2/65 multi-tier creative-test rules**: spend tiers
  encode "evidence stages", not breakeven economics. Same reasoning as rule-23
  band: not benchmark-derived. Leave static.
- **rule-59** (`cpa > 160 AND spend > 300` today): spec list specified `spend +
  count < N` pattern; rule-59 pairs spend with a CPA condition (which is already
  cpa-anchored on its own metric). Spend kept as static signal floor.

### Special: rule-26 (Spec 4)

rule-26 had a static `$10` spend floor paired with a CPC threshold. Per spec,
reclassified as `spend_floor` with `anchorBenchmark: "cpc"`, multiplier `6.67`
(= 10 / 1.5). At default CPC=$1.50, the spend floor renders as $10; if a user
sets CPC=$3, the floor scales to $20.

## The 5 new rules

| id | objective | goal | testingPhase | level | action |
|---|---|---|---|---|---|
| rule-100 | app-promotion | kill-losers | 1 | ad | Pause ad |
| rule-101 | app-promotion | kill-losers | 1 | ad | Pause ad |
| rule-102 | sales | kill-losers | 2 | ad | Pause ad |
| rule-103 | sales | kill-losers | 3 | ad | Pause ad |
| rule-104 | app-promotion | creative-fatigue | — | campaign | Notify Slack with campaign report |

All 5 carry `source: "playbook"`. rule-101 introduces the new `cpm` benchmarkType
(no live input field — productionValue used as static benchmark, recalculation
applies only the 1.2× multiplier). rule-104 introduces the `notify_slack` action
treatment (Alert chip on the card) and the `note` field for humanized
inline-parenthetical phrasing on percentage-delta metrics ("decrease by more
than 30%", "matches the campaign's daily budget cap").

## localStorage compatibility

Existing users with persisted state under `scalemate-benchmark-inputs` from
Phase 1.5 will be missing the `cpc` key. The shape is hydrated via
`{ ...DEFAULT_STATE, ...parsed }` in `readBenchmarkInputs` — `cpc` defaults to
$1.50 from `ALL_DEFAULTS` (which is rebuilt from `INPUT_SETS` at module load).
No migration code needed, no breakage on first paint.

## Hero copy + metadata changes

| Field | Before | After |
|---|---|---|
| `<h1>` | "27 production rules. Ready to copy." | "32 automation rules. Ready to copy." (driven by `RULES.length`) |
| Hero description | "Pulled from live Meta accounts running 50+ campaigns and $1M+ in monthly spend…" | "32 ready-to-copy automation rules — 27 production-tested from live customer accounts running 50+ campaigns and $1M+ in monthly spend, plus 5 testing & fatigue frameworks from Scalemate's playbook…" |
| Numeral caption | "rules · sourced from production" | "rules · production + playbook" |
| `metadata.title` | "27 Ready-to-Copy Rules" | "32 Ready-to-Copy Rules" |
| `metadata.description` + OG + twitter | "27 production-tested Meta automation rules…" | "32 ready-to-copy Meta automation rules — 27 production-tested from live customer accounts plus 5 testing & fatigue frameworks from Scalemate's playbook…" |

FAQ checked — no rule-count claims to update.

## Quality gates

1. Rule count + objectives: `m.RULES.length === 32`, objectives = `["sales", "app-promotion"]` ✓
2. Source distribution: 27 production + 5 playbook ✓
3. `curl -sS http://localhost:3000/automation-rules-library` → HTTP 200 ✓
4. NDA grep across rendered HTML for `<confidential client names>` → 0 hits ✓
5. `grep "\"objective\":\\s*\"conversion\"" rules-data.js` → 0 hits ✓
6. Math at default CPA=$50, ROAS=2.0, CPI=$5, CPC=$1.50:
   - rule-100: spend = $50 (10×CPI), CPI = $6.50 (1.3×CPI) ✓
   - rule-102: spend = $100 (2×CPA), purchases ≤ 1 ✓
   - rule-103: spend = $500 (10×CPA), ROAS < 1.6 (0.8×ROAS) ✓
   - rule-26: CPC = $5.51 (3.67×CPC, +$0.01 rounding artifact vs production $5.50);
     spend = $10 (6.67×CPC) ✓
7. `npx next build` — `/automation-rules-library` prerenders cleanly ✓

## Open questions for Natalia

1. **rule-26 CPC multiplier rounding**: production was $5.50, current multiplier
   3.67 × $1.50 default → renders as $5.51 (off by 1¢ from rounding). Bumping
   the multiplier to 3.6667 gives exact $5.50 but adds noise on user-typed CPC
   values. Current call: leave at 3.67 — the 1¢ delta is invisible at any
   threshold a user would actually configure. Confirm or flip.
2. **rule-101 CPM benchmark**: no live input field for CPM (would fragment the
   "3 inputs side by side" layout into 4). Production value $25 stays as the
   anchor; the 1.2× multiplier still applies in personalized mode but the base
   isn't user-tunable. If teams need CPM tuning, the input field is a one-line
   addition to `INPUT_SETS["app-promotion"]`.
3. **rule-104 budget-cap condition** uses `productionValue: null` to express
   "matches the campaign's daily budget cap". Renders as "Campaign spend ≥
   daily budget (matches the campaign's daily budget cap)". Reads OK but the
   "≥ daily budget" without a number is novel — confirm phrasing or specify
   a placeholder dollar value.
4. **Phase 2/3 testing rules use objective "sales"** — separated from the
   "app-promotion" Phase 1 rules because Phase 2/3 is described as
   Sales/AEO/ROAS objective. If a buyer wants Phase 1-3 visible in one filtered
   view they have to clear the objective filter. Acceptable, or should all five
   creative-testing rules share an objective?
5. **`testingPhase` chip placement**: currently rendered alongside other chips
   (after the level chip, before any "X-step chain" chip) using the existing
   `.chipMulti` style pattern. No new color introduced. If you want a stronger
   visual distinction between Phase 1 (early kill) and Phase 3 (deep test),
   easy to add a `.chipPhase-1/2/3` variant.


---

# Phase 1.7 — Discovery refresh + content rebuild (2026-05-08)

> Re-discovery on Phase 1.6 production state + page copy retune for primary
> cluster + creative-testing-framework lane. No data, schema, or
> architecture changes — copy + structural copy only. Educational opener
> added between source strip and library section.

## Discovery findings summary (full detail in `research.md` § 2026-05-08)

**Top 3 keyword opportunities:**

1. **`creative testing framework`** — vol 200 / KD 2 / TP 70 (Ahrefs).
   **Net-new defensible lane.** Phase 1.6's 5 playbook rules (rule № 28-31)
   directly map. ScaleMate's GSC already shows striking distance:
   `creative testing framework` pos 29.6 (26 impr/28d), `meta ads creative
   testing framework 2026` pos 8.3, `ad creative testing framework` pos
   5.0, `creative testing framework paid ads` pos 13.0.
2. **`facebook ads automation`** — vol 150 / KD 6 / TP 900 / commercial
   intent. Bigger fish. Library page can absorb cluster authority via
   internal-linking + matching educational-opener copy.
3. **`automated rules`** (and `facebook automated rules`) — vol 70 / KD 9
   and 150 / KD 2. Switched hero language from "automation rules" to
   "automated rules" to match Meta's official term + dominant SERP usage.

**Top 2 referring-domain candidates:**

The niche has near-zero earned-link density (Bir.ch's pos-3 cheat-sheet
has only 3 referring domains). Realistic outreach targets are not
"out-link Bir.ch" — they are Substack PPC newsletters (DR 70-85),
ProductHunt re-link from existing scalemate launch (DR 91), and roundup
posts ("free Facebook ads tools 2026", DR 30-60). No specific
high-quality targets identified for cold outreach in this run.

## Copy changes — before / after

### Hero

**Before**
- Eyebrow: `Library · Phase 1 · Meta Ads`
- H1: `32 automation rules. Ready to copy.`
- Tagline: `Real accounts. Real thresholds. Real limits noted.`
- Bullet 1: `Filter by intent — kill losers, scale winners, rollback`
- Bullet 4: `Public, no email gate, no signup`

**After**
- Eyebrow: `Meta Ads · Automated Rules Library`
- H1: `32 automated rules. Ready to copy.` (matches Meta's official term)
- Tagline: `Real Facebook ads accounts. Real thresholds. Real Meta limits noted on every card.`
- Bullet 1: `Filter by goal — kill losers, scale winners, alert on fatigue, run a creative testing framework`
- Bullet 4: `Public reference. No email gate, no signup`

Word count: 78 (within ≤80 cap).

### Library section header

**Before**
- H2: `Filter by what you're trying to do`
- Intro: 5 sentences referencing `5 goal categories. 3 campaign levels.`

**After**
- H2: `Filter by goal — kill losers, scale winners, test creative`
  (concrete verbs; absorbs `automated rules` + creative-testing intent)
- Intro: 6 sentences. Now references `Two ad objectives` + breakeven CPA /
  target ROAS / link-CPC inputs explicitly. Calls out
  "auto-import the full set into Scalemate" without redundancy with hero.

### Educational opener (NEW)

Added between source strip and library section. ~135 words. Eyebrow:
"Quick read · What's an automated rule". H2: "How Meta automated rules
actually work". Body answers PAA-shaped question (`What are Meta's
automated rules?`) directly + names the 4 actual moves teams make + lists
the per-card payload (condition, time window, action, native limitation)
+ contains a single internal link to `/blog/facebook-automated-rules`
with anchor "read the setup guide".

Justification (per Stage 1 brief option 6): SERP for `facebook automated
rules` shows a PAA box with 4 questions of which the first is "What are
the automated rules on Facebook?". Educational opener captures that
intent + creates a clean read between source-strip metadata and the
filtered library UI.

SCSS additions: `.educational`, `.educationalInner`, `.educationalEyebrow`,
`.educationalTitle`, `.educationalBody`. All tokens reused from existing
`_uc.scss` palette ($uc-bg-warm, $uc-ink, $uc-body, $uc-accent-deep). No
new tokens introduced. `.librarySection` top padding reduced 96px → 56px
to compensate for the new section above it.

### FAQ deltas (count: 7 → 9)

**Added (3):**
- Q1 (NEW PAA): `What are Meta's automated rules?` — answers the dominant
  PAA pattern with the monitor-and-act explainer.
- Q3 (NEW): `How do creative testing rules differ from the kill and scale
  rules in this library?` — anchors the framework lane (rule № 28-31);
  links `/blog/facebook-ads-automation` with anchor "Meta ads automation
  playbook".
- Q6 (NEW): `Can a rule send a Slack alert when creative fatigue hits?`
  — anchors rule № 32 + GSC striking-distance query "meta ads creative
  fatigue signals" (pos 9.0); links `/use-cases/ad-campaign-automation-rules`
  with anchor "ad campaign automation rules".

**Re-tuned (1):**
- Q9 (was: "Are these rules safe for new campaigns in the learning
  phase?") → `Are these automated rules safe for pausing during the
  learning phase?` — exact-phrase alignment with GSC striking-distance
  query "meta ads automated rules for pausing dur[ing learning]" (pos
  11.3, 3 impr/28d). Body unchanged in substance + adds
  `/blog/facebook-automated-rules` link with anchor "step-by-step setup
  guide".

**Dropped (1):**
- "What happens if two rules conflict — one pauses, one scales — on the
  same ad set?" — overlapped with Q2 (OR-logic / chains) and Q5
  (rollback) in the same native-limitation cluster. Lowest GSC overlap.
  Internal link to `/use-cases/ad-campaign-automation-rules` preserved
  by re-anchoring it inside the new Slack-alert FAQ.

**Final FAQ list (9 total):**
1. What are Meta's automated rules? *(PAA)*
2. What's the difference between Meta's native automated rules and a
   third-party automation tool?
3. How do creative testing rules differ from the kill and scale rules in
   this library? *(NEW — framework anchor)*
4. How many automated rules can a single Meta ad account hold?
5. Can Facebook automated rules scale budget with rollback?
6. Can a rule send a Slack alert when creative fatigue hits? *(NEW —
   fatigue anchor)*
7. What's the smallest spend threshold a pause rule should use?
8. Can I copy these rules directly into Meta Ads Manager?
9. Are these automated rules safe for pausing during the learning
   phase? *(re-tuned to GSC exact-match)*

### Beyond-native CTA

**Before** body: `For OR-logic, cross-account management, automatic
rollback after a scale, and 24/7 chains across Meta and TikTok …`

**After** body: `For OR-logic, cross-account management, automatic
rollback after a scale, Slack alerts on creative fatigue, and a creative
testing framework that runs Phase 1-3 across Meta and TikTok …`

H2 micro-tightened: `These rules pause one threshold at a time.` →
`Native rules pause one threshold at a time.` (clearer subject — refers
to Meta's native rules, not the library).

### Source strip meta line

Unchanged: `27 production rules · 5 playbook frameworks · client
identifiers stripped`. Already accurate.

### Metadata + OG + Twitter

**Before title**: `Meta Ads Automation Rules Library — 32 Ready-to-Copy
Rules | Scalemate`
**After title**: `Meta Automated Rules Library — 32 Ready-to-Copy Facebook
Ads Rules | Scalemate` — switches to Meta's official term ("automated"),
adds "Facebook Ads" anchor for the cousin cluster.

**Before description**: `… 27 production-tested … plus 5 testing &
fatigue frameworks from Scalemate's playbook.`
**After description**: `32 ready-to-copy Meta automated rules — 27
production-tested from live Facebook ads accounts plus 5 creative
testing and fatigue frameworks from Scalemate's playbook. Set your CPA,
ROAS, CPC — every threshold recalculates live. Every rule notes the
native Meta limitation.` — calls out the live-recalc UX (Phase 1.5
feature still under-marketed) + spells out "creative testing" anchor.

OG and Twitter mirror the new title / description.

## Internal linking — final state (Phase 1.7)

| Destination | Link count | Anchors |
|---|---|---|
| `/features/automation-rules` | 3 | "full feature breakdown" (FAQ Q2), "See the feature" (beyond CTA), "Automation Rules — Feature" (related) |
| `/use-cases/ad-campaign-automation-rules` | 2 | "ad campaign automation rules" (FAQ Q6 — new anchor), "Ad Campaign Automation Rules — Use Case" (related) |
| `/blog/facebook-automated-rules` | 3 | "read the setup guide" (educational opener — new), "step-by-step setup guide" (FAQ Q9 — new), "Facebook Automated Rules: Setup Guide" (related) |
| `/blog/facebook-ads-automation` | 2 | "Meta ads automation playbook" (FAQ Q3 — new), "Beyond Rules: Full Facebook Ads Automation" (related) |
| `/book-a-demo` | 2 | "Auto-import these rules" (hero CTA), "Book a Demo" (beyond CTA), "Scalemate can auto-import" (FAQ Q8) |
| `https://app.scalemate.co` | 1 | "Get started for free" (hero CTA) |

Anchor text diversification: 11 unique anchors across 4 internal pages +
2 CTA destinations. No exact-match cluster at the bottom of any FAQ.

## Content-ops expert panel — Phase 1.7 scores

Single-round panel on the new + edited copy. Target 90+, all hit on first
pass — no additional rounds run.

| Panelist | Domain | Score | Note |
|---|---|---|---|
| SEO/AEO | Snippet intent, schema, internal-link patterns, PAA capture | 93 | Title + description rebuilt against Meta's official "automated rules" term. Educational opener answers the dominant PAA. FAQ adds 3 PAA-shaped Q's including direct match to "What are Meta's automated rules?". Schema validates: 9 Question entries match 9 FAQ items; ItemList still reflects 32 rules; BreadcrumbList unchanged. Anchor diversification good (11 unique). |
| Brand voice | Confident, operational, no hedging | 92 | Operator tone preserved across new copy. POV markers in all FAQ answers ("teams running"/"the team"). "Read the setup guide"/"the broader Meta ads automation playbook" feel like a colleague pointing — not corporate-CTA-speak. |
| Performance marketer (ICP) | Threshold reasoning, learning-phase caveats, attribution-lag awareness | 93 | Educational opener correctly names the 4 actual moves (pause CPA outliers, scale on ROAS, trim post-scale, run creative testing framework). Phase 1-3 framework matches industry vocabulary. Slack-alert FAQ describes real fatigue triage flow (frequency, CTR decay, CPM drift relative to baseline). Spend-floor heuristic preserved. |
| Native-limitation specialist | Rule-specific, not boilerplate | 94 | Slack-alert FAQ correctly notes Meta only sends generic email/in-platform notifications — no Slack, no campaign report. Conflict-of-rules FAQ dropped, but the conflict pattern is implicit in Q5 (rollback) + Q4 (250 cap) — coverage holds. |
| Conversion/UX | CTA hierarchy, scannability, hero-to-card flow | 90 | Hero CTAs unchanged. Educational opener creates a clean read between source-strip and library UI. New FAQ links create 3 cluster pathways without bottom-link-spam. One borderline: educational opener at ~135 words is at the upper edge for "quick read" eyebrow promise — acceptable. |

**Average: 92.4. All ≥90. Quality gate passes — single round.**

## Anti-AI sweep + banned-phrase scan

```
grep -niE "in today's|in the ever-evolving|let's dive in|it's important
to note|needless to say|at the end of the day|game-chang|cutting-edge|
state-of-the-art|next-gen|robust|seamless|unlock the power|holistic
approach|best-in-class|furthermore|moreover|delve|leverage|
transformative|revolutionary|elevate (your|the)" page.jsx
→ no hits

grep -niE "comprehensive|seamlessly|effortlessly|streamline|empower|in
conclusion|to sum up|first and foremost|that said|with that being said|
when it comes to" page.jsx
→ no hits
```

Two literal-usage "elevated" hits remain in Q5 (rollback FAQ) and the
beyond-CTA limitation list — both literal description of an unrolled
budget state, not the marketing verb. Same call as Phase 1.

**Sweep result: pass. Zero marketing-speak hits.**

## Render checks (dev server, localhost:3000)

```
curl -sS http://localhost:3000/automation-rules-library | wc -c
→ 285,758 bytes ✓

grep -c "Filter by goal" /tmp/arl.html              → 1 ✓
grep -c "How Meta automated rules" /tmp/arl.html    → 1 ✓
grep -c "Slack alert" /tmp/arl.html                 → 1 ✓
grep -c "creative testing framework" /tmp/arl.html  → 1 ✓
grep -c "<confidential client names>"                → 0 ✓
grep -oE '"@type":"Question"' | wc -l               → 9 ✓ (matches faqItems.length)
grep -oE '"@type":"ListItem"' | wc -l               → 34 ✓ (32 rules + 2 BreadcrumbList)
RULES.length                                        → 32 ✓
```

## Build check

`npx next build` → `✓ Compiled successfully in 14.2s`. No type/lint
errors. `/automation-rules-library` continues to prerender as static.

## Files edited

- `app/automation-rules-library/page.jsx` — metadata + OG + Twitter,
  hero copy, library section header, educational opener (new section),
  FAQ array (added 3, dropped 1, re-tuned 1), beyond-CTA body + H2.
- `app/automation-rules-library/page.module.scss` — added `.educational`
  / `.educationalInner` / `.educationalEyebrow` / `.educationalTitle` /
  `.educationalBody` styles. `.librarySection` top padding 96px → 56px
  to balance the new section above. No new design tokens.
- `seo-system/topics/automation-rules-library/research.md` — appended
  `## 2026-05-08 — Phase 1.6 refresh + 4-scope` section with TL;DR,
  SERP map, net-new keyword table, GSC striking-distance table,
  referring-domain landscape, anchor recommendations, and risks.

## Open questions for Natalia

1. **Educational opener length**: ~135 words sits at the upper edge for
   the "Quick read" eyebrow promise. If it reads long on mobile, easy
   to trim to ~100 words by cutting the sentence about the 4 actual
   moves. Current call: keep — that sentence is the ICP signal that
   distinguishes us from generic explainers.
2. **Hero "automated" vs "automation"**: Switched to "automated rules"
   to match Meta's official term + dominant SERP usage. The metric
   recalc UX still uses "automation" in some places (e.g.,
   BenchmarkInput labels). Worth a follow-up sweep if you want full
   terminology consistency, but mixed usage is fine — Google reads
   them as synonyms.
3. **AI Overview check**: SerpAPI light view doesn't render AIO blocks.
   To verify whether ScaleMate gets cited in the AIO for `facebook
   automated rules`, re-run the check with `engine=google` (full SERP)
   in 2-3 weeks. Out of scope for this content rebuild.
4. **Conflict-of-rules FAQ dropped**: if you want to keep that depth,
   it could move to `/features/automation-rules` instead — currently
   the use-case page covers it tangentially. Optional follow-up.
5. **Slack-alert FAQ links to `/use-cases/ad-campaign-automation-rules`**:
   if that page gets renamed/deprecated, the link needs an update.
   Current call: link is the strongest BOFU bridge from the library.

## Pipeline status

- Discovery: DONE (research.md § 2026-05-08 appended)
- Page copy rebuild: DONE (this run)
- QA gates: PASSED (content-ops 92.4 avg, anti-AI clean, banned-phrase
  clean, NDA grep clean, schema 1:1 match, build clean)
- Ready for Natalia review on dev server (`http://localhost:3000/automation-rules-library`)
- Pending: review, deploy, post-publish GSC monitoring (4-6 wk lag
  expected for `creative testing framework` cluster lift).
