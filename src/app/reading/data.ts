/* ── Interfaces ── */
export interface Book {
  title: string;
  authors: string;
  description: string;
  buyUrl: string;
  cover: string;
  buyLabel?: string;
}

export interface Podcast {
  title: string;
  host: string;
  guest?: string;
  url: string;
  description: string;
}

export interface Film {
  title: string;
  director?: string;
  url: string;
  description: string;
}

export interface Article {
  title: string;
  author?: string;
  url: string;
  description: string;
}

/* ── Books ── */
export const bookGroups: { theme: string; slug: string; image?: string; books: Book[] }[] = [
  {
    theme: "Endometriosis & Diagnosis",
    slug: "endometriosis-and-diagnosis",
    books: [
      {
        title: "Beating Endo",
        authors: "Iris Kerin Orbuch, MD & Amy Stein, DPT",
        description:
          "A comprehensive guide from a laparoscopic surgeon and pelvic floor physical therapist offering a multi-disciplinary treatment plan that addresses surgery, physical therapy, nutrition, and mental health for managing endometriosis.",
        buyUrl: "https://www.amazon.com/Beating-Endo-Holistic-Treatment-Endometriosis/dp/0062861832",
        cover: "/covers/beating-endo.jpg",
      },
      {
        title: "It\u2019s Not Hysteria",
        authors: "Dr. Karen Tang",
        description:
          "A board-certified gynecologist covers the full spectrum of reproductive health conditions \u2014 endometriosis, adenomyosis, PCOS, fibroids, and pelvic pain \u2014 providing clear, evidence-based information that patients are rarely given.",
        buyUrl: "https://www.amazon.com/Its-Not-Hysteria-Everything-Reproductive/dp/1250894158",
        cover: "/covers/its-not-hysteria.jpg",
      },
      {
        title: "Endometriosis & PCOS: A Whole-Body Guide",
        authors: "Savannah Regensburger, MS, MBA, CNS",
        description:
          "A 50-page guide covering hormone changes across the lifespan, anti-inflammatory nutrition, evidence-based supplementation, symptom tracking, lab work recommendations, and medical advocacy strategies. The quick guide that everyone with endo would benefit from.",
        buyUrl: "https://savannahregensburger.substack.com/p/endometriosis-and-pcos-e-book-2499",
        cover: "",
        buyLabel: "Buy E-Book",
      },
    ],
  },
  {
    theme: "Hormonal Health & Cycle Syncing",
    slug: "hormonal-health-and-cycle-syncing",
    books: [
      {
        title: "Beyond the Pill",
        authors: "Jolene Brighten, NMD",
        description:
          "A 30-day program addressing hormone imbalances caused by hormonal contraception \u2014 covering post-birth-control syndrome, gut health, and hormone rebalancing. Directly relevant to endo patients prescribed hormonal birth control as a frontline treatment.",
        buyUrl: "https://www.amazon.com/Beyond-Pill-Program-Hormones-Dangerous/dp/0062847058",
        cover: "/covers/beyond-the-pill.jpg",
      },
      {
        title: "WomanCode",
        authors: "Alisa Vitti",
        description:
          "A holistic approach to hormone balance through functional nutrition and lifestyle changes. Addresses hormonal imbalances including endometriosis with a five-step protocol involving diet, stress management, and cycle-syncing to achieve pain-free periods.",
        buyUrl: "https://www.amazon.com/WomanCode-Perfect-Amplify-Fertility-Supercharge/dp/006213079X",
        cover: "/covers/womancode.jpg",
      },
      {
        title: "In the FLO",
        authors: "Alisa Vitti",
        description:
          "Introduces the Cycle Syncing Method \u2014 a female-centric approach to diet and lifestyle that leverages the 28-day menstrual cycle for optimal health. Specifically addresses how women with endometriosis can work with their natural hormonal rhythms to reduce symptoms.",
        buyUrl: "https://www.amazon.com/FLO-Unlock-Hormonal-Advantage-Revolutionize/dp/0062870491",
        cover: "/covers/in-the-flo.jpg",
      },
    ],
  },
  {
    theme: "Nutrition & Gut Health",
    slug: "nutrition-and-gut-health",
    books: [
      {
        title: "Your Tastebuds Are A**holes",
        authors: "Unique Hammond",
        description:
          "A personal account of healing from Crohn's disease and endometriosis through dietary transformation, by the founder of The Bean Protocol. Relevant to the endo community because anti-inflammatory nutrition and gut health are increasingly recognized as key factors in managing symptoms and flares.",
        buyUrl: "https://www.amazon.com/Your-Tastebuds-Are-holes-Trained/dp/1544510225",
        cover: "/covers/tastebuds.jpg",
      },
    ],
  },
  {
    theme: "Mind-Body & Trauma",
    slug: "mind-body-and-trauma",
    books: [
      {
        title: "Mind Your Body",
        authors: "Nicole J. Sachs, LCSW",
        description:
          "Introduces the JournalSpeak method, a mind-body approach that addresses how stored trauma and repressed emotions can fuel chronic pain conditions including pelvic pain, IBS, and migraines.",
        buyUrl: "https://www.amazon.com/Mind-Your-Body-Revolutionary-Program/dp/0593716930",
        cover: "/covers/mind-your-body.jpg",
      },
      {
        title: "The Body Keeps the Score",
        authors: "Bessel van der Kolk, MD",
        description:
          "A landmark work on how trauma reshapes the body and brain, explaining why traumatic stress manifests as physical symptoms and chronic pain. Essential reading for anyone with endometriosis or chronic pelvic pain.",
        buyUrl: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748",
        cover: "/covers/body-keeps-the-score.jpg",
      },
    ],
  },
  {
    theme: "Medical History & Advocacy",
    slug: "medical-history-and-advocacy",
    books: [
      {
        title: "All in Her Head",
        authors: "Elizabeth Comen, MD",
        description:
          "A medical oncologist traces the history of how medicine has dismissed, misunderstood, and mistreated women\u2019s bodies \u2014 documenting the systemic medical dismissal that leads to an average 7\u201310 year delay in endometriosis diagnosis.",
        buyUrl: "https://www.amazon.com/All-Her-Head-Medicine-Matters/dp/0063293013",
        cover: "/covers/all-in-her-head.jpg",
      },
    ],
  },
];

