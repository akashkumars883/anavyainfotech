import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom EdTech and LMS Platforms | Anavya Infotech",
  description: "Build interactive learning platforms and custom LMS software that can grow. Add video lessons, automatic quiz grading, student progress reports, and online payments.",
  keywords: ["custom EdTech software development company","custom LMS development services"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/edtech-education" },
  openGraph: { title: "Custom EdTech and LMS Platforms | Anavya Infotech", description: "Build interactive learning platforms and custom LMS software that can grow. Add video lessons, automatic quiz grading, student progress reports, and online payments.", url: "https://www.anavyainfotech.com/solutions/edtech-education", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom EdTech Platforms & Learning Management Systems","description":"Build interactive, scalable EdTech platforms and custom LMS software. Video streaming, automated quiz grading, student analytics and payment gateway integration.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const EDTECH_EDUCATION_FAQS = [
  {
    "question": "What features can be included in a custom EdTech LMS platform?",
    "answer": "Features can include video lessons, interactive quizzes, student progress tracking, certificates, assignment uploads, and live classes."
  },
  {
    "question": "How do you stop people from downloading videos without permission?",
    "answer": "We use encrypted HLS video, signed URLs, DRM protection, and watermarks to help stop unauthorized copying."
  },
  {
    "question": "Can the platform support live classes and Zoom?",
    "answer": "Yes. We connect Zoom SDK, WebRTC, and Jitsi so students can join live classes from the portal."
  },
  {
    "question": "Can students use the courses on their phones?",
    "answer": "Yes. Our EdTech websites are designed for phones and tablets, so students can easily move through their courses."
  },
  {
    "question": "How long does it take to build an EdTech learning platform?",
    "answer": "Custom EdTech platforms usually take 6 to 10 weeks from design to launch."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom EdTech and Learning Platforms</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Ready-made course add-ons may not be fast, secure, or engaging enough as you grow. We build learning platforms with personalized course paths, live video classes, and secure payments.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Build Learning Platforms That Can Grow</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Video for Many Learners at Once</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Interactive Tests and Quizzes</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Student Progress and Certificates</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Payments in Different Currencies</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Video for Many Learners at Once</h3><p className="mt-2 text-sm leading-6 text-stone-600">Adjust video quality to each connection and use DRM protection to help prevent screen recording.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Interactive Tests and Quizzes</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automatically grade work, support exam monitoring, and show results right away.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Student Progress and Certificates</h3><p className="mt-2 text-sm leading-6 text-stone-600">Show course plans and automatically create PDF certificates.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Payments in Different Currencies</h3><p className="mt-2 text-sm leading-6 text-stone-600">Offer subscriptions, installment payments, and membership levels.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="EdTech & Education FAQs"
        subtitle="Answers to common questions about education technology and our projects."
        faqs={EDTECH_EDUCATION_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let?s build the right solution for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tell our team how you work and where you want to grow. We?ll help plan a platform that fits.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Talk About Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


