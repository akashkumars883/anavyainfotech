"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [], baseUrl = "https://anavyainfotech.com" }) {
  if (!items || items.length === 0) return null;

  const allItems = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${baseUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 font-medium">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-stone-300 shrink-0" />}
                {isLast ? (
                  <span className="text-stone-900 font-semibold truncate max-w-[220px] sm:max-w-none">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-700 transition-colors flex items-center gap-1"
                  >
                    {idx === 0 && <Home className="h-3.5 w-3.5 text-stone-400 shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
