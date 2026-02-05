import styles from "../HowItWorksSection.module.scss"

export default function SelectScreen() {
  return (
    <div className={styles.selectScreen}>
      <div className={styles.fileGrid}>
        <FileItem name="promo_video_01.mp4" type="video" selected />
        <FileItem name="banner_1080x1080.png" type="image" selected />
        <FileItem
          name="story_format.jpg"
          type="image"
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        />
        <FileItem name="reel_15s.mp4" type="video" />
      </div>
    </div>
  )
}

function FileItem({ name, type, selected, gradient }) {
  return (
    <div className={`${styles.fileItem} ${selected ? styles.selected : ""}`}>
      <div className={styles.fileThumbnail}>
        {type === "video" ? (
          <div className={styles.videoThumb}>▶</div>
        ) : (
          <div className={styles.imageThumb} style={gradient ? { background: gradient } : undefined} />
        )}
      </div>
      <span>{name}</span>
      {selected && <div className={styles.checkmark}>✓</div>}
    </div>
  )
}
