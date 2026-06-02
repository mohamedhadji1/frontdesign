"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Virtual CISO & DPO"
      description="Get ongoing strategic cyber leadership, advisory, and privacy compliance guidance from seasoned executives without the full-time overhead."
      heroItems={["Strategic advisory", "Privacy compliance", "Executive governance"]}
      breadcrumbs={[{ label: "GRC", href: "/services/governance-risk-compliance" }, { label: "Virtual CISO/DPO" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Retain Virtual Leadership"
      ctaHref="/contact"
    />
  );
}
