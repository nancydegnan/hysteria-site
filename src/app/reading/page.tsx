"use client";

import Link from "next/link";
import { bookGroups, podcastGroups, articleGroups, researchGroups } from "./data";
import { RevealSection } from "./components";

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      {/* ── Back link ── */}
      <div className="px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto">
        <RevealSection>
          <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
            // Resources
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-cream uppercase leading-[0.85] section-title-cream">
            Read, Watch, Listen
          </h1>
          <p className="font-body text-base md:text-lg leading-[1.8] mt-8 opacity-80 max-w-2xl">
            Books, films, podcasts, articles, and research worth your time. These are all resources that have shaped how I
            understand my body, my pain, and how to embark upon healing.
          </p>
        </RevealSection>
      </header>

      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto">
        {/* ── Books ── */}
        <section className="mb-20 md:mb-28">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
              Books
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {bookGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/books/${group.slug}`}
                  className="block border-[2px] border-cream/20 px-6 py-5 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300 group"
                >
                  <span className="font-heading text-lg md:text-xl uppercase tracking-[0.1em]">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-body text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                    {group.books.length} {group.books.length === 1 ? "book" : "books"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Podcasts ── */}
        <section className="mb-20 md:mb-28">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
              Podcast Episodes
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {podcastGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/podcasts/${group.slug}`}
                  className="block border-[2px] border-cream/20 px-6 py-5 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300 group"
                >
                  <span className="font-heading text-lg md:text-xl uppercase tracking-[0.1em]">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-body text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                    {group.podcasts.length} {group.podcasts.length === 1 ? "episode" : "episodes"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Films ── */}
        <section className="mb-20 md:mb-28">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
              Films
            </h2>
          </RevealSection>
          <RevealSection>
            <Link
              href="/reading/films"
              className="block border-[2px] border-cream/20 px-6 py-5 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300 group"
            >
              <span className="font-heading text-lg md:text-xl uppercase tracking-[0.1em]">
                Documentaries
              </span>
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="block font-body text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                3 films
              </span>
            </Link>
          </RevealSection>
        </section>

        {/* ── Articles ── */}
        <section className="mb-20 md:mb-28">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
              Articles
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {articleGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/articles/${group.slug}`}
                  className="block border-[2px] border-cream/20 px-6 py-5 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300 group"
                >
                  <span className="font-heading text-lg md:text-xl uppercase tracking-[0.1em]">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-body text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                    {group.articles.length} {group.articles.length === 1 ? "article" : "articles"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Research ── */}
        <section>
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
              Research
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {researchGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/research/${group.slug}`}
                  className="block border-[2px] border-cream/20 px-6 py-5 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300 group"
                >
                  <span className="font-heading text-lg md:text-xl uppercase tracking-[0.1em]">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-body text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                    {group.articles.length} {group.articles.length === 1 ? "paper" : "papers"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-cream/10 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">
            &copy; {new Date().getFullYear()} HYSTERIA Film. All rights
            reserved.
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
