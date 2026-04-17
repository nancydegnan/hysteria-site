import Link from "next/link";
import { notFound } from "next/navigation";
import { researchGroups } from "../../data";
import { RevealSection, Footer, SubpageNav } from "../../../components";

const allArticles = researchGroups.flatMap((g) =>
  g.articles.map((a) => ({ ...a, category: g.theme }))
);

export function generateStaticParams() {
  return allArticles
    .filter((a) => a.slug && a.slug !== "glp-1-and-endo")
    .map((a) => ({ slug: a.slug! }));
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              research
            </p>
            <h1 className="playfair text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {article.title}
            </h1>
            {article.author && (
              <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-base text-black mt-4">
                {article.author}
              </p>
            )}
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link
          href="/reading/research"
          className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block"
        >
          &larr; back to research
        </Link>

        {/* ── Summary ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black mb-4">
              Summary
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              {article.description}
            </p>
          </section>
        </RevealSection>

        {/* ── How can I apply this research in my life? ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black mb-4">
              How Can I Apply This Research in My Life?
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black italic">
              Content coming soon.
            </p>
          </section>
        </RevealSection>

        {/* ── Original article link ── */}
        <RevealSection>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-charcoal transition-colors duration-300"
          >
            take me to the original article &rarr;
          </a>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
}
