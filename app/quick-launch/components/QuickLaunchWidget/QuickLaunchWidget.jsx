"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { IconLoader2 } from "@tabler/icons-react"
import cn from "classnames"
import { useFacebookAuth } from "@/hooks/useFacebookAuth"
import { useGooglePicker } from "@/hooks/useGooglePicker"
import { useGuestSession } from "@/hooks/useGuestSession"
import { useQuickLaunchData } from "@/hooks/useQuickLaunchData"
import { useQuickLaunchUpload } from "@/hooks/useQuickLaunchUpload"
import { quickLaunchApi } from "@/lib/api"
import { guestSessionApi } from "@/lib/api/guestSession"
import { getStoredToken } from "@/helpers/googleDriveToken"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog"
import LaunchResultModal from "../LaunchResultModal/LaunchResultModal"
import LimitModal from "../LimitModal/LimitModal"
import SelectionPanel from "../SelectionPanel/SelectionPanel"
import CreativesPanel from "../CreativesPanel/CreativesPanel"
import LaunchBar from "../LaunchBar/LaunchBar"
import styles from "./QuickLaunchWidget.module.scss"

// Backend signals exhausted guest limits with 429 or a 4xx "limit" message
const isLimitError = (status, msg) =>
  status === 429 || (status >= 400 && status < 500 && /limit/i.test(msg || ""))

