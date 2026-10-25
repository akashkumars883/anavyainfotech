import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Retail and E-Commerce Software | Anavya Infotech",
  description: "Connect physical stores and online shops with custom retail software. Keep inventory in sync, connect POS systems, and support flexible online storefronts.",
  keywords: ["omnichannel retail software development","custom ecommerce solutions"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/ecommerce-retail" },
  openGraph: { title: "Retail and E-Commerce Software | Anavya Infotech", description: "Connect physical stores and online shops with custom retail software. Keep inventory in sync, connect POS systems, and support flexible online storefronts.", url: "https://www.anavyainfotech.com/solutions/ecommerce-retail", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Omnichannel E-Commerce & Retail Software Solutions","description":"Bridge physical stores and digital storefronts with custom omnichannel retail software. Unified inventory, POS integration and seamless headless commerce.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const ECOMMERCE_RETAIL_FAQS = [
  {
    "question": "How do your retail e-commerce solutions boost sales?",
    "answer": "We build fast online shops with product recommendations, one-click checkout, and inventory updates across sales channels."
  },
  {
    "question": "Can you connect in-store POS systems to an online shop?",
    "answer": "Yes. We connect in-store POS systems (Shopify POS, Square, or custom ERPs) to your online shop so inventory updates in real time."
  },
  {
    "question": "How do your systems handle busy flash sales?",
    "answer": "Our flexible, serverless setup grows to handle thousands of people checking out at once without server crashes."
  },
  {
    "question": "Can you build wholesale online stores with custom prices?",
    "answer": "Yes. Our B2B stores can offer volume-based wholesale prices, tax exemptions, and purchase order invoices."
  },
  {
    "question": "How long does it take to update a retail online store?",
    "answer": "A full retail software update usually takes 4 to 8 weeks, depending on the product catalog and connections needed."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Retail and E-Commerce Software</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Customers expect the same experience online, in mobile apps, and in stores. We connect in-store POS systems to flexible online shops, so inventory and loyalty programs stay in sync.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Connect Online and In-Store Sales</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Keep Store and Online Stock in Sync</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Order Online and Pick Up in Store (BOPIS)</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>One Customer Rewards Program</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Ship with Multiple Carriers</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Keep Store and Online Stock in Sync</h3><p className="mt-2 text-sm leading-6 text-stone-600">Keep stock levels in stores and online shops in sync.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Order Online and Pick Up in Store (BOPIS)</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automatically manage online orders for in-store pickup and send updates.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">One Customer Rewards Program</h3><p className="mt-2 text-sm leading-6 text-stone-600">Keep each customer?s rewards in sync across all sales channels.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Ship with Multiple Carriers</h3><p className="mt-2 text-sm leading-6 text-stone-600">Create shipping labels, compare carrier rates, and track deliveries.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="E-Commerce & Retail FAQs"
        subtitle="Answers to common questions about retail and e-commerce tools and our projects."
        faqs={ECOMMERCE_RETAIL_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let?s build the right solution for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tell our team how you work and where you want to grow. We?ll help plan a platform that fits.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Talk About Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


