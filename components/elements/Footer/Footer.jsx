"use client"
import Link from "next/link"

import Container from "@/components/elements/Container/Container"
import TrackedLink from "@/components/elements/TrackedLink/TrackedLink"
import styles from "./Footer.module.scss"
import Logo from "@/components/elements/Logo"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.footerLeft}>
          <Link
            href="/"
            className={styles.footerLogo}
            aria-label="Scalemate Home"
          >
            <Logo />
          </Link>
          <div className={styles.footerTitle}>
            Launch Ads Faster
            <br /> and triple-scale your app
          </div>
          <div className={styles.footerButtons}>
            <TrackedLink
              className={styles.footerButton}
              href="https://www.linkedin.com/company/scalemate"
              target="_blank"
              rel="noopener noreferrer"
              location="footer"
            >
              LinkedIn
            </TrackedLink>
          </div>
          <div className={styles.footerColLink} style={{ paddingTop: 16 }}>
            © Scalemate {new Date().getFullYear()}
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Product</div>

            <Link className={styles.footerColLink} href="/ad-creative-uploader">
              Free Ad Uploader
            </Link>
            <Link className={styles.footerColLink} href="/features/bulk-launch">
              Bulk Ad Launch
            </Link>
            <Link className={styles.footerColLink} href="/ai-assistant">
              Marketing AI Agent
            </Link>
            <Link className={styles.footerColLink} href="/features/automation-rules">
              Automation Rules
            </Link>
            <Link className={styles.footerColLink} href="/customers">
              Customers
            </Link>
            <Link className={styles.footerColLink} href="/blog">
              Blog
            </Link>
            <Link className={styles.footerColLink} href="/pricing">
              Pricing
            </Link>
            <Link className={styles.footerColLink} href="/book-a-demo">
              Book a Demo
            </Link>
            <TrackedLink
              className={styles.footerColLink}
              href="/docs"
              location="footer"
            >
              API documentation
            </TrackedLink>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Use Cases</div>
            <Link
              className={styles.footerColLink}
              href="/use-cases/bulk-ad-launch"
            >
              Launch Ads Faster
            </Link>
            <Link
              className={styles.footerColLink}
              href="/use-cases/automated-creative-upload-meta"
            >
              Automate Creative Uploads
            </Link>
            <Link
              className={styles.footerColLink}
              href="/use-cases/ad-campaign-automation-rules"
            >
              Campaign Automation Rules
            </Link>
            <Link
              className={styles.footerColLink}
              href="/use-cases/scale-ad-campaigns-faster"
            >
              Scale Ad Campaigns Faster
            </Link>

            <div className={styles.footerColTitle} style={{ marginTop: 24 }}>
              Solutions
            </div>
            <Link
              className={styles.footerColLink}
              href="/solutions/media-buyers"
            >
              For Media Buyers
            </Link>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Legal</div>
            <a
              className={styles.footerColLink}
              href="/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer noindex"
            >
              Terms and Conditions
            </a>
            <Link className={styles.footerColLink} href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
