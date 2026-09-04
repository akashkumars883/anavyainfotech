import WebsitePricing from "@/components/WebsitePricing";
import SeoPricing from "@/components/SeoPricing";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Transparent Pricing & Investment Packages",
  description:
    "Explore transparent fixed pricing packages for SEO services, local SEO, e-commerce, and white label SEO reseller programs.",
  keywords: [
    "SEO package pricing",
    "SEO services pricing India",
    "local SEO package pricing",
    "SEO reseller pricing",
    "white label SEO costs",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/pricing",
  },
  openGraph: {
    title: "Transparent Pricing & Investment Packages | Anavya Infotech",
    description: "Transparent fixed-price SEO growth and retainer packages.",
    url: "https://www.anavyainfotech.com/pricing",
    type: "website",
  },
};

const PRICING_FAQS = [
  {
    question: "Are your pricing packages fixed or are there hidden monthly charges?",
    answer:
      "All our packages feature 100% transparent fixed-price quotes. There are no hidden fees or unexpected maintenance charges. What we quote during scope alignment is what you pay.",
  },
  {
    question: "Do you offer custom enterprise pricing for complex software projects?",
    answer:
      "Yes! If your application requires bespoke database architecture, custom AI model integration, or multi-tenant SaaS pipelines, we build tailored proposals with clear milestone pricing.",
  },
  {
    question: "What is included in your monthly SEO retainer packages?",
    answer:
      "Our SEO retainers include comprehensive technical audits, keyword research, on-page optimization, content publishing, high-authority link acquisition, GMB local optimization, and monthly ROI performance reporting.",
  },
  {
    question: "What payment methods and currency options do you accept?",
    answer:
      "We accept bank wire transfers, UPI, credit/debit cards, and international payment portals (Stripe, Razorpay, Wise, PayPal) supporting INR ($/₹) and USD ($).",
  },
  {
    question: "What is your refund policy if project requirements change?",
    answer:
      "We operate a fair, milestone-based policy. If work has not yet commenced on a milestone, unearned retainer funds are refundable per our service agreement policy.",
  },
];

const PRICING_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Anavyainfotech Web Development & SEO Packages",
  "description": "Transparent website development and SEO retainer pricing packages by Anavya Infotech.",
  "brand": {
    "@type": "Brand",
    "name": "Anavya Infotech"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Website Package",
      "price": "7999",
      "priceCurrency": "INR",
      "url": "https://www.anavyainfotech.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "Business Website Package",
      "price": "14999",
      "priceCurrency": "INR",
      "url": "https://www.anavyainfotech.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "E-Commerce Store Package",
      "price": "29999",
      "priceCurrency": "INR",
      "url": "https://www.anavyainfotech.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "BASIC SEO Retainer Package",
      "price": "9999",
      "priceCurrency": "INR",
      "url": "https://www.anavyainfotech.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "PLUS SEO Retainer Package",
      "price": "19999",
      "priceCurrency": "INR",
      "url": "https://www.anavyainfotech.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "PRO / ENTERPRISE SEO Retainer Package",
      "price": "29999",
      "priceCurrency": "INR",
      "url": "https://www.anavyainfotech.com/pricing"
    }
  ]
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_SCHEMA) }}
      />
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Pricing Built Around Your Project — Not a Generic Package.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Every business is different, so we don't force you into a one-size-fits-all tier. Tell us what you're building, and you'll get a clear, itemized quote — no hidden fees, no surprise "final invoice" padding.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/budget-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              Use Our Budget Calculator <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider border border-stone-300 bg-white text-stone-900 hover:bg-stone-900 hover:text-white transition-all shadow-xs"
            >
              Get a Custom Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Our Pricing Is Different */}
      <section className="py-10 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Why Our Pricing Is Different
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "100% code ownership — no rented software, no vendor lock-in.",
              "Zero seat fees — you're not charged per team member for tools we use internally.",
              "Enterprise SLA guarantee — clear delivery commitments, in writing.",
              "Transparent scopes agreed before development starts — not renegotiated mid-project.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-100 rounded-md text-xs sm:text-sm text-stone-800 font-medium">
                <span className="h-2 w-2 rounded-full bg-blue-700 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WebsitePricing showHeader={false} />
      <SeoPricing showHeader={false} />

      {/* Interactive Budget Calculator Banner */}
      <section className="py-8 bg-white px-6 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 rounded-md bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                <Calculator className="h-3.5 w-3.5" /> Interactive Estimator Tool
              </div>
              <h3 className="text-2xl font-bold text-white">Need a customized scope &amp; price estimate?</h3>
              <p className="text-xs text-stone-400 font-light max-w-xl leading-relaxed">
                Use our step-by-step interactive Budget Calculator to configure custom add-ons, sprint speed, and get an instant formal quote.
              </p>
            </div>
            <Link
              href="/budget-calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
            >
              Open Budget Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        title="Frequently Asked Pricing Questions"
        subtitle="Clear answers regarding billing, package inclusions, and payment options."
        faqs={PRICING_FAQS}
      />

      <ContactForm />
    </main>
  );
}
