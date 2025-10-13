export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    "name": "Mahalaxmi Transport co.",
    "description": "Professional cotton bale transportation services pan India",
    "url": "https://mahalaxmitransport.co",
    "telephone": "+918073627241",
    "email": "info@mahalaxmitransport.co",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hubli",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "State",
      "name": "Karnataka"
    },
    "serviceType": "Cotton Bale Transportation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cotton Bale Transportation",
            "description": "Safe and timely transportation of cotton bales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sample Cutting",
            "description": "Professional cotton sample cutting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LR Documentation",
            "description": "Accurate and transparent lorry receipt documentation"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

