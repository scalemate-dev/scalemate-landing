"use client"
import { IconChevronDown } from "@tabler/icons-react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import cn from "classnames"
import styles from "./NavDropdown.module.scss"

const NavDropdown = ({
  label,
  items = [],
  inline = false,
  onLinkClick,
  darkTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const renderNavItem = (item) => {
    return (
      <>
        {item.icon ? item.icon : null}
        <div>
          <p className={styles.itemLabel}>{item.label}</p>
          <p className={styles.itemDescription}>{item.description}</p>
        </div>
        {item.new ? <div className={styles.new}>New</div> : null}
      </>
    )
  }

  // Handle dropdown toggle on click
  const handleToggleClick = () => {
    setIsOpen(!isOpen)
  }

  // Handle mouse enter for desktop dropdown
  const handleMouseEnter = () => {
    if (!inline) {
      setIsOpen(true)
    }
  }

  // Handle mouse leave for desktop dropdown
  const handleMouseLeave = () => {
    if (!inline) {
      setIsOpen(false)
    }
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    if (onLinkClick) {
      onLinkClick()
    }
  }

  return (
    <nav
      ref={dropdownRef}
      className={cn(styles.navDropdown, {
        [styles.inlineDropdown]: inline,
        [styles.darkTheme]: darkTheme,
      })}
      onMouseEnter={handleMouseEnter}
    >
      <div className={styles.label} onClick={handleToggleClick}>
        {label}
        <IconChevronDown size={16} />
      </div>
      <div
        onMouseLeave={handleMouseLeave}
        className={cn(styles.list, {
          [styles.visible]: isOpen,
          [styles.inlineList]: inline,
        })}
      >
        {items.map((item) => {
          if (item.disabled) {
            return (
              <span
                key={item.path}
                className={styles.item}
                data-disabled="true"
              >
                {renderNavItem(item)}
              </span>
            )
          }
          return (
            <Link
              key={item.path}
              href={item.path}
              className={styles.item}
              data-disabled={item.disabled ? "true" : "false"}
              onClick={handleLinkClick}
            >
              {renderNavItem(item)}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavDropdown
