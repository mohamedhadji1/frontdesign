export type SectorIconName =
  | "activity"
  | "banknote"
  | "cloud"
  | "cpu"
  | "creditCard"
  | "database"
  | "eye"
  | "factory"
  | "fileSearch"
  | "graduationCap"
  | "heartPulse"
  | "lockKeyhole"
  | "network"
  | "newspaper"
  | "radar"
  | "radioTower"
  | "rocket"
  | "server"
  | "shieldAlert"
  | "shieldCheck"
  | "siren"
  | "truck"
  | "usersRound"
  | "wifi"
  | "zap";

export type SectorCard = {
  title: string;
  description: string;
  icon: SectorIconName;
};

export type SectorPost = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export type SectorPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  heroIcon: SectorIconName;
  posterSrc: string;
  backgroundVideoSrc?: string;
  heroCards: string[];
  exposureTitle: string;
  risks: SectorCard[];
  specificRisks: SectorCard[];
  solutions: SectorCard[];
  frameworkTitle: string;
  framework: SectorCard[];
  ctaText: string;
  posts?: SectorPost[];
};

export const sectorPages = {
  healthcare: {
    slug: "healthcare",
    eyebrow: "Healthcare",
    title: "Cybersecurity for Healthcare Organizations",
    description:
      "Healthcare organizations manage a considerable amount of sensitive data, from medical records to patient personal information. Cyber threats against this sector can have catastrophic consequences, so protection must be rigorous.",
    summary:
      "Keystone works closely with healthcare organizations to develop tailored cybersecurity strategies. By strengthening their defenses, we help protect sensitive data and ensure the continuity of essential healthcare services against growing cyber threats.",
    heroIcon: "heartPulse",
    posterSrc: "/background/bg8.jpeg",
    backgroundVideoSrc: "/vids/herosection.mp4",
    heroCards: ["Protect", "Monitor", "Respond", "Recover"],
    exposureTitle: "Healthcare Exposure",
    risks: [
      {
        title: "Data Confidentiality",
        description:
          "A leak of medical data can seriously affect patient privacy. Medical information has high value on criminal markets and can be used for fraud or blackmail.",
        icon: "database",
      },
      {
        title: "Healthcare Service Interruptions",
        description:
          "Attacks targeting IT systems can disrupt hospital operations, delay care, and in the most serious cases put patients at risk.",
        icon: "activity",
      },
      {
        title: "Life Safety Risk",
        description:
          "Ransomware and similar attacks can paralyze critical systems and delay access to vital patient information.",
        icon: "heartPulse",
      },
    ],
    specificRisks: [
      {
        title: "Patient Privacy",
        description:
          "Patient records, medical histories, and identity data require strict confidentiality controls and strong governance.",
        icon: "lockKeyhole",
      },
      {
        title: "Care Continuity",
        description:
          "Clinical platforms must remain available because outages can rapidly affect diagnosis, treatment, and emergency response.",
        icon: "shieldCheck",
      },
      {
        title: "Critical System Availability",
        description:
          "Security programs must protect the systems that clinicians rely on for timely access to vital patient information.",
        icon: "siren",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methods across cloud, on-premise, and hybrid healthcare environments.",
        icon: "network",
      },
    ],
    solutions: [
      {
        title: "In-Depth Assessment and Risk Management",
        description:
          "Keystone carefully assesses healthcare infrastructure to identify vulnerabilities and manage risks before attackers exploit them.",
        icon: "fileSearch",
      },
      {
        title: "Data Protection and Compliance",
        description:
          "Encryption, access-control, and regulatory compliance measures help protect patient data and meet strict privacy requirements.",
        icon: "lockKeyhole",
      },
      {
        title: "Training and Awareness",
        description:
          "Tailored training programs help medical staff adopt better cybersecurity practices and reduce unsafe behaviors.",
        icon: "graduationCap",
      },
      {
        title: "Continuous Monitoring",
        description:
          "24/7 monitoring helps Keystone detect and respond quickly to threats while preserving healthcare service availability.",
        icon: "radar",
      },
    ],
    frameworkTitle: "Designed for Healthcare Infrastructure",
    framework: [
      {
        title: "Protect Patient Data",
        description:
          "Layered controls reduce the risk of exposure across medical records, personal data, and clinical systems.",
        icon: "database",
      },
      {
        title: "Keep Care Available",
        description:
          "Availability-focused monitoring and response support continuity for essential care delivery.",
        icon: "activity",
      },
      {
        title: "Reduce Human Risk",
        description:
          "Awareness programs help healthcare teams recognize phishing, unsafe handling, and social-engineering attempts.",
        icon: "graduationCap",
      },
    ],
    ctaText:
      "Work with Keystone to protect patient data, clinical systems, and healthcare service continuity.",
  },
  "telecom-it": {
    slug: "telecom-it",
    eyebrow: "Telecom & IT",
    title: "Cybersecurity for Telecom and IT Organizations",
    description:
      "Telecommunications and information technology companies sit at the center of global connectivity, operating complex networks and storing large volumes of sensitive data. Securing these systems is essential to maintain user trust and reliable services.",
    summary:
      "Keystone works closely with telecom and IT companies to build resilient cybersecurity strategies. Our approach emphasizes prevention, detection, and response so organizations can secure infrastructure, protect sensitive data, and maintain service availability.",
    heroIcon: "radioTower",
    posterSrc: "/background/internet-bg.png",
    backgroundVideoSrc: "/vids/herosection.mp4",
    heroCards: ["Connect", "Secure", "Detect", "Sustain"],
    exposureTitle: "Telecom and IT Exposure",
    risks: [
      {
        title: "Network Vulnerability",
        description:
          "Telecommunications infrastructure is exposed to threats such as DDoS attacks, network compromise, and intrusions aimed at stealing sensitive data.",
        icon: "wifi",
      },
      {
        title: "Data Confidentiality Threats",
        description:
          "Telecom companies store personal user information such as location data and connection details that can be targeted by cybercriminals.",
        icon: "database",
      },
      {
        title: "Service Disruption Risk",
        description:
          "Attacks against telecom operators can interrupt service for end users, affecting productivity and customer trust.",
        icon: "siren",
      },
    ],
    specificRisks: [
      {
        title: "Network Exposure",
        description:
          "Distributed networks, APIs, and managed platforms need continuous hardening against intrusion attempts.",
        icon: "network",
      },
      {
        title: "User Data Protection",
        description:
          "Location, identity, and connection data require privacy-focused controls and strong access governance.",
        icon: "lockKeyhole",
      },
      {
        title: "Availability Pressure",
        description:
          "Reliable service delivery depends on resilient monitoring, incident response, and continuity planning.",
        icon: "activity",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methodology across cloud services, on-premise platforms, and hybrid telecom environments.",
        icon: "cloud",
      },
    ],
    solutions: [
      {
        title: "Network Assessment and Assessment",
        description:
          "Keystone performs in-depth Assessments to identify weaknesses in telecom infrastructure and recommend stronger network security.",
        icon: "fileSearch",
      },
      {
        title: "Threat Monitoring and Detection",
        description:
          "Advanced network monitoring helps detect and counter threats in real time, supporting continuous service availability.",
        icon: "radar",
      },
      {
        title: "Data Protection",
        description:
          "Encryption, access-control, and sensitive-data protection strategies preserve confidentiality across stored information.",
        icon: "lockKeyhole",
      },
      {
        title: "Training and Awareness",
        description:
          "Cybersecurity awareness programs reduce risks from internal and external attacks by improving staff behavior.",
        icon: "graduationCap",
      },
    ],
    frameworkTitle: "Designed for Connected Infrastructure",
    framework: [
      {
        title: "Secure the Network Core",
        description:
          "Assessment and hardening reduce exposure across telecom networks, APIs, and service platforms.",
        icon: "radioTower",
      },
      {
        title: "Protect User Data",
        description:
          "Privacy controls and monitoring help safeguard sensitive customer and connection information.",
        icon: "database",
      },
      {
        title: "Maintain Reliable Services",
        description:
          "Real-time detection and response practices help limit outages and preserve service trust.",
        icon: "activity",
      },
    ],
    ctaText:
      "Work with Keystone to secure networks, protect customer data, and keep digital services available.",
  },
  transportation: {
    slug: "transportation",
    eyebrow: "Transportation",
    title: "Cybersecurity for Transportation Organizations",
    description:
      "The transportation sector includes airlines, logistics companies, and land and maritime transport operators. These organizations use complex IT systems to manage operations, routes, passenger data, and cargo data, which exposes them to cyber threats.",
    summary:
      "Keystone works closely with transportation companies to prevent cyber threats and protect critical infrastructure. Our tailored solutions help secure data, preserve service continuity, and support safe transport operations.",
    heroIcon: "truck",
    posterSrc: "/background/bg15.png",
    backgroundVideoSrc: "/vids/videoplayback.mp4",
    heroCards: ["Route", "Protect", "Operate", "Recover"],
    exposureTitle: "Transportation Exposure",
    risks: [
      {
        title: "Passenger Data Security",
        description:
          "Passenger personal data, including booking and payment information, is a prime target for identity theft and fraud.",
        icon: "database",
      },
      {
        title: "Service Interruption",
        description:
          "Ransomware and denial-of-service attacks can disrupt operations, delay travel, and cause significant financial losses.",
        icon: "siren",
      },
      {
        title: "Transport Control Systems",
        description:
          "Traffic control and management systems can be targeted to disrupt routes or compromise vehicle safety.",
        icon: "truck",
      },
    ],
    specificRisks: [
      {
        title: "Passenger and Cargo Data",
        description:
          "Reservation, payment, route, passenger, and cargo information need strong confidentiality controls.",
        icon: "lockKeyhole",
      },
      {
        title: "Operational Delays",
        description:
          "Service disruption can quickly affect travel, logistics commitments, and business continuity.",
        icon: "activity",
      },
      {
        title: "Control System Abuse",
        description:
          "Transport management and traffic systems need protection against unauthorized access and manipulation.",
        icon: "shieldAlert",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its approach across transport platforms, operational systems, cloud services, and hybrid environments.",
        icon: "network",
      },
    ],
    solutions: [
      {
        title: "Network Security",
        description:
          "Keystone evaluates and strengthens IT networks to prevent intrusions and preserve data confidentiality.",
        icon: "network",
      },
      {
        title: "Control System Protection",
        description:
          "Sector-specific controls protect traffic and transport management systems against unauthorized access.",
        icon: "shieldCheck",
      },
      {
        title: "Risk Management",
        description:
          "Transportation-focused risk strategies identify and reduce threats before they affect critical services.",
        icon: "fileSearch",
      },
      {
        title: "Security Training",
        description:
          "Awareness programs train staff on cybersecurity best practices and reduce social-engineering risk.",
        icon: "graduationCap",
      },
    ],
    frameworkTitle: "Designed for Transport Operations",
    framework: [
      {
        title: "Secure Operational Networks",
        description:
          "Network reviews and hardening help protect the connected systems that run transport operations.",
        icon: "network",
      },
      {
        title: "Protect Control Platforms",
        description:
          "Traffic, fleet, and route-management systems require monitoring and strict access control.",
        icon: "truck",
      },
      {
        title: "Preserve Continuity",
        description:
          "Risk management and response planning limit delays, service interruption, and operational impact.",
        icon: "activity",
      },
    ],
    ctaText:
      "Work with Keystone to protect passenger data, control systems, and transport service continuity.",
  },
  energy: {
    slug: "energy",
    eyebrow: "Energy",
    title: "Cybersecurity for the Energy Sector",
    description:
      "The energy sector manages critical infrastructure such as electrical grids, power plants, pipelines, and other facilities essential to modern society. These infrastructures are increasingly connected, making them vulnerable to cyberattacks.",
    summary:
      "Keystone works closely with energy companies to strengthen the cybersecurity of critical infrastructure. Using tailored solutions and advanced security practices, we help protect vital systems against cyber threats.",
    heroIcon: "zap",
    posterSrc: "/background/bg14.avif",
    backgroundVideoSrc: "/vids/videoplayback.mp4",
    heroCards: ["Power", "Defend", "Monitor", "Resilient"],
    exposureTitle: "Energy-Sector Exposure",
    risks: [
      {
        title: "Operational Disruption",
        description:
          "Cyberattacks against electrical grids or industrial control systems can cause outages and disrupt essential services.",
        icon: "activity",
      },
      {
        title: "Sensitive Data Theft",
        description:
          "Sensitive information about energy infrastructure, including operational plans, can be targeted for data theft.",
        icon: "database",
      },
      {
        title: "Targeted Attacks",
        description:
          "Targeted attacks against industrial control systems can have devastating consequences for facility safety and security.",
        icon: "shieldAlert",
      },
    ],
    specificRisks: [
      {
        title: "Grid and Plant Availability",
        description:
          "Electrical grids, plants, pipelines, and connected facilities need controls that preserve reliable operation.",
        icon: "zap",
      },
      {
        title: "Industrial Control Systems",
        description:
          "Control environments require strong segmentation, monitoring, and safe response practices.",
        icon: "server",
      },
      {
        title: "Infrastructure Intelligence",
        description:
          "Operational plans and infrastructure details must be protected from theft and misuse.",
        icon: "eye",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methodology across cloud services, on-premise systems, and hybrid energy environments.",
        icon: "network",
      },
    ],
    solutions: [
      {
        title: "Critical Infrastructure Assessment",
        description:
          "Keystone evaluates energy infrastructure to identify weaknesses that could expose critical operations.",
        icon: "fileSearch",
      },
      {
        title: "Industrial Control Protection",
        description:
          "Security practices adapted to control environments help protect industrial systems and facility safety.",
        icon: "server",
      },
      {
        title: "Sensitive Data Protection",
        description:
          "Access governance and monitoring help protect operational plans and infrastructure information.",
        icon: "lockKeyhole",
      },
      {
        title: "Targeted Threat Monitoring",
        description:
          "Advanced monitoring helps detect suspicious activity against connected energy systems.",
        icon: "radar",
      },
    ],
    frameworkTitle: "Designed for Energy Infrastructure",
    framework: [
      {
        title: "Protect Essential Systems",
        description:
          "Controls are prioritized around grid, plant, and pipeline environments where disruption has broad impact.",
        icon: "zap",
      },
      {
        title: "Harden Control Environments",
        description:
          "Industrial control systems require careful assessment and security practices adapted to operational realities.",
        icon: "server",
      },
      {
        title: "Monitor Targeted Threats",
        description:
          "Detection and response help reduce the risk of targeted attacks against critical energy operations.",
        icon: "radar",
      },
    ],
    ctaText:
      "Work with Keystone to secure critical energy infrastructure and preserve operational resilience.",
  },
  "fintech-start-up": {
    slug: "fintech-start-up",
    eyebrow: "Fintech & Start-up",
    title: "Cybersecurity for Fintech and Start-up Organizations",
    description:
      "Fintech companies and start-ups play a crucial role in the digital transformation of finance by offering innovative services and managing online financial transactions. Because they are technology-driven, they face specific cybersecurity risks.",
    summary:
      "Keystone works closely with fintechs and start-ups to create secure and compliant environments. Our tailored cybersecurity solutions protect sensitive data, maintain customer trust, and support growth in a safer operating environment.",
    heroIcon: "rocket",
    posterSrc: "/background/bg11.png",
    backgroundVideoSrc: "/vids/herosection.mp4",
    heroCards: ["Build", "Scale", "Comply", "Protect"],
    exposureTitle: "Fintech and Start-up Exposure",
    risks: [
      {
        title: "Customer Data Protection",
        description:
          "These companies manage sensitive financial and personal customer data, making them prime targets for criminals seeking to steal information.",
        icon: "database",
      },
      {
        title: "Technology Vulnerabilities",
        description:
          "Start-ups and fintechs often use innovative technologies but may lack robust security controls, leaving them vulnerable to attacks.",
        icon: "cpu",
      },
      {
        title: "Customer Trust",
        description:
          "Any security incident can seriously damage customer trust and reputation, leading to financial and legal consequences.",
        icon: "usersRound",
      },
    ],
    specificRisks: [
      {
        title: "Sensitive Financial Data",
        description:
          "Payment flows, identities, and personal information require strong protection from day one.",
        icon: "creditCard",
      },
      {
        title: "Fast-Moving Technology",
        description:
          "Rapid delivery and new architectures can create security gaps when controls do not keep pace.",
        icon: "rocket",
      },
      {
        title: "Reputation Exposure",
        description:
          "A single incident can weaken market confidence, investor trust, and customer adoption.",
        icon: "shieldAlert",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methods across cloud services, APIs, on-premise components, and hybrid product environments.",
        icon: "cloud",
      },
    ],
    solutions: [
      {
        title: "Assessment and Evaluation",
        description:
          "Keystone performs complete Assessments to identify weaknesses and vulnerabilities in fintech and start-up systems.",
        icon: "fileSearch",
      },
      {
        title: "Custom Security Solutions",
        description:
          "Advanced firewalls, intrusion detection, and identity-management systems can be adapted to strengthen security.",
        icon: "shieldCheck",
      },
      {
        title: "Risk Management and Compliance",
        description:
          "Keystone helps establish robust security policies and maintain compliance with applicable regulations.",
        icon: "banknote",
      },
      {
        title: "Training and Awareness",
        description:
          "Tailored training educates staff on cybersecurity best practices and strengthens the company's security posture.",
        icon: "graduationCap",
      },
    ],
    frameworkTitle: "Designed for High-Growth Digital Finance",
    framework: [
      {
        title: "Secure the Product",
        description:
          "Assessments and tailored controls protect digital products, APIs, and transaction workflows.",
        icon: "cpu",
      },
      {
        title: "Support Compliance",
        description:
          "Governance and policy design reduce non-compliance risk as the company scales.",
        icon: "banknote",
      },
      {
        title: "Protect Trust",
        description:
          "Customer confidence depends on clear controls around sensitive data and incident readiness.",
        icon: "usersRound",
      },
    ],
    ctaText:
      "Work with Keystone to protect financial innovation, customer data, and product growth.",
  },
  finance: {
    slug: "finance",
    eyebrow: "Finance",
    title: "Cybersecurity for Financial Services",
    description:
      "Financial companies manage massive volumes of sensitive data, including personal information, transactions, and financial assets. Protecting this data is crucial because the financial sector is a major target for cybercriminals.",
    summary:
      "Keystone partners with financial organizations to build robust cybersecurity strategies. Through tailored solutions, we help protect sensitive data, prevent financial fraud, and secure transactions in a highly regulated sector.",
    heroIcon: "banknote",
    posterSrc: "/background/bg12.png",
    backgroundVideoSrc: "/vids/herosection.mp4",
    heroCards: ["Trust", "Verify", "Detect", "Protect"],
    exposureTitle: "Financial Services Exposure",
    risks: [
      {
        title: "Sensitive Data Protection",
        description:
          "Banks and financial institutions store critical personal and financial customer information, making them prime targets for identity theft and financial fraud.",
        icon: "database",
      },
      {
        title: "Financial Fraud Threats",
        description:
          "Attacks against payment systems, transfers, and transactions can cause major financial impact and damage institutional reputation.",
        icon: "creditCard",
      },
      {
        title: "Internal and External Threats",
        description:
          "Malicious or negligent insiders, along with external threats such as DDoS attacks, are major concerns for financial organizations.",
        icon: "shieldAlert",
      },
    ],
    specificRisks: [
      {
        title: "Identity and Fraud Exposure",
        description:
          "Customer identities, account data, and transaction records require layered protection against theft and misuse.",
        icon: "lockKeyhole",
      },
      {
        title: "Payment and Transfer Systems",
        description:
          "High-value transaction environments need real-time monitoring and strict access control.",
        icon: "creditCard",
      },
      {
        title: "Insider and External Pressure",
        description:
          "Financial organizations must reduce both internal risk and attacks from external adversaries.",
        icon: "usersRound",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methodology across cloud services, on-premise systems, and hybrid financial environments.",
        icon: "network",
      },
    ],
    solutions: [
      {
        title: "Assessment and Risk Management",
        description:
          "Keystone performs complete Assessments to evaluate financial infrastructure security and reduce potential weaknesses.",
        icon: "fileSearch",
      },
      {
        title: "Early Detection Solutions",
        description:
          "Advanced detection tools identify and prevent fraudulent activity and unauthorized transactions in real time.",
        icon: "radar",
      },
      {
        title: "Transaction Protection",
        description:
          "Encryption, identity verification, and access-control measures strengthen transaction and customer-data security.",
        icon: "creditCard",
      },
      {
        title: "Training and Awareness",
        description:
          "Targeted training programs teach employees cybersecurity best practices and reduce risks linked to social engineering and human error.",
        icon: "graduationCap",
      },
    ],
    frameworkTitle: "Designed for Regulated Financial Environments",
    framework: [
      {
        title: "Assess Financial Infrastructure",
        description:
          "Security reviews identify weaknesses in systems that process customer data, transactions, and assets.",
        icon: "fileSearch",
      },
      {
        title: "Detect Fraud Early",
        description:
          "Monitoring and detection controls help identify fraud attempts and unauthorized transaction activity.",
        icon: "radar",
      },
      {
        title: "Secure Transactions",
        description:
          "Identity verification, encryption, and access governance strengthen financial operations.",
        icon: "creditCard",
      },
    ],
    ctaText:
      "Work with Keystone to protect sensitive financial data, transactions, and regulated operations.",
  },
  media: {
    slug: "media",
    eyebrow: "Media",
    title: "Cybersecurity Intelligence for Media Organizations",
    description:
      "Media organizations and digital platforms face fast-moving fraud, phishing, and audience-trust risks. Keystone tracks cybersecurity news and threat activity to help teams understand the campaigns affecting public-facing digital channels.",
    summary:
      "Keystone helps media teams monitor cyber threats, protect audiences, and respond to phishing and fraud campaigns before they damage trust.",
    heroIcon: "newspaper",
    posterSrc: "/background/bg7.png",
    backgroundVideoSrc: "/vids/herosection.mp4",
    heroCards: ["Monitor", "Verify", "Warn", "Respond"],
    exposureTitle: "Media Threat Signals",
    posts: [
      {
        title:
          "Proliferation of Scam Groups Linked to Funeral Livestreams on Facebook",
        date: "2024-12-21",
        image: "https://ziedhamdi.com/wp-content/uploads/2024/10/5.jpg",
        href: "https://ziedhamdi.com/en_gb/proliferation-de-groupes-descroquerie-lies-a-la-diffusion-de-funerailles-sur-facebook/",
      },
      {
        title: "Phishing Campaign Exploiting Windows PowerShell",
        date: "2024-12-21",
        image:
          "https://ziedhamdi.com/wp-content/uploads/2024/11/banner_interne_keyston-550x500.jpg",
        href: "https://ziedhamdi.com/en_gb/campagne-de-phishing-exploitant-windows-powershell/",
      },
    ],
    risks: [
      {
        title: "Scam Campaigns on Social Platforms",
        description:
          "Fraud groups can exploit sensitive public events and media distribution channels to target audiences.",
        icon: "usersRound",
      },
      {
        title: "Phishing Tool Abuse",
        description:
          "Phishing campaigns can exploit Windows PowerShell and similar tools to mislead users and execute malicious activity.",
        icon: "shieldAlert",
      },
      {
        title: "Audience Trust Risk",
        description:
          "Visible fraud and impersonation campaigns can undermine confidence in media brands and public communication channels.",
        icon: "newspaper",
      },
    ],
    specificRisks: [
      {
        title: "Public-Facing Fraud",
        description:
          "Scam campaigns can spread quickly across social channels and exploit audience attention.",
        icon: "eye",
      },
      {
        title: "Phishing Campaigns",
        description:
          "Media teams need readiness for phishing attempts that use common system tools and deceptive messaging.",
        icon: "shieldAlert",
      },
      {
        title: "Brand and Audience Protection",
        description:
          "Audience trust depends on fast detection, clear response, and protected publication channels.",
        icon: "newspaper",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methods across web platforms, social channels, cloud systems, and newsroom workflows.",
        icon: "network",
      },
    ],
    solutions: [
      {
        title: "Threat Monitoring",
        description:
          "Continuous monitoring helps identify suspicious campaigns, phishing activity, and brand-abuse attempts.",
        icon: "radar",
      },
      {
        title: "Audience Protection",
        description:
          "Clear controls and response practices help protect readers, viewers, and online communities from fraud.",
        icon: "usersRound",
      },
      {
        title: "Phishing Readiness",
        description:
          "Awareness and response programs prepare teams to detect and contain phishing campaigns quickly.",
        icon: "graduationCap",
      },
      {
        title: "Publication Channel Security",
        description:
          "Access controls and monitoring reduce the risk of compromised accounts, websites, and content workflows.",
        icon: "lockKeyhole",
      },
    ],
    frameworkTitle: "Designed for Media Trust",
    framework: [
      {
        title: "Track Threat Signals",
        description:
          "Keystone turns media threat intelligence into practical visibility for digital teams.",
        icon: "radar",
      },
      {
        title: "Protect Audiences",
        description:
          "Controls and response practices reduce exposure to fraud, scams, and phishing campaigns.",
        icon: "usersRound",
      },
      {
        title: "Preserve Brand Trust",
        description:
          "Fast detection and clear response help protect reputation across public channels.",
        icon: "newspaper",
      },
    ],
    ctaText:
      "Work with Keystone to protect media platforms, audiences, and brand trust.",
  },
  industrial: {
    slug: "industrial",
    eyebrow: "Industrial",
    title: "Cybersecurity for Industrial Organizations",
    description:
      "The industrial sector includes manufacturing, production, distribution, and logistics. These industries rely heavily on connected systems to optimize operations, but this interconnection also exposes them to cyber risk.",
    summary:
      "Keystone partners with industrial companies to strengthen the security of processes and critical infrastructure. By deploying adapted security solutions and actively monitoring industrial networks, we help preserve operational continuity and data security.",
    heroIcon: "factory",
    posterSrc: "/background/bg15.png",
    backgroundVideoSrc: "/vids/videoplayback.mp4",
    heroCards: ["Produce", "Segment", "Detect", "Harden"],
    exposureTitle: "Industrial Exposure",
    risks: [
      {
        title: "Production Process Integrity",
        description:
          "Cyberattacks targeting production systems can alter processes, causing quality defects or supply-chain interruptions.",
        icon: "factory",
      },
      {
        title: "SCADA System Vulnerabilities",
        description:
          "Industrial control systems such as SCADA can be exposed to attacks that compromise monitoring and control of equipment.",
        icon: "server",
      },
    ],
    specificRisks: [
      {
        title: "Production Integrity",
        description:
          "Manufacturing and production processes require controls that prevent unauthorized changes and operational disruption.",
        icon: "factory",
      },
      {
        title: "SCADA Exposure",
        description:
          "Industrial control systems need segmentation, monitoring, and protection against compromise.",
        icon: "server",
      },
      {
        title: "Connected Equipment Risk",
        description:
          "Internet-connected equipment and industrial IoT devices expand the attack surface of operational environments.",
        icon: "wifi",
      },
      {
        title: "Technology-Agnostic Coverage",
        description:
          "Keystone adapts its methodology across industrial networks, SCADA systems, connected equipment, and hybrid environments.",
        icon: "network",
      },
    ],
    solutions: [
      {
        title: "Industrial Network Security",
        description:
          "Keystone provides solutions adapted to industrial environments to secure production networks and SCADA systems.",
        icon: "network",
      },
      {
        title: "Early Intrusion Detection",
        description:
          "Intrusion detection and threat-analysis tools help identify suspicious activity quickly.",
        icon: "radar",
      },
      {
        title: "Connected Equipment Security",
        description:
          "Keystone helps secure internet-connected equipment and manage risks linked to device connectivity.",
        icon: "wifi",
      },
      {
        title: "Training and Awareness",
        description:
          "Industrial security training teaches personnel about cyber risks and good practices for operational environments.",
        icon: "graduationCap",
      },
    ],
    frameworkTitle: "Designed for Industrial Operations",
    framework: [
      {
        title: "Secure Production Networks",
        description:
          "Network controls and segmentation help protect production environments and industrial systems.",
        icon: "network",
      },
      {
        title: "Monitor Industrial Activity",
        description:
          "Detection capabilities identify suspicious behavior across SCADA and operational environments.",
        icon: "radar",
      },
      {
        title: "Protect Connected Assets",
        description:
          "Connected equipment and IoT assets are managed as part of the industrial security perimeter.",
        icon: "wifi",
      },
    ],
    ctaText:
      "Work with Keystone to protect industrial systems, production continuity, and critical operations.",
  },
} satisfies Record<string, SectorPageContent>;

export const sectorPagesBySlug: Record<string, SectorPageContent> = sectorPages;
export const sectorSlugs = Object.keys(sectorPages);
