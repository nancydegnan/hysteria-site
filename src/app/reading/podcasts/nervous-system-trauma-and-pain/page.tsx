"use client";

import Link from "next/link";
import { podcastGroups } from "../../data";
import { RevealSection } from "../../components";

const group = podcastGroups.find((g) => g.slug === "nervous-system-trauma-and-pain")!;

export default function PodcastsSubsectionPage() {
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
            // Podcast Episodes
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-cream uppercase leading-[0.85] section-title-cream">
            {group.theme}
          </h1>
        </RevealSection>
      </header>

      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto">
        <div className="grid gap-6">
          {group.podcasts.map((ep) => (
            <RevealSection key={ep.title}>
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 group"
              >
                <h4 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-2 group-hover:text-hot-pink transition-colors duration-300">
                  {ep.title}
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h4>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-hot-pink mb-3">
                  {ep.host}{ep.guest && ` \u00B7 Guest: ${ep.guest}`}
                </p>
                <p className="font-body text-sm leading-[1.8] opacity-70">
                  {ep.description}
                </p>
              </a>
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
