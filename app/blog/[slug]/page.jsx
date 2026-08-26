import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight, Tag, Eye } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blogData";
import Breadcrumbs from "@/components/Breadcrumbs";
import SafeImage from "@/components/SafeImage";
import BlogViewTracker from "@/components/BlogViewTracker";

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return (posts || []).slice(0, 5).map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: "Article Not Found – Anavya Infotech" };
  }

  return {
    title: `${post.title} – Anavya Infotech Engineering Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.anavyainfotech.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.anavyainfotech.com/blog/${post.slug}`,
      images: [post.image],
      type: "article",
    },
  };
}

// Convert markdown syntax or format HTML content for headings, bullets, images & formatting
function formatArticleContent(content = "") {
  if (!content) return "";

  // 1. Normalize line endings (\r\n -> \n)
  let formatted = String(content).replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // 2. Strip any accidental <p> or <div> tags wrapping markdown syntax like <p>### Heading</p>
  formatted = formatted
    .replace(/<p>\s*(####?\s+.*?)\s*<\/p>/gi, "$1")
    .replace(/<p>\s*(###?\s+.*?)\s*<\/p>/gi, "$1")
    .replace(/<p>\s*(##?\s+.*?)\s*<\/p>/gi, "$1")
    .replace(/<p>\s*(#?\s+.*?)\s*<\/p>/gi, "$1");

  // 3. Code blocks ```
  formatted = formatted.replace(/```([a-z]*)\n([\s\S]*?)```/gi, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;
  });

  // 4. Headings (# H1, ## H2, ### H3, #### H4) with explicit heading classes
  formatted = formatted
    .replace(/^\s*####\s+(.*$)/gm, '<h4 class="text-lg font-bold text-stone-900 mt-6 mb-2">$1</h4>')
    .replace(/^\s*###\s+(.*$)/gm, '<h3 class="text-xl font-bold text-stone-900 mt-6 mb-2">$1</h3>')
    .replace(/^\s*##\s+(.*$)/gm, '<h2 class="text-2xl font-bold text-stone-900 mt-8 mb-3 pb-2 border-b border-stone-200">$1</h2>')
    .replace(/^\s*#\s+(.*$)/gm, '<h1 class="text-3xl font-bold text-stone-900 mt-8 mb-4">$1</h1>');

  // 5. Bold & Italic (using explicit font-bold styling)
  formatted = formatted
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-stone-900">$1</strong>')
    .replace(/__(.*?)__/g, '<strong class="font-bold text-stone-900">$1</strong>')
    .replace(/\*([^\*]+)\*/g, '<em class="italic">$1</em>')
    .replace(/_([^_]+)_/g, '<em class="italic">$1</em>');

  // 6. Blockquotes (> text)
  formatted = formatted.replace(/^\s*>\s*(.*$)/gm, '<blockquote class="border-l-4 border-blue-700 pl-4 py-2 my-4 italic bg-blue-50/50 rounded-r-md text-stone-700">$1</blockquote>');

  // 7. Images ![alt](url)
  formatted = formatted.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-md my-6 max-w-full h-auto shadow-md border border-stone-200" />');

  // 8. Links [text](url)
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline font-semibold hover:text-blue-900">$1</a>');

  // 9. Bullet lists (- item or * item)
  formatted = formatted.replace(/^\s*[\-\*]\s+(.*$)/gm, '<li class="ml-4 list-disc">$1</li>');
  formatted = formatted.replace(/^\s*\d+\.\s+(.*$)/gm, '<li class="ml-4 list-decimal">$1</li>');
  formatted = formatted.replace(/(<li.*?<\/li>\s*)+/gs, (match) => `<ul class="my-4 space-y-1.5">${match}</ul>`);

  // 10. Paragraph wrapping for orphan text lines
  const blocks = formatted.split(/\n\n+/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<img") ||
        trimmed.startsWith("<p>")
      ) {
        return trimmed;
      }
      return `<p class="my-4 text-stone-700 font-normal leading-relaxed">${trimmed}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const formattedContent = formatArticleContent(post.content);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Anavya Infotech",
      "url": "https://www.anavyainfotech.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.anavyainfotech.com/blog/${post.slug}`,
    },
  };

  const faqSchema = Array.isArray(post.faqs) && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  return (
    <main className="min-h-screen bg-white pt-8 md:pt-10 pb-10 text-left selection:bg-blue-600/20 selection:text-blue-950">
      <BlogViewTracker slug={post.slug} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="max-w-4xl mx-auto px-6 space-y-6">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />

        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-black transition-colors bg-stone-100 px-4 py-2 rounded-md"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to All Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-700/10 border border-blue-700/20 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Tag className="h-3 w-3" /> {post.category || "Engineering"}
            </span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            {post.description}
          </p>

          {/* Author & Date Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 font-bold text-xs uppercase">
                <User className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900">{post.author.name}</div>
                <div className="text-xs text-stone-500 font-light">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-stone-400" /> Published on {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-stone-700">
                <Eye className="h-3.5 w-3.5 text-stone-400" /> {post.views_count || 0} reads
              </span>
            </div>
          </div>
        </header>

        {/* Article Cover Image Banner */}
        {post.image && (
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-md overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
            <SafeImage
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}

        {/* Article Body HTML Render with Typography (.prose) */}
        <section 
          className="prose max-w-none text-stone-800 text-base leading-relaxed font-light pt-4"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />

        {/* FAQ Accordion Section */}
        {Array.isArray(post.faqs) && post.faqs.length > 0 && (
          <section className="pt-8 border-t border-stone-200 space-y-4">
            <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {post.faqs.map((faq, index) => (
                <details key={index} className="group bg-stone-50 border border-stone-200 rounded-md p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-stone-900 text-sm">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 text-blue-700 font-semibold text-xs">▼</span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Footer Share & CTA */}
        <footer className="pt-10 border-t border-stone-200 space-y-10">
          <div className="p-8 rounded-md bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-lg text-left">
              <h3 className="text-xl font-bold text-white">Need a custom software engineering solution?</h3>
              <p className="text-xs text-zinc-400 font-light">
                Our architects can help you build scalable web apps, AI tools, or custom CRM systems.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0"
            >
              Get Technical Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-bold text-stone-900">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related, i) => (
                  <Link
                    key={i}
                    href={`/blog/${related.slug}`}
                    className="p-5 rounded-md bg-stone-50 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all space-y-4 block group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-stone-100 rounded-md border border-stone-200/60">
                      <img
                        src={related.image}
                        alt={related.imageAlt || related.title}
                        className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">{related.category}</span>
                      <h4 className="text-base font-bold text-stone-900 group-hover:text-blue-700 transition-colors line-clamp-2">{related.title}</h4>
                      <p className="text-xs text-stone-500 font-light line-clamp-2">{related.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </footer>

      </article>
    </main>
  );
}
