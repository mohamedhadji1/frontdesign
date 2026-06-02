import type { Metadata } from "next";
import { ReportIncidentClient } from "./ReportIncidentClient";

export const metadata: Metadata = {
  title: "Report an Incident | Keystone Urgent Cyber Containment",
  description: "If you suspect an active security breach, compromised host, or ransomware exfiltration event, submit a structured incident report here for immediate containment.",
  alternates: {
    canonical: "/report-incident",
  },
  openGraph: {
    title: "Report an Incident | Keystone Urgent Cyber Containment",
    description: "Urgent cybersecurity incident disclosure and rapid triage request portal.",
    url: "/report-incident",
    siteName: "Keystone",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Report an Incident | Keystone Urgent Cyber Containment",
    description: "Submit minimum safe details to initiate encrypted communications with our active incident containment team.",
  },
};

export default function ReportIncidentPage() {
  return <ReportIncidentClient />;
}
