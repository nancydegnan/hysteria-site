"use client";

import Link from "next/link";
import { selfCareGroups } from "../../data";
import { RevealSection } from "../../components";

const group = selfCareGroups.find((g) => g.slug === "home-care")!;

export default function HomeCarePage() {
  return (
    <div className="min-h-screen bg-pink-deep text-cream">
      <div className="bg-black text-cream">
        <div className="px-6 pt-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
          >
            <span>&larr;</span>
            <span>Back to Tools</span>
          </Link>
        </div>

        <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto">
          <RevealSection>
            <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
              // Fragrance-Free Self Care
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-cream uppercase leading-[0.85] section-title-cream">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <div className="bg-black torn-bottom h-2" />

      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {group.products.map((product) => (
            <RevealSection key={product.name}>
              <div className="bg-hot-pink/5 border-[3px] border-hot-pink/10 hover:border-hot-pink transition-all duration-500 flex flex-col h-full card-hover">
                {product.image ? (
                  <div className="bg-hot-pink/5 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-hot-pink/5 flex items-center justify-center p-10">
                    <span className="font-heading text-lg uppercase tracking-wider text-cream/30 text-center">
                      {product.name}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-hot-pink">
                    {product.company}
                  </span>
                  <h3 className="font-heading text-2xl uppercase leading-tight mt-3 mb-2">
                    {product.name}
                  </h3>
                  <p className="font-heading text-xl text-hot-pink mb-4">
                    {product.price}
                  </p>
                  <p className="font-body text-sm leading-[1.8] opacity-80 mb-6 flex-1">
                    {product.description}
                  </p>
                  {product.discountCode && (
                    <div className="border-[2px] border-dashed border-hot-pink/15 px-4 py-3 mb-6">
                      <span className="font-body text-xs uppercase tracking-wider opacity-50">
                        Discount Code
                      </span>
                      <p className="font-heading text-sm uppercase tracking-wider mt-1">
                        {product.discountCode}
                      </p>
                    </div>
                  )}
                  <a
                    href={product.website}
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
      </main>

      <footer className="bg-black text-cream border-t-[3px] border-black px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
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
