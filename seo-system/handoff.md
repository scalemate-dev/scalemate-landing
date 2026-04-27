# SEO System — Handoff (updated 2026-04-27)

> Відкрий цей файл у новому чаті Claude Code щоб отримати повний контекст.

## Як користуватись системою

**Локально (Claude Code):**
- `розвідка` — weekly intelligence recon (GSC + Ahrefs + SERP)
- `discovery [тема]` — валідація теми
- `write [brief]` — написання draft'у
- `qa [draft]` — quality assurance
- `review` — трекінг опублікованого

**Remote pipeline (автоматичний):**
- Інструкція: `seo-system/how-to-run-automatic-agent.md`
- Approved queue: `seo-system/approved-queue.md`
- Trigger ID: `trig_01NXngZzTqsviqftNeZWoauv`
- Запуск: скажи Claude "запусти pipeline"

## Ключові файли

| Файл | Для чого |
|---|---|
| `seo-system/intelligence-briefs/2026-04-27.md` | Актуальний weekly brief |
| `seo-system/prioritization-scorecard.md` | Живий беклог з scores і статусами |
| `seo-system/content-writing-rules.md` | Правила контенту (обов'язково перед будь-яким writing) |
| `seo-system/agents/` | Agent prompt definitions |
| `seo-system/approved-queue.md` | Queue для remote pipeline |
| `seo-system/natalia-tasks.md` | Ручні таски для Natalia |
| `seo-system/plans/ad-creative-uploader-growth.md` | Uploader cluster plan |
| `seo-system/seo-system-plan.md` | Архітектура системи |

## Що вже зроблено

### Deployed (live на scalemate.co)

- ✅ Madgicx article title/meta — deployed 2026-04-16
- ✅ Item #2: Title/meta `/ad-creative-uploader` — "Bulk Upload Ad Creatives to Meta & TikTok — Free Tool" — deployed 2026-04-20. Result: +150% imp, +500% clicks
- ✅ Item #3: Keyword rewire `/use-cases/automated-creative-upload-meta` — 15 місць замінено — deployed 2026-04-20. Result: +2000% imp
- ✅ Item #4: Internal linking refresh — 3 cross-links — deployed 2026-04-20
- ✅ Item #5: `/blog/best-mcp-servers` — ban warning + verified integration + title — deployed 2026-04-20
- ✅ Item #5b: `/blog/best-ad-testing-tools` — title/meta fix — deployed 2026-04-20
- ✅ Item #7: Blog "How to Bulk Upload Creatives to Meta & TikTok (5 Methods)" — deployed 2026-04-21. Indexed in 6 days, 79 imp first week
- ✅ Item #8: Listicle "Best Bulk Ad Launch Tools for Meta & TikTok (2026)" — deployed 2026-04-27

### System improvements

- ✅ Pain-first content approach (section 2.2) додано в content-writing-rules
- ✅ Discovery agent оновлений: GSC validation, SERP intent check, funnel assessment, intent separation, two content streams
- ✅ Ryze AI, Adnova, SaaS Ads Studio, Ad Mule додано в конкуренти
- ✅ SEO system перенесено в repo (`seo-system/`) для remote agent access
- ✅ Remote pipeline trigger створено (manual run)
- ✅ Scalemate free tier pricing оновлено (1 account, 100 launches/mo, unlimited uploads, 2 rules)

### Deferred / Blocked

- ⏸️ Item #1: Title/meta `/use-cases/ad-campaign-automation-rules` — deferred, pos покращується сама (7.5)
- ⏸️ Item #6: "vs Competitors" section — deferred until use-case page has traffic
- ⛔ Items #11-12: Case studies Appflame/Promin — blocked, input needed від Natalia
- ⛔ Item #13: `/about` page — blocked, input needed
- 🚨 `facebook-automated-rules` і `facebook-ads-automation` — 5 тижнів не індексуються (Discovered - not crawled)

## Agent Action Items (по пріоритету)

**NEXT:**

| # | Задача | Status |
|---|---|---|
| 9 | Pillar "Creative Testing" (1000+ vol cluster, KD 0-8) | ⬜ next — найбільший volume |
| 10 | "Ad Operations: The Complete Guide" (250 vol, KD 1) | ⬜ backlog |

**TRUST PAGES:**

| # | Задача | Status |
|---|---|---|
| 14 | `/terms` page | ⬜ backlog |
| 15 | `/contact` page | ⬜ backlog |
| 16 | Author pages for blog | ⬜ backlog |
| 17 | Organization schema + sameAs | ⬜ backlog |

## 👩 Natalia — Ручні таски

Детальний список: `seo-system/natalia-tasks.md`

**Терміново:**
- 🚨 Re-submit індексацію facebook-automated-rules і facebook-ads-automation
- Request Indexing для best-bulk-ad-launch-tools (нова стаття)
- Madgicx CTR check — milestone 2026-04-30

**Дизайн/контент:**
- Hero image для automated-creative-upload-meta
- Картинки з каруселі в MCP блог-пост
- Video з озвучкою для bulk upload статті
- Скріншоти для bulk upload статті (Meta, Markifact, конкуренти, Scalemate)

## Weekly Cadence

**Понеділок:** `розвідка` (локально) → approve priorities → додати в `approved-queue.md` → "запусти pipeline"
**Вівторок:** git pull → дивишся briefs → approve → "запусти pipeline"
**Середа:** git pull → дивишся drafts → правки → deploy
**П'ятниця:** review deployed items

## Key Insights (learnings цих сесій)

1. **Title/keyword changes працюють.** Uploader: +500% clicks, +2000% imp на use-case page
2. **Pain-first > keyword-first.** Reddit quotes в intro дають кращий engagement
3. **Keyword stuffing kills pages.** "automate creative upload meta ads" × 12 = 3 imp/90d
4. **GSC = ground truth.** Ahrefs не бачить більшість queries. Завжди перевіряти GSC
5. **SERP validation обов'язкова.** "ad management tools" (1100/mo) = Active Directory, не ads
6. **Intent separation.** Upload ≠ Launch. Різний SERP = різні статті
7. **Verified Meta app = killer differentiator.** Ban risk angle якого немає ні в кого
8. **Indexation = bottleneck.** 2 статті 5 тижнів не індексуються. Low DR site problem
9. **Transparent bias > fake objectivity.** "We make this tool" працює краще ніж "honest comparison"
