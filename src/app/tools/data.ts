/* ── Interfaces ── */
export interface Tool {
  company: string;
  name: string;
  price: string;
  description: string;
  shortDescription?: string;
  personalNote?: string;
  website: string;
  image?: string;
  imageFit?: "contain" | "cover";
  imagePosition?: string;
}

export interface FreeTool {
  name: string;
  url: string;
  description: string;
  image?: string;
  imagePosition?: string;
}

/* ── Products ── */
export const tools: Tool[] = [
  {
    company: "OhmBody",
    name: "OhmBody Starter Kit",
    price: "$719",
    description:
      "Wearable earpiece that uses patented neurostimulation technology to simultaneously stimulate the vagus and trigeminal nerves — reducing period pain, lightening flow, and balancing your cycle. Drug-free, hormone-free relief.",
    shortDescription: "Drug-free neurostimulation for period pain relief.",
    personalNote: "This is helpful right before and during your cycle. It regulates the nervous system and gives that instant calm feeling to my pelvis when I switch it on. It\u2019s cumulative, so each time you use it, it helps more and more. This is a MUST for me when I get my period.\nx, N",
    website: "https://www.ohmbody.com",

    image: "/Ohmbody-image-1.webp",
  },
  {
    company: "Thermotex",
    name: "Thermotex Platinum Far Infrared Heating Pad",
    price: "$259",
    description:
      "Far infrared heating pad with 3 patented heat inserts that flex and wrap to relieve pain and inflammation. Penetrates up to 2.36 inches into the applied area after just 20 minutes, increasing blood flow to deliver nutrients, oxygen, and proteins for relief from muscle pain, arthritis, spasms, sprains, and inflammation. The most studied and versatile far infrared therapeutic device in the industry.",
    shortDescription: "Far infrared heating pad for deep pain and inflammation relief.",
    personalNote: "This infrared heating pad taught me how to relax my pelvis. I deal with constant chronic pain in my pelvis, hips, lower stomach - and this heating pad is the tool that is genuinely helping my pelvic guarding release. I use it at my desk, on the couch, in bed - I could not recommend this enough. Far-Infrared does more than a regular heating pad, it actually interrupts the inflammation cycle and activates anti-inflammatory signaling pathways. It's not just physical relief, on the chemical level this device is helping to heal the inflammation cycle.\nx, N",
    website: "https://www.thermotex.com/products/thermotex-platinum-far-infrared-heating-pad-all-purpose",
    image: "/thermotex.png",
  },
  {
    company: "Krampz Wellness",
    name: "Krampz Menstrual Pain Relief Patches",
    price: "$19.99",
    description:
      "100% drug-free, non-toxic menstrual pain relief patches with far-infrared technology. Mineral-infused fabric with tourmaline and ceramic powder converts body heat into infrared energy for continuous relief. Lightweight, stretchable, water and sweat resistant — wear for up to 72 hours through workouts, workdays, or rest. Informed Choice Certified and clinically tested to increase blood circulation at the application site.",
    shortDescription: "Drug-free far-infrared patches for menstrual pain relief.",
    personalNote: "This is not a miracle patch, but it does take the edge off cramps and the pelvic \u201Cheaviness\u201D I experience every cycle before, during, and right after my period. I also use them on my back when that becomes inflamed around my cycle. While they don\u2019t entirely get rid of pain, they do certainly help. I recommend as a part of a treatment routine for chronic and acute onset pain.\nx, N",
    website: "https://www.krampzwellness.com/products/menstrual-pain-relief-patches",
    image: "/krampz.jpeg",
  },
  {
    company: "The Pelvic People",
    name: "Ohnut",
    price: "$75",
    description:
      "Soft, stretchy, stackable rings that let you customize penetration depth — reducing pain during intimacy by preventing contact with tender pelvic structures.",
    shortDescription: "Customizable rings for pain-free intimacy.",
    personalNote: "temp text\nx, N",
    website: "https://thepelvicpeople.com",
    image: "/Orange_Ohnut_Updated-resize-min.webp",
  },
  {
    company: "The Pelvic People",
    name: "Kiwi",
    price: "$115",
    description:
      "A vibrating pelvic relaxation massager designed to release tight pelvic floor muscles. Non-phallic, gentle, and targeted — with different ends for shallow internal use and for massaging connected muscle groups.",
    shortDescription: "Gentle pelvic floor massager for muscle release.",
    personalNote: "temp text\nx, N",
    website: "https://thepelvicpeople.com/products/kiwi",
    image: "/Kiwicollectionphoto_Editablebox_orange2-min.webp",
  },
  {
    company: "Pinmoco",
    name: "Pinmoco Ergonomic Cross-Legged Swivel Chair",
    price: "",
    description:
      "Ergonomic swivel chair designed for cross-legged sitting — adjustable height stool for home and office use that supports comfortable, pressure-free positioning for those dealing with pelvic pain.",
    shortDescription: "Ergonomic cross-legged swivel chair for home and office.",
    personalNote: "This chair has changed my life. I have bad pelvic pain that radiates up my back, shoulder, and neck on the right side, and this chair helps me sit comfortably and allows me to change the angle of my pelvis in a supported way. I often sit in a \u201Chappy baby\u201D type of posture, which relieves the hip and pelvis tension.\nx, N",
    website: "https://www.walmart.com/ip/Pinmoco-Ergonomic-Cross-Legged-Swivel-Chair-Adjustable-Stool-for-Home-and-Office-White/14257963234",
    image: "/pinmoco chair.jpeg",
  },
  {
    company: "OTO Fertility",
    name: "OTO Fertility Program",
    price: "",
    description:
      "AI-powered biosensor and exercise program for a personalized physical routine to increase the body\u2019s stress resilience and bring you back to homeostasis.",
    shortDescription: "AI-powered biosensor for stress resilience and homeostasis.",
    personalNote: "I am in the midst of using this program as a part of my experiment to put my endo into remission, and I am loving tracking my body\u2019s stress resilience through my cycle and having a tailored movement protocol that adapts to where I\u2019m at. It allows me to relax and know that I\u2019m not going to push too hard if my body is giving the signal to rest, while also giving me the confidence to push through the mental exhaustion of chronic pain and experience relief on the other side of a workout or recovery session. This is technically a fertility program, but it\u2019s really about hormonal and full body homeostasis.\nx, N",
    website: "https://otofertility.com/our-product/",
    image: "/OTO_Fertility_OTO_Fertility_Launches_World_s_First_AI_Powered_Pl.jpg",
  },
  {
    company: "FLO Living",
    name: "MyFLO App",
    price: "Free",
    description:
      "Cycle syncing app that aligns nutrition, movement, and lifestyle recommendations with your menstrual cycle phases. Provides daily phase-specific guidance on food, fitness, and productivity \u2014 users reported 83% reduction in PMS symptoms.",
    shortDescription: "Cycle syncing app for nutrition, movement, and lifestyle.",
    personalNote: "temp text\nx, N",
    website: "https://floliving.com/pages/official-cycle-syncing-app-myflo",
    image: "/myflo.png",
  },
  {
    company: "Tiny Health",
    name: "Tiny Health Gut Microbiome Testing",
    price: "From $249",
    description:
      "Gold-standard deep shotgun gut microbiome testing that reveals the full picture of your gut health — including bacteria, fungi, parasites, and inflammation markers. I use the adult yearly membership, which includes two tests per year to track changes over time. Understanding your gut is a critical piece of the endometriosis puzzle, since gut dysbiosis is present in roughly 80% of endo cases.",
    shortDescription: "Deep gut microbiome testing for the full picture.",
    personalNote: "temp text\nx, N",
    website: "https://www.tinyhealth.com/store",
    image: "/tiny health 2.png",
    imageFit: "contain",
  },
  {
    company: "Olive My Pickle",
    name: "Olive My Pickle",
    price: "From $10",
    description:
      "Small-batch, traditionally fermented probiotic foods — pickles, sauerkraut, kimchi, olives, and probiotic pickle juice. Raw, unpasteurized, and packed with live cultures for real gut health support. No vinegar, no preservatives, no shortcuts.",
    shortDescription: "Raw fermented foods packed with live probiotics.",
    personalNote: "With endo, you need to be careful about how many fermented foods you're eating, they can sometimes fuel more inflammation if eaten in too much volume. I'm obsessed with this brand because all I need is a couple olives a few times per day, and I feed my gut with plenty of probiotics. Personal faves: the Muffaletta and Greek Olives.\nx, N",
    website: "https://www.olivemypickle.com",
    image: "/olive my pickle.png",
    imageFit: "contain",
  },
];

