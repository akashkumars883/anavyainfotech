const processByService = {
  "app-development": {
    title: "Our App Development Process",
    steps: [
      ["Discovery & Roadmap", "Align on users, platform needs, core features, and a practical release plan."],
      ["Product & UI Design", "Shape the key journeys and interface for a clear, usable mobile experience."],
      ["App Engineering", "Build the app and connect the APIs, accounts, and services it depends on."],
      ["QA & Launch", "Test across devices, prepare the store release, and support launch."],
    ],
  },
  branding: {
    title: "Our Branding Process",
    steps: [
      ["Brand Discovery", "Understand your audience, offer, competitors, and business goals."],
      ["Position & Direction", "Set the brand story and visual direction before design begins."],
      ["Identity System", "Create a flexible identity across logo, color, typography, and digital use."],
      ["Guidelines & Handover", "Deliver clear brand guidelines and ready-to-use creative assets."],
    ],
  },
  development: {
    title: "Our Development Process",
    steps: [
      ["Discovery & Architecture", "Clarify requirements, users, integrations, and the right technical foundation."],
      ["UX & Prototyping", "Plan the main journeys and validate page structure before implementation."],
      ["Build & Integrate", "Develop the experience and connect the content, data, and business tools."],
      ["Test & Launch", "Check performance and accessibility, then release with a clear handover."],
    ],
  },
  growth: {
    title: "Our Growth Process",
    steps: [
      ["Audit & Goals", "Review search performance, technical health, and your growth targets."],
      ["Strategy & Priorities", "Turn the findings into a focused plan based on impact and effort."],
      ["Execute & Optimize", "Improve the site, content, and search signals in measurable cycles."],
      ["Report & Scale", "Track qualified traffic and conversions, then build on what works."],
    ],
  },
  technology: {
    title: "Our Technology Process",
    steps: [
      ["Assess & Align", "Understand the current systems, constraints, and business outcomes."],
      ["Architecture & Plan", "Design a secure, maintainable path for the required changes."],
      ["Implement & Integrate", "Deliver the platform, cloud, or automation work in clear stages."],
      ["Monitor & Improve", "Document the setup, review reliability, and plan the next improvements."],
    ],
  },
};

export default function ServiceProcess({ service }) {
  const process = processByService[service];
  if (!process) return null;

  return (
    <section className="service-process-section service-process-new border-y border-stone-100 bg-stone-50 px-6 py-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{process.title}</h2>
          <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
            A clear, collaborative path from the first conversation to a reliable launch.
          </p>
        </div>
        <ol className="service-process-grid">
          {process.steps.map(([title, description], index) => (
            <li className="service-process-step" key={title}>
              <span className="service-process-number" aria-label={`Step ${index + 1}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
