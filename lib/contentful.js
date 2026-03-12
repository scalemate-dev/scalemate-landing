import { createClient } from "contentful"

const space = process.env.CONTENTFUL_SPACE_ID
const environment = process.env.CONTENTFUL_ENVIRONMENT

export const client = createClient({
  space,
  environment,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
})

export const previewClient = createClient({
  space,
  environment,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
})
