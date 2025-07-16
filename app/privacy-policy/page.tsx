import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Shield, Mail, Calendar, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Starbucks Calorie Calculator & Nutrition Guide - Data Protection",
  description:
    "Privacy policy for our Starbucks calorie calculator. Learn how we protect your data when you calculate calories and use our nutrition guide.",
  keywords:
    "starbucks calorie calculator privacy, calculate starbucks calories privacy, starbucks nutrition guide data protection",
  robots: "index, follow",
}

export default function PrivacyPolicyPage() {
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
              <span>Last updated: July 15, 2025</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-300">
                How we protect your privacy while using our <strong>starbucks calorie calculator</strong>
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
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At <strong>starbuckscaloriecalculator.pro</strong>, we are committed to protecting your privacy and
              personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you
              use our <strong>starbucks calorie calculator</strong> to <strong>calculate starbucks calories</strong> and
              access our <strong>starbucks nutrition calculator</strong> services.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              By using our website and <strong>starbucks drink calorie calculator</strong>, you agree to the collection
              and use of information in accordance with this policy. We respect your privacy and are committed to
              protecting your personal information.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                When you use our <strong>starbucks calorie calculator</strong> to{" "}
                <strong>calculate starbucks drink calories</strong>, we automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                <li>IP address and general location information</li>
                <li>Browser type, version, and operating system</li>
                <li>Pages visited and time spent on our starbucks nutrition calculator</li>
                <li>Referring website information</li>
                <li>Device information (mobile, desktop, tablet)</li>
                <li>Usage patterns when you calculate calories in starbucks drink options</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Information You Provide</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                We may collect information you voluntarily provide when using our{" "}
                <strong>calorie calculator for starbucks drinks</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Drink preferences and customizations</li>
                <li>Saved favorite drinks (stored locally)</li>
                <li>Feedback and contact form submissions</li>
                <li>Newsletter subscription email (if provided)</li>
                <li>User-generated content and comments</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Cookies and Tracking Technologies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Our <strong>starbucks calorie calculator</strong> uses cookies and similar technologies to enhance your
                experience:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to improve our starbucks nutrition calculator</li>
                <li>Preference cookies to remember your settings</li>
                <li>Third-party cookies from advertising partners</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the collected information to provide and improve our{" "}
              <strong>starbucks drink calorie calculator</strong> services:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-green-600">Service Provision</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Operate our starbucks calorie calculator effectively</li>
                  <li>Provide accurate calculations when you calculate starbucks calories</li>
                  <li>Remember your preferences and settings</li>
                  <li>Enable social sharing features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-blue-600">Improvement & Analytics</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Analyze usage patterns and popular features</li>
                  <li>Improve our starbucks nutrition calculator functionality</li>
                  <li>Optimize website performance and user experience</li>
                  <li>Develop new features for calculating starbucks drink calories</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-purple-600">Communication</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Send important updates about our calorie calculator starbucks tool</li>
                  <li>Respond to customer support inquiries</li>
                  <li>Send newsletters (with your consent)</li>
                  <li>Notify about new features or improvements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-orange-600">Legal & Security</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and abuse</li>
                  <li>Enforce our terms of service</li>
                  <li>Maintain website security</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information. We may share information in these limited
              circumstances:
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Third-Party Service Providers</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We work with trusted partners to operate our <strong>starbucks calorie calculator</strong>, including
                  hosting providers, analytics services, and customer support tools. These partners are bound by strict
                  confidentiality agreements.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Legal Requirements</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We may disclose information when required by law, court order, or to protect our rights, property, or
                  safety, or that of our users or others.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Business Transfers</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  In the event of a merger, acquisition, or sale of assets, user information may be transferred as part
                  of the transaction, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your information when using our{" "}
              <strong>starbucks nutrition calculator</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  Technical Safeguards
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Secure hosting infrastructure</li>
                  <li>• Regular security updates and patches</li>
                  <li>• Firewall protection and monitoring</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-600" />
                  Organizational Measures
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Limited access to personal data</li>
                  <li>• Employee training on data protection</li>
                  <li>• Regular security assessments</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You have several rights regarding your personal information when using our{" "}
              <strong>starbucks calorie calculator</strong>:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Access and Portability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Request a copy of your personal data and information about how we process it.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Correction and Updates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Correct inaccurate information or update your preferences in our system.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Deletion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Request deletion of your personal data, subject to legal and legitimate business requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Opt-out</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Unsubscribe from marketing communications and adjust cookie preferences.
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
              Contact Us About Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have questions about this Privacy Policy or how we handle your data when you use our{" "}
              <strong>starbucks drink calorie calculator</strong>, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Email Contact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  For privacy-related inquiries about our <strong>starbucks calorie calculator</strong>:
                </p>
                <a
                  href="mailto:info@starbuckscaloriecalculator.pro"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  info@starbuckscaloriecalculator.pro
                </a>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium mb-2">Response Time</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We aim to respond to all privacy inquiries within 30 days. For urgent matters, please mark your email
                  as "URGENT - Privacy Request."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
              When we make significant changes to how we handle your data in our{" "}
              <strong>starbucks nutrition calculator</strong>, we will:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300 mb-4">
              <li>Post the updated policy on this page</li>
              <li>Update the "Last Modified" date at the top</li>
              <li>Notify users via email (if we have your email address)</li>
              <li>Display a prominent notice on our website</li>
            </ul>
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> July 15, 2025 | <strong>Effective date:</strong> July 15, 2025
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Use Our Starbucks Calorie Calculator?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Now that you understand how we protect your privacy, start using our{" "}
              <strong>starbucks calorie calculator</strong> to <strong>calculate starbucks drink calories</strong> with
              confidence.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/">Start Calculating Calories →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
