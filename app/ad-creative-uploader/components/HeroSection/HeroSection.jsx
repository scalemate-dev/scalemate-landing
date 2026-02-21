import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import UploaderErrorBoundary from "../UploaderWidget/UploaderErrorBoundary"
import UploaderWidget from "../UploaderWidget/UploaderWidget"
import styles from "./HeroSection.module.scss"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"

export default function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <span className={styles.label}>Free Ad Creative Uploader</span>
            <h1>
              Google Drive to Meta & TikTok Ads —{" "}
              <span className={styles.accent}>in one click</span>
            </h1>
            <p>
              Upload ad creatives from Google Drive directly to Meta Ads and
              TikTok Ads. No downloads, no manual re-uploads — bulk upload to
              multiple ad accounts in one click.
            </p>
          </div>

          <div className={styles.widgetWrapper}>
            <UploaderErrorBoundary>
              <UploaderWidget />
            </UploaderErrorBoundary>
          </div>

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
