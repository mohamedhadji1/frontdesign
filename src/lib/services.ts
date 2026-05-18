export type ServiceLink = {
  name: string;
  description: string;
  href: string;
  iconName: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    name: "Managed Services",
    description: "Continuous monitoring and proactive protection through Keystone's defensive security hub.",
    href: "/services/defensive-security",
    iconName: "ShieldCheck",
  },
  {
    name: "Offensive Security",
    description: "Simulating real-world attacks to identify and remediate vulnerabilities before they can be exploited.",
    href: "/services/offensive-security",
    iconName: "Target",
  },
  {
    name: "GRC (Governance, Risk, and Compliance)",
    description: "Holistic risk and compliance management to meet regulatory requirements and integrate security culture.",
    href: "/services/governance-risk-compliance",
    iconName: "ClipboardCheck",
  },
  {
    name: "Training & Awareness",
    description: "Interactive programs designed to transform employees into a strong link in your security chain.",
    href: "/services/awareness",
    iconName: "GraduationCap",
  },
  {
    name: "Strategic Advisors",
    description: "Cybersecurity strategies aligned with business objectives to maximize ROI and strengthen resilience.",
    href: "/services/cybersecurity-strategy-consulting",
    iconName: "Briefcase",
  },
  {
    name: "Assessment and Technical Assistance",
    description: "Comprehensive assessments and technical support to identify gaps and enhance your security posture.",
    href: "/services/technical-audit",
    iconName: "Search",
  },
  {
    name: "AI & Cybersecurity",
    description: "Securing AI systems and using AI to enhance cybersecurity defenses, threat detection, and LLM posture.",
    href: "/services/ai-cybersecurity",
    iconName: "BrainCircuit",
  },
];
