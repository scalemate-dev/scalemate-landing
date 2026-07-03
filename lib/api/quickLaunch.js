import { apiClient } from './client'

const BASE = '/api/external/quick_launch'

const stripAct = (id) => id?.replace(/^act_/, '') || ''

/**
 * Quick Launch API module.
 * Handles campaign selection, creative upload, and ad launch via REST.
 */
export const quickLaunchApi = {
  // ── Catalog (cascading dropdowns) ─────────────────────────

  async getCampaigns(adAccountId) {
    return apiClient.get(
      `${BASE}/campaigns?ad_account_id=${encodeURIComponent(stripAct(adAccountId))}`
    )
  },

  async getAdSets(adAccountId, campaignIds) {
    const params = new URLSearchParams({ ad_account_id: stripAct(adAccountId) })
    campaignIds.forEach((id) => params.append('campaign_ids[]', id))
    return apiClient.get(`${BASE}/adsets?${params}`)
  },

  async getAds(adAccountId, adsetId) {
    const params = new URLSearchParams({
      ad_account_id: stripAct(adAccountId),
      adset_id: adsetId,
    })
    return apiClient.get(`${BASE}/ads?${params}`)
  },

  // ── Upload: local files (presigned → Spaces → complete) ──

  async presign(adAccountId, files) {
    return apiClient.post(`${BASE}/presign`, {
      ad_account_id: stripAct(adAccountId),
      files,
    })
  },

  async complete(adAccountId, items) {
    return apiClient.post(`${BASE}/complete`, {
      ad_account_id: stripAct(adAccountId),
      items,
    })
  },

  // ── Upload: Google Drive files ────────────────────────────

  async uploadDriveFiles(adAccountId, files, isPublic = false) {
    const body = { ad_account_id: stripAct(adAccountId), files }
    if (isPublic) body.public = true
    return apiClient.post(`${BASE}/upload_drive_files`, body)
  },

  // ── Upload status polling ─────────────────────────────────

  async getUploadStatus(jobId) {
    return apiClient.get(`${BASE}/upload_status/${encodeURIComponent(jobId)}`)
  },

  // ── Launch ────────────────────────────────────────────────

  async launch({ adAccountId, adsetId, creativeFileIds, sourceAd, status }) {
    return apiClient.post(`${BASE}/launch`, {
      ad_account_id: stripAct(adAccountId),
      adset_id: adsetId,
      creative_file_ids: creativeFileIds,
      source_ad: sourceAd,
      status,
    })
  },
}
