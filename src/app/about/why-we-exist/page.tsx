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

        <div className="space-y-6 text-base text-black leading-[1.85] max-w-3xl">
          <RevealSection>
            <p>
              There is no shortage of wellness content for women. There is an
              enormous shortage of useful content for women with complex,
              chronic, hormonally-driven conditions. Content that meets them
              where they actually live.
            </p>
          </RevealSection>

          <RevealSection>
            <p>
              Not in a retreat center. Not on a $400/month supplement protocol.
              In an apartment, at a desk job, trying to get through a Tuesday.
            </p>
          </RevealSection>

          <RevealSection>
            <p>
              The No Cure Club exists because no one has built what we needed:
              a real, curated hub that covers the whole life of someone
              managing a condition like endometriosis. Not just the diagnosis
              and the surgery options. The office chair that relieves pelvic
              pain. The skincare routine that isn&apos;t quietly dismantling
              your hormones. The cleaning products you use every day that may
              be feeding the inflammation you&apos;re fighting. The pain
              relief tools that actually work. The research your doctor
              hasn&apos;t read yet.
            </p>
          </RevealSection>

          <RevealSection>
            <p>
              This is a multimodal approach to hormonal health, because the
              body is multimodal. Endo doesn&apos;t live only in the uterus.
              Chronic inflammation doesn&apos;t respond to a single lever.
              Healing isn&apos;t linear, and it doesn&apos;t fit into a
              15-minute appointment.
            </p>
          </RevealSection>

          <RevealSection>
            <p>
              We are here for women and everyone with a female body who is
              done being told their pain is normal, their hormones are a
              problem to be suppressed, and their only options are the ones on
              a prescription pad. We are here for anyone who suspects the
              system wasn&apos;t designed with their biology in mind, because
              it wasn&apos;t. Medical research has been built, for most of its
              history, around the male body as the default. Female biology is
              cyclical, hormonally dynamic, exquisitely sensitive to
              environment. And it has been undertreated, misunderstood, and
              pathologized.
            </p>
          </RevealSection>

          <RevealSection>
            <p>
              <strong className="text-black">
                We are not anti-medicine. We are pro-whole picture.
              </strong>
            </p>
          </RevealSection>

          <RevealSection>
            <p>
              The No Cure Club is the intersection point: where cutting-edge
              femtech meets ancestral wisdom meets modern science meets the
              unglamorous, practical realities of chronic illness. Where your
              biology is not a liability. Where the goal isn&apos;t just less
              pain. It&apos;s full, unapologetic health.
            </p>
          </RevealSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
