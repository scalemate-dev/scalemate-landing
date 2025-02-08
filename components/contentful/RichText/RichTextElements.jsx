import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import styles from "./RichText.module.scss"

const RichTextElements = ({ document }) => {
  const options = {
    // Custom inline marks
    renderMark: {
      [MARKS.BOLD]: (text) => `<strong class="${styles.bold}">${text}</strong>`,
      [MARKS.ITALIC]: (text) => `<em class="${styles.italic}">${text}</em>`,
    },
    // Custom nodes for various rich text block types
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="${styles.paragraph}">${next(node.content)}</p>`,
      [BLOCKS.HEADING_1]: (node, next) =>
        `<h1 class="${styles.heading1}">${next(node.content)}</h1>`,
      [BLOCKS.HEADING_2]: (node, next) =>
        `<h2 class="${styles.heading2}">${next(node.content)}</h2>`,
      [BLOCKS.HEADING_3]: (node, next) =>
        `<h3 class="${styles.heading3}">${next(node.content)}</h3>`,
      [BLOCKS.UL_LIST]: (node, next) =>
        `<ul class="${styles.ulList}">${next(node.content)}</ul>`,
      [BLOCKS.OL_LIST]: (node, next) =>
        `<ol class="${styles.olList}">${next(node.content)}</ol>`,
      [BLOCKS.LIST_ITEM]: (node, next) =>
        `<li class="${styles.listItem}">${next(node.content)}</li>`,
      [BLOCKS.QUOTE]: (node, next) =>
        `<blockquote class="${styles.blockquote}">${next(
          node.content,
        )}</blockquote>`,
      // Custom renderer for code blocks (if present)
      [BLOCKS.CODE]: (node) => {
        const codeText = node.content[0]?.value || ""
        return `<pre class="${styles.code}"><code>${codeText}</code></pre>`
      },
      // (Optional) Add renderers for embedded entries or assets if your document contains them.
      [BLOCKS.EMBEDDED_ENTRY]: () => "",
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields
        const { url, details } = file
        const {
          image: { width, height },
        } = details

        // Ensure URL is HTTPS
        const imageUrl = url.startsWith("//") ? `https:${url}` : url

        return `
          <div class="${styles.imageWrapper}">
            <img 
              src="${imageUrl}"
              alt="${title || description || "Content image"}"
              width="100%"
              height="auto"
              class="${styles.contentImage}"
            />
          </div>
        `
      },
      [INLINES.EMBEDDED_ENTRY]: () => "",
      // Add hyperlink renderer
      [INLINES.HYPERLINK]: (node, next) =>
        `<a href="${
          node.data.uri
        }" target="_blank" rel="noopener noreferrer" class="${
          styles.link
        }">${next(node.content)}</a>`,
    },
  }

  const htmlString = documentToHtmlString(document, options)

  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  )
}

export default RichTextElements
