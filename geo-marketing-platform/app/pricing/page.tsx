import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

// SEO metadata for pricing page
export const metadata: Metadata = {
  title: "Pricing Plans - Flexible AI Marketing Solutions | GEO Platform",
  description:
    "Choose from Starter ($49/month), Pro ($149/month), or Enterprise (custom) plans. All include AI content generation, XM Cloud integration, and social media automation.",
  keywords:
    "AI marketing pricing, content generation plans, XM Cloud pricing, social media automation cost, GGUF AI pricing",
  openGraph: {
    title: "Pricing Plans - Flexible AI Marketing Solutions | GEO Platform",
    description:
      "Choose from Starter ($49/month), Pro ($149/month), or Enterprise (custom) plans. All include AI content generation, XM Cloud integration, and social media automation.",
    type: "website",
    url: "https://geoplatform.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans - Flexible AI Marketing Solutions | GEO Platform",
    description:
      "Choose from Starter ($49/month), Pro ($149/month), or Enterprise (custom) plans. All include AI content generation, XM Cloud integration, and social media automation.",
  },
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for solo marketers and small teams",
      bestFor: "Freelancers, consultants, and small businesses starting with AI content marketing",
      features: [
        "50 AI-generated articles per month",
        "Basic keyword research and clustering",
        "XM Cloud integration",
        "3 social media platforms",
        "Email support",
        "SEO scoring and optimization",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "$149",
      period: "/month",
      description: "Ideal for growing marketing teams",
      bestFor: "Marketing agencies and mid-size companies scaling content production",
      features: [
        "200 AI-generated articles per month",
        "Advanced keyword research with competitor analysis",
        "All 9 social media platforms",
        "Batch publishing and scheduling",
        "Priority support",
        "Custom brand voice training",
        "Performance analytics dashboard",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Pricing",
      description: "Built for large organizations",
      bestFor: "Large enterprises and agencies managing multiple clients",
      features: [
        "Unlimited AI-generated content",
        "All 9 social media platforms + custom integrations",
        "Custom GGUF model training",
        "Dedicated account manager",
        "API access and custom integrations",
        "Advanced analytics and reporting",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How accurate is the AI-generated content?",
      answer:
        "Our GGUF AI models are trained on high-quality marketing content and achieve 95%+ accuracy rates. All content includes built-in fact-checking and can be easily edited before publishing.",
    },
    {
      question: "Is my data secure with XM Cloud integration?",
      answer:
        "Yes. We use enterprise-grade encryption and never store your XM Cloud credentials. All data transfers are secured with SSL encryption and comply with GDPR and SOC 2 standards.",
    },
    {
      question: "Can I customize the AI to match my brand voice?",
      answer:
        "Absolutely. Pro and Enterprise plans include brand voice training, allowing the AI to learn your specific tone, style, and messaging preferences.",
    },
    {
      question: "How does the scheduling and automation work?",
      answer:
        "Our platform allows you to schedule content across multiple platforms simultaneously. You can set up automated posting schedules, create content calendars, and even set up performance-based optimization rules that automatically adjust your content strategy.",
    },
    {
      question: "Do I need technical knowledge to set up XM Cloud integration?",
      answer:
        "Not at all. Our XM Cloud integration is designed to be plug-and-play. Simply connect your XM Cloud account through our secure OAuth process, and you'll be publishing content directly from our platform within minutes. Our support team is also available to help with setup.",
    },
    {
      question: "Which social media platforms are supported?",
      answer:
        "We support 9 major social media platforms: Facebook Pages, Instagram, LinkedIn, Twitter/X, Pinterest, YouTube Community, TikTok, Medium, and Reddit. Each platform receives optimized content tailored to its specific format and audience expectations.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Flexible Pricing for Every Stage of Growth
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Choose the perfect plan to scale your AI-powered content marketing
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${plan.popular ? "border-blue-500 shadow-xl" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="text-lg mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Best for:</strong> {plan.bestFor}
                    </p>
                    <Button
                      className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Get answers to common questions about our platform</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
