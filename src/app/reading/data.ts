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
  show?: string;
  host: string;
  guest?: string;
  url: string;
  description: string;
  image?: string;
}

export interface Film {
  title: string;
  director?: string;
  url: string;
  description: string;
}

export type ReadCategory =
  | "the research"
  | "the system"
  | "the practice"
  | "the voices"
  | "start here";

export const readCategories: { key: ReadCategory; description: string }[] = [
  { key: "the research", description: "Rigorous evidence and peer-reviewed studies" },
  { key: "the system", description: "Systemic failures, medical bias, and history" },
  { key: "the practice", description: "Applied treatment and the how" },
  { key: "the voices", description: "First-person essays" },
  { key: "start here", description: "Foundational reads" },
];

export interface Article {
  title: string;
  author?: string;
  url: string;
  description: string;
  image?: string;
  slug?: string;
  category?: ReadCategory;
}

/* ── Books ── */
export const bookGroups: { theme: string; slug: string; image?: string; books: Book[] }[] = [
  {
    theme: "endometriosis",
    slug: "endometriosis-and-diagnosis",
    books: [
      {
        title: "Beating Endo",
        authors: "Iris Kerin Orbuch, MD & Amy Stein, DPT",
        description:
          "A comprehensive guide from a laparoscopic surgeon and pelvic floor physical therapist offering a multi-disciplinary treatment plan that addresses surgery, physical therapy, nutrition, and mental health for managing endometriosis.",
        buyUrl: "https://www.amazon.com/Beating-Endo-Holistic-Treatment-Endometriosis/dp/0062861832",
        cover: "/beating endo.jpg",
      },
      {
        title: "It\u2019s Not Hysteria",
        authors: "Dr. Karen Tang",
        description:
          "A board-certified gynecologist covers the full spectrum of reproductive health conditions \u2014 endometriosis, adenomyosis, PCOS, fibroids, and pelvic pain \u2014 providing clear, evidence-based information that patients are rarely given.",
        buyUrl: "https://www.amazon.com/Its-Not-Hysteria-Everything-Reproductive/dp/1250894158",
        cover: "/its not hysteria.jpg",
      },
      {
        title: "Heal Endo",
        authors: "Katie Edmonds, NTP",
        description:
          "The #1 best-selling book on endometriosis takes an anti-inflammatory approach to healing, covering how the disease develops, dietary and lifestyle factors that impact symptom severity, the role of gut bacteria as an endo trigger, hormonal health, chemical exposures linked to endometriosis, and how to build a comprehensive treatment plan including surgery.",
        buyUrl: "https://www.amazon.com/Heal-Endo-Anti-Inflammatory-Approach-Endometriosis/dp/1792389485",
        cover: "/heal endo.jpg",
      },
      {
        title: "Endometriosis & PCOS: A Whole-Body Guide",
        authors: "Savannah Regensburger, MS, MBA, CNS",
        description:
          "A 50-page guide covering hormone changes across the lifespan, anti-inflammatory nutrition, evidence-based supplementation, symptom tracking, lab work recommendations, and medical advocacy strategies. The quick guide that everyone with endo would benefit from.",
        buyUrl: "https://savannahregensburger.substack.com/p/endometriosis-and-pcos-e-book-2499",
        cover: "/savannah book.jpg",
        buyLabel: "Buy E-Book",
      },
    ],
  },
  {
    theme: "hormonal health",
    slug: "hormonal-health-and-cycle-syncing",
    books: [
      {
        title: "Beyond the Pill",
        authors: "Jolene Brighten, NMD",
        description:
          "A 30-day program addressing hormone imbalances caused by hormonal contraception \u2014 covering post-birth-control syndrome, gut health, and hormone rebalancing. Directly relevant to endo patients prescribed hormonal birth control as a frontline treatment.",
        buyUrl: "https://www.amazon.com/Beyond-Pill-Program-Hormones-Dangerous/dp/0062847058",
        cover: "/beyond the pill.jpg",
      },
      {
        title: "WomanCode",
        authors: "Alisa Vitti",
        description:
          "A holistic approach to hormone balance through functional nutrition and lifestyle changes. Addresses hormonal imbalances including endometriosis with a five-step protocol involving diet, stress management, and cycle-syncing to achieve pain-free periods.",
        buyUrl: "https://www.amazon.com/WomanCode-Perfect-Amplify-Fertility-Supercharge/dp/006213079X",
        cover: "/woman code.jpg",
      },
      {
        title: "In the FLO",
        authors: "Alisa Vitti",
        description:
          "Introduces the Cycle Syncing Method \u2014 a female-centric approach to diet and lifestyle that leverages the 28-day menstrual cycle for optimal health. Specifically addresses how women with endometriosis can work with their natural hormonal rhythms to reduce symptoms.",
        buyUrl: "https://www.amazon.com/FLO-Unlock-Hormonal-Advantage-Revolutionize/dp/0062870491",
        cover: "/in the flo copy.jpg",
      },
    ],
  },
  {
    theme: "nutrition",
    slug: "nutrition-and-gut-health",
    books: [
      {
        title: "Your Tastebuds Are A**holes",
        authors: "Unique Hammond",
        description:
          "A personal account of healing from Crohn's disease and endometriosis through dietary transformation, by the founder of The Bean Protocol. Relevant to the endo community because anti-inflammatory nutrition and gut health are increasingly recognized as key factors in managing symptoms and flares.",
        buyUrl: "https://www.amazon.com/Your-Tastebuds-Are-holes-Trained/dp/1544510225",
        cover: "/your tastebuds are assholes.jpg",
      },
    ],
  },
  {
    theme: "mind-body",
    slug: "mind-body-and-trauma",
    books: [
      {
        title: "Mind Your Body",
        authors: "Nicole J. Sachs, LCSW",
        description:
          "Introduces the JournalSpeak method, a mind-body approach that addresses how stored trauma and repressed emotions can fuel chronic pain conditions including pelvic pain, IBS, and migraines.",
        buyUrl: "https://www.amazon.com/Mind-Your-Body-Revolutionary-Program/dp/0593716930",
        cover: "/mind your body.jpg",
      },
    ],
  },
  {
    theme: "self-advocacy",
    slug: "medical-history-and-advocacy",
    books: [
      {
        title: "All in Her Head",
        authors: "Elizabeth Comen, MD",
        description:
          "A medical oncologist traces the history of how medicine has dismissed, misunderstood, and mistreated women\u2019s bodies \u2014 documenting the systemic medical dismissal that leads to an average 7\u201310 year delay in endometriosis diagnosis.",
        buyUrl: "https://www.amazon.com/All-Her-Head-Medicine-Matters/dp/0063293013",
        cover: "/it's all in her head.jpeg",
      },
    ],
  },
];

