import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import StructuredData from "@/components/StructuredData"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: {
    default: "게더보이스 GatherVoice - 고객의 목소리를 듣고 제품을 개선하세요",
    template: "%s | 게더보이스 GatherVoice"
  },
  description: "게더보이스(GatherVoice)는 고객 피드백을 수집하고 제품 로드맵을 관리하는 플랫폼입니다. 사용자 투표, 기능 요청, 고객 피드백을 통해 제품을 지속적으로 개선하세요.",
  keywords: [
    "게더보이스",
    "GatherVoice",
    "고객 피드백",
    "제품 로드맵",
    "사용자 투표",
    "기능 요청",
    "고객 만족도",
    "제품 개선",
    "피드백 수집",
    "피드백 플랫폼",
    "사용자 의견 수집",
    "제품 기획",
    "customer feedback",
    "product roadmap",
    "user voting",
    "feature requests",
    "feedback platform"
  ],
  authors: [{ name: "GatherVoice Team" }],
  creator: "GatherVoice",
  publisher: "GatherVoice",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gather-voice.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.gather-voice.com',
    title: '게더보이스 GatherVoice - 고객의 목소리를 듣고 제품을 개선하세요',
    description: '게더보이스(GatherVoice) - 고객 피드백을 수집하고 제품 로드맵을 관리하는 플랫폼',
    siteName: '게더보이스 GatherVoice',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '게더보이스 GatherVoice - 고객 피드백 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '게더보이스 GatherVoice - 고객의 목소리를 듣고 제품을 개선하세요',
    description: '게더보이스(GatherVoice) - 고객 피드백을 수집하고 제품 로드맵을 관리하는 플랫폼',
    images: ['/og-image.png'],
    creator: '@gathervoice',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className={inter.className}>
        <StructuredData />
        <GoogleAnalytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
