import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ServicesCTASection } from "@/components/home/ServicesCTASection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { NewsSection } from "@/components/home/NewsSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { MapSection } from "@/components/home/MapSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection />
      <SectionDivider title="KEYSTONE SERVICES" className="bg-white pb-0"/>
      <ServicesSection />
      <ServicesCTASection />
      <SectionDivider title="WHO WE ARE" className="bg-white pb-0"/>
      <WhoWeAreSection />
      <SectionDivider title="SECTORS OF ACTIVITY" className="bg-white pb-0" />
      <SectorsSection />
      <CallToActionSection />
      <NewsSection />
      <SectionDivider title="TRUSTED BY" className="bg-black/20 pb-0" />
      <TrustedBySection />
      <SectionDivider title="GLOBAL PRESENCE" className="bg-[#ffffff] pb-0" />
      <MapSection />
      <ContactCTASection />
    </div>
  );
}
