import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise Software Development & Legacy Modernization | Anavya Infotech",
  description: "Modernize legacy enterprise software and eliminate technical debt. Decouple monoliths into high-throughput microservices on Next.js, Node.js and AWS cloud.",
  keywords: ["enterprise software development company","legacy system modernization services"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/enterprise" },
  openGraph: { title: "Enterprise Software Development & Legacy Modernization | Anavya Infotech", description: "Modernize legacy enterprise software and eliminate technical debt. Decouple monoliths into high-throughput microservices on Next.js, Node.js and AWS cloud.", url: "https://www.anavyainfotech.com/solutions/enterprise", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Enterprise Digital Transformation & Legacy Modernization","description":"Modernize legacy enterprise software and eliminate technical debt. Decouple monoliths into high-throughput microservices on Next.js, Node.js and AWS cloud.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const ENTERPRISE_FAQS = [
  {
    "question": "What enterprise software solutions does Anavya Infotech build?",
    "answer": "We engineer custom ERP modules, enterprise CRMs, automated data pipelines, legacy system migrations, and cloud SaaS architectures."
  },
  {
    "question": "How do you ensure enterprise-grade security and compliance?",
    "answer": "We follow SOC2 principles, OWASP guidelines, ISO standards, end-to-end data encryption, and role-based access control (RBAC)."
  },
  {
    "question": "Can you integrate with our existing SAP, Oracle, or Microsoft systems?",
    "answer": "Yes, we build robust enterprise API bridges and middleware to sync with SAP, Oracle, Salesforce, and legacy mainframes."
  },
  {
    "question": "Do you offer SLA agreements for 24/7 technical support?",
    "answer": "Yes, we provide formal Service Level Agreements (SLAs) guaranteeing 99.9% uptime and 24/7 priority emergency support."
  },
  {
    "question": "What is your enterprise engagement model?",
    "answer": "We offer dedicated team retainers, fixed-price milestone sprints, and augmented staff models tailored to enterprise procurement."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Enterprise Solutions", href: "/solutions/enterprise" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Enterprise Digital Transformation & Legacy Modernization</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Legacy enterprise software can trap organizations in technical debt, with significant IT budgets spent maintaining brittle monolithic systems. Anavya Infotech modernizes mission-critical platforms through gradual service extraction and cloud-native engineering.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Unshackle Enterprise Growth: Legacy Modernization & High-Throughput Cloud Engineering</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Monolith to Microservices</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Headless API Orchestration</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Cloud-Native Replatforming</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Enterprise Data Warehousing</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Monolith to Microservices</h3><p className="mt-2 text-sm leading-6 text-stone-600">Extract services incrementally to modernize systems while managing migration risk.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Headless API Orchestration</h3><p className="mt-2 text-sm leading-6 text-stone-600">Modernize user-facing layers while protecting core database workflows.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Cloud-Native Replatforming</h3><p className="mt-2 text-sm leading-6 text-stone-600">Move on-premise infrastructure to auto-scaling AWS environments.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Enterprise Data Warehousing</h3><p className="mt-2 text-sm leading-6 text-stone-600">Unify disconnected databases in centralized, encrypted data platforms.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Enterprise Solutions FAQs"
        subtitle="Common questions about enterprise solutions technology and project delivery."
        faqs={ENTERPRISE_FAQS}
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


