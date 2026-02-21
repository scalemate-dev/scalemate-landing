import { ThresholdVisual, ActionVisual, MonitorVisual } from "./HowItWorksVisuals"

export const data = {
  metadata: {
    title:
      "Ad Campaign Automation Rules – Stop Babysitting, Start Scaling | Scalemate",
    description:
      "Ad campaign automation rules replace manual optimization with logic that runs 24/7 — auto-pause ads by ROAS, scale winners automatically, and protect budgets around the clock.",
    alternates: {
      canonical:
        "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
    },
    openGraph: {
      title:
        "Ad Campaign Automation Rules — Stop Babysitting, Start Scaling | Scalemate",
      description:
        "Auto-pause ads by ROAS, scale winners automatically, and protect budgets 24/7 with ad campaign automation rules built for high-volume teams.",
      url: "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Ad Campaign Automation Rules — Stop Babysitting, Start Scaling | Scalemate",
      description:
        "Replace manual optimization with automation rules that pause losers, scale winners, and protect budgets around the clock.",
    },
  },

  hero: {
    label: "Automation Rules",
    title: "Stop Babysitting, Start Scaling with",
    titleAccent: "Ad Campaign Automation Rules",
    description:
      "Ad campaign automation rules replace manual optimization with logic that runs 24/7 — conditions defined once, applied across every campaign:",
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
      "Three patterns drain budget and time for media buyers running campaigns at scale — repetitive monitoring, overnight risk, and delayed scaling.",
    problems: [
      {
        title:
          '\u201CCheck Metrics, Pause Losers, Bump Winners\u201D — Every Single Day',
        description:
          "Open the dashboard. Scan metrics. Pause losers. Bump winners. Repeat every four hours. ROAS below threshold \u2014 pause. CPI above limit \u2014 reduce. Adjusting bids manually across platforms means the same logic repeated three times, by hand.",
      },
      {
        title: "One Forgotten Budget Cap Burns More Than a Month of Planning",
        description:
          "Pausing losing ads manually works at low volume. At fifty campaigns across four accounts, watching ads 24/7 is impossible \u2014 one oversight, a forgotten cap, a campaign left over the weekend \u2014 burns a monthly budget in a day.",
      },
      {
        title: "Winning Ads Go Unnoticed or Get Scaled Too Late",
        description:
          "A creative test surfaces a winner \u2014 strong ROAS, low CPI, climbing IPM. But at fifty-plus campaigns, some winners go unnoticed entirely. The ones that get spotted take days to scale \u2014 because tripling the budget feels dangerous when rollback means reverting every change by hand.",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "The Difference",
    title: "What Changes With Automation Rules",
    subtitle:
      "Replacing reactive optimization with ad campaign automation rules delivers measurable results \u2014 in hours saved and budget protected.",
    before: {
      title: "Dashboards Open All Day, Still Reacting Too Late",
      text: "A campaign underperforms at 2 AM, gets caught at 9 AM \u2014 seven hours later. Something breaks \u2192 someone notices \u2192 someone acts. That gap is where budget leaks.",
    },
    after: {
      title: "Rules React in Real Time, Even Offline",
      text: (
        <>
          Rules collapse that gap. The system checks continuously and acts when
          thresholds cross \u2014 <strong>ad campaign automation rules</strong>{" "}
          handle the mechanics while the team handles the thinking.
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
        Winners scaled within hours, not stretched across a week. Budget
        protected by spend limits and anomaly alerts around the clock \u2014{" "}
        <strong>the rules handle the mechanics, the team handles the thinking</strong>.
      </>
    ),
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How Ad Campaign Automation Rules Work",
    subtitle:
      "Three steps replace the manual optimization cycle \u2014 from setting conditions to automated execution across campaigns.",
    steps: [
      {
        number: "01",
        title: "Set Performance Thresholds",
        description:
          "Every rule starts with a condition: ROAS below 1.5, CPI exceeds target by 20%, or $500 spent without conversion. Scalemate\u2019s rules engine supports any metric-based condition \u2014 ROAS, CPI, IPM, CTR, spend.",
        Visual: ThresholdVisual,
      },
      {
        number: "02",
        title: "Define Actions: Pause, Scale, or Alert",
        description:
          "Auto-pause ad sets breaching floors. Auto-scale budget when winners hit targets. Adjust bids on real-time signals. Plus alerts \u2014 notifications when metrics move outside normal ranges.",
        Visual: ActionVisual,
      },
      {
        number: "03",
        title: "Rules Run 24/7 \u2014 The Team Focuses on Strategy",
        description:
          "Once configured, rules cover the full loop: monitor \u2192 decide \u2192 act \u2192 rollback. The system runs continuously \u2014 nights, weekends, holidays. The work shifts from \u201Cwhat needs fixing\u201D to \u201Cwhat to test next week.\u201D",
        Visual: MonitorVisual,
      },
    ],
  },

  results: {
    eyebrow: "Proven Results",
    title: "Results Teams Get With",
    titleAccent: "Ad Campaign Automation Rules",
    subtitle:
      "Measured outcomes from production rules across Meta and TikTok \u2014 from mobile apps studios to e-commerce teams.",
    caseStudies: [
      {
        company: "Promin",
        vertical: "Mobile Apps",
        title: "Automated Rules That Protect Budgets Around the Clock",
        description:
          "Promin uses Scalemate\u2019s automated rules to protect ad budgets across Meta and TikTok campaigns \u2014 auto-pausing underperformers and scaling winners without manual intervention. Budget waste from overnight and weekend drift dropped significantly.",
        href: "/customers/promin-uses-automated-rules",
        metrics: [
          { value: "32%", label: "Budget savings" },
          { value: "24/7", label: "Automated protection" },
          { value: "80%", label: "Routines automated" },
        ],
      },
      {
        company: "Scalemate Platform",
        vertical: "Meta & TikTok campaigns",
        title: "Consistent Results Across Industries and Teams",
        description:
          "Across Scalemate users \u2014 from mobile apps studios to e-commerce teams \u2014 automation rules deliver consistent improvements. Whether teams auto-pause ads ROAS-based or automate budget scaling on winners, the pattern holds: less manual work, better outcomes.",
        href: "/features/automation-rules",
        metrics: [
          { value: "62%", label: "Less time on routine ops" },
          { value: "53K+", label: "Hours saved platform-wide" },
          { value: "32%", label: "Average budget savings" },
        ],
      },
    ],
  },

  audience: {
    title: "Who Automation Rules Are For",
    subtitle:
      "Built for teams where campaign volume outpaces manual capacity \u2014 whether the bottleneck is with buyers or leadership.",
    roles: [
      {
        role: "Performance Marketing Managers & Media Buyers",
        description:
          "For buyers who need a facebook ads automation rules tool \u2014 pausing underperformers, scaling winners, protecting budgets \u2014 Scalemate replaces the most time-intensive daily tasks across Meta and TikTok.",
      },
      {
        role: "Founders & Marketing Leaders",
        description:
          "Ad campaign automation rules reduce two risks: budget waste from delayed reactions and missed revenue from cautious scaling.",
      },
      {
        role: "Agencies & Multi-Account Teams",
        description:
          "Cross-account rule management from a single interface \u2014 apply logic across the full portfolio instead of configuring per account.",
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
        "Automation rules are conditional triggers that execute predefined actions on campaigns based on performance metrics. When a metric crosses a set threshold, the system automatically pauses, scales, adjusts bids, or sends an alert \u2014 without manual intervention. Rules run continuously \u2014 covering nights, weekends, and holidays \u2014 replacing the manual check-and-react cycle that most marketing teams repeat daily.",
    },
    {
      question:
        "How do Scalemate\u2019s rules differ from Meta\u2019s built-in rules?",
      answer:
        "Meta\u2019s native rules cover basic conditions within a single account. Scalemate extends this with cross-account management, multi-platform support (Meta, TikTok), automated scaling with rollback, and budget safeguards across the entire portfolio. For teams seeking a comprehensive facebook ads automation rules tool, the difference is most visible at scale \u2014 native rules require per-account configuration while Scalemate applies logic across the full portfolio from one interface.",
    },
    {
      question: "Can rules automatically pause ads based on ROAS?",
      answer:
        "Yes. Teams configure a ROAS floor \u2014 for example, below 1.2 for more than 24 hours \u2014 and the system pauses the ad set automatically. Threshold, time window, and action are all configurable per campaign or across the entire account. This replaces the manual cycle of scanning dashboards every few hours and catching underperformers before they drain budget overnight.",
    },
    {
      question: "How does automated budget scaling work?",
      answer:
        "When a campaign meets performance targets (ROAS above threshold, CPI below limit), rules increase the budget by a configured percentage. If performance drops after scaling, the rollback triggers automatically. This removes the hesitation that slows manual scaling \u2014 the system scales and corrects faster than a buyer checking metrics every few hours.",
    },
    {
      question:
        "What happens when a rule triggers \u2014 can the team review before it acts?",
      answer:
        "Rules can be set to auto-execute or alert-only \u2014 depending on how much control the team wants to retain. Alert-only mode notifies via Slack or email without taking action, giving the team a chance to review before responding. Auto-execute acts immediately \u2014 the right mode for budget protection, overnight optimization, and any scenario where a delayed reaction costs money. Most teams use a mix: auto-execute for budget safeguards and pause rules, alert-only for scaling decisions that benefit from human review.",
    },
    {
      question:
        "Does Scalemate support rules for TikTok and other platforms?",
      answer:
        "Yes. The same rules engine works across Meta and TikTok, with identical condition-action logic applied to platform-specific metrics. Teams manage rules for both platforms from a single dashboard, using the same thresholds and actions \u2014 no need to rebuild logic per platform.",
    },
  ],

  cta: {
    title: "Book a Demo \u2014 Ad Campaign Automation Rules",
    description: (
      <>
        Replace daily optimization grind with{" "}
        <strong>ad campaign automation rules</strong> built for high-volume
        performance teams.
      </>
    ),
  },
}
