import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = "GatherVoice - 고객의 목소리를 듣고 제품을 개선하세요",
  description = "GatherVoice는 고객 피드백을 수집하고 제품 로드맵을 관리하는 플랫폼입니다. 사용자 투표, 기능 요청, 고객 피드백을 통해 제품을 지속적으로 개선하세요.",
  keywords = ["고객 피드백", "제품 로드맵", "사용자 투표", "기능 요청"],
  image = "/og-image.png",
  url = "https://www.gather-voice.com",
  type = "website"
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GatherVoice" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@gathervoice" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  )
}
