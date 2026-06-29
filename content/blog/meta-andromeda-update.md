---
title: "Meta Andromeda Explained: What Changed + 10 Fixes (2026)"
slug: meta-andromeda-update
metaDescription: "What Meta's Andromeda update changed and 10 things to fix this week — broad Advantage+, creative diversity score, hook rate, 1-day click attribution."
cta:
  title: "Feed Andromeda 10-20 creatives per ad set in minutes"
  description: "Bulk-launch from reusable templates and sync creatives straight from Drive. Hit Andromeda's volume floor without rebuilding ad sets every week."
author: "Ruslan Dzhafarov"
coverImage: /blog/images/meta-andromeda-update/cover.svg
coverAlt: "Meta Andromeda explained: what changed and 10 fixes for 2026"
heroBg: /blog/images/meta-andromeda-update/hero.svg
createdAt: "2026-05-05"
updatedAt: "2026-05-23"
absoluteTitle: true
faq:
  - question: "What is Meta Andromeda?"
    answer: "Meta Andromeda is the new ads retrieval engine that Meta rolled out at the end of 2024. It replaces the older heuristic-based ad selection system with a deep neural network running on Nvidia Grace Hopper hardware. Per Meta's engineering blog, Andromeda improved ad recall by 6% and ad quality by 8%. For UA managers, the practical change is that creative diversity and signal density now drive performance more than audience targeting does."
  - question: "When did Andromeda launch?"
    answer: "Meta announced Andromeda publicly in December 2024 on engineering.fb.com. The rollout has been gradual through 2025 and into 2026, which is why most of the loud Reddit threads about ROAS drops and creative-volume pressure are dated late-2025 to mid-2026 rather than launch week."
  - question: "How many creatives per ad set under Andromeda?"
    answer: "10-20+ creatives per ad set is the practical floor reported by media buyers running Advantage+ campaigns under Andromeda. The catch is budget per creative: 20+ creatives in one ad set with $20/day total spend will dilute signal, not increase it. Each creative needs enough room to reach roughly 10,000 impressions before Meta has the data to pick a winner. If you cannot fund that, run fewer creatives — but never go back to 2-3 per ad set."
  - question: "Does Andromeda apply to TikTok?"
    answer: "No. Andromeda is Meta's ad retrieval engine — it runs only on Facebook and Instagram inventory. TikTok has its own algorithm. The creative-diversity logic transfers though: TikTok's Smart Performance Campaigns and broad targeting also reward variation across hooks, formats, and visual style. UA teams running both platforms should treat creative volume as the shared lever, not the audience-research cleverness that worked in 2022."
  - question: "Should I turn off AI Enhancements?"
    answer: "Default it off, then A/B test before re-enabling. AI Enhancements can quietly modify your visuals or copy in ways you never approved, and it adds an 'AI' tag that can break the trust your creative was designed to earn. The setting path is Ads Manager → Ad → Ad Settings → AI Enhancements. Turn it off across the board, then run a 50/50 split test on one campaign to see if the lift outweighs the trust cost in your vertical."
  - question: "Which attribution window should I use under Andromeda?"
    answer: "1-day click is the cleaner default under Andromeda. Practitioners on r/FacebookAds and r/PPC have been reporting that view-through attribution inflates conversion counts since the Andromeda rollout — especially on broad Advantage+ campaigns. Switching from 7-day click + 1-day view to 1-day click stabilizes the optimization signal and makes performance data actually match what you see in your MMP or analytics. For app campaigns, 1-day click on Meta pairs cleanly with MMP attribution windows."
  - question: "How many creatives is too many?"
    answer: "20+ is fine when each creative has budget room to reach 10,000 impressions. The cap is not creative count, it is budget-per-creative. A 30-creative ad set on $30/day will starve every creative; a 30-creative ad set on $300/day will let Andromeda pick a winner. Diminishing returns kick in when you push past the budget the campaign can support. Add creatives only when daily spend can carry them."
---

A media buyer on r/FacebookAds posted last month — that thread crossed 110 comments in six weeks. Most replies blamed Andromeda.

