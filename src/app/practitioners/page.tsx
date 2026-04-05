"use client";

import Link from "next/link";
import { RevealSection, Footer, SubpageNav } from "../components";

/* ── Practitioner data ── */
interface Practitioner {
  name: string;
  city: string;
  state: string;
  remote: boolean;
  description: string;
  bestFor: string;
  contact?: { type: "phone" | "email"; value: string };
  website?: string;
}

/* ── Instagram accounts ── */
interface InstagramAccount {
  handle: string;
  url: string;
  description: string;
}

const instagramAccounts: InstagramAccount[] = [
  {
    handle: "@savannahregensburger",
    url: "https://www.instagram.com/savannahregensburger/",
    description:
      "Clinical Nutritionist, Educator + Speaker with Endo.",
  },
  {
    handle: "@chef_bai",
    url: "https://www.instagram.com/chef_bai/",
    description:
      "Vegan chef with endo, 2X bestselling author of \"Breaking Up With Dairy.\"",
  },
  {
    handle: "@alisa.vitti",
    url: "https://www.instagram.com/alisa.vitti/",
    description:
      "Women\u2019s Hormone Expert, Creator of Cycle Syncing Method, @floliving + MyFLO app, author of Woman Code + In the FLO.",
  },
  {
    handle: "@endonutrition",
    url: "https://www.instagram.com/endonutrition/?hl=en",
    description:
      "Khush Sra \u2014 Stage 4 \u2192 20 yrs remission. Advanced endometriosis care. Fx Med x Nervous System.",
  },
  {
    handle: "@aileyjolie",
    url: "https://www.instagram.com/aileyjolie/?hl=en",
    description:
      "MCP, MA Psychologist. Guiding You Back to Your Body. Somatic Psychologist & Supervisor. Founder of INBODY.",
  },
  {
    handle: "@thebeanprotocol",
    url: "https://www.instagram.com/thebeanprotocol/?hl=en",
    description:
      "Creating a healthy internal environment. Hormones \u2022 natural detox \u2022 gut \u2022 skin \u2022 weight \u2022 resilience \u2022 vitality. @uniquehammond.",
  },
  {
    handle: "@nicolesachslcsw",
    url: "https://www.instagram.com/nicolesachslcsw/?hl=en",
    description:
      "Creator of JournalSpeak. The Brain Science Behind Chronic Pain and Anxiety.",
  },
];

const practitioners: Practitioner[] = [
  {
    name: "Dr. Iris Orbuch",
    city: "Los Angeles",
    state: "California",
    remote: false,
    description:
      "Endometriosis excision specialist and author of 'Beating Endo.' Performs advanced laparoscopic excision surgery and offers comprehensive treatment plans that address the whole patient.",
    bestFor:
      "Patients seeking expert excision surgery and a multidisciplinary approach to endo management.",
    contact: { type: "phone", value: "(310) 555-0140" },
    website: "https://www.beatingendo.com",
  },
  {
    name: "Dr. Chandra Spring-Robinson",
    city: "San Diego",
    state: "California",
    remote: false,
    description:
      "Endometriosis and minimally invasive gynecologic surgery specialist based in San Diego, focused on advanced care for pelvic pain and endometriosis.",
    bestFor:
      "Patients in Southern California seeking specialized endometriosis care in the San Diego area.",
    website: "https://www.socalendo.health/",
  },
  {
    name: "Emily Eckmann",
    city: "Los Angeles",
    state: "California",
    remote: false,
    description:
      "Pelvic Health Physical Therapist specializing in pelvic floor rehabilitation and chronic pelvic pain management.",
    bestFor:
      "Patients in Los Angeles seeking specialized pelvic floor physical therapy.",
    website: "https://www.emilyeckmannpt.com/",
  },
  {
    name: "Dr. Kelly N. Wright, MD",
    city: "Los Angeles",
    state: "California",
    remote: false,
    description:
      "Director of Minimally Invasive Gynecologic Surgery at Cedars-Sinai. Harvard AAGL-fellowship trained endometriosis expert specializing in excision surgery, fertility preservation, and pelvic pain.",
    bestFor:
      "Patients in Los Angeles seeking an experienced endometriosis surgeon at a major medical center.",
    website: "https://www.cedars-sinai.org/provider/kelly-wright-816326.html",
  },
];

const remotePractitioners: Practitioner[] = [
  {
    name: "Dr. Jolene Brighten",
    city: "",
    state: "",
    remote: true,
    description:
      "Naturopathic endocrinologist and bestselling author of 'Beyond the Pill.' Specializes in hormonal health, post-birth-control syndrome, and root-cause approaches to period problems and endometriosis.",
    bestFor:
      "Patients seeking a functional and hormonal approach to managing endometriosis and related conditions.",
    website: "https://drbrighten.com/",
  },
  {
    name: "Unique Hammond",
    city: "",
    state: "",
    remote: true,
    description:
      "Nutritionist specializing in dietary approaches to support hormonal health and chronic conditions like endometriosis.",
    bestFor:
      "Patients looking for personalized nutritional guidance to complement their endo treatment plan.",
    website: "https://www.youregreat.com/",
  },
  {
    name: "Karen Hurd",
    city: "",
    state: "",
    remote: true,
    description:
      "Biochemist and nutritional consultant, and the originator of the idea that soluble fiber (primarily from beans) can help the body bind and excrete excess hormones, particularly estrogen \u2014 which is central to conditions like endometriosis. Offers remote courses you can purchase on her website covering an array of conditions as well as overall health.",
    bestFor:
      "Anyone looking for accessible, self-paced nutritional education for chronic conditions and general wellness.",
    website: "https://karen-r.mylearnworlds.com/courses",
  },
];

