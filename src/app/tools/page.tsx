"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ── Scroll-reveal (duplicated from homepage to keep things simple) ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "fade-in-section"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Tool data ── */
interface Tool {
  company: string;
  name: string;
  price: string;
  description: string;
  website: string;
  discountCode?: string;
  image?: string;
}

const tools: Tool[] = [
  {
    company: "OhmBody",
    name: "OhmBody Starter Kit",
    price: "$719",
    description:
      "Wearable earpiece that uses patented neurostimulation technology to simultaneously stimulate the vagus and trigeminal nerves — reducing period pain, lightening flow, and balancing your cycle. Drug-free, hormone-free relief.",
    website: "https://www.ohmbody.com",
    discountCode: "PLACEHOLDER",
    image: "/Ohmbody-image-1.webp",
  },
  {
    company: "The Pelvic People",
    name: "Ohnut",
    price: "$75",
    description:
      "Soft, stretchy, stackable rings that let you customize penetration depth — reducing pain during intimacy by preventing contact with tender pelvic structures.",
    website: "https://thepelvicpeople.com",
    discountCode: "PLACEHOLDER",
    image: "/Orange_Ohnut_Updated-resize-min.webp",
  },
  {
    company: "The Pelvic People",
    name: "Kiwi",
    price: "$115",
    description:
      "A vibrating pelvic relaxation massager designed to release tight pelvic floor muscles. Non-phallic, gentle, and targeted — with different ends for shallow internal use and for massaging connected muscle groups.",
    website: "https://thepelvicpeople.com/products/kiwi",
    discountCode: "PLACEHOLDER",
    image: "/Kiwicollectionphoto_Editablebox_orange2-min.webp",
  },
  {
    company: "OTO Fertility",
    name: "OTO Fertility Tracker",
    price: "",
    description:
      "Clinical-grade wearable biosensor and AI-powered app that tracks over 50 body signals to generate a personalized Fertility Index score \u2014 reflecting your body\u2019s readiness for conception with personalized recommendations. FDA-cleared and available through partner fertility clinics.",
    website: "https://otofertility.com/our-product/",
    image: "/OTO_Fertility_OTO_Fertility_Launches_World_s_First_AI_Powered_Pl.jpg",
  },
  {
    company: "FLO Living",
    name: "MyFLO App",
    price: "Free",
    description:
      "Cycle syncing app that aligns nutrition, movement, and lifestyle recommendations with your menstrual cycle phases. Provides daily phase-specific guidance on food, fitness, and productivity \u2014 users reported 83% reduction in PMS symptoms.",
    website: "https://floliving.com/pages/official-cycle-syncing-app-myflo",
    image: "/myflo.png",
  },
  {
    company: "Tiny Health",
    name: "Tiny Health Gut Microbiome Testing",
    price: "From $249",
    description:
      "Gold-standard deep shotgun gut microbiome testing that reveals the full picture of your gut health — including bacteria, fungi, parasites, and inflammation markers. I use the adult yearly membership, which includes two tests per year to track changes over time. Understanding your gut is a critical piece of the endometriosis puzzle, since gut dysbiosis is present in roughly 80% of endo cases.",
    website: "https://www.tinyhealth.com/store",
    image: "/tiny health.jpg",
  },
];

/* ── Free tool data ── */
interface FreeTool {
  name: string;
  url: string;
  description: string;
}

const advocacyTools: FreeTool[] = [
  {
    name: "Endometriosis Symptom Questionnaire",
    url: "https://nyulangone.org/locations/endometriosis-center/endometriosis-symptom-questionnaire",
    description:
      "Free screening tool from NYU Langone\u2019s Endometriosis Center. Asks about five key symptom areas \u2014 period pain, pain between periods, painful intercourse, avoidance of sex due to pain, and painful bowel movements \u2014 to help identify potential endometriosis and connect you with further evaluation.",
  },
  {
    name: "Endometriosis Symptom Checker",
    url: "https://www.endometriosis-uk.org/symptom-checker",
    description:
      "Quick screening tool from Endometriosis UK that takes less than a minute. Identifies common endo symptoms and lets you generate a letter to share with your doctor \u2014 helping you walk in prepared.",
  },
  {
    name: "Pain Perception Project",
    url: "https://www.painperceptionproject.com/",
    description:
      "A patient-founded initiative producing tools for better understanding pain. Includes a Pelvic Pain Assessment that helps you effectively communicate with your doctor \u2014 because coming prepared is an element we\u2019ve never had.",
  },
];

