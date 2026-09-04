import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Terminal } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Custom API Integration & Microservices Engineering Services",
  description:
    "Connect legacy software, SaaS APIs, payment portals, and microservices with secure REST and GraphQL API integration services from Anavya Infotech.",
  keywords: [
    "API integration services",
    "custom REST API development",
    "GraphQL API development",
    "microservices architecture",
    "API middleware integration",
    "payment gateway integration",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/api-integration",
  },
  openGraph: {
    title: "Custom API Integration & Microservices Engineering Services",
    description:
      "Connect legacy software, SaaS APIs, payment portals, and microservices with secure REST and GraphQL API integration services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/api-integration",
    type: "website",
  },
};

const API_INTEGRATION_FAQS = [
  {
    "question": "Can you integrate with tools you haven't used before?",
    "answer": "Yes — most modern platforms expose a documented API; if it has one, we can typically integrate with it."
  },
  {
    "question": "What if an API integration breaks after a third-party platform updates?",
    "answer": "We build with error handling and monitoring in mind, and offer maintenance retainers to handle updates from third-party platform changes."
  },
  {
    "question": "Do you build integrations for messaging platforms like WhatsApp and Instagram?",
    "answer": "Yes — this is core to our AI/automation work; see AI Chatbots and Business Automation."
  }
];

const serviceSchemas = createServiceSchema({
  name: "API Integration Services | Connect Your Business Tools",
  description: "API integration services connecting your CRM, payment gateways, messaging & third-party platforms into one workflow. Anavya Infotech, India & USA.",
  slug: "api-integration",
  serviceType: "API Development & System Integration",
  faqs: API_INTEGRATION_FAQS,
  breadcrumbLabel: "API Integration",
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left">
      {/* Search Engine Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "API Integration", href: "/services/api-integration" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Services / API Integration
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            API Integration to Connect Every Tool Your Business Runs On
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            When your CRM, payment gateway, WhatsApp, and website don&apos;t talk to each other, someone on your team is manually bridging the gap — copying data, re-entering leads, checking three dashboards for one answer. Anavya Infotech builds API integrations that connect your existing tools into a single, reliable workflow.
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
              Disconnected tools create data lag and human error — a payment that doesn&apos;t sync to your CRM, a lead that sits in a form inbox nobody checks. We&apos;ve built production-grade API integrations processing real-time webhooks at scale (Automixa AI&apos;s Meta Graph API integration handles sub-50ms webhook responses for 10,000+ active users), so we bring that same reliability standard to every integration we build.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Terminal className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Payment gateway integration (Razorpay, Stripe, PayU, and others)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>CRM and marketing tool integrations (data sync, lead routing)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>WhatsApp Business API and messaging platform integrations</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Meta Graph API integrations (as built for Automixa AI&apos;s Instagram automation)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Custom API development for internal or partner-facing systems</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Webhook setup for real-time data sync between platforms</span>
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
              <h3 className="text-base font-medium text-stone-900">Map Data</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map the tools and data that need to connect.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Architecture</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Design the integration architecture and data flow.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Build & Test</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build, test with real data, and handle edge cases/error handling.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Deploy & Document</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Deploy, monitor, and document for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="API Integration FAQs"
        subtitle="Frequently asked questions about API Integrations."
        faqs={API_INTEGRATION_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Discuss Your Integration Needs
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect your business tools into a seamless automated workflow with Anavya Infotech.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Integration Needs →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
