import Link from "next/link";
import { ArrowUpRight, Code2, Cpu, TrendingUp, Palette } from "lucide-react";

export default function Services() {
  const categories = [
    {
      title: "Development",
      description: "Building scalable digital architecture, bespoke web apps, mobile apps, and modern e-commerce storefronts engineered for speed.",
      icon: Code2,
      image: "/development-illustration.jpg",
      items: [
        { name: "Business Website", href: "/services/business-website" },
        { name: "App Development", href: "/services/app-development" },
        { name: "Web Applications", href: "/services/web-applications" },
        { name: "Landing Pages", href: "/services/landing-pages" },
        { name: "E-Commerce", href: "/services/ecommerce" },
      ],
      href: "/services/web-applications",
    },
    {
      title: "Technology",
      description: "Deploying custom AI integrations, smart chatbots, CRM systems, and robust API workflows to automate your operations.",
      icon: Cpu,
      items: [
        { name: "AI Chatbot", href: "/services/ai-chatbot" },
        { name: "Business Automation", href: "/services/business-automation" },
        { name: "CRM / Custom Software", href: "/services/crm-custom-software" },
        { name: "API Integration", href: "/services/api-integration" },
      ],
      href: "/services/ai-chatbot",
    },
    {
      title: "Growth",
      description: "Accelerating market visibility with local & technical SEO audits, search strategies, and optimized ranking performance.",
      icon: TrendingUp,
      items: [
        { name: "SEO", href: "/services/seo" },
        { name: "Local SEO", href: "/services/local-seo" },
        { name: "Ecommerce SEO", href: "/services/ecommerce-seo" },
        { name: "Technical SEO", href: "/services/technical-seo" },
        { name: "Content Strategy", href: "/services/content-strategist" },
      ],
      href: "/services/seo",
    },
    {
      title: "Branding",
      description: "Crafting distinct visual identities, corporate guidelines, logo architectures, and strategic design assets to define your presence.",
      icon: Palette,
      items: [
        { name: "Brand Identity", href: "/services/branding" },
        { name: "Logo Design", href: "/services/branding" },
        { name: "Corporate Guidelines", href: "/services/branding" },
        { name: "Visual Strategy", href: "/services/branding" },
      ],
      href: "/services/branding",
    },
  ];

  // Dynamic JSON-LD Service Schema for Search Engine crawlers
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development, AI Automation, Branding & Search Optimization Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Anavya Infotech",
      "image": "https://anavyainfotech.com/logo.png",
      "url": "https://anavyainfotech.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Anavya Infotech Service Catalog",
      "itemListElement": categories.map((cat) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": cat.title,
          "description": cat.description
        }
      }))
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-12 md:py-16 bg-white border-b border-stone-100 relative z-10"
    >
      {/* Schema Markup for Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-sm">
            What We Do
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight"
          >
            Capabilities designed to scale <br />
            <span className="text-blue-700">your business operations.</span>
          </h2>
        </div>

        {/* Services 4 in a Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative w-full rounded-md border border-stone-200/80 bg-stone-50/60 p-6 flex flex-col justify-between hover:bg-white hover:border-blue-700/40 hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  {/* Icon & Title Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-md bg-white border border-stone-200 shadow-sm flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Link
                      href={category.href}
                      className="h-8 w-8 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-blue-700 hover:border-blue-300 transition-all shadow-sm"
                      aria-label={`View ${category.title} service page`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Title */}
                  <Link href={category.href} className="block group/link">
                    <h3 className="text-xl font-bold text-stone-900 group-hover/link:text-blue-700 transition-colors">
                      {category.title}
                    </h3>
                  </Link>

                  {category.image && (
                    <div className="w-full h-36 bg-white rounded-md border border-stone-200/80 p-2 flex items-center justify-center overflow-hidden shadow-2xs my-2">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="h-full w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Sub-services Pills as Direct Touch/Clickable Links */}
                <div className="pt-6 border-t border-stone-200/60 mt-6 space-y-3">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    Core Offerings
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="inline-block px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-stone-200/90 text-stone-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200 shadow-2xs cursor-pointer active:scale-95"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

