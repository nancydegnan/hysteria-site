"use client";

import Link from "next/link";
import { bookGroups } from "../../data";
import { RevealSection } from "../../components";

const group = bookGroups.find((g) => g.slug === "mind-body-and-trauma")!;

export default function BooksSubsectionPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="px-6 pt-8">
        <Link
          href="/reading"
          className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
        >
          <span>&larr;</span>
          <span>Back to Read, Watch, Listen</span>
        </Link>
      </div>

      <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto">
        <RevealSection>
          <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
            // Books
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-cream uppercase leading-[0.85] section-title-cream">
            {group.theme}
          </h1>
        </RevealSection>
      </header>

      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {group.books.map((book) => (
            <RevealSection key={book.title}>
              <div className="flex flex-col items-center text-center group">
                <h4 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-2">
                  {book.title}
                </h4>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-hot-pink mb-4">
                  {book.authors}
                </p>
                <p className="font-body text-sm leading-[1.8] opacity-70 mb-6">
                  {book.description}
                </p>
                <a
                  href={book.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-cream hover:text-hot-pink transition-colors duration-300 mt-auto"
                >
                  {book.buyLabel || "Buy Book"}
                  <span>&rarr;</span>
                </a>
              </div>
            </RevealSection>
          ))}
        </div>
      </main>

      <footer className="border-t border-cream/10 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">
            &copy; {new Date().getFullYear()} HYSTERIA Film. All rights reserved.
          </p>
          <Link
            href="/"
            className="font-body text-xs text-cream/40 hover:text-hot-pink transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
