"use client";

import Link from "next/link";
import { podcastGroups } from "../../data";
import { RevealSection, Footer } from "../../../components";

const group = podcastGroups.find((g) => g.slug === "nutrition-and-foundations")!;

export default function PodcastsSubsectionPage() {
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
              podcast episodes
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <div className="grid gap-6">
          {group.podcasts.map((ep) => (
            <RevealSection key={ep.title}>
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 group card-hover"
              >
                <h4 className="font-serif text-lg md:text-xl leading-tight mb-2 group-hover:text-blush transition-colors duration-300">
                  {ep.title}
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h4>
                <p className="font-serif-italic text-xs text-gray-text mb-3">
                  {ep.host}{ep.guest && ` \u00B7 Guest: ${ep.guest}`}
                </p>
                <p className="font-serif text-sm leading-[1.8] text-gray-text">
                  {ep.description}
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
