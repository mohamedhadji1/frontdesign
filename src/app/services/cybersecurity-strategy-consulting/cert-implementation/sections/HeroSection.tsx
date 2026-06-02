"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="CERT Implementation"
      description="Design and build a national or organizational Computer Emergency Response Team with the processes, tools, and capabilities to respond to cyber incidents effectively."
      heroItems={["CERT design", "Process development", "Capability building"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "CERT Implementation" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Build Your CERT"
      ctaHref="/contact"
    />
  );
}
