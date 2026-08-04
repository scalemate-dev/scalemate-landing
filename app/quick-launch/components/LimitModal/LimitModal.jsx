"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import { IconRocket, IconArrowRight, IconCheck } from "@tabler/icons-react"
import styles from "./LimitModal.module.scss"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.scalemate.co"

const PERKS = [
  "More ad launches",
  "Multiple ad accounts",
  "Bulk launch from templates",
]

const LimitModal = ({ open, message, onClose }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Free limit reached"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.iconWrap}>
          <IconRocket size={24} />
        </div>

        <h3 className={styles.title}>You&apos;ve hit the free limit</h3>
        <p className={styles.description}>
          {message || "Free mode is limited to 5 ads per day."} Create a free
          Scalemate account.
        </p>

        <ul className={styles.perks}>
          {PERKS.map((perk) => (
            <li key={perk} className={styles.perk}>
              <IconCheck size={14} className={styles.perkIcon} />
              {perk}
            </li>
          ))}
        </ul>

        <a
          className={styles.ctaBtn}
          href={`${APP_URL}/create-account`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue in Scalemate
          <IconArrowRight size={16} />
        </a>

        <button className={styles.closeBtn} onClick={onClose}>
          Maybe later
        </button>
      </div>
    </div>,
    document.body
  )
}

export default LimitModal
