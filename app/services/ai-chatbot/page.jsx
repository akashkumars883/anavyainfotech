import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Cpu } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Custom AI Chatbot Development & LLM Integration Services",
  description:
    "Deploy secure enterprise AI chatbots, LLM integrations, OpenAI/Anthropic models, and corporate RAG vector search pipelines with Anavya Infotech.",
  keywords: [
    "AI chatbot development",
    "LLM integration services",
    "enterprise AI assistant",
    "RAG architecture",
    "custom AI chatbot agency",
    "OpenAI GPT-4 integration",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ai-chatbot",
  },
  openGraph: {
    title: "Custom AI Chatbot Development & LLM Integration Services",
    description:
      "Deploy secure enterprise AI chatbots, LLM integrations, OpenAI/Anthropic models, and corporate RAG vector search pipelines with Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/ai-chatbot",
    type: "website",
  },
};

const AI_CHATBOT_FAQS = [
  {
    "question": "Will the chatbot sound robotic or generic?",
    "answer": "No — we train it on your business's actual tone, products, and FAQs rather than deploying a generic script."
  },
  {
    "question": "Can it work on WhatsApp, not just my website?",
    "answer": "Yes, we build for WhatsApp Business API, website widgets, and Instagram DM/comment automation depending on where your customers actually are."
  },
  {
    "question": "What happens when the bot can't answer a question?",
    "answer": "It hands off to a human team member (or captures contact details for follow-up) rather than guessing."
  }
];

const serviceSchemas = createServiceSchema({
  name: "AI Chatbot Development for Business | WhatsApp & Website Bots",
  description: "Custom AI chatbots for websites, WhatsApp & Instagram — automate support, capture leads & qualify customers 24/7. Built by Anavya Infotech, India & USA.",
  slug: "ai-chatbot",
  serviceType: "Artificial Intelligence Development",
  faqs: AI_CHATBOT_FAQS,
  breadcrumbLabel: "AI Chatbot",
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left">
      {/* Search Engine Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "AI Chatbot", href: "/services/ai-chatbot" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Services / AI Chatbot
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            AI Chatbots That Capture Leads and Answer Customers 24/7
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            A visitor who leaves your site because no one answered their question at 11 PM is a lead you paid for and lost. Anavya Infotech builds custom AI chatbots — for your website, WhatsApp, or Instagram DMs — that answer real customer questions, qualify leads, and hand off to your team only when it actually matters.
          </p>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why It Matters
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Most customers now expect an instant response, and most businesses can&apos;t staff support around the clock. A well-built AI chatbot fills that gap — not by replacing your team, but by handling the repetitive 80% of questions so your team focuses on the 20% that actually need a human.
            </p>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              We built Automixa AI, a production Instagram automation platform processing real-time comment and DM automation over the official Meta Graph API — so our chatbot engineering isn&apos;t theoretical; it&apos;s running live for thousands of active creators and brands today.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Cpu className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Custom AI chatbot trained on your business&apos;s actual products, FAQs, and pricing</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Website, WhatsApp Business API, and Instagram DM/comment automation</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Lead qualification logic (capture name, need, budget before human handoff)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>CRM integration so captured leads flow straight into your sales pipeline</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Human handoff for complex queries — the bot doesn&apos;t try to fake everything</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Analytics dashboard: conversations, conversion rate, common questions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 01</span>
              <h3 className="text-base font-medium text-stone-900">Map & Criteria</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Map your common customer questions and sales qualification criteria.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Build & Train</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Build and train the chatbot on your business&apos;s real content.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Integrate</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Integrate with website/WhatsApp/Instagram and your CRM.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Launch & Refine</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Launch, monitor conversations, and refine responses continuously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="AI Chatbot FAQs"
        subtitle="Frequently asked questions about custom AI Chatbot development."
        faqs={AI_CHATBOT_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build Your AI Chatbot
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with Anavya Infotech to build intelligent automation for your sales and customer support.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Build Your AI Chatbot →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
