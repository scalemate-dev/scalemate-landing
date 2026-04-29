# SEO Content Pipeline

> Single source of truth для статусу всіх topics в роботі.
> **Approval = редагування цього файлу** (рухаєш items між секціями).
>
> Граматика: один item = `- slug` + indented metadata. Slug = kebab-case ім'я topic, відповідає `topics/[slug]/`.

---

## 1. New (потребує discovery)

> Items додаються сюди з `розвідка` або вручну. Чекають approve від Natalia щоб піти в discovery.

(порожньо)

---

## 2. Discovery in progress

> Discovery agent працює над цими.

(порожньо)

---

## 3. Pending Natalia review (brief)

> Brief написаний, чекає approve.

- creative-testing-pillar
  added: 2026-04-25
  source: weekly-recon
  primary-keyword: creative testing
  context: 1000+ vol cluster, KD 0-8, pain-validated "testing 50+ creatives/week without burning out"
  artifact: topics/creative-testing-pillar/brief.md
  agent-finished: 2026-04-28

- automation-rules-cluster
  added: 2026-04-29
  source: natalia-request
  primary-keyword: facebook automated rules / facebook ads automation (cluster strategy)
  context: cluster з 4 сторінок (/features/automation-rules, /use-cases/ad-campaign-automation-rules, /blog/facebook-automated-rules, /blog/facebook-ads-automation). Brief — повна cluster strategy: cannibalization analysis, keyword map, SERP intent, ICP pain Reddit research, action plan (Quick Wins / Mid-term / Restructure / Linking / Title-Meta). Головний висновок: existing pages OK, головний blocker = 2 unindexed blog posts (5 weeks). Action: indexation push + use-case title fix + internal linking refresh + feature page repositioning.
  artifact: topics/automation-rules-cluster/brief.md
  agent-finished: 2026-04-29

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
  artifact: topics/bulk-upload-creatives-meta-tiktok/draft.md
  notes: Indexed in 6 days, 79 imp first week

---

## 9. Rejected / Archived

> Topics які вирішили не писати.

(порожньо)
