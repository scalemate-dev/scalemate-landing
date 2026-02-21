import Image from "next/image"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-white-icon.svg"
import styles from "../HowItWorksSection.module.scss"

const ACCOUNTS = [
  {
    id: "meta",
    name: "Meta Ads",
    color: "#fff",
    border: "1px solid #1877F2",
    icon: metaIcon,
    connected: true,
    status: "Connected • 2 ad accounts",
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    color: "#000",
    icon: tiktokIcon,
    connected: false,
    status: "Click to connect",
  },
]

export default function ConnectScreen() {
  return (
    <div className={styles.connectScreen}>
      <div className={styles.connectHeader}>
        <h4>Connected Accounts</h4>
        <button className={styles.addBtn}>+ Add Account</button>
      </div>
      <div className={styles.accountsList}>
        {ACCOUNTS.map((account) => (
          <AccountCard key={account.id} {...account} />
        ))}
      </div>
    </div>
  )
}

function AccountCard({ name, color, border, icon, connected, status }) {
  return (
    <div className={`${styles.accountCard} ${connected ? styles.connected : ""}`}>
      <div className={styles.accountIcon} style={{ background: color, border }}>
        <Image src={icon} alt="" width={20} height={20} />
      </div>
      <div className={styles.accountInfo}>
        <span className={styles.accountName}>{name}</span>
        <span className={styles.accountStatus}>{status}</span>
      </div>
      {connected && <div className={styles.accountCheck}>✓</div>}
    </div>
  )
}
