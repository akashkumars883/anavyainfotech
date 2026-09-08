import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Cpu, Bot, Code, Database, Bell, CheckCircle2, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Website AI Chatbot Development & Auto-Crawl AI Widget Services | Anavya Infotech",
  description:
    "Turn website visitors into leads 24/7 with Anaya AI Assistant. Instant website auto-crawling, RAG vector knowledge store, 1-line script embed & real-time lead capture for your website.",
  keywords: [
    "website AI chatbot development",
    "AI chatbot widget for websites",
    "Anaya AI Assistant",
    "website lead generation chatbot",
    "auto crawl AI chatbot",
    "RAG website chatbot",
    "custom AI customer support bot",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/ai-chatbot",
  },
  openGraph: {
    title: "Website AI Chatbot Development & Auto-Crawl AI Widget Services",
    description:
      "Turn website visitors into leads 24/7 with Anaya AI Assistant. Instant website auto-crawling, RAG vector knowledge store, 1-line script embed & real-time lead capture.",
    url: "https://www.anavyainfotech.com/services/ai-chatbot",
    type: "website",
  },
};

const AI_CHATBOT_FAQS = [
  {
    question: "How does the chatbot learn about my website content?",
    answer: "Our automated AI crawler inputs your website URL, scrapes all key pages (services, pricing, about, FAQs, contact), cleans the HTML, and indexes the content into a dedicated vector knowledge base. No manual data entry or coding is required from your end."
  },
  {
    question: "How do I add the AI chatbot to my website?",
    answer: "You simply paste a single lightweight, asynchronous script tag (`<script src='.../widget.js' data-site-id='your-site'></script>`) into your website header or footer. It works seamlessly on Next.js, WordPress, Shopify, React, HTML, and all Web platforms."
  },
  {
    question: "How does the chatbot capture lead contact information?",
    answer: "Whenever a website visitor asks about pricing, packages, custom quotes, or shows intent to buy, Anaya AI Assistant provides a concise direct answer and politely invites the visitor to share their Name, Phone Number, and Email for a personal consultation."
  },
  {
    question: "Can the chatbot answer in Hinglish or regional languages?",
    answer: "Yes! Powered by ultra-fast Groq LLM inference and Google Gemini AI engines, Anaya AI Assistant fluidly understands and responds in English, Hinglish, and Hindi based on how your website visitor writes."
  },
  {
    question: "Where do the captured website leads go?",
    answer: "Captured visitor leads are stored immediately in your custom admin dashboard, and real-time instant notifications (Email/WhatsApp API) are triggered directly to your sales team so you can follow up within minutes."
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
    <main className="min-h-screen bg-white text-left">
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

      {/* How Our Website AI Chatbot Works - Exact 4-Step Process */}
      <section className="py-14 bg-stone-50 border-b border-stone-100 px-6">
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
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase tracking-wider">
                    Step 01
                  </span>
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
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase tracking-wider">
                    Step 02
                  </span>
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
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase tracking-wider">
                    Step 03
                  </span>
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
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase tracking-wider">
                    Step 04
                  </span>
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