/* ── Podcasts ── */
export const podcastGroups: { theme: string; slug: string; image?: string; podcasts: Podcast[] }[] = [
  {
    theme: "endometriosis & diagnosis",
    slug: "endometriosis-and-diagnosis",
    podcasts: [
      {
        title: "How to Tell If You Have Endometriosis. Painful Menstruation, Symptoms, and Treatment",
        show: "Dr. Brighten",
        host: "Dr. Jolene Brighten",
        guest: "Dr. Ramiro Cabrera Carranco",
        url: "https://www.youtube.com/watch?v=FBGUk49BpU4",
        description:
          "If you\u2019ve ever been told that period pain is \u201Cnormal\u201D or feel like you\u2019ve been gaslit by your symptoms, this episode is for you. Dr. Jolene Brighten and world-renowned endometriosis expert Dr. Ramiro Cabrera Carranco dive into the latest breakthroughs in diagnosing and managing this multisystemic inflammatory disease.",
        image: "/dr brighten podcast.jpeg",
      },
      {
        title: "Female Hormone Health, PCOS, Endometriosis, Fertility & Breast Cancer",
        show: "Huberman Lab",
        host: "Andrew Huberman",
        guest: "Dr. Tha\u00EFs Aliabadi",
        url: "https://www.youtube.com/watch?v=hMzfGZnaPN8&t=516s",
        description:
          "Discussion of PCOS and endometriosis \u2014 two very common yet frequently undiagnosed causes of female infertility. Covers symptoms, underlying causes, evidence-based treatments including supplement and lifestyle interventions, breast cancer risk and screening, pregnancy, perimenopause and menopause, and the hormone tests women should request.",
        image: "/huberman podcast.jpeg",
      },
      {
        title: "Period Pain Relief for Endometriosis, Adenomyosis, and Hormonal Imbalances",
        show: "Dr. Brighten",
        host: "Dr. Jolene Brighten",
        url: "https://drbrighten.com/podcasts/period-pain-relief/",
        description:
          "Dr. Brighten challenges the notion that severe menstrual pain is normal and explores three primary causes of period pain: problematic prostaglandins, structural issues like endometriosis and adenomyosis, and hormonal imbalances. Offers actionable strategies for reducing pain through nutrition, supplements, and lifestyle \u2014 alternatives beyond birth control and hysterectomy.",
        image: "/dr brighten podcast.jpeg",
      },
      {
        title: "Can Ozempic and GLP-1\u2019s Help Treat Endometriosis",
        show: "Dr. Brighten",
        host: "Dr. Jolene Brighten",
        url: "https://drbrighten.com/podcasts/glp-1-and-endometriosis/",
        description:
          "Dr. Brighten examines whether GLP-1 receptor agonist medications \u2014 including Ozempic, semaglutide, tirzepatide, and liraglutide \u2014 may help manage endometriosis symptoms. Covers emerging research on how these drugs might reduce inflammation, improve blood sugar stability, decrease pelvic pain, and address fatigue and endo belly. Emphasizes that while some women report symptom improvement, GLP-1 medications are not a cure for endometriosis but represent one potential tool within a comprehensive treatment strategy.",
        image: "/dr brighten podcast.jpeg",
      },
    ],
  },
  {
    theme: "nutrition & foundations",
    slug: "nutrition-and-foundations",
    podcasts: [
      {
        title: "The Luteal Truth Serum: Why Your Period is a Monthly Report Card",
        show: "You're Great",
        host: "Unique Hammond",
        guest: "Dr. Hannah Lawler",
        url: "https://www.youregreat.com/blog/2026/1/8/podcast-62-the-luteal-truth-serum-why-your-period-is-a-monthly-report-card-with-dr-hannah-lawler",
        description:
          "Explores how the luteal phase reveals deeper truths about your body\u2019s needs, the role of soluble fiber in managing estrogen, and why mastering basics like fiber, minerals, protein, and rest matters before pursuing advanced interventions.",
        image: "/you're great podcast.jpeg",
      },
      {
        title: "The Fundamentals of Great Health",
        show: "You're Great",
        host: "Unique Hammond",
        guest: "Dr. Karen Hurd",
        url: "https://www.youregreat.com/blog/2025/6/20/podcast-56-the-fundamentals-of-great-health-with-dr-karen-hurd",
        description:
          "Dr. Karen Hurd breaks down the five essential pillars of optimal health \u2014 soluble fiber, water, complete protein, healthy fats, and nutrient-dense vegetables \u2014 and explains how the body\u2019s natural processes support healing and disease prevention through these fundamentals.",
        image: "/you're great podcast.jpeg",
      },
      {
        title: "Endometriosis Diet That Stopped 20 Years of Pain",
        show: "Dr. Brighten",
        host: "Dr. Jolene Brighten",
        guest: "Khush Sra",
        url: "https://drbrighten.com/podcasts/endometriosis-diet/",
        description:
          "Functional nutritionist Khush Sra shares how she went from stage 4 endometriosis and five surgeries to living pain-free for 20 years through nutritional intervention. Covers the role of gut dysbiosis in endo, anti-inflammatory foods for estrogen clearance, the connection between histamine intolerance and estrogen dominance, endo belly management, and why nervous system regulation comes before dietary changes.",
        image: "/dr brighten podcast.jpeg",
      },
      {
        title: "Breaking Up With Caffeine",
        show: "What's the Juice",
        host: "Olivia Amitrano",
        url: "https://whatsthejuice.libsyn.com/s3e20-caffine-solo",
        description:
          "Clinical herbalist and founder of Organic Olivia shares why she decided to break up with caffeine, how it impacts your body from a Traditional Chinese Medicine standpoint, and the benefits she\u2019s experienced \u2014 better sleep, higher libido, and more stable moods. She also covers how to counter withdrawal with minerals, vitamins, protein, and herbs.",
        image: "/what's the juice podcast.jpeg",
      },
    ],
  },
  {
    theme: "nervous system, trauma & pain",
    slug: "nervous-system-trauma-and-pain",
    podcasts: [
      {
        title: "Healing Your Chronic Pain & Conditions Once And For All",
        show: "The Wellness Process",
        host: "Elizabeth",
        guest: "Nicole Sachs",
        url: "https://podcasts.apple.com/us/podcast/48-healing-your-chronic-pain-conditions-once-and-for/id1735161262?i=1000691038022",
        description:
          "Nicole Sachs, creator of JournalSpeak Therapy and author of Mind Your Body, shares how she has helped thousands address chronic pain and autoimmune conditions without medication. Explores the science behind the mind-body connection and strategies for breaking cycles of persistent symptoms.",
        image: "/the wellness podcast.jpeg",
      },
      {
        title: "Chronic Pelvic Pain, Foot Pain, Anxiety, and IBS with Alex",
        show: "The Cure for Chronic Pain with Nicole Sachs, LCSW",
        host: "Nicole Sachs, LCSW",
        guest: "Alex",
        url: "https://www.yourbreakawake.com/podcasts/the-cure-for-chronic-pain-with-nicole-sachs-lcsw-2/episodes/2149013835",
        description:
          "Alex shares her journey of discovering that her chronic anxiety, depression, pelvic pain, foot pain, and bloating stemmed from nervous system dysregulation. A serendipitous connection led her to Nicole\u2019s work and ultimately transformed her health \u2014 exploring how recognizing the root cause of multiple symptoms enabled her to heal completely.",
        image: "/nicole sachs podcast.jpeg",
      },
      {
        title: "How Your Nervous System Creates Your Entire Experience",
        show: "You Make Sense with Sarah Baldwin",
        host: "Sarah Baldwin",
        url: "https://www.youtube.com/watch?v=UzRsDQB3tHU",
        description:
          "Sarah dives into the foundation of all healing: nervous system regulation. She explains how your Autonomic Nervous System creates every sensation, feeling, and behavior you\u2019ve ever experienced \u2014 from anxiety and depression to joy and flow \u2014 and shares her own journey through chronic dysregulation, panic attacks, and chronic illness toward transformation through somatic healing work.",
        image: "/you make sense podcast.jpeg",
      },
      {
        title: "Nervous System Regulation",
        show: "In Sixteen Years of Endo",
        host: "Amy Corfeli",
        guest: "Tanner Murtagh, MSW, RSW",
        url: "https://insixteenyears.com/episode155/",
        description:
          "Tanner Murtagh explains the link between nervous system dysregulation and chronic pain, breaking down polyvagal theory and how trauma and stress keep the body stuck in survival mode. Offers practical strategies for regulating your nervous system \u2014 essential listening for anyone navigating endometriosis and chronic pelvic pain.",
        image: "/in 16 years of endo podcast.jpeg",
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
    image: "/this is endometriosis.jpg",
    description:
      "BAFTA-winning documentary short following photographer Georgie Wileman\u2019s personal struggle with endometriosis \u2014 blending self-documented material, family archive, and reconstructive memories into a powerful story about medical disbelief and the power of community.",
  },
  {
    title: "Below the Belt",
    director: "Shannon Cohn",
    url: "https://watch.eventive.org/belowthebelt/play/63a0a34a30806b00e73908de",
    image: "/below the belt poster.jpeg",
    description:
      "Documentary following four patients seeking answers for mysterious symptoms. Using endometriosis as its lens, the film examines how women are systematically dismissed by medical systems due to gender bias, societal taboos, and profit-driven healthcare \u2014 and how fighting back can create systemic change.",
  },
  {
    title: "Endo What?",
    director: "Shannon Cohn",
    url: "https://watch.eventive.org/belowthebelt/play/66a7c5bc16226600a29a4864",
    image: "/endo what poster.jpg",
    description:
      "Documentary challenging common medical misconceptions about endometriosis \u2014 a disease where patients consult an average of 8 doctors over 10 years before diagnosis. Delivers accurate, up-to-date knowledge straight from experts and confronts the myths that pregnancy, hysterectomy, or \u201Cit\u2019s all in your head\u201D are answers.",
  },
];

/* ── Articles ── */
export const articleGroups: { theme: string; slug: string; image?: string; articles: Article[] }[] = [
  {
    theme: "endometriosis",
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
      {
        title: "Endo Belly Hot Spot: Do You Have Ileocecal Valve Pain?",
        author: "Katie Edmonds",
        url: "https://www.healendo.com/blog-1/2023/1/10/endo-belly-hot-spot",
        description:
          "Explains the ileocecal valve \u2014 a small flap between the small and large intestine that can become inflamed in people with endometriosis \u2014 and offers practical strategies including dietary modifications and massage techniques to help rehabilitate this common pain point.",
      },
    ],
  },
  {
    theme: "nutrition & product safety",
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
        image: "/the library/articles/DTS_BLOOM_Pointless_Agency_Photos_ID14763.jpg",
        description:
          "Conventional pads and tampons contain heavy metals, pesticides, endocrine disruptors, and potential carcinogens \u2014 and vaginal tissue absorbs ingredients even faster than skin. This guide breaks down what to avoid and recommends safer alternatives like organic cotton tampons, menstrual cups, and PFAS-free period underwear.",
      },
    ],
  },
  {
    theme: "innovation",
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
    theme: "gender bias",
    slug: "gender-bias-in-medicine",
    articles: [
      {
        title: "The Dangerous Dismissal of Women\u2019s Pain",
        author: "Maureen Salamon, Harvard Women\u2019s Health Watch",
        url: "https://www.health.harvard.edu/pain/the-dangerous-dismissal-of-womens-pain",
        description:
          "Harvard Health examines how women\u2019s pain is systematically underestimated and undertreated \u2014 women wait 30 minutes longer than men for hospital care and receive fewer pain medications for identical complaints. Traces this bias from its historical roots in \u201Chysteria\u201D to modern contributing factors.",
        slug: "dangerous-dismissal-of-womens-pain",
      },
      {
        title: "Women Exaggerate, Men Downplay: Gendered Endorsement of Emotional Dramatization Stereotypes Contributes to Gender Bias in Pain Expectations",
        author: "Gina A. Paganini, Kevin M. Summers, Leanne ten Brinke & E. Paige Lloyd",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10688448/",
        description:
          "Study proving what many women already know: people assume women exaggerate their pain while men understate theirs. Across four experiments, researchers found that stereotypes about women being \u201Cwhiny\u201D or \u201Ccomplaining\u201D lead others to dismiss their pain as dramatization \u2014 a bias with serious consequences in healthcare, where it can cause doctors to minimize women\u2019s symptoms instead of taking them seriously.",
        slug: "gendered-pain-bias",
      },
    ],
  },
  {
    theme: "endometriosis",
    slug: "endometriosis-science",
    articles: [
      {
        title: "Endometriosis: Recent Advances That Could Accelerate Diagnosis and Improve Care",
        author: "ScienceDirect / Trends in Molecular Medicine",
        url: "https://www.sciencedirect.com/science/article/pii/S1471491424001667",
        description:
          "New research is making it easier to diagnose endo faster and treat it better. This paper breaks down improvements in imaging so doctors can spot it without surgery, new drugs being tested that target the inflammation and pain at their source, better understanding of why endo causes infertility, and an emerging connection between gut health and endo symptoms that could open the door to self-management strategies.",
        slug: "recent-advances-diagnosis-care",
      },
      {
        title: "Two Important Pieces of Research About GLP-1\u2019s and Endo",
        author: "Krasnyi et al., 2022 & Sola-Leyva et al., 2025",
        url: "",
        description:
          "Two foundational papers reveal that endometriosis patients have significantly reduced GLP-1 levels in their pelvic environment \u2014 a deficit linked to immune dysfunction that allows lesions to take hold \u2014 and that GLP-1 receptor agonists could theoretically restore that balance, positioning these metabolic drugs as potential immunometabolic modulators for endometriosis.",
        slug: "glp-1-and-endo",
      },
    ],
  },
  {
    theme: "product safety",
    slug: "product-safety",
    articles: [
      {
        title: "A Study Found Toxic Metals in Popular Tampon Brands. Here\u2019s What Experts Advise",
        author: "Rachel Treisman, NPR",
        url: "https://www.npr.org/2024/07/11/nx-s1-5036484/tampons-heavy-metals-study",
        description:
          "Researchers found lead, arsenic, and other toxic metals in tampons across 14 popular brands \u2014 the first study to measure metallic contaminants in menstrual products. The FDA currently has no requirements for manufacturers to test for chemical contaminants. Experts recommend choosing products without plastic, fragrances, or colorants.",
        slug: "toxic-metals-in-tampons",
      },
    ],
  },
];

