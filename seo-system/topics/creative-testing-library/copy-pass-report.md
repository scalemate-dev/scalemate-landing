# Copy Pass Report — /creative-testing-library

> Pass date: 2026-05-25
> Scope: in-place copy revision on already-built React page. No structure/schema/title changes.
> Files touched: `app/creative-testing-library/page.jsx`, `app/creative-testing-library/methods-data.js`
> Verification: `curl` returned HTTP 200 after edits — page still renders.

---

## Goal of this pass

Per Natalia's brief: *"Text should communicate value better — what problem we solve and how cool the solution is. Should be alive and human, easy to understand, engaging."*

Translated into edit targets:
1. Drop corporate marketing patterns ("solution provides", "leverage", "robust")
2. Hero tagline + pain strip must land the problem hard
3. Automation banner + bottom CTA must make the payoff concrete
4. Method summaries (13 of them — what scanners actually see) reframed from mechanical descriptions to outcome/pain-led one-liners
5. FAQ Q1 rewritten to sound like a human answering, not a sales script

Hero H1 left untouched (Natalia approved Variant A).

---

## What changed, section by section

### 1. Hero tagline + feature list (page.jsx)

**Before:** "3-3-3, hooks test, bulk CBO, Cheap Geo, Mirror-BAU — every method here comes with a Scalemate automation flow attached. Pick a method, hit launch, the rules run the test for you."

**After:** "3-3-3, Hooks Test, Bulk CBO, Cheap Geo, Mirror-BAU — 13 frameworks that media buyers actually use. Pick the one that fits your account, hit launch, Scalemate runs the test while you sleep."

**Why:** dropped the "rules" platform term (per `feedback_hero_uses_audience_vocab_not_product_terms`). Added "while you sleep" — concrete consequence of automation, audience vocabulary. Added "frameworks that media buyers actually use" — implicit credibility against generic listicles.

Feature bullets reframed in audience vocab:
- "Filter by goal" → "Filter by what you actually need"
- "tagged by Andromeda fit" kept (Andromeda is audience vocab — Reddit-verified)
- "no manual grind" → "the exact Scalemate setup, not a vague pitch" (acknowledges reader skepticism toward marketing pages)
- "Public reference, no email gate" → "Free to browse. No email gate, no signup wall." (more concrete, two-beat structure)

### 2. Pain strip (page.jsx)

**Before:** abstract framing ("The problem with creative testing in 2026"). Three cards each ~30 words of marketing voice.

**After:** lead-in is direct ("Picking a creative testing method in 2026 is a mess."). Three cards rewritten to feel like a media buyer venting in Slack:
- Card 1: "Every framework guide pushes one method as the universal answer" — kept unnamed-competitor framing per brief constraint
- Card 2: added the human punchline "So you read 4 articles, pick the one with the loudest author, and hope."
- Card 3: "spend the evening clicking through Ads Manager" — specific, visceral, time-stamped vs generic "hours per cycle"

Outro tightened from "This library gathers 13 production-tested methods..." to "This library puts 13 methods in one place, filterable by your situation, with the automation to run any of them attached." (Shorter, more direct, "puts" beats "gathers".)

### 3. Automation banner (page.jsx)

**Before:** "Every method below comes with a one-click Scalemate setup. Bulk-launch ads from templates instead of building one-by-one. Auto-pause losers on the schedule each method requires. Auto-scale winners. No manual monitoring at 2 AM."

**After:** "Each method runs on autopilot with Scalemate. Launch the whole test from a template in 2 clicks instead of an hour in Ads Manager. Losers get paused on the exact schedule the method calls for. Winners get scaled. You stop opening dashboards at midnight to check who's burning budget."

**Why:**
- "runs on autopilot" — audience vocab (per memory)
- "2 clicks instead of an hour" — concrete trade vs vague "bulk-launch from templates"
- "You stop opening dashboards at midnight to check who's burning budget" — pain language, behavioral specificity. Reads like a person, not a feature spec.

### 4. Proof block (page.jsx)

**Before:** "The automation flows above use our Scalemate Automation Rules Library. 20+ production-tested rules running in live Meta accounts — pause on ROAS thresholds, scale winners, kill creative on frequency caps, auto-revert when conditions reverse. Every method on this page references rules from that library."

**After:** "The automation in each card isn't theory — it runs in live Meta accounts every day. 20+ rules powering the methods above: pause on ROAS thresholds, scale winners overnight, kill creative when frequency hits the wall, roll back the moment performance dips. Everything you need to run any framework on this page hands-off."

