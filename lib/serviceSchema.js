/**
 * Generates Google Rich Results Compliant JSON-LD Schema Graph Array
 * Including Service Schema, FAQPage Schema, and BreadcrumbList Schema.
 */
export function createServiceSchema({
  name,
  description,
  slug,
  serviceType = "Software Development & Digital Marketing Services",
  faqs = [],
  breadcrumbLabel = name,
}) {
  const url = `https://www.anavyainfotech.com/services/${slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": name,
      "serviceType": serviceType,
      "description": description,
      "url": url,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Anavya Infotech",
        "url": "https://www.anavyainfotech.com",
        "logo": "https://www.anavyainfotech.com/logo.png",
        "telephone": "+91-6201231875",
        "email": "info@anavyainfotech.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Delhi NCR"
        }
      },
      "areaServed": ["India", "United States", "United Kingdom", "Worldwide"]
    }
  ];

  if (Array.isArray(faqs) && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.anavyainfotech.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.anavyainfotech.com/#services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": breadcrumbLabel,
        "item": url,
      },
    ],
  });

  return schemas;
}
