export type SectorLink = {
  name: string;
  description: string;
  href: string;
  highlighted?: boolean;
};

export type SectorGroup = {
  category: string;
  href: string;
  items: SectorLink[];
};

export const sectorLinks = [
  {
    name: "Healthcare",
    description:
      "Security programs for patient data, clinical platforms, medical operations, and healthcare compliance needs.",
    href: "/sectors/healthcare",
  },
  {
    name: "Telecom & IT",
    description:
      "Security for communication networks, cloud environments, APIs, managed platforms, and enterprise technology operations.",
    href: "/sectors/telecom-it",
  },
  {
    name: "Transportation",
    description:
      "Security for logistics platforms, mobility systems, fleet operations, and connected transport infrastructure.",
    href: "/sectors/transportation",
  },
  {
    name: "Energy",
    description:
      "Protection for generation, distribution, smart-grid, and energy-management environments.",
    href: "/sectors/energy",
  },
  {
    name: "Fintech & Start-up",
    description:
      "Practical protection for payment flows, digital products, sensitive customer data, and scaling engineering teams.",
    href: "/sectors/fintech-start-up",
  },
  {
    name: "Finance",
    description:
      "Controls for banking, insurance, risk management, payment environments, and financial compliance.",
    href: "/sectors/finance",
  },
  {
    name: "Media",
    description:
      "Protection for content platforms, broadcast workflows, publication operations, and digital audience services.",
    href: "/sectors/media",
  },
  {
    name: "Industrial",
    description:
      "Assessment and hardening for OT, ICS, manufacturing systems, and operational networks.",
    href: "/sectors/industrial",
  },
  {
    name: "Governments and Public Organizations",
    description:
      "Cybersecurity programs for public institutions, citizen services, sensitive data, and critical state infrastructure.",
    href: "/sectors/public",
    highlighted: true,
  },
] satisfies SectorLink[];

export const sectorGroups = [
  {
    category: "Sectors",
    href: "/sectors",
    items: sectorLinks,
  },
] satisfies SectorGroup[];