const healingTools: FreeTool[] = [
  {
    name: "Nervous System Reset Sound Bath",
    url: "https://www.youtube.com/watch?v=vzzZVGc6VyQ",
    description:
      "Trauma recovery and deep healing music for restoration. A free sound bath designed to regulate your nervous system \u2014 helpful for managing pain, stress, and the emotional toll of chronic illness.",
  },
];

/* ── Page ── */
export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      {/* ── Back link ── */}
      <div className="px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-hot-pink transition-colors duration-300"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto">
        <RevealSection>
          <p className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-hot-pink mb-4">
            // Resources
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-cream uppercase leading-[0.85] section-title-cream">
            Tools
          </h1>
          <p className="font-body text-base md:text-lg leading-[1.8] mt-8 opacity-80 max-w-2xl">
            Products and other free tools I actually use that have made a real
            difference in managing pain and healing.
          </p>

          {/* Jump-to nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { href: "#products", label: "Products" },
              { href: "#advocate", label: "Free Tools" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-[2px] border-cream/30 px-5 py-2 font-heading text-xs uppercase tracking-[0.2em] hover:border-hot-pink hover:text-hot-pink transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </RevealSection>
      </header>

      {/* ── Tool listings ── */}
      <main id="products" className="px-6 pb-28 md:pb-40 max-w-5xl mx-auto scroll-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <RevealSection key={tool.name}>
              <div className="border-[3px] border-cream/20 hover:border-hot-pink transition-colors duration-500 flex flex-col h-full">
                {/* Image */}
                {tool.image ? (
                  <div className="bg-cream/10 overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-cream/10 flex items-center justify-center p-10">
                    <span className="font-heading text-lg uppercase tracking-wider text-cream/30 text-center">
                      {tool.name}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Company */}
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-hot-pink">
                    {tool.company}
                  </span>

                  {/* Product name */}
                  <h3 className="font-heading text-2xl uppercase leading-tight mt-3 mb-2">
                    {tool.name}
                  </h3>

                  {/* Price */}
                  <p className="font-heading text-xl text-hot-pink mb-4">
                    {tool.price}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm leading-[1.8] opacity-80 mb-6 flex-1">
                    {tool.description}
                  </p>

                  {/* Discount code */}
                  {tool.discountCode && (
                    <div className="border-[2px] border-dashed border-cream/20 px-4 py-3 mb-6">
                      <span className="font-body text-xs uppercase tracking-wider opacity-50">
                        Discount Code
                      </span>
                      <p className="font-heading text-sm uppercase tracking-wider mt-1">
                        {tool.discountCode}
                      </p>
                    </div>
                  )}

                  {/* Buy link */}
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-cream hover:text-hot-pink transition-colors duration-300"
                  >
                    Shop Now
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* ── Free Tools: Heal ── */}
        <section id="advocate" className="mt-20 md:mt-32 scroll-mt-8">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-10 md:mb-14">
              Free Tools to Help You Heal
            </h2>
          </RevealSection>

          <div className="grid gap-6">
            {healingTools.map((ft) => (
              <RevealSection key={ft.name}>
                <a
                  href={ft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 group"
                >
                  <h3 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-3 group-hover:text-hot-pink transition-colors duration-300">
                    {ft.name}
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="font-body text-sm leading-[1.8] opacity-70">
                    {ft.description}
                  </p>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ── Free Tools: Advocate ── */}
        <section className="mt-20 md:mt-32">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-hot-pink mb-10 md:mb-14">
              Free Tools to Advocate for Yourself
            </h2>
          </RevealSection>

          <div className="grid gap-6">
            {advocacyTools.map((ft) => (
              <RevealSection key={ft.name}>
                <a
                  href={ft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-[3px] border-cream/20 p-8 hover:border-hot-pink transition-colors duration-500 group"
                >
                  <h3 className="font-heading text-xl md:text-2xl uppercase leading-tight mb-3 group-hover:text-hot-pink transition-colors duration-300">
                    {ft.name}
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="font-body text-sm leading-[1.8] opacity-70">
                    {ft.description}
                  </p>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-cream/10 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">
            &copy; {new Date().getFullYear()} HYSTERIA Film. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="font-body text-xs text-cream/40 hover:text-hot-pink transition-colors duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
