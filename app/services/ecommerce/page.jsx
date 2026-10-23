import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";
import TechBrandIcon from "@/components/TechBrandIcon";

export const metadata = {
  title: "E-Commerce Development company - Fast & Scalable Stores",
  description: "Build high-conversion headless e-commerce storefronts on Next.js, Shopify Plus & MedusaJS. Sub-300ms page transitions, custom payment flows & multi-currency ERP sync.",
  keywords: ["headless ecommerce development services","custom ecommerce website development","Next.js ecommerce agency","MedusaJS development","Shopify Plus headless","high-conversion online store"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Development Company - India & USA - Anavya Infotech",
    description:
      "Custom headless e-commerce stores built for speed, SEO & scale. Shopify/custom storefronts for D2C brands in India, Delhi NCR & the USA.",
    url: "https://www.anavyainfotech.com/services/ecommerce",
    type: "website",
  },
};

const ECOMMERCE_FAQS = [
  {
    "question": "What makes headless e-commerce development superior to traditional platforms?",
    "answer": "Headless e-commerce decouples the frontend user interface from the backend transaction database. This architecture enables sub-second page rendering, unrestricted design control, superior Core Web Vitals scores, and the ability to update the user experience without modifying backend data pipelines."
  },
  {
    "question": "How long does it take to migrate an existing store to Next.js headless?",
    "answer": "A standard migration for a mid-market catalog (10,000–50,000 SKUs) typically takes 8 to 12 weeks. This includes database migration, GraphQL API configuration, custom frontend engineering, rigorous testing, and zero-downtime DNS cutover."
  },
  {
    "question": "Will migrating to headless e-commerce negatively impact my current SEO?",
    "answer": "When managed correctly, a headless migration improves organic search visibility. We manage 1:1 301 redirect mapping, preserve canonical tag structures, implement structured Schema markup, and optimize Core Web Vitals metrics to prevent ranking loss and drive long-term organic growth."
  }
];

const serviceSchemas = createServiceSchema({
  name: "E-Commerce Development Services",
  description: "Build high-conversion e-commerce storefronts on Next.js, Shopify Plus & MedusaJS. Sub-300ms page transitions, custom payment flows & multi-currency ERP sync.",
  slug: "ecommerce",
  serviceType: "E-Commerce Development",
  faqs: ECOMMERCE_FAQS,
  breadcrumbLabel: "E-Commerce",
});

