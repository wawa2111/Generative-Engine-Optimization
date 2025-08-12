"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Eye, Copy, Save, Sparkles, TrendingUp } from "lucide-react"
import { AnimatedButton } from "./animated-button"

interface ContentEditorProps {
  initialContent?: string
  onContentChange?: (content: string) => void
  onSave?: (content: string) => void
  seoScore?: number
  suggestions?: string[]
}

export function ContentEditor({
  initialContent = "",
  onContentChange,
  onSave,
  seoScore = 0,
  suggestions = [],
}: ContentEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const words = content
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0)
    setWordCount(words.length)
    onContentChange?.(content)
  }, [content, onContentChange])

  const handleContentChange = (value: string) => {
    setContent(value)
    setIsTyping(true)

    // Clear typing indicator after 1 second of no typing
    setTimeout(() => setIsTyping(false), 1000)
  }

  const handleSave = () => {
    onSave?.(content)
  }

  const applySuggestion = (suggestion: string) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newContent = content.substring(0, start) + suggestion + content.substring(end)
      setContent(newContent)

      // Focus and set cursor position
      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + suggestion.length, start + suggestion.length)
      }, 0)
    }
  }

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getSEOScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    return "Needs Improvement"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Editor Header */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={isTyping ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ repeat: isTyping ? Number.POSITIVE_INFINITY : 0, duration: 1 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium">AI Content Editor</span>
          </div>

          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1 text-xs text-muted-foreground"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="w-1 h-1 bg-primary rounded-full"
                />
                <span>AI analyzing...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {wordCount} words
          </Badge>
          <Badge variant="outline" className="text-xs">
            ~{Math.ceil(wordCount / 200)} min read
          </Badge>
        </div>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Main Editor */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="relative overflow-hidden">
            <CardContent className="p-0">
              <motion.div className="relative" whileFocus={{ scale: 1.001 }} transition={{ duration: 0.2 }}>
                <div className="content-editor">
                  <Textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    placeholder="Start writing your content here... AI will provide suggestions as you type."
                    className="min-h-[500px] resize-none border-0 focus-visible:ring-0 text-base leading-relaxed bg-transparent"
                  />
                </div>

                {/* Typing indicator overlay */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-2 right-2"
                    >
                      <div className="flex items-center gap-1 bg-primary/10 rounded-full px-2 py-1">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
                        >
                          <Wand2 className="h-3 w-3 text-primary" />
                        </motion.div>
                        <span className="text-xs text-primary">AI Active</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <motion.div
            className="flex items-center justify-between mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <AnimatedButton variant="outline" size="sm" onClick={() => setShowSuggestions(!showSuggestions)}>
                <Sparkles className="mr-2 h-4 w-4" />
                AI Suggestions
              </AnimatedButton>

              <AnimatedButton variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </AnimatedButton>

              <AnimatedButton variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </AnimatedButton>
            </div>

            <AnimatedButton onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Content
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* SEO Score */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                SEO Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{seoScore}</span>
                  <Badge
                    variant={seoScore >= 80 ? "default" : seoScore >= 60 ? "secondary" : "destructive"}
                    className="text-xs"
                  >
                    {getSEOScoreLabel(seoScore)}
                  </Badge>
                </div>

                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }}>
                  <Progress value={seoScore} className="h-2" />
                </motion.div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Readability</span>
                    <Badge variant="outline" className="text-xs">
                      Good
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Keywords</span>
                    <Badge variant="outline" className="text-xs">
                      Optimal
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      AI Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {suggestions.length > 0 ? (
                        suggestions.map((suggestion, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-left h-auto p-2 text-xs"
                              onClick={() => applySuggestion(suggestion)}
                            >
                              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.1 }}>
                                {suggestion}
                              </motion.div>
                            </Button>
                          </motion.div>
                        ))
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-muted-foreground text-center py-4"
                        >
                          Start typing to get AI suggestions
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content Stats */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Content Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sentences</span>
                  <span className="font-medium">{content.split(/[.!?]+/).length - 1}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Paragraphs</span>
                  <span className="font-medium">{content.split(/\n\s*\n/).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Characters</span>
                  <span className="font-medium">{content.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
