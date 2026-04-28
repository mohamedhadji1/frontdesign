import type { Metadata } from "next";
import { SectorsIndexPage } from "./components/SectorsIndexPage";

export const metadata: Metadata = {
  title: "Sectors | Keystone",
  description:
    "Explore Keystone cybersecurity services by sector: healthcare, telecom and IT, transportation, energy, fintech, finance, media, industrial, and public organizations.",
};

export default function SectorsPage() {
  return <SectorsIndexPage />;
}
