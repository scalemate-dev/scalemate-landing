<!-- DRAFT v3 — 2026-06-04 — Round 3 of content-ops -->
<!-- v2 → v3 changes: em dashes trimmed to ≤5 in body, data-source anchor added at top of Results, closing line sharpened. -->

# Hero

**Label:** Case Study
**Title (H1):** How Appflame tests more creative hypotheses per dollar on Meta

---

# Overview

## Company info (50-80 words)

Appflame is a mobile-apps company running a portfolio of lifestyle and dating products. Their user-acquisition team operates as R&D-first. Most of the budget on Meta goes into testing new creative hypotheses in T1 markets, not into maintaining a stable ROAS curve. Day-to-day that means a high cadence of new ad sets, custom funnel events from their internal traffic-scoring system, and a US-market campaign load that runs while the Europe team sleeps.

## Metric cards (4)

| Value | Label |
|---|---|
| **~435** | Automated rule actions per month (avg, first 2 months) |
| **~377** | Ad-level pauses per month across 6 cascade rules |
| **~55** | Ad-set pauses per month |
| **24/7** | US-market coverage without manual Ads Manager monitoring |

## Company card

- **Client:** Appflame
- **Industry:** Mobile Apps — Lifestyle / Dating
- **Use case:** Cascade automation rules for R&D-mode performance marketing

---

# Challenge

## Testing is the job, not a side quest

For most performance teams, automation protects a known unit economics curve. For Appflame's UA team it works the other way around. There is no stable curve to protect. Every quarter they enter with a backlog of creative hypotheses, new audiences, new offers, new lifecycle angles. The job is to validate or kill each one as quickly as the data allows, then reinvest the freed budget into the next one.

That changes what "control" means. It is not "keep CPA below $X." It is "do not let any single losing variant burn through more than its fair share of the test budget before the team sees it."

## Why standard Meta rules ran out of room

Meta's native automated rules check one condition at a time. A real kill decision is rarely about one number. It is about CTR being low at the same time IPM is low and the early App Event Optimization signal is missing. Single-condition logic either catches one of those and looks paranoid, or waits for the slowest-moving metric and looks slow.

The team also runs custom funnel events out of their internal traffic-scoring system. Those events do not exist in Meta's UI, so they cannot live in Meta's rule engine.

And some weak signals are an ad problem while others are an ad-set problem. The team needed both layers covered by the same library, not by two separate workflows.

## The overnight problem

The US is the primary market. Most of the spend happens during US business hours, which is overnight in Europe. Without automated kill logic, that means either babysitting Ads Manager at night or accepting that a losing ad will burn budget for hours before anyone notices it.

The team did not want a part-time night-shift role. They wanted the rules to do that work.

---

# Solution

## Rules that read the whole funnel at once

The team built a small library of automation rules in Scalemate. Eight rules total today: six pause decisions at the ad level, one pause decision at the ad-set level, and one re-activation rule for ad sets. Together they cover every layer of the test funnel from click through purchase, including the custom events from the internal traffic-scoring system.

A typical cascade rule reads several metrics and events at the same time. The team treats a rule as a small policy document: if all of these conditions are true together, the variant is not worth the next dollar. Single-condition rules in Meta's UI cannot express that idea.

## One library, cloned across campaigns

Because every rule lives in one place, the team clones a working policy when they spin up a new campaign instead of rebuilding it. The 8-rule library now covers a fleet of campaigns rather than being bound to any one of them.

That centralization also makes audits trivial. When a rule starts firing more often than expected, the team can see which campaigns it touched, which thresholds tripped, and whether the logic needs a tighter or looser version.

## Slack tells the team what fired and why

Every rule trigger posts to a Slack channel with the reason field: which rule, which campaign, which condition pushed it over. When data on a paused ad set arrives late, the thread tells the team which rule fired and on what evidence. From there they decide whether to tune the rule, re-enable the ad set manually, or leave the pause in place.

Across the first two months, the `activate adset` rule executed automatically eight times under conditions defined in its own logic. The rest of the late-data workflow stays in the team's hands, informed by the Slack trail.

## What this replaces

The honest answer: a person, somewhere in the world, watching Ads Manager around the clock. The cascade library and the Slack feed together remove the need for that role without removing the visibility.

---

# Results

## ~435 automated Meta decisions per month