/* ── Podcasts ── */
export const podcastGroups: { theme: string; slug: string; image?: string; podcasts: Podcast[] }[] = [
  {
    theme: "Endometriosis & Diagnosis",
    slug: "endometriosis-and-diagnosis",
    podcasts: [
      {
        title: "How to Tell If You Have Endometriosis. Painful Menstruation, Symptoms, and Treatment",
        host: "Dr. Jolene Brighten",
        guest: "Dr. Ramiro Cabrera Carranco",
        url: "https://www.youtube.com/watch?v=FBGUk49BpU4",
        description:
          "If you\u2019ve ever been told that period pain is \u201Cnormal\u201D or feel like you\u2019ve been gaslit by your symptoms, this episode is for you. Dr. Jolene Brighten and world-renowned endometriosis expert Dr. Ramiro Cabrera Carranco dive into the latest breakthroughs in diagnosing and managing this multisystemic inflammatory disease.",
      },
      {
        title: "Female Hormone Health, PCOS, Endometriosis, Fertility & Breast Cancer",
        host: "Andrew Huberman",
        guest: "Dr. Tha\u00EFs Aliabadi",
        url: "https://www.youtube.com/watch?v=hMzfGZnaPN8&t=516s",
        description:
          "Discussion of PCOS and endometriosis \u2014 two very common yet frequently undiagnosed causes of female infertility. Covers symptoms, underlying causes, evidence-based treatments including supplement and lifestyle interventions, breast cancer risk and screening, pregnancy, perimenopause and menopause, and the hormone tests women should request.",
      },
      {
        title: "Period Pain Relief for Endometriosis, Adenomyosis, and Hormonal Imbalances",
        host: "Dr. Jolene Brighten",
        url: "https://drbrighten.com/podcasts/period-pain-relief/",
        description:
          "Dr. Brighten challenges the notion that severe menstrual pain is normal and explores three primary causes of period pain: problematic prostaglandins, structural issues like endometriosis and adenomyosis, and hormonal imbalances. Offers actionable strategies for reducing pain through nutrition, supplements, and lifestyle \u2014 alternatives beyond birth control and hysterectomy.",
      },
    ],
  },
  {
    theme: "Nutrition & Foundations",
    slug: "nutrition-and-foundations",
    podcasts: [
      {
        title: "The Luteal Truth Serum: Why Your Period is a Monthly Report Card",
        host: "Unique Hammond",
        guest: "Dr. Hannah Lawler",
        url: "https://www.youregreat.com/blog/2026/1/8/podcast-62-the-luteal-truth-serum-why-your-period-is-a-monthly-report-card-with-dr-hannah-lawler",
        description:
          "Explores how the luteal phase reveals deeper truths about your body\u2019s needs, the role of soluble fiber in managing estrogen, and why mastering basics like fiber, minerals, protein, and rest matters before pursuing advanced interventions.",
      },
      {
        title: "The Fundamentals of Great Health",
        host: "Unique Hammond",
        guest: "Dr. Karen Hurd",
        url: "https://www.youregreat.com/blog/2025/6/20/podcast-56-the-fundamentals-of-great-health-with-dr-karen-hurd",
        description:
          "Dr. Karen Hurd breaks down the five essential pillars of optimal health \u2014 soluble fiber, water, complete protein, healthy fats, and nutrient-dense vegetables \u2014 and explains how the body\u2019s natural processes support healing and disease prevention through these fundamentals.",
      },
      {
        title: "Endometriosis Diet That Stopped 20 Years of Pain",
        host: "Dr. Jolene Brighten",
        guest: "Khush Sra",
        url: "https://drbrighten.com/podcasts/endometriosis-diet/",
        description:
          "Functional nutritionist Khush Sra shares how she went from stage 4 endometriosis and five surgeries to living pain-free for 20 years through nutritional intervention. Covers the role of gut dysbiosis in endo, anti-inflammatory foods for estrogen clearance, the connection between histamine intolerance and estrogen dominance, endo belly management, and why nervous system regulation comes before dietary changes.",
      },
      {
        title: "Breaking Up With Caffeine",
        host: "Olivia Amitrano",
        url: "https://whatsthejuice.libsyn.com/s3e20-caffine-solo",
        description:
          "Clinical herbalist and founder of Organic Olivia shares why she decided to break up with caffeine, how it impacts your body from a Traditional Chinese Medicine standpoint, and the benefits she\u2019s experienced \u2014 better sleep, higher libido, and more stable moods. She also covers how to counter withdrawal with minerals, vitamins, protein, and herbs.",
      },
    ],
  },
  {
    theme: "Nervous System, Trauma & Pain",
    slug: "nervous-system-trauma-and-pain",
    podcasts: [
      {
        title: "Nervous System Regulation",
        host: "Amy Corfeli",
        guest: "Tanner Murtagh, MSW, RSW",
        url: "https://insixteenyears.com/episode155/",
        description:
          "Tanner Murtagh explains the link between nervous system dysregulation and chronic pain, breaking down polyvagal theory and how trauma and stress keep the body stuck in survival mode. Offers practical strategies for regulating your nervous system \u2014 essential listening for anyone navigating endometriosis and chronic pelvic pain.",
      },
    ],
  },
];

