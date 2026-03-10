import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import styles from "./ProofSection.module.scss"

const stats = [
  {
    value: "5\u00d7",
    label: "More creative tests",
    description: "run in the same timeframe",
  },
  {
    value: "90%",
    label: "Faster",
    description: "creative uploads from Google Drive to ad library",
  },
  {
    value: "75%",
    label: "Less time",
    description: "spent on campaign launches",
  },
]

const caseStudy = {
  company: "KitUp",
  description:
    "KitUp, an education app with over 1 million users, needed to scale Meta campaigns while maintaining a strict one-creative-per-ad-set structure. Manual setup couldn\u2019t keep pace with their testing volume.",
  intro:
    "After implementing Scalemate\u2019s bulk ad launch workflow, results followed:",
  results: [
    { value: "30,000+", label: "ads launched through Scalemate" },
    { value: "200+", label: "hours/month saved on ad launches" },
    { value: "90%", label: "faster creative uploads (Google Drive \u2192 Meta Ads Library)" },
    { value: "25%", label: "less time weekly on campaign creation" },
  ],
  closing:
    "The team shifted from manual operations to analysis and strategy. The work that actually moves performance.",
}

export default function ProofSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Results From Teams Using Bulk Ad Creation Tool</h2>
          <p className={styles.subtitle}>
            Across teams using Scalemate as their{" "}
            bulk ad creation tool on Meta and TikTok:
          </p>
        </div>

        <ul className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <li key={index} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statDesc}>{stat.description}</span>
            </li>
          ))}
        </ul>

        <p className={styles.footnote}>
          These numbers come from production usage across live accounts, not
          projections.
        </p>

        {/* Case Study */}
        <div className={styles.caseStudy}>
          <div className={styles.caseHeader}>
            <span className={styles.caseEyebrow}>Case Study</span>
            <h3>KitUp</h3>
          </div>
          <p className={styles.caseDesc}>{caseStudy.description}</p>
          <p className={styles.caseIntro}>{caseStudy.intro}</p>
          <div className={styles.caseResults}>
            {caseStudy.results.map((result, index) => (
              <div key={index} className={styles.caseResult}>
                <span className={styles.caseValue}>{result.value}</span>
                <span className={styles.caseLabel}>{result.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.caseClosing}>{caseStudy.closing}</p>
          <Link href="/customers/kitup" className={styles.caseLink}>
            Read the full story &rarr;
          </Link>
        </div>
      </Container>
    </section>
  )
}
