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
        <div className="max-w-4xl mx-auto space-y-10 text-stone-600 text-sm sm:text-base leading-relaxed font-light">

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              1. Introduction
            </h2>
            <p>
              Welcome to <a href="https://www.anavyainfotech.com" className="text-blue-700 hover:underline">https://www.anavyainfotech.com</a> (the &quot;Website&quot;), owned and operated by Anavya Infotech (&quot;Anavya Infotech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Website and any services described on it, including custom software development, website development, web applications, AI chatbot and automation solutions, CRM and API integration services, SEO and digital marketing services, and brand identity and design services (collectively, the &quot;Services&quot;).
            </p>
            <p>
              By accessing or using the Website, submitting a project inquiry, or engaging us for any Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website or our Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              2. Eligibility
            </h2>
            <p>
              By using this Website or engaging our Services, you represent that you are at least 18 years of age and have the legal capacity to enter into a binding agreement, or that you are accessing the Website on behalf of a business entity with the authority to bind that entity to these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              3. Services Overview
            </h2>
            <p>Anavya Infotech provides a range of digital services, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
              <li>Business website design and development</li>
              <li>Web and mobile application development</li>
              <li>E-commerce and landing page development</li>
              <li>AI chatbots, business automation, and API integrations</li>
              <li>Custom CRM and software development</li>
              <li>Search engine optimization (SEO), local SEO, e-commerce SEO, and technical SEO</li>
              <li>White label SEO reseller programs</li>
              <li>Brand identity, logo design, and corporate visual strategy</li>
            </ul>
            <p>
              The specific scope, deliverables, timeline, and fees for any engagement will be set out in a separate proposal, quotation, statement of work, or service agreement (&apos;Project Agreement&apos;) agreed upon between the client and us. In the event of a conflict between these Terms and a Project Agreement, the Project Agreement will govern with respect to that specific engagement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              4. Project Engagement and Onboarding
            </h2>
            <p>
              Project requests submitted through the Website&apos;s contact or inquiry forms do not constitute a binding agreement. A Service engagement is formed only when both parties agree in writing to a proposal, quotation, or Project Agreement, which may require an initial deposit or advance payment before work begins.
            </p>
            <p>
              We reserve the right to decline any project inquiry at our sole discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              5. Fees, Payment, and Refunds
            </h2>
            <p>
              Fees for Services will be set out in the applicable Project Agreement or invoice. Unless otherwise agreed in writing, payments are due according to the schedule specified at the time of engagement. Late payments may result in suspension of work or Services until outstanding amounts are settled.
            </p>
            <p>
              Refunds, if any, are governed by our separate Refund Policy, available on the Website, which forms part of these Terms by reference. Where a Project Agreement specifies different refund terms, those terms will apply to that engagement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              6. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in writing (for example, under a &apos;100% code ownership&apos; arrangement specified in a Project Agreement), all designs, code, content, and materials created by us during the course of a project remain our intellectual property until full payment has been received, at which point ownership rights transfer to the client as specified in the applicable agreement.
            </p>
            <p>
              All content on the Website itself, including text, graphics, logos, and the Anavya Infotech brand, is the property of Anavya Infotech or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              7. Client Responsibilities
            </h2>
            <p>
              Clients engaging our Services agree to provide timely feedback, accurate information, and any necessary access, content, or materials required for us to perform the Services. Delays caused by a client&apos;s failure to provide required inputs may affect project timelines and are not our responsibility.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              8. Third-Party Services and Integrations
            </h2>
            <p>
              Our Services may involve integration with third-party platforms, APIs, hosting providers, payment gateways, or AI service providers. We are not responsible for the availability, performance, security, or policies of any third-party services, and your use of such services may be subject to their own separate terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              9. Confidentiality
            </h2>
            <p>
              Each party agrees to keep confidential any proprietary or sensitive information disclosed by the other party in connection with a project, and to use such information solely for the purpose of the engagement, except where disclosure is required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Anavya Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities arising out of or related to your use of the Website or our Services. Our total liability arising from any Service engagement shall not exceed the total fees paid by the client for the specific Service giving rise to the claim.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              11. Disclaimer of Warranties
            </h2>
            <p>
              The Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. While we strive for accuracy, we do not guarantee that the Website will be uninterrupted, error-free, or completely secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              12. Service Level and Guarantees
            </h2>
            <p>
              Any service level agreements, guarantees, or performance commitments referenced on the Website (such as enterprise SLA guarantees) apply only to the extent expressly set out in a signed Project Agreement and are not automatically extended to general Website visitors or inquiries.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              13. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to the Website, or to decline or discontinue a Service engagement, in cases of breach of these Terms, non-payment, or conduct that we reasonably determine to be harmful to our business, other clients, or the integrity of our Services. Termination of an active project will be handled in accordance with the terms of the relevant Project Agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              14. Privacy
            </h2>
            <p>
              Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Website, you consent to the practices described in our Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              15. Links to Other Websites
            </h2>
            <p>
              The Website may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or practices of any linked third-party sites, and inclusion of a link does not imply endorsement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              16. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time to reflect changes in our Services, legal requirements, or business practices. Updated Terms will be posted on this page with a revised effective date. Continued use of the Website or our Services after such changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-4 border-t border-stone-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              17. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or our Services shall be subject to the exclusive jurisdiction of the courts located in Faridabad, Haryana, India, unless otherwise agreed in a specific Project Agreement.
            </p>
          </section>

          <section className="space-y-4 border-t border-stone-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              18. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="p-6 rounded-md bg-stone-50 border border-stone-100 space-y-3 text-stone-700 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-700" />
                <span>Email: <a href="mailto:info@anavyainfotech.com" className="font-medium text-stone-900 hover:underline">info@anavyainfotech.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-700" />
                <span>Phone: <a href="tel:+916201231875" className="font-medium text-stone-900 hover:underline">+91 6201231875</a> | <a href="tel:+917508657479" className="font-medium text-stone-900 hover:underline">+91 7508657479</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-700" />
                <span>Website: <a href="https://www.anavyainfotech.com" target="_blank" rel="noopener noreferrer" className="font-medium text-stone-900 hover:underline">https://www.anavyainfotech.com</a></span>
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

