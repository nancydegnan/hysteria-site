import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function NonToxicPeriodProductsPage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />
      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">the practice</p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Non-Toxic Period Products: A Guide to Safer Cycles
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">Cristina Solis</p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">Orbasics</p>
          </RevealSection>
        </header>
      </div>
      <main className="px-6 pb-20 md:pb-28 max-w-4xl mx-auto pt-16 md:pt-24">
        <Link href="/reading" className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block">&larr; back to the library</Link>

        <RevealSection>
          <section className="mb-14 border-b border-gray-mid pb-14">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
              <span className="ncc-logo" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span>{" "}
              <em className="playfair-italic font-light">breakdown</em>
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">A plain-language breakdown of this article. For the original, scroll to the bottom.</p>
          </section>
        </RevealSection>

        {/* ── What's hiding in conventional products ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What{"\u2019"}s actually in your pads and tampons
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The short answer: more than you{"\u2019"}d expect, and none of it listed on the label. A 2024 peer-reviewed study found heavy metals{" "}{"\u2014"}{" "}including lead, arsenic, and cadmium{" "}{"\u2014"}{" "}in 100% of the 30 popular tampon brands it tested. Separate research has identified phthalates in up to 100% of menstrual products analyzed. These are not fringe findings. More than two dozen studies have now flagged toxic chemicals in period products.
              </p>
              <p>
                Here{"\u2019"}s the list that matters: <strong>dioxins</strong> (a byproduct of chlorine bleaching, linked to cancer and hormone disruption), <strong>phthalates</strong> (endocrine disruptors found in 90% of menstrual products tested), <strong>PFAS</strong> ({"\u201C"}forever chemicals{"\u201D"} detected in 48% of pads and 65% of period underwear), <strong>volatile organic compounds</strong> like toluene, methylene chloride, and xylene (linked to hormone disruption and cancer risk), <strong>pesticide residues</strong> including glyphosate in non-organic cotton, and other known or probable <strong>carcinogens</strong> including styrene, chloroform, and benzene.
              </p>
              <p>
                Some of these are manufacturing byproducts. Others are intentionally added{" "}{"\u2014"}{" "}phthalate-containing plastics, fragrances, superabsorbent polymers. Packaging and applicators introduce even more, including BPA and additional PFAS.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why vaginal absorption matters ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why vaginal tissue makes this worse
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                This isn{"\u2019"}t like chemicals sitting on the surface of your arm. Vaginal tissue{" "}{"\u2014"}{" "}including the vaginal canal{" "}{"\u2014"}{" "}is far more absorbent than skin. According to research from Women{"\u2019"}s Voices for the Earth, anything on a pad or tampon can enter the bloodstream directly, bypassing the first-pass metabolism that would normally filter some toxins through the liver. You{"\u2019"}re using these products for days at a time, every month, for decades. The exposure is cumulative. Dioxins accumulate in the body over time. PFAS are called {"\u201C"}forever chemicals{"\u201D"} because they don{"\u2019"}t break down. Repeated low-dose exposure adds up.
              </p>
              <p>
                And the regulatory picture offers no safety net. The FDA regulates pads and tampons as medical devices but does not require routine chemical testing or full ingredient disclosure. The approval process has been widely criticized as cursory at best {"\u2014"} there is no meaningful barrier between a manufacturer and the market. Only New York and California have passed laws requiring ingredient disclosure on menstrual product packaging. Everywhere else, you{"\u2019"}re on your own.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Safer alternatives ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Safer alternatives and what to look for
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                <strong>Menstrual cups and discs.</strong> Medical-grade silicone is inert, BPA-free, latex-free, and non-leaching. It doesn{"\u2019"}t react with bodily fluids and contains no added fragrances or hidden chemicals. A well-made silicone cup is one of the cleanest options available. Look for brands that publish third-party PFAS testing results, since a 2023 study found trace PFAS in some cup brands. Sterilize by boiling for 5{"\u2013"}10 minutes between cycles.
              </p>
              <p>
                <strong>Organic cotton tampons and pads.</strong> Look for 100% organic cotton{" "}{"\u2014"}{" "}not {"\u201C"}cotton blend{"\u201D"} or {"\u201C"}natural feel.{"\u201D"} The tampon and the string should both be organic cotton. Avoid plastic applicators (choose cardboard or applicator-free). Choose unscented, chlorine-free, and dye-free. Certifications that actually mean something: GOTS (Global Organic Textile Standard), USDA Organic, Soil Association Organic, and ICEA Certified Organic.
              </p>
              <p>
                <strong>PFAS-free period underwear.</strong> This category requires the most scrutiny. Mamavation found PFAS in 65% of period underwear tested, and Thinx{" "}{"\u2014"}{" "}a brand that marketed itself as non-toxic{" "}{"\u2014"}{" "}was found to contain PFAS. Look for brands that provide published PFAS test results and carry OEKO-TEX Standard 100 certification, which screens for hundreds of harmful substances including PFAS and heavy metals. An organic cotton top layer is a plus. Try{" "}
                <a
                  href="https://period.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-charcoal transition-colors duration-300"
                >
                  The Period Company
                </a>.
              </p>
              <p>
                <strong>On labels, look for:</strong> certified organic cotton (GOTS, USDA Organic), medical-grade silicone or TPE, fragrance-free and dye-free, no PFAS with testing to prove it, third-party seals (MADE SAFE, OEKO-TEX Standard 100, Nordic Swan), and full ingredient transparency. If a brand won{"\u2019"}t tell you exactly what{"\u2019"}s in their product, that tells you enough.
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
                If you have endometriosis, this isn{"\u2019"}t just a general wellness concern{" "}{"\u2014"}{" "}it{"\u2019"}s directly relevant to your disease biology. Endometriosis is an estrogen-dependent, inflammatory condition. Many of the chemicals found in conventional period products are endocrine disruptors: phthalates, dioxins, PFAS, and pesticide residues like glyphosate all interfere with hormonal signaling. Specifically, they can mimic or amplify estrogen in your body. For someone with endo, that means these chemicals may be actively fueling the estrogen dominance that drives lesion growth, inflammation, and pain. You{"\u2019"}re placing these products on the most absorbent tissue in your body, for days every month, during the exact phase of your cycle when your system is already managing an inflammatory load.
              </p>
              <p>
                You don{"\u2019"}t need to overhaul everything at once. Start with one swap: replace your current tampons or pads with a certified organic cotton version{" "}{"\u2014"}{" "}unscented, chlorine-free, no plastic applicator. That single change removes a significant chemical exposure from your heaviest-use product. If you{"\u2019"}re open to reusables, a medical-grade silicone menstrual cup eliminates the chemical question entirely for your internal product. Each change reduces your endocrine disruptor load, and for endo, that load matters.
              </p>
              <p>
                This sits alongside everything else you{"\u2019"}re already doing{" "}{"\u2014"}{" "}anti-inflammatory nutrition, gut health, nervous system work. You{"\u2019"}re already reducing inflammation through those channels. Don{"\u2019"}t undermine that effort by introducing endocrine disruptors through the products you use during your most vulnerable days. The research is clear enough to act on: fewer chemicals in, less fuel for the disease.
              </p>
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <a href="https://orbasics.com/blogs/stories/best-non-toxic-period-products" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-charcoal transition-colors duration-300">read the original article &rarr;</a>
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
}
