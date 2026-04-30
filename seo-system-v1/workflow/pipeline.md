# SEO Content Pipeline

> Single source of truth для статусу всіх topics в роботі.
> **Approval = редагування цього файлу** (рухаєш items між секціями).
>
> Граматика: один item = `- slug` + indented metadata. Slug = kebab-case ім'я topic, відповідає `topics/[slug]/`.

---

## 1. New (потребує discovery)

> Items додаються сюди з `розвідка` або вручну. Чекають approve від Natalia щоб піти в discovery.

- scale-meta-ads-without-hiring
  added: 2026-04-30
  source: seo-analysis-2026-04-30
  primary-keyword: how to scale meta ads (TBD via discovery)
  context: Pain-validated Reddit ("scaling Meta spend with 3-person team"). AdStellar AI emerging content threat detected in SERP. Angle: Scalemate rules + uploader = hands-off scaling. Score 187 (🟡 Strategic Bet).

- facebook-ad-automation-guide
  added: 2026-04-30
  source: seo-analysis-2026-04-30
  primary-keyword: facebook ad automation (150 vol, KD 7)
  context: Multiple Reddit threads, pain-validated. Non-indexed /blog/facebook-ads-automation may conflict — discovery must evaluate: target different angle or consolidate. Score ~187 (🟡 Strategic Bet).

---

## 2. Discovery in progress

> Discovery agent працює над цими.

(порожньо)

---

## 3. Pending Natalia review (brief)

> Brief написаний, чекає approve.

- creative-testing-pillar
  added: 2026-04-25
  source: weekly-seo-analysis
  primary-keyword: creative testing
  context: 1000+ vol cluster, KD 0-8, pain-validated "testing 50+ creatives/week without burning out"
  artifact: output/topics/creative-testing-pillar/brief.md
  agent-finished: 2026-04-28

---

## 4. Approved for writing

> Brief approved, content-creator agent пише draft.

(порожньо)

---

## 5. Pending Natalia review (draft)

> Draft написаний, чекає review і approve на QA.

(порожньо)

---

## 6. Approved for QA

> QA pipeline (content-ops, copy-editing, humanizer, SEO check).

(порожньо)

---

## 7. Pending Natalia deploy

> QA пройшов, чекає фінальний approve і deploy.

(порожньо)

---

## 8. Published

> Опубліковані статті. Дата = deploy date.

- [2026-04-21] bulk-upload-creatives-meta-tiktok
  url: https://scalemate.co/blog/bulk-upload-creatives-meta-tiktok
  artifact: output/topics/bulk-upload-creatives-meta-tiktok/draft.md
  notes: Indexed in 6 days, 79 imp first week

---

## 9. Rejected / Archived

> Topics які вирішили не писати.

(порожньо)
