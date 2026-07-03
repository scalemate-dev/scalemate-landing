import { useState, useRef } from "react"
import {
  IconUpload,
  IconCloudUpload,
  IconLoader2,
} from "@tabler/icons-react"
import cn from "classnames"
import CreativeTile from "../CreativeTile/CreativeTile"
import styles from "./CreativesPanel.module.scss"

// Google Drive icon (inline SVG to match main app)
const GoogleDriveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 9.75z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h36.85c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="M73.4 26.5 60.1 3.5c-.8-1.4-1.95-2.5-3.3-3.3L43.05 24l16.35 28.5h27.5c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
)

const CreativesPanel = ({
  creatives,
  isUploading,
  onLocalFiles,
  onDrivePicker,
  onPublicLinks,
  onRemoveCreative,
  onClearCreatives,
}) => {
  const [dragging, setDragging] = useState(false)
  const [publicLinks, setPublicLinks] = useState("")
  const fileInputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    onLocalFiles(e.dataTransfer.files)
  }

  const handleFileInput = (e) => {
    if (e.target.files?.length > 0) {
      onLocalFiles(e.target.files)
    }
    e.target.value = "" // allow re-selecting same files
  }

  const handleAddLinks = () => {
    if (publicLinks.trim()) {
      const result = onPublicLinks(publicLinks)
      if (result.count > 0) {
        setPublicLinks("")
      }
    }
  }

  const readyCount = creatives.filter((c) => c.status === "uploaded").length
  const uploadingCount = creatives.filter(
    (c) => c.status === "uploading" || c.status === "pending"
  ).length
  const failedCount = creatives.filter((c) => c.status === "failed").length

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.sectionHeader}>
        <div>
          <h3 className={styles.title}>Add new creatives</h3>
          <p className={styles.subtitle}>
            Each becomes one new ad in the selected ad set.
          </p>
        </div>
        {creatives.length > 0 && (
          <button className={styles.clearBtn} onClick={onClearCreatives}>
            Clear all
          </button>
        )}
      </div>

      {/* Drop zone */}
      <div
        className={cn(styles.dropzone, {
          [styles.dragging]: dragging,
          [styles.hasFiles]: creatives.length > 0,
        })}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,video/mp4"
          className={styles.fileInput}
          onChange={handleFileInput}
        />

        {isUploading ? (
          <IconLoader2 size={24} className={styles.spinner} />
        ) : (
          <IconCloudUpload size={28} className={styles.dropzoneIcon} />
        )}
        <p className={styles.dropzoneText}>
          Drag & drop, or click to upload from your computer
        </p>

        <div className={styles.orRow}>
          <span className={styles.orLabel}>or</span>
          <button
            className={styles.driveBtn}
            onClick={(e) => {
              e.stopPropagation()
              onDrivePicker()
            }}
          >
            <GoogleDriveIcon />
            Google Drive
          </button>
        </div>

        <p className={styles.dropzoneHint}>
          jpg, png, mp4 · up to 50MB per file
        </p>
      </div>

      {/* Public Drive links */}
      <div className={styles.linksSection}>
        <label className={styles.linksLabel}>Paste public Drive links</label>
        <textarea
          className={styles.linksInput}
          value={publicLinks}
          onChange={(e) => setPublicLinks(e.target.value)}
          placeholder="Public file or folder links, separated by spaces or commas"
          rows={2}
        />
        <div className={styles.linksActions}>
          <button
            className={styles.uploadLinksBtn}
            onClick={handleAddLinks}
            disabled={!publicLinks.trim()}
          >
            <IconUpload size={14} />
            Add
          </button>
        </div>
      </div>

      {/* Creatives grid */}
      {creatives.length > 0 && (
        <>
          <div className={styles.gridWrap}>
            <div className={styles.grid}>
              {creatives.map((c) => (
                <CreativeTile
                  key={c.clientRef}
                  creative={c}
                  onRemove={onRemoveCreative}
                />
              ))}
            </div>
            <div className={styles.gridFade} />
          </div>

          <p className={styles.summary}>
            {readyCount > 0 && `${readyCount} ready`}
            {uploadingCount > 0 &&
              `${readyCount > 0 ? " · " : ""}${uploadingCount} uploading`}
            {failedCount > 0 &&
              `${readyCount > 0 || uploadingCount > 0 ? " · " : ""}${failedCount} failed`}
          </p>
        </>
      )}
    </div>
  )
}

export default CreativesPanel
