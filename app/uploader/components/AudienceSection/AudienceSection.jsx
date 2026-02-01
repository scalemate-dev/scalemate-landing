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
    icon: IconChartBar,
    role: "Media Buyers",
    description:
      "Running multiple ad accounts across platforms? Upload creatives to all of them without switching tabs.",
    accent: "#F97316",
  },
  {
    icon: IconBuildingSkyscraper,
    role: "Marketing Agencies",
    description:
      "Delivering assets to client ad accounts shouldn't take longer than making them. Skip the download-reupload loop.",
    accent: "#8B5CF6",
  },
  {
    icon: IconTrendingUp,
    role: "Growth Teams",
    description:
      "Launching campaigns at high frequency means every minute counts. Bulk upload and move on to what matters.",
    accent: "#0EA5E9",
  },
  {
    icon: IconUserCircle,
    role: "Freelancers",
    description:
      "Managing multiple client accounts solo? One tool to upload creatives across all of them in seconds.",
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
            If you upload creatives to ad platforms, this tool was made for you
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
