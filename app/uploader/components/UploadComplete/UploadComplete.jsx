"use client"

import { IconCheck, IconAlertTriangle, IconRefresh } from "@tabler/icons-react"
import cn from "classnames"
import { guestSessionApi } from "@/lib/api/guestSession"
import SignupCta from "../SignupCta/SignupCta"
import styles from "./UploadComplete.module.scss"

const UploadComplete = ({
  totalFiles,
  completedFiles,
  failedFiles,
  results,
  onUploadMore,
}) => {
  const allSucceeded = failedFiles === 0
  const failedResults = results?.filter((r) => r.status === "failed") || []

  return (
    <div className={styles.completeContainer}>
      <div
        className={cn(styles.statusIcon, { [styles.warning]: !allSucceeded })}
      >
        {allSucceeded ? (
          <IconCheck size={32} />
        ) : (
          <IconAlertTriangle size={32} />
        )}
      </div>

      <h3 className={styles.title}>
        {allSucceeded
          ? "Your files have been uploaded!"
          : "Upload completed with errors"}
      </h3>

      <p className={styles.summary}>
        {completedFiles} of {totalFiles} files uploaded successfully and ready
        to be launched!
        {failedFiles > 0 && ` · ${failedFiles} failed`}
      </p>

      {failedResults.length > 0 && (
        <div className={styles.failedList}>
          <p className={styles.failedTitle}>Failed files:</p>
          {failedResults.map((file) => (
            <div key={file.file_name} className={styles.failedItem}>
              <IconAlertTriangle size={14} />
              <span>{file.file_name}</span>
            </div>
          ))}
          <p className={styles.failedHint}>
            Sign up to retry failed uploads and get support
          </p>
        </div>
      )}

      <button className={styles.secondaryCta} onClick={onUploadMore}>
        <IconRefresh size={16} />
        Upload more files
      </button>

      <SignupCta />
    </div>
  )
}

export default UploadComplete
