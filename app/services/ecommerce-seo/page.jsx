import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, ShoppingBag, TrendingUp, Tag, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "E-Commerce SEO Agency in India - Best E-Commerce SEO Services & Company",
  description:
    "Anavya Infotech is the best ecommerce SEO agency in India. We offer specialized ecommerce SEO services, product page optimization, category rank growth, and schema markup for Shopify, Next.js, and WooCommerce storefronts.",
  keywords: "ecommerce SEO agency, ecommerce SEO services, ecommerce SEO company",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ecommerce-seo",
  },
  openGraph: {
    title: "E-Commerce SEO Agency in India - Best E-Commerce SEO Services",
    description:
      "Drive organic sales, rank product category pages, and scale organic revenue with ecommerce SEO services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/ecommerce-seo",
    type: "website",
  },
};


const ECOMMERCE_SEO_FAQS = [
  {
    "question": "Does this work with Shopify or only custom stores?",
    "answer": "Both — we optimize Shopify, headless, and custom-built e-commerce platforms."
  },
  {
    "question": "Can SEO really move the needle for e-commerce revenue?",
    "answer": "Yes — organic search is typically one of the highest-converting, lowest-cost-per-acquisition channels for e-commerce once technical and content foundations are fixed."
  },
  {
    "question": "Do you handle marketplace SEO (Amazon/Flipkart) too?",
    "answer": "Our core focus is your own store's organic Google SEO; ask us if you also need marketplace listing optimization support."
  }
];


const serviceSchemas = createServiceSchema({
  name: "E-Commerce SEO Services - Product & Category Page SEO",
  description: "SEO for online stores — product page optimization, category structure & technical SEO to grow organic sales for e-commerce brands in India & the USA.",
  slug: "ecommerce-seo",
  faqs: ECOMMERCE_SEO_FAQS,
});

export default function EcommerceSeoPage() {
  
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="ecommerce-seo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "E-Commerce SEO", href: "/services/ecommerce-seo" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <ShoppingBag className="h-3.5 w-3.5 text-blue-700" /> Services / E-Commerce SEO
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            E-Commerce SEO to Turn Organic Search Into Sales
          </h1>
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Most e-commerce SEO advice stops at &quot;add keywords to product titles.&quot; Anavya Infotech runs full e-commerce SEO programs — technical crawl optimization, category architecture, product page templates, and content — built specifically for online stores where every ranking improvement should translate directly into revenue.
          </p>
        </div>
      </section>
{/* Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        
      </section>

      
      

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our E-Commerce SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">01</span>
              <h3 className="text-base font-medium text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Technical + catalog architecture audit.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">02</span>
              <h3 className="text-base font-medium text-stone-900">Templates</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Product & category page SEO templates optimization.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">03</span>
              <h3 className="text-base font-medium text-stone-900">Content</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content production for category and buying-guide pages.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">04</span>
              <h3 className="text-base font-medium text-stone-900">Revenue Optimization</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Ongoing optimization tied directly to organic revenue tracking.</p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FaqSection
        title="E-Commerce SEO FAQs"
        subtitle="Frequently asked questions about E-Commerce SEO services."
        faqs={ECOMMERCE_SEO_FAQS}
      />

      {/* CTA */}
      
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Grow Your Store&apos;s Organic Sales
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with Anavya Infotech today and transform your product catalog into a high-converting organic sales channel.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Grow Your Store&apos;s Organic Sales →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

