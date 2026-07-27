import styles from "./CloudSyncPanel.module.scss"

// Connected folders panel — matches the card aesthetic of RuleEngine /
// PipelineFlow (white card, soft shadow, status pills, staggered entrance).
// Reads as "your Drive folders are wired in and syncing — you don't lift
// a finger."

const FOLDERS = [
  { name: "Creative_holidays" },
  { name: "Creatives_facebook 1" },
  { name: "Google_creative_folder" },
]

const FolderIcon = () => (
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
    <path
      d="M2 4a2 2 0 0 1 2-2h5l2 2.5h7a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
)

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M3 6.2 5.2 8.4 9.4 3.6"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CursorIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
    <path
      d="M2 1.5 13.5 11l-5.5.8 3 6.4-2.3 1L5.7 12.8l-3.7 3.4V1.5Z"
      fill="#1a1614"
      stroke="white"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
)

export default function CloudSyncPanel() {
  return (
    <div className={styles.panel} aria-hidden="true">
      <div className={styles.card}>
        <header className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Connected folders</h3>
          <div className={styles.connectButtonWrap}>
            <button type="button" className={styles.connectButton}>
              Connect
            </button>
            <span className={styles.cursor}>
              <CursorIcon />
            </span>
          </div>
        </header>

        <ul className={styles.folderList}>
          {FOLDERS.map((folder, i) => (
            <li
              key={folder.name}
              className={styles.folderRow}
              style={{ animationDelay: `${0.25 + i * 0.12}s` }}
            >
              <span className={styles.folderIcon}>
                <FolderIcon />
              </span>
              <span className={styles.folderName}>{folder.name}</span>
              <span className={styles.syncedBadge}>
                <span className={styles.syncedDot}>
                  <CheckIcon />
                </span>
                <span className={styles.syncedLabel}>Synced</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
