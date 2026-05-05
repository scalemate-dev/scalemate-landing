# Pipeline

> Source of truth для стану всіх SEO топіків і tracking metadata-edits.
> One file, one place. Кожен item рухається через секції 1→9, plus 📊 Monitoring tracking task для title/meta правок на існуючих URL.

---

## Як читати

- **§1-§7** — топіки в роботі (in-progress).
- **§8 Published** — задеплоєно на scalemate.co. Звідси review агент бере items для T+7d / T+2wk / T+4wk milestones.
- **§9 Rejected / Archived** — закрито без публікації (щоб не пропонувати знову).
- **📊 Monitoring** — title/meta правки на існуючих URL (не нові статті). Окремий потік tracking.

Approval = ти редагуєш цей файл і рухаєш item у наступну секцію. Mode: Loose — всі секції завжди на main.

---

## §1. New (потребує discovery)

> Кандидати які пройшли intelligence recon. Score-колонки заповнюються коли є дані; якщо ad-hoc topic від тебе — score може бути порожнім.

| Slug | Volume | KD | GSC imp | Funnel | Score | Notes |
|---|---|---|---|---|---|---|
| scale-creative-volume-without-designers | — | 0 | — | MOFU | 7.0 | Pain #3 from Reddit ("more creatives, same designers"); JTBD 6; no existing content; aligns Bulk Launch + AI Assistant |
| facebook-ads-automation-tools-comparison | 250 (cluster) | 6–14 | — | MOFU | 6.5 | Sibling to non-indexed `/blog/facebook-ads-automation`; cluster `facebook ads automation` (vol 150 KD 6) + `…tools` (50 KD 14) + `…software` (40 KD 12); de-risks indexation issue with new URL |
| automation-rules-frameworks-meta-tiktok | — | — | — | MOFU | 5.0 | Replaces effort on stuck `/blog/facebook-automated-rules` + `/blog/facebook-ads-automation` (re-index attempts exhausted). Concrete rule templates with thresholds (auto-pause CPA>X, scale ROAS>Y, rollback on -30% CTR), multi-platform Meta+TikTok. Discovery should plan internal links from indexed authority pages `/use-cases/ad-campaign-automation-rules` + `/features/automation-rules` to maximize indexation chance. JTBD 4+7. From action-list 2026-05-04 (S10). |

---

## §2. Discovery in progress

> Discovery агент валідує тему — keyword data, SERP, ICP pain. Виходить з brief.md.

- _empty_

---

## §3. Pending Natalia review (brief)

> Brief готовий, чекає твого approve. Approve = рух у §4. Reject = назад у §1 або в §9.

