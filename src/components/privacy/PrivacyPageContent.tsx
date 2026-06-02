"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";

const sections = [
  {
    title: "Data We Collect",
    body: "Keystone collects contact details, company information, inquiry details, incident report details, recruitment information, CV metadata, and technical data needed to respond to your request.",
  },
  {
    title: "Contact Form Handling",
    body: "Contact form submissions are used to qualify your request, route it to the relevant team, respond to you, and keep a business record of the conversation.",
  },
  {
    title: "Incident Report Handling",
    body: "Incident reports may contain sensitive cybersecurity information. Access is restricted to authorized Keystone personnel involved in triage, containment, investigation, and client coordination.",
  },
  {
    title: "CV And Application Handling",
    body: "Career application data and CVs are used for recruitment evaluation, interview coordination, talent pipeline management, and lawful hiring administration.",
  },
  {
    title: "Retention",
    body: "Keystone retains data only for as long as needed for the purpose collected, legal obligations, dispute resolution, security operations, or legitimate business continuity requirements.",
  },
  {
    title: "Security Measures",
    body: "We apply access control, secure transmission practices, operational confidentiality, least-privilege handling, and administrative safeguards for sensitive submissions.",
  },
  {
    title: "Deletion Requests",
    body: "You may request deletion, correction, or restriction of your personal data where legally applicable. Keystone will verify and process requests through the privacy contact channel.",
  },
  {
    title: "Who Can Access Data",
    body: "Access is limited to authorized Keystone teams, approved service providers under confidentiality obligations, and legal or regulatory parties when required by law.",
  },
];

export function PrivacyPageContent() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-zinc-950 px-4 pb-20 pt-36 text-white sm:px-6 md:px-12"
      >
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-red-400"
          >
            Privacy And Data Protection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg"
          >
            This policy explains how Keystone handles contact requests, incident reports, career applications, and security-sensitive information submitted through this website.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact" variant="primary">Contact Keystone</ButtonLink>
            <ButtonLink href="/report-incident" variant="danger">Report an Incident</ButtonLink>
          </div>
        </div>
      </motion.section>

      <section className="px-4 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">Policy Scope</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
              Clear handling for sensitive cybersecurity data.
            </h2>
            <p className="mt-5 text-sm leading-7 text-zinc-600">
              For privacy requests, contact{" "}
              <Link className="font-bold text-red-600 hover:text-red-700" href="mailto:contact@keystone-corporation.com">
                contact@keystone-corporation.com
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-5 lg:col-span-8 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-zinc-950">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
