import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Threat Intelligence | Keystone",
  description: "Empower your security posture with actionable intelligence. We monitor the dark web, malicious infrastructure, and geopolitical trends to anticipate attacks tailored to your industry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
