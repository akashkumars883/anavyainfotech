import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, Search, MapPin, ShoppingCart, Code, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Growth Marketing & Conversion Rate Optimization (CRO) Agency",
  description:
    "Accelerate customer acquisition with full-funnel CRO, performance marketing telemetry, A/B testing, and paid growth strategies from Anavya Infotech.",
  keywords: [
    "growth marketing agency",
    "conversion rate optimization",
    "CRO services",
    "performance growth agency",
    "sales funnel optimization",
    "A/B testing services",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/growth",
  },
  openGraph: {
    title: "Growth Marketing & Conversion Rate Optimization (CRO) Agency",
    description:
      "Accelerate customer acquisition with full-funnel CRO, performance marketing telemetry, A/B testing, and paid growth strategies from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/growth",
    type: "website",
  },
};


const GROWTH_FAQS = [
  {
    question: "What search growth & SEO services do you offer?",
    answer: "We offer comprehensive Organic SEO, Local SEO for Google Business Profile rankings, E-Commerce SEO for online stores, Technical SEO code audits, and Content Marketing Strategy."
  },
  {
    question: "How long does it take to see top keyword rankings and organic traffic growth?",
    answer: "Initial technical fixes and indexation improvements happen within 14-30 days. Measurable keyword rank increases and inbound lead growth occur within 30 to 90 days."
  },
  {
    question: "Do you offer White Label SEO Reseller programs for digital agencies?",
    answer: "Yes, we provide confidential White Label SEO reseller solutions with white-label monthly rank tracking, link audits, and content creation under your agency brand."
  },
  {
    question: "What is Technical SEO and why is it essential for Next.js and custom websites?",
    answer: "Technical SEO optimizes page speed, schema markups, canonical tags, sitemaps, rendering pipelines, and Core Web Vitals to guarantee search engines index every page seamlessly."
  }
];

const subServices = [
  {
    title: "SEO Services",
    description: "Data-driven organic search engine optimization to rank for competitive commercial keywords and drive qualified organic leads.",
    href: "/services/seo",
    icon: Search,
    features: ["Keyword Research & Audits", "On-Page SEO Optimization", "High Domain Link Building", "Monthly Ranking Reports"]
  },
  {
    title: "Local SEO",
    description: "Geo-targeted search optimization to dominate local Google Maps pack rankings in your city or region.",
    href: "/services/local-seo",
    icon: MapPin,
    features: ["Google Business Profile Optimization", "Local Citation Building", "Geo-targeted Keyword Pages", "Review & Trust Growth"]
  },
  {
    title: "Ecommerce SEO",
    description: "Specialized product catalog SEO for Shopify, WooCommerce, and custom Next.js storefronts.",
    href: "/services/ecommerce-seo",
    icon: ShoppingCart,
    features: ["Product Schema Markup", "Faceted Navigation SEO", "Category Page Ranking", "Conversion Rate Optimization"]
  },
  {
    title: "Technical SEO",
    description: "Deep code-level audits, Lighthouse Core Web Vitals tuning, canonical fixes, and indexation optimization.",
    href: "/services/technical-seo",
    icon: Code,
    features: ["Core Web Vitals Tuning", "Structured JSON-LD Schema", "Crawl Budget Optimization", "Serverless Speed Fixes"]
  },
  {
    title: "Content Strategy",
    description: "High-intent content blueprints, editorial calendars, and SEO-optimized engineering articles that convert readers.",
    href: "/services/content-strategist",
    icon: FileText,
    features: ["Topic Cluster Blueprints", "SEO Copywriting", "Keyword Intent Mapping", "Lead Magnet Content"]
  }
];


const serviceSchemas = createServiceSchema({
  name: "Digital Growth, Search Engine Optimization & Content Strategy Services",
  description: "SEO services, local SEO, e-commerce SEO, technical audits, and content strategies by Anavya Infotech.",
  slug: "growth",
  faqs: GROWTH_FAQS,
});

export default function GrowthCategoryPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Growth", href: "/services/growth" }]} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-700 shadow-xs">
              <TrendingUp className="h-3.5 w-3.5 text-blue-700" /> Growth &amp; SEO Hub
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Digital Growth, SEO &amp; <br />
              <span className="text-blue-700">Search Marketing Services</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Accelerate your market visibility with data-driven SEO audits, local Google Maps optimization, technical speed tuning, and high-intent content strategies.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/growth-illustration.jpg"
              alt="Digital Growth and SEO Services Illustration"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Sub-Services Listing Grid */}
      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              Core Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Growth &amp; Search Capabilities
            </h2>
            <p className="text-sm text-stone-600 font-light">
              Dominate organic search rankings and turn search traffic into loyal paying customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-stone-50/60 border border-stone-200/90 rounded-md p-8 flex flex-col justify-between hover:bg-white hover:border-blue-700/50 hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-md bg-white border border-stone-200 shadow-xs flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Link
                        href={service.href}
                        className="h-9 w-9 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-blue-700 hover:border-blue-300 transition-all shadow-xs"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-stone-900 group-hover:text-blue-700 transition-colors">
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-200/60 space-y-2.5">
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                        Key Features
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-700 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-200/60">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="SEO & Search Growth FAQs"
        subtitle="Common questions about search rankings, local SEO, technical audits, and content strategy."
        faqs={GROWTH_FAQS}
      />

      {/* CTA Trigger */}
      <section className="py-12 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Want to double your organic search traffic?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Get a free technical SEO audit and custom ranking strategy for your platform.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get Free SEO Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
