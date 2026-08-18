import { Space_Grotesk, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.anavyainfotech.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "IT Solutions, AI & Digital Marketing Company in India | Anavya Infotech",
    template: "%s | Anavya Infotech",
  },

  description:
    "Anavya Infotech is a full-spectrum technology and growth partner in India, Delhi NCR & USA — website development, SEO, AI automation, data analytics, and cloud solutions under one roof.",

  keywords: [
    "digital marketing agency",
    "digital marketing company",
    "digital marketing agency in India",
    "digital marketing company in India",
    "best digital marketing agency in India",
    "digital marketing company in Delhi NCR",
    "digital marketing agency in Noida",
    "SEO company",
    "SEO agency",
    "SEO company in India",
    "SEO agency in India",
    "best SEO company in India",
    "SEO services",
    "SEO services in India",
    "SEO company in Delhi NCR",
    "SEO agency in Noida",
    "local SEO agency",
    "local SEO company",
    "local SEO services",
    "local SEO agency in India",
    "best local SEO agency in India",
    "ecommerce SEO agency",
    "ecommerce SEO services",
    "ecommerce SEO company",
    "ecommerce SEO agency in India",
    "best ecommerce SEO agency",
    "SEO reseller services",
    "SEO reseller company",
    "SEO reseller program",
    "SEO reseller services in India",
    "white label SEO services",
    "white label SEO company",
    "performance marketing agency",
    "performance marketing company",
    "performance marketing agency in India",
    "performance marketing company in Delhi NCR",
    "social media marketing agency",
    "social media marketing company",
    "social media marketing services",
    "social media marketing agency in India",
    "website design company",
    "website development company",
    "website design company in India",
    "website development company in India",
    "web design services",
    "web development services",
    "ecommerce development company",
    "ecommerce development services",
    "ecommerce development company in India",
    "website development company in USA",
  ],

  authors: [{ name: "Anavya Infotech", url: BASE_URL }],
  creator: "Anavya Infotech",
  publisher: "Anavya Infotech",

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Anavya Infotech",
    title: "IT Solutions, AI & Digital Marketing Company in India | Anavya Infotech",
    description:
      "Anavya Infotech is a full-spectrum technology and growth partner in India, Delhi NCR & USA — website development, SEO, AI automation, data analytics, and cloud solutions under one roof.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Anavya Infotech – IT Solutions, AI & Digital Marketing Company in India",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@anavyainfotech",
    creator: "@anavyainfotech",
    title: "IT Solutions, AI & Digital Marketing Company in India | Anavya Infotech",
    description:
      "Anavya Infotech is a full-spectrum technology and growth partner in India, Delhi NCR & USA — website development, SEO, AI automation, data analytics, and cloud solutions under one roof.",
    images: [`${BASE_URL}/og-image.jpg`],
  },

  // Robots directive
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tags
  verification: {
    google: "qICJDXJHHW1y9Ln_Czyr1Ae-POIJehDgiRm-0k81gW8",
  },

  // Icons
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },

  // Web manifest
  manifest: "/site.webmanifest",

  // Category
  category: "technology",
};

// Global Organization JSON-LD Schema
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Anavya Infotech",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "image": `${BASE_URL}/og-image.jpg`,
  "description":
    "Anavya Infotech is a full-spectrum technology and growth partner in India, Delhi NCR & USA — website development, SEO, AI automation, data analytics, and cloud solutions under one roof.",
  "telephone": "+91-6201231875",
  "email": "info@anavyainfotech.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Delhi NCR",
  },
  "areaServed": [
    "India",
    "Delhi NCR",
    "Noida",
    "United States",
    "Global"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/anavyainfotech/",
    "https://www.instagram.com/anavyainfotech/",
    "https://www.pinterest.com/anavyainfotech/",
    "https://www.linkedin.com/company/anavyainfotech/",
    "https://x.com/anavyainfotech",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing & Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing Services in India" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Agency Services in India & Delhi NCR" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Agency Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce SEO Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Label SEO Reseller Program" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing Agency Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development Company in India & USA" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development Services" } },
    ],
  },
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Anavya Infotech",
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceGrotesk.variable} h-full antialiased bg-white`}
    >
      <head>
        <meta name="google-site-verification" content="qICJDXJHHW1y9Ln_Czyr1Ae-POIJehDgiRm-0k81gW8" />
        <link rel="icon" href="/logo.png" sizes="any" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Google Analytics GA4 */}
        {(() => {
          const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-TMQCHD2H4H";
          return (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `}
              </Script>
            </>
          );
        })()}

        {/* Anavya AI Embeddable Chatbot Widget */}
        <Script
          src="/widget.js"
          data-site-id="anavya-infotech"
          strategy="lazyOnload"
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
