import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function GenderedPainBiasPage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">the reckoning</p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Women Exaggerate, Men Downplay
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">
              Gina A. Paganini, Kevin M. Summers, Leanne ten Brinke &amp; E. Paige Lloyd
            </p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">
              Journal of Experimental Social Psychology, 2023
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
              A plain-language breakdown of this study. For the original publication, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── What the study tested ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Four experiments. One consistent finding: people think you{"\u2019"}re exaggerating.
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Researchers at the University of Denver and the University of British Columbia ran four experiments to test something many women with chronic pain already suspected: that people assume women overstate their pain while men understate theirs. They called this the {"\u201C"}gender-pain exaggeration bias{"\u201D"} {"\u2014"} the belief that women claim more pain than they actually feel.
              </p>
              <p>
                Across all four experiments, the result held. Participants consistently expected women to exaggerate their pain and men to downplay it. This was not a subtle effect or a statistical edge case. It showed up every time, regardless of who was doing the judging. The bias was not limited to men evaluating women. Women held it too.
              </p>
              <p>
                The first study established the baseline: when people were asked to predict whether a man or a woman would exaggerate or downplay pain, they reliably expected women to overstate it. The second study went further, measuring whether participants viewed women as more {"\u201C"}emotionally dramatizing{"\u201D"} than men {"\u2014"} and found that those judgments statistically explained the exaggeration bias. In other words, the reason people expected women to exaggerate their pain was because they saw women as inherently more dramatic. The third and fourth studies showed that the strength of this bias depended on how strongly the individual observer endorsed gendered stereotypes about emotional dramatization. The more you buy into the idea that women are whiny, the more you discount their pain.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The dramatization stereotype ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              {"\u201C"}Whiny, nagging, fussy, and complaining{"\u201D"}
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The researchers identified a specific cluster of stereotypes they called {"\u201C"}emotional dramatization{"\u201D"} traits {"\u2014"} the perception that women are whiny, nagging, fussy, and complaining. These are not fringe beliefs. They are culturally embedded assumptions about how women express distress, and they function as a filter through which pain reports are interpreted.
              </p>
              <p>
                Here is how the mechanism works: When a woman reports pain, the observer does not evaluate that report in a vacuum. The observer{"\u2019"}s brain runs it through a gendered template that says women amplify, exaggerate, and dramatize their experiences. The pain report gets automatically adjusted downward {"\u2014"} not because of any clinical evidence about that specific woman, but because of a stereotype about women in general. Her {"\u201C"}8 out of 10{"\u201D"} becomes a {"\u201C"}5{"\u201D"} in the listener{"\u2019"}s mind before she finishes the sentence.
              </p>
              <p>
                Men, meanwhile, get the opposite adjustment. The same stereotypes that cast women as dramatic cast men as stoic. When a man reports pain, observers assume he is underplaying it {"\u2014"} so they adjust his report upward. His {"\u201C"}5{"\u201D"} becomes a {"\u201C"}7.{"\u201D"} He gets taken more seriously for reporting less pain. She gets taken less seriously for reporting more.
              </p>
              <p>
                The study found that these dramatization stereotypes were the statistical mediator of the gender-pain exaggeration bias. They are not a background factor. They are the mechanism. Remove them, and the bias weakens. Strengthen them, and the bias deepens. This is not about individual meanness. It is about a cognitive shortcut that operates automatically in the minds of people who hold these stereotypes {"\u2014"} including, critically, the people responsible for your medical care.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Healthcare consequences ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What happens when this enters the exam room
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The researchers frame their findings within the broader literature on gender bias in pain care {"\u2014"} and that literature is damning. Women wait an average of 65 minutes to receive pain medication in the emergency room, compared to 49 minutes for men presenting with the same complaint. Women are less likely to be prescribed analgesics and more likely to be referred for psychological treatment. Female patients{"\u2019"} pain scores are 10% less likely to even be recorded by a nurse upon arrival. In clinical experiments, when providers are given identical patient scenarios and told only that the patient is female, they rate the pain lower and recommend less aggressive treatment.
              </p>
              <p>
                This study explains why those disparities persist. If a provider {"\u2014"} consciously or not {"\u2014"} believes that women are emotionally dramatizing their symptoms, then every pain report from a female patient gets filtered through doubt. The patient says she is in severe pain. The provider{"\u2019"}s mental model says she is probably overstating it. That doubt does not show up as cruelty. It shows up as {"\u201C"}let{"\u2019"}s try ibuprofen first{"\u201D"} instead of imaging. It shows up as {"\u201C"}this sounds like it could be anxiety{"\u201D"} instead of a referral. It shows up as a chart note that says {"\u201C"}patient appears uncomfortable{"\u201D"} when the patient said she was in agony.
              </p>
              <p>
                The authors note that both male and female providers demonstrate this bias. It is not a problem with one gender of clinician. It is a problem with a medical culture that trains everyone {"\u2014"} patients included {"\u2014"} to question whether women are telling the truth about their own bodies.
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
                If you have endometriosis and have ever felt that a provider did not believe the severity of your pain, this study tells you that your instinct was not paranoia. It was pattern recognition. There is a measurable, experimentally validated bias that causes people to assume women exaggerate pain {"\u2014"} and it operates in the minds of the exact people responsible for deciding whether your symptoms warrant investigation, imaging, medication, or surgery. You were not imagining the skepticism in the room. It was there, and it has a name.
              </p>
              <p>
                Knowing this gives you something concrete to work with. When you describe your pain to a provider, be specific in ways that resist subjective discounting. Instead of {"\u201C"}my pain is a 9,{"\u201D"} say {"\u201C"}this pain causes me to miss work three days per month{"\u201D"} or {"\u201C"}I cannot stand upright during flares.{"\u201D"} Functional language {"\u2014"} what the pain prevents you from doing {"\u2014"} is harder to mentally downgrade than a number on a scale. A provider can unconsciously adjust your {"\u201C"}9{"\u201D"} to a {"\u201C"}5.{"\u201D"} It is much harder to adjust {"\u201C"}I vomit from the pain and cannot drive{"\u201D"} to {"\u201C"}she{"\u2019"}s probably fine.{"\u201D"}
              </p>
              <p>
                You can also name the bias directly if the situation calls for it. {"\u201C"}I{"\u2019"}m aware that research shows women{"\u2019"}s pain is systematically underestimated in clinical settings, and I want to make sure that isn{"\u2019"}t happening here{"\u201D"} is a factual, non-confrontational statement that changes the dynamic of a medical appointment. It puts the provider on notice that you know what you are dealing with {"\u2014"} not just the disease, but the system around it. If a provider reacts defensively to that statement, that is information too.
              </p>
              <p>
                This study does not fix the bias. No single study can. But it strips the experience of being dismissed of its most isolating quality: the feeling that it is happening only to you, that maybe you really are being dramatic, that maybe you should just stop complaining. You are not being dramatic. The people around you have been trained {"\u2014"} by culture, by language, by centuries of gendered assumptions {"\u2014"} to assume that you are. That is their problem. Your job is to refuse to internalize it.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10688448/"
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
