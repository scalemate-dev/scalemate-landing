"use client"

import {
  IconCheck,
  IconLoader2,
  IconAlertTriangle,
  IconClock,
  IconCloudUpload,
} from "@tabler/icons-react"
import cn from "classnames"
import FileIcon from "../FileIcon/FileIcon"
import SignupCta from "../SignupCta/SignupCta"
import styles from "./UploadProgress.module.scss"

const STATUS_CONFIG = {
  completed: { icon: IconCheck, label: "Done", className: "completed" },
  in_progress: { icon: IconLoader2, label: "Uploading", className: "inProgress" },
  pending: { icon: IconClock, label: "Waiting", className: "pending" },
  failed: { icon: IconAlertTriangle, label: "Failed", className: "failed" },
}

const UploadProgress = ({
  totalFiles,
  completedFiles,
  failedFiles,
  results,
  progress,
  error,
}) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <div className={styles.uploadIcon}>
          <IconCloudUpload size={28} />
        </div>
        <h3>Uploading your files</h3>
        <p>
          {completedFiles} of {totalFiles} files uploaded
        </p>
      </div>

      {error && (
        <div className={styles.errorBanner}>
          <IconAlertTriangle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className={styles.progressBarWrapper}>
        <div className={styles.progressTrack}>
          <div
            className={cn(styles.progressFill, {
              [styles.hasErrors]: failedFiles > 0,
            })}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles.progressPercent}>{progress}%</span>
      </div>

      <div className={styles.fileResults}>
        {results.map((file) => {
          const config = STATUS_CONFIG[file.status] || STATUS_CONFIG.pending
          const StatusIcon = config.icon

          return (
            <div
              key={file.file_name}
              className={cn(styles.fileRow, styles[config.className])}
            >
              <FileIcon fileName={file.file_name} />
              <span className={styles.fileName}>{file.file_name}</span>
              <div className={cn(styles.statusBadge, styles[config.className])}>
                <StatusIcon
                  size={13}
                  className={cn({ [styles.spinner]: file.status === "in_progress" })}
                />
                <span>{config.label}</span>
              </div>
            </div>
          )
        })}
      </div>

      <SignupCta />
    </div>
  )
}

export default UploadProgress
