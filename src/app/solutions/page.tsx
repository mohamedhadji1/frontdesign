import type { Metadata } from "next";
import { SolutionsClient } from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions | Keystone B2B Cyber Security Platforms",
  description: "Explore Keystone's specialized cyber security solutions: Keystone ARENA (CTI & EASM), DNS Filtering, CIP Platform (Critical Infrastructure), and Data Loss Prevention (DLP).",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Keystone B2B Cyber Security Platforms",
    description: "Enterprise-grade threat intelligence, critical infrastructure protection, DNS security, and data protection platforms by Keystone.",
    url: "/solutions",
    siteName: "Keystone",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Solutions | Keystone B2B Cyber Security Platforms",
    description: "Explore Keystone's cyber security platforms built to coordinate threat intelligence, protect critical grids, and mitigate data leakage.",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}