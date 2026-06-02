"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="AI Cybersecurity"
      description="Navigate the security challenges of artificial intelligence. Keystone helps you govern, secure, and assess AI systems to prevent misuse, bias, and adversarial threats."
      heroItems={["AI governance frameworks", "LLM security assessments", "Deepfake detection"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "AI Cybersecurity" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Secure Your AI"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
