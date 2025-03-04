"use client"
import Link from "next/link"

import Container from "@/components/elements/Container/Container"
import styles from "./Footer.module.scss"
import Logo from "@/components/elements/Logo"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <Logo />
          </div>
          <div className={styles.footerTitle}>
            Launch Ads Faster
            <br /> and triple-scale your app
          </div>
          <div className={styles.footerButtons}>
            <a
              className={styles.footerButton}
              href="https://www.linkedin.com/company/scalemate"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.footerColLink} style={{ paddingTop: 16 }}>
            © Scalemate 2025
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Product</div>
            <Link className={styles.footerColLink} href="/customers">
              Customers
            </Link>
            <Link className={styles.footerColLink} href="/launch">
              Launch
            </Link>
            <Link className={styles.footerColLink} href="/assistant">
              Performance AI Agent
            </Link>
            <Link className={styles.footerColLink} href="/book-a-demo">
              Book a Demo
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
            <a
              className={styles.footerColLink}
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer noindex"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
