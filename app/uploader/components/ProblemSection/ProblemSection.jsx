import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"

const problems = [
  {
    number: "01",
    title: "Download, upload, repeat",
    description:
      "Creatives in Google Drive, ad platforms elsewhere. Download files, then re-upload one by one.",
  },
  {
    number: "02",
    title: "Multiply by every account",
    description:
      "Multiple ad accounts? Repeat the same process for each. Same files, same clicks.",
  },
  {
    number: "03",
    title: "Hours lost on busywork",
    description:
      "A 50-creative launch becomes an hour of clicking. Time better spent on strategy.",
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <Image
        className={styles.bubble}
        src={bubble}
        alt=""
        width={700}
        height={700}
      />
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2>
              The manual workflow
              <br />
              <span className={styles.gradientText}>holding you back</span>
            </h2>
            <p className={styles.subtitle}>
              Every creative upload is a chain of repetitive steps that steals
              your time
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {problems.map((problem, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.cardNumber}>{problem.number}</span>
                <div className={styles.cardContent}>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
