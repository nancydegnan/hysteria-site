import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function PhotobiomodulationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">the evidence</p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              The Immune Science Behind Red Light Therapy
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Osama Fekry Al Balah, Maha Rafie &amp; Abdel-Rahman Osama
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              Lasers in Medical Science, 2025
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
              A plain-language breakdown of this review. For the original publication, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── What photobiomodulation is ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What photobiomodulation actually is {"\u2014"} and why it matters for inflammation
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Photobiomodulation (PBM) is the clinical term for what most people know as red light therapy or low-level light therapy. It uses specific wavelengths of red (around 630 nm) and near-infrared (around 810{"\u2013"}850 nm) light to trigger biological changes at the cellular level. This is not heat therapy. It is not UV. The light penetrates tissue and interacts directly with your mitochondria {"\u2014"} specifically with an enzyme called cytochrome c oxidase in the mitochondrial electron transport chain.
              </p>
              <p>
                When that enzyme absorbs the light, it accelerates electron flow, increases ATP production, and modulates the release of reactive oxygen species and nitric oxide. In plain language: it gives your cells more energy to work with and shifts the signaling environment inside them. That shift is what makes PBM relevant to immune function {"\u2014"} and to any disease driven by chronic inflammation.
              </p>
              <p>
                This 2025 review from Cairo University is the most comprehensive synthesis to date of how PBM affects the immune system. It covers three major immune cell types {"\u2014"} macrophages, T cells, and dendritic cells {"\u2014"} and maps the signaling pathways that connect light exposure to measurable changes in immune behavior.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Macrophage polarization ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Macrophages: switching from attack mode to repair mode
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Macrophages are immune cells that exist on a spectrum between two states. M1 macrophages are pro-inflammatory {"\u2014"} they produce cytokines like TNF-{"\u03B1"} and IL-1{"\u03B2"} that drive inflammation and tissue damage. M2 macrophages are anti-inflammatory {"\u2014"} they produce IL-10 and TGF-{"\u03B2"}, clear debris, and promote tissue repair. In a healthy immune response, your body activates M1 to fight a threat and then transitions to M2 to heal. In chronic inflammatory conditions, that transition stalls. The M1 state persists, and the inflammation becomes self-sustaining.
              </p>
              <p>
                The review consolidates evidence showing that PBM, at wavelengths between 600 and 1,000 nm, consistently promotes macrophage polarization from M1 toward M2. Studies using 630 nm red light demonstrated suppression of the STAT1 pathway {"\u2014"} a key driver of the M1 inflammatory phenotype. Research at 808 nm showed increased expression of M2 markers like CD206 and Arginase-1 at energy densities between 0.2 and 10 J/cm{"\u00B2"}. The result across multiple experimental models was the same: reduced production of pro-inflammatory cytokines, increased production of anti-inflammatory mediators, and a shift toward tissue repair.
              </p>
              <p>
                The mechanism runs through NF-{"\u03BA"}B, one of the most important inflammatory signaling pathways in the body. At appropriate doses, PBM suppresses NF-{"\u03BA"}B activation, which dials down the transcription of inflammatory genes. At higher doses, it can have the opposite effect {"\u2014"} which is why dosing parameters matter and more is not always better.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── T cells and dendritic cells ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              T cells and dendritic cells: calming the adaptive immune system
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Macrophages are the innate immune system {"\u2014"} the first responders. T cells are the adaptive immune system {"\u2014"} the targeted, long-term response. In autoimmune and chronic inflammatory conditions, the adaptive immune system is often dysregulated, with overactive effector T cells and insufficient regulatory T cells (Tregs) to keep them in check.
              </p>
              <p>
                The review describes multiple studies showing that PBM increases both the number and function of Tregs. These are the immune cells responsible for suppressing excessive immune responses and preventing your body from attacking its own tissue. Enhancing Treg activity is one of the most direct ways to address the kind of immune dysfunction present in autoimmune and inflammatory diseases.
              </p>
              <p>
                The review also covers dendritic cells {"\u2014"} the immune cells that act as messengers between the innate and adaptive immune systems. In vitro research showed that PBM can enhance the antigen-presenting capabilities of dendritic cells, increasing their expression of surface molecules involved in immune communication. This means PBM does not simply suppress the immune system. It modulates it {"\u2014"} enhancing the regulatory and repair functions while dampening the destructive inflammatory cascade.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Clinical applications and dosing ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Clinical applications and why dosing matters
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The review covers clinical applications of PBM across autoimmune conditions, inflammatory diseases, and wound healing. The consistent finding is that PBM produces measurable anti-inflammatory and immunomodulatory effects when administered within specific wavelength and dosing windows {"\u2014"} generally 600{"\u2013"}1,000 nm at energy densities that vary by tissue type and depth of penetration.
              </p>
              <p>
                One critical point the review emphasizes is the biphasic dose response. At low to moderate doses, PBM suppresses NF-{"\u03BA"}B and shifts the immune environment toward repair. At excessive doses, it can trigger pro-inflammatory cascades and oxidative stress {"\u2014"} the opposite of the intended effect. This is not a case where longer sessions or stronger devices automatically mean better outcomes. The therapeutic window matters, and the review underscores that clinical protocols need to be calibrated to the specific condition and tissue being treated.
              </p>
              <p>
                Early clinical data specific to endometriosis is emerging alongside this mechanistic review. A randomized controlled trial tested pulsed high-intensity laser therapy on 40 women with mild to moderate endometriosis {"\u2014"} three treatments per week for eight weeks {"\u2014"} and found it effective at reducing adhesions and improving quality of life. A separate study comparing red light therapy to combined oral contraceptives for menstrual pain found that both achieved meaningful pain reduction. These are small, early studies, but they align with the immunological mechanisms this review describes.
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
                If you have endometriosis, the macrophage story in this review should get your attention. Endometriosis involves macrophages that are present in the peritoneal fluid but behaving abnormally {"\u2014"} they are pro-inflammatory, they fail to clear endometrial debris, and they contribute to the inflammatory environment that lets lesions establish and grow. The M1-to-M2 polarization shift that PBM promotes is directly relevant to that dysfunction. A therapy that helps macrophages transition from their inflammatory state to their repair state is targeting one of the core immune mechanisms of the disease.
              </p>
              <p>
                The Treg enhancement is equally relevant. Endometriosis involves immune dysregulation beyond just macrophages {"\u2014"} there is evidence of impaired regulatory T cell function, which contributes to the body{"\u2019"}s failure to recognize and eliminate ectopic endometrial tissue. A therapy that strengthens the regulatory arm of the immune system while dampening the inflammatory arm is addressing the disease at a level that hormonal suppression does not touch.
              </p>
              <p>
                This does not mean you should go buy a red light panel and expect it to treat your endo. The clinical evidence specific to endometriosis is still early and limited. But the immunological mechanisms this review documents {"\u2014"} NF-{"\u03BA"}B suppression, macrophage repolarization, Treg enhancement, reduced TNF-{"\u03B1"} and IL-6 {"\u2014"} are the same pathways that drive endometriosis progression. The biology lines up. What{"\u2019"}s needed now is clinical research that tests PBM specifically in endo patients with protocols designed around these mechanisms.
              </p>
              <p>
                If you{"\u2019"}re already using red light therapy as part of your self-management toolkit {"\u2014"} for pain, for pelvic floor recovery, for general inflammation {"\u2014"} this review gives you the biological framework for why it may be helping. And if your provider dismisses it, you now have a 2025 peer-reviewed review from a major medical journal documenting the immunomodulatory mechanisms. This is not fringe wellness. It is published immunology with direct relevance to your disease.
              </p>
              <p>
                This is the{" "}
                <a
                  href="https://shop.infraredsauna.com/products/personal-tower-stand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-charcoal transition-colors duration-300"
                >
                  red light device
                </a>
                {" "}I use everyday as part of my experiment to put my endo into remission for{" "}
                <Link
                  href="/hysteria-doc"
                  className="underline font-semibold hover:text-charcoal transition-colors duration-300"
                >
                  the documentary
                </Link>.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11991943/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-charcoal transition-colors duration-300"
          >
            read the original publication &rarr;
          </a>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
}
