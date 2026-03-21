import Container from "@/components/elements/Container/Container"
import styles from "./CtaSection.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper} id="get-access">
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Ready to upload creatives faster?</h2>
            <p>
              Skip the manual workflow. Upload ad creatives from Google Drive to
              Meta Ads and TikTok Ads in clicks.
            </p>
            <a href="/ad-creative-uploader/get-started/quiz" className={styles.ctaButton}>
              Get Free Access
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
