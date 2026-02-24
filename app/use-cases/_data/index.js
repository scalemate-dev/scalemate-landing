import { data as bulkAdLaunch } from "./bulk-ad-launch"
import { data as automatedCreativeUploadMeta } from "./automated-creative-upload-meta"

const useCases = {
  "bulk-ad-launch": bulkAdLaunch,
  "automated-creative-upload-meta": automatedCreativeUploadMeta,
}

export function getUseCaseData(slug) {
  return useCases[slug] ?? null
}

export function getAllSlugs() {
  return Object.keys(useCases)
}
