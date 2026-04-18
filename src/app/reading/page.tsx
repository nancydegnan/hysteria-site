import Link from "next/link";
import { bookGroups, podcastGroups, articleGroups, researchGroups, films } from "./data";
import { RevealSection, Footer, SubpageNav } from "../components";

const sections = [
  {
    label: "books",
    name: "books",
    href: "/reading/books",
    count: bookGroups.reduce((n, g) => n + g.books.length, 0),
    unit: "books",
    image: "/books.png",
  },
  {
    label: "podcasts",
    name: "podcast episodes",
    href: "/reading/podcasts",
    count: podcastGroups.reduce((n, g) => n + g.podcasts.length, 0),
    unit: "episodes",
    image: "/podcast image.png",
  },
  {
    label: "articles",
    name: "articles",
    href: "/reading/articles",
    count: articleGroups.reduce((n, g) => n + g.articles.length, 0),
    unit: "articles",
    image: articleGroups[0]?.image,
  },
  {
    label: "research",
    name: "research",
    href: "/reading/research",
    count: researchGroups.reduce((n, g) => n + g.articles.length, 0),
    unit: "papers",
    image: researchGroups[0]?.image,
  },
  {
    label: "films",
    name: "documentaries",
    href: "/reading/films",
    count: films.length,
    unit: "films",
  },
];

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_220px] gap-8 items-start">
            <RevealSection>
              <p className="section-label text-sm text-black mb-3">
                resources
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                <span className="font-black">read, watch,</span>{" "}
                <em className="playfair-italic font-light">listen</em>
              </h1>
              <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-1 text-black max-w-2xl">
                Books, films, podcasts, articles, and research worth your time. These are all resources that have shaped how I
                understand my body, my pain, and how to embark upon healing.
              </p>
            </RevealSection>

            <RevealSection className="md:text-right md:pt-6">
              <blockquote>
                <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm leading-[1.5] text-black">
                  &ldquo;I&apos;m tired of being enclosed here. I&apos;m wearying
                  to escape into that glorious world, and to be always there: not
                  seeing it dimly through tears, and yearning for it through the
                  walls of an aching heart.&rdquo;
                </p>
                <footer className="mt-2">
                  <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-xs text-black">
                    &mdash; Catherine Earnshaw, Wuthering Heights
                  </p>
                </footer>
              </blockquote>
            </RevealSection>
          </div>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-14 max-w-lg mx-auto">
          {sections.map((s) => (
            <RevealSection key={s.href} className="w-full">
              <Link
                href={s.href}
                className="block group text-center"
              >
                <div className="w-full aspect-[16/9] bg-white overflow-hidden">
                  {s.image && (
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black mb-1.5">
                    {s.label}
                  </p>
                  <h3 className="playfair text-xl md:text-2xl font-bold leading-snug">
                    {s.name}
                  </h3>
                  <p className="text-xs text-black mt-2">
                    {s.count} {s.unit}
                  </p>
                  <span className="text-sm font-medium inline-block mt-3 group-hover:translate-x-1 transition-transform duration-300">
                    explore &rarr;
                  </span>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
