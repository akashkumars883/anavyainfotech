export const PORTFOLIO_PROJECTS = [
  {
    slug: "automixa-ai",
    title: "Automixa – Instagram DM & Comment Automation Engine",
    category: "AI & Automation",
    categorySlug: "ai",
    client: "Automixa Inc.",
    industry: "SaaS & Creator Economy",
    year: "2026",
    websiteUrl: "https://www.automixa.in/",
    summary: "An AI-powered Meta API messaging automation platform engineered for Instagram creators, brands, and agencies to auto-reply to comments & DMs, capture leads, and scale engagement.",
    image: "/automixa-preview.png",
    tags: ["Next.js", "Meta Graph API", "Node.js", "Tailwind CSS", "PostgreSQL", "AI Agents"],
    metrics: [
      { label: "Active Creators", value: "10,000+" },
      { label: "Auto DMs Delivered", value: "1.2M+" },
      { label: "Lead Conversion Lift", value: "+38%" },
    ],
    challenge: `
Creators and digital businesses were losing up to 60% of potential leads from Instagram comments because responding manually to hundreds of DMs per day was humanly impossible. Traditional scraper tools were constantly getting accounts banned or flagged by Meta security guardrails.
    `,
    solution: `
Anavya Infotech built Automixa as a fully compliant, official Meta Graph API automation platform:

1. **Instant Webhook Engine**: Captures Instagram comment webhooks in sub-50ms and triggers dynamic personalized direct message delivery.
2. **Smart Bio Links & Story Mention Tracker**: Automatically delivers digital products, ebooks, and discount coupons when users mention the account in Instagram stories.
3. **High-Performance Dashboard**: Designed a fast Next.js & PostgreSQL analytics dashboard providing real-time conversion rates and lead pipeline tracking.
    `,
    keyFeatures: [
      "Official Meta Graph API Integration (100% Account Safe)",
      "Automated comment-to-DM lead capture & link delivery",
      "Story mention auto-responder & Smart Link-in-Bio generator",
      "Multi-account switching with real-time conversion analytics",
    ],
  },
  {
    slug: "money-capital-finance",
    title: "Money Capital Finance – Loan & Advisory Portal",
    category: "Fintech & Web Applications",
    categorySlug: "web",
    client: "Money Capital Finance",
    industry: "Fintech & Banking Services",
    year: "2026",
    websiteUrl: "https://www.moneycapitalfinances.com/",
    summary: "A high-conversion financial portal equipped with interactive EMI calculators, eligibility scoring engines, and instant lead distribution for personal and business loan applicants.",
    image: "/money-capital-preview.png",
    tags: ["Next.js", "Financial Engine", "React", "Tailwind CSS", "Lead Automation"],
    metrics: [
      { label: "Monthly Inquiries", value: "15,000+" },
      { label: "Banking Partners", value: "15+ NBFCs" },
      { label: "Disbursal Speed", value: "< 24 Hours" },
    ],
    challenge: `
Money Capital Finance needed a modern digital customer portal to replace traditional offline loan application processes. The platform required fast page loading speeds, interactive loan calculator tools, and seamless lead assignment to financial advisors across Delhi NCR.
    `,
    solution: `
We designed and built a fast Next.js web portal with optimized financial calculators and bank partner integrations:

1. **Interactive EMI & Eligibility Calculators**: Engineered client-side financial sliders allowing users to compute monthly repayments instantly across Personal, Business, and Home loans.
2. **Bank Partner Showcase**: Showcases 15+ top banking & NBFC partners (HDFC, ICICI, Axis, Bajaj Finance) with automated application routing.
3. **Instant Lead Capture**: Integrated real-time lead capture forms connecting loan applicants directly to relationship managers via WhatsApp and SMS webhooks.
    `,
    keyFeatures: [
      "Real-time interactive loan EMI & eligibility calculators",
      "Multi-loan category pages (Personal, Business, Home, LAP)",
      "Seamless integration with 15+ top Indian banking & NBFC partners",
      "Optimized Edge performance with 98+ Lighthouse scores",
    ],
  },
  {
    slug: "nakul-properties",
    title: "Nakul Properties – Real Estate Advisory & Property Directory",
    category: "Real Estate & Custom Software",
    categorySlug: "crm",
    client: "Nakul Properties Faridabad",
    industry: "Real Estate & Commercial Advisory",
    year: "2026",
    websiteUrl: "http://nakulproperties.com/",
    summary: "A modern real estate portal for buying, selling, and renting luxury builder floors, residential plots, and commercial shops across Faridabad with automated lead management.",
    image: "/nakul-properties-preview.png",
    tags: ["Next.js", "Sanity CMS", "React", "WhatsApp API", "Tailwind CSS"],
    metrics: [
      { label: "Properties Listed", value: "500+" },
      { label: "Inquiry Conversion", value: "+45%" },
      { label: "Page Speed Rating", value: "98/100" },
    ],
    challenge: `
Nakul Properties needed a digital showcase to highlight premium HUDA sector plots, gated township properties, and luxury builder floors in Faridabad with high visual appeal, quick property searching, and direct click-to-WhatsApp buyer connections.
    `,
    solution: `
Anavya Infotech constructed a feature-rich real estate directory platform:

1. **Category & Property Search Engine**: Built dynamic property filtration by budget, location (Sector 14, 15, 21, Greater Faridabad), and property type (HUDA Plots, SCO Shops, Builder Floors).
2. **Headless CMS Integration**: Integrated Sanity CMS for instant property publishing and image asset management.
3. **Instant WhatsApp Lead Dispatch**: Added direct one-click WhatsApp inquiry triggers pre-filling property details for buyers.
    `,
    keyFeatures: [
      "Property search filters by budget, sector location, and property type",
      "Rich media photo galleries for luxury builder floors and HUDA plots",
      "Direct 1-click WhatsApp lead connection pre-loaded with property specs",
      "Headless CMS integration for instant updates without code changes",
    ],
  },
];
