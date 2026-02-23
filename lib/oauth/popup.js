/**
 * OAuth Popup utility for handling OAuth flows in a popup window.
 * Avoids full page redirects, providing a better UX.
 */

export const parseQueryString = (string) => {
  const obj = {}
  ;(string || '').split('&').forEach((keyValue) => {
    if (keyValue) {
      const [key, ...valueParts] = keyValue.split('=')
      obj[decodeURIComponent(key)] = valueParts.length
        ? decodeURIComponent(valueParts.join('='))
        : true
    }
  })
  return obj
}

const getCenteredPosition = (width, height) => {
  const left = Math.round(window.screen.width / 2 - width / 2)
  const top = Math.round(window.screen.height / 2 - height / 2)
  return { left, top }
}

const POPUP_OPTIONS = {
  tiktok: () => {
    const width = 755
    const height = 760
    const { left, top } = getCenteredPosition(width, height)
    return `width=${width},height=${height},top=${top},left=${left}`
  },
  facebook: () => {
    const width = 600
    const height = 700
    const { left, top } = getCenteredPosition(width, height)
    return `width=${width},height=${height},top=${top},left=${left}`
  },
  google: () => {
    const width = 665
    const height = 480
    const { left, top } = getCenteredPosition(width, height)
    return `width=${width},height=${height},top=${top},left=${left}`
  },
  default: () => {
    const width = 600
    const height = 600
    const { left, top } = getCenteredPosition(width, height)
    return `width=${width},height=${height},top=${top},left=${left}`
  },
}

const POPUPS = []

export class OAuthPopup {
  constructor(provider, redirectURI) {
    this.redirectURI = redirectURI
    this.provider = provider

    const getOptions = POPUP_OPTIONS[provider] || POPUP_OPTIONS.default
    this.popup = window.open(null, '_blank', getOptions())

    if (!this.popup) {
      throw new Error('Popup was blocked. Please allow popups for this site.')
    }

    POPUPS.push(this)
  }

  open(url) {
    this.url = url

    try {
      this.popup.location = url

      if (this.popup?.focus) {
        this.popup.focus()
      }

      return this.wait()
    } catch (e) {
      this.close()
      return Promise.reject(new Error('OAuth failed to open.'))
    }
  }

  close() {
    const selfIndex = POPUPS.findIndex((popup) => popup === this)
    if (selfIndex !== -1) {
      POPUPS.splice(selfIndex, 1)
    }

    if (this.popup) {
      this.popup.close()
    }
  }

  static closeAll() {
    POPUPS.forEach((popup) => popup.close())
  }

  wait() {
    return new Promise((resolve, reject) => {
      const cleanup = () => {
        clearInterval(interval)
        window.removeEventListener('message', onMessage)
      }

      const onMessage = (event) => {
        if (event.origin !== window.location.origin) return
        if (event.data?.type !== 'oauth_callback') return
        if (event.data?.provider !== this.provider) return

        const { type, provider, ...params } = event.data
        cleanup()
        this.close()
        resolve(params)
      }

      window.addEventListener('message', onMessage)

      const interval = setInterval(() => {
        if (!this.popup || this.popup.closed) {
          cleanup()
          this.close()
          reject(new Error('OAuth popup was closed.'))
        }
      }, 250)
    })
  }
}

export default OAuthPopup
