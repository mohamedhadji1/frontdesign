import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Exercise | Keystone",
  description:
    "Explore Keystone cyber exercise programs covering business continuity, resilience, recovery, cybersecurity, and investigation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
