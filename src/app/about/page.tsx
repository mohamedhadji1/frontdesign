import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { MissionSection } from "@/components/about/MissionSection";
import { HighlightsSection } from "@/components/about/HighlightsSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { MapSection } from "@/components/home/MapSection";
import { Footer } from "@/components/layout/Footer";
import { ApproachSection } from "@/components/about/ApproachSection";

export const metadata = {
  title: "About Us | Keystone",
  description: "Your Trusted Cybersecurity Partner",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeroSection />
      <MissionSection />
      <ApproachSection />
      <HighlightsSection />
      <ContactCTASection />
      <MapSection />
    </main>
  );
}
