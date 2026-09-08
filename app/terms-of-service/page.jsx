import Link from "next/link";
import { FileText, ArrowRight, Mail, Phone, Globe } from "lucide-react";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Terms and Conditions – Anavya Infotech",
  description:
    "Terms and Conditions governing access to and use of Anavya Infotech website and custom software, web development, AI, CRM, SEO, and design services.",
  alternates: {
    canonical: "https://www.anavyainfotech.com/terms-of-service",
  },
};

const TERMS_FAQS = [
  {
    question: "When do these Terms and Conditions take effect?",
    answer:
      "These terms take effect upon accessing or using our website, submitting a project inquiry, or engaging us for any Service or Project Agreement with Anavya Infotech.",
  },
  {
    question: "When is source code ownership transferred to the client?",
    answer:
      "Unless agreed otherwise in writing (e.g. 100% code ownership in a Project Agreement), ownership rights transfer to the client upon receipt of full payment as specified in the applicable agreement.",
  },
  {
    question: "How are project scope additions handled?",
    answer:
      "Specific scope, deliverables, timeline, and fees are defined in a separate Project Agreement. Any changes or additions are agreed upon in writing prior to execution.",
  },
  {
    question: "What governs refunds under these Terms?",
    answer:
      "Refunds are governed by our separate Refund Policy on the website. Where a Project Agreement specifies different refund terms, those terms take precedence.",
  },
  {
    question: "What jurisdiction governs these Terms?",
    answer:
      "These Terms are governed by the laws of India, with exclusive jurisdiction in the courts located in Faridabad, Haryana, India.",
  },
];

export default function TermsOfServicePage() {
  const lastUpdated = "August 15, 2026";

  return (
    <main className="min-h-screen bg-white text-left">
      {/* Header */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <FileText className="h-3.5 w-3.5 text-blue-700" /> Legal Terms
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
            Terms and Conditions
          </h1>
          <p className="text-sm text-stone-500 font-light">
            Last Updated: <span className="text-stone-900 font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-10 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-10 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to <a href="https://www.anavyainfotech.com" className="text-blue-700 font-semibold hover:underline">Anavya Infotech</a> (&quot;Website&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to our website and digital services.
            </p>
            <p>
              Our services include custom software development, web applications, AI automation, CRM integration, SEO, and corporate branding. By using our website or submitting a inquiry, you agree to these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age to use this Website or engage our Services. If you are entering into these terms on behalf of a business, you confirm you have legal authority to bind that entity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              3. Services Overview
            </h2>
            <p>Anavya Infotech delivers full-spectrum technology solutions, including:</p>
            <div className="bg-stone-50 border border-stone-200 p-6 rounded-md my-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-800 text-sm font-medium">
                <li className="flex items-center gap-2">✔ Business &amp; Web Applications</li>
                <li className="flex items-center gap-2">✔ Custom Software &amp; CRM Systems</li>
                <li className="flex items-center gap-2">✔ AI Chatbots &amp; Workflow Automation</li>
                <li className="flex items-center gap-2">✔ Technical &amp; E-Commerce SEO</li>
                <li className="flex items-center gap-2">✔ White-Label SEO Reseller Programs</li>
                <li className="flex items-center gap-2">✔ Brand Identity &amp; Graphic Design</li>
              </ul>
            </div>
            <p>
              Specific project timelines, deliverables, and fees are defined in a separate signed Project Agreement or statement of work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              4. Project Engagement &amp; Onboarding
            </h2>
            <p>
              Submitting an inquiry through our contact form does not create a binding contract. A binding engagement starts only when both parties sign a Project Agreement and initial deposit payment is settled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              5. Fees, Payment, and Refunds
            </h2>
            <p>
              All service fees and payment schedules are specified in your Project Agreement or invoice. Payments must be completed on time to avoid project suspension.
            </p>
            <p>
              Refunds are governed by our official <Link href="/refund-policy" className="text-blue-700 font-semibold hover:underline">Refund Policy</Link>. Project-specific terms override general policies where explicitly stated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              6. Intellectual Property &amp; Code Ownership
            </h2>
            <p>
              All code, design assets, and materials remain our property until full payment is completed. Once paid in full, source code ownership transfers 100% to the client as defined in the agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              7. Client Responsibilities
            </h2>
            <p>
              Clients agree to provide timely feedback, content, and system access. Delays in receiving client inputs may extend project delivery timelines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              8. Third-Party Services
            </h2>
            <p>
              Integrations with third-party hosting, payment gateways, or AI APIs are subject to third-party availability and terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              9. Confidentiality
            </h2>
            <p>
              Both parties agree to protect all confidential proprietary information shared during project execution.
            </p>
          </section>

          <section className="space-y-4 border-t border-stone-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              10. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes are subject to exclusive jurisdiction in the courts located in Faridabad, Haryana, India.
            </p>
          </section>

          <section className="space-y-4 border-t border-stone-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 border-b border-stone-100 pb-2">
              11. Contact Us
            </h2>
            <p>
              For questions regarding these Terms and Conditions, please reach out to us:
            </p>
            <div className="p-6 rounded-md bg-stone-50 border border-stone-200 space-y-3 text-stone-800 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-700 shrink-0" />
                <span>Email: <a href="mailto:info@anavyainfotech.com" className="font-semibold text-stone-900 hover:underline">info@anavyainfotech.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-700 shrink-0" />
                <span>Phone: <a href="tel:+916201231875" className="font-semibold text-stone-900 hover:underline">+91 6201231875</a> | <a href="tel:+917508657479" className="font-semibold text-stone-900 hover:underline">+91 7508657479</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-700 shrink-0" />
                <span>Website: <a href="https://www.anavyainfotech.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-900 hover:underline">https://www.anavyainfotech.com</a></span>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FaqSection
            title="Terms and Conditions Frequently Asked Questions"
            subtitle="Common questions regarding legal agreements, code transfer, and project terms."
            faqs={TERMS_FAQS}
          />

          {/* Bottom Navigation Links */}
          <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
            <Link
              href="/refund-policy"
              className="text-xs font-semibold text-stone-700 hover:text-black flex items-center gap-1.5 transition-colors"
            >
              Read Cancellation & Refund Policy <ArrowRight className="h-3.5 w-3.5 text-blue-700" />
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-stone-500 hover:text-stone-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

