import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";
import TechBrandIcon from "@/components/TechBrandIcon";

export const metadata = {
  title: "E-Commerce Website Development",
  description:
    "Build fast, flexible online stores with Next.js, Shopify Plus, or MedusaJS. Add custom payments and connect inventory and business systems.",
  keywords: [
    "headless ecommerce development services",
    "custom ecommerce website development",
    "Next.js ecommerce agency",
    "MedusaJS development",
    "Shopify Plus headless",
    "high-conversion online store",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Website Development | Anavya Infotech",
    description:
      "Custom online stores built for speed, search, and growth. Shopify and custom storefronts for brands in India, Delhi NCR, and the USA.",
    url: "https://www.anavyainfotech.com/services/ecommerce",
    type: "website",
  },
};

const ECOMMERCE_FAQS = [
  {
    question:
      "What is headless e-commerce, and how is it different from a traditional store?",
    answer:
      "Headless e-commerce separates the customer-facing website (frontend) from the systems that manage products and orders (backend). This can make pages faster, gives more design control, and lets you change the website without changing the backend systems.",
  },
  {
    question:
      "How long does it take to migrate an existing store to Next.js headless?",
    answer:
      "Moving a mid-sized catalog of 10,000–50,000 products usually takes 8 to 12 weeks. This includes moving data, setting up GraphQL APIs, building the new website, testing it, and switching over without taking the store offline.",
  },
  {
    question:
      "Will migrating to headless e-commerce negatively impact my current SEO?",
    answer:
      "A carefully planned move can protect or improve your search visibility. We set up redirects from old pages, keep canonical tags, add structured data, and improve Core Web Vitals to help protect your rankings.",
  },
];

const serviceSchemas = createServiceSchema({
  name: "E-Commerce Development Services",
  description:
    "Build high-conversion e-commerce storefronts on Next.js, Shopify Plus & MedusaJS. Sub-300ms page transitions, custom payment flows & multi-currency ERP sync.",
  slug: "ecommerce",
  serviceType: "E-Commerce Development",
  faqs: ECOMMERCE_FAQS,
  breadcrumbLabel: "E-Commerce",
});

