import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Code } from "lucide-react";

export const metadata = {
  title: "Custom CRM & Business Software Development | Anavya Infotech",
  description: "Replace rigid off-the-shelf software with a custom CRM built for your exact business workflows. Zero per-user monthly licensing fees, full data ownership & custom APIs.",
  keywords: ["custom crm development company","custom business software development","bespoke enterprise crm","internal workflow automation software","custom erp development","tailor-made crm system"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/crm-custom-software",
  },
  openGraph: {
    title: "Custom CRM Development & Enterprise ERP Software Engineering",
    description:
      "Build custom CRM software, internal ERP portals, and tailored enterprise software systems engineered for security and scale by Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/crm-custom-software",
    type: "website",
  },
};

const CRM_CUSTOM_SOFTWARE_FAQS = [
  {
    "question": "Why build a custom CRM instead of subscribing to Salesforce or HubSpot?",
    "answer": "A custom CRM aligns 100% with your business operations, eliminates recurring per-seat licensing fees, guarantees full data ownership, and scales without artificial software limits or feature lockouts."
  },
  {
    "question": "How do you ensure data security in a custom CRM solution?",
    "answer": "We implement SOC-2 compliant encryption protocols (AES-256 for data at rest, TLS 1.3 in transit), strict Role-Based Access Control (RBAC), multi-factor authentication (MFA), and automated audit logs."
  },
  {
    "question": "Can a custom CRM integrate with our existing accounting and ERP software?",
    "answer": "Yes. We build custom RESTful and GraphQL API adapters to connect your custom CRM seamlessly with tools like QuickBooks, SAP, NetSuite, Stripe, and legacy internal databases."
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
    <main className="min-h-screen bg-white text-left service-page" data-service="crm-custom-software">
      {/* Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "CRM & Custom Software", href: "/services/crm-custom-software" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Services / Custom CRM Software
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Custom CRM Software Built Around How You Actually Sell
          </h1>
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Off-the-shelf CRMs force your sales process to fit their template. Anavya Infotech builds custom CRM and business software designed around your actual pipeline, your team&apos;s workflow, and the specific data you need to track — with none of the bloated features you&apos;ll never use.
          </p>
        </div>
      </section>
{/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Stop Paying Per-Seat Rent: Custom CRM Software Built Around How Your Business Actually Works</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Commercial CRM platforms often force businesses to alter operational workflows to match vendor template constraints. As user seats grow, recurring monthly licensing fees escalate quickly while critical customization requests remain locked behind expensive enterprise tiers.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech designs and builds custom enterprise CRM and internal operational software. We engineer tailored software solutions aligned directly with your workflows, delivering 100% intellectual property ownership without recurring per-seat licensing fees.</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The SaaS Trap: Hidden Costs, Feature Bloat, and Data Silos of Commercial CRMs</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Off-the-shelf CRM solutions like Salesforce and HubSpot introduce operational friction as organization size scales:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Escalating Per-User Licensing Fees" /><span><strong className="text-stone-900">Escalating Per-User Licensing Fees:</strong> Seat-based pricing models punish business growth, creating predictable cost increases year after year.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Unnecessary Interface Bloat" /><span><strong className="text-stone-900">Unnecessary Interface Bloat:</strong> Generic interfaces overwhelm operational staff with unused features, increasing onboarding friction and decreasing daily team adoption.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Restricted API Data Access" /><span><strong className="text-stone-900">Restricted API Data Access:</strong> Commercial SaaS platforms apply strict API rate limits, making custom internal system integrations difficult.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Vendor Data Ownership Controls" /><span><strong className="text-stone-900">Vendor Data Ownership Controls:</strong> Proprietary database formats restrict direct database access and complicate automated compliance reporting.</span></div></div></div></div></section>
<section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">01</span>
              <h3 className="text-base font-medium text-stone-900">Map Process</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map your current sales/operations process end-to-end.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">02</span>
              <h3 className="text-base font-medium text-stone-900">Schema & Design</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Design the CRM schema, dashboards, and workflow logic.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">03</span>
              <h3 className="text-base font-medium text-stone-900">Build & Integrate</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, integrate with existing tools, and test with your team.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">04</span>
              <h3 className="text-base font-medium text-stone-900">Launch & Train</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Launch, train your team, and iterate based on real usage.</p>
            </div>
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Core Custom CRM Capabilities We Deliver</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We build modular internal software tailored to your exact operational specifications:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automated Lead &amp; Deal Pipeline Triage" /><span><strong className="text-stone-900">Automated Lead &amp; Deal Pipeline Triage:</strong> Custom lead assignment logic based on geography, lead score, rep availability, and deal capacity.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Granular Role-Based Access Control (RBAC)" /><span><strong className="text-stone-900">Granular Role-Based Access Control (RBAC):</strong> Enterprise-level permission management ensuring data visibility is strictly configured by team roles and management tiers.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Real-Time Operational Dashboards" /><span><strong className="text-stone-900">Real-Time Operational Dashboards:</strong> Customized reporting interfaces delivering real-time revenue analytics, team efficiency metrics, and inventory forecasting.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automated Document &amp; PDF Invoicing Engine" /><span><strong className="text-stone-900">Automated Document &amp; PDF Invoicing Engine:</strong> Instant generation of quotes, contracts, and invoices integrated with e-signature and payment collection webhooks.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Financial ROI &amp; Cost Comparison: Off-the-Shelf SaaS vs. Anavya Custom CRM</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Cost Model Metric" /><span>Cost Model Metric</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Commercial SaaS CRM (e.g., Salesforce Tier)" /><span>Commercial SaaS CRM (e.g., Salesforce Tier)</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Anavya Custom Developed CRM" /><span>Anavya Custom Developed CRM</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Licensing Fees (100 Users)" /><span>Licensing Fees (100 Users)</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="$150/user/mo = $180,000 / year" /><span>$150/user/mo = $180,000 / year</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="$0 / month (Zero per-seat licensing fees)" /><span>$0 / month (Zero per-seat licensing fees)</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="3-Year Operational Cost" /><span>3-Year Operational Cost</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="$540,000+ (plus annual rate increases)" /><span>$540,000+ (plus annual rate increases)</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="One-time build cost + minimal cloud hosting" /><span>One-time build cost + minimal cloud hosting</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Software Customization" /><span>Software Customization</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Expensive third-party consultant retainers" /><span>Expensive third-party consultant retainers</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Direct codebase edits &amp; feature additions" /><span>Direct codebase edits &amp; feature additions</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Data &amp; IP Ownership" /><span>Data &amp; IP Ownership</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Vendor locked proprietary data structures" /><span>Vendor locked proprietary data structures</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="100% Client IP and direct database ownership" /><span>100% Client IP and direct database ownership</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="API &amp; System Integration" /><span>API &amp; System Integration</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Rate-limited REST API endpoints" /><span>Rate-limited REST API endpoints</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Unlimited custom internal API webhooks" /><span>Unlimited custom internal API webhooks</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Workflow Modernization for Money Capital Finance</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Profile" /><span><strong className="text-stone-900">Client Profile:</strong> Fast-growing financial services firm managing high-volume loan applications.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Operational Challenge" /><span><strong className="text-stone-900">Operational Challenge:</strong> Outgrown generic CRM software could not automate complex loan qualification workflows, causing manual entry delays and data sync errors.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Custom Solution" /><span><strong className="text-stone-900">Custom Solution:</strong> Anavya Infotech engineered a custom internal portal with automated document verification webhooks, credit scoring engine APIs, and PostgreSQL database storage.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Results" /><span><strong className="text-stone-900">Measured Results:</strong> Loan processing time dropped from 72 hours to under 24 hours, operational throughput increased by 38%, and the firm eliminated $120,000 in annual software licensing expenses.</span></div></div></div></div></section>

      {/* Process Section */}
      

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
              Build Your Custom CRM →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

