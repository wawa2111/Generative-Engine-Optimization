import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Plus, Target, TrendingUp, FileText, Search } from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Q1 Product Launch",
      description: "Marketing campaign for new AI-powered analytics tool",
      status: "Active",
      progress: 75,
      contentCount: 12,
      keywordCount: 45,
      startDate: "2024-01-01",
      endDate: "2024-03-31",
      budget: 15000,
      spent: 8750,
    },
    {
      id: 2,
      name: "Summer Sale 2024",
      description: "Seasonal promotion campaign with discount offers",
      status: "Planning",
      progress: 25,
      contentCount: 3,
      keywordCount: 18,
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      budget: 8000,
      spent: 0,
    },
    {
      id: 3,
      name: "Brand Awareness Drive",
      description: "Long-term brand building and thought leadership content",
      status: "Active",
      progress: 45,
      contentCount: 8,
      keywordCount: 32,
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      budget: 25000,
      spent: 12300,
    },
  ]

  const campaignPerformanceData = [
    { name: "Q1 Product Launch", budget: 15000, spent: 8750, roi: 245 },
    { name: "Summer Sale 2024", budget: 8000, spent: 0, roi: 0 },
    { name: "Brand Awareness", budget: 25000, spent: 12300, roi: 180 },
  ]

  const budgetDistribution = [
    { name: "Q1 Product Launch", value: 15000, color: "#3b82f6" },
    { name: "Summer Sale 2024", value: 8000, color: "#10b981" },
    { name: "Brand Awareness", value: 25000, color: "#8b5cf6" },
  ]

  const chartConfig = {
    budget: {
      label: "Budget",
      color: "hsl(var(--primary))",
    },
    spent: {
      label: "Spent",
      color: "hsl(var(--secondary))",
    },
    roi: {
      label: "ROI %",
      color: "#10b981",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Campaigns</h1>
            <p className="text-sm text-muted-foreground">Manage your marketing campaigns and track progress</p>
          </div>
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Campaign Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 in planning phase</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Content</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">+5 this month</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Keywords Tracked</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95</div>
              <p className="text-xs text-muted-foreground">Across all campaigns</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$48K</div>
              <p className="text-xs text-muted-foreground">$21K spent</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Campaign Budget vs Spend</CardTitle>
              <CardDescription>Budget allocation and spending across campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <BarChart data={campaignPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="budget" fill="var(--color-budget)" />
                  <Bar dataKey="spent" fill="var(--color-spent)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Budget Distribution</CardTitle>
              <CardDescription>Total budget allocation across all campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <PieChart>
                  <Pie
                    data={budgetDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {budgetDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{campaign.name}</CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>{campaign.status}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                        {new Date(campaign.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Campaign Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <Progress value={campaign.progress} className="transition-all duration-500" />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Content Pieces</p>
                      <p className="font-medium">{campaign.contentCount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Keywords</p>
                      <p className="font-medium">{campaign.keywordCount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Budget</p>
                      <p className="font-medium">${campaign.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Spent</p>
                      <p className="font-medium">${campaign.spent.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
