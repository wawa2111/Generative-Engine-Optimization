import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Linkedin, Twitter } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Started with AI Marketing | GEO Platform",
  description:
    "Ready to transform your marketing with AI-powered content generation and XM Cloud integration? Contact our team for personalized recommendations and support.",
  keywords:
    "AI marketing contact, GEO platform support, XM Cloud integration help, content generation consultation, marketing automation contact",
  openGraph: {
    title: "Contact Us - Get Started with AI Marketing | GEO Platform",
    description:
      "Ready to transform your marketing with AI-powered content generation and XM Cloud integration? Contact our team for personalized recommendations and support.",
    type: "website",
    url: "https://geoplatform.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Started with AI Marketing | GEO Platform",
    description:
      "Ready to transform your marketing with AI-powered content generation and XM Cloud integration? Contact our team for personalized recommendations and support.",
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let's Talk Growth</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your marketing with AI-powered content generation and XM Cloud integration? Whether you
            have questions about our platform, need help with implementation, or want to discuss custom solutions, we're
            here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get in touch with our team</CardTitle>
                <CardDescription className="text-lg">
                  Share your marketing challenges and goals. We'll respond within 24 hours with personalized
                  recommendations for your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your marketing challenges and goals..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle>Support Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Support Email:</p>
                    <p className="text-blue-600">support@geomarketing.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours:</p>
                    <p className="text-gray-600">Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Response Time:</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center">
                    <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle>Follow Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Connect with us on LinkedIn and Twitter for the latest updates on AI marketing trends, platform
                    features, and industry insights.
                  </p>
                  <p className="font-semibold text-gray-900 mb-4">
                    Follow us for daily AI marketing tips and platform updates
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
