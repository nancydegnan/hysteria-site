import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function PainfulOvulationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the practice
            </p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Endometriosis and Painful Ovulation
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Dr. Jolene Brighten
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

        {/* ── Why ovulation hurts with endo ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why ovulation hurts when you have endometriosis
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Even in a healthy body, ovulation is an inflammatory event. Your ovary has to rupture a follicle to release an egg, and that rupture triggers a localized release of prostaglandins and inflammatory chemicals. Most people barely notice it. Some feel a brief twinge {"\u2014"} what{"\u2019"}s sometimes called mittelschmerz {"\u2014"} and move on.
              </p>
              <p>
                If you have endometriosis, none of that is subtle. Your pelvic tissues are already inflamed and sensitized from lesions, adhesions, and chronic immune activation. When ovulation adds its own inflammatory cascade on top of that, the pain signal gets amplified. The follicular fluid released during ovulation can also irritate tissue that{"\u2019"}s already damaged, and if you have lesions or scar tissue near your ovaries, pelvic ligaments, or nerves, the mechanical stretching of follicle growth and rupture creates pain that goes far beyond a normal mid-cycle ache.
              </p>
              <p>
                This is why ovulation pain with endo can feel as severe as menstrual pain {"\u2014"} or worse. It{"\u2019"}s not a separate problem. It{"\u2019"}s your existing disease interacting with a normal physiological process and making it intolerable.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Where the pain shows up ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Where the pain shows up
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Textbook ovulation pain is one-sided, low in the abdomen, and brief. With endometriosis, the reality is messier.
              </p>
              <p>
                You might feel sharp or throbbing pain on one side of your lower abdomen, deep in the pelvis, in your lower back or hips, or radiating into your thighs or rectal area. Pain can switch sides month to month depending on which ovary is ovulating. And because adhesions and nerve involvement spread inflammation beyond the ovary itself, the pain often doesn{"\u2019"}t stay localized. It can feel diffuse, heavy, and hard to pin down.
              </p>
              <p>
                Duration matters too. Normal ovulation discomfort resolves within hours to a day. With endo, mid-cycle pain can persist for one to three days and may progressively worsen cycle after cycle. If your ovulation pain is lasting longer, spreading wider, or getting harder to manage over time, that{"\u2019"}s not you being dramatic. That{"\u2019"}s your disease progressing, and it deserves investigation.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── What helps ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What actually helps
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Because ovulation pain with endo is driven by inflammation layered on top of already-sensitized tissue, management strategies that reduce baseline inflammation can make the biggest difference.
              </p>
              <p>
                <strong>Anti-inflammatory nutrition.</strong> An anti-inflammatory dietary approach {"\u2014"} reducing processed foods, refined sugar, and excess alcohol while increasing omega-3-rich foods, leafy greens, and antioxidant-dense fruits and vegetables {"\u2014"} lowers the inflammatory baseline your body is working from. This won{"\u2019"}t eliminate ovulation pain, but it can reduce how much that mid-cycle inflammatory spike amplifies your symptoms.
              </p>
              <p>
                <strong>Targeted supplementation.</strong> N-acetylcysteine (NAC) is one supplement Dr. Brighten highlights. Research suggests NAC may help lower inflammatory markers relevant to endometriosis. Other commonly discussed supplements include omega-3 fatty acids, magnesium for muscle relaxation and pain modulation, and curcumin for its anti-inflammatory properties. This is not a personal endorsement of any specific supplement {"\u2014"} work with your provider to determine what makes sense for your specific case.
              </p>
              <p>
                <strong>Pelvic floor therapy.</strong> Chronic pelvic pain rewires your muscles. Pelvic floor physical therapy addresses the muscular tension, guarding patterns, and myofascial restrictions that develop when you{"\u2019"}ve been in pain for months or years. It won{"\u2019"}t treat the endo itself, but it can meaningfully reduce the overall pain burden your body is carrying at ovulation.
              </p>
              <p>
                <strong>Hormonal evaluation.</strong> Understanding your full hormonal picture {"\u2014"} not just whether you{"\u2019"}re ovulating, but how your estrogen, progesterone, and inflammatory markers behave across your cycle {"\u2014"} helps you and your provider make smarter decisions about treatment. Hormonal suppression is one option, but it{"\u2019"}s not the only one, and it should be a decision you make with full information, not a default.
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
                If you{"\u2019"}re experiencing mid-cycle pain that disrupts your day, lasts beyond a couple of hours, involves your bowel or bladder, or has been getting worse over time {"\u2014"} don{"\u2019"}t write it off as {"\u201C"}just ovulation.{"\u201D"} Persistent or worsening mid-cycle pain should not be dismissed, and it should not be something you tough out month after month without answers. If your pain is accompanied by fever, vomiting, or fainting, seek care immediately.
              </p>
              <p>
                Start tracking your mid-cycle symptoms now, even if you{"\u2019"}re not seeing a specialist yet. Record the day of your cycle, which side hurts, the intensity (use a 1{"\u2013"}10 scale), how long it lasts, and whether it comes with GI symptoms, back pain, or fatigue. Two to three months of this data turns a vague complaint into a clinical pattern your provider can{"\u2019"}t ignore. Bring it printed. Hand it over. Make them put it in your chart.
              </p>
              <p>
                When you do see your provider, ask directly: {"\u201C"}Could this mid-cycle pain be related to endometriosis?{"\u201D"} If they say no without imaging or explanation, push back or find someone who will investigate. You can also ask about your inflammatory markers, request a hormonal panel that covers your full cycle, and ask whether pelvic floor PT or targeted supplementation could help manage your symptoms while you pursue a diagnosis.
              </p>
              <p>
                You don{"\u2019"}t have to wait for a diagnosis to start managing the inflammation. Anti-inflammatory nutrition, stress reduction, pelvic floor work, and informed supplementation are things you can begin today. They{"\u2019"}re not a replacement for medical care {"\u2014"} but they{"\u2019"}re also not alternative medicine. They{"\u2019"}re evidence-based strategies that reduce the inflammatory load your body is carrying, and that matters whether or not you ever get a surgical diagnosis.
              </p>
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <a
            href="https://drbrighten.com/endometriosis-and-painful-ovulation/"
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
