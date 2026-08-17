import Link from "next/link";
import { Shield, ArrowRight, Mail, Phone, Globe } from "lucide-react";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Privacy Policy – Anavya Infotech",
  description:
    "Privacy Policy for Anavya Infotech. Learn how we collect, protect, and handle your data when using our website and services.",
  alternates: {
    canonical: "https://www.anavyainfotech.com/privacy-policy",
  },
};

const PRIVACY_FAQS = [
  {
    question: "What personal data does Anavya Infotech collect?",
    answer:
      "We collect contact details (name, email, phone, company name), project requirements, communication records, technical usage data, and marketing preferences.",
  },
  {
    question: "Do you sell personal information to third parties?",
    answer:
      "No. We do not sell your personal information. We only share it with essential operational service providers under strict confidentiality obligations.",
  },
  {
    question: "How do you protect client data and project details?",
    answer:
      "We implement technical and organizational security measures to protect your information against unauthorized access, alteration, or disclosure.",
  },
  {
    question: "How can I request access or deletion of my data?",
    answer:
      "You can contact us via our contact information to access, correct, or request deletion of your personal data subject to legal requirements.",
  },
  {
    question: "Can I opt out of marketing communications?",
    answer:
      "Yes, you can opt out at any time by using the unsubscribe link in our communications or by contacting us directly.",
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 15, 2026";

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-20 text-left">
      {/* Header */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Shield className="h-3.5 w-3.5 text-blue-700" /> Legal & Transparency
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
            Privacy Policy
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
              Anavya Infotech (&quot;Anavya Infotech,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a digital marketing agency and website development company based in India, serving clients across India, Delhi NCR, Noida, the USA, and globally. We are committed to protecting the privacy of visitors to our website, <a href="https://www.anavyainfotech.com" className="text-blue-700 hover:underline">www.anavyainfotech.com</a> (the &quot;Website&quot;), and of our clients and prospective clients.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use and protect it, and what choices you have regarding your information. By using our Website or submitting information to us, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              2. Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc list-inside space-y-2 text-stone-600 pl-2">
              <li>
                <strong className="font-semibold text-stone-800">Contact and Identification Information:</strong> such as your full name, email address, phone number, and company name, when you fill out our project request form or contact us.
              </li>
              <li>
                <strong className="font-semibold text-stone-800">Project and Business Information:</strong> details you voluntarily share about your business, project requirements, service area of interest (e.g., Web Apps &amp; Development, AI Integrations &amp; Automation, Growth &amp; Technical SEO, Corporate Design &amp; Branding), and project descriptions.
              </li>
              <li>
                <strong className="font-semibold text-stone-800">Communication Data:</strong> records of correspondence when you email, call, or message us, including the content of those communications.
              </li>
              <li>
                <strong className="font-semibold text-stone-800">Technical and Usage Data:</strong> such as your IP address, browser type, device information, pages visited, referring URLs, and browsing behavior on our Website, typically collected automatically through cookies and similar technologies.
              </li>
              <li>
                <strong className="font-semibold text-stone-800">Marketing Preferences:</strong> information related to your subscription to our newsletter or updates, if you opt in.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              3. How We Collect Information
            </h2>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
              <li>Directly from you, when you complete our &quot;Start a Project&quot; or contact forms, subscribe to updates, or communicate with us via email or phone.</li>
              <li>Automatically, through cookies, analytics tools, and similar tracking technologies when you browse our Website.</li>
              <li>From third parties, such as analytics or advertising partners, where applicable and permitted by law.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              4. How We Use Your Information
            </h2>
            <p>We use the information we collect for purposes including:</p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
              <li>Responding to your inquiries and project requests.</li>
              <li>Preparing proposals, quotes, and providing our services (web development, AI integrations, SEO, branding, and related services).</li>
              <li>Communicating with you about your project, our services, and updates.</li>
              <li>Improving our Website, services, and user experience.</li>
              <li>Sending marketing communications, where you have opted in, and which you may unsubscribe from at any time.</li>
              <li>Complying with legal obligations and protecting our legal rights.</li>
              <li>Analyzing Website traffic and performance for internal business purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              Our Website may use cookies and similar tracking technologies (such as web beacons and analytics scripts) to enhance your browsing experience, understand how visitors use our Website, and support our marketing efforts. You can control or disable cookies through your browser settings; however, doing so may affect certain features of the Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              6. Sharing of Information
            </h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
              <li>Service providers who assist us with hosting, analytics, email delivery, CRM management, and similar operational functions, under confidentiality obligations.</li>
              <li>Professional advisors, such as legal or accounting consultants, where necessary.</li>
              <li>Authorities, where required by law, regulation, legal process, or governmental request.</li>
              <li>Business transfers, in connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              7. Data Retention
            </h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, including to provide our services, maintain business records, and comply with legal, accounting, or reporting obligations. When information is no longer needed, we take reasonable steps to delete or anonymize it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              8. Data Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              9. Your Rights and Choices
            </h2>
            <p>Depending on your location, you may have rights regarding your personal information, including the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information, subject to legal or contractual retention requirements.</li>
              <li>Opt out of marketing communications at any time by using the unsubscribe link or contacting us directly.</li>
              <li>Object to or restrict certain processing of your information, where applicable law permits.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided in Section 12 below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              10. Third-Party Links
            </h2>
            <p>
              Our Website may contain links to third-party websites or services, including social media platforms and partner sites. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              11. International Data Transfers
            </h2>
            <p>
              As we serve clients in India, the USA, and other regions, your information may be transferred to, stored, and processed in countries other than your own, which may have different data protection laws. Where such transfers occur, we take reasonable steps to ensure your information is treated securely and in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4 border-t border-stone-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              12. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="p-6 rounded-md bg-stone-50 border border-stone-100 space-y-3 text-stone-700 text-sm">
              <p className="font-bold text-stone-900 text-base">Anavya Infotech</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-700" />
                <span>Phone: <a href="tel:+916201231875" className="font-medium text-stone-900 hover:underline">+91 6201231875</a> | <a href="tel:+917508657479" className="font-medium text-stone-900 hover:underline">+91 7508657479</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-700" />
                <span>Website: <a href="https://www.anavyainfotech.com" target="_blank" rel="noopener noreferrer" className="font-medium text-stone-900 hover:underline">www.anavyainfotech.com</a></span>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-t border-stone-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900">
              13. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. The updated version will be posted on this page with a revised &quot;Effective Date.&quot; We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* FAQ Section */}
          <FaqSection
            title="Privacy Frequently Asked Questions"
            subtitle="Common questions regarding data privacy, security, and client confidentiality."
            faqs={PRIVACY_FAQS}
          />

          {/* Bottom Navigation Links */}
          <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
            <Link
              href="/terms-of-service"
              className="text-xs font-semibold text-stone-700 hover:text-black flex items-center gap-1.5 transition-colors"
            >
              Read Terms of Service <ArrowRight className="h-3.5 w-3.5 text-blue-700" />
            </Link>
            <Link
              href="/"
              className="text-xs text-stone-500 hover:text-stone-900 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

