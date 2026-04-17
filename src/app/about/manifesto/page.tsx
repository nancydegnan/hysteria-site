"use client";

import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../components";

export default function ManifestoPage() {
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
              <span className="font-black">what</span>{" "}
              <em className="playfair-italic font-light">we believe.</em>
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-4xl mx-auto pt-16 md:pt-24">
        <Link
          href="/about"
          className="playfair-italic text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block"
        >
          &larr; back to about
        </Link>

        <div className="space-y-10 md:space-y-14">
          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We will not be told our pain is normal.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We will not accept &ldquo;learn to live with it&rdquo; as a
              treatment plan.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We will not shrink our ambitions to fit our symptoms, or shrink
              our symptoms to fit a prescription that was never meant to heal
              us.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We believe female biology is not broken. It is not the harder
              biology, the more complicated biology, the biology that needs to
              be switched off to be manageable. It is a biology built for
              extraordinary things, and it has been misread, under-researched,
              and over-medicated by a system that was never designed around it.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We believe healing is not a luxury. It is not a personality type,
              an income bracket, or a lifestyle. The path to understanding your
              own body belongs to everyone.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We believe the answers exist. They are scattered across research
              papers and Reddit threads, functional medicine offices and
              ancient herbalism, engineering labs developing pelvic pain tools
              and kitchens swapping out endocrine disruptors. Our job is to
              find them, vet them, and bring them to you in one place.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We are not waiting for the medical establishment to catch up. We
              are building the resource we needed and didn&apos;t have.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-lg md:text-xl text-black leading-[1.7]">
              We are The No Cure Club. Not because there&apos;s no hope, but
              because we refuse to wait for a cure to start living fully.
            </p>
          </RevealSection>

          <RevealSection>
            <p className="text-xl md:text-2xl font-black text-black leading-[1.4] pt-4">
              We honor the body. We do the work. We don&apos;t do it alone.
            </p>
          </RevealSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
