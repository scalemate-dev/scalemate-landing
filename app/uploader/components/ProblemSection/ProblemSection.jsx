import Container from "@/components/elements/Container/Container"
import { IconArrowRight } from "@tabler/icons-react"
import styles from "./ProblemSection.module.scss"

const oldSteps = [
  "Download from Drive",
  "Find the file",
  "Open Ads Manager",
  "Upload",
  "Repeat 50x",
]

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <Container>
        <div className={styles.content}>
          <h2>Still downloading files just to re-upload them?</h2>
          <p className={styles.description}>
            Every campaign launch means the same thing — download from Drive,
            find the file, drag it into Ads Manager, wait, and do it again for
            every creative, every platform. For 30 files across 2 platforms,
            that&apos;s <strong>2+ hours gone</strong>.
          </p>

          <div className={styles.contrast}>
            <div className={styles.oldWay}>
              <span className={styles.label}>The old way</span>
              <div className={styles.steps}>
                {oldSteps.map((step, i) => (
                  <span key={i} className={styles.step}>
                    {step}
                    {i < oldSteps.length - 1 && (
                      <IconArrowRight size={12} className={styles.arrow} />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.newWay}>
              <span className={styles.label}>With Scalemate</span>
              <div className={styles.steps}>
                <span className={styles.step}>Select</span>
                <IconArrowRight size={12} className={styles.arrow} />
                <span className={styles.step}>Connect</span>
                <IconArrowRight size={12} className={styles.arrow} />
                <span className={styles.step}>Done</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
