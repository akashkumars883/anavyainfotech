import Link from "next/link";
import { ArrowUpRight, Code2, Cpu, TrendingUp, Palette } from "lucide-react";
import GsapSpotlightCard from "./GsapSpotlightCard";

export default function Services() {
  const categories = [
    {
      title: "Development",
      description: "Scalable web apps, mobile experiences, and lightning-fast e-commerce storefronts — engineered on modern frameworks like Next.js and React so every page loads in under a second and every click converts.",
      icon: Code2,
      image: "/development-illustration.jpg",
      items: [
        { name: "Business Website", href: "/services/business-website" },
        { name: "App Development", href: "/services/app-development" },
        { name: "Web Applications", href: "/services/web-applications" },
        { name: "Landing Pages", href: "/services/landing-pages" },
        { name: "E-Commerce", href: "/services/ecommerce" },
      ],
      href: "/services/development",
    },
    {
      title: "Technology & AI",
      description: "We don't bolt AI onto your business — we embed it. Smart chatbots that qualify leads while you sleep, CRM systems built around how your team actually works, and API integrations that eliminate manual busywork.",
      icon: Cpu,
      image: "/technology-illustration.jpg",
      items: [
        { name: "AI Chatbots", href: "/services/ai-chatbot" },
        { name: "Business Automation", href: "/services/business-automation" },
        { name: "Custom CRM/Software", href: "/services/crm-custom-software" },
        { name: "API Integration", href: "/services/api-integration" },
      ],
      href: "/services/technology",
    },
    {
      title: "Growth & SEO",
      description: "Rankings are earned, not guessed at. Our technical and local SEO audits uncover exactly what's holding your site back from page one — then we fix it, systematically, and prove it with data.",
      icon: TrendingUp,
      image: "/growth-illustration.jpg",
      items: [
        { name: "SEO", href: "/services/seo" },
        { name: "Local SEO", href: "/services/local-seo" },
        { name: "E-Commerce SEO", href: "/services/ecommerce-seo" },
        { name: "Technical SEO", href: "/services/technical-seo" },
        { name: "Content Strategy", href: "/services/content-strategist" },
      ],
      href: "/services/growth",
    },
    {
      title: "Branding",
      description: "A logo isn't a brand. We build the full visual system — identity, guidelines, and design assets — so your business looks as credible as the work you actually do.",
      icon: Palette,
      image: "/branding-illustration.jpg",
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
      "image": "https://www.anavyainfotech.com/logo.png",
      "url": "https://www.anavyainfotech.com"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-semibold uppercase tracking-wider text-stone-600 shadow-sm">
            What We Do
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight"
          >
            One Team. Four Capabilities. <br />
            <span className="text-blue-700">Zero Guesswork.</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
            Most agencies hand you off to a freelancer for design, a different vendor for development, and a third party for marketing — and your project falls apart in the gaps. Anavya Infotech eliminates the handoff. Our in-house engineers, designers, and growth strategists work from a single technical blueprint, so your website, your automation, and your search rankings all move in the same direction.
          </p>
        </div>

        {/* Services 4 in a Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isIllustration = category.image.includes("illustration");

            return (
              <GsapSpotlightCard key={index} className="rounded-md border border-stone-200 bg-white">
                <div className="group relative h-[380px] sm:h-[400px] w-full text-left cursor-pointer transition-all duration-300 hover:border-blue-700/60 flex flex-col justify-between">
                  {/* Full Card Link: Tapping anywhere on mobile or desktop opens the service page */}
                  <Link
                    href={category.href}
                    className="absolute inset-0 z-30"
                    aria-label={`View ${category.title} services`}
                  />

                  {/* Full Card Image Container (No dark overlay!) */}
                  <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center overflow-hidden p-6 pb-20">
                    <img
                      src={category.image}
                      alt={category.title}
                      className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                        isIllustration
                          ? "object-contain mix-blend-multiply"
                          : "object-cover rounded-md opacity-90"
                      }`}
                    />
                  </div>

                  {/* Top Header Bar (Category Icon & Direct Arrow Button) */}
                  <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                    <div className="h-10 w-10 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="h-9 w-9 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Bottom Card Title & Desktop Hover Description (Black Text) */}
                  <div className="relative z-10 p-5 bg-white/95 backdrop-blur-sm border-t border-stone-100 flex flex-col justify-end text-left pointer-events-none transition-all duration-300">
                    {/* Heading - Always pinned at bottom in black text */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight group-hover:text-blue-700 transition-colors">
                        {category.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                    </div>

                    {/* Description & Sub-services: Expands smoothly on hover in clean dark text */}
                    <div className="grid grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden space-y-2.5">
                        <p className="pt-2 text-xs sm:text-sm text-stone-600 font-light leading-relaxed opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {category.description}
                        </p>

                        {/* Sub-services Pills List */}
                        <div className="flex flex-wrap gap-1.5 pt-1 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-150">
                          {category.items.map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex px-2 py-0.5 rounded-md text-[10px] font-semibold bg-stone-100 border border-stone-200/80 text-stone-700"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GsapSpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

