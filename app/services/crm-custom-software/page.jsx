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
    "question": "Why build a custom CRM instead of paying for Salesforce or HubSpot?",
    "answer": "Custom CRMs eliminate per-seat monthly subscription taxes, adapt 100% to your unique operational SOPs, and give you complete data sovereignty."
  },
  {
    "question": "Can a custom CRM scale to hundreds of team members?",
    "answer": "Yes, we build custom CRMs using PostgreSQL and Next.js, allowing your company to scale to unlimited users with zero extra licensing cost."
  },
  {
    "question": "Can you migrate existing client data from Excel or another CRM?",
    "answer": "Yes! We handle full data ETL extraction, cleansing, mapping, and seamless import from spreadsheets or legacy CRMs."
  },
  {
    "question": "How long does it take to develop a custom CRM system?",
    "answer": "MVP custom CRMs take 4 to 6 weeks, while enterprise multi-module platforms take 8 to 12 weeks."
  },
  {
    "question": "What security measures protect our customer CRM data?",
    "answer": "We enforce role-based access control (RBAC), row-level security, SSL/TLS encryption, and automated database backups."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Custom CRM & Custom Enterprise Software",
  description: "Replacing restrictive off-the-shelf SaaS with custom dashboards, secure internal CRM systems, customer panels, and database storage modules without monthly licenses.",
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
            Services Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Custom CRM & Custom <br />
            <span className="text-blue-700">Enterprise Software</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Bespoke internal systems designed for your business model.
          </p>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-10 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              High-performance implementation blueprints.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Replacing restrictive off-the-shelf SaaS with custom dashboards, secure internal CRM systems, customer panels, and database storage modules without monthly licenses.
            </p>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Our engineering systems verify page structures, data payloads, and query latency markers continuously. We align each workflow component with target speed and search metrics to drive measurable ROI.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Code className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What We Deliver
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Tailored database schemas matching your workflows</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Unlimited custom roles and admin portals</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Zero monthly licensing fees or seat limitations</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Complete code ownership & data privacy control</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
      <FaqSection
        title="Custom CRM & Software FAQs"
        subtitle="Questions about custom CRM development vs off-the-shelf SaaS."
        faqs={CRM_CUSTOM_SOFTWARE_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to deploy your customized system?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with our team to discuss project architectures, API specifications, and database configurations.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Consult an Engineer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



