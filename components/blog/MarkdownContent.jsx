import styles from "@/components/contentful/RichText/RichText.module.scss"

// Wrap each <table> in a scroll container; tables with 5+ columns get an extra
// "table-scroll--wide" modifier that switches CSS to max-content + nowrap so the table
// scrolls horizontally instead of squeezing prose cells into unreadable narrow columns.
const wrapTables = (html) =>
  html.replace(/<table>([\s\S]*?)<\/table>/g, (match, inner) => {
    const headerRow = inner.match(/<thead>[\s\S]*?<tr>([\s\S]*?)<\/tr>/)
    const cols = headerRow ? (headerRow[1].match(/<th/g) || []).length : 0
    const cls = cols >= 5 ? "table-scroll table-scroll--wide" : "table-scroll"
    return `<div class="${cls}"><table>${inner}</table></div>`
  })

const MarkdownContent = ({ html }) => (
  <div
    className={styles.richText}
    dangerouslySetInnerHTML={{ __html: wrapTables(html) }}
  />
)

export default MarkdownContent
