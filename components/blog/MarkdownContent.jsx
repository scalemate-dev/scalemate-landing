import styles from "@/components/contentful/RichText/RichText.module.scss"

const MarkdownContent = ({ html }) => {
  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default MarkdownContent
