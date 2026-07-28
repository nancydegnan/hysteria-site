import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function StopCravingSugarPage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">
              the practice
            </p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              How Do You Stop Craving Sugar?
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

        {/* ── Why you're craving sugar ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why you{"\u2019"}re craving sugar {"\u2014"} and why willpower isn{"\u2019"}t the problem
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Sugar cravings are not a character flaw. They{"\u2019"}re a signal {"\u2014"} usually from your hormones, your blood sugar, or your nutrient stores {"\u2014"} that something is off. Dr. Brighten identifies several root causes, and most of them will sound familiar if you live with endometriosis.
              </p>
              <p>
                <strong>Hormonal fluctuations.</strong> During the luteal phase {"\u2014"} the two weeks before your period {"\u2014"} estrogen drops and progesterone rises, which reduces serotonin and dopamine. Your brain responds by pushing you toward foods that temporarily boost those neurotransmitters. About 70% of women report PMS-related food cravings. The luteal phase also increases insulin resistance, making blood sugar harder to stabilize. If you have endo, you{"\u2019"}re already dealing with hormonal dysregulation, which means this cycle hits harder.
              </p>
              <p>
                <strong>Blood sugar instability.</strong> Insulin spikes and crashes create a loop: you eat sugar, your blood sugar surges, insulin overcorrects, and you crash {"\u2014"} which triggers more cravings. This is especially pronounced when meals are carb-heavy without enough protein, fat, or fiber to slow digestion.
              </p>
              <p>
                <strong>Nutrient deficiencies.</strong> Low magnesium, chromium, B vitamins (especially B6), and zinc all impair glucose metabolism and increase cravings. Magnesium supports over 300 enzymatic reactions including blood sugar regulation, and your body{"\u2019"}s need for it increases during the luteal phase. B6 supports progesterone metabolism and serotonin balance. Chromium helps insulin transport glucose into cells {"\u2014"} without enough of it, you get the afternoon crashes, shakiness, and intense sweet cravings that feel like your body is screaming for a fix.
              </p>
              <p>
                <strong>Stress and cortisol.</strong> Chronic stress drives cortisol up, which drives blood sugar instability, which drives cravings. Sleep deprivation amplifies this. If you{"\u2019"}re managing endo pain, dealing with medical gaslighting, or navigating the mental load of chronic illness, your stress load is already elevated {"\u2014"} and your sugar cravings are a downstream effect.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The endo-sugar-inflammation loop ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The endo-sugar-inflammation loop
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Here{"\u2019"}s where this article connects directly to your endo. Sugar is a pro-inflammatory fuel. When you eat it, your body produces inflammatory cytokines {"\u2014"} the same class of signaling molecules (TNF-{"\u03B1"}, IL-6) that are elevated in the peritoneal fluid of endometriosis patients and that drive lesion activity. Every sugar spike is a small inflammatory event. If you{"\u2019"}re living with a disease defined by chronic inflammation, those events compound.
              </p>
              <p>
                The hormonal piece makes this worse. Endometriosis involves estrogen dominance and often progesterone resistance. Excess sugar consumption increases insulin, and elevated insulin promotes estrogen production. That means sugar doesn{"\u2019"}t just feed inflammation directly {"\u2014"} it also feeds the hormonal imbalance that fuels your lesions. It{"\u2019"}s a loop: hormonal dysfunction drives cravings, cravings drive sugar intake, sugar drives more inflammation and more hormonal dysfunction.
              </p>
              <p>
                The gut connection matters too. Sugar feeds pathogenic bacteria and contributes to gut dysbiosis {"\u2014"} which, as recent research shows, is measurably different in people with endometriosis. Disrupted gut bacteria can elevate beta-glucuronidase activity, an enzyme that reactivates estrogen from its inactive form. Your gut may literally be recycling the estrogen your body is trying to clear. (This is where the Bean Protocol can be helpful {"\u2014"} soluble fiber binds and removes those recycled hormones.{" "}
                <a
                  href="https://blog.organicolivia.com/podcast/beans-high-cortisol-and-caffeine-how-beans-can-bind-and-lower-stress-hormones-breaking-down-the-biochemistry-with-bean-queen-karen-hurd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-charcoal transition-colors duration-300"
                >
                  Give this episode a listen
                </a>.)
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Research-backed solutions ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What actually works {"\u2014"} research-backed strategies
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Dr. Brighten outlines a practical framework. The centerpiece is the <strong>PFF method</strong>: every meal should contain <strong>protein</strong> (20{"\u2013"}30g), <strong>healthy fat</strong>, and <strong>fiber</strong>. This isn{"\u2019"}t a diet. It{"\u2019"}s blood sugar architecture. Protein slows digestion and provides amino acids (tryptophan, tyrosine) your brain needs to produce serotonin and dopamine without reaching for sugar. Healthy fats support hormone production {"\u2014"} including estrogen and progesterone {"\u2014"} and extend satiety. Fiber stabilizes blood sugar and supports the gut health that helps your body clear excess estrogen.
              </p>
              <p>
                <strong>When a craving hits.</strong> Drink 8{"\u2013"}12 ounces of water (mild dehydration mimics hunger signals). Eat a protein-rich snack {"\u2014"} 10{"\u2013"}15g of protein from a boiled egg, Greek yogurt, a handful of nuts, or a small shake. Take a five-minute walk, which increases insulin sensitivity, reduces stress hormones, and boosts dopamine. Try cinnamon tea {"\u2014"} cinnamon slows digestion and reduces post-meal glucose spikes while providing natural sweetness.
              </p>
              <p>
                <strong>Address nutrient gaps.</strong> The article highlights four supplements with research backing: <strong>magnesium glycinate</strong> for blood sugar regulation, mood, and PMS; <strong>chromium</strong> to support insulin function and reduce blood sugar swings; <strong>B vitamins</strong> (especially B6) for serotonin, dopamine, and progesterone metabolism; and <strong>myo-inositol</strong> in a clinically studied 40:1 ratio with D-chiro-inositol, which supports insulin sensitivity and influences serotonin and dopamine signaling. This is not a personal endorsement of any specific supplement {"\u2014"} consult your provider before starting anything new, especially if you{"\u2019"}re on medications.
              </p>
              <p>
                <strong>Expect a recalibration period.</strong> When you reduce sugar, cravings will temporarily intensify for several days as your body adjusts. This typically improves within a week as blood sugar stabilizes, taste receptors reset, and appetite-regulating hormones normalize. Plan for it. Front-load protein and fat during that window so your body has what it needs to make the transition.
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
                If you have endometriosis and you crave sugar {"\u2014"} especially before your period {"\u2014"} you are not weak and you are not failing at some discipline test. Your hormones are dysregulated, your inflammatory load is elevated, and your body is reaching for the fastest serotonin hit it can find. Understanding the mechanism changes how you respond. You don{"\u2019"}t fight the craving with restriction. You address the deficiency driving it.
              </p>
              <p>
                Managing sugar intake is one of the most direct levers you have over your inflammatory environment. Every time you swap a sugar spike for a meal built around protein, fat, and fiber, you{"\u2019"}re reducing the insulin surge that promotes estrogen production, lowering the inflammatory cytokines that feed your lesions, and supporting the gut bacteria that help your body clear excess estrogen instead of recycling it. This is not a wellness trend. It{"\u2019"}s a targeted intervention against documented mechanisms of your disease.
              </p>
              <p>
                Start where you are. You don{"\u2019"}t need to overhaul everything at once. Build one meal a day around the PFF method. Stock protein-rich snacks so you have something to reach for when the 3pm crash hits. Get your magnesium and B6 levels checked. If you{"\u2019"}re in the luteal phase and the cravings are unbearable, that{"\u2019"}s your body telling you it needs more nutritional support during that window {"\u2014"} not less food, not more willpower. More of the right building blocks.
              </p>
              <p>
                This is part of treating your endo. Not a side project. Not a nice-to-have. The inflammation that sugar feeds is the same inflammation your lesions thrive on. Every meal is a decision about the environment your disease lives in.
              </p>
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <a
            href="https://drbrighten.com/how-do-you-stop-craving-sugar/"
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
