"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Web & Mobile Application Assessment"
      description="Expose vulnerabilities in your web and mobile applications before attackers do. Our experts test for OWASP Top 10, business logic flaws, and advanced injection vectors."
      heroItems={["OWASP Top 10", "Mobile security testing", "API security assessment"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Web & Mobile Assessment" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Request an Assessment"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
