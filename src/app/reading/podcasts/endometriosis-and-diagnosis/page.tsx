"use client";

import Link from "next/link";
import { podcastGroups } from "../../data";
import { RevealSection, Footer, SubpageNav } from "../../../components";

const group = podcastGroups.find((g) => g.slug === "endometriosis-and-diagnosis")!;

export default function PodcastsSubsectionPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              podcast episodes
            </p>
            <h1 className="playfair text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link href="/reading/podcasts" className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block">
          &larr; back to podcasts
        </Link>
        <div className="grid gap-6">
          {group.podcasts.map((ep) => (
            <RevealSection key={ep.title}>
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 group card-hover"
              >
                <h4 className="font-['Helvetica','Arial',sans-serif] tracking-tight text-lg md:text-xl leading-tight mb-2 group-hover:text-black transition-colors duration-300">
                  {ep.title}
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h4>
                <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-3">
                  {ep.host}{ep.guest && ` \u00B7 Guest: ${ep.guest}`}
                </p>
                <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
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
