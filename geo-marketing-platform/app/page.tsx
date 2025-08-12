import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Share2, Star, ArrowRight, Zap, Users, Target, Globe } from "lucide-react"
import type { Metadata } from "next"

// Added SEO metadata for homepage
export const metadata: Metadata = {
  title: "GEO Platform - AI-Powered Marketing Content Generation & XM Cloud Publishing",
  description:
    "Transform your marketing with AI-powered Generative Engine Optimization. Create, optimize, and publish content directly to XM Cloud while distributing across 9 social media platforms.",
  keywords:
    "generative engine optimization, AI-powered marketing, XM Cloud SEO integration, GGUF AI model for marketing, AI content optimization, social media automation",
  openGraph: {
    title: "GEO Platform - AI-Powered Marketing Content Generation & XM Cloud Publishing",
    description:
      "Transform your marketing with AI-powered Generative Engine Optimization. Create, optimize, and publish content directly to XM Cloud while distributing across 9 social media platforms.",
    type: "website",
    url: "https://geoplatform.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GEO Platform - AI-Powered Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Platform - AI-Powered Marketing Content Generation & XM Cloud Publishing",
    description:
      "Transform your marketing with AI-powered Generative Engine Optimization. Create, optimize, and publish content directly to XM Cloud while distributing across 9 social media platforms.",
    images: ["/og-image.jpg"],
  },
}

export default function Homepage() {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered SEO Intelligence",
      description:
        "Discover high-impact keywords and content clusters using advanced GGUF AI models that understand search intent better than traditional tools.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Zap,
      title: "Direct XM Cloud Publishing",
      description:
        "Seamlessly publish optimized content directly to your XM Cloud CMS with one-click deployment and automatic formatting.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Share2,
      title: "Multi-Platform Social Media Automation",
      description:
        "Distribute your content across 9 social media platforms including Facebook, Instagram, LinkedIn, Twitter, Pinterest, YouTube, TikTok, Medium, and Reddit.",
      color: "text-purple-600 bg-purple-100",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "AI analyzes your niche and identifies high-opportunity keywords and content gaps",
    },
    {
      number: "02",
      title: "Generate",
      description: "GGUF models create optimized content tailored to your brand voice and SEO requirements",
    },
    {
      number: "03",
      title: "Publish",
      description:
        "Deploy directly to XM Cloud with automated scheduling and performance tracking across all platforms",
    },
  ]

  const testimonials = [
    {
      quote:
        "This platform increased our organic traffic by 340% in just 3 months. The AI content generation is incredibly accurate, and the XM Cloud integration saves us hours every week.",
      author: "Sarah Chen",
      title: "Marketing Director at TechFlow Solutions",
      rating: 5,
    },
    {
      quote:
        "The social media automation feature is a game-changer. We're now publishing to 9 platforms simultaneously with content that's perfectly optimized for each channel.",
      author: "Marcus Rodriguez",
      title: "Head of Digital Marketing at GrowthLab",
      rating: 5,
    },
    {
      quote:
        "GGUF AI models understand our brand voice better than any tool we've used. The content quality is consistently excellent across all our campaigns.",
      author: "Emily Watson",
      title: "Content Strategy Lead at InnovateCorp",
      rating: 5,
    },
  ]

  const trustIndicators = [
    {
      title: "Active Marketers",
      value: "2,500+",
      description: "Growing businesses trust our platform",
      icon: Users,
    },
    {
      title: "Content Generated",
      value: "50K+",
      description: "AI-optimized articles published monthly",
      icon: Target,
    },
    {
      title: "Social Platforms",
      value: "9",
      description: "Seamless distribution across all major channels",
      icon: Globe,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Transform your marketing with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-powered Generative Engine Optimization
            </span>{" "}
            that creates, optimizes, and publishes content directly to XM Cloud
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Stop guessing what content will rank. Our GGUF AI models analyze search patterns, generate optimized
            content, and publish directly to your XM Cloud CMS while distributing across 9 social media platforms—all
            while tracking real-time performance metrics.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
              See It in Action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Growing Businesses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of marketers already scaling their content with AI
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <indicator.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{indicator.value}</div>
                  <p className="text-sm text-gray-600 mt-1">{indicator.title}</p>
                  <p className="text-xs text-gray-500 mt-2">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Dominate Digital Marketing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              AI-powered content creation, XM Cloud publishing, and multi-platform distribution in one platform
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">Three simple steps to transform your content marketing</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 hidden lg:block w-full h-0.5 bg-gray-200 transform translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Real results from marketers who transformed their content strategy
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-900 mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to dominate search results with AI-powered content?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join 2,500+ marketers already using generative engine optimization to scale their content marketing.
          </p>
          <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Your Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  )
}
