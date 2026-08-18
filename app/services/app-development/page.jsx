import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Smartphone } from "lucide-react";

export const metadata = {
  title: "Mobile App Development Services | iOS, Android & Cross-Platform Agency",
  description:
    "Custom iOS, Android, and cross-platform React Native/Flutter mobile app development services in India & USA from Anavya Infotech.",
  keywords: [
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter app development",
    "mobile app development in India",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | iOS, Android & Cross-Platform Agency",
    description:
      "Custom iOS, Android, and cross-platform React Native/Flutter mobile app development services in India & USA from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/app-development",
    type: "website",
  },
};

// Inline service schema for search engine crawlers
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile & Cross-Platform App Development Services",
  "description": "Custom iOS, Android, and cross-platform mobile application development company in India & USA delivering native performance, real-time sync, and scalable cloud APIs.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Anavya Infotech",
    "url": "https://www.anavyainfotech.com"
  }
};

const APP_DEVELOPMENT_FAQS = [
  {
    "question": "What technologies do you use for mobile app development?",
    "answer": "We build high-performance mobile applications using React Native, Flutter, Swift (iOS), Kotlin (Android), Node.js, and Supabase / Firebase backends."
  },
  {
    "question": "Do you build apps for both iOS and Android platforms?",
    "answer": "Yes, we specialize in cross-platform development (React Native & Flutter) that delivers native performance on both iOS App Store and Google Play Store using a single clean codebase."
  },
  {
    "question": "Will you help submit and publish the app to the App Store and Google Play?",
    "answer": "Absolutely. We manage complete App Store Optimization (ASO), metadata setup, developer portal configurations, and submission processes for guaranteed store approval."
  },
  {
    "question": "Can you integrate push notifications and real-time backend synchronization?",
    "answer": "Yes, we implement push notification engines (Firebase FCM, OneSignal), real-time WebSockets, offline data persistence, and secure OAuth auth flows."
  },
  {
    "question": "What is the typical timeline to develop a custom mobile app?",
    "answer": "A feature-rich MVP mobile application usually takes 4 to 8 weeks, while enterprise multi-role apps take 8 to 14 weeks from wireframe design to store publication."
  }
];

export default function AppDevelopmentServicePage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-20 text-left">
      {/* Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "App Development", href: "/services/app-development" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
              Services Catalog
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Mobile App <br />
              <span className="text-blue-700">Development Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-2xl leading-relaxed">
              High-performance iOS, Android, and cross-platform mobile apps engineered for speed, engagement, and enterprise scale.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-6 bg-white border border-stone-200/80 rounded-md shadow-sm">
            <img
              src="/development-illustration.jpg"
              alt="App and Web Development Services Illustration"
              className="max-h-[300px] w-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-10 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Native performance with modern cross-platform efficiency.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              We design and code intuitive, fast, and secure mobile applications for startups, SMBs, and enterprise brands across India &amp; global markets.
            </p>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              From slick UI UX design to cloud microservice integration, push notifications, in-app purchases, and store deployment—our mobile app engineering team builds apps your users love.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                Mobile Solutions We Deliver
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>iOS &amp; Android App Development (React Native / Flutter)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Real-time Push Notifications &amp; Offline Caching</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Secure API Integration &amp; Cloud Database Backends</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Complete App Store &amp; Google Play Publication Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Mobile App Development FAQs"
        subtitle="Common questions about custom iOS, Android, and cross-platform app engineering."
        faqs={APP_DEVELOPMENT_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Have a mobile app idea to build?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Schedule a consultation with our mobile architects to discuss app wireframes, feature specs, and tech stack options.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Start App Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
