import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, ShieldCheck, Zap, Globe, Clock, Users, Cpu, FileCode2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import Image from "next/image";
import RelatedCoreServices from "@/components/RelatedCoreServices";

export const metadata = {
  title: "Hire Next.js Developers in India | Experienced Engineers",
  description:
    "Hire experienced Next.js 15 developers in India. Get 4+ hours of US/UK work-hour overlap, fast websites, a 14-day trial, and save up to 65% on payroll.",
  keywords: ["hire nextjs developers in india","hire dedicated next.js developer","Next.js engineering team","offshore React developers","senior full stack Nextjs engineer","staff augmentation India"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/hire-nextjs-developers-india",
  },
  openGraph: {
    title: "Hire Next.js Developers in India | Experienced Engineers",
    description:
      "Hire experienced Next.js 15 developers in India. Get 4+ hours of US/UK work-hour overlap, fast websites, a 14-day trial, and save up to 65% on payroll.",
    url: "https://www.anavyainfotech.com/hire-nextjs-developers-india",
    type: "website",
  },
};

const HIRE_FAQS = [
  {
    question: "How soon can a Next.js developer join our team?",
    answer: "We share qualified developer profiles within 48 hours. After you choose a developer, they can get set up and start work within 3 to 5 business days."
  },
  {
    question: "How do we communicate and manage daily developer output?",
    answer: "Your developer joins your team's workspace, takes part in daily Zoom or Teams meetings, tracks tasks in Jira or Linear, and shares updates on Slack."
  },
  {
    question: "What if the developer is not a good fit for my team?",
    answer: "We offer a 14-day trial. If the developer is not right for your team, we can find a replacement or end the contract without a service fee."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hire Dedicated Next.js Developers in India",
  "provider": {
    "@type": "Organization",
    "name": "Anavya Infotech",
    "url": "https://www.anavyainfotech.com",
  },
  "serviceType": "Software Engineering Staff Augmentation",
  "areaServed": ["United States", "United Kingdom", "United Arab Emirates", "Australia", "Canada", "Global"],
  "description": "Experienced Next.js and React developers in India for teams in the US, UK, and around the world.",
  "offers": {
    "@type": "Offer",
    "price": "25.00",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "25.00",
      "priceCurrency": "USD",
      "unitText": "HOUR",
    },
  },
};

