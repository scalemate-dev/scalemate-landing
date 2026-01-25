"use client"

import styles from "./page.module.scss"

/**
 * TikTok OAuth callback page.
 *
 * With popup-based OAuth, the parent window polls this page's URL
 * to detect when the redirect has happened and parse the query params.
 * This page just shows a brief message before the popup closes automatically.
 */
export default function TikTokCallbackPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.success}>✓</div>
        <h2>Authorization Complete</h2>
        <p>This window will close automatically...</p>
      </div>
    </div>
  )
}
