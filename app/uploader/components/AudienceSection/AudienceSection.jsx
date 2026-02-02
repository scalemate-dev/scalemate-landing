import Container from "@/components/elements/Container/Container"
import {
  IconChartBar,
  IconBuildingSkyscraper,
  IconTrendingUp,
  IconUserCircle,
} from "@tabler/icons-react"
import styles from "./AudienceSection.module.scss"

const audiences = [
  {
    icon: IconBuildingSkyscraper,
    role: "Marketing Agencies",
    description:
      "Juggling dozens of client ad accounts? Push creatives to any of them in one go – no more downloading, re-uploading, or tab-hopping.",
    accent: "#8B5CF6",
  },
  {
    icon: IconChartBar,
    role: "App Publishers",
    description:
      "Scaling UA across Meta and TikTok at the same time? Send creatives to every ad account from a single dashboard.",
    accent: "#F97316",
  },
  {
    icon: IconTrendingUp,
    role: "E-commerce",
    description:
      "New products, seasonal pushes, weekly refreshes – bulk-upload creatives to your campaigns and get back to selling.",
    accent: "#0EA5E9",
  },
  {
    icon: IconUserCircle,
    role: "Freelancers",
    description:
      "One person, many clients. Upload ad creatives across all their accounts without juggling logins or permissions.",
    accent: "#10B981",
  },
]

export default function AudienceSection() {
  return (
    <section className={styles.audience}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Built for people who run ads</h2>
          <p>
            If you upload ad creatives to Meta or TikTok Ads, this tool was made
            for you
          </p>
        </div>
        <div className={styles.grid}>
          {audiences.map((item, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ "--accent": item.accent }}
              >
                <item.icon size={28} />
              </div>
              <div className={styles.text}>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
              </div>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
