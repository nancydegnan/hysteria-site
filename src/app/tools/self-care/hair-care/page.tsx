"use client";

import Link from "next/link";
import { selfCareGroups } from "../../data";
import { RevealSection, Footer, SubpageNav, SelfCareCard } from "../../../components";

const group = selfCareGroups.find((g) => g.slug === "hair-care")!;

export default function HairCarePage() {
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
              <SelfCareCard product={product} />
            </RevealSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
