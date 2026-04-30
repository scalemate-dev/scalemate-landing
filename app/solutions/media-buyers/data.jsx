import Link from "next/link"
import { SyncVisual, BulkLaunchVisual, RulesVisual } from "./HowItWorksVisuals"

export const data = {
  metadata: {
    title:
      "Media Buyer Automation Tools – Scale Results, Not Hours | Scalemate",
    description:
      "Media buyer automation tools: auto-upload creatives, bulk-launch hundreds of ad sets, and automation rules that optimize Meta & TikTok campaigns 24/7.",
    alternates: {
      canonical: "https://www.scalemate.co/solutions/media-buyers",
    },
    openGraph: {
      title:
        "Media Buying Workflow Automation – Scale Results, Not Hours | Scalemate",
      description:
        "Tools for media buyers automation: auto-upload creatives to Meta and TikTok, bulk-launch hundreds of ad sets, and automation rules that optimize 24/7.",
      url: "https://www.scalemate.co/solutions/media-buyers",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Media Buying Workflow Automation – Scale Results, Not Hours | Scalemate",
      description:
        "Tools for media buyers automation: auto-upload creatives, bulk-launch ads, and rules that optimize 24/7.",
    },
  },

  hero: {
    label: "Solutions for Media Buyers",
    title: "Media Buying Workflow Automation.",
    titleAccent: "Scale Results, Not Hours",
    description:
      "Tools for media buyers automation that handle the grind, so the daily optimization routine stops following you home",
    features: [
      "Auto-upload creatives to Meta and TikTok from cloud storage",
      "Bulk-launch hundreds of ad sets from one setup",
      "Automation rules that optimize 24/7",
    ],
    aside:
      "The entire process – from creative sync to live campaigns to ongoing optimization – runs automatically. No more assembling ad sets by hand or checking dashboards every morning.",
  },

  problem: {
    label: "The Problem",
    title: "More Ads to Run.",
    titleAccent: "Same Manual Process.",
    subtitle:
      "You can manage it all by hand – most buyers do. But more volume just means more hours, more pressure not to miss anything, and the same repetitive media buying tasks on repeat.",
    problems: [
      {
        title: "Every Ad Launch Is the Same Manual Setup",
        description:
          "Upload. Duplicate. Set targeting. Name. Repeat. For every language, placement, and concept. Five creatives times fifteen languages is a full week of the same manual campaign setup.",
      },
      {
        title: "The Daily Optimization Routine Never Ends",
        description:
          "Check metrics. Pause underperformers. Scale what works. Repeat tomorrow. And the day after. Managing too many campaigns means the routine runs your calendar – no time for strategy, only execution.",
      },
      {
        title: "One Missed Metric Means a Blown Budget",
        description:
          "Miss a CPI spike or a spend anomaly, and the monthly budget evaporates in a day. That\u2019s what tools for media buyers automation are built to fix.",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "The Difference",
    title: "What Changes With Scalemate",
    subtitle:
      "Most tools for media buyers automation make the same process faster. Scalemate removes the manual part.",
    before: {
      title: "Manual setup eats every day",
      text: "Upload files, duplicate ad sets, set targeting. Manually, for every combination. Check metrics, pause, scale. Every day, by hand. Miss one spike – lose a day\u2019s budget.",
    },
    after: {
      title: "One config – campaigns handled",
      text: (
        <>
          One config &rarr; hundreds of ad sets live. Auto-pause losers,
          increase budget on winners, duplicate what works. 24/7. Auto-pause on
          anomalies, alerts on overspend.{" "}
          <strong>User acquisition automation tools</strong> that replace the
          routine entirely.
        </>
      ),
    },
    metrics: [
      { value: "62%", prefix: "less", desc: "time on ad management" },
      { value: "260%", prefix: "faster", desc: "campaign launches" },
      { value: "80%", prefix: "automation", desc: "of launches and rotations" },
    ],
    leadIn: (
      <>
        Here&apos;s the workflow before and after adopting{" "}
        <strong>user acquisition automation tools</strong> – the shift is
        measurable across every team using Scalemate.
      </>
    ),
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How Scalemate Tools for Media Buyers Automation Work",
    subtitle:
      "Among tools for media buyers automation, Scalemate follows a clear 3-step pipeline – media buying workflow automation from creative storage to live optimization.",
    steps: [
      {
        number: "01",
        title: "Get Creatives Into Ad Platforms Automatically",
        description: (
          <>
            Connect Google Drive or NextCloud. Scalemate pushes creatives into
            Meta and TikTok Media Libraries automatically, with filtering and
            deduplication via the{" "}
            <Link href="/ad-creative-uploader">Ad Creative Uploader</Link> built
            in.
          </>
        ),
        Visual: SyncVisual,
      },
      {
        number: "02",
        title: "Launch Campaigns in Bulk",
        description: (
          <>
            Define budget, targeting, and naming once.{" "}
            <Link href="/launch">Bulk Launch</Link> turns it into hundreds of ad
            sets across concept &times; language &times; GEO. AI recognizes
            creatives from the same concept and splits them into separate ad
            sets automatically.
          </>
        ),
        Visual: BulkLaunchVisual,
      },
      {
        number: "03",
        title: "Set Rules That Optimize Campaigns 24/7",
        description: (
          <>
            ROAS drops &rarr; pause. CPI spikes &rarr; cut budget. Winner
            emerges &rarr; scale. Set conditions once.{" "}
            <Link href="/use-cases/ad-campaign-automation-rules">
              Automation Rules
            </Link>{" "}
            handle the daily optimization routine 24/7, with built-in budget
            protection and alerts. This is{" "}
            <strong>facebook ads automation software</strong> that actually
            replaces the daily check, not just speeds it up.
          </>
        ),
        Visual: RulesVisual,
      },
    ],
  },

  results: {
    eyebrow: "Proven Results",
    title: "Results Media Buyers Get With",
    titleAccent: "Scalemate",
    subtitle:
      "What happens when tools for media buyers automation actually work. Numbers from real teams, not projections.",
    caseStudies: [
      {
        company: "KitUp",
        vertical: "Education \u00b7 1M+ users",
        title: "15,000+ Ads Launched, 35 Hours Saved Monthly",
        description:
          "KitUp ran one-ad-per-ad-set campaigns requiring manual setup for every combination. After adopting Scalemate, the day stopped being about clicking through the same screens. The work that\u2019s left is the work that\u2019s actually interesting.",
        href: "/customers/kitup",
        metrics: [
          { value: "15,000+", label: "Ads launched" },
          { value: "35hrs", label: "Saved per month" },
          { value: "65%", label: "Faster uploads" },
          { value: "25%+", label: "Hours reduced weekly" },
        ],
      },
    ],
  },

  aggregate: {
    metrics: [
      { value: "260%", label: "faster campaign launches" },
      { value: "62%", label: "reduction in ad management time" },
      { value: "80%", label: "automation of launches and rotations" },
      { value: "2M+", label: "ads launched" },
    ],
  },

  audience: {
    title: "Who It\u2019s Built For",
    subtitle:
      "Scalemate\u2019s user acquisition automation tools fit teams where ad volume outpaces manual capacity:",
    roles: [
      {
        role: "Performance Marketers on High-Volume Meta",
        description:
          "Multilingual rotation, hundreds of ad sets per launch. The bulk of the work is structural – and now it\u2019s automated.",
      },
      {
        role: "Buyers Managing Multiple Platforms",
        description: (
          <>
            Meta + TikTok + Google Drive, same manual steps repeated across
            each. Scalemate unifies the workflow.
          </>
        ),
      },
      {
        role: "Teams Scaling Volume Without Scaling Headcount",
        description:
          "More tests, same team. Tools for media buyers automation let you grow output without growing the roster.",
      },
    ],
    industryLabel:
      "Industries: any product running creative-driven paid acquisition.",
    industries: [
      "Mobile Games",
      "Web Games",
      "Dating Apps",
      "Utilities",
      "E-Commerce",
    ],
    footer: (
      <>
        From mobile apps to web platforms.
      </>
    ),
  },

  faq: [
    {
      question:
        "What tasks do tools for media buyers automation handle in Scalemate?",
      answer: (
        <>
          The repetitive media buying tasks that consume most of a buyer&apos;s
          day: creative uploads, campaign launches, daily optimization. Tools
          for media buyers automation handle these through cloud-to-platform
          sync, bulk deployment, and conditional rules. The buyer focuses on
          analysis and creative direction instead of ad set configurations. An
          AI agent handles reporting and campaign actions through chat.
        </>
      ),
      answerText:
        "The repetitive media buying tasks that consume most of a buyer\u2019s day: creative uploads, campaign launches, daily optimization. Tools for media buyers automation handle these through cloud-to-platform sync, bulk deployment, and conditional rules. The buyer focuses on analysis and creative direction instead of ad set configurations. An AI agent handles reporting and campaign actions through chat.",
    },
    {
      question: "How does Scalemate help media buyers reduce manual work?",
      answer: (
        <>
          Scalemate targets 3 workflows: creative delivery, campaign setup, and
          ongoing optimization. Cloud Sync eliminates file-by-file uploads, Bulk
          Launch removes repetitive ad set creation, Automation Rules replace
          the daily check-pause-scale loop. Combined, these make Scalemate one
          of the most effective{" "}
          <strong>tools for paid acquisition teams</strong>, reducing ad
          management time by 62% on average.
        </>
      ),
      answerText:
        "Scalemate targets 3 workflows: creative delivery, campaign setup, and ongoing optimization. Cloud Sync eliminates file-by-file uploads, Bulk Launch removes repetitive ad set creation, Automation Rules replace the daily check-pause-scale loop. Combined, these make Scalemate one of the most effective tools for paid acquisition teams, reducing ad management time by 62% on average.",
    },
    {
      question: "Which ad platforms does Scalemate support?",
      answer: (
        <>
          Meta (Facebook and Instagram) and TikTok. As{" "}
          <strong>facebook ads automation software</strong>, Scalemate
          integrates directly with Meta&apos;s API for deployment and rule-based
          optimization. Custom integrations for additional platforms are
          available on request.
        </>
      ),
      answerText:
        "Meta (Facebook and Instagram) and TikTok. As facebook ads automation software, Scalemate integrates directly with Meta\u2019s API for deployment and rule-based optimization. Custom integrations for additional platforms are available on request.",
    },
    {
      question:
        "How is Scalemate different from Birch (ex-Revealbot), Kitch, and AdsManage?",
      answer:
        "Most alternatives require you to adapt to their interface. Scalemate adapts to your process. You build custom workflows instead of rebuilding how your team works. The goal isn\u2019t to speed up the routine, it\u2019s to remove it entirely, so buyers can focus on what actually drives conversions: creatives, hypotheses, and testing strategy. The setup and media buying workflow automation layer runs automatically.",
    },
    {
      question:
        "Can media buyers use Scalemate for one-ad-per-ad-set campaigns?",
      answer:
        "Bulk Launch generates individual ad sets per creative automatically, maintaining clean spend data for valid testing. AI recognizes creatives from the same concept and assigns each to its own ad set, no manual sorting needed. Isolating creative performance from audience overlap ensures accurate budget allocation.",
    },
    {
      question: "How long does it take to set up Scalemate?",
      answer:
        "Onboarding covers ad platform connections, cloud storage integration, campaign templates, and initial automation rules. Most teams run their first automated workflow within the first week. No engineering resources required on the client side.",
    },
    {
      question: "Does Scalemate work with Google Drive and NextCloud?",
      answer:
        "Both are supported natively through direct API integration. No browser extensions, plugins, or manual exports. Teams select folders or files to sync into ad platform Media Libraries, with automatic deduplication handling the rest. New creatives added to the folder are picked up and synced automatically.",
    },
  ],

  cta: {
    title: "Book a Demo \u2014 See Tools for Media Buyers Automation in Action",
    description: (
      <>
        Less grind. Less stress.{" "}
        <strong>Automation tools for performance marketers</strong> that let you
        close the laptop and know campaigns are handled.
      </>
    ),
  },
}
