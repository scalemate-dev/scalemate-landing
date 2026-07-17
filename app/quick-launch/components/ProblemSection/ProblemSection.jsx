import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    title: "Hand-built in Ads Manager",
    description:
      "Building each ad by hand: pick the creative, set it up, publish, repeat. Click after click.",
  },
  {
    title: "Ads Manager fights you",
    description:
      "The UI lags, logs you out mid-batch, and the native bulk import is half broken.",
  },
  {
    title: "Every tool wants your card",
    description:
      "The other uploaders are $39–370/mo, gated behind a 7-day trial. Just to stop uploading by hand.",
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
                Uploading ads one by one?{" "}
                <span className={styles.accent}>Not anymore.</span>
              </h2>
            </div>
            <p className={styles.subtitle}>
              Getting a batch of creatives live on Meta shouldn&apos;t take an
              afternoon of clicking through Ads Manager
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
