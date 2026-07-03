"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import {
  IconCheck,
  IconSearch,
  IconSelector,
  IconLoader2,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react"
import cn from "classnames"
import styles from "./Combobox.module.scss"

/**
 * Searchable combobox (web-client style: trigger button + popover with
 * search input, check mark on selected item, optional badges/thumbnails).
 *
 * Option shape: { id, name, badge?, thumbnailUrl?, mediaType?, meta? }
 */
const Combobox = ({
  options = [],
  value = "",
  onSelect,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  disabled = false,
  loading = false,
  loadingText = "Loading...",
  emptyText = "No results.",
  error = null,
  direction = "down",
  showThumbs = false,
}) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const rootRef = useRef(null)
  const searchRef = useRef(null)

  const selected = options.find((o) => o.id === value) || null

  useEffect(() => {
    const handleClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery("")
      // Focus search after popover mounts
      requestAnimationFrame(() => searchRef.current?.focus())
    }
  }, [open])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return options
    return options.filter((o) => o.name?.toLowerCase().includes(q))
  }, [options, query])

  const renderThumb = (option) => {
    if (!showThumbs) return null
    if (option.thumbnailUrl) {
      return (
        <img
          src={option.thumbnailUrl}
          alt={option.name}
          className={styles.thumb}
        />
      )
    }
    return (
      <span className={styles.thumbPlaceholder}>
        {option.mediaType === "video" ? (
          <IconVideo size={14} />
        ) : (
          <IconPhoto size={14} />
        )}
      </span>
    )
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={cn(styles.trigger, {
          [styles.open]: open,
          [styles.hasThumb]: showThumbs && selected,
        })}
        onClick={() => !disabled && setOpen((v) => !v)}
        disabled={disabled}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {loading && !selected ? (
          <span className={styles.placeholder}>
            <IconLoader2 size={14} className={styles.spinner} />
            {loadingText}
          </span>
        ) : selected ? (
          <span className={styles.value}>
            {renderThumb(selected)}
            <span className={styles.valueName}>{selected.name}</span>
          </span>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        <IconSelector size={14} className={styles.chevron} />
      </button>

      {open && (
        <div
          className={cn(styles.popover, {
            [styles.popoverUp]: direction === "up",
          })}
        >
          <div className={styles.search}>
            <IconSearch size={14} className={styles.searchIcon} />
            <input
              ref={searchRef}
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false)
                if (e.key === "Enter" && filtered.length === 1) {
                  onSelect(filtered[0])
                  setOpen(false)
                }
              }}
            />
          </div>

          <div className={styles.list} role="listbox">
            {loading ? (
              <div className={styles.empty}>
                <IconLoader2 size={14} className={styles.spinner} />
                {loadingText}
              </div>
            ) : error ? (
              <div className={cn(styles.empty, styles.error)}>{error}</div>
            ) : filtered.length === 0 ? (
              <div className={styles.empty}>
                {query ? "Nothing found." : emptyText}
              </div>
            ) : (
              filtered.map((option) => (
                <button
                  type="button"
                  key={option.id}
                  className={cn(styles.item, {
                    [styles.selected]: option.id === value,
                  })}
                  role="option"
                  aria-selected={option.id === value}
                  onClick={() => {
                    onSelect(option)
                    setOpen(false)
                  }}
                >
                  <IconCheck
                    size={14}
                    className={cn(styles.check, {
                      [styles.checkVisible]: option.id === value,
                    })}
                  />
                  {renderThumb(option)}
                  <span className={styles.itemInfo}>
                    <span className={styles.itemName}>{option.name}</span>
                    {option.meta && (
                      <span className={styles.itemMeta}>{option.meta}</span>
                    )}
                  </span>
                  {option.badge && (
                    <span className={styles.badge}>{option.badge}</span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Combobox
