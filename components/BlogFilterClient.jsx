"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { STATIC_BLOG_POSTS } from "@/lib/blogData";
import SafeImage from "@/components/SafeImage";

const POSTS_PER_PAGE = 6;

export default function BlogFilterClient({ initialPosts }) {
  const postsList = Array.isArray(initialPosts) && initialPosts.length > 0 ? initialPosts : (STATIC_BLOG_POSTS || []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Engineering", "AI & Automation", "Strategy", "SEO", "Website Development", "Digital Marketing"];

  // Filter handler resets page to 1
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const filteredPosts = postsList.filter((post) => {
    const postCategory = post.category || "";
    const matchesCategory =
      selectedCategory === "All" ||
      postCategory.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination slices
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="space-y-10">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-stone-100">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post, index) => (
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
                  <span className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-[10px] font-bold text-blue-700 uppercase tracking-wider shadow-2xs">
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
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight group-hover:text-blue-700 transition-colors line-clamp-2">
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

          {/* Pagination Controls Bar */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-stone-100 text-xs">
              <span className="text-stone-500 font-light">
                Showing <strong className="font-semibold text-stone-900">{startIndex + 1}</strong> – <strong className="font-semibold text-stone-900">{Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length)}</strong> of <strong className="font-semibold text-stone-900">{filteredPosts.length}</strong> articles
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-semibold cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-8 w-8 rounded-md font-bold text-xs transition-all cursor-pointer ${
                        currentPage === page
                          ? "bg-blue-700 text-white shadow-sm"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-md border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-semibold cursor-pointer"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-10 space-y-3 bg-stone-50 rounded-md border border-stone-200">
          <p className="text-base font-semibold text-stone-800">No articles found matching &quot;{searchQuery}&quot;</p>
          <p className="text-xs text-stone-500">Try searching for different keywords or select another category filter.</p>
        </div>
      )}
    </div>
  );
}
