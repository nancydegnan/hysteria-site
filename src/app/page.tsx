"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RevealSection, Footer, GatheringsPopup, JoinTheClubForm } from "./components";
import { tools } from "./tools/data";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const navLinks = [
    { href: "/about", label: "the origin", desc: "*about the club" },
    { href: "/tools", label: "the outfitter", desc: "*shop our picks" },
    { href: "/reading", label: "the library", desc: "*what's worth reading" },
    { href: "/community", label: "the chapter", desc: "*join our next gathering" },
    { href: "/hysteria-doc", label: "the documentary", desc: "*healing endo" },
    { href: "https://thenocureclub.substack.com", label: "the newsletter", desc: "*bi-weekly articles" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GatheringsPopup />
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
        className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-black transition-transform duration-300 ${
          showStickyNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="ncc-logo text-lg text-black">
            The No Cure Club
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <span key={link.href} className="relative group">
                <span className="playfair-italic text-[10px] absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {link.desc}
                </span>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-black hover:italic transition-all duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-xs text-black hover:italic transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                )}
              </span>
            ))}
            <JoinTheClubForm
              formClassName="flex items-center gap-1.5"
              inputClassName="w-28 !bg-gray-light !border-gray-mid !rounded-none !text-[10px] !py-1.5"
              buttonClassName="btn-primary !text-[10px] !py-1.5 !px-4 whitespace-nowrap"
              successClassName="text-[10px] font-semibold text-black"
              errorClassName="text-[10px] text-red-600"
            />
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
          <div className="md:hidden border-t border-gray-mid bg-background px-6 py-4 flex flex-col gap-3">
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
                href="https://thenocureclub.substack.com"
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
            <div className="self-center md:self-auto mt-8 md:mt-0">
              <Link href="/" className="ncc-logo text-[9vw] md:text-[5.5vw] lg:text-[4.5vw] text-black whitespace-nowrap leading-none">
                The No Cure Club
              </Link>
              <p className="playfair-italic text-xs md:text-sm text-black -mt-2 text-left">
                just because there&apos;s no &ldquo;cure&rdquo; doesn&apos;t mean we can&apos;t heal
              </p>
            </div>
            <div className="hidden md:block">
              <JoinTheClubForm
                formClassName="flex items-center gap-1.5"
                inputClassName="w-28 md:w-36 !bg-gray-light !border-gray-mid !rounded-none !text-[10px] !py-1.5 md:!text-xs md:!py-2"
                buttonClassName="btn-primary !text-[10px] !py-1.5 !px-3 md:!text-xs md:!py-2 md:!px-5 whitespace-nowrap"
                successClassName="text-[10px] md:text-xs font-semibold text-black"
                errorClassName="text-[10px] md:text-xs text-red-600"
              />
            </div>
          </div>
          <div className="pb-24 md:pb-32"></div>
        </div>
      </header>
      <nav className="border-b-2 border-black px-6 pb-5">
        <div className="max-w-5xl mx-auto hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <span key={link.href} className="relative group">
              <span className="playfair-italic text-[11px] absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {link.desc}
              </span>
              {link.href.startsWith("http") ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:italic transition-all duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm text-black hover:italic transition-all duration-300"
                >
                  {link.label}
                </Link>
              )}
            </span>
          ))}
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
          <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
            {/* Image — left side */}
            <RevealSection>
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src="/NANCY/Monika Photos/NancyNoCureClub-7.jpg"
                  alt="Nancy"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>

            {/* Text — right side */}
            <div className="text-center md:text-left">
              <RevealSection>
                <h2 className="text-4xl md:text-5xl tracking-tight mb-3">
                  <span className="font-black">join</span>{" "}
                  <em className="playfair-italic font-light">the club.</em>
                </h2>
                <p className="playfair text-base text-black leading-snug mb-4">
                  I spent years thinking I was the only person I knew with endometriosis and chronic pelvic pain. Turns out I just didn&apos;t know where to look. This is the space I wish existed when I first searched &ldquo;what do I do if I have endometriosis.&rdquo; Created by one of us, for all of us. Monthly gatherings in LA.
                </p>
              </RevealSection>

              <RevealSection>
                <JoinTheClubForm />
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
      <section id="resources" className="py-20 md:py-28 px-6 torn-edge-bottom bg-background">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-end justify-between mb-2">
              <h2 className="playfair-italic text-xl md:text-2xl tracking-tight">
                the outfitter
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
            <div className="w-[85%] md:w-[60%] mx-auto aspect-[3/2] overflow-hidden">
              <img
                src="/the chapter/nocureclub2-5.jpg"
                alt="The Chapter"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealSection>
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center mt-10">
              <p className="section-label text-sm text-charcoal mb-1 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-brown inline-block" />
                the chapter
              </p>
              <h2 className="playfair-italic text-xl md:text-2xl lg:text-3xl text-black font-light tracking-tighter mb-2">
                welcome to{" "}<span className="ncc-logo text-black not-italic ml-2">The No Cure Club</span>
              </h2>
              <p className="text-sm font-semibold text-black leading-snug tracking-wider mb-6 mt-4">
                Welcome to the club nobody wanted to join. I&apos;m so glad you&apos;re here.
                <br />
                <em className="font-normal">Started by someone going through it, for everyone going through it. Come find your people.</em>
              </p>
              <Link
                href="/community#la-meetups"
                className="inline-block border border-charcoal/30 rounded-none p-6 text-left group hover:bg-chartreuse hover:border-charcoal/30 transition-all duration-300"
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
          {/* Portrait — left side */}
          <RevealSection>
            <div className="w-[60%] md:w-full aspect-square md:aspect-[3/4] overflow-hidden">
              <img
                src="/NANCY/Monika Photos/8A426141-7675-47B9-BCC8-14ECF0BB0C6D-labbet-app.JPG"
                alt="Nancy"
                className="w-full h-full object-cover"
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
                <span className="ncc-logo text-black" style={{ fontSize: 'inherit', transform: 'none' }}>The No Cure Club</span> is the community-centered spot where endo and pelvic pain are embraced and supported. I&apos;ve spent years on my own healing journey to put my stage 3 endometriosis and chronic pain into remission and am making a <Link href="/hysteria-doc" className="underline hover:opacity-60 transition-opacity">documentary</Link> about the interdisciplinary approach I&apos;m experimenting with.
              </p>
              <p>
                Over those years, I&apos;ve been astounded by how complicated finding the best tools, practitioners, books, courses, exercises, etc (<em>all the things</em>) to support my healing and living well with endo has been. I wanted a single resource hub that brought together all of it in one spot and was easy to navigate.
              </p>
              <p>
                I&apos;m not an expert, but I&apos;m a busy girl who&apos;s been trying to live a big life with endo, and I want to simplify things.
              </p>
              <p>
                This club is my solution. Here, you will find the curated resources that have helped me, or friends I know and trust. We are always growing, so please <a href="mailto:hey@thenocureclub.com" className="underline hover:opacity-60 transition-opacity">send us resources</a> to check out!
              </p>
              <p>
                We will be hosting gatherings for the Los Angeles community to meet in person, so check out <Link href="/community" className="underline hover:opacity-60 transition-opacity">the chapter</Link> page to see the latest events and grab your spot. We will often bring a specialist guest, and always do activities that create nervous system regulation and connection with each other and ourselves.
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
                <div className="rounded-none p-6 md:p-8 flex flex-col justify-between h-full border border-black">
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
                <div className="rounded-none p-5 pb-6 h-full flex flex-col border border-black">
                  <div className="w-full aspect-square rounded-none overflow-hidden mb-4">
                    <img
                      src="/in the flo.jpg"
                      alt="In the FLO by Alisa Vitti"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brown inline-block" />
                    featured reading
                  </p>
                  <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                    in the flo
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
                <div className="rounded-none p-5 pb-6 h-full flex flex-col border border-black">
                  <div className="w-full aspect-square rounded-none overflow-hidden mb-4">
                    <img
                      src="/you're great.webp"
                      alt="You're Great Podcast"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brown inline-block" />
                    featured podcast
                  </p>
                  <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                    the fundamentals of great health
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
                <div className="rounded-none p-5 pb-6 h-full flex flex-col border border-black">
                  <div className="w-full aspect-square rounded-none overflow-hidden mb-4">
                    <img
                      src="/this is endometriosis.jpg"
                      alt="This Is Endometriosis"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brown inline-block" />
                    featured watching
                  </p>
                  <h3 className="playfair text-base tracking-tight mb-1 font-bold">
                    this is endometriosis
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
                href="/tools"
                className="group border border-[#665e4c] rounded-none overflow-hidden hover:bg-chartreuse transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src="/the outfitter/D0427016-083C-46A2-90CD-D23596D24819-labbet-app.JPG" alt="The Outfitter" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="px-8 pt-4 pb-6 text-left">
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    the outfitter
                  </p>
                  <h3 className="playfair text-xl mb-1">
                    survival <em className="playfair-italic">gear.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-snug">
                    the stuff that actually makes a difference, tested by one of us.
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
                  <img src="/the library/470541CE-05C0-4BD3-A9A9-DD9106913813-labbet-app.JPG" alt="The Library" className="w-full object-cover aspect-[4/3] !rounded-none group-hover:scale-[1.03] transition-transform duration-500" style={{ objectPosition: "center 80%" }} />
                </div>
                <div className="px-8 pt-4 pb-6 text-left">
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    the library
                  </p>
                  <h3 className="playfair text-xl mb-1">
                    required <em className="playfair-italic">reading.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-snug">
                    consider this your club curriculum.
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 text-black group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/practitioners"
                className="group relative border border-[#665e4c] rounded-none overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h3 className="text-white text-2xl md:text-3xl tracking-tight">
                    <span className="font-black">coming</span>{" "}
                    <em className="playfair-italic font-light">soon.</em>
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <img src="/the rolodex/C55A1B2E-6359-4B84-811E-5A5C925723CB-labbet-app.JPG" alt="The Rolodex" className="w-full object-cover aspect-[4/3] !rounded-none scale-[1.2] group-hover:scale-[1.23] transition-transform duration-500" style={{ objectPosition: "center 110%" }} />
                </div>
                <div className="px-8 pt-4 pb-6 text-left">
                  <p className="text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    the rolodex
                  </p>
                  <h3 className="playfair text-xl mb-1">
                    tested <em className="playfair-italic">allies.</em>
                  </h3>
                  <p className="playfair text-sm text-black leading-snug">
                    a growing list of practitioners who actually believe you.
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
