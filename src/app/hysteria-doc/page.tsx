"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealSection, Footer } from "../components";

export default function HysteriaDoc() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* ====== NAV ====== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-chartreuse/90 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="ncc-logo text-sm text-black hover:italic transition-all duration-300"
          >
            &larr; The No Cure Club
          </Link>
          <span className="hysteria-title text-lg text-black">
            HYSTERIA
          </span>
          <a
            href="#donate"
            className="text-sm text-black font-bold hover:italic transition-all duration-300"
          >
            support the film
          </a>
        </div>
      </nav>

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hysteria_hero_v3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <RevealSection>
            <div className="flex justify-between items-center max-w-4xl mx-auto mb-16 md:mb-24">
              <span className="font-bold text-sm text-chartreuse">
                A Documentary Film
              </span>
              <span className="font-bold text-sm text-chartreuse">
                by Nancy Degnan
              </span>
            </div>
            <p className="font-bold italic text-lg md:text-xl text-chartreuse mb-16 md:mb-24">
              I went looking for a diagnosis.
            </p>
            <h1 className="hysteria-title text-[5rem] md:text-[9rem] lg:text-[12rem] text-chartreuse leading-[0.85] animate-strobe">
              HYSTERIA
            </h1>
            <p className="font-bold italic text-lg md:text-xl text-chartreuse mt-24 md:mt-36">
              I found a global crisis.
            </p>
            <div className="mt-12">
              <a
                href="#about"
                className="inline-block text-chartreuse/60 hover:text-chartreuse transition-colors duration-500"
                aria-label="Scroll to about section"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ====== QUOTE — THE HYSTERIC ARCHETYPE ====== */}
      <section className="py-16 md:py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-chartreuse/60 mb-6">
              the hysteric archetype
            </p>
            <blockquote className="border-l-2 border-chartreuse pl-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold italic leading-[1.1] text-chartreuse">
                &ldquo;He is not a little mystified when he encounters in her
                periodically recurring phases of hypersensitiveness,
                unreasonableness, and loss of the sense of proportion.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-chartreuse/60">
                  20th-century medical commentary on women
                </p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section id="about" className="py-20 md:py-28 px-6 bg-chartreuse">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <RevealSection>
              <p className="section-label text-sm text-black mb-4">
                about the film
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8 text-black">
                <span className="font-black">no more</span>{" "}
                <em className="playfair-italic font-light">breadcrumbs.</em>
              </h2>
              <div className="space-y-5 font-['Helvetica','Arial',sans-serif] text-base text-black leading-[1.4] tracking-tight">
                <p>
                  <strong className="text-black">HYSTERIA</strong> rips the
                  muffle off one of the most common yet criminally
                  under-researched diseases in the world.{" "}
                  <strong className="text-black">Endometriosis</strong> affects
                  over an estimated 190 million people globally — and most of
                  them spend nearly a decade of their youth just trying to get
                  someone to believe them.
                </p>
                <p>
                  The medical system has offered women with chronic conditions
                  like Endo meager breadcrumbs while funding an assortment of
                  boner pills and even a study on whether men find women with
                  Endo attractive. Systems such as this survive upon the fear,
                  confusion, and desperation of their subjects, who don&apos;t
                  know how to advocate for themselves.{" "}
                  <strong className="text-black">No more.</strong>
                </p>
                <p>
                  This film follows my journey to put my stage 3 endometriosis
                  into remission. I work with cutting-edge specialists,
                  researchers, and biotech companies to discover the path to
                  treating this disease and healing my body. Along the way, I
                  discover the hidden link between{" "}
                  <strong className="text-black">witches</strong>,{" "}
                  <strong className="text-black">hysteria</strong>, and{" "}
                  <strong className="text-black">endometriosis</strong> — tracing
                  back the lineage of medical folklore that continues to haunt
                  women in the doctor&apos;s office today.
                </p>
              </div>
            </RevealSection>

            <RevealSection stagger>
              <div className="space-y-4">
                <blockquote className="border-l-2 border-black pl-6 py-4 bg-[#c8ff00]">
                  <p className="font-['Helvetica','Arial',sans-serif] font-medium text-base text-black leading-[1.3] tracking-tight">
                    &ldquo;The global hormonal contraceptive market is worth $19
                    billion. The first-line treatment for endometriosis has been
                    the same since 1957.&rdquo;
                  </p>
                </blockquote>

                <div className="bg-[#c8ff00] p-8">
                  <p className="text-4xl font-semibold tracking-tight text-black">
                    7&ndash;10 years
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black mt-2 tracking-tight">
                    Average time to receive an endometriosis diagnosis.
                  </p>
                </div>

                <div className="bg-black text-white p-8">
                  <p className="text-4xl font-semibold tracking-tight">
                    $2 per year
                    <br />
                    per patient
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-white/60 mt-2 tracking-tight">
                    Amount of funding the NIH allocates to endometriosis
                    research and diagnostics.
                  </p>
                </div>

                <div className="bg-[#c8ff00] p-8 border-l-2 border-black">
                  <p className="text-4xl font-semibold tracking-tight text-black">
                    $180B&ndash;$250B
                  </p>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black mt-2 tracking-tight">
                    Global market opportunity if the &ldquo;unmet needs&rdquo; of
                    endometriosis were addressed.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <div className="bg-chartreuse px-6">
        <div className="max-w-5xl mx-auto">
          <hr className="border-t-2 border-black" />
        </div>
      </div>

      {/* ====== THE ROADMAP ====== */}
      <section className="py-20 md:py-28 px-6 bg-chartreuse">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-black mb-4">
              my experiment
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6 text-black">
              <span className="font-black">the</span>{" "}
              <em className="playfair-italic font-light">roadmap.</em>
            </h2>
            <p className="font-['Helvetica','Arial',sans-serif] text-sm md:text-base text-black leading-[1.5] tracking-tight max-w-3xl mb-12">
              The core experiment of the film is whether I can put my stage 3 endometriosis into remission. Using a mixture of holistic and modern fem tech and medical approaches, my goal is to prove that while endometriosis may not be &ldquo;cure-able&rdquo; it certainly is treatable with a multi-modal approach, and that it doesn&rsquo;t need to cost a fortune to do it.
            </p>
          </RevealSection>

          <div className="roadmap-timeline">
            {/* Stop 1 — Nutrition */}
            <div className="roadmap-stop">
              <div className="roadmap-dot" />
              <RevealSection>
                <div className="bg-[#c8ff00] p-6 md:p-8">
                  <h3 className="font-['Helvetica','Arial',sans-serif] text-lg font-bold tracking-tight text-black mb-2">
                    Nutrition
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.4] tracking-tight">
                    <a href="https://www.youregreat.com/" target="_blank" rel="noopener noreferrer" className="underline">The Bean Protocol</a> endometriosis protocol with{" "}
                    <a href="https://www.youregreat.com/blog/2025/6/20/podcast-56-the-fundamentals-of-great-health-with-dr-karen-hurd" target="_blank" rel="noopener noreferrer" className="underline">Karen Hurd and
                    Unique Hammond</a> — using soluble fiber to bind and eliminate
                    excess estrogen and toxins.
                  </p>
                </div>
              </RevealSection>
            </div>

            {/* Stop 2 — Mind-Body Connection */}
            <div className="roadmap-stop">
              <div className="roadmap-dot" />
              <RevealSection>
                <div className="bg-[#c8ff00] p-6 md:p-8">
                  <h3 className="font-['Helvetica','Arial',sans-serif] text-base font-bold tracking-tight text-black mb-2">
                    Mind-Body Connection
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.4] tracking-tight">
                    <a href="https://www.amazon.com/Mind-Your-Body-Revolutionary-Program/dp/0593716930" target="_blank" rel="noopener noreferrer" className="underline">The Journal Speak method</a> to address the psycho-physical
                    connection between chronic pain, endometriosis, and stored
                    trauma.
                  </p>
                </div>
              </RevealSection>
            </div>

            {/* Stop 3 — Physical */}
            <div className="roadmap-stop">
              <div className="relative">
                <div className="roadmap-here-label">
                  <span className="font-['Helvetica','Arial',sans-serif] text-sm font-black tracking-tight text-black uppercase">I am here</span>
                  <svg width="20" height="26" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 24L0 14H6V0H12V14H18L9 24Z" fill="black" />
                  </svg>
                </div>
                <div className="roadmap-dot" />
              </div>
              <RevealSection>
                <div className="bg-[#c8ff00] p-6 md:p-8">
                  <h3 className="font-['Helvetica','Arial',sans-serif] text-lg font-bold tracking-tight text-black mb-2">
                    Physical
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.4] tracking-tight">
                    Working with <a href="https://otofertility.com/" target="_blank" rel="noopener noreferrer" className="underline">OTO Fertility</a> for exercise and movement to
                    increase stress resilience, then acupuncture, rolfing, and
                    pelvic floor physical therapy.
                  </p>
                </div>
              </RevealSection>
            </div>

            {/* Stop 4 — Medical */}
            <div className="roadmap-stop">
              <div className="roadmap-dot" />
              <RevealSection>
                <div className="bg-[#c8ff00] p-6 md:p-8">
                  <h3 className="font-['Helvetica','Arial',sans-serif] text-lg font-bold tracking-tight text-black mb-2">
                    Medical
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.4] tracking-tight">
                    Removing the hormonal IUD and considering whether surgery is
                    a necessary next step.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ====== QUOTE — STACY SIMS ====== */}
      <section className="py-16 md:py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <blockquote className="border-l-2 border-chartreuse pl-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold italic leading-[1.1] text-chartreuse">
                &ldquo;Women are not small men.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-chartreuse/60">Stacy Sims</p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== MY STORY ====== */}
      <section id="my-story" className="py-20 md:py-28 px-6 bg-chartreuse">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
            <RevealSection>
              <p className="section-label text-sm text-black mb-4">
                my story
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-12 text-black">
                <span className="font-black">how i</span>{" "}
                <em className="playfair-italic font-light">got here.</em>
              </h2>
              <div className="space-y-5 font-['Helvetica','Arial',sans-serif] text-base text-black leading-[1.4] tracking-tight">
                <p>
                  In 2020, when the world was falling apart, so did my body. My period became so painful I was vomiting and blacking out for hours. Doctors told me it was normal. Maybe I should try antidepressants. Maybe I just needed to have a baby.
                </p>
                <p>
                  <strong className="text-black">I would not accept.</strong>
                </p>
                <p>
                  After a year of research, I self-diagnosed and found a surgeon who confirmed Stage 3 Endometriosis. When I walked into his office for the post-op, ready for a treatment plan, he sighed and said my only options were birth control or medical menopause.
                </p>
                <p>
                  I was 25.
                </p>
                <p>
                  That was the moment I understood something most women with endo eventually understand: the medical system has decided this disease is unsolvable, and the only thing on offer is symptom suppression while the disease keeps growing.
                </p>
                <p>
                  <strong className="text-black">I refused that as a final answer.</strong>
                </p>
                <p>
                  For the last five years, I have been building my own protocol. Surgery. Diet. Nervous system work. Light therapy. Movement. Supplementation. Community. The work of doctors, scientists, and practitioners who are quietly transforming how we understand female biology, stitched together into something coherent enough to live inside.
                </p>
                <p>
                  <strong className="text-black">I am putting my endometriosis into remission.</strong> Not less pain. No pain. Not symptom management. Restoration.
                </p>
                <p>
                  <strong className="text-black">This documentary is the record of that work.</strong>
                </p>
                <p>
                  It exists because the path I&apos;m walking should not require the resources I&apos;ve had to find it. Most women with endo are handed two options and told to pick. I want this film to be the third option, made visible. The protocol stack, the practitioners, the science, the failures, the breakthroughs, all of it documented so the next woman doesn&apos;t have to spend a year in the dark figuring out that there&apos;s more than what she was told.
                </p>
                <p>
                  There are answers.
                </p>
                <p>
                  <strong className="text-black">I am determined to put them on the screen.</strong>
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden">
                  <img
                    src="/IMG_1568 3.jpg"
                    alt="Nancy before surgery in hospital gown and cap"
                    className="w-full h-[340px] object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/IMG_0509.jpg"
                    alt="Nancy resting during recovery"
                    className="w-full h-[300px] object-cover"
                    style={{ objectPosition: "0% center" }}
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== QUOTE — ALISA VITTI ====== */}
      <section className="py-16 md:py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <blockquote className="border-l-2 border-chartreuse pl-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold italic leading-[1.1] text-chartreuse">
                &ldquo;Women tend to get sucked into believing that our bodies
                are wild, scary, shameful places that need to be managed by an
                outside source, medicated, controlled, and sterilized.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-chartreuse/60">Alisa Vitti</p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== DONATION SECTION ====== */}
      <section id="donate" className="py-20 md:py-28 px-6 bg-chartreuse">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <p className="section-label text-sm text-black mb-4">
                support
              </p>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8 text-black">
                <span className="font-black">fund</span>{" "}
                <em className="playfair-italic font-light">the film.</em>
              </h2>
              <p className="font-['Helvetica','Arial',sans-serif] text-base text-black leading-[1.4] tracking-tight mb-8">
                Be a part of the film! Make a tax-deductible donation today to
                support the mission of bringing this film to audiences and
                changing the public narrative of endometriosis. Art and media
                must lead the way for real change.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://donate.mazloweb.com/donate/hysteria-documentary-production-fund"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  donate now
                </a>
                <button onClick={handleCopyLink} className="btn-secondary">
                  {copied ? "copied!" : "spread the word"}
                </button>
              </div>
            </RevealSection>

            <RevealSection stagger>
              <div className="space-y-4">
                <div className="bg-[#c8ff00] p-8">
                  <h3 className="text-lg font-medium mb-2 text-black">tax-deductible</h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.4] tracking-tight">
                    HYSTERIA is fiscally sponsored, so your donation is
                    tax-deductible to the fullest extent of the law.
                  </p>
                </div>
                <div className="bg-black text-white p-8">
                  <h3 className="text-lg font-medium mb-2">
                    Patient-Led
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-white/70 leading-[1.4] tracking-tight">
                    The medical industry will never lead this change &mdash;
                    patients have to. Media creates the demand that forces the
                    system to respond.
                  </p>
                </div>
                <div className="bg-[#c8ff00] p-8 border-l-2 border-black">
                  <h3 className="text-lg font-medium mb-2 text-black">
                    Every Dollar Counts
                  </h3>
                  <p className="font-['Helvetica','Arial',sans-serif] text-sm text-black leading-[1.4] tracking-tight">
                    From $5 to $5,000 — every contribution fuels production,
                    research trips, and getting this story told.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ====== QUOTE — CATHERINE EARNSHAW ====== */}
      <section className="pt-0 pb-16 md:pt-0 md:pb-24 px-6 bg-chartreuse">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <blockquote className="border-l-2 border-black pl-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold italic leading-[1.1] text-black">
                &ldquo;I&apos;m tired of being enclosed here. I&apos;m wearying
                to escape into that glorious world, and to be always there: not
                seeing it dimly through tears, and yearning for it through the
                walls of an aching heart.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm text-black/40">
                  Catherine Earnshaw
                </p>
              </footer>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ====== TICKER ====== */}
      <div className="overflow-hidden whitespace-nowrap py-3 bg-black border-y border-black">
        <div className="ticker-scroll inline-block">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="text-sm tracking-[0.3em] uppercase text-chartreuse mx-4"
            >
              WE ARE NOT HYSTERICAL &bull; WE ARE NOT SMALLER, WEAKER MEN &bull; WE HAVE ENDOMETRIOSIS &bull; 1 IN 10 OF ALL WOMEN DO TOO &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ====== FOOTER ====== */}
      <div className="[&_footer]:!bg-chartreuse [&_footer]:!border-black/10">
        <Footer />
      </div>
    </div>
  );
}
