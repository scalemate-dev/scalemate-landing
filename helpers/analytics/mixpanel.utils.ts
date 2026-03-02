const PAGE_NAME_MAP: Record<string, string> = {
  '/': 'Home',
  '/book-a-demo': 'Book a Demo',
  '/ad-creative-uploader': 'Ad Creative Uploader',
  '/ai-assistant': 'AI Assistant',
  '/launch': 'Launch',
  '/pricing': 'Pricing',
  '/customers': 'Customers',
  '/privacy-policy': 'Privacy Policy',
}

const PAGE_CATEGORY_MAP: Record<string, string> = {
  '/': 'marketing',
  '/book-a-demo': 'conversion',
  '/ad-creative-uploader': 'free_tool',
  '/ai-assistant': 'product',
  '/launch': 'product',
  '/pricing': 'conversion',
  '/customers': 'social_proof',
  '/privacy-policy': 'legal',
}

export const getPageName = (pathname: string): string => {
  if (PAGE_NAME_MAP[pathname]) return PAGE_NAME_MAP[pathname]
  if (pathname.startsWith('/use-cases/')) {
    const slug = pathname.replace('/use-cases/', '')
    return `Use Case: ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
  }
  if (pathname.startsWith('/customers/')) {
    return `Case Study: ${pathname.replace('/customers/', '')}`
  }
  return pathname
}

export const getPageCategory = (pathname: string): string => {
  if (PAGE_CATEGORY_MAP[pathname]) return PAGE_CATEGORY_MAP[pathname]
  if (pathname.startsWith('/use-cases/')) return 'use_case'
  if (pathname.startsWith('/customers/')) return 'social_proof'
  return 'other'
}

export const extractUtmParams = (searchParams: URLSearchParams): Record<string, string> => {
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const params: Record<string, string> = {}
  for (const key of utmKeys) {
    const value = searchParams.get(key)
    if (value) params[key] = value
  }
  return params
}
