import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import { Inter, Poppins } from "next/font/google"
import styles from "./page.module.scss"
import Footer from "@/components/elements/Footer/Footer"
import Header from "@/components/elements/Header/Header"
import "./globals.css"
import FacebookPixel from "@/components/FacebookPixel"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://www.scalemate.co"),
  title: "Scalemate | Smarter Way to Automate Ads Management",
  description:
    "Launch dozens of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
  // "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster.",
  keywords:
    "Facebook ads automation software, Scale ad campaigns smarter, Bulk Facebook ads launch, Automate ad creatives upload, Save time with Facebook ad automation, Cut ad launch costs by 90%, 260% faster ad launches, Marketing automation software for facebook ads, Ad management tools for marketers, How to launch multiple Facebook ads quickly, Best Facebook ads automation tools for marketers",
  // "Facebook ads automation software, optimize ads management, facebook bulk ads launch, benefits of facebook ads automation, marketing automation software, creatives upload to facebook",
  openGraph: {
    title: "Smart Way to Automate Ads Management – Scalemate",
    description:
      "Launch dozens of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Way to Automate Ads Management – Scalemate",
    description:
      "Launch dozens of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
    images: ["https://www.scalemate.co/twitter-og-image.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <FacebookPixel />
        <meta
          name="facebook-domain-verification"
          content="xen4h4jqm1szk6rn5dl14g5eeqhg1o"
        />
      </head>
      <GoogleTagManager gtmId="GTM-P5QQVGJ" />
      <GoogleAnalytics gaId="UA-184823727-1" />

      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <div className={styles.main}>{children}</div>
        <div className={styles.fixed}>
          <Footer />
        </div>
      </body>
    </html>
  )
}
