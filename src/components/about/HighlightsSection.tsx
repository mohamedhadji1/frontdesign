"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function HighlightsSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-[#fff] text-gray-900 border-t border-gray-200">

      {/* Divider exactly matching previous red top-aligns */}
      <SectionDivider title="OUR VALUES" className="bg-transparent mb-16 relative z-20" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl pb-16 lg:pb-24 mt-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex flex-col justify-start"
          >
            <motion.h2 className="text-4xl lg:text-5xl leading-tight font-medium text-black mb-6">
              Keystone has adopted Quality Production as its basic principle.
            </motion.h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-md">
              To be one of the pioneering, dynamic and leading companies that
              offer quality products and services with an understanding of
              continuous improvement in the fields in which it operates.
            </p>
            <div>
              <Link
                href="#"
                className="inline-block text-black font-semibold underline underline-offset-8 decoration-gray-400 hover:decoration-black transition-colors"
              >
                Quality Certificates
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-200">
                <Image
                  src="/images/team.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <motion.h2 className="text-2xl font-medium text-black mb-3">
                Our Mission
              </motion.h2>
              <p className="text-gray-600 flex-grow mb-6">
                Center we have developped many patents in filling and packaging
                technology.
              </p>
              <Link
                href="/contact"
                className="flex items-center text-black font-medium text-sm group"
              >
                Read More
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-200">
                <Image
                  src="/background/bg4.png"
                  alt="Our Vision"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <motion.h2 className="text-2xl font-medium text-black mb-3">
                Our Vision
              </motion.h2>
              <p className="text-gray-600 flex-grow mb-6">
                Marshmallow pastry jelly beans chocolate bar cake pastry powder
                gummi bears.
              </p>
              <Link
                href="/contact"
                className="flex items-center text-black font-medium text-sm group"
              >
                Read More
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}