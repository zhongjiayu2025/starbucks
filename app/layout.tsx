import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Starbucks Calorie Calculator & Nutrition Guide",
  description:
    "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
  keywords:
    "starbucks calorie calculator, starbucks nutrition guide, calculate starbucks calories, healthy starbucks, customize starbucks drink, starbucks oat milk calories",
  authors: [{ name: "Starbucks Smart Calculator Team" }],
  creator: "Starbucks Smart Calculator",
  publisher: "Starbucks Smart Calculator",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://starbuckscaloriecalculator.pro",
    siteName: "Starbucks Calorie Calculator",
    title: "Starbucks Calorie Calculator & Nutrition Guide",
    description:
      "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Starbucks Calorie Calculator - Smart Nutrition Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@starbuckscalc",
    title: "Starbucks Calorie Calculator & Nutrition Guide",
    description:
      "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: "https://starbuckscaloriecalculator.pro",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Starbucks Calorie Calculator & Nutrition Guide",
              description:
                "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
              url: "https://starbuckscaloriecalculator.pro",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Starbucks Smart Calculator Team",
              },
              datePublished: "2025-07-15",
              dateModified: "2025-07-15",
              logo: {
                "@type": "ImageObject",
                url: "https://starbuckscaloriecalculator.pro/android-chrome-512x512.png",
                width: 512,
                height: 512,
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
