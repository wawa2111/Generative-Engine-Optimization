import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Filter, Download, Eye, Edit, Trash2, Calendar } from "lucide-react"

export default function ContentLibrary() {
  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Marketing Strategies for 2024",
      type: "Blog Post",
      status: "Published",
      seoScore: 92,
      wordCount: 1247,
      publishedDate: "2024-01-15",
      views: 2847,
      engagement: 8.3,
    },
    {
      id: 2,
      title: "Summer Sale Campaign Copy",
      type: "Ad Copy",
      status: "Draft",
      seoScore: 88,
      wordCount: 156,
      publishedDate: null,
      views: 0,
      engagement: 0,
    },
    {
      id: 3,
      title: "Product Launch Meta Descriptions",
      type: "Meta Content",
      status: "Optimizing",
      seoScore: 85,
      wordCount: 89,
      publishedDate: null,
      views: 0,
      engagement: 0,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Content Library</h1>
            <p className="text-sm text-muted-foreground">Manage and organize your generated content</p>
          </div>
          <Button className="btn-primary">
            <BookOpen className="mr-2 h-4 w-4" />
            Import Content
          </Button>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input placeholder="Search content..." className="w-full" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="blog">Blog Posts</SelectItem>
                  <SelectItem value="ad">Ad Copy</SelectItem>
                  <SelectItem value="meta">Meta Content</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="optimizing">Optimizing</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Grid */}
        <div className="grid gap-6">
          {contentItems.map((item) => (
            <Card key={item.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.type}</Badge>
                      <Badge
                        variant={
                          item.status === "Published" ? "default" : item.status === "Draft" ? "secondary" : "outline"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">SEO Score</p>
                    <p className="font-medium">{item.seoScore}/100</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Word Count</p>
                    <p className="font-medium">{item.wordCount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Views</p>
                    <p className="font-medium">{item.views.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Engagement</p>
                    <p className="font-medium">{item.engagement}%</p>
                  </div>
                </div>
                {item.publishedDate && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Published on {new Date(item.publishedDate).toLocaleDateString()}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
