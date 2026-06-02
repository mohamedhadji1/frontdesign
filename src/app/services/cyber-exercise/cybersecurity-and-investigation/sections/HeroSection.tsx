"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cybersecurity & Investigation"
      description="Combine realistic attack scenarios with investigative exercises to train your teams on detection, evidence collection, and threat attribution."
      heroItems={["Attack scenario training", "Evidence collection", "Threat attribution"]}
      breadcrumbs={[{ label: "Cyber Exercise", href: "/services/cyber-exercise" }, { label: "Cybersecurity & Investigation" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Run an Investigation Exercise"
      ctaHref="/contact"
    />
  );
}
