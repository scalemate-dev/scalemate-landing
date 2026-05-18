import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import { IconRocket } from "@tabler/icons-react"
import styles from "./CtaSection.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>
              Stop creating ads manually. Launch hundreds in minutes with
              Scalemate&apos;s bulk ad creation tool.
            </h2>
            <div className={styles.ctaActions}>
              <Button
                href="https://app.scalemate.co"
                color="accent"
                trackEvent="cta_start_trial"
                trackProps={{ page: "bulk-launch" }}
              >
                <IconRocket size={18} />
                Get started for free
              </Button>
              <Button
                href="/book-a-demo"
                darkTheme
                outline
                trackEvent="cta_book_demo"
                trackProps={{ page: "bulk-launch" }}
              >
                Book a Demo
              </Button>
            </div>
            <p className={styles.ctaNote}>
              Start with bulk ad launch on any plan.{" "}
              <Link href="/pricing">See pricing &rarr;</Link>
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
