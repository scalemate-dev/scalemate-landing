import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import {
  IconArrowRight,
  IconClock,
  IconRocket,
  IconStack2,
} from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"

const stats = [
  {
    value: "65%",
    label: "Time Saved",
    description: "Less time on ad creative management, more on strategy",
    icon: IconClock,
  },
  {
    value: "35hrs",
    label: "Saved Monthly",
    description: "Hours reclaimed from manual uploads to ad platforms",
    icon: IconRocket,
  },
  {
    value: "15K+",
    label: "Ads Launched",
    description: "Bulk creative upload — entire batches uploaded instantly",
    icon: IconStack2,
  },
]

export default function ResultsSection() {
  return (
    <section className={styles.results}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Proven Results</span>
          <div className={styles.headerGrid}>
            <h2 className={styles.title}>
              Upload ad creatives faster.{" "}
              <span className={styles.titleAccent}>Save hours every week.</span>
            </h2>
            <p className={styles.headerAside}>
              Marketing teams cut their creative upload workflow from hours to
              minutes with Google Drive to Meta Ads and TikTok Ads uploads
            </p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>
                <stat.icon size={24} />
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cards}>
          <div className={styles.caseStudy}>
            <div className={styles.caseStudyTop}>
              <span className={styles.caseStudyCompany}>KitUp</span>
              <span className={styles.caseStudyVertical}>Mobile App · 1M+ users</span>
            </div>
            <p className={styles.caseStudyText}>
              This mobile app publisher cut creative upload time by 65% and
              launched 15,000+ ads using Scalemate — freeing the team to focus
              on strategy and ROAS.
            </p>
            <div className={styles.caseStudyMetrics}>
              <div className={styles.caseStudyMetric}>
                <span className={styles.metricValue}>65%</span>
                <span className={styles.metricLabel}>Time saved</span>
              </div>
              <div className={styles.caseStudyMetric}>
                <span className={styles.metricValue}>35hrs</span>
                <span className={styles.metricLabel}>Saved monthly</span>
              </div>
              <div className={styles.caseStudyMetric}>
                <span className={styles.metricValue}>15K+</span>
                <span className={styles.metricLabel}>Ads launched</span>
              </div>
            </div>
            <Link href="/customers/kitup" className={styles.caseStudyLink}>
              Read the full story
              <IconArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.caseStudy}>
            <div className={styles.caseStudyTop}>
              <span className={styles.caseStudyCompany}>ZeptoLab</span>
              <span className={styles.caseStudyVertical}>Gaming · 2B+ downloads</span>
            </div>
            <p className={styles.caseStudyText}>
              ZeptoLab (Cut the Rope) needed bulk creative deployment from
              cloud storage to Facebook. The hours previously spent on manual
              file transfers went back into campaign optimization and creative
              testing.
            </p>
            <div className={styles.caseStudyMetrics}>
              <div className={styles.caseStudyMetric}>
                <span className={styles.metricValue}>2,000+</span>
                <span className={styles.metricLabel}>Files delivered</span>
              </div>
              <div className={styles.caseStudyMetric}>
                <span className={styles.metricValue}>70%</span>
                <span className={styles.metricLabel}>Upload time cut</span>
              </div>
              <div className={styles.caseStudyMetric}>
                <span className={styles.metricValue}>35hrs</span>
                <span className={styles.metricLabel}>Freed monthly</span>
              </div>
            </div>
            <Link href="/customers/zeptolab" className={styles.caseStudyLink}>
              Read the full story
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
