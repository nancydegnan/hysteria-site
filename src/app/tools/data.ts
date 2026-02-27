/* ── Interfaces ── */
export interface Tool {
  company: string;
  name: string;
  price: string;
  description: string;
  website: string;
  discountCode?: string;
  image?: string;
}

export interface FreeTool {
  name: string;
  url: string;
  description: string;
}

/* ── Products ── */
export const tools: Tool[] = [
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

/* ── Self Care (grouped by category) ── */
export const selfCareGroups: { theme: string; slug: string; products: Tool[] }[] = [
  {
    theme: "Skincare",
    slug: "skincare",
    products: [
      {
        company: "Dieux",
        name: "Dieux Skincare",
        price: "$22–$78",
        description:
          "Incredible fragrance-free skincare backed by clinical research. Every product is formulated at clinically studied doses and tested for efficacy — vegan, non-comedogenic, and designed for sensitive and post-treatment skin. A great store to explore for fragrance-free options across cleansers, serums, moisturizers, and eye care.",
        website: "https://www.dieuxskin.com/collections/skincare",
        image: "/dieux.jpeg",
      },
      {
        company: "Good Molecules",
        name: "Good Molecules Skincare",
        price: "$5–$26",
        description:
          "Affordable, fragrance-free skincare with best-in-class ingredients backed by research. By working directly with top labs, Good Molecules delivers effective formulations — targeting acne, redness, and hyperpigmentation — without the traditional retail markup. Vegan, cruelty-free, and made with simple, science-backed ingredients that are safe for you and the planet.",
        website: "https://www.goodmolecules.com/",
        image: "/good molecules.jpg",
      },
      {
        company: "The Ordinary",
        name: "The Ordinary Skincare",
        price: "$4–$20",
        description:
          "Clinical skincare formulations with integrity — organized by active ingredients like retinoids, vitamin C, hyaluronic acid, and peptides rather than marketing narratives. Fragrance-free, cruelty-free, and transparently priced to remove luxury markup while maintaining clinical-grade quality. A great entry point for building an effective, science-backed skincare routine.",
        website: "https://theordinary.com/en-us",
        image: "/the ordinary.jpg",
      },
    ],
  },
  {
    theme: "Hair Care",
    slug: "hair-care",
    products: [
      {
        company: "SEEN",
        name: "Blow-Out Creme, Fragrance Free",
        price: "$29",
        description:
          "Award-winning styling cream created by a Harvard-trained dermatologist. Delivers body, bounce, and shine with heat protection up to 450\u00B0F. Fragrance-free, non-comedogenic, non-irritating, and clinically proven safe for sensitive, acne-prone, and eczema-prone skin. Made with plant-derived hemisqualane instead of silicone, plus bisabolol and squalane for moisture.",
        website: "https://helloseen.com/products/seen-blow-out-creme-fragrance-free",
        image: "/seen blow out.png",
      },
      {
        company: "SEEN",
        name: "Magic Serum, Fragrance Free",
        price: "$36",
        description:
          "Award-winning hair serum that visibly smooths, shines, and strengthens hair in seconds with heat protection up to 450\u00B0F. Made with plant-derived hemisqualane, squalane, and olive-derived softeners — no silicone. Fragrance-free, non-comedogenic, non-irritating, and clinically proven safe for sensitive, acne-prone, and eczema-prone skin. Created by Harvard-trained dermatologist Dr. Iris Rubin.",
        website: "https://helloseen.com/products/seen-magic-serum-ff-1oz",
        image: "/seen serum.png",
      },
      {
        company: "SEEN",
        name: "Leave-In Conditioner, Fragrance Free",
        price: "$29",
        description:
          "Multitasking leave-in conditioner that detangles and hydrates with heat, pollution, and UV protection. Made with plant-derived hemisqualane, bisabolol, and moringa oleifera — no silicone, sulfates, parabens, phthalates, or dyes. Fragrance-free, non-comedogenic, non-irritating, and safe for sensitive, acne-prone, and eczema-prone skin.",
        website: "https://helloseen.com/products/seen-leave-in-conditioner-fragrance-free",
        image: "/seen leave in.png",
      },
      {
        company: "SEEN",
        name: "Curly Creme, Fragrance Free",
        price: "$29",
        description:
          "Curl-defining styling cream with soft hold, shine, and heat protection up to 450\u00B0F. Reduces frizz and breakage while guarding against UV and pollution. Made with plant-derived hemisqualane, squalane, bisabolol, and moringa oleifera — no silicone. Fragrance-free, non-comedogenic, non-irritating, and safe for sensitive, acne-prone, and eczema-prone skin.",
        website: "https://helloseen.com/products/seen-curly-creme-fragrance-free",
        image: "/seen curly.png",
      },
      {
        company: "The Seaweed Bath Co.",
        name: "Gentle Shampoo, Unscented",
        price: "$10.99",
        description:
          "Nourishing, fragrance-free body wash with sustainably harvested Atlantic seaweed packed with 65+ vitamins and minerals, plus antioxidant-rich spirulina, Hawaiian kukui oil, coconut oil, and aloe vera. Doubles as a shaving gel. Paraben-free, sulfate-free, vegan, gluten-free, and Leaping Bunny certified cruelty-free.",
        website: "https://www.amazon.com/Seaweed-Bath-Co-Moisturizing-Unscented/dp/B004W4B8JW",
        image: "/seaweed shampoo.png",
      },
      {
        company: "The Seaweed Bath Co.",
        name: "Gentle Conditioner, Unscented",
        price: "$10.99",
        description:
          "Fragrance-free conditioner with sustainably harvested Atlantic seaweed packed with 65+ vitamins and minerals, argan oil for moisture and shine, aloe, hyaluronic acid, and NaPCA amino acids for scalp hydration and environmental protection. Safe for color-treated hair. Paraben-free, sulfate-free, vegan, gluten-free, and Leaping Bunny certified cruelty-free.",
        website: "https://www.amazon.com/Seaweed-Bath-Co-Moisturizing-Conditioner/dp/B006RIJ57I",
        image: "/seaweed conditioner.png",
      },
      {
        company: "Phillip Adam",
        name: "Fragrance Free Shampoo & Conditioner Set",
        price: "$19.99",
        description:
          "pH-balancing shampoo and conditioner set with apple cider vinegar and botanical extracts like chamomile, lemon balm, nettle, rosemary, and sage. Fragrance-free and formulated with hydrolyzed pea protein for shine and smoothness. SLS-free, paraben-free, phthalate-free, biodegradable, vegan, gluten-free, cruelty-free, and contains no dyes.",
        website: "https://www.amazon.com/Phillip-Adam-Fragrance-Shampoo-Conditioner/dp/B08426C8HY",
        image: "/phillip adam duo.png",
      },
    ],
  },
  {
    theme: "Home Care",
    slug: "home-care",
    products: [
      {
        company: "Blueland",
        name: "Laundry Detergent & Toilet Bowl Cleaner Duo",
        price: "$43",
        description:
          "Plant and mineral-based cleaning duo with plastic-free, compostable refill packaging. Free & Clear laundry tablets are fragrance-free and accepted by the National Eczema Association — made without parabens, phosphates, dyes, ammonia, chlorine bleach, or phthalates. EPA Safer Choice certified, Cradle to Cradle Certified, and Leaping Bunny cruelty-free.",
        website: "https://www.blueland.com/products/laundry-toilet-duo?Laundry+Scent=Free+%26+Clear",
        image: "/blueland laundry.png",
      },
      {
        company: "Puracy",
        name: "Laundry Stain Remover",
        price: "$13.99",
        description:
          "Unscented, plant-based stain remover with six enzyme types that tackle sweat, grass, pet accidents, ink, rust, and over 1,500 other stain types. Free from sulfates, chlorine, phosphates, peroxide, parabens, salicylates, brighteners, and petroleum. Hypoallergenic and PETA-certified vegan and cruelty-free.",
        website: "https://www.amazon.com/Puracy-Stain-Remover-Cleaning-Clothes/dp/B0BZ13TV19",
        image: "/puracy.png",
      },
      {
        company: "Blueland",
        name: "Hand Soap Starter Set",
        price: "$18",
        description:
          "Refillable foaming hand soap with a reusable glass Forever Bottle and plant-based tablet refills. Free & Clear option is fragrance-free and hypoallergenic — made without parabens, phosphates, phthalates, dyes, or microplastics. Vegan, gluten-free, and soy/nut-free. EPA Safer Choice, Cradle to Cradle Certified, and Leaping Bunny cruelty-free.",
        website: "https://www.blueland.com/products/hand-soap-sets?Color=Signature&Refill+Quantity=3+Tablets&Scent=Free+%26+Clear",
        image: "/blueland hand soap.png",
      },
      {
        company: "Blueland",
        name: "Dish Duo",
        price: "$38",
        description:
          "Refillable powder dish soap and dishwasher detergent tablet set with plastic-free, compostable refill packaging. Fragrance-free, hypoallergenic, and clinically tested as non-irritating and non-sensitizing. Free from microplastics, parabens, phosphates, ammonia, chlorine bleach, or phthalates. EPA Safer Choice, Cradle to Cradle Certified, and Leaping Bunny cruelty-free.",
        website: "https://www.blueland.com/products/the-dish-duo",
        image: "/blueland dish soap.png",
      },
    ],
  },
];

/* ── Free Tools ── */
export const advocacyTools: FreeTool[] = [
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

export const healingTools: FreeTool[] = [
  {
    name: "Nervous System Reset Sound Bath",
    url: "https://www.youtube.com/watch?v=vzzZVGc6VyQ",
    description:
      "Trauma recovery and deep healing music for restoration. A free sound bath designed to regulate your nervous system \u2014 helpful for managing pain, stress, and the emotional toll of chronic illness. I listen to this in the background while working or just around the house.",
  },
  {
    name: "Lower Your Cortisol Sound Bath",
    url: "https://www.youtube.com/watch?v=S3k6KArOs0A",
    description:
      "Crystal singing bowls for stress relief. A free sound bath designed to help lower cortisol levels \u2014 useful for calming the nervous system when chronic pain, inflammation, or stress keep your body in overdrive. I listen to this in the background while working or just around the house.",
  },
];
