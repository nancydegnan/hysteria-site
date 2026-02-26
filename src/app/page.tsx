"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.15 }
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
  id,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  id?: string;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      id={id}
      className={`${stagger ? "stagger-children" : "fade-in-section"} ${className}`}
    >
      {children}
    </div>
  );
}

function RotatingCircleText({ text, size }: { text: string; size: number }) {
  return (
    <div
      className="rotate-slow select-none"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="14"
          fontFamily="var(--font-heading), sans-serif"
          letterSpacing="3"
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-cream text-foreground">
      {/* Hidden SVG filter for letterpress/woodblock text effect */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="letterpress">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="4"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ====== TICKER BAR ====== */}
      <div className="bg-hot-pink overflow-hidden whitespace-nowrap py-2 border-b-[3px] border-black">
        <div className="ticker-scroll inline-block">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="font-heading text-cream text-sm tracking-[0.3em] uppercase mx-4"
            >
              1 IN 10 WOMEN &bull; 190 MILLION WORLDWIDE &bull; AVERAGE 7-10
              YEARS TO DIAGNOSE &bull; NO KNOWN CURE &bull; EXPOSED &bull;
              SILENCED &bull; IGNORED &bull; NOT ANYMORE &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ====== NAV BUTTONS ====== */}
      <nav className="bg-black py-3 px-6 flex justify-center gap-3 md:gap-5 flex-wrap">
        {[
          { href: "#my-story", label: "My Story" },
          { href: "#resources", label: "Resources" },
          { href: "#meetups", label: "LA Meetups" },
          { href: "#donate", label: "Fund the Fight" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-heading text-xs md:text-sm uppercase tracking-[0.2em] text-cream/80 hover:text-hot-pink transition-colors duration-300 px-3 py-1 border border-cream/20 hover:border-hot-pink"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-10 md:py-16 overflow-hidden">
        {/* Fullscreen background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hysteria_hero_v3.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />



        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          {/* Tagline — top — ransom collage style */}
          <div className="flex flex-wrap justify-center gap-[3px] md:gap-[5px] mb-6 md:mb-8 select-none">
            <span className="collage-letter bg-black text-cream rotate-[-2deg] text-xs md:text-sm">I</span>
            <span className="collage-letter bg-cream text-black border border-black rotate-[1deg] text-[0.65rem] md:text-xs">went</span>
            <span className="collage-letter bg-hot-pink text-cream rotate-[-1deg] text-xs md:text-sm">looking</span>
            <span className="collage-letter bg-yellow text-black rotate-[2deg] text-[0.65rem] md:text-xs">for</span>
            <span className="collage-letter bg-black text-cream rotate-[-1.5deg] text-xs md:text-sm">a</span>
            <span className="collage-letter bg-red text-cream rotate-[1.5deg] text-xs md:text-sm font-heading tracking-wider">diagnosis.</span>
          </div>

          {/* MASSIVE CENTERED TITLE — ultra-condensed letterpress style */}
          <div className="relative flex justify-center">
            <h1
              className="font-heading text-hot-pink text-[clamp(14rem,45vw,38rem)] leading-[0.76] tracking-[-0.03em] uppercase select-none text-center"
              style={{ transform: "scaleX(0.4)", transformOrigin: "center" }}
            >
              HYSTERIA
            </h1>
          </div>

          {/* Tagline — bottom — ransom collage style */}
          <div className="flex flex-wrap justify-center gap-[3px] md:gap-[5px] mt-6 md:mt-8 select-none">
            <span className="collage-letter bg-cream text-black border border-black rotate-[1.5deg] text-xs md:text-sm">I</span>
            <span className="collage-letter bg-red text-cream rotate-[-2deg] text-xs md:text-sm">found</span>
            <span className="collage-letter bg-black text-cream rotate-[1deg] text-[0.65rem] md:text-xs">a</span>
            <span className="collage-letter bg-yellow text-black rotate-[-1deg] text-xs md:text-sm font-heading tracking-wider">global</span>
            <span className="collage-letter bg-hot-pink text-cream rotate-[2.5deg] text-xs md:text-sm font-heading tracking-wider">crisis.</span>
          </div>

          {/* Stamp */}
          <div className="mt-10 md:mt-14 flex flex-col items-center gap-6">
            <span className="stamp text-lg md:text-xl text-hot-pink font-bold border-hot-pink">
              A Documentary Film
            </span>
          </div>

          {/* Down arrow */}
          <div className="mt-12">
            <a
              href="#about"
              className="inline-block text-black hover:text-red transition-colors duration-500"
              aria-label="Scroll to about section"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ====== QUOTE — THE HYSTERIC ARCHETYPE ====== */}
      <div className="bg-black torn-bottom h-2" />
      <section className="relative bg-yellow py-20 md:py-28 px-6 overflow-hidden print-grain">
        <div className="max-w-5xl mx-auto relative z-10">
          <RevealSection>
            <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-black mb-8 opacity-60">
              The Hysteric Archetype
            </p>
            <blockquote className="relative">
              <div className="flex items-start gap-4">
                <span
                  className="font-heading text-[5rem] md:text-[8rem] leading-none text-black select-none"
                  style={{ marginTop: "-0.2em" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div>
                  <p className="font-heading text-2xl md:text-4xl lg:text-5xl text-black uppercase leading-[1.05] tracking-tight">
                    He is not a little{" "}
                    <span className="ransom-pink inline-block rotate-[-1deg]">
                      mystified
                    </span>{" "}
                    when he encounters in her periodically recurring phases of{" "}
                    <span className="ransom-red inline-block rotate-[1deg]">
                      hypersensitiveness
                    </span>
                    ,{" "}
                    <span className="text-hot-pink">unreasonableness</span>, and{" "}
                    <span className="ransom inline-block rotate-[-0.5deg]">
                      loss of the sense of proportion.
                    </span>
                  </p>
                  <footer className="mt-6">
                    <span className="ransom inline-block text-sm md:text-base tracking-[0.3em] uppercase font-body">
                      — 20th-century medical commentary on women
                    </span>
                  </footer>
                </div>
              </div>
            </blockquote>
          </RevealSection>
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--black) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
      </section>
      <div className="bg-black torn-top h-2" />

      {/* ====== ABOUT SECTION ====== */}
      <section
        id="about"
        className="relative bg-cream pt-24 md:pt-32 pb-28 md:pb-40 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="mb-16 md:mb-24">
              <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
                // About
              </p>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.9] section-title">
                No more
                <br />
                <span className="text-hot-pink">
                  breadcrumbs.
                </span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <RevealSection>
              <div className="space-y-8">
                <p className="font-body text-base md:text-lg leading-[1.8]">
                  <span className="ransom inline-block rotate-[-1deg] font-bold">HYSTERIA</span> rips the muffle off one of the most
                  common yet criminally under-researched diseases in the world.{" "}
                  <span className="ransom-red inline-block rotate-[1deg] font-bold">Endometriosis</span>{" "}
                  affects over an estimated 190 million people globally — and
                  most of them spend nearly a decade of their youth just trying
                  to get someone to believe them.
                </p>
                <p className="font-body text-base md:text-lg leading-[1.8]">
                  The medical system has offered women with chronic conditions
                  like Endo meager breadcrumbs while funding an assortment of
                  boner pills and even a study on whether men find women with
                  Endo attractive. Systems such as this survive upon the fear, confusion,
                  and desperation of their subjects, who don&apos;t know how to
                  advocate for themselves.{" "}
                  <span className="ransom-yellow inline-block rotate-[1.5deg] font-bold text-xl md:text-2xl">
                    NO MORE.
                  </span>
                </p>
                <p className="font-body text-base md:text-lg leading-[1.8]">
                  This film follows my journey to put my stage 3 endometriosis
                  into remission. I work with cutting-edge specialists,
                  researchers, and biotech companies to discover the path to
                  treating this disease and healing my body. Along the way, I
                  discover the hidden link between{" "}
                  <span className="ransom-pink inline-block rotate-[-1deg] font-bold">WITCHES</span>,{" "}
                  <span className="ransom inline-block rotate-[1deg] font-bold">HYSTERIA</span>,
                  and{" "}
                  <span className="ransom-red inline-block rotate-[-1.5deg] font-bold">ENDOMETRIOSIS</span>{" "}
                  — tracing back the lineage of medical folklore that continues
                  to haunt women in the doctor&apos;s office today. The cavalry
                  may not be coming, but we can be the cavalry for each other.
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="space-y-8">
                <div className="speech-bubble">
                  <p className="font-body font-bold text-lg md:text-xl leading-relaxed">
                    &ldquo;The global hormonal contraceptive market is worth $19 billion. The first-line treatment for endometriosis has been the same since 1957.&rdquo;
                  </p>
                </div>

                {/* Guerrilla Girls-style yellow stat callout */}
                <div className="bg-yellow border-[4px] border-black p-8 print-grain card-hover cursor-default">
                  <p className="relative z-10 font-heading text-4xl md:text-5xl text-black uppercase leading-tight">
                    7&ndash;10 years.
                  </p>
                  <p className="relative z-10 font-body text-sm mt-4 text-black font-bold">
                    Average time to receive an endometriosis diagnosis.
                  </p>
                </div>

                {/* NIH funding stat — red */}
                <div className="bg-red border-[4px] border-black p-8 print-grain card-hover cursor-default">
                  <p className="relative z-10 font-heading text-4xl md:text-5xl text-cream uppercase leading-tight">
                    $2 per year
                    <br />
                    per patient
                  </p>
                  <p className="relative z-10 font-body text-sm mt-4 text-cream font-bold">
                    Amount of funding the NIH allocates to endometriosis
                    research and diagnostics.
                  </p>
                </div>

                {/* Bold stat card — black with red accent */}
                <div className="clip-reveal-parent relative bg-black text-cream p-8 border-l-[6px] border-red card-hover cursor-default">
                  <div className="clip-reveal absolute inset-0 bg-red" />
                  <p className="relative z-10 font-heading text-4xl md:text-5xl uppercase leading-tight">
                    $180B&ndash;$250B
                  </p>
                  <p className="relative z-10 font-body text-sm mt-4 opacity-80 font-bold">
                    Global market opportunity if the &ldquo;unmet needs&rdquo; of
                    endometriosis (diagnostics, effective treatments, and
                    fertility) were addressed.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* ====== QUOTE — STACY SIMS ====== */}
          <div className="mt-28 md:mt-40 -mx-6">
            <div className="bg-black torn-bottom h-2" />
            <div className="relative bg-yellow py-20 md:py-28 px-6 overflow-hidden print-grain">
              <div className="max-w-5xl mx-auto relative z-10">
                <RevealSection>
                  <blockquote className="relative">
                    <div className="flex items-start gap-4">
                      <span
                        className="font-heading text-[5rem] md:text-[8rem] leading-none text-black select-none"
                        style={{ marginTop: "-0.2em" }}
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <div>
                        <p className="font-heading text-3xl md:text-5xl lg:text-6xl text-black uppercase leading-[1] tracking-tight">
                          Women are not{" "}
                          <span className="ransom-pink inline-block rotate-[-1deg] text-3xl md:text-5xl lg:text-6xl">
                            small men.
                          </span>
                        </p>
                        <footer className="mt-6">
                          <span className="ransom inline-block text-sm md:text-base tracking-[0.3em] uppercase font-body">
                            — Stacy Sims
                          </span>
                        </footer>
                      </div>
                    </div>
                  </blockquote>
                </RevealSection>
              </div>
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                  backgroundImage: "radial-gradient(circle, var(--black) 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
            <div className="bg-black torn-top h-2" />
          </div>

          {/* ====== MY STORY ====== */}
          <RevealSection className="mt-28 md:mt-40" id="my-story">
            <div className="max-w-6xl mx-auto">
              <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
                // My Story
              </p>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.9] mb-12 section-title">
                How I
                <br />
                <span className="text-hot-pink">got here.</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
                {/* Text column */}
                <div className="space-y-6 font-body text-base md:text-lg leading-[1.9]">
                  <p>
                    In 2020, when the world was falling apart, so did my body. My
                    period became so painful I was vomiting and blacking out for
                    hours. Doctors told me it was normal. Maybe I should try
                    antidepressants. Maybe I just needed to have a baby.
                  </p>
                  <p>
                    <strong>I would not accept.</strong>
                  </p>
                  <p>
                    After a year of research, I self-diagnosed and found a surgeon
                    who confirmed Stage 3 Endometriosis. When I walked into his
                    office for the post-op, ready for a treatment plan, he sighed
                    and said my only options were{" "}
                    <span className="ransom inline-block rotate-[-1deg] font-bold">birth control</span>{" "}
                    or{" "}
                    <span className="ransom-yellow inline-block rotate-[1deg] font-bold">medical menopause</span>.
                  </p>
                  <p>
                    I was devastated.{" "}
                    <strong>
                      Birth control would mask the symptoms while the disease grew
                      internally
                    </strong>{" "}
                    — risking my organs, my fertility, my future. But desperate to get my life back, I took the
                    prescription and moved on.
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
                    <strong>
                      We have a biology optimized for flow and harmony, strength
                      and resilience
                    </strong>{" "}
                    — distorted under a lens
                    that was never built for us.
                  </p>
                  <p>
                    <strong>I have set out to put my Endo into remission.</strong>{" "}
                    Not less pain &mdash;{" "}
                    <span className="ransom-red inline-block rotate-[-1deg] font-bold text-xl md:text-2xl">NO PAIN.</span>{" "}
                    To restore
                    health to my whole body, not just my uterus. I want my story
                    to bring hope to anyone suffering with chronic pain. There are
                    answers, and I am determined to bring them to the masses.
                  </p>
                </div>

                {/* Photo collage column */}
                <div className="relative flex flex-col gap-6 lg:sticky lg:top-24">
                  {/* Photo 0 — portrait (_MG_4378) */}
                  <div
                    className="collage-photo relative rotate-[-1.5deg] z-5"
                  >
                    <div className="tape" />
                    <img
                      src="/_MG_4378.jpg"
                      alt="Nancy portrait"
                      className="w-full h-[340px] object-cover"
                      style={{ objectPosition: "center 80%" }}
                    />
                  </div>

                  {/* Photo 1 — hospital (IMG_1568 3) */}
                  <div
                    className="collage-photo relative rotate-[2deg] z-10"
                  >
                    <div className="tape" />
                    <img
                      src="/IMG_1568 3.jpg"
                      alt="Nancy before surgery in hospital gown and cap"
                      className="w-full h-[340px] object-cover object-center"
                    />
                  </div>

                  {/* Photo 2 — resting (IMG_0509) */}
                  <div
                    className="collage-photo relative rotate-[-3deg] z-20 lg:-mt-8"
                  >
                    <div className="tape" />
                    <img
                      src="/IMG_0509.jpg"
                      alt="Nancy resting during recovery"
                      className="w-full h-[300px] object-cover"
                      style={{ objectPosition: "0% center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== QUOTE — ALISA VITTI ====== */}
      <div className="bg-black torn-bottom h-2" />
      <section className="relative bg-yellow py-20 md:py-28 px-6 overflow-hidden print-grain">
        <div className="max-w-5xl mx-auto relative z-10">
          <RevealSection>
            <blockquote className="relative">
              <div className="flex items-start gap-4">
                <span
                  className="font-heading text-[5rem] md:text-[8rem] leading-none text-black select-none"
                  style={{ marginTop: "-0.2em" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div>
                  <p className="font-heading text-2xl md:text-4xl lg:text-5xl text-black uppercase leading-[1.05] tracking-tight">
                    Women tend to get{" "}
                    <span className="ransom-red inline-block rotate-[1deg]">
                      &lsquo;sucked&rsquo;
                    </span>{" "}
                    into believing that our bodies are{" "}
                    <span className="ransom-pink inline-block rotate-[-1.5deg]">
                      wild, scary, shameful
                    </span>{" "}
                    places that need to be managed by an outside source,{" "}
                    <span className="text-hot-pink">medicated</span>,{" "}
                    <span className="text-hot-pink">controlled</span>, and{" "}
                    <span className="ransom inline-block rotate-[0.5deg]">sterilized.</span>
                  </p>
                  <footer className="mt-6">
                    <span className="ransom inline-block text-sm md:text-base tracking-[0.3em] uppercase font-body">
                      — Alisa Vitti
                    </span>
                  </footer>
                </div>
              </div>
            </blockquote>
          </RevealSection>
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--black) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
      </section>
      <div className="bg-black torn-top h-2" />

      {/* ====== RESOURCES SECTION ====== */}
      <section id="resources" className="relative bg-black text-cream py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="mb-16 md:mb-20">
              <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
                // Resources
              </p>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-cream uppercase leading-[0.9] section-title-cream">
                Tools that
                <br />
                <span className="text-hot-pink">helped</span> me.
              </h2>
              <p className="font-body text-base md:text-lg leading-[1.8] mt-8 opacity-80 max-w-2xl">
                I&apos;m sharing practitioners, products, and resources that have
                made a real difference in my journey — updated in real time as I
                discover them.
              </p>
            </div>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Practitioner — live link */}
              <Link
                href="/practitioners"
                className="border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 card-hover cursor-pointer group"
              >
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-hot-pink">
                  Practitioners
                </span>
                <h3 className="font-heading text-2xl uppercase mt-3 mb-4">
                  Explore{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-60">
                  Doctors and specialists who actually listen.
                </p>
              </Link>

              {/* Tool — live link */}
              <Link
                href="/tools"
                className="border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 card-hover cursor-pointer group"
              >
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-hot-pink">
                  Tools
                </span>
                <h3 className="font-heading text-2xl uppercase mt-3 mb-4">
                  Explore{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-60">
                  Products and tools that help manage daily life.
                </p>
              </Link>

              {/* Reading — live link */}
              <Link
                href="/reading"
                className="border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 card-hover cursor-pointer group"
              >
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-hot-pink">
                  Read, Watch, Listen
                </span>
                <h3 className="font-heading text-2xl uppercase mt-3 mb-4">
                  Explore{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-60">
                  Books, films, podcasts, articles, and research worth your time.
                </p>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== DIVIDER ====== */}
      <div className="bg-black torn-bottom torn-top h-2" />

      {/* ====== QUOTE — WUTHERING HEIGHTS ====== */}
      <section className="relative bg-yellow py-20 md:py-28 px-6 overflow-hidden print-grain">
        <div className="max-w-5xl mx-auto relative z-10">
          <RevealSection>
            <blockquote className="relative">
              <div className="flex items-start gap-4">
                <span
                  className="font-heading text-[5rem] md:text-[8rem] leading-none text-black select-none"
                  style={{ marginTop: "-0.2em" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div>
                  <p className="font-heading text-2xl md:text-4xl lg:text-5xl text-black uppercase leading-[1.05] tracking-tight">
                    I&apos;m tired of being{" "}
                    <span className="ransom inline-block rotate-[-1deg]">
                      enclosed
                    </span>{" "}
                    here. I&apos;m wearying to{" "}
                    <span className="ransom-pink inline-block rotate-[1deg]">
                      escape
                    </span>{" "}
                    into that glorious world, and to be always there: not seeing
                    it dimly through{" "}
                    <span className="ransom-red inline-block rotate-[-0.5deg]">
                      tears
                    </span>
                    , and yearning for it through the walls of an{" "}
                    <span className="ransom-pink inline-block rotate-[1deg]">
                      aching heart.
                    </span>
                  </p>
                  <footer className="mt-6">
                    <span className="ransom inline-block text-sm md:text-base tracking-[0.3em] uppercase font-body">
                      — Catherine Earnshaw, Wuthering Heights
                    </span>
                  </footer>
                </div>
              </div>
            </blockquote>
          </RevealSection>
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--black) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
      </section>

      {/* ====== EMAIL SIGNUP SECTION ====== */}
      <section
        id="community"
        className="relative bg-black text-cream py-28 md:py-40 px-6 torn-bottom torn-top"
      >
        <div className="absolute inset-0 dots-pattern-large opacity-[0.04]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealSection>
            <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-6">
              // Community
            </p>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[7rem] uppercase leading-[0.85] mb-8 section-title">
              <span className="text-cream">Join</span>{" "}
              <span className="text-hot-pink">the</span>
              <br />
              <span className="text-cream">movement.</span>
            </h2>
          </RevealSection>

          <RevealSection>
            <p className="font-body text-base md:text-lg leading-[1.8] mb-4 max-w-xl mx-auto opacity-90">
              This isn&apos;t just a film — it&apos;s a community and a
              movement. Sign up to get updates on gatherings and resources.
            </p>
          </RevealSection>

          {/* Live Events Callout */}
          <RevealSection id="meetups">
            <div className="my-14 border-[3px] border-hot-pink p-8 md:p-10 max-w-2xl mx-auto text-left">
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-hot-pink mb-4">
                Live in Los Angeles
              </p>
              <h3 className="font-heading text-3xl md:text-4xl uppercase leading-[0.9] mb-4">
                Endo community
                <br />
                <span className="text-hot-pink">meetups.</span>
              </h3>
              <p className="font-body text-sm md:text-base leading-[1.8] opacity-80 mb-6">
                I&apos;m hosting live events in LA to bring the endo community
                together — honest and supportive conversations about living and
                healing with this disease. Dates and locations go out to the
                mailing list first.
              </p>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-hot-pink font-bold">
                Subscribe below to be the first to know.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <p className="font-body text-sm mb-8 opacity-50">
              No spam. No fluff. Just the fight + event invites.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-cream-dark text-black"
              />
              <button type="submit" className="btn-punk whitespace-nowrap">
                Sign Up
              </button>
            </form>
          </RevealSection>

          {/* Decorative line */}
          <div className="mt-20 md:mt-28 flex items-center justify-center gap-4 opacity-20 select-none">
            <div className="h-px bg-cream flex-1 max-w-[120px]" />
            <span className="font-heading text-xs tracking-[0.5em] uppercase">
              Silence is not an option
            </span>
            <div className="h-px bg-cream flex-1 max-w-[120px]" />
          </div>
        </div>
      </section>

      {/* ====== DONATION SECTION ====== */}
      <section id="donate" className="relative bg-cream py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="mb-16 md:mb-24">
              <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-red mb-4">
                // Support
              </p>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.9] section-title">
                Fund
                <br />
                <span className="text-red">the</span>{" "}
                <span className="text-red">fight.</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-[1fr,1.2fr] gap-16 md:gap-20 items-start">
            <RevealSection>
              <div>
                <p className="font-body text-base md:text-lg leading-[1.8] mb-10">
                  Independent film doesn&apos;t fund itself. Your contribution
                  goes directly toward production, post-production, and
                  distribution. Getting this story in front of the people and
                  policymakers who need to see it.
                </p>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="https://donate.mazloweb.com/donate/hysteria-documentary-production-fund"
                    className="btn-punk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </a>
                  <button onClick={handleCopyLink} className="btn-punk-outline">
                    {copied ? "Link Copied!" : "Spread the Word"}
                  </button>
                </div>
              </div>
            </RevealSection>

            <RevealSection stagger>
              {/* Tax-deductible — yellow Guerrilla Girls style */}
              <div className="bg-yellow border-[4px] border-black p-8 print-grain card-hover cursor-default">
                <p className="relative z-10 font-heading text-xl md:text-2xl uppercase mb-3 text-black">
                  Tax-Deductible
                </p>
                <p className="relative z-10 font-body text-sm leading-relaxed text-black">
                  HYSTERIA is fiscally sponsored, so your donation is
                  tax-deductible to the fullest extent of the law.
                </p>
              </div>

              {/* Independent — bold red */}
              <div className="clip-reveal-parent relative bg-red text-cream p-8 card-hover cursor-default mt-5">
                <div className="clip-reveal absolute inset-0 bg-black" />
                <p className="relative z-10 font-heading text-xl md:text-2xl uppercase mb-3">
                  100% Independent
                </p>
                <p className="relative z-10 font-body text-sm leading-relaxed opacity-90">
                  No studio backing. No corporate agenda. This film is made by
                  patients, for everyone.
                </p>
              </div>

              {/* Every dollar — black with hot pink accent */}
              <div className="clip-reveal-parent relative bg-black text-cream p-8 border-l-[6px] border-hot-pink card-hover cursor-default mt-5">
                <div className="clip-reveal absolute inset-0 bg-hot-pink" />
                <p className="relative z-10 font-heading text-xl md:text-2xl uppercase mb-3">
                  Every Dollar Counts
                </p>
                <p className="relative z-10 font-body text-sm leading-relaxed opacity-80">
                  From $5 to $5,000 — every contribution fuels production,
                  research trips, and getting this story told.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== BOTTOM TICKER ====== */}
      <div className="bg-yellow overflow-hidden whitespace-nowrap py-4 border-y-[3px] border-black">
        <div className="ticker-scroll inline-block">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="font-heading text-black text-lg md:text-xl tracking-[0.2em] uppercase mx-4"
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
      <footer className="bg-black text-cream py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Large footer title — outlined */}
          <div className="mb-16 md:mb-24">
            <h3 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-outline-cream leading-[0.85] select-none section-title-cream">
              HYSTERIA
            </h3>
            <p className="font-body text-sm md:text-base leading-relaxed opacity-50 mt-6 max-w-md">
              A documentary film about endometriosis, medical gaslighting, and
              one woman&apos;s refusal to accept a life of pain as her fate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Navigate */}
            <div>
              <h4 className="font-heading text-lg uppercase tracking-[0.2em] mb-6 text-red">
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { href: "#about", label: "About the Film" },
                  { href: "#community", label: "Join the Movement" },
                  { href: "#donate", label: "Donate" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="link-reveal font-body text-sm text-cream/70 hover:text-red transition-colors duration-500"
                  >
                    <span>{link.label}</span>
                    <span className="link-reveal-hover text-red">
                      {link.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg uppercase tracking-[0.2em] mb-6 text-red">
                Contact
              </h4>
              <div className="font-body text-sm space-y-3 opacity-70">
                <p>
                  <a
                    href="mailto:hello@hysteriafilm.com"
                    className="hover:text-red transition-colors duration-500"
                  >
                    hello@hysteriafilm.com
                  </a>
                </p>
                <p>Press inquiries welcome.</p>
              </div>
            </div>

            {/* Instagram */}
            <div>
              <h4 className="font-heading text-lg uppercase tracking-[0.2em] mb-6 text-red">
                Follow
              </h4>
              <a
                href="https://www.instagram.com/nancydegnan/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 mb-6"
              >
                {/* Instagram icon */}
                <div className="w-12 h-12 border-[3px] border-cream/40 group-hover:border-red flex items-center justify-center transition-colors duration-500">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cream/70 group-hover:text-red transition-colors duration-500"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-base uppercase tracking-wider text-cream/70 group-hover:text-red transition-colors duration-500">
                    @nancydegnan
                  </p>
                  <p className="font-body text-xs opacity-50 mt-1">
                    Follow the fight on Instagram
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs opacity-40">
              &copy; {new Date().getFullYear()} HYSTERIA Film. All rights
              reserved.
            </p>
            <p className="font-body text-xs opacity-40">
              Made with rage and purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
