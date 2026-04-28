# SEO-Ops в Codespace — Setup

> Як підняти GSC + trend_scout у GitHub Codespaces.
> Локально все вже налаштовано (`~/.claude/skills/seo-ops/`). У codespace треба передати токени через Codespaces secrets.

---

## Налаштування Codespaces secrets (один раз)

На GitHub: **Settings → Codespaces → Secrets** (для repo або акаунту).

### 1. `GSC_TOKEN_JSON` (обов'язково для GSC)

Експортуй локальний токен у base64:

```bash
base64 < ~/.claude/skills/seo-ops/.gsc-token.json | pbcopy
```

Встав значення в Codespace secret `GSC_TOKEN_JSON`.

### 2. `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` (обов'язково для GSC)

Дістати з `~/.claude/skills/seo-ops/client_secret.json`:

```bash
cat ~/.claude/skills/seo-ops/client_secret.json
```

Скопіювати `client_id` і `client_secret` в окремі Codespaces secrets.

### 3. `GSC_SITE_URL` (обов'язково для GSC)

```
sc-domain:scalemate.co
```

### 4. `AHREFS_TOKEN` (опціонально, для `content_attack_brief.py`)

З Ahrefs дашборду → API.

### 5. `BRAVE_API_KEY` (опціонально, для X/Twitter trends в `trend_scout.py`)

З Brave Search API.

---

## Що відбувається при старті Codespace

`.devcontainer/devcontainer.json` запускає:

1. `npm install` — Next.js deps
2. `pip install -r seo-system/skills/seo-ops/requirements.txt` — Python deps (google-api, requests)
3. `bash .devcontainer/setup-gsc.sh` — відновлює `.gsc-token.json` і `client_secret.json` з Codespaces secrets

---

## Перевірка що все працює

В терміналі codespace:

```bash
# GSC
GSC_SITE_URL="sc-domain:scalemate.co" python3 seo-system/skills/seo-ops/gsc_client.py --sites

# Trend scout (без BRAVE_API_KEY теж працює, без X scanning)
python3 seo-system/skills/seo-ops/trend_scout.py
```

Якщо GSC видає `Verified sites: ['sc-domain:scalemate.co']` — все ок.

---

## Якщо потрібно реавторизуватись з нуля в codespace

Codespaces підтримують port forwarding — можна авторизуватись через браузер:

```bash
cd seo-system/skills/seo-ops
python3 gsc_auth.py
```

Codespace автоматично прокине порт 8765 (callback) — клікнеш на URL у браузері, авторизуєшся, токен збережеться. Далі експортуй токен у Codespace secret щоб не повторювати при кожному relaunch.

---

## Безпека

- `.gsc-token.json` і `client_secret.json` **в `.gitignore`** — ніколи не коміттяться
- Токени живуть тільки в memory codespace + Codespaces secrets vault
- Якщо codespace знищується — токени теж зникають, відновлюються з secrets при наступному запуску
