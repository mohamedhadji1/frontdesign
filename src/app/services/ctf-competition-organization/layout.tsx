import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CTF Competition Organization | Keystone",
  description: "Develop your cybersecurity skills through gamification with custom Capture The Flag (CTF) events.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
