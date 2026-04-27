# Dev Handover: SEO Content Pipeline — Remote Agent Setup

> Задача для розробника: налаштувати автоматичний remote agent який пише SEO контент.
> Дата: 2026-04-27

## Що ми хочемо

Автоматичний content pipeline який:
1. Natalia додає topics в файл `seo-system/workflow/pipeline.md`
2. Запускає remote agent (manual trigger через Claude.ai)
3. Agent читає queue, пише discovery briefs або full article drafts
4. Комітить результат в repo
5. Natalia робить `git pull` і бачить готові файли

## Що вже зроблено

### 1. SEO система в repo
Всі файли системи перенесені в `scalemate-landing/seo-system/`:
- `agents/` — інструкції для кожного агента (discovery, content-creator, qa)
- `rules/content-writing.md` — правила написання контенту
- `workflow/pipeline.md` — черга задач яку agent читає
- `briefs/` — сюди agent кладе discovery briefs
- `drafts/` — сюди agent кладе готові drafts
- `context/project-state.md` — стан проєкту (deployed, learnings, blocked)

### 2. Remote trigger створений
- **Trigger ID:** `trig_01NXngZzTqsviqftNeZWoauv`
- **URL:** https://claude.ai/code/scheduled/trig_01NXngZzTqsviqftNeZWoauv
- **Model:** claude-opus-4-6
- **MCP connectors:** Ahrefs (підключений, працює)
- **Git source:** `https://github.com/scalemate-dev/scalemate-landing`
- **Environment:** Anthropic Cloud (env_011CUzYmBtqg5XEriB1BrTex)
- **Prompt:** повний prompt з інструкціями (вже в trigger config)

### 3. Тестовий run
- Перший topic в queue: "Creative Testing Pillar"
- Run запущено manually через API

## Що НЕ працює — потрібна допомога

### Проблема: Authentication failed for private repo

**Error:**
```
API Error: Authentication failed while accessing the git_repository source. 
Check that your GitHub token or credentials have read access to this repository. 
If using a private repo, verify the integration is authorized for it.
```

**Причина:** repo `scalemate-dev/scalemate-landing` є private. Claude GitHub Integration підключена (Connected в claude.ai settings), але не має доступу до організації `scalemate-dev` на GitHub.

**Що перевірили:**
- `github.com/settings/installations` (personal account `bondarnnt`) — "No installed GitHub Apps"
- Claude connector settings — тільки Disconnect, немає Configure
- Repo належить організації `scalemate-dev`, не personal account

### Що потрібно зробити

1. **Дати Claude GitHub App доступ до org `scalemate-dev`:**
   - Зайти в GitHub → `scalemate-dev` org → Settings → Third-party access / GitHub Apps
   - Authorize Claude/Anthropic app для цієї організації
   - Дати read+write доступ до repo `scalemate-landing`
   
   АБО

2. **Install Claude GitHub App на рівні організації:**
   - Зайти на https://github.com/apps/claude (або знайти Anthropic app в GitHub Marketplace)
   - Install для організації `scalemate-dev`
   - Вибрати repo `scalemate-landing`

3. **Після цього — перезапустити trigger:**
   - Через Claude Code: `RemoteTrigger action: "run", trigger_id: "trig_01NXngZzTqsviqftNeZWoauv"`
   - Або через claude.ai dashboard: https://claude.ai/code/scheduled/trig_01NXngZzTqsviqftNeZWoauv → Run

### 2. Slack notifications (ОБОВ'ЯЗКОВО)

Agent має відправляти Slack notification після завершення роботи. Notification має включати:
- Що було зроблено (brief / draft / обидва)
- Список створених файлів
- Короткий summary результату (keywords, title, word count)
- Статус (success / partial / error)

**Що потрібно:**
1. Підключити Slack connector в claude.ai (зараз немає в marketplace — перевірити чи є інший шлях: custom connector, Slack webhook, або Slack MCP server)
2. Додати Slack MCP в trigger config (`mcp_connections`)
3. Додати в prompt trigger'а Step 5: "Send Slack notification with results summary"
4. Канал для notification: узгодити з Natalia

### 3. GSC доступ для remote agent (ВАЖЛИВО)

Discovery agent використовує Google Search Console для keyword validation — перевіряє які queries сайт вже ловить по темі. Це критично бо Ahrefs не бачить більшість low-volume queries (показує 0 volume де GSC показує реальні impressions).

**Зараз:** GSC працює тільки локально через `~/.claude/skills/seo-ops/gsc_client.py` з OAuth token на комп'ютері Natalia. Remote agent не має доступу.

