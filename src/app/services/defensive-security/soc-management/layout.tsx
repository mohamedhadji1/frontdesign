import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOC Management | Keystone",
  description: "Comprehensive 24/7 monitoring, vulnerability scanning, incident management, threat intelligence, and anti-phishing solutions to protect your organization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
