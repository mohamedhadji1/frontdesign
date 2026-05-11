import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Application Security Assessment | Keystone",
  description: "Secure your digital logic with dynamic and static Application Security Testing covering the OWASP Top 10 and advanced API exploitation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