const architectureComparisons = [
  [
    "Average Mobile LCP",
    "8s–5.2s (Does not pass Core Web Vitals)",
    "Under 1.2s (Passes Core Web Vitals)",
  ],
  [
    "Global Page Transitions",
    "Full page reloads (800ms+)",
    "Page changes under 100ms",
  ],
  [
    "Deployment Risk",
    "High; website edits can affect backend systems",
    "Lower; frontend and backend are separate",
  ],
  [
    "Catalog Scalability",
    "May slow down after 20,000+ products",
    "Can handle 500,000+ products",
  ],
  [
    "Customization Freedom",
    "Limited by the platform's themes",
    "Full control over the code",
  ],
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
    {
      num: "01",
      title: "Review Your Store",
      desc: "Review your product catalog, APIs, and current platform.",
    },
    {
      num: "02",
      title: "Plan the Storefront",
      desc: "Plan the design and customer experience for your online store.",
    },
    {
      num: "03",
      title: "Build and Connect",
      desc: "Build the website and securely connect payments and inventory.",
    },
    {
      num: "04",
      title: "Prepare and Launch",
      desc: "Set up e-commerce SEO, test page speed, and launch the store.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page"
      data-service="ecommerce"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/#services" },
                {
                  label: "E-Commerce Storefronts",
                  href: "/services/ecommerce",
                },
              ]}
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <ShoppingCart className="h-3.5 w-3.5 text-blue-700" /> Headless
              E-Commerce Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom E-Commerce Website Development
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Slow pages can cost online stores sales. As a{" "}
              <strong>headless e-commerce development company</strong>, Anavya
              Infotech builds custom stores that separate the customer-facing
              website from the systems that manage products and orders. A{" "}
              <strong>custom Shopify storefront built with Next.js</strong>{" "}
              can load quickly and give you more control over your store&apos;s
              design.
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
            We are a trusted{" "}
            <strong className="font-semibold text-stone-900">
              D2C e-commerce agency in India and the USA
            </strong>{" "}
            because we build stores with business results in mind. We follow
            EEAT guidance and focus on both appearance and technology. We
            improve Core Web Vitals, add structured data, and connect secure
            payments so your store can handle busy sales periods and appear in
            search results.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Fast Online Stores That Help Increase Sales
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Standard e-commerce platforms can limit your design choices or
              slow down as your product catalog grows. Large databases, many
              plugins, and fixed themes can make it harder to keep your store
              fast and flexible.
            </p>
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Anavya Infotech builds custom headless e-commerce stores. We keep
              the customer-facing website separate from the systems that manage
              your store. This gives you fast pages, custom checkout options,
              and room to grow.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Why Traditional Online Stores Can Slow Down
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Traditional stores often manage your product catalog, database,
              checkout, and page templates in one system. This can work well
              for a small store, but may cause problems as the business grows:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Theme &amp; Plugin Bloat" />
                <span>
                  <strong className="text-stone-900">
                    Theme &amp; Plugin Bloat:
                  </strong>{" "}
                  Extra plugins can add duplicate JavaScript and slow down
                  pages, especially on mobile devices.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Poor Core Web Vitals" />
                <span>
                  <strong className="text-stone-900">
                    Poor Core Web Vitals:
                  </strong>{" "}
                  Large themes may score poorly on Interaction to Next Paint
                  (INP) and Largest Contentful Paint (LCP), which can hurt
                  search rankings.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Rigid Checkout Experiences" />
                <span>
                  <strong className="text-stone-900">
                    Rigid Checkout Experiences:
                  </strong>{" "}
                  Changing checkout can require risky backend edits and make
                  it harder to test ways to improve sales.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="ERP &amp; OMS Sync Delays" />
                <span>
                  <strong className="text-stone-900">
                    ERP &amp; OMS Sync Delays:
                  </strong>{" "}
                  The database may slow down when it updates inventory,
                  causing problems during busy sales periods.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Our Modern Headless Tech Stack
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              We build online stores that keep the customer-facing website
              separate from the systems that manage products and orders. This
              lets us combine a fast website with APIs that connect to your
              store.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Next.js 15 App Router &amp; React Server Components" />
                <span>
                  <strong className="text-stone-900">
                    Next.js 15 App Router &amp; React Server Components:
                  </strong>{" "}
                  Creates product pages ahead of time and serves them from
                  locations near customers, helping pages respond in under 50
                  ms around the world.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="MedusaJS Architecture" />
                <span>
                  <strong className="text-stone-900">
                    MedusaJS Architecture:
                  </strong>{" "}
                  Open-source store management software for custom stores,
                  different currencies, and flexible order delivery rules.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Shopify Storefront API Integration" />
                <span>
                  <strong className="text-stone-900">
                    Shopify Storefront API Integration:
                  </strong>{" "}
                  Use Shopify for checkout while keeping control of the
                  customer-facing Next.js website.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Algolia &amp; Meilisearch Integration" />
                <span>
                  <strong className="text-stone-900">
                    Algolia &amp; Meilisearch Integration:
                  </strong>{" "}
                  Helps customers find products with fast search that handles
                  typos and filters, in under 20 milliseconds.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Stripe Multi-Currency &amp; Local Payments" />
                <span>
                  <strong className="text-stone-900">
                    Stripe Multi-Currency &amp; Local Payments:
                  </strong>{" "}
                  Supports checkout for different regions, calculates taxes,
                  and offers payment options such as Apple Pay and Klarna.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3"
              >
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Technical Capabilities for High-Scale Brands
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              We do more than design your website. We build systems that can
              handle many orders and large product catalogs:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Real-Time Omnichannel Inventory Sync" />
                <span>
                  <strong className="text-stone-900">
                    Real-Time Omnichannel Inventory Sync:
                  </strong>{" "}
                  Webhooks—automatic messages between systems—share stock
                  changes from your POS, ERP, and warehouse tools with your
                  store.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Dynamic, Multi-Step Checkout Funnels" />
                <span>
                  <strong className="text-stone-900">
                    Dynamic, Multi-Step Checkout Funnels:
                  </strong>{" "}
                  Choose a single-page or step-by-step checkout that fits your
                  store instead of being limited to the platform&apos;s default.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Progressive Web App (PWA) Functionality" />
                <span>
                  <strong className="text-stone-900">
                    Progressive Web App (PWA) Functionality:
                  </strong>{" "}
                  Lets customers browse products offline, updates data when
                  they reconnect, and sends notifications to their phones.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Automated Abandoned Cart Recovery" />
                <span>
                  <strong className="text-stone-900">
                    Automated Abandoned Cart Recovery:
                  </strong>{" "}
                  When a customer leaves items in their cart, webhooks can send
                  a personalized email or text through Klaviyo or Customer.io.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Architecture Comparison: Monolithic vs. Next.js Headless
          </h2>
          <div className="overflow-x-auto rounded-md border border-stone-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Engineering Capability
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Monolithic Platform (WooCommerce / Standard Shopify)
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Anavya Next.js Headless Architecture
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {architectureComparisons.map(
                  ([capability, monolithic, headless]) => (
                    <tr
                      key={capability}
                      className="align-top transition-colors hover:bg-blue-50/50"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-stone-900"
                      >
                        {capability}
                      </th>
                      <td className="px-5 py-4 leading-relaxed">
                        {monolithic}
                      </td>
                      <td className="px-5 py-4 leading-relaxed">{headless}</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Technical Proof &amp; Real-World Results
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Client Execution: Global Lifestyle Apparel Retailer
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Challenge" />
                <span>
                  <strong className="text-stone-900">Challenge:</strong> A
                  high-volume lifestyle brand experienced high cart drop-off
                  rates on mobile devices due to slow theme rendering (3.4s LCP)
                  and plugin conflicts during flash sales.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Solution" />
                <span>
                  <strong className="text-stone-900">Solution:</strong> Anavya
                  Infotech migrated the frontend to Next.js 15 on Vercel Edge
                  Network while retaining Shopify Plus for backend order
                  management. We implemented instant edge caching, custom
                  Algolia search, and dynamic payment routing.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Results" />
                <span>
                  <strong className="text-stone-900">Results:</strong> Page load
                  speed improved from 3.4s to 280ms. Mobile conversion rates
                  increased by 42%, and the site maintained 100% uptime during a
                  100,000-user flash sale event.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-7">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Built with proven tools
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Headless Commerce Stack
            </h2>
            <p className="text-sm leading-7 text-stone-600">
              A stack selected for speed, maintainability, and reliable
              production delivery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {[
              [
                "Next.js",
                "nextdotjs",
                "Renders fast storefront pages with server-side and static generation.",
              ],
              [
                "React",
                "react",
                "Builds responsive product and checkout experiences from reusable UI.",
              ],
              [
                "TypeScript",
                "typescript",
                "Adds safer data handling across storefront and integrations.",
              ],
              [
                "Tailwind CSS",
                "tailwindcss",
                "Keeps layouts consistent and lightweight across screen sizes.",
              ],
              [
                "Shopify Plus",
                "shopify",
                "Manages products, inventory, orders, and secure checkout.",
              ],
              [
                "Algolia",
                "algolia",
                "Powers fast product search, autocomplete, and filtering.",
              ],
              [
                "Stripe",
                "stripe",
                "Processes secure payments and supports international checkout.",
              ],
              [
                "PostgreSQL",
                "postgresql",
                "Stores structured commerce and operational data reliably.",
              ],
              [
                "Vercel",
                "vercel",
                "Deploys the storefront close to customers with edge delivery.",
              ],
            ].map(([name, slug, description]) => (
              <article
                key={name}
                className="group flex min-h-44 flex-col items-start gap-3 rounded-md border border-stone-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-stone-50 transition-colors group-hover:bg-blue-50">
                  <TechBrandIcon slug={slug} size={28} />
                </span>
                <h3 className="text-sm font-medium text-stone-900">{name}</h3>
                <p className="text-xs leading-relaxed text-stone-600">
                  {description}
                </p>
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
                Connect with our e-commerce engineers to discuss platform
                selection and custom storefront design.
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
