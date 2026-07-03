import { IconLoader2, IconBrandMeta } from "@tabler/icons-react"
import Combobox from "../Combobox/Combobox"
import OverridesForm from "../OverridesForm/OverridesForm"
import styles from "./SelectionPanel.module.scss"

const SelectionPanel = ({
  // Connection
  isConnected,
  connectedPlatform,
  adAccounts,
  selectedAccountId,
  onConnect,
  isConnecting,
  onDisconnect,
  onAccountSelect,
  // Campaigns
  campaigns,
  campaignsLoading,
  campaignsError,
  selectedCampaignId,
  onCampaignSelect,
  // Ad Sets
  adSets,
  adSetsLoading,
  adSetsError,
  selectedAdSetId,
  onAdSetSelect,
  // Ads
  ads,
  adsLoading,
  adsError,
  selectedAd,
  onAdSelect,
  overrides,
  onOverridesChange,
}) => {
  // ── Not connected: show connect button ──
  if (!isConnected) {
    return (
      <div className={styles.panel}>
        <div className={styles.section}>
          <label className={styles.label}>Ad account</label>
          <button
            className={styles.connectBtn}
            onClick={onConnect}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <IconLoader2 size={16} className={styles.spinner} />
            ) : (
              <IconBrandMeta size={18} />
            )}
            Connect Meta Ads
          </button>
        </div>
      </div>
    )
  }

  const accountOptions = adAccounts.map((acc) => ({
    id: acc.id,
    name: acc.name,
    meta: acc.id,
  }))

  const campaignOptions = campaigns.map((c) => ({
    id: c.id,
    name: c.name,
    badge: c.status || c.effective_status || null,
  }))

  const adSetOptions = adSets.map((a) => ({
    id: a.id,
    name: a.name,
    badge: a.status || a.effective_status || null,
  }))

  const adOptions = ads.map((ad) => ({
    id: ad.id,
    name: ad.name,
    thumbnailUrl: ad.thumbnail_url || null,
    mediaType: ad.media_type,
    meta: ad.media_type,
  }))

  // ── Connected: show cascading comboboxes ──
  return (
    <div className={styles.panel}>
      {/* Ad Account */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <label className={styles.label}>Ad account</label>
          <button className={styles.disconnectLink} onClick={onDisconnect}>
            Disconnect
          </button>
        </div>
        <Combobox
          options={accountOptions}
          value={selectedAccountId || ""}
          onSelect={(option) => onAccountSelect(option.id)}
          placeholder="Pick ad account..."
          searchPlaceholder="Search accounts..."
          emptyText="No ad accounts."
        />
      </div>

      {/* Campaign */}
      <div className={styles.section}>
        <label className={styles.label}>Campaign</label>
        <Combobox
          options={campaignOptions}
          value={selectedCampaignId || ""}
          onSelect={(option) => onCampaignSelect(option.id)}
          placeholder="Select a campaign..."
          searchPlaceholder="Search campaigns..."
          disabled={!selectedAccountId}
          loading={campaignsLoading}
          loadingText="Loading campaigns..."
          error={campaignsError}
          emptyText="No campaigns in this account."
        />
      </div>

      {/* Ad Set */}
      <div className={styles.section}>
        <label className={styles.label}>Ad set</label>
        <Combobox
          options={adSetOptions}
          value={selectedAdSetId || ""}
          onSelect={(option) => onAdSetSelect(option.id)}
          placeholder="Select an ad set..."
          searchPlaceholder="Search ad sets..."
          disabled={!selectedCampaignId}
          loading={adSetsLoading}
          loadingText="Loading ad sets..."
          error={adSetsError}
          emptyText="No ad sets in this campaign."
        />
      </div>

      {/* Source Ad */}
      <div className={styles.section}>
        <label className={styles.label}>Pick reference ad</label>
        <p className={styles.hint}>
          All texts, titles, UTM and CTA are copied — only the creative is
          replaced.
        </p>
        <Combobox
          options={adOptions}
          value={selectedAd?.id || ""}
          onSelect={(option) => {
            const ad = ads.find((a) => a.id === option.id)
            if (ad) onAdSelect(ad)
          }}
          placeholder="Select an ad to duplicate..."
          searchPlaceholder="Search ads..."
          disabled={!selectedAdSetId}
          loading={adsLoading}
          loadingText="Loading ads..."
          error={adsError}
          emptyText="No ads in this ad set."
          direction="up"
          showThumbs
        />
      </div>

      {/* Overrides (shown after source ad is selected) */}
      {overrides && (
        <OverridesForm
          sourceAd={selectedAd}
          overrides={overrides}
          onChange={onOverridesChange}
        />
      )}
    </div>
  )
}

export default SelectionPanel
