"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cloud Assessment"
      description="Evaluate the security posture of your cloud environments — AWS, Azure, GCP — covering IAM, network controls, data exposure, and compliance alignment."
      heroItems={["Cloud IAM audit", "Network exposure", "Compliance alignment"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Cloud Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Assess Your Cloud"
      ctaHref="/contact"
    />
  );
}
