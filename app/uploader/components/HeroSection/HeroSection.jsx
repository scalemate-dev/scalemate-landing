import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import UploaderErrorBoundary from "../UploaderWidget/UploaderErrorBoundary"
import UploaderWidget from "../UploaderWidget/UploaderWidget"
import styles from "./HeroSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"

export default function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <Image
        className={styles.bubble1}
        src={bubble}
        alt=""
        width={900}
        height={900}
      />
      <Image
        className={styles.bubble2}
        src={bubble2}
        alt=""
        width={900}
        height={900}
      />

      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <h1>
              Upload ad creatives from <br /> Google Drive to Ad Accounts
            </h1>
            <p>
              Free tool to skip downloading files to your computer. Select from
              Google Drive, choose your ad accounts, upload in one click.
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
