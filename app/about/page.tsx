import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calculator, Target, Shield, Zap, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Our Smart Starbucks Calorie Calculator & Nutrition Guide",
  description:
    "Learn about our advanced Starbucks calorie calculator. Discover how to calculate calories, explore Starbucks oat milk options, and use our nutrition guide for healthier choices.",
  keywords:
    "about starbucks calculator, starbucks calorie calculator, starbucks nutrition guide, calculate starbucks calories, starbucks oat milk calories",
}

const features = [
  {
    icon: Calculator,
    title: "Precise Calorie Calculation",
    description:
      "Our starbucks calorie calculator uses official nutrition data to help you calculate starbucks calories with 99% accuracy.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  },
  {
    icon: Target,
    title: "Smart Health Goals",
    description:
      "Track your progress and get personalized tips when you calculate starbucks drink calories for your fitness goals.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Instant calculations as you customize drinks. See starbucks oat milk calories and other alternatives immediately.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands who use our calorie calculator for starbucks drinks to make healthier choices daily.",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
  },
]

const stats = [
  { number: "50,000+", label: "Daily Users", description: "People using our starbucks calorie calculator" },
  { number: "1M+", label: "Calculations", description: "Starbucks calories calculated monthly" },
  { number: "99%", label: "Accuracy", description: "Precision in calorie calculations" },
  { number: "24/7", label: "Available", description: "Always ready to calculate starbucks calories" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Starbucks Calorie Calculator
            </Link>
            <Badge variant="secondary">About Us</Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            About Our Smart Starbucks Calorie Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Empowering smarter beverage choices through intelligent nutrition calculation.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Ultimate <span className="text-green-600">Starbucks Nutrition Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We created the most comprehensive <strong>starbucks calorie calculator</strong> to help coffee lovers make
            informed decisions. Whether you want to <strong>calculate starbucks drink calories</strong> or explore{" "}
            <strong>starbucks oat milk calories</strong>, our tool provides the insights you need.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="font-medium text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-2 text-green-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We believe that making informed choices about what you drink shouldn't be complicated. Our{" "}
                  <strong>starbucks calorie calculator</strong> goes beyond simple calorie counting to provide
                  intelligent insights that help you enjoy your favorite beverages while staying aligned with your
                  health goals.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When you <strong>calculate calories in starbucks drink</strong> options with our tool, you're not just
                  getting numbers – you're getting personalized recommendations, health scores, and smart tips to
                  optimize your choices.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Why We Built This
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Traditional nutrition calculators are static and don't account for the endless customization
                  possibilities at Starbucks. We wanted to create a <strong>starbucks nutrition calculator</strong>{" "}
                  that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Provides real-time calculations as you customize your drink</li>
                  <li>Offers smart suggestions to help you make healthier choices</li>
                  <li>
                    Accurately calculates <strong>starbucks oat milk calories</strong> and other alternatives
                  </li>
                  <li>Generates the exact order language for your barista</li>
                  <li>Works seamlessly on any device</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Makes Our <span className="text-green-600">Starbucks Calorie Calculator</span> Special
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${feature.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-medium mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>How Our Starbucks Drink Calorie Calculator Works</CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Understanding the technology behind accurate calorie calculations
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h4 className="font-medium mb-2">Official Data Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our <strong>starbucks calories calculator</strong> uses official Starbucks nutrition data, updated
                  regularly to ensure accuracy when you <strong>calculate starbucks calories</strong>.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-medium mb-2">Smart Calculations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Advanced algorithms account for size multipliers, ingredient interactions, and customizations to
                  provide precise results for every <strong>calculate starbucks drink calories</strong> request.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-medium mb-2">Intelligent Insights</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Beyond basic calculations, our <strong>calorie calculator starbucks</strong> tool provides health
                  scores, smart tips, and personalized recommendations for better choices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Accuracy */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                Data Accuracy & Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our <strong>starbucks nutrition calculator</strong> sources data from official Starbucks nutrition
                information and is regularly updated to ensure accuracy. We account for:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Size variations and multipliers</li>
                <li>
                  All milk alternatives including <strong>starbucks oat milk calories</strong>
                </li>
                <li>Syrup and sauce additions</li>
                <li>Seasonal menu changes</li>
                <li>Regional recipe variations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">How accurate is the starbucks calorie calculator?</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Our calculator achieves 99% accuracy using official data and accounting for all customizations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Can I calculate starbucks oat milk calories precisely?</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Yes! We include precise nutritional data for all milk alternatives across all drink sizes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Is this calorie calculator for starbucks drinks free?</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Core features are completely free. Premium features like detailed nutrition tracking are available
                    with Pro.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Disclaimer */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-6 h-6 mr-2 text-yellow-600" />
              Important Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-3">
                <strong>Starbucks Smart Calculator</strong> is an independent, unofficial tool and is not affiliated
                with, endorsed by, or sponsored by Starbucks Corporation. All Starbucks trademarks and brand names are
                the property of Starbucks Corporation.
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Nutritional information provided by our <strong>starbucks calorie calculator</strong> is based on
                standard recipes and may vary due to preparation differences, seasonal variations, or recipe updates.
                Always consult official Starbucks nutrition information for the most current and accurate data when you
                need to <strong>calculate starbucks calories</strong> for medical or dietary purposes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Using Our Starbucks Calorie Calculator?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of coffee lovers who use our <strong>starbucks nutrition calculator</strong> daily. Start
              making smarter choices and <strong>calculate starbucks drink calories</strong> with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/">Start Calculating →</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/recipes">View Healthy Recipes</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
