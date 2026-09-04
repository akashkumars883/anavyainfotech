import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Code } from "lucide-react";

export const metadata = {
  title: "Custom CRM Development & Enterprise ERP Software Engineering",
  description:
    "Build custom CRM software, internal ERP portals, and tailored enterprise software systems engineered for security and scale by Anavya Infotech.",
  keywords: [
    "custom CRM development",
    "enterprise ERP software",
    "custom business software",
    "internal tools development",
    "CRM software development company",
    "tailored enterprise dashboards",
  ],
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
    "question": "Is a custom CRM more expensive than something like a standard SaaS CRM?",
    "answer": "Upfront cost is typically higher, but there's no recurring per-seat licensing — for growing teams, custom software often becomes cheaper over 2–3 years while fitting your process exactly."
  },
  {
    "question": "Can you migrate our data from our current CRM/spreadsheets?",
    "answer": "Yes, data migration is part of our standard CRM build process."
  },
  {
    "question": "Do you build CRMs for specific industries like real estate or finance?",
    "answer": "Yes — we've built custom CRM/portal systems for real estate (Nakul Properties) and fintech (Money Capital Finance); see Case Studies."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Custom CRM & Software Development Company",
  description: "Custom CRM software built around your actual sales process — not generic templates. CRM & business software development for India & USA companies.",
  slug: "crm-custom-software",
  faqs: CRM_CUSTOM_SOFTWARE_FAQS,
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left">
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
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Off-the-shelf CRMs force your sales process to fit their template. Anavya Infotech builds custom CRM and business software designed around your actual pipeline, your team&apos;s workflow, and the specific data you need to track — with none of the bloated features you&apos;ll never use.
          </p>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why Custom Beats Off-the-Shelf
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Generic CRMs like standard SaaS tools charge per seat and force workarounds for anything outside their template — which is why so many sales teams end up maintaining a CRM and a separate spreadsheet anyway. A custom CRM is built once around your real process, so your team actually uses it instead of working around it.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Code className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Custom sales pipeline and lead management built to your process</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Role-based dashboards for sales, support, and management</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Automated lead assignment, follow-up reminders, and status tracking</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Integration with WhatsApp, email, and your existing marketing tools</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Custom reporting and analytics specific to your KPIs</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Full data ownership — no per-seat licensing, no vendor lock-in</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 01</span>
              <h3 className="text-base font-medium text-stone-900">Map Process</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map your current sales/operations process end-to-end.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Schema & Design</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Design the CRM schema, dashboards, and workflow logic.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Build & Integrate</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, integrate with existing tools, and test with your team.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Launch & Train</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Launch, train your team, and iterate based on real usage.</p>
            </div>
          </div>
        </div>
      </section>

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
