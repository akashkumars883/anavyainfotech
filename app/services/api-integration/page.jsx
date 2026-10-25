import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, Terminal, CreditCard, Smartphone, Workflow, Search, ChartNoAxesCombined } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "API Integration Services",
  description:
    "Connect older software, SaaS tools, payment systems, and microservices with secure REST and GraphQL APIs from Anavya Infotech.",
  keywords: ["API integration services", "custom REST API development", "GraphQL API development"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/api-integration",
  },
  openGraph: {
    title: "API Integration Services",
    description:
      "Connect older software, SaaS tools, payment systems, and microservices with secure REST and GraphQL APIs from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/api-integration",
    type: "website",
  },
};

const API_INTEGRATION_FAQS = [
  {
    "question": "Can you integrate with tools you haven't used before?",
    "answer": "Yes. Most modern platforms provide API documentation. If a platform has an API, we can usually connect it to your tools."
  },
  {
    "question": "What if an API integration breaks after a third-party platform updates?",
    "answer": "We add error handling and monitoring, and offer ongoing support to update integrations when other platforms change."
  },
  {
    "question": "Do you build integrations for messaging platforms like WhatsApp and Instagram?",
    "answer": "Yes. This is part of our AI and automation work. See our AI Chatbot and Business Automation services."
  }
];

const serviceSchemas = createServiceSchema({
  name: "API Integration Services - Connect Your Business Tools",
  description: "API integration services connecting your CRM, payment gateways, messaging & third-party platforms into one workflow. Anavya Infotech, India & USA.",
  slug: "api-integration",
  serviceType: "API Development & System Integration",
  faqs: API_INTEGRATION_FAQS,
  breadcrumbLabel: "API Integration",
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="api-integration">
      {/* Search Engine Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "API Integration", href: "/services/api-integration" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Terminal className="h-3.5 w-3.5 text-blue-700" /> API Integration & Microservices
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              API Integration to Connect Every Tool Your Business Runs On
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              When your CRM, payment gateway, WhatsApp, and website do not share information, your team may need to move it by hand. Anavya Infotech connects your existing tools through APIs so information can flow between them in one reliable process.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Discuss Your Integration <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/development-illustration.jpg"
              alt="API Integration Services"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why It Matters
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              When tools do not share data, updates can be late or wrong. A payment may not appear in your CRM, or a lead may sit unnoticed in a form inbox. Our API integrations handle live updates at scale. For example, Automixa AI&apos;s Meta Graph API integration responds to webhooks in under 50 milliseconds for more than 10,000 active users. We bring the same focus on reliability to every integration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">01</div>
              <h3 className="text-lg font-semibold text-stone-900">Map Data</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map the tools and data that need to connect.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">02</div>
              <h3 className="text-lg font-semibold text-stone-900">Plan the Connection</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Plan how the tools will connect and share data.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">03</div>
              <h3 className="text-lg font-semibold text-stone-900">Build & Test</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build and test with real data, including unusual cases and errors.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">04</div>
              <h3 className="text-lg font-semibold text-stone-900">Launch and Explain</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Launch the integration, check that it works, and document it for your team.</p>
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
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Discuss Your Integration Needs
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect your business tools so they can share information automatically.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Integration Needs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}