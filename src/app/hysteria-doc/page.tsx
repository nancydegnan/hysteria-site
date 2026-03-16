"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealSection, Footer } from "../components";

export default function HysteriaDoc() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* ====== NAV ====== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-mid">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-gray-text hover:text-black transition-colors duration-300"
          >
            &larr; No Cure Club
          </Link>
          <span className="text-lg font-black tracking-tighter text-black uppercase">
            HYSTERIA
          </span>
          <a
            href="#donate"
            className="text-sm text-gray-text hover:text-black transition-colors duration-300"
          >
            Support
          </a>
        </div>
      </nav>

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hysteria_hero_v3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <RevealSection>
            <p className="font-serif-italic text-lg md:text-xl text-white/80 mb-6">
              I went looking for a diagnosis.
            </p>
            <h1 className="text-[5rem] md:text-[9rem] lg:text-[12rem] font-black tracking-tighter text-white uppercase leading-[0.85]">
              HYSTERIA
            </h1>
            <p className="font-serif-italic text-lg md:text-xl text-white/80 mt-6">
              I found a global crisis.
            </p>
            <div className="mt-10">
              <span className="font-serif-italic text-sm text-blush border border-blush px-5 py-2 rounded-full inline-block">
                A Documentary Film
              </span>
            </div>
            <div className="mt-12">
              <a
                href="#about"
                className="inline-block text-white/60 hover:text-white transition-colors duration-500"
                aria-label="Scroll to about section"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== QUOTE — THE HYSTERIC ARCHETYPE ====== */}
      <section className="py-16 md:py-24 px-6 bg-gray-light">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <p className="font-serif-italic text-sm text-gray-text mb-6">
              the hysteric archetype
            </p>
            <blockquote className="border-l-2 border-blush pl-8">
              <p className="font-serif-italic text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] text-black">
                &ldquo;He is not a little mystified when he encounters in her
                periodically recurring phases of hypersensitiveness,
                unreasonableness, and loss of the sense of proportion.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-gray-text">
                  20th-century medical commentary on women
                </p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section id="about" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <RevealSection>
              <p className="font-serif-italic text-sm text-gray-text mb-4">
                about the film
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">No more</span>{" "}
                <em className="font-serif-italic font-light">breadcrumbs.</em>
              </h2>
              <div className="space-y-5 font-serif text-base text-gray-text leading-[1.85]">
                <p>
                  <strong className="text-black">HYSTERIA</strong> rips the
                  muffle off one of the most common yet criminally
                  under-researched diseases in the world.{" "}
                  <strong className="text-black">Endometriosis</strong> affects
                  over an estimated 190 million people globally — and most of
                  them spend nearly a decade of their youth just trying to get
                  someone to believe them.
                </p>
                <p>
                  The medical system has offered women with chronic conditions
                  like Endo meager breadcrumbs while funding an assortment of
                  boner pills and even a study on whether men find women with
                  Endo attractive. Systems such as this survive upon the fear,
                  confusion, and desperation of their subjects, who don&apos;t
                  know how to advocate for themselves.{" "}
                  <strong className="text-blush">No more.</strong>
                </p>
                <p>
                  This film follows my journey to put my stage 3 endometriosis
                  into remission. I work with cutting-edge specialists,
                  researchers, and biotech companies to discover the path to
                  treating this disease and healing my body. Along the way, I
                  discover the hidden link between{" "}
                  <strong className="text-black">witches</strong>,{" "}
                  <strong className="text-black">hysteria</strong>, and{" "}
                  <strong className="text-black">endometriosis</strong> — tracing
                  back the lineage of medical folklore that continues to haunt
                  women in the doctor&apos;s office today.
                </p>
              </div>
            </RevealSection>

            <RevealSection stagger>
              <div className="space-y-4">
                <blockquote className="border-l-2 border-blush pl-6 py-4 bg-gray-light">
                  <p className="font-serif font-medium text-base leading-relaxed">
                    &ldquo;The global hormonal contraceptive market is worth $19
                    billion. The first-line treatment for endometriosis has been
                    the same since 1957.&rdquo;
                  </p>
                </blockquote>

                <div className="bg-gray-light p-8">
                  <p className="text-4xl font-semibold tracking-tight">
                    7&ndash;10 years
                  </p>
                  <p className="font-serif text-sm text-gray-text mt-2">
                    Average time to receive an endometriosis diagnosis.
                  </p>
                </div>

                <div className="bg-black text-white p-8">
                  <p className="text-4xl font-semibold tracking-tight">
                    $2 per year
                    <br />
                    per patient
                  </p>
                  <p className="font-serif text-sm text-white/60 mt-2">
                    Amount of funding the NIH allocates to endometriosis
                    research and diagnostics.
                  </p>
                </div>

                <div className="bg-gray-light p-8 border-l-2 border-blush">
                  <p className="text-4xl font-semibold tracking-tight">
                    $180B&ndash;$250B
                  </p>
                  <p className="font-serif text-sm text-gray-text mt-2">
                    Global market opportunity if the &ldquo;unmet needs&rdquo; of
                    endometriosis were addressed.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== QUOTE — STACY SIMS ====== */}
      <section className="py-16 md:py-24 px-6 bg-gray-light">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <blockquote className="border-l-2 border-blush pl-8">
              <p className="font-serif-italic text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-black">
                &ldquo;Women are not small men.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-gray-text">Stacy Sims</p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== MY STORY ====== */}
      <section id="my-story" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="font-serif-italic text-sm text-gray-text mb-4">
              my story
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-12">
              <span className="font-black">How I</span>{" "}
              <em className="font-serif-italic font-light">got here.</em>
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
            <RevealSection>
              <div className="space-y-5 font-serif text-base text-gray-text leading-[1.85]">
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
                <p>
                  I was devastated.{" "}
                  <strong className="text-black">
                    Birth control would mask the symptoms while the disease grew
                    internally
                  </strong>{" "}
                  — risking my organs, my fertility, my future. But desperate to
                  get my life back, I took the prescription and moved on.
                </p>
                <p>
                  Then I discovered the work of women who are transforming how we
                  understand female biology. And I became determined to present
                  new options to the world.
                </p>
                <p>
                  I do not accept that Endo is &ldquo;just something I have to
                  live with.&rdquo; I refuse the narrative that women are cursed
                  with the harder biology.{" "}
                  <strong className="text-black">
                    We have a biology optimized for flow and harmony, strength
                    and resilience
                  </strong>{" "}
                  — distorted under a lens that was never built for us.
                </p>
                <p>
                  <strong className="text-black">
                    I have set out to put my Endo into remission.
                  </strong>{" "}
                  Not less pain —{" "}
                  <strong className="text-blush">no pain.</strong> To restore
                  health to my whole body, not just my uterus. I want my story to
                  bring hope to anyone suffering with chronic pain. There are
                  answers, and I am determined to bring them to the masses.
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                <div className="overflow-hidden">
                  <img
                    src="/_MG_4378.jpg"
                    alt="Nancy portrait"
                    className="w-full h-[340px] object-cover"
                    style={{ objectPosition: "center 80%" }}
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/IMG_1568 3.jpg"
                    alt="Nancy before surgery in hospital gown and cap"
                    className="w-full h-[340px] object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/IMG_0509.jpg"
                    alt="Nancy resting during recovery"
                    className="w-full h-[300px] object-cover"
                    style={{ objectPosition: "0% center" }}
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== QUOTE — ALISA VITTI ====== */}
      <section className="py-16 md:py-24 px-6 bg-gray-light">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <blockquote className="border-l-2 border-blush pl-8">
              <p className="font-serif-italic text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] text-black">
                &ldquo;Women tend to get sucked into believing that our bodies
                are wild, scary, shameful places that need to be managed by an
                outside source, medicated, controlled, and sterilized.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-gray-text">Alisa Vitti</p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== DONATION SECTION ====== */}
      <section id="donate" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <p className="font-serif-italic text-sm text-gray-text mb-4">
                support
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">Fund</span>{" "}
                <em className="font-serif-italic font-light">the film.</em>
              </h2>
              <p className="font-serif text-base text-gray-text leading-[1.85] mb-8">
                Independent film doesn&apos;t fund itself. Your contribution goes
                directly toward production, post-production, and distribution.
                Getting this story in front of the people and policymakers who
                need to see it.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://donate.mazloweb.com/donate/hysteria-documentary-production-fund"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  donate now
                </a>
                <button onClick={handleCopyLink} className="btn-secondary">
                  {copied ? "copied!" : "spread the word"}
                </button>
              </div>
            </RevealSection>

            <RevealSection stagger>
              <div className="space-y-4">
                <div className="bg-gray-light p-8">
                  <h3 className="text-lg font-medium mb-2">Tax-Deductible</h3>
                  <p className="font-serif text-sm text-gray-text leading-relaxed">
                    HYSTERIA is fiscally sponsored, so your donation is
                    tax-deductible to the fullest extent of the law.
                  </p>
                </div>
                <div className="bg-black text-white p-8">
                  <h3 className="text-lg font-medium mb-2">
                    100% Independent
                  </h3>
                  <p className="font-serif text-sm text-white/70 leading-relaxed">
                    No studio backing. No corporate agenda. This film is made by
                    patients, for everyone.
                  </p>
                </div>
                <div className="bg-gray-light p-8 border-l-2 border-blush">
                  <h3 className="text-lg font-medium mb-2">
                    Every Dollar Counts
                  </h3>
                  <p className="font-serif text-sm text-gray-text leading-relaxed">
                    From $5 to $5,000 — every contribution fuels production,
                    research trips, and getting this story told.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== TICKER ====== */}
      <div className="overflow-hidden whitespace-nowrap py-3 border-y border-gray-mid">
        <div className="ticker-scroll inline-block">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="text-sm tracking-[0.3em] uppercase text-gray-text mx-4"
            >
              HYSTERIA &bull; COMING SOON &bull; DEMAND BETTER &bull; BREAK THE
              SILENCE &bull; END THE STIGMA &bull; HYSTERIA &bull; COMING SOON
              &bull; DEMAND BETTER &bull; BREAK THE SILENCE &bull; END THE
              STIGMA &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ====== FOOTER ====== */}
      <Footer />
    </div>
  );
}
