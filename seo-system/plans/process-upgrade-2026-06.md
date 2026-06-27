# SEO System Upgrade — 2026-06

> **СТАТУС: застосовано 2026-06-27.** Усі хвилі (A-F) вшиті в живі агенти/файли. Документ лишається як record рішень.
>
> Застосовано: A (off-page агент + wiring) · B (Трек H data-study + provenance QA) · C (AEO-петля intelligence Step 4) · D (llms.txt + llms-full.txt + review maintenance) · E (backward-linking у review + site-wide audit у intelligence) · F (discovery internal-links gap, content-creator ranking-зразки).
>
> Початковий proposal (нижче) для рев'ю Natalia.
> Джерело: гап-аналіз нашої системи проти валідованих 2026-практик (Nick Zviadadze / MintSEO + поточний стан Google після March 2026 Core Update + поведінка AI-цитувань).

---

## Контекст: де ми зараз

- Сайт у **режимі росту**, не відновлення: ~188 кліків / 46k показів за 3 міс (×5.5 / ×10 vs попередній період), інфлексія квітень 2026.
- Найбільший латентний анлок — сторінки з тоннами показів на 2-й сторінці (`best-ad-testing-tools` 7,909 показів @ pos 19.5, `best-mcp-servers` 9,950 @ pos 10.5).
- **DR ≈ 0** (Ahrefs) — зовнішнього авторитету майже немає.

## Що система вже робить добре (НЕ чіпаємо)

5-агентний пайплайн (intelligence → discovery → content-creator → qa → review) покриває ~70% сучасних практик і подекуди глибше: 4-етапний QA (content-ops 90+, anti-AI, Audience-Language Filter), intent-separation, cooldown на title/meta, existing-first, GSC-primary, pain-driven потік з лімітом.

## Чотири діри, які закриваємо

1. **Off-page відсутній повністю** — система = тільки контент + on-page. Беклінків/digital PR/mentions немає як процесу. При DR≈0 це блокує вихід застряглих сторінок у топ. **(найбільший важіль)**
2. **Original-data ассети** — нема content-type і процесу для first-party статистики (link-bait, що цитують журналісти+LLM).
3. **AEO-петля темна** — Brand Radar має 25 промптів, але 0 активних; нема прямого LLM-аудиту бренду; нема llms.txt. Не міряємо AI-цитування.
4. **Internal linking лише вперед** — нова стаття лінкує на інші, але старі пости не оновлюються лінком на нову; нема site-wide аудиту лінків.

---

## Апгрейди (за пріоритетом)

### A. Новий агент `off-page` (команда: `offpage`) — НАЙВИЩИЙ ПРІОРИТЕТ

Місячна каденція (не тижнева — off-page повільніший за контент). Output: `seo-system/off-page/YYYY-MM-DD.md` + оновлення нової секції pipeline.md `§Off-page`.

**Кроки:**
1. **Listings audit** — чек наявності/повноти профілів: G2, Capterra, Product Hunt, AlternativeTo, Trustpilot, SaaS-каталоги, «Madgicx/Birch alternatives» добірки. Список дір → задачі Natalia.
2. **Brand-mention reclamation** — Ahrefs `site-explorer-anchors` + Brand Radar + пошук «scalemate» без лінка → список згадок без беклінка для outreach.
3. **Digital PR queue** — моніторити Featured.com / Qwoted / Help a B2B Writer на релевантні запити журналістів → чернетка експертної відповіді від імені Наталії (8+ років, NDA-safe).
4. **Link-bait coordination** — тримати чергу original-data ассетів (див. B), таргетити «statistics keywords» що журналісти гуглять.
5. **Targeted outreach sprint** (опційно, коли є ресурс) — Нікова механіка: знайти сайти, що ранжуються за суміжними ключами (не наші), DR 20+, трафік 1k+/міс, активні 6 міс; offer = guest post / дані. Шаблони + трекінг у `§Off-page`.
6. **Backlink monitoring** — Ahrefs `site-explorer-refdomains-history` / `all-backlinks`: нові/втрачені рефдомени, тренд DR.

**Заборонено (вшити в агента):** лінк-ферми, реципрокні обміни (SpamBrain ловить у 2026), куплені спам-лінки, каталоги без трафіку.

**Tracking:** нова секція `pipeline.md §Off-page` — таблиця: target | tactic | status | link/mention type | date | DR джерела.

### B. Новий content-type «data-study»

- **discovery-agent Step 6** — додати тип `data-study` до content-type decision.
- **content-writing-rules** — шаблон data-study: методологія, charts, «cite this» блок, FAQPage + Dataset schema.
- Носії вже в пайплайні: `static-ads-vs-video-ads`, `creative-analytics-meta-tiktok` → вшити реальні цифри замість загальних.

