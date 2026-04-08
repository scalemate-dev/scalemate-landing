# Scalemate Landing

Next.js 16 app (App Router), SCSS modules, deployed on Vercel.

## Key commands

- `npm run dev` — dev server
- `npm run build` — production build

## Deploy

When asked to deploy:

1. Check if there are unpushed commits (`git status` or `git log origin/main..HEAD`).
   - If there are unpushed commits — proceed directly to step 2.
   - If no unpushed commits — ask the user to commit relevant files. If the user declines, create an empty commit: `git commit --allow-empty -m "trigger deploy"`.
2. Run `git pull --rebase` to sync with remote before deploying.
3. Do NOT run `git push` — the deploy script handles pushing.
4. Run `bash deploy.sh`.

## Brand & Content

- [docs/brand-persona-framework.md](docs/brand-persona-framework.md) — brand persona and content instructions for all website copy.
- [docs/content_framework.md](docs/content_framework.md) — content template for use-case pages (JTBD + performance positioning).

## Blog

Local markdown files, not CMS. See [docs/blog-articles.md](docs/blog-articles.md) for format, rules, and how to add articles.
