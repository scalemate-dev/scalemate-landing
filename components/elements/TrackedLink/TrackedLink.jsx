"use client"

import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"

const TrackedLink = ({ href, children, className, location, ...props }) => {
  const handleClick = () => {
    trackMixpanelEvent(EVENTS.OUTBOUND_LINK_CLICKED, {
      link_url: href,
      link_text: typeof children === "string" ? children : undefined,
      link_location: location,
    })
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default TrackedLink
