import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Environment Security Audit | Keystone",
  description: "Secure your multi-cloud infrastructure with Keystone. Comprehensive IAM, container, and configuration audits against CIS and NIST standards.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
