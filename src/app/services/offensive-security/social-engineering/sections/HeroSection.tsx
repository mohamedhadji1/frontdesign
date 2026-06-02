"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Social Engineering"
      description="Evaluate your human firewall through targeted phishing, vishing, and impersonation campaigns designed to reveal gaps in security awareness."
      heroItems={["Phishing campaigns", "Vishing assessments", "Impersonation testing"]}
      breadcrumbs={[{ label: "Offensive Security", href: "/services/offensive-security" }, { label: "Social Engineering" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Test Your Human Firewall"
      ctaHref="/contact"
    />
  );
}
