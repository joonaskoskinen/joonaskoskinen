import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://joonaskoskinen.com"),
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
    "EDM producer",
    "PIGEON music",
  ],
  authors: [{ name: "Joonas Koskinen" }],
  creator: "Joonas Koskinen",
  publisher: "Joonas Koskinen",
  alternates: {
    canonical: "https://joonaskoskinen.com",
  },
  openGraph: {
    title: "Joonas Koskinen - IT Specialist & Software Advisor",
    description:
      "IT professional specializing in Azure, M365, and Business Central. EDM producer as PIGEON with Sony Music Finland releases. Available for consulting work.",
    url: "https://joonaskoskinen.com",
    siteName: "Joonas Koskinen Portfolio",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joonas Koskinen - IT Specialist & Software Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joonas Koskinen - IT Specialist & EDM Producer",
    description: "IT professional specializing in Azure, M365, and Business Central. EDM producer as PIGEON.",
    images: ["/og-image.png"],
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1628" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joonas Koskinen",
              url: "https://joonaskoskinen.com",
              jobTitle: "Software Advisor",
              worksFor: {
                "@type": "Organization",
                name: "Azets Insight",
              },
              knowsAbout: ["Microsoft Azure", "Microsoft 365", "Business Central", "Cybersecurity", "Web Development"],
              sameAs: [
                "https://www.youtube.com/@PIGEONmusic",
                "https://github.com/joonaskoskinen",
                "https://linkedin.com/in/joonaskoskinen",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
