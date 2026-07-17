import Container from "@/components/elements/Container/Container"
import styles from "./AudienceSection.module.scss"

const audiences = [
  {
    role: "Media buyers",
    description:
      "Ship the day's batch in seconds, not tabs. Clone a winner, swap creatives, and get back to optimization.",
  },
  {
    role: "Agencies",
    description:
      "Juggling client accounts? Launch into one free, then add multiple accounts on sign-up and stop re-connecting.",
  },
  {
    role: "UA & growth teams",
    description:
      "Push volume across campaigns without the manual grind. New creatives go live the day they're ready.",
  },
  {
    role: "Freelancers",
    description:
      "A real free tool: no trial timer, no card, no login. Launch 10 ads a day and only sign up when you scale.",
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
            Built for people who launch a lot of ads
          </h2>
          <p className={styles.subtitle}>
            If you push a lot of ads live on <strong>Meta</strong>, this free ad
            uploader was built for you
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