/* ── Read (unified articles + research) ── */
export const readArticles: Article[] = [
  /* ── The Research ── */
  {
    title: "Endometriosis: Recent Advances That Could Accelerate Diagnosis and Improve Care",
    author: "ScienceDirect / Trends in Molecular Medicine",
    url: "https://www.sciencedirect.com/science/article/pii/S1471491424001667",
    description:
      "New research is making it easier to diagnose endo faster and treat it better. This paper breaks down improvements in imaging so doctors can spot it without surgery, new drugs being tested that target the inflammation and pain at their source, better understanding of why endo causes infertility, and an emerging connection between gut health and endo symptoms that could open the door to self-management strategies.",
    slug: "recent-advances-diagnosis-care",
    category: "the research",
  },
  {
    title: "Two Important Pieces of Research About GLP-1\u2019s and Endo",
    author: "Krasnyi et al., 2022 & Sola-Leyva et al., 2025",
    url: "",
    description:
      "Two foundational papers reveal that endometriosis patients have significantly reduced GLP-1 levels in their pelvic environment \u2014 a deficit linked to immune dysfunction that allows lesions to take hold \u2014 and that GLP-1 receptor agonists could theoretically restore that balance, positioning these metabolic drugs as potential immunometabolic modulators for endometriosis.",
    slug: "glp-1-and-endo",
    category: "the research",
  },
  {
    title: "A Study Found Toxic Metals in Popular Tampon Brands. Here\u2019s What Experts Advise",
    author: "Rachel Treisman, NPR",
    url: "https://www.npr.org/2024/07/11/nx-s1-5036484/tampons-heavy-metals-study",
    description:
      "Researchers found lead, arsenic, and other toxic metals in tampons across 14 popular brands \u2014 the first study to measure metallic contaminants in menstrual products. The FDA currently has no requirements for manufacturers to test for chemical contaminants. Experts recommend choosing products without plastic, fragrances, or colorants.",
    slug: "toxic-metals-in-tampons",
    category: "the research",
  },
  {
    title: "OTO Fertility Launches World\u2019s First AI-Powered Platform & Wearable for Predictive Reproductive Insight",
    author: "OTO Fertility",
    url: "https://otofertility.com/oto-fertility-biometric-ai-prediction/",
    description:
      "OTO Fertility\u2019s new biometric platform and wearable device uses AI-powered insights to help predict fertility treatment outcomes.",
    category: "the research",
  },
  /* ── The System ── */
  {
    title: "The Dangerous Dismissal of Women\u2019s Pain",
    author: "Maureen Salamon, Harvard Women\u2019s Health Watch",
    url: "https://www.health.harvard.edu/pain/the-dangerous-dismissal-of-womens-pain",
    description:
      "Harvard Health examines how women\u2019s pain is systematically underestimated and undertreated \u2014 women wait 30 minutes longer than men for hospital care and receive fewer pain medications for identical complaints. Traces this bias from its historical roots in \u201Chysteria\u201D to modern contributing factors.",
    slug: "dangerous-dismissal-of-womens-pain",
    category: "the system",
  },
  {
    title: "Women Exaggerate, Men Downplay: Gendered Endorsement of Emotional Dramatization Stereotypes Contributes to Gender Bias in Pain Expectations",
    author: "Gina A. Paganini, Kevin M. Summers, Leanne ten Brinke & E. Paige Lloyd",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10688448/",
    description:
      "Study proving what many women already know: people assume women exaggerate their pain while men understate theirs. Across four experiments, researchers found that stereotypes about women being \u201Cwhiny\u201D or \u201Ccomplaining\u201D lead others to dismiss their pain as dramatization \u2014 a bias with serious consequences in healthcare, where it can cause doctors to minimize women\u2019s symptoms instead of taking them seriously.",
    slug: "gendered-pain-bias",
    category: "the system",
  },
  {
    title: "Endometriosis: Ancient Disease, Ancient Treatments",
    author: "Drs. Camran, Farr & Ceana Nezhat / Endometriosis Foundation of America",
    url: "https://www.endofound.org/endometriosis-ancient-disease-ancient-treatments",
    description:
      "A look at how what Freud diagnosed as \u201Chysteria\u201D was likely unrecognized endometriosis. Chronicles the barbaric treatments women endured throughout history \u2014 from being hung upside-down to diagnoses of witchcraft and demonic possession \u2014 and how millions still await better care today.",
    category: "the system",
  },
  /* ── The Practice ── */
  {
    title: "Endometriosis and Painful Ovulation: Why Ovulation Hurts, Where It\u2019s Felt, and What Helps",
    author: "Dr. Jolene Brighten",
    url: "https://drbrighten.com/endometriosis-and-painful-ovulation/",
    description:
      "Explores the connection between endometriosis and mid-cycle pain, explaining why ovulation discomfort can be as severe as menstrual pain and what can help.",
    category: "the practice",
  },
  {
    title: "Endo Belly Hot Spot: Do You Have Ileocecal Valve Pain?",
    author: "Katie Edmonds",
    url: "https://www.healendo.com/blog-1/2023/1/10/endo-belly-hot-spot",
    description:
      "Explains the ileocecal valve \u2014 a small flap between the small and large intestine that can become inflamed in people with endometriosis \u2014 and offers practical strategies including dietary modifications and massage techniques to help rehabilitate this common pain point.",
    category: "the practice",
  },
  {
    title: "How Do You Stop Craving Sugar? Causes & Solutions Backed by Research",
    author: "Dr. Jolene Brighten",
    url: "https://drbrighten.com/how-do-you-stop-craving-sugar/",
    description:
      "Research-backed breakdown of why sugar cravings happen \u2014 including hormonal causes \u2014 and practical solutions to manage them.",
    category: "the practice",
  },
  {
    title: "Non-Toxic Period Products: A Fact-Packed Guide to Safer Cycles",
    author: "Cristina Solis, Orbasics",
    url: "https://orbasics.com/blogs/stories/best-non-toxic-period-products",
    image: "/the library/articles/DTS_BLOOM_Pointless_Agency_Photos_ID14763.jpg",
    description:
      "Conventional pads and tampons contain heavy metals, pesticides, endocrine disruptors, and potential carcinogens \u2014 and vaginal tissue absorbs ingredients even faster than skin. This guide breaks down what to avoid and recommends safer alternatives like organic cotton tampons, menstrual cups, and PFAS-free period underwear.",
    category: "the practice",
  },
];

