import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "MVP Development Company for Startups | Launch in 6 to 8 Weeks",
  description: "Build and launch investor-ready MVPs in 6 to 8 weeks. Scalable Next.js & Python architecture, rapid prototyping, fixed-cost delivery & 100% IP ownership.",
  keywords: ["MVP development company for startups","startup software development services","rapid prototyping agency","SaaS MVP builders","agile software team for startups","offshore MVP development"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/startups-mvp" },
  openGraph: { title: "MVP Development Company for Startups | Launch in 6 to 8 Weeks | Anavya Infotech", description: "Build and launch investor-ready MVPs in 6 to 8 weeks. Scalable Next.js & Python architecture, rapid prototyping, fixed-cost delivery & 100% IP ownership.", url: "https://www.anavyainfotech.com/solutions/startups-mvp", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Startup Product Engineering & Rapid MVP Development","description":"Build and launch investor-ready MVPs in 6 to 8 weeks. Scalable Next.js & Python architecture, rapid prototyping, fixed-cost delivery & 100% IP ownership.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const STARTUPS_MVP_FAQS = [
  {
    "question": "What happens to the Intellectual Property (IP) of our code?",
    "answer": "You retain ownership of the source code, design assets, and IP. Repository and infrastructure transfer terms are defined in the project agreement."
  },
  {
    "question": "Is code built during a 6-week MVP scalable for future growth?",
    "answer": "We use modular production frameworks such as Next.js, Python, and PostgreSQL so teams can extend the product as users and requirements grow."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Startups & MVP", href: "/solutions/startups-mvp" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Startup Product Engineering & Rapid MVP Development</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Speed to market matters for technology startups. Delayed launches consume seed capital, postpone product-market validation, and give competitors time to capture market share.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Turn Vision into Traction: Rapid, Investor-Ready MVP Development in 6 to 8 Weeks</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech combines agile engineering, full-stack frameworks, and product design to deliver scalable MVPs in a focused 6 to 8 week window.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 1–2: Scope, Schema & Prototype</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 3–4: Frontend & API Engineering</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 5: Payments & Integrations</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 6: QA & Production Launch</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">The Premature Scaling Trap: Why Startups Burn Runway on Over-Engineered Products</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Building too much before validating the core product can increase cost and delay learning from real users.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Scope creep</h3><p className="mt-2 text-sm leading-6 text-stone-600">Non-essential features inflate budgets and delay user feedback.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Fragile technical foundations</h3><p className="mt-2 text-sm leading-6 text-stone-600">Rushed implementation can create brittle applications that need costly rewrites as users grow.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Runway and timeline risk</h3><p className="mt-2 text-sm leading-6 text-stone-600">Uncontrolled time-and-materials engagements can drain funding before a working product reaches users or investors.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">The Anavya 6-Week MVP Sprint Framework</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">A structured delivery sequence focuses engineering effort on a functional core product and predictable launch window.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 1–2: Scope, Schema & Prototype</h3><p className="mt-2 text-sm leading-6 text-stone-600">Freeze functional scope and validate key journeys.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Run product workshops and prioritize essential workflows.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Design database schemas and modular cloud architecture.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Create clickable Figma prototypes for user and investor feedback.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 3–4: Frontend & API Engineering</h3><p className="mt-2 text-sm leading-6 text-stone-600">Build the core product experience and backend services.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Develop with Next.js, React, or Tailwind CSS.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Create modular services in Python FastAPI or Node.js.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Deploy regular builds for founder review.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 5: Payments & Integrations</h3><p className="mt-2 text-sm leading-6 text-stone-600">Prepare product workflows for launch and monetization.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Set up Auth0, Supabase, or Firebase authentication.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Integrate Stripe or other billing systems.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Connect webhooks and analytics such as Mixpanel or PostHog.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 6: QA & Production Launch</h3><p className="mt-2 text-sm leading-6 text-stone-600">Harden the release and prepare the live environment.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Test core flows across browsers and mobile sizes.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Run security scans and infrastructure hardening.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Deploy to AWS, Vercel, or Google Cloud with backups and analytics.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Delivery Engagement Comparison</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Delivery Parameter</th><th scope="col" className="px-5 py-4 font-semibold">Traditional Freelancer / Agency</th><th scope="col" className="px-5 py-4 font-semibold">Anavya Fixed-Price MVP</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Time to Market</th><td className="px-5 py-4">5 to 9 months; dates can vary</td><td className="px-5 py-4">6 to 8 weeks to planned launch</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Pricing</th><td className="px-5 py-4">Uncapped time and materials</td><td className="px-5 py-4">Fixed-price scope and deliverables</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Code Quality</th><td className="px-5 py-4">Quality and test coverage may vary</td><td className="px-5 py-4">Modular foundations designed for continued growth</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Intellectual Property</th><td className="px-5 py-4">Assignment terms can be complex</td><td className="px-5 py-4">Repository and IP transfer defined in contract</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Automixa AI Platform</h2><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">The Challenge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automixa AI needed to launch an enterprise generative workflow platform within two months to support a target seed investment round.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Technical Solution</h3><p className="mt-2 text-sm leading-6 text-stone-600">We ran a six-week MVP sprint with a Next.js interface, OpenAI pipelines on Python FastAPI, and Stripe credit-token checkout.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Verified Results</h3><p className="mt-2 text-sm leading-6 text-stone-600">Reached production in 42 calendar days. Scaled to more than 10,000 active creators without infrastructure downtime. Platform performance helped the client secure its seed funding round.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Startups & MVP FAQs"
        subtitle="Common questions about startups & mvp technology and project delivery."
        faqs={STARTUPS_MVP_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Schedule a Technical Founder Consultation Call
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Validate your product scope and plan a focused MVP launch with our technical lead.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


