import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  CreditCard,
  Database,
  FileText,
  Gauge,
  Globe,
  Layers3,
  Palette,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const iconRules = [
  [/security|secure|privacy|compliance|protect|auth|access|risk/i, ShieldCheck],
  [/performance|speed|lcp|vital|load|latency|fast/i, Gauge],
  [/seo|search|keyword|index|rank|crawl/i, Search],
  [/api|integrat|sync|webhook|workflow|automation|pipeline/i, Workflow],
  [/content|copy|editor|blog|editorial|writing/i, FileText],
  [/customer|user|persona|team|audience|client/i, Users],
  [/design|brand|visual|figma|ux|ui|identity/i, Palette],
  [/checkout|payment|cart|catalog|commerce|store|shopify|product/i, ShoppingCart],
  [/database|data layer|storage/i, Database],
  [/analytics|report|metric|tracking|results/i, BarChart3],
  [/application|portal|platform|saas|system|architecture/i, Layers3],
  [/development|engineering|code|framework|next\.js|react|backend|runtime/i, Code2],
  [/strategy|roadmap|discovery|research|planning/i, Compass],
  [/conversion|lead|growth|roi|revenue|target/i, Target],
  [/cloud|deploy|server|infrastructure|hosting/i, Cloud],
  [/mobile|ios|android|app/i, Smartphone],
  [/ai|model|machine learning|rag|chatbot/i, BrainCircuit],
  [/cost|price|billing|finance|payment/i, CreditCard],
  [/global|location|local|international/i, Globe],
];

export default function ServiceFeatureIcon({ label = "" }) {
  const Icon = iconRules.find(([pattern]) => pattern.test(label))?.[1] || Sparkles;

  return (
    <span
      aria-hidden="true"
      className="service-feature-icon mb-2 inline-flex h-14 w-14 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-blue-700"
    >
      <Icon className="h-7 w-7" strokeWidth={1.7} />
    </span>
  );
}
