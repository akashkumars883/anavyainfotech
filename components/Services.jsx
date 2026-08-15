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

                {/* Minimal Light Bottom Gradient Overlay Only (Just enough so text is readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/25 to-transparent pointer-events-none" />

                {/* Top Header Bar (Category Icon & Direct Arrow Link) - Always Top Z-Index & Mobile Clickable */}
                <div className="relative z-30 p-5 flex items-center justify-between pointer-events-auto">
                  <div className="h-10 w-10 rounded-md bg-white border border-stone-200 shadow-sm flex items-center justify-center text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Link
                    href={category.href}
                    className="h-9 w-9 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-900 hover:text-white hover:bg-blue-700 transition-all shadow-sm cursor-pointer active:scale-95"
                    aria-label={`View ${category.title} service page`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Bottom Card Interactive Area: 100% Tapable on Mobile & Hover Interactive on Desktop */}
                <div className="relative z-30 p-5 space-y-3 pointer-events-auto">
                  {/* Category Title & Explore Button */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-2">
                    <Link href={category.href} className="hover:text-blue-300 transition-colors">
                      <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                        {category.title}
                      </h3>
                    </Link>
                    <Link
                      href={category.href}
                      className="text-white bg-blue-700 hover:bg-blue-800 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1 transition-colors active:scale-95"
                    >
                      Explore <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-200 font-light leading-relaxed drop-shadow-sm">
                    {category.description}
                  </p>

                  {/* Core Offerings Pill Links: High contrast, 100% Clickable on Mobile & Desktop */}
                  <div className="pt-1 space-y-1.5">
                    <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">
                      Core Offerings
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {category.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            className="inline-block px-2.5 py-1.5 rounded-md text-[11px] font-semibold bg-stone-900/90 text-white border border-stone-700/80 hover:bg-blue-700 hover:border-blue-600 transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
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

