"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Physical Intrusion Test"
      description="Assess the effectiveness of your physical security controls through simulated intrusion attempts, social engineering, and access control testing."
      heroItems={["Access control testing", "Social engineering", "Physical bypass techniques"]}
      breadcrumbs={[{ label: "Offensive Security", href: "/services/offensive-security" }, { label: "Physical Intrusion" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Physical Test"
      ctaHref="/contact"
    />
  );
}
