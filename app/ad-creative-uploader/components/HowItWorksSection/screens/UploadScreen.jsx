import styles from "../HowItWorksSection.module.scss"

const FILES = [
  { name: "promo_video_01.mp4", complete: true },
  { name: "banner_1080x1080.png", complete: true },
  { name: "story_format.jpg", complete: true },
  { name: "reel_15s.mp4", uploading: true },
]

export default function UploadScreen() {
  return (
    <div className={styles.uploadScreen}>
      <div className={styles.uploadProgress}>
        <div className={styles.uploadHeader}>
          <span className={styles.uploadTitle}>Uploading to Meta Ads</span>
          <span className={styles.uploadCount}>3 of 4 files</span>
        </div>
        <div className={styles.progressBar}>
          <div className={`${styles.progressFill} ${styles.animated}`} />
        </div>
      </div>
      <div className={styles.uploadList}>
        {FILES.map((file) => (
          <UploadItem key={file.name} {...file} />
        ))}
      </div>
    </div>
  )
}

function UploadItem({ name, complete, uploading }) {
  const className = `${styles.uploadItem} ${complete ? styles.complete : ""} ${uploading ? styles.uploading : ""}`

  return (
    <div className={className}>
      <span className={styles.fileName}>{name}</span>
      {complete && <span className={styles.uploadStatus}>✓</span>}
      {uploading && <div className={styles.spinner} />}
    </div>
  )
}
