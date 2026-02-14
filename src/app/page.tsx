"use client";

import { useEffect, useRef } from "react";

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

const PUNK_TAG_STYLES = [
  "bg-red text-cream",
  "bg-yellow text-black",
  "bg-hot-pink text-cream",
  "bg-black text-cream",
  "bg-red text-cream",
];

export default function Home() {
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

      {/* ====== DIVIDER ====== */}
      <div className="bg-black torn-bottom h-2" />

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
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.9]">
                The film that
                <br />
                <span className="text-hot-pink">
                  refuses
                </span>{" "}
                to be
                <br />
                <span className="text-hot-pink">silent.</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <RevealSection>
              <div className="space-y-8">
                <p className="font-body text-base md:text-lg leading-[1.8]">
                  <strong>HYSTERIA</strong> rips the silence off one of the most
                  common yet criminally under-researched diseases in the world.{" "}
                  <span className="font-bold text-hot-pink">Endometriosis</span>{" "}
                  affects an estimated 190 million people globally — and most of
                  them spend nearly a decade just trying to get someone to
                  believe them.
                </p>
                <p className="font-body text-base md:text-lg leading-[1.8]">
                  This film follows my journey to put my stage 3 endometriosis
                  into remission. I work with cutting-edge specialists,
                  researchers, and biotech companies to discover the path to
                  treating this disease and healing my body. Along the way, I
                  discover the hidden link between{" "}
                  <span className="font-bold text-hot-pink">WITCHES</span>,{" "}
                  <span className="font-bold text-hot-pink">HYSTERIA</span>,
                  and{" "}
                  <span className="font-bold text-hot-pink">ENDOMETRIOSIS</span>{" "}
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
                    &ldquo;It&apos;s not normal. It&apos;s not in your head. And
                    it&apos;s not just period pain.&rdquo;
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

                {/* Bold stat card — black with red accent */}
                <div className="clip-reveal-parent relative bg-black text-cream p-8 border-l-[6px] border-red card-hover cursor-default">
                  <div className="clip-reveal absolute inset-0 bg-red" />
                  <p className="relative z-10 font-heading text-4xl md:text-5xl uppercase leading-tight">
                    $80B+
                  </p>
                  <p className="relative z-10 font-body text-sm mt-4 opacity-80 font-bold">
                    Annual economic cost of endometriosis in the U.S. alone.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Zine keywords — bold punk colors */}
          <RevealSection
            stagger
            className="mt-20 md:mt-28 flex flex-wrap gap-4 justify-center"
          >
            {[
              "UNDERFUNDED",
              "MISDIAGNOSED",
              "DISMISSED",
              "INVISIBLE",
              "EPIDEMIC",
            ].map((word, i) => (
              <span
                key={word}
                className={`font-heading text-xl md:text-2xl ${PUNK_TAG_STYLES[i]} px-5 py-3 rotate-[-1deg] hover:rotate-[1deg] hover:scale-105 transition-all duration-500 cursor-default`}
              >
                {word}
              </span>
            ))}
          </RevealSection>

          {/* ====== MY STORY ====== */}
          <RevealSection className="mt-28 md:mt-40">
            <div className="max-w-3xl mx-auto">
              <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
                // My Story
              </p>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.9] mb-12">
                How I
                <br />
                <span className="text-hot-pink">got here.</span>
              </h2>
              <div className="space-y-6 font-body text-base md:text-lg leading-[1.9]">
                <p>
                  In 2020, when the world was falling apart, so did my body. My
                  period became so painful that I was vomiting and blacking out
                  for hours at a time. Doctors told me this was normal.{" "}
                  <strong>I would not accept.</strong>
                </p>
                <p>
                  One year later I self-diagnosed and found a surgeon who would
                  do diagnostic surgery. Turns out, I had stage 3 endometriosis.
                  When I walked into his office for the post-op, ready to hear
                  about my treatment plan, he looked at me with a sigh and said
                  my only option was birth control or putting my body into
                  medical menopause.
                </p>
                <p>
                  I was devastated. I knew that birth control would only mask the
                  symptoms while the disease grew internally, and that I&apos;d
                  be back in another surgeon&apos;s office in a number of years.
                  But, desperate to get my life back, I took the birth control
                  and went on with my life.
                </p>
                <p>
                  Now, I&apos;m determined to find a better solution. I do not
                  accept that this is &ldquo;just something I have to live
                  with&rdquo; or that chronic illness needs to become a second
                  full-time job.{" "}
                  <span className="font-heading text-hot-pink text-xl md:text-2xl uppercase">
                    No.
                  </span>
                </p>
                <p>
                  I have set out on an experiment to put my endo into remission.
                  Not less pain &mdash;{" "}
                  <strong className="text-hot-pink">NO PAIN.</strong> I want my
                  story to bring hope and encouragement to anyone out there
                  suffering with period pain. I want you to know there{" "}
                  <em>are</em> answers, and I am determined to bring them to the
                  masses.
                </p>
                <p className="opacity-70">
                  Thank you for following along as we build this project.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== RESOURCES SECTION ====== */}
      <section id="resources" className="relative bg-black text-cream py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="mb-16 md:mb-20">
              <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
                // Resources
              </p>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-cream uppercase leading-[0.9]">
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
              {[
                {
                  category: "Practitioner",
                  title: "Coming Soon",
                  description: "Doctors and specialists who actually listen.",
                },
                {
                  category: "Tool",
                  title: "Coming Soon",
                  description: "Products and tools that help manage daily life.",
                },
                {
                  category: "Reading",
                  title: "Coming Soon",
                  description: "Books, articles, and research worth your time.",
                },
              ].map((resource) => (
                <div
                  key={resource.category}
                  className="border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 card-hover cursor-default"
                >
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-hot-pink">
                    {resource.category}
                  </span>
                  <h3 className="font-heading text-2xl uppercase mt-3 mb-4">
                    {resource.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed opacity-60">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== STRIPE DIVIDER ====== */}
      <div className="stripes h-8 border-y-[3px] border-black" />

      {/* ====== HOT PINK CALLOUT — Corita Kent / protest poster ====== */}
      <section className="bg-hot-pink py-20 md:py-28 px-6 print-grain relative">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <RevealSection>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.85]">
              The war on
              <br />
              women&apos;s pain
              <br />
              <span className="text-cream">ends now.</span>
            </h2>
          </RevealSection>
        </div>
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
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[7rem] uppercase leading-[0.85] mb-8">
              <span className="text-cream">Join</span>{" "}
              <span className="text-hot-pink">the</span>
              <br />
              <span className="text-cream">movement.</span>
            </h2>
          </RevealSection>

          <RevealSection>
            <p className="font-body text-base md:text-lg leading-[1.8] mb-4 max-w-xl mx-auto opacity-90">
              This isn&apos;t just a film — it&apos;s a community. Sign up to
              get updates on screenings, action campaigns, and ways to fight
              back.
            </p>
          </RevealSection>

          {/* Live Events Callout */}
          <RevealSection>
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
                together — panels, screenings, and honest conversations about
                living with this disease. Dates and locations go out to the
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
              <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-black uppercase leading-[0.9]">
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
                  distribution — getting this story in front of the people and
                  policymakers who need to see it.
                </p>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="#"
                    className="btn-punk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </a>
                  <a href="#community" className="btn-punk-outline">
                    Spread the Word
                  </a>
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
            <h3 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-outline-cream leading-[0.85] select-none">
              HYSTERIA
            </h3>
            <p className="font-body text-sm md:text-base leading-relaxed opacity-50 mt-6 max-w-md">
              A documentary film about endometriosis, medical gaslighting, and
              the fight for recognition.
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
                href="#"
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
                    @hysteriafilm
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
