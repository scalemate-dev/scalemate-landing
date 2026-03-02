export const defaultMetadata = {
  title: "Scalemate: Launch & Scale Ad Campaigns 3x Faster",
  description:
    "Launch hundreds of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
  openGraph: {
    url: "https://www.scalemate.co",
    type: "website",
    title: "Scalemate: Launch & Scale Ad Campaigns 3x Faster",
    description:
      "Launch hundreds of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalemate: Launch & Scale Ad Campaigns 3x Faster",
    description:
      "Launch hundreds of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
    images: ["https://www.scalemate.co/twitter-og-image.png"],
  },
}

const customersMetadata = {
  title: "Scalemate: Customer Success Stories in Ad Automation",
  description:
    "Discover how Scalemate automates marketing processes, optimizes ad management, and helps businesses scale faster with better performance.",
  alternates: { canonical: "https://www.scalemate.co/customers" },
  openGraph: {
    url: "https://www.scalemate.co/customers",
    type: "website",
    title: "Scalemate: Customer Success Stories in Ad Automation",
    description:
      "Discover how Scalemate automates marketing processes, optimizes ad management, and helps businesses scale faster with better performance.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalemate: Customer Success Stories in Ad Automation",
    description:
      "Discover how Scalemate automates marketing processes, optimizes ad management, and helps businesses scale faster with better performance.",
    images: ["/og-image.png"],
  },
}

const assistantMetadata = {
  title: "Scalemate: AI Marketing Agent for Ads & Reporting",
  alternates: { canonical: "https://www.scalemate.co/ai-assistant" },
  description:
    "Experience next-generation Ads management with Scalemate AI Assistant. Control budgets, launch campaigns, upload creatives, generate reports, get smart recommendations and unlock insights. All via an AI-powered chat",
  openGraph: {
    url: "https://www.scalemate.co/ai-assistant",
    type: "website",
    title: "Scalemate: AI Marketing Agent for Ads & Reporting",
    description:
      "Experience next-generation Ads management with Scalemate AI Assistant. Control budgets, launch campaigns, upload creatives, generate reports, get smart recommendations and unlock insights. All via an AI-powered chat",
    images: ["/og-image-assistant.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalemate: AI Marketing Agent for Ads & Reporting",
    description:
      "Experience next-generation Ads management with Scalemate AI Assistant. Control budgets, launch campaigns, upload creatives, generate reports, get smart recommendations and unlock insights. All via an AI-powered chat",
    images: ["/og-image-assistant.png"],
  },
}

const pricingMetadata = {
  title: "Free Ad Automation Tool for Meta & TikTok – Scalemate Pricing",
  alternates: { canonical: "https://www.scalemate.co/pricing" },
  description:
    "Automate Meta and TikTok ad campaigns for free – 1 ad account, 2 rules, 100 launches/month, unlimited creative uploads. No credit card. Custom plans with API access and dedicated support for teams at scale.",
  openGraph: {
    url: "https://www.scalemate.co/pricing",
    type: "website",
    title: "Free Ad Automation for Meta & TikTok – Scalemate Pricing",
    description:
      "Automate Meta and TikTok ad campaigns for free – 1 ad account, 2 rules, 100 launches/month, unlimited creative uploads. No credit card. Custom plans with API access and dedicated support for teams at scale.",
    images: [{ url: "/og-pricing.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ad Automation for Meta & TikTok – Scalemate Pricing",
    description:
      "Automate Meta and TikTok ad campaigns for free – 1 ad account, 2 rules, 100 launches/month, unlimited creative uploads. No credit card. Custom plans with API access and dedicated support for teams at scale.",
    images: ["/og-pricing.png"],
  },
}

export const pageMetadata = {
  home: defaultMetadata,
  launch: {
    title: "Scalemate: Bulk Ad Launch for Meta & TikTok, 3x Faster",
    alternates: { canonical: "https://www.scalemate.co/launch" },
    description:
      "Bulk ad launches in minutes with Scalemate. Automate ad creatives upload and set automated workflows.",
    openGraph: {
      url: "https://www.scalemate.co/launch",
      type: "website",
      title: "Scalemate: Bulk Ad Launch for Meta & TikTok, 3x Faster",
      description:
        "Bulk ad launches in minutes with Scalemate. Automate ad creatives upload and set automated workflows.",
      images: [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Scalemate: Bulk Ad Launch for Meta & TikTok, 3x Faster",
      description:
        "Bulk ad launches in minutes with Scalemate. Automate ad creatives upload and set automated workflows.",
      images: ["/og-image.png"],
    },
  },
  bookDemo: {
    title: "Book a Demo – Automate Meta & TikTok Ad Campaigns | Scalemate",
    alternates: { canonical: "https://www.scalemate.co/book-a-demo" },
    description:
      "Book a 30-minute Scalemate demo. See how performance teams automate campaign setup, creative uploads, and scaling rules across Meta and TikTok — without adding headcount.",
    openGraph: {
      url: "https://www.scalemate.co/book-a-demo",
      type: "website",
      title: "Book a Demo – Automate Meta & TikTok Ad Campaigns | Scalemate",
      description:
        "Book a 30-minute Scalemate demo. See how performance teams automate campaign setup, creative uploads, and scaling rules across Meta and TikTok — without adding headcount.",
      images: [{ url: "/og-image-demo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Book a Demo – Automate Meta & TikTok Ad Campaigns | Scalemate",
      description:
        "Book a 30-minute Scalemate demo. See how performance teams automate campaign setup, creative uploads, and scaling rules across Meta and TikTok — without adding headcount.",
      images: ["/og-image-demo.png"],
    },
  },
  customers: customersMetadata,
  assistant: assistantMetadata,
  pricing: pricingMetadata,
}
