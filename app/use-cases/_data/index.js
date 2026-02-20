import { data as bulkAdLaunch } from "./bulk-ad-launch"

const useCases = {
  "bulk-ad-launch": bulkAdLaunch,
}

export function getUseCaseData(slug) {
  return useCases[slug] ?? null
}

export function getAllSlugs() {
  return Object.keys(useCases)
}
