import styles from "../../_components/HowItWorksSection/HowItWorksVisuals.module.scss"

const files = [
  { name: "promo_video_01.mp4", done: true },
  { name: "banner_1080×1080.png", done: true },
  { name: "story_format.jpg", done: true },
  { name: "reel_15s.mp4", done: false },
]

export function UploadVisual() {
  return (
    <div className={styles.uplCard} aria-hidden="true">
      <div className={styles.uplChrome}>
        <span className={styles.uplDot} data-color="red" />
        <span className={styles.uplDot} data-color="yellow" />
        <span className={styles.uplDot} data-color="green" />
      </div>

      <div className={styles.uplBody}>
        <div className={styles.uplHeader}>
          <div className={styles.uplHeaderLeft}>
            <span className={styles.uplHeaderTitle}>Uploading to Meta Ads</span>
            <div className={styles.uplProgress}>
              <div className={styles.uplProgressFill} />
            </div>
          </div>
          <span className={styles.uplHeaderCount}>33 of 43 files</span>
        </div>

        <div className={styles.uplFiles}>
          {files.map((f, i) => (
            <div
              key={i}
              className={`${styles.uplFile} ${!f.done ? styles.uplFileActive : ""}`}
            >
              <span className={styles.uplFileName}>{f.name}</span>
              {f.done ? (
                <svg
                  className={styles.uplCheck}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <div className={styles.uplSpinner} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
