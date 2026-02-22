"use client"
import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import Link from "next/link"
import cn from "classnames"
import styles from "./NavDropdown.module.scss"

const NavDropdown = ({ label, items = [], inline = false, onLinkClick, darkTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
    onLinkClick?.()
  }

  return (
    <div
      className={cn(styles.navDropdown, {
        [styles.inlineDropdown]: inline,
        [styles.darkTheme]: darkTheme,
      })}
    >
      <button
        className={styles.label}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <IconChevronDown size={16} />
      </button>
      <div
        className={cn(styles.list, {
          [styles.visible]: inline && isOpen,
        })}
        role="menu"
        aria-label={label}
      >
        {items.map((item) =>
          item.disabled ? (
            <span key={item.path} className={styles.item} role="menuitem" data-disabled="true" aria-disabled="true">
              <NavItem item={item} />
            </span>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              className={styles.item}
              role="menuitem"
              onClick={handleLinkClick}
            >
              <NavItem item={item} />
            </Link>
          )
        )}
      </div>
    </div>
  )
}

const NavItem = ({ item }) => (
  <>
    {item.icon}
    <div>
      <p className={styles.itemLabel}>{item.label}</p>
      <p className={styles.itemDescription}>{item.description}</p>
    </div>
    {item.new && <div className={styles.new}>New</div>}
  </>
)

export default NavDropdown
