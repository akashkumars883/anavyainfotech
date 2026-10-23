import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Omnichannel E-Commerce & Retail Software Development | Anavya Infotech",
  description: "Bridge physical stores and digital storefronts with custom omnichannel retail software. Unified inventory, POS integration and seamless headless commerce.",
  keywords: ["omnichannel retail software development","custom ecommerce solutions"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/ecommerce-retail" },
  openGraph: { title: "Omnichannel E-Commerce & Retail Software Development | Anavya Infotech", description: "Bridge physical stores and digital storefronts with custom omnichannel retail software. Unified inventory, POS integration and seamless headless commerce.", url: "https://www.anavyainfotech.com/solutions/ecommerce-retail", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Omnichannel E-Commerce & Retail Software Solutions","description":"Bridge physical stores and digital storefronts with custom omnichannel retail software. Unified inventory, POS integration and seamless headless commerce.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const ECOMMERCE_RETAIL_FAQS = [
  {
    "question": "How do your retail e-commerce solutions boost sales?",
    "answer": "We build sub-second loading storefronts, personalized product recommendations, single-click checkout, and omnichannel inventory sync."
  },
  {
    "question": "Can you integrate physical POS store systems with online e-commerce?",
    "answer": "Yes, we connect physical POS systems (Shopify POS, Square, custom ERPs) with your online store for real-time inventory updates."
  },
  {
    "question": "How do you handle high-traffic flash sale events?",
    "answer": "Our headless serverless architecture auto-scales to handle thousands of concurrent checkout requests without server crashes."
  },
  {
    "question": "Can you build B2B wholesale e-commerce portals with custom pricing?",
    "answer": "Yes! We build B2B portals featuring tiered wholesale volume pricing, tax exemption logic, and PO invoice ordering."
  },
  {
    "question": "How long does a retail e-commerce transformation take?",
    "answer": "Complete retail digital transformations take 4 to 8 weeks depending on catalog size and integrations."
  }
];

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "E-Commerce & Retail", href: "/solutions/ecommerce-retail" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Omnichannel E-Commerce & Retail Software Solutions</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Retail requires consistent experiences across online stores, mobile apps, and physical locations. We connect in-store POS systems with headless storefronts for real-time inventory visibility and synchronized loyalty programs.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Unified Commerce: Omnichannel Retail Software Connecting Online and Offline Sales</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Unified POS and Web Inventory</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Click-and-Collect (BOPIS)</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Centralized Customer Loyalty</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Multi-Carrier Shipping</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Unified POS and Web Inventory</h3><p className="mt-2 text-sm leading-6 text-stone-600">Instant sync between physical registers and digital storefronts.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Click-and-Collect (BOPIS)</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automated buy-online, pick-up-in-store routing and updates.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Centralized Customer Loyalty</h3><p className="mt-2 text-sm leading-6 text-stone-600">Unified rewards profiles across all sales channels.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Multi-Carrier Shipping</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automated labels, carrier rates, and live tracking.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="E-Commerce & Retail FAQs"
        subtitle="Common questions about e-commerce & retail technology and project delivery."
        faqs={ECOMMERCE_RETAIL_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build a solution designed for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our team about a platform tailored to your workflows and growth plans.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


