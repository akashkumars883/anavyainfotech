import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "E-Commerce SEO Services in India",
  description:
    "Anavya Infotech improves SEO for online stores, including product and category pages. We work with Shopify, Next.js, and WooCommerce storefronts.",
  keywords: "ecommerce SEO agency, ecommerce SEO services, ecommerce SEO company",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ecommerce-seo",
  },
  openGraph: {
    title: "E-Commerce SEO Services in India",
    description:
      "Improve product and category rankings and grow unpaid sales with e-commerce SEO services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/ecommerce-seo",
    type: "website",
  },
};

const ECOMMERCE_SEO_FAQS = [
  {
    "question": "Does this work with Shopify or only custom stores?",
    "answer": "We work with Shopify, headless stores, and custom-built e-commerce platforms."
  },
  {
    "question": "Can SEO really move the needle for e-commerce revenue?",
    "answer": "Yes. Once technical and content issues are fixed, search can bring customers at a lower cost and lead to more sales."
  },
  {
    "question": "Do you handle marketplace SEO (Amazon/Flipkart) too?",
    "answer": "We focus on Google SEO for your own store. Contact us if you also need help improving marketplace listings."
  }
];

const serviceSchemas = createServiceSchema({
  name: "E-Commerce SEO Services - Product & Category Page SEO",
  description: "SEO for online stores — product page optimization, category structure & technical SEO to grow organic sales for e-commerce brands in India & the USA.",
  slug: "ecommerce-seo",
  faqs: ECOMMERCE_SEO_FAQS,
});

export default function EcommerceSeoPage() {
  const processSteps = [
    { num: "01", title: "Review", desc: "Review your site's technical setup and product catalog." },
    { num: "02", title: "Page Templates", desc: "Improve the layouts used for product and category pages." },
    { num: "03", title: "Content", desc: "Content production for category and buying-guide pages." },
    { num: "04", title: "Sales Improvement", desc: "Keep improving your site and track sales from unpaid search." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="ecommerce-seo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "E-Commerce SEO", href: "/services/ecommerce-seo" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <ShoppingBag className="h-3.5 w-3.5 text-blue-700" /> E-Commerce SEO Agency
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              E-Commerce SEO That Helps Turn Searches Into Sales
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              E-commerce SEO involves more than adding keywords to product titles. Anavya Infotech improves your site&apos;s technical setup, category pages, product page layouts, and content. We focus on helping online stores turn stronger search rankings into sales.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Grow Your Store&apos;s Organic Sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/growth-illustration.jpg"
              alt="E-Commerce SEO Agency India"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our E-Commerce SEO Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="E-Commerce SEO FAQs"
        subtitle="Answers to common questions about e-commerce SEO."
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
                Connect with Anavya Infotech to help your products reach more customers through unpaid search.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Grow Your Store&apos;s Organic Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
