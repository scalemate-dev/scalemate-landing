"use client"

import { useEffect, useState } from "react"
import { GoogleTagManager } from "@next/third-parties/google"

// Only load GTM/GA on real production hosts. Keeps localhost and Vercel
// preview deployments (*.vercel.app) out of Analytics so the data stays clean.
const PROD_HOSTS = ["scalemate.co", "www.scalemate.co"]

export default function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (PROD_HOSTS.includes(window.location.hostname)) {
      setEnabled(true)
    }
  }, [])

  if (!enabled || !process.env.NEXT_PUBLIC_GTM_ID) return null

  return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
}
