import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom EdTech & LMS Platform Development | Anavya Infotech",
  description: "Build interactive, scalable EdTech platforms and custom LMS software. Video streaming, automated quiz grading, student analytics and payment gateway integration.",
  keywords: ["custom EdTech software development company","custom LMS development services"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/edtech-education" },
  openGraph: { title: "Custom EdTech & LMS Platform Development | Anavya Infotech", description: "Build interactive, scalable EdTech platforms and custom LMS software. Video streaming, automated quiz grading, student analytics and payment gateway integration.", url: "https://www.anavyainfotech.com/solutions/edtech-education", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom EdTech Platforms & Learning Management Systems","description":"Build interactive, scalable EdTech platforms and custom LMS software. Video streaming, automated quiz grading, student analytics and payment gateway integration.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const EDTECH_EDUCATION_FAQS = [
  {
    "question": "What features can be included in a custom EdTech LMS platform?",
    "answer": "Features include video streaming, interactive quizzes, student progress tracking, certificate generation, assignment uploads, and live classes."
  },
  {
    "question": "How do you secure video content from unauthorized downloading?",
    "answer": "We implement encrypted HLS video streaming, signed URLs, DRM protection, and watermarking to prevent content piracy."
  },
  {
    "question": "Can the platform handle live classes and Zoom integration?",
    "answer": "Yes, we integrate Zoom SDK, WebRTC, and Jitsi for seamless live virtual classroom experiences directly inside the portal."
  },
  {
    "question": "Can students access courses on mobile devices?",
    "answer": "Yes, our EdTech web applications are mobile-first, ensuring smooth course navigation on smartphones and tablets."
  },
  {
    "question": "How long does it take to build a custom EdTech LMS platform?",
    "answer": "Custom EdTech platforms take 6 to 10 weeks from initial design to launch."
  }
];

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "EdTech & Education", href: "/solutions/edtech-education" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom EdTech Platforms & Learning Management Systems</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Off-the-shelf course plugins often lack the performance, security, and engagement needed to scale. We build learning platforms with adaptive paths, live video classrooms, and secure course monetization.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Next-Generation Learning: Scalable EdTech Platforms & Custom LMS Engineering</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>High-Concurrency Video Streaming</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Interactive Assessment & Quiz Engines</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Student Progress & Certification</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Global Multi-Currency Monetization</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">High-Concurrency Video Streaming</h3><p className="mt-2 text-sm leading-6 text-stone-600">Adaptive bitrate delivery with DRM protection against screen recording.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Interactive Assessment & Quiz Engines</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automated grading, proctoring controls, and instant performance analytics.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Student Progress & Certification</h3><p className="mt-2 text-sm leading-6 text-stone-600">Course roadmaps and automated PDF certificate issuance.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Global Multi-Currency Monetization</h3><p className="mt-2 text-sm leading-6 text-stone-600">Subscriptions, installment plans, and tiered memberships.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="EdTech & Education FAQs"
        subtitle="Common questions about edtech & education technology and project delivery."
        faqs={EDTECH_EDUCATION_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build a solution designed for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our team about a platform tailored to your workflows and growth plans.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


