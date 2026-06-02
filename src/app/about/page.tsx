import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Keystone B2B Cyber Defense",
  description: "Keystone is a premier B2B cybersecurity advisory group with over 20 years of experience. Learn about our mission, commitments, services, and regional focus.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Keystone B2B Cyber Defense",
    description: "Discover Keystone's operational history, GRC compliance support, red/blue teaming, and EMEA cybersecurity programs.",
    url: "/about",
    siteName: "Keystone",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Us | Keystone B2B Cyber Defense",
    description: "Discover Keystone's cybersecurity operations, corporate mission, and client-centric outcomes.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
