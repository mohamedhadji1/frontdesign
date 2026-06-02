"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Hardware Testing & Reverse Engineering"
      description="Evaluate the security of embedded systems, IoT devices, and hardware components through in-depth analysis and reverse engineering techniques."
      heroItems={["Embedded systems", "IoT security", "Firmware analysis"]}
      breadcrumbs={[{ label: "Offensive Security", href: "/services/offensive-security" }, { label: "Hardware Testing" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Hardware Assessment"
      ctaHref="/contact"
    />
  );
}
