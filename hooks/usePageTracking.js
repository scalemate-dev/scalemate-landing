"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import {
  trackMixpanelEvent,
  registerMixpanelSuperPropertiesOnce,
} from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import {
  getPageName,
  getPageCategory,
  extractUtmParams,
} from "@/helpers/analytics/mixpanel.utils"

export const usePageTracking = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstRender = useRef(true)

  useEffect(() => {
    const pageName = getPageName(pathname)
    const pageCategory = getPageCategory(pathname)
    const utmParams = extractUtmParams(searchParams)

    if (isFirstRender.current) {
      const onceProps = {
        first_visit_page: pageName,
        first_visit_path: pathname,
      }
      if (Object.keys(utmParams).length > 0) {
        onceProps.first_utm_source = utmParams.utm_source || ""
        onceProps.first_utm_medium = utmParams.utm_medium || ""
        onceProps.first_utm_campaign = utmParams.utm_campaign || ""
      }
      registerMixpanelSuperPropertiesOnce(onceProps)
      isFirstRender.current = false
    }

    if (pathname === "/pricing") {
      registerMixpanelSuperPropertiesOnce({ visited_pricing: true })
    }
    if (pathname === "/book-a-demo") {
      registerMixpanelSuperPropertiesOnce({ visited_demo_page: true })
    }

    trackMixpanelEvent(EVENTS.PAGE_VIEWED, {
      page_name: pageName,
      page_path: pathname,
      page_category: pageCategory,
      ...utmParams,
    })
  }, [pathname, searchParams])
}
