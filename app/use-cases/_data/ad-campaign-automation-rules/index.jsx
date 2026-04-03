import {
  ThresholdVisual,
  ActionVisual,
  MonitorVisual,
} from "./HowItWorksVisuals"

export const data = {
  metadata: {
    title:
      "Ad Automation Rules: Auto-Pause by ROAS & Scale | Scalemate",
    description:
      "Set rules to auto-pause losers by ROAS, scale winners, and roll back if performance drops. Runs 24/7 on Meta and TikTok. No manual checks needed.",
    alternates: {
      canonical:
        "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
    },
    openGraph: {
      title:
        "Ad Automation Rules: Auto-Pause by ROAS & Scale | Scalemate",
      description:
        "Set rules to auto-pause losers by ROAS, scale winners, and roll back if performance drops. Runs 24/7 on Meta and TikTok.",
      url: "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Ad Automation Rules: Auto-Pause by ROAS & Scale | Scalemate",
      description:
        "Set rules to auto-pause losers by ROAS, scale winners, and roll back if performance drops. Runs 24/7 on Meta and TikTok.",
    },
  },

  hero: {
    label: "Automation Rules",
    title: "Stop Babysitting, Start Scaling with",
    titleAccent: "Ad Campaign Automation Rules",
    description:
      "Ad campaign automation rules replace manual optimization with logic that runs 24/7 – conditions defined once, applied across every campaign:",
    features: [
      "Auto-pause ads by ROAS, CPI, or spend thresholds",
      "Scale winning creatives automatically",
      "Budget alerts and safeguards against overspend",
    ],
    aside:
      "Rules catch budget leaks at 2 AM and scale winners before the team logs in.",
  },

  problem: {
    label: "The Problem",
    title: "Why Manual Campaign Optimization",
    titleAccent: "Costs More Than You Think",
    subtitle:
      "Three patterns drain budget and time for media buyers running campaigns at scale: repetitive monitoring, overnight risk, and delayed scaling.",
    problems: [
      {
        title:
          "\u201CCheck, Pause, Bump\u201D — Every Single Day",
        description:
          "Checking ROAS every day: that\u2019s life for any UA manager running fifty-plus campaigns. ROAS below threshold \u2192 pause. CPI above limit \u2192 reduce. Adjusting bids manually across platforms means the same logic repeated three times, by hand.",
      },
      {
        title: "One Forgotten Cap Burns a Monthly Budget",
        description:
          "Pausing losing ads manually works at low volume. At fifty campaigns across four accounts, watching ads 24/7 is impossible. One forgotten cap, one weekend left unchecked, burns a monthly budget in a day.",
      },
      {
        title: "Winners Go Unnoticed or Scale Too Late",
        description:
          "Winners stay buried in dashboards no one checks fast enough. The ones spotted take days to scale: tripling budget feels dangerous without automated rollback. Manual campaign babysitting can\u2019t catch every winner in time. Automated scaling acts without hesitation.",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "The Difference",
    title: "What Changes With Automation Rules",
    subtitle:
      "Replacing reactive optimization with ad campaign automation rules delivers measurable results – in hours saved and budget protected.",
    before: {
      title: "Dashboards Open All Day, Still Reacting Too Late",
      text: "A campaign underperforms at 2 AM, gets caught at 9 AM – seven hours later. Something breaks \u2192 someone notices \u2192 someone acts. That gap is where budget leaks.",
    },
    after: {
      title: "Rules React in Real Time, Even Offline",
      text: (
        <>
          <strong>Ad campaign automation rules</strong> collapse that gap. The
          system checks continuously and acts when thresholds cross:
        </>
      ),
    },
    metrics: [
      {
        value: "32%",
        prefix: "budget",
        desc: "savings through automated pause and scaling",
      },
      {
        value: "62%",
        prefix: "reduction",
        desc: "in ad management time on routine optimization",
      },
      {
        value: "24/7",
        prefix: "protection",
        desc: "with spend limits and anomaly alerts",
      },
    ],
    leadIn: (
      <>
        Winners scaled within hours, not stretched across a week. The rules
        handle the mechanics. The team handles the thinking.
      </>
    ),
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How Ad Campaign Automation Rules Work",
    subtitle:
      "Three steps replace the manual optimization cycle, from setting conditions to automated execution across campaigns.",
    steps: [
      {
        number: "01",
        title: "Set Performance Thresholds",
        description:
          "Every rule starts with a condition: ROAS below 1.5, CPI exceeds target by 20%, or $500 spent without conversion. Scalemate\u2019s rules engine for ad campaigns supports any metric-based condition: ROAS, CPI, IPM, CTR, spend. For teams running automated bid management meta campaigns at scale, this replaces manual scanning of ad sets.",
        Visual: ThresholdVisual,
      },
      {
        number: "02",
        title: "Define Actions: Pause, Scale, or Alert",
        description:
          "Auto-pause: auto pause ads ROAS below a threshold, set the rule once. Auto-scale: automate budget scaling ads when winners hit targets, closing the gap between spotting and funding. Bid adjustments shift on real-time signals, keeping CPAs in range. Plus alerts when metrics move outside normal ranges.",
        Visual: ActionVisual,
      },
      {
        number: "03",
        title: "Rules Run 24/7 – The Team Focuses on Strategy",
        description:
          "Once configured, the rules engine for ad campaigns covers the full loop: monitor → decide → act → rollback. The system runs continuously: nights, weekends, holidays. The work shifts from “what needs fixing” to “what to test next week.”",
        Visual: MonitorVisual,
      },
    ],
  },

  results: {
    eyebrow: "Proven Results",
    title: "Results Teams Get With",
    titleAccent: "Ad Campaign Automation Rules",
    subtitle:
      "Across Scalemate users, from mobile apps studios to e-commerce teams, the pattern is consistent:",
    caseStudies: [
      {
        company: "Scalemate Platform",
        vertical: "Meta campaigns",
        description:
          "Measured outcomes from production rules across Meta, from mobile apps studios to e-commerce teams.",
        metrics: [
          { value: "32%", label: "Average budget savings" },
          { value: "62%", label: "Less time on routine ad management" },
          { value: "53K+", label: "Hours saved across the platform" },
        ],
        footer:
          "Whether teams auto pause ads ROAS-based or automate budget scaling ads on winners, the pattern holds: less manual work, better outcomes.",
      },
    ],
  },

  audience: {
    title: "Who Automation Rules Are For",
    subtitle:
      "Ad campaign automation rules are built for teams where campaign volume outpaces manual capacity, whether the bottleneck is with buyers or leadership.",
    roles: [
      {
        role: "Performance Marketing Managers & Media Buyers",
        description:
          "A facebook ads automation rules tool that pauses underperformers, scales winners, and protects budgets. Automated bid management meta campaigns at scale, from one interface.",
      },
      {
        role: "Founders & Marketing Leaders",
        description:
          "Ad campaign automation rules reduce two risks: budget waste from delayed reactions and missed revenue from cautious scaling",
      },
    ],
    industryLabel:
      "Automation rules apply wherever paid acquisition runs at volume:",
    industries: [
      "Marketing Agencies",
      "Mobile Apps & Gaming Studios",
      "E-commerce Brands",
      "Education Platforms",
      "Any Vertical With Constant Campaign Optimization",
    ],
    footer:
      "If the team monitors campaigns manually, rules remove that overhead.",
  },

  faq: [
    {
      question: "What are ad campaign automation rules?",
      answer:
        "Automation rules are conditional triggers that execute predefined actions on campaigns based on performance metrics. When a metric crosses a set threshold, the system automatically pauses, scales, adjusts bids, or sends an alert – without manual intervention. Rules run continuously – covering nights, weekends, and holidays – replacing the manual check-and-react cycle that most marketing teams repeat daily.",
    },
    {
      question:
        "How do Scalemate\u2019s rules differ from Meta\u2019s built-in rules?",
      answer:
        "Meta\u2019s native rules cover basic conditions within a single account. Scalemate extends this with cross-account management, automated scaling with rollback, and budget safeguards across the entire portfolio. For teams seeking a comprehensive facebook ads automation rules tool, the difference is most visible at scale: native rules require per-account configuration while Scalemate applies logic across the full portfolio from one interface.",
    },
    {
      question: "Can rules automatically pause ads based on ROAS?",
      answer:
        "Yes. Teams configure a ROAS floor – for example, below 1.2 for more than 24 hours – and the system pauses the ad set automatically. Threshold, time window, and action are all configurable per campaign or across the entire account. This replaces the manual cycle of scanning dashboards every few hours and catching underperformers before they drain budget overnight.",
    },
    {
      question: "How does automated budget scaling work?",
      answer:
        "When a campaign meets performance targets (ROAS above threshold, CPI below limit), rules increase the budget by a configured percentage. If performance drops after scaling, the rollback triggers automatically. This removes the hesitation that slows manual scaling – the system scales and corrects faster than a buyer checking metrics every few hours.",
    },
    {
      question:
        "What happens when a rule triggers – can the team review before it acts?",
      answer:
        "Rules can be set to auto-execute or alert-only – depending on how much control the team wants to retain. Alert-only mode notifies via Slack or email without taking action, giving the team a chance to review before responding. Auto-execute acts immediately – the right mode for budget protection, overnight optimization, and any scenario where a delayed reaction costs money. Most teams use a mix: auto-execute for budget safeguards and pause rules, alert-only for scaling decisions that benefit from human review.",
    },
    {
      question: "Does Scalemate support rules for other platforms beyond Meta?",
      answer:
        "The rules engine for ad campaigns is built on Meta today, covering the full range of campaign, ad set, and ad-level automation. All condition-action logic, including auto-pause, auto-scale, bid adjustments, and alerts, works across multiple Meta ad accounts from a single dashboard. Support for additional platforms is on the roadmap. If your team runs campaigns beyond Meta, Scalemate accepts custom integration requests.",
    },
  ],

  cta: {
    title: "Book a Demo – Ad Campaign Automation Rules",
    description: (
      <>
        Replace daily optimization grind with{" "}
        <strong>ad campaign automation rules</strong> built for high-volume
        performance teams.
      </>
    ),
  },
}