/* ══════════════════════════════════════════════
   NEW PURPOSE-BASED DATA MODEL
   ══════════════════════════════════════════════ */

export type Format = "Book" | "Article" | "Podcast" | "Film" | "Study";

export type SectionKey =
  | "foundations"
  | "evidence"
  | "reckoning"
  | "practice"
  | "witness";

export interface ReadingItem {
  title: string;
  format: Format;
  source: string;
  url: string;
  description: string;
  section: SectionKey;
  image?: string;
}

export interface SectionMeta {
  key: SectionKey;
  name: string;
  intro: string;
}

export const sections: SectionMeta[] = [
  {
    key: "foundations",
    name: "the foundations",
    intro: "Start-here material for the newly diagnosed.",
  },
  {
    key: "practice",
    name: "the practice",
    intro: "Applied treatment content, from surgery to pelvic floor PT.",
  },
  {
    key: "evidence",
    name: "the evidence",
    intro: "Research, mechanistic explainers, and rigorous science journalism.",
  },
  {
    key: "reckoning",
    name: "the reckoning",
    intro: "Systemic critique of how medicine treats women.",
  },
  {
    key: "witness",
    name: "the witness",
    intro: "First-person accounts, memoir, and narrative.",
  },
];

export const allFormats: Format[] = ["Book", "Article", "Podcast", "Film", "Study"];

