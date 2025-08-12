import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { MarketingLayout } from "@/components/marketing-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GEO Platform - AI-Powered Marketing Content Generation",
  description:
    "Transform your marketing with AI-powered Generative Engine Optimization that creates, optimizes, and publishes content directly to XM Cloud and 9 social media platforms.",
  keywords:
    "generative engine optimization, AI marketing, XM Cloud, GGUF AI models, content optimization, social media automation",
  openGraph: {
    title: "GEO Platform - AI-Powered Marketing Content Generation",
    description:
      "Transform your marketing with AI-powered Generative Engine Optimization that creates, optimizes, and publishes content directly to XM Cloud and 9 social media platforms.",
    type: "website",
    url: "https://geoplatform.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Platform - AI-Powered Marketing Content Generation",
    description:
      "Transform your marketing with AI-powered Generative Engine Optimization that creates, optimizes, and publishes content directly to XM Cloud and 9 social media platforms.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <MarketingLayout>{children}</MarketingLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
