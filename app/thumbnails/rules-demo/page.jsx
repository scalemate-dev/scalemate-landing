import { Anton } from "next/font/google"
import Logo from "@/components/elements/Logo"
import { RuleEngine } from "@/app/features/automation-rules/components/HeroSection/HeroSection"
import styles from "./page.module.scss"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
})

export const metadata = {
  title: "Thumbnail — Rules Demo",
  robots: { index: false, follow: false },
}

export default function RulesDemoThumbnail() {
  return (
    <div className={`${styles.canvas} ${anton.variable}`}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden />
            Live Demo · 35s
          </span>
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>Auto-Pause</span>
            <span className={styles.headlineAmp} aria-hidden>
              &amp;
            </span>
            <span className={styles.headlineLine}>Scale</span>
          </h1>
          <p className={styles.subhead}>Facebook Ad Automation Rules</p>
        </div>

        <div className={styles.engineWrap}>
          <RuleEngine />
        </div>
      </div>

      <div className={styles.brand}>
        <Logo className={styles.logo} />
      </div>
    </div>
  )
}
