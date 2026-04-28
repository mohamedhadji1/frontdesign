import type { Metadata } from "next";
import { PublicSectorPage } from "../components/PublicSectorPage";

export const metadata: Metadata = {
  title: "Governments and Public Organizations | Keystone",
  description:
    "Cybersecurity services for governments and public organizations, from sensitive data protection to critical infrastructure monitoring.",
};

export default function PublicPage() {
  return <PublicSectorPage />;
}
