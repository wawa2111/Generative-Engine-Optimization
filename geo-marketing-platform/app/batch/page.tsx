import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Play, Pause, Download, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function BatchProcessing() {
  const batchJobs = [
    {
      id: 1,
      name: "Blog Post Generation - Tech Topics",
      type: "Content Generation",
      status: "Completed",
      progress: 100,
      totalItems: 10,
      completedItems: 10,
      createdAt: "2024-01-15T10:30:00Z",
      completedAt: "2024-01-15T11:45:00Z",
    },
    {
      id: 2,
      name: "SEO Optimization - Product Pages",
      type: "SEO Optimization",
      status: "Running",
      progress: 65,
      totalItems: 25,
      completedItems: 16,
      createdAt: "2024-01-16T09:00:00Z",
      completedAt: null,
    },
    {
      id: 3,
      name: "Keyword Research - Q1 Campaign",
      type: "Keyword Research",
      status: "Pending",
      progress: 0,
      totalItems: 50,
      completedItems: 0,
      createdAt: "2024-01-16T14:20:00Z",
      completedAt: null,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Batch Processing</h1>
            <p className="text-sm text-muted-foreground">Process multiple content pieces simultaneously</p>
          </div>
          <Button className="btn-primary">
            <Upload className="mr-2 h-4 w-4" />
            New Batch Job
          </Button>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Create New Batch Job */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Create Batch Job</CardTitle>
            <CardDescription>Set up a new batch processing job for multiple content pieces</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Name</label>
                <Input placeholder="Enter job name..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="content-generation">Content Generation</SelectItem>
                    <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                    <SelectItem value="keyword-research">Keyword Research</SelectItem>
                    <SelectItem value="content-translation">Content Translation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Input Data</label>
              <Textarea placeholder="Enter topics, keywords, or URLs (one per line)..." className="min-h-24" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Content Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog-post">Blog Post</SelectItem>
                    <SelectItem value="ad-copy">Ad Copy</SelectItem>
                    <SelectItem value="meta-description">Meta Description</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tone</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="authoritative">Authoritative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>
                <Play className="mr-2 h-4 w-4" />
                Start Batch Job
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Batch Jobs List */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Recent Batch Jobs</CardTitle>
            <CardDescription>Monitor the progress of your batch processing jobs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {batchJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{job.name}</h4>
                      <Badge variant="secondary">{job.type}</Badge>
                      <Badge
                        variant={
                          job.status === "Completed" ? "default" : job.status === "Running" ? "outline" : "secondary"
                        }
                      >
                        {job.status === "Completed" && <CheckCircle className="mr-1 h-3 w-3" />}
                        {job.status === "Running" && <Clock className="mr-1 h-3 w-3" />}
                        {job.status === "Pending" && <AlertCircle className="mr-1 h-3 w-3" />}
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>
                        {job.completedItems}/{job.totalItems} items
                      </span>
                      <span>Created {new Date(job.createdAt).toLocaleDateString()}</span>
                      {job.completedAt && <span>Completed {new Date(job.completedAt).toLocaleDateString()}</span>}
                    </div>
                    {job.status === "Running" && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress</span>
                          <span>{job.progress}%</span>
                        </div>
                        <Progress value={job.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {job.status === "Running" && (
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4" />
                      </Button>
                    )}
                    {job.status === "Completed" && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
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
