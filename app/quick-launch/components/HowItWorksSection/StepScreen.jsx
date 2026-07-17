import styles from "./HowItWorksSection.module.scss"

// All steps use ready-made mockup images (they include their own window chrome).
const SCREEN_IMAGE = {
  reference: {
    src: "/how-it-works-step1.png",
    alt: "Scalemate ad uploader — pick the ad account, campaign, ad set and a reference ad to bulk upload ads to Meta",
  },
  select: {
    src: "/how-it-works-step2.png",
    alt: "Selecting ad creatives straight from a Google Drive folder to bulk upload to Meta",
  },
  live: {
    src: "/how-it-works-step3.png",
    alt: "New ads live in Meta Ads Manager after bulk uploading creatives from Google Drive",
  },
}

export default function StepScreen({ stepId, isActive }) {
  const image = SCREEN_IMAGE[stepId]

  return (
    <div className={`${styles.screen} ${isActive ? styles.active : ""}`}>
      {image && <img src={image.src} alt={image.alt} className={styles.screenImage} />}
    </div>
  )
}
