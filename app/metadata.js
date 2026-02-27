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

// const pricingMetadata = {
//   title: "Pricing & Free Trial | Scalemate",
//   alternates: { canonical: "https://www.scalemate.co/pricing" },
//   description:
//     "Explore Scalemate's transparent pricing for every marketing team. Compare monthly, quarterly, and yearly plans. Manage all your ad accounts in one place, automate bulk ad launches, and streamline your marketing workflow with our next-gen AI assistant. Free trial, dedicated onboarding, and custom integrations available.",
//   keywords:
//     "free AI marketing tool, free ad management software, free trial marketing automation, AI ad platform, marketing automation, ad management, ad automation, Facebook ads tool, TikTok ads tool, Google Ads tool, bulk ad launch, campaign management, scalable marketing software, marketing software pricing, ad software free trial, digital marketing platform, marketing AI, ad campaign automation, scalable ad management, marketing tool for teams, ad software for business",
//   openGraph: {
//     title: "Transparent Pricing for Marketing Teams | Scalemate",
//     description:
//       "Discover Scalemate's transparent pricing for every marketing team. Compare monthly, quarterly, and yearly plans. Manage all your ad accounts in one place, automate bulk ad launches, and streamline your marketing workflow with our next-gen AI assistant.",
//     images: [{ url: "/og-image.png" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Transparent Pricing for Marketing Teams | Scalemate",
//     description:
//       "Discover Scalemate's transparent pricing for every marketing team. Compare monthly, quarterly, and yearly plans. Manage all your ad accounts in one place, automate bulk ad launches, and streamline your marketing workflow with our next-gen AI assistant.",
//     images: ["/og-image.png"],
//   },
// }

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
    title: "Scalemate: Book a Demo — Launch Ads 3x Faster",
    alternates: { canonical: "https://www.scalemate.co/book-a-demo" },
    description:
      "Experience the power of automation for ads management. Book a demo with Scalemate to see how you launch your ads 3x faster.",
    openGraph: {
      url: "https://www.scalemate.co/book-a-demo",
      type: "website",
      title: "Scalemate: Book a Demo — Launch Ads 3x Faster",
      description:
        "Get a personalized demo of Scalemate and learn how our tool can triple your ads management speed on Facebook and beyond.",
      images: [{ url: "/og-image-demo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Scalemate: Book a Demo — Launch Ads 3x Faster",
      description:
        "Get a personalized demo of Scalemate and learn how our tool can triple your ads management speed on Facebook and beyond.",
      images: ["/og-image-demo.png"],
    },
  },
  customers: customersMetadata,
  assistant: assistantMetadata,
  // pricing: pricingMetadata,
}
