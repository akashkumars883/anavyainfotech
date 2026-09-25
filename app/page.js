import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  alternates: {
    canonical: "https://www.anavyainfotech.com",
  },
};

export const revalidate = 60;

const HOMEPAGE_FAQS = [
  {
    question: "What core services does Anavya Infotech specialize in?",
    answer:
      "We specialize in custom website development, enterprise web applications, SEO (Local, E-Commerce, and Technical SEO), white-label SEO reseller programs for agencies, AI chatbot integration, and custom CRM software — serving clients across India, Delhi NCR, Noida, Gurgaon, and the USA.",
  },
  {
    question: "How long does a typical web development or SEO campaign take?",
    answer:
      "A standard business website typically takes 3–5 weeks from kickoff to launch. SEO campaigns are ongoing — most clients start seeing measurable ranking movement within 60–90 days, with compounding results after 6 months.",
  },
  {
    question: "Do you offer white-label SEO reseller programs for agencies?",
    answer:
      "Yes. We run fully white-labeled technical and local SEO fulfillment for marketing agencies who want to offer SEO to their clients without building an in-house team.",
  },
  {
    question: "How do you guarantee fast website load speeds and Core Web Vitals?",
    answer:
      "We build on performance-first frameworks (Next.js/React), optimize image delivery, minimize third-party scripts, and run Core Web Vitals audits before every launch — not after.",
  },
  {
    question: "What is the onboarding process to start a project?",
    answer:
      "It starts with a strategy call to understand your business goals, followed by a technical blueprint and proposal within 48 hours. Once approved, you're assigned a dedicated project lead — not a rotating support ticket.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Hero />
      <FadeIn direction="up">
        <Services />
      </FadeIn>
      <FadeIn direction="up">
        <SelectedWork />
      </FadeIn>
      <FadeIn direction="up">
        <Process />
      </FadeIn>
      <FadeIn direction="up">
        <Testimonials />
      </FadeIn>
      <FadeIn direction="up">
        <Blog />
      </FadeIn>
      <FadeIn direction="up">
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Common questions about our digital marketing, SEO, and custom software development services."
          faqs={HOMEPAGE_FAQS}
        />
      </FadeIn>
      <FadeIn direction="up">
        <ContactForm />
      </FadeIn>
    </main>
  );
}
