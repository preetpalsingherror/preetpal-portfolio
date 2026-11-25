import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  ExternalLink,
  Copy,
  BookOpen,
  ArrowDownRight,
  Mail,
  Film,
  Eye,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Video
} from "lucide-react";

/**
 * ============================================================================
 * PREETPAL SINGH - CENTRALIZED PORTFOLIO DATA & DEEP ANALYSIS CONFIG
 * ============================================================================
 * Every word, script, carousel slide, book excerpt, and essay below is 100% yours.
 * Zero em-dashes, zero corporate fluff.
 */
const PORTFOLIO_DATA = {
  links: {
    royalEnfieldVideoUrl: "https://youtube.com/shorts/uqAAE6Xod5k",
    book1AmazonUrl: "https://amzn.in/d/0aWj0did",
    book2KdpUrl: "https://amzn.in/d/0fXOzRGJ",
    book3PreviewUrl: "#contact",
    email: "Preetpal77952@gmail.com",
    linkedin: "https://www.linkedin.com/in/preetpal-singh-0703b52b4",
    instagram: "https://www.instagram.com/poets_launchpad",
    personalInstagram: "https://www.instagram.com/thepreetpalsingh",
    github: "https://github.com/preetpalsingherror"
  },

  tickerItems: [
    "“SH*T! I HAVE NO IDEAS!” IS PART OF THE PROCESS",
    "BODY? BUILT. LIFE? CHILL. BLOATING? NONE.",
    "THE END OF EVERY BORING FRIDAY HAS ARRIVED",
    "B.TECH CSE PRECISION × HUMAN EMOTION",
    "2× PUBLISHED AUTHOR • BENGALURU"
  ],

  hero: {
    stripTop: "A COPYWRITER'S",
    stripMiddle: "Portfolio",
    stripBottom: "Preetpal Singh",
    headline: "Copywriter, Scriptwriter & Content Strategist",
    subheadline:
      "I write words people actually finish reading. Bengaluru-based writer, 2× published author, and founder of @poets_launchpad with a B.Tech CSE background, turning technical products, D2C brands, and everyday human friction into stories that hold attention.",
    badges: [
      "Bengaluru, IN",
      "B.Tech CSE",
      "2× Published Author",
      "@poets_launchpad"
    ]
  },

  brandIndex: [
    {
      num: "01",
      anchorId: "project-01",
      brandId: "re",
      brandName: "Royal Enfield",
      category: "Automotive • Heritage",
      accent: "#FFD400",
      workDone: "35s Spec Film, Voiceover & Storyboard",
      hookLine: "“To feel the ride and slowing the race in our mind.”",
      deliverables: ["35s Film", "Voiceover", "5-Beat Script"]
    },
    {
      num: "02",
      anchorId: "project-02",
      brandId: "cosmix",
      brandName: "Cosmix Wellness",
      category: "D2C Nutrition • Fitness",
      accent: "#00B84D",
      workDone: "4-Slide IG Carousel, 30s Reel & Funnel Audit",
      hookLine: "“Body? Built. Life? Chill. Bloating? None.”",
      deliverables: ["4-Slide Carousel", "30s Reel", "Brand Audit"]
    },
    {
      num: "03",
      anchorId: "project-03",
      brandId: "bose",
      brandName: "Bose India",
      category: "Premium Audio • Hardware",
      accent: "#2962FF",
      workDone: "Black Friday Hero Rewrite, Specs & Launch Email",
      hookLine: "“The end of every boring Friday has arrived.”",
      deliverables: ["Hero Rewrite", "3 Spec Blocks", "Launch Email"]
    },
    {
      num: "04",
      anchorId: "project-04",
      brandId: "peakflo",
      brandName: "Peakflo",
      category: "B2B SaaS • Agentic AI",
      accent: "#00B84D",
      workDone: "Homepage Positioning, AI Feature Copy & Cold Email",
      hookLine: "“Work should feel like your safe place, not an everyday headache.”",
      deliverables: ["SaaS Hero", "3 AI Blocks", "Outbound Email"]
    },
    {
      num: "05",
      anchorId: "project-05",
      brandId: "mokobara",
      brandName: "Mokobara",
      category: "D2C Travel & Lifestyle",
      accent: "#FF1E6E",
      workDone: "Bliss Bag PDP Rewrite, 2 POV Reels & FAQ Microcopy",
      hookLine: "“Looks like a dinner date. Packs like a carry-on.”",
      deliverables: ["PDP Hero", "2 Reel Scripts", "FAQ Microcopy"]
    },
    {
      num: "06",
      anchorId: "project-06",
      brandId: "zepto",
      brandName: "Zepto",
      category: "Quick-Commerce • India",
      accent: "#FFD400",
      workDone: "Bilingual Push Alerts, WhatsApp Nudges & Delay SMS",
      hookLine: "“Iss waqt chai toh bana loge... Par saath mein kya khaoge?”",
      deliverables: ["3 Push Alerts", "2 WhatsApp Nudges", "2 Delay SMS"]
    }
  ],

  // Interactive "Raw Thought -> Final Copy" sticky notes to prove human creative process
  notebookFlips: [
    {
      id: "flip-re",
      brand: "ROYAL ENFIELD",
      color: "#FFD400",
      textColor: "#141414",
      rawNote:
        "Everyone is running fast on bikes and in life. Classic 350 isn't about going fast, it's about slowing down the race inside your head.",
      finalLine:
        "“Without stopping... Without waiting... Without slowing it down. To feel the ride and slowing the race in our mind.”",
      whyItWorks:
        "Reframes a slower engine spec into a psychological luxury: mental stillness."
    },
    {
      id: "flip-cosmix",
      brand: "COSMIX WELLNESS",
      color: "#FF5C00",
      textColor: "#FFFDF7",
      rawNote:
        "Going gym daily and still feeling fat? Maybe it's not fat, it's bloating from regular whey. Body? Built. Life? Chill. Bloating? No.",
      finalLine:
        "“Body? Built. Life? Chill. Bloating? None.”",
      whyItWorks:
        "Replaces boring clinical claims ('24g protein') with a punchy, 6-word rhythm lifters actually remember."
    },
    {
      id: "flip-bose",
      brand: "BOSE INDIA",
      color: "#2962FF",
      textColor: "#FFFDF7",
      rawNote:
        "Their Black Friday banner is super boring. What if you wish the sun never comes up so the Black Friday music night never ends?",
      finalLine:
        "“The end of every boring Friday has arrived. Tonight, wish the sun never rises.”",
      whyItWorks:
        "Turns a routine discount timer into a poetic night-time atmosphere that creates urgency without sounding cheap."
    },
    {
      id: "flip-peakflo",
      brand: "PEAKFLO",
      color: "#00B84D",
      textColor: "#141414",
      rawNote:
        "Your work has to be your safe place, not everyday headaches with repetitive finance and ops tasks. Peakflo fixes it with agentic workflows so you can actually execute real work.",
      finalLine:
        "“Work should feel like your safe place, not an everyday headache.”",
      whyItWorks:
        "Replaces dense enterprise buzzwords ('agentic workflow orchestration') with human emotional relief that stressed finance and ops teams immediately feel."
    },
    {
      id: "flip-mokobara",
      brand: "MOKOBARA",
      color: "#FF1E6E",
      textColor: "#FFFDF7",
      rawNote:
        "Cute shoulder bags barely fit a phone so girls carry two bags. Bliss has 7 liters and a front zip pocket for keys. Looks like a date bag, packs like a carry on.",
      finalLine:
        "“Looks like a dinner date. Packs like a carry-on.”",
      whyItWorks:
        "Bridges Mokobara's core travel DNA ('carry-on') with everyday fashion utility in 9 punchy words."
    },
    {
      id: "flip-zepto",
      brand: "ZEPTO",
      color: "#FFD400",
      textColor: "#141414",
      rawNote:
        "Generic 20% off push notifications get swiped away. On a rainy evening people make chai at home and suddenly realize they have no hot snacks.",
      finalLine:
        "“Iss waqt chai toh bana loge... Par saath mein kya khaoge? Garam snacks 10 minute mein pahuncha dein?”",
      whyItWorks:
        "Enters the exact Indian kitchen moment with warm Hinglish instead of shouting a discount code."
    }
  ],

  projects: {
    project1: {
      number: "PROJECT 01 // VIDEO + VOICEOVER",
      tag: "SPEC COMMERCIAL • 0:35",
      title: "“Why Classic 350?” | Royal Enfield Spec Commercial",
      role: "Concept, Scriptwriting, Voiceover & Video Direction",
      description:
        "A 35-second narrative commercial contrasting modern digital rush with the unhurried thump of riding a Royal Enfield Classic 350.",
      duration: 35,
      fullScript:
        "Why Classic? In the era of speeding... Where life is running faster than we could realise. Weeks pass by, months pass by, and time doesn't feel slow... Then why Classic 350? To feel the time... to feel the ride... to feel the vibe. Without stopping... Without waiting... Without slowing it down. To feel the ride and slowing the race in our mind. That's why I have Classic 350. Generations passed by, but it always stayed. And it will stay.",
      deepAnalysis: {
        coreTension:
          "Modern motorcycle ads obsess over 0-100 km/h speed, horsepower, and aggressive cuts. For Classic 350 riders, speed is not the product. Presence is.",
        cadenceBreakdown:
          "Short, rhythmic clauses separated by intentional pauses mirror the low-RPM thump of a 350cc single-cylinder engine. The script forces the viewer's internal monologue to decelerate.",
        audioVisualSync:
          "Opens with frantic city cuts and notification sounds (high cognitive stress), then drops to a clean brass key turn and dry, close-mic voiceover so the silence itself becomes the hook.",
        metrics: [
          { label: "HOOK MECHANIC", value: "Philosophical Question" },
          { label: "EMOTIONAL SHIFT", value: "Rush → Stillness" },
          { label: "TARGET FORMAT", value: "9:16 Reels / Shorts" }
        ]
      },
      beats: [
        {
          id: "beat-1",
          timestamp: "00:00",
          start: 0,
          end: 8,
          cue: "HOOK & DIGITAL RUSH",
          xrayNote: "PATTERN INTERRUPT: Opens with a direct question that challenges speed culture.",
          visual:
            "Rapid cuts of city traffic, glowing notifications, and a ticking clock. Suddenly cut to a brass key turning in a Classic 350 ignition.",
          line: "Why Classic? In the era of speeding... Where life is running faster than we could realise."
        },
        {
          id: "beat-2",
          timestamp: "00:08",
          start: 8,
          end: 16,
          cue: "PACING & THE TURN",
          xrayNote: "RELATABLE TENSION: Mirrors how fast weeks blur together for young professionals.",
          visual:
            "Calendar pages dissolve into blurred highway streetlights. Deep single-cylinder exhaust thump breaks the noise.",
          line: "Weeks pass by, months pass by, and time doesn't feel slow... Then why Classic 350?"
        },
        {
          id: "beat-3",
          timestamp: "00:16",
          start: 16,
          end: 24,
          cue: "SENSORY CORE",
          xrayNote: "RULE OF THREE: 'Time / Ride / Vibe' creates lyrical cadence that sticks in memory.",
          visual:
            "Golden-hour sunlight filtering through trees onto a matte-black tank. Unhurried cruising at a steady rhythm.",
          line: "To feel the time... to feel the ride... to feel the vibe. Without stopping... Without waiting... Without slowing it down."
        },
        {
          id: "beat-4",
          timestamp: "00:24",
          start: 24,
          end: 30,
          cue: "EMOTIONAL INSIGHT",
          xrayNote: "REFRAME: Turns a mechanical bike into a mental reset button.",
          visual:
            "Close-up of the rider's calm eyes in the side mirror as the city fades behind.",
          line: "To feel the ride and slowing the race in our mind. That's why I have Classic 350."
        },
        {
          id: "beat-5",
          timestamp: "00:30",
          start: 30,
          end: 35,
          cue: "TIMELESS LEGACY",
          xrayNote: "BRAND MOAT: Anchors heritage without sounding dated or nostalgic.",
          visual:
            "Silhouette parked against twilight horizon. Crisp title card locks in.",
          line: "Generations passed by, but it always stayed. And it will stay."
        }
      ]
    },

    project2: {
      number: "PROJECT 02 // D2C CONTENT STRATEGY & COPY",
      tag: "BRAND AUDIT + REEL + CAROUSEL",
      title: "Cosmix Wellness | “No-Nonsense” Lifter Campaign",
      role: "Consumer Audit, Short-Form Script & Carousel Copy",
      insight:
        "Most plant protein ads brag about amino acid numbers. Almost none address what vegetarian lifters actually hate: slow-growth frustration and post-shake bloating.",
      strategy:
        "Shift Cosmix's messaging from gentle wellness to bloating-free gym performance, leading with peer-level honesty backed by their digestive herb blend (ginger, fennel, cumin & fenugreek).",
      deepAudit: {
        whatWorks:
          "Cosmix already wins on radical transparency ('Ingredient Decoder') and community proof ('Cosmix Collective'). Buyers trust their labels.",
        theGap:
          "Their tone leans heavily into soft lifestyle wellness. Serious vegetarian and sensitive-stomach gym-goers still assume plant protein equals slow muscle growth.",
        funnelLogic: [
          {
            step: "01. STOP THE SCROLL",
            detail: "Call out an unspoken gym-floor insecurity ('Jealous of non-veg lifters?' / 'Still feeling fat after shakes?') instead of generic '24g protein' claims."
          },
          {
            step: "02. VALIDATE WITHOUT PREACHING",
            detail: "Use peer-level empathy ('It's normal to feel frustrated') so skeptical whey users don't get defensive."
          },
          {
            step: "03. REAL MECHANISM PROOF",
            detail: "Name the exact kitchen herbs (ginger, fennel, cumin, fenugreek) plus pea & fermented yeast protein so the promise feels earned."
          },
          {
            step: "04. LOW-FRICTION CTA",
            detail: "Direct cold traffic to the 6-sachet starter bundle instead of forcing a full 1 kg tub commitment on day one."
          }
        ],
        complianceNote:
          "Agency Paid-Media Note: 'Still feeling fat?' hits hard in organic creator Reels. If boosting as a paid Meta Ad, swap to 'looking puffy around the waist' to stay 100% compliant with Meta's personal-health ad policies."
      },
      carouselSlides: [
        {
          num: "01 / 04",
          tag: "SPEC CAMPAIGN // COSMIX WELLNESS",
          xrayNote: "HONEST CALLOUT: Names the exact secret envy vegetarian lifters feel.",
          headline: "Jealous of people who can eat non-veg and build muscle faster?",
          body: "Read this before you give up on your fitness goals →",
          footer: "@thepreetpalsingh",
          dark: false
        },
        {
          num: "02 / 04",
          tag: "01 / THE REALITY",
          xrayNote: "EMPATHY BRIDGE: Validates frustration before pitching any product.",
          headline: "Feeling stuck with slow growth on a veg/vegan diet?",
          body: "It’s completely normal to feel frustrated when hitting protein targets feels twice as hard. Just don’t let your diet change your goal.",
          footer: "SWIPE →",
          dark: false
        },
        {
          num: "03 / 04",
          tag: "02 / THE FIX",
          xrayNote: "SPECIFIC PROOF: Real digestive herbs remove the 'plant protein = chalky bloat' objection.",
          headline: "Hitting your daily protein goal doesn’t have to be complicated.",
          body: "Add one scoop of Cosmix No-Nonsense Plant Protein Pro: 24g of complete pea & fermented yeast protein paired with ginger, fennel, cumin & fenugreek for whey-level absorption without dairy or fillers.",
          footer: "COSMIX WELLNESS",
          dark: true
        },
        {
          num: "04 / 04",
          tag: "03 / THE RESULT",
          xrayNote: "SIGNATURE CADENCE: 6 punchy words + low-barrier 6-sachet starter CTA.",
          headline: "Body? Built. Life? Chill. Bloating? None.",
          body: "Grab the 6-sachet starter bundle at cosmix.in and keep your training moving.",
          footer: "Preetpal Singh",
          dark: false
        }
      ],
      reelScript: {
        title: "30-Sec High-Retention Reel: “The Vegetarian Lifter’s Protein Trap”",
        beats: [
          {
            time: "0:00 - 0:04",
            label: "THE HOOK",
            xrayNote: "REFRAME: Turns body insecurity into a solvable digestion problem.",
            visual:
              "Creator lifting t-shirt slightly in gym mirror looking annoyed at a bloated stomach after finishing a shaker.",
            vo: "“Going to the gym daily and still feeling fat? Maybe it’s not fat. It’s the bloating from your regular protein shake.”"
          },
          {
            time: "0:04 - 0:14",
            label: "THE RELATABLE SHIFT",
            xrayNote: "PERSONAL PROOF: 'Like I did' builds instant trust without attacking whey drinkers.",
            visual:
              "Quick cut to setting down an old tub of whey and pouring water into a clean shaker.",
            vo: "“Whey isn’t suited for everyone. If you have a sensitive stomach like I did, heavy dairy and artificial gums sit in your gut all day and ruin your training.”"
          },
          {
            time: "0:14 - 0:24",
            label: "THE COSMIX SOLUTION",
            xrayNote: "INGREDIENT CLARITY: Translates the nutrition label into everyday kitchen herbs.",
            visual:
              "Scooping Cosmix No-Nonsense Plant Protein. Text pops up: 24g Protein | Pea & Rice Isolate | Ginger, Fennel, Cumin & Fenugreek.",
            vo: "“That’s why I switched to Cosmix No-Nonsense Plant Protein. It pairs clean pea and rice protein with real digestive herbs (ginger, fennel, cumin, and fenugreek) with zero gums or fillers.”"
          },
          {
            time: "0:24 - 0:30",
            label: "THE PAYOFF & CTA",
            xrayNote: "CONTINUITY: Ends on training momentum + low-risk starter pack.",
            visual:
              "Creator back under gym lights, locked into a heavy set, followed by the 6-sachet starter bundle.",
            vo: "“No heavy stomach. No bloating. Just 24 grams of clean protein per scoop so my training never slows down. Try the 6-sachet starter pack and feel the difference.”"
          }
        ]
      }
    },

    project3: {
      number: "PROJECT 03 // TECH & HARDWARE REWRITE",
      tag: "LANDING PAGE + LAUNCH EMAIL",
      title: "Bose India | Black Friday Campaign Rewrite",
      role: "Conversion Copywriting, Banner Rewrite & Launch Email",
      product: "Bose SoundLink Flex (2nd Gen)",
      beforeCopy: {
        eyebrow: "WHAT WAS LIVE ON BOSE INDIA",
        headline: "Black Friday Sale is Live.",
        subtext: "Bose Soundlink Flex (2nd Gen) | Shop Now.",
        failures: [
          "Zero differentiation: any ₹999 speaker could use this exact headline.",
          "Zero sonic emotion: fails to make the buyer imagine hearing the product.",
          "Weak CTA: 'Shop Now' creates zero urgency or exclusivity."
        ]
      },
      afterCopy: {
        eyebrow: "BOSE BLACK FRIDAY // LIMITED DROP",
        xrayNote: "POETIC URGENCY: Uses night/moon imagery instead of a loud red countdown timer.",
        headline: "The end of every boring Friday has arrived.",
        subtext:
          "Tonight, wish the sun never rises. Turn up the Bose SoundLink Flex (2nd Gen), deep, room-filling sound built to outlast the night, on exclusive Black Friday pricing until the Black Friday moon fades away.",
        cta: "Claim Black Friday Pricing"
      },
      deepStrategy: {
        thesis:
          "Premium audio buyers don't buy because something is 'on sale'. They buy because the discount gives them permission to upgrade how their nights feel.",
        upgrades: [
          {
            title: "01. ATMOSPHERE OVER DISCOUNTS",
            detail: "Swapped generic 'Sale is Live' copy for a vivid late-night mood ('The end of every boring Friday has arrived')."
          },
          {
            title: "02. SPEC-TO-SCENE TRANSLATION",
            detail: "Rewrote dry engineering terms (PositionIQ, IP67, 12-hour battery) into real life scenes: late-night drives, rooftops, and lasting past sunrise."
          },
          {
            title: "03. POETIC SCARCITY",
            detail: "'Until the Black Friday moon fades away' signals a hard deadline while protecting Bose's luxury brand equity."
          }
        ]
      },
      features: [
        {
          spec: "PositionIQ™ Technology",
          headline: "Sound that adapts to the room, not the other way around.",
          body: "Standing upright on your desk, hanging from a backpack, or lying flat outdoors, it senses its orientation and tunes bass and clarity in real time."
        },
        {
          spec: "IP67 Waterproof & Dustproof",
          headline: "Built for late-night drives, rooftops, and rough weather.",
          body: "Wrapped in a powder-coated steel grille and silicone body that shrugs off drops, dust, and rain, and even floats if it hits water."
        },
        {
          spec: "12-Hour Battery + Party Mode",
          headline: "One charge carries you straight past sunrise.",
          body: "Pair two Bose speakers together in Stereo or Party Mode for wide, distortion-free sound that keeps the night alive without hunting for a charger."
        }
      ],
      launchEmail: {
        subject: "The end of every boring Friday is here.",
        preview:
          "Wish the sun never comes up. Bose SoundLink Flex (2nd Gen) is officially on Black Friday sale.",
        body: `Every Friday feels the same, until tonight.

Black Friday has arrived, and it’s the one night you’ll wish the morning sun never comes back. Because for a limited window, the Bose SoundLink Flex (2nd Gen) is officially on Black Friday sale.

Small enough to carry in one hand. Loud and deep enough to take over the entire room. With PositionIQ™ auto-tuning, IP67 weatherproofing, and 12 hours of uninterrupted playback, it’s engineered to make every track hit harder, whether you’re hosting at home or taking the night outdoors.

Once Black Friday’s moon goes away, so does this price.

Team Bose India`
      }
    },

    project4: {
      number: "PROJECT 04 // B2B SAAS & AI REWRITE",
      tag: "HERO REWRITE + FEATURE BLOCKS + COLD EMAIL",
      title: "Peakflo | Turning Enterprise AI Jargon Into Human Relief",
      role: "B2B SaaS Copywriting, Positioning Rewrite & Outbound Email",
      product: "Peakflo Agentic Workflows (peakflo.co)",
      beforeCopy: {
        eyebrow: "WHAT WAS LIVE ON PEAKFLO.CO",
        headline: "Agentic workflows that automate and execute your business operations",
        subtext:
          "Peakflo's Agentic Workflows integrate seamlessly with your finance and operations processes continuously learning from your workflows to automate tasks, enhance accuracy, and accelerate decision-making. | Schedule a Demo",
        failures: [
          "Jargon overload: 'Agentic workflows' and 'enhance accuracy' sound like an engineering manual, not human relief.",
          "Zero emotional hook: ignores the real daily stress of chasing approvals and fixing repetitive ops mistakes.",
          "High-friction CTA: 'Schedule a Demo' asks for a 30-minute calendar commitment before proving how easy it is."
        ]
      },
      afterCopy: {
        eyebrow: "PEAKFLO // AGENTIC FINANCE & OPS",
        xrayNote:
          "EMOTIONAL ANCHOR: Reframes B2B software from 'technical automation' into mental peace and control at work.",
        headline: "Work should feel like your safe place, not an everyday headache.",
        subtext:
          "Stop drowning in repetitive finance and operations busywork. Peakflo's AI agents learn your rules, flag mistakes before they happen, and run the daily grind in the background so your team can focus on real decisions.",
        cta: "See How It Works"
      },
      deepStrategy: {
        thesis:
          "B2B buyers are still human beings. CFOs and ops leads do not wake up wishing for 'agentic orchestration': they wake up wishing their workday felt calm, predictable, and under control.",
        upgrades: [
          {
            title: "01. RELIEF BEFORE FEATURES",
            detail:
              "Led with 'safe place, not an everyday headache' so the reader feels understood before seeing a single AI buzzword."
          },
          {
            title: "02. JARGON TRANSLATION",
            detail:
              "Translated 'self-evaluation' and 'knowledge-based insights' into concrete office wins: catching errors early and answering questions without spreadsheet digging."
          },
          {
            title: "03. AUTONOMY OVER RIGIDITY",
            detail:
              "Positioned the custom workflow builder as freedom from waiting on engineers, turning a technical feature into personal control."
          }
        ]
      },
      features: [
        {
          spec: "SELF-EVALUATION & CONTINUOUS OPTIMIZATION",
          headline: "Workflows that catch mistakes and get smarter every week.",
          body: "Instead of breaking whenever an edge case shows up, Peakflo's agents review their own outputs, spot anomalies early, and quietly tighten your process over time."
        },
        {
          spec: "KNOWLEDGE-BASED INSIGHTS",
          headline: "Answers pulled straight from your company's real numbers.",
          body: "No more digging through five spreadsheets to answer one founder question. Get clear, context-aware insights grounded in your live finance and ops data."
        },
        {
          spec: "CUSTOM WORKFLOW BUILDER",
          headline: "Build your own workflow around how your team actually works.",
          body: "You do not need to bend your business to fit rigid software. Map out custom approvals, reminders, and handoffs in minutes without waiting on engineering."
        }
      ],
      outboundEmail: {
        subject: "Work shouldn't feel like an everyday headache.",
        preview:
          "What if your finance and ops busywork ran quietly in the background?",
        body: `Hi [First Name],

Work is supposed to be where you build things, not where you spend four hours a day chasing approvals, cross-checking spreadsheets, and fixing repetitive ops headaches.

That is why we built Peakflo.

Instead of forcing your team into rigid software, Peakflo lets you build custom AI workflows that run your everyday finance and operations tasks in the background. They evaluate their own work, pull instant answers from your company's knowledge base, and get sharper every week without extra manual babysitting.

Less daily firefighting. More space to actually think.

Worth a quick 10-minute look this week?

Best,
Team Peakflo`,
        ctaBadge: "[See Peakflo in Action →]"
      }
    },

    project5: {
      number: "PROJECT 05 // D2C CAMPAIGN & REEL SCRIPTS",
      tag: "PDP REWRITE + 2 REEL SCRIPTS + FAQ MICROCOPY",
      title: "Project 05 | Mokobara: Bliss Shoulder Bag (D2C Campaign & Reel Scripts)",
      role: "D2C Product Copywriting, First-Person Reel Scripts & Objection Microcopy",
      brand: "Mokobara (Bengaluru, D2C Travel & Lifestyle)",
      product: "Bliss Shoulder Bag in Tan Lines / Plush Suede (INR 4,499)",
      coreInsight:
        "Most compact date-night shoulder bags barely fit a phone, forcing buyers to carry an extra bulky tote. Bliss pairs a sleek plush-suede silhouette with 7 liters of real capacity and a quick-access front zip pocket, turning one bag into an all-day companion.",
      beforeCopy: {
        eyebrow: "WHAT WAS LIVE ON MOKOBARA",
        headline: "Meet Bliss.",
        subtext:
          "Your cutey-sized date for dinners, parties, or just regular days out. With 7 liters she can box your cut-fruit lunch (and perhaps even a bottle of wine).",
        failures: [
          "Buries the main functional win (7 liters of real space + quick-access front pocket) inside casual filler.",
          "Misses Mokobara's signature travel and carry-on brand DNA in the hook.",
          "Does not solve the real daily pain point: carrying a tiny aesthetic bag plus an extra bulky tote."
        ]
      },
      afterCopy: {
        eyebrow: "MOKOBARA // BLISS SHOULDER BAG (TAN LINES • INR 4,499)",
        xrayNote:
          "CONTRAST HOOK: Pairs evening style ('dinner date') with Mokobara's travel heritage ('carry-on') in two clean beats.",
        headline: "Looks like a dinner date. Packs like a carry-on.",
        subtext:
          "Plush suede on the outside, 7 liters of room on the inside. Slip your lunch, charger, and evening essentials into one sleek silhouette, with a front zip pocket so you never dig around for your keys.",
        cta: "Carry Bliss"
      },
      reelScripts: [
        {
          id: "moko-reel-1",
          badge: "SCRIPT 01 // SOLO DATE PREP",
          title: "First-Person “The Bag Speaks” POV: Solo Date Prep",
          xrayNote:
            "PERSONIFICATION HOOK: Letting the bag speak like a calm best friend turns a 7-liter capacity spec into an emotional self-care ritual.",
          visual:
            "Creator puts on the Tan Lines suede Bliss Bag in front of a mirror, dropping keys into the front pocket and sliding a lunch box and perfume inside.",
          lines: [
            {
              speaker: "Voiceover (The Bag)",
              text: "“Forget about the hectic day. Let's plan our own date. Everything you need? Sorted inside me. Oh my Bliss, we are ready for tonight. Let's clock it.”"
            }
          ]
        },
        {
          id: "moko-reel-2",
          badge: "SCRIPT 02 // FAST-PACED BANTER HOOK",
          title: "First-Person “The Bag Speaks” POV: Fast-Paced Banter Hook",
          xrayNote:
            "DIALOGUE INTERRUPT: Fast two-way banter stops the scroll in under 2 seconds and demonstrates the front zip pocket naturally.",
          visual:
            "Quick cut between the Tan Lines Bliss Shoulder Bag sitting on the counter and the creator rushing around a bedroom looking stressed before heading out.",
          lines: [
            {
              speaker: "Bag",
              text: "“Hey queen, why haven't we left yet? Our date is waiting.”"
            },
            {
              speaker: "Creator",
              text: "“I literally can't find anything together.”"
            },
            {
              speaker: "Bag",
              text: "“That's already sorted. Keys and lip balm are in my front zip pocket. Everything else fits inside my 7 liters. Forget the mess and roll with me.”"
            }
          ]
        }
      ],
      microcopy: [
        {
          label: "ON CAPACITY",
          xrayNote: "OBJECTION BUSTER: Proves 7L fits a real lunch box without sounding like a boring dimension chart.",
          copy: "“Think it won't fit? Wake up, queen. 7 liters of smart space handles your lunch box and evening plans with way less drama than your schedule.”"
        },
        {
          label: "ON VERSATILITY",
          xrayNote: "TIME-STAMPED SCENES: 9 AM, 2 PM, and 9 PM anchors justify the INR 4,499 price through all-day cost-per-wear.",
          copy: "“What do you mean 'only for dates'? I'm more versatile than your moods, built for 9 AM errands, 2 PM coffee runs, and 9 PM dinners.”"
        },
        {
          label: "ON SUEDE CARE",
          xrayNote: "FRICTION REMOVAL: Neutralizes the #1 hesitation buyers have before ordering plush suede.",
          copy: "“Maintaining me is easier than carrying your overthinking around. A quick brush keeps the plush suede looking fresh.”"
        }
      ]
    },

    project6: {
      number: "PROJECT 06 // QUICK-COMMERCE CRM & RETENTION",
      tag: "3 PUSH ALERTS + 2 WHATSAPP NUDGES + 2 DELAY SMS",
      title: "Project 06 | Zepto: Bilingual Push Notifications & WhatsApp Retention Pack",
      role: "Bilingual Microcopy (Hinglish + English), CRM Retention & CX De-escalation",
      brand: "Zepto (Quick-Commerce, India)",
      objective:
        "Replace generic, spammy promotional alerts with culturally relatable Hinglish and English microcopy that drives late-night orders, recovers abandoned carts, and de-escalates delivery delays.",
      voiceAndTone:
        "Witty, conversational, hyper-local Indian youth humor paired with clear utility.",
      pushNotifications: [
        {
          id: "zepto-push-1",
          badge: "PUSH 01 // RAINY EVENING CRAVING",
          time: "5:45 PM • MONSOON TRIGGER",
          title: "Iss waqt chai toh bana loge...",
          body: "Par saath mein kya khaoge? Garam snacks 10 minute mein pahuncha dein?",
          xrayNote:
            "SENSORY GAP HOOK: Completes an existing ritual (evening chai) so the 10-minute delivery feels like an instant rescue."
        },
        {
          id: "zepto-push-2",
          badge: "PUSH 02 // 1:30 AM MIDNIGHT HUNGER",
          time: "1:30 AM • LATE-NIGHT TRIGGER",
          title: "Too late to sneak out?",
          body: "Mumma's going to scold anyway. Let us silently drop midnight snacks at your door in 10 mins.",
          xrayNote:
            "CULTURAL INSIGHT: Taps into the universal Indian household fear of waking parents up at 1:30 AM."
        },
        {
          id: "zepto-push-3",
          badge: "PUSH 03 // SUNDAY LAZY RESET",
          time: "4:15 PM • SUNDAY TRIGGER",
          title: "Sunday afternoon, zero energy?",
          body: "Fridge is empty and Monday is dangerously close. Let us handle groceries while you stay in bed.",
          xrayNote:
            "PAIN-TO-RELIEF: Names Sunday-evening dread and positions Zepto as permission to stay in bed."
        }
      ],
      whatsappNudges: [
        {
          id: "zepto-wa-1",
          badge: "NUDGE 01 // EMOTIONAL HOOK",
          trigger: "CART IDLE • 25 MINS",
          copy: "Bhool gaye na mujhe? Jaise woh bhool gaye the. Your cart is still waiting. Tap here before your cravings expire.",
          xrayNote:
            "MEME-GRADE HUMOR: Playful heartbreak Hinglish stops the thumb on WhatsApp without sounding like an automated bot."
        },
        {
          id: "zepto-wa-2",
          badge: "NUDGE 02 // QUICK DECISION",
          trigger: "CART IDLE • 45 MINS",
          copy: "Stop overthinking and hit checkout, mate. Your snacks are packed and ready to roll in 10 minutes.",
          xrayNote:
            "MOMENTUM CLOSE: Uses 'already packed and ready to roll' ownership framing to eliminate checkout hesitation."
        }
      ],
      delayApologies: [
        {
          id: "zepto-delay-1",
          badge: "DELAY 01 // WARM HINGLISH DE-ESCALATION",
          channel: "IN-APP BANNER + SMS",
          copy: "Time pe nahi pahunch paaye aapke ghar tak, isliye dil se maafi. Par dil toh aapka hi hai na? Your rider is 4 mins away, and here is INR 50 off your next order.",
          xrayNote:
            "EMOTIONAL DISARM: Disarms frustration with warm shayari-style humility before pairing a concrete 4-min ETA and INR 50 credit."
        },
        {
          id: "zepto-delay-2",
          badge: "DELAY 02 // TRAFFIC DELAY REASSURANCE",
          channel: "LIVE TRACKER + SMS",
          copy: "Running a few minutes behind due to traffic, sorry to keep you waiting! Good snacks are never too late, your rider is almost at your gate.",
          xrayNote:
            "RHYTHMIC REASSURANCE: Transparent reason ('traffic') + light internal rhyme ('never too late / almost at your gate') keeps brand goodwill intact."
        }
      ]
    }
  },

  books: [
    {
      id: "book-1",
      status: "Published on Amazon",
      isInProgress: false,
      stripColor: "#FFD400",
      textColor: "#141414",
      coverBg: "bg-[#18181B]",
      coverAccent: "#FF5C00",
      title: "Tere Layi: For You. Always",
      subtitle: "Bilingual Poetry Collection",
      languages: "English • Hindi / Punjabi",
      synopsis:
        "A self-published bilingual poetry collection about emotion, memory, and human connection, written for the quiet moments that stay long after a conversation ends.",
      ctaLabel: "View on Amazon",
      linkKey: "book1AmazonUrl"
    },
    {
      id: "book-2",
      status: "Published on Kindle Direct Publishing",
      isInProgress: false,
      stripColor: "#FF5C00",
      textColor: "#FFFDF7",
      coverBg: "bg-[#1E3A8A]",
      coverAccent: "#FFD400",
      title: "The Living Thoughts",
      subtitle: "Reflective Prose & Verse Collection",
      languages: "English",
      synopsis:
        "Short prose and verse examining stillness, self-inquiry, and why slowing down in a noisy, hyper-connected world is its own kind of strength.",
      ctaLabel: "Read on Kindle (KDP)",
      linkKey: "book2KdpUrl"
    },
    {
      id: "book-3",
      status: "In Progress",
      isInProgress: true,
      stripColor: "#2962FF",
      textColor: "#FFFDF7",
      coverBg: "bg-[#27272A]",
      coverAccent: "#00C853",
      title: "The Winter Smells Like You (Sardiya)",
      subtitle: "Bilingual Manuscript • 100+ Entries",
      languages: "Hindi • Urdu • English",
      synopsis:
        "My upcoming manuscript of 100+ entries blending Hindi, Urdu, and English verse, tracing warmth, memory, and winter stillness across languages.",
      ctaLabel: "Manuscript Updates / Contact",
      linkKey: "book3PreviewUrl"
    }
  ],

  community: {
    name: "The Poet's Launchpad",
    handle: "@poets_launchpad",
    role: "Founder & Creative Lead",
    summary:
      "Built an independent community and web hub for emerging writers, conceptualizing, writing campaign copy, and running multi-edition poetry competitions from scratch.",
    highlights: [
      { label: "Community & Web Platform", value: "Independent Hub" },
      { label: "Flagship Competitions", value: "3 Editions Executed" },
      { label: "Publishing Pipeline", value: "Anthology & Print" }
    ],
    editions: [
      {
        id: "vq1",
        badge: "EDITION 01",
        title: "Verse Quest 1.0",
        tagColor: "#FFD400",
        description:
          "Launched the inaugural community poetry sprint, building organic Instagram reach, prompt hooks, and active writer participation from zero."
      },
      {
        id: "vq2",
        badge: "EDITION 02 • BOOK EDITION",
        title: "Verse Quest 2.0 (Book Edition)",
        tagColor: "#FF5C00",
        description:
          "Turned competition entries into a published anthology edition, giving emerging writers real published book credits."
      },
      {
        id: "qov",
        badge: "EDITION 03",
        title: "Quest of Verse",
        tagColor: "#2962FF",
        description:
          "Designed a free-for-all multi-round poetry challenge across Hindi, Urdu, and English writers with tight editorial curation."
      }
    ]
  },

  scopeOfWork: [
    {
      num: "01",
      title: "30-60s Video & Reel Scripts",
      accent: "#FFD400",
      textColor: "#141414",
      detail: "High-retention hooks, pacing notes, and voiceover scripts built for Reels, Shorts, and brand spec commercials."
    },
    {
      num: "02",
      title: "D2C Carousels & Audits",
      accent: "#FF5C00",
      textColor: "#FFFDF7",
      detail: "Consumer psychology teardowns, swipe-momentum Instagram carousels, and Meta-compliant organic/paid ad variations."
    },
    {
      num: "03",
      title: "Landing Pages & Launch Emails",
      accent: "#2962FF",
      textColor: "#FFFDF7",
      detail: "Before/after hero banner rewrites, spec-to-benefit product copy, and high-converting launch or seasonal emails."
    }
  ],

  essays: [
    {
      id: "essay-personal",
      tag: "PERSONAL ESSAY // IN MY OWN WORDS",
      readTime: "3 MIN READ",
      date: "ESSAY 01",
      accent: "#FF5C00",
      title: "Where I Belong, How I Belong, and Why I’m Here",
      excerpt:
        "I joined engineering not knowing where I would end up. Then I asked myself: if I only follow a safe routine, where will all this creativity go?",
      paragraphs: [
        "My name is Preetpal Singh, and I’m 20 years old.",
        "Right now, I’m pursuing a degree in Computer Science Engineering. When I first joined, I honestly didn’t know where I would end up, but I think I finally know where I belong.",
        "Since 7th grade, I’ve carried a creative side that never really left me. I started out writing poems and songs just to entertain my friends, myself, and maybe a couple of girlfriends along the way (okay, less than a couple). Over the years, notebooks turned into published books, late-night lyrics, and building a poetry community from scratch.",
        "Still, one question kept bothering me: If I just become another engineer working a routine job, when will I write? Where will all this creativity go? What is the point of being given a gift if you never actually use it in your entire life?",
        "Yes, money matters. I’m practical about building a real career. But creativity matters just as much. I couldn’t let a talent I’ve carried since I was twelve sit in a corner unused just to fit a safe, predictable box.",
        "So I decided to finally jump into the space where I can live, and not lie. Where my engineering brain and my writer’s instinct work on the same team, turning ideas, brands, and stories into things people actually feel."
      ]
    }
  ]
};

