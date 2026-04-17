import { Metadata } from "next";
import { HeroSection } from "./components/HeroSection";
import { AdvancedExpertiseSection } from "./components/AdvancedExpertiseSection";
import { VersatilityAndImpartialitySection } from "./components/VersatilityAndImpartialitySection";
import { OurLeaderSection } from "./components/OurLeaderSection";
import { MapSection } from "@/components/home/MapSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { HighlightsSection } from "../strategic-vision/sections/HighlightsSection";

export const metadata: Metadata = {
  title: "Our Leadership & Expertise | Keystone",
  description: "Learn about the leadership team and expertise at Keystone.",
};

export default function LeadershipExpertisePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Gotham', -apple-system, BlinkMacSystemFont" }}>
      <HeroSection />

      <section
        className="py-24 px-6 lg:px-12 container mx-auto max-w-[1600px] relative overflow-hidden"
        style={{
          backgroundImage: "url('/background/bg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/80 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AdvancedExpertiseSection />
          <VersatilityAndImpartialitySection />
        </div>
      </section>

      <OurLeaderSection />
      <ContactCTASection />
      <MapSection />
    </div>
  );
}