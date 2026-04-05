"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, selfCareGroups, type Tool } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

const filters = ["all", "pain relief", "self & home care", "wellness", "gut health"] as const;
type Filter = (typeof filters)[number];

/* Map each product to a filter category */
const categoryMap: Record<string, Filter> = {
  "OhmBody Starter Kit": "pain relief",
  "Ohnut": "pain relief",
  "Kiwi": "pain relief",
  "Thermotex Platinum Far Infrared Heating Pad": "pain relief",
  "Krampz Menstrual Pain Relief Patches": "pain relief",
  "Pinmoco Ergonomic Cross-Legged Swivel Chair": "pain relief",
  "OTO Fertility Program": "wellness",
  "MyFLO App": "wellness",
  "Tiny Health Gut Microbiome Testing": "gut health",
  "Olive My Pickle": "gut health",
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

  const filteredTools = active === "all" || active === "self & home care"
    ? tools
    : tools.filter((t) => getCategory(t) === active);

  const showProducts = active !== "self & home care";
  const showSelfCare = active === "all" || active === "self & home care";

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
              <span className="font-black">Tools</span>{" "}
              <em className="playfair-italic font-light">that heal.</em>
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] mt-1 text-charcoal max-w-2xl">
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

        {/* ── Fragrance-Free Self Care (Russh editorial grid) ── */}
        {showSelfCare && (
          <section className={active === "all" ? "mt-10 md:mt-14" : ""}>
            <RevealSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black text-center mb-4">
                fragrance-free self & home care
              </h2>
              <p className="font-['Helvetica','Arial',sans-serif] text-sm leading-[1.4] text-gray-text max-w-2xl mx-auto text-center mb-16">
                Fragrance is a known endocrine disruptor and can trigger inflammation. These are self & home care products I use that skip the fragrance entirely, so you can skip the guess work.
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 max-w-5xl mx-auto">
              {selfCareGroups.map((group) => (
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
      </main>

      <Footer />
    </div>
  );
}
