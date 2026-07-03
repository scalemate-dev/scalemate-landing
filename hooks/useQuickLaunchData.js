'use client'

import { useState, useCallback, useRef } from 'react'
import { quickLaunchApi } from '@/lib/api'

/**
 * Manages the cascading dropdown state for Quick Launch:
 * Ad Account → Campaigns → Ad Sets → Source Ads
 *
 * Changing a parent clears all children below it.
 */
export function useQuickLaunchData() {
  // ── Campaigns ──
  const [campaigns, setCampaigns] = useState([])
  const [campaignsLoading, setCampaignsLoading] = useState(false)
  const [campaignsError, setCampaignsError] = useState(null)
  const [selectedCampaignId, setSelectedCampaignId] = useState(null)

  // ── Ad Sets ──
  const [adSets, setAdSets] = useState([])
  const [adSetsLoading, setAdSetsLoading] = useState(false)
  const [adSetsError, setAdSetsError] = useState(null)
  const [selectedAdSetId, setSelectedAdSetId] = useState(null)

  // ── Source Ads ──
  const [ads, setAds] = useState([])
  const [adsLoading, setAdsLoading] = useState(false)
  const [adsError, setAdsError] = useState(null)
  const [selectedAd, setSelectedAd] = useState(null)

  const adAccountIdRef = useRef(null)

  // Request ids to ignore stale responses when the user switches fast
  const campaignsReqRef = useRef(0)
  const adSetsReqRef = useRef(0)
  const adsReqRef = useRef(0)

  // ── Fetch campaigns (called when ad account is selected) ──
  const fetchCampaigns = useCallback(async (adAccountId) => {
    adAccountIdRef.current = adAccountId
    const reqId = ++campaignsReqRef.current
    // A new account invalidates any in-flight child fetches too
    ++adSetsReqRef.current
    ++adsReqRef.current
    // Clear all downstream
    setCampaigns([])
    setSelectedCampaignId(null)
    setAdSets([])
    setSelectedAdSetId(null)
    setAds([])
    setSelectedAd(null)
    setCampaignsError(null)
    setCampaignsLoading(true)
    try {
      const data = await quickLaunchApi.getCampaigns(adAccountId)
      if (reqId !== campaignsReqRef.current) return // stale response
      setCampaigns(data.data || [])
    } catch (err) {
      if (reqId !== campaignsReqRef.current) return
      setCampaignsError(err.data?.error || err.message)
    } finally {
      if (reqId === campaignsReqRef.current) setCampaignsLoading(false)
    }
  }, [])

  // ── Select campaign → fetch ad sets ──
  const selectCampaign = useCallback(
    async (campaignId) => {
      setSelectedCampaignId(campaignId)
      const reqId = ++adSetsReqRef.current
      ++adsReqRef.current // invalidate in-flight ads fetches
      // Clear downstream
      setAdSets([])
      setSelectedAdSetId(null)
      setAds([])
      setSelectedAd(null)
      setAdSetsError(null)

      if (!campaignId || !adAccountIdRef.current) return
      setAdSetsLoading(true)
      try {
        const data = await quickLaunchApi.getAdSets(adAccountIdRef.current, [
          campaignId,
        ])
        if (reqId !== adSetsReqRef.current) return // stale response
        setAdSets(data.data || [])
      } catch (err) {
        if (reqId !== adSetsReqRef.current) return
        setAdSetsError(err.data?.error || err.message)
      } finally {
        if (reqId === adSetsReqRef.current) setAdSetsLoading(false)
      }
    },
    []
  )

  // ── Select ad set → fetch ads ──
  const selectAdSet = useCallback(
    async (adSetId) => {
      setSelectedAdSetId(adSetId)
      const reqId = ++adsReqRef.current
      // Clear downstream
      setAds([])
      setSelectedAd(null)
      setAdsError(null)

      if (!adSetId || !adAccountIdRef.current) return
      setAdsLoading(true)
      try {
        const data = await quickLaunchApi.getAds(
          adAccountIdRef.current,
          adSetId
        )
        if (reqId !== adsReqRef.current) return // stale response
        setAds(data.data || [])
      } catch (err) {
        if (reqId !== adsReqRef.current) return
        setAdsError(err.data?.error || err.message)
      } finally {
        if (reqId === adsReqRef.current) setAdsLoading(false)
      }
    },
    []
  )

  // ── Select source ad (store full object for launch payload) ──
  const selectAd = useCallback((ad) => {
    setSelectedAd(ad)
  }, [])

  // ── Reset everything ──
  const reset = useCallback(() => {
    adAccountIdRef.current = null
    // Invalidate all in-flight fetches
    ++campaignsReqRef.current
    ++adSetsReqRef.current
    ++adsReqRef.current
    setCampaigns([])
    setCampaignsError(null)
    setSelectedCampaignId(null)
    setAdSets([])
    setAdSetsError(null)
    setSelectedAdSetId(null)
    setAds([])
    setAdsError(null)
    setSelectedAd(null)
  }, [])

  return {
    // Campaigns
    campaigns,
    campaignsLoading,
    campaignsError,
    selectedCampaignId,
    // Ad Sets
    adSets,
    adSetsLoading,
    adSetsError,
    selectedAdSetId,
    // Ads
    ads,
    adsLoading,
    adsError,
    selectedAd,
    // Actions
    fetchCampaigns,
    selectCampaign,
    selectAdSet,
    selectAd,
    reset,
  }
}
