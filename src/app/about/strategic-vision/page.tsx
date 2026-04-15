import { ApproachSection } from "./sections/ApproachSection";
import { CtaSection } from "./sections/CtaSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { StrategySection } from "./sections/StrategySection";

    export const metadata = {
    title: "OUR STRATEGY | Keystone",
    description: "Communicates long-term direction and thought leadership.",
    };

export default function Page() {
  return (
    
    <main>
      <StrategySection />
      <ApproachSection />
      <CtaSection />
    </main>
  );
}