/* ── Films ── */
export const films: Film[] = [
  {
    title: "This Is Endometriosis",
    director: "Georgie Wileman",
    url: "https://www.thisisendo.com/watch-this-is-endometriosis",
    description:
      "BAFTA-winning documentary short following photographer Georgie Wileman\u2019s personal struggle with endometriosis \u2014 blending self-documented material, family archive, and reconstructive memories into a powerful story about medical disbelief and the power of community.",
  },
  {
    title: "Below the Belt",
    director: "Shannon Cohn",
    url: "https://watch.eventive.org/belowthebelt/play/63a0a34a30806b00e73908de",
    description:
      "Documentary following four patients seeking answers for mysterious symptoms. Using endometriosis as its lens, the film examines how women are systematically dismissed by medical systems due to gender bias, societal taboos, and profit-driven healthcare \u2014 and how fighting back can create systemic change.",
  },
  {
    title: "Endo What?",
    director: "Shannon Cohn",
    url: "https://watch.eventive.org/belowthebelt/play/66a7c5bc16226600a29a4864",
    description:
      "Documentary challenging common medical misconceptions about endometriosis \u2014 a disease where patients consult an average of 8 doctors over 10 years before diagnosis. Delivers accurate, up-to-date knowledge straight from experts and confronts the myths that pregnancy, hysterectomy, or \u201Cit\u2019s all in your head\u201D are answers.",
  },
];

