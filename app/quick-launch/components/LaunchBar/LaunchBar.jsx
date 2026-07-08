import { IconRocket, IconLoader2 } from "@tabler/icons-react"
import cn from "classnames"
import styles from "./LaunchBar.module.scss"

const LaunchBar = ({
  creativeCount,
  pendingCount,
  isActive,
  onToggleActive,
  canLaunch,
  isLaunching,
  isUploading,
  onLaunch,
}) => {
  const buttonLabel = () => {
    if (isLaunching) return "Launching..."
    if (isUploading || pendingCount > 0) return "Uploading..."
    if (creativeCount > 0) return `Launch ${creativeCount} ad${creativeCount === 1 ? "" : "s"}`
    return "Launch"
  }

  const isDisabled = !canLaunch

  return (
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
  )
}

export default LaunchBar
