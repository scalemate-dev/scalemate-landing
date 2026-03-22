import { GoogleTagManager } from "@next/third-parties/google"
import { Inter, Poppins } from "next/font/google"
import styles from "./page.module.scss"
import Footer from "@/components/elements/Footer/Footer"
import Header from "@/components/elements/Header/Header"
import MarketingShell from "@/components/elements/MarketingShell/MarketingShell"
import "./globals.css"
import MixpanelProvider from "@/components/MixpanelProvider"

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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
        <meta
          name="facebook-domain-verification"
          content="xen4h4jqm1szk6rn5dl14g5eeqhg1o"
        />
      </head>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}

      <body className={`${inter.variable} ${poppins.variable}`}>
        <MixpanelProvider />
        <MarketingShell>
          <Header />
        </MarketingShell>
        <main className={styles.main}>{children}</main>
        <MarketingShell>
          <footer className={styles.fixed}>
            <Footer />
          </footer>
        </MarketingShell>
      </body>
    </html>
  )
}
