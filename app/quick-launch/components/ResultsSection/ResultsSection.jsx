import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import { IconArrowRight } from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"

const caseStudies = [
  {
    company: "KitUp",
    vertical: "Education · 1M+ users",
    description:
      "This mobile app publisher shipped 30,000+ ads with Scalemate and saved 200+ hours a month, cutting 90% off the time it takes to get ads live.",
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
      "ZeptoLab (Cut the Rope) launched 2,000+ creatives 70% faster and saved 35 hours a month on ad launches.",
    metrics: [
      { value: "70%", label: "Faster launch" },
      { value: "2,000+", label: "Creatives launched" },
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
              2M+ ads launched,{" "}
              <em className={styles.titleAccent}>and counting.</em>
            </h2>
            <p className={styles.headerAside}>
              Across the subscription, ecommerce and gaming apps we work with
              every day, teams save up to 3 hours a day they used to spend
              building ads by hand
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

        <div className={styles.clientApps}>
          <span className={styles.clientAppsLabel}>Apps powered by Scalemate</span>
          <div className={styles.clientAppsRow}>
            {/* eslint-disable @next/next/no-img-element */}
            <img src="/client-appflame.svg" alt="Appflame" className={styles.clientAppIcon} />
            <img src="/client-zeptolab.webp" alt="ZeptoLab" className={styles.clientAppIcon} />
            <img src="/client-kitup.webp" alt="KitUp" className={styles.clientAppIcon} />
            <img src="/client-cut-the-rope.webp" alt="Cut the Rope" className={styles.clientAppIcon} />
            <img src="/client-bullet-echo.webp" alt="Bullet Echo" className={styles.clientAppIcon} />
            <img src="/client-growthers.png" alt="Growthers" className={styles.clientAppIcon} />
            <img src="/client-manifestation.png" alt="Manifestation" className={styles.clientAppIcon} />
            <img src="/client-mindguru.png" alt="MindGuru" className={styles.clientAppIcon} />
            <img src="/client-ouromedia.png" alt="OuroMedia" className={styles.clientAppIcon} />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>
      </Container>
    </section>
  )
}
