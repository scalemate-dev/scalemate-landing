"use client"

import { useEffect, Suspense } from "react"
import { initMixpanel } from "@/helpers/analytics/mixpanel"
import { usePageTracking } from "@/hooks/usePageTracking"

function PageTracker() {
  usePageTracking()
  return null
}

export default function MixpanelProvider() {
  useEffect(() => {
    initMixpanel()
  }, [])

  return (
    <Suspense fallback={null}>
      <PageTracker />
    </Suspense>
  )
}
