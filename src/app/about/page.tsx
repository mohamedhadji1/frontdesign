import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { MissionSection } from "@/components/about/MissionSection";
import { HighlightsSection } from "@/components/about/HighlightsSection";
import { ContactCTASection } from "@/components/about/ContactCTASection";
import { MapSection } from "@/components/home/MapSection";
import { Footer } from "@/components/layout/Footer";
import { ApproachSection } from "@/components/about/ApproachSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata = {
  title: "About Us | Keystone",
  description: "Your Trusted Cybersecurity Partner",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeroSection />
      <SectionDivider title="KEYSTONE MISSION" />
      <MissionSection z-index={10} />
      <HighlightsSection />
      <ContactCTASection />
      <div className="mb-[30px] bg-[#0a0a0a00] margin-bottom-[-27px]">
      <SectionDivider title="GLOBAL PRESENCE" className="bg-white mt-[-27px]" />
      </div>
      <MapSection />
    </main>
  );
}
