"use client";

import Link from "next/link";
import { bookGroups, podcastGroups, articleGroups, researchGroups } from "./data";
import { RevealSection, Footer } from "../components";

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <div className="border-b border-gray-mid">
        <div className="px-6 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-text hover:text-black transition-colors duration-300"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <header className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="font-serif-italic text-sm text-gray-text mb-3">
              resources
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">Read, Watch,</span>{" "}
              <em className="font-serif-italic font-light">Listen</em>
            </h1>
            <p className="font-serif text-base leading-[1.8] mt-6 text-gray-text max-w-2xl">
              Books, films, podcasts, articles, and research worth your time. These are all resources that have shaped how I
              understand my body, my pain, and how to embark upon healing.
            </p>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        {/* ── Books ── */}
        <section className="mb-16 md:mb-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-8">
              Books
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {bookGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/books/${group.slug}`}
                  className="block bg-gray-light border border-gray-mid px-6 py-5 hover:border-black transition-all duration-300 group card-hover"
                >
                  <span className="text-lg font-medium">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-serif-italic text-xs text-gray-text mt-1">
                    {group.books.length} {group.books.length === 1 ? "book" : "books"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Podcasts ── */}
        <section className="mb-16 md:mb-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-8">
              Podcast Episodes
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {podcastGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/podcasts/${group.slug}`}
                  className="block bg-gray-light border border-gray-mid px-6 py-5 hover:border-black transition-all duration-300 group card-hover"
                >
                  <span className="text-lg font-medium">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-serif-italic text-xs text-gray-text mt-1">
                    {group.podcasts.length} {group.podcasts.length === 1 ? "episode" : "episodes"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Films ── */}
        <section className="mb-16 md:mb-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-8">
              Films
            </h2>
          </RevealSection>
          <RevealSection>
            <Link
              href="/reading/films"
              className="block bg-gray-light border border-gray-mid px-6 py-5 hover:border-black transition-all duration-300 group card-hover"
            >
              <span className="text-lg font-medium">
                Documentaries
              </span>
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="block font-serif-italic text-xs text-gray-text mt-1">
                3 films
              </span>
            </Link>
          </RevealSection>
        </section>

        {/* ── Articles ── */}
        <section className="mb-16 md:mb-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-8">
              Articles
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {articleGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/articles/${group.slug}`}
                  className="block bg-gray-light border border-gray-mid px-6 py-5 hover:border-black transition-all duration-300 group card-hover"
                >
                  <span className="text-lg font-medium">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-serif-italic text-xs text-gray-text mt-1">
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
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-8">
              Research
            </h2>
          </RevealSection>
          <RevealSection stagger>
            <div className="grid gap-4">
              {researchGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/reading/research/${group.slug}`}
                  className="block bg-gray-light border border-gray-mid px-6 py-5 hover:border-black transition-all duration-300 group card-hover"
                >
                  <span className="text-lg font-medium">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-serif-italic text-xs text-gray-text mt-1">
                    {group.articles.length} {group.articles.length === 1 ? "paper" : "papers"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
