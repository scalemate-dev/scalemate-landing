"use client"
import Container from "../Container/Container"
import Bolt from "@/assets/icons/bolt.inline.svg"
import Cloud from "@/assets/icons/cloud.inline.svg"
import Fork from "@/assets/icons/fork.inline.svg"
import NavDropdown from "../NavDropdown/NavDropdown"
import Link from "next/link"
import Logo from "@/components/elements/Logo"
import Button from "@/components/elements/Button/Button"
import styles from "./Header.module.scss"
import Icon from "@/components/elements/Icon/Icon"
import { useState, useEffect } from "react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      label: "Launch",
      description: "Quickly set up multiple ad sets and ads.",
      icon: (
        <Icon style={{ backgroundColor: "#FFFAEB" }}>
          <Bolt color="#FEC84B" height={16} width={16} />
        </Icon>
      ),
      path: "/launch",
    },
    {
      label: "Cloud sync",
      description: "Upload your ad creatives in one click.",
      icon: (
        <Icon style={{ backgroundColor: "#EDF2FF" }}>
          <Cloud color="#40C057" />
        </Icon>
      ),
      path: "/cloud-sync",
      disabled: true,
    },
    {
      label: "Rules",
      description: "Create and apply rules to your ads.",
      icon: (
        <Icon style={{ backgroundColor: "#E7FCF5" }}>
          <Fork color="#8E44AD" />
        </Icon>
      ),
      path: "/rules",
      disabled: true,
    },
  ]

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.headerNavigation}>
          <Link href="/" className={styles.headerLogo}>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.linksWrapper}>
            <NavDropdown items={solutions} label="Product" />
            <Link href="/case-study" className={styles.navLink}>
              Case Study
            </Link>
          </div>
          {/* <NavDropdown items={solutions} label="Integrations" /> */}
        </div>
        <Button outline href="/book-a-demo" className={styles.desktopButton}>
          Get Started
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
        className={`${styles.mobileDrawer} ${
          mobileMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.mobileDrawerContent}>
          <div className={styles.mobileLinks}>
            <NavDropdown
              items={solutions}
              label="Product"
              inline={true}
              onLinkClick={() => setMobileMenuOpen(false)}
            />
            <Link
              href="/case-study"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Study
            </Link>
            <Button
              outline
              href="/book-a-demo"
              className={styles.mobileButton}
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
