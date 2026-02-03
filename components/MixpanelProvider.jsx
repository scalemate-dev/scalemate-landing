"use client"

import { useEffect } from "react"
import { initMixpanel } from "@/helpers/analytics/mixpanel"

export default function MixpanelProvider() {
  useEffect(() => {
    initMixpanel()
  }, [])

  return null
}
