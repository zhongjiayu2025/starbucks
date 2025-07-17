import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Starbucks Calorie Calculator - Calculate Starbucks Drink Calories Instantly",
    template: "%s | Starbucks Calorie Calculator",
  },
  description:
    "The most accurate Starbucks calorie calculator. Calculate calories in Starbucks drinks, explore Starbucks oat milk calories, and get smart nutrition insights. Free calorie calculator for all Starbucks beverages.",
  keywords: [
    "starbucks calorie calculator",
    "calculate starbucks calories",
    "starbucks drink calories",
    "calculate calories in starbucks drink",
    "starbucks oat milk calories",
    "calorie calculator for starbucks drinks",
    "starbucks nutrition calculator",
    "starbucks calories counter",
  ],
  authors: [{ name: "Starbucks Calorie Calculator Team" }],
  creator: "Starbucks Calorie Calculator",
  publisher: "Starbucks Calorie Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://starbucks-calorie-calculator.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://starbucks-calorie-calculator.vercel.app",
    title: "Starbucks Calorie Calculator - Calculate Starbucks Drink Calories",
    description:
      "Calculate calories in your favorite Starbucks drinks with our smart calorie calculator. Get nutrition insights and healthy tips.",
    siteName: "Starbucks Calorie Calculator",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Starbucks Calorie Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starbucks Calorie Calculator",
    description: "Calculate calories in Starbucks drinks instantly",
    images: ["/android-chrome-512x512.png"],
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#00704a",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#00704a",
    "theme-color": "#ffffff",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
