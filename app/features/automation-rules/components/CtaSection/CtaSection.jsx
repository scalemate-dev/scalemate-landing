import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import { IconPlayerPlay, IconRocket } from "@tabler/icons-react"
import styles from "./CtaSection.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>
              Set up automated ad optimization rules once. Campaigns optimize
              from there.
            </h2>
            <div className={styles.ctaActions}>
              <Button
                href="https://app.scalemate.co"
                color="accent"
                trackEvent="cta_start_trial"
                trackProps={{ page: "automation-rules" }}
              >
                <IconRocket size={18} />
                Get started for free
              </Button>
              <Button
                href="/book-a-demo"
                darkTheme
                outline
                trackEvent="cta_book_demo"
                trackProps={{ page: "automation-rules" }}
              >
                Book a Demo
              </Button>
            </div>
            <p className={styles.ctaNote}>
              Start with 2 automation rules on free plan{" "}
              <Link href="/pricing">See pricing →</Link>
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
