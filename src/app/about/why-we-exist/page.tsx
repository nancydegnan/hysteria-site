"use client";

import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../components";

export default function WhyWeExistPage() {
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
              <span className="font-black">why</span>{" "}
              <em className="playfair-italic font-light">we exist.</em>
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link
          href="/about"
          className="playfair-italic text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block"
        >
          &larr; back to about
        </Link>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-3 text-base text-black leading-snug">
            <RevealSection>
              <p>
                There is no shortage of wellness content for women.
              </p>
              <p className="mt-3">
                There is an enormous shortage of useful curated content for women living with complex, chronic, multi-system conditions like endometriosis. Content that meets them where they actually live.
              </p>
            </RevealSection>

            <RevealSection>
              <p>
                Not at a retreat. Not on a $400/month supplement protocol.
              </p>
              <p className="mt-3">
                <em>In an apartment. At a desk job. Trying to get through a Tuesday.</em>
              </p>
            </RevealSection>

            <RevealSection>
              <p>
                <span className="ncc-logo font-bold" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span> exists because I realized no one had built what we needed.
              </p>
              <p className="mt-3">
                A real, curated hub that covers the whole life of someone managing a condition like endometriosis. Not just diagnosis and surgery options.
              </p>
              <p className="mt-3">
                The office chair that relieves pelvic pain. The skincare routine and cleaning products that aren&apos;t quietly wrecking your hormones. The podcast episode that changes your relationship to your nervous system. The pain relief tools that actually work. The research your doctor hasn&apos;t read yet, put in normal, easy-to-understand language.
              </p>
            </RevealSection>

            <RevealSection>
              <p>
                Endo doesn&apos;t live in the uterus alone. Chronic inflammation doesn&apos;t respond to one lever. Healing isn&apos;t linear, and it doesn&apos;t fit into a 15-minute appointment.
              </p>
            </RevealSection>

            <RevealSection>
              <p>
                This is for women and anyone who has or once had a uterus who is done being told their pain is normal, their hormones are a problem to be suppressed, their only real options are on a prescription pad.
              </p>
              <p className="mt-6">
                It&apos;s for anyone who suspects the system wasn&apos;t built with their biology in mind.
              </p>
              <p className="mt-1">
                Because it wasn&apos;t.
              </p>
              <p className="mt-3">
                For most of its history, medical research was built around the male body as the default. <em>Female biology is cyclical, hormonally dynamic, deeply responsive to its environment.</em> It has been undertreated, misunderstood, and pathologized.
              </p>
            </RevealSection>

            <RevealSection>
              <p>
                We are not anti-medicine. We are pro-whole picture.
              </p>
            </RevealSection>

            <RevealSection>
              <p>
                <strong>This is where femtech meets ancestral wisdom meets modern science meets the unglamorous, practical reality of chronic illness.</strong>
              </p>
              <p className="mt-6">
                Where your biology is not a liability.
              </p>
              <p className="mt-1">
                Where the goal isn&apos;t just less pain.
              </p>
              <p className="mt-1">
                It&apos;s full, unapologetic health.
              </p>
            </RevealSection>
          </div>

          <RevealSection className="hidden md:block">
            <div className="w-72 lg:w-80 aspect-[3/4] overflow-hidden sticky top-28">
              <img
                src="/the origin/F12D13FD-721A-4BB1-818F-337E0FB48E42-labbet-app.JPG"
                alt="The No Cure Club"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
