import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedCoreServices from "@/components/RelatedCoreServices";
import Link from "next/link";
import { Zap, ArrowRight, Cpu, Bot, Code, Database, Bell, CheckCircle2, Sparkles, Globe, Workflow, Search, UsersRound, ChartNoAxesCombined, Wrench, Layers } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Custom AI Chatbot & RAG Pipeline Development | Anavya Infotech",
  description:
    "Deploy autonomous enterprise AI chatbots with custom RAG architecture. Automate 24/7 customer support, lead qualification & data triage with sub-50ms API responses.",
  keywords: ["custom ai chatbot development","enterprise rag pipeline development","ai automation agency","LLM integration services","LangChain developers","vector database implementation"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ai-chatbot",
  },
  openGraph: {
    title: "Custom AI Chatbot & RAG Pipeline Development | Anavya Infotech",
    description:
      "Deploy autonomous enterprise AI chatbots with custom RAG architecture. Automate 24/7 customer support, lead qualification & data triage with sub-50ms API responses.",
    url: "https://www.anavyainfotech.com/services/ai-chatbot",
    type: "website",
  },
};

const AI_CHATBOT_FAQS = [
  {
    question: "Is our proprietary enterprise data protected from AI model training?",
    answer: "Yes. We deploy private API endpoints and self-hosted vector database instances guaranteed under enterprise non-disclosure agreements. Your corporate data, user logs, and knowledge documents are never used to train public foundational AI models."
  },
  {
    question: "How does the system handle query requests outside the knowledge base?",
    answer: "When a query falls outside the vector context boundaries, the agent executes a structured fallback rule. It can politely decline to answer, prompt the user for clarification, or hand off the conversation to a human support representative without hallucinating facts."
  },
  {
    question: "How long does an enterprise AI chatbot deployment take?",
    answer: "A basic RAG agent deployment takes roughly 2 to 4 weeks. Fully customized solutions featuring deep system integrations, custom API function calling, and automated database sync routines typically launch in 6 to 8 weeks."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Website AI Chatbot Development & Auto-Crawl AI Assistant",
  description: "Custom AI chatbot widget for websites — auto-crawl your site knowledge, capture visitor leads, and provide 24/7 automated support. Built by Anavya Infotech.",
  slug: "ai-chatbot",
  serviceType: "Artificial Intelligence Development",
  faqs: AI_CHATBOT_FAQS,
  breadcrumbLabel: "AI Chatbot",
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left service-page" data-service="ai-chatbot">
      {/* Search Engine Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "AI Chatbot", href: "/services/ai-chatbot" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Bot className="h-3.5 w-3.5" />
            Website AI Chatbot Widget Engine
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Convert Website Visitors into Qualified Leads 24/7 with <span className="font-semibold text-blue-600">Anaya AI Assistant</span>
          </h1>
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Over 95% of website visitors bounce without leaving contact details because no one was online to answer their questions. Anavya Infotech builds lightweight, intelligent AI chatbot widgets designed specifically for your website — auto-crawling your pages, answering customer questions in sub-seconds, and capturing verified leads round-the-clock.
          </p>
        </div>
      </section>
{/* Overview & Key Capabilities */}
      <section className="py-14 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Detailed Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-blue-600" /> Built Exclusively for Website Growth
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              An AI Assistant That Knows Every Corner of Your Website
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Unlike generic, repetitive decision-tree chatbots that annoy customers with predefined decision buttons, our <strong className="font-medium text-stone-900">Anaya AI Engine</strong> is built on advanced Retrieval-Augmented Generation (RAG). It automatically crawls your entire website, reads your service offerings, prices, and case studies, and delivers accurate, 1-to-2 sentence human-like answers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-md bg-stone-50 border border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                  <Globe className="h-4 w-4 text-blue-600 shrink-0" />
                  Instant Website Auto-Crawl
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Scrapes your homepage, sub-pages, pricing & FAQs automatically to construct a dedicated vector knowledge store.
                </p>
              </div>

              <div className="p-4 rounded-md bg-stone-50 border border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                  <Code className="h-4 w-4 text-blue-600 shrink-0" />
                  1-Line Async Script Embed
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Embed a lightweight JS widget tag into Next.js, WordPress, Shopify, React or custom HTML without slowing page load.
                </p>
              </div>

              <div className="p-4 rounded-md bg-stone-50 border border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                  <Zap className="h-4 w-4 text-blue-600 shrink-0" />
                  Sub-500ms Ultra-Fast Answers
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Powered by Groq LLM hardware acceleration with Google Gemini AI fallback for instant, zero-delay responses.
                </p>
              </div>

              <div className="p-4 rounded-md bg-stone-50 border border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                  <Bell className="h-4 w-4 text-blue-600 shrink-0" />
                  Real-time Lead Notifications
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Captures visitor Name, Phone, Email & Requirement and routes instant alerts to your email and CRM pipeline.
                </p>
              </div>
            </div>
          </div>

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
                <span><strong>Website-Only Integration:</strong> Purpose-built for desktop & mobile website lead capture</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Zero Manual Entry:</strong> Auto-scrapes services, pricing, terms & contact info</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Conversational Lead Capture:</strong> Naturally collects visitor phone/email during high-intent queries</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Hinglish & Multi-Language:</strong> Responds fluently in English, Hinglish, or Hindi</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Custom Widget Branding:</strong> Match your website colors, logo, font, and custom greeting messages</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Search Engine Friendly:</strong> Clean JS bundle with zero impact on Google PageSpeed score</span>
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
              Exact Deployment Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-stone-900">
              How Anaya AI Assistant Works on Your Website
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              We designed our chatbot setup to be completely friction-free. You don&apos;t need to write training documents or spend hours programming chatbot trees. Here is our step-by-step process:
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
                  Website Crawling & Scraping
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Input your website domain URL. Our background crawler automatically scans your homepage and up to 25 sub-pages, extracting clean structured text from your services, pricing, and FAQs.
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
                  Vector Knowledge Indexing
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Extracted content is converted into an isolated vector knowledge base. We tune prompt guidelines so the bot provides concise 1-2 sentence answers with lead invitation prompts.
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
                  1-Line Script Embed
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Paste a single lightweight JavaScript snippet onto your website. The floating floating chat widget immediately initializes with your custom brand logo, colors, and welcome greeting.
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
                  24/7 Leads & Real-time Alerts
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  As site visitors interact, the chatbot answers queries accurately, collects their Name, Phone, and Email, and instantly dispatches lead alerts to your email and CRM dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Authoritative Website AI Chatbot Development
          </h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            <p>
              In the modern digital economy, a website that only operates during business hours is actively losing revenue. As a specialized <strong>website AI chatbot development</strong> company, Anavya Infotech engineers intelligent, autonomous agents that act as your 24/7 digital sales team. We don&apos;t just provide a generic chat widget; we deploy an advanced <strong>AI chatbot widget for websites</strong> built on sophisticated RAG (Retrieval-Augmented Generation) technology that understands the nuanced context of your specific business offerings.
            </p>
            <p>
              Our authority in AI integration ensures that your <strong>Anaya AI Assistant</strong> operates with extreme precision and security. By strictly adhering to data privacy protocols, we guarantee that visitor interactions are secure and lead capture is compliant with global standards. Businesses trust us to bridge the gap between AI innovation and practical lead generation, transforming passive traffic into qualified, actionable sales opportunities without requiring any coding expertise from your end.
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
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 md:col-span-2">Autonomous Enterprise AI Agents &amp; RAG Pipelines That Eliminate Overhead</h2>
        <p className="text-stone-700 leading-relaxed md:col-span-2">Off-the-shelf AI wrappers and basic chat plugins often lack business context, generate incorrect responses, and create security risks with proprietary company data. Enterprise workflows require accurate, deterministic AI interactions backed by verifiable document sources and real-time execution capabilities.</p>
      </section>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:col-span-2">
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">&lt; 50 ms</p><p className="mt-1 text-sm text-stone-600">Webhook response</p></div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">?68%</p><p className="mt-1 text-sm text-stone-600">Support tickets</p></div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">99.9%</p><p className="mt-1 text-sm text-stone-600">Uptime</p></div>
          </div>
      <section className="space-y-4">
        <p className="text-stone-700 leading-relaxed">Anavya Infotech engineers custom AI chatbots and Retrieval-Augmented Generation (RAG) pipelines. We connect secure Large Language Models (LLMs) to your enterprise data stores, automating customer support, internal data retrieval, and complex business workflows with low latency and precise output guardrails.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Beyond Generic AI Wrappers: Engineering Accurate Enterprise AI</h2>
        <p className="text-stone-700 leading-relaxed">Generic conversational tools struggle with enterprise data tasks because they lack access to real-time internal databases. Our custom-engineered RAG architectures fix these limitations:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Zap className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Zero Hallucination Tolerance:</strong> System prompts limit model outputs strictly to source text pulled from verified company documents.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Database className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Vectorized Data Processing:</strong> Private enterprise knowledge bases are converted into dynamic vector embeddings for high-accuracy semantic retrieval.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Zap className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Deterministic Guardrails:</strong> Content filtering layers prevent off-topic conversations, data leaks, and unauthorized user actions.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Layers className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Function Calling Systems:</strong> AI agents execute real-world platform tasks—such as updating CRM records, issuing refund requests, or booking appointments—via secure API webhooks.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Deep-Dive Technical Architecture Breakdown</h2>
        <p className="text-stone-700 leading-relaxed">Our enterprise AI systems combine modern vector indexing with automated workflow handling:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Zap className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Vector Embeddings &amp; Storage Pipelines:</strong> Converts raw unstructured files (PDFs, Notion bases, SQL databases) into multi-dimensional embeddings stored in High-Performance Vector Databases (Pinecone, Qdrant, PGVector).</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Search className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Hybrid Semantic &amp; Keyword Search:</strong> Combines dense vector retrieval with sparse keyword searches (BM25) to pinpoint relevant information across multi-page enterprise documents.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Search className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Context Compression &amp; Dynamic Reranking:</strong> Filters and ranks context excerpts using Cohere Rerank before sending queries to the LLM, keeping latency under 50ms and cutting API token overhead.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Workflow className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Autonomous Function Calling APIs:</strong> Integrates AI platforms directly with platforms like Hubspot, Salesforce, Zendesk, and Stripe for real-time background task processing.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Business Use Cases Engineered for Immediate ROI</h2>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Wrench className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">24/7 Automated Support Resolution:</strong> Manages repetitive client help queries, product questions, and technical troubleshooting without human agent intervention.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Zap className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Automated Lead Qualification:</strong> Evaluates inbound prospect inquiries in real time, collects project parameters, and books qualified meetings directly to sales calendars.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Search className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Internal Enterprise Knowledge Search:</strong> Gives operational teams instant access to employee handbooks, engineering docs, and compliance policies via plain-text queries.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Workflow className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Automated Workflow Routing:</strong> Converts unstructured customer requests into structured data payloads and forwards them to internal ERP or ticketing systems automatically.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">AI Architecture Comparison: Generic Prompting vs. Custom RAG Pipeline</h2>

        <div className="overflow-x-auto rounded-md border border-stone-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <tbody>
              <tr className={"bg-stone-100 font-semibold text-stone-900"}>
                <th className="px-4 py-3 align-top">Technical Metric</th>
                <th className="px-4 py-3 align-top">Generic AI System (ChatGPT / Wrappers)</th>
                <th className="px-4 py-3 align-top">Anavya Enterprise RAG Pipeline</th>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Response Accuracy</td>
                <td className="px-4 py-3 align-top">Variable; susceptible to hallucinations</td>
                <td className="px-4 py-3 align-top">Verified; restricted to retrieved enterprise context</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Data Privacy</td>
                <td className="px-4 py-3 align-top">Public cloud model retraining risk</td>
                <td className="px-4 py-3 align-top">Private cloud hosted; zero training on user input</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">System Action Execution</td>
                <td className="px-4 py-3 align-top">Read-only text chat responses</td>
                <td className="px-4 py-3 align-top">Read &amp; Write via API calls and webhooks</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Knowledge Updates</td>
                <td className="px-4 py-3 align-top">Requires model retraining</td>
                <td className="px-4 py-3 align-top">Instant update upon new vector document ingestion</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Response Time</td>
                <td className="px-4 py-3 align-top">2.5s – 5.0s latency</td>
                <td className="px-4 py-3 align-top">Sub-50ms API response rates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Production Impact Case Proof: Automixa AI Platform</h2>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><UsersRound className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Client Need:</strong> Automixa AI required an enterprise-grade AI automation engine capable of routing complex multi-file data workflows for over 10,000 global creators simultaneously.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Wrench className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Engineering Solution:</strong> Anavya Infotech designed a multi-model RAG architecture using LangChain, FastHTML/Python endpoints, Qdrant vector storage, and Redis queue management.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><ChartNoAxesCombined className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Operational Results:</strong> Delivered stable sub-50ms webhook response rates, cut ticket queues by 68%, and maintained 99.9% operational uptime under high concurrent query volumes.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Deploy Custom AI Infrastructure Today</h2>
        <p className="text-stone-700 leading-relaxed">Transform your internal operations and user experiences with production-ready AI agents tailored to your business needs.</p>
      </section>
      <section className="space-y-4">
        <div className="flex flex-wrap gap-3 pt-2"><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md">Book AI Technical Consultation<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">Explore RAG Case Studies<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </section>
        </article>
        </div>
      </section>
      <RelatedCoreServices page="ai" />

      {/* FAQ Section */}
      <FaqSection title="Website AI Chatbot FAQs"
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
                Ready to stop losing website leads after business hours? Contact Anavya Infotech today to crawl your website and deploy your custom AI chatbot widget.
              </p>
            </div>
            <Link
              href="/contact?subject=AI%20Chatbot%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0 shadow-md"
            >
              Get Website AI Chatbot →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

