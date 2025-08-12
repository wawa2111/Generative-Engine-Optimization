import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContentEditor } from "@/components/ui/content-editor"
import { FileText, Save, Download, Zap, Eye } from "lucide-react"

export default function ContentEditorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Content Editor</h1>
            <p className="text-sm text-muted-foreground">AI-powered content editing with real-time optimization</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Editor */}
          <div className="lg:col-span-3">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Content Editor
                    </CardTitle>
                    <CardDescription>Write and optimize your content with AI assistance</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">SEO Score: 87</Badge>
                    <Button variant="ghost" size="sm">
                      <Zap className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ContentEditor />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Suggestions */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-base">AI Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">Improve Readability</p>
                  <p className="text-xs text-muted-foreground">
                    Consider breaking up the third paragraph for better flow
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2 h-6 px-2">
                    Apply
                  </Button>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">Add Keywords</p>
                  <p className="text-xs text-muted-foreground">Include "AI marketing" in the second section</p>
                  <Button variant="ghost" size="sm" className="mt-2 h-6 px-2">
                    Apply
                  </Button>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">Enhance CTA</p>
                  <p className="text-xs text-muted-foreground">Make your call-to-action more compelling</p>
                  <Button variant="ghost" size="sm" className="mt-2 h-6 px-2">
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Content Stats */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-base">Content Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Word Count</span>
                  <span className="font-medium">1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Characters</span>
                  <span className="font-medium">7,892</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reading Time</span>
                  <span className="font-medium">5 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Paragraphs</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Sentences</span>
                  <span className="font-medium">42</span>
                </div>
              </CardContent>
            </Card>

            {/* SEO Analysis */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-base">SEO Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>SEO Score</span>
                  <Badge variant="outline">87/100</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Keyword Density</span>
                  <span className="font-medium">1.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Readability</span>
                  <span className="font-medium">Grade 8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Focus Keyword</span>
                  <span className="font-medium text-green-600">✓ Found</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
