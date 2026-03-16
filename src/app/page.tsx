"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealSection, Footer } from "./components";
import { tools } from "./tools/data";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navLinks = [
    { href: "/hysteria-doc", label: "documentary" },
    { href: "/practitioners", label: "practitioners" },
    { href: "/tools", label: "shop" },
    { href: "/reading", label: "read" },
    { href: "#community", label: "community" },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* ====== STICKY NAV ====== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-mid">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-black uppercase"
          >
            NCC
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-text hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-text hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-mid bg-white px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-text hover:text-black transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-text hover:text-black transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>

      {/* ====== HERO ====== */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <RevealSection>
            <p className="font-serif-italic text-lg md:text-xl text-gray-text mb-6">
              an endometriosis community
            </p>
            <h1 className="text-[4.5rem] md:text-[8rem] lg:text-[11rem] font-black uppercase tracking-tighter text-black leading-[0.85]">
              No Cure
              <br />
              Club
            </h1>
            <p className="font-serif text-lg md:text-xl text-gray-text mt-8 max-w-2xl mx-auto leading-relaxed">
              resources, <em className="text-black">stories</em>, and solidarity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <a href="#resources" className="btn-primary">
                explore resources
              </a>
              <Link href="/hysteria-doc" className="btn-secondary">
                watch the doc
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section id="resources" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-serif-italic text-sm text-gray-text mb-2">
                  from our editors
                </p>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                  tools <em>we love.</em>
                </h2>
              </div>
              <Link
                href="/tools"
                className="font-serif-italic text-sm text-gray-text hover:text-black transition-colors"
              >
                see all &rarr;
              </Link>
            </div>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {tools.slice(0, 6).map((tool) => (
                <a
                  key={tool.name}
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card group"
                >
                  <div className="aspect-[4/5] bg-gray-light overflow-hidden">
                    {tool.image && (
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="pt-4">
                    <p className="font-serif-italic text-xs text-gray-text">
                      {tool.company}
                    </p>
                    <h3 className="font-serif text-base mt-1">{tool.name}</h3>
                    <p className="font-serif text-sm text-blush mt-1">{tool.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== WHAT IS ENDO? ====== */}
      <section id="what-is-endo" className="py-20 md:py-28 px-6 bg-gray-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <RevealSection>
              <p className="font-serif-italic text-sm text-gray-text mb-4">
                about the disease
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">The disease</span>{" "}
                <em className="font-serif-italic font-normal">no one talks about.</em>
              </h2>
              <div className="space-y-5 font-serif text-base text-gray-text leading-[1.85]">
                <p>
                  <strong className="text-black">Endometriosis</strong> is a
                  chronic, inflammatory disease where tissue similar to the
                  uterine lining grows outside the uterus — on the ovaries,
                  bowel, bladder, and beyond. It causes debilitating pain,
                  fatigue, infertility, and organ damage.
                </p>
                <p>
                  It affects an estimated{" "}
                  <strong className="text-black">190 million</strong> people
                  worldwide — roughly 1 in 10 women and people assigned female at
                  birth. Despite its prevalence, it takes an average of{" "}
                  <strong className="text-black">7-10 years</strong> to receive a
                  diagnosis.
                </p>
                <p>
                  There is <strong className="text-blush">no cure.</strong> The
                  first-line treatment hasn&apos;t changed since 1957. Research is
                  chronically underfunded. But awareness is growing, and
                  communities like this one are fighting to change the narrative.
                </p>
              </div>
            </RevealSection>

            <RevealSection stagger>
              <div className="space-y-4">
                <div className="bg-white p-8">
                  <p className="text-4xl font-black tracking-tight">
                    7&ndash;10 <em className="font-serif-italic font-light">years</em>
                  </p>
                  <p className="font-serif text-sm text-gray-text mt-2">
                    Average time to diagnosis
                  </p>
                </div>
                <div className="bg-white p-8">
                  <p className="text-4xl font-black tracking-tight">
                    1 in 10
                  </p>
                  <p className="font-serif text-sm text-gray-text mt-2">
                    Women and AFAB individuals affected
                  </p>
                </div>
                <div className="bg-white p-8">
                  <p className="text-4xl font-black tracking-tight text-blush">
                    $2<em className="font-serif-italic font-light">/year</em>
                  </p>
                  <p className="font-serif text-sm text-gray-text mt-2">
                    NIH research funding per patient
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== MY STORY ====== */}
      <section id="my-story" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12 md:gap-20 items-start">
            <RevealSection>
              <p className="font-serif-italic text-sm text-gray-text mb-4">
                my story
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">How I</span>{" "}
                <em className="font-serif-italic font-normal">got here.</em>
              </h2>
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
              </div>
              <div className="mt-8">
                <Link href="/hysteria-doc#my-story" className="btn-secondary">
                  read the full story &rarr;
                </Link>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="overflow-hidden">
                <img
                  src="/_MG_4378.jpg"
                  alt="Nancy portrait"
                  className="w-full aspect-[3/4] object-cover"
                  style={{ objectPosition: "center 80%" }}
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== RESOURCES ====== */}
      <section className="py-20 md:py-28 px-6 bg-gray-light">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="mb-12">
              <p className="font-serif-italic text-sm text-gray-text mb-2">
                our resources
              </p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                read, watch, <em>listen.</em>
              </h2>
            </div>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/practitioners"
                className="group bg-white p-8 hover:shadow-sm transition-shadow duration-300"
              >
                <p className="font-serif-italic text-sm text-blush mb-3">
                  practitioners
                </p>
                <h3 className="font-serif text-xl mb-3">
                  doctors <em>who listen.</em>
                </h3>
                <p className="font-serif text-sm text-gray-text leading-relaxed">
                  Vetted specialists and practitioners across the country.
                </p>
                <span className="font-serif-italic inline-block mt-4 text-sm text-black group-hover:translate-x-1 transition-transform duration-300">
                  explore &rarr;
                </span>
              </Link>

              <Link
                href="/tools"
                className="group bg-white p-8 hover:shadow-sm transition-shadow duration-300"
              >
                <p className="font-serif-italic text-sm text-blush mb-3">
                  tools
                </p>
                <h3 className="font-serif text-xl mb-3">
                  products <em>that help.</em>
                </h3>
                <p className="font-serif text-sm text-gray-text leading-relaxed">
                  Curated tools for managing daily life with endo.
                </p>
                <span className="font-serif-italic inline-block mt-4 text-sm text-black group-hover:translate-x-1 transition-transform duration-300">
                  explore &rarr;
                </span>
              </Link>

              <Link
                href="/reading"
                className="group bg-white p-8 hover:shadow-sm transition-shadow duration-300"
              >
                <p className="font-serif-italic text-sm text-blush mb-3">
                  reading
                </p>
                <h3 className="font-serif text-xl mb-3">
                  knowledge <em>is power.</em>
                </h3>
                <p className="font-serif text-sm text-gray-text leading-relaxed">
                  Books, podcasts, films, and research worth your time.
                </p>
                <span className="font-serif-italic inline-block mt-4 text-sm text-black group-hover:translate-x-1 transition-transform duration-300">
                  explore &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== QUOTE ====== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <blockquote>
              <p className="font-serif-italic text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-black">
                &ldquo;I&apos;m tired of being enclosed here. I&apos;m wearying
                to escape into that glorious world, and to be always there: not
                seeing it dimly through tears, and yearning for it through the
                walls of an aching heart.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-serif-italic text-sm text-gray-text">
                  Catherine Earnshaw, Wuthering Heights
                </p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== COMMUNITY ====== */}
      <section
        id="community"
        className="py-20 md:py-28 px-6 bg-black text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <p className="font-serif-italic text-sm text-blush mb-4">
              community
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
              <span className="font-black">Join</span>{" "}
              <em className="font-serif-italic font-light">the movement.</em>
            </h2>
            <p className="font-serif text-base text-white/70 leading-relaxed mb-4 max-w-xl mx-auto">
              We&apos;re building a community of people who refuse to suffer in
              silence. Sign up for updates on gatherings, resources, and ways to
              get involved.
            </p>
          </RevealSection>

          <RevealSection id="meetups">
            <div className="my-10 border border-white/20 p-8 max-w-lg mx-auto text-left">
              <p className="font-serif-italic text-sm text-blush mb-3">
                los angeles
              </p>
              <h3 className="font-serif text-xl mb-3">
                endo community meetups
              </h3>
              <p className="font-serif text-sm text-white/60 leading-relaxed">
                Live events to bring the endo community together. Dates go out
                to the mailing list first.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 !bg-white/10 !border-white/20 text-white placeholder-white/40 !rounded-full"
              />
              <button type="submit" className="btn-blush whitespace-nowrap">
                subscribe
              </button>
            </form>
            <p className="text-xs text-white/40 mt-4">no spam. just updates.</p>
          </RevealSection>
        </div>
      </section>

      {/* ====== DONATION ====== */}
      <section id="donate" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <p className="font-serif-italic text-sm text-gray-text mb-4">
                support
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">Fund</span>{" "}
                <em className="font-serif-italic font-normal">the fight.</em>
              </h2>
              <p className="font-serif text-base text-gray-text leading-[1.85] mb-8">
                Your contribution goes toward resources, community events,
                advocacy, and getting the HYSTERIA documentary in front of the
                people and policymakers who need to see it.
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
                  {copied ? "copied!" : "share"}
                </button>
              </div>
            </RevealSection>

            <RevealSection stagger>
              <div className="space-y-4">
                <div className="bg-gray-light p-8">
                  <h3 className="font-serif text-lg mb-2">tax-deductible</h3>
                  <p className="font-serif text-sm text-gray-text leading-relaxed">
                    Fiscally sponsored and tax-deductible to the fullest extent
                    of the law.
                  </p>
                </div>
                <div className="bg-gray-light p-8">
                  <h3 className="font-serif text-lg mb-2">
                    community-powered
                  </h3>
                  <p className="font-serif text-sm text-gray-text leading-relaxed">
                    Built by patients, for everyone. Every dollar fuels
                    advocacy, community gatherings, and getting this story told.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <div className="pb-12">
        <Footer />
      </div>

      {/* ====== FIXED TICKER ====== */}
      <div className="ticker-fixed overflow-hidden whitespace-nowrap py-3 border-t border-gray-mid">
        <div className="ticker-scroll inline-block">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="text-xs font-black tracking-[0.3em] uppercase text-black mx-4"
            >
              NO CURE CLUB &bull; YOU ARE NOT ALONE &bull; 190 MILLION WORLDWIDE
              &bull; DEMAND BETTER &bull; NO CURE CLUB &bull; YOU ARE NOT ALONE
              &bull; 190 MILLION WORLDWIDE &bull; DEMAND BETTER &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
