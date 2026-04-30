"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
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
              <li><Link href="/services/offensive-security" className="text-sm text-zinc-400 transition-colors hover:text-white">Offensive , Red Teaming</Link></li>
              <li><Link href="/services/defensive-security" className="text-sm text-zinc-400 transition-colors hover:text-white">Defensive , Blue Teaming</Link></li>
              <li><Link href="/services/grc" className="text-sm text-zinc-400 transition-colors hover:text-white">Gouvernance , Risk & Compliance</Link></li>
              <li><Link href="/services/training" className="text-sm text-zinc-400 transition-colors hover:text-white">Sensibilisation et formation</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
            <motion.h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">SECTORS</motion.h2>
            <ul className="flex flex-col space-y-4">
              <li><span className="cursor-default text-sm text-zinc-400">Banking & Finance</span></li>
              <li><span className="cursor-default text-sm text-zinc-400">Telecom & Technology</span></li>
              <li><span className="cursor-default text-sm text-zinc-400">Energy & Industry</span></li>
              <li><span className="cursor-default text-sm text-zinc-400">Healthcare</span></li>
              <li><span className="cursor-default text-sm text-zinc-400">Critical Infrastructure</span></li>
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
            <motion.h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">CONTACT TO US</motion.h2>
            <div className="mb-6 flex flex-col space-y-4 text-sm text-zinc-300">
              <a href="mailto:info@keystonegroup.dz" className="transition-colors hover:text-white">
                info@keystonegroup.dz
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#200000] text-red-600 transition-colors hover:bg-red-900 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h2v8h4v-8h2l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#200000] text-red-600 transition-colors hover:bg-red-900 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#200000] text-red-600 transition-colors hover:bg-red-900 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-zinc-500">Copyright 2026 Keystone. All Rights Reserved.</div>

        <div className="flex flex-col items-center gap-6 border-t border-zinc-800/50 pt-8">
          <div className="grid h-auto w-full overflow-hidden rounded-xl border border-zinc-800 md:h-50 md:grid-cols-2">
            <div className="relative min-h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.22717001332313!2d10.1818530393194!3d36.84161549018999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337a661bde41%3A0xef358cd067c8060c!2sKEYSTONE%20GROUP!5e0!3m2!1sen!2stn!4v1777545129467!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col justify-center gap-1.5 border-t border-zinc-800 bg-zinc-950 px-5 py-6 text-center md:border-l md:border-t-0 md:text-left">
              <h3 className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white md:justify-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
                Keystone Group
              </h3>
              <p className="text-xs text-zinc-400">Tunis, Tunisia</p>
              <p className="text-xs text-zinc-600">info@keystonegroup.dz</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
