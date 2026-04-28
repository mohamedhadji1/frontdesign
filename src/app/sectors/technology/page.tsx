import type { Metadata } from "next";
import { SectorCategoryPage } from "../components/SectorCategoryPage";

export const metadata: Metadata = {
  title: "Technology Sector | Keystone",
  description:
    "Cybersecurity services for telecom, IT, fintech, and startup organizations.",
};

export default function TechnologyPage() {
  return (
    <SectorCategoryPage
      eyebrow="Technology"
      title="Cybersecurity for Technology Organizations"
      description="Secure digital infrastructures, cloud platforms, APIs, telecom networks, and fast-moving technology products without slowing delivery."
      icon="cpu"
      backgroundVideoSrc="/vids/herosection.mp4"
      posterSrc="/background/internet-bg.png"
      items={[
        {
          id: "telecom-it",
          title: "Telecom & IT",
          description:
            "Security for communication networks, cloud environments, APIs, managed platforms, and enterprise technology operations.",
        },
        {
          id: "fintech-startups",
          title: "Fintech & Start-up",
          description:
            "Practical protection for payment flows, digital products, sensitive customer data, and scaling engineering teams.",
        },
      ]}
    />
  );
}
