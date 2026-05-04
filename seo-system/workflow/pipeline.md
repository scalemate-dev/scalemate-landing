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
| _empty_ | — | — | — | — | — | — |

---

## §2. Discovery in progress

> Discovery агент валідує тему — keyword data, SERP, ICP pain. Виходить з brief.md.

- _empty_

---

## §3. Pending Natalia review (brief)

> Brief готовий, чекає твого approve. Approve = рух у §4. Reject = назад у §1 або в §9.

- _empty_

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
  - position-current: 10.7, ctr-current: 0.20%, imp-day: ~18 (497 imp / 27d)
  - milestone: T+4wk (2026-05-05)
  - decision: ⚠️ iterate — 27d at pos 10.7, 497 imp, тільки 1 click; CTR 0.20% під низом для page 1. Title/snippet потребують rework
- [https://www.scalemate.co/blog/best-ad-testing-tools](https://www.scalemate.co/blog/best-ad-testing-tools) — best-ad-testing-tools
  - deployed: 2026-04-07
  - artifact: content/blog/best-ad-testing-tools.md
  - position-current: 16.9, ctr-current: 0.0%, imp-day: ~113 (3045 imp / 27d)
  - milestone: T+4wk (2026-05-05)
  - decision: ⚠️ iterate — title уже правлений 2026-04-20 (див. 📊 Monitoring); position просіла з 5.8 → 19.5 після правки; чекаємо T+4wk monitoring rev
- [https://www.scalemate.co/blog/what-is-ad-fatigue](https://www.scalemate.co/blog/what-is-ad-fatigue) — what-is-ad-fatigue
  - deployed: 2026-04-07
  - artifact: content/blog/what-is-ad-fatigue.md
  - position-current: 24.2, ctr-current: 0.0%, imp-day: ~20 (551 imp / 27d)
  - milestone: T+4wk (2026-05-05)
  - decision: ⚠️ iterate — pos 24.2 (page 3), 0 clicks, але 551 imp = є інтерес. Треба on-page SEO + рев'ю title/intent
- [https://www.scalemate.co/blog/facebook-ads-automation](https://www.scalemate.co/blog/facebook-ads-automation) — facebook-ads-automation
  - deployed: 2026-04-07
  - artifact: content/blog/facebook-ads-automation.md
  - position-current: —, ctr-current: —, imp-day: ~0 (poza top 24 by impressions)
  - milestone: T+4wk (2026-05-05)
  - decision: ❌ escalate — не індексується 4+ тижнів (як і facebook-automated-rules). Confirms indexation bottleneck (project-state insight #8)
- [https://www.scalemate.co/blog/bulk-upload-creatives-meta-tiktok](https://www.scalemate.co/blog/bulk-upload-creatives-meta-tiktok) — bulk-upload-creatives-meta-tiktok
  - deployed: 2026-04-21
  - artifact: content/blog/bulk-upload-creatives-meta-tiktok.md
  - position-current: 9.6, ctr-current: 0.63%, imp-day: ~24 (319 imp / 13d)
  - milestone: T+2wk (2026-05-05)
  - decision: ✅ keep — pos 9.6 (page 1), 2 clicks, healthy ramp; продовжуємо моніторити до T+4wk
- [https://www.scalemate.co/blog/best-bulk-ad-launch-tools](https://www.scalemate.co/blog/best-bulk-ad-launch-tools) — best-bulk-ad-launch-tools
  - deployed: 2026-04-27
  - artifact: content/blog/best-bulk-ad-launch-tools.md
  - position-current: 8.6, ctr-current: 1.65%, imp-day: ~26 (182 imp / 7d)
  - milestone: T+1wk (2026-05-04)
  - decision: monitoring — strong start (page 1, 3 clicks first week); next check T+2wk = 2026-05-11
- [https://www.scalemate.co/blog/creative-testing-framework](https://www.scalemate.co/blog/creative-testing-framework) — creative-testing-framework
  - deployed: 2026-04-28
  - artifact: content/blog/creative-testing-framework.md
  - position-current: 9.6, ctr-current: 0.0%, imp-day: ~48 (289 imp / 6d)
  - milestone: T+1wk (2026-05-05)
  - decision: monitoring — fast indexation, page 1 instantly, але 0 clicks за 6d; next check T+2wk = 2026-05-12

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

- _empty_

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
| `/ad-creative-uploader` metadata | 2026-04-20 | 217 imp, 5 clk, 2.3% CTR, pos 11.2 | 149 imp, 6 clk, 4.03% CTR, pos 9.9 | 2026-05-18 (T+4wk) | title «Free Ad Uploader — Google Drive to Meta…» → «Bulk Upload Ad Creatives to Meta & TikT…» (24e5df9) | ✅ keep (T+2wk: CTR 2.3%→4.03%, pos 11.2→9.9 — tracking T+4wk) |
| `/blog/best-ad-testing-tools` metadata | 2026-04-20 | 1561 imp, 0 clk, 0.0% CTR, pos 5.8 | 1568 imp, 0 clk, 0.0% CTR, pos 19.5 | 2026-05-18 (T+4wk) | title «Best Ad Testing Tools in 2026: 10 Tools…» → «10 Best Ad Testing Tools & Software (20…»; description «Compare the best ad testing tools and a…» → «Compare 10 ad testing tools and softwar…» (bcc4394, 24e5df9) | ❌ revert (T+2wk: pos 5.8→19.5, -13.7 places, CTR still 0%; revert title/meta до 2026-04-19 baseline) |
| `/blog/best-mcp-servers-meta-google-ads` metadata | 2026-04-20 | 2304 imp, 11 clk, 0.48% CTR, pos 6.5 | 965 imp, 8 clk, 0.83% CTR, pos 6.9 | 2026-05-18 (T+4wk) | title (no change); description «Compare MCP servers that connect Meta A…» → «Meta is banning ad accounts that connec…» (24e5df9) | ⚠️ iterate (T+2wk: imp -58%, але CTR 0.48%→0.83% +73%; ban-warning hook працює, але новий description зменшив impressions — варіант B description) |
| `/blog/madgicx-review-alternative` metadata | 2026-04-30 | 2599 imp, 2 clk, 0.08% CTR, pos 9.8 | 128 imp, 1 clk, 0.78% CTR, pos 8.8 | 2026-05-14 (T+2wk) | description «Madgicx pricing starts at $69/mo…» → «Running ads beyond Meta? See Madgicx pr…»; title «Madgicx Review 2026: Pricing, Features …» → «Is There a Real Madgicx Alternative for…» (6d3141e, 9a9bfe5) | monitoring |
