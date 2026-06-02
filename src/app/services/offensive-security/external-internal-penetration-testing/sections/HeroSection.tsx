"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Penetration Testing"
      description="Simulating real-world attacks from both outside and inside your network to evaluate the effectiveness of your security perimeters and detect hidden routes."
      heroItems={["Network Security", "Perimeter Audits", "Insider Threat"]}
      breadcrumbs={[{ label: "Offensive Security", href: "/services/offensive-security" }, { label: "Penetration Testing" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request Penetration Test"
      ctaHref="/contact"
    />
  );
}
