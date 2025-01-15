import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import { Inter, Poppins } from "next/font/google"
import styles from "./page.module.scss"
import Footer from "@/components/shared/Footer/Footer"
import Header from "@/components/shared/Header/Header"
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
  title: "Scalemate | Creative Testing Automation Assistant",
  description:
    "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster.",
  keywords:
    "Creatives testing automation, Optimize creative management, creatives testing platform, facebook creatives testing, facebook creatives testing tool, tiktok creatives testing tool, facebook ad testing tool",
  openGraph: {
    title: "Creatives testing automation tool – Scalemate",
    description:
      "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatives testing automation tool – Scalemate",
    description:
      "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster.",
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
