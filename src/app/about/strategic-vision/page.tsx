import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ApproachSection } from "./sections/ApproachSection";
import { HeroSection } from "./sections/HeroSection";
import { StrategySection } from "./sections/StrategySection";
import { HighlightsSection } from "@/components/about/HighlightsSection";
import { MapSection } from "@/components/home/MapSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

    export const metadata = {
    title: "OUR STRATEGY | Keystone",
    description: "Communicates long-term direction and thought leadership.",
    };

export default function Page() {
  return (
    
    <main>
      <HeroSection />
      <SectionDivider title="KEYSTONE STRATEGY" className="bg-[#F3F3F1]" />
      <StrategySection />
      <SectionDivider title="KEYSTONE APPROACH" className="bg-black" />
      <ApproachSection />
      <ContactCTASection />
      <HighlightsSection />
      <SectionDivider title="OUR GLOBAL PRESENCE" className="bg-white" />
      <MapSection />
    </main>
  );
}
