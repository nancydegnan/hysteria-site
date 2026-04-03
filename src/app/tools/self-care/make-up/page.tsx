"use client";

import Link from "next/link";
import { selfCareGroups } from "../../data";
import { RevealSection, Footer, SubpageNav } from "../../../components";

const group = selfCareGroups.find((g) => g.slug === "make-up")!;

export default function MakeUpPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-4 md:pt-28 md:pb-6 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              fragrance-free self & home care
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight lowercase">
              {group.theme}
            </h1>
            <p className="text-sm leading-[1.4] text-charcoal max-w-2xl mt-4">
              We all know clean beauty is important, but I take it one step further and ensure none of my makeup products use fragrance (surprisingly, a lot of makeup brands sneak in fragrance!). These are the brands I reach for that I know I can trust to not include fragrance in any of their makeup products.
            </p>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-6 md:pt-8">
        <Link href="/tools" className="playfair-italic text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block">
          &larr; back to shop
        </Link>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {group.products.map((product) => (
            <RevealSection key={product.name}>
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-center"
              >
                {product.image ? (
                  <div className={`relative overflow-hidden bg-gray-light mb-5 ${product.imageFit === "contain" ? "aspect-square w-[75%] mx-auto" : "aspect-[3/4]"}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${product.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                    {product.personalNote && (
                      <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                        <p className="playfair-italic text-[var(--foreground)] text-xs leading-[1.4] whitespace-pre-line text-left font-bold">
                          {product.personalNote}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-light flex items-center justify-center aspect-[3/4] mb-5">
                    <span className="text-sm text-gray-text">{product.name}</span>
                  </div>
                )}

                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-text">
                  {product.company}
                </p>
                <h3 className="playfair text-base leading-snug mt-1.5">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-text mt-1">
                  {product.price}
                </p>
                <p className="text-xs text-gray-text mt-2 leading-[1.4]">
                  {product.description}
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
