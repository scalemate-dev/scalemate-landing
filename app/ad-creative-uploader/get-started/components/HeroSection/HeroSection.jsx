"use client"

import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
// import AuditPreview from "./AuditPreview"
import { trackAuditStarted } from "@/helpers/trackGTM"

export default function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <span className={styles.label}>Ad ops Efficiency</span>
            <h1>
              Stop Manual <span className={styles.accent}>Ad Publishing</span>
            </h1>
            <p>
              Take a quick quiz to get personalized recommendations to speed up
              your ad operations
            </p>
          </div>

          {/* <div className={styles.videoWrapper}>
            <AuditPreview />
          </div> */}

          <Button
            href="/ad-creative-uploader/get-started/quiz"
            className={styles.ctaButton}
            trackEvent="funnel_hero_cta_click"
            onClick={trackAuditStarted}
          >
            Start now for free
          </Button>

          <div className={styles.platforms}>
            <span>Works with:</span>
            <div className={styles.platformLogos}>
              <div className={styles.platformLogo}>
                <Image
                  src={googleDriveIcon}
                  alt="Google Drive"
                  width={20}
                  height={20}
                />
                <span>Google Drive</span>
              </div>
              <div className={styles.platformLogo}>
                <Image
                  src={tiktokIcon}
                  alt="TikTok Ads"
                  width={20}
                  height={20}
                />
                <span>TikTok Ads</span>
              </div>
              <div className={styles.platformLogo}>
                <Image src={metaIcon} alt="Meta Ads" width={20} height={20} />
                <span>Meta Ads</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
