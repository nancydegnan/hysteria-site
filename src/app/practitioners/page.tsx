"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ── Scroll-reveal (duplicated from homepage to keep things simple) ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.15 },
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

/* ── Practitioner data ── */
interface Practitioner {
  name: string;
  city: string;
  state: string;
  remote: boolean;
  description: string;
  bestFor: string;
  contact?: { type: "phone" | "email"; value: string };
  website?: string;
}

const practitioners: Practitioner[] = [
  {
    name: "Dr. Iris Orbuch",
    city: "Los Angeles",
    state: "California",
    remote: true,
    description:
      "Endometriosis excision specialist and author of 'Beating Endo.' Performs advanced laparoscopic excision surgery and offers comprehensive treatment plans that address the whole patient.",
    bestFor:
      "Patients seeking expert excision surgery and a multidisciplinary approach to endo management.",
    contact: { type: "phone", value: "(310) 555-0140" },
    website: "https://www.beatingendo.com",
  },
  {
    name: "Dr. Tamer Seckin",
    city: "New York City",
    state: "New York",
    remote: false,
    description:
      "Pioneer in deep-excision laparoscopic surgery for endometriosis. Founder of the Endometriosis Foundation of America and a leading advocate for early diagnosis.",
    bestFor:
      "Complex or deep-infiltrating endometriosis cases requiring an experienced surgical specialist.",
    contact: { type: "phone", value: "(212) 555-0198" },
    website: "https://www.drseckin.com",
  },
  {
    name: "Dr. Andrea Vidali",
    city: "New York City",
    state: "New York",
    remote: true,
    description:
      "Reproductive immunologist and endometriosis surgeon integrating immune-focused diagnostics with minimally invasive excision techniques.",
    bestFor:
      "Patients dealing with endo-related infertility or immune dysfunction alongside endometriosis.",
    contact: { type: "email", value: "info@endocenterclinic.com" },
    website: "https://www.endocenterclinic.com",
  },
  {
    name: "Dr. Patrick Yeung",
    city: "St. Louis",
    state: "Missouri",
    remote: false,
    description:
      "Minimally invasive gynecologic surgeon specializing in endometriosis excision. Focuses on fertility-preserving surgery and chronic pelvic pain.",
    bestFor:
      "Patients in the Midwest seeking high-quality excision surgery and pelvic pain management.",
    contact: { type: "phone", value: "(314) 555-0172" },
    website: "https://www.centerforendo.com",
  },
  {
    name: "Jessica Murnane",
    city: "Chicago",
    state: "Illinois",
    remote: true,
    description:
      "Holistic wellness advocate and author of 'One Part Plant.' Coaches on anti-inflammatory nutrition, lifestyle shifts, and building a support system for chronic illness.",
    bestFor:
      "Anyone looking for nutritional guidance and community support alongside medical treatment.",
    contact: { type: "email", value: "hello@jessicamurnane.com" },
    website: "https://www.jessicamurnane.com",
  },
];

/* Group by state */
function groupByState(list: Practitioner[]) {
  const map: Record<string, Practitioner[]> = {};
  for (const p of list) {
    (map[p.state] ??= []).push(p);
  }
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
}

/* ── Page ── */
export default function PractitionersPage() {
  const grouped = groupByState(practitioners);

  return (
    <div className="min-h-screen bg-black text-cream">
      {/* ── Back link ── */}
      <div className="px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto">
        <RevealSection>
          <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
            // Resources
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-cream uppercase leading-[0.85] section-title-cream">
            Practi&shy;tioners
          </h1>
          <p className="font-body text-base md:text-lg leading-[1.8] mt-8 opacity-80 max-w-2xl">
            Every person listed here has been personally vetted or recommended
            by someone I trust. This is not an ad — it&apos;s a shortcut through
            the maze I had to navigate alone.
          </p>
        </RevealSection>
      </header>

      {/* ── Practitioner listings ── */}
      <main className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto">
        {grouped.map(([state, list]) => (
          <section key={state} className="mb-16 md:mb-24 last:mb-0">
            <RevealSection>
              <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
                {state}
              </h2>
            </RevealSection>

            <div className="grid gap-6">
              {list.map((p) => (
                <RevealSection key={p.name}>
                  <div className="border-[3px] border-cream/20 p-8 md:p-10 hover:border-hot-pink transition-colors duration-500">
                    {/* Top row: name + badges */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <h3 className="font-heading text-2xl md:text-3xl uppercase leading-tight">
                        {p.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Location badge */}
                        <span className="inline-flex items-center gap-1.5 font-body text-xs tracking-wide uppercase bg-cream/10 px-3 py-1">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-60"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {p.city}, {p.state}
                        </span>
                        {/* Remote badge */}
                        {p.remote && (
                          <span className="inline-flex items-center gap-1.5 font-body text-xs tracking-wide uppercase bg-hot-pink/20 text-hot-pink px-3 py-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            Available Remotely
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base leading-[1.8] opacity-80 mb-6">
                      {p.description}
                    </p>

                    {/* Best for */}
                    <div className="mb-6">
                      <span className="font-heading text-xs uppercase tracking-[0.2em] text-hot-pink">
                        Best fit for
                      </span>
                      <p className="font-body text-sm leading-[1.8] opacity-70 mt-1">
                        {p.bestFor}
                      </p>
                    </div>

                    {/* Contact + Website row */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cream/10">
                      {p.contact && (
                        <a
                          href={
                            p.contact.type === "phone"
                              ? `tel:${p.contact.value}`
                              : `mailto:${p.contact.value}`
                          }
                          className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
                        >
                          {p.contact.type === "phone" ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                          )}
                          {p.contact.value}
                        </a>
                      )}

                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-cream hover:text-hot-pink transition-colors duration-300"
                        >
                          Visit Website
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-cream/10 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">
            &copy; {new Date().getFullYear()} HYSTERIA Film. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="font-body text-xs text-cream/40 hover:text-hot-pink transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
