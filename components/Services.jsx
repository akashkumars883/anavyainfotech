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
      image: "/service-2.jpg",
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
      image: "/service-3.jpg",
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
      image: "/service-4.jpg",
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
            const isIllustration = category.image.includes("illustration");

            return (
              <div
                key={index}
                className="group relative h-[380px] sm:h-[400px] w-full rounded-md border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between text-left cursor-pointer"
              >
                {/* Full Card Link: Tapping anywhere on mobile or desktop opens the service page */}
                <Link
                  href={category.href}
                  className="absolute inset-0 z-30"
                  aria-label={`View ${category.title} services`}
                />

                {/* Full Card Image Background */}
                <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                      isIllustration
                        ? "object-contain p-6 mix-blend-multiply"
                        : "object-cover"
                    }`}
                  />
                </div>

                {/* Subtle Light Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none transition-opacity duration-300" />

                {/* Top Header Bar (Category Icon & Direct Arrow Button) */}
                <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                  <div className="h-10 w-10 rounded-md bg-white border border-stone-200 shadow-sm flex items-center justify-center text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="h-9 w-9 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom Card Title & Desktop Hover Description */}
                <div className="relative z-10 p-5 space-y-2 pointer-events-none">
                  <div className="flex items-center justify-between border-b border-white/20 pb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                      {category.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Description: Reveals ONLY on Hover on Desktop */}
                  <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed drop-shadow-sm opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

