import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "SaaS Development | Secure Cloud Platforms",
  description: "Build secure SaaS platforms where many customer accounts share cloud services but keep their data separate. Add fast performance, Stripe billing, and controls for SOC 2 compliance.",
  keywords: ["SaaS application development company","cloud SaaS engineering services"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/cloud-saas" },
  openGraph: { title: "SaaS Development | Secure Cloud Platforms | Anavya Infotech", description: "Build secure SaaS platforms where many customer accounts share cloud services but keep their data separate. Add fast performance, Stripe billing, and controls for SOC 2 compliance.", url: "https://www.anavyainfotech.com/solutions/cloud-saas", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Multi-Tenant Cloud & SaaS Platform Engineering","description":"Engineer secure, auto-scaling multi-tenant SaaS platforms. Sub-second performance, Stripe billing integration, tenant database isolation and SOC-2 compliance.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const CLOUD_SAAS_FAQS = [
  {
    "question": "What does multi-tenant SaaS architecture mean?",
    "answer": "Multi-tenant architecture lets many customer accounts (tenants) use the same cloud database while keeping each account?s data separate."
  },
  {
    "question": "How do you manage SaaS subscription payments?",
    "answer": "We connect Stripe Billing or Razorpay Subscriptions for monthly or yearly plans, free trials, pricing by usage, and automatic invoices."
  },
  {
    "question": "Can you build a first version of our SaaS product quickly?",
    "answer": "Yes. We build launch-ready SaaS MVPs in 6 to 8 weeks using Next.js and Supabase."
  },
  {
    "question": "How do you manage sign-in and keep customer data safe?",
    "answer": "We use OAuth, Magic Links, MFA, and database Row Level Security (RLS) to keep one customer?s data from being seen by another."
  },
  {
    "question": "Which cloud services can you use to host SaaS apps?",
    "answer": "We host apps on Vercel Edge, AWS (Lambda, ECS, RDS), Cloudflare, and DigitalOcean."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Cloud Platforms for SaaS Products</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">A SaaS product needs to keep customer data separate, stay online during updates, and handle subscriptions. We build platforms with Next.js, Node.js, and PostgreSQL, using security rules to separate each customer?s data.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">SaaS Platforms Built to Grow</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Shared Platform, Separate Customer Data</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic Subscription Billing</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Access Based on User Roles</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Cloud Systems That Grow with Demand</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Shared Platform, Separate Customer Data</h3><p className="mt-2 text-sm leading-6 text-stone-600">Database rules and separate data structures keep each customer?s information private.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic Subscription Billing</h3><p className="mt-2 text-sm leading-6 text-stone-600">Stripe Billing, usage tracking, and invoices in different currencies.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Access Based on User Roles</h3><p className="mt-2 text-sm leading-6 text-stone-600">Detailed permissions, single sign-on (SSO) with SAML/Okta, and activity records.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Cloud Systems That Grow with Demand</h3><p className="mt-2 text-sm leading-6 text-stone-600">Docker containers managed with AWS Fargate.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Cloud & SaaS FAQs"
        subtitle="Answers to common questions about cloud and SaaS tools and our projects."
        faqs={CLOUD_SAAS_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let?s build the right solution for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tell our team how you work and where you want to grow. We?ll help plan a platform that fits.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Talk About Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


