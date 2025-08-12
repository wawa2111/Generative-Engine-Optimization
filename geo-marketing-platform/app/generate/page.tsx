"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AnimatedCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/animated-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Brain, Wand2, FileText, RefreshCw, BarChart3, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ContentEditor } from "@/components/ui/content-editor"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChartContainer,
  ChartTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "@/components/ui/chart"

export default function GenerateContent() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [seoScore, setSeoScore] = useState(0)
  const [keywords, setKeywords] = useState<string[]>([])
  const [showEditor, setShowEditor] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    contentType: "",
    topic: "",
    targetKeywords: "",
    tone: "",
    length: "",
    audience: "",
    purpose: "",
  })

  const generationStats = [
    { type: "Blog Posts", count: 145, quality: 92 },
    { type: "Ad Copy", count: 89, quality: 88 },
    { type: "Meta Descriptions", count: 234, quality: 95 },
    { type: "Social Media", count: 167, quality: 90 },
    { type: "Email Campaigns", count: 78, quality: 87 },
  ]

  const dailyActivity = [
    { day: "Mon", generated: 12, optimized: 8 },
    { day: "Tue", generated: 19, optimized: 15 },
    { day: "Wed", generated: 8, optimized: 6 },
    { day: "Thu", generated: 25, optimized: 20 },
    { day: "Fri", generated: 22, optimized: 18 },
    { day: "Sat", generated: 15, optimized: 12 },
    { day: "Sun", generated: 9, optimized: 7 },
  ]

  const chartConfig = {
    count: {
      label: "Generated",
      color: "hsl(var(--primary))",
    },
    quality: {
      label: "Quality Score",
      color: "hsl(var(--secondary))",
    },
    generated: {
      label: "Generated",
      color: "hsl(var(--primary))",
    },
    optimized: {
      label: "Optimized",
      color: "#10b981",
    },
  }

  const handleGenerate = async () => {
    if (!formData.contentType || !formData.topic) {
      toast({
        title: "Missing Information",
        description: "Please select content type and enter a topic.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate AI content generation
    setTimeout(() => {
      const sampleContent = generateSampleContent(formData)
      setGeneratedContent(sampleContent)
      setSeoScore(Math.floor(Math.random() * 20) + 80) // Random score 80-100
      setKeywords(["AI marketing", "content optimization", "SEO strategy", "digital marketing"])
      setIsGenerating(false)
      setShowEditor(true)

      toast({
        title: "Content Generated!",
        description: "Your optimized content is ready for review.",
      })
    }, 3000)
  }

  const generateSampleContent = (data: typeof formData) => {
    const samples = {
      "blog-post": `# ${data.topic}

In today's digital landscape, ${data.topic.toLowerCase()} has become increasingly important for businesses looking to stay competitive. This comprehensive guide will explore the key strategies and best practices that can help you achieve success.

## Understanding the Fundamentals

The foundation of effective ${data.topic.toLowerCase()} lies in understanding your audience and their needs. By focusing on user intent and providing valuable, relevant content, you can build trust and establish authority in your field.

## Key Strategies for Success

1. **Research-Driven Approach**: Start with thorough keyword research and competitor analysis
2. **Content Quality**: Focus on creating high-quality, engaging content that provides real value
3. **Optimization**: Implement SEO best practices throughout your content
4. **Measurement**: Track performance and iterate based on data insights

## Implementation Best Practices

When implementing these strategies, consider the following best practices:

- Maintain consistency in your messaging and brand voice
- Optimize for both search engines and user experience
- Regularly update and refresh your content
- Monitor performance metrics and adjust accordingly

## Conclusion

Success in ${data.topic.toLowerCase()} requires a strategic approach combined with consistent execution. By following these guidelines and staying up-to-date with industry trends, you can achieve your marketing objectives and drive meaningful results for your business.`,

      "ad-copy": `🚀 Transform Your ${data.topic} Strategy Today!

Discover the proven methods that industry leaders use to achieve exceptional results. Our comprehensive approach combines cutting-edge techniques with time-tested strategies.

✅ Increase engagement by up to 300%
✅ Boost conversion rates significantly  
✅ Reduce costs while maximizing ROI
✅ Get results in just 30 days

Don't let your competitors get ahead. Join thousands of successful businesses who have already transformed their approach to ${data.topic.toLowerCase()}.

🎯 Limited Time Offer: Get started today and receive exclusive bonuses worth $500!

[Call-to-Action Button: Start Your Transformation Now]

*Results may vary. Terms and conditions apply.`,

      "meta-description": `Discover expert ${data.topic.toLowerCase()} strategies that drive real results. Learn proven techniques, best practices, and optimization tips from industry leaders. Get started today and transform your marketing approach with our comprehensive guide.`,
    }

    return (
      samples[data.contentType as keyof typeof samples] || `Generated content for ${data.topic} would appear here...`
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    })
  }

  const suggestions = [
    "Add more specific statistics to support your claims",
    "Include a compelling call-to-action in the conclusion",
    "Consider adding subheadings for better readability",
    "Incorporate relevant keywords naturally throughout",
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-lg font-semibold">Content Generator</h1>
            <p className="text-sm text-muted-foreground">Create optimized marketing content with AI</p>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <AnimatePresence mode="wait">
          {!showEditor ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="grid gap-6 lg:grid-cols-2 mb-6">
                <AnimatedCard delay={0.1}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Generation Statistics
                    </CardTitle>
                    <CardDescription>Content generation by type and quality scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                      <BarChart data={generationStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis />
                        <ChartTooltip />
                        <Bar dataKey="count" fill="var(--color-count)" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Daily Activity
                    </CardTitle>
                    <CardDescription>Content generation and optimization trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-64">
                      <LineChart data={dailyActivity}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <ChartTooltip />
                        <Line
                          type="monotone"
                          dataKey="generated"
                          stroke="var(--color-generated)"
                          strokeWidth={2}
                          dot={{ fill: "var(--color-generated)" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="optimized"
                          stroke="var(--color-optimized)"
                          strokeWidth={2}
                          dot={{ fill: "var(--color-optimized)" }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </AnimatedCard>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Input Form */}
                <AnimatedCard delay={0.3}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Content Configuration
                    </CardTitle>
                    <CardDescription>Configure your content parameters for optimal AI generation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contentType">Content Type</Label>
                        <Select
                          value={formData.contentType}
                          onValueChange={(value) => setFormData({ ...formData, contentType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select content type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blog-post">Blog Post</SelectItem>
                            <SelectItem value="ad-copy">Ad Copy</SelectItem>
                            <SelectItem value="meta-description">Meta Description</SelectItem>
                            <SelectItem value="social-media">Social Media Post</SelectItem>
                            <SelectItem value="email">Email Campaign</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tone">Tone & Style</Label>
                        <Select
                          value={formData.tone}
                          onValueChange={(value) => setFormData({ ...formData, tone: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select tone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="professional">Professional</SelectItem>
                            <SelectItem value="casual">Casual</SelectItem>
                            <SelectItem value="persuasive">Persuasive</SelectItem>
                            <SelectItem value="informative">Informative</SelectItem>
                            <SelectItem value="creative">Creative</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topic">Topic/Subject</Label>
                      <Input
                        id="topic"
                        placeholder="Enter your content topic..."
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="keywords">Target Keywords</Label>
                      <Input
                        id="keywords"
                        placeholder="Enter keywords separated by commas..."
                        value={formData.targetKeywords}
                        onChange={(e) => setFormData({ ...formData, targetKeywords: e.target.value })}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="audience">Target Audience</Label>
                        <Select
                          value={formData.audience}
                          onValueChange={(value) => setFormData({ ...formData, audience: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select audience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="b2b">B2B Decision Makers</SelectItem>
                            <SelectItem value="consumers">General Consumers</SelectItem>
                            <SelectItem value="professionals">Industry Professionals</SelectItem>
                            <SelectItem value="students">Students/Learners</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="length">Content Length</Label>
                        <Select
                          value={formData.length}
                          onValueChange={(value) => setFormData({ ...formData, length: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select length" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short">Short (100-300 words)</SelectItem>
                            <SelectItem value="medium">Medium (300-800 words)</SelectItem>
                            <SelectItem value="long">Long (800+ words)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="purpose">Content Purpose</Label>
                      <Textarea
                        id="purpose"
                        placeholder="Describe the goal of this content..."
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        rows={3}
                      />
                    </div>

                    <AnimatedButton onClick={handleGenerate} loading={isGenerating} className="w-full" size="lg">
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Generating Content...
                        </>
                      ) : (
                        <>
                          <Wand2 className="mr-2 h-4 w-4" />
                          Generate Content
                        </>
                      )}
                    </AnimatedButton>
                  </CardContent>
                </AnimatedCard>

                {/* Preview Card */}
                <AnimatedCard delay={0.4}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Generated Content
                    </CardTitle>
                    <CardDescription>AI-optimized content ready for review and publishing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <motion.div
                        animate={isGenerating ? { rotate: 360 } : { rotate: 0 }}
                        transition={
                          isGenerating ? { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" } : {}
                        }
                      >
                        <Brain className="h-12 w-12 text-muted-foreground mb-4" />
                      </motion.div>
                      <h3 className="text-lg font-medium mb-2">
                        {isGenerating ? "Generating Content..." : "Ready to Generate"}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {isGenerating
                          ? "AI is creating your optimized content. This may take a few moments."
                          : "Configure your content parameters and click generate to create optimized marketing content."}
                      </p>
                      {isGenerating && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3 }}
                          className="w-full max-w-xs"
                        >
                          <Progress value={100} className="h-2" />
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ContentEditor
                initialContent={generatedContent}
                seoScore={seoScore}
                suggestions={suggestions}
                onSave={(content) => {
                  toast({
                    title: "Content Saved!",
                    description: "Your content has been saved successfully.",
                  })
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
