"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import styles from "./page.module.scss"

function CallbackHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.opener) return

    const params = Object.fromEntries(searchParams.entries())
    window.opener.postMessage(
      { type: "oauth_callback", provider: "tiktok", ...params },
      window.location.origin
    )
  }, [searchParams])

  return null
}

export default function TikTokCallbackPage() {

  return (
    <div className={styles.container}>
      <Suspense>
        <CallbackHandler />
      </Suspense>
      <div className={styles.card}>
        <div className={styles.success}>✓</div>
        <h2>Authorization Complete</h2>
        <p>This window will close automatically...</p>
      </div>
    </div>
  )
}
