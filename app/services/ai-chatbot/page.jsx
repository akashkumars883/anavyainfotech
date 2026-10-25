import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedCoreServices from "@/components/RelatedCoreServices";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Cpu,
  Bot,
  Code,
  Database,
  Bell,
  CheckCircle2,
  Sparkles,
  Globe,
  Workflow,
  Search,
  UsersRound,
  ChartNoAxesCombined,
  Wrench,
  Layers,
} from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "AI Chatbot & RAG Development | Anavya Infotech",
  description:
    "Build AI chatbots that use your business information to answer questions, support customers, qualify leads, and sort requests at any time.",
  keywords: [
    "custom ai chatbot development",
    "enterprise rag pipeline development",
    "ai automation agency",
    "LLM integration services",
    "LangChain developers",
    "vector database implementation",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ai-chatbot",
  },
  openGraph: {
    title: "AI Chatbot & RAG Development | Anavya Infotech",
    description:
      "Build AI chatbots that use your business information to answer questions, support customers, qualify leads, and sort requests at any time.",
    url: "https://www.anavyainfotech.com/services/ai-chatbot",
    type: "website",
  },
};

const AI_CHATBOT_FAQS = [
  {
    question:
      "Will AI models train on our business data?",
    answer:
      "No. We use private API connections and databases covered by confidentiality agreements. Your business data, user logs, and documents are not used to train public AI models."
  },
  {
    question:
      "What happens when the chatbot does not know an answer?",
    answer:
      "If the answer is not in your information, the chatbot can say it does not know, ask a follow-up question, or pass the conversation to a person. This helps prevent made-up answers."
  },
  {
    question: "How long does an enterprise AI chatbot deployment take?",
    answer:
      "A basic chatbot using RAG (Retrieval-Augmented Generation) usually takes 2 to 4 weeks. A custom chatbot with system connections, API actions, and automatic database updates usually takes 6 to 8 weeks."
  },
];

const serviceSchemas = createServiceSchema({
  name: "Website AI Chatbot Development & Auto-Crawl AI Assistant",
  description:
    "Custom AI chatbot widget for websites — auto-crawl your site knowledge, capture visitor leads, and provide 24/7 automated support. Built by Anavya Infotech.",
  slug: "ai-chatbot",
  serviceType: "Artificial Intelligence Development",
  faqs: AI_CHATBOT_FAQS,
  breadcrumbLabel: "AI Chatbot",
});

