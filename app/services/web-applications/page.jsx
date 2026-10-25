import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, Code } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";
import TechBrandIcon from "@/components/TechBrandIcon";

export const metadata = {
  title: "Custom Web Application Development | Anavya Infotech",
  description:
    "Build secure, scalable web applications with Next.js, React, Node.js, and PostgreSQL. Get custom APIs and full code ownership.",
  keywords: [
    "custom web application development company",
    "enterprise web app development",
    "full-stack web development services",
    "Next.js web application",
    "scalable cloud web apps",
    "secure SaaS development",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/web-applications",
  },
  openGraph: {
    title:
      "Custom Web Application Development | Anavya Infotech",
    description:
      "We build custom SaaS platforms, portals, dashboards, and internal tools for businesses in India, Delhi NCR, and the USA using React and Next.js.",
    url: "https://www.anavyainfotech.com/services/web-applications",
    type: "website",
  },
};

const WEB_APPLICATIONS_FAQS = [
  {
    question:
      "Who owns the source code for a custom web app?",
    answer:
      "Your business owns the source code, software design, and database assets when the project is complete. We transfer the code to you so your team can use and manage it.",
  },
  {
    question:
      "Can you continue to add features after launch?",
    answer:
      "Yes. We offer support after launch, including automatic software releases (CI/CD), bug tracking, platform updates, and new features delivered in planned work cycles."
  },
  {
    question:
      "Can a custom web app connect to older software?",
    answer:
      "Yes. We use APIs and connecting software to link modern web apps with older ERPs, CRMs, and databases without interrupting your business."
  },
];

const serviceSchemas = createServiceSchema({
  name: "Custom Web Application Development Services",
  description:
    "Engineer resilient, scalable enterprise web applications on Next.js, React, Node.js & PostgreSQL. High-throughput APIs, enterprise security & 100% code ownership.",
  slug: "web-applications",
  serviceType: "Web Application Development",
  faqs: WEB_APPLICATIONS_FAQS,
  breadcrumbLabel: "Web Applications",
});

