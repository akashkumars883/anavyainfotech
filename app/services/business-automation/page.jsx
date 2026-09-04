import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Shield } from "lucide-react";

export const metadata = {
  title: "Enterprise Business Process Automation & Workflow Engineering",
  description:
    "Eliminate manual operational bottlenecks with custom workflow automation, RPA pipelines, CRM integrations, and data sync from Anavya Infotech.",
  keywords: [
    "business process automation",
    "workflow automation services",
    "enterprise RPA development",
    "workflow optimization",
    "automated data sync",
    "custom integration scripts",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/business-automation",
  },
  openGraph: {
    title: "Enterprise Business Process Automation & Workflow Engineering",
    description:
      "Eliminate manual operational bottlenecks with custom workflow automation, RPA pipelines, CRM integrations, and data sync from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/business-automation",
    type: "website",
  },
};



const BUSINESS_AUTOMATION_FAQS = [
  {
    "question": "What tools can you automate/integrate with?",
    "answer": "Most CRMs, WhatsApp Business API, Google Sheets, email platforms, payment gateways, and custom internal tools via API."
  },
  {
    "question": "Do I need technical staff to maintain this after launch?",
    "answer": "No — we document everything and design workflows your existing team can manage without a developer."
  },
  {
    "question": "What's a typical ROI timeline for business automation?",
    "answer": "Most clients see measurable time savings within the first month, with compounding value as the automated workflow scales with your business."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Business Process Automation Services",
  description: "Automate repetitive operations — lead routing, follow-ups, reporting & workflows — with custom business automation from Anavya Infotech, India & USA.",
  slug: "business-automation",
  faqs: BUSINESS_AUTOMATION_FAQS,
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
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Business Automation", href: "/services/business-automation" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Services / Business Automation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Business Automation That Removes Manual Work From Your Operations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Every hour your team spends manually copying leads between spreadsheets, sending the same follow-up messages, or compiling reports by hand is an hour not spent on customers or growth. Anavya Infotech designs custom business automation systems — connecting your tools, forms, CRM, and messaging into workflows that run themselves.
          </p>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why It Matters
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Automation isn&apos;t just about saving time — it removes the human error that comes with repetitive manual work (a missed follow-up, a lead that never got entered into the CRM, a report sent a day late). For growing businesses, that reliability compounds directly into revenue.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Workflow audit to identify your highest-impact automation opportunities</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Lead routing and follow-up automation (form → CRM → WhatsApp/email sequence)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Internal reporting automation (auto-generated dashboards instead of manual reports)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>API integrations connecting your existing tools (CRM, payment, inventory, messaging)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Custom scripts/automations for business-specific repetitive tasks</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Documentation and training so your team can manage the system</span>
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
              <h3 className="text-base font-medium text-stone-900">Map Workflows</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map current manual workflows and bottlenecks.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Design System</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Design the automated workflow and required integrations.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Build & Connect</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, test, and connect to your existing tools.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Train & Monitor</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Train your team and monitor performance post-launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Business Automation FAQs"
        subtitle="Frequently asked questions about Business Process Automation."
        faqs={BUSINESS_AUTOMATION_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Automate Your Operations
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Streamline operations and focus your team on revenue growth with Anavya Infotech.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Automate Your Operations →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
