import Container from "@/components/elements/Container/Container"
import styles from "./AudienceSection.module.scss"

export default function AudienceSection({ title, subtitle, roles, industries, industryLabel, footer }) {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
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
          <p className={styles.footerLabel}>{industryLabel}</p>
          <ul className={styles.industryList}>
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
          <p className={styles.footerCloser}>{footer}</p>
        </footer>
      </Container>
    </section>
  )
}
