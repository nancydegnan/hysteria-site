"use client";

import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../components";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-8 pb-12 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              about
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">The story</span>{" "}
              <em className="playfair-italic font-light">behind the club.</em>
            </h1>
          </RevealSection>
        </header>
      </div>

      {/* ====== MY STORY ====== */}
      <section id="my-story" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12 md:gap-20 items-start">
            <RevealSection>
              <p className="section-label text-sm text-black mb-4">
                my story
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">How I</span>{" "}
                <em className="playfair-italic font-normal">got here.</em>
              </h2>
              <div className="space-y-5 playfair text-base text-black leading-[1.85]">
                <p>
                  In 2020, when the world was falling apart, so did my body. My
                  period became so painful I was vomiting and blacking out for
                  hours. Doctors told me it was normal. Maybe I should try
                  antidepressants. Maybe I just needed to have a baby.
                </p>
                <p>
                  <strong className="text-black">I would not accept.</strong>
                </p>
                <p>
                  After a year of research, I self-diagnosed and found a surgeon
                  who confirmed Stage 3 Endometriosis. When I walked into his
                  office for the post-op, ready for a treatment plan, he sighed
                  and said my only options were{" "}
                  <strong className="text-black">birth control</strong> or{" "}
                  <strong className="text-black">medical menopause</strong>.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/hysteria-doc#my-story" className="btn-secondary">
                  read the full story &rarr;
                </Link>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="relative">
                <div className="absolute inset-0 bg-blush/20 rounded-sm" />
                <img
                  src="/_MG_4378.jpg"
                  alt="Nancy portrait"
                  className="relative w-full aspect-[3/4] object-cover torn-image"
                  style={{ objectPosition: "center 80%" }}
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== MISSION ====== */}
      <section id="mission" className="py-20 md:py-28 px-6 bg-gray-light">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-4">
              our mission
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
              <span className="font-black">Why</span>{" "}
              <em className="playfair-italic font-normal">we exist.</em>
            </h2>
            <div className="space-y-5 playfair text-base text-black leading-[1.85] max-w-3xl">
              <p>
                [Mission statement coming soon.]
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== MANIFESTO ====== */}
      <section id="manifesto" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-4">
              manifesto
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
              <span className="font-black">What</span>{" "}
              <em className="playfair-italic font-normal">we believe.</em>
            </h2>
            <div className="space-y-5 playfair text-base text-black leading-[1.85] max-w-3xl">
              <p>
                [Manifesto coming soon.]
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <Footer />
    </div>
  );
}
