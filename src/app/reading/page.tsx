"use client";

import Link from "next/link";
import { bookGroups, podcastGroups, articleGroups, researchGroups } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_220px] gap-8 items-start">
            <RevealSection>
              <p className="section-label text-sm text-gray-text mb-3">
                resources
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                <span className="font-black">Read, Watch,</span>{" "}
                <em className="playfair-italic font-light">Listen</em>
              </h1>
              <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] mt-1 text-charcoal max-w-2xl">
                Books, films, podcasts, articles, and research worth your time. These are all resources that have shaped how I
                understand my body, my pain, and how to embark upon healing.
              </p>
            </RevealSection>

            <RevealSection className="md:text-right md:pt-6">
              <blockquote>
                <p className="playfair-italic text-sm leading-[1.5] text-charcoal">
                  &ldquo;I&apos;m tired of being enclosed here. I&apos;m wearying
                  to escape into that glorious world, and to be always there: not
                  seeing it dimly through tears, and yearning for it through the
                  walls of an aching heart.&rdquo;
                </p>
                <footer className="mt-2">
                  <p className="playfair-italic text-xs text-charcoal">
                    &mdash; Catherine Earnshaw, Wuthering Heights
                  </p>
                </footer>
              </blockquote>
            </RevealSection>
          </div>

          <RevealSection>
            {/* ── Section pills ── */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "books", id: "books" },
                { label: "podcasts", id: "podcasts" },
                { label: "articles", id: "articles" },
                { label: "research", id: "research" },
                { label: "films", id: "films" },
              ].map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="playfair-italic text-sm px-5 py-2 border-b-2 border-transparent text-charcoal hover:text-black hover:border-chartreuse transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        {/* ── Books ── */}
        <section id="books" className="mb-20 md:mb-28 scroll-mt-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-10">
              Books
            </h2>
          </RevealSection>
          <div className="flex flex-col gap-14">
            {bookGroups.map((group) => (
                <RevealSection key={group.slug}>
                  <Link
                    href={`/reading/books/${group.slug}`}
                    className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                  >
                    <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                      {group.image && (
                        <img src={group.image} alt={group.theme} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                        books
                      </p>
                      <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                        {group.theme}
                      </h3>
                      <p className="text-xs text-charcoal mt-2">
                        {group.books.length} {group.books.length === 1 ? "book" : "books"}
                      </p>
                      <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                        explore &rarr;
                      </span>
                    </div>
                  </Link>
                </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Podcasts ── */}
        <section id="podcasts" className="mb-20 md:mb-28 scroll-mt-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-10">
              Podcast Episodes
            </h2>
          </RevealSection>
          <div className="flex flex-col gap-14">
            {podcastGroups.map((group) => (
              <RevealSection key={group.slug}>
                <Link
                  href={`/reading/podcasts/${group.slug}`}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                >
                  <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                    {group.image && (
                      <img src={group.image} alt={group.theme} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                      podcasts
                    </p>
                    <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                      {group.theme}
                    </h3>
                    <p className="text-xs text-charcoal mt-2">
                      {group.podcasts.length} {group.podcasts.length === 1 ? "episode" : "episodes"}
                    </p>
                    <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                      explore &rarr;
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Articles ── */}
        <section id="articles" className="mb-20 md:mb-28 scroll-mt-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-10">
              Articles
            </h2>
          </RevealSection>
          <div className="flex flex-col gap-14">
            {articleGroups.map((group) => (
              <RevealSection key={group.slug}>
                <Link
                  href={`/reading/articles/${group.slug}`}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                >
                  <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                    {group.image && (
                      <img src={group.image} alt={group.theme} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                      articles
                    </p>
                    <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                      {group.theme}
                    </h3>
                    <p className="text-xs text-charcoal mt-2">
                      {group.articles.length} {group.articles.length === 1 ? "article" : "articles"}
                    </p>
                    <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                      explore &rarr;
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Research ── */}
        <section id="research" className="mb-20 md:mb-28 scroll-mt-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-10">
              Research
            </h2>
          </RevealSection>
          <div className="flex flex-col gap-14">
            {researchGroups.map((group) => (
              <RevealSection key={group.slug}>
                <Link
                  href={`/reading/research/${group.slug}`}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                >
                  <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                    {group.image && (
                      <img src={group.image} alt={group.theme} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                      research
                    </p>
                    <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                      {group.theme}
                    </h3>
                    <p className="text-xs text-charcoal mt-2">
                      {group.articles.length} {group.articles.length === 1 ? "paper" : "papers"}
                    </p>
                    <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                      explore &rarr;
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Films ── */}
        <section id="films" className="scroll-mt-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-10">
              Films
            </h2>
          </RevealSection>
          <RevealSection>
            <Link
              href="/reading/films"
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
            >
              <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                  films
                </p>
                <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                  Documentaries
                </h3>
                <p className="text-xs text-charcoal mt-2">
                  3 films
                </p>
                <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                  explore &rarr;
                </span>
              </div>
            </Link>
          </RevealSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
