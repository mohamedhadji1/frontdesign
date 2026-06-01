import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Exercise Design & Management | Keystone",
  description:
    "Explore Keystone Cyber Exercise Design & Management programs covering business continuity, resilience, recovery, cybersecurity, and investigation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