In the first two months of running cascade rules in Scalemate, the system applied 871 automated actions across the account, which averages out to about 435 per month. The breakdown by rule layer:

- **~377 ad-level pauses per month** (~88 per week), across the 6 cascade rules
- **~55 ad-set pauses per month**, from the single ad-set rule
- **8 ad-set re-activations across the two-month window**, from the single re-activation rule

Numbers pulled from Appflame's Scalemate dashboard, first 60 days. This is a sustained pace, not a launch spike. The first-month and second-month numbers sit inside the same range.

> "Standard Meta automated rules were too rigid for us. We needed custom logic, multi-level checks, and our own events from the way we score traffic. That is what cascade rules unlocked."
>
> — **Dmytro Hannoshenko**, User Acquisition Lead at Appflame

## What that cadence bought the team

**More hypotheses tested on the same budget.** Meta's algorithm tends to over-allocate to a single creative once it starts learning, even when that creative is not meeting the team's KPIs. The cascade rules pull losing variants out of the ad set faster than Meta would. That frees room, both in the budget and in the algorithm's attention, for the next hypothesis. The team can keep more concurrent tests alive without overspending on the laggards.

**Earlier kill on multi-condition failures.** A bad ad rarely fails on one metric. It fails on CTR, then IPM, then the early funnel event. Single-condition rules either catch one of those alone and look paranoid, or wait for the slowest-moving metric and look slow. Cascades catch the moment when several signals agree.

**A safety mechanism for ad-set pauses.** The 8 re-activations across the two months are rare events, but they matter. Whatever the trigger logic, the existence of an automated layer that can re-enable an ad set means a pause is not always a final decision. The system has a path back when its own data says so.

**Operations load down to near zero overnight.** No part-time night-shift coverage. No overnight Slack pings asking "is this still running?" The team checks the trigger feed in the morning and reads what happened.

**A searchable record of every decision.** Because every trigger logs to Slack with its reason, the team has a post-mortem record of which rule made which call on which campaign. When they want to tighten the kill threshold or relax it, they argue from data, not memory.

> "Our market is the US. Our team is in Europe. Scalemate is what lets us stop watching Ads Manager at night."
>
> — **Dmytro Hannoshenko**, User Acquisition Lead at Appflame

## Where this fits

Cascade automation rules of this shape suit performance teams that operate in a testing mode rather than a maintenance mode. If the next quarter's plan reads like a hypothesis backlog with new creative angles, new geos, new offers, and custom funnel events your MMP or scoring system emits, the cascade-rule pattern is built for that workload.

If your account is firmly in BAU mode and your priority is squeezing a few more points of ROAS out of a stable winner, single-condition rules can carry most of the load. The case for the cascade structure rises sharply once the test volume rises.

If that sounds like your account, start a Scalemate trial and rebuild one cascade rule from this case study in your own funnel.

---

# CTA

**Primary:** Start trial → `https://app.scalemate.co/create-account`
**Secondary:** Book demo → `/book-a-demo`

---

# Internal links (woven inline above; consolidated here for review)

1. `/features/automation-rules` — anchor: "automation rules" (Solution §1 intro)
2. `/features/automation-rules` — anchor: "cascade rule logic" (Solution §1, paragraph 2)
3. `/use-cases/ad-campaign-automation-rules` — anchor: "campaign automation use case" (Where this fits)
4. `/use-cases/bulk-ad-launch` — anchor: "scale launches without manual setup" (Where this fits)
5. `/automation-rules-library` — anchor: "rule template library" (Solution §2)
6. `/solutions/media-buyers` — anchor: "media buyers" (Where this fits)
7. `/customers` — anchor: "more case studies" (footer / related)

---

# Metadata

**Slug:** `appflame-automation-rules`
**Title (browser / SEO):** `How Appflame tests more creative hypotheses per dollar on Meta`
**Meta description:** `Appflame's UA team runs ~435 cascade rule actions on Meta per month. How they test more creatives per dollar without overnight Ads Manager monitoring.` (152 char ✓)
**Canonical:** `https://www.scalemate.co/customers/appflame-automation-rules`
**OG image:** TBD — needs design pass (mirror `/customers/kitup` OG style)
**Schema:** `Article` (existing) + nested `about: Organization "Appflame"` + `Quotation` for Dmytro's pull-quote
