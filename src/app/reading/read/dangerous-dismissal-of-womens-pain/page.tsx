import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function DangerousDismissalPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">the reckoning</p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              The Dangerous Dismissal of Women{"\u2019"}s Pain
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">Maureen Salamon</p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">Harvard Women{"\u2019"}s Health Watch</p>
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
              A plain-language breakdown of this article. For the original, scroll to the bottom.
            </p>
          </section>
        </RevealSection>

        {/* ── The numbers ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The numbers are not ambiguous
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                When a woman walks into a hospital in pain, she waits an average of 30 minutes longer than a man to receive care. She is less likely to be given pain medication for the same complaint. Her pain scores are 10% less likely to even be recorded by a nurse upon arrival. Nearly 25% of American women live with chronic pain {"\u2014"} a higher proportion than men {"\u2014"} and yet the system consistently treats their suffering as less urgent, less real, and less deserving of intervention.
              </p>
              <p>
                These are not edge cases. These are averages across the healthcare system. If you have endometriosis, you already know what it feels like to be on the wrong side of these numbers. You{"\u2019"}ve sat in waiting rooms while your pain escalated. You{"\u2019"}ve been offered Advil for agony that made you vomit. You{"\u2019"}ve watched the skepticism settle into a provider{"\u2019"}s face before you finished your first sentence. This article from Harvard Health puts the data behind what you{"\u2019"}ve lived.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Historical roots ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The word {"\u201C"}hysterical{"\u201D"} is not a coincidence
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The term {"\u201C"}hysterical{"\u201D"} comes from the Greek word <em>hystera</em> {"\u2014"} meaning womb. For centuries, medicine classified women{"\u2019"}s pain as a psychological condition rooted in their reproductive organs. That framework was never about understanding women. It was about dismissing them. And while the formal diagnosis of {"\u201C"}hysteria{"\u201D"} has been retired, its logic has not.
              </p>
              <p>
                Medicine{"\u2019"}s historical male dominance created paternalistic approaches that failed to take women{"\u2019"}s pain conditions seriously. Several compounding factors keep the bias alive today: there is no objective tool for measuring pain, women are socialized from their first period to treat suffering as normal, and medical training emphasizes identifying visible pathology and fixing it {"\u2014"} which means conditions without a clear physical finding get reclassified as psychological. When a doctor can{"\u2019"}t see the problem on a scan, the default shifts from investigating further to questioning the patient.
              </p>
              <p>
                One of the most striking points in the article: female clinicians demonstrate this bias too. This is not just about individual bad actors. It{"\u2019"}s a system-wide pattern baked into how medicine is taught, practiced, and reimbursed.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── What this means for endo ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              How this plays out in endometriosis
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Endometriosis is the disease that lives at the intersection of every bias this article describes. It is a condition defined by pain. It overwhelmingly affects women. It lacks a simple diagnostic test. Its symptoms overlap with conditions doctors are trained to dismiss {"\u2014"} IBS, anxiety, {"\u201C"}bad periods.{"\u201D"} And its average diagnostic delay of 7 to 10 years is not a medical mystery. It is the predictable result of a system that does not believe women when they say something is wrong.
              </p>
              <p>
                When you tell a doctor your periods are debilitating and they prescribe birth control without investigation, that is the gender pain gap in action. When you describe pelvic pain that disrupts your ability to work, eat, or sleep, and the chart reads {"\u201C"}anxiety{"\u201D"} or {"\u201C"}functional pain,{"\u201D"} that is the legacy of hysteria in a modern EMR. When you are socialized from your first period to believe that suffering is normal, and that socialization delays you from seeking help by years {"\u2014"} that is the system working exactly as it was designed.
              </p>
              <p>
                The gender pain gap does not cause endometriosis. But it determines how long you live with it undiagnosed, how seriously your symptoms are treated, and whether you ever receive the kind of care that could change your quality of life.
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
                You should not have to fight for adequate pain treatment. But right now, you probably do. The article offers concrete advice that applies directly to navigating care with endometriosis: communicate explicitly about your treatment expectations. Tell your provider not just what you need, but what you do not want {"\u2014"} {"\u201C"}I don{"\u2019"}t want to be told this is stress{"\u201D"} is a legitimate thing to say in a medical appointment. Name the pattern if you{"\u2019"}ve experienced it before. {"\u201C"}I{"\u2019"}ve been dismissed by three previous providers{"\u201D"} is clinical information, not a complaint.
              </p>
              <p>
                Research your condition on reputable medical sources before your appointments. Not because you should have to do your doctor{"\u2019"}s job, but because arriving with specific language {"\u2014"} {"\u201C"}I want to rule out endometriosis with imaging or referral to an excision specialist{"\u201D"} {"\u2014"} forces a different conversation than {"\u201C"}my periods are really bad.{"\u201D"} The more precise you are, the harder it is for a provider to reclassify your pain as vague or emotional.
              </p>
              <p>
                Do not settle for a provider who makes you feel dismissed. That is not a personality mismatch. That is a clinician whose bias is compromising your care. You are allowed to leave. You are allowed to escalate. You are allowed to document what was said to you and request that a provider{"\u2019"}s refusal to investigate be noted in your medical record. That single request {"\u2014"} {"\u201C"}please document that you are declining to order this test{"\u201D"} {"\u2014"} changes the dynamic in the room more than almost anything else you can say.
              </p>
              <p>
                The gender pain gap is not your fault, and closing it is not your responsibility. But understanding that it exists {"\u2014"} that it is measurable, documented, and systemic {"\u2014"} gives you information you can use. Not to be a better patient. To refuse to be a silent one.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.health.harvard.edu/pain/the-dangerous-dismissal-of-womens-pain"
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
