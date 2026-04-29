import Link from "next/link"
import { SyncVisual } from "../bulk-ad-launch/HowItWorksVisuals"
import { ConnectVisual } from "./ConnectVisual"
import { UploadVisual } from "./UploadVisual"

export const data = {
  metadata: {
    title:
      "Bulk Upload Creatives to Meta & TikTok — Save 35hrs/Month",
    description:
      "Stop dragging files into Ads Manager one by one. See how teams bulk upload creatives to Meta & TikTok from Google Drive — free tool, no downloads needed.",
    alternates: {
      canonical:
        "https://www.scalemate.co/use-cases/automated-creative-upload-meta",
    },
    openGraph: {
      title:
        "Bulk Upload Creatives to Meta & TikTok — Save 35hrs/Month",
      description:
        "Stop dragging files into Ads Manager one by one. See how teams bulk upload creatives to Meta & TikTok from Google Drive — free tool, no downloads needed.",
      url: "https://www.scalemate.co/use-cases/automated-creative-upload-meta",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Bulk Upload Creatives to Meta & TikTok — Save 35hrs/Month",
      description:
        "Stop dragging files into Ads Manager one by one. See how teams bulk upload creatives to Meta & TikTok from Google Drive — free tool, no downloads needed.",
    },
  },

  video: {
    videoId: "i8JMFCR-lho",
    eyebrow: "15-second demo",
    heading: "See it in action",
    subheading:
      "Auto-sync ad creatives from Google Drive straight to Meta and TikTok ad libraries — no downloads, no re-uploads, no manual file picker.",
    name: "Bulk Upload Meta & TikTok Ad Creatives from Google Drive (Scalemate Demo)",
    description:
      "How Scalemate auto-syncs creatives from Google Drive to Meta and TikTok ad libraries. Bulk upload happens in seconds, not hours — built for media buyers managing high-volume creative pipelines.",
    uploadDate: "2026-04-29",
    duration: "PT15S",
  },

  hero: {
    label: "Creative uploader",
    title: "Bulk Upload Creatives to Meta & TikTok",
    titleAccent: "without manual drag-and-drop",
    description: (
      <>
        Creatives stuck in cloud storage, campaigns waiting. Scalemate lets
        teams bulk upload ad creatives from Google Drive to Meta and TikTok
        — no downloads, no drag-and-drop:
      </>
    ),
    features: [
      "Google Drive to Meta Media Library — direct sync",
      "No download → re-upload cycle",
      "Automatic deduplication, only new files transfer",
    ],
    aside:
      "From cloud storage to live campaigns – without dragging creatives into Ads Manager one by one.",
    platforms: [
      { src: "/meta-ads-logo.svg", alt: "Meta Ads", height: 14 },
      { src: "/tiktok-logo.png", alt: "TikTok Ads", height: 15 },
      { src: "/google-drive-logo.svg", alt: "Google Drive", height: 20 },
    ],
    secondaryCta: {
      label: "Try Free Uploader ",
      href: "/ad-creative-uploader",
    },
  },

  problem: {
    label: "The Problem",
    title: "Why Manual Creative Uploads",
    titleAccent: "Drain Your Team",
    subtitle: (
      <>
        As creative volume grows, teams without a bulk creative upload workflow
        hit the same bottleneck: repetitive manual steps, messy media
        libraries, and a stalled pipeline.
      </>
    ),
    problems: [
      {
        title:
          "\u201CIt's Soul-Crushing Work – Just Dragging Files Between Folders\u201D",
        description:
          "Creative team drops assets into Google Drive – then mechanical steps follow: download, open Ads Manager, select files, wait, repeat for each account. This repetitive upload workflow runs every batch.",
      },
      {
        title: "Duplicates, Errors, and Messy Media Libraries",
        description:
          "Manual uploads come with no safeguards – same video uploaded twice, outdated versions live alongside new. Managing folders for ad creatives quietly eats hours. Wrong file in the wrong account means wasted spend.",
      },
      {
        title: "The More Creatives You Produce – The Bigger the Bottleneck",
        description:
          "Ten creatives per week? Barely noticeable. Scale to three hundred – slow creative deployment becomes the biggest drag on velocity and delays launches.",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "The Difference",
    title: "What Changes With Scalemate",
    subtitle:
      "The gap between manual creative uploads and automated delivery is measurable – in hours saved and creative velocity gained.",
    before: {
      title: "Download, Re-Upload, Repeat",
      text: "Google Drive → Download → Open Ads Manager → Select files → Wait → Repeat for each account. Sixty weekly creatives, four accounts – the cycles compound fast.",
    },
    after: {
      title: "Bulk Upload Creatives to Meta in One Click",
      text: (
        <>
          Scalemate lets teams bulk upload creatives to Meta Ads from Google
          Drive, Dropbox, or NextCloud – without local downloads
        </>
      ),
    },
    metrics: [
      {
        value: "214%",
        prefix: "faster",
        desc: "creative tests",
      },
      {
        value: "7x",
        prefix: "faster",
        desc: "creative uploads",
      },
      {
        value: "35hr",
        prefix: "per month",
        desc: "saved on upload operations",
      },
    ],
    leadIn: (
      <>
        The repetitive upload workflow disappears. Teams that bulk upload
        creatives move files from storage to ad accounts through a direct
        connection
      </>
    ),
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "How Teams Bulk Upload Creatives to Meta & TikTok",
    subtitle:
      "Three steps replace the manual transfer pipeline – from cloud storage connection to live assets in ad accounts.",
    steps: [
      {
        number: "01",
        title: "Connect Cloud Storage",
        description: (
          <>
            Scalemate integrates with Google Drive, Dropbox, and NextCloud.
            Setup runs once: connect, select folders, done. Teams that want to
            upload ad creatives from Google Drive change nothing upstream
          </>
        ),
        Visual: SyncVisual,
      },
      {
        number: "02",
        title: "Connect Your Ad Accounts",
        description:
          "Link your Meta Ads accounts with secure OAuth. One-time setup, then upload creatives to Ads Manager whenever you need. Deduplication skips files already in Meta's Media Library, transferring only what's new.",
        Visual: ConnectVisual,
      },
      {
        number: "03",
        title: "Upload to Meta in One Click",
        description: (
          <>
            Hundreds of files land in Meta Media Library in one batch – no
            downloads, no drag-and-drop. For teams that need to bulk upload
            ad creatives across multiple accounts, everything runs from one
            screen. Same workflow for TikTok. YouTube is available on request.
          </>
        ),
        Visual: UploadVisual,
      },
    ],
  },

  results: {
    eyebrow: "Proven Results",
    title: "Results Teams Get With",
    titleAccent: "Automated Creative Upload",
    subtitle: (
      <>
        Two teams switched to bulk uploading creatives with Scalemate. Both
        faced the same challenge – scaling creative delivery without scaling
        headcount
      </>
    ),
    caseStudies: [
      {
        company: "ZeptoLab",
        vertical: "Gaming \u00B7 2B+ downloads",
        title: "2,000+ Files Delivered, 70% Faster",
        description: (
          <>
            ZeptoLab (Cut the Rope, 2B+ downloads) used NextCloud.
            Scalemate&apos;s integration handles bulk creative uploads
            directly from cloud storage:
          </>
        ),
        href: "/customers/zeptolab",
        metrics: [
          { value: "2,000+", label: "Media files delivered" },
          { value: "70%", label: "Upload time reduction" },
          { value: "35hrs", label: "monthly savings" },
        ],
        // footer:
        //   "The team refocused entirely on creative strategy and performance analysis.",
      },
      {
        company: "KitUp",
        vertical: "Education \u00B7 1M+ users",
        title: "65% Faster Creative Deployment, 15,000+ Ads Launched",
        description: (
          <>
            KitUp (education, 1M+ users) needed to{" "}
            <strong>bulk upload ad creatives</strong> at scale. Over 15,000
            creatives added with Creative Uploader:
          </>
        ),
        href: "/customers/kitup",
        metrics: [
          { value: "65%", label: "Faster creative uploads" },
          { value: "35hrs", label: "Saved per month" },
          { value: "25%+", label: "Weekly hours reduced" },
        ],
        // footer:
        //   "Faster uploads free up time the team reinvests into analysis and optimization.",
      },
    ],
    clientApps: {
      label: "Apps powered by Scalemate",
      logos: [
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
    title: "Who Bulk Creative Upload Is For",
    subtitle:
      "Built for teams where creative volume outpaces the manual upload process – whether the bottleneck is with buyers or creative ops.",
    roles: [
      {
        role: "UA Managers & Media Buyers",
        description: (
          <>
            For <Link href="/solutions/media-buyers">media buyers</Link> who
            bulk upload creatives across multiple ad accounts, syncing from
            Google Drive to Meta removes the most repetitive weekly task.
          </>
        ),
      },
      {
        role: "Creative Teams & Creative Ops",
        description: (
          <>
            Direct sync shrinks the pipeline: designer saves file → file appears
            in Meta. Teams that bulk upload creatives get faster feedback and
            tighter creative testing cycles
          </>
        ),
      },
    ],
    industryLabel: "Teams & Companies that benefit most:",
    industries: [
      "Marketing Agencies",
      "Mobile Apps & Web Utilities",
      "Gaming Studios",
      "Education Platforms",
      "E-commerce Brands",
      "Any marketing team with Constant Creative Testing",
    ],
    footer: (
      <>
        High output plus manual uploads equals a bottleneck – teams that
        bulk upload creatives break free and scale without adding headcount
      </>
    ),
  },

  faq: [
    {
      question: "What does bulk upload creatives mean for Meta Ads?",
      answer:
        "Bulk uploading creatives means sending multiple ad files from cloud storage (Google Drive, Dropbox, NextCloud) directly to Meta's Media Library in one batch, skipping the manual download-reupload cycle. Files transfer from storage to ad accounts without local downloads or browser-based drag-and-drop. The entire process runs from a single interface – select files, choose destination accounts, push.",
    },
    {
      question:
        "How does Scalemate upload creatives from Google Drive to Meta?",
      answer:
        "For teams that upload ad creatives from google drive, Scalemate establishes a direct API connection to Meta's Media Library. No more managing folders for ad creatives manually – teams select folders or specific files, set inclusion/exclusion rules, and push assets to one or multiple ad accounts in a single click. No browser extensions or desktop apps required – the connection runs server-side, handling large batches without the timeout or size limits of browser-based uploads.",
    },
    {
      question: "Does Scalemate prevent duplicate uploads?",
      answer:
        "Yes. Built-in deduplication compares files against what already exists in the destination Media Library before any transfer begins. Only new or updated assets get pushed – duplicates are skipped automatically, keeping ad accounts clean without manual tracking. This eliminates the most common source of media library clutter: the same creative uploaded multiple times across separate sessions or by different team members.",
    },
    {
      question: "Can creatives be uploaded to TikTok and YouTube too?",
      answer:
        "Scalemate supports the same cloud-to-platform sync for TikTok and YouTube. The workflow is identical – connect storage, select files, upload to the destination platform in one click. Teams managing multi-platform campaigns handle all uploads from one interface instead of repeating the process per platform.",
    },
    {
      question: "How many files can be uploaded at once?",
      answer:
        "There's no practical cap on batch size – teams that bulk upload creatives facebook ads regularly push hundreds of files per upload. ZeptoLab has delivered over 2,000 media files through the platform. The upload runs server-side, so large batches aren't limited by browser timeouts or local bandwidth the way manual drag-and-drop uploads are.",
    },
    {
      question: "Is there a free version of the creative uploader?",
      answerText:
        "Yes. Scalemate offers a free bulk ad uploader that handles up to 20 files per day – a functional entry point for smaller teams or for testing the workflow before committing to the full Cloud Sync feature. The free tier includes the same direct API connection and deduplication logic, with the only limit being daily file count.",
      answer: (
        <>
          Yes. Scalemate offers a{" "}
          <Link href="/ad-creative-uploader">free uploader tool</Link> that
          handles up to 20 files per day – a functional entry point for smaller
          teams or for testing the workflow before committing to the full Cloud
          Sync feature. The free tier includes the same direct API connection
          and deduplication logic, with the only limit being daily file count.
        </>
      ),
    },
    {
      question:
        "How is this different from uploading directly in Meta Ads Manager?",
      answer:
        "Meta's native upload interface handles individual files or small batches through browser drag-and-drop. It offers no cloud storage integration, no deduplication, and no multi-account upload capability. Scalemate is built for teams that need to bulk upload creatives at scale – moving large volumes from production storage to ad platforms without manual steps.",
    },
  ],

  cta: {
    title: "Bulk Upload Creatives to Meta & TikTok",
    description: (
      <>From cloud storage to live campaigns, without the manual grind.</>
    ),
    secondaryCta: {
      label: "Try Free Uploader",
      href: "/ad-creative-uploader",
    },
  },
}
