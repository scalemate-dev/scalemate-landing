import Image from "next/image"
import { Anton } from "next/font/google"
import Logo from "@/components/elements/Logo"
import { UploadVisual } from "@/app/use-cases/_data/automated-creative-upload-meta/UploadVisual"
import styles from "./page.module.scss"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
})

export const metadata = {
  title: "Thumbnail — Upload Demo",
  robots: { index: false, follow: false },
}

export default function UploadDemoThumbnail() {
  return (
    <div className={`${styles.canvas} ${anton.variable}`}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden />
            Live Demo · 60s
          </span>
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>Bulk Upload</span>
            <span className={styles.headlineArrow} aria-hidden>
              →
            </span>
            <span className={styles.headlineLine}>From Drive</span>
          </h1>
          <p className={styles.subhead}>
            Meta + TikTok ad creatives, in seconds.
          </p>

          <div className={styles.platforms}>
            <span className={styles.platform}>
              <Image
                src="/google-drive-logo.svg"
                alt="Google Drive"
                width={134}
                height={28}
                className={styles.platformLogo}
                priority
                unoptimized
              />
            </span>
            <span className={styles.platformConnect} aria-hidden>
              →
            </span>
            <span className={styles.platform}>
              <Image
                src="/meta-ads-logo.svg"
                alt="Meta Ads"
                width={100}
                height={22}
                className={styles.platformLogo}
                priority
                unoptimized
              />
            </span>
            <span className={styles.platformPlus} aria-hidden>
              +
            </span>
            <span className={styles.platform}>
              <Image
                src="/tiktok-logo.png"
                alt="TikTok Ads"
                width={186}
                height={20}
                className={styles.platformLogo}
                priority
                unoptimized
              />
            </span>
          </div>
        </div>

        <div className={styles.visualWrap}>
          <UploadVisual />
        </div>
      </div>

      <div className={styles.brand}>
        <Logo className={styles.logo} />
      </div>
    </div>
  )
}
