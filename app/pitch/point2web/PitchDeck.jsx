import Container from "@/components/elements/Container/Container"
import Logo from "@/components/elements/Logo"
import { ThresholdVisual } from "@/app/use-cases/_data/ad-campaign-automation-rules/HowItWorksVisuals"
import { SyncVisual } from "@/app/use-cases/_data/bulk-ad-launch/HowItWorksVisuals"
import {
  IconBolt,
  IconClock,
  IconSettings,
  IconMessageChatbot,
  IconChartBar,
  IconRocket,
  IconArrowRight,
  IconCheck,
  IconAdjustments,
  IconUpload,
  IconPlugConnected,
  IconUsers,
  IconHeartHandshake,
  IconApi,
  IconDatabase,
  IconCode,
  IconRouter,
} from "@tabler/icons-react"
import styles from "./PitchDeck.module.scss"

/* ───────────────────────────────────────────
   Section 0 — Hero
   ─────────────────────────────────────────── */
function HeroSlide() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>Partnership Deck</span>

          <div className={styles.heroLogos}>
            <Logo className={styles.heroLogo} />
            <span className={styles.heroX}>×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/point2web-logo.svg"
              alt="Point2Web"
              className={styles.heroLogoP2w}
            />
          </div>

          <p className={styles.heroSub}>
            Ad ops automation that plugs into your platform. Your tech team
            can focus on what matters, and your clients get the features they
            need now.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.pill}>
              <IconBolt size={15} stroke={2} /> Auto-Rules
            </span>
            <span className={styles.pill}>
              <IconUpload size={15} stroke={2} /> Bulk Launches
            </span>
            <span className={styles.pill}>
              <IconMessageChatbot size={15} stroke={2} /> AI Co-Pilot
            </span>
            <span className={styles.pill}>
              <IconPlugConnected size={15} stroke={2} /> API-First
            </span>
          </div>
          <p className={styles.heroContact}>
            scalemate.co
          </p>
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 1 — Who We Are
   ─────────────────────────────────────────── */
