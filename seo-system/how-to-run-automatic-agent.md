# Як запускати SEO Content Pipeline

> Інструкція для Natalia. Коротко і по кроках.

## Що це

Remote agent який автоматично пише discovery briefs і статті по твоєму approved списку. Працює в хмарі, має доступ до repo і Ahrefs.

## Щотижневий flow

### Понеділок зранку (~15 хв, локально)

1. Відкрий Claude Code
2. Напиши `розвідка` — agent збере GSC + Ahrefs дані, підготує brief з priorities
3. Подивись brief, вибери які topics пишемо цього тижня
4. Відкрий `seo-system/approved-queue.md` і додай topics:

```markdown
## Approved topics (agent writes discovery briefs)
- Creative Testing Pillar | 1000+ vol cluster, KD 0-8 | creative testing, ad creative testing
- Ad Operations Guide | 250 vol, KD 1 | ad operations, ad ops
```

5. Запуш:
```bash
cd scalemate-landing
git add seo-system/approved-queue.md
git commit -m "approved topics for this week"
git push
```

6. Скажи Claude: **"запусти pipeline"**

### Через 15-30 хв — briefs готові

1. Забери зміни: `git pull`
2. Подивись briefs в `seo-system/briefs/`
3. Якщо brief ок — перенеси його в "Approved briefs":

```markdown
## Approved briefs (agent writes full drafts)
- seo-system/briefs/creative-testing-pillar.md
```

4. Запуш і скажи Claude: **"запусти pipeline"**

### Через 30-60 хв — drafts готові

1. `git pull`
2. Подивись drafts в `seo-system/drafts/` 
3. Також draft вже лежить в `content/blog/` (готовий до deploy)
4. Якщо є правки — внеси
5. Deploy: `bash deploy.sh`
6. Request Indexing в GSC

## Команди

| Дія | Що сказати Claude |
|---|---|
| Weekly recon | `розвідка` |
| Запустити pipeline | "запусти pipeline" |
| Перевірити статус | "покажи статус pipeline" |

## Trigger ID

`trig_01NXngZzTqsviqftNeZWoauv`

Управління: https://claude.ai/code/scheduled/trig_01NXngZzTqsviqftNeZWoauv

## Що agent вміє

- Читати всі файли в repo (rules, briefs, existing articles)
- Використовувати Ahrefs MCP (keyword validation)
- Писати briefs і drafts
- Комітити і пушити в repo

## Що agent НЕ вміє

- Деплоїти сайт
- Використовувати GSC (тому recon локально)
- Приймати рішення без твого approve
- Публікувати без твоєї перевірки
