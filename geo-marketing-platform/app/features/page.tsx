import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Search, Zap, BarChart3, Calendar, Target, Share2 } from "lucide-react"
import type { Metadata } from "next"

// Added SEO metadata for features page
export const metadata: Metadata = {
  title: "Features - AI-Powered Marketing Content Generation | GEO Platform",
  description:
    "Discover powerful features including AI keyword discovery, GGUF content generation, XM Cloud publishing, multi-platform social automation, and real-time SEO scoring.",
  keywords:
    "AI keyword discovery, GGUF AI models, XM Cloud publishing, social media automation, SEO scoring, content generation features",
  openGraph: {
    title: "Features - AI-Powered Marketing Content Generation | GEO Platform",
    description:
      "Discover powerful features including AI keyword discovery, GGUF content generation, XM Cloud publishing, multi-platform social automation, and real-time SEO scoring.",
    type: "website",
    url: "https://geoplatform.com/features",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - AI-Powered Marketing Content Generation | GEO Platform",
    description:
      "Discover powerful features including AI keyword discovery, GGUF content generation, XM Cloud publishing, multi-platform social automation, and real-time SEO scoring.",
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Search,
      title: "AI Keyword Discovery & Clustering",
      subtitle: "Uncover Hidden Opportunities with Intelligent Keyword Research",
      description:
        "Our GGUF AI models don't just find keywords—they understand search intent, competition gaps, and content opportunities that traditional tools miss. Get keyword clusters that actually drive traffic and conversions.",
      benefits: [
        "Discover long-tail keywords with high conversion potential",
        "Identify content gaps your competitors are missing",
        "Generate semantic keyword clusters for comprehensive content coverage",
      ],
    },
    {
      icon: Brain,
      title: "Content Generation with GGUF AI Models",
      subtitle: "Create High-Converting Content at Scale",
      description:
        "Generate blog posts, landing pages, and marketing copy that's optimized for both search engines and human readers. Our GGUF AI models understand your brand voice and industry nuances.",
      benefits: [
        "Produce SEO-optimized content in minutes, not hours",
        "Maintain consistent brand voice across all content",
        "Generate multiple content variations for A/B testing",
      ],
    },
    {
      icon: Zap,
      title: "Direct XM Cloud Publishing",
      subtitle: "Seamless Integration with Your Content Management System",
      description:
        "Skip the copy-paste workflow. Publish optimized content directly to XM Cloud with proper formatting, meta tags, and SEO elements automatically applied.",
      benefits: [
        "One-click publishing to XM Cloud CMS",
        "Automatic meta tag and schema markup generation",
        "Bulk content deployment with scheduling options",
      ],
    },
    {
      icon: Share2,
      title: "Multi-Platform Social Publishing",
      subtitle: "Distribute Content Across 9 Social Media Platforms",
      description:
        "Automatically distribute your optimized content across Facebook Pages, Instagram, LinkedIn, Twitter/X, Pinterest, YouTube Community, TikTok, Medium, and Reddit. Each post is tailored to the platform's unique format and audience.",
      benefits: [
        "Simultaneous publishing to all 9 major social platforms",
        "Platform-specific content optimization and formatting",
        "Automated hashtag generation and audience targeting",
      ],
    },
    {
      icon: BarChart3,
      title: "Real-time SEO Scoring",
      subtitle: "Monitor Performance Before and After Publishing",
      description:
        "Get instant feedback on content optimization with real-time SEO scores. Track keyword density, readability, and technical SEO factors as you create.",
      benefits: [
        "Live SEO score updates as you edit content",
        "Competitor comparison and benchmarking",
        "Performance tracking with actionable improvement suggestions",
      ],
    },
    {
      icon: Calendar,
      title: "Batch Scheduling & Automation",
      subtitle: "Scale Your Content Marketing Effortlessly",
      description:
        "Plan and execute comprehensive content campaigns with intelligent scheduling and automation features that maximize your content's impact across all platforms.",
      benefits: [
        "Schedule content across multiple channels and timeframes",
        "Automated social media promotion and email campaigns",
        "Performance-based content optimization recommendations",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Powerful Features for Modern Marketing
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing strategy with the only platform that combines generative engine optimization, GGUF
            AI models, and direct XM Cloud integration. Stop creating content in the dark—start building data-driven
            campaigns that actually convert.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-900">
                        {feature.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <Target className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex justify-center`}>
                  <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to revolutionize your content marketing?</h2>
          <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Optimizing Now
          </Button>
        </div>
      </section>
    </div>
  )
}
