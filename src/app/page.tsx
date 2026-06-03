import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ServicesCTASection } from "@/components/home/ServicesCTASection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { NewsSection } from "@/components/home/NewsSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { MapSection } from "@/components/home/MapSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { CVE } from "@/components/home/CVE";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection />
      <CyberSectionDivider />
      <SectionDivider title="KEYSTONE SERVICES" className="bg-white pb-0" />
      <ServicesSection />
      <CyberSectionDivider />
      <ServicesCTASection />
      <CyberSectionDivider />
      <SectionDivider title="WHO WE ARE" className="bg-white pb-0" />
      <WhoWeAreSection />
      <CyberSectionDivider />
      <SectionDivider title="SECTORS OF ACTIVITY" className="bg-white pb-0" />
      <SectorsSection />
      <CyberSectionDivider />
      <CallToActionSection />
      <CyberSectionDivider />
      <NewsSection />
      <CyberSectionDivider />
      <SectionDivider title="TRUSTED BY" className="bg-white pb-0" />
      <TrustedBySection />
      <CyberSectionDivider />
      <SectionDivider title="GLOBAL PRESENCE" className="bg-[#ffffff] pb-0" />
      <MapSection />
      <CyberSectionDivider />
      <ContactCTASection />

    </div>
  );
}
