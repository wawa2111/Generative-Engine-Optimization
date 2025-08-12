import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, TrendingDown, Eye, Users, Clock, Target } from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "@/components/ui/chart"

export default function Analytics() {
  const metrics = [
    {
      title: "Total Views",
      value: "24,847",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Engagement Rate",
      value: "8.3%",
      change: "+2.1%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Avg. Reading Time",
      value: "3m 42s",
      change: "-0.8%",
      trend: "down",
      icon: Clock,
    },
    {
      title: "Conversion Rate",
      value: "4.7%",
      change: "+1.3%",
      trend: "up",
      icon: Target,
    },
  ]

  const performanceData = [
    { name: "Jan", views: 4000, engagement: 2400, conversions: 240 },
    { name: "Feb", views: 3000, engagement: 1398, conversions: 221 },
    { name: "Mar", views: 2000, engagement: 9800, conversions: 229 },
    { name: "Apr", views: 2780, engagement: 3908, conversions: 200 },
    { name: "May", views: 1890, engagement: 4800, conversions: 218 },
    { name: "Jun", views: 2390, engagement: 3800, conversions: 250 },
  ]

  const topContent = [
    {
      title: "AI-Powered Marketing Strategies for 2024",
      views: 5247,
      engagement: 12.3,
      conversions: 89,
    },
    {
      title: "Complete Guide to SEO Optimization",
      views: 3891,
      engagement: 9.7,
      conversions: 67,
    },
    {
      title: "Social Media Marketing Trends",
      views: 2654,
      engagement: 8.1,
      conversions: 45,
    },
  ]

  const chartConfig = {
    views: {
      label: "Views",
      color: "hsl(var(--primary))",
    },
    engagement: {
      label: "Engagement",
      color: "hsl(var(--secondary))",
    },
    conversions: {
      label: "Conversions",
      color: "#00C49F",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Analytics</h1>
            <p className="text-sm text-muted-foreground">Track your content performance and engagement</p>
          </div>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card key={metric.title} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {metric.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                  )}
                  <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>{metric.change}</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Performance Chart */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Overview
              </CardTitle>
              <CardDescription>Content performance metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="views" fill="var(--color-views)" />
                  <Bar dataKey="engagement" fill="var(--color-engagement)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Top Performing Content */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Your best performing content pieces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContent.map((content, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{content.title}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{content.views.toLocaleString()} views</span>
                        <span>{content.engagement}% engagement</span>
                        <span>{content.conversions} conversions</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">#{index + 1}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>Track engagement patterns over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="var(--color-engagement)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-engagement)" }}
                />
                <Line
                  type="monotone"
                  dataKey="conversions"
                  stroke="var(--color-conversions)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-conversions)" }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* SEO Performance */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>SEO Performance</CardTitle>
            <CardDescription>Search engine optimization metrics and rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average SEO Score</span>
                  <span className="text-sm text-muted-foreground">87/100</span>
                </div>
                <Progress value={87} className="transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Keywords Ranking</span>
                  <span className="text-sm text-muted-foreground">234 keywords</span>
                </div>
                <Progress value={68} className="transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Organic Traffic</span>
                  <span className="text-sm text-muted-foreground">+23% growth</span>
                </div>
                <Progress value={76} className="transition-all duration-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
