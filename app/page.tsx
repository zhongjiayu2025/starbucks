import type { Metadata } from "next"
import StarbucksCalculator from "@/components/starbucks-calculator"

export const metadata: Metadata = {
  title: "Starbucks Calorie Calculator & Nutrition Guide",
  description:
    "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
  keywords:
    "starbucks calorie calculator, starbucks nutrition guide, calculate starbucks calories, healthy starbucks, customize starbucks drink, starbucks oat milk calories",
  openGraph: {
    title: "Starbucks Calorie Calculator & Nutrition Guide",
    description:
      "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
    type: "website",
    url: "https://starbucks-calculator.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starbucks Calorie Calculator & Nutrition Guide",
    description:
      "Calculate calories and nutrition for any Starbucks drink. Our smart calculator offers tips for healthier choices. Customize your order in seconds!",
  },
  alternates: {
    canonical: "https://starbucks-calculator.vercel.app",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <StarbucksCalculator />
    </main>
  )
}
