# Scalemate SEO — Project State

> Поточний стан проєкту: що задеплоєно, що покращено, що заблоковано, які learnings.
> Це context-файл для агентів — щоб не пропонувати вже зроблене і не ігнорувати learnings.
> Оновлюється після кожного значущого циклу (deploy, нова learning, новий blocker).
>
> Last updated: 2026-04-27

---

## Що вже задеплоєно (live на scalemate.co)

- ✅ Madgicx article title/meta — deployed 2026-04-16
- ✅ Title/meta `/ad-creative-uploader` — "Bulk Upload Ad Creatives to Meta & TikTok — Free Tool" — deployed 2026-04-20. Result: +150% imp, +500% clicks
- ✅ Keyword rewire `/use-cases/automated-creative-upload-meta` — 15 місць замінено — deployed 2026-04-20. Result: +2000% imp
- ✅ Internal linking refresh — 3 cross-links — deployed 2026-04-20
- ✅ `/blog/best-mcp-servers` — ban warning + verified integration + title — deployed 2026-04-20
- ✅ `/blog/best-ad-testing-tools` — title/meta fix — deployed 2026-04-20
- ✅ Blog "How to Bulk Upload Creatives to Meta & TikTok (5 Methods)" — deployed 2026-04-21. Indexed in 6 days, 79 imp first week
- ✅ Listicle "Best Bulk Ad Launch Tools for Meta & TikTok (2026)" — deployed 2026-04-27

## System improvements

- ✅ Pain-first content approach додано в `rules/content-writing.md` (section 2.2)
- ✅ Discovery agent оновлений: GSC validation, SERP intent check, funnel assessment, intent separation, two content streams
- ✅ Ryze AI, Adnova, SaaS Ads Studio, Ad Mule додано в список конкурентів
- ✅ SEO system перенесено в repo (`seo-system/`) для remote agent access
- ✅ Remote pipeline trigger створено + Ahrefs (18 endpoints) і SerpAPI MCP підключені
- ✅ Topic-centric structure (2026-04-27): `topics/[slug]/` замість `briefs/` + `drafts/`
- ✅ Scalemate free tier pricing: 1 account, 100 launches/mo, unlimited uploads, 2 rules

## Deferred / Blocked

- ⏸️ Title/meta `/use-cases/ad-campaign-automation-rules` — deferred, position покращується сама (7.5)
- ⏸️ "vs Competitors" section — deferred until use-case page has traffic
- ⛔ Case studies Appflame/Promin — blocked, input needed від Natalia
- ⛔ `/about` page — blocked, input needed
- 🚨 `facebook-automated-rules` і `facebook-ads-automation` — 5 тижнів не індексуються (Discovered - not crawled)
- ❌ GSC for remote agent — не зроблено, поки що workaround: GSC дані додаються вручну в pipeline.md
- ❌ Slack notifications для remote agent — не зроблено

## Next priorities (в роботі або беклог)

**NEXT (по pipeline §1):**
- Pillar "Creative Testing" (1000+ vol cluster, KD 0-8) — найбільший volume, в роботі
- "Ad Operations: The Complete Guide" (250 vol, KD 1) — backlog

**TRUST PAGES (для domain authority):**
- `/terms` page — backlog
- `/contact` page — backlog
- Author pages for blog — backlog
- Organization schema + sameAs — backlog

Детально: див. [workflow/pipeline.md](../workflow/pipeline.md)

---

## Key Insights (learnings — обов'язково враховувати в нових циклах)

1. **Title/keyword changes працюють.** Uploader: +500% clicks, +2000% imp на use-case page
2. **Pain-first > keyword-first.** Reddit quotes в intro дають кращий engagement
3. **Keyword stuffing kills pages.** "automate creative upload meta ads" × 12 = 3 imp/90d
4. **GSC = ground truth.** Ahrefs не бачить більшість queries. Завжди перевіряти GSC
5. **SERP validation обов'язкова.** "ad management tools" (1100/mo) = Active Directory, не ads
6. **Intent separation.** Upload ≠ Launch. Різний SERP = різні статті
7. **Verified Meta app = killer differentiator.** Ban risk angle якого немає ні в кого
8. **Indexation = bottleneck.** 2 статті 5 тижнів не індексуються. Low DR site problem
9. **Transparent bias > fake objectivity.** "We make this tool" працює краще ніж "honest comparison"
