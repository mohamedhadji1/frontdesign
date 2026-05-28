import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Application Assessment | Keystone",
  description:
    "Evaluate web and mobile application security with deep analysis, penetration testing, secure coding review, and practical remediation guidance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