**Why:**
- "isn't theory — it runs in live Meta accounts every day" — direct E-E-A-T first-hand marker
- "frequency hits the wall" / "roll back the moment performance dips" — visceral, human verbs vs flat "frequency caps" / "when conditions reverse"
- CTA link: "Browse the Automation Rules Library →" → "See all 20+ automation rules →" — outcome-explicit number, action verb

### 5. FAQ — all 6 answers rewritten

**Q1 ("Do I have to use Scalemate"):** the most important rewrite. Was the most sales-y answer on the page ("Use Scalemate if you're tired of bulk-launching..."). Now reads as a confident, non-pushy explainer: every method works manually, automation is the shortcut, library is useful either way. Added credibility-by-naming ("the way Pilothouse, Hunch, or Dara Denney would teach it") which doubles as a brand-credit signal Google likes.

**Q2 ("Best framework for FB ads"):** opener changed from "No single method wins for every team" to "There isn't one." — sharper, less hedging. Cleaned up structure.

**Q3 ("How many creatives per week"):** added human framing "Andromeda changed the math" + the meta-point about why the library exists ("you don't have to upload them one at a time"). Reduced AI-sounding sentence parallelism.

**Q4 ("What's the 3-3-3"):** kept the structural facts but reframed pros/cons in plain English ("Why people love it" / "Why it can burn you"). Added internal pointer to Method 01.

**Q5 ("Conversion Lift vs A/B"):** added the "confusing them is a common expensive mistake" hook. Body kept tight.

**Q6 ("How long to run a test"):** punchier framing of the common mistake — "running the method's recommended cutoff at half the budget it expects." This is the actual mistake media buyers make, not a generic "biggest mistake" statement.

### 6. Bottom CTA (page.jsx)

**Before:** "Apply any method with Scalemate automation" + "Bulk-launch test templates, auto-pause rules on goal, auto-revert when conditions reverse. Free tier — Meta + TikTok, no credit card."

**After:** "Pick a method. Skip the manual setup." + "The difference between reading about a method and running it: 30-45 minutes per test cycle in Ads Manager. Scalemate runs any of the 13 frameworks above on autopilot — launches the test, kills the losers, scales the winners. Meta + TikTok. Free tier, no credit card."

**Why:**
- H2: short two-beat verb-led headline replaces flat-noun "Apply any method with Scalemate automation"
- Body opens with the concrete cost ("30-45 minutes per test cycle") — that's the manual alternative, quantified
- Three-verb structure ("launches the test, kills the losers, scales the winners") — rhythm + concrete actions
- "autopilot" instead of "automation rules" (audience vocab)

### 7. Method summaries — all 13 rewritten in methods-data.js

These are the biggest UX leverage point — scanners see 13 of them on collapsed cards before they decide whether to expand. Old summaries described the **mechanism** ("3 ad sets × 3 creatives × 3 days"). New summaries lead with the **outcome or pain solved** then state the mechanism + ICP qualifier.

Pattern: `[Outcome] + [mechanism] + [who it's for]`.

| # | Method | Old summary opener | New summary opener |
|---|---|---|---|
| 1 | 3-3-3 | "3 ad sets × 3 creatives × 3 days. Identify early winners..." | "Find your first winners in 72 hours without burning a week's budget..." |
| 2 | 3-2-2 Sprint | "3 ad sets × 2 creatives × 5 days. Faster variant of canonical..." | "Get a scaling-ready verdict in 5 days instead of 14..." |
| 3 | Hooks Test | "Vary first 3 seconds of a winning video. Holds rest constant..." | "Squeeze 20-40% more out of a creative you already know works..." |
| 4 | Conversion Lift | "Meta-managed hold-out group measures incremental conversions..." | "End the 'did the ad actually cause that sale?' argument with finance..." |
| 5 | Bulk CBO 2-Phase | "40-75 creatives in CBO. Phase 1 (3-5d) filters..." | "Test 40-75 creatives per cycle without dumping budget into duds..." |
| 6 | Static vs Video | "3 ad sets: static-only, video-only, mixed. Same concept..." | "Stop guessing whether your offer wants video or static..." |
| 7 | Multi-Variant Battery | "15-30 creative variants in single Advantage+ ad set..." | "Stop fighting the algorithm. Load 15-30 diverse variants..." |
| 8 | Refresh Cadence | "Watch frequency/CTR/CPA/hook-rate per creative..." | "Catch fatigue before it eats your CPA..." |
| 9 | Control Ad Test | "New creative vs proven winner. Equal impressions for both..." | "The cleanest yes/no on whether a challenger should replace your champion..." |
| 10 | Meta A/B Test | "Meta's built-in A/B Test feature (Experiments menu)..." | "Let Meta do the statistical math for you..." |
| 11 | Cheap Geo/WW | "Test in T3 geos (Indonesia, Brazil) or WW MAI campaigns..." | "Test 4-10× more creatives for the same dollar..." |
| 12 | Cheap Geo + AEO | "Hybrid: AEO-optimized campaigns in cheap geos. Cost savings..." | "Cheap-geo prices, AEO-quality signal..." |
| 13 | Mirror-BAU | "Duplicate BAU campaign settings exactly. Drop new creatives in..." | "Test creatives in the exact conditions they'll have to survive in..." |

