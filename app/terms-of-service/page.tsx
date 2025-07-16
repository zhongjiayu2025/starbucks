import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FileText, Mail, Calendar, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Starbucks Calorie Calculator & Nutrition Guide - Usage Agreement",
  description:
    "Terms of service for our Starbucks calorie calculator. Understand the usage terms when you calculate calories with our nutrition guide.",
  keywords:
    "starbucks calorie calculator terms, calculate starbucks calories agreement, starbucks nutrition guide terms of use",
  robots: "index, follow",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Starbucks Calorie Calculator
            </Link>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Effective: July 15, 2025</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Usage agreement for our <strong>starbucks calorie calculator</strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Welcome to <strong>starbuckscaloriecalculator.pro</strong>! These Terms of Service ("Terms") govern your
              use of our <strong>starbucks calorie calculator</strong> website and services. By accessing or using our{" "}
              <strong>starbucks nutrition calculator</strong> to <strong>calculate starbucks calories</strong>, you
              agree to be bound by these Terms.
            </p>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">Important Notice</p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    If you do not agree to these Terms, please do not use our{" "}
                    <strong>starbucks drink calorie calculator</strong>. Your continued use constitutes acceptance of
                    these Terms.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Description of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our <strong>starbucks calorie calculator</strong> provides the following services:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Core Features</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Calculate starbucks drink calories accurately</li>
                  <li>• Comprehensive starbucks nutrition calculator</li>
                  <li>• Customization options for all drink types</li>
                  <li>• Real-time calorie calculations</li>
                  <li>• Smart health recommendations</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Additional Tools</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Calculate calories in starbucks drink variations</li>
                  <li>• Starbucks oat milk calories information</li>
                  <li>• Healthy recipe suggestions</li>
                  <li>• Order generation for baristas</li>
                  <li>• Nutritional goal tracking</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-medium mb-2 text-red-700 dark:text-red-300">Important Disclaimer</h4>
              <p className="text-sm text-red-600 dark:text-red-400">
                Our <strong>calorie calculator for starbucks drinks</strong> is an independent tool not affiliated with
                Starbucks Corporation. Nutritional information is based on publicly available data and may vary from
                actual products.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Responsibilities and Conduct</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When using our <strong>starbucks calorie calculator</strong>, you agree to:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-green-600">Acceptable Use</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Use the starbucks nutrition calculator for personal, non-commercial purposes</li>
                  <li>Provide accurate information when using our calculate starbucks calories features</li>
                  <li>Respect intellectual property rights and copyrights</li>
                  <li>Follow all applicable laws and regulations</li>
                  <li>Use the service in good faith and not attempt to circumvent security measures</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-red-600">Prohibited Activities</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Attempting to hack, disrupt, or damage our starbucks drink calorie calculator</li>
                  <li>Using automated tools to scrape or harvest data</li>
                  <li>Impersonating others or providing false information</li>
                  <li>Distributing malware, viruses, or harmful code</li>
                  <li>Using the service for illegal or unauthorized purposes</li>
                  <li>Attempting to reverse engineer our calorie calculator starbucks algorithms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Our Content and Technology</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  The <strong>starbucks calorie calculator</strong> website, including its design, functionality,
                  algorithms, and content, is protected by intellectual property laws. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Proprietary calculation algorithms for our starbucks nutrition calculator</li>
                  <li>Website design, layout, and user interface elements</li>
                  <li>Original content, articles, and educational materials</li>
                  <li>Software code and technical implementations</li>
                  <li>Branding, logos, and visual identity (excluding Starbucks trademarks)</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Third-Party Trademarks</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  "Starbucks" and related trademarks are the property of Starbucks Corporation. Our{" "}
                  <strong>starbucks drink calorie calculator</strong> is not affiliated with, endorsed by, or sponsored
                  by Starbucks Corporation. We use these terms solely for descriptive purposes.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">User-Generated Content</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Any content you submit (feedback, suggestions, comments) becomes our property and may be used to
                  improve our <strong>calculate starbucks calories</strong> services without compensation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
              Disclaimers and Limitations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-medium mb-2 text-yellow-800 dark:text-yellow-200">Nutritional Information</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Our <strong>starbucks calorie calculator</strong> provides estimates based on standard recipes. Actual
                  nutritional values may vary due to preparation methods, ingredient substitutions, seasonal changes,
                  and regional differences. Always consult official Starbucks nutrition information for medical or
                  dietary decisions.
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                <h4 className="font-medium mb-2 text-red-800 dark:text-red-200">Medical Disclaimer</h4>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Our <strong>starbucks nutrition calculator</strong> is not intended to provide medical advice. Consult
                  healthcare professionals for dietary restrictions, allergies, or medical conditions. We are not
                  responsible for health consequences from using our{" "}
                  <strong>calculate calories in starbucks drink</strong> tool.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-medium mb-2">Service Availability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We strive to maintain our <strong>calorie calculator for starbucks drinks</strong> 24/7, but cannot
                  guarantee uninterrupted service. We reserve the right to modify, suspend, or discontinue features
                  without notice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To the maximum extent permitted by law, we shall not be liable for any damages arising from your use of
              our <strong>starbucks calorie calculator</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Excluded Damages</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Direct, indirect, or consequential damages</li>
                  <li>• Loss of profits or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Personal injury or health issues</li>
                  <li>• Third-party claims or actions</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Maximum Liability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our total liability for any claims related to the <strong>starbucks drink calorie calculator</strong>{" "}
                  shall not exceed $100 USD or the amount you paid for premium services (if any) in the 12 months
                  preceding the claim.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Your Rights</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  You may stop using our <strong>starbucks calorie calculator</strong> at any time. If you have a
                  premium account, you may cancel according to the cancellation terms provided at signup.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Our Rights</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  We may terminate or suspend your access to our <strong>starbucks nutrition calculator</strong> if you:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Violate these Terms of Service</li>
                  <li>Engage in prohibited activities</li>
                  <li>Provide false or misleading information</li>
                  <li>Attempt to harm our service or other users</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Effect of Termination</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Upon termination, your right to use the <strong>calculate starbucks calories</strong> service ceases
                  immediately. Provisions regarding intellectual property, disclaimers, and limitations of liability
                  survive termination.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Governing Law and Disputes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Applicable Law</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  These Terms and your use of our <strong>starbucks calorie calculator</strong> are governed by the laws
                  of the jurisdiction where our service is operated, without regard to conflict of law principles.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Dispute Resolution</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  We encourage resolving disputes through direct communication. For formal disputes:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Contact us first at info@starbuckscaloriecalculator.pro</li>
                  <li>Allow 30 days for good faith resolution attempts</li>
                  <li>Disputes may be subject to binding arbitration</li>
                  <li>Class action lawsuits are waived where legally permissible</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Changes to These Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update these Terms periodically to reflect changes in our{" "}
              <strong>starbucks drink calorie calculator</strong> service or legal requirements:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-1">
                  1
                </Badge>
                <div>
                  <h4 className="font-medium">Notification Process</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We'll post updated Terms on this page and update the effective date. For material changes, we'll
                    provide additional notice via email or website banner.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="mt-1">
                  2
                </Badge>
                <div>
                  <h4 className="font-medium">Your Options</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Continued use after changes constitutes acceptance. If you disagree with updated Terms, discontinue
                    using our <strong>calorie calculator starbucks</strong> service.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-green-600" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Questions about these Terms or our <strong>starbucks calorie calculator</strong> service? Contact us:
            </p>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Email Support</h4>
                  <a
                    href="mailto:info@starbuckscaloriecalculator.pro"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    info@starbuckscaloriecalculator.pro
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Response within 48 hours for terms-related inquiries
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Website</h4>
                  <a
                    href="https://starbuckscaloriecalculator.pro"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    starbuckscaloriecalculator.pro
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Visit for the latest terms and service updates
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Effective Date */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center bg-gray-50 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>These Terms of Service are effective as of July 15, 2025</strong>
            </p>
            <p className="text-xs text-gray-500 mt-2">Last updated: July 15, 2025 | Version 1.0</p>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Calculating?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Now that you've reviewed our terms, start using our <strong>starbucks calorie calculator</strong> to{" "}
              <strong>calculate starbucks drink calories</strong> and make informed choices.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/">Use Calorie Calculator →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
