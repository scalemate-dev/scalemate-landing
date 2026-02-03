import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
const isDev = process.env.NODE_ENV === 'development'

let isInitialized = false

const log = (action: string, data?: unknown) => {
  if (isDev) {
    console.log(
      `%c[Mixpanel] ${action}`,
      'color: #08f01bff; font-weight: bold;',
      data ?? ''
    )
  }
}

export const initMixpanel = (): boolean => {
  if (typeof window === 'undefined') return false
  if (isInitialized) return true
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token not configured')
    return false
  }

  mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: true,
    record_sessions_percent: isDev ? 0 : 95,
    record_mask_text_selector: '',
    api_host: 'https://api-eu.mixpanel.com',
    debug: isDev,
  })

  isInitialized = true
  log('Initialized')
  return true
}

export const trackMixpanelEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  if (!initMixpanel()) return

  log(`Track: ${eventName}`, properties)

  try {
    mixpanel.track(eventName, properties)
  } catch (error) {
    console.error('Failed to track Mixpanel event:', error)
  }
}

export const identifyMixpanelUser = (userId: string) => {
  if (!initMixpanel()) return

  log(`Identify: ${userId}`)

  try {
    mixpanel.identify(userId)
  } catch (error) {
    console.error('Failed to identify Mixpanel user:', error)
  }
}

export const setMixpanelUserProperties = (
  properties: Record<string, unknown>
) => {
  if (!initMixpanel()) return

  log('Set User Properties', properties)

  try {
    mixpanel.people.set(properties)
  } catch (error) {
    console.error('Failed to set Mixpanel user properties:', error)
  }
}

export { mixpanel }
