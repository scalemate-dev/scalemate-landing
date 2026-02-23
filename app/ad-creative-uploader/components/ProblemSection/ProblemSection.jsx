import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    title: "Download, upload, repeat",
    description:
      "Ad creatives live in Google Drive, but ad platforms need them re-uploaded. Download files, then upload ads one by one to Ads Manager.",
  },
  {
    title: "Multiply by every account",
    description:
      "Multiple ad accounts across Meta and TikTok? Repeat the same upload workflow for each. Same files, same clicks.",
  },
  {
    title: "Hours lost on busywork",
    description:
      "A 50-creative launch becomes an hour of clicking. Your creative pipeline stalls while you do manual uploads instead of strategy.",
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.headerMain}>
              <span className={styles.label}>The Problem</span>
              <h2>
                The manual upload workflow{" "}
                <span className={styles.accent}>holding you back</span>
              </h2>
            </div>
            <p className={styles.subtitle}>
              Every creative upload is a chain of repetitive steps that slows
              your ad operations and drains your team's time
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.grid}>
            {problems.map((problem, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.dash} />
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
