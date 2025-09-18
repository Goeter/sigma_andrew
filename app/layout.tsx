import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PT. Alfa Berkat Sigma - Industrial Equipment Solutions",
  description:
    "Leading supplier of industrial equipment including hoses, valves, pumps, and fittings. Quality industrial solutions with reliable expertise across Indonesia and Southeast Asia.",
  keywords:
    "industrial equipment, hoses, valves, pumps, fittings, Indonesia, industrial solutions, PT Alfa Berkat Sigma",
  authors: [{ name: "PT. Alfa Berkat Sigma" }],
  creator: "PT. Alfa Berkat Sigma",
  publisher: "PT. Alfa Berkat Sigma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sigma.indonetwork.co.id/",
    title: "PT. Alfa Berkat Sigma - Industrial Equipment Solutions",
    description: "Leading supplier of industrial equipment including hoses, valves, pumps, and fittings.",
    siteName: "PT. Alfa Berkat Sigma",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Alfa Berkat Sigma - Industrial Equipment Solutions",
    description: "Leading supplier of industrial equipment including hoses, valves, pumps, and fittings.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
