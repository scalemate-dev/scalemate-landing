import { SyncVisual, ConfigVisual, LaunchVisual } from "./HowItWorksVisuals"

export const data = {
  metadata: {
    title:
      "Bulk Ad Launch Tool – Launch Hundreds of Ads in Minutes | Scalemate",
    description:
      "A bulk ad launch tool removes the manual grind from campaign deployment, no more slow launches or hours spent on repetitive setup.",
    alternates: {
      canonical: "https://www.scalemate.co/use-cases/bulk-ad-launch",
    },
    openGraph: {
      title:
        "Bulk Ad Launch Tool — Launch Hundreds of Ads in Minutes | Scalemate",
      description:
        "A bulk ad launch tool that removes the manual grind from campaign deployment. Bulk-create hundreds of ad sets and launch at scale.",
      url: "https://www.scalemate.co/use-cases/bulk-ad-launch",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Bulk Ad Launch Tool — Launch Hundreds of Ads in Minutes | Scalemate",
      description:
        "Bulk-create hundreds of ad sets, sync creatives from cloud storage, and launch at scale with Scalemate.",
    },
  },

  hero: {
    label: "Ads launcher",
    title: "Launch Hundreds of Ads with",
    titleAccent: "Bulk Ad Launch tool",
    description:
      "A bulk ad launch tool removes the manual grind from campaign deployment, no more slow launches or hours spent on repetitive setup. One setup covers the full workflow:",
    features: [
      "Hundreds of ad sets from one setup",
      "Sync creatives from cloud storage",
      "Full control over campaign structure",
    ],
    aside:
      "The entire process, from creative sync to live campaigns, runs in minutes. No more assembling ad sets by hand or waiting days for a launch.",
  },

  problem: {
    label: "The Problem",
    title: "Why Manual Ad Launches",
    titleAccent: "Don't Scale",
    subtitle:
      "Three bottlenecks keep media buyers stuck: repetitive setup, slow creative-to-campaign handoff, and the pressure to hire just to keep up.",
    problems: [
      {
        title: "Every Campaign is the same repetitive workflow",
        description:
          "Launching ads one by one means repeating the same sequence per ad set – creative, resolutions, targeting – multiplying errors across every language and placement.",
      },
      {
        title: "New Ad Creatives wait days before testing starts",
        description:
          "Mass ad campaign creation still means building each ad set by hand – manual campaign setup takes hours, and every day creatives sit untested is a day without data.",
      },
      {
        title: "More Scale = More People?",
        description:
          "Scaling ads without hiring buyers is possible when tooling removes the bottleneck – without it, slow campaign launches become the norm.",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "The Difference",
    title: "What changes with Scalemate",
    subtitle: "The gap between manual and automated deployment is measurable.",
    before: {
      title: "Manual setup eats entire week",
      text: "One concept, ten markets – ten ad sets, each built by hand. 3–5x longer than it should take.",
    },
    after: {
      title: "Hundreds of Ads from one setup",
      text: (
        <>
          Scalemate&apos;s <strong>bulk ad launch tool</strong> automates the
          entire deployment – creatives sync from cloud storage, campaign
          structures configured once, applied across hundreds of ad sets.
        </>
      ),
    },
    metrics: [
      { value: "3x", prefix: "faster", desc: "than manual campaign setup" },
      { value: "65%", prefix: "faster", desc: "creative deployment" },
      {
        value: "25%+",
        prefix: "reduction",
        desc: "in weekly operational hours",
      },
    ],
    leadIn: (
      <>
        What used to be a repetitive ad creation workflow now runs
        automatically. No more launching ads one by one —{" "}
        <strong>mass ad campaign creation</strong> becomes the default.
      </>
    ),
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How the Bulk Ad Launch Tool Works",
    subtitle:
      "Three steps replace the manual pipeline — from cloud storage to live campaigns across Meta & TikTok.",
    steps: [
      {
        number: "01",
        title: "Sync Ad Creatives from Cloud Storage",
        description:
          "Scalemate connects to Google Drive, NextCloud, or other storage and pushes creatives into Meta and TikTok Media Library – with deduplication and filtering built in",
        Visual: SyncVisual,
      },
      {
        number: "02",
        title: "Set Campaign parameters once",
        description:
          "Budget, targeting, placements, naming conventions, ads distribution rules, configured once and saved to smart template",
        Visual: ConfigVisual,
      },
      {
        number: "03",
        title: "Launch all Ads at once",
        description:
          "Bulk ad deployment software that deploys hundreds of ad sets in one action — the launch ads at scale tool handles the volume, the team handles the decisions",
        Visual: LaunchVisual,
      },
    ],
  },

  results: {
    eyebrow: "Proven Results",
    title: "Results Teams Get With the",
    titleAccent: "Bulk Ad Launch Tool",
    subtitle:
      "Two examples — from education to gaming, across web and mobile apps.",
    caseStudies: [
      {
        company: "KitUp",
        vertical: "Education · 1M+ users",
        title: "15,000+ Ads Launched, 35 Hours Saved Monthly",
        description:
          "KitUp (education, 1M+ users) adopted Scalemate as their bulk facebook ad creation tool for one-ad-per-ad-set campaigns. Manual campaign setup takes hours — KitUp shifted that time to strategic analysis and creative iteration.",
        href: "/customers/kitup",
        metrics: [
          { value: "15,000+", label: "Ads launched" },
          { value: "35hrs", label: "Saved per month" },
          { value: "25%+", label: "Hours reduced weekly" },
        ],
      },
      {
        company: "ZeptoLab",
        vertical: "Gaming · 2B+ downloads",
        title: "70% Faster Creative Deployment, 2,000+ Files Processed",
        description:
          "ZeptoLab (Cut the Rope, 2B+ downloads) needed bulk ad deployment software — moving creatives from NextCloud to Facebook manually meant downloading and re-uploading every file. The hours previously spent on manual file transfers went back into campaign optimization and creative testing.",
        href: "/customers/zeptolab",
        metrics: [
          { value: "2,000+", label: "Media files delivered" },
          { value: "70%", label: "Upload time reduced" },
          { value: "35hrs", label: "Freed monthly" },
        ],
      },
    ],
  },

  audience: {
    title: "Who Bulk Ad Launch Is For",
    subtitle:
      "Built for teams where campaign volume outpaces capacity – a bulk ad launch tool removes a different bottleneck for each function.",
    roles: [
      {
        role: "Media Buyers & Performance Managers",
        description:
          "Create ads in bulk meta using a bulk facebook ad creation tool, without building each ad set by hand.",
      },
      {
        role: "Creative Managers & Directors",
        description:
          "Deploy creative variations across markets and languages without manual handoff.",
      },
      {
        role: "Founders & Marketing Leaders",
        description:
          "Scaling ads without hiring buyers becomes realistic when tooling replaces headcount.",
      },
    ],
    industryLabel:
      "Scalemate fits any industry running paid acquisition with high creative volume:",
    industries: [
      "Marketing Agencies",
      "Mobile Apps & Web Utilities",
      "Gaming Studios",
      "Education Platforms",
      "E-commerce Brands",
      "Any Vertical With Constant Creative Testing",
    ],
    footer: "If ad volume grows faster than the team, the tool applies.",
  },

  faq: [
    {
      question: "What is a bulk ad launch tool?",
      answer:
        "A bulk ad launch tool automates the creation and deployment of multiple ad sets simultaneously, replacing the manual process of building each campaign element by hand inside an ad platform. Instead of configuring each ad set individually \u2014 selecting creatives, setting targeting, assigning budgets \u2014 the tool applies one configuration across hundreds of ad sets at once. This is especially valuable for teams running multi-language, multi-concept campaigns where combinations multiply quickly.",
    },
    {
      question: "How many ads can Scalemate launch at once?",
      answer:
        "There\u2019s no fixed cap \u2014 teams have launched over 56 ad sets in a single batch with Scalemate. The limit depends on campaign structure and account settings, not the tool itself. Most teams scale batch size gradually as they build confidence in their setup and naming conventions.",
    },
    {
      question: "What campaign structures does Scalemate support?",
      answer:
        "It\u2019s not limited to one structure. Teams define how ads get distributed across campaigns and ad sets based on their own approach. For example, all creatives from one concept can go into a single ad set or campaign, with AI diversifying variations automatically. One-ad-per-ad-set is also fully supported, it gives teams control over spend per creative and ensuring each ad gets enough impressions for fair testing.",
    },
    {
      question: "Can teams create ads in bulk for Meta (Facebook & Instagram)?",
      answer:
        "Yes. Scalemate is a bulk facebook ad creation tool that integrates directly with Meta\u2019s advertising infrastructure. It enables mass campaign deployment across both Facebook and Instagram placements from a single configuration. Teams create ads in bulk meta without switching between multiple interfaces.",
    },
    {
      question: "Which cloud storage platforms does Scalemate integrate with?",
      answer:
        "Google Drive and NextCloud are supported natively, with custom integrations available for other storage providers. The connection runs through a direct API sync \u2014 no browser extensions, plugins, or manual exports required. Once connected, teams select which folders or files to push into Meta\u2019s Media Library, with automatic deduplication handling the rest. Need a custom cloud storage integration? Contact us to discuss your setup.",
    },
    {
      question: "How long does it take to set up a bulk ad launch?",
      answer:
        "Initial onboarding includes dedicated setup and configuration. Once live, the launch ads at scale tool deploys hundreds of ads in minutes \u2014 compared to the days or weeks required manually. Most teams complete onboarding and run their first bulk launch within the first week.",
    },
    {
      question: "Which ad platforms are supported for bulk ad launch?",
      answer:
        "Scalemate currently supports bulk ad launch across Meta (Facebook & Instagram), TikTok, and Google Ads. The same workflow applies \u2014 configure once, deploy across ad sets in minutes. If your team runs campaigns on a platform not yet listed, Scalemate accepts custom integration requests.",
    },
    {
      question:
        "How is this different from Facebook Ads Manager's bulk features?",
      answer:
        "Facebook\u2019s native tools support basic duplication but lack cloud-to-platform sync, structural automation at scale (like one-ad-per-ad-set across hundreds of ad sets), and deduplication. Scalemate is purpose-built for high-volume marketing teams that need speed and structural control beyond what the native platform offers. Where Ads Manager requires assembling each ad set through its interface, Scalemate generates campaign structures in bulk from a single configuration \u2014 including naming conventions, placements, and budget allocation.",
    },
  ],

  cta: {
    title: "Book a Demo — Bulk Ad Launch Tool",
    description: (
      <>
        Replace slow campaign launches with a{" "}
        <strong>bulk ad launch tool</strong> built for high-volume marketing
        teams.
      </>
    ),
  },
}
