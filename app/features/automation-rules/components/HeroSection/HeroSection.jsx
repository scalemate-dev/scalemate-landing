import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import { IconPlayerPlay, IconRocket } from "@tabler/icons-react"
import styles from "./HeroSection.module.scss"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Automation Rules</span>
            <h1>Automated Ad Optimization Rules</h1>
            <p className={styles.tagline}>The shift that never clocks out</p>
            <p className={styles.description}>
              Automated ad optimization rules that pause underperformers, scale
              winners, and adjust bids. Running 24/7 without manual checks or
              extra headcount:
            </p>
            <ul className={styles.features}>
              <li>Set conditions on any metric: ROAS, CPI, CTR, spend</li>
              <li>Choose auto-execute or alert-only for each rule</li>
              <li>Same logic across all Meta Ads accounts, one dashboard</li>
            </ul>
            <p className={styles.closer}>
              Set the logic once. The rules handle everything from there.
            </p>
            <div className={styles.actions}>
              <Button
                href="/book-a-demo"
                color="accent"
                trackEvent="hero_book_demo"
                trackProps={{ page: "automation-rules" }}
              >
                Book a Demo
              </Button>
              <Button
                href="https://app.scalemate.co"
                outline
                trackEvent="hero_start_trial"
                trackProps={{ page: "automation-rules" }}
              >
                <IconRocket size={18} />
                Get started for free
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.ruleCard}>
              <div className={styles.ruleHeader}>
                <span className={styles.ruleDot} />
                <span className={styles.ruleLabel}>Rule Active</span>
                <span className={styles.ruleBadge}>24/7</span>
              </div>
              <div className={styles.ruleBody}>
                <div className={styles.ruleLine}>
                  <span className={styles.ruleKey}>IF</span>
                  <span className={styles.ruleValue}>ROAS &lt; 1.2</span>
                </div>
                <div className={styles.ruleLine}>
                  <span className={styles.ruleKey}>FOR</span>
                  <span className={styles.ruleValue}>24 hours</span>
                </div>
                <div className={styles.ruleLine}>
                  <span className={styles.ruleKey}>THEN</span>
                  <span className={styles.ruleAction}>Pause ad set</span>
                </div>
              </div>
              <div className={styles.ruleFooter}>
                <div className={styles.ruleMetric}>
                  <span className={styles.ruleMetricLabel}>Checked</span>
                  <span className={styles.ruleMetricValue}>2m ago</span>
                </div>
                <div className={styles.ruleMetric}>
                  <span className={styles.ruleMetricLabel}>Actions</span>
                  <span className={styles.ruleMetricValue}>147</span>
                </div>
                <div className={styles.ruleMetric}>
                  <span className={styles.ruleMetricLabel}>Saved</span>
                  <span className={styles.ruleMetricValue}>$12.4K</span>
                </div>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <IconRocket size={16} />
              </div>
              <div className={styles.floatingText}>
                <span className={styles.floatingTitle}>Budget scaled</span>
                <span className={styles.floatingDesc}>+20% on 3 ad sets</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
