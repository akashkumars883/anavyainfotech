import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Fintech Software for Banking and Loans",
  description: "Build secure financial platforms for loans and payments. Automate loan reviews in under 24 hours, connect bank APIs, and support PCI-DSS requirements.",
  keywords: ["custom fintech software development company","financial software development services","banking portal development","loan origination software","automated underwriting platform","PCI-DSS compliant software"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/fintech-finance" },
  openGraph: { title: "Fintech Software for Banking and Loans | Anavya Infotech", description: "Build secure financial platforms for loans and payments. Automate loan reviews in under 24 hours, connect bank APIs, and support PCI-DSS requirements.", url: "https://www.anavyainfotech.com/solutions/fintech-finance", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Fintech & Financial Software Development","description":"Build high-security fintech platforms, loan origination portals & payment integrations. Sub-24h loan underwriting automation, bank API syncing & PCI-DSS standards.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const FINTECH_FINANCE_FAQS = [
  {
    "question": "How do you help software meet PCI-DSS requirements?",
    "answer": "We use tokenization so full card details do not enter the application database. We also separate the network, encrypt data, and track security issues in line with PCI-DSS controls."
  },
  {
    "question": "Can you connect software to older banking systems?",
    "answer": "Yes. We add secure APIs and middleware to connect to older core banking platforms. This can convert data between protocols, manage tokens, and keep transactions reconciled."
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
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Financial institutions need software that is fast, secure, and reliable. Customers expect quick credit decisions, easy payments, and up-to-date account information.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Secure Banking Portals and Automatic Loan Workflows</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech builds financial apps that automate loan steps, bring together open banking data, and support strict compliance rules.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic Loan Applications and Reviews</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>EMI Calculators and Loan Application Steps</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Connect Multiple Payment Services</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic AML/KYC Checks</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">How Slow Systems and Loan Reviews Affect Fintech</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Manual loan reviews and older banking systems slow service, raise customer acquisition costs, and make the process harder for applicants.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Slow Loan Reviews and Abandoned Applications</h3><p className="mt-2 text-sm leading-6 text-stone-600">Collecting and checking documents by hand delays credit decisions. Applicants may give up if the process takes several days.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Fraud and identity risk</h3><p className="mt-2 text-sm leading-6 text-stone-600">Financial platforms face fake identities, false documents, and account theft. Older checks may miss these risks.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Compliance overhead</h3><p className="mt-2 text-sm leading-6 text-stone-600">PCI-DSS, AML, and KYC rules require strong security and ongoing records that show how systems meet the rules.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Financial Software Capabilities</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Build reliable digital tools for new fintech companies and established financial institutions.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic Loan Applications and Reviews</h3><p className="mt-2 text-sm leading-6 text-stone-600">Review credit applications with decision steps you can adjust.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Collect applicant financial data through open banking APIs.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Apply credit rules and decision steps that you can customize.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Use OCR and computer vision to check documents automatically.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">EMI Calculators and Loan Application Steps</h3><p className="mt-2 text-sm leading-6 text-stone-600">Give applicants quick estimates and loan terms based on their needs.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Show how interest and repayment amounts change over time.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Use credit checks that do not affect credit scores during early reviews.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Let people check if they may qualify through web and mobile applications.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Connect Multiple Payment Services</h3><p className="mt-2 text-sm leading-6 text-stone-600">Route payments securely and support different currencies.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Integrate Stripe, Plaid, Razorpay, UPI, and regional providers.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Choose where to send payments to manage fees and approval rates.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Match platform transactions with bank records.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic AML/KYC Checks</h3><p className="mt-2 text-sm leading-6 text-stone-600">Help verify identities and meet compliance rules during sign-up.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Check documents, match biometric details, and confirm a real person is present.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Check sanctions lists, politically exposed persons (PEPs), and negative news sources.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Maintain audit logs for compliance reporting.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Security Overview</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Security Area</th><th scope="col" className="px-5 py-4 font-semibold">How It Works</th><th scope="col" className="px-5 py-4 font-semibold">How It Helps</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">PCI-DSS Level 1</th><td className="px-5 py-4">Tokenized card numbers, separate card-data systems, and hardware security module (HSM) integration.</td><td className="px-5 py-4">Reduces exposure of card details and can simplify audits.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Session Security & Auth</th><td className="px-5 py-4">Short-lived encrypted JWTs and MFA using hardware keys or one-time codes.</td><td className="px-5 py-4">Helps prevent account theft and attacks on active sessions.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Data at Rest & Transit</th><td className="px-5 py-4">AES-256 encryption for stored data and TLS 1.3 for external API connections.</td><td className="px-5 py-4">Protects financial information when stored and sent.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Audit & Integrity Logs</th><td className="px-5 py-4">Records of system and administrator changes that cannot be overwritten.</td><td className="px-5 py-4">Helps reviewers check records for changes during investigations and audits.</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">How We Protect Fintech Systems</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Network protection, tokenized identities, and traceable payment services help keep sensitive payment data separate.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Fintech Edge</h3><p className="mt-2 text-sm leading-6 text-stone-600">A web application firewall, bot protection, and limits on repeated requests.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Tokenization & Auth</h3><p className="mt-2 text-sm leading-6 text-stone-600">OAuth2, hardware security modules, and encrypted tokens that expire quickly.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Core Engine</h3><p className="mt-2 text-sm leading-6 text-stone-600">A set of rules for loan reviews and payment decisions.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Compliance Ledger</h3><p className="mt-2 text-sm leading-6 text-stone-600">Audit records that cannot be overwritten, so changes can be tracked.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Case Study: Money Capital Finance Platform</h2><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">The Challenge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Money Capital Finance lost many applicants on its old loan website. Checking documents by hand made loan reviews take more than five days.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Technical Solution</h3><p className="mt-2 text-sm leading-6 text-stone-600">We rebuilt the portal with Next.js and Python services, then added Plaid and OCR to check bank records and speed up decisions.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Verified Results</h3><p className="mt-2 text-sm leading-6 text-stone-600">Qualified loan inquiries that became applications rose 38% in 90 days. Processing time fell from five days to under 24 hours. Security audits confirmed PCI-DSS and SOC 2 compliance.</p></article></div></div></section>

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
                Plan Your Fintech Software Project
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our fintech engineers about financial portals, secure payments, and automatic loan processes.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Talk with Our Fintech Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

