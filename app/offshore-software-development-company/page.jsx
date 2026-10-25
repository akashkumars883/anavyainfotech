import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Server, Layers, Lock, Cpu, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Offshore Software Development Company | Anavya",
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
      "Offshore software, SaaS, AI, and web app development for startups and businesses around the world.",
    url: "https://www.anavyainfotech.com/offshore-software-development-company",
    type: "website",
  },
};

const OFFSHORE_FAQS = [
  {
    question: "Why hire a software team in India?",
    answer:
      "India has many experienced software developers and teams that work with modern tools. The best way to work together depends on the roles, project, and how closely your team needs to work with ours.",
  },
  {
    question: "How do you protect data, privacy, and intellectual property?",
    answer:
      "Before work begins, we agree on security and data handling. The contract can cover privacy, code access, system controls, and who owns the work. We can also discuss any required certifications or rules.",
  },
  {
    question: "How do your offshore teams plan and track work?",
    answer:
      "We use Scrum or Kanban, show progress every two weeks, share daily Slack updates, review each work cycle, and track tasks in Jira.",
  },
  {
    question: "Can your offshore team work with our developers?",
    answer:
      "Yes. Our senior engineers can join your GitHub projects, take part in daily meetings, and work with your CTO or lead developer.",
  },
  {
    question: "How do you communicate on international projects?",
    answer:
      "We communicate in English using Slack, Microsoft Teams, Zoom, Google Meet, Jira, and GitHub.",
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
  "description": "Offshore software development, custom SaaS, AI automation, and cloud services.",
};

export default function OffshoreSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <div
        className="service-page"
        data-service="offshore-software-development"
      >
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions/enterprise" },
              {
                label: "Offshore Software Development",
                href: "/offshore-software-development-company",
              },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Globe className="h-3.5 w-3.5" /> Global IT Outsourcing Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-7xl">
            Offshore Software Development for Growing Teams
          </h1>

          <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
            Add engineering capacity for custom web applications, AI integrations, mobile products, and business software with an India-based team and a delivery model scoped to your project.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              <span>Request a Project Proposal</span>
              <ArrowRight className="h-4 w-4 text-blue-400" />
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-white border border-stone-200 text-xs font-semibold text-stone-700">
              <ShieldCheck className="h-4 w-4 text-blue-700" />
              <span>Security requirements agreed per project</span>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Offshore Capabilities Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Core Capabilities
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Offshore Software Services.
            </h2>
            <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
              From MVPs for US startups to cloud migrations for large businesses.
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
                title: "AI Chatbots & RAG Tools",
                desc: "AI chatbots that use OpenAI, vector databases, and custom API connections to help automate customer support.",
                icon: Sparkles,
              },
              {
                title: "Cross-Platform Mobile App Development",
                desc: "iOS and Android apps built with React Native or Flutter that can sync data while offline.",
                icon: Cpu,
              },
              {
                title: "Headless E-Commerce & Microservices",
                desc: "Online stores with fast page changes, custom payment options, and support for multiple currencies.",
                icon: Layers,
              },
              {
                title: "Custom CRM & Internal Business Software",
                desc: "Custom software for brokers, logistics teams, and business tasks, with no monthly fee per user.",
                icon: Lock,
              },
              {
                title: "Add Developers to Your Team",
                desc: "Experienced full-stack developers, UI/UX designers, and DevOps engineers focused on your product plan.",
                icon: Globe,
              },
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <service.icon className="h-7 w-7 text-blue-700" />
                <h3 className="text-lg font-semibold text-stone-900">{service.title}</h3>
                <p className="text-sm leading-7 text-stone-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outsource to Anavya Infotech */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Why Partner With Us
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Why Work With Anavya Infotech?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: "Ways to work together",
                desc: "Choose a dedicated team, a set project, or an expert to join your team.",
              },
              {
                title: "Planned collaboration hours",
                desc: "Set work hours and meeting times that work for teams in different locations.",
              },
              {
                title: "Clear ownership",
                desc: "Agree on who owns the work, who can access the code, and what we will hand over.",
              },
              {
                title: "Clear updates",
                desc: "See work every two weeks, track tasks in Jira, and get daily Slack updates.",
              },
            ].map((adv, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3 service-feature-card">
                <CheckCircle2 className="h-6 w-6 text-blue-700" />
                <h3 className="text-lg font-semibold text-stone-900">{adv.title}</h3>
                <p className="text-sm leading-7 text-stone-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-sm leading-7 text-stone-600 sm:text-base">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              How We Work With Offshore Teams
            </h2>
            <p className="max-w-7xl">
              Offshore work goes well when everyone has a clear plan. Before we
              start, we agree on the business goal, users, current systems,
              timeline, and how we will measure success. The plan lists the
              first task, open questions, things the team depends on, and who
              will make decisions.
            </p>
            <p className="max-w-7xl">
              We break the work into tasks that are easy to review. We can use
              your task tracker and code repository, set meeting times, and
              share progress in writing and through demos. This helps teams in
              different time zones keep up with decisions and work.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Choose How We Work Together
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-stone-50 text-stone-900">
                    <th className="border border-stone-200 p-3">Model</th>
                    <th className="border border-stone-200 p-3">Best suited to</th>
                    <th className="border border-stone-200 p-3">Planning focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stone-200 p-3 font-semibold">Dedicated team</td>
                    <td className="border border-stone-200 p-3">Ongoing product development</td>
                    <td className="border border-stone-200 p-3">Roles, backlog, collaboration cadence</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-200 p-3 font-semibold">Fixed scope</td>
                    <td className="border border-stone-200 p-3">A well-defined feature or MVP</td>
                    <td className="border border-stone-200 p-3">Acceptance criteria, assumptions, milestones</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-200 p-3 font-semibold">Team augmentation</td>
                    <td className="border border-stone-200 p-3">Adding a specialist to an existing team</td>
                    <td className="border border-stone-200 p-3">Required skills, onboarding, ownership boundaries</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="max-w-7xl">
              Pricing depends on the roles, timeline, project, and team setup.
              We discuss these details and send you a proposal before work
              starts.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Technology, Security, and Handover
            </h2>
            <p className="max-w-7xl">
              We work with Next.js and React apps, Node.js and Python services,
              databases, AI tools, mobile apps, and e-commerce systems. We
              choose the tools based on your product, security needs, and
              team&apos;s experience.
            </p>
            <p className="max-w-7xl">
              Before we start, we agree on code access, reviews, system
              ownership, password handling, documentation, and intellectual
              property in the project agreement. At handover, we review the
              code, launch process, operating notes, and remaining work with
              your team.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              See Examples of Our Work
            </h2>
            <p className="max-w-7xl">
              Review the published{" "}
              <Link href="/case-studies" className="text-blue-700 underline">
                case studies
              </Link>{" "}
              for project context, capabilities, and outcomes. Each engagement
              is different; discuss comparable requirements with us before
              using any result as a forecast for your project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies/automixa-ai" className="text-blue-700 underline">
                Automixa AI
              </Link>
              <Link href="/case-studies/money-capital-finance" className="text-blue-700 underline">
                Money Capital Finance
              </Link>
              <Link href="/case-studies/nakul-properties" className="text-blue-700 underline">
                Nakul Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-sm leading-7 text-stone-600 sm:text-base">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              What to evaluate before choosing an offshore partner
            </h2>
            <p className="max-w-7xl">
              Compare prospective partners on delivery practices and fit, not
              just hourly rates. Ask who will work on the project, how
              technical decisions are reviewed, how changes to scope are
              handled, and what documentation and handover are included.
              Confirm the communication cadence, working-hour expectations,
              escalation contact, and the client-side decisions needed to keep
              delivery moving.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white text-stone-900">
                  <th className="border border-stone-200 p-3">Area</th>
                  <th className="border border-stone-200 p-3">Questions to settle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 p-3 font-semibold">People and ownership</td>
                  <td className="border border-stone-200 p-3">Who is assigned, who reviews the work, and who owns product decisions?</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 p-3 font-semibold">Delivery</td>
                  <td className="border border-stone-200 p-3">What is in the first milestone, how are changes approved, and how is progress demonstrated?</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 p-3 font-semibold">Security</td>
                  <td className="border border-stone-200 p-3">Which systems can the team access, how are credentials managed, and what obligations apply to your data?</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 p-3 font-semibold">Commercial terms</td>
                  <td className="border border-stone-200 p-3">How are fees, taxes, payment timing, termination, and intellectual property described in the agreement?</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Build for the existing product, not a generic stack
            </h2>
            <p>
              A typical web project may include a frontend, API layer, data
              store, integrations, deployment pipeline, and monitoring. We
              start by understanding what already exists: repository
              conventions, hosting, authentication, data sensitivity, expected
              traffic, and the people who will maintain the result. New
              services and AI components should have clear boundaries, useful
              failure behavior, and a way to monitor cost and quality.
            </p>
            <p>
              For an AI feature, discovery should identify its data sources,
              access controls, expected answers, fallback behavior, evaluation
              method, and human review needs. For e-commerce, it should account
              for catalog management, payments, order operations, analytics,
              and the commerce platform already in use. This helps scope
              decisions around actual business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Offshore Questions"
        subtitle="Answers to common questions about working with our offshore team."
        faqs={OFFSHORE_FAQS}
      />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
