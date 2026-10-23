import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "SaaS Application Development Company | Multi-Tenant Cloud Platforms",
  description: "Engineer secure, auto-scaling multi-tenant SaaS platforms. Sub-second performance, Stripe billing integration, tenant database isolation and SOC-2 compliance.",
  keywords: ["SaaS application development company","cloud SaaS engineering services"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/cloud-saas" },
  openGraph: { title: "SaaS Application Development Company | Multi-Tenant Cloud Platforms | Anavya Infotech", description: "Engineer secure, auto-scaling multi-tenant SaaS platforms. Sub-second performance, Stripe billing integration, tenant database isolation and SOC-2 compliance.", url: "https://www.anavyainfotech.com/solutions/cloud-saas", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Multi-Tenant Cloud & SaaS Platform Engineering","description":"Engineer secure, auto-scaling multi-tenant SaaS platforms. Sub-second performance, Stripe billing integration, tenant database isolation and SOC-2 compliance.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const CLOUD_SAAS_FAQS = [
  {
    "question": "What is multi-tenant SaaS architecture?",
    "answer": "Multi-tenant architecture allows thousands of customer accounts (tenants) to run on a shared cloud database while maintaining complete data isolation."
  },
  {
    "question": "How do you handle subscription billing for SaaS products?",
    "answer": "We integrate Stripe Billing or Razorpay Subscriptions supporting monthly/annual plans, free trials, tiered usage pricing, and automated invoices."
  },
  {
    "question": "Can you help us build an MVP SaaS product quickly?",
    "answer": "Yes, we specialize in launching production-ready SaaS MVPs in 6 to 8 weeks using Next.js and Supabase."
  },
  {
    "question": "How is user authentication and tenant security managed?",
    "answer": "We implement OAuth, Magic Links, MFA, and database Row Level Security (RLS) to ensure zero data leakage between tenants."
  },
  {
    "question": "What cloud providers do you deploy SaaS applications on?",
    "answer": "We deploy on Vercel Edge, AWS (Lambda, ECS, RDS), Cloudflare, and DigitalOcean."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Cloud & SaaS", href: "/solutions/cloud-saas" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Multi-Tenant Cloud & SaaS Platform Engineering</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">A scalable SaaS product needs robust tenant isolation, zero-downtime deployments, and subscription billing. We engineer multi-tenant platforms with Next.js, Node.js, and PostgreSQL using row-level security and tenant data isolation.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Engineered for Exponential Scale: Enterprise Multi-Tenant SaaS Development</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Multi-Tenant Architecture</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automated Subscription Billing</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Role-Based Access Control</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Auto-Scaling Cloud Infrastructure</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Multi-Tenant Architecture</h3><p className="mt-2 text-sm leading-6 text-stone-600">Row-level security and schema-per-tenant isolation.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automated Subscription Billing</h3><p className="mt-2 text-sm leading-6 text-stone-600">Stripe Billing, usage metering, and multi-currency invoicing.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Role-Based Access Control</h3><p className="mt-2 text-sm leading-6 text-stone-600">Granular permissions, SSO with SAML/Okta, and audit logging.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Auto-Scaling Cloud Infrastructure</h3><p className="mt-2 text-sm leading-6 text-stone-600">Docker containerization with AWS Fargate orchestration.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Cloud & SaaS FAQs"
        subtitle="Common questions about cloud & saas technology and project delivery."
        faqs={CLOUD_SAAS_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build a solution designed for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our team about a platform tailored to your workflows and growth plans.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


