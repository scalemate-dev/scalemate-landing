import Image from "next/image"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"
import styles from "../../_components/HowItWorksSection/HowItWorksVisuals.module.scss"

export function ConnectVisual() {
  return (
    <div className={styles.connCard} aria-hidden="true">
      <div className={styles.connHeader}>
        <span className={styles.connHeaderTitle}>Connected Accounts</span>
        <span className={styles.connHeaderBtn}>+ Add Account</span>
      </div>

      <div className={styles.connRows}>
        <div className={`${styles.connRow} ${styles.connRowActive}`}>
          <div className={styles.connRowIcon}>
            <Image src={metaIcon} alt="Meta" width={24} height={24} />
          </div>
          <div className={styles.connRowInfo}>
            <span className={styles.connRowName}>Meta Ads</span>
            <span className={styles.connRowStatus}>
              Connected &middot; 2 ad accounts
            </span>
          </div>
          <div className={styles.connRowCheck}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />
              <path
                d="M8 12.5l2.5 2.5 5.5-5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={styles.connRow}>
          <div className={styles.connRowIcon}>
            <Image src={tiktokIcon} alt="TikTok" width={22} height={22} />
          </div>
          <div className={styles.connRowInfo}>
            <span className={styles.connRowName}>TikTok Ads</span>
            <span className={styles.connRowStatus}>Click to connect</span>
          </div>
        </div>
      </div>
    </div>
  )
}
