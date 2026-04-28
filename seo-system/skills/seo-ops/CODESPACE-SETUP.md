# SEO Pipeline в Codespace — Setup

> Як підняти GSC + Ahrefs MCP + trend_scout у GitHub Codespaces.
> Локально все вже налаштовано (`~/.claude/skills/seo-ops/`). У codespace треба передати токени через Codespaces secrets.

---

## Налаштування Codespaces secrets (один раз)

На GitHub: **Settings → Codespaces → Secrets** (для repo).

### Обов'язкові

| Secret | Значення | Звідки |
|---|---|---|
| `GSC_TOKEN_JSON` | base64 від `.gsc-token.json` | `base64 < ~/.claude/skills/seo-ops/.gsc-token.json \| pbcopy` |
| `GOOGLE_CLIENT_ID` | OAuth client ID | поле `client_id` в `~/.claude/skills/seo-ops/client_secret.json` |
| `GOOGLE_CLIENT_SECRET` | OAuth client secret | поле `client_secret` в тому ж файлі |
| `GSC_SITE_URL` | `sc-domain:scalemate.co` | (literal) |
| `AHREFS_MCP_KEY` | Ahrefs hosted MCP API key | claude.ai → Settings → Connectors → Ahrefs → MCP key |

---

## Що відбувається при старті Codespace

`.devcontainer/devcontainer.json` запускає:

1. `npm install` — Next.js deps
2. `pip install -r seo-system/skills/seo-ops/requirements.txt` — Python deps (google-api, requests)
3. `bash .devcontainer/setup-gsc.sh`:
   - Symlink **усіх** skills з `seo-system/skills/*` → `~/.claude/skills/` (тому агенти бачать ті самі шляхи що на Mac: content-ops, copy-editing, content-creator, copywriting, seo-audit, seo-ops)
   - Відновлює `.gsc-token.json` і `client_secret.json` з Codespaces secrets

Ahrefs MCP підключається через `.claude/mcp.json` — Claude Code CLI автоматично підхоплює його при старті сесії.

---

## Перевірка що все працює

В терміналі codespace:

```bash
# GSC direct
python3 seo-system/skills/seo-ops/gsc_client.py --sites

# Trend scout (HN / Reddit / Google Trends RSS / YouTube)
python3 seo-system/skills/seo-ops/trend_scout.py
```

GSC має вивести `Verified sites: ['sc-domain:scalemate.co']`.

В Claude Code сесії — Ahrefs MCP tools мають бути доступні (наприклад `mcp__ahrefs__keywords-explorer-overview`).

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
