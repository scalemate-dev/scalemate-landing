import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import { IconArrowRight } from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"

const caseStudies = [
  {
    company: "KitUp",
    vertical: "Education · 1M+ users",
    description:
      "This mobile app publisher saved 200+ hours monthly on ad launches and shipped 30,000+ ads using Scalemate — cutting 90% of creative upload time.",
    metrics: [
      { value: "200hr+", label: "Monthly saved" },
      { value: "30K+", label: "Ads launched" },
      { value: "90%", label: "Time saved" },
    ],
    href: "/customers/kitup",
  },
  {
    company: "ZeptoLab",
    vertical: "Mobile games · 2B+ downloads",
    description:
      "ZeptoLab (Cut the Rope) achieved 70% faster ad creative uploads, delivering 2,000+ media files to ad accounts and saving 35 hours monthly on ad launches.",
    metrics: [
      { value: "70%", label: "Faster uploads" },
      { value: "2,000+", label: "Files delivered" },
      { value: "35hr", label: "Monthly saved" },
    ],
    href: "/customers/zeptolab",
  },
]

export default function ResultsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Proven Results</span>
          <div className={styles.headerGrid}>
            <h2 className={styles.title}>
              Upload ad creatives faster.{" "}
              <em className={styles.titleAccent}>Save hours every week.</em>
            </h2>
            <p className={styles.headerAside}>
              Marketing teams cut their creative upload workflow from hours to
              minutes with Google Drive to Meta Ads and TikTok Ads uploads
            </p>
          </div>
        </div>

        <div className={styles.cards}>
          {caseStudies.map((study, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardCompany}>{study.company}</span>
                <span className={styles.cardVertical}>{study.vertical}</span>
              </div>
              <p className={styles.cardText}>{study.description}</p>
              <div className={styles.cardMetrics}>
                {study.metrics.map((m, i) => (
                  <div key={i} className={styles.cardMetric}>
                    <span className={styles.cardMetricValue}>{m.value}</span>
                    <span className={styles.cardMetricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
              <Link href={study.href} className={styles.cardLink}>
                Read the full story <IconArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
