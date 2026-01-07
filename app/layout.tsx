import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joonas Koskinen | IT Specialist & Software Advisor | Azure, M365, Business Central",
  description:
    "IT professional specializing in Microsoft Azure, M365, and Business Central at Azets Insight. ICT Engineering student with expertise in cybersecurity, license management, and full-stack web development. Available for consulting work.",
  keywords: [
    "IT specialist Finland",
    "Microsoft Azure consultant",
    "Business Central expert",
    "M365 administrator",
    "cybersecurity professional",
    "software advisor",
    "ICT engineering",
    "full-stack developer",
    "Kuopio IT",
  ],
  authors: [{ name: "Joonas Koskinen" }],
  openGraph: {
    title: "Joonas Koskinen - IT Specialist & Software Advisor",
    description:
      "IT professional specializing in Azure, M365, and Business Central. Available for consulting work in Finland.",
    url: "https://joonaskoskinen.com",
    siteName: "Joonas Koskinen Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joonas Koskinen - IT Specialist",
    description: "IT professional specializing in Azure, M365, and Business Central",
  },
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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
