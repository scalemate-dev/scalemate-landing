import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function getMarkdownFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
}

function parseArticleFile(filename) {
  const filePath = path.join(CONTENT_DIR, filename)
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  return { data, content, filename }
}

/**
 * Returns all articles sorted by createdAt (newest first).
 * Used by the blog listing page and sitemap.
 */
export function getAllArticles() {
  const files = getMarkdownFiles()

  const articles = files
    .map((filename) => {
      const { data } = parseArticleFile(filename)

      if (data.draft) return null

      return {
        id: data.slug,
        slug: data.slug,
        title: data.title,
        excerpt: data.metaDescription || null,
        createdAt: new Date(data.createdAt).toISOString(),
        updatedAt: new Date(data.updatedAt || data.createdAt).toISOString(),
        coverUrl: data.coverImage || null,
        coverWidth: data.coverWidth || 800,
        coverHeight: data.coverHeight || 450,
        coverAlt: data.coverAlt || data.title,
        author: data.author || "Scalemate Team",
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return articles
}

/**
 * Returns a single article by slug with rendered HTML content.
 * Used by the article detail page.
 */
export function getArticleBySlug(slug) {
  const files = getMarkdownFiles()

  for (const filename of files) {
    const { data, content } = parseArticleFile(filename)
    if (data.slug !== slug) continue

    const html = renderMarkdown(content)
    const headings = extractHeadingsFromMarkdown(content)
    const faqItems = (data.faq || []).map((item) => ({
      question: item.question,
      answer: item.answer,
    }))

    return {
      title: data.title,
      slug: data.slug,
      metaDescription: data.metaDescription || null,
      author: data.author || "Scalemate Team",
      createdAt: new Date(data.createdAt).toISOString(),
      updatedAt: new Date(data.updatedAt || data.createdAt).toISOString(),
      coverImage: data.coverImage || null,
      coverAlt: data.coverAlt || data.title,
      ogImage: data.ogImage || null,
      section: data.section || null,
      tags: data.tags || [],
      html,
      headings,
      faqItems,
      draft: data.draft || false,
    }
  }

  return null
}

/**
 * Returns all slugs for generateStaticParams.
 */
export function getAllSlugs() {
  const files = getMarkdownFiles()
  return files.map((filename) => {
    const { data } = parseArticleFile(filename)
    return data.slug
  })
}

/**
 * Renders markdown to HTML. CSS classes are applied via the
 * parent .richText wrapper in RichText.module.scss — no need
 * to inject class names into every tag.
 */
function renderMarkdown(content) {
  // Strip {rel="..." target="..."} after markdown links — not standard markdown.
  // External links get target="_blank" rel="noopener noreferrer nofollow" automatically.
  const cleaned = content.replace(/\)\{[^}]+\}/g, ")")

  const renderer = new marked.Renderer()

  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map((t) => t.raw || t.text || "").join("")
    const plainText = text.replace(/<[^>]+>/g, "")
    const id = slugify(plainText)
    const tag = `h${depth}`
    const inner = marked.parseInline(tokens.map((t) => t.raw).join(""))
    return `<${tag} id="${id}">${inner}</${tag}>\n`
  }

  renderer.link = ({ href, title, tokens }) => {
    const text = tokens.map((t) => t.raw || t.text || "").join("")
    const inner = marked.parseInline(text)
    const isExternal = href.startsWith("http")
    const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer nofollow"' : ""

    return `<a href="${href}"${attrs}${title ? ` title="${title}"` : ""}>${inner}</a>`
  }

  renderer.image = ({ href, title, text }) => {
    return `<div><img src="${href}" alt="${text || title || "Content image"}" width="100%" height="auto" /></div>`
  }

  renderer.table = ({ header, rows }) => {
    // Build header
    const headerCells = header.map((cell) => {
      const content = marked.parseInline(cell.tokens.map((t) => t.raw).join(""))
      return `<th>${content}</th>`
    }).join("")

    // Build rows
    const bodyRows = rows.map((row) => {
      const cells = row.map((cell) => {
        const content = marked.parseInline(cell.tokens.map((t) => t.raw).join(""))
        return `<td>${content}</td>`
      }).join("")
      return `<tr>${cells}</tr>`
    }).join("")

    return `<div style="overflow-x:auto"><table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>\n`
  }

  return marked.parse(cleaned, { renderer, gfm: true })
}

/**
 * Extracts H2 and H3 headings from raw markdown for TOC.
 * Same output shape as the Contentful extractHeadings().
 */
export function extractHeadingsFromMarkdown(markdown) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const text = match[2].replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim()
    headings.push({
      id: slugify(text),
      text,
      level,
    })
  }

  return headings
}
