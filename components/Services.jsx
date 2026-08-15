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
                className="group relative h-[440px] w-full rounded-md border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between text-left"
              >
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

                {/* Initial Bottom Gradient Overlay to make title readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />

                {/* Top Header (Category Icon & Quick Direct Link) */}
                <div className="relative z-10 p-6 flex items-center justify-between pointer-events-auto">
                  <div className="h-10 w-10 rounded-md bg-white/90 backdrop-blur-md border border-stone-200 shadow-sm flex items-center justify-center text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Link
                    href={category.href}
                    className="h-9 w-9 rounded-md bg-white/90 backdrop-blur-md border border-stone-200 flex items-center justify-center text-stone-900 hover:text-white hover:bg-blue-700 transition-all shadow-sm"
                    aria-label={`View ${category.title} service page`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Default Card Bottom Title */}
                <div className="relative z-10 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Hover Details Overlay (Slides Up & Reveals on Hover / Touch) */}
                <div className="absolute inset-0 z-20 bg-stone-950/90 backdrop-blur-sm p-6 flex flex-col justify-end text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between border-b border-white/15 pb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <Link
                        href={category.href}
                        className="text-blue-400 hover:text-white text-xs font-bold flex items-center gap-1"
                      >
                        Explore <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <p className="text-xs text-stone-300 font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Core Offerings Pill Links */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      Core Offerings
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {category.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/15 hover:bg-blue-600 border border-white/20 hover:border-blue-500 text-white transition-all duration-200 cursor-pointer active:scale-95"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

