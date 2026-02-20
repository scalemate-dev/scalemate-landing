import { notFound } from "next/navigation"
import { getUseCaseData, getAllSlugs } from "../_data"
import UseCasePage from "../_components/UseCasePage"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const data = getUseCaseData(slug)
  if (!data) return {}
  return data.metadata
}

export default async function UseCaseRoute({ params }) {
  const { slug } = await params
  const data = getUseCaseData(slug)
  if (!data) notFound()
  return <UseCasePage data={data} />
}
