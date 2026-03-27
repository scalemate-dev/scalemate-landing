# Blog Articles

Articles live in `content/blog/` as `.md` files with YAML frontmatter. Data layer: `lib/blog.js`.

## Adding an article

1. Create `content/blog/{slug}.md`
2. Add frontmatter + markdown body (see template below)
3. Cover images go to `public/blog/covers/` — reference as `/blog/covers/filename.jpg`
4. FAQ items in frontmatter generate FAQPage schema automatically
5. No code changes needed — listing, sitemap, TOC, schema all auto-generated

## Frontmatter template

```yaml
---
title: "Article Title"
slug: url-slug
metaDescription: "Under 160 chars for SEO"
author: "Name or Scalemate Team"
coverImage: /blog/covers/slug.jpg  # or null
coverAlt: "Alt text"
createdAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
draft: false  # true = hidden from listing/sitemap, accessible via direct URL
faq:
  - question: "Question?"
    answer: "Answer text. Plain text only, no markdown."
---
```

## Supported elements

Standard GFM markdown. Renderer (`lib/blog.js`) + styles (`RichText.module.scss`).

**Headings:** `## H2` and `### H3` only in body. Auto-generate TOC, get anchor IDs. Don't use `# H1` — rendered from frontmatter `title`.

**Paragraphs:** Plain text separated by blank lines.

**Bold / italic:** `**bold**` renders with darker ink color. `*italic*` as expected.

**Links:**
- External: `[text](https://example.com)` — auto-adds `target="_blank" rel="noopener noreferrer nofollow"`
- Internal: `[text](/pricing)` — plain link, no target
- Do NOT use `{rel="nofollow" target="_blank"}` after links — not standard markdown, renders as visible text

**Lists:**
- Unordered: `- item` — orange dot bullets, no native disc
- Ordered: `1. item` — orange numbered markers

**Blockquotes:** `> text` — orange left border, warm background. Supports bold/links inside.

**Tables:** Standard GFM pipe syntax. Responsive with horizontal scroll on mobile.

```
| Header 1 | Header 2 |
|---|---|
| Cell | Cell |
```

**Images:** `![alt](url)` — rounded corners, full width. Place images in `public/blog/` and reference as `/blog/filename.jpg`.

**Code blocks:** Triple backticks. Dark background, monospace font.

**Horizontal rules:** `---` — thin divider line.

**Not supported:** HTML tags, footnotes, custom attributes (`{.class}`), embeds, iframes.

## Rules

- `slug` must match filename (e.g. `my-post.md` → `slug: my-post`)
- `metaDescription` < 160 chars
- FAQ answers are plain text (used in JSON-LD schema)
- Headings H2/H3 auto-generate TOC — keep heading text concise for sidebar readability
- One blank line between all block elements
- No trailing spaces or tabs
