"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealSection, Footer, NewsletterPopup } from "./components";
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
    { href: "/about", label: "about" },
    { href: "/tools", label: "shop" },
    { href: "/reading", label: "read" },
    { href: "#community", label: "community" },
    { href: "/hysteria-doc", label: "the documentary" },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <NewsletterPopup />
      {/* SVG filter for distressed text — hidden, referenced by CSS */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="distress-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ====== STICKY NAV ====== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl ncc-logo text-black"
          >
            No Cure Club
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://nocureclub.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !py-2 !px-5"
            >
              join the club
            </a>
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
                  className="text-sm text-black hover:text-black transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:text-black transition-colors duration-300"
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
      <section className="min-h-[90vh] flex items-center justify-center px-6 pt-24 grain-bg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
          {/* Left image */}
          <div className="hidden md:block">
            <img
              src="/carla sutera.webp"
              alt="Carla Sutera"
              className="w-full object-cover aspect-[3/4] rounded-2xl"
            />
          </div>

          {/* Center text */}
          <div className="text-center">
          <RevealSection>
            <h1 className="playfair-italic text-xl md:text-2xl lg:text-3xl text-black font-light tracking-tighter">
              welcome to the{" "}<span className="ncc-logo text-black not-italic ml-2">No Cure Club</span>
            </h1>
            <p className="text-base md:text-lg font-bold text-black -mt-1">*curation for endometriosis</p>
            <p className="text-sm font-semibold text-black mt-8 max-w-2xl mx-auto leading-relaxed tracking-wider">
              Welcome to the club nobody wanted to join. I&apos;m so glad you&apos;re here.
              <br />
              <em className="font-normal">Started by someone going through it, for everyone going through it.</em>
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <a href="#our-resources" className="btn-primary" style={{ background: 'var(--white)', borderColor: 'var(--black)', borderWidth: '2px', color: 'var(--black)' }}>
                explore resources
              </a>
            </div>
          </RevealSection>
          </div>

          {/* Right image */}
          <div className="hidden md:block">
            <img
              src="/braiding.jpg"
              alt="Braiding"
              className="w-full object-cover aspect-[3/4] rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section id="resources" className="py-20 md:py-28 px-6 torn-edge-bottom bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-end justify-between mb-2">
              <h2 className="playfair text-base md:text-lg tracking-tight">
                tools <em>we love.</em>
              </h2>
              <Link
                href="/tools"
                className="playfair-italic text-sm text-black hover:text-black transition-colors"
              >
                see all &rarr;
              </Link>
            </div>
          </RevealSection>

          {/* Goop-style single-row horizontal scroll with mixed heights */}
          <RevealSection>
            <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide items-start -mx-6 px-6">
              {tools.slice(0, 6).map((tool, i) => {
                const isTall = i === 1 || i === 2;
                const desc = tool.description.split(/[.—]/)[0].trim().toLowerCase();
                return (
                  <a
                    key={tool.name}
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-card group shrink-0"
                    style={{ width: isTall ? "min(300px, 55vw)" : "min(240px, 45vw)" }}
                  >
                    <div
                      className={`bg-gray-light overflow-hidden relative film-grain rounded-xl ${
                        isTall ? "aspect-[2/3]" : "aspect-[4/5]"
                      }`}
                    >
                      {tool.image && (
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-blush inline-block" />
                        {tool.company}
                      </p>
                      <span className="text-xs underline opacity-0 group-hover:opacity-100 transition-opacity">
                        shop now
                      </span>
                    </div>
                    <p className="playfair text-sm mt-1.5 leading-snug text-black">
                      {desc}
                    </p>
                  </a>
                );
              })}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== OUR APPROACH (Rhode 3 style: text left, image right) ====== */}
      <section id="our-approach" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <p className="section-label text-sm text-black mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blush inline-block" />
              our approach
            </p>
            <h2 className="playfair text-lg md:text-xl tracking-tight mb-3 font-bold">
              disease, or <em className="playfair-italic">lifestyle?</em>
            </h2>
            <div className="space-y-5 text-base text-black leading-[1.85] font-normal tracking-tight">
              <p>
                If you&apos;ve got endo, or think you might, you&apos;re in the right place.
                Most of us spend years trying to be heard, believed, and desperate
                for answers. <strong className="text-black">Not here.</strong>
              </p>
              <p>
                <span className="ncc-logo text-black" style={{ fontSize: 'inherit', transform: 'none' }}>No Cure Club</span> is
                the spot where endo gets embraced, supported, and where we get
                celebrated as the badass people we are. Here, you don&apos;t need to
                fight anymore. We&apos;ve got you covered.
              </p>
              <p>
                From great doctors, to vetted courses, genuinely helpful products,
                self-care that won&apos;t flare your symptoms, and books that can
                change your life. This is the one-stop shop for everything endo.
                We&apos;re always growing and adding to our list of resources, and
                community is at the center of everything we do.
              </p>
              <p>
                The world tells us there&apos;s no solution. Here is your bff resource
                for living and loving yourself with endo. We see you, we know
                it&apos;s not easy, and we&apos;re here to help take the edge off.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="mailto:hello@nocureclub.com?subject=Resource%20Suggestion"
                className="btn-primary"
                style={{ background: 'var(--white)', borderColor: 'var(--black)', borderWidth: '2px', color: 'var(--black)' }}
              >
                share a resource with us
              </a>
            </div>
          </RevealSection>

          <RevealSection>
            <img
              src="/girl group.jpg"
              alt="Girl group"
              className="w-full object-cover aspect-[4/5] rounded-2xl"
            />
          </RevealSection>
        </div>
      </section>

      {/* ====== QUIZ + FEATURED ====== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Endo questionnaire box */}
          <RevealSection>
            <div className="bg-gray-light rounded-2xl px-8 pt-8 pb-12 md:px-10 md:pt-10 md:pb-14 flex flex-col justify-between h-full">
              <div>
                <h2 className="playfair text-lg md:text-xl tracking-tight mb-3 font-bold">
                  think you might have <em className="playfair-italic">endo?</em>
                </h2>
                <p className="text-base text-black leading-relaxed">
                  take the endo symptom questionnaire
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://nyulangone.org/locations/endometriosis-center/endometriosis-symptom-questionnaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  take the quiz
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Featured reading */}
          <RevealSection>
            <a
              href="https://www.amazon.com/FLO-Unlock-Hormonal-Advantage-Revolutionize/dp/0062870491"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-4 group h-full"
            >
              <img
                src="/in the flo.jpg"
                alt="In the FLO by Alisa Vitti"
                className="w-full object-cover aspect-square !rounded-none"
              />
              <div>
                <p className="text-xs font-semibold text-blush mb-2 uppercase tracking-wider">
                  featured reading
                </p>
                <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                  In the FLO
                </h3>
                <p className="text-xs text-black/60">Alisa Vitti</p>
                <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                  shop now &rarr;
                </span>
              </div>
            </a>
          </RevealSection>

          {/* Featured podcast */}
          <RevealSection>
            <a
              href="https://www.youregreat.com/blog/2025/6/20/podcast-56-the-fundamentals-of-great-health-with-dr-karen-hurd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-4 group h-full"
            >
              <img
                src="/you're great.webp"
                alt="You're Great Podcast"
                className="w-full object-cover aspect-square !rounded-none"
              />
              <div>
                <p className="text-xs font-semibold text-blush mb-2 uppercase tracking-wider">
                  featured podcast
                </p>
                <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                  The Fundamentals of Great Health
                </h3>
                <p className="text-xs text-black/60">Unique Hammond</p>
                <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                  listen now &rarr;
                </span>
              </div>
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ====== RESOURCES ====== */}
      <section id="our-resources" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-end justify-between mb-2">
              <h2 className="playfair text-base md:text-lg tracking-tight">
                our <em>resource center.</em>
              </h2>
              <Link
                href="/reading"
                className="playfair-italic text-sm text-black hover:text-black transition-colors"
              >
                see all &rarr;
              </Link>
            </div>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/practitioners"
                className="group border border-black rounded-2xl overflow-hidden card-hover-pink"
              >
                <div className="overflow-hidden">
                  <img src="/doctor.jpg" alt="Practitioners" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold text-blush mb-3 uppercase tracking-wider">
                    practitioners
                  </p>
                  <h3 className="playfair text-xl mb-3">
                    doctors <em className="playfair-italic">who listen.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-relaxed">
                    Vetted specialists and practitioners across the country.
                  </p>
                  <span className="text-sm font-medium inline-block mt-4 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/tools"
                className="group border border-black rounded-2xl overflow-hidden card-hover-pink"
              >
                <div className="overflow-hidden">
                  <img src="/tools.jpg" alt="Tools" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold text-blush mb-3 uppercase tracking-wider">
                    tools
                  </p>
                  <h3 className="playfair text-xl mb-3">
                    products <em className="playfair-italic">that help.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-relaxed">
                    Curated tools for managing daily life with endo.
                  </p>
                  <span className="text-sm font-medium inline-block mt-4 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/reading"
                className="group border border-black rounded-2xl overflow-hidden card-hover-pink"
              >
                <div className="overflow-hidden">
                  <img src="/read 2.jpg" alt="Reading" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" style={{ objectPosition: "center 80%" }} />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold text-blush mb-3 uppercase tracking-wider">
                    reading
                  </p>
                  <h3 className="playfair text-xl mb-3">
                    knowledge <em className="playfair-italic">is power.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-relaxed">
                    Books, podcasts, films, and research worth your time.
                  </p>
                  <span className="text-sm font-medium inline-block mt-4 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== COMMUNITY ====== */}
      <section
        id="community"
        className="py-20 md:py-28 px-6"
      >
        <div
          className="max-w-3xl mx-auto rounded-2xl p-10 md:p-14 text-center text-black"
          style={{ backgroundColor: "#d1e2ff" }}
        >
          <RevealSection>
            <p className="section-label text-sm text-black mb-4">
              community
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
              <span className="font-black">Join</span>{" "}
              <em className="playfair-italic font-light">the movement.</em>
            </h2>
            <p className="playfair text-base text-black/70 leading-relaxed mb-4 max-w-xl mx-auto">
              We&apos;re building a community of people who refuse to suffer in
              silence. Sign up for updates on gatherings, resources, and ways to
              get involved.
            </p>
          </RevealSection>

          <RevealSection id="meetups">
            <div className="my-10 border border-black/20 rounded-xl p-8 max-w-lg mx-auto text-left">
              <p className="text-xs font-semibold text-black mb-3 uppercase tracking-wider">
                los angeles
              </p>
              <h3 className="playfair text-xl mb-3">
                endo community meetups
              </h3>
              <p className="playfair text-sm text-black/60 leading-relaxed">
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
                className="flex-1 !bg-black/10 !border-black/20 text-black placeholder-black/40 !rounded-full"
              />
              <button type="submit" className="btn-blush whitespace-nowrap">
                subscribe
              </button>
            </form>
            <p className="text-xs text-black/40 mt-4">no spam. just updates.</p>
          </RevealSection>
        </div>
      </section>

      {/* ====== DONATION ====== */}
      <section id="donate" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <p className="section-label text-sm text-black mb-4">
                support
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                <span className="font-black">Fund</span>{" "}
                <em className="playfair-italic font-normal">the fight.</em>
              </h2>
              <p className="playfair text-base text-black leading-[1.85] mb-8">
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
                  <h3 className="text-lg font-semibold mb-2">tax-deductible</h3>
                  <p className="playfair text-sm text-black leading-relaxed">
                    Fiscally sponsored and tax-deductible to the fullest extent
                    of the law.
                  </p>
                </div>
                <div className="bg-gray-light p-8">
                  <h3 className="text-lg font-semibold mb-2">
                    community-powered
                  </h3>
                  <p className="playfair text-sm text-black leading-relaxed">
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
      <div className="ticker-fixed overflow-hidden whitespace-nowrap py-3 border-t-2 border-black">
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
