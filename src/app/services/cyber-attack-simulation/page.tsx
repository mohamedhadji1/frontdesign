import { ApproachSection } from "./sections/ApproachSection";
import { DetailsSection } from "./sections/DetailsSection";
import { HeroSection } from "./sections/HeroSection";

export const metadata = {
  title: "Cyber Attack Simulation | Keystone",
  description: "Advanced cyber attack simulation and adversary emulation services.",
};

export default function CyberAttackSimulationPage() {
  return (
    <main className="min-h-screen bg-black/20">
      <HeroSection />
      <ApproachSection />
      <div className="bg-white">
        <DetailsSection />
      </div>
    </main>
  );
}
