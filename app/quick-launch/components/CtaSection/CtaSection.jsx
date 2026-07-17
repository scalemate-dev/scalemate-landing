import Container from "@/components/elements/Container/Container"
import styles from "./CtaSection.module.scss"
import { IconCloudUpload } from "@tabler/icons-react"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Stop hand-building your ads</h2>
            <p>
              Clone a proven ad, drop your Drive creatives, and watch the batch
              go live. Free, no login, 10 ads a day.
            </p>
            <a href="#top" className={styles.ctaButton}>
              <IconCloudUpload size={20} />
              Create your first ads free
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
