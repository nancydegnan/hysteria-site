"use client";

import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../components";

const sections = [
  {
    href: "/about/nancy",
    label: "about us",
    title: "a note from the founder",
    description: "The personal story behind The No Cure Club.",
    image: "/nancy 2.jpg",
  },
  {
    href: "/about/why-we-exist",
    label: "our mission",
    title: "why we exist",
    description: "What The No Cure Club is building.",
    image: "/about.jpg",
  },
  {
    href: "/about/manifesto",
    label: "manifesto",
    title: "our manifesto",
    description: "What we believe.",
    image: "/manifesto.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              about
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">the story</span>{" "}
              <em className="playfair-italic font-light">behind the club.</em>
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto">
        {sections.map((item, i) => (
          <RevealSection key={item.href}>
            <Link href={item.href} className="block group">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-24 ${
                  i < sections.length - 1 ? "border-b border-gray-mid" : ""
                }`}
              >
                {/* Image — on left for even, on right for odd */}
                <div
                  className={`overflow-hidden ${
                    i % 2 !== 0 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <p className="section-label text-sm text-gray-text mb-2">
                    {item.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl tracking-tight mb-3">
                    <span className="font-black">{item.title}</span>
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.6] tracking-tight max-w-md">
                    {item.description}
                  </p>
                  <span className="text-sm font-medium inline-block mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </main>

      <Footer />
    </div>
  );
}
