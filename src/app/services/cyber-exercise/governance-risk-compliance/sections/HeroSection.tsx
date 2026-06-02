"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="GRC Exercise"
      description="Stress-test your governance, risk, and compliance frameworks through tabletop exercises that simulate regulatory incidents and compliance failures."
      heroItems={["GRC tabletop exercises", "Regulatory incident simulation", "Compliance stress-testing"]}
      breadcrumbs={[{ label: "Cyber Exercise", href: "/services/cyber-exercise" }, { label: "GRC Exercise" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Run a GRC Exercise"
      ctaHref="/contact"
    />
  );
}
