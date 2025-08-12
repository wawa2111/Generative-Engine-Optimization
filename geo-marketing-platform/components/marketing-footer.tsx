import Link from "next/link"
import { Brain, Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react"

export function MarketingFooter() {
  const socialPlatforms = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "TikTok", icon: MessageCircle, href: "#" },
    { name: "Pinterest", icon: MessageCircle, href: "#" },
    { name: "Medium", icon: MessageCircle, href: "#" },
    { name: "Reddit", icon: MessageCircle, href: "#" },
  ]

  const quickLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Brain className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">GEO Platform</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your marketing with AI-powered Generative Engine Optimization. Create, optimize, and publish
              content directly to XM Cloud while distributing across 9 social media platforms.
            </p>
            <div className="flex space-x-4">
              {socialPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform.name}
                >
                  <platform.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>support@geoplatform.com</p>
              <p>Monday-Friday</p>
              <p>9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GEO Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
