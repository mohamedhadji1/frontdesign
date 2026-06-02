import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Us | Keystone",
  description: "Contact Keystone to discuss cybersecurity services, incident support, compliance programs, training, and enterprise security requirements.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Keystone",
    description: "Speak with Keystone cybersecurity experts about your security needs.",
    url: "/contact",
    siteName: "Keystone",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Keystone",
    description: "Contact Keystone for cybersecurity services and incident support.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
}
