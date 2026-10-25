import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ServiceProcess from "@/components/ServiceProcess";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Bot, Workflow, Database, Network, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Cloud, DevOps & Technology Consulting",
  description:
    "Improve your business systems with cloud planning, serverless services, CI/CD automation, and technology reviews from Anavya Infotech.",
  keywords: ["technology consulting services", "cloud architecture consulting", "DevOps automation company"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/technology",
  },
  openGraph: {
    title: "Cloud, DevOps & Technology Consulting",
    description:
      "Improve your business systems with cloud planning, serverless services, CI/CD automation, and technology reviews from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/technology",
    type: "website",
  },
};


const TECHNOLOGY_FAQS = [
  {
    question: "What technology & AI services does Anavya Infotech provide?",
    answer: "We build AI chatbots using LLMs and OpenAI APIs, automate business tasks, create custom CRM and ERP software, and connect systems with REST and GraphQL APIs."
  },
  {
    question: "Can AI chatbots integrate directly into our CRM and messaging channels?",
    answer: "Yes. Our AI chatbots can connect with WhatsApp Business, Instagram and Facebook through Meta APIs, websites, and CRM systems."
  },
  {
    question: "How does custom business automation help cut operational costs?",
    answer: "Automation can handle data entry, assign leads, prepare invoices, and share information between tools. This reduces mistakes and saves your team time."
  },
  {
    question: "Do you build custom CRMs tailored to our specific business workflow?",
    answer: "Yes. We build custom CRM and business software with sales stages, automatic reminders, user permissions, and reporting dashboards."
  }
];

const subServices = [
  {
    title: "AI Chatbot",
    description: "AI chatbots that use your business information, connect to Meta APIs, and collect leads at any time.",
    href: "/services/ai-chatbot",
    icon: Bot,
    features: ["OpenAI & LLM Setup", "WhatsApp & Meta API Connections", "Automatic Lead Capture", "Multiple Languages"]
  },
  {
    title: "Business Automation",
    description: "Automate business tasks and connect your tools using workflows, Zapier, Make, and webhooks.",
    href: "/services/business-automation",
    icon: Workflow,
    features: ["Custom Webhook Workflows", "Automatic Invoicing & Data Sharing", "Lead Follow-Up Messages", "Fewer Manual Errors"]
  },
  {
    title: "CRM / Custom Software",
    description: "Custom CRM, ERP, and internal tools designed to fit the way your business works.",
    href: "/services/crm-custom-software",
    icon: Database,
    features: ["Sales Pipeline Management", "Access Based on User Roles", "Automatic Reminders", "Business Reporting Dashboards"]
  },
  {
    title: "API Integration",
    description: "Connect your tools with REST and GraphQL APIs, payment services, and supporting software.",
    href: "/services/api-integration",
    icon: Network,
    features: ["Fast API Connections", "Stripe, Razorpay & Bank APIs", "Live System Logs", "Enterprise Security"]
  }
];


const serviceSchemas = createServiceSchema({
  name: "AI, Automation & Custom Enterprise Technology Services",
  description: "AI chatbots, business process automation workflows, custom CRM software, and API integration services by Anavya Infotech.",
  slug: "technology",
  faqs: TECHNOLOGY_FAQS,
});

export default function TechnologyCategoryPage() {
  return (
    <main className="min-h-screen bg-white text-left service-page" data-service="technology">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Technology", href: "/services/technology" }]} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-700 shadow-xs">
              <Cpu className="h-3.5 w-3.5 text-blue-700" /> Technology &amp; AI Hub
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              AI Tools That Work With Your Business
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              We build AI tools that fit your business. Our chatbots can sort leads at any time, custom CRMs can match your sales process, and system connections can reduce hours of manual work.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Talk to an Engineer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/technology-illustration.jpg"
              alt="Technology & AI Services Illustration"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>
{/* Sub-Services Listing Grid */}
      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              What We Build
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Automation That Pays for Itself
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-stone-50/60 border border-stone-200/90 rounded-md p-8 flex flex-col justify-between hover:bg-white hover:border-blue-700/50 hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-md bg-white border border-stone-200 shadow-xs flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Link
                        href={service.href}
                        className="h-9 w-9 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-blue-700 hover:border-blue-300 transition-all shadow-xs"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-stone-900 group-hover:text-blue-700 transition-colors">
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-200/60 space-y-2.5">
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                        Key Features
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-700 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-200/60">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <ServiceProcess service="technology" />
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Systems Are Already in Use
               </h2>
          <p className="text-sm md:text-base text-stone-600 font-light max-w-3xl leading-relaxed">
            Automixa AI, our Meta Graph API automation platform, handles messages and comments for thousands of active creators in real time. It has done so without account restrictions, showing how our systems work in real business settings.
          </p>
          <div>
            <Link
              href="/case-studies/automixa-ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-stone-800 transition-colors shadow-sm"
            >
              See the Automixa AI Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      

      <FaqSection
        title="Technology & AI Integration FAQs"
        subtitle="Common questions about AI chatbots, business automation, custom CRMs, and APIs."
        faqs={TECHNOLOGY_FAQS}
      />

      {/* CTA Trigger */}
      <section className="py-12 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Want to integrate AI or automate your workflows?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk to our AI and systems team. We can review your process and build solutions to automate your work.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Consult an AI Engineer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
