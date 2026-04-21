import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Banking System Security Audit | Keystone",
  description: "Secure your financial backbone. We provide advanced vulnerability assessments for core banking systems, ensuring SWIFT and PCI-DSS compliance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
