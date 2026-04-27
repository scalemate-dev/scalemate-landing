# SEO System — Handoff (updated 2026-04-20)

> Відкрий цей файл у новому чаті Claude Code. Скажи: **"прочитай handoff і починай з першого item"**.

## Як користуватись системою

Команди описані у `how-to-use.md`. Коротко:
- `розвідка` — weekly intelligence recon
- `discovery [тема]` — валідація теми
- `write [brief]` — написання draft'у
- `qa [draft]` — quality assurance
- `review` — трекінг опублікованого

## Ключові файли

| Файл | Для чого |
|---|---|
| `intelligence-briefs/2026-04-20-v2.md` | Актуальний бриф — контекст, дані, пріоритети, inputs needed |
| `prioritization-scorecard.md` | Живий беклог з scores і статусами |
| `plans/ad-creative-uploader-growth.md` | Деталі по uploader cluster (titles, structure, angles) |
| `content-writing-rules.md` | Правила контенту (обов'язково перед будь-яким writing) |
| `seo-system-plan.md` | Архітектура системи, принципи, scoring формула |

## Що вже зроблено

- ✅ Intelligence brief v2 зібрано (GSC + Ahrefs + Reddit + SERP)
- ✅ All priorities approved Natalia (16 items)
- ✅ Step 6.5 ICP Pain Discovery додано в Intelligence Agent
- ✅ Ad Creative Uploader growth plan створено
- ✅ Trust pages gap виявлено і додано в план
- ✅ Case studies (Appflame, Promin) додано в план
- ✅ Madgicx article deployed (tracking, milestone 2026-04-30)
- ✅ 2 articles pending indexation (request submitted 2026-04-20)
- ✅ Item #2: Title/meta fix `/ad-creative-uploader` — deployed 2026-04-20 (commit `24e5df9`)
- ✅ Item #3: Keyword rewire `/use-cases/automated-creative-upload-meta` — deployed 2026-04-20 (commit `24e5df9`)
- ✅ Item #4: Internal linking refresh (uploader cluster) — deployed 2026-04-20 (commit `24e5df9`)
- ✅ Item #5: `/blog/best-mcp-servers` — ban warning + verified integration + title/meta — deployed 2026-04-20 (commit `24e5df9`)
- ✅ Item #5b: `/blog/best-ad-testing-tools` — title/meta fix — deployed 2026-04-20 (commit `24e5df9`)
- ✅ Ryze AI (get-ryze.ai) додано в конкуренти
- ⏸️ Item #1: Title/meta `/use-cases/ad-campaign-automation-rules` — deferred, чекаємо індексацію блог-постів

## Agent Action Items (по пріоритету)

Агент бере **зверху вниз**. Quick wins спершу, потім нові статті, trust pages паралельно.

**QUICK WINS (existing page fixes):**

| # | Задача | Agent | Effort | Status |
|---|---|---|---|---|
| 1 | Title/meta `/use-cases/ad-campaign-automation-rules` | copywriting | 3h | ⏸️ deferred — чекаємо індексацію blog posts, revisit ~2026-04-27 |
| 2 | Title/meta fix `/ad-creative-uploader` (bulk + creatives) | copywriting | 2h | ✅ done — pending deploy |
| 3 | Keyword rewire `/use-cases/automated-creative-upload-meta` | content-creator + copywriting | 8-10h | ✅ done — pending deploy |
| 4 | Internal linking refresh (uploader cluster) | content-creator | 2h | ✅ done |
| 5 | Optimize `/blog/best-mcp-servers` (title/meta + ban warning + verified angle) | copywriting | 4-5h | ✅ done — pending deploy |
| 5b | Title/meta fix `/blog/best-ad-testing-tools` (1420 imp, 0 clicks, 0% CTR) | copywriting | 2-3h | ✅ done — додано "Software", meta скорочено з 182→154 chars. Pending deploy. |
| 6 | "vs Competitors" секція на use-case page | copywriting + conversion-ops | 4h | ⏸️ deferred — conversion tool, не traffic driver. Повернутись коли use-case page має трафік (після Item #7) |

**NEW CONTENT (discovery → write → qa):**

| # | Задача | Agent | Effort | Status |
|---|---|---|---|---|
| 7 | Blog "How to Bulk Upload Creatives to Meta & TikTok (5 Methods)" | discovery → content-creator → qa | 10-12h | ✅ deployed 2026-04-21 |
| 8 | ~~Listicle "Best Bulk Ad Upload Tools"~~ → **Listicle "Best Bulk Ad Launch Tools for Meta & TikTok (2026)"** | discovery → content-creator → qa | 8-10h | ⬜ next — launch cluster ~140 imp/28d GSC, BOFU intent |
| 9 | Pillar "Creative Testing" (1000+ vol cluster, KD 0-8) | discovery → content-creator → qa | 8-12h | ⬜ backlog — after #8 |
| 10 | "Ad Operations: The Complete Guide" (250 vol, KD 1) | discovery → content-creator → qa | 10h | ⬜ backlog |

**CASE STUDIES (⛔ blocked — input від Natalia):**

| # | Задача | Agent | Effort | Status |
|---|---|---|---|---|
| 11 | Case study: Appflame (rules feature) | content-creator → qa | 8h | ⛔ blocked — input needed |
| 12 | Case study: Promin Agency (rules feature) | content-creator → qa | 8h | ⛔ blocked — input needed |

**TRUST PAGES (паралельно):**

| # | Задача | Agent | Effort | Status |
|---|---|---|---|---|
| 13 | `/about` page | copywriting + conversion-ops | 5h | ⛔ blocked — input needed |
| 14 | `/terms` page | copywriting | 3h | ⬜ backlog |
| 15 | `/contact` page | copywriting | 2h | ⬜ backlog |
| 16 | Author pages for blog | content-creator | 4h | ⬜ backlog |
| 17 | Organization schema + sameAs | content-creator | 2h | ⬜ backlog |

---

## 👩 Natalia — Ручні таски

Речі які агент не може зробити. По пріоритету:

**🔴 Терміново (розблоковує все інше):**

| # | Задача | Effort | Чому важливо |
|---|---|---|---|
| N1 | **Deploy** Items #2 і #3 + Request Indexing в GSC | 30 min | Без deploy зміни не працюють |
| N2 | **Перевірити індексацію** `facebook-automated-rules` і `facebook-ads-automation` (~2026-04-27) | 10 min | Визначить чи Item #1 актуальний |

**🟡 Цього тижня:**

| # | Задача | Effort | Чому важливо |
|---|---|---|---|
| N3 | **Reddit presence** — моніторити r/PPC, r/FacebookAds на "bulk upload" треди, відповідати з value-first + casual mention free tool | 30 min/тиж | Прямі sign-ups, HIGH intent users |
| N4 | **Inputs для case studies** — зібрати дані Appflame і Promin (метрики до/після, challenge, quote) | 1-2h | Розблоковує Items #11, #12 |
| N5 | **Inputs для `/about`** — команда, company info, місія | 30 min | Розблоковує Item #13, найбільший trust gap |

**🟢 Коли буде час:**

| # | Задача | Effort | Чому важливо |
|---|---|---|---|
| N6 | **YouTube video** — screen recording "How to Upload 50 Ad Creatives to Meta in 5 Minutes" (Loom/screen rec) | 3-5h | Video SERP carousel + YouTube search, embed на tool page |
| N7 | **Outreach listicle авторам** — pitch free bulk uploader до 5 listicles (adstellar.ai, adamigo.ai — найвищий шанс) | 2-3h | Backlinks + mentions, ми не в жодному listicle |
| N8 | **Madgicx CTR check** — перевірити CTR milestone 2026-04-30 | 10 min | Deployed 2026-04-16, потрібна T+2wk перевірка |

---

## Як працювати (ОБОВ'ЯЗКОВО)

**Ти працюєш по системі.** Всі правила, методології, checkpoints — обов'язкові. Не вигадуй свій підхід.

### Обов'язкові файли перед будь-якою роботою:
1. **`seo-system-plan.md`** — архітектура, принципи (data-first, existing-first, quality), scoring, approval checkpoints
2. **`content-writing-rules.md`** — правила контенту, title/meta методологія (4.1), anti-AI rules, templates
3. **`prioritization-scorecard.md`** — поточний беклог, статуси

### Агенти (інструкції в `agents/`):
| Агент | Файл | Коли використовувати |
|---|---|---|
| Discovery | `agents/discovery-agent.md` | Валідація нової теми перед написанням |
| Content Creator | `agents/content-creator-agent.md` | Написання контенту (outline → approve → draft) |
| QA Pipeline | `agents/qa-pipeline.md` | Перевірка якості (content-ops 90+, humanizer, copy-editing) |
| Review | `agents/review-agent.md` | Трекінг опублікованого контенту |

### Flow по типу задачі:

**Quick wins (title/meta fix, keyword rewire, internal links):**
1. Прочитати `content-writing-rules.md` (секція 4.1 для title/meta)
2. Для item #3 — додатково прочитати `plans/ad-creative-uploader-growth.md`
3. Зробити роботу по методології
4. Показати результат Natalia (Checkpoint 2) — **не вносити зміни без approve**
5. Після approve — внести в код
6. Natalia deploy'ить

**Нові статті (blog, listicle, pillar, guide):**
1. Виконати `agents/discovery-agent.md` — повний workflow → Topic Brief
2. Показати outline Natalia (Checkpoint 2)
3. Після approve — виконати `agents/content-creator-agent.md` → full draft
4. Виконати `agents/qa-pipeline.md` → score 90+, humanizer pass
5. Показати final draft Natalia (Checkpoint 4)
6. Після approve — Natalia deploy'ить

**Case studies та trust pages:**
1. Перевірити чи є inputs від Natalia (бриф секція "Inputs needed")
2. Якщо blocked — запитати inputs, перейти до наступного item
3. Якщо inputs є — виконати `agents/content-creator-agent.md` → `agents/qa-pipeline.md`
4. Checkpoint 4 → deploy

### Принципи (ЗАВЖДИ):
- **Data-first** — жодних змін без обґрунтування даними (GSC, Ahrefs, SERP)
- **Existing-first** — перевір чи є сторінка перед створенням нової
- **Human-in-the-loop** — показуй результат Natalia перед внесенням змін
- **Anti-AI** — весь контент проходить humanizer check
- **Quality ≥ 90** — нічого не публікується без content-ops score 90+

## Monitoring (deployed items)

| Item | Deployed | Next check |
|---|---|---|
| Madgicx article title/meta | 2026-04-16 | 2026-04-30 (CTR milestone) |
| `/ad-creative-uploader` title/meta | 2026-04-20 | 2026-04-27 (T+7d) |
| `/use-cases/automated-creative-upload-meta` keyword rewire | 2026-04-20 | 2026-04-27 (T+7d) |
| `/blog/best-mcp-servers` ban warning + title | 2026-04-20 | 2026-04-27 (T+7d) |
| `/blog/best-ad-testing-tools` title fix | 2026-04-20 | 2026-04-27 (T+7d) |
| `facebook-ads-automation` indexation | 2026-04-20 (request) | 2026-04-27 |
| `facebook-automated-rules` indexation | 2026-04-20 (request) | 2026-04-27 |
| `/ad-creative-uploader` title/meta | pending deploy | T+7d після deploy |
| `/use-cases/automated-creative-upload-meta` keyword rewire | pending deploy | T+7d після deploy |

## Key insights

1. **Problem-first > keyword-first.** Reddit/communities = головне джерело реальних болей ICP. Ahrefs не бачить problem-language queries (0 volume), але SERP доводить що люди їх шукають.
2. **Keyword stuffing kills pages.** "automate creative upload meta ads" × 12 разів = 3 imp за 90 днів. Заміна на real queries = шанс ранжуватись.
3. **Title fix ≠ traffic fix.** Якщо сторінка має 70 imp/mo (Item #1), навіть ідеальний title дасть 2-3 кліки. Потрібен контент-магніт (blog) + internal links.
4. **Ryze AI** (get-ryze.ai) — новий конкурент у automation rules SERP, pos 4 з rich snippets (4.9★, 200 reviews).
