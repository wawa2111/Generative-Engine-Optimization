"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Zap, Search, TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

export default function SEOOptimizer() {
  const seoChecks = [
    { name: "Title Length", status: "good", score: 95, message: "Title is optimal length (55 characters)" },
    {
      name: "Meta Description",
      status: "warning",
      score: 75,
      message: "Meta description could be longer (120/160 characters)",
    },
    { name: "Keyword Density", status: "good", score: 88, message: "Primary keyword density is optimal (1.8%)" },
    { name: "Headings Structure", status: "error", score: 45, message: "Missing H2 headings, poor structure" },
    { name: "Internal Links", status: "good", score: 92, message: "Good internal linking structure" },
    { name: "Image Alt Text", status: "warning", score: 65, message: "2 images missing alt text" },
  ]

  const seoScoreData = seoChecks.map((check) => ({
    name: check.name.replace(" ", "\n"),
    score: check.score,
    fill: check.status === "good" ? "#22c55e" : check.status === "warning" ? "#f59e0b" : "#ef4444",
  }))

  const keywordRankingData = [
    { keyword: "AI marketing", position: 3, volume: 8900, trend: 5 },
    { keyword: "SEO optimization", position: 7, volume: 12000, trend: -2 },
    { keyword: "content generation", position: 12, volume: 5400, trend: 8 },
    { keyword: "marketing automation", position: 15, volume: 7200, trend: 3 },
    { keyword: "digital marketing", position: 22, volume: 15000, trend: -1 },
  ]

  const performanceData = [
    { month: "Jan", clicks: 1200, impressions: 15000, ctr: 8.0 },
    { month: "Feb", clicks: 1450, impressions: 17500, ctr: 8.3 },
    { month: "Mar", clicks: 1680, impressions: 19200, ctr: 8.8 },
    { month: "Apr", clicks: 1920, impressions: 21000, ctr: 9.1 },
    { month: "May", clicks: 2150, impressions: 22800, ctr: 9.4 },
    { month: "Jun", clicks: 2380, impressions: 24500, ctr: 9.7 },
  ]

  const radarData = [
    { subject: "Content Quality", A: 85, fullMark: 100 },
    { subject: "Technical SEO", A: 78, fullMark: 100 },
    { subject: "Keywords", A: 92, fullMark: 100 },
    { subject: "User Experience", A: 88, fullMark: 100 },
    { subject: "Mobile Friendly", A: 95, fullMark: 100 },
    { subject: "Page Speed", A: 82, fullMark: 100 },
  ]

  const overallScore = Math.round(seoChecks.reduce((acc, check) => acc + check.score, 0) / seoChecks.length)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">SEO Optimizer</h1>
            <p className="text-sm text-muted-foreground">Analyze and optimize your content for search engines</p>
          </div>
          <Button className="btn-primary">
            <Zap className="mr-2 h-4 w-4" />
            Auto-Optimize
          </Button>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Content Input */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Content Analysis
            </CardTitle>
            <CardDescription>Paste your content below for SEO analysis and optimization suggestions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input placeholder="Enter your content title..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Meta Description</label>
              <Input placeholder="Enter meta description..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Target Keywords</label>
              <Input placeholder="Enter target keywords (comma separated)..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea placeholder="Paste your content here for analysis..." className="min-h-32" />
            </div>
            <Button>
              <Zap className="mr-2 h-4 w-4" />
              Analyze Content
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* SEO Score */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                SEO Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">{overallScore}</div>
                <Progress value={overallScore} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Needs Improvement"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Word Count</span>
                <span className="text-sm font-medium">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Reading Time</span>
                <span className="text-sm font-medium">5 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Keyword Density</span>
                <span className="text-sm font-medium">1.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Readability</span>
                <span className="text-sm font-medium">Grade 8</span>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Tips */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-green-600">✓ Good keyword placement</p>
                <p className="text-muted-foreground">Keywords appear in title and first paragraph</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-orange-600">⚠ Add more headings</p>
                <p className="text-muted-foreground">Break up content with H2 and H3 tags</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-blue-600">💡 Internal linking</p>
                <p className="text-muted-foreground">Add 2-3 relevant internal links</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* SEO Factors Breakdown */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>SEO Factors Analysis</CardTitle>
              <CardDescription>Breakdown of individual SEO factor scores</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seoScoreData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
                    <YAxis domain={[0, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* SEO Radar Chart */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>SEO Health Overview</CardTitle>
              <CardDescription>Comprehensive SEO performance radar</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" fontSize={12} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} fontSize={10} />
                    <Radar
                      name="SEO Score"
                      dataKey="A"
                      stroke="hsl(var(--chart-2))"
                      fill="hsl(var(--chart-2))"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Keyword Rankings */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Keyword Rankings</CardTitle>
              <CardDescription>Current position vs search volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  position: {
                    label: "Position",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={keywordRankingData}
                    layout="horizontal"
                    margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 25]} />
                    <YAxis dataKey="keyword" type="category" fontSize={12} />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value, name) => [
                        name === "position" ? `Position ${value}` : value,
                        name === "position" ? "Ranking" : name,
                      ]}
                    />
                    <Bar dataKey="position" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Performance Trends */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Clicks and CTR over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  clicks: {
                    label: "Clicks",
                    color: "hsl(var(--chart-1))",
                  },
                  ctr: {
                    label: "CTR %",
                    color: "hsl(var(--chart-4))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="clicks"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="ctr"
                      stroke="hsl(var(--chart-4))"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Detailed SEO Analysis</CardTitle>
            <CardDescription>Comprehensive breakdown of SEO factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {seoChecks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    {check.status === "good" && <CheckCircle className="h-5 w-5 text-green-600" />}
                    {check.status === "warning" && <AlertTriangle className="h-5 w-5 text-orange-600" />}
                    {check.status === "error" && <AlertTriangle className="h-5 w-5 text-red-600" />}
                    <div>
                      <p className="font-medium">{check.name}</p>
                      <p className="text-sm text-muted-foreground">{check.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        check.status === "good" ? "default" : check.status === "warning" ? "secondary" : "destructive"
                      }
                    >
                      {check.score}/100
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
