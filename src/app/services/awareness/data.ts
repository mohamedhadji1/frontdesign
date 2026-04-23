export type AwarenessPageData = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  showcaseImages?: string[];
  featureTitle?: string;
  features: {
    title: string;
    description: string;
  }[];
  closing?: string;
};

export const awarenessPages: AwarenessPageData[] = [
  {
    slug: "awareness-workshops",
    title: "Awareness Workshops",
    eyebrow: "Interactive Learning",
    subtitle: "Dive into immersive security workshops",
    description:
      "Our awareness workshops go far beyond simple information sessions. They are carefully designed to immerse participants in realistic, interactive scenarios that highlight today's most relevant security threats. Led by experienced experts, these workshops cover data protection, cybersecurity best practices, and risk management in an engaging and memorable way.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2024/10/photo047_vertical.jpg",
    features: [
      {
        title: "Immersive approach",
        description:
          "Realistic simulations and concrete case studies help teams understand threats in a practical way.",
      },
      {
        title: "Active participation",
        description:
          "Interactive sessions encourage engagement, discussion, and stronger retention of key concepts.",
      },
      {
        title: "Adapted to your needs",
        description:
          "Each workshop can be tailored to your goals and to the knowledge level of your team.",
      },
    ],
    closing:
      "Our awareness workshops are an essential investment for strengthening a durable security culture across your organization.",
  },
  {
    slug: "cyber-escape-room",
    title: "Cyber Escape Room",
    eyebrow: "Gamified Awareness",
    subtitle:
      "An immersive cybersecurity experience where puzzles meet real-world threats",
    description:
      "Step into a captivating environment where participants use problem-solving skills, teamwork, and cyber awareness to overcome realistic attack scenarios. Our Cyber Escape Room transforms learning into a memorable hands-on experience.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-05T113955.534.png",
    showcaseImages: [
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-10T130544.532-150x150.png",
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-10T131407.412-150x150.png",
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-10T141437.584-150x150.png",
    ],
    features: [
      {
        title: "Realistic scenarios",
        description:
          "Face simulated security incidents that sharpen instinctive responses to modern threats.",
      },
      {
        title: "Collaboration",
        description:
          "Work together to solve puzzles, uncover clues, and build collective awareness around security.",
      },
      {
        title: "Practical lessons",
        description:
          "Learn while playing through experiences that connect directly to real workplace cyber behavior.",
      },
    ],
  },
  {
    slug: "cyber-card-game",
    title: "Cyber Card Game",
    eyebrow: "Play-Based Learning",
    subtitle:
      "A practical and entertaining way to discuss attacks, defenses, and decision-making",
    description:
      "Each card is packed with useful information, including attack scenarios, defensive techniques, quizzes, and engaging challenges focused on cybersecurity. The format encourages teams to talk, identify threats, react to attacks in real time, and avoid costly consequences.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2025/03/plateau-jeu-de-cartes.png",
    showcaseImages: [
      "https://ziedhamdi.com/wp-content/uploads/2025/03/carte-quiz.png",
      "https://ziedhamdi.com/wp-content/uploads/2025/03/carte-chance.png",
      "https://ziedhamdi.com/wp-content/uploads/2025/03/carte-def.png",
      "https://ziedhamdi.com/wp-content/uploads/2025/03/carte-attaque.png",
    ],
    features: [
      {
        title: "Practical knowledge",
        description:
          "Explore common security situations through a game format that makes learning easier to absorb.",
      },
      {
        title: "Critical thinking",
        description:
          "Identify threats quickly and make smart decisions under pressure to counter attacks effectively.",
      },
      {
        title: "Team collaboration",
        description:
          "Encourage players to solve security-related challenges together and strengthen shared judgment.",
      },
    ],
    closing:
      "This format turns cybersecurity awareness into a discussion-based activity that is memorable, social, and easy to reuse with different audiences.",
  },
  {
    slug: "quiz",
    title: "Cyber Quiz",
    eyebrow: "Knowledge Testing",
    subtitle:
      "An engaging team-based format to test understanding and improve retention",
    description:
      "Our cybersecurity quizzes encourage stronger knowledge retention while providing a clear way to measure the impact of awareness efforts. They also stimulate active thinking and help participants apply concepts immediately.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-11T120328.986.png",
    features: [
      {
        title: "Immediate knowledge checks",
        description:
          "Assess how well participants understand key concepts without disrupting the energy of the session.",
      },
      {
        title: "Better retention",
        description:
          "Reinforce learning by turning abstract security principles into active recall and quick decisions.",
      },
      {
        title: "Actionable measurement",
        description:
          "Use results to identify knowledge gaps and improve future awareness initiatives.",
      },
    ],
  },
  {
    slug: "attack-simulation",
    title: "Attack Simulation",
    eyebrow: "Preparedness Testing",
    subtitle: "Test your readiness against realistic cyberattack scenarios",
    description:
      "Our attack simulation service provides a comprehensive assessment of how your infrastructure responds to real-world threats. Using authentic scenarios, we identify potential weaknesses and help you take preventive action before adversaries exploit them.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-05T115546.700.png",
    features: [
      {
        title: "In-depth assessment",
        description:
          "Evaluate the strength of your defenses through realistic simulated attack paths and adversary behavior.",
      },
      {
        title: "Valuable recommendations",
        description:
          "Identify weaknesses and receive targeted advice to reinforce your security posture.",
      },
      {
        title: "Greater preparedness",
        description:
          "Face potential threats proactively instead of reacting only after an incident occurs.",
      },
    ],
  },
  {
    slug: "phishing-campaigns",
    title: "Phishing Campaigns",
    eyebrow: "Human Risk Reduction",
    subtitle: "Detect, prevent, and protect",
    description:
      "Our phishing simulation campaigns train your team to recognize and respond to phishing attempts. Through realistic exercises, we help employees spot warning signs and apply the right behaviors to avoid falling into attackers' traps.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-05T130824.961.png",
    featureTitle: "What you can expect",
    features: [
      {
        title: "Greater awareness",
        description:
          "Teach teams how to identify phishing attempts and respond appropriately before damage occurs.",
      },
      {
        title: "Continuous evaluation",
        description:
          "Measure how vigilant your people are and reinforce skills where additional support is needed.",
      },
      {
        title: "Lower risk exposure",
        description:
          "Reduce the likelihood of successful phishing attacks and protect sensitive information more effectively.",
      },
    ],
    closing:
      "Phishing simulations are a powerful tool for improving your organization's resilience against online threats.",
  },
  {
    slug: "agent619",
    title: "Agent 619",
    eyebrow: "Serious Game",
    subtitle: "Monitor, detect, and respond to threats through play",
    description:
      "Agent 619 puts employees in the role of a hacker tasked with infiltrating a company to expose weaknesses. Inspired by real cyber threats, the game combines physical exploration such as secure rooms, access badges, and cameras with digital intrusion into servers and databases. The objective is to steal sensitive information while avoiding detection systems.",
    heroImage:
      "https://ziedhamdi.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-12T151138.498.png",
    features: [
      {
        title: "Realistic threat immersion",
        description:
          "Participants explore how adversaries think, move, and exploit gaps across both physical and digital environments.",
      },
      {
        title: "Hands-on decision making",
        description:
          "The game encourages players to observe, prioritize, and act carefully while navigating risk and detection controls.",
      },
      {
        title: "Memorable awareness",
        description:
          "By experiencing the attacker perspective, teams develop a deeper and more lasting understanding of defensive behavior.",
      },
    ],
  },
];

export const awarenessPagesBySlug = Object.fromEntries(
  awarenessPages.map((page) => [page.slug, page]),
) as Record<string, AwarenessPageData>;
