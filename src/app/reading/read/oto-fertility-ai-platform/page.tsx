import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function OtoFertilityPage() {
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
              OTO Fertility Launches World{"\u2019"}s First AI-Powered Platform for Predictive Reproductive Insight
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              OTO Fertility
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

        {/* ── What OTO Fertility is building ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What OTO Fertility is building
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                OTO Fertility has launched a biometric wearable and AI-powered platform designed to predict fertility treatment outcomes in real time. The system tracks over 50 biometric markers {"\u2014"} including heart rate variability, nervous system regulation, and stress response {"\u2014"} and uses that data to identify when your body is in what OTO calls a {"\u201C"}Fertility Zone,{"\u201D"} a physiologically optimized state for reproductive success.
              </p>
              <p>
                The technology originated in space medicine research developed by NASA for astronauts, later adapted for elite athletes, and is now being applied to reproductive health. The biosensor and companion app launched across North America in late 2025, with clinical programs currently underway. OTO is headquartered in Toronto, with offices in Vancouver and Helsinki.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why conventional fertility metrics fall short ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why conventional fertility metrics fall short
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                If you{"\u2019"}ve been through IVF or any fertility workup, you know the standard numbers: AMH, FSH, AFC, age, BMI. These are the metrics most clinics use to forecast your odds. But they are static snapshots. They tell your doctor what your ovarian reserve looks like on one day but say nothing about how your nervous system, stress levels, sleep patterns, and inflammatory state are affecting your reproductive biology in real time.
              </p>
              <p>
                OTO{"\u2019"}s premise is that this gap matters {"\u2014"} that IVF success rates have stagnated globally in part because treatment timing and decision-making rely on incomplete physiological data. The platform aims to fill that gap by continuously monitoring biometric signals that influence treatment outcomes but are currently invisible in standard fertility care.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── What this means for women with endo ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why this matters if you have endometriosis
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Endometriosis and fertility are deeply entangled. 30{"\u2013"}50% of people with endo experience difficulty conceiving. The disease creates hostile conditions for implantation through chronic inflammation, altered immune function, and disrupted endometrial receptivity. Many endo patients turn to IVF not as a preference but as a necessity {"\u2014"} and the emotional and financial stakes of each cycle are immense.
              </p>
              <p>
                This is where the concept of real-time biometric monitoring becomes relevant. If your nervous system is dysregulated {"\u2014"} and if you have endo, there{"\u2019"}s a strong chance it is {"\u2014"} that physiological stress state affects everything from hormone signaling to uterine blood flow to immune activity at the implantation site. Standard fertility protocols don{"\u2019"}t account for this. A platform that tracks these signals could, in theory, help identify when your body is in the best possible condition to proceed with a transfer or treatment cycle, rather than relying solely on calendar timing and bloodwork.
              </p>
              <p>
                It could also give you data to bring to your reproductive endocrinologist {"\u2014"} objective evidence of how your body is responding to the stress of treatment, rather than being told to {"\u201C"}just relax.{"\u201D"}
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
                This platform is new. Clinical validation data is still emerging, and no wearable is a substitute for a skilled reproductive endocrinologist who understands endometriosis. That needs to be said plainly. The fertility space is full of products making promises to people in vulnerable positions, and healthy skepticism is warranted.
              </p>
              <p>
                That said, the underlying idea {"\u2014"} that your body{"\u2019"}s real-time physiological state matters for fertility outcomes {"\u2014"} is not marketing. It{"\u2019"}s biology. If you{"\u2019"}re navigating IVF alongside an endo diagnosis, you already know that some cycles feel different in your body than others. Some months you{"\u2019"}re inflamed, exhausted, and flaring. Other months you feel more regulated. The question OTO is trying to answer is whether capturing that difference in data can improve when and how treatment decisions get made.
              </p>
              <p>
                If you{"\u2019"}re currently in fertility treatment or planning to be, this is worth watching {"\u2014"} not as a purchase recommendation, but as a signal that the field is beginning to acknowledge what endo patients have been saying: that the whole body matters, not just the ovaries. And if the technology proves out, it could mean fewer failed cycles, fewer unnecessary transfers, and more informed conversations between you and your care team about timing and readiness.
              </p>
              <p>
                In the meantime, you don{"\u2019"}t need a wearable to start paying attention to your nervous system. Tracking your HRV, prioritizing sleep, managing inflammation through nutrition, and building stress resilience before and during treatment cycles are all evidence-supported strategies that align with what this technology is trying to measure. The data may be new. The biology isn{"\u2019"}t.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://otofertility.com/oto-fertility-biometric-ai-prediction/"
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
