// 13 creative testing methods curated from industry-standard frameworks
// and mobile UA practice. Scalemate is the curator, not the inventor.
//
// Schema per method:
//   id, number, name
//   goal: "find-winners" | "validate" | "kill-losers" | "andromeda" | "controlled" | "mobile-ua"
//   bestFor (string)
//   budgetLevel: "low" | "medium" | "high"           (low <$5K/mo, med $5-25K/mo, high $25K+/mo)
//   platform: ["meta"] | ["tiktok"] | ["meta","tiktok"]
//   timeToDecision: "3-days" | "5-days" | "1-2-weeks" | "4-weeks-plus"
//   andromedaCompat: "strong" | "mixed" | "weak"
//   summary (short blurb shown on collapsed card)
//   method (array of step strings)
//   pros (string)
//   cons (string)
//   pitfall (string)
//   automation (array of 5 step strings — Scalemate-specific)
//   accessCaveat (optional — for gated features like Conversion Lift)

export const METHODS = [
  {
    id: "three-three-three",
    number: 1,
    name: "The 3-3-3 Method",
    goal: "find-winners",
    bestFor:
      "Meta-only solo buyers and small teams, $50-500/day per ad set, finding starter winners for a new campaign.",
    budgetLevel: "low",
    platform: ["meta"],
    timeToDecision: "3-days",
    andromedaCompat: "mixed",
    summary:
      "3 ad sets × 3 creatives × 3 days. Identify early winners in 72 hours. Fast, low-budget screening — works for solo buyers below $5K/mo.",
    method: [
      "Pick 3 distinct creative concepts (different hooks, angles, or formats — not 3 versions of the same ad).",
      "Build 3 ad sets, identical targeting and budget ($50-150/day each).",
      "Load 1 creative per ad set, single ad per ad set.",
      "Run for 72 hours.",
      "Day 4: pause ad sets where CPA > 1.5× target. Move the winner to a scaling campaign.",
    ],
    pros:
      "Fast decision cycle. Low budget commitment. Forces creative diversity (3 distinct concepts).",
    cons:
      "Statistical noise high on <$100/day budgets. 3-day cutoff before learning phase exits = unstable signal. Doesn't test audience-creative fit, only creative.",
    pitfall:
      "People run 3-3-3 with 3 variations of the same ad (different captions, same video). That's not 3-3-3 — that's a snippet test, and Andromeda will pick the wrong winner because variation is too narrow.",
    automation: [
      'Template setup — Save a "3-3-3" reusable template: 3 ad sets, single ad per ad set, identical targeting + budget per ad set.',
      "Bulk launch — Duplicate template → swap in 3 new creatives from Google Drive folder → launch all 3 ad sets in 2 clicks (no rebuild of structure).",
      "Auto-pause rule — On Day 4: pause any ad set where CPA > 1.5× target. No manual checking.",
      "Winner promotion — Rule auto-clones winner ad set into your scaling campaign with 2× starting budget.",
      "Slack alert — Daily summary of test status + winner declared at Day 4.",
    ],
  },
  {
    id: "three-two-two-sprint",
    number: 2,
    name: "The 3-2-2 Method (5-Day Sprint)",
    goal: "find-winners",
    bestFor:
      "Teams running $5-25K/mo, validating creative for a scaling-ready campaign, teams who can't wait 2 weeks for a decision.",
    budgetLevel: "medium",
    platform: ["meta"],
    timeToDecision: "5-days",
    andromedaCompat: "mixed",
    summary:
      "3 ad sets × 2 creatives × 5 days. Faster variant of canonical 2-week 3-2-2. Requires high daily budget ($150-300/ad set) to compress signal.",
    method: [
      "Pick 3 ad sets, 2 creatives per ad set, 5-day runtime.",
      "Identical audience and budget per ad set ($150-300/day each — higher daily budget compresses learning signal).",
      "Each ad set runs 2 creatives competing inside it (not isolated).",
      "Day 5: declare winner per ad set based on CPA. Move top winner + #2 to scaling campaign.",
    ],
    pros:
      "Faster decision cycle than canonical 2-week 3-2-2. Multiple creatives per ad set still match Andromeda's preference for in-ad-set variation. Identifies primary + backup winner (insurance against fatigue).",
    cons:
      "Tighter signal than 14-day version — more noise risk. Requires higher daily budget ($150-300/day × 3 ad sets = $2.5-4.5K total for 5 days). Cannot use at low spend levels without statistical confidence dropping sharply.",
    pitfall:
      "Running this at <$100/day per ad set. At low budgets, 5 days won't generate enough conversion volume to make a confident call. If budget is the constraint, use 3-3-3 (Method 1) at 3 days OR stretch this to the full 14-day version.",
    automation: [
      'Template setup — Save "3-2-2 Sprint" template: 3 ad sets, 2 ads per ad set, daily budget $150-300 per ad set, identical targeting.',
      "Bulk launch — Template duplicate → load 6 new creatives from Drive (2 per ad set, paired) → launch in 1 click.",
      "Auto-pause rule (Day 3 outlier kill) — Pause any single ad set where CPA > 1.5× target (kills outliers early without breaking the 5-day test for the rest).",
      "Day 5 winner declaration — Scalemate reporting surfaces winner + #2 per ad set automatically. No manual data pull.",
      "Auto-promote — Top winner + backup auto-cloned into scaling campaign with budget bump 2-3×.",
    ],
  },
  {
    id: "hooks-test",
    number: 3,
    name: "Hooks Test",
    goal: "find-winners",
    bestFor:
      "Video-heavy teams (mobile UA, DTC), refining a proven concept, A/B testing intro variations only.",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "strong",
    summary:
      "Vary first 3 seconds of a winning video. Holds rest constant. Refines proven concepts via Dynamic Creative — Andromeda-native.",
    method: [
      "Take one winning video concept.",
      "Create 3-5 variations with different first 3 seconds (different opener, hook line, visual punch).",
      "Keep middle + end of video identical across all variants.",
      "Run all variants in same ad set under Advantage+ Dynamic Creative.",
      "After 1,000+ impressions per variant, kill bottom 50% by hook-rate.",
    ],
    pros:
      "Isolates the hook variable cleanly. Compounds learning from a proven concept (you already know the body works). Fast cycle once you have a base winner.",
    cons:
      "Requires editing capacity (multiple cuts of same video). Doesn't test new concepts — only refines existing ones. Hook-rate is correlative not causal — winning hook doesn't always equal winning ROAS.",
    pitfall:
      "Comparing absolute hook rates across different campaigns instead of relative within the same test. Hook-rate is context-dependent.",
    automation: [
      "Template setup — Single Advantage+ ad set with Dynamic Creative enabled, primary metric = hook rate.",
      "Bulk launch — Drag 5 video variants from Drive folder → bulk-assign all to same Dynamic Creative ad set → launch.",
      "Auto-kill rule — Pause any variant where hook-rate < control × 1.2 after 2K impressions per variant.",
      "Winner extraction — Reporting surfaces top hook per variant + auto-tags winner for next-batch iteration.",
      "Next cycle trigger — When 1 variant clearly wins (≥1.5× control hook-rate), Scalemate fires Slack alert prompting next iteration batch.",
    ],
  },
  {
    id: "meta-conversion-lift",
    number: 4,
    name: "Meta Conversion Lift Test",
    goal: "validate",
    accessCaveat:
      "Conversion Lift is NOT self-serve in Meta Ads Manager for most accounts. It requires a Meta sales rep relationship or Meta Business Partner program access. Self-serve Experiments menu typically shows only A/B Test + Brand Lift (the latter only for Brand objective campaigns). If you've never seen 'Conversion Lift' as an option in your Ads Manager, you don't have access — skip this method and use Meta Native A/B Test (Method 10) for self-serve controlled comparison.",
    bestFor:
      "Enterprise teams with dedicated Meta rep, spending $30K+/mo per test study, validating a major creative or audience change before scaling spend 2-3×.",
    budgetLevel: "high",
    platform: ["meta"],
    timeToDecision: "4-weeks-plus",
    andromedaCompat: "strong",
    summary:
      "Meta-managed hold-out group measures incremental conversions. Gated feature — requires Meta rep relationship. Highest-quality incrementality data Meta offers.",
    method: [
      "Request Lift study through your Meta rep (not self-serve in Ads Manager for most accounts).",
      "Meta randomly assigns users to test (sees ads) or hold-out (doesn't see ads).",
      "Set test duration: minimum 4 weeks for statistically valid sample.",
      "Define conversion event (purchase, signup, app install).",
      "Meta reports incremental conversions + cost per incremental conversion.",
    ],
    pros:
      "Highest-quality incrementality data Meta offers. Distinguishes 'ad drove this' from 'they were going to convert anyway.' Removes attribution debates with finance.",
    cons:
      "Gated — requires Meta rep relationship most self-serve advertisers don't have. Long cycle (4+ weeks). Requires high test budget ($30K+ for the study itself, plus normal campaign spend). Hold-out feels expensive. Best for one decision at a time — not a daily testing tool.",
    pitfall:
      "Assuming Conversion Lift is the same as the A/B Test option in Experiments. They aren't — A/B Test compares two variants both running ads; Lift uses a true hold-out where one group sees nothing. If your only option is A/B Test, you can't measure incrementality, only relative variant performance.",
    automation: [
      "Pre-Lift stability — Set Scalemate auto-pause to lock current creative variants (no auto-rotation during 4-week Lift window — keeps test conditions stable).",
      "During Lift — Scalemate dashboard reports per-campaign CPA + ROAS in parallel (so finance sees both Meta's Lift verdict AND ongoing optimization data).",
      "Post-Lift decision gate — Once Lift confirms incrementality, manually flip 'scaling mode' toggle in Scalemate.",
      "Auto-scale rule activation — Scale rule auto-bumps budget +20% per day when ROAS > target × 1.1, with auto-revert if ROAS drops 15% next day.",
      "Slack governance — Daily scaling-action summary to Slack so team + finance see exactly what's happening day-by-day.",
    ],
  },
  {
    id: "bulk-cbo-2-phase",
    number: 5,
    name: "Bulk Creative Test in CBO (2-Phase Funnel Progression)",
    goal: "validate",
    bestFor:
      "R&D teams running high creative volume (especially AI-generation creative pipelines), accounts with 30+ creatives per test cycle, mature campaign structures with broad targeting.",
    budgetLevel: "high",
    platform: ["meta"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "40-75 creatives in CBO. Phase 1 (3-5d) filters on higher-funnel metric. Phase 2 (3-7d) validates survivors on lower-funnel. Andromeda-native.",
    method: [
      "Build one CBO campaign with 4-5 ad sets (same broad targeting or diversified lookalikes for variation).",
      "Load 10-15 ads per ad set (total 40-75 ads per test cycle).",
      "Phase 1 (3-5 days) — Higher-funnel filter: Let CBO allocate spend naturally. Monitor higher-funnel conversion metric: installs (mobile UA), registrations/signups (web), page views or add-to-cart (eCom). Pause ads that didn't capture meaningful spend OR have terrible higher-funnel rates (bottom 50-70% of pool).",
      "Phase 2 (3-7 days) — Lower-funnel validation: Keep the surviving 20-40% top performers running. Switch evaluation to lower-funnel metrics: purchases, trial starts, 1st top-up, paying users. Pause ads that don't deliver lower-funnel value despite higher-funnel strength.",
      "Move final winners (typically 5-10 ads from original 40-75) to scaling campaign.",
    ],
    pros:
      "Tests massive volume efficiently (40-75 ads at once vs 9 in 3-3-3). 2-phase progression saves budget — kill on cheap higher-funnel signal before spending heavily to evaluate lower-funnel. Perfect for AI creative generation workflows (pump 50 variations, algorithm tells you which work). Aligned with how CBO actually allocates spend.",
    cons:
      "Requires creative volume (40-75 ads). Not feasible without production capacity, AI generation pipeline, or large existing library. Phase 1 metric choice is critical — wrong upstream signal can kill actual winners. Total cycle 6-12 days.",
    pitfall:
      "Treating Phase 1 metrics as final decision. High install rate ≠ high purchase rate. Some ads get tons of upper-funnel signal (clicks, installs, page views) but never convert lower-funnel. The whole point of Phase 2 is to weed those out — don't skip it.",
    automation: [
      "Template setup — CBO campaign template: 4-5 ad sets, broad targeting or diversified lookalikes, single objective.",
      "Bulk launch (40-75 ads) — Drag entire creative batch from Drive folder → Scalemate distributes 10-15 ads per ad set automatically in one workflow.",
      "Phase 1 auto-pause rule (Day 3) — Pause any ad below X higher-funnel events (installs/registrations/page views) per Y impressions. Bottom 50-70% die automatically.",
      "Phase 2 auto-pause rule (Day 5-8) — On surviving 20-40%: pause any ad failing lower-funnel CPA target (purchases/trial starts/first top-ups). Final 5-10 winners survive.",
      "Auto-promote winners — Survivors get auto-cloned into scaling campaign with budget bump 2-3×. Drive folder gets tagged 'winner library' for future iteration reference.",
    ],
  },
  {
    id: "static-vs-video",
    number: 6,
    name: "Static vs Video Test",
    goal: "kill-losers",
    bestFor:
      "Brand-new accounts where format default is unclear, teams transitioning between formats, vertical-specific decisions (mobile UA, eCom Reels).",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "3 ad sets: static-only, video-only, mixed. Same concept across all 3, different execution. Decides format strategy by format-level CPA aggregate.",
    method: [
      "Build 3 ad sets: one static-only, one video-only, one mixed.",
      "Same creative concept across all 3 (same product, same hook idea, different execution).",
      "Same audience, identical budget per ad set ($100-200/day).",
      "Run 7-14 days.",
      "Compare CPA, CTR, hook rate, watch-through rate per format.",
    ],
    pros:
      "Cuts through the 'everyone says video wins' assumption — sometimes static beats video for your specific offer. Gives data-backed format strategy.",
    cons:
      "Requires production capacity in both formats (expensive if you don't already have video). Result often varies by funnel stage (TOFU = video, BOFU = static).",
    pitfall:
      "Calling video the winner because video has higher engagement metrics — but static had higher CPA-efficient conversions. Optimize for the metric that matches business goal, not engagement.",
    automation: [
      "Template setup — 3 ad sets template: one static-only, one video-only, one mixed. Identical targeting + budget.",
      "Bulk launch (18 ads) — From Drive, drag 6 static + 6 video + 6 mixed → Scalemate distributes 6 ads per ad set in one click.",
      "Auto-kill rule — Pause any creative with CTR < 0.5% after 500 impressions (clears poor performers fast across all 3 formats).",
      "Format-level reporting — Scalemate dashboard surfaces aggregate CPA per format (not just per ad), so format-winner decision is clear.",
      "Auto-promote — Winning format's top 2 creatives auto-cloned into scaling campaign. Lock format default for next quarter's creative production.",
    ],
  },
  {
    id: "multi-variant-battery",
    number: 7,
    name: "Multi-Variant Battery (Andromeda Native)",
    goal: "andromeda",
    bestFor:
      "Teams running Advantage+ Shopping or Sales campaigns, ICP-broad audiences, post-Andromeda accounts (most accounts as of 2026).",
    budgetLevel: "medium",
    platform: ["meta"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "15-30 creative variants in single Advantage+ ad set, broad targeting, let Andromeda allocate. The native modern method for the algorithm.",
    method: [
      "Build 1 Advantage+ campaign with broad targeting (drop interests, just demographics).",
      "Single ad set, single objective.",
      "Load 15-30 creative variants into that one ad set: different formats (video, static, carousel), different hooks, different personas/angles.",
      "Let Andromeda allocate spend across variants automatically.",
      "After 7-14 days, review which variants are getting served + at what CPA. Kill bottom 30%, replace with new variants.",
    ],
    pros:
      "Modern, algorithm-aligned. Removes manual audience-creative matching (Meta does it). Scales naturally — more variants = more opportunities for Andromeda to find pockets.",
    cons:
      "Requires creative production at volume (15-30 variants is a lot). Less explainable to stakeholders ('why is this one winning? — because the algorithm says so'). Hard to attribute wins to specific creative decisions.",
    pitfall:
      "Loading 30 variants that are too similar. Andromeda needs real diversity (format + persona + angle), not 30 versions of the same Carousel.",
    automation: [
      "Template setup — Advantage+ campaign with broad targeting (no interest layers), single ad set, single objective.",
      "Bulk launch (15-30 variants) — Drag full creative batch from Drive → all variants load into the one Advantage+ ad set in one workflow.",
      "Auto-pause rule (low-performers) — Pause any variant below CPA target for 48 consecutive hours. Andromeda's natural spend allocation surfaces winners; rule kills tail.",
      "Auto-swap rule (fresh creative) — When a variant gets paused, rule auto-pulls next-in-queue variant from Drive folder. Continuous creative refresh without manual intervention.",
      "Weekly review — Scalemate reporting groups variants by performance tier so creative team knows which concepts to iterate on for next batch.",
    ],
  },
  {
    id: "refresh-cadence",
    number: 8,
    name: "Creative Refresh Cadence",
    goal: "andromeda",
    bestFor:
      "All teams running winning creative for 30+ days. Especially important post-Andromeda (fatigue cycles compressed from 4-6 weeks to 7-14 days).",
    budgetLevel: "low",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "strong",
    summary:
      "Watch frequency/CTR/CPA/hook-rate per creative. Auto-replace when fatigue thresholds breach. Maintains stable CPA — Andromeda compresses cycles to 7-14 days.",
    method: [
      "Track per-creative metrics weekly: frequency, CPA, CTR, hook rate.",
      "Trigger replacement when: Frequency exceeds 3.0 OR CTR drops 20% from peak OR CPA increases 30% from peak OR Hook rate drops 15% from peak (video only).",
      "Replace fatiguing creative with fresh variant (ideally a variation of the same winner, not a brand-new concept).",
      "Pause fatigued creative immediately — don't let it drag campaign CPA.",
    ],
    pros:
      "Prevents budget waste on dying creative. Maintains campaign-level CPA stability. Forces production team into a refresh cadence rhythm.",
    cons:
      "Requires consistent creative pipeline (if you can't produce replacements, this method causes campaign holes). Not a discovery method — only maintenance.",
    pitfall:
      "Replacing fatiguing creative with a totally new concept instead of variation. Fresh concepts need their own testing cycle; variation-of-winner usually inherits 70-80% of the original's performance.",
    automation: [
      "Always-on monitoring rule — Scalemate rule watches every running creative for fatigue triggers: frequency > 3.0, CTR drop > 20% from peak, CPA increase > 30% from peak, hook-rate drop > 15% (video).",
      "Slack alert — When any creative breaches threshold, immediate Slack DM to media buyer with the creative ID + which metric broke.",
      "Auto-pause — Same rule simultaneously pauses the fatiguing creative (don't wait for human — every hour at fatigued spend = wasted budget).",
      "Auto-swap from Drive queue — Pulls next-in-queue variant from a tagged Drive folder ('creative-refresh-queue') + launches it into the same ad set automatically. Zero campaign holes.",
      "Refresh cadence reporting — Weekly summary: which creatives fatigued, replacement performance, cycle time per creative. Surfaces if production team isn't keeping up.",
    ],
  },
  {
    id: "control-ad-test",
    number: 9,
    name: "Control Ad Test (Equal Impressions vs Winner)",
    goal: "controlled",
    bestFor:
      "Teams with an established winner creative, iterating to find a next-gen replacement, mobile UA teams measuring by IPM, web teams measuring by CVR.",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "5-days",
    andromedaCompat: "mixed",
    summary:
      "New creative vs proven winner. Equal impressions for both, then stop. Wait 48h for conversion attribution. Compare by IPM (app) or CVR (web).",
    method: [
      "Pick the proven winner as your control ad.",
      "Set up the test in one of two ways: Option A (separate ad sets) — 2 ad sets, identical audience and targeting, one ad each (control vs challenger). Same budget, same start time. Option B (single ad set, 2 ads) — Both ads in one ad set under standard delivery (not Dynamic Creative — you want isolated metrics per ad).",
      "Run until both reach the same impression count (typical targets: 5K, 10K, or 20K impressions per ad depending on conversion volume).",
      "Manually pause both when target impressions hit. Don't let one keep running past the other — that's the whole point of equal exposure.",
      "Wait 24-48 hours for conversion attribution to settle.",
      "Compare by primary KPI: App promotion = IPM (installs per 1,000 impressions). Web products = CVR (conversion rate per impression or click). Lead gen = lead CPA or lead rate.",
    ],
    pros:
      "Cleanest possible head-to-head comparison. Controls for time-of-day, day-of-week, and audience drift. Forces statistical fairness (equal sample sizes). Best for 'should this creative replace my winner' yes/no decisions.",
    cons:
      "Requires manual monitoring of impressions across both ads. Attribution lag means you can't make a decision the same day you stop the test. Not parallelizable — testing 5 challengers means 5 separate control-vs-X runs (or one battery test, see Method 7).",
    pitfall:
      "Stopping the test when one ad reaches the target but letting the other keep running for 'a bit longer.' That re-introduces time bias and breaks the equal-exposure premise. If one ad lags, raise budget on that ad set to catch up — don't let the leader pull further ahead.",
    automation: [
      "Template setup — Either 2-ad-set template (control vs challenger) OR single ad set with 2 ads (no Dynamic Creative — need isolated metrics).",
      "Equal-impressions auto-pause — Rule: pause each ad when its impression count reaches X (5K/10K/20K depending on conversion volume). Critical — both ads pause within minutes of each other instead of relying on manual monitoring.",
      "Conversion attribution lag — Auto-disable test reporting for 48h after pause so delayed conversions get credited (no premature winner call).",
      "Decision metric per vertical — App promotion: rule reports IPM per ad. Web product: CVR per ad. Lead gen: lead CPA per ad.",
      "Winner replacement — If challenger wins (≥1.1× control performance on primary KPI), auto-clone winner into BAU + auto-pause old control.",
    ],
  },
  {
    id: "meta-ab-test",
    number: 10,
    name: "Meta Native A/B Test",
    goal: "controlled",
    bestFor:
      "Teams who want platform-native attribution + Meta-handled audience splitting + clear winner output without manual setup.",
    budgetLevel: "medium",
    platform: ["meta"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "Meta's built-in A/B Test feature (Experiments menu). Self-serve, splits audience automatically, declares winner with statistical confidence.",
    method: [
      "In Ads Manager → Experiments → A/B Test.",
      "Select 2-4 ads, ad sets, or campaigns to compare.",
      "Set test duration (Meta recommends 7-14 days minimum) or set cap on spend per variant.",
      "Meta automatically splits the audience so each variant reaches a non-overlapping group — eliminating audience overlap as a variable.",
      "Wait for the test to complete (Meta won't declare a winner until statistical confidence is reached or duration ends).",
      "Evaluate the result by higher-funnel metric Meta surfaces: hook rate (3-second video views/impressions), CTR (clicks/impressions), CVR (conversions/impressions or clicks), CPA (cost per primary conversion).",
    ],
    pros:
      "Meta handles the statistical math (no manual sample-size calculations). Auto-splits audience to eliminate overlap bias. Outputs a clear 'Variant X won with Y% confidence' verdict. Best for teams without dedicated data analysts.",
    cons:
      "Minimum 7-day duration even for small variants (slower than Control Ad Test). Limited to 2-4 variants per test (not for high-volume battery testing). Meta's 'winner' verdict optimizes for statistical confidence, not always for the metric you actually care about (set primary KPI carefully).",
    pitfall:
      "Picking the wrong primary metric in the A/B Test config. If your business cares about CPA but you set the test primary metric to CTR, Meta will declare the high-CTR variant the winner even if its CPA is worse. Set primary metric = the metric you'll act on.",
    automation: [
      "Parallel monitoring rule — While Meta A/B Test runs natively, Scalemate rules track CPA + ROAS + hook rate per variant in parallel (Meta's UI doesn't show all this granularly).",
      "Slack alert on Meta verdict — When Meta declares winner, Slack notification fires with side-by-side: Meta's verdict + Scalemate's full metric breakdown.",
      "Disagreement check — If Meta's 'winner' disagrees with your business KPI (e.g., Meta picks high-CTR variant but it has worse CPA) — Slack alert flags this for human review before any action.",
      "Auto-promote winning variant — If both metrics agree on winner, Scalemate auto-clones it to scaling campaign with budget bump.",
      "Loser archive — Losing variants tagged + archived in Drive for future iteration learning (don't lose institutional knowledge per test).",
    ],
  },
  {
    id: "cheap-geo-ww",
    number: 11,
    name: "Cheap Geo / WW Testing",
    goal: "mobile-ua",
    bestFor:
      "Mobile UA teams running $1K+/day per geo, accounts with high creative volume needing cheap iteration cycles, apps with proven cheap-geo-to-T1 correlation.",
    budgetLevel: "medium",
    platform: ["meta"],
    timeToDecision: "3-days",
    andromedaCompat: "mixed",
    summary:
      "Test in T3 geos (Indonesia, Brazil) or WW MAI campaigns where CPI is 4-10× lower. Promote winners to T1. Works only when correlation validated.",
    method: [
      "Build a test campaign with MAI (Mobile App Installs) objective in T3 geos (e.g., Indonesia, Philippines, Brazil, Vietnam) OR a WW (worldwide) MAI campaign that's algorithmically biased toward cheap inventory.",
      "Run creatives at 4-10× lower CPI than T1 — same creative volume costs a fraction.",
      "Evaluate winners by IPM (installs per 1,000 impressions) and CPI.",
      "Promote winners to a dedicated T1 campaign on AEO or ROAS objective.",
      "For smaller accounts (<$1-2K/day): move winners directly into BAU instead of separate T1 testing campaign.",
    ],
    pros:
      "Dramatically cheaper testing — 4-10× lower CPI in T3 vs T1. Test more creatives per dollar. Fast install volume = faster signal.",
    cons:
      "Works only when cheap-geo winners reliably correlate with T1 winners. Some apps have strong correlation (utilities, casual games), others have weak (premium subscription, payment-heavy apps). Must validate correlation before relying on it.",
    pitfall:
      "Promoting T3 winners to T1 without validating correlation first. Some creatives win cheap because they appeal to low-intent T3 audiences and flop in T1 where intent is higher. Run a small validation batch first — top 5 T3 winners → T1 BAU for 5-7 days → does correlation hold?",
    automation: [
      "Template setup — Two templates: T3/WW MAI test campaign + T1 AEO/ROAS scaling campaign. Reusable across test cycles.",
      "Bulk launch in T3 — Drag creative batch from Drive → T3 campaign launched in 1 click. Cheap impressions start flowing immediately.",
      "Auto-pause rule (Day 2) — Pause any creative below threshold IPM. T3 traffic is fast, you'll have signal within 48 hours.",
      "Correlation validation gate — Manual step: validate top 5 T3 winners against existing T1 baseline before mass promotion (one-time per app).",
      "Auto-promote to T1 — Validated winners auto-clone from T3 template into T1 AEO/ROAS template with proper budget scaling. Saves 30-45 min per promotion cycle.",
    ],
  },
  {
    id: "cheap-geo-aeo",
    number: 12,
    name: "Cheap Geo + AEO (Combined)",
    goal: "mobile-ua",
    bestFor:
      "Mobile UA teams that have validated cheap-geo correlation works for AEO outcomes specifically (not just installs), apps with high enough conversion volume to support AEO learning in cheap geos.",
    budgetLevel: "high",
    platform: ["meta"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "mixed",
    summary:
      "Hybrid: AEO-optimized campaigns in cheap geos. Cost savings + signal quality. AEO needs ~50 events/week minimum for learning phase to close.",
    method: [
      "Build AEO-optimized campaign in T3 cheap geos.",
      "Choose AEO event aligned with monetization: d3 retention, 1st purchase, level-5 completion, 1st top-up.",
      "Run creative testing inside this campaign — winners scored on AEO event rate, not just IPM.",
      "Promote winners to T1 AEO campaign with same event optimization.",
    ],
    pros:
      "Combines cost savings + signal quality. AEO outcomes carry more meaning than raw installs — you're filtering on creative + user-fit alignment, not just install efficiency.",
    cons:
      "AEO learning phase needs conversion volume — if your cheap geos produce 5 AEO events/day per campaign, learning phase never closes. Best only when cheap geos generate enough event volume. Validate event throughput before committing.",
    pitfall:
      "Using AEO with thin conversion volume. AEO learning phase requires ~50 events per week minimum. If cheap-geo campaign generates 10 events/week, you're getting random allocation, not optimized delivery.",
    automation: [
      "Template setup — Cheap-geo AEO campaign template tied to your monetization event (d3 retention, first purchase, level-5 completion).",
      "Bulk launch (AEO objective) — Creative batch loaded from Drive into AEO campaign in cheap geos.",
      "Event-volume safety rule — Auto-pause entire campaign if AEO event volume < 50 events/week (signals learning phase can't complete here — switch to MAI Method 11 instead).",
      "Auto-pause low AEO performers — Pause creatives below event-rate threshold per ad after 5-7 days.",
      "Auto-promote to T1 AEO — Validated winners cloned into T1 AEO template with same event objective. Direct path from cheap-validated → T1 scaling.",
    ],
  },
  {
    id: "mirror-bau",
    number: 13,
    name: "Mirror-BAU Testing",
    goal: "mobile-ua",
    bestFor:
      "Mature mobile UA accounts where cheap-geo correlation has failed, conservative testing on stable BAU campaigns, validating creatives that MUST work in production environment.",
    budgetLevel: "high",
    platform: ["meta", "tiktok"],
    timeToDecision: "5-days",
    andromedaCompat: "strong",
    summary:
      "Duplicate BAU campaign settings exactly. Drop new creatives in for 5-7 days. Most expensive per creative but most reliable signal — conditions are identical to scaling environment.",
    method: [
      "Duplicate your main BAU campaign settings exactly: same optimization (AEO event, ROAS target), same audience, same placements, same geos.",
      "Drop in the new creatives only — everything else identical.",
      "Run 5-7 days alongside BAU (same time window = same external conditions).",
      "Compare by primary BAU metric (IPM, CPI, AEO event rate, ROAS).",
      "Winners replace fatiguing BAU creatives.",
    ],
    pros:
      "Most reliable signal of all UA testing methods. Winners behave the same when scaled because conditions are identical. No correlation gap, no T3→T1 translation problem.",
    cons:
      "Most expensive approach per creative tested — you're testing in T1 / BAU geos at full CPI. Not viable for high-volume creative iteration (50+ ads/week) because cost scales linearly with volume.",
    pitfall:
      "Testing too many new creatives at once — dilutes BAU performance and Andromeda spreads spend thin. Limit to 2-4 new creatives per mirror cycle so BAU's existing winners still get majority of budget.",
    automation: [
      "One-click BAU clone — Scalemate clones the entire BAU campaign template — exact same optimization, audience, placements, geos — in 1 click. No manual rebuild = no config drift.",
      "Bulk swap creatives — From Drive, drag 2-4 new creatives → replace only the creatives in cloned campaign. Everything else stays identical.",
      "Auto-pause weak performers (Day 3) — Rule pauses any new creative that falls below BAU baseline × 1.3 CPI. Don't let losers drag down the mirror campaign.",
      "Day 5-7 winner declaration — Scalemate reports per-creative CPA + AEO event rate against BAU baseline. Winners clearly identified vs reference performance.",
      "Auto-replace BAU creative — Winners auto-cloned into BAU + fatigued BAU creative auto-paused. Mirror test transitions directly into production swap.",
    ],
  },
]

export const GOALS = [
  { id: "find-winners", label: "🎯 Find winners fast" },
  { id: "validate", label: "📊 Validate before scaling" },
  { id: "kill-losers", label: "🔪 Kill losers fast" },
  { id: "andromeda", label: "🧬 Andromeda-ready" },
  { id: "controlled", label: "🆚 Controlled comparison" },
  { id: "mobile-ua", label: "📱 Mobile UA (cost-optimized)" },
]

export const PLATFORMS = [
  { id: "meta", label: "Meta" },
  { id: "tiktok", label: "TikTok" },
]

export const BUDGET_LEVELS = [
  { id: "low", label: "< $5K/mo" },
  { id: "medium", label: "$5-25K/mo" },
  { id: "high", label: "$25K+/mo" },
]

export const TIME_TO_DECISION = [
  { id: "3-days", label: "3 days" },
  { id: "5-days", label: "5 days" },
  { id: "1-2-weeks", label: "1-2 weeks" },
  { id: "4-weeks-plus", label: "4+ weeks" },
]

export const ANDROMEDA_LABELS = {
  strong: { label: "Strong", emoji: "✅", color: "green" },
  mixed: { label: "Mixed", emoji: "⚠️", color: "amber" },
  weak: { label: "Weak", emoji: "❌", color: "red" },
}
