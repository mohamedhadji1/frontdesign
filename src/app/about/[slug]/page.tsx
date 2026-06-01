import React from "react";
import { notFound } from "next/navigation";
import { aboutContent } from "@/lib/about-data";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { VisionMissionValues } from "@/components/about/VisionMissionValues";
import { TeamSection } from "@/components/about/TeamSection";
import { AwardsSection } from "@/components/about/AwardsSection";
import { TestimonialsSection } from "@/components/about/TestimonialsSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";

export function generateStaticParams() {
  return [
    { slug: "company-overview" },
    { slug: "vision-mission-values" },
    { slug: "our-team" },
    { slug: "awards-recognition" },
    { slug: "testimonials" },
  ];
}

export default async function AboutSubRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "company-overview") {
    return (
      <main className="bg-white">
        <AboutHeroSection 
          title="Company Overview" 
          description="At Keystone, our presence extends across the EMEA region, where we stand out for our commitment to strengthening cybersecurity."
        />
        <CyberSectionDivider />
        <CompanyOverview />
      </main>
    );
  }

  if (slug === "vision-mission-values") {
    return (
      <main className="bg-white">
        <AboutHeroSection 
          title="Vision, Mission & Values" 
          description="Protect Digital Innovation, Ensure Global Trust. Discover the strategic pillars that guide each of our actions."
        />
        <CyberSectionDivider />
        <VisionMissionValues />
      </main>
    );
  }

  if (slug === "our-team") {
    return (
      <main className="bg-white">
        <AboutHeroSection 
          title="Our Team" 
          description="An international team of certified specialists, dedicated to excellence and the protection of your most valuable assets."
        />
        <CyberSectionDivider />
        <TeamSection />
      </main>
    );
  }

  if (slug === "awards-recognition") {
    return (
      <main className="bg-white">
        <AboutHeroSection 
          title="Awards & Recognition" 
          description="Our commitment to excellence and innovation in cybersecurity is regularly praised by the industry."
        />
        <CyberSectionDivider />
        <AwardsSection />
      </main>
    );
  }

  if (slug === "testimonials") {
    return (
      <main className="bg-white">
        <AboutHeroSection 
          title="Clients Testimonials" 
          description="Discover the positive impact of our solutions through the feedback from our partners and clients."
        />
        <CyberSectionDivider />
        <TestimonialsSection />
      </main>
    );
  }

  notFound();
}
