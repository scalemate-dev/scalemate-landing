import { data as bulkAdLaunch } from "./bulk-ad-launch"
import { data as automatedCreativeUploadMeta } from "./automated-creative-upload-meta"
import { data as scaleAdCampaignsFaster } from "./scale-ad-campaigns-faster"

const useCases = {
  "bulk-ad-launch": bulkAdLaunch,
  "automated-creative-upload-meta": automatedCreativeUploadMeta,
  "scale-ad-campaigns-faster": scaleAdCampaignsFaster,
}

export function getUseCaseData(slug) {
  return useCases[slug] ?? null
}

export function getAllSlugs() {
  return Object.keys(useCases)
}
