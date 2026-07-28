import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../components";

export const metadata: Metadata = {
  title: "The Chapter | In-Person Endometriosis Meetups in Los Angeles",
  description:
    "Intimate gatherings for the LA endo community. Nervous system regulation, witnessing circles, and the space where you can come as you are.",
  openGraph: {
    title: "The Chapter | In-Person Endometriosis Meetups in Los Angeles",
    description:
      "Intimate gatherings for the LA endo community. Nervous system regulation, witnessing circles, and the space where you can come as you are.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chapter | In-Person Endometriosis Meetups in Los Angeles",
    description:
      "Intimate gatherings for the LA endo community. Nervous system regulation, witnessing circles, and the space where you can come as you are.",
  },
};

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
    date: "Saturday, August 29, 2026 \u00B7 11 AM\u20131 PM",
    title: "cozy gathering",
    description:
      "An intimate gathering to ground, connect, and share with our fellow endo/pelvic pain sisters. Light snack (anti-inflammatory-friendly) and herbal tea provided.",
    image: "/the chapter/IMG_2926.jpg",
    link: "https://partiful.com/e/zXm3B7P0cvhirT6a3Hlj",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-black">
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
              RSVPs go out to the mailing list first.
            </p>

          </RevealSection>
        </header>
      </div>

      {/* ── Los Angeles In-Person Meetups ── */}
      <section id="la-meetups" className="pt-10 md:pt-14 pb-20 md:pb-28 px-6">
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
      </section>

      <Footer />
    </div>
  );
}
