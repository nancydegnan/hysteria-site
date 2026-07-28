import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function ToxicMetalsInTamponsPage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the evidence
            </p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              A Study Found Toxic Metals in Popular Tampon Brands. Here{"\u2019"}s What Experts Advise
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Rachel Treisman
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              NPR, July 2024
            </p>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-4xl mx-auto pt-16 md:pt-24">
        <Link
          href="/reading"
          className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block"
        >
          &larr; back to the library
        </Link>

        {/* ── NCC breakdown intro ── */}
        <RevealSection>
          <section className="mb-14 border-b border-gray-mid pb-14">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
              <span className="ncc-logo" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span>{" "}
              <em className="playfair-italic font-light">breakdown</em>
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">
              A plain-language breakdown of this article. For the original, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── What the study found ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Lead, arsenic, and cadmium {"\u2014"} in every tampon tested
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                In July 2024, researchers at UC Berkeley and Columbia University published the first study ever to measure metal contaminants in tampons. Led by postdoctoral scholar Jenni Shearston, the team tested 30 tampons across 14 brands and 18 product lines {"\u2014"} purchased from stores in New York City, London, and Athens between September 2022 and March 2023 {"\u2014"} and found detectable levels of 16 different metals in the products. That includes lead, arsenic, cadmium, chromium, and mercury.
              </p>
              <p>
                The numbers: median lead concentration was 173 nanograms per gram. Elevated mean concentrations of lead (120 parts per billion), cadmium (6.74 ppb), and arsenic (2.56 ppb) were measured across the sample. Zinc had the highest overall concentration. Twelve of the 16 metals tested were found in 100% of the tampons {"\u2014"} meaning no brand was clean.
              </p>
              <p>
                One finding that complicates the {"\u201C"}just buy organic{"\u201D"} reflex: lead concentrations were higher in non-organic tampons, but arsenic concentrations were actually higher in organic ones. The contamination is not as simple as one category being safe and the other not.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why this is different from other exposure routes ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why vaginal exposure is not the same as skin exposure
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The reason this study matters more than a general {"\u201C"}chemicals are everywhere{"\u201D"} headline is the route of exposure. Vaginal tissue is mucosal {"\u2014"} it absorbs substances more readily than external skin. The researchers emphasized that vaginal skin has a higher potential for chemical absorption than skin elsewhere on the body, meaning contaminants in tampons may enter the bloodstream more efficiently than those encountered through, say, handling a contaminated product with your hands.
              </p>
              <p>
                A tampon sits in direct contact with this highly absorptive tissue for hours at a time, often during the heaviest days of your cycle when blood flow to the pelvic region is already elevated. And the exposure is repeated: an average tampon user goes through about 12,000 tampons in a lifetime. That{"\u2019"}s not a one-time contact. It{"\u2019"}s a cumulative, decades-long chemical exposure to a part of the body that was never designed to filter toxins.
              </p>
              <p>
                The metals found {"\u2014"} lead, cadmium, arsenic {"\u2014"} are not benign at any level of exposure. They can damage the liver, kidneys, and brain. They disrupt the cardiovascular, nervous, and endocrine systems. Lead has no known safe threshold in the human body. And these metals bioaccumulate, meaning they build up in your tissues over time.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Where the metals come from and why no one checks ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Where the metals come from {"\u2014"} and why no one was checking
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The contamination has multiple entry points. Raw materials like cotton and rayon can absorb metals from contaminated water, air, or soil during cultivation. In some cases, metals may be added intentionally during the manufacturing process {"\u2014"} for odor control, as pigments or colorants, or as antibacterial agents.
              </p>
              <p>
                Here{"\u2019"}s the regulatory failure that should make you angry: the FDA classifies tampons as medical devices, but it has no requirements for manufacturers to test their products for metal contaminants. The only chemical testing the FDA recommends {"\u2014"} not requires {"\u2014"} is for pesticide residue and dioxin. That{"\u2019"}s it. No one was testing for lead in tampons because no one was required to. This study was literally the first to do it.
              </p>
              <p>
                After the study was published, the FDA announced it would investigate the potential hazard, and members of the Democratic Women{"\u2019"}s Caucus in Congress pressed the agency to act. But as of the article{"\u2019"}s publication, there were still no binding requirements for metal testing, no product recalls, and no labeling mandates. The products that were tested remain on shelves.
              </p>
            </div>
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
                If you have endometriosis, you are already managing a disease driven by chronic inflammation, immune dysfunction, and estrogen dominance. Heavy metals like lead and cadmium are endocrine disruptors {"\u2014"} they interfere with the very hormonal signaling your body is already struggling to regulate. Adding a repeated source of heavy metal exposure directly to the most absorptive tissue in your pelvic region is, at a minimum, something you should know about and have the choice to reduce.
              </p>
              <p>
                The practical advice from the study{"\u2019"}s lead author and other experts: choose tampons without added fragrances, colorants, or plastic applicators, as these may introduce additional contaminant pathways. But the honest takeaway from this research is that no tampon brand tested clean. If reducing your toxic load is part of your endo management strategy {"\u2014"} and it should be {"\u2014"} consider switching to menstrual products that don{"\u2019"}t sit inside your body for hours at a time. Menstrual cups (medical-grade silicone), menstrual discs, and PFAS-free organic cotton pads are alternatives that avoid the internal mucosal exposure route entirely or significantly reduce it.
              </p>
              <p>
                If you{"\u2019"}re not ready to switch entirely, you can still lower your exposure: change tampons more frequently, avoid overnight tampon use, and opt for products with the fewest added materials. Every reduction counts when you{"\u2019"}re dealing with a condition that{"\u2019"}s sensitive to cumulative environmental insults.
              </p>
              <p>
                This study didn{"\u2019"}t prove that tampons cause endometriosis or make it worse. What it proved is that a product used by millions of women for decades was never tested for toxic metal contamination by anyone {"\u2014"} not the manufacturers, not the FDA, not a single regulatory body. You deserved to know this sooner. You know it now. Make whatever decision serves your health.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.npr.org/2024/07/11/nx-s1-5036484/tampons-heavy-metals-study"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-charcoal transition-colors duration-300"
          >
            read the original article &rarr;
          </a>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
}
