import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import { IconArrowRight } from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"

export default function ResultsSection({ eyebrow = "Proven Results", title, titleAccent, subtitle, caseStudies }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <div className={styles.headerGrid}>
            <h2 className={styles.title}>
              {title}{" "}
              <em className={styles.titleAccent}>{titleAccent}</em>
            </h2>
            <p className={styles.headerAside}>{subtitle}</p>
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
              {study.footer && <p className={styles.cardFooter}>{study.footer}</p>}
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
