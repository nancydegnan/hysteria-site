"use client";

import Link from "next/link";
import { selfCareGroups } from "../../data";
import { RevealSection, Footer, SubpageNav } from "../../../components";

const group = selfCareGroups.find((g) => g.slug === "home-care")!;

export default function HomeCarePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              fragrance-free self care
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {group.theme}
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {group.products.map((product) => (
            <RevealSection key={product.name}>
              <div className="bg-gray-light border border-gray-mid hover:border-black transition-all duration-300 flex flex-col h-full card-hover">
                {product.image ? (
                  <div className="bg-gray-light overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-mid/30 flex items-center justify-center p-10">
                    <span className="text-lg font-medium text-gray-text text-center">
                      {product.name}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <span className="playfair-italic text-xs text-gray-text">
                    {product.company}
                  </span>
                  <h3 className="playfair text-xl leading-tight mt-3 mb-2">
                    {product.name}
                  </h3>
                  <p className="playfair text-base text-blush mb-4">
                    {product.price}
                  </p>
                  <p className="playfair text-sm leading-[1.8] text-gray-text mb-6 flex-1">
                    {product.description}
                  </p>
                  {product.discountCode && (
                    <div className="border border-dashed border-blush/30 px-4 py-3 mb-6">
                      <span className="playfair-italic text-xs text-gray-text">
                        discount code
                      </span>
                      <p className="text-sm font-medium mt-1">
                        {product.discountCode}
                      </p>
                    </div>
                  )}
                  <a
                    href={product.website}
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
      </main>

      <Footer />
    </div>
  );
}
