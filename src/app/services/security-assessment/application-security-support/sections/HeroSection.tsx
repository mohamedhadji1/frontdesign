"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Application Security"
      description="Secure your applications at every stage of development with code reviews, SAST/DAST testing, and secure development lifecycle guidance."
      heroItems={["Code review", "SAST & DAST testing", "Secure SDLC"]}
      breadcrumbs={[{ label: "Security Assessment", href: "/services/security-assessment" }, { label: "Application Security" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Secure Your Applications"
      ctaHref="/contact"
    />
  );
}
