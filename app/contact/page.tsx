import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Mail, MessageSquare, Clock, Send, MapPin, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Starbucks Calorie Calculator & Nutrition Guide - Get Support",
  description:
    "Contact our Starbucks calorie calculator support team. Get help with calculating calories and using our nutrition guide effectively.",
  keywords:
    "starbucks calorie calculator support, calculate starbucks calories help, starbucks nutrition guide contact, customer service",
  robots: "index, follow",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Starbucks Calorie Calculator
            </Link>
            <Badge variant="secondary">Support Center</Badge>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Get help with our <strong>starbucks calorie calculator</strong> and learn how to{" "}
                <strong>calculate starbucks calories</strong> effectively
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Get help with our <strong>starbucks nutrition calculator</strong>
              </p>
              <a
                href="mailto:info@starbuckscaloriecalculator.pro"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                info@starbuckscaloriecalculator.pro
              </a>
              <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                Response within 24 hours
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">FAQ & Help</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Common questions about <strong>calculate starbucks calories</strong>
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/#faq">View FAQ</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Feature Requests</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Suggest improvements for our <strong>starbucks drink calorie calculator</strong>
              </p>
              <Button variant="outline" size="sm">
                Submit Idea
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-green-600" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Have questions about our <strong>starbucks calorie calculator</strong>? We're here to help you{" "}
                  <strong>calculate starbucks drink calories</strong> more effectively.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:bg-gray-800"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="calculator-help">Starbucks Calorie Calculator Help</option>
                      <option value="nutrition-question">Calculate Starbucks Calories Question</option>
                      <option value="oat-milk-calories">Starbucks Oat Milk Calories Inquiry</option>
                      <option value="technical-issue">Technical Issue</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Please describe your question or issue with our starbucks nutrition calculator..."
                      required
                    />
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Tip:</strong> For faster support with our{" "}
                      <strong>starbucks drink calorie calculator</strong>, please include:
                    </p>
                    <ul className="text-xs text-blue-600 dark:text-blue-400 mt-2 space-y-1">
                      <li>• Specific drink or calculation you're having trouble with</li>
                      <li>• Your device type (mobile, desktop, tablet)</li>
                      <li>• Browser you're using</li>
                      <li>• Screenshots if applicable</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:info@starbuckscaloriecalculator.pro"
                      className="text-green-600 hover:text-green-700"
                    >
                      info@starbuckscaloriecalculator.pro
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Primary contact for <strong>starbucks calorie calculator</strong> support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Website</h4>
                    <a href="https://starbuckscaloriecalculator.pro" className="text-blue-600 hover:text-blue-700">
                      starbuckscaloriecalculator.pro
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Your go-to <strong>starbucks nutrition calculator</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300">• General inquiries: Within 24 hours</p>
                    <p className="text-gray-600 dark:text-gray-300">• Technical issues: Within 12 hours</p>
                    <p className="text-gray-600 dark:text-gray-300">• Business inquiries: Within 48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick answers about our <strong>calorie calculator for starbucks drinks</strong>
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">How accurate is the starbucks calorie calculator?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our calculator uses official Starbucks nutrition data with 99% accuracy for standard recipes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Can I calculate starbucks oat milk calories?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Yes! We include precise <strong>starbucks oat milk calories</strong> data for all drink sizes and
                    combinations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Is the calculator free to use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Core features are completely free. Premium features like detailed nutrition tracking are available
                    with Pro.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Do you have a mobile app?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our website is fully mobile-optimized and works perfectly on all devices. A dedicated app is in
                    development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Inquiries */}
            <Card>
              <CardHeader>
                <CardTitle>Business & Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interested in partnering with our <strong>starbucks calorie calculator</strong> or have a business
                  proposal?
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Partnerships:</strong> info@starbuckscaloriecalculator.pro
                  </p>
                  <p className="text-sm">
                    <strong>Media Inquiries:</strong> info@starbuckscaloriecalculator.pro
                  </p>
                  <p className="text-sm">
                    <strong>API Access:</strong> Contact us for integration opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're here to help you get the most out of our <strong>starbucks calorie calculator</strong>. Whether you
              want to <strong>calculate calories in starbucks drink</strong> options or need technical support, don't
              hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="mailto:info@starbuckscaloriecalculator.pro">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us Now
                </a>
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
