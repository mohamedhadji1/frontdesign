"use client";

import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function MissionSection() {
  return (
    <section className="relative w-full pb-12 lg:pb-16 bg-[#ffffffd6] overflow-hidden flex flex-col items-center text-center">
      

      <SectionDivider title="ABOUT KEYSTONE" className="bg-transparent mt-0 mb-12 relative z-20" />
      
      {/* Plus Network Pattern Background */}
      <div
        className="absolute inset-y-0 right-0 w-[100%] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 19V15h2v4h4v2h-4v4h-2v-4h-4v-2h4z' fill='%23e5e7eb' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >

          <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a102f] mb-10 leading-[1.25]">
            Working as an extension of your team to combat cyber threats
          </h3>

          <div className="text-left text-[#5c687b] text-[17px] leading-[1.75] font-medium max-w-3xl mx-auto space-y-6">
            <p>
              Keystone is an award-winning provider of Managed Detection and Response and security assessment services. By leveraging our understanding of the tactics attackers use to breach defences, in-depth knowledge of the latest security tools and a commitment to innovation, we ensure our clients are armed to continuously prevent, detect and respond to cyber threats.
            </p>
            <p>
              Keystone is now part of Kroll, the world`&apos;`s premier provider of services and digital products related to governance, risk and transparency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}