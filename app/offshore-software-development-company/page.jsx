import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Zap, Server, Layers, Lock, Cpu, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Offshore Software Development Company India | Outsourcing Partner",
  description:
    "Anavya Infotech is a premier offshore software development company in India. We engineer custom SaaS, AI chatbots, mobile apps, and CRMs for US, UK & global companies.",
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
    title: "Offshore Software Development Company in India | Anavya Infotech",
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
      "India boasts the world's largest pool of English-speaking software engineers, cutting-edge AI expertise, and cost-effective development structures that reduce tech overheads by 60% to 70%.",
  },
  {
    question: "How do you ensure data security, privacy, and IP protection?",
    answer:
      "We operate under strict US and European data protection standards (GDPR & SOC-2 compliance). We sign legally binding Non-Disclosure Agreements (NDAs) and transfer 100% source code ownership upon milestone completion.",
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
            Accelerate product roadmaps and reduce engineering costs by up to 70%. We deliver custom SaaS platforms, autonomous AI chatbots, mobile applications, and enterprise CRMs for global tech companies.
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
              <span>SOC-2 &amp; GDPR Compliant Workflows</span>
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
                desc: "High-performance web apps built on Next.js 15, React, Node.js, and PostgreSQL with sub-second response times.",
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
                title: "70% Cost Optimization",
                desc: "Enterprise engineering talent at a fraction of US/UK payroll costs, freeing budget for growth marketing.",
              },
              {
                title: "4+ Hrs Time Zone Overlap",
                desc: "Direct daily communication overlap with EST, PST, GMT, and AEST business hours.",
              },
              {
                title: "100% Code Ownership",
                desc: "Complete IP protection, strict NDAs, and full access to private GitHub repositories.",
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
