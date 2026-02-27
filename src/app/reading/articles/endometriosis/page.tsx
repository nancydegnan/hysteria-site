"use client";

import Link from "next/link";
import { articleGroups } from "../../data";
import { RevealSection } from "../../components";

const group = articleGroups.find((g) => g.slug === "endometriosis")!;

export default function ArticlesSubsectionPage() {
  return (
    <div className="min-h-screen bg-pink-deep text-cream">
      <div className="bg-black text-cream">
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
              // Articles
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-cream uppercase leading-[0.85] section-title-cream">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <div className="bg-black torn-bottom h-2" />

      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto pt-16 md:pt-24">
        <div className="grid gap-6">
          {group.articles.map((article) => (
            <RevealSection key={article.title}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-hot-pink/5 border-[3px] border-hot-pink/10 p-8 hover:border-hot-pink transition-all duration-500 group card-hover"
              >
                <h4 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-2 group-hover:text-hot-pink transition-colors duration-300">
                  {article.title}
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h4>
                {article.author && (
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-hot-pink mb-3">
                    {article.author}
                  </p>
                )}
                <p className="font-body text-sm leading-[1.8] opacity-70">
                  {article.description}
                </p>
              </a>
            </RevealSection>
          ))}
        </div>
      </main>

      <footer className="bg-black text-cream border-t-[3px] border-black px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
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
