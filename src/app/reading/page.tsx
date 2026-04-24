"use client";

import { useState } from "react";
import Link from "next/link";
import { sections, allFormats, readingItems, Format } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

export default function ReadingPage() {
  const [activeFormats, setActiveFormats] = useState<Set<Format>>(new Set());

  const isAllSelected = activeFormats.size === 0;

  function toggleFormat(f: Format) {
    setActiveFormats((prev) => {
      const next = new Set(prev);
      if (next.has(f)) {
        next.delete(f);
      } else {
        next.add(f);
      }
      return next;
    });
  }

  function clearFilters() {
    setActiveFormats(new Set());
  }

  function itemsForSection(sectionKey: string) {
    const sectionItems = readingItems.filter((item) => item.section === sectionKey);
    if (isAllSelected) return sectionItems;
    return sectionItems.filter((item) => {
      if (activeFormats.has(item.format)) return true;
      if (item.format === "Article" && activeFormats.has("Study")) return true;
      return false;
    });
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              resources
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">the</span>{" "}
              <em className="playfair-italic font-light">library</em>
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-1 text-black max-w-2xl">
              Books, films, podcasts, articles, and research worth your time,
              organized by what you need right now.
            </p>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        {/* ── Format filter ── */}
        <div className="flex flex-wrap gap-3 mb-16">
          <button
            onClick={clearFilters}
            className={`font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm px-5 py-2 border-b-2 transition-all duration-300 ${
              isAllSelected
                ? "border-black text-black"
                : "border-transparent text-black hover:border-chartreuse"
            }`}
          >
            all
          </button>
          {allFormats.map((f) => (
            <button
              key={f}
              onClick={() => toggleFormat(f)}
              className={`font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm px-5 py-2 border-b-2 transition-all duration-300 ${
                activeFormats.has(f)
                  ? "border-black text-black"
                  : "border-transparent text-black hover:border-chartreuse"
              }`}
            >
              {f === "Study" ? "studies" : `${f.toLowerCase()}s`}
            </button>
          ))}
        </div>

        {/* ── Purpose-based sections ── */}
        <div className="flex flex-col gap-20">
          {sections.map((section) => {
            const items = itemsForSection(section.key);
            if (items.length === 0) return null;

            return (
              <RevealSection key={section.key}>
                {/* Section header */}
                <div className="mb-10">
                  <h2 className="playfair text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    {section.name}
                  </h2>
                  <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">
                    {section.intro}
                  </p>
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => {
                    const isInternal = item.url.startsWith("/");
                    const Wrapper = isInternal ? Link : "a";
                    const wrapperProps = isInternal
                      ? {}
                      : { target: "_blank" as const, rel: "noopener noreferrer" };

                    return (
                    <Wrapper
                      key={item.title}
                      href={item.url || "#"}
                      {...wrapperProps}
                      className="block group"
                    >
                      {/* Image */}
                      {item.format === "Podcast" && item.image && (
                        <div className="w-24 aspect-square bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      {item.format === "Book" && item.image && (
                        <div className="w-36 aspect-[2/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      {item.format === "Film" && (
                        <div className="w-36 aspect-[2/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-[10px] uppercase tracking-[0.12em] text-gray-text">poster</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Format tag */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 bg-black inline-block" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                          {item.format}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Source */}
                      <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                        {item.source}
                      </p>

                      {/* Description */}
                      <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                        {item.description}
                      </p>

                      {item.url && (
                        <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                          {isInternal ? "read" : "view"} &rarr;
                        </span>
                      )}
                    </Wrapper>
                    );
                  })}
                </div>

                {/* Section divider */}
                <div className="divider mt-16" />
              </RevealSection>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
