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

- meta-automation-rules
  added: 2026-04-28
  source: ad-hoc discovery
  primary-keyword: facebook automated rules (Vol: 150, KD: 2)
  context: Meta Ads automated rules feature — auto-pause underperforming ads, auto-scale winners, budget rules. MOFU/BOFU blog. ⚠️ Cannibalization flag: existing /blog/facebook-automated-rules not indexed (5+ weeks). Brief recommends CREATE NEW with differentiated intent (practical templates vs setup guide) — requires Natalia review of decision.
  artifact: topics/meta-automation-rules/brief.md
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
  artifact: topics/bulk-upload-creatives-meta-tiktok/draft.md
  notes: Indexed in 6 days, 79 imp first week

---

## 9. Rejected / Archived

> Topics які вирішили не писати.

(порожньо)