const architectureComparisons = [
  ["Average Mobile LCP", "8s – 5.2s (Fails Core Web Vitals)", "< 1.2s (Passes All Core Web Vitals)"],
  ["Global Page Transitions", "Full page reloads (800ms+)", "Instant Client-side Transitions (< 100ms)"],
  ["Deployment Risk", "High; frontend edits can break backend logic", "Zero; backend and frontend are decoupled"],
  ["Catalog Scalability", "Slows down after 20,000+ SKUs", "Handles 500,000+ SKUs seamlessly"],
  ["Customization Freedom", "Restricted by platform theme engines", "100% full-stack code customization"],
];

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
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="ecommerce">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "E-Commerce Storefronts", href: "/services/ecommerce" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <ShoppingCart className="h-3.5 w-3.5 text-blue-700" /> Headless E-Commerce Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Authoritative E-Commerce Development
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              In an era where page speed directly dictates revenue, relying on heavy, monolithic templates is no longer viable. As a leading <strong>headless e-commerce development company</strong>, Anavya Infotech engineers decoupling solutions that separate your customer-facing frontend from the backend database. Whether you need a <strong>custom Shopify storefront Next.js</strong> architecture or a bespoke commerce engine, our decoupled builds provide near-instant page loads, total design freedom, and a massive conversion advantage.
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
      {/* Introductory trust statement directly below the hero */}
      <section className="border-b border-stone-100 bg-white px-6 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-7xl text-left text-base font-light leading-7 text-stone-600 sm:text-lg sm:leading-8">
            We are recognized as a trusted <strong className="font-semibold text-stone-900">D2C e-commerce agency in India and the USA</strong> because our technical executions directly increase bottom-line sales. Our engineering teams rigorously apply EEAT standards to ensure your storefront is not only visually stunning but technically flawless. By prioritizing Core Web Vitals, semantic schema structures, and secure payment integrations, we deliver e-commerce solutions that scale seamlessly during high-traffic sales events and dominate search engine results.
          </p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Engineering Sub-Second Headless Commerce That Converts</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Standard e-commerce platforms force a trade-off between design flexibility and system speed. As product catalogs grow and multi-region operations scale, traditional monolithic setups suffer under heavy database queries, bloated plugin stacks, and rigid liquid themes.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">At Anavya Infotech, we deliver custom headless e-commerce development services. We decouple your backend commerce engine from the frontend presentation layer, delivering sub-300ms page load times, custom checkout funnels, and enterprise-grade scalability that drives measurable conversion lifts.</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The Monolithic Bottleneck: Why Traditional Storefronts Stagnate Growth</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Monolithic architectures integrate your product catalog, database, checkout, and templating layer into a single code structure. While efficient for early-stage operations, this setup introduces systemic performance issues at scale:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Theme &amp; Plugin Bloat" /><span><strong className="text-stone-900">Theme &amp; Plugin Bloat:</strong> Accumulated plugins inject duplicate JavaScript libraries, blocking the main thread and slowing mobile performance.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Poor Core Web Vitals" /><span><strong className="text-stone-900">Poor Core Web Vitals:</strong> Monolithic themes struggle to achieve high Interaction to Next Paint (INP) and Largest Contentful Paint (LCP) scores, hurting organic SEO rankings.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Rigid Checkout Experiences" /><span><strong className="text-stone-900">Rigid Checkout Experiences:</strong> Modifying monolithic checkout flows requires risky backend overrides, limiting your ability to test and optimize conversion paths.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="ERP &amp; OMS Sync Delays" /><span><strong className="text-stone-900">ERP &amp; OMS Sync Delays:</strong> Monolithic databases often lock during heavy inventory synchronization routines, leading to database timeouts during peak traffic surges.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Our Modern Headless Tech Stack</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We build decoupled e-commerce ecosystems using modern web technology, pairing lightweight frontends with modular backend APIs.</p><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Next.js 15 App Router &amp; React Server Components" /><span><strong className="text-stone-900">Next.js 15 App Router &amp; React Server Components:</strong> Serves statically generated product pages cached at the edge, reducing Server Response Time (TTFB) to under 50ms globally.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="MedusaJS Architecture" /><span><strong className="text-stone-900">MedusaJS Architecture:</strong> An open-source headless engine designed for complex custom commerce, multi-currency pricing, and tailor-made fulfillment rules.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Shopify Storefront API Integration" /><span><strong className="text-stone-900">Shopify Storefront API Integration:</strong> Leverages Shopify's checkout engine while giving design teams full control over the Next.js frontend UX.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Algolia &amp; Meilisearch Integration" /><span><strong className="text-stone-900">Algolia &amp; Meilisearch Integration:</strong> Delivers instant, typo-tolerant search auto-completion and faceted filtering in under 20 milliseconds.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Stripe Multi-Currency &amp; Local Payments" /><span><strong className="text-stone-900">Stripe Multi-Currency &amp; Local Payments:</strong> Offers custom localized checkout flows, dynamic tax engine calculations, and alternative payment options like Apple Pay and Klarna.</span></div></div></div></div></section>
