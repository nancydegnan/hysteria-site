import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function UCEndoDiagnosticTestPage() {
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
              Research Findings May Lead to New Test for Endometriosis
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              University of Cincinnati
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              January 2026
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
              A plain-language breakdown of this article. For the original publication, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── The big picture ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The big picture
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Endometriosis affects roughly 1 in 10 women globally, yet most wait 7{"\u2013"}10 years for a diagnosis. The current gold standard is laparoscopic surgery {"\u2014"} an invasive procedure that requires anesthesia, incisions, and recovery time just to confirm what many patients already suspect. Dr. Katie Burns, an associate professor at the University of Cincinnati College of Medicine, is working to change that.
              </p>
              <p>
                Her research is developing a non-invasive, at-home diagnostic test that uses white blood cells found in menstrual fluid as biomarkers for endometriosis. If validated, this could fundamentally shorten the path from symptoms to diagnosis.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The science ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The science: immune-driven, not just hormone-driven
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The most important takeaway from this research is a fundamental reframe: Dr. Burns{"\u2019"} work suggests that the immune system plays a more central role in how endometriosis starts and takes hold than hormones do.
              </p>
              <p>
                That matters because for decades, endometriosis has been treated primarily as a hormonal condition {"\u2014"} hence the routine prescription of birth control, GnRH agonists, and other hormone-suppressing drugs as frontline treatment. If the disease is actually initiated by immune dysfunction rather than hormonal imbalance, the standard treatment playbook is targeting the wrong mechanism.
              </p>
              <p>
                The approach focuses on white blood cells present in menstrual fluid. These immune cells carry biological signatures that may be distinct in people with endometriosis. By analyzing them, Burns aims to create a test that can detect the disease without surgery, without imaging, and potentially without even leaving your home.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why this matters for you ── */}
        <RevealSection>
          <section className="mb-14 border-l-4 border-black py-8 pl-8 pr-6">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What this means for your care
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                If you{"\u2019"}re currently undiagnosed and cycling through doctors who can{"\u2019"}t find anything wrong, this research is developing the kind of test that could have spared you years of being told it{"\u2019"}s IBS, anxiety, or just a bad period. It{"\u2019"}s not available yet, but it{"\u2019"}s worth knowing it{"\u2019"}s coming {"\u2014"} and it{"\u2019"}s worth knowing that the science increasingly supports what you{"\u2019"}ve been experiencing.
              </p>
              <p>
                If you already have a diagnosis, the immune-driven framing has practical implications. If you{"\u2019"}ve been on hormonal suppression {"\u2014"} birth control, GnRH agonists, progestins {"\u2014"} and you{"\u2019"}re still symptomatic, this research offers a biological explanation: hormones may not be the primary driver of your disease. That doesn{"\u2019"}t mean hormonal treatment is useless, but it does mean it may not be enough on its own, and it gives you language to bring to your provider when advocating for a broader treatment approach.
              </p>
              <p>
                It also reinforces something many in this community are already doing {"\u2014"} pursuing anti-inflammatory nutrition, gut health, and immune support alongside (or instead of) hormonal management. If the disease is fundamentally immune-mediated, then strategies that calm systemic inflammation aren{"\u2019"}t alternative medicine. They{"\u2019"}re targeting the mechanism.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The personal dimension ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The personal dimension
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Dr. Burns developed this research direction through her own lived experience with endometriosis, which began around age 10. Her stated motivation is personal: she wants to prevent the next generation from going through the same years of suffering and undiagnosed symptoms she endured.
              </p>
              <p>
                That matters. Some of the most meaningful advances in endometriosis research are being driven by people who have the disease themselves. Lived experience shapes better questions.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.uc.edu/news/articles/2026/01/research-findings-may-lead-to-new-test-for-endometriosis.html"
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
