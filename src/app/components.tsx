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
      { threshold: 0.15 }
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

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const dismissed = sessionStorage.getItem("newsletter-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("newsletter-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[45] border-t-2 border-black bg-white px-6 py-3 md:py-4 transition-transform duration-500"
      style={{ bottom: "40px" }}
    >
      <button
        onClick={handleClose}
        className="absolute top-3 right-6 text-xs font-semibold uppercase tracking-wider text-black hover:opacity-60 transition-opacity flex items-center gap-1"
        aria-label="Close"
      >
        close
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      <div className="max-w-5xl mx-auto flex items-center gap-6">
        <p className="text-sm text-black/70" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
          Your monthly dose of answers, resources, and proof you&apos;re not crazy.
        </p>
        <a
          href="https://nocureclub.substack.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs !py-2 !px-5 whitespace-nowrap shrink-0"
        >
          join the club
        </a>
      </div>
    </div>
  );
}

export function SubpageNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <Link
          href="/"
          className="text-xl ncc-logo text-black"
        >
          No Cure Club
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-mid py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl ncc-logo text-black">
            No Cure Club
          </h3>
          <p className="playfair-italic text-base leading-relaxed text-black mt-4 max-w-md">
            a community and curation hub for people living with endometriosis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <h4 className="text-xs font-semibold text-blush mb-5 uppercase tracking-wider">
              navigate
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "home" },
                { href: "/hysteria-doc", label: "hysteria doc" },
                { href: "/#community", label: "community" },
                { href: "/#donate", label: "support" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-blush mb-5 uppercase tracking-wider">
              contact
            </h4>
            <div className="text-sm space-y-2.5 text-black">
              <p>
                <a
                  href="mailto:hello@hysteriafilm.com"
                  className="hover:text-black transition-colors duration-300"
                >
                  hello@hysteriafilm.com
                </a>
              </p>
              <p>press inquiries welcome.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-blush mb-5 uppercase tracking-wider">
              follow
            </h4>
            <a
              href="https://www.instagram.com/nancydegnan/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black hover:text-black transition-colors duration-300"
            >
              @nancydegnan
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-gray-mid flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-black">
            &copy; {new Date().getFullYear()} No Cure Club
          </p>
        </div>
      </div>
    </footer>
  );
}
