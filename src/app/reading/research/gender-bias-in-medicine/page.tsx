"use client";

import Link from "next/link";
import { researchGroups } from "../../data";
import { RevealSection, Footer, SubpageNav } from "../../../components";

const group = researchGroups.find((g) => g.slug === "gender-bias-in-medicine")!;

export default function ResearchSubsectionPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              research
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <div className="grid gap-6">
          {group.articles.map((paper) => (
            <RevealSection key={paper.title}>
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 group card-hover"
              >
                <h4 className="playfair text-lg md:text-xl leading-tight mb-2 group-hover:text-blush transition-colors duration-300">
                  {paper.title}
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h4>
                {paper.author && (
                  <p className="playfair-italic text-xs text-gray-text mb-3">
                    {paper.author}
                  </p>
                )}
                <p className="playfair text-sm leading-[1.8] text-gray-text">
                  {paper.description}
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
