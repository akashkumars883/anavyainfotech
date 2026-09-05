import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "LAUNCH",
      startingINR: "₹7,999",
      startingUSD: "$1,499",
      desc: "For new brands that need a sharp, high-converting website.",
      features: [
        "Up to 6 custom pages",
        "Sub-second Next.js build",
        "Basic technical SEO setup",
        "1 month post-launch support",
      ],
      featured: false,
    },
    {
      name: "GROWTH",
      startingINR: "₹14,999",
      startingUSD: "$2,999",
      desc: "For scaling teams targeting traffic, content, and leads.",
      features: [
        "Custom design system",
        "Headless CMS integration",
        "Full SEO & Analytics telemetry",
        "3 months dedicated support",
      ],
      featured: true,
    },
    {
      name: "PARTNER",
      startingINR: "₹29,999/mo",
      startingUSD: "$5,999/mo",
      desc: "Ongoing design, engineering, AI & organic growth retainer.",
      features: [
        "Dedicated senior dev squad",
        "Sprint roadmap & iterations",
        "Speed & uptime performance tuning",
        "24/7 Priority SLA support",
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-10 bg-stone-50 border-b border-stone-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
            Flexible engagement models <br />
            <span className="text-blue-700">tailored to your goals.</span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`rounded-md p-8 flex flex-col justify-between border transition-all duration-300 ${plan.featured
                ? "bg-[#09090b] border-black text-white"
                : "bg-white border-stone-200/80 text-stone-900 hover:border-stone-300 hover:shadow-lg"
                }`}
            >
              <div className="space-y-6">
                {/* Title & Description */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-wider uppercase font-sans">
                      {plan.name}
                    </h3>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${
                      plan.featured ? "bg-blue-600/20 text-blue-400 border-blue-500/30" : "bg-stone-100 text-stone-700 border-stone-200"
                    }`}>
                      {plan.startingUSD} ({plan.startingINR})
                    </span>
                  </div>
                  <p
                    className={`text-xs font-light leading-relaxed ${plan.featured ? "text-zinc-400" : "text-stone-600"
                      }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 pt-4 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-medium">
                      <Check
                        className={`h-4 w-4 shrink-0 ${plan.featured ? "text-blue-600" : "text-blue-700"
                          }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${plan.featured
                    ? "bg-blue-700 text-white hover:bg-blue-800 shadow-md"
                    : "bg-white text-stone-900 border border-stone-200 hover:bg-stone-50 hover:border-stone-300"
                    }`}
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
