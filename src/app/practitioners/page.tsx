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

/* ── Instagram accounts ── */
interface InstagramAccount {
  handle: string;
  url: string;
  description: string;
}

const instagramAccounts: InstagramAccount[] = [
  {
    handle: "@savannahregensburger",
    url: "https://www.instagram.com/savannahregensburger/",
    description:
      "Clinical Nutritionist, Educator + Speaker with Endo.",
  },
  {
    handle: "@chef_bai",
    url: "https://www.instagram.com/chef_bai/",
    description:
      "Vegan chef with endo, 2X bestselling author of \"Breaking Up With Dairy.\"",
  },
  {
    handle: "@alisa.vitti",
    url: "https://www.instagram.com/alisa.vitti/",
    description:
      "Women\u2019s Hormone Expert, Creator of Cycle Syncing Method, @floliving + MyFLO app, author of Woman Code + In the FLO.",
  },
  {
    handle: "@endonutrition",
    url: "https://www.instagram.com/endonutrition/?hl=en",
    description:
      "Khush Sra \u2014 Stage 4 \u2192 20 yrs remission. Advanced endometriosis care. Fx Med x Nervous System.",
  },
  {
    handle: "@aileyjolie",
    url: "https://www.instagram.com/aileyjolie/?hl=en",
    description:
      "MCP, MA Psychologist. Guiding You Back to Your Body. Somatic Psychologist & Supervisor. Founder of INBODY.",
  },
  {
    handle: "@thebeanprotocol",
    url: "https://www.instagram.com/thebeanprotocol/?hl=en",
    description:
      "Creating a healthy internal environment. Hormones \u2022 natural detox \u2022 gut \u2022 skin \u2022 weight \u2022 resilience \u2022 vitality. @uniquehammond.",
  },
  {
    handle: "@nicolesachslcsw",
    url: "https://www.instagram.com/nicolesachslcsw/?hl=en",
    description:
      "Creator of JournalSpeak. The Brain Science Behind Chronic Pain and Anxiety.",
  },
];

const practitioners: Practitioner[] = [
  {
    name: "Dr. Iris Orbuch",
    city: "Los Angeles",
    state: "California",
    remote: false,
    description:
      "Endometriosis excision specialist and author of 'Beating Endo.' Performs advanced laparoscopic excision surgery and offers comprehensive treatment plans that address the whole patient.",
    bestFor:
      "Patients seeking expert excision surgery and a multidisciplinary approach to endo management.",
    contact: { type: "phone", value: "(310) 555-0140" },
    website: "https://www.beatingendo.com",
  },
  {
    name: "Dr. Chandra Spring-Robinson",
    city: "San Diego",
    state: "California",
    remote: false,
    description:
      "Endometriosis and minimally invasive gynecologic surgery specialist based in San Diego, focused on advanced care for pelvic pain and endometriosis.",
    bestFor:
      "Patients in Southern California seeking specialized endometriosis care in the San Diego area.",
    website: "https://www.socalendo.health/",
  },
  {
    name: "Emily Eckmann",
    city: "Los Angeles",
    state: "California",
    remote: false,
    description:
      "Pelvic Health Physical Therapist specializing in pelvic floor rehabilitation and chronic pelvic pain management.",
    bestFor:
      "Patients in Los Angeles seeking specialized pelvic floor physical therapy.",
    website: "https://www.emilyeckmannpt.com/",
  },
  {
    name: "Dr. Kelly N. Wright, MD",
    city: "Los Angeles",
    state: "California",
    remote: false,
    description:
      "Director of Minimally Invasive Gynecologic Surgery at Cedars-Sinai. Harvard AAGL-fellowship trained endometriosis expert specializing in excision surgery, fertility preservation, and pelvic pain.",
    bestFor:
      "Patients in Los Angeles seeking an experienced endometriosis surgeon at a major medical center.",
    website: "https://www.cedars-sinai.org/provider/kelly-wright-816326.html",
  },
];

