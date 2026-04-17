"use client";

import Link from "next/link";
import { bookGroups } from "../../data";
import { RevealSection, Footer, SubpageNav } from "../../../components";

const group = bookGroups.find((g) => g.slug === "mind-body-and-trauma")!;

export default function BooksSubsectionPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              books
            </p>
            <h1 className="playfair text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link href="/reading/books" className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block">
          &larr; back to books
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {group.books.map((book) => (
            <RevealSection key={book.title}>
              <div className="bg-gray-light border border-gray-mid p-8 flex flex-col items-center text-center hover:border-black transition-all duration-300 h-full card-hover">
                <h4 className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xl leading-tight mb-2">
                  {book.title}
                </h4>
                <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-4">
                  {book.authors}
                </p>
                <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black mb-6">
                  {book.description}
                </p>
                <a
                  href={book.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-black transition-colors duration-300 mt-auto"
                >
                  {book.buyLabel || "Buy Book"}
                  <span>&rarr;</span>
                </a>
              </div>
            </RevealSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