function IntroSlide() {
  return (
    <section className={styles.intro}>
      <Container>
        <span className={styles.eyebrow}>About Scalemate</span>
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <h2 className={styles.sectionTitle}>
              Operational automation for{" "}
              <em>performance marketing</em>
            </h2>
            <p className={styles.bodyText}>
              Scalemate removes manual work from campaign operations. Not
              analytics, but execution. Bulk launches, auto-rules with rollback,
              cloud-to-platform creative sync, and AI-powered actions.
            </p>
            <p className={styles.bodyText}>
              Validated Meta technology partner. Direct API integrations with
              TikTok, and Snapchat.
            </p>

          </div>
          <div className={styles.introStats}>
            {[
              { value: "2M+", label: "Ads launched" },
              { value: "53K+", label: "Hours saved" },
              { value: "3×", label: "Faster launches" },
              { value: "62%", label: "Less manual work" },
            ].map((s) => (
              <div key={s.label} className={styles.introStat}>
                <span className={styles.introStatValue}>{s.value}</span>
                <span className={styles.introStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.platformLogos}>
          <span className={styles.platformLabel}>Integrated with</span>
          <div className={styles.platformRow}>
            {/* eslint-disable @next/next/no-img-element */}
            <img src="/meta-ads-logo.svg" alt="Meta Ads" className={styles.platformLogo} />
            <img src="/tiktok-logo.png" alt="TikTok for Business" className={styles.platformLogo} />
            <img src="/google-drive-logo.svg" alt="Google Drive" className={styles.platformLogoTall} />
            <img src="/nextcloud-logo.svg" alt="Nextcloud" className={styles.platformLogoNc} />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 1.5 — Team Competencies
   ─────────────────────────────────────────── */
function CompetenciesSlide() {
  const competencies = [
    {
      icon: <IconAdjustments size={22} stroke={1.5} />,
      title: "Ad Ops Automation",
      text: "Rules, bulk launches, campaign management at scale across multiple ad platforms.",
    },
    {
      icon: <IconApi size={22} stroke={1.5} />,
      title: "Ad Platform API Integrations",
      text: "Meta (validated partner), TikTok. Direct API actions, not just read-only access.",
    },
    {
      icon: <IconDatabase size={22} stroke={1.5} />,
      title: "AI Data Processing",
      text: "Normalization and preparation of large cross-platform datasets for AI analysis.",
    },
    {
      icon: <IconMessageChatbot size={22} stroke={1.5} />,
      title: "AI Co-Pilot Development",
      text: "Chat-based interfaces for campaign analysis and actions inside ad accounts.",
    },
    {
      icon: <IconCode size={22} stroke={1.5} />,
      title: "No-Code Automation",
      text: "Flows that can be set up without developers. Even a junior can configure them.",
    },
    {
      icon: <IconRouter size={22} stroke={1.5} />,
      title: "Custom Integrations",
      text: "Airtable, Google Drive, Slack, BI tools. Connect your existing stack to ad platforms.",
    },
  ]

  return (
    <section className={styles.competencies}>
      <Container>
        <span className={styles.eyebrow}>Team Competencies</span>
        <h2 className={styles.sectionTitle}>
          What we <em>build and deliver</em>
        </h2>
        <div className={styles.competenciesGrid}>
          {competencies.map((c) => (
            <div key={c.title} className={styles.competencyCard}>
              <div className={styles.competencyIcon}>{c.icon}</div>
              <h3 className={styles.competencyTitle}>{c.title}</h3>
              <p className={styles.competencyText}>{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 2 — Your Situation
   ─────────────────────────────────────────── */
function SituationSlide() {
  const points = [
    {
      icon: <IconSettings size={22} stroke={1.5} />,
      title: "Auto-rules in testing",
      text: "Not yet rolled out to all clients and platforms. Still being developed internally.",
    },
    {
      icon: <IconRocket size={22} stroke={1.5} />,
      title: "Bulk launches in development",
      text: "A backend feature clients are waiting for, but it hasn't shipped yet.",
    },
    {
      icon: <IconClock size={22} stroke={1.5} />,
      title: "Tech team overloaded",
      text: "New automation features keep getting deprioritized. Too many tasks, not enough capacity.",
    },
    {
      icon: <IconUsers size={22} stroke={1.5} />,
      title: "Clients want more",
      text: "Flexible rules, faster launches, AI-powered recommendations. Demand exists, delivery is the bottleneck.",
    },
  ]

  return (
    <section className={styles.situation}>
      <Container>
        <span className={styles.eyebrow}>What we heard</span>
        <h2 className={styles.sectionTitle}>
          You have your own platform and tech team, but{" "}
          <em>new features keep getting deprioritized</em>
        </h2>
        <div className={styles.situationGrid}>
          {points.map((p) => (
            <div key={p.title} className={styles.situationCard}>
              <div className={styles.situationIcon}>{p.icon}</div>
              <h3 className={styles.situationCardTitle}>{p.title}</h3>
              <p className={styles.situationCardText}>{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Co-Pilot Chat Visual
   ─────────────────────────────────────────── */
function CoPilotVisual() {
  return (
    <div className={styles.chatMock}>
      <div className={styles.chatHeader}>
        <div className={styles.chatHeaderDot} />
        <span className={styles.chatHeaderTitle}>Scalemate AI</span>
      </div>
      <div className={styles.chatBody}>
        <div className={styles.chatMsgUser}>
          <span>Summarize Facebook performance this week</span>
        </div>
        <div className={styles.chatMsgBot}>
          <span className={styles.chatMsgBotName}>Scalemate</span>
          <span>ROAS up <strong>12%</strong>, CPI down <strong>6%</strong>. Top creative: UGC_hook_v3.</span>
          <span className={styles.chatMsgRec}>Scale top 3 adsets by 20%?</span>
        </div>
        <div className={styles.chatMsgUser}>
          <span>Yes, apply changes</span>
        </div>
        <div className={styles.chatMsgBot}>
          <span className={styles.chatMsgBotName}>Scalemate</span>
          <span>Done. 3 adsets scaled. Budget: $450 → $540.</span>
        </div>
      </div>
      <div className={styles.chatInput}>
        <span>What do you want to do?</span>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────
   Section 3 — Use Cases
   ─────────────────────────────────────────── */
function UseCasesSlide() {
  const cases = [
    {
      id: "rules",
      icon: <IconAdjustments size={24} stroke={1.5} />,
      tag: "Ready now",
      tagColor: "green",
      title: "Auto-Rules + Rule Chains",
      subtitle: "Instead of building rules from scratch, plug in ours.",
      features: [
        "Multi-condition rules: CPA, ROAS, IPM, budgets, day of week, time of day",
        "Actions: pause/enable campaigns, adjust budgets, rotate creatives",
        "Rollback: auto-revert changes if performance drops",
        "Budget protection: alerts + auto-pause on threshold breach",
      ],
      advanced: [
        "Auto-duplicate winning campaigns with top 5 performing GEOs",
        "Auto-scale budgets in steps (20% → 50% → 2×) with rollback",
        "Creative rotation when fatigue detected (IPM drop)",
      ],
      platforms: "Meta Ads",
    },
    {
      id: "templates",
      icon: <IconBolt size={24} stroke={1.5} />,
      tag: "Ready now",
      tagColor: "green",
      title: "Rules Templates",
      subtitle: "Pre-built playbooks your clients activate in clicks.",
      features: [
        "Creative Testing: launch → evaluate at spend threshold → score by rules → scale winners → report",
        "Campaign Health Monitor: track KPIs → auto-pause losers → reallocate budget → daily digest",
        "GEO Expansion: identify winner → duplicate to new GEOs → conservative budget → auto-kill non-performers",
      ],
      advanced: [],
      platforms: "Meta Ads",
    },
    {
      id: "launches",
      icon: <IconUpload size={24} stroke={1.5} />,
      tag: "Ready now",
      tagColor: "green",
      title: "Bulk Launches & Uploads",
      subtitle: "From creative delivery to live campaigns in minutes.",
      features: [
        "Bulk launches: create campaigns with concept × GEO × format combinations",
        "Bulk uploads: Google Drive / Airtable → ad platforms directly",
        "Templates per platform with targeting presets and auto-naming",
        "No manual downloads, no folder dragging. Automated pipeline",
      ],
      advanced: [],
      platforms: "Meta Ads, TikTok Ads",
    },
    {
      id: "ai-insights",
      icon: <IconChartBar size={24} stroke={1.5} />,
      tag: "Custom setup",
      tagColor: "amber",
      title: "AI Data Processing & Insights",
      subtitle: "AI can't process large campaign datasets alone. We prepare the data.",
      features: [
        "Data pipeline: pull, normalize, aggregate across platforms",
        "Pre-processing for AI: structured datasets that fit within context windows",
        "Pattern detection: creative fatigue, GEO anomalies, budget allocation gaps",
        "Automated reports with actionable recommendations",
      ],
      advanced: [],
      platforms: "All connected platforms",
    },
    {
      id: "ai-copilot",
      icon: <IconMessageChatbot size={24} stroke={1.5} />,
      tag: "Custom setup",
      tagColor: "amber",
      title: "White-Label AI Co-Pilot",
      subtitle: "An AI chat assistant embedded in your platform. Analyze and act.",
      features: [
        "Analysis: \"Show top 5 creatives this week\", \"Why did CPI spike?\"",
        "Actions: \"Pause campaigns with CPI above $5\", \"Scale top adsets by 20%\"",
        "White-label: appears as Point2Web's own feature",
        "Customizable: restrict actions, add approval flows, limit per client",
      ],
      advanced: [],
      platforms: "Meta Ads",
    },
  ]

  return (
    <section className={styles.useCases}>
      <Container>
        <span className={styles.eyebrow}>What We Offer</span>
        <h2 className={styles.sectionTitle}>
          Five solutions, <em>pick what fits</em>
        </h2>
        <p className={styles.sectionSub}>
          Each can work standalone or combine into a full automation stack.
          Start with what's ready, expand as needed.
        </p>

        <div className={styles.casesList}>
          {cases.map((c) => (
            <div
              key={c.id}
              className={`${styles.caseCard} ${(c.id === "rules" || c.id === "launches" || c.id === "ai-copilot") ? styles.caseCardWithVisual : ""}`}
            >
              <div className={styles.caseContent}>
                <div className={styles.caseHeader}>
                  <div className={styles.caseIconWrap}>{c.icon}</div>
                  <div className={styles.caseHeaderText}>
                    <div className={styles.caseTitleRow}>
                      <h3 className={styles.caseTitle}>{c.title}</h3>
                      <span
                        className={`${styles.caseTag} ${
                          c.tagColor === "green"
                            ? styles.caseTagGreen
                            : styles.caseTagAmber
                        }`}
                      >
                        {c.tag}
                      </span>
                    </div>
                    <p className={styles.caseSub}>{c.subtitle}</p>
                  </div>
                </div>

                <ul className={styles.caseFeatures}>
                  {c.features.map((f) => (
                    <li key={f} className={styles.caseFeature}>
                      <IconCheck
                        size={16}
                        stroke={2.5}
                        className={styles.caseCheckIcon}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {c.advanced.length > 0 && (
                  <div className={styles.caseAdvanced}>
                    <span className={styles.caseAdvancedLabel}>
                      Advanced: Rule Chains
                    </span>
                    <ul className={styles.caseFeatures}>
                      {c.advanced.map((a) => (
                        <li key={a} className={styles.caseFeature}>
                          <IconBolt
                            size={14}
                            stroke={2}
                            className={styles.caseBoltIcon}
                          />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.casePlatforms}>
                  <span className={styles.casePlatformsLabel}>Platforms:</span>{" "}
                  {c.platforms}
                </div>
              </div>

              {c.id === "rules" && (
                <div className={styles.caseVisual}>
                  <ThresholdVisual />
                </div>
              )}
              {c.id === "launches" && (
                <div className={styles.caseVisual}>
                  <SyncVisual />
                </div>
              )}
              {c.id === "ai-copilot" && (
                <div className={styles.caseVisual}>
                  <CoPilotVisual />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 4 — Implementation Timeline
   ─────────────────────────────────────────── */
function TimelineSlide() {
  const tiers = [
    {
      phase: "Ready now",
      time: "Days to start",
      color: "green",
      icon: <IconBolt size={20} stroke={2} />,
      items: [
        { name: "Bulk ad launches", platform: "Meta Ads, TikTok Ads" },
        { name: "Bulk files upload", platform: "Meta Ads, TikTok Ads" },
        { name: "Auto-rules (multi-condition, flexible)", platform: "Meta Ads" },
        {
          name: "Rules templates (creative testing, health monitor, GEO expansion)",
          platform: "Meta Ads",
        },
      ],
      note: "Can be used via Scalemate platform immediately, or connected via API with minimal effort.",
    },
    {
      phase: "On request",
      time: "Weeks",
      color: "amber",
      icon: <IconClock size={20} stroke={2} />,
      items: [
        {
          name: "Rule chains (duplicate campaigns, auto-scale)",
          platform: "Meta Ads. Requires setup",
        },
        {
          name: "Additional ad platforms (Snapchat, etc.)",
          platform: "Not out-of-box. Requires development time",
        },
        {
          name: "Custom ad platform integrations",
          platform: "If your clients use platforms we don't support yet, we can connect them on request",
        },
      ],
      note: "Faster than building from scratch, but requires platform-specific integration work.",
    },
    {
      phase: "Custom integration",
      time: "Requires scoping",
      color: "neutral",
      icon: <IconSettings size={20} stroke={2} />,
      items: [
        {
          name: "White-Label AI Co-Pilot (insights, actions, recommendations)",
          platform: "Engine exists. White-label embedding takes time for data mapping, task definition, UI integration",
        },
      ],
      note: "Most powerful, but longest to implement. Start with ready-now features → prove value → expand.",
    },
  ]

  return (
    <section className={styles.timeline}>
      <Container>
        <span className={styles.eyebrow}>Implementation Timeline</span>
        <h2 className={styles.sectionTitle}>
          What's ready <em>now</em> vs. what takes time
        </h2>
        <p className={styles.sectionSub}>
          Start with proven features today. Expand into custom AI solutions
          when you're ready.
        </p>

        <div className={styles.timelineTiers}>
          {tiers.map((t) => (
            <div
              key={t.phase}
              className={`${styles.timelineTier} ${styles[`tier_${t.color}`]}`}
            >
              <div className={styles.tierHeader}>
                <div className={styles.tierIconWrap}>{t.icon}</div>
                <div>
                  <h3 className={styles.tierTitle}>{t.phase}</h3>
                  <span className={styles.tierTime}>{t.time}</span>
                </div>
              </div>

              <ul className={styles.tierItems}>
                {t.items.map((item) => (
                  <li key={item.name} className={styles.tierItem}>
                    <span className={styles.tierItemName}>{item.name}</span>
                    <span className={styles.tierItemPlatform}>
                      {item.platform}
                    </span>
                  </li>
                ))}
              </ul>

              <p className={styles.tierNote}>{t.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 5 — Proof Points
   ─────────────────────────────────────────── */
function ProofSlide() {
  const cases = [
    {
      company: "KitUp",
      vertical: "Education · 1M+ users",
      stats: [
        { value: "15,000+", label: "Ads launched" },
        { value: "35hrs", label: "Saved per month" },
        { value: "65%", label: "Faster uploads" },
      ],
      quote:
        "Started with 1 app, 1 UA person. Scaled to 8 apps, still one person.",
    },
    {
      company: "ZeptoLab",
      vertical: "Gaming · 2B+ downloads",
      stats: [
        { value: "2,000+", label: "Media files delivered" },
        { value: "70%", label: "Faster uploads" },
        { value: "35hrs", label: "Monthly savings" },
      ],
      quote:
        "Team refocused entirely on creative strategy and performance analysis.",
    },
  ]

  return (
    <section className={styles.proof}>
      <Container>
        <span className={styles.eyebrow}>Proven Results</span>
        <h2 className={styles.sectionTitle}>
          Teams that switched to <em>automation</em>
        </h2>

        <div className={styles.proofCards}>
          {cases.map((c) => (
            <div key={c.company} className={styles.proofCard}>
              <div className={styles.proofCardTop}>
                <span className={styles.proofCompany}>{c.company}</span>
                <span className={styles.proofVertical}>{c.vertical}</span>
              </div>

              <div className={styles.proofStats}>
                {c.stats.map((s) => (
                  <div key={s.label} className={styles.proofStat}>
                    <span className={styles.proofStatValue}>{s.value}</span>
                    <span className={styles.proofStatLabel}>{s.label}</span>
                  </div>
                ))}
              </div>

              <p className={styles.proofQuote}>{c.quote}</p>
            </div>
          ))}
        </div>

        <div className={styles.clientApps}>
          <span className={styles.clientAppsLabel}>Some of the apps powered by Scalemate</span>
          <div className={styles.clientAppsRow}>
            {/* eslint-disable @next/next/no-img-element */}
            <img src="/client-zeptolab.webp" alt="ZeptoLab" className={styles.clientAppIcon} />
            <img src="/client-kitup.webp" alt="KitUp" className={styles.clientAppIcon} />
            <img src="/client-cut-the-rope.webp" alt="Cut the Rope" className={styles.clientAppIcon} />
            <img src="/client-bullet-echo.webp" alt="Bullet Echo" className={styles.clientAppIcon} />
            <img src="/client-growthers.png" alt="Growthers" className={styles.clientAppIcon} />
            <img src="/client-manifestation.png" alt="Manifestation" className={styles.clientAppIcon} />
            <img src="/client-mindguru.png" alt="MindGuru" className={styles.clientAppIcon} />
            <img src="/client-ouromedia.png" alt="OuroMedia" className={styles.clientAppIcon} />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 6 — Why Not Build It Yourself
   ─────────────────────────────────────────── */
function CompareSlide() {
  const rows = [
    {
      label: "Time to launch",
      build: "3–6 months (optimistic)",
      scalemate: "Days to weeks",
    },
    {
      label: "Dev resources",
      build: "Frontend + backend + maintenance",
      scalemate: "1 dev for API or zero (self-serve)",
    },
    {
      label: "Meta API validation",
      build: "Pass review, handle rate limits",
      scalemate: "Already validated partner",
    },
    {
      label: "Platform API updates",
      build: "Your team maintains",
      scalemate: "We handle all changes",
    },
    {
      label: "Ongoing maintenance",
      build: "Your tech team",
      scalemate: "Our team",
    },
  ]

  return (
    <section className={styles.compare}>
      <Container>
        <span className={styles.eyebrow}>Build vs. Buy</span>
        <h2 className={styles.sectionTitle}>
          Why not <em>build it yourself?</em>
        </h2>
        <p className={styles.sectionSub}>
          Your tech team stays focused on your core product. We handle the ad
          ops automation layer.
        </p>

        <div className={styles.compareTable}>
          <div className={styles.compareHeaderRow}>
            <div className={styles.compareLabel} />
            <div className={styles.compareCol}>
              <span className={styles.compareColTitle}>Build In-House</span>
            </div>
            <div className={styles.compareCol}>
              <span className={styles.compareColTitleAccent}>
                Use Scalemate
              </span>
            </div>
          </div>
          {rows.map((r) => (
            <div key={r.label} className={styles.compareRow}>
              <div className={styles.compareLabel}>{r.label}</div>
              <div className={styles.compareCell}>{r.build}</div>
              <div className={`${styles.compareCell} ${styles.compareCellAccent}`}>
                {r.scalemate}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 7 — Integration Options
   ─────────────────────────────────────────── */
function IntegrationSlide() {
  const options = [
    {
      letter: "A",
      title: "Self-Serve",
      speed: "Fastest",
      points: [
        "Clients use Scalemate directly",
        "Point2Web recommends as partner tool",
        "Referral partnership possible",
      ],
    },
    {
      letter: "B",
      title: "API Integration",
      speed: "Flexible",
      points: [
        "Rules + launches plug into your platform",
        "Your UI, our engine",
        "1 technical contact on your side",
      ],
    },
    {
      letter: "C",
      title: "White-Label",
      speed: "Full power",
      points: [
        "Full functionality under Point2Web brand",
        "Includes AI Co-Pilot chat",
        "Custom onboarding + support",
      ],
    },
  ]

  return (
    <section className={styles.integration}>
      <Container>
        <span className={styles.eyebrow}>Integration Options</span>
        <h2 className={styles.sectionTitle}>
          Three paths, <em>pick what fits</em>
        </h2>

        <div className={styles.integrationGrid}>
          {options.map((o) => (
            <div key={o.letter} className={styles.integrationCard}>
              <div className={styles.integrationCardHeader}>
                <span className={styles.integrationLetter}>{o.letter}</span>
                <div>
                  <h3 className={styles.integrationCardTitle}>{o.title}</h3>
                  <span className={styles.integrationSpeed}>{o.speed}</span>
                </div>
              </div>
              <ul className={styles.integrationPoints}>
                {o.points.map((p) => (
                  <li key={p} className={styles.integrationPoint}>
                    <IconArrowRight size={14} stroke={2} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 8 — Referral Partnership
   ─────────────────────────────────────────── */
function ReferralSlide() {
  return (
    <section className={styles.referral}>
      <Container>
        <div className={styles.referralInner}>
          <div className={styles.referralIcon}>
            <IconHeartHandshake size={36} stroke={1.5} />
          </div>
          <span className={styles.eyebrow}>Referral Partnership</span>
          <h2 className={styles.sectionTitle}>
            Separate from integration.{" "}
            <em>Can start immediately</em>
          </h2>
          <div className={styles.referralGrid}>
            <div className={styles.referralItem}>
              <span className={styles.referralArrow}>→</span>
              <p>
                Your clients need automation, you recommend Scalemate
              </p>
            </div>
            <div className={styles.referralItem}>
              <span className={styles.referralArrow}>←</span>
              <p>
                Our clients need accounts/support, we recommend Point2Web
              </p>
            </div>
          </div>
          <p className={styles.referralNote}>
            Revenue share on referrals. Shared audience, different services,
            zero competition. No dev work, no integration needed.
          </p>
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Section 9 — CTA
   ─────────────────────────────────────────── */
function CtaSlide() {
  return (
    <section className={styles.ctaSection}>
      <Container>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Next Steps</h2>
          <div className={styles.ctaSteps}>
            <div className={styles.ctaStep}>
              <span className={styles.ctaStepNum}>1</span>
              <p>Pick 1–2 use cases most relevant to your team</p>
            </div>
            <div className={styles.ctaStep}>
              <span className={styles.ctaStepNum}>2</span>
              <p>Schedule a demo. We'll walk through the specific flow</p>
            </div>
            <div className={styles.ctaStep}>
              <span className={styles.ctaStepNum}>3</span>
              <p>Pilot with 1–2 clients on a specific use case</p>
            </div>
          </div>
          <div className={styles.ctaContact}>
            <p className={styles.ctaContactName}>Natalia Bondar</p>
            <p className={styles.ctaContactDetail}>scalemate.co</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ───────────────────────────────────────────
   Main Export
   ─────────────────────────────────────────── */
export default function PitchDeck() {
  return (
    <div className={styles.deck}>
      <HeroSlide />
      <IntroSlide />
      <CompetenciesSlide />
      <SituationSlide />
      <UseCasesSlide />
      <TimelineSlide />
      <ProofSlide />
      <CompareSlide />
      <IntegrationSlide />
      <ReferralSlide />
      <CtaSlide />
    </div>
  )
}
