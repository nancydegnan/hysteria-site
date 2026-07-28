"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function useScrollReveal() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function RevealSection({
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

export function GatheringsPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("newsletter-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("newsletter-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[45] border-t-2 border-black bg-background px-6 py-3 md:py-4 transition-transform duration-500"
      style={{ bottom: "40px" }}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-6 text-xs font-semibold uppercase tracking-wider text-black hover:opacity-60 transition-opacity flex items-center gap-1"
        aria-label="Close"
      >
        close
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      <h2 className="text-sm md:text-base font-black uppercase tracking-tight mb-1">
        <span className="ncc-logo" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span>
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-6">
          <div>
            <p className="text-sm md:text-base font-black tracking-tight">
              based in LA? come to the next gathering.
            </p>
            <p className="text-xs text-charcoal mt-1" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
              monthly, in person. dates go out to the list first.
            </p>
          </div>
          <Link
            href="/community#la-meetups"
            onClick={handleClose}
            className="btn-primary text-xs !py-1.5 !px-5 whitespace-nowrap shrink-0"
          >
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SubpageNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "the origin" },
    { href: "/tools", label: "the outfitter" },
    { href: "/reading", label: "the library" },
    { href: "/community", label: "the chapter" },
    { href: "/hysteria-doc", label: "the documentary" },
    { href: "https://thenocureclub.substack.com", label: "the newsletter" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg ncc-logo text-black"
        >
          The No Cure Club
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-black hover:italic transition-all duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-black hover:italic transition-all duration-300"
              >
                {link.label}
              </Link>
            )
          )}
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
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-gray-mid py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl ncc-logo text-black">
            The No Cure Club
          </h3>
          <p className="playfair-italic text-base leading-snug text-black mt-1.5 max-w-md">
            a community and curation hub for people living with endometriosis and pelvic pain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <h4 className="text-xs font-semibold text-black mb-5 uppercase tracking-wider">
              navigate
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/about", label: "the origin" },
                { href: "/tools", label: "the outfitter" },
                { href: "/reading", label: "the library" },
                { href: "/community", label: "the chapter" },
                { href: "/hysteria-doc", label: "the documentary" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:italic transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-black mb-5 uppercase tracking-wider">
              contact
            </h4>
            <div className="text-sm space-y-2.5 text-black">
              <p>
                <a
                  href="mailto:hey@thenocureclub.com"
                  className="hover:text-black transition-colors duration-300"
                >
                  hey@thenocureclub.com
                </a>
              </p>
              <p>press inquiries welcome.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-black mb-5 uppercase tracking-wider">
              follow
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/jointhenocureclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:italic transition-all duration-300"
              >
                instagram @jointhenocureclub
              </a>
              <a
                href="https://www.instagram.com/nancydegnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:italic transition-all duration-300"
              >
                instagram @nancydegnan
              </a>
              <a
                href="https://www.tiktok.com/@nancydegnan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:italic transition-all duration-300"
              >
                tiktok @nancydegnan
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-gray-mid">
          <div className="mb-8 text-center">
            <h4 className="text-sm md:text-base font-black uppercase tracking-tight mb-1">
              Join <span className="ncc-logo" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span>
            </h4>
            <p className="text-xs text-charcoal mb-3" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
              Your monthly dose of answers, resources, and proof you&apos;re not crazy.
            </p>
            <JoinTheClubForm
              formClassName="flex flex-col sm:flex-row gap-2 max-w-md mx-auto justify-center items-center"
              inputClassName="flex-1 !bg-gray-light !border-gray-mid !rounded-none text-xs !py-1.5"
              buttonClassName="btn-primary text-xs !py-1.5 !px-5 whitespace-nowrap"
              successClassName="text-xs font-semibold text-black"
              errorClassName="text-xs text-red-600"
            />
          </div>
          <p className="text-xs text-black">
            &copy; {new Date().getFullYear()} The No Cure Club
          </p>
        </div>
      </div>
    </footer>
  );
}

const SUPASCRIBE_SRC =
  "https://js.supascribe.com/v1/loader/zNBxYKLH0LWTTh1tMqpiAJjXwEt2.js";
let supascribeReloadQueued = false;

export function JoinTheClubForm({
  formClassName,
}: {
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  successClassName?: string;
  errorClassName?: string;
  buttonLabel?: React.ReactNode;
  onSuccess?: () => void;
} = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const embed = containerRef.current?.querySelector(
        "[data-supascribe-embed-id]"
      );
      if (embed && embed.children.length === 0 && !supascribeReloadQueued) {
        supascribeReloadQueued = true;
        const script = document.createElement("script");
        script.src = SUPASCRIBE_SRC;
        script.async = true;
        script.onload = () => {
          supascribeReloadQueued = false;
        };
        document.body.appendChild(script);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className={formClassName}>
      <div data-supascribe-embed-id="65043634212" data-supascribe-subscribe />
    </div>
  );
}