export default function HireNextJsDevelopersPage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/#solutions" },
              { label: "Hire Next.js Developers India", href: "/hire-nextjs-developers-india" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Code2 className="h-3.5 w-3.5" /> Offshore Staff Augmentation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Hire dedicated Next.js developers in India. <br />
            <span className="text-blue-700">Experienced React developers at $25 – $45/hr.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Add Next.js developers to your SaaS, web app, or e-commerce team. Before work starts, discuss their experience, shared work hours, setup, and code ownership.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
            >
              <span>Hire a Next.js Developer</span>
              <ArrowRight className="h-4 w-4 text-blue-400" />
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-white border border-stone-200 text-xs font-semibold text-stone-700">
              <ShieldCheck className="h-4 w-4 text-blue-700" />
              <span>NDA &amp; Full Code Ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix Grid */}
      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Enterprise Next.js &amp; Full-Stack Skillset.
            </h2>
            <p className="text-stone-600 font-light">
              Our engineers specialize in modern JavaScript/TypeScript ecosystems, edge routing, and AI integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Next.js 15 & App Router",
                desc: "Server Components, Parallel Routes, ISR, Edge Functions, and Turbopack optimization.",
                icon: FileCode2,
              },
              {
                title: "React 19 & TypeScript",
                desc: "Strict type-safe component state architecture, custom hooks, and Server Actions.",
                icon: Code2,
              },
              {
                title: "Cloud Databases & ORMs",
                desc: "PostgreSQL, Supabase, Prisma ORM, Drizzle, Redis caching, and MongoDB.",
                icon: Cpu,
              },
              {
                title: "AI & Vector Search APIs",
                desc: "OpenAI GPT-4, Claude 3.5, RAG vector pipelines, Pinecone, and Qdrant integration.",
                icon: Zap,
              },
            ].map((skill, i) => (
              <div key={i} className="p-6 rounded-md bg-stone-50 border border-stone-200 space-y-3">
                <skill.icon className="h-6 w-6 text-blue-700" />
                <h3 className="text-lg font-bold text-stone-900">{skill.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table Section */}
      <section className="py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              ROI &amp; Cost Savings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              US/UK vs India Developer Rate Comparison.
            </h2>
            <p className="text-stone-600 font-light">
              Compare the proposed team structure and engagement cost with your hiring needs, project scope, and expected collaboration model.
            </p>
          </div>

          <div className="overflow-x-auto rounded-md border border-stone-200 bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-900 text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Region</th>
                  <th className="p-4 sm:p-5">Hourly Rate ($)</th>
                  <th className="p-4 sm:p-5">Monthly Cost (Full-Time)</th>
                  <th className="p-4 sm:p-5">Code Ownership &amp; Quality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-blue-50/60 font-semibold text-stone-900">
                  <td className="p-4 sm:p-5 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-700" /> Anavya Infotech (India)
                  </td>
                  <td className="p-4 sm:p-5 text-blue-700 font-bold">$25 – $45 / hr</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-bold">$3,200 – $5,500</td>
                  <td className="p-4 sm:p-5 text-stone-700 font-normal">Repository access and security requirements defined per engagement</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-stone-800">United States (US)</td>
                  <td className="p-4 sm:p-5 text-stone-600">$120 – $180 / hr</td>
                  <td className="p-4 sm:p-5 text-stone-600">$18,000 – $26,000</td>
                  <td className="p-4 sm:p-5 text-stone-500">High Local Recruitment Fees</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-stone-800">United Kingdom (UK)</td>
                  <td className="p-4 sm:p-5 text-stone-600">$100 – $150 / hr</td>
                  <td className="p-4 sm:p-5 text-stone-600">$15,000 – $22,000</td>
                  <td className="p-4 sm:p-5 text-stone-500">High Payroll Overheads</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-stone-800">Australia (AU)</td>
                  <td className="p-4 sm:p-5 text-stone-600">$110 – $160 / hr</td>
                  <td className="p-4 sm:p-5 text-stone-600">$16,000 – $24,000</td>
                  <td className="p-4 sm:p-5 text-stone-500">Long Recruitment Cycles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Hiring Options
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Flexible Ways to Work Together.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Full-Time Engineer",
                price: "$3,200 / month",
                desc: "160 hours a month focused on your product. The developer joins your Slack and Jira.",
                features: ["4-5 Hrs Daily US/UK Overlap", "Direct Slack & GitHub Access", "Zero Recruitment Fees"],
              },
              {
                title: "Milestone / Project-Based",
                price: "Custom Fixed Quote",
                desc: "The proposal lists the work, assumptions, price, and delivery plan.",
                features: ["100% Scope Guarantee", "Milestone Billing Schedule", "Post-Launch SLA Maintenance"],
              },
              {
                title: "Hourly Staff Augmentation",
                price: "$35 / hour",
                desc: "Hire an experienced Next.js developer by the hour for planned tasks, security reviews, or speed improvements.",
                features: ["No Long-Term Contracts", "Weekly Time Sheet Reports", "Flexible Capacity Scale"],
              },
            ].map((model, idx) => (
              <div key={idx} className="p-8 rounded-md bg-stone-50 border border-stone-200 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-stone-900">{model.title}</h3>
                  <div className="text-2xl font-extrabold text-blue-700">{model.price}</div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">{model.desc}</p>
                  <ul className="space-y-2 pt-2 border-t border-stone-200">
                    {model.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-700" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all"
                >
                  <span>Choose This Option</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service copy sections */}
            <section className="px-6 py-14 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="sticky top-20 z-20 -mx-6 flex items-center gap-3 overflow-x-auto border-y border-stone-200 bg-white/95 px-6 py-3 backdrop-blur lg:top-28 lg:mx-0 lg:block lg:self-start lg:rounded-lg lg:border lg:p-4">
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 lg:block">On this page</p>
          <nav aria-label="Service page sections" className="flex min-w-max gap-2 lg:mt-3 lg:block lg:min-w-0 lg:space-y-1">
            <a href="#detail-overview" className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-stone-600 transition-colors hover:bg-blue-50 hover:text-blue-800 lg:block lg:rounded-md">Overview</a>
            <a href="#detail-next-steps" className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-stone-600 transition-colors hover:bg-blue-50 hover:text-blue-800 lg:block lg:rounded-md">Next steps</a>
          </nav>
        </aside>
        <article className="min-w-0 space-y-10">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <h2 id="detail-overview" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 md:col-span-2 scroll-mt-32">Grow Your Team with Experienced Next.js 15 Developers</h2>
        <p className="text-stone-700 leading-relaxed">Hiring experienced web developers locally can take time and cost more. Long hiring processes can slow down your project and delay its launch.</p>
        <figure className="overflow-hidden rounded-md border border-stone-200 bg-stone-50">
          <Image src="https://images.unsplash.com/photo-1633113088983-12fb3b2fe0ac?auto=format&fit=crop&w=1600&q=85" alt="Two colleagues collaborating on a laptop in an office" width={1600} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="px-4 py-3 text-xs text-stone-500"><a href="https://unsplash.com/photos/two-people-sitting-across-from-each-other-in-an-office-working-on-a-surface-laptop-4QKqDeAZf-c" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-900">Photo by Microsoft Edge | Unsplash</a></figcaption>
        </figure>
      </section>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:col-span-2">
            <div className="rounded-md border border-stone-200 bg-stone-50 px-5 py-4"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">4+ hrs</p><p className="mt-1 text-sm text-stone-600">US/UK time overlap</p></div>
            <div className="rounded-md border border-stone-200 bg-stone-50 px-5 py-4"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">65%</p><p className="mt-1 text-sm text-stone-600">Payroll savings</p></div>
            <div className="rounded-md border border-stone-200 bg-stone-50 px-5 py-4"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">14 days</p><p className="mt-1 text-sm text-stone-600">Risk-free trial</p></div>
          </div>
      <section className="space-y-4">
        <p className="text-stone-700 leading-relaxed">Anavya Infotech connects businesses, startups, and agencies with experienced Next.js developers in India. Our full-stack developers join your workflow, share your team&apos;s work hours, and build modern JavaScript websites at up to 65% lower cost.</p>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-2" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Why We Use Next.js 15</h2>
        <p className="text-stone-700 leading-relaxed">Our developers use Next.js 15 to build modern web apps:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">React Server Components (RSC):</strong> Runs some work on the server, so less JavaScript needs to load in a visitor&apos;s browser.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Incremental Static Regeneration (ISR):</strong> Updates website pages in the background without rebuilding the whole site.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Server Actions &amp; API Routes:</strong> Handles data changes without needing extra server code.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Core Web Vitals:</strong> Built-in tools help improve fonts, scripts, and images for faster loading.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-3" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">How We Review Developers</h2>
        <p className="text-stone-700 leading-relaxed">We review each developer&apos;s skills and work before sharing their profile with you:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Portfolio &amp; GitHub Review:</strong> We review public GitHub work, completed apps, and code quality.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Coding Tests:</strong> Developers solve practical problems and show how they manage and improve code.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Next.js Skills:</strong> We test Next.js 15 App Router patterns, Server Actions, edge deployment, and database setup.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Communication &amp; Teamwork:</strong> We review spoken and written English and experience with tools like Jira, Slack, and Git.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">References &amp; Background Checks:</strong> We check work history and past business projects.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-4" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Ways to Work With Our Developers</h2>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Full-Time Developer:</strong> A Next.js developer works with your team for 160 hours each month.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Add a Developer to Your Team:</strong> Bring in a developer during busy periods or to add skills your team needs.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Project Team:</strong> A full team—including tech leads, Next.js developers, testers, and Scrum Masters—works on your project plan.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-5" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Technical Competency Matrix: Engineering Experience Levels</h2>

        <div className="overflow-x-auto rounded-md border border-stone-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <tbody>
              <tr className={"bg-stone-100 font-semibold text-stone-900"}>
                <th className="px-4 py-3 align-top">Skill / Capability</th>
                <th className="px-4 py-3 align-top">Junior Next.js Developer</th>
                <th className="px-4 py-3 align-top">Mid-Level Next.js Developer</th>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Anavya Senior Next.js Architect</td>
                <td className="px-4 py-3 align-top">Engineering Experience</td>
                <td className="px-4 py-3 align-top">1 – 3 Years</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">3 – 5 Years</td>
                <td className="px-4 py-3 align-top">6+ Years (Enterprise Grade)</td>
                <td className="px-4 py-3 align-top">Next.js Paradigms</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Page Router, Basic Rendering</td>
                <td className="px-4 py-3 align-top">App Router, REST Integration</td>
                <td className="px-4 py-3 align-top">App Router, Server Actions, Dynamic ISR, Turbopack</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">State &amp; Performance</td>
                <td className="px-4 py-3 align-top">Basic React Hooks</td>
                <td className="px-4 py-3 align-top">Redux, Context Optimizations</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Zustand, React Query, Sub-300ms Performance Tuning</td>
                <td className="px-4 py-3 align-top">Database &amp; ORM</td>
                <td className="px-4 py-3 align-top">Basic SQL / MongoDB</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">PostgreSQL, Prisma ORM</td>
                <td className="px-4 py-3 align-top">Multi-tenant DB Schemas, Redis Cache, Vector Databases</td>
                <td className="px-4 py-3 align-top">Communication Sync</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Asynchronous / Reactive</td>
                <td className="px-4 py-3 align-top">Independent Standups</td>
                <td className="px-4 py-3 align-top">Direct Technical Leadership &amp; Client Architectural Sync</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-6" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Code Ownership, Security &amp; Trial</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">You Own the Code:</strong> Your business owns all code our engineers write, as set out in the agreement and NDA.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">4+ Shared Work Hours:</strong> Work hours overlap with teams in North America, Europe, and Asia-Pacific.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white"><Code2 className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">14-Day Trial:</strong> Try your Next.js developer on real tasks for 14 days. If they are not a good fit, you can ask for a replacement or cancel without obligation.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-7" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Talk With Our Team</h2>
      </section>
      <section className="space-y-4">
        <h2 id="detail-section-8" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Request Developer Profiles</h2>
      </section>
      <section className="space-y-4">
        <p className="text-stone-700 leading-relaxed">Add experienced Next.js developers to your team to help deliver your project plan.</p>
      </section>
      <section className="space-y-4">
        <h2 id="detail-next-steps" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 scroll-mt-32">Request Developer Profiles or Schedule an Interview</h2>
      </section>
        </article>
        </div>
      </section>
      <RelatedCoreServices page="nextjs" />

      {/* FAQ Section */}
      <FaqSection title="Frequently Asked Hiring Questions"
        subtitle="Answers to common questions about hiring Next.js developers in India."
        faqs={HIRE_FAQS}
      />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
