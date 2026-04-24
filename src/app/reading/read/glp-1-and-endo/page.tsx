import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function GLP1AndEndoPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              read
            </p>
            <h1 className="playfair text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Two Important Pieces of Research About GLP-1{"\u2019"}s and Endo
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-base text-black mt-4">
              Krasnyi et al., 2022 &amp; Sola-Leyva et al., 2025
            </p>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link
          href="/reading"
          className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block"
        >
          &larr; back to the library
        </Link>

        {/* ── Paper 1 ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Paper 1: Krasnyi et al., 2022
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-black mb-2">
              International Journal of Molecular Sciences
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mb-6">
              {"\u201C"}The Levels of Ghrelin, Glucagon, Visfatin and GLP-1 Are Decreased in the Peritoneal Fluid of Women with Endometriosis Along with the Increased Expression of the CD10 Protease by the Macrophages{"\u201D"}
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black mb-4">
              This is the foundational paper. The study evaluated energy metabolism factors including GLP-1 in the peritoneal fluid of 54 women with endometriosis compared to a control group of 30 women without it. It found that GLP-1 concentrations in peritoneal fluid were significantly reduced in endometriosis patients.
            </p>
            <h3 className="playfair text-lg md:text-xl font-bold leading-tight mb-3 mt-8">
              Why this matters
            </h3>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black mb-4">
              Decreased GLP-1 levels were correlated with reduced expression of the pro-inflammatory CD86 macrophage marker in peritoneal fluid &mdash; a marker that plays a critical role in the elimination of endometrial cells after retrograde menstruation. In other words, low GLP-1 in the pelvic environment appears to impair the immune system{"\u2019"}s ability to clear the debris that seeds endometriotic lesions in the first place. The authors concluded that a decrease in GLP-1 in peritoneal fluid may contribute to endometriosis development through its impact on the expression of pro-inflammatory markers of macrophages.
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black mb-6">
              This paper is the biological {"\u201C"}why{"\u201D"} &mdash; it establishes that GLP-1 is native to the pelvic environment, that endo patients have less of it, and that this deficit is functionally linked to immune dysfunction specific to the disease.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/36142272/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-charcoal transition-colors duration-300"
            >
              take me to the original article &rarr;
            </a>
          </section>
        </RevealSection>

        {/* ── Paper 2 ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Paper 2: Sola-Leyva et al., 2025
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-black mb-2">
              Acta Obstetricia et Gynecologica Scandinavica (Karolinska Institute)
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mb-6">
              {"\u201C"}The Hidden Impact of GLP-1 Receptor Agonists on Endometrial Receptivity and Implantation{"\u201D"}
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black mb-4">
              This is a comprehensive review of published literature through mid-2024 on GLP-1 receptor agonists and the female reproductive system, conducted by researchers at Karolinska University Hospital and Karolinska Institutet, with a focus on the endometrium. It builds directly on Krasnyi{"\u2019"}s findings and is the most current synthesis of where the science stands.
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black mb-6">
              The authors theorized that GLP-1 agonist medications could improve endometrial receptivity &mdash; the ability of the uterine lining to be ready for implantation &mdash; possibly by reducing inflammation and obesity, both of which negatively affect endometrial health, and noted that more research is needed. It also frames a research agenda for future trials using endometrial organoid models to test GLP-1 RA effects directly on endo tissue.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/39696822/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-charcoal transition-colors duration-300"
            >
              take me to the original article &rarr;
            </a>
          </section>
        </RevealSection>

        {/* ── What the two papers together suggest ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What the two papers together suggest
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black mb-4">
              What the two papers together suggest is a coherent loop: endo patients have less natural GLP-1 in their pelvic environment, that deficit promotes the pro-inflammatory macrophage dysfunction that lets lesions take hold, and GLP-1 receptor agonists could theoretically restore that balance &mdash; suppressing NF-{"\u03BA"}B signaling, reducing cytokine production (TNF-{"\u03B1"}, IL-6), and re-polarizing macrophages toward an anti-inflammatory state.
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              Emerging 2024 and 2025 data has shifted the paradigm on GLP-1 RAs from purely metabolic drugs to systemic immunometabolic modulators, with anti-inflammatory effects that appear to be partially independent of weight loss &mdash; which is critical for understanding their potential in conditions like endometriosis.
            </p>
          </section>
        </RevealSection>

        {/* ── What this means for your care ── */}
        <RevealSection>
          <section className="mb-14 border-l-4 border-black py-8 pl-8 pr-6">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What this means for your care
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                If you{"\u2019"}re on a GLP-1 medication like Ozempic or Mounjaro for weight management or metabolic health and you also have endo, pay attention to what happens to your symptoms. Some women in this community have reported reduced pelvic pain, less bloating, and fewer flares {"\u2014"} and this research offers a biological explanation for why that might be happening. Your GLP-1 medication may be doing more than managing your blood sugar. It may be partially restoring the immune balance your pelvic environment is missing.
              </p>
              <p>
                If you{"\u2019"}re not on a GLP-1 and don{"\u2019"}t plan to be, the deeper takeaway still applies: your endo may be driven as much by immune dysfunction as by estrogen. That reframe matters when you{"\u2019"}re building a treatment strategy. Hormonal suppression targets one piece. Anti-inflammatory nutrition, gut health, and immune support target another {"\u2014"} the piece this research says may be more foundational than the field previously understood.
              </p>
              <p>
                If you{"\u2019"}re struggling with fertility alongside your endo diagnosis, the second paper{"\u2019"}s focus on endometrial receptivity is worth noting. The authors theorize that GLP-1 agonists could improve the uterine lining{"\u2019"}s readiness for implantation by reducing the inflammation that impairs it. This isn{"\u2019"}t a treatment recommendation {"\u2014"} it{"\u2019"}s an active research question {"\u2014"} but it{"\u2019"}s worth raising with a reproductive endocrinologist who is keeping up with the literature.
              </p>
              <p>
                These papers are early. But they point toward something this community already senses: that endometriosis is an immune disease being treated with hormonal band-aids, and the real breakthroughs will come from understanding the inflammation at its root.
              </p>
            </div>
          </section>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
}
