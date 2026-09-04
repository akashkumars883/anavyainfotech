import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "SEO Company in India | Search Engine Optimization Services | Anavya Infotech",
  description:
    "Data-driven SEO services for businesses in Delhi NCR, Faridabad, Noida & the USA. Technical, on-page & content SEO to rank higher and grow organic traffic.",
  keywords:
    "SEO company India, search engine optimization services, SEO agency Delhi NCR Faridabad Noida, technical SEO agency, organic traffic growth",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/seo",
  },
  openGraph: {
    title: "SEO Company in India | Search Engine Optimization Services | Anavya Infotech",
    description:
      "Data-driven SEO services for businesses in Delhi NCR, Faridabad, Noida & the USA. Technical, on-page & content SEO to rank higher and grow organic traffic.",
    url: "https://www.anavyainfotech.com/services/seo",
    type: "website",
  },
};

const SEO_FAQS = [
  {
    question: "How long does SEO take to show results?",
    answer: "Typically 3–6 months for meaningful ranking movement, depending on competition and your site's current technical health — we'll give you a realistic timeline after the audit."
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer: "No credible SEO agency can guarantee a specific rank — Google's algorithm isn't controlled by any vendor. We focus on and report against traffic and conversion growth instead."
  },
  {
    question: "Is SEO better than paid ads for my business?",
    answer: "They serve different purposes — SEO compounds over time and lowers cost-per-lead long-term, while ads deliver immediate traffic. Most businesses benefit from both."
  },
  {
    question: "Do you offer specialized SEO for e-commerce or local businesses?",
    answer: "Yes — see E-Commerce SEO, Local SEO, and Technical SEO."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Search Engine Optimization Services",
  description: "Data-driven SEO services for businesses in Delhi NCR, Faridabad, Noida & the USA. Technical, on-page & content SEO to rank higher and grow organic traffic.",
  slug: "seo",
  serviceType: "SEO Services",
  faqs: SEO_FAQS,
  breadcrumbLabel: "SEO",
});

export default function SeoServicePage() {
  const inclusions = [
    "Full technical SEO audit (crawlability, indexing, Core Web Vitals, structured data)",
    "Keyword research mapped to actual buyer intent, not just search volume",
    "On-page optimization: title tags, meta descriptions, internal linking, content gaps",
    "Content strategy and SEO-optimized blog/content production",
    "Local SEO (Google Business Profile, citations) where relevant",
    "Monthly reporting on rankings, traffic, and conversions — not vanity metrics",
  ];

  const processSteps = [
    { num: "01", title: "Audit", desc: "Technical + competitive SEO audit." },
    { num: "02", title: "Strategy", desc: "Keyword and content gap strategy." },
    { num: "03", title: "Execution", desc: "On-page fixes and content production." },
    { num: "04", title: "Growth", desc: "Ongoing optimization, link building, and monthly reporting." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "SEO", href: "/services/seo" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Globe className="h-3.5 w-3.5 text-blue-700" /> Search Engine Optimization
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            SEO Services That Grow Organic Traffic, Not Just Rankings
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light max-w-4xl leading-relaxed">
            Ranking for a vanity keyword means nothing if it doesn't bring customers. Anavya Infotech runs SEO campaigns built around a simple standard: organic traffic that converts. Our SEO services cover technical audits, on-page optimization, content strategy, and authority building for businesses across India, Delhi NCR, and the USA.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              Get a Free SEO Audit → <ArrowRight className="h-4 w-4" />
            </Link>
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

      {/* Why Businesses Choose Us */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Why Businesses Choose Us Over Freelancers or Generic Agencies
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            Most "SEO packages" sold in India are backlink-spam templates recycled across every client. We treat SEO as engineering: every recommendation is backed by a technical audit of your actual site, and every content piece is mapped to a keyword with real commercial intent. We also run <Link href="/blog/white-label-seo-reseller-program-agency-scaling-guide" className="text-blue-700 underline">White Label SEO Reseller programs</Link> for agencies that want to resell SEO without building an in-house team.
          </p>
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
        subtitle="Common questions about search engine optimization."
        faqs={SEO_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to double your organic search traffic?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Get a free technical SEO audit and custom ranking strategy for your platform.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Free SEO Audit →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