const QuickLaunchWidget = () => {
  const facebook = useFacebookAuth({ autoInit: false })
  const session = useGuestSession()
  const catalog = useQuickLaunchData()
  const upload = useQuickLaunchUpload()

  // Fresh session reference for callbacks created before renders settle
  const sessionRef = useRef(session)
  sessionRef.current = session

  const {
    openPicker,
    selectedFiles: pickerFiles,
    clearFiles: clearPickerFiles,
    error: googleError,
    accessToken: googleToken,
  } = useGooglePicker({
    onFilesSelected: async (files) => {
      const added = upload.addDriveFiles(files)
      if (added.length > 0) {
        trackMixpanelEvent(EVENTS.QUICK_LAUNCH_FILES_ADDED, {
          file_count: added.length,
          source: "drive",
        })
        if (sessionRef.current.selectedAccountId) {
          // Backend needs google_session_token on the guest session before
          // it can sync Drive files — make sure it's there before uploading.
          const googleToken = getStoredToken()
          if (googleToken) {
            try {
              await guestSessionApi.update({ googleToken })
            } catch {
              // non-fatal: session may already have the token
            }
          }
          trackMixpanelEvent(EVENTS.QUICK_LAUNCH_UPLOAD_STARTED, {
            file_count: added.length,
            source: "drive",
          })
          upload.uploadBatch(sessionRef.current.selectedAccountId, added)
        }
      }
    },
  })

  const [launchStatus, setLaunchStatus] = useState("PAUSED")
  const [pendingAccountSwitch, setPendingAccountSwitch] = useState(null)
  const [limitError, setLimitError] = useState(null)
  const [overrides, setOverrides] = useState(null)
  const [launchResult, setLaunchResult] = useState(null)
  const [isLaunching, setIsLaunching] = useState(false)
  const [launchError, setLaunchError] = useState(null)

  // Auto-fetch campaigns when session restores with a selected account
  useEffect(() => {
    if (
      session.selectedAccountId &&
      !session.isRestoring &&
      catalog.campaigns.length === 0 &&
      !catalog.campaignsLoading
    ) {
      catalog.fetchCampaigns(session.selectedAccountId)
    }
  }, [session.selectedAccountId, session.isRestoring])

  // Upload hit a guest limit → upsell modal
  useEffect(() => {
    const e = upload.uploadError
    if (e && isLimitError(e.status, e.raw)) {
      setLimitError(e.raw)
    }
  }, [upload.uploadError])

  const isConnected =
    !!session.connectedPlatform &&
    session.hasSession &&
    session.adAccounts.length > 0

  const canLaunch =
    !!session.selectedAccountId &&
    !!catalog.selectedAdSetId &&
    !!catalog.selectedAd &&
    upload.uploadedCreatives.length > 0 &&
    upload.pendingCreatives.length === 0 &&
    !upload.isUploading &&
    !isLaunching

  const error = googleError || session.error || launchError

  // ── Platform connect ──
  const handleFacebookConnect = async () => {
    trackMixpanelEvent(EVENTS.UPLOADER_PLATFORM_CONNECT_STARTED, {
      platform: "facebook",
    })
    try {
      const { token, userId } = await facebook.connect()
      await session.createSession({
        platformType: "facebook",
        platformToken: token,
        platformUserId: userId,
      })
      trackMixpanelEvent(EVENTS.UPLOADER_PLATFORM_CONNECTED, {
        platform: "facebook",
      })
    } catch (err) {
      console.error("Facebook connect error:", err)
    }
  }

  const handleDisconnect = async () => {
    await facebook.disconnect()
    clearPickerFiles()
    upload.clearCreatives()
    catalog.reset()
    session.clearSession()
  }

  // ── Account select → fetch campaigns ──
  const doAccountSwitch = useCallback(
    (accountId) => {
      session.selectAccount(accountId)
      catalog.fetchCampaigns(accountId)
      setOverrides(null)
      trackMixpanelEvent(EVENTS.UPLOADER_ACCOUNT_SELECTED, {
        platform: session.connectedPlatform,
      })
    },
    [session, catalog]
  )

  const handleAccountSelect = useCallback(
    (accountId) => {
      if (accountId === session.selectedAccountId) return

      const hadAccount = !!session.selectedAccountId
      if (hadAccount && upload.creatives.length > 0) {
        // Creatives are account-scoped — confirm re-upload to the new account
        setPendingAccountSwitch(accountId)
        return
      }

      doAccountSwitch(accountId)

      // Files added before an account was picked — upload them now
      const pending = upload.creatives.filter((c) => c.status === "pending")
      if (pending.length > 0) {
        upload.uploadBatch(accountId, pending)
      }
    },
    [session, upload, doAccountSwitch]
  )

  const handleReuploadConfirm = useCallback(() => {
    const accountId = pendingAccountSwitch
    setPendingAccountSwitch(null)
    if (!accountId) return
    doAccountSwitch(accountId)
    const reset = upload.resetCreativesForReupload()
    upload.uploadBatch(accountId, reset)
  }, [pendingAccountSwitch, doAccountSwitch, upload])

  // ── Cascading selects ──
  const handleCampaignSelect = useCallback(
    (campaignId) => {
      catalog.selectCampaign(campaignId)
      trackMixpanelEvent(EVENTS.QUICK_LAUNCH_CAMPAIGN_SELECTED, {})
    },
    [catalog]
  )

  const handleAdSetSelect = useCallback(
    (adSetId) => {
      catalog.selectAdSet(adSetId)
      trackMixpanelEvent(EVENTS.QUICK_LAUNCH_ADSET_SELECTED, {})
    },
    [catalog]
  )

  const handleAdSelect = useCallback(
    (ad) => {
      catalog.selectAd(ad)
      setOverrides({
        messages: ad.messages || [""],
        headlines: ad.headlines || [""],
        descriptions: ad.descriptions || [""],
        link: ad.link || "",
        display_link: ad.display_link || "",
        url_tags: ad.url_tags || "",
        call_to_action_type: ad.call_to_action_type || "",
      })
      trackMixpanelEvent(EVENTS.QUICK_LAUNCH_SOURCE_AD_SELECTED, {
        media_type: ad.media_type,
      })
    },
    [catalog]
  )

  // ── Local file drop ──
  const handleLocalFiles = useCallback(
    (fileList) => {
      const { accepted, rejected } = upload.addLocalFiles(fileList)
      if (accepted.length > 0) {
        trackMixpanelEvent(EVENTS.QUICK_LAUNCH_FILES_ADDED, {
          file_count: accepted.length,
          source: "local",
        })
        if (sessionRef.current.selectedAccountId) {
          trackMixpanelEvent(EVENTS.QUICK_LAUNCH_UPLOAD_STARTED, {
            file_count: accepted.length,
            source: "local",
          })
          upload.uploadBatch(sessionRef.current.selectedAccountId, accepted)
        }
      }
      return { accepted, rejected }
    },
    [upload]
  )

  // ── Public Drive links ──
  const handlePublicLinks = useCallback(
    (text) => {
      const result = upload.addPublicLinks(text)
      if (result.count > 0) {
        trackMixpanelEvent(EVENTS.QUICK_LAUNCH_FILES_ADDED, {
          file_count: result.count,
          source: "public_link",
        })
        if (sessionRef.current.selectedAccountId) {
          const accountId = sessionRef.current.selectedAccountId
          ;(async () => {
            const googleToken = getStoredToken()
            if (googleToken) {
              try {
                await guestSessionApi.update({ googleToken })
              } catch {
                // non-fatal
              }
            }
            trackMixpanelEvent(EVENTS.QUICK_LAUNCH_UPLOAD_STARTED, {
              file_count: result.added.length,
              source: "public_link",
            })
            upload.uploadBatch(accountId, result.added)
          })()
        }
      }
      return result
    },
    [upload]
  )

  // ── Launch (creatives upload automatically on add) ──
  const handleLaunch = async () => {
    setLaunchError(null)
    setLaunchResult(null)

    setIsLaunching(true)
    trackMixpanelEvent(EVENTS.QUICK_LAUNCH_LAUNCHED, {
      creative_count: upload.uploadedCreatives.length,
      status: launchStatus,
    })

    try {
      const result = await quickLaunchApi.launch({
        adAccountId: session.selectedAccountId,
        adsetId: catalog.selectedAdSetId,
        creativeFileIds: upload.uploadedCreatives.map(
          (c) => c.creativeFileId
        ),
        sourceAd: { ...catalog.selectedAd, ...overrides },
        status: launchStatus,
      })

      setLaunchResult(result)
      trackMixpanelEvent(EVENTS.QUICK_LAUNCH_LAUNCH_RESULT, {
        result_status: result.status,
        total_entities: result.entities?.length || 0,
        failed_count:
          result.entities?.filter((e) => e.status === "failed").length || 0,
      })
    } catch (err) {
      const status = err?.status
      let msg = err?.data?.error || err?.message || ""

      // Guest limit exceeded → upsell modal instead of an error banner
      if (isLimitError(status, msg)) {
        setLimitError(msg)
        trackMixpanelEvent(EVENTS.QUICK_LAUNCH_ERROR_OCCURRED, {
          error_type: "limit_reached",
          error_message: msg,
        })
        return
      }

      if (status >= 500) msg = "Something went wrong. Please try again later."
      else if (status === 401) msg = "Session expired. Please reconnect."
      else if (status === 422) msg = msg || "Invalid request. Please check your input."
      else if (!msg) msg = "Something went wrong. Please try again."
      setLaunchError(msg)
      trackMixpanelEvent(EVENTS.QUICK_LAUNCH_ERROR_OCCURRED, {
        error_type: "launch",
        error_message: err.message,
      })
    } finally {
      setIsLaunching(false)
    }
  }

  // ── Render ──
  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <h2>Ad Uploader</h2>
        <p>Launch new ads with your creatives in seconds.</p>
      </div>

      {error && !session.isRestoring && (
        <div className={styles.errorBanner}>
          <span>{error}</span>
        </div>
      )}

      {session.isRestoring ? (
        <div className={styles.restoring}>
          <IconLoader2 size={32} className={styles.spinner} />
        </div>
      ) : (
      <>
      <div className={styles.content}>
        <SelectionPanel
          isConnected={isConnected}
          connectedPlatform={session.connectedPlatform}
          adAccounts={session.adAccounts}
          selectedAccountId={session.selectedAccountId}
          onConnect={handleFacebookConnect}
          isConnecting={facebook.isConnecting}
          onDisconnect={handleDisconnect}
          onAccountSelect={handleAccountSelect}
          // Catalog
          campaigns={catalog.campaigns}
          campaignsLoading={catalog.campaignsLoading}
          campaignsError={catalog.campaignsError}
          selectedCampaignId={catalog.selectedCampaignId}
          onCampaignSelect={handleCampaignSelect}
          adSets={catalog.adSets}
          adSetsLoading={catalog.adSetsLoading}
          adSetsError={catalog.adSetsError}
          selectedAdSetId={catalog.selectedAdSetId}
          onAdSetSelect={handleAdSetSelect}
          ads={catalog.ads}
          adsLoading={catalog.adsLoading}
          adsError={catalog.adsError}
          selectedAd={catalog.selectedAd}
          onAdSelect={handleAdSelect}
          overrides={overrides}
          onOverridesChange={(patch) =>
            setOverrides((prev) => ({ ...prev, ...patch }))
          }
        />

        <CreativesPanel
          creatives={upload.creatives}
          isUploading={upload.isUploading}
          onLocalFiles={handleLocalFiles}
          onDrivePicker={openPicker}
          onPublicLinks={handlePublicLinks}
          onRemoveCreative={upload.removeCreative}
          onClearCreatives={upload.clearCreatives}
        />
      </div>

      <LaunchBar
        creativeCount={upload.uploadedCreatives.length}
        pendingCount={upload.pendingCreatives.length}
        isActive={launchStatus === "ACTIVE"}
        onToggleActive={(active) => setLaunchStatus(active ? "ACTIVE" : "PAUSED")}
        canLaunch={canLaunch}
        isLaunching={isLaunching}
        isUploading={upload.isUploading}
        onLaunch={handleLaunch}
        launchError={launchError}
      />
      </>
      )}

      <LaunchResultModal
        result={launchResult}
        adAccountId={session.selectedAccountId}
        adsetName={
          catalog.adSets.find((a) => a.id === catalog.selectedAdSetId)?.name
        }
        onClose={() => setLaunchResult(null)}
      />

      <LimitModal
        open={!!limitError}
        message={limitError}
        onClose={() => setLimitError(null)}
      />

      <ConfirmDialog
        open={!!pendingAccountSwitch}
        title="Re-upload creatives?"
        description="You switched ad account. Creatives uploaded to the previous account can't be used here. Re-upload them to the new account, or keep them and stay on the previous account."
        cancelLabel="Keep as is"
        confirmLabel="Re-upload"
        onCancel={() => setPendingAccountSwitch(null)}
        onConfirm={handleReuploadConfirm}
      />
    </div>
  )
}

export default QuickLaunchWidget
