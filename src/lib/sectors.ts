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
    name: "Governments and Public Organizations",
    description: "We collaborate with governments and public entities to strengthen the resilience of their critical infrastructure, ensuring the security of sensitive data and essential services.",
    href: "/sectors/public",
    highlighted: true,
  },
  {
    name: "Healthcare",
    description: "In the healthcare sector, we preserve the integrity of medical data, ensuring compliance with strict security standards and protecting patient confidentiality.",
    href: "/sectors/healthcare",
  },
  {
    name: "Financial Services",
    description: "For financial institutions, we provide robust security solutions to protect transactions, secure customer data, and ensure regulatory compliance.",
    href: "/sectors/finance",
  },
  {
    name: "Telecommunications and Information Technology",
    description: "We secure the networks and IT infrastructure of telecommunications companies, guaranteeing reliable and secure connectivity for their customers.",
    href: "/sectors/telecom-it",
  },
  {
    name: "Fintech and Start-ups",
    description: "For Fintech companies and start-ups, we offer agile and scalable solutions to secure their digital innovations while respecting budgetary constraints.",
    href: "/sectors/fintech-start-up",
  },
  {
    name: "Media",
    description: "We protect the intellectual assets and sensitive data of media companies, guaranteeing continuity of operations and confidentiality of information.",
    href: "/sectors/media",
  },
  {
    name: "Transportation",
    description: "In the transport sector, we ensure the security of critical infrastructure and logistics management systems, thus protecting data flows and mobility.",
    href: "/sectors/transportation",
  },
  {
    name: "Energy",
    description: "For the energy sector, we secure critical infrastructure, guaranteeing continuity of services and protection of data related to energy production and distribution.",
    href: "/sectors/energy",
  },
  {
    name: "Industrial",
    description: "In the industrial field, we strengthen the security of control systems and manufacturing processes, protecting operations against cyber threats and interruptions.",
    href: "/sectors/industrial",
  },
] satisfies SectorLink[];

export const sectorGroups = [
  {
    category: "Sectors",
    href: "/sectors",
    items: sectorLinks,
  },
] satisfies SectorGroup[];
