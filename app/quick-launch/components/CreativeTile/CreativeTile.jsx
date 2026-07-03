import { IconLoader2, IconCheck, IconX, IconPhoto, IconVideo } from "@tabler/icons-react"
import cn from "classnames"
import styles from "./CreativeTile.module.scss"

const STATUS_ICON = {
  pending: null,
  uploading: <IconLoader2 size={12} className={styles.spinner} />,
  uploaded: <IconCheck size={12} />,
  failed: <IconX size={12} />,
}

const CreativeTile = ({ creative, onRemove }) => {
  const { name, status, thumbnailUrl, error } = creative
  const ext = name?.split(".").pop()?.toLowerCase()
  const isVideo = ext === "mp4"

  return (
    <div
      className={cn(styles.tile, {
        [styles.uploading]: status === "uploading",
        [styles.uploaded]: status === "uploaded",
        [styles.failed]: status === "failed",
      })}
      title={error || name}
    >
      {/* Thumbnail or placeholder */}
      <div className={styles.thumbWrap}>
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={name}
            className={styles.thumb}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className={styles.thumbPlaceholder}>
            {isVideo ? <IconVideo size={18} /> : <IconPhoto size={18} />}
          </div>
        )}

        {/* Upload overlay */}
        {status === "uploading" && (
          <div className={styles.overlay}>
            <IconLoader2 size={18} className={styles.spinner} />
          </div>
        )}
      </div>

      {/* File info */}
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span
          className={cn(styles.status, {
            [styles.statusUploaded]: status === "uploaded",
            [styles.statusFailed]: status === "failed",
            [styles.statusUploading]: status === "uploading",
          })}
        >
          {STATUS_ICON[status]}
          {status === "uploaded"
            ? "Ready"
            : status === "failed"
            ? "Failed"
            : status === "uploading"
            ? "Uploading"
            : "Pending"}
        </span>
      </div>

      {/* Remove button */}
      <button
        className={styles.removeBtn}
        onClick={() => onRemove(creative.clientRef)}
        aria-label={`Remove ${name}`}
      >
        <IconX size={12} />
      </button>
    </div>
  )
}

export default CreativeTile
