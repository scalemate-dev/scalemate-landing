import { notFound } from "next/navigation"
import { getUseCaseData, getAllSlugs } from "../_data"
import UseCasePage from "../_components/UseCasePage"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

const OG_DEFAULTS = {
  siteName: "Scalemate",
}

const OG_IMAGES = {
  "bulk-ad-launch": "/og-bulk-ad-launch.png",
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const data = getUseCaseData(slug)
  if (!data) return {}
  const { openGraph, twitter, ...rest } = data.metadata
  const ogImage = OG_IMAGES[slug] ?? `/og-${slug}.png`
  return {
    ...rest,
    openGraph: {
      ...OG_DEFAULTS,
      ...openGraph,
      images: openGraph?.images ?? [
        { url: ogImage, width: 1200, height: 630 },
      ],
    },
    twitter: {
      ...twitter,
      images: twitter?.images ?? [ogImage],
    },
  }
}

export default async function UseCaseRoute({ params }) {
  const { slug } = await params
  const data = getUseCaseData(slug)
  if (!data) notFound()
  return <UseCasePage data={data} />
}
