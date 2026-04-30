import { Anton, JetBrains_Mono } from "next/font/google"
import Logo from "@/components/elements/Logo"
import { SyncVisual } from "@/app/use-cases/_data/bulk-ad-launch/HowItWorksVisuals"
import styles from "./page.module.scss"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Thumbnail — Launch Demo",
  robots: { index: false, follow: false },
}

export default function LaunchDemoThumbnail() {
  return (
    <div className={`${styles.canvas} ${anton.variable} ${mono.variable}`}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className={styles.dots} aria-hidden />
      <div className={styles.diagonal} aria-hidden />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden />
            <span className={styles.eyebrowText}>Live Demo</span>
            <span className={styles.eyebrowDivider} aria-hidden>·</span>
            <span className={styles.eyebrowMono}>00:55</span>
          </span>

          <h1 className={styles.headline}>
            <span className={styles.lineOne}>Bulk</span>
            <span className={styles.headlineArrow} aria-hidden>→</span>
            <span className={styles.lineTwo}>Launch</span>
          </h1>

          <p className={styles.strapline}>
            <span className={styles.strapKey}>100 Ads</span>
            <span className={styles.strapDivider} aria-hidden>=</span>
            <span className={styles.strapKey}>1 Minute</span>
            <span className={styles.strapDivider} aria-hidden>·</span>
            <span>One Template</span>
            <span className={styles.strapDivider} aria-hidden>·</span>
            <span>Meta + TikTok</span>
          </p>
        </div>

        <div className={styles.visualWrap}>
          <div className={styles.visualFrame}>
            <span className={styles.visualBadge}>
              <span className={styles.visualBadgeDot} aria-hidden />
              Live pipeline
            </span>
            <SyncVisual />
          </div>
        </div>
      </div>

      <div className={styles.brand}>
        <Logo className={styles.logo} />
      </div>
    </div>
  )
}
