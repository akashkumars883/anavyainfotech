import Link from "next/link";
import { ArrowUpRight, Sparkles, BookOpen, Clock, Tag } from "lucide-react";
import { getBlogPosts } from "@/lib/blogData";
import BlogFilterClient from "@/components/BlogFilterClient";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SafeImage from "@/components/SafeImage";

export const revalidate = 60;

export const metadata = {
  title: "Our Blog & Business Growth Tips",
  description:
    "Read easy-to-follow guides about software, AI tools, CRM systems, and SEO from Anavya Infotech.",
  keywords:
    "software engineering blog, AI chatbot development guide, Next.js performance tutorial, technical SEO blueprints, custom CRM development",
  alternates: {
    canonical: "https://www.anavyainfotech.com/blog",
  },
  openGraph: {
    title: "Our Blog & Business Growth Tips - Anavya Infotech",
    description:
      "Simple guides about software, AI tools, and SEO for growing businesses.",
    url: "https://www.anavyainfotech.com/blog",
    type: "website",
  },
};

const BLOG_FAQS = [
  {
    question: "How often do you publish new guides and articles?",
    answer:
      "We share new guides each week about building software, using AI tools, improving website speed, and helping people find your business online.",
  },
  {
    question: "Who writes the articles on the Anavya Infotech blog?",
    answer:
      "Our team members write the articles. They build software, AI tools, and websites and help businesses improve their search results.",
  },
  {
    question: "Can I ask your team to write about a topic?",
    answer:
      "Yes. Send us your question on our contact page, and our team may write a guide about it.",
  },
  {
    question: "Are these guides for people who do not work in tech?",
    answer:
      "Yes. We write for business owners as well as people who work in tech, and explain hard topics in clear language.",
  },
  {
    question: "How can these guides help my business?",
    answer:
      "Follow the steps in our guides, or book a free call with our team to talk about your website or software.",
  },
];

export default async function BlogListingPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Section */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <BookOpen className="h-3.5 w-3.5 text-blue-700" /> Our Blog & Tips
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Simple software guides <br />
            <span className="text-blue-700">& business growth tips.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Easy-to-follow guides about software, AI tools, CRM systems, and ways to help people find your business online.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredPost && (
        <section className="py-8 bg-white border-b border-stone-100 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="group relative bg-stone-50 border border-stone-200/80 rounded-md p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-stone-300 transition-all cursor-pointer">
              {/* Full Card Link */}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="absolute inset-0 z-30 flex items-end p-5 text-transparent text-[0px]"
                aria-label={`Read featured article: ${featuredPost.title}`}
              >
                <span>Read featured article: {featuredPost.title}</span>
              </Link>

              <div className="lg:col-span-7 space-y-4 text-left pointer-events-none">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-700/10 border border-blue-700/20 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    <Sparkles className="h-3 w-3" /> Featured Article
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-stone-200/60 text-stone-700 font-semibold text-[10px] uppercase tracking-wider">
                    <Tag className="h-3 w-3" /> {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight group-hover:text-blue-700 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-stone-600 font-light leading-relaxed line-clamp-3">
                  {featuredPost.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-200/60">
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="font-semibold text-stone-900">{featuredPost.author.name}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featuredPost.readTime}</span>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-white group-hover:bg-blue-700 transition-all shrink-0"
                  >
                    Read the Article
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Featured Image Container */}
              <div className="lg:col-span-5 h-64 sm:h-72 w-full rounded-md overflow-hidden bg-stone-100 border border-stone-200/80 relative pointer-events-none">
                <SafeImage
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt || featuredPost.title}
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Bar + Articles Grid (Client Component) */}
      <section className="py-8 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <BlogFilterClient initialPosts={posts} />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Questions About Our Blog"
        subtitle="Find out more about our articles, guides, and topics."
        faqs={BLOG_FAQS}
      />
    </main>
  );
}
