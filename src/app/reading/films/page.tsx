"use client";

import Link from "next/link";
import { films } from "../data";
import { RevealSection, Footer } from "../../components";

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="border-b border-gray-mid">
        <div className="px-6 pt-8">
          <Link
            href="/reading"
            className="inline-flex items-center gap-2 text-sm text-gray-text hover:text-black transition-colors duration-300"
          >
            <span>&larr;</span>
            <span>Back to Read, Watch, Listen</span>
          </Link>
        </div>

        <header className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="font-serif-italic text-sm text-gray-text mb-3">
              films
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Documentaries
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <div className="grid gap-6">
          {films.map((film) => (
            <RevealSection key={film.title}>
              <a
                href={film.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 group card-hover"
              >
                <h3 className="font-serif text-lg md:text-xl leading-tight mb-2 group-hover:text-blush transition-colors duration-300">
                  {film.title}
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h3>
                {film.director && (
                  <p className="font-serif-italic text-xs text-gray-text mb-3">
                    Directed by {film.director}
                  </p>
                )}
                <p className="font-serif text-sm leading-[1.8] text-gray-text">
                  {film.description}
                </p>
              </a>
            </RevealSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
