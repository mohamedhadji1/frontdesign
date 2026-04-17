"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="w-[90%] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-3 flex flex-col items-start pr-4">
            <Link href="/" className="mb-6 block relative w-70 h-30">
              <Image 
                src="/logos/KEYSTONE footer.png" 
                alt="Keystone Logo"
                fill
                unoptimized
                className="object-contain object-left"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Elite cybersecurity experts protecting your business from evolving threats. We secure what matters most to you.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">SERVICES</h3>
            <ul className="space-y-4 flex flex-col">
              <li>
                <Link href="/services/offensive-security" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Offensive , Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/services/defensive-security" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Defensive , Blue Teaming
                </Link>
              </li>
              <li>
                <Link href="/services/grc" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Gouvernance , Risk & Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Sensibilisation et formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">SECTORS</h3>
            <ul className="space-y-4 flex flex-col">
              <li>
                <span className="text-zinc-400 text-sm cursor-default">Banking & Finance</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm cursor-default">Telecom & Technology</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm cursor-default">Energy & Industry</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm cursor-default">Healthcare</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm cursor-default">Critical Infrastructure</span>
              </li>
            </ul>
          </div>

          {/* Careers Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">CAREERS</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px] mb-4">
              Join our team of elite experts and build the future of cybersecurity.
            </p>
            <Link 
              href="/careers" 
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-md text-sm transition-all group"
            >
              Open Positions
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 lg:pl-0">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">TALK TO US</h3>
            <div className="space-y-4 flex flex-col text-sm text-zinc-300">
              <a href="tel:+213023804757" className="hover:text-white transition-colors">
                +213 (0) 23 80 47 57
              </a>
              <a href="mailto:info@keystonegroup.dz" className="hover:text-white transition-colors">
                info@keystonegroup.dz
              </a>
            </div>

            {/* Emergency Box */}
            <div className="mt-8 border border-red-900 bg-[#150404] rounded-md p-4">
              <p className="text-red-500 text-xs font-semibold uppercase mb-1">24/7 Emergency</p>
              <p className="text-zinc-400 text-xs mb-3">Security Incident Hotline</p>
              <a href="tel:+213023804757" className="text-white font-bold block text-sm hover:text-red-400 max-w-fit">
                +213 (0) 23 80 47 57
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and sub-footer */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
            <Image 
              src="/logos/site icon.png" 
              width={100}
              height={100}
              alt="footer icon"
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="text-zinc-500 text-sm">
            © 2026 Keystone. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#" 
              aria-label="Facebook" 
              className="w-10 h-10 rounded-full bg-[#200000] flex items-center justify-center text-red-600 hover:bg-red-900 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="w-10 h-10 rounded-full bg-[#200000] flex items-center justify-center text-red-600 hover:bg-red-900 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a 
              href="#" 
              aria-label="Twitter" 
              className="w-10 h-10 rounded-full bg-[#200000] flex items-center justify-center text-red-600 hover:bg-red-900 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}