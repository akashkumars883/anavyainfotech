import WebsitePricing from "@/components/WebsitePricing";
import SeoPricing from "@/components/SeoPricing";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Clear Pricing & Project Packages",
  description:
    "See fixed prices for SEO, local SEO, e-commerce, and white-label SEO services.",
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
    title: "Clear Pricing & Project Packages - Anavya Infotech",
    description: "Fixed-price SEO and monthly service packages.",
    url: "https://www.anavyainfotech.com/pricing",
    type: "website",
  },
};

const PRICING_FAQS = [
  {
    question: "Are your pricing packages fixed or are there hidden monthly charges?",
    answer:
      "Our packages have clear fixed prices. There are no hidden fees or surprise maintenance costs. The price we agree on is the price you pay.",
  },
  {
    question: "Do you offer custom enterprise pricing for complex software projects?",
    answer:
      "Yes. If your app needs a custom database, AI features, or a SaaS setup for multiple customers, we can prepare a plan with clear milestone prices.",
  },
  {
    question: "What is included in your monthly SEO retainer packages?",
    answer:
      "Our monthly SEO plans can include technical reviews, keyword research, page improvements, content publishing, trusted links, Google Business Profile updates, and monthly results reports.",
  },
  {
    question: "What payment methods and currency options do you accept?",
    answer:
      "We accept bank transfers, UPI, credit and debit cards, and international payments through Stripe, Razorpay, Wise, and PayPal in INR or USD.",
  },
  {
    question: "What is your refund policy if project requirements change?",
    answer:
      "Refunds follow our milestone policy. If work on a milestone has not started, its unused retainer funds can be refunded under our service agreement.",
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
            Pricing That Fits Your Project.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Every business is different. Tell us what you&apos;re building, and we&apos;ll give you a clear list of costs with no hidden fees or surprise charges.
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
              "You own all the code — no rented software or vendor lock-in.",
              "No per-person fees for the tools we use.",
              "Clear delivery promises, written in your agreement.",
              "We agree on the work before development starts.",
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
                <Calculator className="h-3.5 w-3.5" /> Project Cost Calculator
              </div>
              <h3 className="text-2xl font-bold text-white">Need a custom project estimate?</h3>
              <p className="text-xs text-stone-400 font-light max-w-xl leading-relaxed">
                Use our Budget Calculator to choose extra features, select a delivery time, and get an instant estimate.
              </p>
            </div>
            <Link
              href="/budget-calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
            >
              Use the Budget Calculator <ArrowRight className="h-4 w-4" />
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
