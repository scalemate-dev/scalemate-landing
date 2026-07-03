"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import {
  IconCircleCheck,
  IconAlertTriangle,
  IconCircleX,
  IconExternalLink,
} from "@tabler/icons-react"
import styles from "./LaunchResultModal.module.scss"

/**
 * Facebook Ads Manager deeplink filtered to the newly created ads.
 */
const buildAdsManagerLink = (adAccountId, adIds) => {
  const act = (adAccountId || "").replace(/^act_/, "")
  const ids = adIds.map((id) => `"${id}"`).join("%2C")
  const filterSet = `SEARCH_BY_ADGROUP_IDS-STRING_SET%1EANY%1E[${ids}]`
  return `https://adsmanager.facebook.com/adsmanager/manage/ads?act=${act}&filter_set=${filterSet}`
}

/**
 * Turn a raw backend/Facebook error into copy safe to show users.
 */
const friendlyReason = (e) => {
  const raw = (e.error || "").toString()

  if (e.status === "skipped_parent_failed" || !raw) {
    return "Facebook couldn't create the ad from this creative."
  }
  if (/permission|not have permission|access/i.test(raw)) {
    return "Facebook denied access to this ad account or page. Try reconnecting Meta."
  }
  if (/token|session|expired|OAuth/i.test(raw)) {
    return "Your Meta connection expired. Reconnect and try again."
  }
  if (/rate limit|too many/i.test(raw)) {
    return "Facebook is rate-limiting requests. Wait a few minutes and try again."
  }
  return "Facebook couldn't create this ad. Try again in a few minutes."
}

const LaunchResultModal = ({ result, adAccountId, adsetName, onClose }) => {
  useEffect(() => {
    if (!result) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [result, onClose])

  if (!result) return null

  const entities = result.entities || []
  // Only "created" and "skipped_existing" mean the ad exists on Facebook.
  // "failed" / "skipped_parent_failed" (e.g. creative creation failed) do not.
  const succeeded = entities.filter(
    (e) => e.status === "created" || e.status === "skipped_existing"
  )
  const failed = entities.filter((e) => !succeeded.includes(e))
  const adIds = succeeded.map((e) => e.remote_id).filter(Boolean)
  const total = entities.length
  const allFailed = succeeded.length === 0
  const partial = !allFailed && failed.length > 0

  const Icon = allFailed
    ? IconCircleX
    : partial
      ? IconAlertTriangle
      : IconCircleCheck
  const iconClass = allFailed
    ? styles.iconFailed
    : partial
      ? styles.iconPartial
      : styles.iconSuccess
  const title = allFailed
    ? "Launch didn't go through"
    : partial
      ? "Partially launched"
      : "Launched"

  // Group failures by human-readable reason so we never dump raw errors.
  const reasons = []
  failed.forEach((e) => {
    const msg = friendlyReason(e)
    const existing = reasons.find((r) => r.msg === msg)
    if (existing) existing.count += 1
    else reasons.push({ msg, count: 1 })
  })

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <Icon size={22} className={iconClass} />
          <h3 className={styles.title}>{title}</h3>
        </div>

        <p className={styles.description}>
          {allFailed ? (
            <>
              None of the {total} ad{total === 1 ? "" : "s"} could be launched
            </>
          ) : partial ? (
            <>
              <strong>{succeeded.length} of {total}</strong> ads launched
            </>
          ) : (
            <>
              All {succeeded.length} ad{succeeded.length === 1 ? "" : "s"}{" "}
              launched
            </>
          )}
          {adsetName ? (
            <>
              {" "}into <span className={styles.adsetName}>{adsetName}</span>
            </>
          ) : null}
          .
        </p>

        {failed.length > 0 && (
          <div className={styles.errors}>
            <p className={styles.errorsTitle}>
              {failed.length} ad{failed.length === 1 ? "" : "s"} didn&apos;t
              launch
            </p>
            {reasons.map((r) => (
              <p key={r.msg} className={styles.errorItem}>
                {r.count > 1 ? `${r.count} ads — ` : ""}
                {r.msg}
              </p>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <button className={styles.closeBtn} onClick={onClose}>
            Close
          </button>
          {adIds.length > 0 && (
            <a
              className={styles.viewBtn}
              href={buildAdsManagerLink(adAccountId, adIds)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Facebook
              <IconExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default LaunchResultModal
