"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../components";
import { advocacyTools, healingTools } from "../tools/data";

const filters = ["all", "gatherings", "free tools: heal", "free tools: advocate"] as const;
type Filter = (typeof filters)[number];

interface Event {
  date: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  extra?: React.ReactNode;
}

const laEvents: Event[] = [
  {
    date: "May 2, 2026",
    title: "afternoon tea gathering",
    description:
      "Our first event. An afternoon tea (caffeine free of course) gathering to connect, share, and support each other. Special guest, an incredible Pelvic Floor Physical Therapist located in LA.",
    image: "/community1.jpg",
    link: "https://www.eventbrite.com/e/the-no-cure-club-afternoon-tea-gathering-tickets-1986841219572?aff=oddtdtcreator",
  },
  {
    date: "May 30, 2026",
    title: "backyard sessions",
    description:
      "Hosted at Nancy\u2019s home in Echo Park. An intimate gathering to ground, connect, and go deeper. Bean Protocol friendly light bites and Nancy\u2019s signature sugar free electrolyte drink to be provided for a nourishing evening.",
    image: "/community2.jpg",
    extra: <>This will be a filmed event, to be included in <Link href="/hysteria-doc" className="underline hover:opacity-60 transition-opacity">the documentary</Link>.</>,
  },
];

export default function CommunityPage() {
  const [active, setActive] = useState<Filter>("all");

  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              community
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">find</span>{" "}
              <em className="playfair-italic font-light">your people.</em>
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-6 text-charcoal max-w-2xl">
              Monthly gatherings in LA. Come as you are — no
              pressure, no agenda, just a room full of people who get it.
              Dates go out to the mailing list first.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`playfair-italic text-sm px-5 py-2 border-b-2 transition-all duration-300 cursor-pointer ${
                    active === f
                      ? "border-black text-black"
                      : "border-transparent text-charcoal hover:text-black hover:border-chartreuse"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </RevealSection>
        </header>
      </div>

      {/* ── Los Angeles In-Person Meetups ── */}
      {(active === "all" || active === "gatherings") && <section id="la-meetups" className="pt-10 md:pt-14 pb-20 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-10 lowercase">
              los angeles gatherings
            </h2>
          </RevealSection>

          <div className="flex flex-col gap-14">
            {laEvents.map((event) => (
              <RevealSection key={event.date}>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                  <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                      {event.date}
                    </p>
                    <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                      {event.title}
                    </h3>
                    <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-snug tracking-tight mt-2">
                      {event.description}
                      {event.extra && <> {event.extra}</>}
                    </p>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm font-semibold uppercase tracking-[0.12em] border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all duration-300"
                      >
                        save your spot &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>}

      {/* ── Free Tools: Heal ── */}
      {(active === "all" || active === "free tools: heal") && <section id="free-tools-heal" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-10 lowercase">
              support your healing
            </h2>
          </RevealSection>

          <div className="flex flex-col gap-14">
            {healingTools.map((ft) => (
              <RevealSection key={ft.name}>
                <a
                  href={ft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                >
                  <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                    {ft.image && (
                      <img src={ft.image} alt={ft.name} className="w-full h-full object-cover" style={ft.imagePosition ? { objectPosition: ft.imagePosition } : undefined} />
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                      free tool
                    </p>
                    <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                      {ft.name}
                    </h3>
                    <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-snug tracking-tight mt-2">
                      {ft.description}
                    </p>
                    <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                      explore &rarr;
                    </span>
                  </div>
                </a>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>}

      {/* ── Free Tools: Advocate ── */}
      {(active === "all" || active === "free tools: advocate") && <section id="free-tools-advocate" className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-10 lowercase">
              advocate for yourself
            </h2>
          </RevealSection>

          <div className="flex flex-col gap-14">
            {advocacyTools.map((ft) => (
              <RevealSection key={ft.name}>
                <a
                  href={ft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center group"
                >
                  <div className="w-64 md:w-80 aspect-[4/3] bg-[#e4e0d9] overflow-hidden">
                    {ft.image && (
                      <img src={ft.image} alt={ft.name} className="w-full h-full object-cover" style={ft.imagePosition ? { objectPosition: ft.imagePosition } : undefined} />
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal mb-1.5">
                      free tool
                    </p>
                    <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                      {ft.name}
                    </h3>
                    <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-snug tracking-tight mt-2">
                      {ft.description}
                    </p>
                    <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                      explore &rarr;
                    </span>
                  </div>
                </a>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>}

      <Footer />
    </div>
  );
}
