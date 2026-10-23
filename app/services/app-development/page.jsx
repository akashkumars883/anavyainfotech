import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedCoreServices from "@/components/RelatedCoreServices";
import Link from "next/link";
import { Zap, ArrowRight, Smartphone, Boxes, CreditCard, BellRing, ShieldCheck, Database, Search, ChartNoAxesCombined, Palette, Target } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Mobile Application Development Company | iOS & Android Apps",
  description:
    "Engineer high-performance, native-grade iOS and Android mobile apps using React Native and Flutter. Offline sync, biometric security & enterprise API integration.",
  keywords: ["cross platform mobile app development","mobile application development company","React Native app development","Flutter mobile app development","enterprise mobile apps","iOS Android development services"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/app-development",
  },
  openGraph: {
    title: "Mobile Application Development Company | iOS & Android Apps",
    description:
      "Engineer high-performance, native-grade iOS and Android mobile apps using React Native and Flutter. Offline sync, biometric security & enterprise API integration.",
    url: "https://www.anavyainfotech.com/services/app-development",
    type: "website",
  },
};

const APP_DEVELOPMENT_FAQS = [
  {
    question: "Can cross-platform mobile apps match the performance of native apps?",
    answer: "Yes. React Native compiles directly to native OS UI components, while Flutter renders graphics using its dedicated C++ Skia engine. Both frameworks consistently achieve fluid 60 FPS performance, making differences imperceptible for enterprise applications."
  },
  {
    question: "How do you manage App Store and Google Play deployments?",
    answer: "We manage the full deployment process, including app listing configuration, provisioning profiles, privacy compliance declarations, and responding to store review feedback to ensure successful launch."
  },
  {
    question: "Can an existing web application be converted into a React Native mobile app?",
    answer: "Yes. If your web application is built on React or Next.js, our team can reuse business logic, state management stores, and API layer code, accelerating mobile app development timelines significantly."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Mobile & Cross-Platform App Development Services",
  description: "Custom iOS, Android, and cross-platform mobile application development company in India & USA delivering native performance, real-time sync, and scalable cloud APIs.",
  slug: "app-development",
  serviceType: "Mobile Application Development",
  faqs: APP_DEVELOPMENT_FAQS,
  breadcrumbLabel: "App Development",
});

