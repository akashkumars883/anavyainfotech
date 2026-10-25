import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Software and Automation for Small Businesses",
  description: "Make daily work easier with affordable custom software. Replace repetitive Excel tasks, automate customer follow-ups, and simplify your operations.",
  keywords: ["custom software development for SMB","small business automation software"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/smb" },
  openGraph: { title: "Custom Software and Automation for Small Businesses | Anavya Infotech", description: "Make daily work easier with affordable custom software. Replace repetitive Excel tasks, automate customer follow-ups, and simplify your operations.", url: "https://www.anavyainfotech.com/solutions/smb", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Software & Workflow Automation for SMBs","description":"Empower your small business with affordable custom software. Eliminate repetitive Excel tasks, automate customer follow-ups and streamline operations.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const SMB_FAQS = [
  {
    "question": "Why does a small business need a modern website in 2026?",
    "answer": "More than 85% of local customers research online before they buy. A fast, professional website builds trust and helps turn local searches into customers."
  },
  {
    "question": "How do your solutions fit a small business budget?",
    "answer": "Our fixed-price packages have no surprise fees. They give small businesses access to high-quality web tools at affordable rates."
  },
  {
    "question": "Can you help our business appear near the top of local search results?",
    "answer": "Yes. Our Local SEO (search engine optimization) services improve your Google Business Profile and local search terms to help your business appear in the top three Google Maps results."
  },
  {
    "question": "Can we update our website content ourselves?",
    "answer": "Yes. Our easy-to-use CMS (content management system) lets you update services, post news, and change photos without hiring a developer."
  },
  {
    "question": "How soon can you launch a small business website?",
    "answer": "We usually launch small business websites in 2 to 3 weeks."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Software and Automation for Small Businesses</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Growing businesses may outgrow spreadsheets, while large business software can be costly and hard to use. We build affordable custom software that handles repetitive work without expensive enterprise licenses.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Custom Software and Automation to Help Small Businesses Grow</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Replace Spreadsheets</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic Customer Follow-Up</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Assign Jobs and Tasks</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Clear, Fixed Project Costs</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Replace Spreadsheets</h3><p className="mt-2 text-sm leading-6 text-stone-600">Replace error-prone Excel sheets with secure websites and databases.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic Customer Follow-Up</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automated WhatsApp, SMS, and email messages follow up with potential customers.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Assign Jobs and Tasks</h3><p className="mt-2 text-sm leading-6 text-stone-600">Schedule technicians, orders, and deliveries on mobile-friendly tools.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Clear, Fixed Project Costs</h3><p className="mt-2 text-sm leading-6 text-stone-600">Clear project plans designed to show value within 90 days.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Small Business FAQs"
        subtitle="Answers to common questions about small business technology and our projects."
        faqs={SMB_FAQS}
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


