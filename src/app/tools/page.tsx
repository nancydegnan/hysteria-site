"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ── Scroll-reveal (duplicated from homepage to keep things simple) ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "fade-in-section"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Tool data ── */
interface Tool {
  company: string;
  name: string;
  price: string;
  description: string;
  website: string;
  discountCode?: string;
}

const tools: Tool[] = [
  {
    company: "OhmBody",
    name: "OhmBody Starter Kit",
    price: "$719",
    description:
      "Wearable earpiece that uses patented neurostimulation technology to simultaneously stimulate the vagus and trigeminal nerves — reducing period pain, lightening flow, and balancing your cycle. Drug-free, hormone-free relief.",
    website: "https://www.ohmbody.com",
    discountCode: "PLACEHOLDER",
  },
  {
    company: "The Pelvic People",
    name: "Ohnut",
    price: "$75",
    description:
      "Soft, stretchy, stackable rings that let you customize penetration depth — reducing pain during intimacy by preventing contact with tender pelvic structures.",
    website: "https://thepelvicpeople.com",
    discountCode: "PLACEHOLDER",
  },
  {
    company: "The Pelvic People",
    name: "Kiwi",
    price: "$115",
    description:
      "A vibrating pelvic relaxation massager designed to release tight pelvic floor muscles. Non-phallic, gentle, and targeted — with different ends for shallow internal use and for massaging connected muscle groups.",
    website: "https://thepelvicpeople.com/products/kiwi",
    discountCode: "PLACEHOLDER",
  },
];

/* ── Page ── */
export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
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
            Products I actually use that have made a real difference in managing
            pain and healing.
          </p>
        </RevealSection>
      </header>

      {/* ── Tool listings ── */}
      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <RevealSection key={tool.name}>
              <div className="border-[3px] border-cream/20 hover:border-hot-pink transition-colors duration-500 flex flex-col h-full">
                {/* Image placeholder */}
                <div className="bg-cream/10 flex items-center justify-center p-10">
                  <span className="font-heading text-lg uppercase tracking-wider text-cream/30 text-center">
                    {tool.name}
                  </span>
                </div>

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
                    <div className="border-[2px] border-dashed border-cream/20 px-4 py-3 mb-6">
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
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-cream/10 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">
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
