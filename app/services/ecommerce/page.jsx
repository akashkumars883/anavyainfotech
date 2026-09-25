import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Headless E-Commerce Development Company | India & USA | Anavya Infotech",
  description:
    "Custom headless e-commerce stores built for speed, SEO & scale. Shopify/custom storefronts for D2C brands in India, Delhi NCR & the USA.",
  keywords: "headless e-commerce development company, custom Shopify storefront Next.js, D2C e-commerce agency India USA",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ecommerce",
  },
  openGraph: {
    title: "Headless E-Commerce Development Company | India & USA | Anavya Infotech",
    description:
      "Custom headless e-commerce stores built for speed, SEO & scale. Shopify/custom storefronts for D2C brands in India, Delhi NCR & the USA.",
    url: "https://www.anavyainfotech.com/services/ecommerce",
    type: "website",
  },
};

const ECOMMERCE_FAQS = [
  {
    question: "Do I need Shopify, or can this be fully custom?",
    answer: "Both work — we build headless on top of Shopify for merchants who want its backend, or fully custom for businesses with unique catalog/inventory needs."
  },
  {
    question: "Will my product pages rank on Google?",
    answer: "Yes — SEO structure (schema, meta tags, fast load, clean URLs) is built into every headless storefront we ship."
  },
  {
    question: "Can you migrate my existing store?",
    answer: "Yes, we handle migration from WooCommerce, standard Shopify themes, or other platforms with minimal downtime."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Headless E-Commerce Development Services",
  description: "Custom headless e-commerce stores built for speed, SEO & scale. Shopify/custom storefronts for D2C brands in India, Delhi NCR & the USA.",
  slug: "ecommerce",
  serviceType: "E-Commerce Development",
  faqs: ECOMMERCE_FAQS,
  breadcrumbLabel: "E-Commerce",
});

export default function EcommerceServicePage() {
  const inclusions = [
    "Headless storefront development (Next.js frontend + Shopify/custom backend)",
    "Product catalog architecture and search/filter UX",
    "Payment gateway integration (Razorpay, Stripe, PayU, etc.)",
    "SEO-optimized product and category pages (schema, canonical URLs, fast load)",
    "Cart, checkout, and inventory sync",
    "Mobile-first, high-conversion design",
  ];

  const processSteps = [
    { num: "01", title: "Catalog & Platform Assessment", desc: "Detailed catalog, API, and platform architecture assessment." },
    { num: "02", title: "Storefront UX & Conversion Planning", desc: "Headless UI/UX design wireframing focused on high conversion rates." },
    { num: "03", title: "Headless Development & API Sync", desc: "Frontend development and secure payment/inventory backend integration." },
    { num: "04", title: "SEO Optimization & Launch", desc: "E-commerce SEO structure setup, rigorous load testing, and production launch." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "E-Commerce Storefronts", href: "/services/ecommerce" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <ShoppingCart className="h-3.5 w-3.5 text-blue-700" /> Headless E-Commerce Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Headless E-Commerce Development Services
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Standard e-commerce themes slow down as your catalog and traffic grow. Anavya Infotech builds headless e-commerce storefronts — decoupled frontend and backend architecture — so your store stays fast, SEO-friendly, and flexible even as you scale SKUs, traffic, and marketing campaigns.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Get an E-Commerce Quote → <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/development-illustration.jpg"
              alt="Headless Ecommerce Development Company"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <div key={index} className="p-4 rounded-md bg-stone-50 border border-stone-100 flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Content Section */}
      <section className="py-12 md:py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Authoritative Headless E-Commerce Development
          </h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            <p>
              In an era where page speed directly dictates revenue, relying on heavy, monolithic templates is no longer viable. As a leading <strong>headless e-commerce development company</strong>, Anavya Infotech engineers decoupling solutions that separate your customer-facing frontend from the backend database. Whether you need a <strong>custom Shopify storefront Next.js</strong> architecture or a bespoke commerce engine, our decoupled builds provide near-instant page loads, total design freedom, and a massive conversion advantage.
            </p>
            <p>
              We are recognized as a trusted <strong>D2C e-commerce agency in India and the USA</strong> because our technical executions directly increase bottom-line sales. Our engineering teams rigorously apply EEAT standards to ensure your storefront is not only visually stunning but technically flawless. By prioritizing Core Web Vitals, semantic schema structures, and secure payment integrations, we deliver e-commerce solutions that scale seamlessly during high-traffic sales events and dominate search engine results.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3">
                <div className="text-2xl font-bold text-blue-700">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about headless e-commerce development."
        faqs={ECOMMERCE_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to launch your high-speed online store?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with our e-commerce engineers to discuss platform selection and custom storefront design.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get an E-Commerce Store Quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
