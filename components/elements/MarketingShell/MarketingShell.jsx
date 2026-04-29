"use client"

import { usePathname } from "next/navigation"

const BARE_ROUTES = [
  "/ad-creative-uploader/get-started",
  "/lp",
  "/pitch",
  "/thumbnails",
]

export default function MarketingShell({ children }) {
  const pathname = usePathname()
  const isBare = BARE_ROUTES.some((route) => pathname.startsWith(route))

  if (isBare) return null
  return children
}
