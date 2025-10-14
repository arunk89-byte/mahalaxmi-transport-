export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mahalaxmi Transport co.",
    "url": "https://mahalaxmitransport.co",
    "description": "Professional cotton bale transportation services pan India",
    "telephone": "+918073627241",
    "email": "info@mahalaxmitransport.co",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hubli",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 150
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

