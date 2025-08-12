import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, TrendingUp, Users, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Marketing Blog - Expert Insights & Tutorials | GEO Platform",
  description:
    "Master AI-powered marketing with expert insights, case studies, and tutorials on generative engine optimization, GGUF AI models, and XM Cloud integration.",
  keywords:
    "AI marketing blog, generative engine optimization tutorials, GGUF AI guides, XM Cloud best practices, content marketing insights",
  openGraph: {
    title: "AI Marketing Blog - Expert Insights & Tutorials | GEO Platform",
    description:
      "Master AI-powered marketing with expert insights, case studies, and tutorials on generative engine optimization, GGUF AI models, and XM Cloud integration.",
    type: "website",
    url: "https://geoplatform.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Blog - Expert Insights & Tutorials | GEO Platform",
    description:
      "Master AI-powered marketing with expert insights, case studies, and tutorials on generative engine optimization, GGUF AI models, and XM Cloud integration.",
  },
}

export default function BlogPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Tutorials & Guides",
      description: "Step-by-step guides on GGUF AI model optimization and XM Cloud best practices",
    },
    {
      icon: TrendingUp,
      title: "Case Studies",
      description: "Real-world success stories and proven strategies from successful marketing campaigns",
    },
    {
      icon: Users,
      title: "Industry Insights",
      description: "Latest trends in AI marketing, generative engine optimization, and content automation",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Master AI-Powered Marketing with Expert Insights
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with actionable strategies, case studies, and tutorials on generative engine
            optimization, AI content marketing, and XM Cloud integration. Our resources help you maximize ROI from
            AI-driven marketing campaigns and build sustainable growth through intelligent content creation.
          </p>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover in-depth guides on GGUF AI model optimization, XM Cloud best practices, SEO automation
              strategies, and real-world case studies from successful marketing campaigns.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-12 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Never miss a breakthrough in AI marketing</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get weekly insights on generative engine optimization, new AI tools, and proven strategies delivered to
                your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email address" className="flex-1" />
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">Subscribe to Our Newsletter</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
