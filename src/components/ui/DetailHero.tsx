"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type DetailHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  backLink?: { href: string; label: string };
  backgroundImageUrl?: string;
  backgroundVideoUrl?: string;
  className?: string;
  heightClassName?: string;
};

export function DetailHero({
  eyebrow,
  title,
  description,
  actions,
  backLink,
  backgroundImageUrl,
  backgroundVideoUrl,
  className,
  heightClassName = "h-[100vh] min-h-[100vh]",
}: DetailHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative w-full flex flex-col justify-between overflow-hidden pt-36 sm:pt-44 lg:pt-48 pb-12 text-white",
        heightClassName,
        className
      )}
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {backgroundVideoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={backgroundVideoUrl} type="video/mp4" />
          </video>
        ) : backgroundImageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-950" />
        )}
        <div className="absolute inset-0 bg-black/30 sm:bg-linear-to-r sm:from-black/75 sm:via-black/30 sm:to-transparent" />
        <div className="absolute inset-0 bg-[url('/background/vector/cyber-matrix.svg')] bg-cover bg-center opacity-10 mix-blend-screen" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          {backLink && (
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              {backLink.label}
            </Link>
          )}

          {eyebrow && (
            <Breadcrumbs
              items={eyebrow.split("/").map((part, idx) => {
                const trimmed = part.trim();
                let href: string | undefined = undefined;
                if (idx === 0) {
                  const lower = trimmed.toLowerCase();
                  if (lower === "services") href = "/services";
                  if (lower === "sectors") href = "/sectors";
                  if (lower === "solutions") href = "/solutions";
                }
                return { label: trimmed, href };
              })}
            />
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-light tracking-tight text-white leading-[1.05] uppercase"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-medium tracking-wide leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center lg:items-start"
            >
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
