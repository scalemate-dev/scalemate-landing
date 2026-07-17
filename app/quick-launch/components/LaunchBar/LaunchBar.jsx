import {
  IconRocket,
  IconLoader2,
  IconAlertTriangle,
  IconInfoCircle,
} from "@tabler/icons-react"
import cn from "classnames"
import styles from "./LaunchBar.module.scss"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.scalemate.co"

const LaunchBar = ({
  creativeCount,
  pendingCount,
  isActive,
  onToggleActive,
  canLaunch,
  isLaunching,
  isUploading,
  onLaunch,
  launchError,
}) => {
  const signupUrl = `${APP_URL}/create-account`

  const buttonLabel = () => {
    if (isLaunching) return "Launching..."
    if (isUploading || pendingCount > 0) return "Uploading..."
    if (creativeCount > 0) return `Launch ${creativeCount} ad${creativeCount === 1 ? "" : "s"}`
    return "Launch"
  }

  const isDisabled = !canLaunch

  return (
    <div className={styles.bar}>
      <div className={styles.controls}>
        {/* Status switch */}
        <label className={styles.switchLabel}>
          <button
            type="button"
            role="switch"
            aria-checked={isActive}
            className={cn(styles.switch, { [styles.switchOn]: isActive })}
            onClick={() => onToggleActive(!isActive)}
          >
            <span className={styles.switchThumb} />
          </button>
          <span className={cn(styles.switchText, { [styles.switchTextActive]: isActive })}>
            {isActive ? "ACTIVE" : "PAUSED"}
          </span>
        </label>

        {/* Launch button */}
        <button
          className={styles.launchBtn}
          onClick={onLaunch}
          disabled={isDisabled}
        >
          {isLaunching || isUploading ? (
            <IconLoader2 size={16} className={styles.spinner} />
          ) : (
            <IconRocket size={16} />
          )}
          {buttonLabel()}
        </button>
      </div>

      {/* Guest limitations */}
      <div className={styles.guestLimits}>
        <span className={styles.infoTooltip}>
          <IconInfoCircle size={14} />
          <span className={styles.infoTooltipText}>
            Free mode lets you use the ad uploader without creating an account.
            Sign up to unlock all features.
          </span>
        </span>
        <span>Free mode: 10 ads/day · 1 account ·</span>
        <a
          href={signupUrl}
          className={styles.guestLimitsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up for more
        </a>
      </div>

      {/* Error banner (launch results are shown in a modal) */}
      {launchError && (
        <div className={styles.errorBanner}>
          <IconAlertTriangle size={14} />
          <span>{launchError}</span>
        </div>
      )}
    </div>
  )
}

export default LaunchBar
