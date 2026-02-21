import { notFound } from "next/navigation"
import { getUseCaseData, getAllSlugs } from "../_data"
import UseCasePage from "../_components/UseCasePage"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

const OG_DEFAULTS = {
  siteName: "Scalemate",
  images: [{ url: "/og-bulk-ad-launch.png", width: 1200, height: 630 }],
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const data = getUseCaseData(slug)
  if (!data) return {}
  const { openGraph, twitter, ...rest } = data.metadata
  return {
    ...rest,
    openGraph: { ...OG_DEFAULTS, ...openGraph },
    twitter: {
      ...twitter,
      images: twitter?.images ?? ["/og-bulk-ad-launch.png"],
    },
  }
}

export default async function UseCaseRoute({ params }) {
  const { slug } = await params
  const data = getUseCaseData(slug)
  if (!data) notFound()
  return <UseCasePage data={data} />
}
