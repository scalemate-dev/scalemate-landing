# Natalia — Ручні таски

> Речі які агент не може зробити. Оновлюється по мірі роботи.
> Останнє оновлення: 2026-04-20

---

## 🔴 Терміново (розблоковує все інше)

- [x] ~~**Deploy Items #2 і #3**~~ — deployed 2026-04-20 (commit `24e5df9`)
- [ ] **🚨 Re-submit індексацію** `facebook-automated-rules` і `facebook-ads-automation` — 5 тижнів не індексуються! Статус: "Discovered - currently not indexed" (Google навіть не прийшов crawl'ити). Actions: (1) Request Indexing в GSC ще раз, (2) поділитись лінками в LinkedIn/X щоб дати зовнішній сигнал Google

## 🟠 Дизайн / контент

- [ ] **Hero image для `/use-cases/automated-creative-upload-meta`** — зараз hero без картинки, виглядає порожньо. Додати скріншот або ілюстрацію workflow (Google Drive → Scalemate → Meta). Аналогічно до інших use-case сторінок (15-30 min)
- [ ] **Картинки з каруселі в MCP блог-пост** — зарендерити HTML каруселі (`linkedin-carousel-all.html`) в PNG і додати в `/blog/best-mcp-servers-meta-google-ads`. Слайди: cover, tools comparison, warning про бани. Файли: `/Users/nataliabondar/claude-work/linkedin-carousel-all.html` (15-30 min)
- [ ] **Video для bulk upload статті** — додати озвучку до існуючого відео. Потім: (1) upload на YouTube з SEO title/description/tags, (2) embed YouTube відео в blog post. YouTube first — дає video SERP carousel + YouTube search. Озвучка важлива для engagement + YouTube auto-transcript (1-2h)
- [ ] **Скріншоти для bulk upload статті** — 4 зображення для кожного методу (1-2h):
  - Method 1: скрін Meta Ads Manager bulk import Excel template (з https://www.facebook.com/business/help/122918328469908)
  - Method 2: скрін Markifact Google Sheets template (з https://www.markifact.com/templates/meta-ads-bulk-uploader або з їх YouTube https://www.youtube.com/watch?v=BEwgfL-jCSM)
  - Method 3: скрін pricing або UI конкурента (admanage.ai або kitchn.io landing page)
  - Method 5: скрін Scalemate uploader workflow (Google Drive → Meta + TikTok)

- [ ] **Follow up PointToWeb** — зафолоуапити по співпраці/задачах з PointToWeb

## 🟡 Цього тижня

- [ ] **Reddit presence** — моніторити r/PPC, r/FacebookAds на "bulk upload" треди. Відповідати з value-first підходом + casual mention free tool. НЕ спамити. (30 min/тиж, ongoing)
  - Пошук: `site:reddit.com/r/PPC OR site:reddit.com/r/FacebookAds bulk upload`
  - Приклад відповіді: *"We had the same problem — uploading 50+ creatives per week was eating 3-4 hours. We ended up building an internal tool that syncs Google Drive directly to Meta's Media Library. It skips duplicates automatically. We made it free at scalemate.co/ad-creative-uploader if you want to try."*
- [ ] **Inputs для case studies** — зібрати дані Appflame і Promin Agency (розблоковує Items #11, #12):
  - Challenge (що болило до Scalemate)
  - Які features використовують
  - Метрики до/після (час, обсяги, ROAS)
  - Quote від клієнта
- [ ] **Inputs для `/about` page** — розблоковує Item #13, найбільший trust gap для Google Quality Raters:
  - Інфо про команду
  - Company info (рік заснування, місія)
  - Фото або LinkedIn profiles

## 🟢 Коли буде час

- [ ] **YouTube video** — screen recording "How to Upload 50 Ad Creatives to Meta in 5 Minutes" (3-5h)
  - Loom або screen recording
  - Показати: Google Drive → Scalemate → Meta Media Library → done
  - SEO-optimized title/description/tags
  - Embed на `/ad-creative-uploader` і на use-case page
  - Чому: в SERP є video carousel, YouTube = окремий search engine
- [ ] **Outreach до listicle авторів** — pitch free bulk uploader (2-3h)
  - Target listicles (нас немає в жодному):
    - adstellar.ai/blog/meta-ads-bulk-creation-tool (найвищий шанс)
    - adamigo.ai/blog/bulk-ad-launch-tools-facebook-ads (найвищий шанс)
    - adsuploader.com/blog/best-bulk-ad-launch-tool-for-meta-ads (конкурент, низький шанс)
    - admanage.ai/blog/best-bulk-meta-ad-launch-tools (конкурент, низький шанс)
  - Pitch: "We offer a free bulk ad uploader with Google Drive integration for Meta & TikTok — might be worth including in your comparison"
- [ ] **Madgicx CTR check** — 2026-04-30 milestone. Перевірити GSC: CTR, position, impressions. Deployed 2026-04-16, baseline CTR 0.05%, pos 7.9 (10 min)
