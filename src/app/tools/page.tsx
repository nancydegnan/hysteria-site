"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, selfCareGroups, healingTools, advocacyTools, type Tool } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

const filters = ["all", "pain & inflammation care", "self care", "home care", "wellness", "gut health", "courses"] as const;
type Filter = (typeof filters)[number];

/* Map each product to a filter category */
const categoryMap: Record<string, Filter> = {
  "ohmBody starter kit": "pain & inflammation care",
  "ohnut": "pain & inflammation care",
  "kiwi": "pain & inflammation care",
  "thermotex platinum far infrared heating pad": "pain & inflammation care",
  "krampz menstrual pain relief patches": "pain & inflammation care",
  "pinmoco ergonomic cross-legged swivel chair": "pain & inflammation care",
  "amethyst PEMF mat": "pain & inflammation care",
  "personal tower red light therapy device": "pain & inflammation care",
  "OTO fertility program": "wellness",
  "myFLO app": "wellness",
  "tiny health gut microbiome testing": "gut health",
  "olive my pickle": "gut health",
  "nervous system essentials": "courses",
  "release stress & stored trauma in 30 days": "courses",
};

function getCategory(tool: Tool): Filter {
  return categoryMap[tool.name] ?? "all";
}

function ProductCard({ tool }: { tool: Tool }) {
  const [noteVisible, setNoteVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (tool.personalNote && !noteVisible) {
      e.preventDefault();
      setNoteVisible(true);
    }
  };

  return (
    <a
      href={tool.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block text-center"
      onClick={handleClick}
      onMouseLeave={() => setNoteVisible(false)}
    >
      {tool.image ? (
        <div className={`relative overflow-hidden mb-5 ${tool.imageFit === "contain" ? "bg-[#FAF8F5]" : "bg-gray-light"}`}>
          <img
            src={tool.image}
            alt={tool.name}
            className={`w-full aspect-square transition-transform duration-700 ease-out group-hover:scale-[1.03] ${tool.imageFit === "contain" ? "object-contain" : "object-cover"} ${tool.imagePosition === "bottom" ? "object-bottom" : ""}`}
          />
          {tool.personalNote && (
            <div className={`absolute inset-0 bg-background/90 transition-opacity duration-500 flex items-center justify-center p-6 ${noteVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
              <p className="playfair-italic text-[var(--foreground)] text-xs leading-[1.4] whitespace-pre-line text-left font-bold">
                {tool.personalNote}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-light flex items-center justify-center aspect-square mb-5">
          <span className="text-sm text-gray-text">{tool.name}</span>
        </div>
      )}

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-text">
        {tool.company}
      </p>
      <h3 className="playfair text-base leading-snug mt-1.5">
        {tool.name}
      </h3>
      <p className="text-sm text-gray-text mt-1">
        {tool.price}
      </p>
      {tool.shortDescription && (
        <p className="text-xs text-gray-text mt-2 leading-[1.4]">
          {tool.shortDescription}
        </p>
      )}
    </a>
  );
}

export default function ToolsPage() {
  const [active, setActive] = useState<Filter>("all");

  const filteredTools = active === "all" || active === "self care" || active === "home care"
    ? tools
    : tools.filter((t) => getCategory(t) === active);

  const showProducts = active !== "self care" && active !== "home care";
  const showSelfCare = active === "all" || active === "self care";
  const showHomeCare = active === "all" || active === "home care";

  const selfCareOnly = selfCareGroups.filter((g) => g.slug !== "home-care");
  const homeCareOnly = selfCareGroups.filter((g) => g.slug === "home-care");

  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              the shop
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">tools</span>{" "}
              <em className="playfair-italic font-light">that heal.</em>
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-1 text-charcoal max-w-2xl">
              Products I actually use that have made a real difference in managing pain and healing.
            </p>

            {/* ── Filter pills ── */}
            <div className="flex flex-wrap gap-3 mt-8">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`playfair-italic text-sm px-5 py-2 border-b-2 transition-all duration-300 cursor-pointer ${
                    active === f
                      ? "border-black text-black"
                      : "border-transparent text-charcoal hover:text-black hover:border-chartreuse"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </RevealSection>
        </header>
      </div>

      {/* ── Filtered content ── */}
      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">

        {/* ── Product cards ── */}
        {showProducts && filteredTools.length > 0 && (
          <section>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {filteredTools.map((tool) => (
                <RevealSection key={tool.name}>
                  <ProductCard tool={tool} />
                </RevealSection>
              ))}
            </div>
          </section>
        )}

        {/* ── Fragrance-Free Self Care ── */}
        {showSelfCare && (
          <section className={active === "all" ? "mt-10 md:mt-14" : ""}>
            <RevealSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black text-center mb-4">
                fragrance-free self care
              </h2>
              <p className="font-['Helvetica','Arial',sans-serif] text-sm leading-[1.4] tracking-tight text-gray-text max-w-2xl mx-auto text-center mb-16">
                Fragrance is a known endocrine disruptor and can trigger inflammation. These are self care products I use that skip the fragrance entirely, so you can skip the guess work.
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 max-w-5xl mx-auto">
              {selfCareOnly.map((group) => (
                <RevealSection key={group.slug}>
                  <Link
                    href={`/tools/self-care/${group.slug}`}
                    className="block group"
                  >
                    {group.image ? (
                      <div className="overflow-hidden bg-background">
                        <img
                          src={group.image}
                          alt={group.theme}
                          className="w-full aspect-[4/3] object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex gap-1.5 justify-center">
                        <div className="bg-gray-light border border-gray-mid w-1/2 aspect-[3/4] flex items-center justify-center">
                          <span className="text-xs text-gray-text/50">image</span>
                        </div>
                        <div className="bg-gray-light border border-gray-mid w-1/2 aspect-[3/4] flex items-center justify-center">
                          <span className="text-xs text-gray-text/50">image</span>
                        </div>
                      </div>
                    )}

                    {/* Caption */}
                    <p className="playfair text-base md:text-lg font-bold leading-snug text-center mt-6 group-hover:italic transition-all duration-300">
                      {group.theme}
                    </p>
                    <p className="text-xs text-gray-text text-center mt-1.5 tracking-wide">
                      {group.products.length} {group.products.length === 1 ? "product" : "products"} &rarr;
                    </p>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </section>
        )}

        {/* ── Fragrance-Free Home Care ── */}
        {showHomeCare && (
          <section className={active === "all" ? "mt-10 md:mt-14" : ""}>
            <RevealSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black text-center mb-4">
                fragrance-free home care
              </h2>
              <p className="font-['Helvetica','Arial',sans-serif] text-sm leading-[1.4] tracking-tight text-gray-text max-w-2xl mx-auto text-center mb-16">
                Fragrance is a known endocrine disruptor and can trigger inflammation. These are home care products I use that skip the fragrance entirely, so you can skip the guess work.
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 max-w-5xl mx-auto">
              {homeCareOnly.map((group) => (
                <RevealSection key={group.slug}>
                  <Link
                    href={`/tools/self-care/${group.slug}`}
                    className="block group"
                  >
                    {group.image ? (
                      <div className="overflow-hidden bg-background">
                        <img
                          src={group.image}
                          alt={group.theme}
                          className="w-full aspect-[4/3] object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex gap-1.5 justify-center">
                        <div className="bg-gray-light border border-gray-mid w-1/2 aspect-[3/4] flex items-center justify-center">
                          <span className="text-xs text-gray-text/50">image</span>
                        </div>
                        <div className="bg-gray-light border border-gray-mid w-1/2 aspect-[3/4] flex items-center justify-center">
                          <span className="text-xs text-gray-text/50">image</span>
                        </div>
                      </div>
                    )}

                    {/* Caption */}
                    <p className="playfair text-base md:text-lg font-bold leading-snug text-center mt-6 group-hover:italic transition-all duration-300">
                      {group.theme}
                    </p>
                    <p className="text-xs text-gray-text text-center mt-1.5 tracking-wide">
                      {group.products.length} {group.products.length === 1 ? "product" : "products"} &rarr;
                    </p>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </section>
        )}
        {/* ── Support Your Healing (Free Tools) ── */}
        {(active === "all") && (
          <section className="mt-10 md:mt-14">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black text-center mb-4">
                support your healing
              </h2>
            </RevealSection>

            <div className="flex flex-col gap-14">
              {healingTools.map((ft) => (
                <RevealSection key={ft.name}>
                  <a
                    href={ft.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                  >
                    <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                      {ft.image && (
                        <img src={ft.image} alt={ft.name} className="w-full h-full object-cover" style={ft.imagePosition ? { objectPosition: ft.imagePosition } : undefined} />
                      )}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                        free tool
                      </p>
                      <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                        {ft.name}
                      </h3>
                      <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-snug tracking-tight mt-2">
                        {ft.description}
                      </p>
                      <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                        explore &rarr;
                      </span>
                    </div>
                  </a>
                </RevealSection>
              ))}
            </div>
          </section>
        )}

        {/* ── Advocate For Yourself (Free Tools) ── */}
        {(active === "all") && (
          <section className="mt-10 md:mt-14">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black text-center mb-4">
                advocate for yourself
              </h2>
            </RevealSection>

            <div className="flex flex-col gap-14">
              {advocacyTools.map((ft) => (
                <RevealSection key={ft.name}>
                  <a
                    href={ft.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                  >
                    <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                      {ft.image && (
                        <img src={ft.image} alt={ft.name} className="w-full h-full object-cover" style={ft.imagePosition ? { objectPosition: ft.imagePosition } : undefined} />
                      )}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                        free tool
                      </p>
                      <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                        {ft.name}
                      </h3>
                      <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-snug tracking-tight mt-2">
                        {ft.description}
                      </p>
                      <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                        explore &rarr;
                      </span>
                    </div>
                  </a>
                </RevealSection>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
