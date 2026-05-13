// 34 rules total — 29 production-tested from live customer accounts
// (DTC subscription, mobile apps, DTC e-commerce, performance teams running
// $1M+/month Meta spend) plus 5 framework rules from Scalemate's playbook
// (creative testing phases 1-3 + Slack-notify fatigue tracker).
// Source: data/rules-library/export-rules.json (NOT in public/ — internal only).
// Client identifiers stripped during transform; vertical labels only.
//
// Schema per rule (Phase 1.6):
//   id, objective, title, goal, level, platform, schedule
//   source: "production" | "playbook"
//   testingPhase?: 1 | 2 | 3   (creative-testing rules only)
//   tasks: [{
//     timeframe,
//     conditions: [{
//       metric, metricLabel, operator,
//       benchmarkType, multiplier, productionValue, unit,
//       anchorBenchmark?,   // only when benchmarkType === "spend_floor"
//       note?               // optional inline parenthetical hint
//     }],
//     action
//   }]
//   whenToUse, nativeLimitation
//
// objective vocab:
//   "sales"           — Sales / AEO / ROAS objective (purchase funnel)
//   "app-promotion"   — App Promotion (mobile UA — installs, IPM, CPI)
//
// benchmarkType vocab:
//   "cpa"            — recalculated against user's breakeven CPA (default $50)
//   "cpc"            — recalculated against user's CPC bid ceiling (default $1.50)
//   "roas"           — recalculated against user's ROAS target (default 2.0)
//   "cpi"            — recalculated against user's CPI target (default $5)
//   "cpm"            — recalculated against user's CPM benchmark (default $20)
//   "spend_floor"    — recalculated as multiplier × inputs[anchorBenchmark]
//                      (anchorBenchmark ∈ {"cpa","cpc","roas","cpi","cpm"}, default "cpa")
//   "absolute_spend" — fixed budget threshold, not benchmark-derived (multiplier=null);
//                      only used for self-referential comparisons like "spend ≥ daily budget"
//   "absolute_count" — integer event floors (purchases, checkouts, etc.)

export const RULE_GOALS = [
  { id: "all", label: "All goals" },
  { id: "stop-loss", label: "Stop loss" },
  { id: "scale-winners", label: "Scale winners" },
  { id: "creative-pruning", label: "Creative pruning" },
  { id: "budget-control", label: "Budget control" },
  { id: "reactivate", label: "Reactivate" },
  { id: "creative-fatigue", label: "Creative fatigue" },
]

export const RULE_LEVELS = [
  { id: "all", label: "All levels" },
  { id: "campaign", label: "Campaign" },
  { id: "ad-set", label: "Ad set" },
  { id: "ad", label: "Ad" },
]

export const RULE_OBJECTIVES = [
  { id: "all", label: "All objectives" },
  { id: "sales", label: "Sales" },
  { id: "app-promotion", label: "App Promotion" },
]

export const GOAL_LABELS = Object.fromEntries(RULE_GOALS.map(g => [g.id, g.label]))
export const LEVEL_LABELS = Object.fromEntries(RULE_LEVELS.map(l => [l.id, l.label]))
export const OBJECTIVE_LABELS = Object.fromEntries(RULE_OBJECTIVES.map(o => [o.id, o.label]))

