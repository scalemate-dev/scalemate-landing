import Link from "next/link"
import { SyncVisual } from "../bulk-ad-launch/HowItWorksVisuals"
import { AutoRulesVisual, AgentVisual } from "./HowItWorksVisuals"

export const data = {
  metadata: {
    title:
      "Scale Facebook Ads Faster: Bulk Launches + Auto-Revert Rules",
    description:
      "Manual setup costs revenue on every winning creative. Scale ad campaigns faster with Scalemate – automate launches and scale winners in minutes, not days.",
    alternates: {
      canonical: "https://www.scalemate.co/use-cases/scale-ad-campaigns-faster",
    },
    openGraph: {
      title:
        "Scale Facebook Ads Faster: Bulk Launches + Auto-Revert Rules",
      description:
        "Manual setup costs revenue on every winning creative. Scale ad campaigns faster with Scalemate – automate launches and scale winners in minutes, not days.",
      url: "https://www.scalemate.co/use-cases/scale-ad-campaigns-faster",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Scale Facebook Ads Faster: Bulk Launches + Auto-Revert Rules",
      description:
        "Manual setup costs revenue on every winning creative. Scale ad campaigns faster with Scalemate – automate launches and scale winners in minutes, not days.",
    },
  },

  hero: {
    label: "Campaign scaling",
    title: "Scale Ad Campaigns Faster",
    titleAccent: "Before Creatives Burn Out",
    description:
      "Your campaigns are ready to scale – but manual setup and slow execution cost you revenue on every winning creative",
    features: [
      "Hundreds of campaigns launched in minutes, not days",
      "Auto-scale winning creatives with instant rollback on performance drops",
      "62% less ad management time – same team",
    ],
    aside:
      "Scalemate gives marketing teams the speed to scale ad campaigns faster – without adding headcount or losing control over performance.",
    platforms: [
      { src: "/meta-ads-logo.svg", alt: "Meta Ads", height: 14 },
      { src: "/tiktok-logo.png", alt: "TikTok Ads", height: 15 },
      { src: "/google-drive-logo.svg", alt: "Google Drive", height: 20 },
    ],
  },

  problem: {
    label: "The Problem",
    title: "Why Scaling Ad Campaigns",
    titleAccent: "Still Feels Broken",
    subtitle: (
      <>
        Winners emerge, budgets get approved – and the scaling process still
        drags. The ability to <strong>scale ad campaigns faster</strong> is what
        separates media buyers who capture revenue windows from those who miss
        them.
      </>
    ),
    problems: [
      {
        title: "More Volume = More Manual Work, Not More Results",
        description:
          "Hundreds of ad sets, each built by hand. More variations should mean better testing – instead, slow scaling of ad accounts compounds with every concept added.",
      },
      {
        title: "Your Team Scales Linearly – Your Campaigns Don\u2019t",
        description:
          "Scaling means hiring more buyers – double the campaigns, double the headcount. Manual workflows blocking growth is the real constraint. Teams stuck in execution can\u2019t respond fast enough when campaign volume growing too fast outpaces the team.",
      },
      {
        title: "Winning Creatives Die While You Hesitate",
        description:
          "A winning creative\u2019s shelf life is measured in days. Manual scaling takes a week, new creatives sit idle after design delivers, and one budget oversight drains the monthly spend in a day.",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "The Difference",
    title: "What Changes When You Scale Ad Campaigns Faster",
    subtitle:
      "Scalemate closes the gap between \u201Ccreative ready\u201D and \u201Clive in market.\u201D Manual handoffs give way to a system that moves as fast as the data justifies.",
    before: {
      title: "Before Scalemate",
      text: (
        <>
          Without automation, new creatives sit for days after design delivers.
          Bulk launches are impossible, every ad assembled by hand. Scaling
          winners stays cautious, with no fast rollback if aggressive scaling
          tanks performance. This is what it looks like trying to scale meta ads
          faster without a system to match.
        </>
      ),
    },
    after: {
      title: "After Scalemate",
      text: (
        <>
          Hundreds of campaigns launched in minutes from any concept × audience
          matrix. Cloud-to-platform creative sync, winners scaled automatically,
          and instant rollback on performance drops.
        </>
      ),
    },
    metrics: [
      { value: "260%", prefix: "faster", desc: "campaign launches" },
      { value: "4x", prefix: "faster", desc: "budget adjustments at scale" },
      { value: "62%", prefix: "less", desc: "ad management time" },
    ],
    leadIn: (
      <>
        Teams that automate campaign scaling workflow see gains immediately –
        260% faster launches and creatives scaled more than 4x faster if
        performance is strong.
      </>
    ),
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "Scale Ad Campaigns Faster in Three Steps",
    subtitle:
      "The scaling paid acquisition process breaks down into three capabilities, each removing a bottleneck between creative delivery and performance data.",
    steps: [
      {
        number: "01",
        title: "Get Fresh Creatives Live Instantly",
        description: (
          <>
            For mobile apps with high creative volume, the first delay is moving
            creatives from design into live campaigns. Cloud-to-platform
            creative sync eliminates manual uploads, new ad sets for any
            audience are added in minutes, and creative rotation ahead of
            fatigue holds conversion at scale.
          </>
        ),
        Visual: SyncVisual,
      },
      {
        number: "02",
        title: "Scale Winners and Kill Losers Automatically",
        description: (
          <>
            Identifying a winner is half the equation – scaling it before
            burnout is where most teams lose. Auto-scale winners 10x on budget,
            auto-pause by ROAS, CPI, or custom thresholds, and get instant
            rollback on performance drops. This is how teams scale user
            acquisition without hiring additional buyers.
          </>
        ),
        Visual: AutoRulesVisual,
      },
      {
        number: "03",
        title: "Track What\u2019s Working Without Digging Through Dashboards",
        description: (
          <>
            Scaling generates data faster than teams can process. A performance
            marketing automation tool that delivers answers on demand – ask
            which creatives perform, peaked, or declining, pull custom reports
            on scaling progress across accounts, and monitor metric shifts as
            budgets increase.
          </>
        ),
        Visual: AgentVisual,
      },
    ],
  },

  results: {
    eyebrow: "Proven Results",
    title: "Results Teams Get With",
    titleAccent: "Scalemate automation",
    subtitle: (
      <>
        Teams using Scalemate to scale ad campaigns faster report consistent
        outcomes: 260% faster campaign launches, winning creatives scaled 3–4x
        in hours not weeks, 2M+ ads launched on the platform, and 53,000 hours
        saved across teams.
      </>
    ),
    caseStudies: [
      {
        company: "KitUp",
        vertical: "Education · 1M+ users",
        title: "15,000+ Ads Launched, 35 Hours Saved Monthly",
        description:
          "KitUp (education, 1M+ users) adopted Scalemate as their bulk facebook ad creation tool for one-ad-per-ad-set campaigns. Manual campaign setup takes hours – KitUp shifted that time to strategic analysis and creative iteration.",
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
          "ZeptoLab (Cut the Rope, 2B+ downloads) needed bulk ad deployment software – moving creatives from NextCloud to Facebook manually meant downloading and re-uploading every file. The hours previously spent on manual file transfers went back into campaign optimization and creative testing.",
        href: "/customers/zeptolab",
        metrics: [
          { value: "2,000+", label: "Media files delivered" },
          { value: "70%", label: "Upload time reduced" },
          { value: "35hrs", label: "Freed monthly" },
        ],
      },
      {
        company: "Appflame",
        vertical: "App publisher · Meta UA",
        title: "More Creative Hypotheses Tested on the Same Budget",
        description:
          "Appflame's user-acquisition team replaced overnight Ads Manager monitoring with a multi-signal automation rule library on Meta, pulling weak variants before the algorithm over-allocates and freeing budget for the next test.",
        href: "/customers/appflame-automation-rules",
        metrics: [
          { value: "750", label: "Losing ads stopped per month" },
          { value: "20h", label: "Overnight monitoring replaced / month" },
          { value: "575", label: "Rule firings per month" },
        ],
      },
    ],
    clientApps: {
      label: "Apps powered by Scalemate",
      logos: [
        { src: "/client-appflame.svg", alt: "Appflame" },
        { src: "/client-zeptolab.webp", alt: "ZeptoLab" },
        { src: "/client-kitup.webp", alt: "KitUp" },
        { src: "/client-cut-the-rope.webp", alt: "Cut the Rope" },
        { src: "/client-bullet-echo.webp", alt: "Bullet Echo" },
        { src: "/client-growthers.png", alt: "Growthers" },
        { src: "/client-manifestation.png", alt: "Manifestation" },
        { src: "/client-mindguru.png", alt: "MindGuru" },
        { src: "/client-ouromedia.png", alt: "OuroMedia" },
      ],
    },
  },

  audience: {
    title: "Who Scalemate is For",
    subtitle:
      "Scalemate serves teams where the scaling paid acquisition process has outgrown manual execution. The bottleneck varies, but the cost is always the same: revenue lost to slow processes.",
    roles: [
      {
        role: "Performance Marketing Managers & Media Buyers",
        description: (
          <>
            Running campaigns daily but drowning in ad set creation instead of
            analysis. Need to scale ad campaigns faster – not stay stuck in
            mechanical platform work.
          </>
        ),
      },
      {
        role: "Marketing Leaders & Heads of User Acquisition",
        description: (
          <>
            Looking to scale user acquisition without hiring more buyers. When
            the team is at capacity, adding headcount treats the symptom – not
            the cause.
          </>
        ),
      },
      {
        role: "Mobile App Publishers & Gaming Studios",
        description: (
          <>
            High creative volume, multiple audiences and geos, constant IPM
            pressure – need to conduct more tests and scale meta ads faster
            without expanding the UA team.
          </>
        ),
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
      question: "How does Scalemate help scale ad campaigns faster?",
      answer:
        "Scalemate automates the three largest bottlenecks: creative deployment from cloud storage, budget scaling through automation rules, and performance tracking via AI agent. As a performance marketing automation tool, it removes every manual step between creative delivery and live campaigns. Teams launch, scale, and optimize in hours rather than days.",
    },
    {
      question: "How does automated scaling of winning creatives work?",
      answer:
        "When a creative crosses predefined thresholds – ROAS, CPI, IPM, or custom metrics – automation rules increase budget automatically, often 3\u20134x in one move. The system decides on data, not caution. If performance drops, automatic rollback triggers immediately.",
    },
    {
      question:
        "Can the system roll back automatically if a scaled campaign stops performing?",
      answer:
        "Yes – automatic rollback is core. When metrics fall below thresholds, Scalemate reverses the budget increase without delay. This removes the risk that makes UA managers hesitate to scale aggressively.",
    },
    {
      question:
        "Does Scalemate work with custom campaign structures like one-ad-per-ad-set?",
      answer:
        "Scalemate supports any structure and uses AI to distribute creatives intelligently. In one-ad-per-ad-set mode, each creative gets its own ad set for clean performance data. Alternatively, Scalemate recognizes creatives from the same concept and groups them into a single ad set, while creatives from a different concept go into a separate one. It can also match creatives by language – ads in French are placed into ad sets targeting French-speaking audiences, English creatives into English-targeted ad sets, and so on. The bulk launch engine generates every combination from a concept \u00D7 audience \u00D7 language \u00D7 structure matrix at any volume.",
    },
    {
      question: "What ad platforms does Scalemate support?",
      answer:
        "Scalemate connects with Meta (Facebook and Instagram), TikTok. Cross-platform teams manage campaign scaling from one interface – no repeated setup across ad managers.",
    },
    {
      question: "How much time can teams save with campaign automation?",
      answerText:
        "Teams that automate campaign scaling workflow report saving 62% of ad management time on average. KitUp saved 35h/month while managing 15,000+ ads. Higher campaign volume means proportionally more time recovered.",
      answer: (
        <>
          Teams that automate campaign scaling workflow report saving 62% of ad
          management time on average. <Link href="/customers/kitup">KitUp</Link>{" "}
          saved 35h/month while managing 15,000+ ads. Higher campaign volume
          means proportionally more time recovered.
        </>
      ),
    },
    {
      question:
        "Can teams scale across multiple audiences and structures in one launch?",
      answer:
        "The bulk launch system handles this by design. Define the matrix – concepts, audiences, geos, structures – and Scalemate generates every combination as live campaigns. A single launch can produce hundreds of ad sets across different audiences, each with the right creative-to-structure mapping. This is how teams automate campaign scaling workflow at volume – select creatives, define targeting, choose the structure, and launch. For teams where the scaling paid acquisition process spans multiple geos and languages, bulk launch removes the repetitive setup entirely. Days of manual ad set creation compressed into minutes.",
    },
  ],

  cta: {
    title: "Ready to scale ad campaigns faster?",
    description: null,
    secondaryCta: {
      label: "Start for Free",
      href: "https://app.scalemate.co/create-account",
    },
  },
}
