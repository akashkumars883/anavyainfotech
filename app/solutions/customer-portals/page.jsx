import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Customer Portals | Secure Client Websites",
  description: "Build secure customer portals where clients can find documents, make payments, and get help. Real-time tools built with Next.js can reduce support tickets by 60%.",
  keywords: ["custom customer portal development","B2B client portal software"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/customer-portals" },
  openGraph: { title: "Custom Customer Portals | Secure Client Websites | Anavya Infotech", description: "Build secure customer portals where clients can find documents, make payments, and get help. Real-time tools built with Next.js can reduce support tickets by 60%.", url: "https://www.anavyainfotech.com/solutions/customer-portals", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Customer Portals & Secure Client Dashboards","description":"Build secure, self-service customer portals that cut support tickets by 60%. Real-time document sharing, payment processing and automated ticketing on Next.js.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const CUSTOMER_PORTALS_FAQS = [
  {
    "question": "What is a custom customer portal?",
    "answer": "A customer portal is a secure website where clients can sign in to check project progress, download invoices, send support requests, and share files."
  },
  {
    "question": "How does a customer portal make work easier?",
    "answer": "It can reduce repeated support emails by 60% by letting clients view their account information and project files at any time."
  },
  {
    "question": "Can clients safely upload and sign documents in the portal?",
    "answer": "Yes. We add secure file uploads, PDF previews, and API connections for electronic signatures."
  },
  {
    "question": "Can clients use the portal on their phones?",
    "answer": "Yes. Our customer portals work on phones, tablets, and computers."
  },
  {
    "question": "How long does it take to build a customer portal?",
    "answer": "We usually build a customer portal in 4 to 6 weeks, depending on the features you need."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Secure Customer Portals</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Long email chains and PDF attachments slow down customer support. We build mobile-friendly portals where clients can manage accounts, view protected documents, track progress, and make payments in real time.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Give Your Clients Secure, Easy-to-Use Portals</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Manage Accounts Online</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Secure Document Storage</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic Support Requests and AI Chat</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Online Payments</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Manage Accounts Online</h3><p className="mt-2 text-sm leading-6 text-stone-600">Update profiles, set team access, and choose notification settings.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Secure Document Storage</h3><p className="mt-2 text-sm leading-6 text-stone-600">View files securely, create statements, and sign documents online.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic Support Requests and AI Chat</h3><p className="mt-2 text-sm leading-6 text-stone-600">Send support requests right away. AI can direct complex issues to the right team.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Online Payments</h3><p className="mt-2 text-sm leading-6 text-stone-600">View invoices, pay by card, and download receipts.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Customer Portal FAQs"
        subtitle="Answers to common questions about customer portal tools and our projects."
        faqs={CUSTOMER_PORTALS_FAQS}
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


