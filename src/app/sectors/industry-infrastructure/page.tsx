import type { Metadata } from "next";
import { SectorCategoryPage } from "../components/SectorCategoryPage";

export const metadata: Metadata = {
  title: "Industry & Infrastructure Sector | Keystone",
  description:
    "Cybersecurity services for transportation, energy, and industrial organizations.",
};

export default function IndustryInfrastructurePage() {
  return (
    <SectorCategoryPage
      eyebrow="Industry & Infrastructure"
      title="Cybersecurity for Industry and Critical Infrastructure"
      description="Protect the systems that move people, power operations, and keep production running across connected industrial environments."
      icon="factory"
      backgroundVideoSrc="/vids/videoplayback.mp4"
      posterSrc="/background/bg15.png"
      items={[
        {
          id: "transportation",
          title: "Transportation",
          description:
            "Security for logistics platforms, mobility systems, fleet operations, and connected transport infrastructure.",
        },
        {
          id: "energy",
          title: "Energy",
          description:
            "Protection for generation, distribution, smart-grid, and energy-management environments.",
        },
        {
          id: "industrial",
          title: "Industrial",
          description:
            "Assessment and hardening for OT, ICS, manufacturing systems, and operational networks.",
        },
      ]}
    />
  );
}
