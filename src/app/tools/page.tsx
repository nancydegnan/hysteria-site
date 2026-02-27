"use client";

import Link from "next/link";
import { tools, selfCareGroups, advocacyTools, healingTools } from "./data";
import { RevealSection } from "./components";

/* ── Page ── */
export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-pink-deep text-cream">
      {/* ── Dark hero ── */}
      <div className="bg-black text-cream">
        {/* ── Back link ── */}
        <div className="px-6 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* ── Header ── */}
        <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto">
          <RevealSection>
            <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
              // Resources
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-cream uppercase leading-[0.85] section-title-cream">
              Tools
            </h1>
            <p className="font-body text-base md:text-lg leading-[1.8] mt-8 opacity-80 max-w-2xl">
              Products and other free tools I actually use that have made a real
              difference in managing pain and healing.
            </p>

            {/* Jump-to nav */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { href: "#products", label: "Products" },
                { href: "#self-care", label: "Self Care" },
                { href: "#advocate", label: "Free Tools" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-[2px] border-cream/30 px-5 py-2 font-heading text-xs uppercase tracking-[0.2em] hover:border-hot-pink hover:text-hot-pink transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </RevealSection>
        </header>
      </div>

      {/* ── Torn paper transition ── */}
      <div className="bg-black torn-bottom h-2" />

      {/* ── Tool listings ── */}
      <main id="products" className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto scroll-mt-8 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <RevealSection key={tool.name}>
              <div className="bg-hot-pink/5 border-[3px] border-hot-pink/10 hover:border-hot-pink transition-all duration-500 flex flex-col h-full card-hover">
                {/* Image */}
                {tool.image ? (
                  <div className="bg-hot-pink/5 overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-hot-pink/5 flex items-center justify-center p-10">
                    <span className="font-heading text-lg uppercase tracking-wider text-cream/30 text-center">
                      {tool.name}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Company */}
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-hot-pink">
                    {tool.company}
                  </span>

                  {/* Product name */}
                  <h3 className="font-heading text-2xl uppercase leading-tight mt-3 mb-2">
                    {tool.name}
                  </h3>

                  {/* Price */}
                  <p className="font-heading text-xl text-hot-pink mb-4">
                    {tool.price}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm leading-[1.8] opacity-80 mb-6 flex-1">
                    {tool.description}
                  </p>

                  {/* Discount code */}
                  {tool.discountCode && (
                    <div className="border-[2px] border-dashed border-hot-pink/15 px-4 py-3 mb-6">
                      <span className="font-body text-xs uppercase tracking-wider opacity-50">
                        Discount Code
                      </span>
                      <p className="font-heading text-sm uppercase tracking-wider mt-1">
                        {tool.discountCode}
                      </p>
                    </div>
                  )}

                  {/* Buy link */}
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-cream hover:text-hot-pink transition-colors duration-300"
                  >
                    Shop Now
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* ── Fragrance-Free Self Care ── */}
        <section id="self-care" className="mt-20 md:mt-32 scroll-mt-8">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-10 md:mb-14">
              Fragrance-Free Self Care
            </h2>
            <p className="font-body text-base leading-[1.8] opacity-80 max-w-2xl -mt-6 mb-10">
              Fragrance is a known endocrine disruptor and can trigger inflammation. These are self care products I use that skip the fragrance entirely.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid gap-4">
              {selfCareGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/tools/self-care/${group.slug}`}
                  className="block bg-hot-pink/5 border-[2px] border-hot-pink/10 px-6 py-5 hover:border-hot-pink hover:text-hot-pink transition-all duration-300 group card-hover"
                >
                  <span className="font-heading text-lg md:text-xl uppercase tracking-[0.1em]">
                    {group.theme}
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="block font-body text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                    {group.products.length} {group.products.length === 1 ? "product" : "products"}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* ── Free Tools: Heal ── */}
        <section id="advocate" className="mt-20 md:mt-32 scroll-mt-8">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-10 md:mb-14">
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
                  className="block bg-hot-pink/5 border-[3px] border-hot-pink/10 p-8 hover:border-hot-pink transition-all duration-500 group card-hover"
                >
                  <h3 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-3 group-hover:text-hot-pink transition-colors duration-300">
                    {ft.name}
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="font-body text-sm leading-[1.8] opacity-70">
                    {ft.description}
                  </p>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Free Tools: Advocate ── */}
        <section className="mt-20 md:mt-32">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-10 md:mb-14">
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
                  className="block bg-hot-pink/5 border-[3px] border-hot-pink/10 p-8 hover:border-hot-pink transition-all duration-500 group card-hover"
                >
                  <h3 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-3 group-hover:text-hot-pink transition-colors duration-300">
                    {ft.name}
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="font-body text-sm leading-[1.8] opacity-70">
                    {ft.description}
                  </p>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-black text-cream border-t-[3px] border-black px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
            &copy; {new Date().getFullYear()} HYSTERIA Film. All rights
            reserved.
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
