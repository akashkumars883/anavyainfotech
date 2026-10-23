import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, Code } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";
import TechBrandIcon from "@/components/TechBrandIcon";

export const metadata = {
  title: "Custom Web Application Development Company | Anavya Infotech",
  description: "Engineer resilient, scalable enterprise web applications on Next.js, React, Node.js & PostgreSQL. High-throughput APIs, enterprise security & 100% code ownership.",
  keywords: ["custom web application development company","enterprise web app development","full-stack web development services","Next.js web application","scalable cloud web apps","secure SaaS development"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/web-applications",
  },
  openGraph: {
    title: "Custom Web Application Development Company - India & USA - Anavya Infotech",
    description:
      "We build scalable custom web applications — SaaS platforms, portals, dashboards & internal tools — for businesses in India, Delhi NCR & the USA. React/Next.js engineering.",
    url: "https://www.anavyainfotech.com/services/web-applications",
    type: "website",
  },
};

const WEB_APPLICATIONS_FAQS = [
  {
    "question": "Who retains the intellectual property and source code rights for custom web apps?",
    "answer": "Your business retains 100% ownership of all source code, software architecture, intellectual property, and database assets upon project completion. We supply unencumbered repositories via standard code transfer procedures."
  },
  {
    "question": "How do you handle continuous feature releases after initial deployment?",
    "answer": "We offer flexible post-launch Support Service Level Agreements (SLAs). Our engineering teams manage CI/CD deployment runs, real-time bug tracking, platform updates, and feature development using agile sprint cycles."
  },
  {
    "question": "Can custom web applications integrate with legacy software systems?",
    "answer": "Yes. We regularly build custom API adapters and middleware layers that connect modern web applications with legacy ERPs, CRMs, and core databases without disrupting ongoing business operations."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Custom Web Application Development Services",
  description: "Engineer resilient, scalable enterprise web applications on Next.js, React, Node.js & PostgreSQL. High-throughput APIs, enterprise security & 100% code ownership.",
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
    { num: "01", title: "Discovery & Architecture Planning", desc: "Technical scoping, database schema, and architecture blueprint." },
    { num: "02", title: "UI/UX Design & Prototyping", desc: "UI mockups and system diagrams tailored for application workflows." },
    { num: "03", title: "Agile Web App Development", desc: "Sprint-based React/Next.js and Node.js builds with regular demos." },
    { num: "04", title: "QA Testing & Cloud Deployment", desc: "Load testing, security validation, and scalable AWS/Vercel deployment." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="web-applications">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Web Applications", href: "/services/web-applications" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Code className="h-3.5 w-3.5 text-blue-700" /> Web Application Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom Web Application Development Company
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              When off-the-shelf software can&apos;t keep up with how your business actually operates, a custom web application closes the gap. Anavya Infotech designs and engineers web applications — customer portals, SaaS products, internal operations tools, booking systems, and data dashboards — built on modern, scalable architecture and owned entirely by you.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Discuss Your Web Application → <ArrowRight className="h-4 w-4" />
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
      <section className="py-12 md:py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Authoritative Custom Web Application Development
          </h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            <p>
              In today&apos;s highly competitive digital landscape, relying on generic, off-the-shelf software often forces your team to adapt to rigid workflows. Partnering with a specialized <strong>custom web application development company</strong> allows you to build software around how your business actually operates. At Anavya Infotech, we bring years of demonstrated technical expertise to engineer scalable solutions. Whether you require robust <strong>SaaS platform development in India</strong> or complex <strong>custom portal development</strong> for your enterprise, our agile methodology ensures measurable business outcomes and operational efficiency.
            </p>
            <p>
              Our authority in the field is built on a foundation of technical excellence and rigorous security standards. We specialize in React, Next.js, and Node.js architectures, ensuring your application is not only lightning-fast but also highly secure against modern threats. By adhering to strict data privacy compliance and utilizing modern cloud infrastructures like AWS, we deliver enterprise-grade tools that are resilient and future-proof. We don&apos;t just write code; we provide strategic technology consulting built on trust and proven results.
            </p>
          </div>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Resilient, High-Throughput Web Applications Engineered for Scale</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Off-the-shelf software and generic web platforms often fail to support complex business processes. As enterprise workloads increase, organizations encounter integration limits, rising subscription fees, and performance bottlenecks.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech is a dedicated custom web application development company. We design, build, and deploy high-throughput, secure web applications tailored to your operational workflows. From multi-tenant SaaS platforms to complex internal portals, our software solutions deliver high availability, low latency, and full intellectual property ownership.</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Why Off-the-Shelf Software Stifles Enterprise Growth</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Relying on pre-packaged software solutions often forces businesses into restrictive technical setups that limit long-term agility:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Rising Recurring Costs" /><span><strong className="text-stone-900">Rising Recurring Costs:</strong> Per-user license models create escalating operational overhead as your team and client base expand.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Accumulated Technical Debt" /><span><strong className="text-stone-900">Accumulated Technical Debt:</strong> Trying to customize rigid third-party software often leads to unstable API integrations and brittle code bases.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Data Lock-In &amp; Compliance Risks" /><span><strong className="text-stone-900">Data Lock-In &amp; Compliance Risks:</strong> Third-party SaaS solutions limit direct access to raw data databases, making strict regulatory compliance difficult.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Inflexible Product Roadmaps" /><span><strong className="text-stone-900">Inflexible Product Roadmaps:</strong> You are forced to adapt your operations around vendor update schedules rather than your team's specific business priorities.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Core Application Disciplines We Deliver</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We build modular full-stack applications designed to handle high concurrency and support long-term feature expansion:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Multi-Tenant SaaS Architectures" /><span><strong className="text-stone-900">Multi-Tenant SaaS Architectures:</strong> Cloud-native software applications built with tenant database isolation, automated billing, and configurable subscription models.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Enterprise Internal Portals" /><span><strong className="text-stone-900">Enterprise Internal Portals:</strong> Secure operations portals equipped with multi-level role-based access controls (RBAC), audit logging, and legacy system integrations.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Real-Time Dashboards &amp; Analytics" /><span><strong className="text-stone-900">Real-Time Dashboards &amp; Analytics:</strong> High-frequency data display platforms built on WebSockets, stream processing, and custom chart rendering.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="High-Throughput RESTful &amp; GraphQL APIs" /><span><strong className="text-stone-900">High-Throughput RESTful &amp; GraphQL APIs:</strong> Distributed API gateways designed for fast server processing, third-party system data exchange, and high payload delivery.</span></div></div></div></div></section>
<section className="py-12 bg-white border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3">
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Enterprise Security, Reliability &amp; Compliance Matrix</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Our application engineering process prioritizes data privacy, security standards, and high uptime targets across every development phase:</p><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="SOC-2 &amp; GDPR Alignment" /><span><strong className="text-stone-900">SOC-2 &amp; GDPR Alignment:</strong> Built-in data encryption protocols for both stored and transmitted data (AES-256 and TLS 1.3), automated privacy controls, and user access auditing.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="OWASP Top-10 Protection" /><span><strong className="text-stone-900">OWASP Top-10 Protection:</strong> Code bases are guarded against common vulnerability vectors, including SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Automated CI/CD Quality Pipelines" /><span><strong className="text-stone-900">Automated CI/CD Quality Pipelines:</strong> Every codebase deployment passes unit tests, end-to-end Cypress user interaction runs, and automated static security scans.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="High Availability Infrastructure" /><span><strong className="text-stone-900">High Availability Infrastructure:</strong> Deployed using multi-region container orchestration on AWS or Google Cloud, targeting 99.99% system availability.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12">
  <div className="mx-auto max-w-7xl space-y-5">
    <div className="max-w-4xl">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Technology by Layer</h2>
      <p className="mt-2 text-sm leading-7 text-stone-600 sm:text-base">Production technologies selected for performance, maintainability, and reliable delivery.</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
        <ServiceFeatureIcon label="Frontend Frameworks" />
        <h3 className="text-base font-semibold text-stone-900">Frontend Frameworks</h3>
        <p className="text-sm leading-relaxed text-stone-600">Next.js 15, React, TypeScript, Tailwind CSS, Redux Toolkit</p>
      </article>
      <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
        <ServiceFeatureIcon label="Backend Runtimes" />
        <h3 className="text-base font-semibold text-stone-900">Backend Runtimes</h3>
        <p className="text-sm leading-relaxed text-stone-600">Node.js, Express, Python (FastAPI / Django), Go</p>
      </article>
      <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
        <ServiceFeatureIcon label="Database Engines" />
        <h3 className="text-base font-semibold text-stone-900">Database Engines</h3>
        <p className="text-sm leading-relaxed text-stone-600">PostgreSQL (Prisma / TypeORM), Redis Cache, MongoDB, TimescaleDB</p>
      </article>
      <article className="service-feature-card group rounded-md border border-stone-200 bg-white p-5 shadow-sm">
        <ServiceFeatureIcon label="Cloud &amp; DevOps Infrastructure" />
        <h3 className="text-base font-semibold text-stone-900">Cloud &amp; DevOps Infrastructure</h3>
        <p className="text-sm leading-relaxed text-stone-600">AWS (ECS, Lambda, RDS), GCP, Docker, Kubernetes, Terraform, GitHub Actions</p>
      </article>
    </div>
  </div>
</section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Engineering Impact: Money Capital Finance Portal</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Need" /><span><strong className="text-stone-900">Client Need:</strong> Money Capital needed to replace a legacy financial management system with an automated customer portal capable of processing multi-tiered loan applications.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Engineering Solution" /><span><strong className="text-stone-900">Engineering Solution:</strong> Anavya Infotech built a custom React and Node.js portal featuring automated document validation, real-time credit engine processing via webhooks, and secure PostgreSQL data storage.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Operational Impact" /><span><strong className="text-stone-900">Operational Impact:</strong> Application handling speed dropped from 72 hours to under 24 hours, customer portal conversions grew by 38%, and the platform completed full SOC-2 compliance verification without architectural revisions.</span></div></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-7">
          <div className="max-w-3xl space-y-3"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Built with proven tools</p><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Individual Technology Cards</h2><p className="text-sm leading-7 text-stone-600">A stack selected for speed, maintainability, and reliable production delivery.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {[
              ["Next.js", "nextdotjs", "Renders fast, indexable application pages with server-side support."],
              ["React", "react", "Creates reusable interfaces for dashboards, portals, and workflows."],
              ["TypeScript", "typescript", "Catches data and interface errors earlier in development."],
              ["Node.js", "nodedotjs", "Runs scalable APIs and backend services for the application."],
              ["PostgreSQL", "postgresql", "Stores relational business data with reliable transactions."],
              ["Redis", "redis", "Speeds up frequent reads, sessions, and background jobs."],
              ["MongoDB", "mongodb", "Handles flexible document data and evolving product models."],
              ["AWS", "amazonaws", "Provides managed hosting, storage, and cloud infrastructure."],
              ["Docker", "docker", "Packages services consistently for development and deployment."],
              ["Kubernetes", "kubernetes", "Coordinates containers as workloads grow across environments."],
              ["Terraform", "terraform", "Defines repeatable cloud infrastructure as versioned code."],
              ["GitHub Actions", "githubactions", "Automates checks and deployments whenever code changes."],
            ].map(([name, slug, description]) => (
              <article key={name} className="group flex min-h-44 flex-col items-start gap-3 rounded-md border border-stone-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-stone-50 transition-colors group-hover:bg-blue-50"><TechBrandIcon slug={slug} size={28} /></span>
                <h3 className="text-sm font-medium text-stone-900">{name}</h3>
                <p className="text-xs leading-relaxed text-stone-600">{description}</p>
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
                Connect with our senior technical team to scope your application requirements.
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

