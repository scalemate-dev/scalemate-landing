import Image from "next/image"
import {
  IconCheck,
  IconCloudUpload,
  IconArrowRight,
  IconAlertCircle,
  IconLoader2,
  IconX,
  IconInfoCircle,
} from "@tabler/icons-react"
import cn from "classnames"
import tiktokWhiteIcon from "@/assets/icons/tiktok-white-icon.svg"
import tiktokBlackIcon from "@/assets/icons/tiktok-icon.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import { guestSessionApi } from "@/lib/api/guestSession"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import FileIcon from "../FileIcon/FileIcon"
import styles from "./UploaderWidget.module.scss"

const PLATFORM_CONFIG = {
  tiktok: { icon: tiktokBlackIcon, name: "TikTok Ads" },
  facebook: { icon: metaIcon, name: "Meta Ads" },
}

const PlatformAccounts = ({
  platform,
  accounts,
  selectedAccountId,
  onSelect,
}) => {
  const config = PLATFORM_CONFIG[platform]
  if (!config || !accounts.length) return null

  return (
    <div className={styles.platformGroup}>
      <div className={styles.platformHeader}>
        <div className={cn(styles.platformIcon, styles[platform])}>
          <Image src={config.icon} alt="" width={24} height={24} />
        </div>
        <span className={styles.platformName}>{config.name}</span>
      </div>
      <div className={styles.accountsList}>
        {accounts.map((account) => (
          <button
            key={account.id}
            className={cn(styles.accountItem, {
              [styles.selected]: selectedAccountId === account.id,
            })}
            onClick={() => onSelect(account.id)}
          >
            <div className={styles.checkbox}>
              {selectedAccountId === account.id && <IconCheck size={12} />}
            </div>
            <div className={styles.accountInfo}>
              <div className={styles.accountName}>{account.name}</div>
              <div className={styles.accountId}>{account.id}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

const FormView = ({
  error,
  uploadError,
  hasFiles,
  pickerFiles,
  openPicker,
  isPickerOpen,
  clearFiles,
  removeFile,
  canUpload,
  selectedAccountId,
  isConnected,
  connectedPlatform,
  adAccounts,
  selectAccount,
  onDisconnect,
  onTikTokConnect,
  onFacebookConnect,
  isTikTokConnecting,
  isSessionLoading,
  isFacebookConnecting,
  isStarting,
  onUpload,
}) => {
  return (
    <>
      {(error || uploadError) && (
        <div className={styles.errorBanner}>
          <IconAlertCircle size={16} />
          <span>{error || uploadError}</span>
        </div>
      )}

      {pickerFiles.some((f) => f.rejected) && (
        <div className={styles.warningBanner}>
          <IconAlertCircle size={16} />
          <span>
            Some files have unsupported format. Accepted formats: JPG, PNG,
            MP4.
          </span>
        </div>
      )}

      <div className={styles.content}>
        {/* Left Column - File Selection */}
        <div className={styles.filesSection}>
          <div className={styles.sectionHeader}>
            <div
              className={cn(styles.stepBadge, {
                [styles.completed]: hasFiles,
              })}
            >
              {hasFiles ? <IconCheck size={14} /> : "1"}
            </div>
            <span className={styles.sectionTitle}>Choose files</span>
          </div>

          <button
            className={cn(styles.dropzone, { [styles.hasFiles]: hasFiles })}
            onClick={openPicker}
            disabled={isPickerOpen}
          >
            <div className={styles.dropzoneIcon}>
              <Image src={googleDriveIcon} alt="" width={32} height={32} />
            </div>
            <span className={styles.dropzoneText}>
              {hasFiles
                ? `${pickerFiles.length} files selected`
                : "Browse Google Drive"}
            </span>
            <span className={styles.dropzoneHint}>
              Accepted formats: jpg, png, mp4
            </span>
          </button>

          {pickerFiles.length > 0 && (
            <div className={styles.fileList}>
              <div className={styles.fileListHeader}>
                <span className={styles.fileCount}>
                  {pickerFiles.filter((f) => !f.rejected).length} of{" "}
                  {pickerFiles.length} files accepted
                </span>
                <button className={styles.clearBtn} onClick={clearFiles}>
                  Remove all
                </button>
              </div>
              <div className={styles.files}>
                {pickerFiles.map((file, index) => (
                  <div
                    key={file.id}
                    className={cn(styles.fileItem, {
                      [styles.fileItemRejected]: file.rejected,
                    })}
                  >
                    <FileIcon fileName={file.name} size={18} />
                    <div className={styles.fileInfo}>
                      <span className={styles.fileName}>{file.name}</span>
                      {file.rejected && (
                        <span className={styles.fileError}>
                          Unsupported file format
                        </span>
                      )}
                    </div>
                    <button
                      className={styles.fileRemove}
                      onClick={() => removeFile(index)}
                    >
                      <IconX size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center Divider */}
        <div className={styles.divider}>
          <div
            className={cn(styles.arrowCircle, { [styles.ready]: canUpload })}
          >
            <IconArrowRight size={20} />
          </div>
          <span className={styles.arrowLabel}>{canUpload ? "Ready" : ""}</span>
        </div>

        {/* Right Column - Destinations */}
        <div className={styles.destinationsSection}>
          <div className={styles.sectionHeader}>
            <div
              className={cn(styles.stepBadge, {
                [styles.completed]: !!selectedAccountId,
              })}
            >
              {selectedAccountId ? <IconCheck size={14} /> : "2"}
            </div>
            <span className={styles.sectionTitle}>Select destination</span>
          </div>

          {isConnected ? (
            <>
              <PlatformAccounts
                platform={connectedPlatform}
                accounts={adAccounts}
                selectedAccountId={selectedAccountId}
                onSelect={selectAccount}
              />
              <button className={styles.disconnectLink} onClick={onDisconnect}>
                Disconnect account
              </button>
            </>
          ) : (
            <div className={styles.platformButtons}>
              <button
                className={cn(styles.platformBtn, styles.tiktok)}
                onClick={onTikTokConnect}
                disabled={isTikTokConnecting || isSessionLoading}
              >
                {isTikTokConnecting || isSessionLoading ? (
                  <IconLoader2 size={18} className={styles.spinner} />
                ) : (
                  <Image src={tiktokWhiteIcon} alt="" width={18} height={18} />
                )}
                TikTok Ads
              </button>

              <button
                className={cn(styles.platformBtn, styles.facebook)}
                onClick={onFacebookConnect}
                disabled={isFacebookConnecting || isSessionLoading}
              >
                {isFacebookConnecting ? (
                  <IconLoader2 size={18} className={styles.spinner} />
                ) : (
                  <Image src={metaIcon} alt="" width={18} height={18} />
                )}
                Meta Ads
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.uploadBtn}
          disabled={!canUpload || isStarting}
          onClick={onUpload}
        >
          {isStarting ? (
            <IconLoader2 size={20} className={styles.spinner} />
          ) : (
            <IconCloudUpload size={20} />
          )}
          {isStarting ? "Starting upload..." : "Upload files"}
        </button>
        <div className={styles.guestLimits}>
          <span className={styles.infoTooltip}>
            <IconInfoCircle size={14} />
            <span className={styles.infoTooltipText}>
              Free mode lets you use the uploader without creating an account.
              Sign up to unlock all features.
            </span>
          </span>
          <span>Free mode: 20 files/day · 1 destination ·</span>
          <a
            href={guestSessionApi.getAppRedirectUrl()}
            className={styles.guestLimitsLink}
            onClick={() => {
              trackMixpanelEvent(EVENTS.UPLOADER_SIGNUP_CTA_CLICKED, {
                cta_location: "form_footer",
              })
            }}
          >
            Create account to Remove limits
          </a>
        </div>
      </div>
    </>
  )
}

export default FormView
