import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Us | Keystone",
  description: "Get in touch with Keystone for Cyber Security services and advice.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
}