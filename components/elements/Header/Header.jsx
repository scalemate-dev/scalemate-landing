"use client"
import cn from "classnames"
import Container from "../Container/Container"
import Sparkles from "@/assets/icons/sparkles.inline.svg"
import NavDropdown from "../NavDropdown/NavDropdown"
import Link from "next/link"
import Logo from "@/components/elements/Logo"
import Button from "@/components/elements/Button/Button"
import styles from "./Header.module.scss"
import Icon from "@/components/elements/Icon/Icon"
import { useState, useEffect } from "react"
import {
  IconBoltFilled,
  IconRocket,
  IconCloudUpload,
  IconTrendingUp,
  IconSettingsAutomation,
  IconCode,
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"

const SOLUTIONS = [
  {
    label: "Ad Uploader",
    description: "Upload ad creatives from Google Drive to Meta and Tiktok",
    icon: (
      <Icon style={{ backgroundColor: "#E6FCF5" }}>
        <IconCloudUpload color="#12B886" size={16} />
      </Icon>
    ),
    path: "/ad-creative-uploader",
    new: true,
  },
  {
    label: "Bulk Ad Launch",
    description: "Launch hundreds of ads from templates in minutes",
    icon: (
      <Icon style={{ backgroundColor: "#FFFAEB" }}>
        <IconBoltFilled color="#FEC84B" size={16} />
      </Icon>
    ),
    path: "/features/bulk-launch",
  },
  {
    label: "Marketing AI Agent",
    description: "Next-gen AI for Ad management",
    icon: (
      <Icon style={{ background: "#fae6ff" }}>
        <Sparkles stroke="#9f4bfe" height={16} width={16} />
      </Icon>
    ),
    path: "/ai-assistant",
  },
  {
    label: "Automation Rules",
    description: "Automate your ad management with smart rules",
    icon: (
      <Icon style={{ backgroundColor: "#FEF3C7" }}>
        <IconSettingsAutomation color="#F59E0B" size={16} />
      </Icon>
    ),
    path: "/features/automation-rules",
  },
  {
    label: "API",
    description: "Integrate Scalemate into your workflow",
    icon: (
      <Icon style={{ backgroundColor: "#F3F0FF" }}>
        <IconCode color="#7C3AED" size={16} />
      </Icon>
    ),
    path: "/docs",
  },
]

const USE_CASES = [
  {
    label: "Launch Ads Faster",
    description: "Set up and launch bulk ad campaigns in minutes",
    icon: (
      <Icon style={{ backgroundColor: "#FFF4E6" }}>
        <IconRocket color="#F76707" size={16} />
      </Icon>
    ),
    path: "/use-cases/bulk-ad-launch",
  },
  {
    label: "Automate Creative Uploads",
    description: "Upload ad creatives to Meta automatically",
    icon: (
      <Icon style={{ backgroundColor: "#E6FCF5" }}>
        <IconCloudUpload color="#12B886" size={16} />
      </Icon>
    ),
    path: "/use-cases/automated-creative-upload-meta",
  },
  {
    label: "Campaign Automation Rules",
    description: "Create rules to automate your ad management",
    icon: (
      <Icon style={{ backgroundColor: "#F3E8FF" }}>
        <IconSettingsAutomation color="#7C3AED" size={16} />
      </Icon>
    ),
    path: "/use-cases/ad-campaign-automation-rules",
  },
  {
    label: "Scale Campaigns Faster",
    description: "Scale winning ads before they burn out",
    icon: (
      <Icon style={{ backgroundColor: "#EDF2FF" }}>
        <IconTrendingUp color="#4C6EF5" size={16} />
      </Icon>
    ),
    path: "/use-cases/scale-ad-campaigns-faster",
  },
]

const NAV_LINKS = [
  { href: "/customers", label: "Customers" },
  { href: "/pricing", label: "Pricing" },
]

const MOBILE_EXTRA_LINKS = [{ href: "/book-a-demo", label: "Book a Demo" }]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const darkTheme = pathname.includes("assistant")

  const closeMobile = () => setMobileMenuOpen(false)

  const trackNavClick = (label, path) => {
    trackMixpanelEvent(EVENTS.NAV_ITEM_CLICKED, {
      nav_label: label,
      nav_path: path,
    })
  }

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

  return (
    <header className={cn(styles.header, { [styles.darkTheme]: darkTheme })}>
      <Container className={styles.container}>
        <div className={styles.headerNavigation}>
          <Link
            href="/"
            className={styles.headerLogo}
            aria-label="Scalemate Home"
          >
            <Logo className={styles.logo} />
          </Link>
          <nav className={styles.linksWrapper} aria-label="Main navigation">
            <NavDropdown
              items={SOLUTIONS}
              label="Product"
              darkTheme={darkTheme}
            />
            <NavDropdown
              items={USE_CASES}
              label="Use cases"
              darkTheme={darkTheme}
            />
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={styles.navLink}
                onClick={() => trackNavClick(label, href)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Button
          outline
          href="https://app.scalemate.co/create-account"
          className={styles.desktopButton}
          darkTheme={darkTheme}
          trackEvent="cta_clicked"
          trackProps={{ cta_location: "header" }}
        >
          Try for free
        </Button>

        <button
          className={cn(styles.burgerButton, {
            [styles.active]: mobileMenuOpen,
          })}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <div
        className={cn(styles.mobileDrawer, {
          [styles.open]: mobileMenuOpen,
          [styles.darkTheme]: darkTheme,
        })}
        onClick={closeMobile}
      >
        <div
          className={styles.mobileDrawerContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.closeButton}
            onClick={closeMobile}
            aria-label="Close mobile menu"
          >
            <span />
            <span />
          </button>
          <nav className={styles.mobileLinks} aria-label="Mobile navigation">
            <NavDropdown
              items={SOLUTIONS}
              label="Product"
              inline
              onLinkClick={closeMobile}
              darkTheme={darkTheme}
            />
            <NavDropdown
              items={USE_CASES}
              label="Use cases"
              inline
              onLinkClick={closeMobile}
              darkTheme={darkTheme}
            />
            {[...NAV_LINKS, ...MOBILE_EXTRA_LINKS].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={styles.mobileNavLink}
                onClick={() => {
                  trackNavClick(label, href)
                  closeMobile()
                }}
              >
                {label}
              </Link>
            ))}
            <Button
              outline
              href="/book-a-demo"
              className={styles.mobileButton}
              darkTheme={darkTheme}
              onClick={closeMobile}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