/* ── Self Care (grouped by category) ── */
export const selfCareGroups: { theme: string; slug: string; image?: string; products: Tool[] }[] = [
  {
    theme: "skincare",
    slug: "skincare",
    image: "/skincare1.png",
    products: [
      {
        company: "Dieux",
        name: "Dieux Skincare",
        price: "$22–$78",
        description:
          "Incredible fragrance-free skincare backed by clinical research. Every product is formulated at clinically studied doses and tested for efficacy — vegan, non-comedogenic, and designed for sensitive and post-treatment skin. A great store to explore for fragrance-free options across cleansers, serums, moisturizers, and eye care.",
        personalNote: "As someone who has dealt with hormonal breakouts and combination skin, I need my skincare to be effective without being pore-clogging. This is my go-to brand for daily moisture (I use the Air Angel) and I absolutely love their Baptism cleanser. Their re-useable eye patches are my morning dose of pampering :)\nx, N",
        website: "https://www.dieuxskin.com/collections/skincare",
        image: "/dieux set1.jpeg",
      },
      {
        company: "Good Molecules",
        name: "Good Molecules Skincare",
        price: "$5–$26",
        description:
          "Affordable, fragrance-free skincare with best-in-class ingredients backed by research. By working directly with top labs, Good Molecules delivers effective formulations — targeting acne, redness, and hyperpigmentation — without the traditional retail markup. Vegan, cruelty-free, and made with simple, science-backed ingredients that are safe for you and the planet.",
        personalNote: "This is a brand I reach for when I want some serums and more treatment oriented products. All fragrance-free (including essential oils), so I never have to worry about accidentally buying something I can't use. I love their Vitamin C serum, Sake Hydrating Essence, Glycolic Acid Toner, and their Squalene Oil can't be beat (neither can the price!)\nx, N",
        website: "https://www.goodmolecules.com/",
        image: "/good molecules.jpg",
      },
      {
        company: "The Ordinary",
        name: "The Ordinary Skincare",
        price: "$4–$20",
        description:
          "Clinical skincare formulations with integrity — organized by active ingredients like retinoids, vitamin C, hyaluronic acid, and peptides rather than marketing narratives. Fragrance-free, cruelty-free, and transparently priced to remove luxury markup while maintaining clinical-grade quality. A great entry point for building an effective, science-backed skincare routine.",
        personalNote: "I reach for this brand for specialty serums. I love the price point and guarantee that I won't receive a scented product. I love the Volufiline, Multi-Peptide + Copper Peptides, and can't wait to try their Retinal Emulsion when I run out of my current one!\nx, N",
        website: "https://theordinary.com/en-us",
        image: "/the ordinary.jpg",
      },
      {
        company: "AKT",
        name: "The Deodorant Balm, Fragrance Free",
        price: "$26",
        description: "",
        personalNote: "I know a fragrance-free deodorant may seem counterintuitive, but believe me, this one WORKS! (Take it from a girl with bad stress sweat) This lives with me in my purse. This is a newer purchase, still making my way through the first tube, but she's lasting at least a few months.\nx, N",
        website: "https://us.aktlondon.com/collections/the-deodorant-balms",
        image: "/akt.jpeg",
        imageFit: "contain",
      },
      {
        company: "Nécessaire",
        name: "The Deodorant, Fragrance Free",
        price: "$24",
        description: "",
        personalNote: "This uses mandelic acid as the active ingredient, and it works great for neutralizing odor & exfoliating the skin. It stings if you use right after a shave, but it's always in my rotation, and the best option if you prefer a stick deod. One stick lasts me 3 months easily.\nx, N",
        website: "https://necessaire.com",
        image: "/deoderant.jpg",
        imageFit: "contain",
      },
      {
        company: "EltaMD",
        name: "UV Skin Recovery SPF 50",
        price: "$46",
        description: "",
        personalNote: "A light mineral sunscreen that doesn't make you breakout or leave a white cast, and layers beautifully under makeup. My go-to for warmer months when my skin doesn't need a thick extra layer of moisture.\nx, N",
        website: "https://eltamd.com",
        image: "/elta md.jpeg",
        imageFit: "contain",
      },
      {
        company: "Pipette",
        name: "Mineral Sunscreen SPF 50",
        price: "$14",
        description: "",
        personalNote: "My favorite sunscreen hands down. So gentle and I've never had a sunburn wearing this (even when out in the sun for a while, and I'm a pale girl!) It's a thicker one, so it's great for sealing in moisture, and does not clog pores. I always feel dewy and glowy when I wear her.\nx, N",
        website: "https://pipettebaby.com",
        image: "/pipette.png",
        imageFit: "contain",
      },
      {
        company: "Prequel",
        name: "Precleanse Oil Cleanser",
        price: "$20",
        description:
          "Fragrance-free oil cleanser that dissolves makeup, sunscreen, and impurities without stripping the skin.",
        personalNote: "I absolutely love this as my step one in my nightly skincare ritual. No fragrance and helps dissolve all that mineral sunscreen (and LA smog) off before my gel cleanser.\nx, N",
        website: "https://www.prfrequelskin.com",
        image: "/prequel.png",
        imageFit: "contain",
      },
    ],
  },
  {
    theme: "make up",
    slug: "make-up",
    image: "/makeup2.png",
    products: [
      {
        company: "Merit",
        name: "Merit Beauty",
        price: "$24–$40",
        description:
          "Minimalist, fragrance-free makeup designed for effortless beauty. Every product is clean, cruelty-free, and formulated without parabens, sulfates, phthalates, or synthetic fragrance. Known for their cult-favorite The Minimalist perfecting complexion stick and Day Glow highlighting balm.",
        personalNote: "Always non-comedogenic (I can attest to this) and has one of everything I need. Personal faves are the blush (I use it for cheeks and lip) and the lip oil.\nx, N",
        website: "https://www.meritbeauty.com",
        image: "/merit.png",
      },
      {
        company: "Saie",
        name: "Saie Beauty",
        price: "$16–$34",
        description:
          "Clean, high-performance makeup with no synthetic fragrance, parabens, sulfates, or phthalates. Every product is Leaping Bunny certified cruelty-free and formulated with skin-loving ingredients. Known for their best-selling Glowy Super Gel and Slip Tint dewy tinted moisturizer.",
        personalNote: "The cleanest of the clean, and such a beautiful line. I LOVE their cool-toned bronzer (as a pale girl it's hard to find bronzers that don't make me look orange) and their glowy super gel illuminator. Never makes me break out either!\nx, N",
        website: "https://www.saiehello.com",
        image: "/saie.png",
      },
      {
        company: "Seint",
        name: "Seint Beauty",
        price: "$12–$54",
        description:
          "Cream-based, fragrance-free makeup designed to simplify your routine with a customizable compact system. Every product is paraben-free, sulfate-free, and cruelty-free. Known for their IIID Foundation that combines highlight and contour in one palette for a natural, sculpted look.",
        personalNote: "If you've ever heard of \"demi makeup,\" Seint's founder was the OG. It's precision makeup designed to harmonize with all the different skin undertones. I use this brand everyday and am obsessed with the waxy texture and tint rather than cream. It stays all day and helps keep my dark undereye circles looking cute. Fave products: Contour in Velvet, Lip+Cheek products. I carry this palette in my purse at all times.\nx, N",
        website: "https://www.seintofficial.com",
        image: "/seint2.jpg",
      },
    ],
  },
  {
    theme: "in the shower",
    slug: "hair-care",
    image: "/in the shower.png",
    products: [
      {
        company: "Good Molecules",
        name: "Hydrate & Cleanse Bar",
        price: "$6",
        description:
          "Ultra-gentle, soap-free cleansing bar that purifies and hydrates skin with a pH-balanced blend of shea butter, macadamia seed oil, squalane, and honey. Washes away impurities from face and body while supporting a healthy moisture balance. Fragrance-free, paraben-free, sulfate-free, vegan, and Leaping Bunny certified cruelty-free.",
        website: "https://www.goodmolecules.com/products/hydrate-cleanse-bar",
        image: "/soap 1.jpg",
      },
      {
        company: "Good Molecules",
        name: "Clarify & Cleanse Bar",
        price: "$6",
        description:
          "pH-balanced, soap-free cleansing bar with salicylic acid and tea tree oil to target breakouts, kaolin clay to balance excess sebum, and cocoa powder to soothe inflammation. Rosehip and grapeseed oils nourish and maintain moisture while promoting elasticity. Clears congestion from face and body without drying. Fragrance-free, paraben-free, sulfate-free, vegan, and Leaping Bunny certified cruelty-free.",
        website: "https://www.goodmolecules.com/products/clarify-cleanse-bar",
        image: "/soap 2.jpg",
      },
      {
        company: "Earth Therapeutics",
        name: "Organic Cotton Exfoliating Gloves",
        price: "$8.99",
        description:
          "Gentle exfoliating gloves that buff away dry skin and unclog pores, cleansing away toxins and impurities to reveal skin\u2019s natural glow. Massages the body and stimulates circulation. Made with organic cotton, recycled polyester, nylon, and elastic yarn.",
        website: "https://www.ulta.com/p/organic-cotton-exfoliating-gloves-pimprod2004281",
        image: "/exfoliating gloves.png",
      },
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
    theme: "home care",
    slug: "home-care",
    image: "/home care.png",
    products: [
      {
        company: "Branch Basics",
        name: "Cleaning Essentials Kit (Glass)",
        price: "$89",
        description:
          "All-in-one cleaning system with one plant and mineral-based concentrate that replaces every cleaner in your home. Kit includes a 33.8 oz concentrate (24 refills) and three refillable glass spray bottles for all-purpose, bathroom, and streak-free cleaning. Made with just seven ingredients including decyl glucoside and organic chamomile. Fragrance-free, free from harmful preservatives, dyes, bleach, and ammonia.",
        website: "https://www.amazon.com/Branch-Basics-Cleaning-Essentials-Fragrance-Free/dp/B0D9WGSBK5",
        image: "/branch basics.jpeg",
      },
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
    image: "/endo symptoms 2.jpg",
    imagePosition: "center 70%",
  },
  {
    name: "Endometriosis Symptom Checker",
    url: "https://www.endometriosis-uk.org/symptom-checker",
    description:
      "Quick screening tool from Endometriosis UK that takes less than a minute. Identifies common endo symptoms and lets you generate a letter to share with your doctor \u2014 helping you walk in prepared.",
    image: "/endo symptoms 3.jpg",
  },
  {
    name: "Pain Perception Project",
    url: "https://www.painperceptionproject.com/",
    description:
      "A patient-founded initiative producing tools for better understanding pain. Includes a Pelvic Pain Assessment that helps you effectively communicate with your doctor \u2014 because coming prepared is an element we\u2019ve never had.",
    image: "/pain perception.jpg",
  },
];

export const healingTools: FreeTool[] = [
  {
    name: "Nervous System Reset Sound Bath",
    url: "https://www.youtube.com/watch?v=vzzZVGc6VyQ",
    description:
      "Trauma recovery and deep healing music for restoration. A free sound bath designed to regulate your nervous system \u2014 helpful for managing pain, stress, and the emotional toll of chronic illness. I listen to this in the background while working or just around the house.",
    image: "/nervous system reset.jpg",
  },
  {
    name: "Lower Your Cortisol Sound Bath",
    url: "https://www.youtube.com/watch?v=S3k6KArOs0A",
    description:
      "Crystal singing bowls for stress relief. A free sound bath designed to help lower cortisol levels \u2014 useful for calming the nervous system when chronic pain, inflammation, or stress keep your body in overdrive. I listen to this in the background while working or just around the house.",
    image: "/lower your cortisol.jpg",
  },
];
