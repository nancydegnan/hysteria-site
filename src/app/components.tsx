"use client";

import { useEffect, useRef } from "react";
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

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-mid py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
            No Cure Club
          </h3>
          <p className="font-serif-italic text-base leading-relaxed text-gray-text mt-4 max-w-md">
            a community and curation hub for people living with endometriosis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <h4 className="font-serif-italic text-sm text-blush mb-5">
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
                  className="text-sm text-gray-text hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif-italic text-sm text-blush mb-5">
              contact
            </h4>
            <div className="text-sm space-y-2.5 text-gray-text">
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
            <h4 className="font-serif-italic text-sm text-blush mb-5">
              follow
            </h4>
            <a
              href="https://www.instagram.com/nancydegnan/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-text hover:text-black transition-colors duration-300"
            >
              @nancydegnan
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-gray-mid flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-text">
            &copy; {new Date().getFullYear()} No Cure Club
          </p>
        </div>
      </div>
    </footer>
  );
}
