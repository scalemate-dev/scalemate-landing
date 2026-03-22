"use client"

import { usePathname } from "next/navigation"

const BARE_ROUTES = [
  "/ad-creative-uploader/get-started/quiz/results",
]

export default function LayoutChrome({ children }) {
  const pathname = usePathname()
  const isBare = BARE_ROUTES.some((route) => pathname.startsWith(route))

  if (isBare) return null
  return children
}
