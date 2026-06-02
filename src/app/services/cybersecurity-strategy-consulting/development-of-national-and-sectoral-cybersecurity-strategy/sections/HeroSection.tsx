"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="National Cybersecurity Strategy"
      description="Support governments and national agencies in developing, publishing, and implementing comprehensive national and sectoral cybersecurity strategies."
      heroItems={["National strategy design", "Sectoral frameworks", "Implementation support"]}
      breadcrumbs={[{ label: "Strategy Consulting", href: "/services/cybersecurity-strategy-consulting" }, { label: "National Strategy" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Develop Your Strategy"
      ctaHref="/contact"
    />
  );
}
