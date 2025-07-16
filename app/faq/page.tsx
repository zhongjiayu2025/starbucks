import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { HelpCircle, Search, Calculator, Coffee, TrendingDown, Mail, Star, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Starbucks Calorie Calculator & Nutrition Guide | Common Questions & Answers",
  description:
    "Frequently asked questions about our Starbucks calorie calculator. Learn how to calculate calories, understand Starbucks oat milk options, and use our nutrition guide effectively.",
  keywords:
    "starbucks calorie calculator faq, calculate starbucks calories help, starbucks nutrition guide questions, starbucks oat milk calories guide, calorie calculator starbucks help",
  robots: "index, follow",
}

const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    icon: HelpCircle,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  },
  {
    id: "calculator",
    name: "Calculator Usage",
    icon: Calculator,
    color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  },
  {
    id: "nutrition",
    name: "Nutrition & Health",
    icon: TrendingDown,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
  },
  {
    id: "technical",
    name: "Technical Support",
    icon: Coffee,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
  },
]

const faqs = {
  general: [
    {
      question: "What is the Starbucks Calorie Calculator?",
      answer:
        "Our starbucks calorie calculator is a comprehensive tool that helps you calculate starbucks calories for any drink combination. It's designed to help coffee lovers make informed nutritional choices by providing accurate calorie counts, nutritional breakdowns, and smart health recommendations for all Starbucks beverages.",
    },
    {
      question: "Is this starbucks calorie calculator free to use?",
      answer:
        "Yes! Our core starbucks nutrition calculator features are completely free. You can calculate starbucks drink calories, explore different customizations, and get smart health tips without any cost. We may offer premium features in the future for advanced nutrition tracking.",
    },
    {
      question: "How accurate is your starbucks calories calculator?",
      answer:
        "Our starbucks calorie calculator uses official Starbucks nutrition data and achieves 99% accuracy for standard recipes. When you calculate starbucks calories with our tool, the results are based on official nutritional information, though actual values may vary slightly due to preparation differences.",
    },
    {
      question: "Can I use this calorie calculator for starbucks drinks on mobile?",
      answer:
        "Our starbucks drink calorie calculator is fully optimized for mobile devices. Whether you're on your phone, tablet, or desktop, you can easily calculate calories in starbucks drink options with the same functionality and accuracy.",
    },
    {
      question: "Do you have a mobile app for the starbucks calorie calculator?",
      answer:
        "Currently, our starbucks nutrition calculator is available as a web application that works perfectly on all devices. A dedicated mobile app is in development and will be available soon with additional features for calculating starbucks drink calories on the go.",
    },
  ],
  calculator: [
    {
      question: "How do I calculate starbucks oat milk calories?",
      answer:
        "To calculate starbucks oat milk calories, simply select 'Oat Milk' in the milk options section of our calculator. Our tool automatically adjusts the calorie count based on your drink size. Oat milk typically adds 15 calories per serving for a Tall drink, with proportional increases for larger sizes.",
    },
    {
      question: "Can I calculate calories in starbucks drink customizations?",
      answer:
        "Yes! Our starbucks drink calorie calculator accounts for all customizations including different milk types, syrup pumps, extra shots, and toppings. Every modification is calculated in real-time to give you the most accurate total when you calculate starbucks calories.",
    },
    {
      question: "How does the size multiplier work in the calorie calculator starbucks tool?",
      answer:
        "Our starbucks calorie calculator uses official size multipliers: Short (0.75x), Tall (1x), Grande (1.33x), and Venti (1.67x). When you calculate starbucks drink calories, all ingredients are automatically adjusted based on the selected size for accurate results.",
    },
    {
      question: "What drinks can I calculate with the starbucks nutrition calculator?",
      answer:
        "Our comprehensive starbucks calorie calculator includes hot drinks, cold drinks, Frappuccinos, and food items. You can calculate starbucks calories for popular drinks like lattes, macchiatos, cold brew, refreshers, and seasonal specialties with full customization options.",
    },
    {
      question: "How do I save my favorite drink calculations?",
      answer:
        "Click the heart icon next to any drink in our starbucks calorie calculator to save it as a favorite. Your saved drinks will be highlighted for easy access when you want to calculate starbucks drink calories for your regular orders.",
    },
  ],
  nutrition: [
    {
      question: "What nutritional information does the starbucks nutrition calculator provide?",
      answer:
        "Our starbucks calorie calculator provides comprehensive nutrition data including calories, fat, carbohydrates, protein, caffeine, fiber, and sugar content. You also get a health score and personalized tips to help you make better choices when you calculate starbucks calories.",
    },
    {
      question: "How can I reduce calories in my Starbucks drinks?",
      answer:
        "Our starbucks calorie calculator offers smart tips like switching to almond milk (saves ~60 calories), using sugar-free syrups, skipping whipped cream (-70 calories), or choosing a smaller size. The calculator shows real-time calorie changes as you modify your drink.",
    },
    {
      question: "Are the starbucks oat milk calories accurate for all drink sizes?",
      answer:
        "Yes! Our starbucks nutrition calculator accurately calculates starbucks oat milk calories for all sizes. Oat milk adds approximately 15 calories for Tall, 20 for Grande, and 25 for Venti drinks, with precise calculations based on official nutritional data.",
    },
    {
      question: "Can I track my daily nutrition goals with the calculator?",
      answer:
        "Our starbucks calorie calculator shows how your drink fits into daily nutrition goals (2000 calories, 65g fat, 300g carbs, 50g sugar). The nutrition analysis tab provides percentage breakdowns to help you make informed decisions about your starbucks drink calories.",
    },
    {
      question: "What's the health score in the starbucks calorie calculator?",
      answer:
        "The health score (0-100) evaluates your drink based on calories, fat, sugar, caffeine content, and healthy choices like plant-based milk. Higher scores indicate healthier options. Our starbucks nutrition calculator uses this to guide you toward better choices.",
    },
  ],
  technical: [
    {
      question: "Why isn't the starbucks calorie calculator loading properly?",
      answer:
        "If our starbucks nutrition calculator isn't loading, try refreshing the page, clearing your browser cache, or using a different browser. The calculator works best on modern browsers with JavaScript enabled. Contact us if issues persist.",
    },
    {
      question: "Can I use the calculator offline?",
      answer:
        "Currently, our starbucks calorie calculator requires an internet connection to function properly and provide the most up-to-date nutritional data. We're working on offline capabilities for future versions of the calculate starbucks calories tool.",
    },
    {
      question: "How often is the nutritional data updated?",
      answer:
        "We update our starbucks calorie calculator data regularly to reflect menu changes, seasonal items, and recipe modifications. Our team monitors official Starbucks nutrition information to ensure accuracy when you calculate starbucks drink calories.",
    },
    {
      question: "Can I integrate the calculator into my website or app?",
      answer:
        "We're developing API access for our starbucks nutrition calculator. If you're interested in integrating our calculate starbucks calories functionality into your platform, please contact us at info@starbuckscaloriecalculator.pro for partnership opportunities.",
    },
    {
      question: "Is my data secure when using the starbucks calorie calculator?",
      answer:
        "Yes! We prioritize your privacy and security. Our starbucks calorie calculator doesn't store personal information, and all calculations are processed securely. Read our Privacy Policy for detailed information about data protection.",
    },
  ],
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Starbucks Calorie Calculator
            </Link>
            <Badge variant="secondary">Help Center</Badge>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Everything you need to know about our <strong>starbucks calorie calculator</strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search FAQ about starbucks calorie calculator..."
                className="pl-10 border-green-200 focus:border-green-400"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Object.values(faqs).reduce((acc, category) => acc + category.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-1">99%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">Free</div>
              <div className="text-sm text-gray-600">Always Free</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Navigation */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {faqCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${category.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {faqs[category.id as keyof typeof faqs].length} questions
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Sections */}
        {faqCategories.map((category) => {
          const Icon = category.icon
          const categoryFaqs = faqs[category.id as keyof typeof faqs]

          return (
            <Card key={category.id} className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${category.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {categoryFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-green-600">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )
        })}

        {/* Popular Questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-600" />
              Most Popular Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">How do I calculate starbucks oat milk calories?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Select 'Oat Milk' in our calculator's milk options. It automatically calculates the exact{" "}
                    <strong>starbucks oat milk calories</strong> based on your drink size.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">Is the starbucks calorie calculator accurate?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Yes! Our <strong>starbucks nutrition calculator</strong> uses official data with 99% accuracy for
                    standard recipes.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">Can I calculate calories in starbucks drink customizations?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our <strong>starbucks drink calorie calculator</strong> accounts for all customizations including
                    milk, syrups, and toppings.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">How can I reduce my drink calories?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Use our smart tips: switch to almond milk, use sugar-free syrups, skip whipped cream, or choose a
                    smaller size.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
              Pro Tips for Using Our Starbucks Calorie Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 text-green-600">Maximize Accuracy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  When you <strong>calculate starbucks calories</strong>, make sure to select all customizations
                  including milk type, syrup pumps, and extra shots for the most accurate results.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 text-blue-600">Compare Options</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Use our <strong>starbucks nutrition calculator</strong> to compare different milk alternatives and see
                  how <strong>starbucks oat milk calories</strong> compare to other options.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 text-purple-600">Save Favorites</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Click the heart icon to save your favorite drinks in our <strong>calorie calculator starbucks</strong>{" "}
                  tool for quick access to your regular orders.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of our{" "}
              <strong>starbucks calorie calculator</strong> and learn how to{" "}
              <strong>calculate starbucks drink calories</strong> effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Try Calculator →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
