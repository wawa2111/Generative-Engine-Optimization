"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, TrendingUp, Target, BarChart3, RefreshCw, Download, Filter, Star, Eye, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  ChartContainer,
  ChartTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ScatterChart,
  Scatter,
} from "@/components/ui/chart"

interface Keyword {
  term: string
  volume: number
  difficulty: number
  cpc: number
  trend: "up" | "down" | "stable"
  competition: "low" | "medium" | "high"
  opportunity: number
}

export default function KeywordResearch() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const { toast } = useToast()

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Enter Search Term",
        description: "Please enter a keyword or topic to research.",
        variant: "destructive",
      })
      return
    }

    setIsSearching(true)

    // Simulate keyword research
    setTimeout(() => {
      const mockKeywords: Keyword[] = [
        {
          term: `${searchTerm} strategy`,
          volume: 12500,
          difficulty: 65,
          cpc: 3.45,
          trend: "up",
          competition: "medium",
          opportunity: 85,
        },
        {
          term: `best ${searchTerm} tools`,
          volume: 8900,
          difficulty: 45,
          cpc: 2.8,
          trend: "up",
          competition: "low",
          opportunity: 92,
        },
        {
          term: `${searchTerm} tips`,
          volume: 15600,
          difficulty: 35,
          cpc: 1.95,
          trend: "stable",
          competition: "low",
          opportunity: 88,
        },
        {
          term: `${searchTerm} guide`,
          volume: 6700,
          difficulty: 55,
          cpc: 4.2,
          trend: "up",
          competition: "medium",
          opportunity: 78,
        },
        {
          term: `${searchTerm} examples`,
          volume: 4300,
          difficulty: 25,
          cpc: 1.6,
          trend: "stable",
          competition: "low",
          opportunity: 95,
        },
        {
          term: `${searchTerm} software`,
          volume: 9800,
          difficulty: 75,
          cpc: 8.9,
          trend: "up",
          competition: "high",
          opportunity: 65,
        },
      ]

      setKeywords(mockKeywords)
      setIsSearching(false)

      toast({
        title: "Keywords Found!",
        description: `Discovered ${mockKeywords.length} keyword opportunities.`,
      })
    }, 2000)
  }

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 30) return "text-green-600"
    if (difficulty < 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getCompetitionBadge = (competition: string) => {
    const variants = {
      low: "default",
      medium: "secondary",
      high: "destructive",
    } as const

    return variants[competition as keyof typeof variants] || "outline"
  }

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-3 w-3 text-green-600" />
    if (trend === "down") return <TrendingUp className="h-3 w-3 text-red-600 rotate-180" />
    return <div className="h-3 w-3 rounded-full bg-gray-400" />
  }

  const chartConfig = {
    volume: {
      label: "Search Volume",
      color: "hsl(var(--primary))",
    },
    difficulty: {
      label: "Difficulty",
      color: "hsl(var(--secondary))",
    },
    opportunity: {
      label: "Opportunity",
      color: "#10b981",
    },
    cpc: {
      label: "CPC ($)",
      color: "#f59e0b",
    },
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Keyword Research</h1>
            <p className="text-sm text-muted-foreground">Discover high-impact keywords for your content strategy</p>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-6">
        {/* Search Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Keyword Discovery
            </CardTitle>
            <CardDescription>Enter a seed keyword or topic to discover related opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="sr-only">
                  Search Term
                </Label>
                <Input
                  id="search"
                  placeholder="Enter keyword or topic (e.g., 'digital marketing')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} disabled={isSearching}>
                {isSearching ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Research Keywords
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {keywords.length > 0 && (
          <>
            {/* Summary Stats */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Keywords</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{keywords.length}</div>
                  <p className="text-xs text-muted-foreground">Opportunities found</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Volume</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round(keywords.reduce((acc, k) => acc + k.volume, 0) / keywords.length).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">Monthly searches</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. CPC</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${(keywords.reduce((acc, k) => acc + k.cpc, 0) / keywords.length).toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground">Cost per click</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">High Opportunity</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{keywords.filter((k) => k.opportunity > 80).length}</div>
                  <p className="text-xs text-muted-foreground">Keywords (80%+ score)</p>
                </CardContent>
              </Card>
            </div>

            {/* Keyword Performance Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Volume vs Difficulty</CardTitle>
                  <CardDescription>Search volume compared to ranking difficulty</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ScatterChart data={keywords}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="difficulty" name="Difficulty" />
                      <YAxis dataKey="volume" name="Volume" />
                      <ChartTooltip />
                      <Scatter dataKey="volume" fill="var(--color-volume)" />
                    </ScatterChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opportunity Score Distribution</CardTitle>
                  <CardDescription>Keyword opportunity scores across all terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-64">
                    <BarChart data={keywords}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="term" />
                      <YAxis />
                      <ChartTooltip />
                      <Bar dataKey="opportunity" fill="var(--color-opportunity)" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Keywords Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Keyword Opportunities</CardTitle>
                    <CardDescription>Detailed analysis of discovered keywords</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                    <TabsTrigger value="all">All Keywords</TabsTrigger>
                    <TabsTrigger value="high-opportunity">High Opportunity</TabsTrigger>
                    <TabsTrigger value="low-competition">Low Competition</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    <div className="space-y-3">
                      {keywords.map((keyword, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{keyword.term}</p>
                              {getTrendIcon(keyword.trend)}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {keyword.volume.toLocaleString()} searches/mo
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />${keyword.cpc} CPC
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-medium">Difficulty</p>
                              <div className="flex items-center gap-2">
                                <Progress value={keyword.difficulty} className="w-16" />
                                <span className={`text-sm font-bold ${getDifficultyColor(keyword.difficulty)}`}>
                                  {keyword.difficulty}
                                </span>
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-medium">Opportunity</p>
                              <div className="flex items-center gap-2">
                                <Progress value={keyword.opportunity} className="w-16" />
                                <span className="text-sm font-bold text-green-600">{keyword.opportunity}%</span>
                              </div>
                            </div>

                            <Badge variant={getCompetitionBadge(keyword.competition)}>{keyword.competition}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="high-opportunity">
                    <div className="space-y-3">
                      {keywords
                        .filter((k) => k.opportunity > 80)
                        .map((keyword, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{keyword.term}</p>
                                <Star className="h-4 w-4 text-yellow-500" />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                High opportunity keyword with {keyword.opportunity}% score
                              </p>
                            </div>
                            <Badge variant="default">{keyword.opportunity}% Opportunity</Badge>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="low-competition">
                    <div className="space-y-3">
                      {keywords
                        .filter((k) => k.competition === "low")
                        .map((keyword, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50"
                          >
                            <div className="space-y-1">
                              <p className="font-medium">{keyword.term}</p>
                              <p className="text-sm text-muted-foreground">
                                Low competition with {keyword.volume.toLocaleString()} monthly searches
                              </p>
                            </div>
                            <Badge variant="default">Low Competition</Badge>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </>
        )}

        {keywords.length === 0 && !isSearching && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Start Your Keyword Research</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-md">
                Enter a seed keyword or topic above to discover valuable keyword opportunities for your content
                strategy.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
