import Container from "@/components/elements/Container/Container"
import styles from "./CtaSection.module.scss"
import { IconCloudUpload } from "@tabler/icons-react"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Ready to upload creatives faster?</h2>
            <p>
              Skip the manual workflow. Upload ad creatives from Google Drive to
              Meta Ads and TikTok Ads in clicks.
            </p>
            <a href="#top" className={styles.ctaButton}>
              <IconCloudUpload size={20} />
              Start Uploading — It's Free
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
