// 13 creative testing methods curated from industry-standard frameworks
// and mobile UA practice. Scalemate is the curator, not the inventor.
//
// Schema per method:
//   id, number, name
//   goal: "find-winners" | "validate" | "kill-losers" | "andromeda" | "controlled" | "mobile-ua"
//   bestFor (string)
//   budgetLevel: "low" | "medium" | "high"           (low <$10K/mo, med $10-40K/mo, high $40K+/mo) — controls filter tier
//   budgetLabel?: string                             (optional display override, e.g. "$5K+/mo" — falls back to tier label)
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
//   cardCaveat (optional — short one-liner rendered on the collapsed card for gated/non-automated methods)
//   flowImage (optional — path to per-method flow SVG in /public; rendered atop the expanded card, replaces the prose Method steps)

export const METHODS = [
  {
    id: "three-three-three",
    number: 1,
    name: "The 3-3-3 Method",
    flowImage: "/creative-testing/flows/3-3-3.svg",
    goal: "find-winners",
    bestFor:
      "Meta & TikTok · subscription apps, e-commerce, gaming · $40K+/mo accounts.",
    budgetLevel: "high",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "mixed",
    summary:
      "Your first winners in 72 hours. 3 ad sets × 3 creatives × 3 days — the fast, cheap way to find a starter winner. Works across subscription apps, e-commerce and gaming, at any account size.",
    method: [
      "3 distinct concepts — different hooks/angles, not 3 cuts of one ad.",
      "3 ad sets, identical targeting + budget ($50–150/day each), 1 ad each.",
      "Run 72h, no edits.",
      "Day 4: pause ad sets at CPA > 1.5× target; scale the winner.",
    ],
    pros: "Fast · cheap · forces 3 distinct concepts.",
    cons: "Noisy under $100/day. 3 days = before learning phase exits. Tests creative only, not audience fit.",
    pitfall:
      "3 versions of one ad isn't 3-3-3 — variation's too narrow and Andromeda picks the wrong winner.",
    automation: [
      "Template — save a 3-3-3 structure: 3 ad sets, 1 ad each, identical targeting + budget.",
      "Bulk launch — swap in 3 Drive creatives, launch all 3 ad sets in 2 clicks.",
      "Auto-pause — Day 4, cut any ad set at CPA > 1.5× target.",
      "Auto-promote — winner clones into your scaling campaign at 2× budget.",
      "Slack — daily status + winner called on Day 4.",
    ],
  },
  {
    id: "multi-variant-battery",
    number: 2,
    name: "Multi-Variant Battery (Andromeda Native)",
    flowImage: "/creative-testing/flows/multi-variant-battery.svg",
    goal: "andromeda",
    bestFor: "Shopping/Sales · broad audiences · post-Andromeda accounts.",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "strong",
    summary:
      "Stop fighting the algorithm. Load 7–20 creatives — different formats and concepts — into one broad ad set and let Andromeda find the pockets.",
    method: [
      "1 broad campaign, demographics-only targeting.",
      "Single ad set, single objective.",
      "Load 7–20 creatives — different formats and concepts.",
      "Phase 1 — at 48h, pause any creative with CPA > 1.5× target.",
      "Phase 2 — at 72h, scale survivors with CPA ≤ target (2× + add to BAU); pause the rest.",
    ],
    pros: "Algorithm-aligned. No manual audience-creative matching. Scales — more creatives = more pockets.",
    cons: "Needs 7–20 creatives. Hard to explain wins to stakeholders. Hard to attribute to specific choices.",
    pitfall:
      "Loading 20 near-identical creatives. Andromeda needs real diversity (format + concept + angle), not 20 carousels.",
    automation: [
      "Template — broad targeting, single ad set + objective.",
      "Bulk launch — drag the full batch; all creatives load into one ad set.",
      "Phase 1 auto-pause — cut any creative with CPA > 1.5× target at 48h.",
      "Phase 2 auto-promote — scale 2× + clone to every BAU campaign for survivors with CPA ≤ target at 72h.",
      "Slack alert — new winner posted the moment a creative passes Phase 2.",
    ],
  },
  {
    id: "three-two-two-sprint",
    number: 3,
    name: "The 3-2-2 Method (5-Day Sprint)",
    flowImage: "/creative-testing/flows/3-2-2-sprint.svg",
    goal: "find-winners",
    bestFor:
      "Testing creative communication hypotheses · 3 angles × 2 variations · a primary + backup winner in 5 days · $40K+/mo accounts.",
    budgetLevel: "high",
    platform: ["meta", "tiktok"],
    timeToDecision: "5-days",
    andromedaCompat: "mixed",
    summary:
      "A scaling-ready verdict in 5 days, not 14. Best when you're testing communication hypotheses in your creative — 3 different angles, 2 variations each.",
    method: [
      "3 ad sets × 2 creatives, 5-day run.",
      "Identical audience + budget ($150–300/day each — higher budget compresses signal).",
      "2 creatives compete inside each ad set.",
      "Day 5: pick winner per ad set by CPA; move top + #2 to scaling.",
    ],
    pros: "Faster than the 14-day version. In-ad-set variation suits Andromeda.",
    cons: "Tighter signal = more noise. Needs a daily budget of at least 3× your target CPA per ad set.",
    pitfall:
      "Throwing random ads into each ad set. Each ad set should test one hypothesis — e.g. same angle, different CTAs — so you learn why the winner won, not just which ad won.",
    automation: [
      "Template — 3 ad sets, 2 ads each, $150–300/day, identical targeting.",
      "Bulk launch — load 6 Drive creatives (2 per ad set) in 1 click.",
      "Auto-pause — Day 3, cut the worst ad sets at CPA > 1.5× target.",
      "Day 5 — Scalemate surfaces winner + #2 per ad set automatically.",
      "Auto-promote — top winner + backup clone to scaling at 2–3× budget.",
    ],
  },
  {
    id: "hooks-test",
    number: 4,
    name: "Hooks Test",
    flowImage: "/creative-testing/flows/hooks-test.svg",
    goal: "find-winners",
    bestFor:
      "Video-heavy teams (mobile UA, DTC) · refining a proven concept · $5K+/mo accounts.",
    budgetLevel: "medium",
    budgetLabel: "$5K+/mo",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "strong",
    summary:
      "Hook rate decides what spend a creative gets early — the body decides what converts to purchase. Hold a body that already converts, swap hooks, scale the one that unlocks volume.",
    method: [
      "Take one winning video.",
      "Make 3–5 variants — different first 3 seconds only.",
      "Keep body + end identical.",
      "Run in an Advantage+ CBO campaign — 1 ad set per hook, 1 ad each.",
      "After 1K+ impressions/variant, cut bottom 50% by hook-rate.",
    ],
    pros: "Isolates the hook cleanly. Compounds a proven concept. Fast once you have a base winner.",
    cons: "Needs editing capacity. Refines, doesn't discover. Hook-rate ≠ ROAS.",
    pitfall:
      "Comparing hook rates across different campaigns instead of within one test — hook-rate is context-dependent.",
    automation: [
      "Template — Advantage+ CBO campaign, 1 ad set per hook, 1 ad each, primary metric = hook rate.",
      "Bulk launch — drag 5 Drive variants into the ad set, launch.",
      "Auto-pause — cut any variant under control × 1.2 hook-rate after 2K impressions.",
      "Winner — reporting tags the top hook for the next batch.",
      "Next cycle — Slack alert when one variant clears 1.5× control to prompt iteration.",
    ],
  },
  {
    id: "meta-conversion-lift",
    number: 5,
    name: "Meta Conversion Lift Test",
    goal: "validate",
    accessCaveat:
      "Not self-serve for most accounts — needs a Meta rep or Business Partner access. If you've never seen 'Conversion Lift' in your Experiments menu, you don't have it — use Meta Native A/B Test (Method 10) instead.",
    cardCaveat:
      "Meta-gated · measurement-only — the Lift study runs through Meta, not Scalemate.",
    bestFor:
      "Enterprise w/ Meta rep · $75K+/mo accounts · validating a big change before scaling 2–3×.",
    budgetLevel: "high",
    budgetLabel: "$75K+/mo",
    platform: ["meta"],
    timeToDecision: "4-weeks-plus",
    andromedaCompat: "strong",
    summary:
      "Settle 'did the ad actually cause that sale?' with finance. A true hold-out measures incremental conversions — but it's gated to enterprise teams with a Meta rep and $30K+ for the study.",
    method: [
      "Request a Lift study via your Meta rep.",
      "Meta splits users into test (sees ads) vs hold-out (doesn't).",
      "Run 4+ weeks for a valid sample.",
      "Define the conversion event.",
      "Meta reports incremental conversions + cost per incremental conversion.",
    ],
    pros: "Highest-quality incrementality Meta offers. Separates 'ad drove this' from 'would've converted anyway.' Ends attribution debates.",
    cons: "Gated — needs a Meta rep. 4+ week cycle. $30K+ for the study. One decision at a time, not a daily tool.",
    pitfall:
      "Assuming it's the same as the A/B Test option. A/B compares two live variants; Lift uses a true hold-out. A/B can't measure incrementality.",
    automation: [
      "Pre-Lift — Scalemate locks current variants (no rotation during the 4-week window).",
      "During — dashboard reports CPA + ROAS in parallel so finance sees both.",
      "Post-Lift — flip 'scaling mode' once incrementality is confirmed.",
      "Auto-scale — +20%/day when ROAS > target × 1.1, auto-revert on a 15% drop.",
      "Slack — daily scaling-action summary for team + finance.",
    ],
  },
  {
    id: "bulk-cbo-2-phase",
    number: 6,
    name: "Bulk Creative Test in CBO (2-Phase Funnel Progression)",
    flowImage: "/creative-testing/flows/bulk-cbo-2-phase.svg",
    goal: "validate",
    bestFor:
      "High-volume R&D teams · 30+ creatives/cycle · AI-generation pipelines · $10K+/mo accounts.",
    budgetLevel: "medium",
    budgetLabel: "$10K+/mo",
    platform: ["meta", "tiktok"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "Test 12–75 creatives a cycle without funding duds. Phase 1 cuts the bottom 50–70% on cheap signal; Phase 2 validates survivors on revenue. For R&D + AI-creative pipelines.",
    method: [
      "1 CBO campaign, 4–5 ad sets (broad or diversified lookalikes).",
      "3–15 ads per ad set (12–75 total).",
      "Phase 1 (3–5d): let CBO allocate; cut bottom 50–70% on upper-funnel signal (installs / registrations / add-to-cart).",
      "Phase 2 (3–7d): keep top 20–40%; judge on lower-funnel (purchases / trials / paying users).",
      "Move final 5–10 winners to scaling.",
    ],
    pros: "Tests volume efficiently (12–75 vs 9). 2-phase saves budget. Built for AI creative pipelines. Matches how CBO allocates.",
    cons: "Needs 12–75 creatives. Phase 1 metric choice is critical — wrong signal cuts real winners. 6–12 day cycle.",
    pitfall:
      "Treating Phase 1 metrics as final. High install rate ≠ high purchase rate. Phase 2 exists to weed those out — don't skip it.",
    automation: [
      "Template — CBO campaign, 4–5 ad sets, single objective.",
      "Bulk launch — drag 12–75 Drive creatives; Scalemate spreads 3–15 per ad set.",
      "Phase 1 auto-pause (Day 3) — cut bottom 50–70% on upper-funnel events.",
      "Phase 2 auto-pause (Day 5–8) — cut survivors failing lower-funnel CPA.",
      "Auto-promote — final winners clone to scaling at 2–3×; batch tagged 'winner library.'",
    ],
  },
  {
    id: "static-vs-video",
    number: 7,
    name: "Static vs Video Test",
    flowImage: "/creative-testing/flows/static-vs-video.svg",
    goal: "kill-losers",
    bestFor:
      "New accounts · format transitions · vertical-specific calls (mobile UA, eCom Reels).",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "Stop guessing whether your offer wants video or static. 3 ad sets — static / video / mixed, same concept — tells you where to point production budget.",
    method: [
      "3 ad sets: static-only, video-only, mixed.",
      "Same concept across all 3.",
      "Same audience + budget ($100–200/day each).",
      "Run 7–14 days.",
      "Compare CPA, CTR, hook rate, watch-through by format.",
    ],
    pros: "Ends the 'video always wins' assumption. Data-backed format strategy.",
    cons: "Needs both formats produced. Result varies by funnel stage (TOFU = video, BOFU = static).",
    pitfall:
      "Calling video the winner on engagement when static had better CPA. Optimize for the business metric, not engagement.",
    automation: [
      "Template — 3 ad sets (static / video / mixed), identical targeting + budget.",
      "Bulk launch — drag 6 static + 6 video + 6 mixed; 6 per ad set in 1 click.",
      "Auto-pause — cut anything under 0.5% CTR after 500 impressions.",
      "Format reporting — dashboard shows aggregate CPA per format, not just per ad.",
      "Auto-promote — winning format's top 2 clone to scaling; lock the format default.",
    ],
  },
  {
    id: "refresh-cadence",
    number: 8,
    name: "Creative Refresh Cadence",
    flowImage: "/creative-testing/flows/refresh-cadence.svg",
    goal: "andromeda",
    bestFor: "Any team running winners 30+ days · critical post-Andromeda.",
    budgetLevel: "low",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "strong",
    summary:
      "Catch fatigue before it eats your CPA. Watch frequency, CTR, CPA and hook-rate on every live creative and swap the moment one breaks. Mandatory post-Andromeda — cycles dropped to 7–14 days.",
    method: [
      "Track per-creative weekly: frequency, CPA, CTR, hook rate.",
      "Replace when frequency > 3.0, CTR −20% from peak, CPA +30%, or hook-rate −15% (video).",
      "Swap in a variation of the winner, not a brand-new concept.",
      "Pause the fatigued creative immediately.",
    ],
    pros: "Stops budget waste on dying creative. Holds campaign CPA. Forces a refresh rhythm.",
    cons: "Needs a steady creative pipeline. Maintenance, not discovery.",
    pitfall:
      "Replacing with a new concept instead of a variation — fresh concepts need their own test; a variation inherits 70–80% of the winner.",
    automation: [
      "Always-on monitor — watches every creative for fatigue triggers.",
      "Slack — instant DM with creative ID + which metric broke.",
      "Auto-pause — cuts the fatiguing creative the same hour.",
      "Auto-swap — pulls the next variant from a tagged Drive queue. Zero campaign holes.",
      "Weekly — which creatives fatigued, replacement performance, cycle time.",
    ],
  },
  {
    id: "control-ad-test",
    number: 9,
    name: "Control Ad Test (Equal Impressions vs Winner)",
    flowImage: "/creative-testing/flows/control-ad-test.svg",
    goal: "controlled",
    bestFor:
      "Teams with an established winner · iterating a replacement · app teams (IPM), web teams (CVR).",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "5-days",
    andromedaCompat: "mixed",
    summary:
      "The cleanest yes/no on whether a challenger should replace your champion. Equal impressions, then stop — no time or audience bias. Compare by IPM (app) or CVR (web).",
    method: [
      "Use your proven winner as control.",
      "2 ad sets (identical audience) OR 1 ad set with 2 ads, standard delivery (not Dynamic Creative).",
      "Run until both hit the same impressions (5K / 10K / 20K).",
      "Pause both at target — don't let the leader run on.",
      "Wait 24–48h for attribution, compare by IPM / CVR / lead CPA.",
    ],
    pros: "Cleanest head-to-head. Controls time-of-day, day-of-week, audience drift. Equal sample sizes.",
    cons: "Needs manual impression monitoring. Attribution lag delays the call. Not parallelizable (5 challengers = 5 runs).",
    pitfall:
      "Stopping one at target but letting the other run 'a bit longer' — re-introduces time bias. If one lags, raise its budget to catch up.",
    automation: [
      "Template — 2 ad sets, or 1 ad set with 2 ads (no Dynamic Creative).",
      "Equal-impressions auto-pause — both pause within minutes of the target, no manual watching.",
      "Attribution lag — reporting holds 48h post-pause so late conversions count.",
      "Decision metric — IPM (app) / CVR (web) / lead CPA per ad.",
      "Winner — at ≥1.1× control, clone to BAU + auto-pause the old control.",
    ],
  },
  {
    id: "meta-ab-test",
    number: 10,
    name: "Meta Native A/B Test",
    flowImage: "/creative-testing/flows/meta-ab-test.svg",
    goal: "controlled",
    bestFor:
      "Teams wanting native attribution + Meta-handled splitting + a clear verdict, no manual setup.",
    budgetLevel: "medium",
    platform: ["meta"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "strong",
    summary:
      "Let Meta do the stats. The native Experiments tool splits the audience, runs the test and declares a winner with confidence. For teams without a data analyst.",
    method: [
      "Ads Manager → Experiments → A/B Test.",
      "Pick 2–4 ads / ad sets / campaigns.",
      "Set duration (7–14d min) or a spend cap per variant.",
      "Meta splits the audience — no overlap.",
      "Judge by your chosen metric: hook rate, CTR, CVR, or CPA.",
    ],
    pros: "Meta handles the math. Auto-splits to remove overlap bias. Clear 'Variant X won, Y% confidence.'",
    cons: "7-day min even for small tests. Only 2–4 variants. Meta optimizes for confidence, not always your metric.",
    pitfall:
      "Setting the wrong primary metric — pick CTR and Meta crowns the high-CTR variant even if its CPA is worse. Set primary = the metric you'll act on.",
    automation: [
      "Parallel monitor — Scalemate tracks CPA + ROAS + hook rate per variant alongside Meta.",
      "Slack on verdict — Meta's call + Scalemate's full breakdown, side by side.",
      "Disagreement check — flags when Meta's winner conflicts with your business KPI.",
      "Auto-promote — if both agree, clone the winner to scaling.",
      "Loser archive — losing variants tagged in Drive for future learning.",
    ],
  },
  {
    id: "cheap-geo-ww",
    number: 11,
    name: "Cheap Geo / WW Testing",
    flowImage: "/creative-testing/flows/cheap-geo-ww.svg",
    goal: "mobile-ua",
    bestFor:
      "Mobile UA · $1K+/day per geo · high creative volume · proven cheap-geo→T1 correlation.",
    budgetLevel: "medium",
    platform: ["meta", "tiktok"],
    timeToDecision: "3-days",
    andromedaCompat: "mixed",
    summary:
      "Test 4–10× more creatives per dollar. Run early tests in T3 geos or WW MAI where CPI is a fraction of T1, then promote winners home. Mobile UA only — and only after correlation is proven.",
    method: [
      "MAI campaign in T3 geos (Indonesia, Philippines, Brazil, Vietnam) or a WW MAI biased to cheap inventory.",
      "Run creatives at 4–10× lower CPI than T1.",
      "Judge by IPM + CPI.",
      "Promote winners to a T1 AEO/ROAS campaign.",
      "Small accounts (<$1–2K/day): move winners straight to BAU.",
    ],
    pros: "4–10× cheaper testing. More creatives per dollar. Fast install volume = fast signal.",
    cons: "Only works when cheap-geo winners correlate with T1. Strong for utilities/casual games, weak for premium/payment-heavy apps.",
    pitfall:
      "Promoting T3 winners to T1 without validating correlation. Some win cheap on low-intent T3 audiences and flop in T1. Validate the top 5 first.",
    automation: [
      "Templates — T3/WW MAI test + T1 AEO/ROAS scaling, reusable.",
      "Bulk launch in T3 — drag the batch; cheap impressions start flowing.",
      "Auto-pause (Day 2) — cut creatives under IPM threshold; T3 signal is fast.",
      "Correlation gate — one-time manual check: top 5 T3 winners vs T1 baseline.",
      "Auto-promote — validated winners clone T3 → T1 with budget scaling.",
    ],
  },
  {
    id: "cheap-geo-aeo",
    number: 12,
    name: "Cheap Geo + AEO (Combined)",
    flowImage: "/creative-testing/flows/cheap-geo-aeo.svg",
    goal: "mobile-ua",
    bestFor:
      "Mobile UA w/ proven cheap-geo AEO correlation · enough conversion volume for AEO learning.",
    budgetLevel: "high",
    platform: ["meta", "tiktok"],
    timeToDecision: "1-2-weeks",
    andromedaCompat: "mixed",
    summary:
      "Cheap-geo prices, AEO-quality signal. Filter creatives on the event that actually matters (d3 retention, first purchase, level-5) without paying T1 CPIs. Needs 50+ AEO events/week.",
    method: [
      "AEO campaign in T3 cheap geos.",
      "Pick an AEO event tied to monetization (d3 retention, 1st purchase, level-5, 1st top-up).",
      "Test creatives; score on AEO event rate, not just IPM.",
      "Promote winners to a T1 AEO campaign, same event.",
    ],
    pros: "Cost savings + signal quality. AEO outcomes mean more than raw installs.",
    cons: "AEO needs volume — under ~50 events/week the learning phase never closes. Validate event throughput first.",
    pitfall:
      "Running AEO on thin volume. ~50 events/week minimum; at 10/week you get random delivery, not optimization.",
    automation: [
      "Template — cheap-geo AEO campaign tied to your monetization event.",
      "Bulk launch — load the batch into the AEO campaign in cheap geos.",
      "Event-volume safety — auto-pause the campaign if AEO events < 50/week (switch to MAI Method 11).",
      "Auto-pause — cut creatives under event-rate threshold after 5–7 days.",
      "Auto-promote — validated winners clone to T1 AEO, same objective.",
    ],
  },
  {
    id: "mirror-bau",
    number: 13,
    name: "Mirror-BAU Testing",
    goal: "mobile-ua",
    bestFor:
      "Mature mobile UA where cheap-geo correlation failed · creatives that must work in production.",
    budgetLevel: "high",
    platform: ["meta", "tiktok"],
    timeToDecision: "5-days",
    andromedaCompat: "strong",
    summary:
      "Test creatives in the exact conditions they'll have to survive. Clone your BAU campaign, swap in 2–4 new creatives, run 5–7 days in parallel. Priciest per test, most reliable signal — no T3→T1 gap.",
    method: [
      "Duplicate your BAU campaign exactly — optimization, audience, placements, geos.",
      "Swap in the new creatives only.",
      "Run 5–7 days alongside BAU.",
      "Compare by BAU metric (IPM, CPI, AEO event rate, ROAS).",
      "Winners replace fatiguing BAU creatives.",
    ],
    pros: "Most reliable signal of any UA method. Winners behave the same when scaled. No correlation gap.",
    cons: "Priciest per creative — full T1/BAU CPI. Not for high-volume iteration (cost scales linearly).",
    pitfall:
      "Testing too many at once dilutes BAU and spreads spend thin. Limit to 2–4 per mirror cycle.",
    automation: [
      "One-click BAU clone — exact optimization, audience, placements, geos. No config drift.",
      "Bulk swap — drag 2–4 new Drive creatives, replace only the creatives.",
      "Auto-pause (Day 3) — cut new creatives under BAU baseline × 1.3 CPI.",
      "Day 5–7 — per-creative CPA + AEO rate vs BAU baseline.",
      "Auto-replace — winners clone into BAU; fatigued BAU creative auto-paused.",
    ],
  },
  {
    id: "cbo-spend-gated",
    number: 14,
    name: "CBO Spend-Gated Test (1 Ad/Set)",
    goal: "find-winners",
    bestFor:
      "Teams wanting isolated $-gated reads · clean per-variant signal · no in-adset competition.",
    budgetLevel: "medium",
    budgetLabel: "$10K+/mo",
    platform: ["meta", "tiktok"],
    timeToDecision: "5-days",
    andromedaCompat: "mixed",
    summary:
      "Isolate every variant in its own ad set. CBO allocates spend; pause gates fire at $60 (CPI check) and $150 (CPA check). Survivors scale 1.5× and push as new ads into every BAU campaign.",
    method: [
      "1 CBO campaign · 1 ad set per variant · 1 ad each.",
      "Phase 1 — at $60 ad-set spend, pause if CPI > 1.5× target.",
      "Phase 2 — at $150 ad-set spend, pause if CPA > 1.5× target.",
      "Survivors: scale 1.5× budget + clone as new ad into every active BAU campaign.",
    ],
    pros: "Clean per-variant read — no ads competing inside an ad set. Spend-based gates adapt to account pace. Survivors land in BAU as proven, not theoretical.",
    cons: "More ad sets = more learning phases to feed. CBO may underspend low-CTR variants before they hit Phase 1 gate. Fights Andromeda's 'feed many in one' instinct.",
    pitfall:
      "Setting CPI/CPA targets too tight. Use the BAU running average × 1.5, not an aspirational target — otherwise you cut variants that just needed a wider audience pocket.",
    automation: [
      "Template — CBO campaign, 1 ad set per variant, 1 ad each.",
      "Bulk launch — drag N creatives from Drive; Scalemate auto-creates N ad sets + 1 ad per set.",
      "Phase 1 auto-pause — cut when adset spend ≥ $60 AND CPI > 1.5× target.",
      "Phase 2 auto-pause — cut when adset spend ≥ $150 AND CPA > 1.5× target.",
      "Auto-promote — survivor clones at 1.5× budget + adds as new ad to every active BAU campaign.",
    ],
  },
]

// Goal icons are mapped by id in LibraryClient (Tabler icons, not emoji).
export const GOALS = [
  { id: "find-winners", label: "Find winners fast" },
  { id: "validate", label: "Validate before scaling" },
  { id: "kill-losers", label: "Cut losers fast" },
  { id: "andromeda", label: "Andromeda-ready" },
  { id: "controlled", label: "Controlled comparison" },
  { id: "mobile-ua", label: "Mobile UA (cost-optimized)" },
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

// Catalog-grid data per method (keyed by id).
//   duration, creos, setup — stat-row values
//   flow.caption — one-line "how it tests creatives"
//   flow.steps — compact node flow. Step shapes:
//     { l, s, q?, t? }            single node (q = decision/gate, t = "win"|"kill" tone)
//     { group: [{l,s}], note? }   parallel chips
//     { branch: [{l,s,t}, {l,s,t}] }  two outcomes (t = "win"|"kill"|"neutral")
export const CATALOG = {
  "three-three-three": {
    duration: "3d",
    creos: "9",
    setup: "10 min",
    flow: {
      caption: "3 concepts · 72h · CPA gate",
      steps: [
        { l: "Bulk launch", s: "3 ad sets" },
        {
          group: [
            { l: "Concept A", s: "1 ad" },
            { l: "Concept B", s: "1 ad" },
            { l: "Concept C", s: "1 ad" },
          ],
        },
        { l: "Run 72 hours", s: "no edits" },
        { l: "CPA ≤ 1.5× target?", s: "evaluated day 4", q: true },
        {
          branch: [
            { l: "Pause set", s: "loser", t: "kill" },
            { l: "Scale 2×", s: "winner", t: "win" },
          ],
        },
        { l: "Slack the team", s: "winner ID + scale plan" },
        {
          l: "Log to Google Sheets",
          s: "assign test status · build the library",
        },
      ],
    },
  },
  "three-two-two-sprint": {
    duration: "5d",
    creos: "6",
    setup: "15 min",
    flow: {
      caption: "5-day verdict · worst-performer pause · top 2",
      steps: [
        { l: "Bulk launch", s: "3 ad sets · 6 ads" },
        {
          group: [
            { l: "Ad set A", s: "2 ads" },
            { l: "Ad set B", s: "2 ads" },
            { l: "Ad set C", s: "2 ads" },
          ],
        },
        {
          l: "Day 3 — worst-performer pause",
          s: "pause if CPA > 2× target",
          q: true,
        },
        {
          branch: [
            { l: "Worst paused", s: "removed day 3", t: "kill" },
            { l: "Survivors run on", s: "to day 5", t: "neutral" },
          ],
        },
        { l: "Day 5 — rank top 2", s: "best CPA per ad set", q: true },
        {
          branch: [
            { l: "Scale best ad", s: "own ad set · 2–3×", t: "win" },
            { l: "Keep 2nd best", s: "fallback if leader tires", t: "neutral" },
          ],
        },
        { l: "Add top 2 → BAU", s: "into all active campaigns" },
      ],
    },
  },
  "hooks-test": {
    duration: "7d",
    creos: "5",
    setup: "20 min",
    flow: {
      caption: "1 body · 5 hook variants",
      steps: [
        { l: "Winning concept", s: "keep body, swap hook" },
        {
          framedGroup: {
            header: "5 hook variants · same body",
            items: [
              { l: "Hook A" },
              { l: "Hook B" },
              { l: "Hook C" },
              { l: "Hook D" },
              { l: "Hook E" },
            ],
          },
        },
        { l: "Advantage+ campaign · CBO", s: "1 ad set · 1 ad per hook" },
        {
          l: "Auto-pause rule",
          s: "hook-rate > 1.2× control · CPA ≤ target",
          q: true,
        },
        {
          branch: [
            { l: "Variant paused", s: "weak hook cut", t: "kill" },
            { l: "Scale winner", s: "≥1.5× control by hook-rate", t: "win" },
          ],
        },
      ],
    },
  },
  "meta-conversion-lift": {
    duration: "28d",
    creos: "∞",
    setup: "By Request",
    flow: {
      caption: "Hold-out study · 4 weeks · incrementality",
      steps: [
        { l: "Meta rep request", s: "Lift study via your rep" },
        {
          group: [
            { l: "Test group", s: "sees ads" },
            { l: "Hold-out", s: "no ads — control" },
          ],
        },
        { l: "Run 4+ weeks", s: "for valid sample" },
        { l: "Define event", s: "incremental conversions", q: true },
        {
          branch: [
            { l: "No lift", s: "do not scale", t: "kill" },
            { l: "Lift confirmed", s: "scale 2–3×", t: "win" },
          ],
        },
      ],
    },
  },
  "bulk-cbo-2-phase": {
    duration: "12d",
    creos: "44",
    setup: "30 min",
    flow: {
      caption: "CBO · 12–75 ads · 2-phase funnel",
      steps: [
        { l: "CBO campaign", s: "auto-budget · 4–5 ad sets" },
        {
          group: [
            { l: "Adset 1", s: "3–15 ads" },
            { l: "Adset 2", s: "3–15 ads" },
            { l: "Adset 3", s: "3–15 ads" },
            { l: "Adset 4", s: "3–15 ads" },
          ],
        },
        { l: "Phase 1 · day 3", s: "upper-funnel signal", q: true },
        {
          branch: [
            { l: "Cut 50–70%", s: "weak upper-funnel", t: "kill" },
            { l: "Top 30–40%", s: "advance to P2", t: "neutral" },
          ],
        },
        { l: "Phase 2 · day 5–8", s: "revenue signal", q: true },
        {
          branch: [
            { l: "Cut on revenue", s: "no purchases", t: "kill" },
            { l: "Scale 2–3×", s: "5–10 final winners", t: "win" },
          ],
        },
      ],
    },
  },
  "static-vs-video": {
    duration: "5d",
    creos: "18",
    setup: "20 min",
    flow: {
      caption: "Same concept · 3 formats · CTR + CPA gate",
      steps: [
        { l: "Launch — same concept", s: "3 formats · equal budget" },
        {
          group: [
            { l: "Static only", s: "6 ads" },
            { l: "Video only", s: "6 ads" },
            { l: "Mixed", s: "6 ads" },
          ],
        },
        { l: "Auto-pause ads", s: "CTR < 0.5% · 500 impr", t: "kill" },
        { l: "Format reporting", s: "aggregate CPA per format" },
        { l: "Scale top 2", s: "clone winning format", t: "win" },
        { l: "Lock format", s: "as default" },
      ],
    },
  },
  "multi-variant-battery": {
    duration: "3d",
    creos: "14",
    setup: "15 min",
    flow: {
      caption: "Broad campaign · 7–20 creatives · 2-phase CPA gates",
      steps: [
        { l: "Broad campaign", s: "1 ad set · single objective" },
        { l: "Load 7–20 creatives", s: "different formats × concepts" },
        { l: "Andromeda allocates", s: "finds the pockets" },
        { l: "Phase 1 · 48h", s: "CPA check", q: true },
        {
          branch: [
            { l: "Pause creative", s: "CPA > 1.5× target", t: "kill" },
            { l: "Continue → P2", s: "CPA in range", t: "neutral" },
          ],
        },
        { l: "Phase 2 · 72h", s: "winner check", q: true },
        {
          branch: [
            { l: "Pause", s: "CPA > target", t: "kill" },
            { l: "Scale 2× + BAU", s: "Slack: new winner ✓", t: "win" },
          ],
        },
      ],
    },
  },
  "refresh-cadence": {
    duration: "14d",
    creos: "—",
    setup: "Once",
    flow: {
      caption: "Always-on monitor · 4 fatigue triggers",
      steps: [
        { l: "Always-on monitor", s: "every live winner · 24/7" },
        {
          group: [
            { l: "Freq > 3.0" },
            { l: "CTR −20%" },
            { l: "CPA +30%" },
            { l: "Hook −15%" },
          ],
          note: "any one fires",
        },
        { l: "Slack DM", s: "creative ID + metric" },
        { l: "Auto-pause", s: "cuts fatiguing creative", t: "kill" },
        { l: "Auto-swap variation", s: "next from tagged queue", t: "win" },
        { l: "Weekly report", s: "fatigued · repl · cycle time" },
      ],
    },
  },
  "control-ad-test": {
    duration: "4d",
    creos: "2",
    setup: "15 min",
    flow: {
      caption: "Champion vs Challenger · equal impressions",
      steps: [
        {
          group: [
            { l: "Champion", s: "proven control" },
            { l: "Challenger", s: "new variation" },
          ],
        },
        { l: "Equal impressions", s: "both stop at 5K / 20K" },
        { l: "Hold 48h", s: "attribution lag" },
        { l: "Challenger ≥ 1.1× control?", s: "on decision metric", q: true },
        {
          branch: [
            { l: "Champion stays", s: "challenger dropped", t: "neutral" },
            {
              l: "Challenger wins",
              s: "clone to BAU · retire control",
              t: "win",
            },
          ],
        },
      ],
    },
  },
  "meta-ab-test": {
    duration: "10d",
    creos: "4",
    setup: "10 min",
    flow: {
      caption: "Meta Experiments · native split · 7–14d",
      steps: [
        { l: "Ads Manager → Experiments", s: "A/B Test" },
        {
          group: [
            { l: "Variant A" },
            { l: "Variant B" },
            { l: "Variant C" },
            { l: "Variant D" },
          ],
          note: "2–4 ads / ad sets",
        },
        { l: "Meta splits audience", s: "no overlap · 7–14 days" },
        { l: "Scalemate parallel", s: "CPA · ROAS · hook rate", q: true },
        {
          branch: [
            { l: "Disagreement", s: "Meta winner ≠ your KPI", t: "kill" },
            { l: "Both agree", s: "auto-promote winner", t: "win" },
          ],
        },
      ],
    },
  },
  "cheap-geo-ww": {
    duration: "6d",
    creos: "40",
    setup: "30 min",
    flow: {
      caption: "T3/WW MAI · IPM gate · validate to T1",
      steps: [
        { l: "T3 / WW MAI campaign", s: "Indonesia · Philippines · Brazil" },
        { l: "Day 2 auto-pause", s: "cut below IPM threshold" },
        { l: "Correlation gate", s: "manual: top 5 T3 vs T1 baseline" },
        { l: "T3 ↔ T1 correlation OK?", s: "before mass promotion", q: true },
        {
          branch: [
            { l: "Reject T3 win", s: "cheap-geo only", t: "kill" },
            { l: "Promote → T1", s: "AEO/ROAS scaling", t: "win" },
          ],
        },
      ],
    },
  },
  "cheap-geo-aeo": {
    duration: "7d",
    creos: "25",
    setup: "45 min",
    flow: {
      caption: "T3 AEO · event-volume safety · promote",
      steps: [
        { l: "T3 AEO campaign", s: "tied to monetization event" },
        { l: "AEO events ≥ 50/wk?", s: "learning-phase safety", q: true },
        {
          branch: [
            {
              l: "Auto-pause campaign",
              s: "switch to MAI (method 11)",
              t: "kill",
            },
            { l: "Volume OK", s: "continue testing", t: "neutral" },
          ],
        },
        { l: "Day 5–7 cut", s: "below event-rate threshold", t: "kill" },
        { l: "Promote → T1 AEO", s: "same monetization event", t: "win" },
      ],
    },
  },
  "mirror-bau": {
    duration: "7d",
    creos: "4",
    setup: "20 min",
    flow: {
      caption: "Clone BAU · swap creatives · run parallel",
      steps: [
        { l: "Clone BAU campaign", s: "same audience · same placements" },
        { l: "Swap 2–4 creatives", s: "fresh challengers only" },
        { l: "Run 5–7 days parallel", s: "vs. live BAU" },
        { l: "Beats BAU CPA?", s: "side-by-side compare", q: true },
        {
          branch: [
            { l: "Discard challenger", s: "BAU continues", t: "kill" },
            { l: "Promote to BAU", s: "swap into live", t: "win" },
          ],
        },
      ],
    },
  },
  "cbo-spend-gated": {
    duration: "5-7d",
    creos: "8",
    setup: "15 min",
    flow: {
      caption: "1 ad/set · $60 + $150 spend gates · BAU sync",
      steps: [
        { l: "CBO campaign", s: "1 ad set per variant · 1 ad each" },
        {
          group: [
            { l: "Adset 1", s: "1 ad" },
            { l: "Adset 2", s: "1 ad" },
            { l: "Adset 3", s: "1 ad" },
            { l: "Adset 4", s: "1 ad" },
          ],
        },
        { l: "Phase 1 · $60 spend", s: "CPI check", q: true },
        {
          branch: [
            { l: "Pause adset", s: "CPI > 1.5× target", t: "kill" },
            { l: "Continue → P2", s: "CPI in range", t: "neutral" },
          ],
        },
        { l: "Phase 2 · $150 spend", s: "CPA check", q: true },
        {
          branch: [
            { l: "Pause adset", s: "CPA > 1.5× target", t: "kill" },
            {
              l: "Scale 1.5× + BAU",
              s: "clone as new ad to all BAU",
              t: "win",
            },
          ],
        },
      ],
    },
  },
}