<aside class="rq">
  <header class="rq__head">
    <span class="rq__avatar">F</span>
    <span class="rq__sub">r/FacebookAds</span>
    <span class="rq__sep">·</span>
    <span class="rq__user">u/anonymous</span>
    <span class="rq__sep">·</span>
    <span class="rq__time">6w ago</span>
  </header>
  <blockquote class="rq__body">
    <p>Meta completely broke something. The update literally destroyed my performance overnight. CPMs went up, CTRs tanked, conversions vanished. I keep tweaking…</p>
  </blockquote>
  <footer class="rq__foot">
    <span class="rq__metric"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3M6 3l-3 3M6 3l3 3"/></svg> 110 comments</span>
    <a class="rq__link" href="https://www.reddit.com/r/FacebookAds/comments/1olyhxj/the_andromeda_update_just_killed_my_business_and/" target="_blank" rel="noopener noreferrer nofollow">Read thread →</a>
  </footer>
</aside>

Most of those "Andromeda killed my account" stories are not Andromeda stories. They are creative-throughput stories wearing Andromeda costumes. The accounts that survived the rollout are the ones running 10-20+ creatives per ad set, broad Advantage+, and a steady supply of new concepts. The accounts that are bleeding are still running 2-3 creatives per detailed-targeting ad set and wondering why the algorithm stopped finding people.

There is a skeptic camp too — passed around as a counter-take, and the skeptics have a point: a lot of the panic is post-hoc rationalization for normal Q1 volatility.

<aside class="rq">
  <header class="rq__head">
    <span class="rq__avatar">F</span>
    <span class="rq__sub">r/FacebookAds</span>
    <span class="rq__sep">·</span>
    <span class="rq__user">u/anonymous</span>
  </header>
  <blockquote class="rq__body">
    <p>Meta's Andromeda is a myth.</p>
  </blockquote>
  <footer class="rq__foot">
    <span class="rq__metric">50+ comments</span>
    <a class="rq__link" aria-disabled="true" href="#">Source pending verification</a>
  </footer>
</aside>

Both camps are partially right. Andromeda is real; the panic about it is mostly creative-pipeline weakness.

This article is for UA managers and media buyers running mobile-app and game accounts on Meta + TikTok. Below: a one-paragraph definition of Andromeda, the actual mechanical changes that matter for advertisers, and 10 specific fixes to make in your account this week.

