import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import UploaderWidget from "../UploaderWidget/UploaderWidget"
import styles from "./HeroSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import {
  IconBrandGoogleDrive,
  IconBrandTiktok,
  IconBrandFacebook,
} from "@tabler/icons-react"

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
              Upload ad creatives from <br /> Google Drive to your ad accounts
            </h1>
            <p>
              Skip downloading files to your computer. Select from Drive, choose
              your ad accounts, upload in one click.
            </p>
          </div>

          <div className={styles.widgetWrapper}>
            <UploaderWidget />
          </div>

          <div className={styles.platforms}>
            <span>Works with:</span>
            <div className={styles.platformLogos}>
              <div className={styles.platformLogo}>
                <IconBrandGoogleDrive size={20} />
                <span>Google Drive</span>
              </div>
              <div className={styles.platformLogo}>
                <IconBrandTiktok size={20} />
                <span>TikTok Ads</span>
              </div>
              <div className={styles.platformLogo}>
                <IconBrandFacebook size={20} />
                <span>Meta Ads</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