/* ── Articles ── */
export const articleGroups: { theme: string; slug: string; image?: string; articles: Article[] }[] = [
  {
    theme: "Endometriosis",
    slug: "endometriosis",
    articles: [
      {
        title: "Endometriosis and Painful Ovulation: Why Ovulation Hurts, Where It\u2019s Felt, and What Helps",
        author: "Dr. Jolene Brighten",
        url: "https://drbrighten.com/endometriosis-and-painful-ovulation/",
        description:
          "Explores the connection between endometriosis and mid-cycle pain, explaining why ovulation discomfort can be as severe as menstrual pain and what can help.",
      },
      {
        title: "Endometriosis: Ancient Disease, Ancient Treatments",
        author: "Drs. Camran, Farr & Ceana Nezhat / Endometriosis Foundation of America",
        url: "https://www.endofound.org/endometriosis-ancient-disease-ancient-treatments",
        description:
          "A look at how what Freud diagnosed as \u201Chysteria\u201D was likely unrecognized endometriosis. Chronicles the barbaric treatments women endured throughout history \u2014 from being hung upside-down to diagnoses of witchcraft and demonic possession \u2014 and how millions still await better care today.",
      },
    ],
  },
  {
    theme: "Nutrition & Product Safety",
    slug: "nutrition-and-product-safety",
    articles: [
      {
        title: "How Do You Stop Craving Sugar? Causes & Solutions Backed by Research",
        author: "Dr. Jolene Brighten",
        url: "https://drbrighten.com/how-do-you-stop-craving-sugar/",
        description:
          "Research-backed breakdown of why sugar cravings happen \u2014 including hormonal causes \u2014 and practical solutions to manage them.",
      },
      {
        title: "Non-Toxic Period Products: A Fact-Packed Guide to Safer Cycles",
        author: "Cristina Solis, Orbasics",
        url: "https://orbasics.com/blogs/stories/best-non-toxic-period-products",
        description:
          "Conventional pads and tampons contain heavy metals, pesticides, endocrine disruptors, and potential carcinogens \u2014 and vaginal tissue absorbs ingredients even faster than skin. This guide breaks down what to avoid and recommends safer alternatives like organic cotton tampons, menstrual cups, and PFAS-free period underwear.",
      },
    ],
  },
  {
    theme: "Innovation",
    slug: "innovation",
    articles: [
      {
        title: "OTO Fertility Launches World\u2019s First AI-Powered Platform & Wearable for Predictive Reproductive Insight",
        author: "OTO Fertility",
        url: "https://otofertility.com/oto-fertility-biometric-ai-prediction/",
        description:
          "OTO Fertility\u2019s new biometric platform and wearable device uses AI-powered insights to help predict fertility treatment outcomes.",
      },
    ],
  },
];

/* ── Research ── */
export const researchGroups: { theme: string; slug: string; image?: string; articles: Article[] }[] = [
  {
    theme: "Gender Bias in Medicine",
    slug: "gender-bias-in-medicine",
    articles: [
      {
        title: "The Dangerous Dismissal of Women\u2019s Pain",
        author: "Maureen Salamon, Harvard Women\u2019s Health Watch",
        url: "https://www.health.harvard.edu/pain/the-dangerous-dismissal-of-womens-pain",
        description:
          "Harvard Health examines how women\u2019s pain is systematically underestimated and undertreated \u2014 women wait 30 minutes longer than men for hospital care and receive fewer pain medications for identical complaints. Traces this bias from its historical roots in \u201Chysteria\u201D to modern contributing factors.",
      },
      {
        title: "Women Exaggerate, Men Downplay: Gendered Endorsement of Emotional Dramatization Stereotypes Contributes to Gender Bias in Pain Expectations",
        author: "Gina A. Paganini, Kevin M. Summers, Leanne ten Brinke & E. Paige Lloyd",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10688448/",
        description:
          "Study proving what many women already know: people assume women exaggerate their pain while men understate theirs. Across four experiments, researchers found that stereotypes about women being \u201Cwhiny\u201D or \u201Ccomplaining\u201D lead others to dismiss their pain as dramatization \u2014 a bias with serious consequences in healthcare, where it can cause doctors to minimize women\u2019s symptoms instead of taking them seriously.",
      },
    ],
  },
  {
    theme: "Endometriosis Science",
    slug: "endometriosis-science",
    articles: [
      {
        title: "Endometriosis: Recent Advances That Could Accelerate Diagnosis and Improve Care",
        author: "ScienceDirect / Trends in Molecular Medicine",
        url: "https://www.sciencedirect.com/science/article/pii/S1471491424001667",
        description:
          "New research is making it easier to diagnose endo faster and treat it better. This paper breaks down improvements in imaging so doctors can spot it without surgery, new drugs being tested that target the inflammation and pain at their source, better understanding of why endo causes infertility, and an emerging connection between gut health and endo symptoms that could open the door to self-management strategies.",
      },
    ],
  },
  {
    theme: "Product Safety",
    slug: "product-safety",
    articles: [
      {
        title: "A Study Found Toxic Metals in Popular Tampon Brands. Here\u2019s What Experts Advise",
        author: "Rachel Treisman, NPR",
        url: "https://www.npr.org/2024/07/11/nx-s1-5036484/tampons-heavy-metals-study",
        description:
          "Researchers found lead, arsenic, and other toxic metals in tampons across 14 popular brands \u2014 the first study to measure metallic contaminants in menstrual products. The FDA currently has no requirements for manufacturers to test for chemical contaminants. Experts recommend choosing products without plastic, fragrances, or colorants.",
      },
    ],
  },
];
