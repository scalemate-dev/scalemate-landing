"use client"
import cn from "classnames"
import Container from "../Container/Container"
import Sparkles from "@/assets/icons/sparkles.inline.svg"
import Fork from "@/assets/icons/fork.inline.svg"
import NavDropdown from "../NavDropdown/NavDropdown"
import Link from "next/link"
import Logo from "@/components/elements/Logo"
import Button from "@/components/elements/Button/Button"
import styles from "./Header.module.scss"
import Icon from "@/components/elements/Icon/Icon"
import { useState, useEffect } from "react"
import { IconCloud, IconBoltFilled } from "@tabler/icons-react"

import { usePathname } from "next/navigation"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  const darkTheme = pathname.includes("assistant")

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const solutions = [
    {
      label: "Marketing AI Agent",
      description: "Next-gen AI for Ad management",
      icon: (
        <Icon style={{ background: "#fae6ff" }}>
          <Sparkles stroke="#9f4bfe" height={16} width={16} />
        </Icon>
      ),
      path: "/ai-assistant",
      new: true,
    },
    {
      label: "Launch",
      description: "Quickly set up multiple ad sets and ads.",
      icon: (
        <Icon style={{ backgroundColor: "#FFFAEB" }}>
          <IconBoltFilled color="#FEC84B" size={16} />
        </Icon>
      ),
      path: "/launch",
    },

    // {
    //   label: "Cloud sync",
    //   description: "Upload your ad creatives in one click.",
    //   icon: (
    //     <Icon style={{ backgroundColor: "#EDF2FF" }}>
    //       <IconCloud color="#40C057" size={16} />
    //     </Icon>
    //   ),
    //   path: "/cloud-sync",
    //   disabled: true,
    // },
    // {
    //   label: "Rules",
    //   description: "Create and apply rules to your ads.",
    //   icon: (
    //     <Icon style={{ backgroundColor: "#E7FCF5" }}>
    //       <Fork color="#8E44AD" />
    //     </Icon>
    //   ),
    //   path: "/rules",
    //   disabled: true,
    // },
  ]

  return (
    <header className={cn(styles.header, { [styles.darkTheme]: darkTheme })}>
      <Container className={styles.container}>
        <div className={styles.headerNavigation}>
          <Link href="/" className={styles.headerLogo}>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.linksWrapper}>
            <NavDropdown
              items={solutions}
              label="Product"
              darkTheme={darkTheme}
              onLinkClick={() => setMobileMenuOpen(false)}
            />
            <Link href="/customers" className={styles.navLink}>
              Customers
            </Link>
            <Link href="/docs" className={styles.navLink}>
              API
            </Link>
            {/* <Link href="/pricing" className={styles.navLink}>
              Pricing
            </Link> */}
          </div>
        </div>
        <Button
          outline
          href="/book-a-demo"
          className={styles.desktopButton}
          darkTheme={darkTheme}
        >
          Get started
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.burgerButton} ${
            mobileMenuOpen ? styles.active : ""
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(styles.mobileDrawer, {
          [styles.open]: mobileMenuOpen,
          [styles.darkTheme]: darkTheme,
        })}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={styles.mobileDrawerContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.closeButton}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <span></span>
            <span></span>
          </button>
          <div className={styles.mobileLinks}>
            <NavDropdown
              items={solutions}
              label="Product"
              inline={true}
              onLinkClick={() => setMobileMenuOpen(false)}
              darkTheme={darkTheme}
            />
            <Link
              href="/customers"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Customers
            </Link>
            <Link
              href="/docs"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            {/* <Link
              href="/pricing"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link> */}
            <Link
              href="/book-a-demo?plan=custom"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
            <Button
              outline
              href="/book-a-demo"
              className={styles.mobileButton}
              darkTheme={darkTheme}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
