"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"

const THRESHOLDS = [25, 50, 75, 100]

export function useScrollDepth() {
  const pathname = usePathname()
  const reachedRef = useRef(new Set())

  // Reset on route change
  useEffect(() => {
    reachedRef.current = new Set()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return

      const percent = Math.round((window.scrollY / scrollHeight) * 100)

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !reachedRef.current.has(threshold)) {
          reachedRef.current.add(threshold)
          trackMixpanelEvent(EVENTS.SCROLL_DEPTH_REACHED, {
            depth: threshold,
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])
}
