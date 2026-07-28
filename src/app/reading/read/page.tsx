"use client";

import { useState } from "react";
import Link from "next/link";
import { readArticles, readCategories } from "../data";
import { RevealSection, Footer, SubpageNav } from "../../components";

const categories = ["all", ...readCategories.map((c) => c.key)];

export default function ReadPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? readArticles
      : readArticles.filter((a) => a.category === active);

  const hasResults = filtered.length > 0;

  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              read
            </p>
            <h1 className="playfair text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              read
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link href="/reading" className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block">
          &larr; back to read
        </Link>

        {/* ── Category filters ── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm px-5 py-2 border-b-2 transition-all duration-300 ${
                active === cat
                  ? "border-black text-black"
                  : "border-transparent text-black hover:text-black hover:border-chartreuse"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Cards ── */}
        {hasResults ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((article, i) => {
              const isLarge = i % 5 === 0;
              const isInternal = !!article.slug;
              const href = isInternal
                ? `/reading/read/${article.slug}`
                : article.url;

              const CardWrapper = isInternal ? Link : "a";
              const extraProps = isInternal
                ? {}
                : { target: "_blank" as const, rel: "noopener noreferrer" };

              return (
                <RevealSection key={article.title} className={isLarge ? "col-span-2" : ""}>
                  <CardWrapper
                    href={href}
                    {...extraProps}
                    className="block group"
                  >
                    {/* Image */}
                    <div className={`${isLarge ? "aspect-[16/9]" : "aspect-[3/2]"} bg-[#e4e0d9] mb-4 overflow-hidden`}>
                      {article.image && (
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                      )}
                    </div>

                    {/* Section tag */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 bg-black inline-block" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                        {article.category}
                      </span>
                    </div>

                    {/* Info */}
                    <h4 className={`playfair font-bold leading-tight mb-1 group-hover:text-charcoal transition-colors duration-300 ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}>
                      {article.title}
                    </h4>
                    {article.author && (
                      <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                        {article.author}
                      </p>
                    )}
                    <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                      {article.description}
                    </p>
                  </CardWrapper>
                </RevealSection>
              );
            })}
          </div>
        ) : (
          <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base text-black italic">
            Coming soon.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
