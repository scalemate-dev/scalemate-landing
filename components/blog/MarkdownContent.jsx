import styles from "@/components/contentful/RichText/RichText.module.scss"

const MarkdownContent = ({ html }) => {
  const wrapped = html
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>")

  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{ __html: wrapped }}
    />
  )
}

export default MarkdownContent
