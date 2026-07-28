import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../../components";

export default function EndoBellyIleocecalValvePage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-3">the practice</p>
            <h1 className="playfair text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Endo Belly Hot Spot: Do You Have Ileocecal Valve Pain?
            </h1>
            <p className="font-['Helvetica','Arial',sans-serif] italic tracking-tight text-sm text-black mt-4">Katie Edmonds</p>
            <p className="font-['Helvetica','Arial',sans-serif] tracking-tight text-xs text-gray-text mt-1">Heal Endo</p>
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

        {/* ── What the ileocecal valve is ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              What the ileocecal valve actually is
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                The ileocecal valve (ICV) is a small muscular flap where your small intestine empties into your large intestine. It sits on the right side of your abdomen, roughly halfway between your right hip bone and your belly button. Its job is simple but critical: it acts as a one-way gate, letting digested material pass forward into the colon while preventing the bacteria-heavy contents of the large intestine from flowing back into the small intestine.
              </p>
              <p>
                That separation matters more than it sounds. Your large intestine is home to the vast majority of your gut bacteria. Your small intestine is a comparatively low-bacteria environment. A healthy ICV keeps those two microbial worlds apart. When it stops functioning properly {"\u2014"} when it gets stuck open, stuck closed, or inflamed {"\u2014"} the consequences ripple through your entire digestive system.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Why this matters for endo ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Why this is an endo problem
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                If you have endometriosis, your body is already running a baseline of systemic inflammation. That inflammation doesn{"\u2019"}t stop at your pelvis {"\u2014"} it reaches your gut, and the ileocecal valve is particularly vulnerable. The ICV area can become chronically inflamed, leading to dysfunction that worsens digestive symptoms you may already be dealing with: bloating, gas, constipation, and that unmistakable endo belly swelling.
              </p>
              <p>
                There{"\u2019"}s also a hormonal layer. In the days before your period, progesterone slows gut motility. That means material sits longer, pressure builds, and an already-stressed ICV takes the hit. If you{"\u2019"}ve noticed your right-side abdominal pain and bloating spike in your late luteal phase, this may be a significant piece of why.
              </p>
              <p>
                One important distinction: ICV pain sits higher than right ovary pain. If you{"\u2019"}ve been attributing that tenderness near your right hip to your ovary, it{"\u2019"}s worth reconsidering. Press gently on the spot halfway between your right hip bone and your navel. If it{"\u2019"}s tender {"\u2014"} or you hear a {"\u201C"}squish{"\u201D"} sound when you press {"\u2014"} that{"\u2019"}s the ICV, and it{"\u2019"}s telling you something.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Symptoms of ICV dysfunction ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Signs your ICV may be struggling
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Not every digestive symptom points here, but ICV dysfunction has a recognizable pattern. You might notice:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Localized right-sided abdominal pain and tenderness, distinct from ovarian pain</li>
                <li>Visible swelling concentrated in the lower-right abdomen</li>
                <li>Flare-ups triggered by specific foods {"\u2014"} especially alcohol, sugar, eggs, and dairy</li>
                <li>Symptoms that worsen in the days before your period, when progesterone-driven constipation adds pressure</li>
                <li>A noticeable {"\u201C"}squish{"\u201D"} or gurgling when you press the area</li>
              </ul>
              <p>
                The food connection is key. The ICV essentially functions as a real-time gauge for how your gut is handling what you{"\u2019"}re eating {"\u2014"} it responds to dietary inputs within 24 to 48 hours. If you eat something inflammatory and feel that right-side tenderness flare a day or two later, you{"\u2019"}re getting direct feedback from this valve.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Dietary modifications ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              Dietary modifications to try
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Edmonds recommends using elimination as a diagnostic tool. Try removing gluten, alcohol, and dairy for one month and use the ICV as your measuring stick {"\u2014"} check in with that right-side tenderness every few days and track what changes. If your symptoms are severe, a low-FODMAP trial for one month may be worth exploring. The goal isn{"\u2019"}t permanent restriction. It{"\u2019"}s information. You{"\u2019"}re trying to figure out what your body is reacting to.
              </p>
              <p>
                Beyond elimination, she emphasizes two underrated habits: chewing your food thoroughly and letting yourself salivate consciously during meals. These aren{"\u2019"}t wellness platitudes {"\u2014"} they{"\u2019"}re mechanical. Digestion starts in the mouth. If food hits your small intestine insufficiently broken down, it creates more work for the ICV and more opportunity for inflammation. Adding digestive enzymes can support this process further, especially if you{"\u2019"}ve been dealing with chronic digestive stress.
              </p>
              <p>
                One unexpected tip: brush your teeth after every meal. The oral microbiome feeds into the gut microbiome, and keeping it balanced is another small lever you can pull.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── The massage technique ── */}
        <RevealSection>
          <section className="mb-14">
            <h2 className="playfair text-xl md:text-2xl font-bold leading-tight mb-4">
              The ICV massage technique
            </h2>
            <div className="space-y-4 font-['Helvetica','Arial',sans-serif] tracking-tight text-base leading-relaxed text-black">
              <p>
                Edmonds describes a manual technique she calls {"\u201C"}The Flush{"\u201D"} that you can do at home, once daily, to help the valve work better. Here{"\u2019"}s how it works:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Lie down and locate the tender ICV spot {"\u2014"} halfway between your right hip bone and your navel.</li>
                <li>Place your fingertips about one inch below the ICV.</li>
                <li>Press firmly and pull upward toward your head, following the line of the large intestine.</li>
                <li>Repeat this upward pulling motion three times total.</li>
                <li>Finally, place your thumbs about one inch above the ICV and push down firmly.</li>
              </ol>
              <p>
                The idea is to help move material through the valve and encourage it to close properly {"\u2014"} essentially clearing the backlog so the valve can reset. It{"\u2019"}s a simple, low-risk technique that many people find gives noticeable relief. The original article includes a{" "}
                <a
                  href="https://www.healendo.com/blog-1/2023/1/10/endo-belly-hot-spot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-charcoal transition-colors duration-300"
                >
                  video demonstration
                </a>
                {" "}of this technique if you want to see it done before trying it yourself.
              </p>
              <p>
                <strong>One important caveat:</strong> if you{"\u2019"}re experiencing severe pain in this area, skip the massage and see a provider. Severe ICV-area pain could indicate an infection, ovarian cysts, or inflammatory bowel disease that needs professional evaluation, not self-treatment.
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
                If you{"\u2019"}ve been lumping all your abdominal pain under {"\u201C"}endo belly{"\u201D"} without knowing what{"\u2019"}s driving it, this is a concrete place to start investigating. The ICV is a specific structure with specific dysfunction patterns, and once you know where it is and what aggravates it, you have something you can actually work with. That{"\u2019"}s rare with this disease.
              </p>
              <p>
                Start with the simplest moves. Locate the valve. Note whether it{"\u2019"}s tender. Try the elimination approach for a month {"\u2014"} pull gluten, alcohol, and dairy and track what happens to that specific spot. Try the flush technique daily. Slow down when you eat. These are free, low-risk experiments that give you real data about your own body.
              </p>
              <p>
                If those changes help but don{"\u2019"}t resolve things, consider seeing a functional medicine practitioner or gastroenterologist who understands the intersection of endometriosis and gut health. If the pain is severe or worsening, get an ultrasound to rule out cysts, adhesions, or structural damage. The ICV is a starting point for self-management, not a replacement for clinical care when you need it.
              </p>
              <p>
                The deeper point here is that endo belly isn{"\u2019"}t one thing. It{"\u2019"}s a collection of overlapping mechanisms {"\u2014"} inflammation, hormonal shifts, gut dysbiosis, and structural dysfunction like what happens at the ICV. The more precisely you can identify which piece is driving your symptoms on a given day, the more power you have to do something about it.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* ── Link to original ── */}
        <RevealSection>
          <a
            href="https://www.healendo.com/blog-1/2023/1/10/endo-belly-hot-spot"
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
