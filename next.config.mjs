/** @type {import('next').NextConfig} */
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")],
    prependData: `@import "_variables.scss";`,
  },
  webpack(config) {
    // Exclude SVGs from default file loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

export default nextConfig