function resolveVideoSource(url) {
  if (!url || !url.trim()) return null;
  const clean = url.trim();

  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(clean)) {
    return { type: "video", src: clean };
  }

  const yt = clean.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{6,})/
  );
  if (yt && yt[1]) {
    return { type: "iframe", src: `https://www.youtube.com/embed/${yt[1]}?rel=0` };
  }

  const vimeo = clean.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo && vimeo[1]) {
    return { type: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}` };
  }

  const drive = clean.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (drive && drive[1]) {
    return { type: "iframe", src: `https://drive.google.com/file/d/${drive[1]}/preview` };
  }

  return { type: "iframe", src: clean };
}

function MaskingTape({ className = "", rotate = "-rotate-2" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none w-24 h-6 bg-[#EFE4C8]/85 border-x border-[#D8C9A3]/70 shadow-sm backdrop-blur-[1px] ${rotate} ${className}`}
      style={{
        clipPath:
          "polygon(3% 0%, 97% 2%, 100% 25%, 98% 50%, 100% 78%, 96% 100%, 2% 98%, 0% 72%, 2% 45%, 0% 18%)"
      }}
    />
  );
}

function BrandLogoBadge({ brandId, size = "md" }) {
  const isLg = size === "lg";
  const boxClass = isLg
    ? "h-12 px-4 border-2 border-[#141414] shadow-[3px_3px_0px_#141414]"
    : "h-10 px-3 border-2 border-[#141414] shadow-[2px_2px_0px_#141414]";

  if (brandId === "re") {
    return (
      <div
        className={`${boxClass} bg-[#141414] text-[#FFD400] inline-flex items-center gap-2 shrink-0`}
      >
        <span className="w-6 h-6 rounded-full border border-[#FFD400] flex items-center justify-center font-condensed text-xs tracking-tighter bg-[#D90429] text-white">
          RE
        </span>
        <div className="leading-none text-left">
          <span className="font-condensed tracking-widest text-sm sm:text-base uppercase block">
            ROYAL ENFIELD
          </span>
          <span className="font-mono-code text-[8px] text-white/75 tracking-widest block">
            CLASSIC 350
          </span>
        </div>
      </div>
    );
  }

  if (brandId === "cosmix") {
    return (
      <div
        className={`${boxClass} bg-[#1D3528] text-[#F6F3EC] inline-flex items-center gap-2 shrink-0`}
      >
        <span className="w-6 h-6 rounded-full bg-[#C86D51] text-[#FFFDF7] flex items-center justify-center font-chunky text-xs font-bold">
          C
        </span>
        <div className="leading-none text-left">
          <span className="font-chunky tracking-widest text-sm sm:text-base uppercase block">
            COSMIX
          </span>
          <span className="font-mono-code text-[8px] text-[#C86D51] tracking-widest block">
            NO-NONSENSE PLANT
          </span>
        </div>
      </div>
    );
  }

  if (brandId === "bose") {
    return (
      <div
        className={`${boxClass} bg-[#141414] text-white inline-flex items-center gap-2.5 shrink-0`}
      >
        <span className="w-6 h-6 bg-[#2962FF] text-white flex items-center justify-center font-condensed text-xs italic">
          B
        </span>
        <div className="leading-none text-left">
          <span className="font-condensed italic tracking-[0.22em] text-base sm:text-lg uppercase block">
            BOSE
          </span>
          <span className="font-mono-code text-[8px] text-[#FFD400] tracking-widest block">
            SOUNDLINK FLEX
          </span>
        </div>
      </div>
    );
  }

  if (brandId === "peakflo") {
    return (
      <div
        className={`${boxClass} bg-[#FAF6EE] text-[#141414] inline-flex items-center gap-2 shrink-0`}
      >
        <span className="w-6 h-6 bg-[#00B84D] border border-[#141414] text-[#141414] flex items-center justify-center font-mono-code text-xs font-extrabold">
          P↗
        </span>
        <div className="leading-none text-left">
          <span className="font-chunky tracking-tight text-base sm:text-lg font-bold block">
            peakflo<span className="text-[#00B84D]">.co</span>
          </span>
          <span className="font-mono-code text-[8px] text-[#52525B] tracking-widest uppercase block">
            YC W22 • AGENTIC AI
          </span>
        </div>
      </div>
    );
  }

  if (brandId === "mokobara") {
    return (
      <div
        className={`${boxClass} bg-[#FFD400] text-[#141414] inline-flex items-center gap-2 shrink-0`}
      >
        <span className="w-6 h-6 bg-[#141414] text-[#FFD400] flex items-center justify-center font-mono-code text-xs font-bold">
          [M]
        </span>
        <div className="leading-none text-left">
          <span className="font-mono-code font-extrabold tracking-[0.2em] text-xs sm:text-sm uppercase block">
            MOKOBARA
          </span>
          <span className="font-mono-code text-[8px] text-[#141414]/75 tracking-widest uppercase block">
            BLISS • GOING PLACES
          </span>
        </div>
      </div>
    );
  }

  if (brandId === "zepto") {
    return (
      <div
        className={`${boxClass} bg-[#3B0764] text-[#FFFDF7] inline-flex items-center gap-2 shrink-0`}
      >
        <span className="w-6 h-6 bg-[#FF1E6E] border border-[#FFD400] text-[#FFD400] flex items-center justify-center font-condensed text-xs font-bold">
          Z⚡
        </span>
        <div className="leading-none text-left">
          <span className="font-chunky font-bold tracking-wider text-sm sm:text-base lowercase block text-[#FFD400]">
            zepto
          </span>
          <span className="font-mono-code text-[8px] text-[#FCE7F3] tracking-widest uppercase block">
            10-MIN QUICK COMMERCE
          </span>
        </div>
      </div>
    );
  }

  return null;
}

export default function App() {
  const links = PORTFOLIO_DATA.links;

  // Global Creative Feature 1: "Red-Pen Copywriter X-Ray Mode"
  const [xrayMode, setXrayMode] = useState(false);

  // Global Creative Feature 2: Scroll Reading Progress
  const [scrollProgress, setScrollProgress] = useState(0);

  // Interactive Sticky-Note Flipper State (Raw Thought -> Final Copy)
  const [flippedNotes, setFlippedNotes] = useState({});

  // Project 1 interactive state
  const p1 = PORTFOLIO_DATA.projects.project1;
  const [p1Tab, setP1Tab] = useState("script");
  const [rePlayerMode, setRePlayerMode] = useState("video"); // 'video' | 'beats'
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Project 2 interactive state (Carousel Grid / Phone Swipe / Reel / Deep Audit)
  const p2 = PORTFOLIO_DATA.projects.project2;
  const [p2View, setP2View] = useState("carousel");
  const [carouselMode, setCarouselMode] = useState("grid"); // 'grid' | 'phone'
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  // Project 3 interactive state (Before vs After / Launch Email / Deep Strategy)
  const p3 = PORTFOLIO_DATA.projects.project3;
  const [p3View, setP3View] = useState("landing");
  const [boseCompareMode, setBoseCompareMode] = useState("split"); // 'split' | 'after'

  // Project 4 interactive state (Before vs After / Outbound Email / B2B SaaS Teardown)
  const p4 = PORTFOLIO_DATA.projects.project4;
  const [p4View, setP4View] = useState("landing");
  const [peakfloCompareMode, setPeakfloCompareMode] = useState("split"); // 'split' | 'after'

  // Project 5 interactive state (Mokobara Bliss Shoulder Bag)
  const p5 = PORTFOLIO_DATA.projects.project5;
  const [p5View, setP5View] = useState("hero"); // 'hero' | 'reels' | 'microcopy'
  const [mokobaraCompareMode, setMokobaraCompareMode] = useState("split"); // 'split' | 'after'

  // Project 6 interactive state (Zepto Bilingual Push & WhatsApp Retention Pack)
  const p6 = PORTFOLIO_DATA.projects.project6;
  const [p6View, setP6View] = useState("push"); // 'push' | 'whatsapp' | 'delays'

  // Community edition active tab
  const [activeEditionIdx, setActiveEditionIdx] = useState(0);

  // Essay Reader modal
  const [activeEssay, setActiveEssay] = useState(null);
  const essayDialogRef = useRef(null);

  // Toast feedback
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast((prev) => (prev === msg ? "" : prev));
    }, 2600);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync Essay Reader native <dialog> modal and light-dismiss fallback
  useEffect(() => {
    const dialog = essayDialogRef.current;
    if (!dialog) return;

    if (activeEssay) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeEssay]);

  useEffect(() => {
    const dialog = essayDialogRef.current;
    if (!dialog) return;

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener("click", handleBackdropClick);
      return () => dialog.removeEventListener("click", handleBackdropClick);
    }
  }, []);

  const copyText = (text, label) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(label));
    } else {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      showToast(label);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= p1.duration) {
          setIsPlaying(false);
          return p1.duration;
        }
        return Number((prev + 0.1).toFixed(1));
      });
    }, 100);
    return () => clearInterval(timer);
  }, [isPlaying, p1.duration]);

  const activeBeat = useMemo(() => {
    return (
      p1.beats.find((b) => currentTime >= b.start && currentTime < b.end) ||
      (currentTime >= p1.duration
        ? p1.beats[p1.beats.length - 1]
        : p1.beats[0])
    );
  }, [currentTime, p1]);

  const resolvedVideo = useMemo(
    () => resolveVideoSource(links.royalEnfieldVideoUrl),
    [links.royalEnfieldVideoUrl]
  );

  const formatTime = (sec) => {
    const s = Math.floor(sec);
    return `00:${s < 10 ? `0${s}` : s}`;
  };

  const toggleNoteFlip = (id) => {
    setFlippedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#C69C72] text-[#141414] font-sans-clean selection:bg-[#FF1E6E] selection:text-white relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@700&family=Fredoka:wght@600;700&family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-condensed { font-family: 'Anton', Impact, sans-serif; }
        .font-chunky { font-family: 'Fredoka', sans-serif; }
        .font-handwritten { font-family: 'Caveat', cursive; }
        .font-mono-code { font-family: 'JetBrains Mono', monospace; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }

        .kraft-bg {
          background-color: #C49A6C;
          background-image:
            repeating-linear-gradient(45deg, rgba(84, 53, 24, 0.05) 0px, rgba(84, 53, 24, 0.05) 2px, transparent 2px, transparent 6px),
            radial-gradient(rgba(60, 36, 15, 0.08) 1px, transparent 0);
          background-size: 16px 16px;
        }

        .notebook-grid-paper {
          background-color: #FAF6EE;
          background-image:
            linear-gradient(to right, rgba(203, 184, 157, 0.34) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 184, 157, 0.34) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .ruled-notepad {
          background-color: #FFFDF9;
          background-image: linear-gradient(to bottom, transparent 31px, rgba(41, 98, 255, 0.14) 32px);
          background-size: 100% 32px;
        }

        .torn-strip-yellow {
          clip-path: polygon(
            2% 6%, 14% 1%, 28% 5%, 44% 0%, 62% 4%, 79% 1%, 96% 5%,
            100% 24%, 97% 48%, 100% 74%, 98% 95%,
            82% 99%, 65% 94%, 47% 100%, 29% 95%, 12% 99%, 1% 94%,
            3% 68%, 0% 42%, 3% 19%
          );
        }

        .torn-strip-orange {
          clip-path: polygon(
            1% 4%, 19% 0%, 37% 4%, 56% 1%, 75% 5%, 94% 1%, 99% 6%,
            98% 32%, 100% 58%, 97% 85%, 99% 97%,
            84% 95%, 64% 100%, 42% 95%, 21% 99%, 3% 95%,
            0% 71%, 2% 44%, 0% 20%
          );
        }

        .torn-strip-blue {
          clip-path: polygon(
            2% 3%, 22% 7%, 45% 2%, 68% 6%, 89% 1%, 99% 5%,
            97% 36%, 100% 67%, 98% 96%,
            78% 93%, 55% 99%, 31% 94%, 8% 98%, 1% 92%,
            3% 58%, 0% 28%
          );
        }

        .torn-footer-top {
          clip-path: polygon(
            0% 18px, 6% 4px, 13% 16px, 21% 2px, 30% 15px, 39% 3px,
            48% 17px, 57% 2px, 66% 14px, 75% 1px, 84% 16px, 92% 4px, 100% 15px,
            100% 100%, 0% 100%
          );
        }

        .halftone-green {
          background-color: #00B84D;
          background-image: radial-gradient(#063B1B 1.6px, transparent 1.6px);
          background-size: 6px 6px;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: slowSpin 18s linear infinite;
        }

        dialog:modal {
          overscroll-behavior: contain;
        }
        dialog::backdrop {
          background-color: rgba(20, 20, 20, 0.8);
          backdrop-filter: blur(4px);
          overflow: hidden;
          overscroll-behavior: contain;
        }
      `}</style>

      {/* =====================================================================
          1. HOT-PINK SCROLLING TICKER TAPE BANNER + SCROLL PROGRESS BAR
      ====================================================================== */}
      <div className="sticky top-0 z-40 bg-[#FF1E6E] text-white border-b-2 border-[#141414] overflow-hidden shadow-md">
        <div className="py-2">
          <div className="animate-marquee font-condensed tracking-wider text-sm sm:text-base uppercase">
            {[...PORTFOLIO_DATA.tickerItems, ...PORTFOLIO_DATA.tickerItems].map(
              (item, idx) => (
                <span key={idx} className="mx-5 flex items-center gap-5 whitespace-nowrap">
                  <span>{item}</span>
                  <span className="text-[#FFD400]">|</span>
                </span>
              )
            )}
          </div>
        </div>
        {/* Live Reading Progress Bar */}
        <div className="h-1 w-full bg-[#141414]/30">
          <div
            className="h-full bg-[#FFD400] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* =====================================================================
          MAIN KRAFT CARDBOARD FRAME + CREAM GRAPH-PAPER SHEET
      ====================================================================== */}
      <div className="kraft-bg px-2.5 sm:px-6 md:px-10 pb-10">
        <div className="max-w-6xl mx-auto notebook-grid-paper border-x-4 border-b-4 border-[#141414] shadow-[0_24px_60px_rgba(20,20,20,0.28)] relative">
          {/* Compact Zine Navigation Bar + Red-Pen X-Ray Switch */}
          <header className="px-4 sm:px-10 pt-5 pb-4 border-b-2 border-dashed border-[#141414]/25 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold uppercase tracking-wider">
              <span className="px-2.5 py-1 bg-[#141414] text-[#FFD400] rounded-sm">
                PORTFOLIO // 2026
              </span>
              <span className="text-[#141414]/80 hidden md:inline">
                PREETPAL SINGH • BENGALURU
              </span>
            </div>

            <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 font-mono-code text-[11px] sm:text-xs font-bold">
              <a
                href="#notebook-lab"
                className="px-2 py-1 rounded hover:bg-[#FF1E6E] hover:text-white transition-colors hidden sm:inline-block"
              >
                PROCESS
              </a>
              <a
                href="#work-section"
                className="px-2 py-1 rounded hover:bg-[#FFD400] transition-colors"
              >
                01. WORK
              </a>
              <a
                href="#books-section"
                className="px-2 py-1 rounded hover:bg-[#FF5C00] hover:text-white transition-colors"
              >
                02. BOOKS
              </a>
              <a
                href="#community-section"
                className="px-2 py-1 rounded hover:bg-[#2962FF] hover:text-white transition-colors hidden sm:inline-block"
              >
                03. COMMUNITY
              </a>
              <a
                href="#essays-section"
                className="px-2 py-1 rounded hover:bg-[#00B84D] hover:text-white transition-colors"
              >
                04. STORY
              </a>

              {/* Creative Interactive Toggle: Copywriter's Red-Pen X-Ray Mode */}
              <button
                type="button"
                onClick={() => {
                  const next = !xrayMode;
                  setXrayMode(next);
                  showToast(
                    next
                      ? "Red-Pen X-Ray ON: Copywriter psychology notes unlocked!"
                      : "Red-Pen X-Ray OFF: Clean reading view."
                  );
                }}
                className={`px-3 py-1.5 border-2 border-[#141414] shadow-[2px_2px_0px_#141414] transition-all flex items-center gap-1.5 ${
                  xrayMode
                    ? "bg-[#D90429] text-white"
                    : "bg-[#FFD400] text-[#141414] hover:bg-[#D90429] hover:text-white"
                }`}
                title="Reveal hidden copywriter psychology notes on every campaign"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{xrayMode ? "X-RAY: ON" : "X-RAY NOTES"}</span>
              </button>
            </nav>
          </header>

          {/* =================================================================
              HERO SECTION: INTERACTIVE CURSIVE MIND-MAP (CENTER NAME + 6 BRANDS)
          ================================================================== */}
          <section className="px-4 sm:px-8 md:px-12 pt-8 pb-16 sm:pt-12 sm:pb-20 border-b-2 border-[#141414]">
            <div className="max-w-5xl mx-auto mb-10 sm:mb-12">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-[#141414] text-[#FFD400] font-mono-code text-[11px] font-bold uppercase tracking-widest border border-[#141414] shadow-[3px_3px_0px_#FF1E6E]">
                  CREATIVE MIND MAP // CLICK ANY BRAND BRANCH TO JUMP ↓
                </span>
              </div>

              {/* DESKTOP / TABLET 3-COLUMN MIND MAP WITH CURVED SVG BRANCHES */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Hand-Drawn Curved SVG Connector Lines (Visible on lg screens) */}
                <svg
                  viewBox="0 0 1000 540"
                  fill="none"
                  aria-hidden="true"
                  className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
                >
                  <defs>
                    <marker
                      id="inkArrowRed"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,1 L7,4 L0,7 Z" fill="#D90429" />
                    </marker>
                    <marker
                      id="inkArrowBlack"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,1 L7,4 L0,7 Z" fill="#141414" />
                    </marker>
                  </defs>

                  {/* Left Top Branch -> Project 01 (Royal Enfield) */}
                  <path
                    d="M 410 235 C 350 180, 325 100, 275 88"
                    stroke="#141414"
                    strokeWidth="2.8"
                    strokeDasharray="6 5"
                    markerEnd="url(#inkArrowBlack)"
                  />
                  {/* Left Middle Branch -> Project 02 (Cosmix Wellness) */}
                  <path
                    d="M 390 270 C 340 270, 315 262, 275 268"
                    stroke="#D90429"
                    strokeWidth="2.8"
                    markerEnd="url(#inkArrowRed)"
                  />
                  {/* Left Bottom Branch -> Project 03 (Bose India) */}
                  <path
                    d="M 410 305 C 350 365, 325 440, 275 450"
                    stroke="#141414"
                    strokeWidth="2.8"
                    strokeDasharray="6 5"
                    markerEnd="url(#inkArrowBlack)"
                  />

                  {/* Right Top Branch -> Project 04 (Peakflo) */}
                  <path
                    d="M 590 235 C 650 180, 675 100, 725 88"
                    stroke="#141414"
                    strokeWidth="2.8"
                    strokeDasharray="6 5"
                    markerEnd="url(#inkArrowBlack)"
                  />
                  {/* Right Middle Branch -> Project 05 (Mokobara) */}
                  <path
                    d="M 610 270 C 660 270, 685 262, 725 268"
                    stroke="#D90429"
                    strokeWidth="2.8"
                    markerEnd="url(#inkArrowRed)"
                  />
                  {/* Right Bottom Branch -> Project 06 (Zepto) */}
                  <path
                    d="M 590 305 C 650 365, 675 440, 725 450"
                    stroke="#141414"
                    strokeWidth="2.8"
                    strokeDasharray="6 5"
                    markerEnd="url(#inkArrowBlack)"
                  />

                  {/* Decorative Hand-Drawn Loop around Center Hub */}
                  <ellipse
                    cx="500"
                    cy="270"
                    rx="118"
                    ry="95"
                    stroke="#D90429"
                    strokeWidth="1.8"
                    strokeDasharray="4 6"
                    transform="rotate(-3 500 270)"
                  />
                </svg>

                {/* LEFT 3 BRAND NODES (Projects 01, 02, 03) */}
                <div className="lg:col-span-4 space-y-4 relative z-10 order-2 lg:order-1">
                  {PORTFOLIO_DATA.brandIndex.slice(0, 3).map((item, idx) => (
                    <a
                      key={item.num}
                      href={`#${item.anchorId}`}
                      className={`group block bg-white border-2 border-[#141414] p-4 shadow-[5px_5px_0px_#141414] hover:bg-[#FAF6EE] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#D90429] transition-all ${
                        idx === 1 ? "lg:-ml-2" : "lg:ml-2"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <BrandLogoBadge brandId={item.brandId} size="md" />
                        <span className="px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold">
                          #{item.num} ↘
                        </span>
                      </div>
                      <p className="font-chunky text-sm text-[#141414] leading-snug mb-1 group-hover:text-[#D90429] transition-colors">
                        {item.workDone}
                      </p>
                      <p className="font-handwritten text-lg text-[#3F3F46] leading-tight">
                        {item.hookLine}
                      </p>
                    </a>
                  ))}
                </div>

                {/* CENTER CURSIVE NAME HUB ("Preetpal Singh") */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center relative z-20 order-1 lg:order-2 my-4 lg:my-0">
                  <div className="relative">
                    <MaskingTape
                      className="mx-auto -mb-3 relative z-30"
                      rotate="-rotate-2"
                    />

                    {/* Main Center Mind-Map Node */}
                    <div className="bg-[#FFFDF9] border-4 border-[#141414] px-6 py-7 sm:px-8 sm:py-9 shadow-[10px_10px_0px_#141414] relative">
                      <span className="inline-block px-2.5 py-0.5 bg-[#FFD400] border border-[#141414] font-mono-code text-[10px] font-bold uppercase tracking-widest mb-2">
                        A COPYWRITER&apos;S PORTFOLIO
                      </span>

                      <h1 className="font-handwritten text-5xl sm:text-6xl font-bold text-[#2962FF] leading-none py-2 drop-shadow-[2px_2px_0px_rgba(20,20,20,0.12)]">
                        {PORTFOLIO_DATA.hero.stripBottom}
                      </h1>

                      {/* Hand-drawn crimson underline SVG */}
                      <svg
                        viewBox="0 0 240 16"
                        className="w-48 h-4 mx-auto -mt-1 mb-2"
                        fill="none"
                      >
                        <path
                          d="M 6 11 Q 120 2, 234 10"
                          stroke="#D90429"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 28 14 Q 130 7, 210 13"
                          stroke="#FF5C00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>

                      <p className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-[#141414]">
                        COPYWRITER • SCRIPTWRITER
                      </p>
                      <p className="font-mono-code text-[10px] font-bold text-[#52525B] mt-0.5">
                        B.TECH CSE • 2× AUTHOR • BLR
                      </p>

                      {/* Halftone Green Stamp Overlapping Corner */}
                      <div className="w-16 h-16 rounded-full halftone-green border-2 border-[#141414] shadow-[3px_3px_0px_#141414] flex items-center justify-center absolute -bottom-6 -right-5 z-30">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-full h-full animate-spin-slow p-0.5"
                        >
                          <defs>
                            <path
                              id="badgeCirclePath"
                              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                            />
                          </defs>
                          <text
                            fill="#042912"
                            fontSize="10"
                            fontWeight="800"
                            letterSpacing="2"
                            className="font-mono-code uppercase"
                          >
                            <textPath href="#badgeCirclePath">
                              AUTHOR • SCRIPTWRITER • CSE •
                            </textPath>
                          </text>
                        </svg>
                        <span className="absolute font-condensed text-base text-[#042912]">
                          PS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT 3 BRAND NODES (Projects 04, 05, 06) */}
                <div className="lg:col-span-4 space-y-4 relative z-10 order-3">
                  {PORTFOLIO_DATA.brandIndex.slice(3, 6).map((item, idx) => (
                    <a
                      key={item.num}
                      href={`#${item.anchorId}`}
                      className={`group block bg-white border-2 border-[#141414] p-4 shadow-[5px_5px_0px_#141414] hover:bg-[#FAF6EE] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#D90429] transition-all ${
                        idx === 1 ? "lg:ml-2" : "lg:-ml-2"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <BrandLogoBadge brandId={item.brandId} size="md" />
                        <span className="px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold">
                          #{item.num} ↘
                        </span>
                      </div>
                      <p className="font-chunky text-sm text-[#141414] leading-snug mb-1 group-hover:text-[#D90429] transition-colors">
                        {item.workDone}
                      </p>
                      <p className="font-handwritten text-lg text-[#3F3F46] leading-tight">
                        {item.hookLine}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Pinned Bio Card */}
            <div className="max-w-3xl mx-auto relative mt-8">
              <MaskingTape className="mx-auto -mb-3 relative z-20" rotate="-rotate-2" />
              <div className="bg-white border-2 border-[#141414] p-6 sm:p-8 shadow-[6px_6px_0px_#141414] relative">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#141414]/15">
                  <span className="font-condensed text-lg sm:text-xl uppercase tracking-wide text-[#D90429]">
                    {PORTFOLIO_DATA.hero.headline}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PORTFOLIO_DATA.hero.badges.map((b) => (
                      <span
                        key={b}
                        className="font-mono-code text-[10px] font-bold px-2 py-0.5 bg-[#FAF6EE] border border-[#141414] text-[#141414]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#27272A] leading-relaxed mb-7">
                  {PORTFOLIO_DATA.hero.subheadline}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="#work-section"
                    className="px-6 py-3 bg-[#FF5C00] text-white font-chunky text-base border-2 border-[#141414] shadow-[4px_4px_0px_#141414] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#141414] transition-all inline-flex items-center gap-2"
                  >
                    <span>Explore 6 Case Studies</span>
                    <ArrowDownRight className="w-5 h-5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      const next = !xrayMode;
                      setXrayMode(next);
                      showToast(
                        next
                          ? "Red-Pen X-Ray ON: Scroll down to inspect copy psychology!"
                          : "Red-Pen X-Ray OFF."
                      );
                    }}
                    className={`px-5 py-3 font-chunky text-base border-2 border-[#141414] shadow-[4px_4px_0px_#141414] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#141414] transition-all inline-flex items-center gap-2 ${
                      xrayMode ? "bg-[#D90429] text-white" : "bg-[#FFD400] text-[#141414]"
                    }`}
                  >
                    <PenTool className="w-4 h-4" />
                    <span>{xrayMode ? "Hide Red-Pen Notes" : "Turn On Red-Pen X-Ray"}</span>
                  </button>

                  <a
                    href="#contact"
                    className="px-5 py-3 bg-[#FAF6EE] text-[#141414] font-mono-code text-xs font-bold border-2 border-[#141414] shadow-[4px_4px_0px_#141414] hover:bg-[#141414] hover:text-[#FFD400] transition-colors"
                  >
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              CREATIVE INTERACTIVE STRIP: INSIDE MY NOTEBOOK (RAW -> FINAL)
          ================================================================== */}
          <section
            id="notebook-lab"
            className="scroll-mt-16 px-5 sm:px-10 md:px-14 py-12 sm:py-16 border-b-2 border-[#141414] bg-[#141414] text-[#FAF6EE]"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#FF1E6E] text-white font-mono-code text-xs font-bold uppercase tracking-wider mb-2">
                  INTERACTIVE // PROOF OF HUMAN THINKING
                </span>
                <h2 className="font-condensed text-3xl sm:text-5xl uppercase tracking-wide text-[#FFD400]">
                  Inside My Notebook: Raw Thought to Final Hook
                </h2>
              </div>
              <span className="font-mono-code text-xs text-white/75">
                CLICK ANY STICKY NOTE TO FLIP IT ↻
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO_DATA.notebookFlips.map((note, idx) => {
                const isFlipped = !!flippedNotes[note.id];
                return (
                  <button
                    key={note.id}
                    type="button"
                    onClick={() => toggleNoteFlip(note.id)}
                    className={`text-left p-6 border-2 border-[#FAF6EE] transition-all duration-200 relative group cursor-pointer ${
                      idx % 2 === 1 ? "md:rotate-1" : "md:-rotate-1"
                    } hover:rotate-0 hover:-translate-y-1`}
                    style={{
                      backgroundColor: isFlipped ? "#FAF6EE" : note.color,
                      color: isFlipped ? "#141414" : note.textColor,
                      boxShadow: isFlipped
                        ? "6px 6px 0px #FFD400"
                        : "6px 6px 0px rgba(255,255,255,0.25)"
                    }}
                  >
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-current/25 font-mono-code text-[10px] font-bold uppercase">
                      <span>{note.brand}</span>
                      <span className="px-2 py-0.5 bg-[#141414] text-[#FFD400]">
                        {isFlipped ? "FINAL LINE ✓" : "RAW DRAFT ↻"}
                      </span>
                    </div>

                    {!isFlipped ? (
                      <div>
                        <p className="font-handwritten text-2xl sm:text-3xl leading-snug mb-4">
                          “{note.rawNote}”
                        </p>
                        <span className="font-mono-code text-[11px] font-bold underline">
                          Click to see how I sharpened it →
                        </span>
                      </div>
                    ) : (
                      <div>
                        <p className="font-chunky text-xl text-[#141414] leading-snug mb-3">
                          {note.finalLine}
                        </p>
                        <div className="bg-[#FFD400]/35 border-l-4 border-[#D90429] p-2.5 text-xs text-[#141414] leading-relaxed">
                          <strong className="font-mono-code text-[10px] uppercase block text-[#D90429] mb-0.5">
                            WHY IT WORKS:
                          </strong>
                          {note.whyItWorks}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* =================================================================
              SECTION 01: SELECTED CAMPAIGNS & DEEP ANALYSES (ALL 6 PROJECTS)
          ================================================================== */}
          <section
            id="work-section"
            className="scroll-mt-16 px-5 sm:px-10 md:px-14 py-16 sm:py-20 border-b-2 border-[#141414] space-y-14"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-[#2962FF] text-white font-mono-code text-xs font-bold uppercase tracking-wider border border-[#141414] mb-3">
                  SECTION 01 // CAMPAIGNS &amp; DEEP TEARDOWNS
                </span>
                <h2 className="font-condensed text-4xl sm:text-6xl uppercase tracking-tight text-[#141414]">
                  Six Projects. Deep Strategy.
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setXrayMode((v) => !v)}
                className={`self-start sm:self-auto px-4 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] shadow-[3px_3px_0px_#141414] transition-colors inline-flex items-center gap-2 ${
                  xrayMode ? "bg-[#D90429] text-white" : "bg-[#FFD400] text-[#141414]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {xrayMode
                    ? "RED-PEN X-RAY ACTIVE"
                    : "CLICK TO REVEAL RED-PEN NOTES"}
                </span>
              </button>
            </div>

            {/* ---------------------------------------------------------------
                CLASSY BRAND ROSTER & DELIVERABLE DIRECTORY (CLICK TO JUMP)
            ---------------------------------------------------------------- */}
            <div className="bg-white border-2 border-[#141414] p-5 sm:p-7 shadow-[6px_6px_0px_#141414]">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-[#141414]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold uppercase">
                    BRAND ROSTER // 06 CASE STUDIES
                  </span>
                  <span className="font-mono-code text-xs font-bold text-[#52525B] hidden sm:inline">
                    BRANDS, LOGOS &amp; DELIVERABLES AT A GLANCE
                  </span>
                </div>
                <span className="font-mono-code text-[11px] font-bold text-[#D90429]">
                  CLICK ANY BRAND CARD TO JUMP ↓
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.brandIndex.map((item) => (
                  <a
                    key={item.num}
                    href={`#${item.anchorId}`}
                    className="group bg-[#FAF6EE] border-2 border-[#141414] p-4 shadow-[4px_4px_0px_#141414] hover:bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#141414] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono-code text-[10px] font-bold px-2 py-0.5 bg-[#141414] text-[#FFD400]">
                          PROJECT {item.num}
                        </span>
                        <span className="font-mono-code text-[10px] font-bold text-[#52525B] group-hover:text-[#D90429] transition-colors">
                          VIEW ↓
                        </span>
                      </div>

                      <div className="mb-3">
                        <BrandLogoBadge brandId={item.brandId} size="md" />
                      </div>

                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B] mb-1">
                        {item.category}
                      </span>

                      <p className="font-chunky text-sm text-[#141414] leading-snug mb-2">
                        {item.workDone}
                      </p>

                      <p className="text-xs italic text-[#3F3F46] leading-relaxed mb-3 border-l-2 border-[#141414]/30 pl-2">
                        {item.hookLine}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#141414]/15 flex flex-wrap gap-1">
                      {item.deliverables.map((d) => (
                        <span
                          key={d}
                          className="font-mono-code text-[9px] font-bold px-1.5 py-0.5 bg-white border border-[#141414]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------------------
                PROJECT 01: ROYAL ENFIELD CLASSIC 350 SPEC COMMERCIAL
            ---------------------------------------------------------------- */}
            <article
              id="project-01"
              className="scroll-mt-20 bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] relative"
            >
              <MaskingTape className="absolute -top-3 left-8" rotate="-rotate-3" />

              {/* Classy Brand Identity & Scope Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-dashed border-[#141414]/25">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogoBadge brandId="re" size="lg" />
                  <div>
                    <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                      ROLE &amp; DELIVERABLES
                    </span>
                    <span className="font-chunky text-sm sm:text-base text-[#141414]">
                      {p1.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["35s Video Film", "Voiceover Direction", "5-Beat Script"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 bg-[#FAF6EE] border border-[#141414] font-mono-code text-[10px] font-bold uppercase"
                      >
                        ✓ {pill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#141414]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold">
                      {p1.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#FFD400] border border-[#141414] font-mono-code text-xs font-bold">
                      {p1.tag}
                    </span>
                  </div>
                  <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414]">
                    {p1.title}
                  </h3>
                </div>

                {/* Project 1 Mode Switcher */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setP1Tab("script")}
                    className={`px-4 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p1Tab === "script"
                        ? "bg-[#FFD400] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]/50"
                    }`}
                  >
                    01. VIDEO &amp; SCRIPT
                  </button>
                  <button
                    type="button"
                    onClick={() => setP1Tab("analysis")}
                    className={`px-4 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p1Tab === "analysis"
                        ? "bg-[#141414] text-[#FFD400] shadow-[3px_3px_0px_#FF5C00]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#141414]/10"
                    }`}
                  >
                    02. DEEP STRATEGY TEARDOWN
                  </button>
                </div>
              </div>

              {p1Tab === "script" ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* 9:16 Vertical Video / Storyboard Player */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    {/* Toggle between Live YouTube Film & Interactive Beat Sync */}
                    <div className="inline-flex border-2 border-[#141414] bg-[#FAF6EE] mb-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsPlaying(false);
                          setRePlayerMode("video");
                        }}
                        className={`px-3 py-1.5 font-mono-code text-[11px] font-bold inline-flex items-center gap-1.5 ${
                          rePlayerMode === "video"
                            ? "bg-[#141414] text-[#FFD400]"
                            : "text-[#141414]"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>WATCH FILM</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRePlayerMode("beats")}
                        className={`px-3 py-1.5 font-mono-code text-[11px] font-bold inline-flex items-center gap-1.5 ${
                          rePlayerMode === "beats"
                            ? "bg-[#141414] text-[#FFD400]"
                            : "text-[#141414]"
                        }`}
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>BEAT SYNC</span>
                      </button>
                    </div>

                    <div className="w-full max-w-[320px] aspect-[9/16] bg-[#141414] border-4 border-[#141414] shadow-[6px_6px_0px_#FF5C00] relative overflow-hidden flex flex-col justify-between">
                      {rePlayerMode === "video" && resolvedVideo ? (
                        resolvedVideo.type === "video" ? (
                          <video
                            src={resolvedVideo.src}
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <iframe
                            src={resolvedVideo.src}
                            title={p1.title}
                            className="w-full h-full object-cover"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        )
                      ) : (
                        <>
                          <div className="px-4 py-3 bg-[#1F1F23] border-b border-white/15 flex items-center justify-between font-mono-code text-[11px] text-white">
                            <span className="flex items-center gap-1.5 text-[#FFD400]">
                              <span
                                className={`w-2 h-2 rounded-full bg-[#FF1E6E] ${
                                  isPlaying ? "animate-ping" : ""
                                }`}
                              />
                              9:16 SPEC CUT
                            </span>
                            <span>{formatTime(currentTime)} / 00:35</span>
                          </div>

                          <div className="px-6 my-auto text-center">
                            <span className="inline-block px-2.5 py-1 bg-[#FF5C00] text-white font-mono-code text-[10px] font-bold uppercase mb-3">
                              {activeBeat.cue}
                            </span>
                            <p className="font-handwritten text-3xl text-[#FFD400] leading-snug mb-5 min-h-[112px] flex items-center justify-center">
                              “{activeBeat.line}”
                            </p>
                            <div className="bg-white/10 border border-white/15 p-3 text-left">
                              <span className="block font-mono-code text-[10px] text-[#00E676] uppercase mb-1">
                                DIRECTOR'S FRAME NOTE:
                              </span>
                              <p className="text-xs text-white/85 leading-relaxed">
                                {activeBeat.visual}
                              </p>
                            </div>
                          </div>

                          <div className="p-4 bg-[#1F1F23] border-t border-white/15">
                            <input
                              type="range"
                              min={0}
                              max={p1.duration}
                              step={0.1}
                              value={currentTime}
                              onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                              className="w-full accent-[#FFD400] h-1.5 bg-white/20 cursor-pointer mb-3"
                              aria-label="Scrub 35-second commercial timeline"
                            />

                            <div className="flex items-center justify-between gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  if (currentTime >= p1.duration) setCurrentTime(0);
                                  setIsPlaying((p) => !p);
                                }}
                                className="px-3.5 py-2 bg-[#FFD400] text-[#141414] font-mono-code text-xs font-bold flex items-center gap-1.5 hover:bg-[#FF5C00] hover:text-white transition-colors"
                              >
                                {isPlaying ? (
                                  <>
                                    <Pause className="w-3.5 h-3.5" />
                                    <span>PAUSE</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3.5 h-3.5" />
                                    <span>PREVIEW 35S BEAT</span>
                                  </>
                                )}
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setIsPlaying(false);
                                  setCurrentTime(0);
                                }}
                                className="p-2 bg-white/10 text-white hover:bg-white/20 transition-colors"
                                title="Reset Timeline"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-4 text-center">
                      <a
                        href={links.royalEnfieldVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold text-[#2962FF] underline hover:text-[#FF5C00]"
                      >
                        <span>Watch on YouTube Shorts</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Ruled Notepad Full Written Script */}
                  <div className="lg:col-span-7 ruled-notepad border-2 border-[#141414] p-6 sm:p-8 shadow-[5px_5px_0px_#141414]">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b-2 border-[#141414]">
                      <div className="flex items-center gap-2">
                        <Film className="w-4 h-4 text-[#D90429]" />
                        <span className="font-mono-code text-xs font-bold uppercase tracking-wider">
                          VOICEOVER SCRIPT // CLICK ANY BEAT TO SYNC
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          copyText(p1.fullScript, "Royal Enfield script copied!")
                        }
                        className="px-3 py-1 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#FF5C00] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY SCRIPT</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {p1.beats.map((beat) => {
                        const isCurrent = activeBeat.id === beat.id;
                        return (
                          <div
                            key={beat.id}
                            onClick={() => {
                              setRePlayerMode("beats");
                              setCurrentTime(beat.start);
                              setIsPlaying(true);
                            }}
                            className={`p-3 border-l-4 transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-[#FFD400]/35 border-[#D90429]"
                                : "border-[#141414]/25 hover:bg-[#FAF6EE] hover:border-[#2962FF]"
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono-code text-[11px] font-bold text-[#52525B] mb-1">
                              <span className="px-1.5 py-0.5 bg-[#141414] text-[#FFD400]">
                                {beat.timestamp}
                              </span>
                              <span>{beat.cue}</span>
                            </div>
                            <p className="text-base sm:text-lg font-medium text-[#141414] leading-relaxed">
                              “{beat.line}”
                            </p>

                            {/* Red-Pen X-Ray Annotation */}
                            {xrayMode && (
                              <div className="mt-2 inline-block bg-[#D90429] text-white font-mono-code text-[11px] font-bold px-2.5 py-1 shadow-[2px_2px_0px_#141414]">
                                ✎ {beat.xrayNote}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                /* Project 1 Deep Strategy Teardown */
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {p1.deepAnalysis.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-[#FAF6EE] border-2 border-[#141414] p-4"
                      >
                        <span className="block font-mono-code text-[10px] font-bold text-[#52525B] uppercase">
                          {m.label}
                        </span>
                        <span className="font-chunky text-xl text-[#141414]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#FFD400]">
                      <span className="inline-block px-2 py-0.5 bg-[#FFD400] border border-[#141414] font-mono-code text-[10px] font-bold mb-2">
                        01. CULTURAL TENSION
                      </span>
                      <p className="text-sm text-[#27272A] leading-relaxed">
                        {p1.deepAnalysis.coreTension}
                      </p>
                    </div>
                    <div className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#FF5C00]">
                      <span className="inline-block px-2 py-0.5 bg-[#FF5C00] text-white border border-[#141414] font-mono-code text-[10px] font-bold mb-2">
                        02. CADENCE &amp; RHYTHM
                      </span>
                      <p className="text-sm text-[#27272A] leading-relaxed">
                        {p1.deepAnalysis.cadenceBreakdown}
                      </p>
                    </div>
                    <div className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#2962FF]">
                      <span className="inline-block px-2 py-0.5 bg-[#2962FF] text-white border border-[#141414] font-mono-code text-[10px] font-bold mb-2">
                        03. AUDIO-VISUAL CONTRAST
                      </span>
                      <p className="text-sm text-[#27272A] leading-relaxed">
                        {p1.deepAnalysis.audioVisualSync}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* ---------------------------------------------------------------
                PROJECT 02: COSMIX WELLNESS, CONTENT AUDIT + CAROUSEL + REEL
            ---------------------------------------------------------------- */}
            <article
              id="project-02"
              className="scroll-mt-20 bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] relative"
            >
              <MaskingTape className="absolute -top-3 right-10" rotate="rotate-2" />

              {/* Classy Brand Identity & Scope Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-dashed border-[#141414]/25">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogoBadge brandId="cosmix" size="lg" />
                  <div>
                    <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                      ROLE &amp; DELIVERABLES
                    </span>
                    <span className="font-chunky text-sm sm:text-base text-[#141414]">
                      {p2.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["4-Slide IG Carousel", "30s Reel Script", "4-Step Funnel Audit"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 bg-[#FAF6EE] border border-[#141414] font-mono-code text-[10px] font-bold uppercase"
                      >
                        ✓ {pill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#141414]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold">
                      {p2.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#00B84D] text-white border border-[#141414] font-mono-code text-xs font-bold">
                      {p2.tag}
                    </span>
                  </div>
                  <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414]">
                    {p2.title}
                  </h3>
                </div>

                {/* Deliverable Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setP2View("carousel")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p2View === "carousel"
                        ? "bg-[#FFD400] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]/50"
                    }`}
                  >
                    01. 4-SLIDE CAROUSEL
                  </button>
                  <button
                    type="button"
                    onClick={() => setP2View("reel")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p2View === "reel"
                        ? "bg-[#FF5C00] text-white shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FF5C00]/20"
                    }`}
                  >
                    02. 30S REEL SCRIPT
                  </button>
                  <button
                    type="button"
                    onClick={() => setP2View("audit")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p2View === "audit"
                        ? "bg-[#141414] text-[#FFD400] shadow-[3px_3px_0px_#00B84D]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#141414]/10"
                    }`}
                  >
                    03. DEEP AUDIT &amp; FUNNEL
                  </button>
                </div>
              </div>

              {p2View === "carousel" && (
                <div>
                  {/* Grid vs Interactive Phone Swipe Toggle */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <p className="text-sm text-[#3F3F46] max-w-xl">
                      Written and art-directed to convert vegetarian lifters without sounding like generic gym-bro supplement hype.
                    </p>
                    <div className="inline-flex border-2 border-[#141414] bg-[#FAF6EE]">
                      <button
                        type="button"
                        onClick={() => setCarouselMode("grid")}
                        className={`px-3 py-1.5 font-mono-code text-[11px] font-bold ${
                          carouselMode === "grid"
                            ? "bg-[#141414] text-[#FFD400]"
                            : "text-[#141414]"
                        }`}
                      >
                        4-UP GRID
                      </button>
                      <button
                        type="button"
                        onClick={() => setCarouselMode("phone")}
                        className={`px-3 py-1.5 font-mono-code text-[11px] font-bold ${
                          carouselMode === "phone"
                            ? "bg-[#141414] text-[#FFD400]"
                            : "text-[#141414]"
                        }`}
                      >
                        INTERACTIVE SWIPE
                      </button>
                    </div>
                  </div>

                  {carouselMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {p2.carouselSlides.map((slide) => (
                        <div key={slide.num} className="flex flex-col gap-2">
                          <div
                            className={`aspect-[4/5] p-5 border-2 border-[#141414] shadow-[4px_4px_0px_#141414] flex flex-col justify-between ${
                              slide.dark
                                ? "bg-[#1D3528] text-[#F6F3EC]"
                                : "bg-[#F6F3EC] text-[#1A1A1A]"
                            }`}
                          >
                            <span className="font-mono-code text-[9px] font-bold tracking-widest uppercase text-[#C86D51]">
                              {slide.tag}
                            </span>

                            <div className="my-auto py-3">
                              <h4 className="font-chunky text-xl leading-snug mb-3">
                                {slide.headline}
                              </h4>
                              <div className="w-8 h-0.5 bg-[#C86D51] mb-3" />
                              <p
                                className={`text-xs leading-relaxed ${
                                  slide.dark ? "text-[#F6F3EC]/90" : "text-[#27272A]"
                                }`}
                              >
                                {slide.body}
                              </p>
                            </div>

                            <div className="pt-2.5 border-t border-[#C86D51]/50 flex items-center justify-between font-mono-code text-[10px] font-bold">
                              <span>{slide.footer}</span>
                              <span className="text-[#C86D51]">{slide.num}</span>
                            </div>
                          </div>

                          {xrayMode && (
                            <div className="bg-[#D90429] text-white font-mono-code text-[10px] font-bold p-2 border border-[#141414]">
                              ✎ {slide.xrayNote}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Interactive Single-Card Instagram Swipe Simulator */
                    <div className="max-w-sm mx-auto">
                      <div className="bg-[#141414] p-3 border-4 border-[#141414] shadow-[8px_8px_0px_#00B84D]">
                        <div className="flex items-center justify-between text-white font-mono-code text-[10px] px-1 pb-2.5">
                          <span>@cosmixwellness • SPEC</span>
                          <span>SLIDE {activeSlideIdx + 1} OF 4</span>
                        </div>

                        {(() => {
                          const slide = p2.carouselSlides[activeSlideIdx];
                          return (
                            <div
                              className={`aspect-[4/5] p-6 flex flex-col justify-between transition-all ${
                                slide.dark
                                  ? "bg-[#1D3528] text-[#F6F3EC]"
                                  : "bg-[#F6F3EC] text-[#1A1A1A]"
                              }`}
                            >
                              <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[#C86D51]">
                                {slide.tag}
                              </span>
                              <div className="my-auto py-4">
                                <h4 className="font-chunky text-2xl leading-snug mb-3">
                                  {slide.headline}
                                </h4>
                                <div className="w-10 h-0.5 bg-[#C86D51] mb-3" />
                                <p
                                  className={`text-sm leading-relaxed ${
                                    slide.dark ? "text-[#F6F3EC]/90" : "text-[#27272A]"
                                  }`}
                                >
                                  {slide.body}
                                </p>
                              </div>
                              <div className="pt-3 border-t border-[#C86D51]/50 flex items-center justify-between font-mono-code text-xs font-bold">
                                <span>{slide.footer}</span>
                                <span className="text-[#C86D51]">{slide.num}</span>
                              </div>
                            </div>
                          );
                        })()}

                        <div className="flex items-center justify-between pt-3">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveSlideIdx((i) => (i === 0 ? 3 : i - 1))
                            }
                            className="px-3 py-1.5 bg-[#FAF6EE] text-[#141414] font-mono-code text-xs font-bold inline-flex items-center gap-1 hover:bg-[#FFD400]"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>PREV</span>
                          </button>
                          <div className="flex gap-1.5">
                            {[0, 1, 2, 3].map((dot) => (
                              <button
                                key={dot}
                                type="button"
                                onClick={() => setActiveSlideIdx(dot)}
                                aria-label={`Go to slide ${dot + 1}`}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                  activeSlideIdx === dot
                                    ? "bg-[#FFD400] scale-125"
                                    : "bg-white/30"
                                }`}
                              />
                            ))}
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveSlideIdx((i) => (i === 3 ? 0 : i + 1))
                            }
                            className="px-3 py-1.5 bg-[#FFD400] text-[#141414] font-mono-code text-xs font-bold inline-flex items-center gap-1 hover:bg-[#FF5C00] hover:text-white"
                          >
                            <span>NEXT</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {p2View === "reel" && (
                <div className="ruled-notepad border-2 border-[#141414] p-6 sm:p-8 shadow-[5px_5px_0px_#141414]">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b-2 border-[#141414]">
                    <span className="font-chunky text-xl text-[#141414]">
                      {p2.reelScript.title}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          p2.reelScript.beats.map((b) => `${b.label}: ${b.vo}`).join("\n\n"),
                          "Cosmix Reel script copied!"
                        )
                      }
                      className="px-3 py-1 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#FF5C00] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY REEL SCRIPT</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    {p2.reelScript.beats.map((b) => (
                      <div
                        key={b.time}
                        className="bg-white border-2 border-[#141414] p-4"
                      >
                        <div className="flex items-center justify-between font-mono-code text-[11px] font-bold mb-2">
                          <span className="px-2 py-0.5 bg-[#FFD400] border border-[#141414]">
                            {b.time}
                          </span>
                          <span className="text-[#D90429]">{b.label}</span>
                        </div>
                        <p className="text-xs text-[#52525B] italic mb-2">
                          Visual: {b.visual}
                        </p>
                        <p className="text-sm font-semibold text-[#141414] leading-relaxed">
                          {b.vo}
                        </p>
                        {xrayMode && (
                          <div className="mt-2 bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2 py-1">
                            ✎ {b.xrayNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#FFD400]/30 border-l-4 border-[#141414] px-4 py-2.5 font-mono-code text-xs text-[#141414]">
                    {p2.deepAudit.complianceNote}
                  </div>
                </div>
              )}

              {p2View === "audit" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#FAF6EE] border-2 border-[#141414] p-5">
                      <span className="block font-mono-code text-xs font-bold text-[#00B84D] uppercase mb-1.5">
                        WHAT COSMIX ALREADY NAILS
                      </span>
                      <p className="text-sm text-[#27272A] leading-relaxed">
                        {p2.deepAudit.whatWorks}
                      </p>
                    </div>
                    <div className="bg-[#FAF6EE] border-2 border-[#141414] p-5">
                      <span className="block font-mono-code text-xs font-bold text-[#D90429] uppercase mb-1.5">
                        THE UNTAPPED CONVERSION GAP
                      </span>
                      <p className="text-sm text-[#27272A] leading-relaxed">
                        {p2.deepAudit.theGap}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="block font-mono-code text-xs font-bold uppercase mb-3">
                      4-STEP PERSUASION FUNNEL ARCHITECTURE:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {p2.deepAudit.funnelLogic.map((step) => (
                        <div
                          key={step.step}
                          className="bg-white border-2 border-[#141414] p-4 shadow-[4px_4px_0px_#141414]"
                        >
                          <span className="inline-block px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold mb-2">
                            {step.step}
                          </span>
                          <p className="text-xs sm:text-sm text-[#27272A] leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FFD400]/30 border-l-4 border-[#141414] px-4 py-3 font-mono-code text-xs text-[#141414]">
                    {p2.deepAudit.complianceNote}
                  </div>
                </div>
              )}
            </article>

            {/* ---------------------------------------------------------------
                PROJECT 03: BOSE INDIA, BLACK FRIDAY CAMPAIGN REWRITE
            ---------------------------------------------------------------- */}
            <article
              id="project-03"
              className="scroll-mt-20 bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] relative"
            >
              <MaskingTape className="absolute -top-3 left-10" rotate="-rotate-2" />

              {/* Classy Brand Identity & Scope Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-dashed border-[#141414]/25">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogoBadge brandId="bose" size="lg" />
                  <div>
                    <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                      ROLE &amp; DELIVERABLES
                    </span>
                    <span className="font-chunky text-sm sm:text-base text-[#141414]">
                      {p3.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Hero Banner Rewrite", "3 Spec-to-Benefit Blocks", "Launch Email"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 bg-[#FAF6EE] border border-[#141414] font-mono-code text-[10px] font-bold uppercase"
                      >
                        ✓ {pill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#141414]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold">
                      {p3.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#2962FF] text-white border border-[#141414] font-mono-code text-xs font-bold">
                      {p3.tag}
                    </span>
                  </div>
                  <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414]">
                    {p3.title}
                  </h3>
                </div>

                {/* Deliverable Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setP3View("landing")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p3View === "landing"
                        ? "bg-[#2962FF] text-white shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#2962FF]/20"
                    }`}
                  >
                    01. BEFORE vs AFTER HERO
                  </button>
                  <button
                    type="button"
                    onClick={() => setP3View("email")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p3View === "email"
                        ? "bg-[#FFD400] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]/50"
                    }`}
                  >
                    02. BLACK FRIDAY EMAIL
                  </button>
                  <button
                    type="button"
                    onClick={() => setP3View("strategy")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p3View === "strategy"
                        ? "bg-[#141414] text-[#FFD400] shadow-[3px_3px_0px_#2962FF]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#141414]/10"
                    }`}
                  >
                    03. CONVERSION TEARDOWN
                  </button>
                </div>
              </div>

              {p3View === "landing" && (
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono-code text-xs font-bold text-[#52525B]">
                      TARGET PRODUCT: {p3.product.toUpperCase()}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setBoseCompareMode((m) => (m === "split" ? "after" : "split"))
                      }
                      className="px-3 py-1 bg-[#FAF6EE] border-2 border-[#141414] font-mono-code text-[11px] font-bold hover:bg-[#FFD400]"
                    >
                      {boseCompareMode === "split"
                        ? "EXPAND FULL AFTER BANNER →"
                        : "SHOW BEFORE vs AFTER SPLIT"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* BEFORE (Generic Live Banner) */}
                    {boseCompareMode === "split" && (
                      <div className="lg:col-span-5 bg-[#F4F4F5] border-2 border-dashed border-[#141414] p-6 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-[#71717A] text-white font-mono-code text-[10px] font-bold uppercase mb-4">
                            {p3.beforeCopy.eyebrow}
                          </span>
                          <div className="bg-white border border-[#D4D4D8] p-5 mb-4">
                            <p className="font-chunky text-2xl text-[#52525B] mb-1">
                              {p3.beforeCopy.headline}
                            </p>
                            <p className="text-sm text-[#71717A]">
                              {p3.beforeCopy.subtext}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-[#141414]/15 pt-3">
                          <strong className="font-mono-code text-[10px] uppercase text-[#D90429] block mb-1.5">
                            3 REASONS IT UNDERPERFORMS:
                          </strong>
                          <ul className="space-y-1 text-xs text-[#3F3F46]">
                            {p3.beforeCopy.failures.map((f, i) => (
                              <li key={i}>• {f}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* AFTER (Preetpal's Poetic Conversion Rewrite) */}
                    <div
                      className={`${
                        boseCompareMode === "split" ? "lg:col-span-7" : "lg:col-span-12"
                      } bg-[#141414] text-[#FAF6EE] border-2 border-[#141414] p-6 sm:p-8 shadow-[6px_6px_0px_#FFD400] flex flex-col justify-between`}
                    >
                      <div>
                        <span className="inline-block px-2.5 py-0.5 bg-[#FF1E6E] text-white font-mono-code text-[10px] font-bold uppercase mb-4">
                          {p3.afterCopy.eyebrow}
                        </span>
                        <h4 className="font-condensed text-3xl sm:text-5xl uppercase tracking-wide text-[#FFD400] leading-none mb-4">
                          {p3.afterCopy.headline}
                        </h4>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-5 max-w-2xl">
                          {p3.afterCopy.subtext}
                        </p>

                        {xrayMode && (
                          <div className="mb-5 inline-block bg-[#D90429] text-white font-mono-code text-[11px] font-bold px-3 py-1.5 border border-white/30">
                            ✎ {p3.afterCopy.xrayNote}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15">
                        <span className="px-4 py-2 bg-[#FFD400] text-[#141414] font-mono-code text-xs font-bold uppercase">
                          {p3.afterCopy.cta} →
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            copyText(
                              `${p3.afterCopy.headline}\n${p3.afterCopy.subtext}`,
                              "Bose hero rewrite copied!"
                            )
                          }
                          className="font-mono-code text-xs text-white/75 hover:text-[#FFD400] underline"
                        >
                          Copy Hero Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3 Feature-to-Benefit Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {p3.features.map((feat) => (
                      <div
                        key={feat.spec}
                        className="bg-[#FAF6EE] border-2 border-[#141414] p-5"
                      >
                        <span className="inline-block px-2 py-0.5 bg-[#2962FF] text-white font-mono-code text-[10px] font-bold uppercase mb-2.5">
                          {feat.spec}
                        </span>
                        <h5 className="font-chunky text-lg text-[#141414] leading-snug mb-2">
                          “{feat.headline}”
                        </h5>
                        <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                          {feat.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p3View === "email" && (
                <div className="ruled-notepad border-2 border-[#141414] p-6 sm:p-8 shadow-[5px_5px_0px_#141414] max-w-3xl mx-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-[#141414]">
                    <div className="space-y-1 font-mono-code text-xs">
                      <p>
                        <strong className="text-[#D90429]">SUBJECT:</strong>{" "}
                        {p3.launchEmail.subject}
                      </p>
                      <p className="text-[#52525B]">
                        <strong>PREVIEW:</strong> {p3.launchEmail.preview}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          `Subject: ${p3.launchEmail.subject}\n\n${p3.launchEmail.body}`,
                          "Bose launch email copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#2962FF] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </button>
                  </div>

                  <div className="whitespace-pre-line text-base text-[#141414] leading-relaxed mb-6">
                    {p3.launchEmail.body}
                  </div>

                  <div className="inline-block px-5 py-2.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold uppercase">
                    [Shop SoundLink Flex | Black Friday Offer]
                  </div>
                </div>
              )}

              {p3View === "strategy" && (
                <div className="space-y-6">
                  <div className="bg-[#FAF6EE] border-2 border-[#141414] p-5">
                    <span className="block font-mono-code text-xs font-bold text-[#2962FF] uppercase mb-1.5">
                      CORE CONVERSION THESIS
                    </span>
                    <p className="text-base font-medium text-[#141414] leading-relaxed">
                      {p3.deepStrategy.thesis}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {p3.deepStrategy.upgrades.map((u) => (
                      <div
                        key={u.title}
                        className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#2962FF]"
                      >
                        <span className="inline-block px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold mb-2">
                          {u.title}
                        </span>
                        <p className="text-sm text-[#27272A] leading-relaxed">
                          {u.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ---------------------------------------------------------------
                PROJECT 04: PEAKFLO, B2B SAAS & AI REWRITE
            ---------------------------------------------------------------- */}
            <article
              id="project-04"
              className="scroll-mt-20 bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] relative"
            >
              <MaskingTape className="absolute -top-3 right-10" rotate="rotate-2" />

              {/* Classy Brand Identity & Scope Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-dashed border-[#141414]/25">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogoBadge brandId="peakflo" size="lg" />
                  <div>
                    <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                      ROLE &amp; DELIVERABLES
                    </span>
                    <span className="font-chunky text-sm sm:text-base text-[#141414]">
                      {p4.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["SaaS Hero Rewrite", "3 AI Feature Blocks", "Outbound Cold Email"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 bg-[#FAF6EE] border border-[#141414] font-mono-code text-[10px] font-bold uppercase"
                      >
                        ✓ {pill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#141414]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold">
                      {p4.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#00B84D] text-[#141414] border border-[#141414] font-mono-code text-xs font-bold">
                      {p4.tag}
                    </span>
                  </div>
                  <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414]">
                    {p4.title}
                  </h3>
                </div>

                {/* Deliverable Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setP4View("landing")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p4View === "landing"
                        ? "bg-[#00B84D] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#00B84D]/25"
                    }`}
                  >
                    01. BEFORE vs AFTER HERO
                  </button>
                  <button
                    type="button"
                    onClick={() => setP4View("email")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p4View === "email"
                        ? "bg-[#FFD400] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]/50"
                    }`}
                  >
                    02. OUTBOUND COLD EMAIL
                  </button>
                  <button
                    type="button"
                    onClick={() => setP4View("strategy")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p4View === "strategy"
                        ? "bg-[#141414] text-[#FFD400] shadow-[3px_3px_0px_#00B84D]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#141414]/10"
                    }`}
                  >
                    03. B2B SAAS TEARDOWN
                  </button>
                </div>
              </div>

              {p4View === "landing" && (
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono-code text-xs font-bold text-[#52525B]">
                      TARGET PRODUCT: {p4.product.toUpperCase()}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setPeakfloCompareMode((m) => (m === "split" ? "after" : "split"))
                      }
                      className="px-3 py-1 bg-[#FAF6EE] border-2 border-[#141414] font-mono-code text-[11px] font-bold hover:bg-[#FFD400]"
                    >
                      {peakfloCompareMode === "split"
                        ? "EXPAND FULL AFTER BANNER →"
                        : "SHOW BEFORE vs AFTER SPLIT"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* BEFORE (What was live on peakflo.co) */}
                    {peakfloCompareMode === "split" && (
                      <div className="lg:col-span-5 bg-[#F4F4F5] border-2 border-dashed border-[#141414] p-6 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-[#71717A] text-white font-mono-code text-[10px] font-bold uppercase mb-4">
                            {p4.beforeCopy.eyebrow}
                          </span>
                          <div className="bg-white border border-[#D4D4D8] p-5 mb-4">
                            <p className="font-chunky text-2xl text-[#52525B] mb-2 leading-snug">
                              {p4.beforeCopy.headline}
                            </p>
                            <p className="text-sm text-[#71717A] leading-relaxed">
                              {p4.beforeCopy.subtext}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-[#141414]/15 pt-3">
                          <strong className="font-mono-code text-[10px] uppercase text-[#D90429] block mb-1.5">
                            3 REASONS IT UNDERPERFORMS:
                          </strong>
                          <ul className="space-y-1 text-xs text-[#3F3F46]">
                            {p4.beforeCopy.failures.map((f, i) => (
                              <li key={i}>• {f}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* AFTER (Preetpal's Human-Relief Rewrite) */}
                    <div
                      className={`${
                        peakfloCompareMode === "split" ? "lg:col-span-7" : "lg:col-span-12"
                      } bg-[#141414] text-[#FAF6EE] border-2 border-[#141414] p-6 sm:p-8 shadow-[6px_6px_0px_#00B84D] flex flex-col justify-between`}
                    >
                      <div>
                        <span className="inline-block px-2.5 py-0.5 bg-[#00B84D] text-[#141414] font-mono-code text-[10px] font-bold uppercase mb-4">
                          {p4.afterCopy.eyebrow}
                        </span>
                        <h4 className="font-condensed text-3xl sm:text-5xl uppercase tracking-wide text-[#FFD400] leading-none mb-4">
                          {p4.afterCopy.headline}
                        </h4>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-5 max-w-2xl">
                          {p4.afterCopy.subtext}
                        </p>

                        {xrayMode && (
                          <div className="mb-5 inline-block bg-[#D90429] text-white font-mono-code text-[11px] font-bold px-3 py-1.5 border border-white/30">
                            ✎ {p4.afterCopy.xrayNote}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15">
                        <span className="px-4 py-2 bg-[#FFD400] text-[#141414] font-mono-code text-xs font-bold uppercase">
                          {p4.afterCopy.cta} →
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            copyText(
                              `${p4.afterCopy.headline}\n${p4.afterCopy.subtext}`,
                              "Peakflo hero rewrite copied!"
                            )
                          }
                          className="font-mono-code text-xs text-white/75 hover:text-[#FFD400] underline"
                        >
                          Copy Hero Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3 Tech-to-Human Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {p4.features.map((feat) => (
                      <div
                        key={feat.spec}
                        className="bg-[#FAF6EE] border-2 border-[#141414] p-5"
                      >
                        <span className="inline-block px-2 py-0.5 bg-[#00B84D] text-[#141414] border border-[#141414] font-mono-code text-[10px] font-bold uppercase mb-2.5">
                          {feat.spec}
                        </span>
                        <h5 className="font-chunky text-lg text-[#141414] leading-snug mb-2">
                          “{feat.headline}”
                        </h5>
                        <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                          {feat.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p4View === "email" && (
                <div className="ruled-notepad border-2 border-[#141414] p-6 sm:p-8 shadow-[5px_5px_0px_#141414] max-w-3xl mx-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-[#141414]">
                    <div className="space-y-1 font-mono-code text-xs">
                      <p>
                        <strong className="text-[#D90429]">SUBJECT:</strong>{" "}
                        {p4.outboundEmail.subject}
                      </p>
                      <p className="text-[#52525B]">
                        <strong>PREVIEW:</strong> {p4.outboundEmail.preview}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          `Subject: ${p4.outboundEmail.subject}\n\n${p4.outboundEmail.body}`,
                          "Peakflo outbound cold email copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#00B84D] hover:text-[#141414] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </button>
                  </div>

                  <div className="whitespace-pre-line text-base text-[#141414] leading-relaxed mb-6">
                    {p4.outboundEmail.body}
                  </div>

                  <div className="inline-block px-5 py-2.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold uppercase">
                    {p4.outboundEmail.ctaBadge}
                  </div>
                </div>
              )}

              {p4View === "strategy" && (
                <div className="space-y-6">
                  <div className="bg-[#FAF6EE] border-2 border-[#141414] p-5">
                    <span className="block font-mono-code text-xs font-bold text-[#00B84D] uppercase mb-1.5">
                      CORE B2B SAAS THESIS
                    </span>
                    <p className="text-base font-medium text-[#141414] leading-relaxed">
                      {p4.deepStrategy.thesis}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {p4.deepStrategy.upgrades.map((u) => (
                      <div
                        key={u.title}
                        className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#00B84D]"
                      >
                        <span className="inline-block px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold mb-2">
                          {u.title}
                        </span>
                        <p className="text-sm text-[#27272A] leading-relaxed">
                          {u.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ---------------------------------------------------------------
                PROJECT 05: MOKOBARA BLISS SHOULDER BAG (D2C CAMPAIGN & REELS)
            ---------------------------------------------------------------- */}
            <article
              id="project-05"
              className="scroll-mt-20 bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] relative"
            >
              <MaskingTape className="absolute -top-3 left-10" rotate="-rotate-2" />

              {/* Classy Brand Identity & Scope Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-dashed border-[#141414]/25">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogoBadge brandId="mokobara" size="lg" />
                  <div>
                    <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                      ROLE &amp; DELIVERABLES
                    </span>
                    <span className="font-chunky text-sm sm:text-base text-[#141414]">
                      {p5.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["PDP Hero Rewrite", "2 POV Reel Scripts", "3 FAQ Microcopy Blocks"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 bg-[#FAF6EE] border border-[#141414] font-mono-code text-[10px] font-bold uppercase"
                      >
                        ✓ {pill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#141414]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold">
                      {p5.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#FF1E6E] text-white border border-[#141414] font-mono-code text-xs font-bold">
                      {p5.tag}
                    </span>
                  </div>
                  <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414]">
                    {p5.title}
                  </h3>
                </div>

                {/* Deliverable Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setP5View("hero")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p5View === "hero"
                        ? "bg-[#FFD400] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]/50"
                    }`}
                  >
                    01. BRIEF &amp; PDP HERO REWRITE
                  </button>
                  <button
                    type="button"
                    onClick={() => setP5View("reels")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p5View === "reels"
                        ? "bg-[#FF1E6E] text-white shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FF1E6E]/20"
                    }`}
                  >
                    02. “THE BAG SPEAKS” REELS
                  </button>
                  <button
                    type="button"
                    onClick={() => setP5View("microcopy")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p5View === "microcopy"
                        ? "bg-[#141414] text-[#FFD400] shadow-[3px_3px_0px_#FF1E6E]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#141414]/10"
                    }`}
                  >
                    03. OBJECTION MICROCOPY
                  </button>
                </div>
              </div>

              {/* 1. THE BRIEF & INSIGHT BANNER (Always visible at top of Project 05) */}
              <div className="bg-[#FAF6EE] border-2 border-[#141414] p-5 mb-8 shadow-[4px_4px_0px_#141414]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-4 space-y-2 md:border-r-2 md:border-dashed md:border-[#141414]/25 md:pr-4">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                        BRAND
                      </span>
                      <span className="font-chunky text-base text-[#141414]">
                        {p5.brand}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                        PRODUCT
                      </span>
                      <span className="font-chunky text-base text-[#D90429]">
                        {p5.product}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <span className="inline-block px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold uppercase mb-1.5">
                      01. THE BRIEF &amp; CORE INSIGHT
                    </span>
                    <p className="text-sm sm:text-base text-[#141414] leading-relaxed">
                      {p5.coreInsight}
                    </p>
                  </div>
                </div>
              </div>

              {p5View === "hero" && (
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono-code text-xs font-bold text-[#52525B]">
                      02. PRODUCT PAGE HERO REWRITE (BEFORE VS. AFTER)
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setMokobaraCompareMode((m) => (m === "split" ? "after" : "split"))
                      }
                      className="px-3 py-1 bg-[#FAF6EE] border-2 border-[#141414] font-mono-code text-[11px] font-bold hover:bg-[#FFD400]"
                    >
                      {mokobaraCompareMode === "split"
                        ? "EXPAND FULL AFTER BANNER →"
                        : "SHOW BEFORE vs AFTER SPLIT"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* BEFORE (Live Copy) */}
                    {mokobaraCompareMode === "split" && (
                      <div className="lg:col-span-5 bg-[#F4F4F5] border-2 border-dashed border-[#141414] p-6 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-[#71717A] text-white font-mono-code text-[10px] font-bold uppercase mb-4">
                            {p5.beforeCopy.eyebrow}
                          </span>
                          <div className="bg-white border border-[#D4D4D8] p-5 mb-4">
                            <p className="font-chunky text-2xl text-[#52525B] mb-2 leading-snug">
                              {p5.beforeCopy.headline}
                            </p>
                            <p className="text-sm text-[#71717A] leading-relaxed">
                              {p5.beforeCopy.subtext}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-[#141414]/15 pt-3">
                          <strong className="font-mono-code text-[10px] uppercase text-[#D90429] block mb-1.5">
                            WHY I SHARPENED IT:
                          </strong>
                          <ul className="space-y-1 text-xs text-[#3F3F46]">
                            {p5.beforeCopy.failures.map((f, i) => (
                              <li key={i}>• {f}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* AFTER (My Rewrite) */}
                    <div
                      className={`${
                        mokobaraCompareMode === "split" ? "lg:col-span-7" : "lg:col-span-12"
                      } bg-[#141414] text-[#FAF6EE] border-2 border-[#141414] p-6 sm:p-8 shadow-[6px_6px_0px_#FF1E6E] flex flex-col justify-between`}
                    >
                      <div>
                        <span className="inline-block px-2.5 py-0.5 bg-[#FF1E6E] text-white font-mono-code text-[10px] font-bold uppercase mb-4">
                          {p5.afterCopy.eyebrow}
                        </span>
                        <h4 className="font-condensed text-3xl sm:text-5xl uppercase tracking-wide text-[#FFD400] leading-none mb-4">
                          {p5.afterCopy.headline}
                        </h4>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-5 max-w-2xl">
                          {p5.afterCopy.subtext}
                        </p>

                        {xrayMode && (
                          <div className="mb-5 inline-block bg-[#D90429] text-white font-mono-code text-[11px] font-bold px-3 py-1.5 border border-white/30">
                            ✎ {p5.afterCopy.xrayNote}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15">
                        <span className="px-4 py-2 bg-[#FFD400] text-[#141414] font-mono-code text-xs font-bold uppercase">
                          {p5.afterCopy.cta} →
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            copyText(
                              `${p5.afterCopy.headline}\n${p5.afterCopy.subtext}\nCTA: ${p5.afterCopy.cta} →`,
                              "Mokobara Bliss hero rewrite copied!"
                            )
                          }
                          className="font-mono-code text-xs text-white/75 hover:text-[#FFD400] underline"
                        >
                          Copy Hero Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Preview Strip of Objection-Busting Microcopy */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono-code text-xs font-bold uppercase text-[#141414]">
                        OBJECTION-BUSTING PDP MICROCOPY (FAQ &amp; TOOLTIPS):
                      </span>
                      <button
                        type="button"
                        onClick={() => setP5View("reels")}
                        className="font-mono-code text-xs font-bold text-[#2962FF] underline hover:text-[#FF1E6E]"
                      >
                        Read both “The Bag Speaks” Reel Scripts →
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {p5.microcopy.map((item) => (
                        <div
                          key={item.label}
                          className="bg-[#FAF6EE] border-2 border-[#141414] p-5 flex flex-col justify-between"
                        >
                          <div>
                            <span className="inline-block px-2 py-0.5 bg-[#FF1E6E] text-white border border-[#141414] font-mono-code text-[10px] font-bold uppercase mb-3">
                              {item.label}
                            </span>
                            <p className="text-sm font-medium text-[#141414] leading-relaxed">
                              {item.copy}
                            </p>
                          </div>
                          {xrayMode && (
                            <div className="mt-3 bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2 py-1">
                              ✎ {item.xrayNote}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {p5View === "reels" && (
                <div className="ruled-notepad border-2 border-[#141414] p-6 sm:p-8 shadow-[5px_5px_0px_#141414]">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 border-b-2 border-[#141414]">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#D90429]">
                        03. SHORT-FORM REEL SCRIPTS
                      </span>
                      <span className="font-chunky text-xl sm:text-2xl text-[#141414]">
                        First-Person “The Bag Speaks” POV (2 Variations)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          p5.reelScripts
                            .map(
                              (s) =>
                                `${s.badge}\nVisual: ${s.visual}\n` +
                                s.lines.map((l) => `${l.speaker}: ${l.text}`).join("\n")
                            )
                            .join("\n\n"),
                          "Both Mokobara Reel scripts copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#FF1E6E] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY BOTH REEL SCRIPTS</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {p5.reelScripts.map((script) => (
                      <div
                        key={script.id}
                        className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#141414] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="px-2.5 py-0.5 bg-[#FFD400] border border-[#141414] font-mono-code text-[11px] font-bold">
                              {script.badge}
                            </span>
                            <span className="font-mono-code text-[10px] font-bold text-[#52525B]">
                              9:16 REEL / SHORT
                            </span>
                          </div>

                          <h4 className="font-chunky text-lg text-[#141414] mb-3">
                            {script.title}
                          </h4>

                          <div className="bg-[#FAF6EE] border-l-4 border-[#141414] p-3 mb-4">
                            <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B] mb-0.5">
                              VISUAL DIRECTION:
                            </span>
                            <p className="text-xs text-[#27272A] leading-relaxed">
                              {script.visual}
                            </p>
                          </div>

                          <div className="space-y-3 mb-4">
                            {script.lines.map((line, lIdx) => (
                              <div
                                key={lIdx}
                                className="p-3 bg-[#FFFDF9] border border-[#141414]/20"
                              >
                                <span className="block font-mono-code text-[10px] font-bold uppercase text-[#D90429] mb-1">
                                  {line.speaker}:
                                </span>
                                <p className="text-sm sm:text-base font-semibold text-[#141414] leading-relaxed">
                                  {line.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {xrayMode && (
                          <div className="mt-2 bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2.5 py-1.5">
                            ✎ {script.xrayNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p5View === "microcopy" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#FF1E6E]">
                        04. OBJECTION-BUSTING MICROCOPY (PDP FAQ / TOOLTIPS)
                      </span>
                      <h4 className="font-chunky text-xl sm:text-2xl text-[#141414]">
                        Turning Hesitations Into High-Attitude Brand Voice
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          p5.microcopy
                            .map((m) => `${m.label}: ${m.copy}`)
                            .join("\n\n"),
                          "Mokobara FAQ microcopy copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#FF1E6E] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ALL MICROCOPY</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {p5.microcopy.map((item) => (
                      <div
                        key={item.label}
                        className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#FF1E6E] flex flex-col justify-between"
                      >
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold mb-3">
                            {item.label}
                          </span>
                          <p className="text-base font-medium text-[#141414] leading-relaxed">
                            {item.copy}
                          </p>
                        </div>
                        {xrayMode && (
                          <div className="mt-4 bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2.5 py-1.5">
                            ✎ {item.xrayNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ---------------------------------------------------------------
                PROJECT 06: ZEPTO BILINGUAL PUSH & WHATSAPP RETENTION PACK
            ---------------------------------------------------------------- */}
            <article
              id="project-06"
              className="scroll-mt-20 bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] relative"
            >
              <MaskingTape className="absolute -top-3 right-10" rotate="rotate-2" />

              {/* Classy Brand Identity & Scope Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-dashed border-[#141414]/25">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogoBadge brandId="zepto" size="lg" />
                  <div>
                    <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                      ROLE &amp; DELIVERABLES
                    </span>
                    <span className="font-chunky text-sm sm:text-base text-[#141414]">
                      {p6.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "3 Push Notifications",
                    "2 WhatsApp Cart Nudges",
                    "2 Delay Apology SMS"
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 bg-[#FAF6EE] border border-[#141414] font-mono-code text-[10px] font-bold uppercase"
                    >
                      ✓ {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#141414]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-xs font-bold">
                      {p6.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#3B0764] text-[#FFD400] border border-[#141414] font-mono-code text-xs font-bold">
                      {p6.tag}
                    </span>
                  </div>
                  <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414]">
                    {p6.title}
                  </h3>
                </div>

                {/* Deliverable Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setP6View("push")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p6View === "push"
                        ? "bg-[#FFD400] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]/50"
                    }`}
                  >
                    01. PUSH NOTIFICATIONS (3)
                  </button>
                  <button
                    type="button"
                    onClick={() => setP6View("whatsapp")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p6View === "whatsapp"
                        ? "bg-[#00B84D] text-[#141414] shadow-[3px_3px_0px_#141414]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#00B84D]/25"
                    }`}
                  >
                    02. WHATSAPP NUDGES (2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setP6View("delays")}
                    className={`px-3.5 py-2 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                      p6View === "delays"
                        ? "bg-[#141414] text-[#FFD400] shadow-[3px_3px_0px_#FF1E6E]"
                        : "bg-[#FAF6EE] text-[#141414] hover:bg-[#141414]/10"
                    }`}
                  >
                    03. DELAY APOLOGIES (2)
                  </button>
                </div>
              </div>

              {/* 1. THE BRIEF & STRATEGY BANNER (Always visible at top of Project 06) */}
              <div className="bg-[#FAF6EE] border-2 border-[#141414] p-5 mb-8 shadow-[4px_4px_0px_#141414]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-4 space-y-2.5 md:border-r-2 md:border-dashed md:border-[#141414]/25 md:pr-4">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                        BRAND
                      </span>
                      <span className="font-chunky text-base text-[#141414]">
                        {p6.brand}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#52525B]">
                        VOICE &amp; TONE
                      </span>
                      <span className="font-chunky text-sm text-[#D90429] leading-snug block">
                        {p6.voiceAndTone}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <span className="inline-block px-2 py-0.5 bg-[#141414] text-[#FFD400] font-mono-code text-[10px] font-bold uppercase mb-1.5">
                      01. THE BRIEF &amp; STRATEGY
                    </span>
                    <p className="text-sm sm:text-base text-[#141414] leading-relaxed">
                      {p6.objective}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. LATE-NIGHT & RAINY-DAY PUSH NOTIFICATIONS */}
              {p6View === "push" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#3B0764]">
                        02. LATE-NIGHT &amp; RAINY-DAY PUSH NOTIFICATIONS
                      </span>
                      <h4 className="font-chunky text-xl sm:text-2xl text-[#141414]">
                        High-CTR Lock-Screen Triggers (Hinglish &amp; English)
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          p6.pushNotifications
                            .map((p) => `${p.badge}\nTitle: "${p.title}"\nBody: "${p.body}"`)
                            .join("\n\n"),
                          "All 3 Zepto push notifications copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#3B0764] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ALL 3 PUSH ALERTS</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {p6.pushNotifications.map((push) => (
                      <div
                        key={push.id}
                        className="bg-[#141414] text-[#FAF6EE] border-2 border-[#141414] p-5 shadow-[5px_5px_0px_#FFD400] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/15 font-mono-code text-[10px]">
                            <span className="px-2 py-0.5 bg-[#3B0764] text-[#FFD400] border border-[#FFD400]/50 font-bold">
                              zepto • now
                            </span>
                            <span className="text-white/60">{push.time}</span>
                          </div>

                          <span className="inline-block px-2 py-0.5 bg-[#FF1E6E] text-white font-mono-code text-[10px] font-bold uppercase mb-3">
                            {push.badge}
                          </span>

                          <div className="bg-white text-[#141414] border-2 border-[#FFD400] p-4 mb-4">
                            <p className="font-chunky text-lg leading-snug mb-1.5 text-[#141414]">
                              “{push.title}”
                            </p>
                            <p className="text-sm text-[#27272A] leading-relaxed">
                              “{push.body}”
                            </p>
                          </div>
                        </div>

                        {xrayMode && (
                          <div className="bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2.5 py-1.5 border border-white/30">
                            ✎ {push.xrayNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. ABANDONED-CART WHATSAPP NUDGES */}
              {p6View === "whatsapp" && (
                <div className="ruled-notepad border-2 border-[#141414] p-6 sm:p-8 shadow-[5px_5px_0px_#141414]">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 border-b-2 border-[#141414]">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#00B84D]">
                        03. ABANDONED-CART WHATSAPP NUDGES
                      </span>
                      <h4 className="font-chunky text-xl sm:text-2xl text-[#141414]">
                        Conversational Cart Recovery Without Discount Spam
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          p6.whatsappNudges
                            .map((n) => `${n.badge}: "${n.copy}"`)
                            .join("\n\n"),
                          "Zepto WhatsApp nudges copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#00B84D] hover:text-[#141414] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY WHATSAPP NUDGES</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {p6.whatsappNudges.map((nudge) => (
                      <div
                        key={nudge.id}
                        className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#00B84D] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="px-2.5 py-0.5 bg-[#00B84D] text-[#141414] border border-[#141414] font-mono-code text-[11px] font-bold">
                              {nudge.badge}
                            </span>
                            <span className="font-mono-code text-[10px] font-bold text-[#52525B]">
                              {nudge.trigger}
                            </span>
                          </div>

                          <div className="bg-[#DCF8C6] border-2 border-[#141414] p-4 mb-4 relative">
                            <span className="block font-mono-code text-[10px] font-bold uppercase text-[#075E54] mb-1">
                              WHATSAPP BUSINESS // ZEPTO
                            </span>
                            <p className="text-base font-semibold text-[#141414] leading-relaxed">
                              “{nudge.copy}”
                            </p>
                          </div>
                        </div>

                        {xrayMode && (
                          <div className="bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2.5 py-1.5">
                            ✎ {nudge.xrayNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. DELIVERY-DELAY APOLOGIES (IN-APP / SMS) */}
              {p6View === "delays" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="block font-mono-code text-[10px] font-bold uppercase text-[#D90429]">
                        04. DELIVERY-DELAY APOLOGIES (IN-APP / SMS)
                      </span>
                      <h4 className="font-chunky text-xl sm:text-2xl text-[#141414]">
                        Turning Late-Order Friction Into Brand Affection
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyText(
                          p6.delayApologies
                            .map((d) => `${d.badge}: "${d.copy}"`)
                            .join("\n\n"),
                          "Zepto delivery-delay apologies copied!"
                        )
                      }
                      className="px-3 py-1.5 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#FF1E6E] inline-flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY DELAY APOLOGIES</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {p6.delayApologies.map((delay) => (
                      <div
                        key={delay.id}
                        className="bg-white border-2 border-[#141414] p-5 shadow-[4px_4px_0px_#FF1E6E] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="px-2.5 py-0.5 bg-[#FFD400] text-[#141414] border border-[#141414] font-mono-code text-[11px] font-bold">
                              {delay.badge}
                            </span>
                            <span className="font-mono-code text-[10px] font-bold text-[#52525B]">
                              {delay.channel}
                            </span>
                          </div>

                          <div className="bg-[#FAF6EE] border-l-4 border-[#3B0764] p-4 mb-4">
                            <p className="text-base font-semibold text-[#141414] leading-relaxed">
                              “{delay.copy}”
                            </p>
                          </div>
                        </div>

                        {xrayMode && (
                          <div className="bg-[#D90429] text-white font-mono-code text-[10px] font-bold px-2.5 py-1.5">
                            ✎ {delay.xrayNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </section>

          {/* =================================================================
              SECTION 02: PUBLISHED BOOKS & LITERARY WORK
          ================================================================== */}
          <section
            id="books-section"
            className="scroll-mt-16 px-5 sm:px-10 md:px-14 py-16 sm:py-20 border-b-2 border-[#141414]"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-[#FF5C00] text-white font-mono-code text-xs font-bold uppercase tracking-wider border border-[#141414] mb-3">
                  SECTION 02 // AUTHORSHIP &amp; VERSE
                </span>
                <h2 className="font-condensed text-4xl sm:text-6xl uppercase tracking-tight text-[#141414]">
                  Published Books &amp; Literary Work
                </h2>
              </div>
              <span className="font-handwritten text-2xl sm:text-3xl text-[#2962FF] rotate-1">
                “100+ bilingual entries &amp; counting.”
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {PORTFOLIO_DATA.books.map((book, index) => {
                const bookHref = links[book.linkKey] || "#contact";
                const isExternal = bookHref.startsWith("http");

                return (
                  <article
                    key={book.id}
                    className="bg-white border-2 border-[#141414] p-6 shadow-[6px_6px_0px_#141414] flex flex-col justify-between relative"
                  >
                    <MaskingTape
                      className="mx-auto -mt-9 mb-3"
                      rotate={index % 2 === 0 ? "-rotate-2" : "rotate-2"}
                    />

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                        <span
                          className="px-2.5 py-1 font-mono-code text-[11px] font-bold uppercase border border-[#141414] inline-flex items-center gap-1.5"
                          style={{
                            backgroundColor: book.stripColor,
                            color: book.textColor
                          }}
                        >
                          {book.isInProgress && (
                            <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
                          )}
                          <span>{book.status}</span>
                        </span>
                        <span className="font-mono-code text-[11px] font-bold text-[#52525B]">
                          {book.languages}
                        </span>
                      </div>

                      <div
                        className={`${book.coverBg} border-2 border-[#141414] p-5 mb-5 text-white relative overflow-hidden`}
                      >
                        <div
                          className="w-2 h-full absolute left-0 top-0"
                          style={{ backgroundColor: book.coverAccent }}
                        />
                        <div className="pl-2">
                          <span className="block font-mono-code text-[10px] tracking-widest uppercase text-white/70 mb-4">
                            PREETPAL SINGH
                          </span>
                          <h3 className="font-chunky text-2xl leading-tight mb-1">
                            {book.title}
                          </h3>
                          <p
                            className="font-mono-code text-xs font-bold"
                            style={{ color: book.coverAccent }}
                          >
                            {book.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-[#27272A] leading-relaxed mb-6">
                        {book.synopsis}
                      </p>
                    </div>

                    <a
                      href={bookHref}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="w-full py-3 px-4 bg-[#141414] text-white font-mono-code text-xs font-bold uppercase tracking-wider border-2 border-[#141414] hover:bg-[#FFD400] hover:text-[#141414] transition-colors flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{book.ctaLabel}</span>
                      {isExternal && <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          {/* =================================================================
              SECTION 03: COMMUNITY BUILDING & CAMPAIGN STRATEGY
          ================================================================== */}
          <section
            id="community-section"
            className="scroll-mt-16 px-5 sm:px-10 md:px-14 py-16 sm:py-20 border-b-2 border-[#141414]"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-[#00B84D] text-white font-mono-code text-xs font-bold uppercase tracking-wider border border-[#141414] mb-3">
                  SECTION 03 // COMMUNITY &amp; CAMPAIGN STRATEGY
                </span>
                <h2 className="font-condensed text-4xl sm:text-6xl uppercase tracking-tight text-[#141414]">
                  The Poet's Launchpad
                </h2>
              </div>

              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FFD400] border-2 border-[#141414] shadow-[3px_3px_0px_#141414] font-mono-code text-xs font-bold inline-flex items-center gap-1.5 hover:bg-[#FF1E6E] hover:text-white transition-colors self-start sm:self-auto"
              >
                <span>@poets_launchpad</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 mb-8 border-b-2 border-[#141414]">
                <div className="lg:col-span-7">
                  <span className="inline-block px-2.5 py-0.5 bg-[#2962FF] text-white font-mono-code text-xs font-bold uppercase mb-3">
                    {PORTFOLIO_DATA.community.role}
                  </span>
                  <h3 className="font-chunky text-2xl sm:text-3xl text-[#141414] mb-3">
                    Building an Independent Literary Movement &amp; Competition Engine
                  </h3>
                  <p className="text-base text-[#27272A] leading-relaxed">
                    {PORTFOLIO_DATA.community.summary}
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-3">
                  {PORTFOLIO_DATA.community.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="bg-[#FAF6EE] border-2 border-[#141414] px-4 py-3 flex items-center justify-between"
                    >
                      <span className="font-mono-code text-xs font-bold text-[#52525B]">
                        {item.label}
                      </span>
                      <span className="font-chunky text-base text-[#141414]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider">
                    CAMPAIGN ARCHITECTURE // FLAGSHIP EDITIONS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.community.editions.map((ed, idx) => (
                      <button
                        key={ed.id}
                        type="button"
                        onClick={() => setActiveEditionIdx(idx)}
                        className={`px-3 py-1 font-mono-code text-xs font-bold border-2 border-[#141414] transition-all ${
                          activeEditionIdx === idx
                            ? "bg-[#141414] text-[#FFD400] shadow-[2px_2px_0px_#FF5C00]"
                            : "bg-[#FAF6EE] text-[#141414] hover:bg-[#FFD400]"
                        }`}
                      >
                        {ed.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PORTFOLIO_DATA.community.editions.map((ed, idx) => {
                    const isFocused = activeEditionIdx === idx;
                    return (
                      <div
                        key={ed.id}
                        onClick={() => setActiveEditionIdx(idx)}
                        className={`p-5 border-2 border-[#141414] cursor-pointer transition-all ${
                          isFocused
                            ? "bg-[#FAF6EE] shadow-[5px_5px_0px_#141414] -translate-y-1"
                            : "bg-white hover:bg-[#FAF6EE]/60"
                        }`}
                      >
                        <span
                          className="inline-block px-2 py-0.5 font-mono-code text-[10px] font-bold uppercase border border-[#141414] mb-3"
                          style={{
                            backgroundColor: ed.tagColor,
                            color: ed.tagColor === "#2962FF" ? "#FFFFFF" : "#141414"
                          }}
                        >
                          {ed.badge}
                        </span>
                        <h4 className="font-chunky text-xl text-[#141414] mb-2">
                          {ed.title}
                        </h4>
                        <p className="text-sm text-[#3F3F46] leading-relaxed">
                          {ed.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              SECTION 04: PERSONAL ESSAY (WRITTEN BY PREETPAL SINGH)
          ================================================================== */}
          <section
            id="essays-section"
            className="scroll-mt-16 px-5 sm:px-10 md:px-14 py-16 sm:py-20"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-[#FFD400] text-[#141414] font-mono-code text-xs font-bold uppercase tracking-wider border border-[#141414] mb-3">
                  SECTION 04 // PERSONAL ESSAY
                </span>
                <h2 className="font-condensed text-4xl sm:text-6xl uppercase tracking-tight text-[#141414]">
                  In My Own Words
                </h2>
              </div>
              <span className="font-handwritten text-2xl sm:text-3xl text-[#D90429] -rotate-1">
                “Where I can live, and not lie.”
              </span>
            </div>

            {PORTFOLIO_DATA.essays.map((essay) => (
              <article
                key={essay.id}
                className="bg-white border-2 border-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_#141414] max-w-4xl mx-auto relative"
              >
                <MaskingTape className="mx-auto -mt-9 mb-4" rotate="-rotate-2" />

                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b-2 border-[#141414]">
                  <span
                    className="px-2.5 py-1 font-mono-code text-[10px] font-bold uppercase text-white border border-[#141414]"
                    style={{ backgroundColor: essay.accent }}
                  >
                    {essay.tag}
                  </span>
                  <span className="font-mono-code text-xs font-bold text-[#52525B]">
                    {essay.readTime}
                  </span>
                </div>

                <h3 className="font-chunky text-2xl sm:text-4xl text-[#141414] leading-snug mb-6">
                  {essay.title}
                </h3>

                <div className="space-y-4 text-base sm:text-lg text-[#27272A] leading-relaxed mb-8">
                  {essay.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="pt-4 border-t-2 border-dashed border-[#141414]/20 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-handwritten text-3xl text-[#141414]">
                    ~ Preetpal Singh
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveEssay(essay)}
                    className="px-4 py-2 bg-[#FFD400] border-2 border-[#141414] font-mono-code text-xs font-bold hover:bg-[#141414] hover:text-[#FFD400] transition-colors"
                  >
                    OPEN READER VIEW →
                  </button>
                </div>
              </article>
            ))}
          </section>

          {/* =================================================================
              WHAT I WRITE - QUICK HIREABLE SCOPE STRIP
          ================================================================== */}
          <section className="px-5 sm:px-10 md:px-14 pb-12">
            <div className="border-t-2 border-dashed border-[#141414]/25 pt-12">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#52525B]">
                  WHAT YOU CAN HIRE ME TO WRITE
                </span>
                <span className="font-mono-code text-xs font-bold text-[#D90429]">
                  INTERNSHIPS • FREELANCE • BRAND SPRINTS
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {PORTFOLIO_DATA.scopeOfWork.map((item) => (
                  <div
                    key={item.num}
                    className="bg-white border-2 border-[#141414] p-5 shadow-[5px_5px_0px_#141414]"
                  >
                    <span
                      className="inline-block px-2 py-0.5 font-mono-code text-[10px] font-bold border border-[#141414] mb-3"
                      style={{
                        backgroundColor: item.accent,
                        color: item.textColor
                      }}
                    >
                      SCOPE {item.num}
                    </span>
                    <h3 className="font-chunky text-xl text-[#141414] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#3F3F46] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================================
              TORN-PAPER DARK FOOTER & CONTACT SECTION
          ================================================================== */}
          <footer
            id="contact"
            className="torn-footer-top bg-[#141414] text-[#FAF6EE] px-6 sm:px-12 pt-14 pb-12 mt-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-white/15">
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 bg-[#FF1E6E] text-white font-mono-code text-xs font-bold uppercase mb-4">
                  OPEN FOR INTERNSHIPS &amp; FREELANCE CAMPAIGNS
                </span>
                <h2 className="font-condensed text-4xl sm:text-6xl uppercase tracking-wide text-[#FFD400] leading-none mb-4">
                  Let’s Write Something People Don’t Skip.
                </h2>
                <p className="text-base text-white/80 max-w-xl leading-relaxed mb-7">
                  Looking for a Copywriter, Scriptwriter, or Content Strategist who understands both human emotion and technical products? Drop a message.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${links.email}`}
                    className="px-6 py-3 bg-[#FF5C00] text-white font-chunky text-base border-2 border-[#FAF6EE] hover:bg-[#FFD400] hover:text-[#141414] transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{links.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      copyText(links.email, `Copied ${links.email} to clipboard!`)
                    }
                    className="px-4 py-3 bg-white/10 text-white font-mono-code text-xs font-bold border border-white/30 hover:border-[#FFD400] hover:text-[#FFD400] transition-colors"
                  >
                    COPY EMAIL
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#1F1F23] border-2 border-white/20 p-6">
                <span className="block font-mono-code text-xs font-bold uppercase text-[#FFD400] mb-4">
                  CONNECT &amp; PROFILES
                </span>
                <ul className="space-y-3 font-mono-code text-sm">
                  <li>
                    <a
                      href={`mailto:${links.email}`}
                      className="flex items-center justify-between py-2 border-b border-white/10 hover:text-[#FFD400] transition-colors"
                    >
                      <span>EMAIL</span>
                      <span>{links.email} ↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-white/10 hover:text-[#2962FF] transition-colors"
                    >
                      <span>LINKEDIN</span>
                      <span>Preetpal Singh ↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-white/10 hover:text-[#FF1E6E] transition-colors"
                    >
                      <span>COMMUNITY IG</span>
                      <span>@poets_launchpad ↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={links.personalInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-white/10 hover:text-[#FF5C00] transition-colors"
                    >
                      <span>PERSONAL IG</span>
                      <span>@thepreetpalsingh ↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 hover:text-[#00E676] transition-colors"
                    >
                      <span>GITHUB</span>
                      <span>@preetpalsingherror ↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono-code text-xs text-white/60">
              <p>© 2026 Preetpal Singh. All rights reserved.</p>
              <p>Bengaluru • Copywriting • Scriptwriting • Content Strategy</p>
            </div>
          </footer>
        </div>
      </div>

      {/* =====================================================================
          FULL ESSAY ZINE READER MODAL
      ====================================================================== */}
      <dialog
        ref={essayDialogRef}
        {...{ closedby: "any" }}
        aria-labelledby="essay-modal-title"
        onClose={() => setActiveEssay(null)}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[88vh] overflow-y-auto notebook-grid-paper border-4 border-[#141414] shadow-[10px_10px_0px_#FFD400] p-0 bg-transparent text-[#141414]"
      >
        {activeEssay && (
          <article className="p-6 sm:p-10">
            <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b-2 border-[#141414]">
              <span
                className="px-2.5 py-1 font-mono-code text-xs font-bold text-white border border-[#141414]"
                style={{ backgroundColor: activeEssay.accent }}
              >
                {activeEssay.tag} • {activeEssay.readTime}
              </span>
              <form method="dialog">
                <button
                  type="submit"
                  autofocus
                  className="px-3 py-1 bg-[#141414] text-white font-mono-code text-xs font-bold hover:bg-[#D90429] cursor-pointer"
                >
                  CLOSE ✕
                </button>
              </form>
            </div>

            <h2
              id="essay-modal-title"
              className="font-chunky text-3xl sm:text-4xl text-[#141414] leading-tight mb-6"
            >
              {activeEssay.title}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#27272A] leading-relaxed">
              {activeEssay.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-[#141414]/25 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-chunky text-lg text-[#141414]">Preetpal Singh</p>
                <p className="font-mono-code text-xs text-[#52525B]">
                  Copywriter, Scriptwriter &amp; Content Strategist
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => setActiveEssay(null)}
                className="px-4 py-2 bg-[#FFD400] border-2 border-[#141414] font-mono-code text-xs font-bold"
              >
                DISCUSS THIS ESSAY →
              </a>
            </div>
          </article>
        )}
      </dialog>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#141414] text-[#FFD400] border-2 border-[#FFD400] px-4 py-2.5 shadow-[4px_4px_0px_#FF1E6E] font-mono-code text-xs font-bold">
          {toast}
        </div>
      )}
    </div>
  );
}