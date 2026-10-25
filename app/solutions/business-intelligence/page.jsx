import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom BI Dashboards and Analytics | Anavya Infotech",
  description: "Turn business data into useful insights. Build BI dashboards for leaders, organize data automatically, and track KPIs in real time.",
  keywords: ["custom business intelligence dashboard development","BI analytics software company"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/business-intelligence" },
  openGraph: { title: "Custom BI Dashboards and Analytics | Anavya Infotech", description: "Turn business data into useful insights. Build BI dashboards for leaders, organize data automatically, and track KPIs in real time.", url: "https://www.anavyainfotech.com/solutions/business-intelligence", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Business Intelligence Dashboards & Analytics Platforms","description":"Turn raw operational data into actionable revenue insights. Custom executive BI dashboards, automated data warehousing and real-time KPI visualization.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const BUSINESS_INTELLIGENCE_FAQS = [
  {
    "question": "What is a custom Business Intelligence (BI) dashboard?",
    "answer": "A custom BI dashboard brings data from sales, marketing, inventory, and accounting into one visual report that can update in real time."
  },
  {
    "question": "Can a BI dashboard connect to different data sources?",
    "answer": "Yes. We can connect PostgreSQL, MySQL, Google Analytics, Shopify, Stripe, and other REST APIs in one dashboard."
  },
  {
    "question": "How often can dashboard data update?",
    "answer": "Dashboards can update in real time or on a schedule, such as every hour or day, based on your needs."
  },
  {
    "question": "Can we save reports as PDF or Excel files?",
    "answer": "Yes. Reporting tools can create PDF or Excel files with one click and email reports to managers on a schedule."
  },
  {
    "question": "How long does it take to build a BI platform?",
    "answer": "Custom BI dashboards usually take 3 to 5 weeks, from planning how data connects to launching the dashboard."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Business Intelligence Dashboards and Analytics</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Organizations collect a lot of sales, operations, and customer data, but it is often spread across separate systems. We bring APIs, databases, and other tools together in BI dashboards that show key performance indicators (KPIs).</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Turn Business Data into Clear Decisions</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Bring Data Together</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Real-Time Interactive Dashboards</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Forecasting Tools</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Detailed Access for Leaders</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Bring Data Together</h3><p className="mt-2 text-sm leading-6 text-stone-600">ETL (extract, transform, and load) pipelines bring CRM, ERP, and payment data together.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Real-Time Interactive Dashboards</h3><p className="mt-2 text-sm leading-6 text-stone-600">Create fast reports with Next.js, Apache Superset, and D3.js.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Forecasting Tools</h3><p className="mt-2 text-sm leading-6 text-stone-600">Models estimate which customers may leave, how quickly sales may grow, and how much inventory you may need.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Detailed Access for Leaders</h3><p className="mt-2 text-sm leading-6 text-stone-600">Access rules let only approved leaders see sensitive figures.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Business Intelligence FAQs"
        subtitle="Answers to common questions about business intelligence tools and our projects."
        faqs={BUSINESS_INTELLIGENCE_FAQS}
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


