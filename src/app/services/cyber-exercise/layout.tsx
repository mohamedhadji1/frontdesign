import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Exercice Management & Technique| Keystone",
  description:
    "Explore Keystone Cyber Exercice Management & Techniqueprograms covering business continuity, resilience, recovery, cybersecurity, and investigation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
