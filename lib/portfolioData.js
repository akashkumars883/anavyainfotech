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
    summary: "An AI-powered Meta API tool for Instagram creators, brands, and agencies. It replies to comments and DMs, captures leads, and helps users engage with more people.",
    image: "/automixa-preview.png",
    tags: ["Next.js", "Meta Graph API", "Node.js", "Tailwind CSS", "PostgreSQL", "AI Agents"],
    metrics: [
      { label: "Active Creators", value: "10,000+" },
      { label: "Auto DMs Delivered", value: "1.2M+" },
      { label: "Lead Conversion Lift", value: "+38%" },
    ],
    challenge: `
Creators and businesses were missing up to 60% of potential leads from Instagram comments because they could not reply by hand to hundreds of DMs each day. Traditional scraper tools often led to accounts being banned or flagged by Meta.
    `,
    solution: `
Anavya Infotech built Automixa as an automation platform that uses the official Meta Graph API:

1. **Instant Webhook Engine**: Captures Instagram comment webhooks in under 50ms and sends personalized direct messages.
2. **Smart Bio Links & Story Mention Tracker**: Sends digital products, ebooks, and discount coupons when users mention the account in Instagram stories.
3. **High-Performance Dashboard**: Built a fast Next.js and PostgreSQL dashboard that shows current conversion rates and lead progress.
    `,
    keyFeatures: [
      "Official Meta Graph API connection (100% account safe)",
      "Lead capture and link sharing from comments and DMs",
      "Automatic story replies and a smart link-in-bio tool",
      "Switch between accounts and track conversions in real time",
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
    summary: "A financial portal with EMI calculators, loan eligibility checks, and lead routing for people applying for personal and business loans.",
    image: "/money-capital-preview.png",
    tags: ["Next.js", "Financial Engine", "React", "Tailwind CSS", "Lead Automation"],
    metrics: [
      { label: "Monthly Inquiries", value: "15,000+" },
      { label: "Banking Partners", value: "15+ NBFCs" },
      { label: "Disbursal Speed", value: "< 24 Hours" },
    ],
    challenge: `
Money Capital Finance needed an online portal to replace its offline loan application process. It needed to load quickly, include loan calculators, and send leads to financial advisors across Delhi NCR.
    `,
    solution: `
We built a fast Next.js website with loan calculators and connections to bank partners:

1. **Interactive EMI & Eligibility Calculators**: Added sliders so users can quickly estimate monthly payments for personal, business, and home loans.
2. **Bank Partner Showcase**: Shows 15+ bank and NBFC partners (HDFC, ICICI, Axis, Bajaj Finance) and routes applications automatically.
3. **Instant Lead Capture**: Added forms that send applicant details to relationship managers through WhatsApp and SMS webhooks.
    `,
    keyFeatures: [
      "Loan EMI and eligibility calculators that update right away",
      "Pages for personal, business, home, and LAP loans",
      "Connections to 15+ Indian banks and NBFC partners",
      "Fast Edge performance with Lighthouse scores of 98+",
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
    summary: "A real estate website for buying, selling, and renting luxury builder floors, residential plots, and commercial shops in Faridabad, with automatic lead management.",
    image: "/nakul-properties-preview.png",
    tags: ["Next.js", "Sanity CMS", "React", "WhatsApp API", "Tailwind CSS"],
    metrics: [
      { label: "Properties Listed", value: "500+" },
      { label: "Inquiry Conversion", value: "+45%" },
      { label: "Page Speed Rating", value: "98/100" },
    ],
    challenge: `
Nakul Properties needed a website to show premium HUDA sector plots, gated township properties, and luxury builder floors in Faridabad. Buyers needed clear photos, quick search, and a direct way to contact the business on WhatsApp.
    `,
    solution: `
Anavya Infotech built a real estate directory with:

1. **Category & Property Search**: Added filters for budget, location (Sector 14, 15, 21, Greater Faridabad), and property type (HUDA plots, SCO shops, builder floors).
2. **Headless CMS Integration**: Connected Sanity CMS so the team can publish properties and manage images.
3. **WhatsApp Inquiries**: Added a one-click WhatsApp link that includes property details in the message.
    `,
    keyFeatures: [
      "Property filters for budget, sector, and type",
      "Photo galleries for builder floors and HUDA plots",
      "One-click WhatsApp inquiries with property details included",
      "Headless CMS updates without code changes",
    ],
  },
];
