"use client"

import { guestSessionApi } from "@/lib/api/guestSession"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import styles from "./SignupCta.module.scss"

const SignupCta = () => {
  const signupUrl = guestSessionApi.getAppRedirectUrl()

  return (
    <div className={styles.ctaBlock}>
      <p className={styles.ctaTitle}>Create a free account to:</p>
      <ul className={styles.ctaBenefits}>
        <li>No daily upload limits</li>
        <li>Multiple ad accounts</li>
        <li>Build & Launch ad campaigns</li>
        <li>Persistent platform connections</li>
      </ul>
      <a
        href={signupUrl}
        className={styles.ctaButton}
        onClick={() => {
          trackMixpanelEvent(EVENTS.UPLOADER_SIGNUP_CTA_CLICKED, {
            cta_location: "upload_sidebar",
          })
        }}
      >
        Create Free Account
      </a>
    </div>
  )
}

export default SignupCta
