# SEO Pipeline в Codespace — Setup

> Як підняти GSC + Ahrefs MCP + trend_scout у GitHub Codespaces.
> Локально все вже налаштовано (`~/.claude/skills/seo-ops/`). У codespace треба передати токени через Codespaces secrets.

---

## Налаштування Codespaces secrets (один раз)

На GitHub: **Settings → Codespaces → Secrets** (для repo).

### Обов'язкові

| Secret | Значення | Звідки |
|---|---|---|
| `CLAUDE_CODE_OAUTH_TOKEN` | Long-lived OAuth token для Claude Code CLI | На Mac: `claude setup-token` → копіювати output |
| `GSC_TOKEN_JSON` | base64 від `.gsc-token.json` | `base64 < ~/.claude/skills/seo-ops/.gsc-token.json \| pbcopy` |
| `GOOGLE_CLIENT_ID` | OAuth client ID | поле `client_id` в `~/.claude/skills/seo-ops/client_secret.json` |
| `GOOGLE_CLIENT_SECRET` | OAuth client secret | поле `client_secret` в тому ж файлі |
| `GSC_SITE_URL` | `sc-domain:scalemate.co` | (literal) |
| `AHREFS_MCP_KEY` | Ahrefs hosted MCP API key | claude.ai → Settings → Connectors → Ahrefs → MCP key |

---

## Що відбувається при старті Codespace

`.devcontainer/devcontainer.json` запускає:

1. `npm install` — Next.js deps
2. `npm install -g @anthropic-ai/claude-code` — Claude Code CLI
3. `pip install -r seo-system/skills/seo-ops/requirements.txt` — Python deps (google-api, requests)
4. `bash .devcontainer/setup-gsc.sh`:
   - Symlink **усіх** skills з `seo-system/skills/*` → `~/.claude/skills/` (тому агенти бачать ті самі шляхи що на Mac: content-ops, copy-editing, content-creator, copywriting, seo-audit, seo-ops)
   - Відновлює `.gsc-token.json` і `client_secret.json` з Codespaces secrets

Claude Code підхоплює `CLAUDE_CODE_OAUTH_TOKEN` з env (працює через підписку, без API key billing).
Ahrefs MCP підключається через `.claude/mcp.json` — Claude Code CLI автоматично підхоплює його при старті сесії.

---

## Перевірка що все працює

В терміналі codespace:

```bash
# 1. Claude Code CLI встановлений
claude --version

# 2. GSC direct
python3 seo-system/skills/seo-ops/gsc_client.py --sites
# expect: Verified sites: ['sc-domain:scalemate.co']

# 3. Trend scout (HN / Reddit / Google Trends RSS / YouTube)
python3 seo-system/skills/seo-ops/trend_scout.py
```

В Claude Code сесії — Ahrefs MCP tools мають бути доступні (наприклад `mcp__ahrefs__keywords-explorer-overview`).

---

## Як запускати Claude Code в codespace

### Interactive (звичайний режим — рекомендую починати з нього)

```bash
claude
```

Відкривається REPL — пишеш що зробити, Claude відповідає, ти корегуєш, продовжуєш діалог. Ідеально для:
- Розвідки нових тем (можна обговорити по ходу)
- Написання чи редагування drafts
- Налагодження агентських промптів
- Будь-якого ітеративного workflow

Приклади перших команд:
```
> прочитай seo-system/README.md і скажи що ми можемо зробити
> запусти discovery для теми "creative testing tools"
> подивись на approved-queue.md і обробі перший item
```

Перший раз спитає approve для Ahrefs MCP — say yes (це наш `.claude/mcp.json`).

### Headless (one-shot, без діалогу)

```bash
claude --print "прочитай seo-system/workflow/pipeline.md і обробі перший approved item, закомить результат"
```

Виконує одну задачу від початку до кінця без participant input. Підходить для:
- Bash скриптів автоматизації
- CI/cron-style запусків (поки не використовуємо)
- Швидких one-off запитів

---

## Як виглядає типовий workflow

1. Створити codespace (з UI або `gh codespace create -R scalemate-dev/scalemate-landing -b main`)
2. Зачекати 2-5 хв поки `postCreateCommand` доустановить deps
3. Відкрити термінал у codespace, набрати `claude`
4. Сказати що зробити
5. Ревʼюити результат у файлах (VS Code editor)
6. `git commit && git push` (або через VS Code UI)
7. Закрити codespace (зберігається 30 днів) або видалити (`gh codespace delete`)

---

## Якщо потрібно реавторизуватись в GSC з нуля в codespace

Codespaces підтримують port forwarding — можна авторизуватись через браузер:

```bash
cd seo-system/skills/seo-ops
python3 gsc_auth.py
```

Codespace автоматично прокине порт 8765 (callback) — клікнеш на URL у браузері, авторизуєшся, токен збережеться. Далі оновити `GSC_TOKEN_JSON` в codespace secrets щоб не повторювати при кожному relaunch:

```bash
base64 < seo-system/skills/seo-ops/.gsc-token.json
# скопіювати, вставити в GitHub Settings → Codespaces secrets → GSC_TOKEN_JSON
```

---

## Безпека

- `.gsc-token.json` і `client_secret.json` **в `.gitignore`** — ніколи не коміттяться
- Токени живуть тільки в memory codespace + Codespaces secrets vault
- Якщо codespace знищується — токени теж зникають, відновлюються з secrets при наступному запуску

---

## Що **не** потрібно (на випадок якщо побачиш у старій документації)

- ❌ `AHREFS_TOKEN` — використовувався для `content_attack_brief.py` (прямий REST API). Замінено на Ahrefs MCP — агенти викликають MCP tools.
- ❌ `BRAVE_API_KEY` — `trend_scout.py` працює без нього (skip X/Twitter scan, інші джерела залишаються).
