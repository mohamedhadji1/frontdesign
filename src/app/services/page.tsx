import type { Metadata } from "next";
import { ServicesIndexPage } from "./components/ServicesIndexPage";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Services | Keystone",
  description:
    "Explore Keystone cybersecurity services: Managed Services, Offensive Security, GRC, Training & Awareness, Strategic Consulting, and Technical Assessments.",
};

export default function ServicesPage() {
  return <ServicesIndexPage />;
  <BackToTop />
}
