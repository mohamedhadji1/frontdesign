"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cyber Exercise"
      description="Test your team's readiness through immersive, scenario-based exercises. From crisis simulations to technical war-games, we prepare your people for real incidents."
      heroItems={["Crisis simulations", "Technical war-games", "Team readiness validation"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Cyber Exercise" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Run a Cyber Exercise"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
