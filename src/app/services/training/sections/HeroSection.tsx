"use client";

import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";

export function HeroSection() {
  return (
    <ServiceHeroSection
      title="Cybersecurity Training"
      description="Empower your teams with the knowledge and skills to recognize, prevent, and respond to cyber threats. Keystone delivers tailored, expert-led training programs."
      heroItems={["Awareness programs", "Technical certifications", "Executive briefings"]}
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Training" }]}
      videoSrc="/vids/videoplayback.mp4"
      ctaLabel="Enroll Your Team"
      ctaHref="/contact"
      secondaryCtaLabel="View all services"
      secondaryCtaHref="/services"
    />
  );
}
