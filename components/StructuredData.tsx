import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GatherVoice",
    "description": "고객 피드백을 수집하고 제품 로드맵을 관리하는 플랫폼",
    "url": "https://www.gather-voice.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "GatherVoice",
      "url": "https://www.gather-voice.com"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GatherVoice",
    "url": "https://www.gather-voice.com",
    "logo": "https://www.gather-voice.com/placeholder-logo.png",
    "description": "고객 피드백을 수집하고 제품 로드맵을 관리하는 플랫폼",
    "sameAs": [
      "https://twitter.com/gathervoice",
      "https://linkedin.com/company/gathervoice"
    ]
  }

  return (
    <>
      <Script
        id="structured-data-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
    </>
  )
}