const ALL_RULES = [
  {
    "id": "rule-21",
    "objectives": ["sales"],
    "source": "production",
    "title": "Scale or trim ad set budget by purchase performance",
    "goal": "scale-winners",
    "level": "ad-set",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 5,
            "unit": "count"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 0.9,
            "productionValue": 45,
            "unit": "currency"
          }
        ],
        "action": "Increase ad set budget by 20%"
      },
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.0,
            "productionValue": 100,
            "unit": "currency"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 1.1,
            "productionValue": 55,
            "unit": "currency"
          }
        ],
        "action": "Decrease ad set budget by 15%"
      }
    ],
    "whenToUse": "A two-sided scale rule for ad sets where the team has clear unit economics — over a 3-day window, under 0.9× breakeven CPA scales up (clearly profitable), over 1.1× CPA with 2× CPA spent trims back (clearly above breakeven). The 3-day window smooths out daily attribution noise so neither side fires on a single bad/good day. The 3-hour cadence gives the auction time to stabilise after each budget change. DTC subscription teams running 50+ ad sets use this as the daily auto-tuner.",
    "nativeLimitation": "Meta evaluates the scale-up and trim conditions independently — no guarantee about evaluation order, and a third condition (like ROAS confirmation) can't be added inside the same rule. The 3-day window also reads on attribution-lagged data: a purchase fired at 11pm UTC may not be counted by the time the rule evaluates the next morning, so the cost-per-purchase figure can briefly look worse than reality. The 0.9× / 1.1× thresholds intentionally leave a 0.2× CPA dead zone between scale and trim — by design, so borderline ad sets aren't toggled back and forth every 3 hours."
  },
  {
    "id": "rule-23",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause failing ad sets while scaling proven spend bands",
    "goal": "scale-winners",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 40 minutes",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 3.0,
            "productionValue": 150,
            "unit": "currency"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 2.0,
            "productionValue": 100,
            "unit": "currency"
          }
        ],
        "action": "Pause ad set"
      },
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.8,
            "productionValue": 90,
            "unit": "currency"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 0.9,
            "productionValue": 45,
            "unit": "currency"
          }
        ],
        "action": "Increase ad set budget by 50%"
      }
    ],
    "whenToUse": "A combined kill-and-scale rule over a 3-day window — pauses ad sets spending 3× CPA with cost-per-purchase past 2× CPA (clearly underperforming), and aggressively scales ad sets that have spent at least 1.8× CPA with cost-per-purchase under 0.9× CPA (clearly profitable). The aggressive 50% bump is designed to push early-winner ad sets to a higher budget tier as fast as auction-signal allows — once an ad set shows strong unit economics on 1.8× CPA spent, the team wants to capture that performance before competitors catch the audience overlap. Performance teams use this for early-winner escalation without manual triage.",
    "nativeLimitation": "Meta evaluates the pause and the scale tasks independently — an ad set that crossed the 1.8× CPA scale floor can also hit the 3× CPA pause threshold the same evaluation hour and end up paused before the budget bump takes effect. Native rules can't express 'scale only if pause didn't fire' inside a single rule. The 3-day window also blends spend across all three days, so a single late-attribution purchase can flip the cost-per-purchase reading just before evaluation. There's no automatic rollback if the boosted ad set degrades the next day — pair with a separate rollback rule."
  },
  {
    "id": "rule-104",
    "objectives": ["app-promotion"],
    "source": "playbook",
    "title": "Alert on creative fatigue before CAC suffers",
    "goal": "creative-fatigue",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Campaign spend",
            "operator": ">=",
            "benchmarkType": "absolute_spend",
            "multiplier": null,
            "productionValue": null,
            "unit": "currency",
            "note": "matches the campaign's daily budget cap"
          },
          {
            "metric": "ipm_change",
            "metricLabel": "IPM change",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": -30,
            "unit": "percent_delta",
            "note": "decrease by more than 30%"
          },
          {
            "metric": "cpi_change",
            "metricLabel": "CPI change",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 20,
            "unit": "percent_delta",
            "note": "increase by more than 20%"
          }
        ],
        "action": "Notify Slack with campaign report"
      }
    ],
    "whenToUse": "Early creative fatigue detection — catches the moment a campaign's creative pool starts saturating, BEFORE the bad metrics show up at the bottom of the funnel. Fatigue can be tracked through different signal pairs depending on the funnel: for mobile UA, watch IPM (installs per mille) falling alongside CPI (cost per install) climbing; for web, swap to CVR falling alongside cost-per-registration (or cost-per-lead, cost-per-checkout) climbing. The diagnostic principle is the same: if delivery efficiency is dropping while spend stays stable or grows, the creative pool isn't earning attention anymore — the auction is paying more for fewer high-quality actions. Catching this early matters because the team can rotate in fresh creatives before the metric decay reaches CAC or ROAS. The Slack alert gives the team a chance to review context and choose between rotation, pause, or audience refresh — instead of waiting for kill rules to fire on lagging indicators.",
    "nativeLimitation": "Meta natively can't read percentage-delta metrics across time windows — the IPM-decrease and CPI-increase comparisons live in Scalemate's tracking layer, not Meta's rule engine, so this rule isn't directly portable to Meta Ads Manager. The closest native equivalent fires on absolute thresholds (e.g. 'CPI > $X') which trip much later than a delta-based signal. Also, the 'budget cap reached' condition can read stale if Meta hasn't fully reconciled today's spend at evaluation time — manual cross-check the campaign before reacting to the alert."
  },
  {
    "id": "rule-64",
    "objectives": ["sales"],
    "source": "production",
    "title": "Recover ads killed by attribution lag",
    "goal": "scale-winners",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": ">=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 1.0,
            "productionValue": 50,
            "unit": "currency"
          }
        ],
        "action": "Activate ad"
      },
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": ">=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 1.0,
            "productionValue": 50,
            "unit": "currency"
          }
        ],
        "action": "Activate ad set"
      }
    ],
    "whenToUse": "Reactivation safety net for delayed-attribution recovery — Meta sometimes posts purchases 24-72 hours after the click that earned them, which means an ad paused by a kill rule yesterday could prove profitable by the time the next day's conversion data finalises. This rule scans paused ads and ad sets, and if the last-3-day window shows CPA below breakeven (i.e. the late conversions just made the entity profitable in retrospect), it reactivates. Pair with aggressive kill rules (№ 09, № 14, multi-tier cascades) — this is the recovery layer that catches false positives without manual triage.",
    "nativeLimitation": "Native Meta rules apply to active entities by default — to scan paused ads, the rule's 'applies to' scope must be explicitly set to include paused state in Ads Manager. Once set, reactivation rules can fight in parallel with kill rules: an ad activated at 9am can be paused again at 11am if today's kill rule trips on fresh data. Native rules can't see each other, so frequent flapping is possible — pair with a daily review or move the chain into a layer above Meta. Also, the last-3-day window includes spend that happened before the pause AND after — if the entity was paused 2 days ago and reactivated today, its old spend still counts against new conversions, distorting the CPA reading on the next evaluation."
  },
  {
    "id": "rule-20",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad when checkout cost exceeds your breakeven cap",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.0,
            "productionValue": 100,
            "unit": "currency"
          },
          {
            "metric": "cost_per_initiated_checkout",
            "metricLabel": "Cost per initiated checkout",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 1.7,
            "productionValue": 85,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Use this when cost per initiated checkout becomes the leading indicator of a bad ad — usually for DTC e-commerce where the funnel is short and checkout signal arrives within hours. The 2× CPA spend floor ensures the ad has had a fair test before pausing on a single bad checkout cost — at CPA $50 that means $100 spent before the rule can fire, enough auction signal to read true performance. Hourly cadence catches the pattern before a runaway ad burns a half-day's budget.",
    "nativeLimitation": "Meta evaluates cost per checkout on attribution-window data, so the rule can fire on numbers that haven't fully settled. There's also no way to pair this with a creative-fatigue check in one rule — if you want to skip ads in the learning phase, that requires a second rule and manual reconciliation."
  },
  {
    "id": "rule-24",
    "objectives": ["sales"],
    "source": "production",
    "title": "Scale campaign budget on healthy CPA, trim on no purchases",
    "goal": "scale-winners",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 40 minutes",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.8,
            "productionValue": 90,
            "unit": "currency"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 0.82,
            "productionValue": 41,
            "unit": "currency"
          }
        ],
        "action": "Increase campaign budget by 10%"
      },
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.8,
            "productionValue": 90,
            "unit": "currency"
          },
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": ">=",
            "benchmarkType": "cpa",
            "multiplier": 1.3,
            "productionValue": 65,
            "unit": "currency"
          }
        ],
        "action": "Decrease campaign budget by 20%"
      }
    ],
    "whenToUse": "Conservative campaign-level autoscaler — small 10% bumps when CPA is comfortably under breakeven, 20% cuts when 3 days of fair-test spend (1.8× CPA) come back at 1.3× CPA or worse. Useful for evergreen campaigns where the team wants steady growth without triggering Meta's learning reset. The asymmetry — slow up, fast down — protects budget from drift.",
    "nativeLimitation": "Meta won't catch the case where the same campaign hits both conditions on different ad sets — the scale fires on the campaign level even if 90% of the spend is wasted on losers underneath. The rule reads aggregate, so audit ad-set splits separately."
  },
  {
    "id": "rule-25",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad set when CPA exceeds your breakeven cap",
    "goal": "stop-loss",
    "level": "ad-set",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 2.8,
            "productionValue": 140,
            "unit": "currency"
          }
        ],
        "action": "Pause ad set"
      }
    ],
    "whenToUse": "An outlier ceiling, not your primary pause rule. Meta attribution lags 24-48h on most placements and stretches further on iOS, so pausing fast on today's CPA often kills ad sets that recover tomorrow. 2.8× breakeven is set deliberately past the lag noise band — anything above is broken, not late. Pair with a zero-purchase rule and a 3-7 day pause rule for systematic pruning.",
    "nativeLimitation": "CPP is undefined when purchases = 0, so this rule never fires on pure budget burners — you need a separate spend > X AND purchases < 1 rule for that. If false pauses appear on top-funnel ad sets, drop the cadence to every 5-6 hours to give attribution time to land."
  },
  {
    "id": "rule-26",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad when CPC climbs above your bid ceiling",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "cpc",
            "metricLabel": "CPC (link)",
            "operator": ">",
            "benchmarkType": "cpc",
            "multiplier": 3.6667,
            "productionValue": 5.5,
            "unit": "currency"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpc",
            "multiplier": 6.67,
            "productionValue": 10,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "A creative-quality canary — CPC north of $5.50 on a $10+ spend usually flags a hook or thumbnail problem before the conversion data even arrives. Mobile apps studios use this on broad-audience tests where the ad's job is to earn cheap clicks first. If the team's average CPC sits below $2, drop the threshold proportionally.",
    "nativeLimitation": "Link CPC ignores CTR drift — an ad with a $5.50 CPC and 4% CTR is dying on hook quality, while one with a $5.50 CPC and 0.6% CTR is dying on relevance. Native rules can't read both metrics in the same condition; if you need that nuance, split into two rules."
  },
  {
    "id": "rule-34",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad set after spend floor without a purchase",
    "goal": "stop-loss",
    "level": "ad-set",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.5,
            "productionValue": 125,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      }
    ],
    "whenToUse": "Spend-based hard stop for ad sets that haven't produced a single purchase by mid-day — at 2.5× CPA spent and zero conversions, the auction has had enough signal. Performance teams running multi-million monthly spend use this as the simplest, most defensible kill rule because it avoids ROAS lag entirely. Only use on ad sets past the learning phase.",
    "nativeLimitation": "Meta evaluates 'today' in the ad account's reporting timezone, not the team's. If the account is set to PST and the team works UTC+2, the rule resets at a different moment than expected — easy to miss when reviewing why something paused at midnight."
  },
  {
    "id": "rule-37",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause weak ROAS, trim borderline ROAS on BAU campaigns",
    "goal": "reactivate",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">=",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 20,
            "productionValue": 1000,
            "unit": "currency"
          },
          {
            "metric": "purchase_roas",
            "metricLabel": "ROAS",
            "operator": "<",
            "benchmarkType": "roas",
            "multiplier": 0.5,
            "productionValue": 1.0,
            "unit": "ratio"
          }
        ],
        "action": "Pause campaign"
      },
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">=",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 20,
            "productionValue": 1000,
            "unit": "currency"
          },
          {
            "metric": "purchase_roas",
            "metricLabel": "ROAS",
            "operator": "<",
            "benchmarkType": "roas",
            "multiplier": 0.75,
            "productionValue": 1.5,
            "unit": "ratio"
          }
        ],
        "action": "Decrease campaign budget by 30%"
      }
    ],
    "whenToUse": "ROAS guardrail for evergreen BAU campaigns, not test runs. For e-com and mobile apps, purchase count lies — one high-value sale can pay the whole campaign while ten cheap ones return 20%. After 20× CPA spent (enough volume to read true ROAS), pause anything below 0.5× target ROAS, trim 30% budget on borderline cases below 0.75× target.",
    "nativeLimitation": "ROAS lag matches CPA lag but hurts more — value-weighted conversions arrive unevenly, and one large delayed sale can swing 3-day ROAS by 20%+. For high-AOV categories (luxury, B2B SaaS, premium apps), widen the window to last 7d to smooth out outliers."
  },
  {
    "id": "rule-38",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad set on 1.5× CPA spend without payment-info (early-warning)",
    "goal": "stop-loss",
    "level": "ad-set",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.5,
            "productionValue": 75,
            "unit": "currency"
          },
          {
            "metric": "add_payment_info",
            "metricLabel": "Payment info added",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      }
    ],
    "whenToUse": "Early-warning kill for teams that want to optimise BEFORE a purchase lands — using add_payment_info as the leading indicator instead of waiting for the purchase event. The logic: measure your CPA, watch ad sets, and if one has already spent 1.5× your CPA without anyone reaching the payment-info step, assume a purchase is unlikely on this ad set — no users are getting through the funnel deep enough. Cut it before more budget burns. This is an aggressive cutting approach — Meta often doesn't like it because the algorithm can't finish learning on starved data. Best deployed when: seasonal campaigns with tight windows, large daily budgets, lots of ads launched at once, and you can afford to exclude many objects. CRITICAL: pair this with a scale rule that boosts winners on confirmed purchase signal — otherwise account spend can quickly drop 30-50% because everything got paused before the algo settled.",
    "nativeLimitation": "The 1.5× CPA threshold is intentionally tight — at this spend level, Meta is still mid-learning-phase, and pausing here can prevent the algorithm from collecting enough conversion data to optimise the remaining ad sets. Payment-info-added is also a custom event that Meta sometimes deduplicates inconsistently across web and mobile placements — the count can read as 0 even when 1-2 events fired but didn't deduplicate cleanly. Verify pixel health before deploying. Today's window also closes inconsistently on late-attribution events, so an ad set paused at 11pm may have had a payment-info event that arrived after evaluation."
  },
  {
    "id": "rule-39",
    "objectives": ["sales"],
    "source": "production",
    "title": "Prune the ad set — pause the top spender that doesn't convert",
    "goal": "creative-pruning",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every 5 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.7,
            "productionValue": 85,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Creative-pruning play for ad sets with 3+ active creatives. When one ad hogs the budget but doesn't convert over 3 days, pausing it forces Meta's auction to redistribute spend to siblings that may perform better. Not a permanent kill — the goal is to free up testing room for competing creatives, not eliminate the ad forever. Skip this rule on single-ad sets — it'll just shut the set down.",
    "nativeLimitation": "Meta doesn't redistribute the paused ad's budget proportionally to specific siblings — the ad set re-enters the learning auction and reallocates based on its current model, which may favor any ad, not the next-best historical performer. For deterministic shifts, use ad-set level rules instead."
  },
  {
    "id": "rule-41",
    "objectives": ["sales", "app-promotion"],
    "source": "production",
    "title": "Aggressive scale + duplicate when yesterday beats 2× ROAS target",
    "goal": "scale-winners",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 24 hours",
    "tasks": [
      {
        "timeframe": "yesterday",
        "conditions": [
          {
            "metric": "purchase_roas",
            "metricLabel": "ROAS",
            "operator": ">=",
            "benchmarkType": "roas",
            "multiplier": 2.0,
            "productionValue": 4.0,
            "unit": "ratio"
          }
        ],
        "action": "Increase campaign budget by 200% and duplicate campaign with minimum budget"
      },
      {
        "timeframe": "yesterday",
        "conditions": [
          {
            "metric": "purchase_roas",
            "metricLabel": "ROAS",
            "operator": "<",
            "benchmarkType": "roas",
            "multiplier": 0.8,
            "productionValue": 1.6,
            "unit": "ratio"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">=",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 5.0,
            "productionValue": 250,
            "unit": "currency"
          }
        ],
        "action": "Decrease campaign budget by 30%"
      }
    ],
    "whenToUse": "Aggressive scale for teams without a hard budget cap — willing to keep pumping spend so long as ROAS/CPA targets hold. Scale anything that hits the targets, trim anything that misses. When yesterday's ROAS clears 2× target, the rule triples the budget AND duplicates the campaign with minimum starting budget. The duplicate captures additional auction surface; the original keeps its learning. Works especially well for mobile app subscriptions and DTC accounts where one strong campaign can carry the quarter. The decrease leg fires only after enough spend to read true signal (5× CPA), so weak days don't trigger premature trims. Critical: pair with same-day safety rules (zero-purchase pause on today, ROAS guardrail) so the tripled budget doesn't pour into a campaign that collapsed overnight.",
    "nativeLimitation": "Yesterday's ROAS doesn't catch today's drop — without parallel same-day pause rules you can lose a full day of inflated budget on a dying campaign. The +200% scale compounds if the rule fires multiple days in a row (budget triples daily until ROAS finally drops below 2× target). The duplicate starts in Meta's learning phase, so it underperforms for 48-72h before stabilising — that's the cost of buying additional auction surface. Add a 'campaign name does not contain duplicate' scope filter manually, otherwise daily firings will spawn duplicates of duplicates."
  },
  {
    "id": "rule-42",
    "objectives": ["sales"],
    "source": "production",
    "title": "Increase budget when CPA holds under target",
    "goal": "scale-winners",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 24 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 1.0,
            "productionValue": 50,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": ">=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 5,
            "unit": "count"
          }
        ],
        "action": "Increase ad set budget by 20%"
      }
    ],
    "whenToUse": "Conservative scaler for ad sets that have proven themselves over 3 days — at least 5 purchases at CPA below your breakeven target earns a 20% budget bump. The 5-purchase floor is what makes the signal trustworthy; one-conversion days don't trigger the rule. Best for evergreen campaigns where the team wants smooth ramping rather than spiky scale.",
    "nativeLimitation": "Native rules can't enforce a maximum budget ceiling on the scale action — at daily +20% the ad set doubles in 4 days of consecutive winning performance. Set a manual review cadence or chain to a max-budget rollback rule before the bump compounds beyond what the team can support."
  },
  {
    "id": "rule-45",
    "objectives": ["sales"],
    "source": "production",
    "title": "Alert team on unusual daily spend spike (50%+ above 7-day avg)",
    "goal": "budget-control",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Today's spend",
            "operator": ">",
            "benchmarkType": "rolling_avg",
            "anchorMetric": "spend",
            "anchorWindow": "last_7d",
            "multiplier": 1.5,
            "productionValue": null,
            "unit": "currency"
          }
        ],
        "action": "Send urgent Slack alert with campaign details"
      }
    ],
    "whenToUse": "Anomaly detection — fires when a campaign's today-spend exceeds its own 7-day rolling average by 50% or more. Built to catch human error (typo in budget input, accidental extra zero, paste mistake) and runaway algorithmic over-pacing before they burn through a meaningful share of the daily/weekly cap. The hourly cadence keeps the response window tight — if a buyer ships a budget mistake at 9am, the team gets the Slack alert before lunch. The 50% threshold filters normal daily variance (weekends, geo shifts, post-launch ramps) while still flagging genuine spikes. Critical for performance teams running fixed monthly caps where one runaway campaign can blow the whole month in a single day.",
    "nativeLimitation": "Meta's native rule engine does not support 'today's spend vs N-day rolling average' as a single condition — the closest native option is 'spend changed by X%' which compares to a fixed prior window, not a rolling baseline that updates daily. This rule requires Scalemate's tracking layer, or a custom script polling Meta's reporting API. Slack notifications also can't be routed to a specific channel from inside Meta's automation engine — that routing needs a layer above."
  },
  {
    "id": "rule-47",
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad on weak 3-day ROAS after 5× CPA spent",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "purchase_roas",
            "metricLabel": "ROAS",
            "operator": "<",
            "benchmarkType": "roas",
            "multiplier": 0.5,
            "productionValue": 1.0,
            "unit": "ratio"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 5,
            "productionValue": 250,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Ad-level early ROAS kill — when a single ad has spent 5× breakeven CPA over 3 days and ROAS is still below half your target (50%+ revenue deficit), the ad is structurally underperforming and won't recover on its own. The 5× CPA spend floor gives enough volume for a credible ROAS reading without waiting for the heavier 20× CPA threshold used by the campaign-level rule (№ 08). Hourly cadence catches catastrophic ads before they burn another half-day's budget. Pair with № 08 for the patient campaign-level ROAS guardrail above this one.",
    "nativeLimitation": "ROAS in Meta's native rule engine reads on attribution-window data — when conversion lag is 1-2 days, the 3-day figure is meaningfully understated. Expect rules to fire on 'real' ROAS that's 30-50% higher than what Meta sees at the moment of evaluation. Run on 7-day windows for high-AOV accounts. Also — at the ad level, ROAS can be volatile early because revenue is divided by relatively small spend. The 5× CPA floor mitigates this but doesn't eliminate it entirely on high-AOV products where one missed sale skews the metric."
  },
  {
    "id": "rule-48",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Scale campaign on confirmed purchases past $200 spend",
    "goal": "scale-winners",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 4.0,
            "productionValue": 200,
            "unit": "currency"
          }
        ],
        "action": "Increase campaign budget by 10%"
      }
    ],
    "whenToUse": "Modest scaler for campaigns showing real signal — at least 2 purchases on 4× breakeven CPA spent in a day earns a 10% budget bump. Conservative on purpose; the rule fires every 3 hours, so a campaign with sustained performance can compound to a 30-40% bump by end of day without manual intervention. Use on stable campaigns past the learning phase.",
    "nativeLimitation": "The rule has no upper bound — if conditions hold for 8 hours, Meta will keep firing the 10% bump every 3 hours. Compounding is the feature, but it's also the risk. Pair with a daily budget cap rule that fires when total daily spend exceeds the team's cap."
  },
  {
    "id": "rule-51",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Stop loss on weak campaigns, scale on confirmed winners",
    "goal": "scale-winners",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 3,
            "unit": "count"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 4,
            "productionValue": 200,
            "unit": "currency"
          }
        ],
        "action": "Pause campaign"
      },
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 5,
            "unit": "count"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 5.0,
            "productionValue": 250,
            "unit": "currency"
          }
        ],
        "action": "Increase campaign budget by 30%"
      }
    ],
    "whenToUse": "Two-sided campaign rule with sharp thresholds — fewer than 3 purchases at 4× CPA spend is a kill, more than 5 purchases at 5× CPA spend is a 30% scale. Aggressive for performance teams running hundreds of campaigns where the cost of slow reaction outweighs the cost of occasional false pauses. Keep on tight cadence to capture the winner side fast.",
    "nativeLimitation": "Both tasks evaluate the same hour — a campaign with exactly 4 purchases at $230 spend triggers neither, sitting in the dead zone. Meta can't apply continuous logic in one rule, so edge cases between thresholds require either a third 'middle band' rule or manual review of mid-tier campaigns."
  },
  {
    "id": "rule-52",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad with high checkout cost and zero checkouts",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every 5 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "cost_per_initiated_checkout",
            "metricLabel": "Cost per initiated checkout",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 3,
            "productionValue": 150,
            "unit": "currency"
          },
          {
            "metric": "initiated_checkout",
            "metricLabel": "Checkouts initiated",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Targets ads where 3-day spend has driven zero checkouts and the implied cost-per-checkout is already past 3× CPA — used on funnels where checkout-init is the most reliable mid-funnel signal. The 5-hour cadence balances reaction speed against attribution settling. Useful when checkout-init signal arrives faster than purchase confirmation.",
    "nativeLimitation": "When checkouts initiated = 0, the cost-per-checkout metric is technically undefined or returned as the spend amount itself depending on Meta's evaluation path. The rule still fires correctly, but downstream reporting can show inconsistent values. Verify behaviour on a low-spend test before scaling to high-budget ads."
  },
  {
    "id": "rule-54",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad after 1.2× CPA lifetime spend with no checkouts",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.2,
            "productionValue": 60,
            "unit": "currency"
          },
          {
            "metric": "initiated_checkout",
            "metricLabel": "Checkouts initiated",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Lifetime spend-based kill rule — once an ad has burned 1.2× CPA across its full life with zero checkout-inits, it goes off. Used on accounts where the team launches and rotates creative aggressively and wants quick lifetime cleanup. The 'maximum' window means once paused, the rule's job is done — the data point becomes permanent.",
    "nativeLimitation": "The 'maximum' (lifetime) timeframe ignores recent improvement — an ad that didn't drive checkouts in week one but is now performing fine still carries the original deficit. Once near the lifetime spend floor, the rule will fire on its old data. For ads that recovered, manual reactivation is the only fix."
  },
  {
    "id": "rule-55",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad with checkouts but no purchases at 2× CPA spend",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2,
            "productionValue": 100,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          },
          {
            "metric": "initiated_checkout",
            "metricLabel": "Checkouts initiated",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 2,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Specifically catches the leaky-funnel ad — checkouts are initiating but never converting, even at 2× CPA lifetime spend. This often indicates the audience is right but the post-click experience or pricing isn't matching, or the ad is attracting browsers, not buyers. DTC e-commerce teams use this to surface ads that look healthy on top-of-funnel metrics but are quietly draining budget.",
    "nativeLimitation": "Three-condition AND clauses are the limit of native rule logic — there's no way to add a fourth condition like 'and link CTR > 1.5%' to confirm the audience-quality angle. To diagnose the funnel break, the team has to pause first and investigate manually."
  },
  {
    "id": "rule-56",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad on high CPC and no purchases",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.0,
            "productionValue": 15,
            "unit": "currency"
          },
          {
            "metric": "cpc",
            "metricLabel": "CPC (link)",
            "operator": ">",
            "benchmarkType": "cpc",
            "multiplier": 2.667,
            "productionValue": 4,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Three-factor early-kill rule — fair-test spend (1× breakeven CPA), high CPC (2.7× your ceiling), zero purchases. Catches ads with bad creative-audience fit before they bleed real budget. At default $50 CPA + $1.50 CPC, the rule fires after $50 spent with CPC over $4 and no purchases. Mobile apps studios use this on cold-traffic install campaigns.",
    "nativeLimitation": "Native rules evaluate CPC as link CPC — outbound CPC, which behaves differently across placements (Reels vs Stories vs Feed). An ad delivering primarily on cheap Stories placement may show CPC under threshold while burning impressions on expensive Feed placement. Inspect placement breakdown before assuming the rule covers all delivery."
  },
  {
    "id": "rule-59",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad when CPA exceeds your high-AOV cap after $300 spend",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 3.2,
            "productionValue": 160,
            "unit": "currency"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 6.0,
            "productionValue": 300,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "High-AOV CPA cap — once a single ad pushes past 3.2× breakeven CPA with 6× CPA spent in a day, it's in clear loss territory. The 6× spend floor ensures the rule fires on real signal, not on early auction noise — at $50 CPA that's $300, at $150 CPA it's $900. Performance teams running large daily budgets per ad use this as the per-ad guardrail.",
    "nativeLimitation": "Same-day evaluation with a $300 spend floor means the rule rarely fires before mid-afternoon — on accounts with strict daily caps, the worst damage may already be done by then. Pair with a tighter ad-set-level rule that catches the pattern earlier in the day."
  },
  {
    "id": "rule-61",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad on 3-day spend with zero checkouts",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every 5 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 4,
            "productionValue": 200,
            "unit": "currency"
          },
          {
            "metric": "initiated_checkout",
            "metricLabel": "Checkouts initiated",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Mid-cycle kill rule for ads that have spent 4× CPA over 3 days without producing a single checkout. The 3-day window absorbs daily volatility, and zero checkouts at this spend is a clean signal that the ad isn't reaching purchase intent at all. Alert via Slack on the same threshold if the team prefers human review on borderline ads.",
    "nativeLimitation": "Checkout-init events depend on pixel firing — if the conversion API is intermittent or the pixel deduplication is misaligned, the count can read 0 even when 1-2 events occurred. Verify pixel health before relying on this rule for ads with significant spend."
  },
  {
    "id": "rule-62",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Multi-tier ad set kill on spend, purchases, and registrations",
    "goal": "stop-loss",
    "level": "ad-set",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 4,
            "productionValue": 200,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      },
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 8,
            "productionValue": 400,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 3,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      },
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.8,
            "productionValue": 140,
            "unit": "currency"
          },
          {
            "metric": "complete_registration",
            "metricLabel": "Registrations completed",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      }
    ],
    "whenToUse": "Three-step ad-set kill chain that covers lifetime spend, today's spike, and registration funnel separately. Used on funnels where registration is the early signal and purchase is the lagging signal — if either fails, the ad set comes down. Mobile apps studios with hybrid registration-then-purchase funnels use this to catch breakage at either stage.",
    "nativeLimitation": "Three independent kill conditions on the same entity means one bad day on the today-window task can pause an ad set that's healthy on lifetime metrics. There's no way to require all three to be triggered simultaneously inside a single rule, so prioritisation between the conditions is set by Meta's internal scheduler, not the team's intent."
  },
  {
    "id": "rule-63",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause ad on weak checkouts or no registrations",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "cost_per_initiated_checkout",
            "metricLabel": "Cost per initiated checkout",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 1.36,
            "productionValue": 68,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          },
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": "<",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.0,
            "productionValue": 100,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      },
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.0,
            "productionValue": 36,
            "unit": "currency"
          },
          {
            "metric": "complete_registration",
            "metricLabel": "Registrations completed",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Catches two failure modes — expensive checkouts with no purchase under 2× CPA lifetime spend, and 1× CPA spend with zero registration signal. The first task is for funnels where checkouts predict purchase reliably; the second covers accounts where registration is the early gate. Useful on lead-gen-heavy funnels.",
    "nativeLimitation": "The two tasks fire independently — an ad meeting the registration condition (no signups at the spend floor) but not the checkout condition still pauses, even if other behavioural signals look fine. Native rules can't enforce 'pause only if both fail' logic; that requires a chained automation outside Meta."
  },
  {
    "id": "rule-65",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Multi-step ad and ad set test pauser across spend tiers",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 0.4,
            "productionValue": 20,
            "unit": "currency"
          },
          {
            "metric": "cpc",
            "metricLabel": "CPC (link)",
            "operator": ">",
            "benchmarkType": "cpc",
            "multiplier": 3.33,
            "productionValue": 5,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 0.8,
            "productionValue": 40,
            "unit": "currency"
          },
          {
            "metric": "complete_registration",
            "metricLabel": "Registrations completed",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 2,
            "unit": "count"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 1.2,
            "productionValue": 60,
            "unit": "currency"
          },
          {
            "metric": "cpc",
            "metricLabel": "CPC (link)",
            "operator": ">",
            "benchmarkType": "cpc",
            "multiplier": 1.667,
            "productionValue": 2.5,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.0,
            "productionValue": 100,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.8,
            "productionValue": 140,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.5,
            "productionValue": 125,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">=",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 5.6,
            "productionValue": 280,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 3,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      },
      {
        "timeframe": "last 3 days (incl. today)",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">=",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 7.0,
            "productionValue": 350,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 4,
            "unit": "count"
          }
        ],
        "action": "Pause ad set"
      }
    ],
    "whenToUse": "Eight-condition test-cleanup rule used on creative testing campaigns where the team wants graduated kill thresholds — each step matches a different stage of evidence. Early thresholds (0.4×/0.8×/1.2× CPA) catch obvious failures fast; later ones (5.6×/7× CPA) catch ad sets that limp along but never deliver the volume needed to scale. Every tier scales with your breakeven CPA, so the same cascade works on $5 lead-gen accounts and $200 high-AOV accounts. Performance teams running dozens of weekly creative tests deploy this to avoid manual triage entirely.",
    "nativeLimitation": "Eight conditions in one rule is at the edge of what Meta's native engine handles cleanly — evaluation order isn't guaranteed and the team may see one condition fire on an entity that's already been actioned by another. Native rules can't sequence the steps as a true cascade, so the team should expect occasional double-actions in reporting."
  },
  {
    "id": "rule-66",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Pause campaign at daily budget cap when no purchase landed",
    "goal": "budget-control",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Campaign spend",
            "operator": ">=",
            "benchmarkType": "absolute_spend",
            "multiplier": null,
            "productionValue": null,
            "unit": "currency",
            "note": "matches the campaign's daily budget cap"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 0,
            "unit": "count"
          }
        ],
        "action": "Pause campaign"
      }
    ],
    "whenToUse": "Hard pacing stop-loss — when the campaign burns its full daily budget without producing a single purchase, the rule pauses it for the rest of the day. Designed for DTC teams running fixed monthly caps where one bad day shouldn't compound into a bad week. The campaign auto-resumes at midnight when Meta's daily budget resets, so no manual reactivation needed for the next morning's auction.",
    "nativeLimitation": "Meta evaluates 'today' in the ad account's reporting timezone, not yours — pauses fire later than expected when the account is set to PST and the team works UTC+2. Also worth noting: if Meta's last-attribution pixel hasn't fully settled by the rule's evaluation moment, the rule can pause a campaign whose 0-purchase reading is stale."
  },
  {
    "id": "rule-67",
    "draft": true,
    "objectives": ["sales"],
    "source": "production",
    "title": "Trim ad set 25% on sustained 3-day overspending vs purchases",
    "goal": "budget-control",
    "level": "ad-set",
    "platform": "meta",
    "schedule": "Every 5 hours",
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 15,
            "productionValue": 750,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 5,
            "unit": "count"
          }
        ],
        "action": "Decrease ad set budget by 25%"
      }
    ],
    "whenToUse": "Per-ad-set burn-rate brake — 15× breakeven CPA over 3 days = roughly 5× CPA per day, which is heavy budget concentration on a single ad set. The 5-purchase floor under-correlates with that spend (one conversion per ~3× CPA, well below breakeven), so the rule trims 25% to bring pacing back in line. Performance teams running tight monthly caps deploy this as the per-ad-set guardrail alongside campaign-level stop-loss rules.",
    "nativeLimitation": "Native rules re-fire every 5 hours on the same condition without a budget floor — repeated trims compound, leaving the ad set at ~30% of its original budget after 3-4 firings without anyone noticing. Pair with a manual review cadence or a reactivation rule on confirmed conversion recovery."
  },
  {
    "id": "rule-100",
    "draft": true,
    "objectives": ["app-promotion"],
    "source": "playbook",
    "title": "Pause testing ad when CPI exceeds your install cap",
    "goal": "stop-loss",
    "testingPhase": 1,
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpi",
            "multiplier": 10,
            "productionValue": 50,
            "unit": "currency"
          },
          {
            "metric": "cost_per_install",
            "metricLabel": "Cost per install",
            "operator": ">",
            "benchmarkType": "cpi",
            "multiplier": 1.3,
            "productionValue": 6.50,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Phase 1 of mobile UA creative testing — kills underperforming creatives early. Mobile apps studios running app install campaigns deploy this on every new ad in test rotation. Once an ad has burned 10× target CPI without converting installs at the right cost, the test is over. Hourly cadence at the ad level catches the pattern before the auction wastes a day's testing budget.",
    "nativeLimitation": "Meta's native rules can't multiply one user-defined metric by another — there's no way to express 'spend > 10× CPI target' as a dynamic threshold. The spend floor has to be hardcoded as a fixed dollar amount, which means recalculating it manually whenever the team's CPI target changes."
  },
  {
    "id": "rule-101",
    "draft": true,
    "objectives": ["sales", "app-promotion"],
    "source": "playbook",
    "title": "Pause testing ad when CPM exceeds your CPM benchmark after 10K impressions",
    "goal": "stop-loss",
    "testingPhase": 1,
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "impressions",
            "metricLabel": "Impressions",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 10000,
            "unit": "count"
          },
          {
            "metric": "cpm",
            "metricLabel": "CPM",
            "operator": ">",
            "benchmarkType": "cpm",
            "multiplier": 1.25,
            "productionValue": 25,
            "unit": "currency"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "After 10K impressions you have a fair test sample for CPM-based delivery cost. If CPM is 25% above the team's benchmark, the auction is paying too much for impressions — either the creative isn't winning attention or the audience is saturating. Mobile apps studios use this as the second Phase 1 kill alongside the CPI rule, catching ads that burn impressions before they ever convert.",
    "nativeLimitation": "Meta's CPM benchmark for an account is a moving target — relative comparisons (1.25× of a rolling baseline) aren't supported in native rules. The threshold has to be a static number, recalculated as auction prices shift seasonally and as the account's audience overlap changes."
  },
  {
    "id": "rule-102",
    "draft": true,
    "objectives": ["sales", "app-promotion"],
    "source": "playbook",
    "title": "Pause Phase 2 testing ad without a purchase after 2× CPA spend",
    "goal": "stop-loss",
    "testingPhase": 2,
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 2.0,
            "productionValue": 100,
            "unit": "currency"
          },
          {
            "metric": "purchases",
            "metricLabel": "Purchases",
            "operator": "<=",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 1,
            "unit": "count"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "After spending 2× breakeven CPA without securing the second purchase, the ad has had a fair test on a Sales/AEO/ROAS campaign. Use this on direct-response setups where the team accepts losing one CPA per failed test as the cost of creative volume — Phase 2 is where surviving Phase 1 creatives prove they can convert past a single fluke.",
    "nativeLimitation": "Meta natively can't multiply spend by your breakeven CPA — you set the floor as a fixed dollar amount and update it whenever your unit economics change. There's no way to express '2× CPA' as a live threshold inside the rule engine."
  },
  {
    "id": "rule-103",
    "draft": true,
    "objectives": ["sales", "app-promotion"],
    "source": "playbook",
    "title": "Pause Phase 3 testing ad with weak ROAS after 10× CPA spend",
    "goal": "stop-loss",
    "testingPhase": 3,
    "level": "ad",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "last_3_days",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpa",
            "multiplier": 10,
            "productionValue": 500,
            "unit": "currency"
          },
          {
            "metric": "purchase_roas",
            "metricLabel": "ROAS",
            "operator": "<",
            "benchmarkType": "roas",
            "multiplier": 0.8,
            "productionValue": 1.6,
            "unit": "ratio"
          }
        ],
        "action": "Pause ad"
      }
    ],
    "whenToUse": "Phase 3 is the deep test — by 10× CPA spent over 3 days, the creative has had every chance to prove itself on a Sales/AEO/ROAS objective. ROAS at 80% of target means the creative is structurally below breakeven; further spend won't fix it. Use as the final gate before a creative graduates to evergreen rotation or gets retired.",
    "nativeLimitation": "Native rules can't compound a spend-multiple condition with a ROAS condition relative to the team's target. Both have to be hardcoded as absolute thresholds and updated when the team's unit economics or ROAS target shifts."
  },
  {
    "id": "rule-105",
    "objectives": ["sales", "app-promotion"],
    "source": "playbook",
    "title": "Investigate CPM spikes — Slack diagnostic with geo + creative diff",
    "goal": "creative-fatigue",
    "level": "campaign",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "cpm",
            "metricLabel": "CPM",
            "operator": ">",
            "benchmarkType": "rolling_avg",
            "anchorMetric": "cpm",
            "anchorWindow": "last_7d",
            "multiplier": 1.3,
            "productionValue": null,
            "unit": "currency"
          }
        ],
        "action": "Send Slack report with top-spending geo + creative diff + likely causes"
      }
    ],
    "whenToUse": "CPM-rising diagnostic — when a campaign's CPM jumps 30%+ above its own 7-day rolling baseline, something material has shifted in the auction. The rule sends a Slack report with three pieces of context the team needs to triage: (1) top-spending geos this period vs. the baseline week — has the audience composition changed; (2) top-spending creatives — is the team running a new creative pool, or have older creatives gained delivery share; (3) suggested likely causes — creative fatigue (audience saturation), seasonality + competitor entry (verify with the account manager whether competitors in the same vertical also show CPM lift), or simply a delivery shift on Meta's side. The point is to give the team a starting hypothesis instead of forcing a manual investigation every time CPM moves.",
    "nativeLimitation": "Meta's native rules can't compute deltas against rolling averages, can't enrich the alert payload with geo/creative breakdowns, and can't post structured reports to Slack. This rule is Scalemate-only — the tracking layer pulls the geo + creative data alongside the trigger so the Slack payload is decision-ready, not just a 'CPM is up' ping."
  },
  {
    "id": "rule-106",
    "objectives": ["sales", "app-promotion"],
    "source": "playbook",
    "title": "Surface hook-rate winners to the creative team early",
    "goal": "scale-winners",
    "testingPhase": 1,
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "impressions",
            "metricLabel": "Impressions",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 5000,
            "unit": "count"
          },
          {
            "metric": "hook_rate",
            "metricLabel": "Hook rate (3s plays ÷ impressions)",
            "operator": ">",
            "benchmarkType": "absolute_count",
            "multiplier": null,
            "productionValue": 30,
            "unit": "percent"
          }
        ],
        "action": "Send Slack notification to creative team with hook-rate winners"
      }
    ],
    "whenToUse": "Early hook-rate signal for the creative team — once a Phase 1 test ad clears 5K impressions and its hook rate (3-second video plays divided by impressions) crosses 30%+, it's an early top-of-funnel winner regardless of conversion data. Surfacing these in Slack lets the creative team see which hooks work BEFORE conversion data arrives, so they can spin off variants, replicate the angle on other formats, and accelerate the testing pipeline. Especially valuable for mobile UA and DTC teams running 10+ creative tests per week — the bottleneck isn't conversion analysis, it's identifying patterns fast enough to brief the next round.",
    "nativeLimitation": "Meta natively exposes 3-second video plays and impressions, so the hook rate calculation is feasible inside a native rule. What native rules can't do: route the alert into a specific Slack channel, attach the actual creative thumbnail to the notification, or group multiple winners into a single digest. Scalemate's tracking layer pipes the alert into a dedicated creative-team channel with the ad's thumbnail and copy so designers can act immediately."
  },
  {
    "id": "rule-107",
    "objectives": ["sales", "app-promotion"],
    "source": "production",
    "title": "Pause video ad on CPM > 4× benchmark — early-auction filter",
    "goal": "stop-loss",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every hour",
    "tasks": [
      {
        "timeframe": "today",
        "conditions": [
          {
            "metric": "spend",
            "metricLabel": "Amount spent",
            "operator": ">",
            "benchmarkType": "spend_floor",
            "anchorBenchmark": "cpm",
            "multiplier": 0.5,
            "productionValue": 10,
            "unit": "currency"
          },
          {
            "metric": "cpm",
            "metricLabel": "CPM",
            "operator": ">",
            "benchmarkType": "cpm",
            "multiplier": 4.0,
            "productionValue": 80,
            "unit": "currency"
          }
        ],
        "action": "Pause ad (video creatives only)"
      }
    ],
    "whenToUse": "Early auction CPM filter for video creatives — catches video ads where the auction is paying way above your CPM ceiling before more than ~$10 burns. Real use case: accounts where target CPM is $40-80 but new test videos land at $150-500 CPM. Filter the rule to video ads only in Meta's 'applies to' scope (CPM behaves differently for static vs video). The 0.5× CPM-benchmark spend floor is intentionally tight — the rule needs to fire FAST, within minutes of a bad video starting to deliver. Pair with the hook-rate winner rule (№ 18) to surface the opposite side: video creatives worth the auction price.",
    "nativeLimitation": "Meta's 'applies to' filter for video can include single-image with video-placement crossover where CPM math differs. Verify the filter targets video ads specifically, not video placements. Also, the tight spend floor evaluates on attribution-lagged data — if the first impressions cluster in expensive Stories placements but later balance across cheap Reels, the rule can fire on a transient CPM spike that resolves on its own."
  },
  {
    "id": "rule-108",
    "objectives": ["sales"],
    "source": "playbook",
    "title": "Revive paused ads to restore declining campaigns",
    "goal": "creative-fatigue",
    "level": "ad",
    "platform": "meta",
    "schedule": "Every 3 hours",
    "filters": [
      {
        "scope": "campaign",
        "metric": "purchase_roas",
        "metricLabel": "Campaign ROAS",
        "operator": "<",
        "benchmarkType": "roas",
        "multiplier": 1.0,
        "productionValue": 2.0,
        "unit": "ratio",
        "window": "last_3d"
      }
    ],
    "tasks": [
      {
        "timeframe": "last_3d",
        "conditions": [
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Cost per purchase",
            "operator": ">",
            "benchmarkType": "cpa",
            "multiplier": 1.0,
            "productionValue": 50,
            "unit": "currency"
          }
        ],
        "action": "Pause ad (underperformer)"
      },
      {
        "timeframe": "maximum",
        "conditions": [
          {
            "metric": "cost_per_purchase",
            "metricLabel": "Lifetime cost per purchase",
            "operator": "<",
            "benchmarkType": "cpa",
            "multiplier": 1.0,
            "productionValue": 50,
            "unit": "currency"
          }
        ],
        "action": "Activate ad (paused historical winner)"
      }
    ],
    "whenToUse": "There's a UA hypothesis worth testing: top performers rarely work solo. They often shine because the rest of the ad-set supports them — surrounding creatives form demand the top one converts. When upstream kill rules pause those supporting ads, the finisher loses its setup and campaign ROAS drops even though each surviving ad still looks fine on its own. This rule operationalises that hypothesis. In declining campaigns it pauses active ads with CPA above breakeven (they're contributing to the dip), and reactivates paused ads with profitable lifetime CPA (the supporting cast that built demand). Pair with a kill rule that re-prunes the resurrected set within 3-5 days so bad ads don't survive the resurrection.",
    "nativeLimitation": "Meta's automated rules apply campaign-level filters to ad-level actions only when the rule's 'applies to' scope explicitly reads parent-campaign metrics — verify the scope in Ads Manager before deploying. The two tasks (pause + activate) fire independently in the same evaluation, and Meta's order isn't guaranteed: in an edge case where a recent ad has bad short-term CPA but good lifetime CPA, both conditions could match simultaneously. The 'maximum' (lifetime) lookback also caps at ~90 days for per-ad CPA data at Meta — older history aggregates and may lose per-ad granularity. Native rules can't differentiate 'paused by kill rule' vs 'paused by buyer manually' — this resurrection will reactivate any paused ad meeting the lifetime CPA filter, so pair with a kill rule that re-prunes fast."
  }
]


// Hide draft rules from production rendering. Set draft: true on any rule
// not yet reviewed for public release.
export const RULES = ALL_RULES.filter((r) => !r.draft)

// ─── Mobile UA scaffold (now active in playbook rules above) ───
//
// Mobile UA / app-promotion rules use these benchmarkType values:
//   "cpi"     — Cost per install (currency, default $5, live input)
//   "cpm"     — CPM benchmark (currency, default $20, live input — shared with Sales)
//   "ipm"     — Installs per mille (count/ratio, live input)