**Що потрібно (варіанти):**
- Ahrefs GSC endpoints (є в MCP, але працюють нестабільно — internal server errors)
- Google Search Console MCP connector (якщо існує — підключити)
- Service account для GSC з токеном в repo (зашифрованим) або env variable
- Або: Natalia збирає GSC дані локально в `workflow/pipeline.md` разом з topic (як контекст для agent'а)

**Тимчасове рішення:** Natalia при додаванні topic в queue вказує GSC queries які вже ловимо, наприклад:
```
- Creative Testing Pillar | 1000+ vol | GSC queries: "creative testing tools" 40 imp pos 68, "ad creative testing platforms" 55 imp pos 28, "ad performance testing tool" 123 imp pos 18
```
Agent використовує ці дані замість прямого GSC доступу.

**Альтернативи якщо Slack connector недоступний:**
- Slack Incoming Webhook — agent робить curl POST в кінці роботи (потрібен webhook URL)
- Custom MCP server для Slack
- Email через Gmail (обмежено — тільки create_draft, не send)

**Gmail:** підключений в claude.ai, але має тільки `create_draft` tool (не send). Не підходить для автоматичних notification.

## Як працює content pipeline (деталі)

### Flow агента

Agent читає `seo-system/workflow/pipeline.md` і виконує задачі по черзі:

**Якщо є topics в "Approved topics" → пише discovery briefs:**
1. Читає інструкції з `seo-system/agents/discovery.md`
2. Читає правила контенту з `seo-system/rules/content-writing.md`
3. Валідує keywords через Ahrefs MCP (volume, KD, trend)
4. Перевіряє SERP — який intent, хто в top-10, чи можемо виграти
5. Перевіряє GSC queries (якщо доступний) — які queries вже ловимо
6. Оцінює funnel stage (BOFU > MOFU > TOFU) і conversion potential
7. Робить ICP pain research (Reddit, communities)
8. Формує Topic Brief по шаблону з agents/discovery.md
9. Зберігає в `seo-system/topics/[topic-slug].md`
10. Переносить item в "Done" секцію queue

**Якщо є briefs в "Approved briefs" → пише full article drafts:**
1. Читає approved brief
2. Читає інструкції з `seo-system/agents/content-creator.md`
3. Читає `seo-system/rules/content-writing.md` — ВСІ правила обов'язкові
4. Пише draft по структурі з brief'у
5. Self-check:
   - Primary keyword в H1 і перших 100 словах
   - TL;DR секція на початку
   - FAQ мінімум 5 питань (в frontmatter)
   - Internal links мінімум 3 (хоча б 1 на product page)
   - Мінімум 3 proactive facts на 1000 слів
   - POV marker в кожному H2
   - First-hand experience marker (case studies)
   - Жодної stock phrase з blacklist (секція 6.3 content-writing-rules)
   - Anti-AI patterns check (секція 6)
6. Зберігає в `seo-system/topics/[date]-[slug].md` І в `content/blog/[slug].md`
7. Переносить item в "Done" секцію queue

### Ключові правила контенту (з rules/content-writing.md)

- **Pain-first підхід** (секція 2.2): стаття починається з болю ICP, не з продукту
- **Anti-AI** (секція 6): без stock phrases, варіативні речення, конкретний перший рядок, без "In today's fast-paced world..."
- **Brand voice**: confident, pragmatic, operational. Без hype, без corporate speak
- **Keyword density**: max 2% primary keyword
- **Heading hierarchy**: sentence case, не Title Case
- **Author**: завжди "Nataliia Bondar"
- **absoluteTitle: true** для blog articles (без auto-append "| Scalemate Blog")

### Формат blog article (frontmatter)

```yaml
---
title: "Article Title Here"
absoluteTitle: true
slug: article-slug-here
metaDescription: "150-160 chars meta description"
author: "Nataliia Bondar"
coverImage: null
coverAlt: null
createdAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
faq:
  - question: "Question 1?"
    answer: "Answer 1"
  - question: "Question 2?"
    answer: "Answer 2"
---

Article body in markdown...
```

### Файли з інструкціями (agent читає їх перед роботою)

| Файл | Що містить | Коли читати |
|---|---|---|
| `seo-system/agents/discovery.md` | Повний workflow discovery: keyword validation, SERP, pain research, brief template | Перед написанням brief |
| `seo-system/agents/content-creator.md` | Workflow написання: outline → draft → self-check | Перед написанням draft |
| `seo-system/rules/content-writing.md` | Всі правила: tone, structure, keywords, anti-AI, title/meta methodology | ЗАВЖДИ перед будь-яким writing |
| `seo-system/agents/qa.md` | Quality check: content-ops scoring, humanizer, copy-editing | Після написання draft |

## Як перевірити що все працює

1. Зайти на https://claude.ai/code/scheduled/trig_01NXngZzTqsviqftNeZWoauv
2. Натиснути Run
3. Agent має:
   - Клонувати repo без помилок
   - Прочитати `seo-system/workflow/pipeline.md`
   - Побачити topic "Creative Testing Pillar"
   - Написати brief і зберегти в `seo-system/topics/creative-testing-pillar.md`
   - Закомітити і запушити в repo
4. Після run — `git pull` має показати новий файл

## Контакти

- **Natalia** — product owner, апрувить контент
- **Claude Code account:** ruslan.rdo@gmail.com (акаунт де створено trigger)

## Файли для контексту

- `seo-system/docs/how-to-run.md` — інструкція для Natalia як користуватись
- `seo-system/context/project-state.md` — стан проєкту
- `seo-system/agents/` — промпти агентів
