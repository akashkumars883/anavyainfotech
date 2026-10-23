import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom BI Dashboard & Analytics Software Development | Anavya Infotech",
  description: "Turn raw operational data into actionable revenue insights. Custom executive BI dashboards, automated data warehousing and real-time KPI visualization.",
  keywords: ["custom business intelligence dashboard development","BI analytics software company"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/business-intelligence" },
  openGraph: { title: "Custom BI Dashboard & Analytics Software Development | Anavya Infotech", description: "Turn raw operational data into actionable revenue insights. Custom executive BI dashboards, automated data warehousing and real-time KPI visualization.", url: "https://www.anavyainfotech.com/solutions/business-intelligence", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Business Intelligence Dashboards & Analytics Platforms","description":"Turn raw operational data into actionable revenue insights. Custom executive BI dashboards, automated data warehousing and real-time KPI visualization.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const BUSINESS_INTELLIGENCE_FAQS = [
  {
    "question": "What is a custom Business Intelligence (BI) dashboard?",
    "answer": "A custom BI dashboard aggregates data from your sales, marketing, inventory, and accounting systems into a single real-time visual analytics hub."
  },
  {
    "question": "Can a BI dashboard connect to multiple data sources?",
    "answer": "Yes! We connect PostgreSQL, MySQL, Google Analytics, Shopify, Stripe, and third-party REST APIs into a unified dashboard."
  },
  {
    "question": "How often does the dashboard data update?",
    "answer": "Dashboards can update in real time or on scheduled cron intervals (hourly/daily) depending on your operational needs."
  },
  {
    "question": "Can we export reports to PDF or Excel formats?",
    "answer": "Yes, custom reporting modules allow one-click automated PDF/Excel exports and scheduled email reports to management."
  },
  {
    "question": "How long does it take to build a custom BI analytics platform?",
    "answer": "Custom BI dashboards take 3 to 5 weeks from data pipeline mapping to final user dashboard deployment."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Business Intelligence", href: "/solutions/business-intelligence" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Business Intelligence Dashboards & Analytics Platforms</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Organizations have large volumes of transactional, operational, and customer data but struggle to get timely insight from disconnected systems. We build BI platforms that aggregate APIs, databases, and third-party tools into unified KPI dashboards.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Transform Data into Decisions: Custom Enterprise Business Intelligence Dashboards</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Unified Data Pipelines</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Real-Time Interactive Dashboards</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Predictive Analytics Integration</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Granular Executive Permissions</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Unified Data Pipelines</h3><p className="mt-2 text-sm leading-6 text-stone-600">ETL pipelines synchronize CRM, ERP, and payment data.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Real-Time Interactive Dashboards</h3><p className="mt-2 text-sm leading-6 text-stone-600">High-performance reporting with Next.js, Apache Superset, and D3.js.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Predictive Analytics Integration</h3><p className="mt-2 text-sm leading-6 text-stone-600">Models forecast customer churn, sales velocity, and inventory demand.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Granular Executive Permissions</h3><p className="mt-2 text-sm leading-6 text-stone-600">Role-based access limits sensitive metrics to authorized leaders.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Business Intelligence FAQs"
        subtitle="Common questions about business intelligence technology and project delivery."
        faqs={BUSINESS_INTELLIGENCE_FAQS}
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


