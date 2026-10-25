import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise Software and Legacy System Updates | Anavya Infotech",
  description: "Update older business software and reduce the cost of maintaining it. Break large systems into smaller services using Next.js, Node.js, and AWS.",
  keywords: ["enterprise software development company","legacy system modernization services"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/enterprise" },
  openGraph: { title: "Enterprise Software and Legacy System Updates | Anavya Infotech", description: "Update older business software and reduce the cost of maintaining it. Break large systems into smaller services using Next.js, Node.js, and AWS.", url: "https://www.anavyainfotech.com/solutions/enterprise", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Enterprise Digital Transformation & Legacy Modernization","description":"Modernize legacy enterprise software and eliminate technical debt. Decouple monoliths into high-throughput microservices on Next.js, Node.js and AWS cloud.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const ENTERPRISE_FAQS = [
  {
    "question": "What enterprise software solutions does Anavya Infotech build?",
    "answer": "We build custom ERP modules, enterprise CRMs, automatic data connections, older system upgrades, and cloud SaaS platforms."
  },
  {
    "question": "How do you protect data and meet security requirements?",
    "answer": "We follow SOC 2 principles, OWASP guidelines, and ISO standards. We also encrypt data and limit access based on each user?s role (RBAC)."
  },
  {
    "question": "Can you connect to our SAP, Oracle, or Microsoft systems?",
    "answer": "Yes. We build API connections and software bridges to share data with SAP, Oracle, Salesforce, and older mainframe computers."
  },
  {
    "question": "Do you offer 24/7 support agreements?",
    "answer": "Yes. Our Service Level Agreements (SLAs) promise 99.9% uptime and priority emergency support at any time."
  },
  {
    "question": "How can our enterprise work with your team?",
    "answer": "We offer dedicated teams, fixed-price project stages, or extra staff to support your team. We can fit these plans to your purchasing process."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Modernize Business Software and Older Systems</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Older business software can be costly to maintain, especially when many parts are tied together. Anavya Infotech updates important systems by moving parts one at a time to modern cloud services.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Update Older Systems and Support Business Growth</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Break One Large System into Smaller Services</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Connect Services Through APIs</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Move Systems to the Cloud</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Business Data Storage</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Break One Large System into Smaller Services</h3><p className="mt-2 text-sm leading-6 text-stone-600">Move parts of a large, connected system into separate services over time to reduce migration risk.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Connect Services Through APIs</h3><p className="mt-2 text-sm leading-6 text-stone-600">Update the parts people use while keeping important database processes working.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Move Systems to the Cloud</h3><p className="mt-2 text-sm leading-6 text-stone-600">Move systems from company servers to AWS, where capacity can grow as needed.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Business Data Storage</h3><p className="mt-2 text-sm leading-6 text-stone-600">Bring separate databases together in one protected data platform.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Enterprise Solutions FAQs"
        subtitle="Answers to common questions about enterprise software and our projects."
        faqs={ENTERPRISE_FAQS}
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


