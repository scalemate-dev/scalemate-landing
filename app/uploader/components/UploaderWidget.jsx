"use client"

import { useState } from "react"
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandGoogle,
  IconCheck,
  IconCloudUpload,
  IconChevronRight,
  IconChevronDown,
  IconAlertCircle,
  IconLoader2,
} from "@tabler/icons-react"
import cn from "classnames"
import { useFacebookAuth } from "@/hooks/useFacebookAuth"
import { useTikTokAuth } from "@/hooks/useTikTokAuth"
import { useGooglePicker } from "@/hooks/useGooglePicker"
import { useGuestSession } from "@/hooks/useGuestSession"
import styles from "./UploaderWidget.module.scss"

const UploaderWidget = () => {
  // OAuth hooks
  const {
    isConnected: isFacebookConnected,
    isConnecting: isFacebookConnecting,
    connect: connectFacebook,
    disconnect: disconnectFacebook,
    error: facebookError,
  } = useFacebookAuth({ autoInit: false }) // Disabled - requires HTTPS

  const {
    isConnecting: isTikTokConnecting,
    error: tiktokError,
    connect: connectTikTok,
  } = useTikTokAuth()

  const {
    openPicker,
    selectedFiles: pickerFiles,
    isPickerOpen,
    clearFiles,
    error: googleError,
    accessToken: googleToken,
    getFilesForApi,
  } = useGooglePicker()

  const {
    createSession,
    selectAccount,
    updateFiles,
    adAccounts,
    selectedAccountId,
    isLoading: isSessionLoading,
    error: sessionError,
    redirectToApp,
    clearSession,
    hasSession,
  } = useGuestSession()

  // Local UI state
  const [connectedPlatform, setConnectedPlatform] = useState(null) // 'facebook' | 'tiktok' | null
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  // Computed states
  const isConnected =
    (connectedPlatform === "tiktok" && hasSession && adAccounts.length > 0) ||
    (connectedPlatform === "facebook" &&
      isFacebookConnected &&
      adAccounts.length > 0)
  const hasSelectedAccount = !!selectedAccountId
  const hasFiles = pickerFiles.length > 0
  const canSelectFiles = isConnected && hasSelectedAccount
  const canUpload = canSelectFiles && hasFiles

  // Combined error
  const error = facebookError || tiktokError || googleError || sessionError

  // Handlers
  const handleFacebookConnect = async () => {
    try {
      const { token, userId } = await connectFacebook()
      await createSession({
        platformType: "facebook",
        platformToken: token,
        platformUserId: userId,
      })
      setConnectedPlatform("facebook")
    } catch (err) {
      console.error("Facebook connect error:", err)
    }
  }

  const handleTikTokConnect = async () => {
    try {
      const { auth_code } = await connectTikTok()
      await createSession({
        platformType: "tiktok",
        platformToken: auth_code,
      })
      setConnectedPlatform("tiktok")
    } catch (err) {
      console.error("TikTok connect error:", err)
    }
  }

  const handleAccountSelect = async (accountId) => {
    setIsAccountDropdownOpen(false)
    await selectAccount(accountId)
  }

  const handleGooglePicker = () => {
    openPicker()
  }

  const handleDisconnect = async () => {
    if (connectedPlatform === "facebook") {
      await disconnectFacebook()
    }
    clearFiles()
    clearSession()
    setConnectedPlatform(null)
    setIsAccountDropdownOpen(false)
  }

  const handleUpload = async () => {
    setIsUploading(true)
    try {
      // Send files to API before redirecting
      if (pickerFiles.length > 0) {
        await updateFiles({ googleToken, files: getFilesForApi() })
      }
      redirectToApp("/signup")
    } catch (err) {
      console.error("Upload error:", err)
      setIsUploading(false)
    }
  }

  // Get selected account name for display
  const selectedAccount = adAccounts.find((acc) => acc.id === selectedAccountId)

  // Platform icon for connected state
  const PlatformIcon =
    connectedPlatform === "tiktok" ? IconBrandTiktok : IconBrandFacebook

  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <IconCloudUpload size={20} />
        <span>Quick Upload</span>
      </div>

      {/* Error banner */}
      {error && (
        <div className={styles.errorBanner}>
          <IconAlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className={styles.content}>
        {/* Step 1: Connect Platform & Select Account */}
        <div
          className={cn(styles.step, styles.stepLarge, {
            [styles.completed]: hasSelectedAccount,
          })}
        >
          <div className={styles.stepNumber}>1</div>

          {!isConnected ? (
            <div className={styles.platformButtons}>
              {/* TikTok - Primary (works on HTTP) */}
              <button
                className={cn(styles.stepButton, styles.tiktok)}
                onClick={handleTikTokConnect}
                disabled={isTikTokConnecting || isSessionLoading}
              >
                {isTikTokConnecting || isSessionLoading ? (
                  <IconLoader2 size={18} className={styles.spinner} />
                ) : (
                  <IconBrandTiktok size={18} />
                )}
                TikTok
              </button>

              {/* Facebook - Secondary (requires HTTPS) */}
              <button
                className={cn(
                  styles.stepButton,
                  styles.facebook,
                  styles.secondary,
                )}
                onClick={handleFacebookConnect}
                disabled={isFacebookConnecting || isSessionLoading}
                title="Requires HTTPS"
              >
                {isFacebookConnecting ? (
                  <IconLoader2 size={18} className={styles.spinner} />
                ) : (
                  <IconBrandFacebook size={18} />
                )}
                Facebook
              </button>
            </div>
          ) : !hasSelectedAccount ? (
            <div className={styles.accountSelector}>
              <button
                className={cn(styles.stepButton, styles.accountButton)}
                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
              >
                <PlatformIcon size={18} />
                <span>Select Ad Account</span>
                <IconChevronDown
                  size={16}
                  className={cn(styles.dropdownIcon, {
                    [styles.open]: isAccountDropdownOpen,
                  })}
                />
              </button>

              {isAccountDropdownOpen && (
                <div className={styles.dropdown}>
                  {adAccounts.map((account) => (
                    <button
                      key={account.id}
                      className={styles.dropdownItem}
                      onClick={() => handleAccountSelect(account.id)}
                    >
                      <span className={styles.accountName}>{account.name}</span>
                      <span className={styles.accountId}>{account.id}</span>
                    </button>
                  ))}
                </div>
              )}

              <button
                className={styles.disconnectBtn}
                onClick={handleDisconnect}
                title="Disconnect"
              >
                ×
              </button>
            </div>
          ) : (
            <div className={styles.stepCompleted}>
              <IconCheck size={16} />
              <span className={styles.selectedAccountName}>
                {selectedAccount?.name || selectedAccountId}
              </span>
              <button
                className={styles.disconnectBtn}
                onClick={handleDisconnect}
              >
                ×
              </button>
            </div>
          )}
        </div>

        <IconChevronRight size={20} className={styles.arrow} />

        {/* Step 2: Google Drive */}
        <div
          className={cn(styles.step, {
            [styles.completed]: hasFiles,
          })}
        >
          <div className={styles.stepNumber}>2</div>
          <button
            className={cn(styles.stepButton, styles.google)}
            onClick={handleGooglePicker}
          >
            {isPickerOpen ? (
              <IconLoader2 size={18} className={styles.spinner} />
            ) : (
              <IconBrandGoogle size={18} />
            )}
            {hasFiles ? `${pickerFiles.length} files` : "Select Files"}
          </button>
        </div>

        <IconChevronRight size={20} className={styles.arrow} />

        {/* Step 3: Upload */}
        <div className={cn(styles.step, { [styles.disabled]: !canUpload })}>
          <div className={styles.stepNumber}>3</div>
          <button
            className={cn(styles.stepButton, styles.upload)}
            disabled={!canUpload || isUploading}
            onClick={handleUpload}
          >
            {isUploading ? (
              <IconLoader2 size={18} className={styles.spinner} />
            ) : (
              <IconCloudUpload size={18} />
            )}
            {isUploading ? "Redirecting..." : "Upload"}
          </button>
        </div>
      </div>

      {/* File preview */}
      {hasFiles && (
        <div className={styles.filePreview}>
          {pickerFiles.map((file, index) => (
            <span key={index} className={styles.fileTag}>
              {file.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default UploaderWidget
