import Link from "next/link"
import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import {
  IconArrowRight,
  IconClock,
  IconRocket,
  IconStack2,
} from "@tabler/icons-react"
import styles from "./ResultsSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"

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
      <Image
        className={styles.resultsBubble}
        src={bubble}
        alt=""
        width={600}
        height={600}
      />
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Upload ad creatives faster. Save hours every week.</h2>
          <p>
            Marketing teams cut their creative upload workflow from hours to
            minutes with Google Drive to Meta Ads and TikTok Ads uploads
          </p>
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

        <div className={styles.caseStudy}>
          <div className={styles.caseStudyContent}>
            <span className={styles.caseStudyTag}>Case Study</span>
            <h3>See how KitUp saves 35 hours monthly on ad launches</h3>
            <p>
              Learn how this mobile app publisher with 1M+ users cut creative
              upload time by 65% and launched 15,000+ ads using Scalemate —
              freeing the team to focus on strategy and ROAS.
            </p>
            <Link href="/customers/kitup" className={styles.caseStudyLink}>
              Read the full story
              <IconArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.caseStudyVisual}>
            <div className={styles.logoPlaceholder}>
              <span>KitUp</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
