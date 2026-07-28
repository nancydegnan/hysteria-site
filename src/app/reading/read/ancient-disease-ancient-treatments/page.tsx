import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function AncientDiseaseAncientTreatmentsPage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the reckoning
            </p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Endometriosis: Ancient Disease, Ancient Treatments
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Drs. Camran, Farr &amp; Ceana Nezhat
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              Endometriosis Foundation of America
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
              A plain-language breakdown of this article. For the original, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── 4,000 years of the same disease ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              4,000 years of the same disease
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Endometriosis is not a modern disease. The Nezhats trace its documented history back to roughly 1855 BC, when Egyptian medical texts described chronic uterine pain with symptoms unmistakably consistent with what we now call endometriosis. Hippocrates documented uterine lesions and displacements around 400 BC. Medieval physicians documented chronic pelvic pain so severe that women could not function. The symptoms have been the same for millennia {"\u2014"} what changed was who got blamed.
              </p>
              <p>
                This matters because it dismantles the idea that endometriosis is a new condition, a product of modern stress or lifestyle, or something only now being recognized. Women have been screaming about this pain for four thousand years. The medical establishment has spent most of that time either ignoring them or punishing them for it.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Hysteria: the diagnosis that defined centuries of harm ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Hysteria: the diagnosis that defined centuries of harm
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The word {"\u201C"}hysteria{"\u201D"} comes from the Greek <em>hystera</em> {"\u2014"} meaning uterus. It was not just a casual dismissal. It was a formal medical diagnosis used for thousands of years to explain away any symptom a woman reported that doctors could not see or understand. Chronic pelvic pain, mood changes, fatigue, GI symptoms, pain during intercourse {"\u2014"} the exact symptom profile of endometriosis {"\u2014"} were bundled under this single label and attributed to a {"\u201C"}wandering womb{"\u201D"} that had dislodged itself and was traveling through the body causing havoc.
              </p>
              <p>
                This was not a fringe theory. It was mainstream medicine from ancient Greece through the Victorian era. Plato wrote about the uterus as an animal that roamed the body demanding pregnancy. Galen, one of the most influential physicians in Western history, attributed hysteria to uterine disturbances. By the time Freud reframed hysteria as psychogenic in the late 1800s, the shift from {"\u201C"}your uterus is broken{"\u201D"} to {"\u201C"}your mind is broken{"\u201D"} was not progress. It was the same dismissal in new language. Either way, the woman was the problem.
              </p>
              <p>
                The Nezhats argue that many {"\u2014"} possibly most {"\u2014"} historical cases of {"\u201C"}hysteria{"\u201D"} were undiagnosed endometriosis, and the evidence supports them. The symptoms match. The patient population matches. The only thing that changed over time was the vocabulary used to tell women their pain was not real.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Barbaric treatments ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What they did to women instead of listening
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Because the pain was attributed to a displaced or dysfunctional uterus {"\u2014"} or to demonic forces, moral failure, or psychological defect {"\u2014"} the {"\u201C"}treatments{"\u201D"} were designed to fix the woman, not the disease. The article catalogs what this looked like across centuries, and it is brutal.
              </p>
              <p>
                In ancient Egypt and Greece, women were hung upside down or placed on ladders and shaken in an attempt to coerce the {"\u201C"}wandering womb{"\u201D"} back into place. Foul-smelling substances were applied to the nose or mouth while sweet-smelling ones were placed near the vagina {"\u2014"} the idea being that the uterus would be repelled or attracted back to its {"\u201C"}correct{"\u201D"} position. During the Middle Ages, women with symptoms of chronic pelvic pain, seizures, or {"\u201C"}strange{"\u201D"} behavior were accused of witchcraft and demonic possession. Some were exorcised. Some were killed.
              </p>
              <p>
                By the 19th century, the treatments became surgicalized but no less violent. Ovaries were removed. Leeches were applied to the cervix and vulva. Clitoridectomies were performed. Cauterization of the genitals was standard practice. Hydrotherapy, institutionalization, and forced rest were prescribed for women whose {"\u201C"}hysteria{"\u201D"} would not resolve {"\u2014"} because, of course, it would not resolve. The disease was never being treated. Only the woman was being managed.
              </p>
              <p>
                Read that list again. These were not the actions of a medical system trying its best with limited knowledge. This was a system that, when faced with a woman in pain, decided the pain was either her fault or imaginary and responded accordingly. The violence was not incidental. It was the treatment.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The delay persists ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The diagnostic delay that proves nothing has fully changed
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The article{"\u2019"}s most devastating argument is its simplest: if endometriosis has been documented for four thousand years, why does it still take an average of 7 to 10 years to diagnose? Why are there still an estimated 176 million women worldwide living with a disease that the medical establishment has known about since the papyrus era?
              </p>
              <p>
                The Nezhats connect the historical record to the present. The same pattern that turned chronic pelvic pain into {"\u201C"}wandering womb{"\u201D"} in ancient Greece, into {"\u201C"}demonic possession{"\u201D"} in medieval Europe, and into {"\u201C"}female hysteria{"\u201D"} in the Victorian era is alive today in every ER visit where a woman in agony is sent home with ibuprofen, every OB-GYN appointment where she{"\u2019"}s told her pain is {"\u201C"}normal,{"\u201D"} and every decade-long diagnostic journey that ends with a laparoscopy confirming what she knew in her body all along.
              </p>
              <p>
                The vocabulary has changed. The reflex has not. When a system does not know what is wrong with a woman, its default is still to question the woman rather than question the system.
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
                If you{"\u2019"}ve ever been told your pain is {"\u201C"}just periods,{"\u201D"} {"\u201C"}stress,{"\u201D"} or {"\u201C"}anxiety{"\u201D"} {"\u2014"} know that you are standing at the end of a four-thousand-year line of women who were told the same thing. You are not the first generation to be dismissed. But you might be the first with the language, the research, and the collective voice to make it stop. This article gives you the historical receipts. The pattern of dismissal is not anecdotal. It is documented, systematic, and ancient.
              </p>
              <p>
                Understanding this history changes how you show up in a doctor{"\u2019"}s office. You are not asking for a favor when you advocate for yourself. You are correcting a failure that has been repeating for millennia. The burden of proof should never have been on you. When a provider minimizes your symptoms, they are not exercising clinical judgment {"\u2014"} they are reenacting a pattern that predates modern medicine by thousands of years. Name it. Push back. Bring a second opinion. Bring this article.
              </p>
              <p>
                This history also matters for the women coming after you. Every time you demand to be heard, refuse to accept a dismissal, or insist on imaging, referrals, or surgical evaluation {"\u2014"} you are breaking a cycle that burned women as witches and removed their organs for the crime of being in pain. The fight for better endometriosis care is not just a medical issue. It is a human rights reckoning that is four thousand years overdue.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.endofound.org/endometriosis-ancient-disease-ancient-treatments"
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
