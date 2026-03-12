"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import cn from "classnames"
import { IconChevronDown } from "@tabler/icons-react"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import styles from "./TableOfContents.module.scss"

export default function TableOfContents({ headings }) {
  const pathname = usePathname()
  const articleSlug = pathname.replace("/blog/", "")
  const [activeId, setActiveId] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observers = []
    const ids = headings.map((h) => h.id)

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    })

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observers.push(el)
      }
    })

    return () => {
      observers.forEach((el) => observer.unobserve(el))
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <button
        className={styles.toggle}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.toggleDash} />
        <span className={styles.toggleLabel}>Contents</span>
        <IconChevronDown
          size={14}
          className={cn(styles.chevron, { [styles.chevronOpen]: isOpen })}
        />
      </button>
      <ul className={cn(styles.list, { [styles.listOpen]: isOpen })}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(styles.link, {
                [styles.h3]: heading.level === 3,
                [styles.active]: activeId === heading.id,
              })}
              onClick={(e) => {
                e.preventDefault()
                trackMixpanelEvent(EVENTS.BLOG_TOC_CLICKED, {
                  heading_text: heading.text,
                  article_slug: articleSlug,
                })
                const el = document.getElementById(heading.id)
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                  setActiveId(heading.id)
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
