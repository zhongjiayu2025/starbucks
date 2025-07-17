import type { Metadata } from "next"
import StarbucksCalculator from "@/components/starbucks-calculator"

export const metadata: Metadata = {
  title: "Free Starbucks Calorie Calculator | Calculate Drink Calories & Nutrition",
  description:
    "Calculate calories and nutrition for 500+ Starbucks drinks instantly. Get healthy tips, customize your order, and make informed choices. The most accurate Starbucks nutrition calculator.",
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
    "free calorie calculator",
    "nutrition calculator",
  ].join(", "),
  openGraph: {
    title: "Free Starbucks Calorie Calculator | Calculate Drink Calories & Nutrition",
    description:
      "Calculate calories and nutrition for 500+ Starbucks drinks instantly. Get healthy tips, customize your order, and make informed choices.",
    type: "website",
    url: "https://starbuckscaloriecalculator.pro",
    images: [
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
    title: "Free Starbucks Calorie Calculator | Calculate Drink Calories & Nutrition",
    description:
      "Calculate calories and nutrition for 500+ Starbucks drinks instantly. Get healthy tips and customize your order.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://starbuckscaloriecalculator.pro",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <StarbucksCalculator />
    </main>
  )
}
