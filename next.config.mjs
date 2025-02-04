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
  experimental: {
    turbo: {
      rules: {
        // Handle .inline.svg files as React components
        "*.inline.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    })
    return config
  },
}

export default nextConfig