Each new summary preserves the mechanism + budget-tier + ICP qualifier from the old one, just leading with the verb/outcome instead.

---

## What was flagged but NOT changed

- **Hero H1** — Natalia approved Variant A this week. Locked per brief.
- **Page structure** — out of scope for this pass.
- **Metadata (title/meta description/OG)** — out of scope, brief says no title/schema changes. Worth noting: meta description still says "Free templates + automation setup" — "free templates" framing is mildly off-tone relative to the rest (scoping doc rejected templates as primary story). Not changing now, but flagging for the next metadata pass.
- **Filter chip labels** in LibraryClient.jsx — emoji-led labels like "🎯 Find winners fast" / "🔪 Kill losers fast" are already in audience vocab. Left as-is.
- **`bestFor` fields** on each method — those are detailed ICP qualifiers shown on card expand. Left untouched for this pass since collapsed-card `summary` is where the leverage is. Could be a follow-up pass.
- **`method` step lists, `pros`, `cons`, `pitfall`, `automation`** fields — also expanded-card detail. Same reasoning — diminishing return per scanner. Some have minor jargon ("higher-funnel filter", "AEO learning phase") but they're correct technical terms in context — media buyers expect them once they've expanded a card to study a method.
- **Related Resources section** — labels are clean already. Left.

---

## Constraints honored

- Hero H1 unchanged.
- Pain strip kept unnamed-competitor framing ("Every framework guide..." — NOT "Pilothouse pushes 3-3-3").
- No "rules" / "auto-revert" / "compound conditions" in hero or banner copy.
- All 13 method canonical names preserved (3-3-3, Hooks Test, Bulk CBO, etc.).
- No customer names surfaced anywhere.
- Meta + TikTok scope preserved — no ASA, UAC, SDK, MMP references.
- Pilothouse + Hunch + Dara Denney named credit (in FAQ Q1) — credit framing, not attack.
- 8+ years language nowhere asserted in this pass (no author byline edits).
- No "| Scalemate" brand suffix added or removed.

---

## Open questions for Natalia

1. **FAQ Q1 mentions Pilothouse, Hunch, Dara Denney by name.** This is the credibility move from the positioning brief, but I want to confirm: are you OK with named-competitor credits inside FAQ answers (where the framing is "these public methods you can run manually") even though the pain strip stays unnamed? I think yes — different rhetorical positions — but flagging.

2. **Bottom CTA quantifies the manual alternative as "30-45 minutes per test cycle."** That's roughly accurate for the 3-3-3 / 3-2-2 setup but underestimates the Bulk CBO 2-Phase or Multi-Variant Battery setups (those take an hour+). Should I soften to "30+ minutes" or keep the specific range? I went with the specific range for punch but happy to widen.

3. **Method 4 (Conversion Lift) summary opens with "End the 'did the ad actually cause that sale?' argument with finance."** This frames it as a finance/governance tool, which is accurate for the enterprise ICP but might over-narrow. Acceptable trade for vividness, but flagging.

4. **Method 7 (Multi-Variant Battery) summary says "the rest of the manual testing playbook fights it."** This is a sharper opinion than the rest of the summaries — borderline rebel-tone. Read it and tell me if it's too much; I can soften to "Modern testing for the modern algorithm" if you want it more neutral.

---

## Verification

- `curl -s -o /dev/null -w "HTTP: %{http_code}\n" http://localhost:3000/creative-testing-library` → HTTP 200 after all edits.
- All 13 `summary:` fields confirmed present (one was accidentally deleted mid-edit when patching Method 9, restored same edit cycle).
