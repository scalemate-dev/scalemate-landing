import { BLOCKS } from "@contentful/rich-text-types"

function getTextFromNode(node) {
  if (node.nodeType === "text") return node.value
  if (node.content) return node.content.map(getTextFromNode).join("")
  return ""
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function extractHeadings(document) {
  if (!document?.content) return []

  const headingTypes = {
    [BLOCKS.HEADING_2]: 2,
    [BLOCKS.HEADING_3]: 3,
  }

  return document.content
    .filter((node) => headingTypes[node.nodeType])
    .map((node) => {
      const text = getTextFromNode(node)
      return {
        id: slugify(text),
        text,
        level: headingTypes[node.nodeType],
      }
    })
}