**Source hierarchy (жорстке правило, вшити як blacklist-check у QA):**

1. **First-party (пріоритет)** — наші реальні агрегати, анонімізовані: тільки vertical labels («gaming app, T1 geo»), НІКОЛИ імена клієнтів. «NDA» = захист особи клієнта при реальних наших даних.
2. **Public sources (контекст / коли наших бракує)** — подавати **прозоро**: «зведено з N джерел» + URL кожної цифри. Approved sources: **MMP-звіти (AppsFlyer / Adjust / Singular / Kochava) — брати найсвіжіші**, галузеві benchmark-репорти. Можна перепитувати Natalia — вона вкаже джерело.
3. **Найсильніший формат** — наші first-party + публічні поряд для контексту («наш бенчмарк по X vs індустрія»).

**❌ ЗАБОРОНЕНО:** публічні середні під виглядом власних/«NDA» даних — нуль Information Gain, E-E-A-T ризик, проти `data-integrity.md`.

**Per-number provenance:** кожна цифра в data-study має тег походження — `first-party (vertical label)` АБО `public (source URL)`. Без тегу = QA fail.

- **Input gate:** агент НЕ вигадує дані — Checkpoint 3 Input Request до Natalia (витяг анонімізованих агрегатів АБО уточнення публічного джерела).

Деталі джерел: [[data_study_public_sources]].

### C. Прокачати intelligence Step 4 в реальну AEO-петлю

Замінити теперішній «Brand Radar якщо є project» на повноцінний крок:
1. **Активувати Brand Radar** — залити 25 готових промптів (`2026-05-25-recon-parts/05-brand-radar.md`). 15 хв сетапу Natalia.
2. **LLM brand blind-spot аудит** — прогнати фіксований промпт через ChatGPT/Claude/Gemini (web search OFF) на «scalemate», «best meta tiktok bulk ad tools», «madgicx alternative». Розбіжності = сліпі зони. Записати що AI про нас каже / пропускає / плутає.
3. **AIO-трекінг наших запитів** — для топ-запитів з GSC перевірити (SerpAPI `google_ai_overview`) чи є AI Overview, що зрізає CTR → список запитів де органічний клік «з'їдено» → адаптувати тип контенту.

Output → нова секція брифу `## 🤖 AI Visibility` з трендом SoV + blind-spots + AIO-загрози.

### D. Згенерувати `llms.txt` / `llms-full.txt`

- `public/llms.txt` — карта сайту для LLM: хто ми, ключові сторінки, що цитувати.
- `public/llms-full.txt` — розгорнута версія з описами.
- Крок підтримки в `review-agent` (оновлювати при новому контенті).

### E. Internal-linking backward pass

- **review-agent новий крок** — після кожного publish: знайти 3-5 старих релевантних постів → додати контекстний лінк на нову сторінку (keyword-rich anchor). Зараз лінкуємо тільки вперед.
- **intelligence Step 6** — раз на місяць site-wide аудит: сторінки з малою кількістю вхідних internal links (Ahrefs `pages-by-internal-links`) → план долінковки. Прямо живить вихід застряглих сторінок у топ.

### F. Дрібні докрутки

- **discovery Step 5** — додати «що топ-3 internally link» (Нікова деталь gap-аналізу).
- **content-creator** — формалізувати «3-5 зразків контенту, що **реально ранжується**» на кожен тип (не лише brand-voice семпли).

---

## Рекомендований порядок впровадження

| Хвиля | Що | Чому |
|---|---|---|
| **1 (зараз)** | C + D | найдешевше × найбільший AEO-важіль, нуль ризику, не чіпає контент-флоу |
| **2** | A (off-page агент) | найбільший структурний важіль, але потребує налаштування |
| **3** | B + E | B потребує твоїх даних; E доточується в review |
| **4** | F | косметика |

## Що НЕ беремо (свідомо)

- Нікові «50 постів день-1» / «20/міс velocity» — для нових сайтів; ми усталені, це ризик commodity-контенту після March 2026.
- Local-business тактики, чисті backlink-volume спринти (нам краще brand-mention + data-assets).

---

## Відкриті питання до Natalia

1. Які хвилі застосовуємо і в якому порядку?
2. Off-page агент — окремий агент чи розширення intelligence? (пропозиція: окремий, бо інша каденція й інші tools.)
3. Хто реально робить ручні off-page дії (listings, відповіді в Featured) — Natalia, чи частину автоматизуємо/делегуємо?
4. Чи готові виділити анонімізовані агрегати даних під data-study ассети?
