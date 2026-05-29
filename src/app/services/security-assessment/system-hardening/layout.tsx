import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Hardening Security Services | Keystone",
  description: "Reduce your infrastructure attack surface. Our system hardening services align your endpoints and servers with CIS Benchmarks.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
