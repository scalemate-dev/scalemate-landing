export const defaultMetadata = {
  title: "Smarter Way to Automate Ads Management | Scalemate",
  description:
    "Launch hundreds of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
  keywords:
    "Facebook ads automation software, Scale ad campaigns smarter, Bulk Facebook ads launch, Automate ad creatives upload, Save time with Facebook ad automation, Cut ad launch costs by 90%, Marketing automation software for facebook ads, Ad management tools for marketers, Launch ads",
  openGraph: {
    title: "Smart Way to Automate Ads Management – Scalemate",
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
    title: "Smart Way to Automate Ads Management – Scalemate",
    description:
      "Launch hundreds of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
    images: ["https://www.scalemate.co/twitter-og-image.png"],
  },
}

const customersMetadata = {
  title: "Customer Success Stories | Scalemate",
  description:
    "Discover how Scalemate automates marketing processes, optimizes ad management, and helps businesses scale faster with better performance.",
  alternates: { canonical: "https://www.scalemate.co/customers" },
  keywords:
    "marketing automation, ads automation, Scalemate, case study, customer success stories",
  openGraph: {
    title: "Customer Success Stories | Scalemate",
    description:
      "Discover how Scalemate automates marketing processes, optimizes ad management, and helps businesses scale faster with better performance.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Success Stories | Scalemate",
    description:
      "Discover how Scalemate automates marketing processes, optimizes ad management, and helps businesses scale faster with better performance.",
    images: ["/og-image.png"],
  },
}

const assistantMetadata = {
  title: "Marketing AI Assistant | Scalemate",
  alternates: { canonical: "https://www.scalemate.co/ai-assistant" },
  description:
    "Experience next-generation Ads management with Scalemate AI Assistant. Control budgets, launch campaigns, upload creatives, generate reports, get smart recommendations and unlock insights. All via an AI-powered chat",
  keywords:
    "Marketing AI Assistant, Ad management AI, AI for Ad management, AI for Facebook ads, AI for Google ads, Scalemate",
  openGraph: {
    title: "Marketing AI Assistant | Scalemate",
    description:
      "Experience next-generation Ads management with Scalemate AI Assistant. Control budgets, launch campaigns, upload creatives, generate reports, get smart recommendations and unlock insights. All via an AI-powered chat",
    images: ["/og-image-assistant.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing AI Assistant | Scalemate",
    description:
      "Experience next-generation Ads management with Scalemate AI Assistant. Control budgets, launch campaigns, upload creatives, generate reports, get smart recommendations and unlock insights. All via an AI-powered chat",
    images: ["/og-image-assistant.png"],
  },
}

export const pageMetadata = {
  home: defaultMetadata,
  launch: {
    title: "Automate Ad Launching | Scalemate",
    alternates: { canonical: "https://www.scalemate.co/launch" },
    description:
      "Bulk ads launches in minutes with Scalemate. Automate ad creatives upload and set automated workflows.",
    keywords:
      "Bulk ads launches, automated ads launch, launch ads from google drive, ad templates, campaign tempaltes, automated campaign launch, automated creative upload, automated rules",
    openGraph: {
      title: "Automate Ad Launching | Scalemate",
      description:
        "Bulk ads launches in minutes with Scalemate. Automate ad creatives upload and set automated workflows.",
      images: [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Automate Ad Launching | Scalemate",
      description:
        "Launch hundreds of Ads in minutes with Scalemate. Automate ad creatives upload and set automated workflows.",
      images: ["/og-image.png"],
    },
  },
  bookDemo: {
    title: "Book a Demo | Scalemate",
    alternates: { canonical: "https://www.scalemate.co/book-a-demo" },
    description:
      "Experience the power of automation for ads management. Book a demo with Scalemate to see how you launch your ads 3x faster.",
    keywords:
      "Book demo facebook ads automation, Scalemate demo, facebook ads automation free trial, cross-platform adds launch, schedule Scalemate demo, ads management automation free trial",
    openGraph: {
      title: "Book a Demo And See how fast you can launch ads",
      description:
        "Get a personalized demo of Scalemate and learn how our tool can triple your ads management speed on Facebook and beyond.",
      images: [{ url: "/og-image-demo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Book a Demo – And See how fast you can launch ads",
      description:
        "Get a personalized demo of Scalemate and learn how our tool can triple your ads management speed on Facebook and beyond.",
      images: ["/og-image-demo.png"],
    },
  },
  customers: customersMetadata,
  assistant: assistantMetadata,
}
