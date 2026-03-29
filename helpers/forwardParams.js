const PARAMS_TO_FORWARD = [
  'fbclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'ttclid',
]

export function appendTrackingParams(targetUrl) {
  if (typeof window === 'undefined') return targetUrl

  const current = new URL(window.location.href)
  const target = new URL(targetUrl)

  PARAMS_TO_FORWARD.forEach((param) => {
    const value = current.searchParams.get(param)
    if (value && !target.searchParams.has(param)) {
      target.searchParams.set(param, value)
    }
  })

  return target.toString()
}
