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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://nocureclub.substack.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(handleClose, 2000);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[45] border-t-2 border-black bg-white px-6 py-3 md:py-4 transition-transform duration-500"
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

      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm md:text-base font-black uppercase tracking-tight mb-1">
          Join <span className="ncc-logo" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span>
        </h2>
        <div className="w-fit mx-auto">
          <p className="text-xs text-charcoal mb-3" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            Your monthly dose of answers, resources, and proof you&apos;re not crazy.
          </p>

        {submitted ? (
          <p className="text-xs font-semibold text-black">you&apos;re in! check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 !bg-gray-light !border-gray-mid !rounded-none text-xs !py-1.5"
            />
            <button type="submit" className="btn-primary text-xs !py-1.5 !px-5 whitespace-nowrap">
              join the club
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}

export function SubpageNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "about" },
    { href: "/tools", label: "shop" },
    { href: "/reading", label: "read/watch/listen" },
    { href: "/community", label: "community" },
    { href: "/hysteria-doc", label: "the documentary" },
    { href: "https://substack.com/@thenocureclub", label: "the newsletter" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl ncc-logo text-black"
        >
          The No Cure Club
        </Link>
        <div className="hidden md:flex items-center gap-5">
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
  );
}

export function SelfCareCard({ product }: { product: { name: string; website: string; image?: string; imageFit?: "contain" | "cover"; imagePosition?: string; company: string; price: string; description: string; personalNote?: string } }) {
  const [noteVisible, setNoteVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (product.personalNote && !noteVisible) {
      e.preventDefault();
      setNoteVisible(true);
    }
  };

  return (
    <a
      href={product.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block text-center"
      onClick={handleClick}
      onMouseLeave={() => setNoteVisible(false)}
    >
      {product.image ? (
        <div className={`relative overflow-hidden bg-gray-light mb-5 ${product.imageFit === "contain" ? "aspect-square w-[65%] mx-auto p-4" : "aspect-[3/4]"}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${product.imageFit === "contain" ? "object-contain" : "object-cover"}`}
          />
          {product.personalNote && (
            <div className={`absolute inset-0 bg-background/90 transition-opacity duration-500 flex items-center justify-center p-6 ${noteVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
              <p className="playfair-italic text-[var(--foreground)] text-xs leading-[1.4] whitespace-pre-line text-left font-bold">
                {product.personalNote}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-light flex items-center justify-center aspect-[3/4] mb-5">
          <span className="text-sm text-gray-text">{product.name}</span>
        </div>
      )}

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-text">
        {product.company}
      </p>
      <h3 className="playfair text-base leading-snug mt-1.5">
        {product.name}
      </h3>
      <p className="text-sm text-gray-text mt-1">
        {product.price}
      </p>
      <p className="text-xs text-gray-text mt-2 leading-[1.4]">
        {product.description}
      </p>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-mid py-16 md:py-24 px-6">
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
                { href: "/about", label: "about" },
                { href: "/tools", label: "shop" },
                { href: "/reading", label: "read/watch/listen" },
                { href: "/community", label: "community" },
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
                  href="mailto:hello@thenocureclub.com"
                  className="hover:text-black transition-colors duration-300"
                >
                  hello@thenocureclub.com
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
            <form
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget.elements.namedItem("footer-email") as HTMLInputElement).value;
                window.open(
                  `https://nocureclub.substack.com/subscribe?email=${encodeURIComponent(email)}`,
                  "_blank"
                );
              }}
            >
              <input
                type="email"
                name="footer-email"
                placeholder="your@email.com"
                required
                className="flex-1 !bg-gray-light !border-gray-mid !rounded-none text-xs !py-1.5"
              />
              <button type="submit" className="btn-primary text-xs !py-1.5 !px-5 whitespace-nowrap">
                join the club
              </button>
            </form>
          </div>
          <p className="text-xs text-black">
            &copy; {new Date().getFullYear()} The No Cure Club
          </p>
        </div>
      </div>
    </footer>
  );
}
