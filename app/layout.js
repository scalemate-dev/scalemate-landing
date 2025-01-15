import { Inter, Poppins } from "next/font/google"
import styles from "./page.module.scss"
import Footer from "@/components/shared/Footer/Footer"
import Header from "@/components/shared/Header/Header"
import "./globals.css"

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
