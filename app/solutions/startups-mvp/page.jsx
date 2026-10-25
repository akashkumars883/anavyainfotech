import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Startup MVP Development | Launch in 6 to 8 Weeks",
  description: "Build and launch an MVP ready to show investors in 6 to 8 weeks. We use Next.js and Python to create products that can grow, test ideas quickly, and deliver for a fixed cost. You retain full ownership of the project’s intellectual property.",
  keywords: ["MVP development company for startups","startup software development services","rapid prototyping agency","SaaS MVP builders","agile software team for startups","offshore MVP development"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/startups-mvp" },
  openGraph: { title: "Startup MVP Development | Launch in 6 to 8 Weeks | Anavya Infotech", description: "Build and launch an MVP ready to show investors in 6 to 8 weeks. We use Next.js and Python to create products that can grow, test ideas quickly, and deliver for a fixed cost. You retain full ownership of the project’s intellectual property.", url: "https://www.anavyainfotech.com/solutions/startups-mvp", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Startup Product Engineering & Rapid MVP Development","description":"Build and launch investor-ready MVPs in 6 to 8 weeks. Scalable Next.js & Python architecture, rapid prototyping, fixed-cost delivery & 100% IP ownership.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const STARTUPS_MVP_FAQS = [
  {
    "question": "Who owns the code and intellectual property (IP)?",
    "answer": "You own the source code, design files, and other project IP. The agreement explains when we transfer the code repository and infrastructure."
  },
  {
    "question": "Can a 6-week MVP grow with our business?",
    "answer": "Yes. We use Next.js, Python, and PostgreSQL in separate modules, so the team can add features as your users and needs grow."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Startup Product Development & MVP Launch</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">For tech startups, launching quickly matters. Delays use up seed funding, put off testing the product with real users, and give competitors time to win customers. An MVP (minimum viable product) is a first version you can use to test your idea.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Build an Investor-Ready MVP in 6 to 8 Weeks</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech brings together flexible development, frontend and backend tools, and product design to build MVPs that can grow in 6 to 8 weeks.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 1–2: Scope, Schema & Prototype</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 3–4: Frontend & API Engineering</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 5: Payments & Integrations</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Week 6: Testing & Launch</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Why Startups Should Avoid Building Too Much Too Soon</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Building too much before testing the main idea can raise costs and delay feedback from real users.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Extra features</h3><p className="mt-2 text-sm leading-6 text-stone-600">Features that are not essential raise costs and delay user feedback.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Weak technical foundations</h3><p className="mt-2 text-sm leading-6 text-stone-600">Rushed work can create fragile apps that need costly rewrites as the number of users grows.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Funding and schedule risks</h3><p className="mt-2 text-sm leading-6 text-stone-600">Uncontrolled hourly billing can use up funding before a working product reaches users or investors.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Our 6-Week MVP Plan</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">This step-by-step plan focuses the work on a useful first product and a clear launch date.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 1–2: Scope, Schema & Prototype</h3><p className="mt-2 text-sm leading-6 text-stone-600">Agree on the features and test the main ways people will use the product.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Hold product planning sessions and choose the most important tasks.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Plan the database structure and flexible cloud setup.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Create clickable Figma designs to get feedback from users and investors.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 3–4: Frontend & API Engineering</h3><p className="mt-2 text-sm leading-6 text-stone-600">Build the main product and the services that run behind it.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Develop with Next.js, React, or Tailwind CSS.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Build separate, reusable services with Python FastAPI or Node.js.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Deploy regular builds for founder review.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 5: Payments & Integrations</h3><p className="mt-2 text-sm leading-6 text-stone-600">Prepare the product to launch and start earning revenue.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Set up Auth0, Supabase, or Firebase authentication.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Integrate Stripe or other billing systems.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Connect webhooks and tracking tools such as Mixpanel or PostHog.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Week 6: Testing & Launch</h3><p className="mt-2 text-sm leading-6 text-stone-600">Check the release for problems and prepare the live system.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Test core flows across browsers and mobile sizes.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Scan for security issues and strengthen the systems that run the product.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Deploy to AWS, Vercel, or Google Cloud with backups and analytics.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Ways to Deliver the Project</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Comparison</th><th scope="col" className="px-5 py-4 font-semibold">Typical Freelancer or Agency</th><th scope="col" className="px-5 py-4 font-semibold">Anavya Fixed-Price MVP</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Launch Time</th><td className="px-5 py-4">5 to 9 months; timing can vary</td><td className="px-5 py-4">Planned launch in 6 to 8 weeks</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Pricing</th><td className="px-5 py-4">No fixed limit on hourly costs</td><td className="px-5 py-4">Fixed-price scope and deliverables</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Code Quality</th><td className="px-5 py-4">Quality and test coverage may vary</td><td className="px-5 py-4">Flexible foundations designed to support future growth</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Intellectual Property</th><td className="px-5 py-4">Ownership transfer terms can be complex</td><td className="px-5 py-4">Code and IP ownership transfer are defined in the contract</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Case Study: Automixa AI Platform</h2><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">The Challenge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automixa AI needed to launch a business workflow platform within two months to support its planned seed investment round.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Technical Solution</h3><p className="mt-2 text-sm leading-6 text-stone-600">We built the MVP in six weeks using Next.js, OpenAI workflows on Python FastAPI, and Stripe checkout with credit tokens.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Verified Results</h3><p className="mt-2 text-sm leading-6 text-stone-600">The product launched in 42 days and grew to more than 10,000 active creators without downtime. Its performance helped the client secure seed funding.</p></article></div></div></section>

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
                Talk with a Technical Lead About Your Startup
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Review your product idea and plan an MVP launch with our technical lead.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Talk with a Technical Lead
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
