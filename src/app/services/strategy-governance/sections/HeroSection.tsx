"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Strategy & Governance"
      description="Define and operationalize a cybersecurity strategy that aligns with your business objectives. From policy frameworks to executive governance, Keystone supports the full lifecycle."
      heroItems={["Policy frameworks", "Executive governance", "Cyber strategy roadmaps"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Strategy & Governance" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Your Strategy"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
