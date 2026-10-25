import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Shield } from "lucide-react";

export const metadata = {
  title: "Business Automation & API Integration | Anavya Infotech",
  description: "Automate repetitive tasks and connect your cloud systems with reliable API integrations. Reduce manual work with automated workflows.",
  keywords: ["business automation services","enterprise api integration company","workflow automation solutions","custom api integration services","webhook automation","business process automation"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/business-automation",
  },
  openGraph: {
    title: "Business Automation & API Integration | Anavya Infotech",
    description:
      "Reduce manual work with custom automated workflows, CRM connections, and data sharing from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/business-automation",
    type: "website",
  },
};

const BUSINESS_AUTOMATION_FAQS = [
  {
    "question": "How are custom API integrations different from tools like Zapier?",
    "answer": "Custom API integrations can work with more complex data and large numbers of requests. They can also include detailed error reports and avoid costs based on each task."
  },
  {
    "question": "What happens if a connected service goes offline?",
    "answer": "Our integrations can safely save tasks in a queue and retry them after the service is restored. We use tools such as BullMQ and Celery to manage these retries."
  },
  {
    "question": "How soon can you set up business automation?",
    "answer": "A simple API connection usually takes 1 to 2 weeks. Automation that connects several systems and includes custom data changes and reporting usually takes 4 to 6 weeks."
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
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="business-automation">
      {/* Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Business Automation", href: "/services/business-automation" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Zap className="h-3.5 w-3.5 text-blue-700" /> Business Process Automation
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Automate Repetitive Work in Your Business
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              When your team copies leads between spreadsheets, sends repeated follow-up messages, or prepares reports by hand, they have less time for customers and growth. Anavya Infotech connects your tools, forms, CRM, and messaging in workflows that handle these tasks automatically.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Discuss Your Automation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/development-illustration.jpg"
              alt="Business Automation Services"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Connect Your Tools and Automate Repeated Tasks</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">When software does not share information, teams must enter data by hand, upload CSV files, and repeat the same tasks. This takes time, can cause mistakes, and keeps your team from other work.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech connects your software with APIs and automates routine tasks. We build reliable workflows that can run around the clock without someone managing each step.</p></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">How Disconnected Tools Waste Time</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Handling routine tasks by hand can cause problems for your business:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="High Operational Overhead" /><span><strong className="text-stone-900">Too Much Manual Work:</strong> Skilled employees spend hours copying information between CRMs, ERPs, and billing tools.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Data Sync Delays & Human Error" /><span><strong className="text-stone-900">Late or Incorrect Data:</strong> Moving data by hand can lead to missing records, wrong billing addresses, and late orders.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Brittle No-Code Integrations" /><span><strong className="text-stone-900">Basic Integrations Can Fail:</strong> Simple Zapier or Make workflows may stop working when a connected service changes its API data.</span></div></div></div></div></section>

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">01</div>
              <h3 className="text-lg font-semibold text-stone-900">Map Workflows</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map current manual workflows and bottlenecks.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">02</div>
              <h3 className="text-lg font-semibold text-stone-900">Plan the Workflow</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Plan the steps to automate and choose which tools to connect.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">03</div>
              <h3 className="text-lg font-semibold text-stone-900">Build & Connect</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, test, and connect to your existing tools.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">04</div>
              <h3 className="text-lg font-semibold text-stone-900">Show Your Team and Monitor</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Show your team how to use the system and check how it works after launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Automation Services We Provide</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We connect your business tools and automate common tasks:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Connect ERP and CRM Systems" /><span><strong className="text-stone-900">Connect ERP and CRM Systems:</strong> Share data between Salesforce, HubSpot, SAP, NetSuite, and your own SQL databases.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Match Payments Automatically" /><span><strong className="text-stone-900">Match Payments Automatically:</strong> Match Stripe, PayPal, and bank payments with your accounting records.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Live Updates with Webhooks" /><span><strong className="text-stone-900">Live Updates with Webhooks:</strong> Fast message queues handle updates from your systems in real time, with API responses under 50 ms.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Collect Data from Documents" /><span><strong className="text-stone-900">Collect Data from Documents:</strong> Read information from invoices and PDFs and save it in organized JSON data.</span></div></div></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">How We Keep Integrations Reliable</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We use safeguards to keep integrations working during busy periods and temporary service issues:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Queue Workers (Celery / BullMQ)" /><span><strong className="text-stone-900">Queue Workers (Celery / BullMQ):</strong> Task queues spread out work to help keep servers running during busy periods.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Idempotency Key Safeguards" /><span><strong className="text-stone-900">Idempotency Key Safeguards:</strong> Each API request includes a unique key to help prevent duplicate payments or transactions.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automatic Exponential Backoff Retries" /><span><strong className="text-stone-900">Automatic Exponential Backoff Retries:</strong> If a connected service has a temporary problem, the system retries after short waits and records an alert.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="End-to-End Audit Trail Logging" /><span><strong className="text-stone-900">End-to-End Audit Trail Logging:</strong> We record each update, API result, and response time in monitoring tools such as Datadog and OpenTelemetry.</span></div></div></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Automixa AI: Message Automation in Use</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Need" /><span><strong className="text-stone-900">Client Need:</strong> Automixa AI needed to handle large numbers of social media messages and comment updates for more than 10,000 active creators.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Engineering Solution" /><span><strong className="text-stone-900">What We Built:</strong> Anavya Infotech built a message queue using Python, FastHTML, Redis, and Qdrant, with automatic retries when errors occur.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Results" /><span><strong className="text-stone-900">Results:</strong> Handled millions of monthly updates in under 50 ms, reduced support tickets by 68%, and maintained 99.9% uptime.</span></div></div></div></div></section>

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
              Automate Your Operations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
