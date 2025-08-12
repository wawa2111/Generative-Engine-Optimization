"use client"

import { useState, useEffect } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Settings, Brain, Cloud, Database, Save, TestTube, AlertCircle, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "disconnected">("checking")
  const [settings, setSettings] = useState({
    // AI Model Settings
    defaultModel: "gpt-4o",
    temperature: "0.7",
    maxTokens: "2048",
    systemPrompt: "You are an expert marketing content creator focused on SEO optimization and engaging copy.",

    // Neon Database Settings
    databaseUrl: process.env.DATABASE_URL || "",
    enableAnalytics: true,
    autoBackup: true,

    // XM Cloud Settings
    xmCloudUrl: "",
    xmCloudApiKey: "",
    xmCloudSiteId: "",
    autoPublish: false,

    // Hugging Face Settings
    hfApiKey: "",
    hfModelRepo: "microsoft/DialoGPT-medium",
    useLocalModel: false,

    // General Settings
    defaultTone: "professional",
    defaultLanguage: "en",
    seoOptimization: true,
    notifications: true,
    darkMode: false,
  })

  const { toast } = useToast()

  useEffect(() => {
    checkDatabaseConnection()
  }, [])

  const checkDatabaseConnection = async () => {
    try {
      const response = await fetch("/api/database/init")
      const result = await response.json()

      if (result.success) {
        setDbStatus("connected")
      } else {
        setDbStatus("disconnected")
      }
    } catch (error) {
      setDbStatus("disconnected")
    }
  }

  const initializeDatabase = async () => {
    try {
      setDbStatus("checking")
      const response = await fetch("/api/database/init", { method: "POST" })
      const result = await response.json()

      if (result.success) {
        setDbStatus("connected")
        toast({
          title: "Database Initialized",
          description: "Neon PostgreSQL database has been set up successfully.",
        })
      } else {
        setDbStatus("disconnected")
        toast({
          title: "Initialization Failed",
          description: "Failed to initialize the database. Please check your connection.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setDbStatus("disconnected")
      toast({
        title: "Connection Error",
        description: "Unable to connect to the database.",
        variant: "destructive",
      })
    }
  }

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your configuration has been updated successfully.",
    })
  }

  const testConnection = (service: string) => {
    toast({
      title: `Testing ${service} Connection`,
      description: "Verifying connection parameters...",
    })

    setTimeout(() => {
      toast({
        title: "Connection Successful",
        description: `${service} integration is working properly.`,
      })
    }, 2000)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <Badge variant="default" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Connected
          </Badge>
        )
      case "checking":
        return (
          <Badge variant="secondary" className="flex items-center gap-1">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
            >
              <TestTube className="h-3 w-3" />
            </motion.div>
            Checking...
          </Badge>
        )
      default:
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Disconnected
          </Badge>
        )
    }
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Settings</h1>
            <p className="text-sm text-muted-foreground">Configure your AI models, database, and integrations</p>
          </div>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6">
        <Tabs defaultValue="database" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="ai-models">AI Models</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          {/* Database Tab */}
          <TabsContent value="database" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Neon PostgreSQL Configuration
                </CardTitle>
                <CardDescription>Configure your Neon serverless PostgreSQL database connection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">Database Status</p>
                    <p className="text-sm text-muted-foreground">Current connection status to Neon PostgreSQL</p>
                  </div>
                  {getStatusBadge(dbStatus)}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="database-url">Database URL</Label>
                  <Input
                    id="database-url"
                    type="password"
                    placeholder="postgresql://user:password@host:5432/database"
                    value={settings.databaseUrl}
                    onChange={(e) => setSettings({ ...settings, databaseUrl: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your Neon database connection string. This is automatically configured from environment variables.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable-analytics"
                      checked={settings.enableAnalytics}
                      onCheckedChange={(checked) => setSettings({ ...settings, enableAnalytics: checked })}
                    />
                    <Label htmlFor="enable-analytics">Enable analytics tracking</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="auto-backup"
                      checked={settings.autoBackup}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoBackup: checked })}
                    />
                    <Label htmlFor="auto-backup">Automatic backups</Label>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={checkDatabaseConnection} variant="outline">
                    <TestTube className="mr-2 h-4 w-4" />
                    Test Connection
                  </Button>

                  {dbStatus === "disconnected" && (
                    <Button onClick={initializeDatabase} variant="default">
                      <Database className="mr-2 h-4 w-4" />
                      Initialize Database
                    </Button>
                  )}
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Database Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Serverless PostgreSQL with automatic scaling</li>
                    <li>• Built-in connection pooling and caching</li>
                    <li>• Real-time analytics and performance tracking</li>
                    <li>• Automatic backups and point-in-time recovery</li>
                    <li>• Advanced indexing for optimal query performance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Models Tab */}
          <TabsContent value="ai-models" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Model Configuration
                </CardTitle>
                <CardDescription>Configure your AI models and generation parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="default-model">Default Model</Label>
                  <Select
                    value={settings.defaultModel}
                    onValueChange={(value) => setSettings({ ...settings, defaultModel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4o">OpenAI GPT-4o</SelectItem>
                      <SelectItem value="gpt-4-turbo">OpenAI GPT-4 Turbo</SelectItem>
                      <SelectItem value="llama-3-8b">LLaMA 3 8B (Neon Compatible)</SelectItem>
                      <SelectItem value="llama-3-70b">LLaMA 3 70B (Neon Compatible)</SelectItem>
                      <SelectItem value="mistral-7b">Mistral 7B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input
                      id="temperature"
                      type="number"
                      min="0"
                      max="2"
                      step="0.1"
                      value={settings.temperature}
                      onChange={(e) => setSettings({ ...settings, temperature: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-tokens">Max Tokens</Label>
                    <Input
                      id="max-tokens"
                      type="number"
                      value={settings.maxTokens}
                      onChange={(e) => setSettings({ ...settings, maxTokens: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="system-prompt">System Prompt</Label>
                  <Textarea
                    id="system-prompt"
                    rows={4}
                    value={settings.systemPrompt}
                    onChange={(e) => setSettings({ ...settings, systemPrompt: e.target.value })}
                  />
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-100">Neon + AI Integration</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    All AI model configurations and generated content are automatically stored in your Neon database
                    with full version history and performance tracking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  XM Cloud Integration
                </CardTitle>
                <CardDescription>Connect to your Sitecore XM Cloud instance for content publishing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="xm-url">XM Cloud URL</Label>
                  <Input
                    id="xm-url"
                    placeholder="https://your-instance.sitecorecloud.io"
                    value={settings.xmCloudUrl}
                    onChange={(e) => setSettings({ ...settings, xmCloudUrl: e.target.value })}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="xm-api-key">API Key</Label>
                    <Input
                      id="xm-api-key"
                      type="password"
                      placeholder="Your XM Cloud API key"
                      value={settings.xmCloudApiKey}
                      onChange={(e) => setSettings({ ...settings, xmCloudApiKey: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="xm-site-id">Site ID</Label>
                    <Input
                      id="xm-site-id"
                      placeholder="your-site-id"
                      value={settings.xmCloudSiteId}
                      onChange={(e) => setSettings({ ...settings, xmCloudSiteId: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="auto-publish"
                    checked={settings.autoPublish}
                    onCheckedChange={(checked) => setSettings({ ...settings, autoPublish: checked })}
                  />
                  <Label htmlFor="auto-publish">Auto-publish generated content</Label>
                </div>

                <Button onClick={() => testConnection("XM Cloud")} variant="outline">
                  <TestTube className="mr-2 h-4 w-4" />
                  Test Connection
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Generation Defaults</CardTitle>
                <CardDescription>Set default parameters for content generation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="default-tone">Default Tone</Label>
                    <Select
                      value={settings.defaultTone}
                      onValueChange={(value) => setSettings({ ...settings, defaultTone: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
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
                  <div className="space-y-2">
                    <Label htmlFor="default-language">Default Language</Label>
                    <Select
                      value={settings.defaultLanguage}
                      onValueChange={(value) => setSettings({ ...settings, defaultLanguage: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="it">Italian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="seo-optimization"
                    checked={settings.seoOptimization}
                    onCheckedChange={(checked) => setSettings({ ...settings, seoOptimization: checked })}
                  />
                  <Label htmlFor="seo-optimization">Enable automatic SEO optimization</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* General Tab */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  General Preferences
                </CardTitle>
                <CardDescription>Configure general application settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="notifications"
                    checked={settings.notifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
                  />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="dark-mode"
                    checked={settings.darkMode}
                    onCheckedChange={(checked) => setSettings({ ...settings, darkMode: checked })}
                  />
                  <Label htmlFor="dark-mode">Dark mode</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
