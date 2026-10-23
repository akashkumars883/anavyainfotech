import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Customer Portal Development | Secure B2B Client Portals",
  description: "Build secure, self-service customer portals that cut support tickets by 60%. Real-time document sharing, payment processing and automated ticketing on Next.js.",
  keywords: ["custom customer portal development","B2B client portal software"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/customer-portals" },
  openGraph: { title: "Custom Customer Portal Development | Secure B2B Client Portals | Anavya Infotech", description: "Build secure, self-service customer portals that cut support tickets by 60%. Real-time document sharing, payment processing and automated ticketing on Next.js.", url: "https://www.anavyainfotech.com/solutions/customer-portals", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Customer Portals & Secure Client Dashboards","description":"Build secure, self-service customer portals that cut support tickets by 60%. Real-time document sharing, payment processing and automated ticketing on Next.js.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const CUSTOMER_PORTALS_FAQS = [
  {
    "question": "What is a custom customer portal?",
    "answer": "A customer portal is a secure web application where clients can log in to view project status, download invoices, submit tickets, and share files."
  },
  {
    "question": "How does a client portal improve operational efficiency?",
    "answer": "It reduces repetitive support emails by 60% by giving clients 24/7 self-service access to their account data and project deliverables."
  },
  {
    "question": "Can clients upload and sign documents securely inside the portal?",
    "answer": "Yes, we integrate secure file uploads, PDF previews, and electronic signature API connectors."
  },
  {
    "question": "Is the portal mobile-friendly for clients on the go?",
    "answer": "Yes, all customer portals are fully responsive and optimized for mobile devices, tablets, and desktop screens."
  },
  {
    "question": "How long does it take to build a custom client portal?",
    "answer": "Custom customer portals are delivered within 4 to 6 weeks depending on feature requirements."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Customer Portals", href: "/solutions/customer-portals" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Customer Portals & Secure Client Dashboards</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Manual email chains and PDF attachments create friction and slow customer support. We build responsive portals where clients can manage accounts, access encrypted documents, track milestones, and submit payments in real time.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Empower Your Clients: Custom Self-Service Customer Portals & Secure Dashboards</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Self-Service Account Management</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Encrypted Document Vault</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automated Ticketing & AI Chat</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Integrated Payment Portals</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Self-Service Account Management</h3><p className="mt-2 text-sm leading-6 text-stone-600">Profile control, team permissions, and notification settings.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Encrypted Document Vault</h3><p className="mt-2 text-sm leading-6 text-stone-600">Secure file access, statement generation, and digital signing.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automated Ticketing & AI Chat</h3><p className="mt-2 text-sm leading-6 text-stone-600">Real-time issue submission with AI escalation workflows.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Integrated Payment Portals</h3><p className="mt-2 text-sm leading-6 text-stone-600">Invoice access, card payments, and receipt generation.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Customer Portals FAQs"
        subtitle="Common questions about customer portals technology and project delivery."
        faqs={CUSTOMER_PORTALS_FAQS}
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


