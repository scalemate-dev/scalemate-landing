"use client"

import {
  IconCheck,
  IconAlertTriangle,
  IconCloudUpload,
  IconRefresh,
  IconInfinity,
  IconChartBar,
  IconHistory,
  IconArrowsExchange,
} from "@tabler/icons-react"
import cn from "classnames"
import { guestSessionApi } from "@/lib/api/guestSession"
import styles from "./UploadComplete.module.scss"

const BENEFITS = [
  { icon: IconInfinity, label: "Unlimited uploads" },
  { icon: IconChartBar, label: "Creative analytics" },
  { icon: IconHistory, label: "Upload history" },
  { icon: IconArrowsExchange, label: "Multi-account" },
]

const UploadComplete = ({
  totalFiles,
  completedFiles,
  failedFiles,
  results,
  onUploadMore,
}) => {
  const signupUrl = guestSessionApi.getAppRedirectUrl("/signup")
  const allSucceeded = failedFiles === 0
  const failedResults = results?.filter((r) => r.status === "failed") || []

  return (
    <div className={styles.completeContainer}>
      <div className={cn(styles.statusIcon, { [styles.warning]: !allSucceeded })}>
        {allSucceeded ? <IconCheck size={32} /> : <IconAlertTriangle size={32} />}
      </div>

      <h3 className={styles.title}>
        {allSucceeded
          ? "Your files have been uploaded!"
          : "Upload completed with errors"}
      </h3>

      <p className={styles.summary}>
        {completedFiles} of {totalFiles} files uploaded successfully
        {failedFiles > 0 && ` · ${failedFiles} failed`}
      </p>

      {failedResults.length > 0 && (
        <div className={styles.failedList}>
          <p className={styles.failedTitle}>Failed files:</p>
          {failedResults.map((file, i) => (
            <div key={i} className={styles.failedItem}>
              <IconAlertTriangle size={14} />
              <span>{file.file_name}</span>
            </div>
          ))}
          <p className={styles.failedHint}>
            Sign up to retry failed uploads and get support
          </p>
        </div>
      )}

      <a href={signupUrl} className={styles.primaryCta}>
        <IconCloudUpload size={18} />
        Create account to manage your uploads
      </a>

      <button className={styles.secondaryCta} onClick={onUploadMore}>
        <IconRefresh size={16} />
        Upload more files
      </button>

      <div className={styles.benefitsBlock}>
        <p className={styles.benefitsTitle}>With a free account you get:</p>
        <div className={styles.benefitsGrid}>
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.benefitItem}>
              <Icon size={16} className={styles.benefitIcon} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UploadComplete
