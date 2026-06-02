"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const footerSectorLinks = [
    { label: "Healthcare", href: "/sectors/healthcare" },
    { label: "Telecom & IT", href: "/sectors/telecom-it" },
    { label: "Transportation", href: "/sectors/transportation" },
    { label: "Energy", href: "/sectors/energy" },
    { label: "Finance", href: "/sectors/finance" },
  ];

  return (
    <footer className="border-t border-zinc-900 bg-[#050505] pb-10 pt-20 text-white">
      <div className="mx-auto w-[90%]">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:pr-4 lg:text-left">
            <Link href="/" className="relative mb-6 block h-24 w-60 sm:h-28 sm:w-72 lg:h-30 lg:w-70">
              <Image
                src="/logos/KEYSTONE footer.png"
                alt="Keystone Logo"
                fill
                unoptimized
                className="object-contain lg:object-left"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Elite cybersecurity experts protecting your business from evolving threats. We secure what matters most to you.
            </p>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <motion.h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">SERVICES</motion.h2>
            <ul className="flex flex-col space-y-4">
              <li><Link href="/services/red-team" className="text-sm text-zinc-400 transition-colors hover:text-white">Offensive Security / Red Teaming</Link></li>
              <li><Link href="/services/security-assessment" className="text-sm text-zinc-400 transition-colors hover:text-white">Assessment & Technical Assistance</Link></li>
              <li><Link href="/services/defensive-security/soc-management" className="text-sm text-zinc-400 transition-colors hover:text-white">Defensive Security / Blue Teaming</Link></li>
              <li><Link href="/services/governance-risk-compliance" className="text-sm text-zinc-400 transition-colors hover:text-white">Governance, Risk & Compliance</Link></li>
              <li><Link href="/services/cybersecurity-strategy-consulting" className="text-sm text-zinc-400 transition-colors hover:text-white">Cybersecurity Consulting</Link></li>
              <li><Link href="/services/awareness" className="text-sm text-zinc-400 transition-colors hover:text-white">Training & Awareness</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
            <motion.h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">SECTORS</motion.h2>
            <ul className="flex flex-col space-y-4">
              {footerSectorLinks.map((sector) => (
                <li key={sector.href}>
                  <Link href={sector.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {sector.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
            <motion.h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">CAREERS</motion.h2>
            <p className="mb-4 max-w-[200px] text-sm leading-relaxed text-zinc-400">
              Join our team of elite experts and build the future of cybersecurity.
            </p>
            <Link
              href="/careers"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-red-700"
            >
              Open Positions
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:pl-0 lg:text-left">
            <motion.h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">CONTACT US</motion.h2>
            <div className="mb-6 flex flex-col gap-4 text-sm text-zinc-300">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">General inquiries</p>
                <a href="mailto:contact@keystone-corporation.com" className="mt-1 block transition-colors hover:text-white">
                  contact@keystone-corporation.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <a href="https://www.facebook.com/keystonecyber/" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#200000] text-red-600 transition-colors hover:bg-red-900 hover:text-white group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 666.667 666.667"><defs><clipPath id="footer-facebook" clipPathUnits="userSpaceOnUse"><path d="M0 700h700V0H0Z"/></clipPath></defs><g clipPath="url(#footer-facebook)" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)"><path d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0" fill="currentColor" transform="translate(600 350)"/><path d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.559 250.559 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z" className="fill-[#200000] group-hover:fill-red-900 transition-colors duration-300" transform="translate(447.918 273.604)"/></g></svg>
              </a>
              <a href="https://tn.linkedin.com/company/keystone-cybersecurity" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#200000] text-red-600 transition-colors hover:bg-red-900 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-zinc-500">Copyright 2026 Keystone. All Rights Reserved.</div>

      </div>
    </footer>
  );
}
