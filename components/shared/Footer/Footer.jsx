"use client"

import Image from "next/image"
import Container from "../../shared/Container/Container"
import styles from "./Footer.module.scss"
import Logo from "@/components/shared/Logo"
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
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerCol}>
            {/* Product section commented out as in original */}
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Legal</div>
            <a
              className={styles.footerColLink}
              href="/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            <a
              className={styles.footerColLink}
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
