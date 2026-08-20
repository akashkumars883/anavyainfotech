import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, ShieldCheck, Zap, Globe, Clock, Users, Cpu, FileCode2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Hire Next.js Developers in India | Dedicated React Engineers ($25/hr)",
  description:
    "Hire top 1% dedicated Next.js developers in India. Scale your SaaS or web app with senior full-stack React engineers at $25 - $45/hr. 100% NDA & US/UK time zone overlap.",
  keywords: [
    "hire Next.js developers India",
    "hire React developers offshore",
    "dedicated Next.js engineers India",
    "outsource Next.js development",
    "full stack Next.js developer cost India",
    "hire React Native developers India",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/hire-nextjs-developers-india",
  },
  openGraph: {
    title: "Hire Dedicated Next.js Developers in India ($25/hr) | Anavya Infotech",
    description:
      "Scale your engineering team with pre-vetted senior Next.js & React full-stack developers in India. Zero recruitment fees & 48-hour onboarding.",
    url: "https://www.anavyainfotech.com/hire-nextjs-developers-india",
    type: "website",
  },
};

const HIRE_FAQS = [
  {
    question: "How much does it cost to hire a dedicated Next.js developer in India?",
    answer:
      "Our dedicated Next.js developers in India cost between $25 and $45 per hour (or $3,200 – $5,500/month full-time), saving US, UK, and European clients up to 70% compared to local hiring rates.",
  },
  {
    question: "How fast can I onboard a Next.js developer to my existing team?",
    answer:
      "We can match and onboard pre-vetted senior Next.js engineers within 48 to 72 hours. Our developers integrate directly into your Jira, Slack, and GitHub workflows.",
  },
  {
    question: "How do you handle time-zone overlap for US, UK, and Australian clients?",
    answer:
      "Our engineers provide 4 to 5 hours of direct real-time overlap with EST, PST, GMT, and AEST business hours for daily standups, code reviews, and pair programming.",
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You retain 100% ownership of all source code, IP rights, and Git repositories from day one. We sign comprehensive non-disclosure agreements (NDAs) prior to project kickoff.",
  },
  {
    question: "What is your developer vetting and technical assessment process?",
    answer:
      "Every Next.js engineer undergoes rigorous technical evaluations including live system architecture design, TypeScript proficiency tests, and English communication audits.",
  },
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
  "description": "Pre-vetted senior Next.js & React full-stack developers in India for US, UK, and global tech teams.",
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
    <main className="min-h-screen bg-white pt-6 md:pt-8 text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions/startups-mvp" },
              { label: "Hire Next.js Developers India", href: "/hire-nextjs-developers-india" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Code2 className="h-3.5 w-3.5" /> Offshore Staff Augmentation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Hire dedicated Next.js developers in India. <br />
            <span className="text-blue-700">Top 1% React talent at $25 – $45/hr.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Scale your SaaS, web application, or e-commerce platform with pre-vetted senior Next.js engineers. 48-hour onboarding, 100% code ownership, and 4+ hours of US/UK time zone overlap.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
            >
              <span>Hire Next.js Engineer Now</span>
              <ArrowRight className="h-4 w-4 text-blue-400" />
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-white border border-stone-200 text-xs font-semibold text-stone-700">
              <ShieldCheck className="h-4 w-4 text-blue-700" />
              <span>Strict NDA &amp; 100% IP Protection</span>
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
              Save over 70% in developer salaries and hiring overheads without sacrificing code quality or speed.
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
                  <td className="p-4 sm:p-5 text-stone-700 font-normal">100% Git Ownership, SOC-2 Standards</td>
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
              Engagement Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Flexible Hiring Structures.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Full-Time Engineer",
                price: "$3,200 / month",
                desc: "160 hours/month of exclusive focus on your product pipeline. Integrates into your Slack & Jira.",
                features: ["4-5 Hrs Daily US/UK Overlap", "Direct Slack & GitHub Access", "Zero Recruitment Fees"],
              },
              {
                title: "Milestone / Project-Based",
                price: "Custom Fixed Quote",
                desc: "Turnkey project delivery with guaranteed scope alignment, fixed price quotes, and SLA delivery.",
                features: ["100% Scope Guarantee", "Milestone Billing Schedule", "Post-Launch SLA Maintenance"],
              },
              {
                title: "Hourly Staff Augmentation",
                price: "$35 / hour",
                desc: "On-demand senior Next.js expertise to sprint through backlog tasks, security audits, or performance polish.",
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
                  <span>Select Model</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Hiring Questions"
        subtitle="Clear answers regarding hiring dedicated Next.js developers in India."
        faqs={HIRE_FAQS}
      />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
