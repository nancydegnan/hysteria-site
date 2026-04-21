import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function RecentAdvancesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the evidence
            </p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Endometriosis: Recent Advances That Could Accelerate Diagnosis and Improve Care
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Griffiths, Horne, Gibson, Roberts, and Saunders
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              Trends in Molecular Medicine, 2024
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

        {/* ── Reader-friendly summary intro ── */}
        <RevealSection>
          <section className="mb-14 border-b border-gray-mid pb-14">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
              <span className="ncc-logo" style={{ fontSize: "inherit", transform: "none" }}>The No Cure Club</span>{" "}
              <em className="playfair-italic font-light">breakdown</em>
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-sm text-charcoal leading-[1.4]">
              A plain-language breakdown of this paper. For the original publication, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── The big reframe ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The big reframe
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The core argument of this paper is that endometriosis should be understood as a multi-system disorder, not a narrow gynecological one. That framing matters. It shifts the research agenda away from treating endometriosis like an isolated reproductive issue and toward studying it alongside the conditions it genuinely shares biology with: migraine, IBS, depression, asthma, and other inflammatory diseases.
              </p>
              <p>
                The authors argue that personalized, symptom-first care is where the field needs to go. That means less obsession with surgical staging and more attention to what patients actually live with.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why diagnosis takes so long ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why diagnosis takes so long, and what{"\u2019"}s changing
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Laparoscopic surgery is still the official gold standard for diagnosing endometriosis. That{"\u2019"}s a big part of why average diagnostic delays run many years. The review looks at where imaging is catching up.
              </p>
              <p>
                Transvaginal ultrasound and MRI are already reliable for diagnosing ovarian and deep disease. Two newer methods are pushing further.
              </p>
              <p>
                <strong>Magnetic resonance elastography (MRE)</strong> measures tissue stiffness by introducing gentle acoustic waves into the body. Because endometriosis lesions are fibrotic and stiffer than surrounding tissue, MRE has real potential to detect lesions non-invasively and tell a surgeon in advance whether a lesion is hard or soft.
              </p>
              <p>
                <strong>PET-CT</strong> uses injected tracers that accumulate in areas of disease activity. Newer total-body PET-CT scanners produce higher-resolution images faster and with much lower radiation exposure, which matters for reproductive-age women. Several tracers are in testing, though none has yet shown strong enough accuracy to replace surgery.
              </p>
              <p>
                Superficial peritoneal lesions, which make up about 80% of endometriosis cases, remain the hardest to image. That{"\u2019"}s the gap the field is racing to close.
              </p>
              <p>
                A commercial saliva-based miRNA test has also launched, though larger validation data is still pending.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Fertility ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why endometriosis affects fertility, and why it{"\u2019"}s not just one thing
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Up to a third of people with endometriosis have trouble getting pregnant, and those who do face higher rates of pregnancy complications. The review lays out several overlapping mechanisms.
              </p>
              <p>
                <strong>Progesterone resistance.</strong> The endometrium in people with endometriosis often shows a blunted or mistimed response to progesterone, which disrupts the hormonal choreography an embryo needs to implant.
              </p>
              <p>
                <strong>Altered gene expression and epigenetic changes.</strong> Large-scale studies have found differences in how endometrial genes are regulated in people with endometriosis, including DNA methylation patterns that may both raise risk for the disease and impair endometrial function.
              </p>
              <p>
                <strong>Ovarian inflammation.</strong> Single-cell analysis of ovarian endometriosis has identified epithelial abnormalities that appear to originate from endometrial tissue and drive chronic inflammation inside the ovary itself.
              </p>
              <p>
                <strong>Damage to ovarian reserve.</strong> The data on AMH, a hormone used as a marker of ovarian follicle count, is genuinely mixed. But one of the most important findings in this review: AMH levels decline over time in people with endometriosis even when they never have surgery. This suggests the disease itself damages ovarian reserve, not just surgical intervention. That{"\u2019"}s a significant point, and it argues for earlier conversations about fertility.
              </p>
              <p>
                <strong>IVF outcomes.</strong> People with endometriosis typically need more fertility medications, retrieve fewer eggs, and produce fewer mature oocytes. Stage III and IV patients fare worst. Whether live birth rates are meaningfully lower remains contested in the literature.
              </p>
              <p>
                The honest conclusion from the paper is that endometriosis-associated infertility is multifactorial, and inflammation is probably driving more of it than the field has historically credited.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Shared genetics ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Shared genetics, and why that{"\u2019"}s a big deal
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Large genomic studies have identified genetic variants that overlap between endometriosis and migraine, depression, IBS, asthma, and other inflammatory conditions. This is not a coincidence. It{"\u2019"}s an opportunity.
              </p>
              <p>
                The overlap means drugs developed for those other conditions may work for endometriosis. The review specifically highlights CGRP inhibitors, a newer class of migraine drugs including atogepant, as a strong candidate. CGRP protein has been located on nerve fibers in endometriosis lesions, and preclinical work on a CGRP-receptor inhibitor showed real promise.
              </p>
              <p>
                Drug repurposing is likely one of the fastest routes to meaningful new treatments.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── New drugs ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              New drugs in the pipeline for pain
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The review tracks the current wave of inflammation-targeting drugs going after the prostaglandin pathway. This is the same pathway NSAIDs target, but with more precision and, ideally, without the long-term side effects.
              </p>
              <p>
                Earlier candidates targeting COX-2 and AKR1C3 were discontinued due to liver and vascular toxicity. The AKR1C3 inhibitor trial was stopped when two participants developed drug-induced liver injury.
              </p>
              <p>
                The current focus is on <strong>mPGES-1 inhibitors</strong>, which block overproduction of PGE2 without the side effect profile of older drugs. Two are in clinical trials:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NS-580 (friluglanstat)</strong> from Nippon Shinyaku, in a Phase 2 trial of 380 women</li>
                <li><strong>GS-248 (vipoglanstat)</strong> from Gesynta, moving toward Phase 2</li>
              </ul>
              <p>
                A separate target is <strong>IL-8</strong>, a cytokine elevated in the peritoneal fluid of endometriosis patients. Chugai Pharma has run a Phase 2 trial of <strong>AMY109</strong>, a long-acting anti-IL-8 antibody, due to report by the end of 2024.
              </p>
              <p>
                If even some of these succeed, pain treatment for endometriosis will look meaningfully different within five years.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Gut-brain axis ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The gut-brain axis is finally getting attention
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                This is where the paper gets genuinely new. The gut-microbiota-brain axis regulates inflammation, mood, and pain, all of which are central to endometriosis. Patients routinely report IBS-like symptoms including bloating, diarrhea, and constipation, and recent genomic work has confirmed shared genetic risk factors between IBS and endometriosis.
              </p>
              <p>
                <strong>Gut dysbiosis is measurable.</strong> People with endometriosis tend to show elevated levels of Proteobacteria, Verrucomicrobia, Streptococcus, and Fusobacteria. Prevotella specifically has been associated with GI symptoms.
              </p>
              <p>
                <strong>The estrobolome matters.</strong> Some gut bacteria produce beta-glucuronidase, an enzyme that reactivates estrogen from its inactive form. People with endometriosis appear to have elevated beta-glucuronidase activity and higher levels of unconjugated estrogen metabolites in stool. That means the gut may be directly contributing to the estrogen load that fuels lesions.
              </p>
              <p>
                <strong>A specific bacterium may actively drive lesion formation.</strong> Animal studies on <em>Fusobacterium nucleatum</em> showed that antibiotic treatment prevented lesion formation and reduced the size of existing lesions. This opens a genuinely novel question: could antibiotics eventually have a role in endometriosis treatment?
              </p>
              <p>
                <strong>Diet studies show promise but remain small.</strong> The review summarizes trials on low-FODMAP, gluten-free, anti-inflammatory protocols, curcumin, and <em>Lactobacillus</em> probiotics. Most show pain or GI improvement, but sample sizes are small and durations are short. No single diet has emerged as definitive.
              </p>
              <p>
                The authors argue the gut microbiome should be evaluated routinely in endometriosis care so that diet, probiotic, and lifestyle advice can be individualized rather than generic.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── What this actually means ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What this actually means
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Three takeaways worth holding onto.
              </p>
              <p>
                The field has stopped treating endometriosis as a standalone pelvic disease. It{"\u2019"}s being studied as part of a network of inflammatory, neurological, and GI conditions with shared biology. That changes what treatments become possible, and it validates what patients have been saying for years about the range of symptoms they experience.
              </p>
              <p>
                Fertility impacts are driven by multiple mechanisms, not just lesion location or surgical history. Inflammation is damaging ovarian reserve before any surgery happens. This deserves much earlier conversation with patients, not vague reassurance that fertility can be addressed later.
              </p>
              <p>
                The gut is no longer a side topic. Microbiome composition, estrogen metabolism, and specific bacterial infections may each be driving parts of the disease. That means self-management strategies around diet, supplements, and gut health are grounded in real biology, not wellness theater.
              </p>
              <p>
                The future of endometriosis care is going to be less standardized and more personalized. This paper is a solid map of where the research is already heading.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.sciencedirect.com/science/article/pii/S1471491424001667"
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
