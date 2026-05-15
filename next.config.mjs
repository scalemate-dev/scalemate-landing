/** @type {import('next').NextConfig} */
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  sassOptions: {
    loadPaths: [path.join(__dirname, "app/styles")],
    additionalData: `@use "_variables.scss" as *;`,
    silenceDeprecations: ["mixed-decls"],
  },
  async redirects() {
    return [
      {
        source: "/scalemate-api/:path*",
        destination: "/docs/:path*",
        permanent: false,
      },
      {
        source: "/url/scalemate.gitbook.io/scalemate-api",
        destination: "/",
        permanent: false,
      },
      {
        source: "/launch",
        destination: "/use-cases/bulk-ad-launch",
        permanent: true,
      },
      {
        source: "/blog/facebook-ads-automation",
        destination: "/blog/best-facebook-ads-automation-tools",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    const apiBaseUrl = process.env.API_BASE_URL || "https://api.scalemate.co"

    return [
      // API proxy - avoids CORS issues
      {
        source: "/api/v1/:path*",
        destination: `${apiBaseUrl}/api/v1/:path*`,
      },
      // Docs proxy
      {
        source: "/docs",
        destination: "https://scalemate.gitbook.io/scalemate-api/",
      },
      {
        source: "/docs/:path*",
        destination: "https://scalemate.gitbook.io/scalemate-api/:path*",
      },
    ]
  },
  turbopack: {
    rules: {
      "*.inline.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: ["@svgr/webpack"],
    })
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /\.inline\.svg$/,
      use: ["url-loader"],
    })
    return config
  },
}

export default nextConfig