export default function ServicePage() {
  const inclusions = [
    "Requirements & technical architecture planning before development starts",
    "Frontend engineering in React/Next.js, backend in Node.js or your preferred stack",
    "Database design (SQL/NoSQL) built for your data model and scale",
    "User authentication, role-based access, and admin dashboards",
    "Third-party API integrations (payments, CRMs, messaging, maps, etc.)",
    "Cloud deployment (AWS/Vercel/GCP) with CI/CD pipelines",
    "Post-launch support, monitoring, and iteration sprints",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Plan Your Application",
      desc: "Set the project scope and plan the database and software design.",
    },
    {
      num: "02",
      title: "Design and Prototype",
      desc: "Create screen designs and diagrams that show how the app will work.",
    },
    {
      num: "03",
      title: "Build the Web App",
      desc: "Build with React, Next.js, or Node.js and share regular demos.",
    },
    {
      num: "04",
      title: "Test and Launch",
      desc: "Check speed and security, then launch on AWS or Vercel.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page"
      data-service="web-applications"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/#services" },
                {
                  label: "Web Applications",
                  href: "/services/web-applications",
                },
              ]}
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Code className="h-3.5 w-3.5 text-blue-700" /> Web Application
              Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom Web Applications for Your Business
            </h1>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Discuss Your Web Application <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/development-illustration.jpg"
              alt="Custom Web Application Development"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>
      {/* EEAT Content Section */}
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-7xl">
            <h2 className="max-w-none text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Web Applications Built for Your Business Needs
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
              Ready-made software may not support all your business processes.
              As your business grows, you may face limits on connections,
              higher subscription costs, or slow performance.
            </p>
            <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
              Anavya Infotech designs and builds secure web applications around
              the way your business works. We create everything from SaaS
              platforms used by multiple businesses to internal staff portals.
              You own the software, and we build it to stay available and
              respond quickly.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Why Off-the-Shelf Software Stifles Enterprise Growth
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Ready-made software can limit how your business operates and
              changes over time:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Rising Recurring Costs" />
                <span>
                  <strong className="text-stone-900">
                    Rising Recurring Costs:
                  </strong>{" "}
                  Per-user fees can rise as your team and customer base grow.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Accumulated Technical Debt" />
                <span>
                  <strong className="text-stone-900">
                    Accumulated Technical Debt:
                  </strong>{" "}
                  Changing third-party software can lead to unreliable API
                  connections and code that is hard to maintain.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Data Lock-In &amp; Compliance Risks" />
                <span>
                  <strong className="text-stone-900">
                    Data Lock-In &amp; Compliance Risks:
                  </strong>{" "}
                  Some SaaS tools limit access to your data, which can make it
                  harder to meet compliance rules.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Inflexible Product Roadmaps" />
                <span>
                  <strong className="text-stone-900">
                    Inflexible Product Roadmaps:
                  </strong>{" "}
                  You may have to change your work to fit the software
                  provider&apos;s update schedule.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Web Applications We Build
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              We build complete web applications that can serve many users at
              once and support new features as your business grows:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Multi-Tenant SaaS Architectures" />
                <span>
                  <strong className="text-stone-900">
                    Multi-Tenant SaaS Architectures:
                  </strong>{" "}
                  Cloud software for multiple customer accounts, with separate
                  data, automatic billing, and flexible subscription plans.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Enterprise Internal Portals" />
                <span>
                  <strong className="text-stone-900">
                    Enterprise Internal Portals:
                  </strong>{" "}
                  Secure staff portals with access based on each person&apos;s role,
                  activity logs, and connections to older software.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Real-Time Dashboards &amp; Analytics" />
                <span>
                  <strong className="text-stone-900">
                    Real-Time Dashboards &amp; Analytics:
                  </strong>{" "}
                  Dashboards that show updated information using WebSockets,
                  data streams, and custom charts.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="High-Throughput RESTful &amp; GraphQL APIs" />
                <span>
                  <strong className="text-stone-900">
                    High-Throughput RESTful &amp; GraphQL APIs:
                  </strong>{" "}
                  REST and GraphQL APIs that help your systems share data
                  quickly with other services.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3"
              >
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              How We Protect Your Application and Data
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              We protect your data, follow security practices, and work to keep
              your application available throughout development:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="SOC-2 &amp; GDPR Alignment" />
                <span>
                  <strong className="text-stone-900">
                    SOC-2 &amp; GDPR Alignment:
                  </strong>{" "}
                  Encrypt stored and shared data with AES-256 and TLS 1.3. Add
                  privacy controls and records of who accesses your system.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="OWASP Top-10 Protection" />
                <span>
                  <strong className="text-stone-900">
                    OWASP Top-10 Protection:
                  </strong>{" "}
                  Protect the code against common attacks, including SQL
                  injection, Cross-Site Scripting (XSS), and Cross-Site Request
                  Forgery (CSRF).
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Automated CI/CD Quality Pipelines" />
                <span>
                  <strong className="text-stone-900">
                    Automated CI/CD Quality Pipelines:
                  </strong>{" "}
                  Before a release, run unit tests, Cypress tests that check
                  user actions, and automatic security checks.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="High Availability Infrastructure" />
                <span>
                  <strong className="text-stone-900">
                    High Availability Infrastructure:
                  </strong>{" "}
                  Run services across multiple regions on AWS or Google Cloud,
                  with a target of 99.99% availability.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-5">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Technology by Layer
            </h2>
            <p className="mt-2 text-sm leading-7 text-stone-600 sm:text-base">
              Tools chosen to help the application run well and stay easy to
              update.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
              <ServiceFeatureIcon label="Frontend Frameworks" />
              <h3 className="text-base font-semibold text-stone-900">
                Frontend Frameworks
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                Next.js 15, React, TypeScript, Tailwind CSS, Redux Toolkit
              </p>
            </article>
            <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
              <ServiceFeatureIcon label="Backend Runtimes" />
              <h3 className="text-base font-semibold text-stone-900">
                Backend Runtimes
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                Node.js, Express, Python (FastAPI / Django), Go
              </p>
            </article>
            <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
              <ServiceFeatureIcon label="Database Engines" />
              <h3 className="text-base font-semibold text-stone-900">
                Database Engines
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                PostgreSQL (Prisma / TypeORM), Redis Cache, MongoDB, TimescaleDB
              </p>
            </article>
            <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
              <ServiceFeatureIcon label="Cloud &amp; DevOps Infrastructure" />
              <h3 className="text-base font-semibold text-stone-900">
                Cloud &amp; DevOps Infrastructure
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                AWS (ECS, Lambda, RDS), GCP, Docker, Kubernetes, Terraform,
                GitHub Actions
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-7">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Built with proven tools
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Individual Technology Cards
            </h2>
            <p className="text-sm leading-7 text-stone-600">
              A stack selected for speed, maintainability, and reliable
              production delivery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {[
              [
                "Next.js",
                "nextdotjs",
                "Renders fast, indexable application pages with server-side support.",
              ],
              [
                "React",
                "react",
                "Creates reusable interfaces for dashboards, portals, and workflows.",
              ],
              [
                "TypeScript",
                "typescript",
                "Catches data and interface errors earlier in development.",
              ],
              [
                "Node.js",
                "nodedotjs",
                "Runs scalable APIs and backend services for the application.",
              ],
              [
                "PostgreSQL",
                "postgresql",
                "Stores relational business data with reliable transactions.",
              ],
              [
                "Redis",
                "redis",
                "Speeds up frequent reads, sessions, and background jobs.",
              ],
              [
                "MongoDB",
                "mongodb",
                "Handles flexible document data and evolving product models.",
              ],
              [
                "AWS",
                "amazonaws",
                "Provides managed hosting, storage, and cloud infrastructure.",
              ],
              [
                "Docker",
                "docker",
                "Packages services consistently for development and deployment.",
              ],
              [
                "Kubernetes",
                "kubernetes",
                "Coordinates containers as workloads grow across environments.",
              ],
              [
                "Terraform",
                "terraform",
                "Defines repeatable cloud infrastructure as versioned code.",
              ],
              [
                "GitHub Actions",
                "githubactions",
                "Automates checks and deployments whenever code changes.",
              ],
            ].map(([name, slug, description]) => (
              <article
                key={name}
                className="group flex min-h-44 flex-col items-start gap-3 rounded-md border border-stone-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-stone-50 transition-colors group-hover:bg-blue-50">
                  <TechBrandIcon slug={slug} size={28} />
                </span>
                <h3 className="text-sm font-medium text-stone-900">{name}</h3>
                <p className="text-xs leading-relaxed text-stone-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about custom web application development."
        faqs={WEB_APPLICATIONS_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to build a web application that scales?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with our senior technical team to scope your application
                requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Web Application →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
