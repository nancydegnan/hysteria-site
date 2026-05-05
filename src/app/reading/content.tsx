"use client";

import { useState } from "react";
import Link from "next/link";
import { sections, allFormats, readingItems, Format } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

export default function ReadingContent() {
  const [activeFormats, setActiveFormats] = useState<Set<Format>>(new Set());

  const isAllSelected = activeFormats.size === 0;

  function toggleFormat(f: Format) {
    setActiveFormats((prev) => {
      const next = new Set(prev);
      if (next.has(f)) {
        next.delete(f);
      } else {
        next.add(f);
      }
      return next;
    });
  }

  function clearFilters() {
    setActiveFormats(new Set());
  }

  function itemsForSection(sectionKey: string) {
    const sectionItems = readingItems.filter((item) => item.section === sectionKey);
    if (isAllSelected) return sectionItems;
    return sectionItems.filter((item) => {
      if (activeFormats.has(item.format)) return true;
      if (item.format === "Article" && activeFormats.has("Study")) return true;
      if (item.format === "E-Book" && activeFormats.has("Book")) return true;
      return false;
    });
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the library
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
              <span className="font-black">what</span>{" "}
              <em className="playfair-italic font-light">we&apos;re reading, watching, listening to.</em>
            </h1>
            <div className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-4 text-black max-w-2xl">
              <p>
                it took me years to find the books, podcasts, and research that actually helped. there&apos;s a lot of good information out there now. more than there used to be. but sorting through it is its own job, and you already have one.
              </p>
              <p className="mt-4">
                so i did the digging. this is the library i wish someone had handed me five years ago. updated monthly with what feels important now, anchored by the foundational pieces that will always be here.
              </p>
              <p className="mt-4">
                take what you need. leave the rest.
              </p>
            </div>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        {/* ── Format filter ── */}
        <div className="flex flex-wrap gap-3 mb-16">
          <button
            onClick={clearFilters}
            className={`font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm px-5 py-2 border-b-2 transition-all duration-300 ${
              isAllSelected
                ? "border-black text-black"
                : "border-transparent text-black hover:border-chartreuse"
            }`}
          >
            all
          </button>
          {allFormats.map((f) => (
            <button
              key={f}
              onClick={() => toggleFormat(f)}
              className={`font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm px-5 py-2 border-b-2 transition-all duration-300 ${
                activeFormats.has(f)
                  ? "border-black text-black"
                  : "border-transparent text-black hover:border-chartreuse"
              }`}
            >
              {f === "Study" ? "studies" : f === "Self-Advocate" ? "self-advocate" : `${f.toLowerCase()}s`}
            </button>
          ))}
        </div>

        {/* ── Purpose-based sections ── */}
        <div className="flex flex-col gap-20">
          {sections.filter((s) => s.key !== "woo").map((section) => {
            const items = itemsForSection(section.key);
            if (items.length === 0) return null;

            return (
              <RevealSection key={section.key}>
                {/* Section header */}
                <div className="mb-10">
                  <h2 className="playfair text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    {section.name}
                  </h2>
                  <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">
                    {section.intro}
                  </p>
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => {
                    const isInternal = item.url.startsWith("/");
                    const Wrapper = isInternal ? Link : "a";
                    const wrapperProps = isInternal
                      ? {}
                      : { target: "_blank" as const, rel: "noopener noreferrer" };

                    return (
                    <Wrapper
                      key={item.title}
                      href={item.url || "#"}
                      {...wrapperProps}
                      className="block group"
                    >
                      {/* Image */}
                      {item.format === "Podcast" && item.image && (
                        <div className="w-24 aspect-square bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      {(item.format === "Book" || item.format === "E-Book") && item.image && (
                        <div className="w-36 aspect-[2/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      {item.format === "Article" && item.image && (
                        <div className="w-52 aspect-[4/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      {item.format === "Film" && (
                        <div className="w-36 aspect-[2/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-[10px] uppercase tracking-[0.12em] text-gray-text">poster</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Format tag */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 bg-black inline-block" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                          {item.format}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Source */}
                      <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                        {item.source}
                      </p>

                      {/* Description */}
                      <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                        {item.description}
                      </p>

                      {item.url && (
                        <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                          {isInternal ? "read" : "view"} &rarr;
                        </span>
                      )}
                    </Wrapper>
                    );
                  })}
                </div>

                {/* Section divider */}
                <div className="divider mt-16" />
              </RevealSection>
            );
          })}
        </div>

        {/* ── The Dossier ── */}
        {(isAllSelected || activeFormats.has("Self-Advocate")) && (
          <section className="mt-20 md:mt-28">
            <RevealSection>
              <div className="mb-10">
                <h2 className="playfair text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  the dossier
                </h2>
                <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">
                  the tools you bring to the appointment. free screening questionnaires, symptom checkers, and pain assessments built specifically for women whose pain has been dismissed. fill them out. print them. take them with you. coming prepared is an element we&rsquo;ve never had.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a
                  href="https://nyulangone.org/locations/endometriosis-center/endometriosis-symptom-questionnaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-52 aspect-[4/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                    <img src="/endo/DTS_BLOOM_Pointless_Agency_Photos_ID14730.jpg" alt="endometriosis symptom questionnaire" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{ objectPosition: "center 70%" }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-black inline-block" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                      free tool
                    </span>
                  </div>
                  <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
                    endometriosis symptom questionnaire
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                    NYU Langone Endometriosis Center
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                    Free screening tool from NYU Langone&rsquo;s Endometriosis Center. Asks about five key symptom areas: period pain, pain between periods, painful intercourse, avoidance of sex due to pain, and painful bowel movements. Helps identify potential endometriosis and connect you with further evaluation.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </a>

                <a
                  href="https://www.endometriosis-uk.org/symptom-checker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-52 aspect-[4/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                    <img src="/endo/DTS_BLOOM_Pointless_Agency_Photos_ID14773.jpg" alt="endometriosis symptom checker" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-black inline-block" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                      free tool
                    </span>
                  </div>
                  <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
                    endometriosis symptom checker
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                    Endometriosis UK
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                    Quick screening tool from Endometriosis UK that takes less than a minute. Identifies common endo symptoms and lets you generate a letter to share with your doctor, so you walk in prepared.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </a>

                <a
                  href="https://www.painperceptionproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-52 aspect-[4/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                    <img src="/endo/DTS_INSOMNIA_Agustín_Farías_Photos_ID14454.jpg" alt="pain perception project" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-black inline-block" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                      free tool
                    </span>
                  </div>
                  <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
                    pain perception project
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                    Pain Perception Project
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                    A patient-founded initiative producing tools for better understanding pain. Includes a Pelvic Pain Assessment that helps you effectively communicate with your doctor. Coming prepared is an element we&rsquo;ve never had.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </a>
              </div>

              <div className="divider mt-16" />
            </RevealSection>
          </section>
        )}

        {/* ── The Woo (always last) ── */}
        {(() => {
          const wooSection = sections.find((s) => s.key === "woo");
          const wooItems = itemsForSection("woo");
          if (!wooSection || wooItems.length === 0) return null;
          return (
            <RevealSection>
              <div className="mb-10 mt-20 md:mt-28">
                <h2 className="playfair text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  {wooSection.name}
                </h2>
                <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">
                  {wooSection.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wooItems.map((item) => {
                  const isInternal = item.url.startsWith("/");
                  const Wrapper = isInternal ? Link : "a";
                  const wrapperProps = isInternal
                    ? {}
                    : { target: "_blank" as const, rel: "noopener noreferrer" };

                  return (
                    <Wrapper
                      key={item.title}
                      href={item.url || "#"}
                      {...wrapperProps}
                      className="block group"
                    >
                      {(item.format === "Book" || item.format === "E-Book") && item.image && (
                        <div className="w-36 aspect-[2/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                        </div>
                      )}
                      {item.format === "Podcast" && item.image && (
                        <div className="w-24 aspect-square bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                        </div>
                      )}
                      {item.format === "Article" && item.image && (
                        <div className="w-52 aspect-[4/3] bg-[#e4e0d9] mb-4 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 bg-black inline-block" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                          {item.format}
                        </span>
                      </div>
                      <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
                        {item.source}
                      </p>
                      <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
                        {item.description}
                      </p>
                      {item.url && (
                        <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                          {isInternal ? "read" : "view"} &rarr;
                        </span>
                      )}
                    </Wrapper>
                  );
                })}
              </div>

              <div className="divider mt-16" />
            </RevealSection>
          );
        })()}
      </main>

      <Footer />
    </div>
  );
}
