"use client"

import { useEffect, Suspense } from "react"
import { initMixpanel } from "@/helpers/analytics/mixpanel"
import { usePageTracking } from "@/hooks/usePageTracking"
import { useScrollDepth } from "@/hooks/useScrollDepth"

function PageTracker() {
  usePageTracking()
  useScrollDepth()
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