export default function ServicePage() {
  return (
    <main
      className="min-h-screen bg-white text-left service-page"
      data-service="ai-chatbot"
    >
      {/* Search Engine Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/#services" },
                { label: "AI Chatbot", href: "/services/ai-chatbot" },
              ]}
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Bot className="h-3.5 w-3.5 text-blue-700" /> AI Chatbot Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              AI Chatbot Development for Businesses
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Our AI chatbots use RAG (Retrieval-Augmented Generation) to find answers in your business information. They can support customers, sort leads, and help with data requests at any time.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Talk to an AI Specialist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/development-illustration.jpg"
              alt="Enterprise AI Chatbot Development"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>
      {/* Overview & Key Capabilities */}
      <section className="py-14 bg-white border-b border-stone-100 px-6">
        <div className="space-y-4">
          <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
            Ready-made AI chat tools may not know enough about your business,
            may give wrong answers, or may put company information at risk.
            Business tools need answers based on trusted documents and clear
            rules about what the AI can do.
          </p>
          <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
            Anavya Infotech builds AI chatbots and Retrieval-Augmented
            Generation (RAG) systems. RAG lets an AI find useful information in
            your documents before answering. We connect Large Language Models
            (LLMs) to your business data to support customers, find internal
            information, and handle business tasks.
          </p>

          {/* Right Column: Technical Spec Checklist Card */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-lg p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
              <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Website AI Widget Specs
                </div>
                <p className="text-xs text-stone-500 font-light">
                  Anaya AI Assistant Architecture
                </p>
              </div>
            </div>

            <ul className="space-y-3.5" aria-label="Key features checklist">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Website Chatbot:</strong> Built to collect leads on
                  desktop and mobile websites
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>No Manual Data Entry:</strong> Automatically reads
                  your services, prices, terms, and contact details
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Lead Collection:</strong> Asks interested visitors
                  for their phone number or email
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>English, Hinglish, and Hindi:</strong> Answers
                  visitors in these languages
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Custom Chat Design:</strong> Use your website colors,
                  logo, fonts, and greeting
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Search-Friendly:</strong> Lightweight JavaScript
                  designed to keep your Google PageSpeed score fast
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EEAT Content Section */}
      <section className="py-14 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              How Setup Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-stone-900">
              How Anaya AI Assistant Works on Your Website
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Setting up the chatbot is simple. You do not need to write
              training documents or program conversation paths. Here are the
              steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3 relative flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="service-process-number">01</span>
                  <Globe className="h-5 w-5 text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  Scan Your Website
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Enter your website address. The tool scans your homepage and
                  up to 25 other pages, then collects information about your
                  services, prices, and FAQs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3 relative flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="service-process-number">02</span>
                  <Database className="h-5 w-5 text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  Organize Your Information
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  The chatbot organizes your website information so it can
                  find relevant details. We set it up to give short answers
                  and invite interested visitors to contact you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3 relative flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="service-process-number">03</span>
                  <Code className="h-5 w-5 text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  Add the Chat Widget
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Add a short JavaScript code snippet to your website. The chat
                  widget appears with your logo, colors, and welcome message.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3 relative flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="service-process-number">04</span>
                  <Bell className="h-5 w-5 text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  Get Leads and Alerts at Any Time
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  The chatbot answers questions, collects names, phone
                  numbers, and emails, and sends new lead alerts to your email
                  and CRM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Website AI Chatbots for Customer Support and Sales
          </h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            <p>
              Your website can answer questions even when your team is away.
              As a{" "}
              <strong>website AI chatbot development</strong> company, Anavya
              Infotech builds AI chatbots that can support customers and help
              collect leads at any time. We do more than add a basic chat
              widget: our{" "}
              <strong>AI chatbot widget for websites</strong> uses RAG
              (Retrieval-Augmented Generation) to find answers in information
              about your business.
            </p>
            <p>
              We design the <strong>Anaya AI Assistant</strong> with security
              and data privacy in mind. It helps answer visitors&apos;
              questions and collect leads, without requiring you to write code.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Website AI Chatbot Works - Exact 4-Step Process */}

      {/* Service copy sections */}
      <section className="px-6 py-14 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto ">
          <article className="min-w-0 space-y-10">
            <section className="grid gap-6 md:grid-cols-2 md:items-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 md:col-span-2">
                Business AI Chatbots That Use Your Trusted Information
              </h2>
              <p className="text-stone-700 leading-relaxed md:col-span-2">
                Ready-made AI tools may not know enough about your business,
                may give incorrect answers, or may create risks for private
                company data. Our chatbot uses trusted documents and clear
                instructions to answer questions and handle tasks.
              </p>
            </section>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:col-span-2">
              <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                  &lt; 50 ms
                </p>
                <p className="mt-1 text-sm text-stone-600">Webhook response time</p>
              </div>
              <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                  ?68%
                </p>
                <p className="mt-1 text-sm text-stone-600">Fewer support tickets</p>
              </div>
              <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                  99.9%
                </p>
                <p className="mt-1 text-sm text-stone-600">Uptime</p>
              </div>
            </div>
            <section className="space-y-4">
              <p className="text-stone-700 leading-relaxed">
                Anavya Infotech builds custom AI chatbots with
                Retrieval-Augmented Generation (RAG). RAG helps an AI find
                relevant information in your documents before answering. We
                connect secure Large Language Models (LLMs) to your business
                data to support customers, find internal information, and help
                with work tasks.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                AI Answers Based on Your Business Information
              </h2>
              <p className="text-stone-700 leading-relaxed">
                General chat tools may not know what is in your business
                systems. RAG lets a chatbot look up trusted information before
                it responds:
              </p>
            </section>
            <section className="space-y-4">
              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Zap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Answers Based on Verified Documents:
                  </strong>{" "}
                  Instructions tell the AI to answer using information from
                  your verified company documents.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Database className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Find Information by Meaning:
                  </strong>{" "}
                  Private company information is organized so the AI can find
                  relevant details even when a visitor uses different words.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Zap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Clear Safety Rules:
                  </strong>{" "}
                  Content checks help prevent off-topic replies, data leaks,
                  and actions the user is not allowed to take.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Connect to Your Business Tools:
                  </strong>{" "}
                  The AI can use secure APIs to update CRM records, request
                  refunds, or book appointments.
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                How the AI System Works
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Our AI systems organize information so they can find answers
                and carry out tasks:
              </p>
            </section>
            <section className="space-y-4">
              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Zap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Organize and Store Documents:
                  </strong>{" "}
                  Converts PDFs, Notion pages, and SQL data into searchable
                  formats and stores them in vector databases such as Pinecone,
                  Qdrant, and PGVector.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Search by Meaning and Keywords:
                  </strong>{" "}
                  Combines meaning-based search with keyword search (BM25) to
                  find useful information in long business documents.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Rank the Most Useful Information:
                  </strong>{" "}
                  Picks and sorts useful text with Cohere Rerank before sending
                  a question to the LLM. This can keep responses under 50 ms
                  and reduce API usage.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Workflow className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Connect to Other Services:
                  </strong>{" "}
                  Connects the AI to HubSpot, Salesforce, Zendesk, or Stripe so
                  it can handle tasks in those services.
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                Business Use Cases Engineered for Immediate ROI
              </h2>
            </section>
            <section className="space-y-4">
              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Wrench className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Customer Support at Any Time:
                  </strong>{" "}
                  Answers common support questions, product questions, and
                  technical issues without needing a support agent for each one.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Zap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Find and Qualify Leads:
                  </strong>{" "}
                  Reviews questions from potential customers, collects project
                  details, and books meetings in sales calendars.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Search Company Information:
                  </strong>{" "}
                  Helps staff find information in employee handbooks,
                  engineering documents, and company policies by asking
                  questions in everyday language.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Workflow className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    Send Requests to the Right System:
                  </strong>{" "}
                  Turns customer requests into organized information and sends
                  them to your ERP or ticketing system.
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                General AI Chatbots Compared With Custom RAG Chatbots
              </h2>

              <div className="overflow-x-auto rounded-md border border-stone-200">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <tbody>
                    <tr className={"bg-stone-100 font-semibold text-stone-900"}>
                      <th className="px-4 py-3 align-top">Feature</th>
                      <th className="px-4 py-3 align-top">
                        Generic AI System (ChatGPT / Wrappers)
                      </th>
                      <th className="px-4 py-3 align-top">
                        Anavya RAG Chatbot
                      </th>
                    </tr>
                    <tr className={"border-t border-stone-200"}>
                      <td className="px-4 py-3 align-top">Response Accuracy</td>
                      <td className="px-4 py-3 align-top">
                        May give incorrect answers
                      </td>
                      <td className="px-4 py-3 align-top">
                        Uses information found in your business documents
                      </td>
                    </tr>
                    <tr className={"border-t border-stone-200"}>
                      <td className="px-4 py-3 align-top">Data Privacy</td>
                      <td className="px-4 py-3 align-top">
                        May use public cloud services
                      </td>
                      <td className="px-4 py-3 align-top">
                        Private cloud; user input is not used for training
                      </td>
                    </tr>
                    <tr className={"border-t border-stone-200"}>
                      <td className="px-4 py-3 align-top">
                        System Action Execution
                      </td>
                      <td className="px-4 py-3 align-top">
                        Can only reply with text
                      </td>
                      <td className="px-4 py-3 align-top">
                        Can use APIs and webhooks to take actions
                      </td>
                    </tr>
                    <tr className={"border-t border-stone-200"}>
                      <td className="px-4 py-3 align-top">Knowledge Updates</td>
                      <td className="px-4 py-3 align-top">
                        Requires model retraining
                      </td>
                      <td className="px-4 py-3 align-top">
                        Updates when you add a new document
                      </td>
                    </tr>
                    <tr className={"border-t border-stone-200"}>
                      <td className="px-4 py-3 align-top">Response Time</td>
                      <td className="px-4 py-3 align-top">
                        2.5–5 seconds
                      </td>
                      <td className="px-4 py-3 align-top">
                        Under 50 ms for API responses
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                Automixa AI: Results in Use
              </h2>
            </section>
            <section className="space-y-4">
              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <UsersRound className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">Client Need:</strong>{" "}
                  Automixa AI needed software that could manage complex
                  workflows for more than 10,000 creators around the world at
                  the same time.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <Wrench className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <strong className="text-stone-900">
                    What We Built:
                  </strong>{" "}
                  Anavya Infotech built a RAG system using LangChain,
                  FastHTML/Python, Qdrant, and Redis to organize and manage
                  requests.
                </li>
                <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white">
                    <ChartNoAxesCombined
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                  <strong className="text-stone-900">
                    Results:
                  </strong>{" "}
                  Webhooks responded in under 50 ms, support tickets fell by
                  68%, and the service stayed available 99.9% of the time while
                  handling many requests.
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                Get an AI System Built for Your Business
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Improve customer and staff experiences with AI tools designed
                for your business.
              </p>
            </section>
            <section className="space-y-4">
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
                >
                  Talk to an AI Specialist
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800"
                >
                  See RAG Examples
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
      <RelatedCoreServices page="ai" />

      {/* FAQ Section */}
      <FaqSection
        title="Website AI Chatbot FAQs"
        subtitle="Common questions about deploying Anaya AI Assistant on your website."
        faqs={AI_CHATBOT_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-12 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-900 text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-stone-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-3 max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Get Anaya AI Assistant for Your Website
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Want to collect leads even when your team is away? Contact
                Anavya Infotech to scan your website and add a custom AI
                chatbot.
              </p>
            </div>
            <Link
              href="/contact?subject=AI%20Chatbot%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0 shadow-md"
            >
              Get an AI Chatbot →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
