import { ContactCTASection } from "@/components/home/ContactCTASection";
import { ApproachSection } from "./sections/ApproachSection";
import { HeroSection } from "./sections/HeroSection";
import { StrategySection } from "./sections/StrategySection";
import { HighlightsSection } from "@/components/about/HighlightsSection";
import { MapSection } from "@/components/home/MapSection";

    export const metadata = {
    title: "OUR STRATEGY | Keystone",
    description: "Communicates long-term direction and thought leadership.",
    };

export default function Page() {
  return (
    
    <main>
      <HeroSection />
      <StrategySection />
      <ApproachSection />
      <ContactCTASection />
      <HighlightsSection />
      <MapSection />
    </main>
  );
}
