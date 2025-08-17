import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "GatherVoice - Keep listening to your customers",
  description:
    "GatherVoice is a platform that helps you keep listening to your customers. It's a platform that helps you collect feedback from your customers and use it to improve your product.",
  keywords: "customer feedback, product roadmap, user voting, feature requests, customer feedback, product roadmap, user voting, feature requests",
  authors: [{ name: "GatherVoice" }],
  viewport: "width=device-width, initial-scale=1",
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
