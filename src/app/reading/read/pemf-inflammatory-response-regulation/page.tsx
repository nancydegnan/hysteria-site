import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function PEMFInflammatoryRegulationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">the evidence</p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              How Pulsed Electromagnetic Fields Regulate Inflammation
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Amr Kaadan, Simona Salati, Ruggero Cadossi &amp; Roy Aaron
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              Bioengineering, April 2025
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

        {/* ── What PEMF is ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What PEMF therapy is and how it reaches your cells
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Pulsed electromagnetic field (PEMF) therapy delivers low-frequency electromagnetic pulses into the body{"\u2019"}s tissues. Unlike red light therapy, which works through photon absorption in mitochondria, PEMF works through electromagnetic induction {"\u2014"} the pulses create micro-currents in your tissue that interact with cell surface receptors and intracellular signaling pathways. It{"\u2019"}s non-invasive, painless, and has been used in clinical settings for decades, primarily in orthopedics for bone healing and fracture repair.
              </p>
              <p>
                This 2025 review from Brown University and Igea S.p.A. examines the growing body of evidence that PEMF{"\u2019"}s effects extend well beyond bone. The paper maps how electromagnetic pulses regulate inflammatory signaling at the molecular level {"\u2014"} suppressing the same pathways that drive chronic inflammatory conditions. For anyone managing a disease defined by persistent, dysregulated inflammation, the mechanisms described here are directly relevant.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The adenosine receptor pathway ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The adenosine receptor pathway: how PEMF talks to your immune cells
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The central mechanism the review describes is PEMF{"\u2019"}s interaction with adenosine receptors {"\u2014"} specifically the A2A and A3 subtypes. Adenosine is a naturally occurring molecule your body uses to regulate inflammation. When adenosine binds to A2A receptors on immune cells, it sends a signal to dial down inflammatory activity. Your body already has this system. PEMF amplifies it.
              </p>
              <p>
                The review describes research showing that PEMF exposure upregulates the expression of A2A and A3 adenosine receptors on the cell surface, making them more responsive to the adenosine your body is already producing. It also enhances the downstream signaling from those receptors, increasing cAMP production {"\u2014"} a second messenger molecule that suppresses inflammatory gene transcription. The net effect is that PEMF boosts the activity of an existing anti-inflammatory system rather than introducing a foreign one.
              </p>
              <p>
                This is a meaningful distinction. PEMF is not adding a drug to your system. It is making your own anti-inflammatory signaling work more efficiently.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── NF-κB and cytokine suppression ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Suppressing NF-{"\u03BA"}B and the inflammatory cascade
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The adenosine receptor activation feeds into the suppression of NF-{"\u03BA"}B {"\u2014"} the master transcription factor that controls the expression of pro-inflammatory genes. When NF-{"\u03BA"}B is activated, it turns on the production of cytokines like TNF-{"\u03B1"}, IL-1{"\u03B2"}, and IL-6 {"\u2014"} the same inflammatory messengers that are elevated in the peritoneal fluid of endometriosis patients and that drive lesion activity, nerve sensitization, and pain.
              </p>
              <p>
                The review consolidates evidence from multiple in vitro and in vivo studies showing that PEMF suppresses both the NF-{"\u03BA"}B and MAPK signaling pathways. In macrophage models, PEMF exposure produced statistically significant decreases in IL-1{"\u03B2"} and TNF-{"\u03B1"} secretion. In cell models exposed to TNF-{"\u03B1"} to simulate an inflammatory environment, PEMF significantly reduced NF-{"\u03BA"}B reporter expression. The inflammatory signal goes in, and PEMF helps turn the volume down.
              </p>
              <p>
                Beyond suppressing inflammation, the review also documents PEMF{"\u2019"}s effects on extracellular matrix synthesis {"\u2014"} the structural scaffolding that supports tissue repair. By reducing the inflammatory environment while simultaneously promoting repair processes, PEMF addresses both sides of the chronic inflammation equation: less damage, more healing.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Clinical evidence ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Where the clinical evidence stands
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The review covers clinical applications across soft tissue wound healing, cartilage and joint repair, angiogenesis, and diabetic wound healing. In clinical trials for early-stage osteoarthritis, PEMF produced symptom relief and functional improvement. In post-surgical recovery, it accelerated healing and reduced inflammatory markers. The evidence base is strongest in orthopedic and musculoskeletal applications, where PEMF has been studied for decades.
              </p>
              <p>
                For autoimmune and chronic inflammatory conditions specifically, the clinical translation is earlier stage. The mechanistic evidence is robust {"\u2014"} the pathways PEMF modulates (NF-{"\u03BA"}B, MAPK, pro-inflammatory cytokine production) are the same pathways that drive disease activity in conditions like endometriosis, rheumatoid arthritis, and inflammatory bowel disease. But disease-specific clinical trials in those populations are still limited. The science is ahead of the clinical protocols.
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
                If you have endometriosis, here is why PEMF matters: your disease is driven by chronic, dysregulated inflammation. Your peritoneal fluid has elevated levels of TNF-{"\u03B1"}, IL-1{"\u03B2"}, and IL-6. Your NF-{"\u03BA"}B pathway is overactive. Your macrophages are stuck in a pro-inflammatory state. Every one of those markers is a target that PEMF has been shown to modulate in published research. The review does not study endometriosis specifically, but the inflammatory architecture it describes is the same architecture your disease runs on.
              </p>
              <p>
                What makes PEMF particularly interesting alongside red light therapy is that they work through different entry points. Red light therapy acts on mitochondrial cytochrome c oxidase and modulates macrophage polarization directly. PEMF acts on adenosine receptors at the cell surface and suppresses NF-{"\u03BA"}B through a separate signaling cascade. They target overlapping outcomes {"\u2014"} reduced pro-inflammatory cytokines, enhanced tissue repair {"\u2014"} through complementary mechanisms. This is not redundancy. It is convergent biology from different directions.
              </p>
              <p>
                This does not mean you should interpret this as a treatment prescription. There are no published clinical trials testing PEMF specifically in endometriosis patients. But if you are building a self-management strategy that includes modalities targeting inflammation {"\u2014"} anti-inflammatory nutrition, nervous system regulation, pelvic floor therapy {"\u2014"} the immunological case for PEMF is grounded in the same peer-reviewed science that supports those approaches. The pathways are documented. What is needed next is clinical research that tests PEMF in the endo population specifically.
              </p>
              <p>
                If you{"\u2019"}re exploring PEMF devices, be aware that parameters matter. The studies referenced in this review use specific frequencies, intensities, and exposure durations that produce anti-inflammatory effects. Higher is not better, longer is not better, and consumer devices vary widely in their output specifications. Work with a provider who understands the dosing literature, or at minimum, look for devices whose parameters align with the research.
              </p>
              <p>
                This is the{" "}
                <a
                  href="https://shop.infraredsauna.com/products/amethyst-pemf-mat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-charcoal transition-colors duration-300"
                >
                  PEMF mat
                </a>
                {" "}I use, because it has different frequency levels that you can customize (which many others don{"\u2019"}t). I use this daily as part of my experiment to put my endo into remission.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.mdpi.com/2306-5354/12/5/474"
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
