import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/privacy/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Keystone",
  description:
    "Learn how Keystone handles contact inquiries, incident reports, career applications, CV uploads, retention, security, and deletion requests.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Keystone",
    description:
      "Keystone privacy policy for contact, incident response, and career application data.",
    url: "/privacy",
    siteName: "Keystone",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Keystone",
    description:
      "How Keystone handles contact, incident response, and recruitment data.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