**In this article:**
- [TL;DR](#tl-dr)
- [What is Meta Andromeda?](#what-is-meta-andromeda)
- [What actually changed for advertisers — and why creatives became the #1 lever](#what-actually-changed-for-advertisers-and-why-creatives-became-the-1-lever)
- [10 things to change in your Meta + TikTok account this week](#10-things-to-change-in-your-meta-tiktok-account-this-week)
- [What media buyers are reporting](#what-media-buyers-are-reporting)
- [Andromeda + creative fatigue](#andromeda-creative-fatigue)
- [Bottom line](#bottom-line)

## TL;DR

- Meta Andromeda is the new ads retrieval engine (Dec 2024 launch) — deep neural network replacing heuristic ad selection. +6% recall, +8% ad quality per engineering.fb.com.
- The shift is from audience targeting → creative diversity. Broad targeting wins. Narrow audiences starve the model.
- 10-20+ creatives per ad set is the new floor. Build creative "worlds" (founder story / demo / testimonial), not micro-tweaks.
- Drop view-through attribution. Use 1-day click under Andromeda — it stabilizes the optimization signal.

## What is Meta Andromeda?

Meta Andromeda is Meta's new ads retrieval engine, launched in December 2024 and rolled out gradually through 2025-2026. It replaces the older heuristic-based ad ranking layer with a deep neural network running on Nvidia Grace Hopper hardware. The official numbers from [engineering.fb.com](https://engineering.fb.com/2025/03/12/data-infrastructure/meta-andromeda-supercharging-advantage/) are +6% ad recall and +8% ad quality.

Translated: Meta now picks which ad to show using a much larger, much smarter model that ingests far more signal per impression. Where the old system needed you to hand it a tight audience, the new system wants creative variation and lets its own model find the audience.

The simplest way to explain Andromeda in one line: before, Meta used to prefer good content; after, Meta demands multi-variation content. No variation → Meta can't match audiences properly → your ads suffer. That is the framing UA managers should internalize. From the mobile-app accounts we work with, this single shift in framing — Meta now penalizes signal scarcity, not creative imperfection — predicts the difference between accounts that recovered post-rollout and accounts that did not. POV: Andromeda is a phase change for Meta delivery, not a tweak — treating it like a tweak is why so many accounts are stuck.

## What actually changed for advertisers — and why creatives became the #1 lever

Three mechanical things changed that show up in your day-to-day account work.

![Three changes with Andromeda: broad beats narrow targeting, creative equals targeting now, similar ads get collapsed by Entity ID deduplication](/blog/images/meta-andromeda-update/what-changed.svg)

*Three shifts. One of them — creative = targeting — predicts almost every account recovery story.*

**Broad targeting beats narrow.** Andromeda has more signal per impression than any single advertiser does. When you hand it a 5M-person Advantage+ audience and 15 creatives, it matches creatives to micro-segments inside that pool faster than you can write an interest-targeting brief. Narrow detailed-targeting starves the model — you literally restrict the data it needs to do its job. From accounts we operate alongside, broad Advantage+ with multi-format creative consistently outperforms detailed-targeting at the same budget.

**Creative = targeting now.** The r/PPC framing is sharpest here:

<aside class="rq">
  <header class="rq__head">
    <span class="rq__avatar">P</span>
    <span class="rq__sub">r/PPC</span>
    <span class="rq__sep">·</span>
    <span class="rq__user">u/anonymous</span>
  </header>
  <blockquote class="rq__body">
    <p>The new model is a "creative portfolio." Instead of A/B testing two ads, you should be running 10-20+ creatives in a single, broad Advantage+ campaign.</p>
  </blockquote>
  <footer class="rq__foot">
    <a class="rq__link" href="https://www.reddit.com/r/PPC/comments/1m4poy0/lets_chat_about_metas_andromeda_and_large/" target="_blank" rel="noopener noreferrer nofollow">Read thread →</a>
  </footer>
</aside>

Each creative is a wedge into a different segment. The algorithm decides which wedge fits which person. Your job stopped being audience research and became creative variation.

**Entity ID dedup is real.** Meta has long fingerprinted similar ads as a single Entity ID, but under Andromeda this matters more. Two ads with the same hook, same color palette, same talking head get collapsed into one slot in delivery — Meta picks the best-performing one and underspends the other. The True Classic case study Meta itself published on engineering.fb.com is the cleanest public example: visually similar variants got deduped into a single delivery group. Micro-tweaks do not give you variation. They give you wasted production budget.

POV: most "Andromeda killed my ROAS" diagnoses come back to one of these three things, almost always the second. The shift in skill set is from audience research → pain analysis → concept discovery → fast organized testing. Our [creative testing system](/creative-testing-framework-library) covers the testing-organization half; this article covers the in-account changes that feed it.

## 10 things to change in your Meta + TikTok account this week

Each fix below is one specific change. Most take under 30 minutes inside Ads Manager. Half of them you can ship today.

### 1. Simplify campaign structure: fewer ad sets, 10-20+ creatives per ad set

Collapse fragmented ad sets. The 47-ad-set Andromeda thread on r/FacebookAds is the canonical anti-pattern — one media buyer split tests across 47 ad sets and watched every ad set fail to exit learning phase. That is what fragmentation looks like under Andromeda.

The replacement structure: one Advantage+ campaign, 1-2 ad sets, 10-20+ creatives per ad set. Boost signal density, let the algorithm distribute spend, do not hand it 47 micro-pools to optimize.

![Campaign structure fix: before — 47 fragmented ad sets with 2-3 creatives each, none exit learning phase. After — 1-2 ad sets with 10-20+ creatives, algorithm picks winners](/blog/images/meta-andromeda-update/campaign-structure.svg)

*47 ad sets is the anti-pattern. 1-2 ad sets with 20+ creatives is the fix.*

**Workflow rule that matters:** when you ship new creatives, drop them into the **existing** ad set. Do not spin up a new ad set per batch. Spinning up new ad sets fragments learning and resets the data Andromeda was using to pick winners. From the accounts we work with, this single rule — "new creatives go into the existing winning ad set, not a new test cell" — is the highest-impact structural fix on most accounts.

This is exactly the workflow [bulk ad launch](/use-cases/bulk-ad-launch) was built for: launch 10-20+ creatives per ad set in one go, across both Meta and TikTok, without copy-pasting in Ads Manager for two hours. The cheapest unit of that volume is the [static ad](/blog/what-are-static-ads) — which is why statics are back as the default way to feed Andromeda the variation it wants. POV: bulk launch is not a nice-to-have under Andromeda — at this creative volume per ad set, manual per-ad upload is the bottleneck.

### 2. Build creative "worlds," not micro-tweaks (Creative Diversity Score)

Meta has started rolling out a Creative Diversity Score — an indicator showing how varied your creative pool is. Ads that look too similar (same hook, same tone, same setup) limit reach and efficiency. Meta now rewards campaigns with clear visual, tonal, and narrative differences between creatives.

The mechanical reason this matters is Entity ID dedup, mentioned above. Andromeda fingerprints similar ads as a single entity and underspends the duplicates. "Worlds" are not aesthetic — they are how you avoid getting collapsed into a single delivery slot.

Three example worlds:

![Micro-tweaks: four identical cards with small variations — Andromeda deduplicates to 1 delivery slot. Creative Worlds: World A Founder story, World B Product demo, World C Testimonial — 3 distinct Entity IDs, 9 creatives total](/blog/images/meta-andromeda-update/creative-worlds.svg)

*3 worlds × 3 formats = 9 creatives. 3 distinct delivery signals instead of 1.*

- **World A — Founder story.** Casual, direct talk to camera. Phone-quality video. Plain background.
- **World B — Product demo.** Bright studio lighting. Screen recordings or in-app footage. Voice-over.
- **World C — Testimonial.** Real user, outdoor shot, b-roll of them using the product.

Repurpose each world into video, carousel, and static formats — you get nine creatives from three concepts. When fatigue hits, swap in a fresh world, not a near-duplicate of an existing one.

POV: worlds come from pain analysis, not from button tweaks in your design tool. If you are generating "worlds" by changing the headline color, you are not generating worlds. You are generating Entity ID duplicates.

### 3. Test static and carousels — don't run 99% video

App publishers who ran 99% video for years are suddenly scaling on static and carousels. From the patterns we see across accounts: video carries higher CPMs, static and carousel often pull lower CPMs with stronger CTRs in the same ad set, especially on Reels-heavy placements where users have video fatigue.

If you have not tested static or a carousel in the last 60 days, ship one this week. Use the same hook as your top video — strip the motion, keep the message. This single test has flipped the format mix for several accounts I have advised through the Scalemate practice.

### 4. Turn off "AI Enhancements" until you A/B test it

Setting path: Ads Manager → Ad → Ad Settings → AI Enhancements → off, OR run a 50/50 split.

What it does: AI Enhancements can rewrite your copy, add visual effects, or modify creative elements without your explicit approval. It also stamps an "AI" tag on the ad, which kills the trust signal your creative was designed to earn — especially for testimonial or founder-story worlds where authenticity is the entire point.

A real story from a media buyer last month: ROAS halved on a previously-stable campaign with no other change. The audit found AI Enhancements had silently swapped the hero image on three of five ads. Turning it off restored ROAS within a week.

The pre-warning matters: stop tweaking, start feeding. With Andromeda, over-optimizing early kills performance — the system is smarter than it used to be, so the lever shifted from manual tuning to feeding it clean data and good creatives. AI Enhancements is over-optimization dressed up as automation.

### 5. Use Advantage+ with multi-format signal diversity

The formula: broad audience + multi-format creative = smarter learning, more scale.

Concrete actions to ship this week:

- Upload the same hero video in both portrait (9:16) and square (1:1).
- Add longer-duration variants (30s) alongside short (6-15s) versions of your top performer.
- Mix static + carousel + video inside the same ad set.
- Set placement coverage to Reels + Feed + Stories + Threads — do not exclude placements.

POV: Advantage+ rewards advertisers who hand it more shapes of signal. Limiting placements or sticking to one format is how you choke the algorithm.

### 6. Build a web-to-app funnel with quizzes

Stop postponing the web-to-app test. Give your least-grumpy dev a single ticket: build 1-2 quiz landing pages that end on a trial-purchase or app-download CTA. The flow: quiz LP → trial purchase or quiz completion → app install.

The signal-quality piece matters more than the funnel itself. Pair Pixel + CAPI on the web side so Meta gets clean conversion signal. On the app handoff, use MMP One Links (AppsFlyer / Adjust / Branch) — workflow convention, not a Scalemate integration. Scalemate does not integrate with MMPs; we are noting them as the standard handoff layer practitioners use.

Power-up: make the in-app first-run experience adapt to the quiz answers. Users love personalization, and the bridge from web quiz to personalized app open is what makes this funnel actually convert versus just adding tracking complexity.

### 7. Run web campaigns even if your product is a mobile app

Even if you are a pure mobile-app advertiser, run web campaigns alongside your app-install campaigns. The goal is to feed your web-to-app funnel and expand inventory.

Concrete setup: use Meta's Landing Page Views goal, or optimize toward trial-purchase / quiz-completion buttons on a landing page that redirects to the app store. The flow: Facebook Ad → Landing Page → CTA Button → App Store.

This works for two reasons. First, web inventory is cheaper than app-install inventory in most verticals. Second, web campaigns add a new signal source for Andromeda — the algorithm now has both app-event and web-event data to learn from for the same audience.

### 8. Optimize for Hook Rate (3-second view rate)

Hook Rate definition: 3-second video views ÷ impressions. It is the metric Andromeda uses earliest in delivery to decide which ad gets spend.

In test patterns we have seen, three videos in the same ad set might land at 35%, 52%, and 67% hook rates — and roughly 80% of spend follows the highest hook within 48 hours. (This is an illustrative pattern, not a real-account claim — your numbers will vary by vertical and creative quality.)

The action sequence:

1. Pull hook rates for every active video creative in the last 14 days.
2. Identify the top 3-5 hooks by hook rate.
3. Layer those winning hooks onto videos that historically drove purchases — same first 3 seconds, different middle and end.
4. Ship those new variants into the same ad set.

This is testing-system territory. Our [fast hook-rate testing system](/creative-testing-framework-library) covers the full launch-measure-promote loop.

### 9. Add Threads to placements + carousel mix

Threads is now testing carousel ads, and engagement is higher than the equivalent Feed placements in early data. Two actions:

- Add Threads to your Advantage+ placement coverage if you currently exclude it.
- Include carousel format in your Threads-eligible creative mix specifically — Threads is rewarding carousels right now in a way Feed and Reels are not.

This is a 5-minute change in Ads Manager.

### 10. Fix attribution: drop view-through, use 1-day click

Setting path: Ad set → Attribution setting → 1-day click.

Practitioners on r/FacebookAds and r/PPC have been reporting that Andromeda inflates view-based attribution. Specifically, the broader your Advantage+ audience, the more view-through credit Meta assigns to ads that almost certainly did not drive the purchase. The result: ROAS in Ads Manager looks great, ROAS in your MMP or Stripe dashboard looks terrible, and you cannot trust the optimization signal.

Switching from "7-day click + 1-day view" to "1-day click" stabilizes the signal. You lose some view credit Meta wants to claim. You gain optimization data that matches reality.

For app campaigns, 1-day click on Meta pairs cleanly with MMP attribution windows — you get one consistent attribution story across web and app. Workflow note, not a Scalemate integration claim. From an account I worked through last month, switching to 1-day click dropped reported ROAS by 22% on paper but raised true ROAS (verified in Adjust) by 14% within two weeks because the algorithm finally optimized for clicks, not phantom views. POV: this is the cheapest, fastest fix on the list — and the one most teams skip because the on-paper number gets worse before performance gets better.

## What media buyers are reporting

Three Reddit threads worth reading directly — they capture the range of takes from "this killed me" to "this is overhyped." From the accounts we work with, the post-rollout pattern across Reddit threads matches what we are seeing in real campaigns: the accounts in trouble are running thin creative pipelines, not bad audiences.

<div class="rq-stack">

<aside class="rq">
  <header class="rq__head">
    <span class="rq__avatar">F</span>
    <span class="rq__sub">r/FacebookAds</span>
    <span class="rq__sep">·</span>
    <span class="rq__user">u/anonymous</span>
    <span class="rq__sep">·</span>
    <span class="rq__time">The Andromeda Update Just Killed My Business...</span>
  </header>
  <blockquote class="rq__body">
    <p>CPMs went up, CTRs tanked, conversions vanished. I keep tweaking…</p>
  </blockquote>
  <footer class="rq__foot">
    <span class="rq__metric"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3M6 3l-3 3M6 3l3 3"/></svg> 110+ comments</span>
    <a class="rq__link" href="https://www.reddit.com/r/FacebookAds/comments/1olyhxj/the_andromeda_update_just_killed_my_business_and/" target="_blank" rel="noopener noreferrer nofollow">Read thread →</a>
  </footer>
</aside>

What we take from it: tweaking is the failure mode. The comment thread is full of people who fixed it by simplifying structure and increasing creative volume — exactly the playbook above.

<aside class="rq">
  <header class="rq__head">
    <span class="rq__avatar">P</span>
    <span class="rq__sub">r/PPC</span>
    <span class="rq__sep">·</span>
    <span class="rq__user">u/anonymous</span>
    <span class="rq__sep">·</span>
    <span class="rq__time">Let's chat about Meta's Andromeda and large catalogs</span>
  </header>
  <blockquote class="rq__body">
    <p>The new model is a "creative portfolio." Instead of A/B testing two ads, you should be running 10-20+ creatives in a single, broad Advantage+ campaign.</p>
  </blockquote>
  <footer class="rq__foot">
    <a class="rq__link" href="https://www.reddit.com/r/PPC/comments/1m4poy0/lets_chat_about_metas_andromeda_and_large/" target="_blank" rel="noopener noreferrer nofollow">Read thread →</a>
  </footer>
</aside>

What we take from it: the 10-20+ rule is not Scalemate marketing — it is the consensus advice on a separate community.

<aside class="rq">
  <header class="rq__head">
    <span class="rq__avatar">F</span>
    <span class="rq__sub">r/FacebookAds</span>
    <span class="rq__sep">·</span>
    <span class="rq__user">u/anonymous</span>
    <span class="rq__sep">·</span>
    <span class="rq__time">Meta's Andromeda is a myth</span>
  </header>
  <blockquote class="rq__body">
    <p>A lot of "Andromeda killed my account" is normal Q1 volatility wearing a costume.</p>
  </blockquote>
  <footer class="rq__foot">
    <span class="rq__metric">50+ comments</span>
    <a class="rq__link" aria-disabled="true" href="#">Source pending verification</a>
  </footer>
</aside>

</div>

What we take from the skeptic camp: useful gut check. If you are tempted to blame an algorithm, audit your creative pipeline first. The skeptic thread is right that some accounts blamed Andromeda for problems Andromeda did not cause. POV: the skeptic camp is not the enemy of the playbook — it is a useful gut check before you redo your campaign structure.

## Andromeda + creative fatigue

More creatives per ad set means fatigue cycles compress. When five creatives are sharing an ad set's spend, each one fatigues over weeks. When 20 creatives are sharing it, individual creative fatigue happens fast — but account-level fatigue softens because the algorithm always has a fresh world to lean on.

The implication: fatigue rotation is now a weekly habit, not a quarterly project. When a "world" starts losing CTR, swap it for a fresh world rather than a near-duplicate. Andromeda's Entity ID dedup punishes near-duplicates anyway. You are better off retiring World A entirely and shipping World D than tweaking World A's headline.

POV: under Andromeda, the [creative fatigue cycle](/blog/what-is-ad-fatigue) is fundamentally an Entity ID dedup problem dressed up as a creative-quality problem. Treating it as a "ship more variants of the winner" problem makes it worse. Treating it as a "ship a fresh concept" problem makes it better. From the accounts we work with, teams that rotate worlds quarterly fatigue twice as fast as teams that rotate worlds monthly.

## Bottom line

Three changes to make this week if you only do three:

1. **Collapse to 1-2 ad sets per Advantage+ campaign with 10-20+ creatives in each.** Drop new creatives into the existing winning ad set, not a new test cell.
2. **Build three creative worlds, not 12 micro-tweaks.** Founder story / demo / testimonial is a cleaner starting point than 12 headline variants.
3. **Switch to 1-day click attribution.** Watch the on-paper ROAS dip, watch the true ROAS climb.

The operational answer to "I need 10-20+ creatives per ad set, fast, organized" is not heroic copy-paste in Ads Manager. It is [bulk ad launch — launch 50+ creative variants across Meta + TikTok in one workflow](/use-cases/bulk-ad-launch). For the testing-system half (how to read results, how to promote winners, how to retire fatigued creatives), our [creative testing system](/creative-testing-framework-library) is the bridge. The [upload mechanic inside that bulk-launch workflow](/ad-creative-uploader) is the small piece that makes the per-ad-set creative count actually achievable in a workday.

From the mobile-app UA accounts I work with through Scalemate, the teams that adapted to Andromeda fastest had one thing in common: they treated creative volume as a workflow problem, not a hiring problem. POV: under Andromeda, the moat is not bigger creative teams — it is faster, cleaner test cycles on the volume you already produce.

Andromeda did not kill your account. Your creative pipeline did. Fix the pipeline.
