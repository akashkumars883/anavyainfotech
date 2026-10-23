import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Fintech Software Development Company | Banking & Loan Portals",
  description: "Build high-security fintech platforms, loan origination portals & payment integrations. Sub-24h loan underwriting automation, bank API syncing & PCI-DSS standards.",
  keywords: ["custom fintech software development company","financial software development services","banking portal development","loan origination software","automated underwriting platform","PCI-DSS compliant software"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/fintech-finance" },
  openGraph: { title: "Fintech Software Development Company | Banking & Loan Portals | Anavya Infotech", description: "Build high-security fintech platforms, loan origination portals & payment integrations. Sub-24h loan underwriting automation, bank API syncing & PCI-DSS standards.", url: "https://www.anavyainfotech.com/solutions/fintech-finance", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Fintech & Financial Software Development","description":"Build high-security fintech platforms, loan origination portals & payment integrations. Sub-24h loan underwriting automation, bank API syncing & PCI-DSS standards.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const FINTECH_FINANCE_FAQS = [
  {
    "question": "How does your team ensure software meets PCI-DSS requirements?",
    "answer": "We use tokenization so sensitive cardholder data does not pass into application database layers, alongside network isolation, encryption, and vulnerability tracking aligned with PCI-DSS controls."
  },
  {
    "question": "Can you integrate our solution with legacy banking backends?",
    "answer": "Yes. We build secure API and middleware layers for legacy core banking platforms, including protocol translation, token management, and continuous reconciliation."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "FinTech & Finance", href: "/solutions/fintech-finance" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Fintech & Financial Software Development</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Modern financial institutions need high-throughput software built for speed, security, and reliability. Consumers expect instant credit evaluations, frictionless payments, and real-time account visibility.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">High-Trust Fintech Engineering: Scalable Banking Portals & Automated Loan Workflows</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">As a custom fintech software development company, Anavya Infotech delivers financial applications that automate lending workflows, aggregate open banking data, and support rigorous compliance requirements.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automated Loan Origination & Underwriting</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Dynamic EMI Calculators & Credit Funnels</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Multi-Rail Payment Gateway Integration</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automated AML/KYC Verification</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">The Fintech Latency Dilemma: Modernizing Legacy Systems and Underwriting Friction</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Manual underwriting and legacy banking frameworks slow service delivery, increase acquisition costs, and create avoidable friction for applicants.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Manual underwriting & drop-off</h3><p className="mt-2 text-sm leading-6 text-stone-600">Manual document collection and verification slows credit decisions. Multi-day turnaround can cause applicants to abandon onboarding.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Fraud and identity risk</h3><p className="mt-2 text-sm leading-6 text-stone-600">Financial platforms face identity spoofing, synthetic credentials, and account-takeover attempts. Outdated checks leave gaps.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Compliance overhead</h3><p className="mt-2 text-sm leading-6 text-stone-600">PCI-DSS, AML, and KYC controls require institutional-grade security and continuous audit evidence across systems.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Financial Software Capabilities</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Build reliable digital platforms for fintech disruptors and established financial institutions.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automated Loan Origination & Underwriting</h3><p className="mt-2 text-sm leading-6 text-stone-600">Streamline credit evaluation with configurable decision pipelines.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Ingest applicant financial data via open-banking APIs.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Apply customizable credit rules and decision trees.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Automate document checks with OCR and computer vision.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Dynamic EMI Calculators & Credit Funnels</h3><p className="mt-2 text-sm leading-6 text-stone-600">Give applicants real-time estimates and personalized loan terms.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Calculate amortization, interest, and repayment scenarios.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Use soft-credit checks in early assessment.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Offer pre-qualification in web and mobile funnels.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Multi-Rail Payment Gateway Integration</h3><p className="mt-2 text-sm leading-6 text-stone-600">Support secure, multi-currency payment routing.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Integrate Stripe, Plaid, Razorpay, UPI, and regional providers.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Route transactions to manage fees and authorization rates.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Reconcile platform transactions with bank ledgers.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automated AML/KYC Verification</h3><p className="mt-2 text-sm leading-6 text-stone-600">Protect onboarding with integrated identity and compliance workflows.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Document authentication, biometric matching, and liveness checks.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Screen sanctions, PEPs, and adverse-media watchlists.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Maintain audit logs for compliance reporting.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Security Architecture Matrix</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Security Layer</th><th scope="col" className="px-5 py-4 font-semibold">Implementation Mechanism</th><th scope="col" className="px-5 py-4 font-semibold">Compliance Impact</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">PCI-DSS Level 1</th><td className="px-5 py-4">Tokenized PAN, isolated cardholder environments, and HSM integration.</td><td className="px-5 py-4">Limits raw card-data exposure and simplifies audit scope.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Session Security & Auth</th><td className="px-5 py-4">Short-lived encrypted JWTs and hardware/TOTP MFA.</td><td className="px-5 py-4">Helps protect against account takeover and session attacks.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Data at Rest & Transit</th><td className="px-5 py-4">AES-256 storage encryption and TLS 1.3 for external APIs.</td><td className="px-5 py-4">Protects financial information in storage and transit.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Audit & Integrity Logs</th><td className="px-5 py-4">Append-only records for state changes and admin actions.</td><td className="px-5 py-4">Supports tamper-evident forensic and regulatory reviews.</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Zero-Trust Fintech Architecture</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Edge protection, tokenized identity, and auditable transaction services isolate sensitive payment data.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Fintech Edge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Web application firewall, bot protection, and rate limiting.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Tokenization & Auth</h3><p className="mt-2 text-sm leading-6 text-stone-600">OAuth2, hardware security modules, and encrypted short-lived tokens.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Core Engine</h3><p className="mt-2 text-sm leading-6 text-stone-600">Rules pipeline for underwriting and payment decisions.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Compliance Ledger</h3><p className="mt-2 text-sm leading-6 text-stone-600">Append-only audit storage for traceable state transitions.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Money Capital Finance Platform</h2><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">The Challenge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Money Capital Finance faced high drop-off on a legacy lending portal. Manual document processing pushed underwriting beyond five days.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Technical Solution</h3><p className="mt-2 text-sm leading-6 text-stone-600">We rebuilt the portal with a Next.js frontend and Python microservices, then integrated Plaid and OCR for bank-ledger validation and faster decisions.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Verified Results</h3><p className="mt-2 text-sm leading-6 text-stone-600">Qualified loan inquiry conversions increased by 38% within 90 days. Loan processing time fell from five days to under 24 hours. PCI-DSS and SOC-2 compliance achieved during security audits.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Fintech & Finance FAQs"
        subtitle="Common questions about fintech & finance technology and project delivery."
        faqs={FINTECH_FINANCE_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Schedule a Fintech Engineering Architecture Session
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Plan financial portals, secure payments, and automated lending workflows with our fintech engineers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Consult with Our Fintech Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


