import type { Metadata } from "next";
import { SectorCategoryPage } from "../components/SectorCategoryPage";

export const metadata: Metadata = {
  title: "Services Sector | Keystone",
  description:
    "Cybersecurity services for healthcare, finance, and media organizations.",
};

export default function ServicesSectorPage() {
  return (
    <SectorCategoryPage
      eyebrow="Services"
      title="Cybersecurity for Service Organizations"
      description="Protect customer trust, regulated data, business continuity, and high-availability digital services across people-facing industries."
      icon="heartPulse"
      backgroundVideoSrc="/vids/herosection.mp4"
      posterSrc="/background/bg8.jpeg"
      items={[
        {
          id: "healthcare",
          title: "Healthcare",
          description:
            "Security programs for patient data, clinical platforms, medical operations, and healthcare compliance needs.",
        },
        {
          id: "finance",
          title: "Finance",
          description:
            "Controls for banking, insurance, risk management, payment environments, and financial compliance.",
        },
        {
          id: "media",
          title: "Media",
          description:
            "Protection for content platforms, broadcast workflows, publication operations, and digital audience services.",
        },
      ]}
    />
  );
}