export default function AppDevelopmentServicePage() {
  return (
    <main className="min-h-screen bg-white text-left service-page" data-service="app-development">
      {/* Search Engine Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
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
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
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
            <section className="border-b border-stone-100 bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">
              Native performance with modern cross-platform efficiency.
            </h2>
            <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
              We design and code intuitive, fast, and secure mobile applications for startups, SMBs, and enterprise brands across India &amp; global markets.
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              From slick UI UX design to cloud microservice integration, push notifications, in-app purchases, and store deployment—our mobile app engineering team builds apps your users love.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-normal tracking-tight text-stone-900 sm:text-2xl">
              Mobile Solutions We Deliver
            </h3>
            <ul className="mobile-solutions-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Key deliverables">
              <li className="flex flex-col items-start gap-3 p-2 text-sm leading-relaxed text-stone-700">
                <Smartphone className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <span>iOS &amp; Android App Development (React Native / Flutter)</span>
              </li>
              <li className="flex flex-col items-start gap-3 p-2 text-sm leading-relaxed text-stone-700">
                <BellRing className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <span>Real-time Push Notifications &amp; Offline Caching</span>
              </li>
              <li className="flex flex-col items-start gap-3 p-2 text-sm leading-relaxed text-stone-700">
                <Database className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <span>Secure API Integration &amp; Cloud Database Backends</span>
              </li>
              <li className="flex flex-col items-start gap-3 p-2 text-sm leading-relaxed text-stone-700">
                <Boxes className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <span>Complete App Store &amp; Google Play Publication Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service copy sections */}
            <ServiceProcess service="app-development" />
            <section className="px-6 py-14 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto ">
<article className="min-w-0 space-y-10">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 md:col-span-2">Native-Grade Cross-Platform Mobile Apps Engineered for Engagement and Scale</h2>
        <p className="text-stone-700 leading-relaxed md:col-span-2">Enterprise mobile applications must deliver fluid 60 FPS animations, immediate touch responsiveness, offline operational resilience, and robust biometric data security. Managing separate native codebases for iOS and Android inflates costs and doubles maintenance overhead.</p>
      </section>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:col-span-2">
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">50%</p><p className="mt-1 text-sm text-stone-600">Faster time to market</p></div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">90?95%</p><p className="mt-1 text-sm text-stone-600">Shared codebase</p></div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">iOS + Android</p><p className="mt-1 text-sm text-stone-600">One delivery team</p></div>
          </div>
      <section className="space-y-4">
        <p className="text-stone-700 leading-relaxed">At Anavya Infotech, we build cross-platform mobile applications using React Native and Flutter. We combine single-codebase efficiency with native device integrations, launching production-ready iOS and Android apps in half the development timeline.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">The Dilemma: Native vs. Cross-Platform</h2>
        <p className="text-stone-700 leading-relaxed">Building independent native applications in Swift (iOS) and Kotlin (Android) requires duplicated engineering teams, separate QA cycles, and asynchronous feature rollouts. Modern cross-platform frameworks resolve these challenges without sacrificing performance:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Target className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">50% Faster Time to Market:</strong> A shared codebase allows concurrent iOS and Android deployments, shortening sprint schedules and feature releases.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Unified UX &amp; Design Consistency:</strong> Standardized component libraries maintain brand consistency while adhering to platform-specific design guidelines.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><CreditCard className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Lower Total Cost of Ownership (TCO):</strong> Single-codebase maintenance reduces long-term bug remediation and SDK upgrade costs.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Core Mobile Capabilities We Engineer</h2>
        <p className="text-stone-700 leading-relaxed">Our mobile solutions incorporate hardware-level capabilities and enterprise data integrations:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><ChartNoAxesCombined className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Biometric Authentication &amp; Security:</strong> Secure login via Face ID, Touch ID, and Android Biometric Prompt backed by hardware-level keychains.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><BellRing className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Real-Time WebSockets &amp; Push Notifications:</strong> Low-latency messaging, activity tracking, and targeted push notifications via Firebase Cloud Messaging (FCM) and APNs.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Zap className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Offline First Engine (SQLite / WatermelonDB):</strong> Background local data persistence with automatic cloud server sync upon connection restoration.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><CreditCard className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Custom Mobile Payment Integrations:</strong> Frictionless checkout via Apple Pay, Google Pay, Stripe SDK, and regional payment gateway adapters.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Mobile Framework Architecture Comparison</h2>

        <div className="overflow-x-auto rounded-md border border-stone-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <tbody>
              <tr className={"bg-stone-100 font-semibold text-stone-900"}>
                <th className="px-4 py-3 align-top">Engineering Metric</th>
                <th className="px-4 py-3 align-top">React Native</th>
                <th className="px-4 py-3 align-top">Flutter</th>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Swift / Kotlin Native</td>
                <td className="px-4 py-3 align-top">Code Reusability</td>
                <td className="px-4 py-3 align-top">85% – 90% shared code</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">90% – 95% shared code</td>
                <td className="px-4 py-3 align-top">0% (Separate Repositories)</td>
                <td className="px-4 py-3 align-top">UI Rendering Performance</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Native UI bridge rendering (60 FPS)</td>
                <td className="px-4 py-3 align-top">Skia Engine direct draw (60-120 FPS)</td>
                <td className="px-4 py-3 align-top">Native OS UI Rendering</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Development Speed</td>
                <td className="px-4 py-3 align-top">Fast (Fast Refresh enabled)</td>
                <td className="px-4 py-3 align-top">Fast (Stateful Hot Reload)</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Slow (Dual Compilation)</td>
                <td className="px-4 py-3 align-top">Ecosystem &amp; Libraries</td>
                <td className="px-4 py-3 align-top">Massive (npm / React Ecosystem)</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Rapidly Growing (pub.dev)</td>
                <td className="px-4 py-3 align-top">Platform-native SDKs</td>
                <td className="px-4 py-3 align-top">Ideal For</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Data-driven SaaS &amp; E-Commerce</td>
                <td className="px-4 py-3 align-top">Custom UI/UX &amp; High-Graphics Apps</td>
                <td className="px-4 py-3 align-top">Low-level Bluetooth / Hardware</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Enterprise Security &amp; App Store Compliance SOP</h2>
        <p className="text-stone-700 leading-relaxed">We follow strict quality assurance standards to guarantee first-pass App Store (iOS) and Google Play Store (Android) approvals:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Design System Compliance:</strong> Strict adherence to Apple Human Interface Guidelines and Google Material Design 3 guidelines.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">OWASP MASVS Security Standards:</strong> Enforcing SSL pinning, data payload encryption, and root/jailbreak detection to prevent mobile tampering.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Boxes className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Automated CI/CD Store Delivery:</strong> Automated testing and build delivery pipelines using Fastlane to streamline internal beta testing (TestFlight / Google Internal Testing) and production deployments.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Build Your Next Mobile Product</h2>
        <p className="text-stone-700 leading-relaxed">Turn your mobile product vision into a high-performance cross-platform application. Speak with senior mobile architects at Anavya Infotech today.</p>
      </section>
      <section className="space-y-4">
        <div className="flex flex-wrap gap-3 pt-2"><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md">Consult Mobile Architects<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">View App Portfolio<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </section>
        </article>
        </div>
      </section>
            

      <RelatedCoreServices page="mobile" />

      {/* FAQ Section */}


      <FaqSection title="Mobile App Development FAQs"
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
