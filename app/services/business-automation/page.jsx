import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Shield } from "lucide-react";

export const metadata = {
  title: "Business Workflow Automation & API Integration Services | Anavya Infotech",
  description: "Automate repetitive manual workflows and connect disparate cloud systems with enterprise API integrations. Cut manual busywork by 80% with resilient webhooks.",
  keywords: ["business automation services","enterprise api integration company","workflow automation solutions","custom api integration services","webhook automation","business process automation"],
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
    "question": "What makes custom API integrations superior to no-code tools like Zapier?",
    "answer": "Custom API integrations handle complex data structures, enforce idempotency, support high concurrency without per-task cost penalties, and provide detailed error handling and observability."
  },
  {
    "question": "How do custom API integrations handle third-party service outages?",
    "answer": "Our integrations utilize resilient queue workers (BullMQ/Celery) with exponential backoff retries and dead-letter queues (DLQ). If an external endpoint goes offline, payloads are securely queued and retried automatically once service is restored."
  },
  {
    "question": "How quickly can an enterprise automation pipeline be deployed?",
    "answer": "Standard point-to-point API integrations launch in 1 to 2 weeks. Complex multi-system enterprise automation pipelines featuring custom data transformations and audit dashboards typically deploy in 4 to 6 weeks."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Business Process Automation Services",
  description: "Automate repetitive manual workflows and connect disparate cloud systems with enterprise API integrations. Cut manual busywork by 80% with resilient webhooks.",
  slug: "business-automation",
  faqs: BUSINESS_AUTOMATION_FAQS,
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left service-page" data-service="business-automation">
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
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Every hour your team spends manually copying leads between spreadsheets, sending the same follow-up messages, or compiling reports by hand is an hour not spent on customers or growth. Anavya Infotech designs custom business automation systems — connecting your tools, forms, CRM, and messaging into workflows that run themselves.
          </p>
        </div>
      </section>
{/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Eliminate Manual Bottlenecks: Enterprise Workflow Automation &amp; Resilient API Integrations</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Disconnected software applications force operational teams into manual data entry, CSV file uploads, and repetitive processing tasks. These manual workarounds slow execution speed, create sync errors, and divert engineering bandwidth away from core business goals.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">At Anavya Infotech, our business automation services and enterprise API integrations connect your software systems, automate manual workflows, and build resilient data pipelines that operate 24/7 without human intervention.</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The Human Error Cost: How Disconnected Systems Drain Enterprise Productivity</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Relying on manual operational workflows introduces cumulative business risks:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="High Operational Overhead" /><span><strong className="text-stone-900">High Operational Overhead:</strong> Skilled employees spend significant hours on manual copy-pasting across disparate CRMs, ERPs, and billing tools.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Data Sync Delays &amp; Human Error" /><span><strong className="text-stone-900">Data Sync Delays &amp; Human Error:</strong> Manual data transfer leads to missing records, incorrect billing addresses, and delayed fulfillment requests.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Brittle No-Code Integrations" /><span><strong className="text-stone-900">Brittle No-Code Integrations:</strong> Basic Zapier or Make scenarios lack error handling and fail silently when third-party API payload structures change.</span></div></div></div></div></section>
<section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">01</span>
              <h3 className="text-base font-medium text-stone-900">Map Workflows</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map current manual workflows and bottlenecks.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">02</span>
              <h3 className="text-base font-medium text-stone-900">Design System</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Design the automated workflow and required integrations.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">03</span>
              <h3 className="text-base font-medium text-stone-900">Build & Connect</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, test, and connect to your existing tools.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">04</span>
              <h3 className="text-base font-medium text-stone-900">Train & Monitor</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Train your team and monitor performance post-launch.</p>
            </div>
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Core Automation Disciplines We Deploy</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We engineer resilient backend automation pipelines using production-grade middleware:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Multi-System ERP &amp; CRM Syncing" /><span><strong className="text-stone-900">Multi-System ERP &amp; CRM Syncing:</strong> Bi-directional data sync connecting Salesforce, HubSpot, SAP, NetSuite, and custom SQL databases.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automated Payment Reconciliation Pipelines" /><span><strong className="text-stone-900">Automated Payment Reconciliation Pipelines:</strong> Automated processing matching Stripe, PayPal, and bank transactions directly with internal accounting ledgers.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Event-Driven Webhook Architecture" /><span><strong className="text-stone-900">Event-Driven Webhook Architecture:</strong> High-speed message queues processing real-time system events with sub-50ms API delivery.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Autonomous Data Extraction &amp; ETL Workflows" /><span><strong className="text-stone-900">Autonomous Data Extraction &amp; ETL Workflows:</strong> Automated document parsing extracting invoice and PDF data into structured JSON databases.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Architecture Reliability Standards</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Our integration engineers apply fault-tolerant patterns to guarantee operational stability across high-volume pipelines:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Queue Workers (Celery / BullMQ)" /><span><strong className="text-stone-900">Queue Workers (Celery / BullMQ):</strong> Distributed task queues isolate execution loads, preventing server degradation during traffic spikes.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Idempotency Key Safeguards" /><span><strong className="text-stone-900">Idempotency Key Safeguards:</strong> Every API request includes unique idempotency keys to prevent duplicate transactions or double billing.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automatic Exponential Backoff Retries" /><span><strong className="text-stone-900">Automatic Exponential Backoff Retries:</strong> Transient third-party API failures automatically trigger retry attempts with exponential delays, logging alerts for engineering oversight.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="End-to-End Audit Trail Logging" /><span><strong className="text-stone-900">End-to-End Audit Trail Logging:</strong> Every event payload, API status code, and timing record is logged in centralized observability dashboards (Datadog / OpenTelemetry).</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Automated Message Ingestion Pipeline for Automixa AI</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Need" /><span><strong className="text-stone-900">Client Need:</strong> Automixa AI needed an event-driven automation engine to process high-volume social media DMs and comment webhooks for over 10,000 active creators.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Engineering Solution" /><span><strong className="text-stone-900">Engineering Solution:</strong> Anavya Infotech built a asynchronous message queue architecture using Python, FastHTML, Redis, and Qdrant vector databases with automatic retry error handling.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Results" /><span><strong className="text-stone-900">Measured Results:</strong> Achieved stable sub-50ms processing latency across millions of monthly events, reduced operational support tickets by 68%, and maintained 99.9% uptime.</span></div></div></div></div></section>

      {/* Process Section */}
      

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

