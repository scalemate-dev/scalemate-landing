import { data as bulkAdLaunch } from "./bulk-ad-launch"
import { data as adCampaignAutomationRules } from "./ad-campaign-automation-rules"

const useCases = {
  "bulk-ad-launch": bulkAdLaunch,
  "ad-campaign-automation-rules": adCampaignAutomationRules,
}

export function getUseCaseData(slug) {
  return useCases[slug] ?? null
}

export function getAllSlugs() {
  return Object.keys(useCases)
}
