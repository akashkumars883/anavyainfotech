import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blogData";
import SafeImage from "@/components/SafeImage";

export default async function Blog() {
  const allPosts = await getBlogPosts();
  const posts = allPosts.slice(0, 3); // Take top 3 most recent articles

  // JSON-LD Blog Schema for search engine indexing
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Anavya Infotech Engineering Blog",
    "description": "Insights, articles, and blueprints from our custom software, AI, and search engine optimization team.",
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "description": post.description,
      "image": `https://www.anavyainfotech.com${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "Anavya Infotech"
      }
    }))
  };

  if (!posts || posts.length === 0) return null;

  return (
    <section 
      id="blog"
      aria-labelledby="blog-heading"
      className="py-10 bg-stone-50 border-b border-stone-100 relative z-10"
    >
      {/* Blog Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-semibold uppercase tracking-wider text-stone-600">
            Our Blog
          </div>
          <h2 
            id="blog-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 leading-tight"
          >
            Insights and blueprints from <br />
            <span className="text-blue-700">our engineering team.</span>
          </h2>
        </div>

        {/* Blog Post Cards Grid matching Services & SelectedWork style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id || index}
              className="group relative h-[380px] sm:h-[400px] w-full rounded-md border border-stone-200 bg-white overflow-hidden text-left cursor-pointer transition-all duration-300 hover:border-blue-700/60 flex flex-col justify-between"
            >
              {/* Full Card Link: Tapping anywhere on mobile or desktop opens the article */}
              <Link
                href={`/blog/${post.slug}`}
                className="absolute inset-0 z-30"
                aria-label={`Read article: ${post.title}`}
              />

              {/* Full Card Image Container */}
              <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center overflow-hidden p-4 pb-20">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover rounded-md opacity-95 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Top Header Bar (Category Badge & Direct Arrow Button) */}
              <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-[10px] font-semibold text-blue-700 uppercase tracking-wider shadow-2xs">
                  {post.category || "Article"}
                </span>
                <div className="h-9 w-9 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Bottom Card Title & Desktop Hover Description (Black Text) */}
              <div className="relative z-10 p-5 bg-white/95 backdrop-blur-sm border-t border-stone-100 flex flex-col justify-end text-left pointer-events-none transition-all duration-300">
                {/* Heading - Always pinned at bottom in black text */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-stone-900 tracking-tight group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                </div>

                {/* Description: Expands smoothly on hover in clean dark text */}
                <div className="grid grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-xs sm:text-sm text-stone-600 font-light leading-relaxed opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
