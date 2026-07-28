"use client";

import { useState } from "react";
import Link from "next/link";
import { bookGroups } from "../data";
import { RevealSection, Footer, SubpageNav } from "../../components";

// Interleave books from different sections so same categories aren't adjacent
const allBooks = (() => {
  const queues = bookGroups.map((g) =>
    g.books.map((b) => ({ ...b, category: g.theme }))
  );
  const result: (typeof queues)[number] = [];
  let remaining = true;
  while (remaining) {
    remaining = false;
    for (const q of queues) {
      if (q.length) {
        result.push(q.shift()!);
        if (q.length) remaining = true;
      }
    }
  }
  // Place "Mind Your Body" at the last large-card position
  const lastLarge = Math.floor((result.length - 1) / 5) * 5;
  const mbIdx = result.findIndex((b) => b.title === "Mind Your Body");
  if (mbIdx !== -1 && mbIdx !== lastLarge) {
    const [mb] = result.splice(mbIdx, 1);
    result.splice(lastLarge, 0, mb);
  }
  return result;
})();

const categories = ["all", ...bookGroups.map((g) => g.theme)];

export default function BooksPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? allBooks
      : allBooks.filter((b) => b.category === active);

  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              books
            </p>
            <h1 className="playfair text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              books
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

        {/* ── Book cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((book, i) => {
            // Repeating pattern: every 5th card (0, 5, 10…) is large (spans 2 cols)
            const isLarge = i % 5 === 0;
            return (
              <RevealSection key={book.title} className={isLarge ? "col-span-2" : ""}>
                <a
                  href={book.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {/* Cover */}
                  <div className={`${isLarge ? "aspect-[3/4]" : "aspect-[2/3]"} bg-[#e4e0d9] mb-4 overflow-hidden`}>
                    {book.cover && (
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Section tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 bg-black inline-block" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                      {book.category}
                    </span>
                  </div>

                  {/* Info */}
                  <h4 className={`font-['Helvetica','Arial',sans-serif] tracking-tight leading-tight mb-1 group-hover:text-charcoal transition-colors duration-300 ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}>
                    {book.title}
                  </h4>
                  <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                    {book.authors}
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                    {book.description}
                  </p>
                </a>
              </RevealSection>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
