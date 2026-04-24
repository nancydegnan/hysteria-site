import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function NewInsightsReliefPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the foundations
            </p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Endometriosis: New Insights and Opportunities for Relief of Symptoms
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Philippa T. K. Saunders and Andrew W. Horne
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              Biology of Reproduction, Oxford Academic, 2025
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

        {/* ── What this paper is ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What this paper is
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                This is a comprehensive narrative review from two leading endometriosis researchers at the University of Edinburgh. It covers the full landscape of where the science stands {"\u2014"} from what causes the disease, to why diagnosis takes so long, to what{"\u2019"}s actually in the treatment pipeline. If you want one paper that maps the current state of endometriosis research, this is it.
              </p>
              <p>
                The authors frame endometriosis as a <strong>chronic neuroinflammatory disorder</strong> {"\u2014"} not a reproductive inconvenience. That language matters. It positions the disease alongside other serious inflammatory conditions and shifts the conversation away from {"\u201C"}bad periods{"\u201D"} toward the multi-system reality patients actually live with.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── It's not just pain ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              It{"\u2019"}s not just pain {"\u2014"} and the pain itself is more complex than most doctors treat it as
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The review documents what patients already know: endometriosis causes far more than pelvic pain. Fatigue, GI symptoms, bloating, urinary issues, and mood disorders are all part of the disease profile. People with endo have a twofold increased risk of IBS and significantly elevated odds of psychiatric conditions {"\u2014"} independent of pain severity, socioeconomic status, and BMI. These aren{"\u2019"}t side effects of being stressed about your diagnosis. They{"\u2019"}re part of the biology.
              </p>
              <p>
                The paper also breaks down three distinct types of pain operating in endometriosis: <strong>nociceptive pain</strong> (tissue damage from lesions), <strong>neuropathic pain</strong> (nerve damage), and <strong>nociplastic pain</strong> {"\u2014"} where the nervous system itself becomes rewired to amplify pain signals even in the absence of new damage. This is why some patients continue to experience severe pain even after successful surgery. The nervous system has learned pain as its default.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why diagnosis still takes years ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why diagnosis still takes 7{"\u2013"}9 years
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Laparoscopic surgery remains the gold standard for definitive diagnosis. Imaging has improved {"\u2014"} ultrasound and MRI can now detect ovarian endometriomas and deep lesions {"\u2014"} but superficial peritoneal disease, which accounts for the majority of cases, remains largely invisible to current imaging.
              </p>
              <p>
                Biomarker research is underway, including microRNA panels in serum and saliva and fecal metabolite candidates, but none has been validated at scale. AI-assisted imaging analysis is also in early development. Until a reliable non-invasive test exists, patients will continue to navigate a diagnostic system that requires them to prove the severity of a disease the system can{"\u2019"}t easily see.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── What's happening inside lesions ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What{"\u2019"}s happening inside lesions
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Endometriosis lesions are not just displaced tissue sitting passively outside the uterus. They are active microenvironments with their own steroid production, immune cell populations, and blood and nerve supply. The review describes <strong>neuro-angiogenesis</strong> {"\u2014"} the simultaneous growth of new blood vessels and nerve fibers into lesions {"\u2014"} as a key feature of disease progression. Lesions essentially build their own infrastructure.
              </p>
              <p>
                Recent single-cell analysis has revealed metabolic dysfunction within these lesions, specifically altered glycolytic and oxidative metabolism in perivascular and stromal cells. Macrophages {"\u2014"} immune cells that should be clearing the debris {"\u2014"} are present but behaving abnormally, contributing to the inflammatory environment rather than resolving it.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Genetics and comorbidities ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The genetic overlap with other conditions
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Large-scale genomic studies have now identified 42 genetic loci associated with endometriosis, and many of these overlap with migraine, chronic pain, asthma, inflammatory bowel disease, depression, and other GI disorders. One specific locus {"\u2014"} DGKB rs12666606 {"\u2014"} directly links endometriosis and depression at the genetic level.
              </p>
              <p>
                This is not a coincidence, and it{"\u2019"}s not {"\u201C"}all in your head.{"\u201D"} If you have endo and also live with migraines, brain fog, gut issues, and mood disorders, the genetic data says those conditions share biological roots with your endometriosis. This also means drugs developed for those other conditions may work for endo {"\u2014"} drug repurposing is one of the fastest paths to new treatments.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Current treatments and their limits ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Current treatments and their limits
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The paper is honest about the state of treatment. Analgesics have limited long-term use. Surgery has recurrence rates of 40{"\u2013"}50% within five years. Hormonal suppressants cause menopause-like side effects and prevent pregnancy during use {"\u2014"} a cruel trade-off for a disease that already threatens fertility. Patient dissatisfaction with current options is well-documented.
              </p>
              <p>
                30{"\u2013"}50% of endometriosis patients experience difficulty conceiving, and the disease is associated with increased risks of miscarriage, ectopic pregnancy, placenta previa, and preterm birth. The review emphasizes that fertility conversations need to happen earlier {"\u2014"} not as an afterthought when patients are already struggling.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── What's in the pipeline ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What{"\u2019"}s in the pipeline
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Several new drug candidates are in Phase 2 and 3 clinical trials, and they represent a genuine departure from the hormone-suppression playbook:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gefapixant</strong>, a P2X3 receptor antagonist, targets pain signaling directly rather than suppressing hormones</li>
                <li><strong>MT-2990</strong>, an IL-33 inhibitor, goes after inflammatory pathways specific to endo lesions</li>
                <li><strong>Cabergoline</strong>, a dopamine agonist, is being tested against standard hormonal therapy</li>
                <li><strong>Aromatase inhibitors</strong> as monotherapy for lesion-specific estrogen production</li>
              </ul>
              <p>
                The review also emphasizes drug repurposing {"\u2014"} adapting medications that already work for conditions sharing genetic pathways with endometriosis. This is one of the most efficient routes to expanding treatment options.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Self-management and multidisciplinary care ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Self-management is not a consolation prize
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                One of the most important threads in this paper is its explicit endorsement of non-medical and self-management strategies {"\u2014"} including nutrition {"\u2014"} as legitimate components of care. This is not wellness fluff. The authors argue that personalized endometriosis care requires multidisciplinary teams that include dieticians, physiotherapists, and mental health experts alongside surgeons and physicians.
              </p>
              <p>
                The paper also highlights self-compassion as a protective factor and interoceptive awareness {"\u2014"} the ability to perceive and interpret your own body{"\u2019"}s signals {"\u2014"} as meaningfully connected to depressive symptom severity. Learning to listen to your body isn{"\u2019"}t soft advice. It{"\u2019"}s clinically relevant.
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
                If you had surgery and still have pain, this paper explains why that happens biologically {"\u2014"} nociplastic pain means your nervous system may have been rewired by years of untreated inflammation. That{"\u2019"}s not failure. It{"\u2019"}s a known mechanism, and it{"\u2019"}s treatable through nervous system work, pelvic floor PT, and pain neuroscience education. Knowing this can change how you evaluate your options and what you ask for next.
              </p>
              <p>
                If you{"\u2019"}ve been told to just take birth control and come back when you want kids, this paper makes the case that hormonal suppression alone has a 40{"\u2013"}50% recurrence rate and significant side effects {"\u2014"} and that the field itself is moving toward multidisciplinary care. You are not being difficult for wanting more than one tool. Bring this to your doctor. Ask about pelvic floor physical therapy, nutritional support, and mental health resources alongside whatever medical or surgical plan you{"\u2019"}re on.
              </p>
              <p>
                If you also live with migraines, gut issues, depression, or chronic fatigue, this paper tells you those aren{"\u2019"}t separate problems {"\u2014"} they share genetic roots with your endo. That changes how you build your care team. A provider who treats your endo in isolation from your GI symptoms or your mental health is working with an outdated map.
              </p>
              <p>
                And if you{"\u2019"}re investing in nutrition, anti-inflammatory protocols, or nervous system regulation {"\u2014"} this paper says you{"\u2019"}re not doing wellness theater. The authors explicitly call for dieticians, physiotherapists, and mental health experts as part of standard endo care. What you{"\u2019"}re building on your own is what the research says the system should be offering you.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://academic.oup.com/biolreprod/article/113/5/1029/8211700"
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
