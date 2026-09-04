import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Custom Web Application Development Company | India & USA | Anavya Infotech",
  description:
    "We build scalable custom web applications — SaaS platforms, portals, dashboards & internal tools — for businesses in India, Delhi NCR & the USA. React/Next.js engineering.",
  keywords:
    "custom web application development, SaaS platform development India, custom portal development, React Next.js web application company, internal operations software",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/web-applications",
  },
  openGraph: {
    title: "Custom Web Application Development Company | India & USA | Anavya Infotech",
    description:
      "We build scalable custom web applications — SaaS platforms, portals, dashboards & internal tools — for businesses in India, Delhi NCR & the USA. React/Next.js engineering.",
    url: "https://www.anavyainfotech.com/services/web-applications",
    type: "website",
  },
};

const WEB_APPLICATIONS_FAQS = [
  {
    question: "What's the difference between a website and a web application?",
    answer: "A website mainly presents information; a web application lets users log in, interact with data, and perform actions (bookings, dashboards, transactions) — it's built on application logic, not just pages."
  },
  {
    question: "Can you build on top of our existing systems?",
    answer: "Yes — we regularly integrate new web applications with existing CRMs, payment gateways, and internal databases via API."
  },
  {
    question: "Do you provide ongoing maintenance after launch?",
    answer: "Yes, we offer maintenance and iteration retainers post-launch — see Pricing & Plans."
  },
  {
    question: "What industries have you built web applications for?",
    answer: "Fintech, real estate, SaaS/AI automation, and e-commerce — see our Case Studies."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Custom Web Application Development Services",
  description: "We build scalable custom web applications — SaaS platforms, portals, dashboards & internal tools — for businesses in India, Delhi NCR & the USA. React/Next.js engineering.",
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
    { num: "01", title: "Discover & Plan", desc: "Technical scoping, database schema, and architecture blueprint." },
    { num: "02", title: "Architecture & Design", desc: "UI mockups and system diagrams." },
    { num: "03", title: "Agile Development", desc: "Sprint-based builds with regular demos." },
    { num: "04", title: "Optimize & Launch", desc: "Load testing, security validation, and deployment." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Web Applications", href: "/services/web-applications" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Code className="h-3.5 w-3.5 text-blue-700" /> Web Application Development
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Custom Web Application Development for Growing Businesses
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light max-w-4xl leading-relaxed">
            When off-the-shelf software can't keep up with how your business actually operates, a custom web application closes the gap. Anavya Infotech designs and engineers web applications — customer portals, SaaS products, internal operations tools, booking systems, and data dashboards — built on modern, scalable architecture and owned entirely by you.
          </p>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            We've shipped production web applications like <Link href="/case-studies/automixa-ai" className="text-blue-700 underline">Automixa AI</Link> (an Instagram automation platform processing real-time Meta Graph API webhooks) and <Link href="/case-studies/money-capital-finance" className="text-blue-700 underline">Money Capital Finance's</Link> loan-eligibility portal with live EMI calculators — so we understand what it takes to build software real users depend on daily, not just a demo.
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
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <div key={index} className="p-4 rounded-md bg-stone-50 border border-stone-100 flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Why It Matters
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            Generic tools force your team to adapt to the software. A custom web application is built around how your business actually works — which means fewer manual workarounds, fewer spreadsheets, and fewer errors. For fast-growing companies in Delhi NCR and the USA, that difference compounds fast: less time spent on operations, more time spent on customers.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3">
                <div className="text-2xl font-bold text-blue-700">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
