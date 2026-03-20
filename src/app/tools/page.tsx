"use client";

import Link from "next/link";
import { tools, selfCareGroups, advocacyTools, healingTools } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              the shop
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">Tools</span>{" "}
              <em className="playfair-italic font-light">that heal.</em>
            </h1>
            <p className="playfair text-base leading-[1.8] mt-6 text-gray-text max-w-2xl">
              Products and other free tools I actually use that have made a real
              difference in managing pain and healing.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { href: "#products", label: "Products" },
                { href: "#self-care", label: "Self Care" },
                { href: "#advocate", label: "Free Tools" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.15em] border border-gray-mid px-5 py-2 hover:border-black hover:text-black transition-colors duration-300 text-gray-text"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </RevealSection>
        </header>
      </div>

      {/* ── Tool listings ── */}
      <main id="products" className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto scroll-mt-8 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <RevealSection key={tool.name}>
              <div className="bg-gray-light border border-gray-mid hover:border-black transition-all duration-300 flex flex-col h-full card-hover">
                {tool.image ? (
                  <div className="bg-gray-light overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-mid/30 flex items-center justify-center p-10">
                    <span className="text-lg font-medium text-gray-text text-center">
                      {tool.name}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-gray-text uppercase tracking-wider">
                    {tool.company}
                  </span>
                  <h3 className="playfair text-xl leading-tight mt-3 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-base text-blush mb-4">
                    {tool.price}
                  </p>
                  <p className="playfair text-sm leading-[1.8] text-gray-text mb-6 flex-1">
                    {tool.description}
                  </p>

                  {tool.discountCode && (
                    <div className="border border-dashed border-blush/30 px-4 py-3 mb-6">
                      <span className="text-xs text-gray-text">
                        discount code
                      </span>
                      <p className="text-sm font-medium mt-1">
                        {tool.discountCode}
                      </p>
                    </div>
                  )}

                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-center"
                  >
                    shop now
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* ── Fragrance-Free Self Care ── */}
        <section id="self-care" className="mt-20 md:mt-28 scroll-mt-8">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-4">
              Fragrance-Free Self Care
            </h2>
            <p className="playfair text-sm leading-[1.8] text-gray-text max-w-2xl mb-10">
              Fragrance is a known endocrine disruptor and can trigger inflammation. These are self care products I use that skip the fragrance entirely.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid gap-4">
              {selfCareGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/tools/self-care/${group.slug}`}
                  className="block bg-gray-light border border-gray-mid px-6 py-5 hover:border-black transition-all duration-300 group card-hover"
                >
                  <span className="text-lg font-medium">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block playfair-italic text-xs text-gray-text mt-1">
                    {group.products.length} {group.products.length === 1 ? "product" : "products"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Free Tools: Heal ── */}
        <section id="advocate" className="mt-20 md:mt-28 scroll-mt-8">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-10">
              Free Tools to Support Your Healing
            </h2>
          </RevealSection>

          <div className="grid gap-6">
            {healingTools.map((ft) => (
              <RevealSection key={ft.name}>
                <a
                  href={ft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 group card-hover"
                >
                  <h3 className="text-lg md:text-xl font-medium leading-tight mb-3 group-hover:text-blush transition-colors duration-300">
                    {ft.name}
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="playfair text-sm leading-[1.8] text-gray-text">
                    {ft.description}
                  </p>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Free Tools: Advocate ── */}
        <section className="mt-20 md:mt-28">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blush mb-10">
              Free Tools to Advocate for Yourself
            </h2>
          </RevealSection>

          <div className="grid gap-6">
            {advocacyTools.map((ft) => (
              <RevealSection key={ft.name}>
                <a
                  href={ft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 group card-hover"
                >
                  <h3 className="text-lg md:text-xl font-medium leading-tight mb-3 group-hover:text-blush transition-colors duration-300">
                    {ft.name}
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="playfair text-sm leading-[1.8] text-gray-text">
                    {ft.description}
                  </p>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
