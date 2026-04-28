import type { Metadata } from "next";
import { ServicesIndexPage } from "./components/ServicesIndexPage";

export const metadata: Metadata = {
  title: "Services | Keystone",
  description:
    "Explore Keystone cybersecurity services: Managed Services, Offensive Security, GRC, Training & Awareness, Strategic Consulting, and Technical Audits.",
};

export default function ServicesPage() {
  return <ServicesIndexPage />;
}