- **meta-andromeda-update** — discovery completed 2026-05-05 (PR #59, branch `seo/meta-andromeda-update`). Brief: [`seo-system/topics/meta-andromeda-update/brief.md`](../topics/meta-andromeda-update/brief.md). Primary keyword `meta andromeda update` (vol 500, parent `meta andromeda` 1,400 KD 15). Cluster ~3,500 vol/mo across 23 keywords. SERP for `meta andromeda update` is 10/10 Reddit threads — pure gap for structured founder-voiced playbook. Existing content check: zero pages, zero GSC impressions over 90d. Pain validated: 4 of top-10 Reddit threads have 50+ comments, 2 have 100+. Unique angle: founder-authored mobile-UA Andromeda playbook synthesizing 7 Ruslan LinkedIn hacks + 2 internal Scalemate observations (Creative Diversity Score "worlds", simplified campaign structure with 10–20+ creatives per ad set). 5 inputs needed from Natalia/Ruslan listed in brief.

---

## §4. Approved for writing

> Brief approved. Content-creator агент пише draft.

- _empty_

---

## §5. Pending Natalia review (draft)

> Draft готовий, чекає твого approve. Approve = рух у §6. Reject = назад у §4.

- _empty_

---

## §6. Approved for QA

> Draft approved. QA агент перевіряє content-ops + copy + humanizer + SEO technical.

- _empty_

---

## §7. Pending Natalia deploy

> QA passed. Чекає що ти задеплоїш (`bash deploy.sh`).

- _empty_

---

## §8. Published

> Задеплоєно на scalemate.co. Review агент трекає T+7d / T+2wk / T+4wk.
>
> Формат item:
> ```
> - [URL] — slug
>   - deployed: YYYY-MM-DD
>   - artifact: topics/<slug>/
>   - position-current: X, ctr-current: Y%, imp-day: Z (оновлюється review агентом)
>   - milestone: T+Xwk
>   - decision: [✅ keep / ⚠️ iterate / ❌ escalate]
> ```

- [https://www.scalemate.co/blog/adcreative-ai-alternative](https://www.scalemate.co/blog/adcreative-ai-alternative) — adcreative-ai-alternative
  - deployed: 2026-04-07
  - artifact: content/blog/adcreative-ai-alternative.md
  - position-current: 10.6, ctr-current: 0.20%, imp-day: ~18 (512 imp / 28d)
  - milestone: T+4wk (review 2026-05-04)
  - decision: ❌ escalate — CTR 0.76% → 0.20% (0.26× baseline, далеко нижче 1.5× порогу). Position покращилась 13.0 → 10.6, але title/snippet не конвертять. Потрібен architectural rework — repositioning у comparison-page формат.
- [https://www.scalemate.co/blog/best-ad-testing-tools](https://www.scalemate.co/blog/best-ad-testing-tools) — best-ad-testing-tools
  - deployed: 2026-04-07
  - artifact: content/blog/best-ad-testing-tools.md
  - position-current: 16.9, ctr-current: 0.0%, imp-day: ~112 (3129 imp / 28d)
  - milestone: T+4wk (review 2026-05-04)
  - decision: ❌ escalate — 3,129 imp, 0 clicks за T+4wk. Confounded with metadata edit Apr 20 (pos 5.8→19.4). Спершу revert metadata (див. 📊 Monitoring) → переоцінити CTR через 14d → якщо все ще 0%, full architectural rework.
- [https://www.scalemate.co/blog/what-is-ad-fatigue](https://www.scalemate.co/blog/what-is-ad-fatigue) — what-is-ad-fatigue
  - deployed: 2026-04-07
  - artifact: content/blog/what-is-ad-fatigue.md
  - position-current: 24.2, ctr-current: 0.0%, imp-day: ~20 (553 imp / 28d)
  - milestone: T+4wk (review 2026-05-04)
  - decision: ❌ escalate — pos 18.6 → 24.2 (-5.6 places, page 2 → page 3), imp/day тренд вниз, 0 clicks. CTR 0× baseline. Investigate intent — спробувати retitle ("ad fatigue signs" / "how to fix ad fatigue") або archive.
- [https://www.scalemate.co/blog/facebook-ads-automation](https://www.scalemate.co/blog/facebook-ads-automation) — facebook-ads-automation
  - deployed: 2026-04-07
  - artifact: content/blog/facebook-ads-automation.md
  - position-current: —, ctr-current: —, imp-day: 0 (28d window — insufficient data)
  - milestone: T+4wk (review 2026-05-04)
  - indexation: blocked — SerpAPI `site:` returns 0 results at T+4wk
  - decision: ❌ escalate / 🔄 re-index — не індексується 4+ тижнів (як і facebook-automated-rules). GSC URL Inspection → Request Indexing. Якщо все ще не indexed на T+5wk (2026-05-12) — investigate sitemap/canonical/orphan issue.
- [https://www.scalemate.co/blog/bulk-upload-creatives-meta-tiktok](https://www.scalemate.co/blog/bulk-upload-creatives-meta-tiktok) — bulk-upload-creatives-meta-tiktok
  - deployed: 2026-04-21
  - artifact: content/blog/bulk-upload-creatives-meta-tiktok.md
  - position-current: 9.7, ctr-current: 0.59%, imp-day: ~24 (337 imp / 14d)
  - milestone: T+2wk (review 2026-05-04)
  - decision: ⚠️ iterate — flat. CTR 1.13% (week 1) → 0.59% (14d) = 0.52×, не росте. Position ↑ (10.5 → 9.7, page 1). Per spec — keep monitoring до T+4wk (2026-05-19); якщо все ще flat → snippet rewrite.
- [https://www.scalemate.co/blog/best-bulk-ad-launch-tools](https://www.scalemate.co/blog/best-bulk-ad-launch-tools) — best-bulk-ad-launch-tools
  - deployed: 2026-04-27
  - artifact: content/blog/best-bulk-ad-launch-tools.md
  - position-current: 8.3, ctr-current: 1.44%, imp-day: ~30 (209 imp / 7d)
  - milestone: T+1wk (review 2026-05-04)
  - indexation: ✅ confirmed (SerpAPI site: returns position 1 with full snippet)
  - decision: ✅ keep — strong start (page 1 з day one, CTR 1.44%, 3 clicks за week 1). Next check T+2wk = 2026-05-11.
- [https://www.scalemate.co/blog/creative-testing-framework](https://www.scalemate.co/blog/creative-testing-framework) — creative-testing-framework
  - deployed: 2026-04-28
  - artifact: content/blog/creative-testing-framework.md
  - position-current: 9.6, ctr-current: 0.0%, imp-day: ~58 (345 imp / 6d)
  - milestone: T+1wk (review 2026-05-04, today is T+6d)
  - indexation: ✅ confirmed (SerpAPI site: returns position 1, snippet renders)
  - decision: ✅ keep / monitoring — fast indexation, page 1 instantly. CTR 0% але тільки 6d; reassess T+2wk (2026-05-12). Якщо 0 clicks залишається — snippet review.

---

## §9. Rejected / Archived

> Топіки що ми вирішили НЕ робити. Причина обов'язкова — щоб через 3 місяці не пропонувати знову.
>
> Формат item:
> ```
> - slug
>   - rejected: YYYY-MM-DD
>   - reason: [SERP intent mismatch / 0 demand / cannibalization / abandoned mid-write]
> ```

- facebook-ads-manager-bulk-upload-alternative
  - rejected: 2026-05-05
  - reason: 0 demand (Ahrefs vol = 0 on `facebook ads manager bulk upload alternative` + variants) AND cannibalization with existing `/blog/bulk-upload-creatives-meta-tiktok` (already covers cluster, 79 imp/wk pos 11.1). Replaced by S1' = strengthen existing article with H3 on "alternative" intent. See action-lists/2026-05-04.md S1.
- creative-fatigue-7-day-meta-andromeda
  - rejected: 2026-05-05
  - reason: Slug mixed two clusters — creative fatigue (already covered by `/blog/what-is-ad-fatigue`) + Andromeda (real gap, 3.5K vol/mo). Hyper-specific "7-day" = 0 vol. Repurposed as standalone `meta-andromeda-update` (now in §1 New) with creative fatigue as one sub-section + internal link to existing fatigue page. See action-lists/2026-05-04.md S2'.

---

## 📊 Monitoring (metadata edits tracking)

> Per-page моніторинг title/meta правок на ІСНУЮЧИХ URL (це не нові топіки — це edits).
> Нові статті/сторінки трекаються в §8 Published.
>
> Як оновлювати:
> 1. Запустити `python3 seo-system/scripts/detect-metadata-changes.py --days 30` — скрипт виведе готові markdown-рядки.
> 2. Якщо URL вже є в таблиці — оновити рядок (новий current snapshot, новий next check).
> 3. Якщо URL новий — додати рядок.
> 4. Review агент далі читає цю таблицю на T+2wk / T+4wk і виносить decision.
>
> **Decision values:**
> - `monitoring` — ще не пройшов milestone, чекаємо
> - `✅ keep` — CTR/impressions виросли, правка спрацювала
> - `⚠️ iterate` — flat, треба ще одну ітерацію (тільки після cooldown 14d)
> - `❌ revert` — позиція впала / impressions просіли, повернути попередній варіант
> - `🔄 re-index` — Google ще не підхопив новий title, чекаємо або submit URL Inspection

| Item | Deployed | Baseline (-30d) | Current | Next check | Change | Decision |
|---|---|---|---|---|---|---|
| `/ad-creative-uploader` metadata | 2026-04-20 | 217 imp, 5 clk, 2.30% CTR, pos 11.2 | 132 imp, 6 clk, 4.55% CTR, pos 9.7 | 2026-05-18 (T+4wk) | title «Free Ad Uploader — Google Drive to Meta…» → «Bulk Upload Ad Creatives to Meta & TikT…» (24e5df9) | ✅ keep (T+2wk: CTR 2.30%→4.55% = 1.98× baseline, pos 11.2→9.7 +1.5 places — edit працює; tracking T+4wk for confirmation) |
| `/blog/best-ad-testing-tools` metadata | 2026-05-04 | 3129 imp, 0 clk, 0.0% CTR, pos 14.7 (post-Apr-20 28d) | no data yet (just deployed) | 2026-05-18 (T+2wk) | **Apr 20 edit caused pos 5.8→19.4 with 0 clicks both versions** (root-cause: page-level positioning, not title). **May 4: replaced revert with ICP-aligned title test** — title «10 Best Ad Testing Tools & Software (20…» → «10 Best Ad Testing Tools for Meta + TikTok (2026)»; description «Compare 10 ad testing tools and softwar…» → «Compare 10 ad testing tools that work across Meta and TikTok: pricing, launch speed, automation rules — for ROAS-focused teams in 2026.» (commit 0691cb2, PR #55) | monitoring (T+2wk: if CTR still ~0, escalate to S9 full content rework per `seo-system/action-lists/2026-05-04.md`) |
| `/blog/best-mcp-servers-meta-google-ads` metadata | 2026-04-20 | 2304 imp, 11 clk, 0.48% CTR, pos 6.5 | 949 imp, 8 clk, 0.84% CTR, pos 7.0 | 2026-05-18 (T+4wk) | title (no change); description «Compare MCP servers that connect Meta A…» → «Meta is banning ad accounts that connec…» (24e5df9) | ⚠️ iterate (T+2wk: imp -59%, але CTR 0.48%→0.84% = +75%; ban-warning hook працює, але description звузив query reach. Cooldown 14d → варіант B description: keep ban-warning hook + broaden до загального MCP comparison framing) |
| `/blog/madgicx-review-alternative` metadata | 2026-04-30 | 2599 imp, 2 clk, 0.08% CTR, pos 9.8 | 128 imp, 1 clk, 0.78% CTR, pos 8.7 | 2026-05-14 (T+2wk) | description «Madgicx pricing starts at $69/mo…» → «Running ads beyond Meta? See Madgicx pr…»; title «Madgicx Review 2026: Pricing, Features …» → «Is There a Real Madgicx Alternative for…» (6d3141e, 9a9bfe5) | monitoring (T+4d: early signal positive — CTR 0.08%→0.78% ≈ 9.7×, pos +1.1; hold judgment until T+2wk) |
| `/use-cases/ad-campaign-automation-rules` metadata | 2026-04-29 | 201 imp, 0 clk, 0.0% CTR, pos 7.8 | 78 imp, 0 clk, 0.0% CTR, pos 11.5 | 2026-05-13 (T+2wk) | title rewrite — Facebook + ROAS focus (0c3d863, PR #39) | monitoring (T+5d: pos -3.7 typical re-ranking after title change; reassess T+2wk. NOTE: row missed by detect-metadata-changes.py — added manually this review cycle) |
| `/use-cases/bulk-ad-launch` body enrichment | 2026-05-04 | 456 imp, 5 clk, 1.10% CTR, pos 18.6 (28d pre-edit) | no data yet (just deployed) | 2026-05-18 (T+2wk) | **Body keyword enrichment** (not title/meta): added 5 striking-distance phrases × 1 mention each — `bulk ad launcher`, `Facebook campaign launcher`, `automated ad launch tool`, `launch ads faster`, `automate bulk ad creation for Meta Facebook Ads`. Each placed in natural body context (CTA, problem, before/after, how-it-works, FAQ). Verified via grep. Commit 0691cb2, PR #55. NOTE: row missed by detect-metadata-changes.py (script tracks frontmatter title/description only — body changes invisible). | monitoring (T+2wk: target pos 14-18 → top 10 on 5 enriched queries; if no movement, file under no-impact body edit and learn) |
| Internal linking refresh — uploader cluster | 2026-05-04 | n/a (multi-page) | n/a (effects accumulate over weeks) | 2026-06-01 (T+4wk) | 3 new internal links added (PR #55, commit 0691cb2): `/ad-creative-uploader` → `/blog/bulk-upload-creatives-meta-tiktok` + `/blog/best-bulk-ad-launch-tools`; `/use-cases/bulk-ad-launch` → `/blog/best-bulk-ad-launch-tools`. Reverse links to `/ad-creative-uploader` and `/use-cases/bulk-ad-launch` already existed. | monitoring (cluster authority signal — measure aggregate impressions/clicks across 5 cluster URLs vs 28d-pre baseline at T+4wk) |
