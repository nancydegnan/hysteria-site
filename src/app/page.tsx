"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RevealSection, Footer, NewsletterPopup } from "./components";
import { tools } from "./tools/data";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const navLinks = [
    { href: "/about", label: "about" },
    { href: "/tools", label: "shop" },
    { href: "/reading", label: "read/watch/listen" },
    { href: "/community", label: "community" },
    { href: "/hysteria-doc", label: "the documentary" },
    { href: "https://substack.com/@thenocureclub", label: "the newsletter" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* ====== STICKY NAV (appears on scroll) ====== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black transition-transform duration-300 ${
          showStickyNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="ncc-logo text-lg text-black">
            The No Cure Club
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:italic transition-all duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:italic transition-all duration-300"
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
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-mid bg-white px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:italic transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:italic transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>

      {/* ====== RUSSH-STYLE HERO HEADER ====== */}
      <header className="pt-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/jointhenocureclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-60 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://substack.com/@thenocureclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-60 transition-opacity"
                aria-label="Substack"
              >
                <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
            <Link href="/" className="ncc-logo text-[5vw] md:text-[5.5vw] lg:text-[4.5vw] text-black whitespace-nowrap leading-none">
              The No Cure Club
            </Link>
            <a
              href="https://nocureclub.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-[10px] !py-1.5 !px-3 md:!text-xs md:!py-2 md:!px-5"
            >
              join the club
            </a>
          </div>
          <div className="pb-24 md:pb-32"></div>
        </div>
      </header>
      <nav className="border-b-2 border-black px-6 pb-5">
        <div className="max-w-5xl mx-auto hidden md:flex items-center justify-center gap-10 lg:gap-14">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:italic transition-all duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-black hover:italic transition-all duration-300"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        {/* Mobile: dropdown menu */}
        <div className="md:hidden flex flex-col items-center relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sm text-black font-bold hover:italic flex items-center gap-1 transition-all duration-300"
            aria-label="Toggle menu"
          >
            menu
            <svg className={`w-3 h-3 transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {mobileMenuOpen && (
            <div className="flex flex-col items-center gap-3 mt-4 pb-2">
              {navLinks.map((link) =>
                link.href.startsWith("http") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black hover:italic transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-black hover:italic transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* ====== JOIN THE CLUB (HERO) ====== */}
      <section
        id="community"
        className="min-h-[80vh] flex items-center px-6 pt-12 pb-20"
      >
        <div className="max-w-6xl mx-auto text-black">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Collage — left side */}
            <RevealSection>
              <div className="relative w-full warm-tint aspect-[1/1] md:aspect-auto md:min-h-[480px]">
                <img
                  src="/community.jpg"
                  alt="Community"
                  className="absolute top-0 left-0 w-[58%] aspect-[3/4] object-cover shadow-lg"
                  style={{ zIndex: 1 }}
                />
                <img
                  src="/braiding.jpg"
                  alt="Braiding"
                  className="absolute w-[45%] aspect-[4/5] object-cover shadow-lg"
                  style={{ zIndex: 2, top: "10%", left: "50%" }}
                />
                <img
                  src="/community2.jpg"
                  alt="Community"
                  className="absolute w-[42%] aspect-square object-cover shadow-lg top-[45%] md:top-auto md:bottom-0 left-[8%]"
                  style={{ zIndex: 3 }}
                />
              </div>
            </RevealSection>

            {/* Text — right side */}
            <div className="text-center md:text-left">
              <RevealSection>
                <h2 className="text-4xl md:text-5xl tracking-tight mb-3">
                  <span className="font-black">Join</span>{" "}
                  <em className="playfair-italic font-light">the club.</em>
                </h2>
                <p className="playfair text-base text-black leading-snug mb-4">
                  I spent years thinking I was the only person I knew with endometriosis and chronic pelvic pain. Turns out I just didn&apos;t know where to look. This is the space I wish existed when I first searched &ldquo;what do I do if I have endometriosis.&rdquo; Created by one of us, for all of us.
                </p>
              </RevealSection>

              <RevealSection>
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
                    window.open(
                      `https://nocureclub.substack.com/subscribe?email=${encodeURIComponent(email)}`,
                      "_blank"
                    );
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 !bg-black/10 !border-charcoal/30 text-black placeholder-black/40 !rounded-full"
                  />
                  <button type="submit" className="btn-blush whitespace-nowrap">
                    <span className="playfair-italic font-bold">join</span>{" "}<span className="ncc-logo">The No Cure Club</span>
                  </button>
                </form>
                <p className="text-xs text-black mt-4">Drop your email to get our monthly newsletter and we&apos;ll let you know when the next gathering is.</p>
              </RevealSection>
            </div>
          </div>
          <RevealSection>
            <a href="#our-resources" className="flex items-center justify-center gap-2 mt-12 group">
              <p className="playfair-italic text-lg md:text-xl text-black font-light tracking-tight">
                explore our curated resources
              </p>
              <svg className="text-black group-hover:translate-x-1 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section id="resources" className="py-20 md:py-28 px-6 torn-edge-bottom bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-end justify-between mb-2">
              <h2 className="playfair-italic text-xl md:text-2xl tracking-tight">
                tools we love
              </h2>
              <Link
                href="/tools"
                className="text-xs text-black hover:text-black transition-colors border border-black rounded-full px-4 py-1.5 whitespace-nowrap"
              >
                see all
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
                      className={`bg-gray-light overflow-hidden relative rounded-none ${
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
                        <span className="w-1.5 h-1.5 bg-brown inline-block" />
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

      {/* ====== COMMUNITY MEETUPS ====== */}
      <section id="meetups" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto text-black">
          <div className="w-[80%] mx-auto border-t-2 border-foreground/40 mb-12" />
          <RevealSection>
            <div className="max-w-2xl mx-auto">
              <p className="section-label text-sm text-charcoal mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brown inline-block" />
                community
              </p>
              <h2 className="playfair-italic text-xl md:text-2xl lg:text-3xl text-black font-light tracking-tighter mb-2">
                welcome to{" "}<span className="ncc-logo text-black not-italic ml-2">The No Cure Club</span>
              </h2>
              <p className="text-sm font-semibold text-black leading-snug tracking-wider mb-8 mt-4">
                Welcome to the club nobody wanted to join. I&apos;m so glad you&apos;re here.
                <br />
                <em className="font-normal">Started by someone going through it, for everyone going through it. Come find your people.</em>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center max-w-2xl mx-auto">
              <div className="w-48 md:w-56 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                <img src="/community1.jpg" alt="Afternoon Tea Gathering" className="w-full h-full object-cover" />
              </div>
              <Link
                href="/community#la-meetups"
                className="border border-charcoal/30 rounded-none p-6 text-left group hover:bg-chartreuse hover:border-charcoal/30 transition-all duration-300"
              >
                <p className="text-xs font-semibold mb-1 uppercase tracking-wider">
                  los angeles
                </p>
                <h3 className="playfair-italic text-base mb-1">
                  in-person meetups
                </h3>
                <p className="playfair text-xs leading-snug">
                  Intimate live gatherings to bring the LA endo community together. Dates go out to the mailing list first.
                </p>
                <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                  see events &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>
          <div className="w-[80%] mx-auto border-t-2 border-foreground/40 mt-12" />
        </div>
      </section>

      {/* ====== OUR APPROACH ====== */}
      <section id="our-approach" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Collage — left side */}
          <RevealSection>
            <div className="relative w-full aspect-[1/1] md:aspect-auto md:min-h-[520px]">
              <img
                src="/nancy 2.jpg"
                alt="Nancy"
                className="absolute top-0 left-0 w-[60%] aspect-[3/4] object-cover shadow-lg"
                style={{ zIndex: 1 }}
              />
              <img
                src="/nancy5*.png"
                alt="Nancy"
                className="absolute w-[45%] aspect-[4/5] object-cover"
                style={{ zIndex: 2, top: "10%", left: "50%" }}
              />
              <img
                src="/nancy thermotex.JPG"
                alt="Nancy with Thermotex"
                className="absolute w-[40%] aspect-square object-cover shadow-lg top-[45%] md:top-auto md:bottom-0 left-[5%]"
                style={{ zIndex: 3 }}
              />
            </div>
          </RevealSection>

          {/* Editorial text — right side */}
          <RevealSection>
            <p className="section-label text-sm text-charcoal mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brown inline-block" />
              from Nancy
            </p>
            <h2 className="playfair text-lg md:text-xl tracking-tight mb-3 font-bold">
              a letter <em className="playfair-italic">to you.</em>
            </h2>
            <div className="space-y-5 text-base text-black leading-snug font-normal tracking-tight">
              <p>
                If you&apos;ve got endo, or think you might, or if you have pelvic pain, you&apos;re in the right place. Most of us spend years trying to be heard, believed, and desperate for answers. <strong className="text-black">Not here.</strong>
              </p>
              <p>
                <span className="ncc-logo text-black" style={{ fontSize: 'inherit', transform: 'none' }}>The No Cure Club</span> is the community-centered spot where endo and pelvic pain are embraced and supported. I&apos;ve spent years on my own healing journey to put my stage 3 endometriosis and chronic pain into remission. Over those years, I&apos;ve been astounded that there wasn&apos;t a single resource hub that brought together incredible tools, practitioners, courses, books, etc, to the people who need them.
              </p>
              <p>
                This club is my solution. Here, you will find the curated resources that have helped me, or friends I know and trust. We are always growing, so please send us resources to check out! This is truly a community space, built by one of us, for all of us.
              </p>
              <p>
                From great doctors, to vetted courses, genuinely helpful products, self-care that won&apos;t flare your symptoms, and books that can change your life. This is the one-stop shop for everything endo and pelvic pain.
              </p>
              <p>
                I also want to build out the Los Angeles community in person. We&apos;re hosting monthly meet-ups where we will bring a specialist guest and do activities that create nervous system regulation and connection with each other and ourselves.
              </p>
              <p>
                We&apos;d love to have you in our club, you&apos;re always welcome.
              </p>
              <p className="playfair-italic">
                xo, Nancy
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== QUIZ + FEATURED ====== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <h2 className="playfair-italic text-xl md:text-2xl tracking-tight mb-2">
              featured
            </h2>
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide items-stretch -mx-6 px-6">
              {/* Endo questionnaire box */}
              <div className="shrink-0" style={{ width: "min(280px, 70vw)" }}>
                <div className="rounded-none p-6 md:p-8 flex flex-col justify-between h-full" style={{ background: '#e4e0d9' }}>
                  <div>
                    <h2 className="playfair text-base md:text-lg tracking-tight mb-2 font-bold">
                      think you might have <em className="playfair-italic">endo?</em>
                    </h2>
                    <p className="text-sm text-black leading-snug">
                      take the endo symptom questionnaire
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://nyulangone.org/locations/endometriosis-center/endometriosis-symptom-questionnaire"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs"
                    >
                      take the quiz
                    </a>
                  </div>
                </div>
              </div>

              {/* Featured reading */}
              <a
                href="https://www.amazon.com/FLO-Unlock-Hormonal-Advantage-Revolutionize/dp/0062870491"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group"
                style={{ width: "min(280px, 70vw)" }}
              >
                <div className="rounded-none p-5 pb-6 h-full flex flex-col" style={{ background: '#f5f3f0' }}>
                  <div className="w-full aspect-square rounded-none overflow-hidden mb-4">
                    <img
                      src="/in the flo.jpg"
                      alt="In the FLO by Alisa Vitti"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    featured reading
                  </p>
                  <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                    In the FLO
                  </h3>
                  <p className="text-xs text-charcoal mb-2">Alisa Vitti</p>
                  <p className="text-xs text-black leading-[1.4]">
                    A guide to optimizing your cycle through food, exercise, and lifestyle so your hormones work for you, not against you.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    shop now &rarr;
                  </span>
                </div>
              </a>

              {/* Featured podcast */}
              <a
                href="https://www.youregreat.com/blog/2025/6/20/podcast-56-the-fundamentals-of-great-health-with-dr-karen-hurd"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group"
                style={{ width: "min(280px, 70vw)" }}
              >
                <div className="rounded-none p-5 pb-6 h-full flex flex-col" style={{ background: '#f5f3f0' }}>
                  <div className="w-full aspect-square rounded-none overflow-hidden mb-4">
                    <img
                      src="/you're great.webp"
                      alt="You're Great Podcast"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    featured podcast
                  </p>
                  <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                    The Fundamentals of Great Health
                  </h3>
                  <p className="text-xs text-charcoal mb-2">Unique Hammond</p>
                  <p className="text-xs text-black leading-[1.4]">
                    Dr. Karen Hurd breaks down the building blocks of health, from beans to blood sugar, in this must-listen episode.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    listen now &rarr;
                  </span>
                </div>
              </a>

              {/* Featured watching */}
              <a
                href="https://www.bbc.co.uk/programmes/p0cvfrj5"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group"
                style={{ width: "min(280px, 70vw)" }}
              >
                <div className="rounded-none p-5 pb-6 h-full flex flex-col" style={{ background: '#f5f3f0' }}>
                  <div className="w-full aspect-square rounded-none overflow-hidden mb-4">
                    <img
                      src="/this is endometriosis.jpg"
                      alt="This Is Endometriosis"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    featured watching
                  </p>
                  <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                    This Is Endometriosis
                  </h3>
                  <p className="text-xs text-charcoal mb-2">BAFTA-winning short film</p>
                  <p className="text-xs text-black leading-[1.4]">
                    A powerful, intimate look at what it really means to live with endometriosis, told by the people who know it best.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    watch now &rarr;
                  </span>
                </div>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== RESOURCES ====== */}
      <section id="our-resources" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-end justify-between mb-2">
              <h2 className="playfair-italic text-xl md:text-2xl tracking-tight">
                our resource center
              </h2>
              <Link
                href="/reading"
                className="text-xs text-black hover:text-black transition-colors border border-black rounded-full px-4 py-1.5 whitespace-nowrap"
              >
                see all
              </Link>
            </div>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/practitioners"
                className="group border border-[#665e4c] rounded-none overflow-hidden hover:bg-chartreuse transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src="/dr yang.jpg" alt="Practitioners" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="px-8 pt-4 pb-6 text-left">
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    practitioners
                  </p>
                  <h3 className="playfair text-xl mb-1">
                    doctors <em className="playfair-italic">who listen.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-snug">
                    Vetted specialists and practitioners across the country.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/tools"
                className="group border border-[#665e4c] rounded-none overflow-hidden hover:bg-chartreuse transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src="/tools.jpg" alt="Tools" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="px-8 pt-4 pb-6 text-left">
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    tools
                  </p>
                  <h3 className="playfair text-xl mb-1">
                    products <em className="playfair-italic">that help.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-snug">
                    Curated tools for managing daily life with endo.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/reading"
                className="group border border-[#665e4c] rounded-none overflow-hidden hover:bg-chartreuse transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src="/read 2.jpg" alt="Reading" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" style={{ objectPosition: "center 80%" }} />
                </div>
                <div className="px-8 pt-4 pb-6 text-left">
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    reading
                  </p>
                  <h3 className="playfair text-xl mb-1">
                    knowledge <em className="playfair-italic">is power.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-snug">
                    Books, podcasts, films, and research worth your time.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </RevealSection>
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
              THERE ARE OVER 190 MILLION OF US WORLDWIDE &bull; THE NO CURE CLUB &bull; YOU ARE UNDERSTOOD HERE &bull; YOUR PAIN MATTERS TO US &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