<section className="py-12 bg-white border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3">
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Technical Capabilities for High-Scale Brands</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Our headless implementations go beyond visual styling. We engineer infrastructure designed to handle high transaction volumes and complex catalog logic:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Real-Time Omnichannel Inventory Sync" /><span><strong className="text-stone-900">Real-Time Omnichannel Inventory Sync:</strong> Webhook-driven synchronization guarantees that inventory changes across POS systems, ERPs, and warehouse warehouses reflect on your storefront instantly.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Dynamic, Multi-Step Checkout Funnels" /><span><strong className="text-stone-900">Dynamic, Multi-Step Checkout Funnels:</strong> Custom single-page or multi-step checkout layouts bypass platform defaults to increase checkout completion rates.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Progressive Web App (PWA) Functionality" /><span><strong className="text-stone-900">Progressive Web App (PWA) Functionality:</strong> Provides offline product browsing, background data sync, and web push notifications directly to mobile devices.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automated Abandoned Cart Recovery" /><span><strong className="text-stone-900">Automated Abandoned Cart Recovery:</strong> Event-driven serverless webhooks trigger personalized email and SMS messaging via Klaviyo or Customer.io instantly when a cart is abandoned.</span></div></div></div></div></section>
      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Architecture Comparison: Monolithic vs. Next.js Headless
          </h2>
          <div className="overflow-x-auto rounded-md border border-stone-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Engineering Capability</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Monolithic Platform (WooCommerce / Standard Shopify)</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Anavya Next.js Headless Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {architectureComparisons.map(([capability, monolithic, headless]) => (
                  <tr key={capability} className="align-top transition-colors hover:bg-blue-50/50">
                    <th scope="row" className="px-5 py-4 font-semibold text-stone-900">{capability}</th>
                    <td className="px-5 py-4 leading-relaxed">{monolithic}</td>
                    <td className="px-5 py-4 leading-relaxed">{headless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Technical Proof &amp; Real-World Results</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Client Execution: Global Lifestyle Apparel Retailer</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Challenge" /><span><strong className="text-stone-900">Challenge:</strong> A high-volume lifestyle brand experienced high cart drop-off rates on mobile devices due to slow theme rendering (3.4s LCP) and plugin conflicts during flash sales.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Solution" /><span><strong className="text-stone-900">Solution:</strong> Anavya Infotech migrated the frontend to Next.js 15 on Vercel Edge Network while retaining Shopify Plus for backend order management. We implemented instant edge caching, custom Algolia search, and dynamic payment routing.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Results" /><span><strong className="text-stone-900">Results:</strong> Page load speed improved from 3.4s to 280ms. Mobile conversion rates increased by 42%, and the site maintained 100% uptime during a 100,000-user flash sale event.</span></div></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-7">
          <div className="max-w-3xl space-y-3"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Built with proven tools</p><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Headless Commerce Stack</h2><p className="text-sm leading-7 text-stone-600">A stack selected for speed, maintainability, and reliable production delivery.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {[
              ["Next.js", "nextdotjs", "Renders fast storefront pages with server-side and static generation."],
              ["React", "react", "Builds responsive product and checkout experiences from reusable UI."],
              ["TypeScript", "typescript", "Adds safer data handling across storefront and integrations."],
              ["Tailwind CSS", "tailwindcss", "Keeps layouts consistent and lightweight across screen sizes."],
              ["Shopify Plus", "shopify", "Manages products, inventory, orders, and secure checkout."],
              ["Algolia", "algolia", "Powers fast product search, autocomplete, and filtering."],
              ["Stripe", "stripe", "Processes secure payments and supports international checkout."],
              ["PostgreSQL", "postgresql", "Stores structured commerce and operational data reliably."],
              ["Vercel", "vercel", "Deploys the storefront close to customers with edge delivery."],
            ].map(([name, slug, description]) => (
              <article key={name} className="group flex min-h-44 flex-col items-start gap-3 rounded-md border border-stone-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-stone-50 transition-colors group-hover:bg-blue-50"><TechBrandIcon slug={slug} size={28} /></span>
                <h3 className="text-sm font-medium text-stone-900">{name}</h3>
                <p className="text-xs leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      

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

