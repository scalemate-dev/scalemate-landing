import Container from "@/components/elements/Container/Container"
import styles from "./AudienceSection.module.scss"

const audiences = [
  {
    role: "Marketing Agencies",
    description:
      "Juggling dozens of client ad accounts? Upload creatives from Google Drive to any of them in one go — no downloading, no tab-hopping.",
  },
  {
    role: "App Publishers",
    description:
      "Scaling UA across Meta Ads and TikTok Ads? Send creatives to every ad account from a single dashboard. Streamline your creative distribution.",
  },
  {
    role: "E-commerce",
    description:
      "New products, seasonal pushes, weekly refreshes — bulk upload ad creatives to your campaigns and get back to selling.",
  },
  {
    role: "Freelancers & Media Buyers",
    description:
      "One person, many clients. Upload ad creatives across all accounts without juggling logins. Simplify your media buyer workflow.",
  },
]

const industries = [
  "Mobile Apps",
  "E-commerce",
  "DTC Brands",
  "Lead Generation",
  "SaaS",
  "Gaming",
  "Finance",
  "Education",
  "Health & Wellness",
]

export default function AudienceSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Who It's For</span>
          <h2 className={styles.title}>
            Built for teams who manage ad creatives
          </h2>
          <p className={styles.subtitle}>
            If you upload creatives to <strong>Meta Ads</strong> or{" "}
            <strong>TikTok Ads</strong>, this ad uploader was made for
            you
          </p>
        </div>

        <div className={styles.columns}>
          {audiences.map((item, index) => (
            <div key={index} className={styles.col}>
              <span className={styles.dash} />
              <h3 className={styles.colRole}>{item.role}</h3>
              <p className={styles.colDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
