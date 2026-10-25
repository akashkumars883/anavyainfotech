import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export const metadata = {
  title: "Custom CRM & Business Software | Anavya Infotech",
  description: "Get a custom CRM that fits your business. Keep control of your data, connect your tools with APIs, and avoid monthly per-user fees.",
  keywords: ["custom crm development company","custom business software development","bespoke enterprise crm","internal workflow automation software","custom erp development","tailor-made crm system"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/crm-custom-software",
  },
  openGraph: {
    title: "Custom CRM & Business Software | Anavya Infotech",
    description:
      "Build a custom CRM, ERP portal, or business software designed to fit your needs, with security and room to grow.",
    url: "https://www.anavyainfotech.com/services/crm-custom-software",
    type: "website",
  },
};

const CRM_CUSTOM_SOFTWARE_FAQS = [
  {
    "question": "Why choose a custom CRM instead of Salesforce or HubSpot?",
    "answer": "A custom CRM can match the way your business works, avoid recurring per-user fees, and give you control of your data. You can also add features as your needs change."
  },
  {
    "question": "How do you ensure data security in a custom CRM solution?",
    "answer": "We use encryption, role-based access, multi-factor authentication, and automatic audit logs to help protect your data. Our setup includes AES-256 encryption for stored data, TLS 1.3 for data in transit, and SOC 2-aligned controls."
  },
  {
    "question": "Can a custom CRM integrate with our existing accounting and ERP software?",
    "answer": "Yes. We can connect your custom CRM to tools such as QuickBooks, SAP, NetSuite, Stripe, and older internal databases using REST and GraphQL APIs."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Custom CRM & Software Development Company",
  description: "Replace rigid off-the-shelf software with a custom CRM built for your exact business workflows. Zero per-user monthly licensing fees, full data ownership & custom APIs.",
  slug: "crm-custom-software",
  faqs: CRM_CUSTOM_SOFTWARE_FAQS,
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="crm-custom-software">
      {/* Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "CRM & Custom Software", href: "/services/crm-custom-software" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Code className="h-3.5 w-3.5 text-blue-700" /> Custom CRM Software Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom CRM Software That Fits the Way You Sell
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Ready-made CRMs can force you to change how you sell to fit their setup. Anavya Infotech builds CRM and business software around your sales process, your team&apos;s work, and the information you need to track—without features you do not need.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Discuss Your CRM Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/development-illustration.jpg"
              alt="Custom CRM Development Services"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Custom CRM Software for Your Business</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Some CRM platforms ask businesses to change their processes to match the software. Monthly fees can also rise as more people use the system, while some custom features are only available on expensive plans.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech builds custom CRM and internal business software around your workflows. You own the software and data, with no recurring per-user licensing fees.</p></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Common Problems With Ready-Made CRMs</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Ready-made CRMs such as Salesforce and HubSpot can create problems as your business grows:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Rising Per-User Fees" /><span><strong className="text-stone-900">Rising Per-User Fees:</strong> Monthly fees can rise each year as you add more users.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Too Many Unused Features" /><span><strong className="text-stone-900">Too Many Unused Features:</strong> Generic screens can overwhelm your team with features they do not need, making the system harder to learn and use.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Limited API Access" /><span><strong className="text-stone-900">Limited API Access:</strong> Some SaaS tools limit how often you can access their APIs, making it harder to connect them with your other systems.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Limits on Data Access" /><span><strong className="text-stone-900">Limits on Data Access:</strong> Some software providers limit direct access to your data, making it harder to create compliance reports.</span></div></div></div></div></section>

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">01</div>
              <h3 className="text-lg font-semibold text-stone-900">Map Process</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map your current sales/operations process end-to-end.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">02</div>
              <h3 className="text-lg font-semibold text-stone-900">Plan the Data and Design</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Plan how the CRM stores information, displays reports, and handles tasks.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">03</div>
              <h3 className="text-lg font-semibold text-stone-900">Build & Integrate</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, integrate with existing tools, and test with your team.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">04</div>
              <h3 className="text-lg font-semibold text-stone-900">Launch & Train</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Launch, train your team, and iterate based on real usage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Features We Can Build Into Your CRM</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We build business software to fit the way your company works:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Assign Leads and Sales Deals" /><span><strong className="text-stone-900">Automated Lead &amp; Deal Pipeline Triage:</strong> Assign leads based on location, interest level, salesperson availability, and workload.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Access Based on User Roles (RBAC)" /><span><strong className="text-stone-900">Access Based on User Roles (RBAC):</strong> Choose which information each person can see based on their role and responsibilities.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Live Business Dashboards" /><span><strong className="text-stone-900">Live Business Dashboards:</strong> See sales, team activity, and expected inventory needs in one place.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Create Quotes and Invoices Automatically" /><span><strong className="text-stone-900">Automated Document &amp; PDF Invoicing Engine:</strong> Create quotes, contracts, and invoices, and connect them to e-signature and payment tools.</span></div></div></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Workflow Modernization for Money Capital Finance</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Profile" /><span><strong className="text-stone-900">Client Profile:</strong> Fast-growing financial services firm managing high-volume loan applications.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Operational Challenge" /><span><strong className="text-stone-900">Operational Challenge:</strong> Outgrown generic CRM software could not automate complex loan qualification workflows, causing manual entry delays and data sync errors.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Custom Solution" /><span><strong className="text-stone-900">Custom Solution:</strong> Anavya Infotech engineered a custom internal portal with automated document verification webhooks, credit scoring engine APIs, and PostgreSQL database storage.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Results" /><span><strong className="text-stone-900">Measured Results:</strong> Loan processing time dropped from 72 hours to under 24 hours, operational throughput increased by 38%, and the firm eliminated $120,000 in annual software licensing expenses.</span></div></div></div></div></section>

      {/* FAQ Section */}
      <FaqSection
        title="Custom CRM FAQs"
        subtitle="Frequently asked questions about Custom CRM software."
        faqs={CRM_CUSTOM_SOFTWARE_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build Your Custom CRM
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Empower your sales and operations team with a CRM built specifically for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Build Your Custom CRM <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
