"use client"

import Button from "@/components/elements/Button/Button"

// Keeps a real in-page anchor (<a href="#id">) for crawlers + semantics, then
// enhances it with a JS smooth-scroll. The native hash jump only fires once —
// an unchanged #hash is a no-op on the second click — so preventDefault +
// scrollTo makes every click re-scroll while the href stays in the markup.
export default function ScrollToButton({ targetId, offset = 80, ...props }) {
  const handleClick = (e) => {
    if (typeof document === "undefined") return
    const el = document.getElementById(targetId)
    if (!el) return
    e.preventDefault()
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return <Button href={`#${targetId}`} {...props} onClick={handleClick} />
}
