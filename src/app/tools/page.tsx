"use client";

import { useState, useRef } from "react";
import { tools, sexualHealthTools, nervousSystemTools, selfCareGroups, type Tool } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

const filters = ["all", "nervous system", "pain & inflammation care", "self care", "home care", "gut health", "sexual health", "wellness"] as const;
type Filter = (typeof filters)[number];

const selfCareFilters = ["all", "skincare", "make up", "in the shower", "hair care"] as const;

const FEATURED_COUNT = 5;

const categoryIntros: Partial<Record<Filter, string>> = {
  "pain & inflammation care":
    "what i reach for first when the flare is loud. heat, neurostimulation, topical relief, the things that buy me back enough nervous system to make a real decision about the rest of the day.",
  "self care":
    "the daily stack. fragrance is an endocrine disruptor and an inflammation trigger, so everything in here skips it entirely. you don\u2019t have to read every label. i already did.",
  "wellness":
    "the bigger-picture tools. cycle tracking, nervous system regulation, the apps and devices that keep me in conversation with my body instead of fighting it. nothing here is a quick fix. all of it compounds.",
  "gut health":
    "endo is a systemic inflammatory condition and the gut is where most of that inflammation negotiates with the rest of you. fermented foods, the right fibers, the things that keep the system actually working. start small.",
  "nervous system":
    "what i use to come back down. the protocols and tools for the part of healing that doesn\u2019t get talked about enough: regulating the nervous system so the body has the resources to do everything else on this page. without this layer, nothing else lands.",
  "sexual health":
    "pain-free intimacy and pelvic floor care, because sexual health is part of healing and nobody told us that either. pleasure is important, get yours.",
  "home care":
    "what i clean my house with. the household products you breathe in and absorb every day are part of the inflammation conversation, even if no one is having that conversation with you. these are the swaps i\u2019ve made.",
};

/* Map each product to a filter category */
const categoryMap: Record<string, Filter> = {
  "ohmBody starter kit": "pain & inflammation care",
  "thermotex platinum far infrared heating pad": "pain & inflammation care",
  "krampz menstrual pain relief patches": "pain & inflammation care",
  "pinmoco ergonomic cross-legged swivel chair": "pain & inflammation care",
  "amethyst PEMF mat": "pain & inflammation care",
  "personal tower red light therapy device": "pain & inflammation care",
  "OTO fertility program": "wellness",
  "myFLO app": "wellness",
  "tiny health gut microbiome testing": "gut health",
  "olive my pickle": "gut health",
  "release stress & stored trauma in 30 days": "pain & inflammation care",
};

function getCategory(tool: Tool): Filter {
  return categoryMap[tool.name] ?? "all";
}

/* Map each product to a type label */
const typeLabelMap: Record<string, string> = {
  /* pain & inflammation care */
  "krampz menstrual pain relief patches": "DEVICE",
  "thermotex platinum far infrared heating pad": "DEVICE",
  "pinmoco ergonomic cross-legged swivel chair": "TOOL",
  "amethyst PEMF mat": "DEVICE",
  "personal tower red light therapy device": "DEVICE",
  /* gut health */
  "olive my pickle": "FOOD",
  "tiny health gut microbiome testing": "TOOL",
  /* wellness */
  "OTO fertility program": "APP",
  "myFLO app": "APP",
  /* nervous system */
  "nervous system essentials": "COURSE",
  "release stress & stored trauma in 30 days": "COURSE",
  "ohmBody starter kit": "DEVICE",
  "nervous system reset sound bath": "MUSIC",
  "lower your cortisol sound bath": "MUSIC",
  /* sexual health */
  "ohnut": "TOOL",
  "kiwi": "TOOL",
  "the cervix serpent": "TOOL",
  "cervix serpent guided audio ritual": "MEDITATION",
  "yoni reclamation guided meditation": "MEDITATION",
  /* skincare */
  "dieux skincare": "SKINCARE",
  "good molecules skincare": "SKINCARE",
  "the ordinary skincare": "SKINCARE",
  "the deodorant balm, fragrance free": "SKINCARE",
  "the deodorant, fragrance free": "SKINCARE",
  "UV skin recovery SPF 50": "SKINCARE",
  "mineral sunscreen SPF 50": "SKINCARE",
  "hormonal acne supplement": "SUPPLEMENT",
  "precleanse oil cleanser": "SKINCARE",
  /* make up */
  "merit beauty": "MAKEUP",
  "saie beauty": "MAKEUP",
  "seint beauty": "MAKEUP",
  /* in the shower */
  "hydrate & cleanse bar": "SKINCARE",
  "clarify & cleanse bar": "SKINCARE",
  "organic cotton exfoliating gloves": "TOOL",
  "blow-out creme, fragrance free": "SKINCARE",
  "magic serum, fragrance free": "SKINCARE",
  "leave-in conditioner, fragrance free": "SKINCARE",
  "curly creme, fragrance free": "SKINCARE",
  "gentle shampoo, unscented": "SKINCARE",
  "gentle conditioner, unscented": "SKINCARE",
  "fragrance free shampoo & conditioner set": "SKINCARE",
  /* home care */
  "cleaning essentials kit (glass)": "HOME",
  "laundry detergent & toilet bowl cleaner duo": "HOME",
  "laundry stain remover": "HOME",
  "hand soap starter set": "HOME",
  "dish duo": "HOME",
  "unscented beeswax candles": "HOME",
};

