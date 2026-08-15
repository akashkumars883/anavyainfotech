import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const categories = [
    {
      title: "Development",
      description: "Building scalable digital architecture, bespoke web apps, and modern e-commerce storefronts engineered for performance.",
      items: [
        { name: "Business Website", href: "/services/business-website" },
        { name: "Web Applications", href: "/services/web-applications" },
        { name: "Landing Pages", href: "/services/landing-pages" },
        { name: "E-Commerce", href: "/services/ecommerce" },
      ],
      image: "/service-1.jpg",
      imageAlt: "Anavya Infotech custom web application and software development services mockup",
      href: "/services/web-applications",
    },
    {
      title: "Technology",
      description: "Deploying custom AI integrations, smart chatbots, CRM systems, and robust API workflows to automate your operations.",
      items: [
        { name: "AI Chatbot", href: "/services/ai-chatbot" },
        { name: "Business Automation", href: "/services/business-automation" },
        { name: "CRM / Custom Software", href: "/services/crm-custom-software" },
        { name: "API Integration", href: "/services/api-integration" },
      ],
      image: "/service-2.jpg",
      imageAlt: "Anavya Infotech artificial intelligence, business automation and custom CRM systems mockup",
      href: "/services/ai-chatbot",
    },
    {
      title: "Growth",
      description: "Accelerating market visibility with local & technical SEO audits, search strategies, and optimized ranking performance.",
      items: [
        { name: "SEO", href: "/services/seo" },
        { name: "Local SEO", href: "/services/local-seo" },
        { name: "Ecommerce SEO", href: "/services/ecommerce-seo" },
        { name: "Technical SEO", href: "/services/technical-seo" },
        { name: "Content Strategy", href: "/services/content-strategist" },
      ],
      image: "/service-3.jpg",
      imageAlt: "Anavya Infotech search engine optimization SEO and business growth analytics mockup",
      href: "/services/seo",
    },
    {
      title: "Branding",
      description: "Crafting distinct visual identities, corporate guidelines, logo architectures, and strategic design assets to define your presence.",
      items: [
        { name: "Brand Identity", href: "/services/branding" },
        { name: "Logo Design", href: "/services/branding" },
        { name: "Corporate Guidelines", href: "/services/branding" },
        { name: "Visual Strategy", href: "/services/branding" },
      ],
      image: "/service-4.jpg",
      imageAlt: "Anavya Infotech corporate branding logo architecture and visual design assets mockup",
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
      className="py-10 bg-white border-b border-stone-100 relative z-10"
    >
      {/* Schema Markup for Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-100 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            What We Do
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight"
          >
            Capabilities designed to scale <br />
            <span className="text-blue-700">your business operations.</span>
          </h2>
        </div>

        {/* Services 4 in a Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-[430px] w-full overflow-hidden rounded-md border border-stone-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.imageAlt}
                width={300}
                height={430}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Initial Gradient Overlay (Bottom dark fade to read title) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-all duration-500 md:group-hover:opacity-0" />

              {/* Initial Title Display (Visible by default, fades on hover on desktop) */}
              <Link href={category.href} className="absolute bottom-6 left-6 right-6 z-10 text-white flex items-center justify-between transition-all duration-500 md:group-hover:opacity-0 md:group-hover:translate-y-4 text-left">
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                <span className="h-8 w-8 rounded-md bg-white/20 backdrop-blur-sm border border-white/25 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>

              {/* Hover Overlay Content (Slides up/fades in on hover on desktop) */}
              <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 space-y-4 translate-y-8 md:group-hover:translate-y-0 z-20 text-left">
                {/* Header inside Hover State */}
                <Link href={category.href} className="flex items-center justify-between text-white border-b border-white/10 pb-2 group/title">
                  <h3 className="text-xl font-bold tracking-tight group-hover/title:text-blue-400 transition-colors">{category.title}</h3>
                  <span className="h-8 w-8 rounded-md bg-white text-black flex items-center justify-center shrink-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>

                {/* Description */}
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {category.description}
                </p>

                {/* Sub-services Pills as Direct Clickable Links */}
                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="inline-flex px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/15 hover:bg-blue-600 border border-white/15 hover:border-blue-500 text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

