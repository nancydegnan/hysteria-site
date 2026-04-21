"use client";

import { RevealSection, Footer, SubpageNav } from "../components";

/* ══════════════════════════════════════════════
   SAVED PRACTITIONER DATA — not yet public
   ══════════════════════════════════════════════ */

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

const _instagramAccounts: InstagramAccount[] = [
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

const _practitioners: Practitioner[] = [
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

const _remotePractitioners: Practitioner[] = [
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

/* suppress unused warnings — data preserved for future use */
void _instagramAccounts;
void _practitioners;
void _remotePractitioners;

/* ���═════════════════════════════════════════════
   PUBLIC PAGE — coming soon
   ══════════════════════════��═══════════════════ */

export default function PractitionersPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav />

      <div className="flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center max-w-2xl mx-auto min-h-[70vh]">
        <RevealSection>
          <p className="section-label text-sm text-charcoal mb-3 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-brown inline-block" />
            the rolodex
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            <span className="font-black">coming</span>{" "}
            <em className="playfair-italic font-light">soon.</em>
          </h1>
          <p className="playfair text-base leading-snug text-black mt-4 max-w-md mx-auto">
            We&apos;re building a vetted, growing list of practitioners who actually believe you. It&apos;s almost ready.
          </p>

          <div className="mt-10">
            <p className="text-sm font-semibold text-black tracking-wider mb-4">
              want to share a practitioner you love?
            </p>
            <a
              href="mailto:thenocureclub@gmail.com?subject=Practitioner%20Recommendation"
              className="btn-primary text-xs"
            >
              drop a name
            </a>
          </div>
        </RevealSection>
      </div>

      <Footer />
    </div>
  );
}
