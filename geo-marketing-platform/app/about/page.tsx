import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, ArrowRight, Brain, Zap, Share2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Democratizing AI-Powered Marketing | GEO Platform",
  description:
    "Learn about our mission to democratize AI-powered marketing through generative engine optimization, GGUF AI models, XM Cloud integration, and multi-platform automation.",
  keywords:
    "AI marketing company, generative engine optimization mission, GGUF AI team, XM Cloud specialists, marketing automation experts",
  openGraph: {
    title: "About Us - Democratizing AI-Powered Marketing | GEO Platform",
    description:
      "Learn about our mission to democratize AI-powered marketing through generative engine optimization, GGUF AI models, XM Cloud integration, and multi-platform automation.",
    type: "website",
    url: "https://geoplatform.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Democratizing AI-Powered Marketing | GEO Platform",
    description:
      "Learn about our mission to democratize AI-powered marketing through generative engine optimization, GGUF AI models, XM Cloud integration, and multi-platform automation.",
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Democratize AI-powered marketing by making generative engine optimization accessible to businesses of all sizes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We're constantly pushing the boundaries of what's possible with AI-driven content creation and optimization.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description:
        "Your growth is our success. We're committed to helping you achieve measurable results with AI marketing.",
    },
  ]

  const futureReasons = [
    {
      icon: Brain,
      title: "GGUF AI Models",
      description: "Advanced AI that understands context, intent, and brand voice better than any previous technology.",
    },
    {
      icon: Zap,
      title: "XM Cloud Integration",
      description: "Seamless publishing workflow that eliminates manual processes and reduces time-to-market.",
    },
    {
      icon: Share2,
      title: "Multi-Platform Automation",
      description: "Simultaneous distribution across 9 social platforms with platform-specific optimization.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Our Mission</h1>
          <p className="mt-6 text-xl text-gray-600">
            Democratize AI-powered marketing by making generative engine optimization accessible to businesses of all
            sizes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              We built this platform after experiencing the frustration of manual content creation and the disconnect
              between SEO tools and actual publishing workflows. Traditional marketing tools tell you what to do but
              don't help you do it.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              We created the first platform that discovers opportunities, generates optimized content, and publishes
              directly to your CMS—all powered by cutting-edge GGUF AI models.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why GEO + XM Cloud + GGUF + Automation is the Future</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The convergence of these technologies creates an unprecedented opportunity for marketers to scale their
              content operations while maintaining quality and relevance.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            {futureReasons.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader className="pb-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                    <reason.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                The future of marketing isn't just about creating content—it's about creating the right content,
                optimized for both search engines and human readers, at the exact moment your audience needs it.
                Generative Engine Optimization represents the next evolution of SEO, where AI doesn't just analyze data
                but actively creates solutions. When combined with XM Cloud's publishing capabilities and multi-platform
                automation, marketers can achieve unprecedented scale and efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader className="pb-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                We're a team of former marketing executives, AI researchers, and XM Cloud specialists who understand
                both the technical and strategic sides of modern marketing. Our combined experience spans Fortune 500
                marketing departments, leading AI research labs, and successful marketing agencies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Join Us on the Future of Marketing</h2>
          <p className="text-xl text-blue-100 mb-8">
            The marketing landscape is evolving rapidly. Companies that embrace AI-powered content creation and
            generative engine optimization will dominate their markets. Those that don't will be left behind.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Your AI Marketing Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
