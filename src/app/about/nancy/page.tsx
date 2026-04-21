"use client";

import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../../components";

export default function AboutNancyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              hi, I&apos;m Nancy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">i have</span>{" "}
              <em className="playfair-italic font-light">stage 3 endo.</em>
            </h1>
          </RevealSection>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
        <Link
          href="/about"
          className="playfair-italic text-sm font-bold text-black hover:text-gray-text transition-colors duration-300 mb-10 inline-block"
        >
          &larr; back to about
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_450px] gap-12 md:gap-20 items-start">
          <RevealSection>
            <p className="section-label text-sm text-black mb-4">
              hi, I&apos;m Nancy
            </p>
            <div className="space-y-5 text-base text-black leading-[1.85]">
              <p>
                In 2020, when the world was falling apart, so did my body. My
                period became so painful I was vomiting and blacking out for
                hours. My face became covered in boil-like acne. I developed
                chronic pain down the whole right side of my body.
              </p>
              <p>
                Doctors told me it was normal. Maybe I should try
                antidepressants. Maybe I just needed to have a baby. And
                definitively, they said, I must go back on birth control.
              </p>
              <p>
                <strong className="text-black">I would not accept.</strong>
              </p>
              <p>
                After a (brutal) year of research and many doctor visits with a
                similar tale, I self-diagnosed and found a surgeon who agreed to
                do surgery and confirmed Stage 3 Endometriosis. When I walked
                into his office for the post-op, ready for a treatment plan, he
                sighed and said my only options were{" "}
                <strong className="text-black">birth control</strong> or{" "}
                <strong className="text-black">
                  medically induced menopause
                </strong>
                . I was 25.
              </p>
              <p>
                My devastation sank in. You see, I&apos;m not anti-birth
                control by any means &mdash; I love it for it&apos;s intended
                purpose, to prevent pregnancy. But I do know it&apos;s not a
                real treatment for endo, and that the disease progresses
                internally while the symptoms are suppressed. But, desperate to
                get my life back, I took the hormonal IUD and moved on.
              </p>
              <p>
                Then I discovered the work of doctors, scientists, and
                practitioners who are transforming how we understand female
                biology. And something shifted. I do not accept that endo is
                just something I have to live with. I refuse the narrative that
                women are cursed with the harder biology, condemned to
                suffering. We have a biology optimized for flow and harmony,
                strength and resilience. It has simply been looked at through a
                lens that was never built for us.
              </p>
              <p>
                <strong className="text-black">
                  I have set out to put my endo into remission.
                </strong>{" "}
                Not less pain.{" "}
                <strong className="text-black">No pain.</strong> There are
                answers, and I am determined to bring them to everyone who
                needs them.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <img
              src="/NANCY/Monika Photos/8A426141-7675-47B9-BCC8-14ECF0BB0C6D-labbet-app.JPG"
              alt="Nancy portrait"
              className="w-full aspect-[3/4] object-cover"
              style={{ objectPosition: "center 80%" }}
            />
          </RevealSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
