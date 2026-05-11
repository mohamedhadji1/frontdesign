import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICS/SCADA Industrial Security Assessment | Keystone",
  description: "Protect critical infrastructure. Keystone provides passive discovery and safe OT security assessments aligning with IEC 62443 and the Purdue Model.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
