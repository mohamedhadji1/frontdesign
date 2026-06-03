"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";

interface ServiceHeroSectionProps {
  title: string;
  description?: string;
  heroItems?: string[];
  breadcrumbs?: BreadcrumbItem[];
  videoSrc?: string;
  imageSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  theme?: "red" | "blue";
}

export function ServiceHeroSection({
  title,
  description,
  heroItems = [],
  breadcrumbs,
  videoSrc = "/vids/videoplayback.mp4",
  imageSrc,
  ctaLabel = "Consult an Expert",
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref = "/services",
  theme = "red",
}: ServiceHeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[100vh] min-h-[100vh] flex flex-col justify-between overflow-hidden pt-36 sm:pt-44 lg:pt-48 pb-12 text-white"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/25 sm:bg-linear-to-r sm:from-black/65 sm:via-black/25 sm:to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full max-w-4xl"
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} theme={theme} className="mb-6" />
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-[4.5rem] font-light tracking-tight text-white leading-[1.05] uppercase"
          >
            {title}
          </motion.h1>

          {heroItems.length > 0 && (
            <HeroTypeLine items={heroItems} theme={theme} />
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-medium tracking-wide leading-relaxed max-w-3xl"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center lg:items-start"
          >
            <Link
              href={ctaHref}
              className={`${
                theme === "blue"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-red-600 hover:bg-red-700"
              } text-white font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full flex items-center justify-center gap-4 transition-all shadow-2xl`}
            >
              {ctaLabel}
              <span>→</span>
            </Link>

            {secondaryCtaLabel && (
              <Link
                href={secondaryCtaHref}
                className={`border-b border-white ${
                  theme === "blue"
                    ? "hover:border-blue-500 hover:text-blue-500"
                    : "hover:border-red-500 hover:text-red-500"
                } text-white font-medium py-3 px-6 flex items-center justify-center transition-all bg-transparent w-max`}
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </motion.section>
  );
}
