import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Software & Workflow Automation for Small Businesses (SMB)",
  description: "Empower your small business with affordable custom software. Eliminate repetitive Excel tasks, automate customer follow-ups and streamline operations.",
  keywords: ["custom software development for SMB","small business automation software"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/smb" },
  openGraph: { title: "Custom Software & Workflow Automation for Small Businesses (SMB) | Anavya Infotech", description: "Empower your small business with affordable custom software. Eliminate repetitive Excel tasks, automate customer follow-ups and streamline operations.", url: "https://www.anavyainfotech.com/solutions/smb", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Software & Workflow Automation for SMBs","description":"Empower your small business with affordable custom software. Eliminate repetitive Excel tasks, automate customer follow-ups and streamline operations.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const SMB_FAQS = [
  {
    "question": "Why is a modern custom website essential for small businesses in 2026?",
    "answer": "Over 85% of local customers research online before buying. A fast, professional site builds credibility and turns local searches into paying leads."
  },
  {
    "question": "How do your SMB solutions fit small business budgets?",
    "answer": "We offer fixed transparent pricing packages with zero surprise fees, allowing small businesses to get enterprise-quality web tech at accessible rates."
  },
  {
    "question": "Can you help our small business rank #1 in local search results?",
    "answer": "Yes, our Local SEO packages optimize your Google Business Profile and local keywords to get your business into the top 3 Google Map results."
  },
  {
    "question": "Will we be able to update our website content ourselves?",
    "answer": "Yes! We provide an easy-to-use CMS dashboard so you can edit services, post updates, and change photos without paying a developer."
  },
  {
    "question": "How quickly can a small business site be launched?",
    "answer": "Small business websites typically launch in 2 to 3 weeks."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Small & Medium Business", href: "/solutions/smb" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Software & Workflow Automation for SMBs</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Growing businesses can outgrow spreadsheets while enterprise software remains costly and complex. We deliver lean custom software that automates repetitive work without enterprise licensing overhead.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Operational Efficiency for Growth: Custom Software & Automation Engineered for SMBs</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Spreadsheet Replacement</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automated Customer Follow-Up</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Simple Job & Task Dispatch</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Transparent Fixed-Budget Delivery</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Spreadsheet Replacement</h3><p className="mt-2 text-sm leading-6 text-stone-600">Replace error-prone Excel logs with secure web portals and databases.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automated Customer Follow-Up</h3><p className="mt-2 text-sm leading-6 text-stone-600">WhatsApp, SMS, and email sequences nurture inbound leads.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Simple Job & Task Dispatch</h3><p className="mt-2 text-sm leading-6 text-stone-600">Mobile-responsive scheduling for technicians, orders, and deliveries.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Transparent Fixed-Budget Delivery</h3><p className="mt-2 text-sm leading-6 text-stone-600">Predictable scopes designed to deliver clear ROI within 90 days.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Small & Medium Business FAQs"
        subtitle="Common questions about small & medium business technology and project delivery."
        faqs={SMB_FAQS}
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


