import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Starbucks Calorie Calculator & Nutrition Guide | Calculate Drink Calories",
    template: "%s | Starbucks Calorie Calculator",
  },
  description:
    "Free Starbucks calorie calculator with 500+ drinks. Calculate calories, nutrition facts, and get healthy tips for your favorite Starbucks beverages. Instant results with customization options.",
  keywords: [
    "starbucks calorie calculator",
    "starbucks nutrition calculator",
    "calculate starbucks calories",
    "starbucks drink calories",
    "starbucks oat milk calories",
    "healthy starbucks drinks",
    "starbucks nutrition facts",
    "coffee calorie counter",
    "frappuccino calories",
    "starbucks menu calories",
  ].join(", "),
  authors: [{ name: "Starbucks Smart Calculator Team", url: "https://starbuckscaloriecalculator.pro" }],
  creator: "Starbucks Smart Calculator",
  publisher: "Starbucks Smart Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    title: "Free Starbucks Calorie Calculator | Calculate Drink Calories & Nutrition",
    description:
      "Calculate calories and nutrition for 500+ Starbucks drinks. Get instant results, healthy tips, and customize your order. The most accurate Starbucks nutrition calculator available.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Starbucks Calorie Calculator - Smart Nutrition Tool",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starbucks Calorie Calculator - Calculate Your Drink Calories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@starbuckscalc",
    creator: "@starbuckscalc",
    title: "Free Starbucks Calorie Calculator | Calculate Drink Calories & Nutrition",
    description:
      "Calculate calories and nutrition for 500+ Starbucks drinks. Get instant results, healthy tips, and customize your order.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: "https://starbuckscaloriecalculator.pro",
    languages: {
      "en-US": "https://starbuckscaloriecalculator.pro",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "health",
  classification: "Health & Nutrition Calculator",
  generator: "Next.js",
  applicationName: "Starbucks Calorie Calculator",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16a34a" },
    { media: "(prefers-color-scheme: dark)", color: "#16a34a" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Starbucks Calculator" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Starbucks Calorie Calculator & Nutrition Guide",
              description:
                "Free online calculator to determine calories and nutrition facts for Starbucks drinks. Calculate calories for over 500 beverages with customization options.",
              url: "https://starbuckscaloriecalculator.pro",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web Browser",
              browserRequirements: "Requires JavaScript. Requires HTML5.",
              softwareVersion: "2.0",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Starbucks Smart Calculator Team",
                url: "https://starbuckscaloriecalculator.pro",
              },
              publisher: {
                "@type": "Organization",
                name: "Starbucks Smart Calculator",
                logo: {
                  "@type": "ImageObject",
                  url: "https://starbuckscaloriecalculator.pro/android-chrome-512x512.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-01-17",
              inLanguage: "en-US",
              isAccessibleForFree: true,
              usageInfo: "https://starbuckscaloriecalculator.pro/terms-of-service",
              privacyPolicy: "https://starbuckscaloriecalculator.pro/privacy-policy",
              logo: {
                "@type": "ImageObject",
                url: "https://starbuckscaloriecalculator.pro/android-chrome-512x512.png",
                width: 512,
                height: 512,
              },
              sameAs: ["https://twitter.com/starbuckscalc", "https://facebook.com/starbuckscalc"],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://starbuckscaloriecalculator.pro/?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              mainEntity: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How accurate is this Starbucks calorie calculator?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our calculator uses official Starbucks nutrition data and accounts for all customizations. Results are based on standard recipes, though actual calories may vary slightly due to preparation differences.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I calculate Starbucks oat milk calories?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! Our calculator includes precise oat milk calorie data for all drink sizes. You can easily compare oat milk with other alternatives.",
                    },
                  },
                ],
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
