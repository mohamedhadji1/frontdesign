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
          description="Protéger l'Innovation Numérique, Garantir la Confiance Mondiale. Découvrez les piliers stratégiques qui guident chacune de nos actions."
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
          title="Notre Équipe" 
          description="Une équipe internationale de spécialistes certifiés, dédiée à l'excellence et à la protection de vos actifs les plus précieux."
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
          description="Notre engagement envers l'excellence et l'innovation en cybersécurité régulièrement salué par l'industrie."
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
          title="Témoignages Clients" 
          description="Découvrez l'impact positif de nos solutions à travers les retours d'expérience de nos partenaires et clients."
        />
        <CyberSectionDivider />
        <TestimonialsSection />
      </main>
    );
  }

  notFound();
}