/* Group by state */
function groupByState(list: Practitioner[]) {
  const map: Record<string, Practitioner[]> = {};
  for (const p of list) {
    (map[p.state] ??= []).push(p);
  }
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
}

function PractitionerCard({ p }: { p: Practitioner }) {
  return (
    <div className="bg-gray-light border border-gray-mid p-8 md:p-10 hover:border-black transition-all duration-300 card-hover">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
          {p.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {p.city && (
            <span className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase bg-gray-mid/50 px-3 py-1">
              {p.city}, {p.state}
            </span>
          )}
          {p.remote && (
            <span className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase bg-blush/10 text-black px-3 py-1">
              available remotely
            </span>
          )}
        </div>
      </div>

      <p className="playfair text-sm leading-[1.4] text-gray-text mb-6">
        {p.description}
      </p>

      <div className="mb-6">
        <span className="text-xs font-semibold text-black uppercase tracking-wider">
          best fit for
        </span>
        <p className="playfair text-sm leading-[1.4] text-gray-text mt-1">
          {p.bestFor}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-mid">
        {p.contact && (
          <a
            href={
              p.contact.type === "phone"
                ? `tel:${p.contact.value}`
                : `mailto:${p.contact.value}`
            }
            className="inline-flex items-center gap-2 text-sm text-gray-text hover:text-black transition-colors duration-300"
          >
            {p.contact.value}
          </a>
        )}

        {p.website && (
          <a
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-black transition-colors duration-300"
          >
            Visit Website &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Page ── */
export default function PractitionersPage() {
  const grouped = groupByState(practitioners);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <RevealSection>
            <p className="section-label text-sm text-gray-text mb-3">
              vetted &amp; trusted
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <span className="font-black">Practitioners</span>{" "}
              <em className="playfair-italic font-light">who care.</em>
            </h1>
            <p className="playfair text-base leading-[1.4] mt-6 text-gray-text max-w-2xl">
              Every person listed here has been personally vetted or recommended
              by someone I trust. This is not an ad — it&apos;s a shortcut through
              the maze I had to navigate alone.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() =>
                  document.getElementById("practitioners")?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm uppercase tracking-[0.15em] border border-gray-mid px-5 py-2 hover:border-black hover:text-black transition-colors duration-300 text-gray-text"
              >
                Practitioners
              </button>
              <button
                onClick={() =>
                  document.getElementById("instagram")?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm uppercase tracking-[0.15em] border border-gray-mid px-5 py-2 hover:border-black hover:text-black transition-colors duration-300 text-gray-text"
              >
                instagram accounts
              </button>
            </div>
          </RevealSection>
        </header>
      </div>

      {/* ── Practitioner listings ── */}
      <main id="practitioners" className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto scroll-mt-8 pt-16 md:pt-24">
        {/* ── Available Remotely ── */}
        <section className="mb-16 md:mb-24">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-8 md:mb-10">
              available remotely
            </h2>
          </RevealSection>

          <div className="grid gap-6">
            {remotePractitioners.map((p) => (
              <RevealSection key={p.name}>
                <PractitionerCard p={p} />
              </RevealSection>
            ))}
          </div>
        </section>

        {grouped.map(([state, list]) => (
          <section key={state} className="mb-16 md:mb-24 last:mb-0">
            <RevealSection>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-8 md:mb-10">
                {state}
              </h2>
            </RevealSection>

            <div className="grid gap-6">
              {list.map((p) => (
                <RevealSection key={p.name}>
                  <PractitionerCard p={p} />
                </RevealSection>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* ── Instagram accounts ── */}
      <section id="instagram" className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto scroll-mt-8">
        <RevealSection>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            instagram accounts
          </h2>
          <p className="playfair text-sm leading-[1.4] text-gray-text mb-10 max-w-2xl">
            Accounts I follow that consistently share helpful, honest content
            about endo, women&apos;s health, and hormonal health.
          </p>
        </RevealSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramAccounts.map((acct) => (
            <RevealSection key={acct.handle}>
              <a
                href={acct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-light border border-gray-mid p-8 hover:border-black transition-all duration-300 h-full card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium group-hover:text-black transition-colors duration-300 break-all">
                    {acct.handle}
                  </span>
                </div>
                <p className="playfair text-sm leading-[1.4] text-gray-text">
                  {acct.description}
                </p>
              </a>
            </RevealSection>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
