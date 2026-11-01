import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Zap,
  TrendingUp,
  FileCheck,
  Building,
  DollarSign,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "White Label SEO Reseller Program for Agencies in India & Global",
  description:
    "Scale your agency margins with white-label SEO fulfillment. 100% unbranded client dashboards, NDA protection, technical SEO, and dedicated account managers.",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/white-label-seo",
  },
  openGraph: {
    title: "White Label SEO Reseller Program | Anavya Infotech",
    description:
      "Offer high-margin technical, local, and enterprise SEO under your own brand name without hiring an in-house team.",
    url: "https://www.anavyainfotech.com/services/white-label-seo",
    type: "website",
  },
};

const RESELLER_FAQS = [
  {
    question: "How does the white-label SEO partnership work?",
    answer:
      "You manage the client relationship and billing, while our engineering and SEO team executes the technical audits, on-page optimization, content strategy, and link building. All deliverables and monthly reports carry your agency's logo and branding.",
  },
  {
    question: "What profit margins can our marketing agency expect?",
    answer:
      "Most agency partners markup our wholesale packages by 60% to 120%. Because our operational overhead is streamlined in India, you deliver enterprise-grade SEO to US, UK, and Australian clients while retaining healthy recurring retainers.",
  },
  {
    question: "Do you sign a Non-Disclosure Agreement (NDA) to protect our clients?",
    answer:
      "Yes. A strict bilateral NDA and non-compete clause are signed before onboarding. We will never reach out directly to your clients or disclose our behind-the-scenes involvement.",
  },
  {
    question: "What is included in the monthly white-label deliverable package?",
    answer:
      "Each package includes custom PDF and live Looker Studio performance dashboards, keyword movement logs, technical health fixes, published content URLs, and high-DA citation/backlink registries.",
  },
];

export default function WhiteLabelSeoPage() {
  const marginTiers = [
    {
      tier: "Starter Agency",
      clients: "1–3 Clients",
      wholesalePrice: "₹9,999 / $299",
      recommendedRetail: "₹25,000 / $750",
      margin: "Up to 65% Margin",
      desc: "Perfect for boutique digital marketing agencies expanding into organic search.",
    },
    {
      tier: "Growth Partner",
      clients: "4–10 Clients",
      wholesalePrice: "₹18,999 / $499",
      recommendedRetail: "₹45,000 / $1,250",
      margin: "Up to 70% Margin",
      desc: "Includes dedicated Slack channel integration and bi-weekly white-label sprint meetings.",
    },
    {
      tier: "Scale Enterprise",
      clients: "10+ Clients",
      wholesalePrice: "Custom Volume Tier",
      recommendedRetail: "Custom Enterprise",
      margin: "Volume Discount",
      desc: "Dedicated senior SEO strategist directly assigned to your account leadership.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-stone-900 selection:bg-blue-600/20 selection:text-blue-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-stone-50 border-b border-stone-200/80 pt-8 pb-14 px-6 text-left">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "White Label SEO", href: "/services/white-label-seo" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5" /> Agency Reseller Program
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15] max-w-4xl">
            White-Label SEO Fulfillment. <br />
            <span className="text-blue-700 font-semibold">Your Brand. Our Execution.</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light max-w-3xl leading-relaxed">
            Stop turning down SEO projects or struggling with expensive in-house payroll. We provide end-to-end technical, on-page, and local SEO fulfillment under your agency name with strict non-disclosure protections.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              Get Agency Wholesale Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog/white-label-seo-reseller-program-agency-scaling-guide"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-white border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors"
            >
              Read Reseller Scaling Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Wholesale Margins Table */}
      <section className="py-14 px-6 max-w-7xl mx-auto text-left space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Transparent Margin Structure</span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Wholesale Costs vs. Retail Pricing Benchmarks
          </h2>
          <p className="text-sm text-stone-600 font-light">
            You set the customer price. Here is what typical digital marketing agencies earn reselling our technical packages:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marginTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-stone-200 bg-stone-50/50 p-6 space-y-4 hover:border-blue-600 hover:bg-white transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-stone-900">{tier.tier}</h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                  {tier.margin}
                </span>
              </div>
              <p className="text-xs text-stone-500">{tier.clients}</p>

              <div className="space-y-1.5 pt-2 border-t border-stone-200/80">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Your Wholesale Cost:</span>
                  <span className="font-semibold text-stone-900">{tier.wholesalePrice}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Typical Client Retainer:</span>
                  <span className="font-semibold text-emerald-700">{tier.recommendedRetail}</span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed pt-2">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Non-Disclosure Section */}
      <section className="bg-stone-50 border-y border-stone-200/80 py-14 px-6 text-left">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Strict Confidentiality</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
              Four Pillars of Our White-Label Fulfillment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-3">
              <Shield className="h-8 w-8 text-blue-700" />
              <h3 className="font-semibold text-stone-900">100% Non-Compete & NDA</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Legal contracts protecting your client relationships. We are an invisible execution arm.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-3">
              <FileCheck className="h-8 w-8 text-blue-700" />
              <h3 className="font-semibold text-stone-900">Unbranded Client Deliverables</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Reports, live dashboard links, and strategy decks rendered with your agency logo and typography.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-3">
              <Zap className="h-8 w-8 text-blue-700" />
              <h3 className="font-semibold text-stone-900">Engineered by Next.js Experts</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We handle deep technical schema, crawl issues, and Core Web Vitals that typical SEO shops cannot touch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-3">
              <DollarSign className="h-8 w-8 text-blue-700" />
              <h3 className="font-semibold text-stone-900">Flexible INR & USD Billing</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Clean invoicing via GST in India, or Wise / Stripe USD for international agency partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="White Label SEO Reseller FAQs"
        subtitle="Common questions from agency founders about onboarding, delivery, and reporting."
        faqs={RESELLER_FAQS}
      />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