function getTypeLabel(tool: Tool): string {
  return typeLabelMap[tool.name] ?? "TOOL";
}

function ProductCard({ tool }: { tool: Tool }) {
  const [noteVisible, setNoteVisible] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const wasScrolling = useRef(false);

  const handleClick = (e: React.MouseEvent) => {
    if (wasScrolling.current) {
      e.preventDefault();
      wasScrolling.current = false;
      return;
    }
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
      className="group block"
      onClick={handleClick}
      onMouseLeave={() => setNoteVisible(false)}
    >
      {tool.image ? (
        <div className="relative overflow-hidden bg-background aspect-[4/5] p-[15%]">
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {tool.personalNote && (
            <div
              className={`absolute inset-0 bg-background/90 transition-opacity duration-500 flex items-start md:items-center justify-center p-4 md:p-6 ${noteVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
              onTouchMove={(e) => {
                if (touchStartY.current !== null && Math.abs(e.touches[0].clientY - touchStartY.current) > 5) {
                  wasScrolling.current = true;
                }
              }}
              onTouchEnd={() => { touchStartY.current = null; }}
            >
              <p className="font-['Helvetica','Arial',sans-serif] text-[var(--foreground)] text-xs leading-[1.4] whitespace-pre-line text-left font-bold overflow-y-auto md:overflow-y-visible max-h-full [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [mask-image:linear-gradient(to_bottom,black_85%,transparent)] md:[mask-image:none]">
                {tool.personalNote && tool.personalNote.endsWith('\nx, N') ? (
                  <>{tool.personalNote.slice(0, -4)}{'\n'}<em className="italic font-normal">x, N</em></>
                ) : tool.personalNote}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-background flex items-center justify-center aspect-[4/5]">
          <span className="text-sm text-gray-text">{tool.name}</span>
        </div>
      )}

      {/* Type label */}
      <div className="flex items-center gap-2 mt-3 mb-3">
        <span className="w-2.5 h-2.5 bg-black inline-block" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
          {getTypeLabel(tool)}
        </span>
      </div>

      {/* Title */}
      <h3 className="playfair text-lg font-bold leading-tight mb-1.5 group-hover:text-charcoal transition-colors duration-300">
        {tool.name}
      </h3>

      {/* Brand attribution */}
      <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black mb-2">
        {tool.company}
      </p>

      {/* Price */}
      {tool.price && (
        <p className="text-sm text-gray-text mb-2">
          {tool.price}
        </p>
      )}

      {/* Description */}
      {tool.description && (
        <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm leading-[1.4] text-black">
          {tool.description}
        </p>
      )}

      {/* View link */}
      <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
        view &rarr;
      </span>
    </a>
  );
}

export default function ToolsPage() {
  const [active, setActive] = useState<Filter>("all");
  const [selfCareSub, setSelfCareSub] = useState<string>("all");

  const showProducts = active !== "all" && active !== "self care" && active !== "home care" && active !== "sexual health" && active !== "nervous system";
  const filteredTools = showProducts ? tools.filter((t) => getCategory(t) === active) : [];

  const showSelfCare = active === "self care";
  const showHomeCare = active === "home care";
  const showSexualHealth = active === "sexual health";
  const showNervousSystem = active === "nervous system";

  const selfCareOnly = selfCareGroups.filter((g) => g.slug !== "home-care");

  const selfCareProducts = selfCareSub === "all"
    ? selfCareOnly.flatMap((g) => g.products)
    : selfCareOnly.find((g) => g.theme === selfCareSub)?.products ?? [];

  const homeCareProducts = selfCareGroups.find((g) => g.slug === "home-care")?.products ?? [];

  const featuredCollections: { filter: Exclude<Filter, "all">; products: Tool[] }[] = [
    { filter: "nervous system", products: nervousSystemTools },
    { filter: "pain & inflammation care", products: tools.filter((t) => getCategory(t) === "pain & inflammation care") },
    { filter: "self care", products: selfCareOnly.flatMap((g) => g.products) },
    { filter: "home care", products: homeCareProducts },
    { filter: "gut health", products: tools.filter((t) => getCategory(t) === "gut health") },
    { filter: "sexual health", products: sexualHealthTools },
    { filter: "wellness", products: tools.filter((t) => getCategory(t) === "wellness") },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the outfitter
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">tools</span>{" "}
              <em className="playfair-italic font-light">that heal.</em>
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-1 text-black max-w-2xl">
              i have spent the last six years figuring out which products actually move the needle on chronic pain and which ones are wellness theater. these are the ones that earned their place. some of these tools cost twelve dollars. some cost more. all of them are things i actually use.
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-3 text-black max-w-2xl">
              the shop is organized the way i would&rsquo;ve approached my protocol if i could start again: starting with the nervous system and pain care, then self care essentials, and outward. start anywhere that suits you.
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-3 text-black max-w-2xl">
              <em className="playfair-italic font-light">x, N</em>
            </p>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">

        {/* ── Filter row ── */}
        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setSelfCareSub("all"); }}
              className={`font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm px-5 py-2 border-b-2 transition-all duration-300 ${
                active === f
                  ? "border-black text-black"
                  : "border-transparent text-black hover:border-chartreuse"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Featured collections (landing / "all" view) ── */}
        {active === "all" && (
          <>
            {featuredCollections.map(({ filter, products }, i) => {
              const showAll = filter === "self care";
              const displayed = showAll ? products : products.slice(0, FEATURED_COUNT);
              return (
                <section key={filter} className={i > 0 ? "mt-20 md:mt-28" : ""}>
                  <RevealSection>
                    <h2 className="playfair text-3xl md:text-4xl font-bold tracking-tight">
                      {filter}
                    </h2>
                    <p className="font-['Helvetica','Arial',sans-serif] text-sm leading-[1.6] tracking-tight text-black max-w-[600px] mt-3 mb-10">
                      {categoryIntros[filter] ?? `[intro for ${filter} \u2014 Nancy to provide]`}
                    </p>
                  </RevealSection>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                    {displayed.map((tool) => (
                      <RevealSection key={tool.name}>
                        <ProductCard tool={tool} />
                      </RevealSection>
                    ))}
                  </div>

                  {!showAll && (
                    <RevealSection>
                      <button
                        onClick={() => { setActive(filter); setSelfCareSub("all"); }}
                        className="playfair-italic text-sm mt-8 inline-block hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                      >
                        see all in {filter} &rarr;
                      </button>
                    </RevealSection>
                  )}
                </section>
              );
            })}

          </>
        )}

        {/* ── Filtered product grids ── */}
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

        {showSelfCare && (
          <section>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {selfCareFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelfCareSub(f)}
                  className={`playfair-italic text-xs px-4 py-1.5 border-b transition-all duration-300 cursor-pointer ${
                    selfCareSub === f
                      ? "border-black text-black"
                      : "border-transparent text-charcoal hover:text-black hover:border-chartreuse"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {selfCareProducts.map((tool) => (
                <RevealSection key={tool.name}>
                  <ProductCard tool={tool} />
                </RevealSection>
              ))}
            </div>
          </section>
        )}

        {showSexualHealth && (
          <section>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {sexualHealthTools.map((tool) => (
                <RevealSection key={tool.name}>
                  <ProductCard tool={tool} />
                </RevealSection>
              ))}
            </div>
          </section>
        )}

        {showHomeCare && (
          <section>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {homeCareProducts.map((tool) => (
                <RevealSection key={tool.name}>
                  <ProductCard tool={tool} />
                </RevealSection>
              ))}
            </div>
          </section>
        )}

        {showNervousSystem && (
          <section>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {nervousSystemTools.map((tool) => (
                <RevealSection key={tool.name}>
                  <ProductCard tool={tool} />
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
