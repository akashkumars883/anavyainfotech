import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Zap, Server, Layers, Lock, Cpu, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Offshore Software Development Company in India | Anavya",
  description:
    "Build and extend your product with an India-based software engineering partner. Explore web, mobile, AI, and dedicated team services from Anavya Infotech.",
  keywords: [
    "offshore software development company India",
    "outsource software development to India",
    "offshore IT services provider",
    "software outsourcing firm India",
    "offshore AI development company",
    "custom software development outsourcing",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/offshore-software-development-company",
  },
  openGraph: {
    title: "Offshore Software Development Company in India | Anavya",
    description:
      "Full-spectrum offshore tech partner delivering enterprise SaaS, AI automation, and web applications for global startups and enterprises.",
    url: "https://www.anavyainfotech.com/offshore-software-development-company",
    type: "website",
  },
};

const OFFSHORE_FAQS = [
  {
    question: "Why choose India as your offshore software development destination?",
    answer:
      "India offers a broad engineering talent pool and experience across modern product technologies. The right delivery model depends on your roles, product needs, and the amount of collaboration your team requires.",
  },
  {
    question: "How do you ensure data security, privacy, and IP protection?",
    answer:
      "Security requirements and data handling responsibilities should be agreed before work begins. Project contracts can define confidentiality, repository access, environment controls, and intellectual property ownership. Discuss any required certifications or regulatory obligations during discovery.",
  },
  {
    question: "What agile methodologies do your offshore development teams follow?",
    answer:
      "We use standard Scrum and Kanban workflows with bi-weekly sprint demos, daily async Slack updates, sprint retrospective meetings, and transparent Jira task tracking.",
  },
  {
    question: "Can your offshore teams integrate into our existing internal dev team?",
    answer:
      "Yes! We offer seamless staff augmentation where our senior engineers join your GitHub repositories, participate in daily standups, and work alongside your internal CTO or lead architect.",
  },
  {
    question: "What communication channels do you use for international projects?",
    answer:
      "We communicate in fluent written and spoken English via Slack, Microsoft Teams, Zoom, Google Meet, Jira, and GitHub for real-time collaboration.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Offshore Software Development Services in India",
  "provider": {
    "@type": "Organization",
    "name": "Anavya Infotech",
    "url": "https://www.anavyainfotech.com",
  },
  "serviceType": "Offshore Software Development & IT Outsourcing",
  "areaServed": ["United States", "United Kingdom", "United Arab Emirates", "Australia", "Canada", "Global"],
  "description": "Full-spectrum offshore software engineering, custom SaaS, AI automation, and cloud development services.",
};

export default function OffshoreSoftwareDevelopmentPage() {
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
              { label: "Solutions", href: "/solutions/enterprise" },
              { label: "Offshore Software Development", href: "/offshore-software-development-company" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Globe className="h-3.5 w-3.5" /> Global IT Outsourcing Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Enterprise offshore software <br />
            <span className="text-blue-700">engineering partner in India.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Add engineering capacity for custom web applications, AI integrations, mobile products, and business software with an India-based team and a delivery model scoped to your project.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md"
            >
              <span>Request Offshore Proposal</span>
              <ArrowRight className="h-4 w-4 text-blue-400" />
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-white border border-stone-200 text-xs font-semibold text-stone-700">
              <ShieldCheck className="h-4 w-4 text-blue-700" />
              <span>Security requirements agreed per project</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offshore Capabilities Grid */}
      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Full-Spectrum Offshore Engineering Services.
            </h2>
            <p className="text-stone-600 font-light">
              From MVP development for US startups to high-throughput cloud migrations for enterprise brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom SaaS & Web Application Development",
                desc: "Web apps built with technologies such as Next.js, React, Node.js, and PostgreSQL, selected to fit the product requirements.",
                icon: Server,
              },
              {
                title: "Autonomous AI Chatbots & RAG Pipelines",
                desc: "Enterprise LLM agents powered by OpenAI, Vector Databases, and custom API function calling to automate support.",
                icon: Sparkles,
              },
              {
                title: "Cross-Platform Mobile App Development",
                desc: "Native-grade iOS & Android mobile applications built on React Native & Flutter with offline sync capabilities.",
                icon: Cpu,
              },
              {
                title: "Headless E-Commerce & Microservices",
                desc: "Decoupled storefronts with sub-300ms page navigations, custom payment gateways, and international multi-currency.",
                icon: Layers,
              },
              {
                title: "Custom CRM & Internal Business Software",
                desc: "Tailored brokerage, logistics, and workflow automation platforms with zero monthly per-seat licensing fees.",
                icon: Lock,
              },
              {
                title: "Dedicated Developer Staff Augmentation",
                desc: "Senior full-stack developers, UI/UX designers, and DevOps engineers dedicated exclusively to your product roadmap.",
                icon: Globe,
              },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-md bg-stone-50 border border-stone-200 space-y-4 hover:border-blue-700/50 transition-all">
                <service.icon className="h-7 w-7 text-blue-700" />
                <h3 className="text-xl font-bold text-stone-900">{service.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outsource to Anavya Infotech */}
      <section className="py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Why Partner With Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              The Anavya Infotech Offshore Advantage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Flexible delivery models",
                desc: "Choose a dedicated team, defined project scope, or specialist augmentation based on your roadmap.",
              },
              {
                title: "Planned collaboration hours",
                desc: "Agree on communication windows and meeting cadence during project planning to support distributed teams.",
              },
              {
                title: "Clear ownership terms",
                desc: "Define intellectual property, repository access, and handover responsibilities in the project agreement.",
              },
              {
                title: "Agile & Transparent",
                desc: "Bi-weekly sprint demos, transparent Jira task tracking, and daily async Slack updates.",
              },
            ].map((adv, i) => (
              <div key={i} className="p-6 rounded-md bg-white border border-stone-200 space-y-2">
                <CheckCircle2 className="h-6 w-6 text-blue-700" />
                <h3 className="text-lg font-bold text-stone-900">{adv.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-stone-600 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-stone-900">How an offshore engineering partnership works</h2>
            <p>Offshore development works best when the external team joins a clear product process. Before work begins, we align on the business goal, users, existing systems, delivery constraints, and how success will be reviewed. The resulting scope identifies the first deliverable, open questions, dependencies, and the people responsible for decisions.</p>
            <p>During delivery, work is broken into reviewable tasks. Teams can use the client’s existing issue tracker and code repository, agree on a meeting cadence, and share progress through written updates and demonstrations. This keeps product decisions visible across time zones and gives your internal team a clear view of work in progress.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-stone-900">Choose a delivery model that fits the work</h2>
            <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="bg-stone-50 text-stone-900"><th className="p-3 border">Model</th><th className="p-3 border">Best suited to</th><th className="p-3 border">Planning focus</th></tr></thead><tbody><tr><td className="p-3 border font-semibold">Dedicated team</td><td className="p-3 border">Ongoing product development</td><td className="p-3 border">Roles, backlog, collaboration cadence</td></tr><tr><td className="p-3 border font-semibold">Fixed scope</td><td className="p-3 border">A well-defined feature or MVP</td><td className="p-3 border">Acceptance criteria, assumptions, milestones</td></tr><tr><td className="p-3 border font-semibold">Team augmentation</td><td className="p-3 border">Adding a specialist to an existing team</td><td className="p-3 border">Required skills, onboarding, ownership boundaries</td></tr></tbody></table></div>
            <p>Pricing depends on roles, duration, scope, and operating model. We discuss these inputs during discovery and provide a proposal for review before work starts.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-stone-900">Technology, security, and handover</h2>
            <p>Our listed capabilities include Next.js and React applications, Node.js and Python services, relational and document databases, AI integrations, mobile applications, and e-commerce systems. Project architecture should follow your product constraints, security requirements, and team expertise rather than a fixed stack chosen for marketing copy.</p>
            <p>At kickoff, agree repository access, code review expectations, environment ownership, secrets handling, documentation, and intellectual property terms in the project agreement. At handover, the team can review delivered code, deployment processes, operational notes, and remaining work with your maintainers.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-stone-900">Explore delivered project examples</h2>
            <p>Review the published <Link href="/case-studies" className="text-blue-700 underline">case studies</Link> for project context, capabilities, and outcomes. Each engagement is different; discuss comparable requirements with us before using any result as a forecast for your project.</p>
            <div className="flex flex-wrap gap-4"><Link href="/case-studies/automixa-ai" className="text-blue-700 underline">Automixa AI</Link><Link href="/case-studies/money-capital-finance" className="text-blue-700 underline">Money Capital Finance</Link><Link href="/case-studies/nakul-properties" className="text-blue-700 underline">Nakul Properties</Link></div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-stone-600 leading-relaxed">
          <div className="space-y-3"><h2 className="text-3xl font-bold text-stone-900">What to evaluate before choosing an offshore partner</h2><p>Compare prospective partners on delivery practices and fit, not just hourly rates. Ask who will work on the project, how technical decisions are reviewed, how changes to scope are handled, and what documentation and handover are included. Confirm the communication cadence, working-hour expectations, escalation contact, and the client-side decisions needed to keep delivery moving.</p></div>
          <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="bg-white text-stone-900"><th className="p-3 border">Area</th><th className="p-3 border">Questions to settle</th></tr></thead><tbody><tr><td className="p-3 border font-semibold">People and ownership</td><td className="p-3 border">Who is assigned, who reviews the work, and who owns product decisions?</td></tr><tr><td className="p-3 border font-semibold">Delivery</td><td className="p-3 border">What is in the first milestone, how are changes approved, and how is progress demonstrated?</td></tr><tr><td className="p-3 border font-semibold">Security</td><td className="p-3 border">Which systems can the team access, how are credentials managed, and what obligations apply to your data?</td></tr><tr><td className="p-3 border font-semibold">Commercial terms</td><td className="p-3 border">How are fees, taxes, payment timing, termination, and intellectual property described in the agreement?</td></tr></tbody></table></div>
          <div className="space-y-3"><h2 className="text-3xl font-bold text-stone-900">Build for the existing product, not a generic stack</h2><p>A typical web project may include a frontend, API layer, data store, integrations, deployment pipeline, and monitoring. We start by understanding what already exists: repository conventions, hosting, authentication, data sensitivity, expected traffic, and the people who will maintain the result. New services and AI components should have clear boundaries, useful failure behavior, and a way to monitor cost and quality.</p><p>For an AI feature, discovery should identify its data sources, access controls, expected answers, fallback behavior, evaluation method, and human review needs. For e-commerce, it should account for catalog management, payments, order operations, analytics, and the commerce platform already in use. This helps scope decisions around actual business requirements.</p></div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Offshore Questions"
        subtitle="Clear answers regarding software outsourcing to Anavya Infotech."
        faqs={OFFSHORE_FAQS}
      />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
