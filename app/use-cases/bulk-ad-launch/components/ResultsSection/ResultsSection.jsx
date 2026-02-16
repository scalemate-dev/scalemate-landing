import Link from "next/link"
import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import { IconArrowRight } from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"

const caseStudies = [
  {
    tag: "Case Study",
    company: "KitUp",
    title: "15,000+ Ads Launched, 35 Hours Saved Monthly",
    description:
      "KitUp (education, 1M+ users) adopted Scalemate as their bulk facebook ad creation tool for one-ad-per-ad-set campaigns. Setup stopped being the bottleneck — the team shifted to strategic analysis.",
    stats: [
      { value: "15,000+", label: "Ads launched" },
      { value: "35hrs", label: "Saved per month" },
      { value: "25%+", label: "Hours reduced weekly" },
    ],
    link: "/customers/kitup",
    linkText: "Read the full story",
  },
  {
    tag: "Case Study",
    company: "ZeptoLab",
    title: "70% Faster Creative Deployment, 2,000+ Files Processed",
    description:
      "ZeptoLab (Cut the Rope, 2B+ downloads): moving creatives from NextCloud to Facebook meant downloading and re-uploading every file. At scale, bulk ad deployment software becomes a necessity.",
    stats: [
      { value: "2,000+", label: "Media files delivered" },
      { value: "70%", label: "Upload time reduced" },
      { value: "35hrs", label: "Freed monthly" },
    ],
    link: null,
    linkText: null,
  },
]

export default function ResultsSection() {
  return (
    <section className={styles.results}>
      <Image
        className={styles.resultsBubble}
        src={bubble}
        alt=""
        aria-hidden="true"
        width={600}
        height={600}
      />
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Results Teams Get With the Bulk Ad Launch Tool</h2>
          <p>
            Here are two examples — from education to gaming, across web and
            mobile apps — of teams that replaced manual campaign setup with
            Scalemate to scale ad volume without scaling headcount.
          </p>
        </div>

        <div className={styles.caseStudies}>
          {caseStudies.map((study, index) => (
            <div key={index} className={styles.caseStudy}>
              <div className={styles.caseStudyContent}>
                <span className={styles.caseStudyTag}>{study.tag}</span>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                {study.link && (
                  <Link href={study.link} className={styles.caseStudyLink}>
                    {study.linkText}
                    <IconArrowRight size={18} />
                  </Link>
                )}
              </div>
              <div className={styles.caseStudyStats}>
                {study.stats.map((stat, i) => (
                  <div key={i} className={styles.stat}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
