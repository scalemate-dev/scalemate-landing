"use client"

import Container from "@/components/elements/Container/Container"
import styles from "./AudienceSection.module.scss"

const roles = [
  {
    role: "Media Buyers & Performance Managers",
    description:
      "Create ads in bulk meta using a bulk facebook ad creation tool, without building each ad set by hand.",
  },
  {
    role: "Creative Managers & Directors",
    description:
      "Deploy creative variations across markets and languages without manual handoff.",
  },
  {
    role: "Founders & Marketing Leaders",
    description:
      "Scaling ads without hiring buyers becomes realistic when tooling replaces headcount.",
  },
]

export default function AudienceSection() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <h2 className={styles.title}>Who Bulk Ad Launch Is For</h2>
          <p className={styles.subtitle}>
            Built for teams where campaign volume outpaces capacity – a bulk ad
            launch tool removes a different bottleneck for each function.
          </p>
        </header>

        <div className={styles.columns}>
          {roles.map((item, index) => (
            <div key={index} className={styles.col}>
              <span className={styles.dash} />
              <h3 className={styles.colRole}>{item.role}</h3>
              <p className={styles.colDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerLabel}>
            Scalemate fits any industry running paid acquisition with high
            creative volume:
          </p>
          <ul className={styles.industryList}>
            <li>Marketing Agencies</li>
            <li>Mobile Apps & Web Utilities</li>
            <li>Gaming Studios</li>
            <li>Education Platforms</li>
            <li>E-commerce Brands</li>
            <li>Any Vertical With Constant Creative Testing</li>
          </ul>
          <p className={styles.footerCloser}>
            If ad volume grows faster than the team, the tool applies.
          </p>
        </footer>
      </Container>
    </section>
  )
}