/** Placeholder items. Replace with real editorial placements. */
export const readingItems: ReadingItem[] = [
  {
    title: "Beating Endo",
    format: "Book",
    source: "Iris Kerin Orbuch, MD & Amy Stein, DPT",
    url: "https://www.amazon.com/Beating-Endo-Holistic-Treatment-Endometriosis/dp/0062861832",
    description:
      "A multi-disciplinary treatment plan from a laparoscopic surgeon and pelvic floor physical therapist covering surgery, physical therapy, nutrition, and mental health.",
    section: "foundations",
    image: "/beating endo.jpg",
  },
  {
    title: "Endo What?",
    format: "Film",
    source: "Shannon Cohn",
    url: "https://watch.eventive.org/belowthebelt/play/66a7c5bc16226600a29a4864",
    image: "/endo what poster.jpg",
    description:
      "Documentary challenging common medical misconceptions about a disease where patients consult an average of 8 doctors over 10 years before diagnosis.",
    section: "foundations",
  },
  {
    title: "How to Tell If You Have Endometriosis. Painful Menstruation, Symptoms, and Treatment",
    format: "Podcast",
    source: "Dr. Jolene Brighten with Dr. Ramiro Cabrera Carranco",
    url: "https://www.youtube.com/watch?v=FBGUk49BpU4",
    description:
      "Dr. Brighten and world-renowned endometriosis expert Dr. Ramiro Cabrera Carranco dive into the latest breakthroughs in diagnosing and managing this multisystemic inflammatory disease.",
    section: "foundations",
    image: "/dr brighten podcast.jpeg",
  },
  {
    title: "The Fundamentals of Great Health",
    format: "Podcast",
    source: "You're Great / Unique Hammond with Dr. Karen Hurd",
    url: "https://www.youregreat.com/blog/2025/6/20/podcast-56-the-fundamentals-of-great-health-with-dr-karen-hurd",
    description:
      "Dr. Karen Hurd breaks down the five essential pillars of optimal health: soluble fiber, water, complete protein, healthy fats, and nutrient-dense vegetables.",
    section: "foundations",
    image: "/you're great podcast.jpeg",
  },
  {
    title: "How Your Nervous System Creates Your Entire Experience",
    format: "Podcast",
    source: "You Make Sense / Sarah Baldwin",
    url: "https://www.youtube.com/watch?v=UzRsDQB3tHU",
    description:
      "Sarah explains how your Autonomic Nervous System creates every sensation, feeling, and behavior you've ever experienced, and shares her own journey through chronic dysregulation toward transformation through somatic healing work.",
    section: "foundations",
    image: "/you make sense podcast.jpeg",
  },
  {
    title: "WomanCode",
    format: "Book",
    source: "Alisa Vitti",
    url: "https://www.amazon.com/WomanCode-Perfect-Amplify-Fertility-Supercharge/dp/006213079X",
    description:
      "A holistic approach to hormone balance through functional nutrition and lifestyle changes. Addresses hormonal imbalances including endometriosis with a five-step protocol involving diet, stress management, and cycle-syncing.",
    section: "foundations",
    image: "/woman code.jpg",
  },
  {
    title: "In the FLO",
    format: "Book",
    source: "Alisa Vitti",
    url: "https://www.amazon.com/FLO-Unlock-Hormonal-Advantage-Revolutionize/dp/0062870491",
    description:
      "Introduces the Cycle Syncing Method, a female-centric approach to diet and lifestyle that leverages the 28-day menstrual cycle for optimal health. Specifically addresses how women with endometriosis can work with their natural hormonal rhythms to reduce symptoms.",
    section: "foundations",
    image: "/in the flo copy.jpg",
  },
  {
    title: "Your Tastebuds Are A**holes",
    format: "Book",
    source: "Unique Hammond",
    url: "https://www.amazon.com/Your-Tastebuds-Are-holes-Trained/dp/1544510225",
    description:
      "A personal account of healing from Crohn's disease and endometriosis through dietary transformation, by the founder of The Bean Protocol.",
    section: "foundations",
    image: "/your tastebuds are assholes.jpg",
  },
  {
    title: "Endometriosis: Recent Advances That Could Accelerate Diagnosis and Improve Care",
    format: "Study",
    source: "ScienceDirect / Trends in Molecular Medicine",
    url: "/reading/read/recent-advances-diagnosis-care",
    description:
      "Improvements in imaging, new drugs targeting inflammation, and an emerging connection between gut health and endo symptoms.",
    section: "evidence",
  },
  {
    title: "Female Hormone Health, PCOS, Endometriosis, Fertility & Breast Cancer",
    format: "Podcast",
    source: "Huberman Lab with Dr. Thais Aliabadi",
    url: "https://www.youtube.com/watch?v=hMzfGZnaPN8&t=516s",
    description:
      "Discussion of PCOS and endometriosis as frequently undiagnosed causes of female infertility, covering symptoms, causes, and evidence-based treatments.",
    section: "evidence",
    image: "/huberman podcast.jpeg",
  },
  {
    title: "Can Ozempic and GLP-1's Help Treat Endometriosis",
    format: "Podcast",
    source: "Dr. Jolene Brighten",
    url: "https://drbrighten.com/podcasts/glp-1-and-endometriosis/",
    description:
      "Dr. Brighten examines whether GLP-1 receptor agonist medications may help manage endometriosis symptoms. Covers emerging research on how these drugs might reduce inflammation, improve blood sugar stability, decrease pelvic pain, and address fatigue and endo belly.",
    section: "evidence",
    image: "/dr brighten podcast.jpeg",
  },
  {
    title: "Two Important Pieces of Research About GLP-1's and Endo",
    format: "Study",
    source: "Krasnyi et al., 2022 & Sola-Leyva et al., 2025",
    url: "/reading/read/glp-1-and-endo",
    description:
      "Two foundational papers reveal that endometriosis patients have significantly reduced GLP-1 levels in their pelvic environment, a deficit linked to immune dysfunction that allows lesions to take hold, and that GLP-1 receptor agonists could theoretically restore that balance.",
    section: "evidence",
  },
  {
    title: "A Study Found Toxic Metals in Popular Tampon Brands. Here's What Experts Advise",
    format: "Article",
    source: "Rachel Treisman, NPR",
    url: "https://www.npr.org/2024/07/11/nx-s1-5036484/tampons-heavy-metals-study",
    description:
      "Researchers found lead, arsenic, and other toxic metals in tampons across 14 popular brands. The first study to measure metallic contaminants in menstrual products.",
    section: "evidence",
  },
  {
    title: "OTO Fertility Launches World's First AI-Powered Platform & Wearable for Predictive Reproductive Insight",
    format: "Article",
    source: "OTO Fertility",
    url: "https://otofertility.com/oto-fertility-biometric-ai-prediction/",
    description:
      "OTO Fertility's new biometric platform and wearable device uses AI-powered insights to help predict fertility treatment outcomes.",
    section: "evidence",
  },
  {
    title: "The Dangerous Dismissal of Women's Pain",
    format: "Article",
    source: "Maureen Salamon, Harvard Women's Health Watch",
    url: "https://www.health.harvard.edu/pain/the-dangerous-dismissal-of-womens-pain",
    description:
      "How women's pain is systematically underestimated and undertreated. Women wait 30 minutes longer than men for hospital care and receive fewer pain medications for identical complaints.",
    section: "reckoning",
  },
  {
    title: "Below the Belt",
    format: "Film",
    source: "Shannon Cohn",
    url: "https://watch.eventive.org/belowthebelt/play/63a0a34a30806b00e73908de",
    image: "/below the belt poster.jpeg",
    description:
      "Documentary examining how women are systematically dismissed by medical systems due to gender bias, societal taboos, and profit-driven healthcare.",
    section: "reckoning",
  },
  {
    title: "All in Her Head",
    format: "Book",
    source: "Elizabeth Comen, MD",
    url: "https://www.amazon.com/All-Her-Head-Medicine-Matters/dp/0063293013",
    description:
      "A medical oncologist traces the history of how medicine has dismissed, misunderstood, and mistreated women's bodies.",
    section: "reckoning",
    image: "/it's all in her head.jpeg",
  },
  {
    title: "Women Exaggerate, Men Downplay: Gendered Endorsement of Emotional Dramatization Stereotypes Contributes to Gender Bias in Pain Expectations",
    format: "Study",
    source: "Gina A. Paganini, Kevin M. Summers, Leanne ten Brinke & E. Paige Lloyd",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10688448/",
    description:
      "Across four experiments, researchers found that stereotypes about women being \"whiny\" or \"complaining\" lead others to dismiss their pain as dramatization, a bias with serious consequences in healthcare.",
    section: "reckoning",
  },
  {
    title: "Endometriosis: Ancient Disease, Ancient Treatments",
    format: "Article",
    source: "Drs. Camran, Farr & Ceana Nezhat / Endometriosis Foundation of America",
    url: "https://www.endofound.org/endometriosis-ancient-disease-ancient-treatments",
    description:
      "A look at how what Freud diagnosed as \"hysteria\" was likely unrecognized endometriosis. Chronicles the barbaric treatments women endured throughout history and how millions still await better care today.",
    section: "reckoning",
  },
  {
    title: "It's Not Hysteria",
    format: "Book",
    source: "Dr. Karen Tang",
    url: "https://www.amazon.com/Its-Not-Hysteria-Everything-Reproductive/dp/1250894158",
    description:
      "A board-certified gynecologist covers the full spectrum of reproductive health conditions, providing clear, evidence-based information that patients are rarely given.",
    section: "reckoning",
    image: "/its not hysteria.jpg",
  },
  {
    title: "Endometriosis and Painful Ovulation: Why Ovulation Hurts, Where It's Felt, and What Helps",
    format: "Article",
    source: "Dr. Jolene Brighten",
    url: "https://drbrighten.com/endometriosis-and-painful-ovulation/",
    description:
      "The connection between endometriosis and mid-cycle pain, explaining why ovulation discomfort can be as severe as menstrual pain and what can help.",
    section: "practice",
  },
  {
    title: "Period Pain Relief for Endometriosis, Adenomyosis, and Hormonal Imbalances",
    format: "Podcast",
    source: "Dr. Jolene Brighten",
    url: "https://drbrighten.com/podcasts/period-pain-relief/",
    description:
      "Challenges the notion that severe menstrual pain is normal. Offers actionable strategies for reducing pain through nutrition, supplements, and lifestyle.",
    section: "practice",
    image: "/dr brighten podcast.jpeg",
  },
  {
    title: "The Luteal Truth Serum: Why Your Period is a Monthly Report Card",
    format: "Podcast",
    source: "You're Great / Unique Hammond with Dr. Hannah Lawler",
    url: "https://www.youregreat.com/blog/2026/1/8/podcast-62-the-luteal-truth-serum-why-your-period-is-a-monthly-report-card-with-dr-hannah-lawler",
    description:
      "Explores how the luteal phase reveals deeper truths about your body's needs, the role of soluble fiber in managing estrogen, and why mastering basics like fiber, minerals, protein, and rest matters before pursuing advanced interventions.",
    section: "practice",
    image: "/you're great podcast.jpeg",
  },
  {
    title: "Endometriosis Diet That Stopped 20 Years of Pain",
    format: "Podcast",
    source: "Dr. Jolene Brighten with Khush Sra",
    url: "https://drbrighten.com/podcasts/endometriosis-diet/",
    description:
      "Functional nutritionist Khush Sra shares how she went from stage 4 endometriosis and five surgeries to living pain-free for 20 years through nutritional intervention. Covers gut dysbiosis, anti-inflammatory foods for estrogen clearance, and why nervous system regulation comes before dietary changes.",
    section: "practice",
    image: "/dr brighten podcast.jpeg",
  },
  {
    title: "Breaking Up With Caffeine",
    format: "Podcast",
    source: "What's the Juice / Olivia Amitrano",
    url: "https://whatsthejuice.libsyn.com/s3e20-caffine-solo",
    description:
      "Clinical herbalist and founder of Organic Olivia shares why she broke up with caffeine, how it impacts your body from a Traditional Chinese Medicine standpoint, and how to counter withdrawal with minerals, vitamins, protein, and herbs.",
    section: "practice",
    image: "/what's the juice podcast.jpeg",
  },
  {
    title: "Healing Your Chronic Pain & Conditions Once And For All",
    format: "Podcast",
    source: "The Wellness Process with Nicole Sachs",
    url: "https://podcasts.apple.com/us/podcast/48-healing-your-chronic-pain-conditions-once-and-for/id1735161262?i=1000691038022",
    description:
      "Nicole Sachs shares how she has helped thousands address chronic pain and autoimmune conditions without medication. Explores the science behind the mind-body connection and strategies for breaking cycles of persistent symptoms.",
    section: "practice",
    image: "/the wellness podcast.jpeg",
  },
  {
    title: "Chronic Pelvic Pain, Foot Pain, Anxiety, and IBS with Alex",
    format: "Podcast",
    source: "Nicole Sachs, LCSW",
    url: "https://www.yourbreakawake.com/podcasts/the-cure-for-chronic-pain-with-nicole-sachs-lcsw-2/episodes/2149013835",
    description:
      "Alex shares her journey of discovering that her chronic anxiety, depression, pelvic pain, foot pain, and bloating stemmed from nervous system dysregulation, and how recognizing the root cause of multiple symptoms enabled her to heal completely.",
    section: "witness",
    image: "/nicole sachs podcast.jpeg",
  },
  {
    title: "Nervous System Regulation",
    format: "Podcast",
    source: "In Sixteen Years of Endo / Amy Corfeli with Tanner Murtagh, MSW, RSW",
    url: "https://insixteenyears.com/episode155/",
    description:
      "Tanner Murtagh explains the link between nervous system dysregulation and chronic pain, breaking down polyvagal theory and how trauma and stress keep the body stuck in survival mode. Offers practical strategies for regulation.",
    section: "practice",
    image: "/in 16 years of endo podcast.jpeg",
  },
  {
    title: "Endo Belly Hot Spot: Do You Have Ileocecal Valve Pain?",
    format: "Article",
    source: "Katie Edmonds",
    url: "https://www.healendo.com/blog-1/2023/1/10/endo-belly-hot-spot",
    description:
      "Explains the ileocecal valve, a small flap between the small and large intestine that can become inflamed in people with endometriosis, and offers practical strategies including dietary modifications and massage techniques.",
    section: "practice",
  },
  {
    title: "How Do You Stop Craving Sugar? Causes & Solutions Backed by Research",
    format: "Article",
    source: "Dr. Jolene Brighten",
    url: "https://drbrighten.com/how-do-you-stop-craving-sugar/",
    description:
      "Research-backed breakdown of why sugar cravings happen, including hormonal causes, and practical solutions to manage them.",
    section: "practice",
  },
  {
    title: "Non-Toxic Period Products: A Fact-Packed Guide to Safer Cycles",
    format: "Article",
    source: "Cristina Solis, Orbasics",
    url: "https://orbasics.com/blogs/stories/best-non-toxic-period-products",
    image: "/the library/articles/DTS_BLOOM_Pointless_Agency_Photos_ID14763.jpg",
    description:
      "Conventional pads and tampons contain heavy metals, pesticides, endocrine disruptors, and potential carcinogens. This guide breaks down what to avoid and recommends safer alternatives like organic cotton tampons, menstrual cups, and PFAS-free period underwear.",
    section: "practice",
  },
  {
    title: "Heal Endo",
    format: "Book",
    source: "Katie Edmonds, NTP",
    url: "https://www.amazon.com/Heal-Endo-Anti-Inflammatory-Approach-Endometriosis/dp/1792389485",
    description:
      "The #1 best-selling book on endometriosis takes an anti-inflammatory approach to healing, covering how the disease develops, dietary and lifestyle factors, the role of gut bacteria as an endo trigger, and how to build a comprehensive treatment plan including surgery.",
    section: "practice",
    image: "/heal endo.jpg",
  },
  {
    title: "Endometriosis & PCOS: A Whole-Body Guide",
    format: "Book",
    source: "Savannah Regensburger, MS, MBA, CNS",
    url: "https://savannahregensburger.substack.com/p/endometriosis-and-pcos-e-book-2499",
    description:
      "A 50-page guide covering hormone changes across the lifespan, anti-inflammatory nutrition, evidence-based supplementation, symptom tracking, lab work recommendations, and medical advocacy strategies.",
    section: "practice",
    image: "/savannah book.jpg",
  },
  {
    title: "Beyond the Pill",
    format: "Book",
    source: "Jolene Brighten, NMD",
    url: "https://www.amazon.com/Beyond-Pill-Program-Hormones-Dangerous/dp/0062847058",
    description:
      "A 30-day program addressing hormone imbalances caused by hormonal contraception, covering post-birth-control syndrome, gut health, and hormone rebalancing.",
    section: "practice",
    image: "/beyond the pill.jpg",
  },
  {
    title: "Mind Your Body",
    format: "Book",
    source: "Nicole J. Sachs, LCSW",
    url: "https://www.amazon.com/Mind-Your-Body-Revolutionary-Program/dp/0593716930",
    description:
      "The JournalSpeak method, a mind-body approach that addresses how stored trauma and repressed emotions can fuel chronic pain conditions including pelvic pain.",
    section: "witness",
    image: "/mind your body.jpg",
  },
  {
    title: "This Is Endometriosis",
    format: "Film",
    source: "Georgie Wileman",
    url: "https://www.thisisendo.com/watch-this-is-endometriosis",
    image: "/this is endometriosis.jpg",
    description:
      "BAFTA-winning documentary short blending self-documented material, family archive, and reconstructive memories into a story about medical disbelief and community.",
    section: "witness",
  },
];
