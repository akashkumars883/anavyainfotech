"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Bot, Workflow, Database, Network, CheckCircle2 } from "lucide-react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI, Automation & Custom Enterprise Technology Services",
  "description": "AI chatbots, business process automation workflows, custom CRM software, and API integration services by Anavya Infotech.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Anavya Infotech",
    "url": "https://www.anavyainfotech.com"
  }
};

const TECHNOLOGY_FAQS = [
  {
    question: "What technology & AI services does Anavya Infotech provide?",
    answer: "We deploy custom AI chatbots (LLM & OpenAI API integrations), business process automation workflows, bespoke CRM & ERP software, and high-speed REST/GraphQL API integrations."
  },
  {
    question: "Can AI chatbots integrate directly into our CRM and messaging channels?",
    answer: "Yes, our AI chatbots integrate seamlessly into WhatsApp Business, Meta Instagram/Facebook APIs, custom web portals, and CRM backends."
  },
  {
    question: "How does custom business automation help cut operational costs?",
    answer: "By automating manual data entry, lead assignment, invoicing, and cross-platform sync, businesses eliminate human error and save hundreds of employee hours each month."
  },
  {
    question: "Do you build custom CRMs tailored to our specific business workflow?",
    answer: "Yes, we engineer 100% custom CRM and software management portals with custom pipeline stages, automated reminders, role permissions, and executive analytics dashboards."
  }
];

const subServices = [
  {
    title: "AI Chatbot",
    description: "Smart Conversational AI, Meta API automation, and custom LLM chatbots trained on your business data to capture leads 24/7.",
    href: "/services/ai-chatbot",
    icon: Bot,
    features: ["OpenAI & LLM Fine-Tuning", "WhatsApp & Meta API Sync", "Automated Lead Capture", "Multi-Language Support"]
  },
  {
    title: "Business Automation",
    description: "End-to-end workflow automation engines, Zapier/Make custom webhooks, and process automation to scale operations effortlessly.",
    href: "/services/business-automation",
    icon: Workflow,
    features: ["Custom Webhook Pipelines", "Automated Invoicing & Sync", "Lead Nurturing Sequences", "Zero Human Error"]
  },
  {
    title: "CRM / Custom Software",
    description: "Bespoke CRM portals, ERP management software, and custom internal tools engineered for your exact business requirements.",
    href: "/services/crm-custom-software",
    icon: Database,
    features: ["Pipeline Management", "Role-Based Access Control", "Automated Reminders", "Executive BI Dashboards"]
  },
  {
    title: "API Integration",
    description: "Robust REST & GraphQL API integrations, payment gateway connections, and microservice middleware layers.",
    href: "/services/api-integration",
    icon: Network,
    features: ["High-speed API Endpoints", "Stripe, Razorpay, Bank APIs", "Real-time Telemetry & Logs", "Enterprise SLA Security"]
  }
];

export default function TechnologyCategoryPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-20 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Technology", href: "/services/technology" }]} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-700 shadow-xs">
              <Cpu className="h-3.5 w-3.5 text-blue-700" /> Technology Hub
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
              AI, Automation &amp; <br />
              <span className="text-blue-700">Enterprise Technology Services</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              We engineer custom AI chatbot integrations, automated workflow engines, bespoke CRM software, and high-speed API connections to automate your business operations.
            </p>
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
              Core Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Technology &amp; AI Capabilities
            </h2>
            <p className="text-sm text-stone-600 font-light">
              Automate tasks, scale customer support, and organize business data with custom technology solutions.
            </p>
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
                Talk to our AI &amp; systems engineers to audit your process and deploy custom automated solutions.
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