const remotePractitioners: Practitioner[] = [
  {
    name: "Dr. Jolene Brighten",
    city: "",
    state: "",
    remote: true,
    description:
      "Naturopathic endocrinologist and bestselling author of 'Beyond the Pill.' Specializes in hormonal health, post-birth-control syndrome, and root-cause approaches to period problems and endometriosis.",
    bestFor:
      "Patients seeking a functional and hormonal approach to managing endometriosis and related conditions.",
    website: "https://drbrighten.com/",
  },
  {
    name: "Unique Hammond",
    city: "",
    state: "",
    remote: true,
    description:
      "Nutritionist specializing in dietary approaches to support hormonal health and chronic conditions like endometriosis.",
    bestFor:
      "Patients looking for personalized nutritional guidance to complement their endo treatment plan.",
    website: "https://www.youregreat.com/",
  },
  {
    name: "Karen Hurd",
    city: "",
    state: "",
    remote: true,
    description:
      "Biochemist and nutritional consultant, and the originator of the idea that soluble fiber (primarily from beans) can help the body bind and excrete excess hormones, particularly estrogen \u2014 which is central to conditions like endometriosis. Offers remote courses you can purchase on her website covering an array of conditions as well as overall health.",
    bestFor:
      "Anyone looking for accessible, self-paced nutritional education for chronic conditions and general wellness.",
    website: "https://karen-r.mylearnworlds.com/courses",
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

      {/* ── Jump-to buttons ── */}
      <nav className="px-6 max-w-5xl mx-auto mb-12 md:mb-16 flex flex-wrap gap-4">
        <button
          onClick={() =>
            document.getElementById("practitioners")?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-heading text-sm md:text-base uppercase tracking-[0.2em] border-[3px] border-cream/20 px-6 py-3 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300"
        >
          Practitioners
        </button>
        <button
          onClick={() =>
            document.getElementById("instagram")?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-heading text-sm md:text-base uppercase tracking-[0.2em] border-[3px] border-cream/20 px-6 py-3 hover:border-hot-pink hover:text-hot-pink transition-colors duration-300"
        >
          Instagram Accounts
        </button>
      </nav>

      {/* ── Practitioner listings ── */}
      <main id="practitioners" className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto scroll-mt-8">
        {/* ── Available Remotely ── */}
        <section className="mb-16 md:mb-24">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-8 md:mb-10">
              Available Remotely
            </h2>
          </RevealSection>

          <div className="grid gap-6">
            {remotePractitioners.map((p) => (
              <RevealSection key={p.name}>
                <div className="border-[3px] border-cream/20 p-8 md:p-10 hover:border-hot-pink transition-colors duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <h3 className="font-heading text-2xl md:text-3xl uppercase leading-tight">
                      {p.name}
                    </h3>
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
                  </div>

                  <p className="font-body text-sm md:text-base leading-[1.8] opacity-80 mb-6">
                    {p.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-hot-pink">
                      Best fit for
                    </span>
                    <p className="font-body text-sm leading-[1.8] opacity-70 mt-1">
                      {p.bestFor}
                    </p>
                  </div>

                  {p.website && (
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cream/10">
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
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </section>

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

      {/* ── Instagram accounts ── */}
      <section id="instagram" className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto scroll-mt-8">
        <RevealSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-cream leading-[0.85] mb-4">
            Instagram Accounts
          </h2>
          <p className="font-body text-sm md:text-base leading-[1.8] opacity-60 mb-10 max-w-2xl">
            Accounts I follow that consistently share helpful, honest content
            about endo, women&apos;s health, and hormonal health.
          </p>
        </RevealSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramAccounts.map((acct) => (
            <RevealSection key={acct.handle}>
              <a
                href={acct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 h-full"
              >
                {/* Instagram icon + handle */}
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-hot-pink shrink-0"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="font-heading text-sm md:text-base uppercase tracking-wide group-hover:text-hot-pink transition-colors duration-300 break-all">
                    {acct.handle}
                  </span>
                </div>

                <p className="font-body text-sm leading-[1.8] opacity-70">
                  {acct.description}
                </p>
              </a>
            </RevealSection>
          ))}
        </div>
      </section>

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
