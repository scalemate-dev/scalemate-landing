"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import { IconArrowRight } from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"

const caseStudies = [
  {
    company: "KitUp",
    vertical: "Education · 1M+ users",
    title: "15,000+ Ads Launched, 35 Hours Saved Monthly",
    description:
      "KitUp adopted Scalemate as their bulk facebook ad creation tool for one-ad-per-ad-set campaigns. Setup stopped being the bottleneck — the team shifted to strategic analysis.",
    href: "/customers/kitup",
    metrics: [
      { value: "15,000+", label: "Ads launched" },
      { value: "35hrs", label: "Saved per month" },
      { value: "25%+", label: "Hours reduced weekly" },
    ],
  },
  {
    company: "ZeptoLab",
    vertical: "Gaming · 2B+ downloads",
    title: "70% Faster Creative Deployment, 2,000+ Files Processed",
    description:
      "Moving creatives from NextCloud to Facebook meant downloading and re-uploading every file. At scale, bulk ad deployment software becomes a necessity.",
    href: "/customers/zeptolab",
    metrics: [
      { value: "2,000+", label: "Media files delivered" },
      { value: "70%", label: "Upload time reduced" },
      { value: "35hrs", label: "Freed monthly" },
    ],
  },
]

export default function ResultsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    )

    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`)
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>
      <Container>
        {/* Header */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <span className={styles.eyebrow}>Proven Results</span>
          <div className={styles.headerGrid}>
            <h2 className={styles.title}>
              Results Teams Get With the{" "}
              <em className={styles.titleAccent}>Bulk Ad Launch Tool</em>
            </h2>
            <p className={styles.headerAside}>
              From education to gaming — teams that replaced manual campaign
              setup with Scalemate to scale ad volume without scaling headcount.
            </p>
          </div>
        </div>

        {/* Case study cards */}
        <div className={styles.cards}>
          {caseStudies.map((study, idx) => (
            <article
              key={idx}
              className={`${styles.card} ${styles.reveal}`}
            >
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
