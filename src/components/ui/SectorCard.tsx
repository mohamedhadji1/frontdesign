"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type SectorCardProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function SectorCard({
  title,
  subtitle,
  description,
  href,
  icon: Icon,
  className,
}: SectorCardProps) {
  return (
    <Link href={href} className={cn("block h-full group", className)}>
      <Card hoverEffect={true} className="flex flex-col h-full bg-white text-zinc-900 border border-zinc-100 hover:shadow-[0_20px_40px_rgba(220,38,38,0.06)] hover:border-red-500/20">
        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-50 shrink-0">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{subtitle}</p>
        <h3 className="text-lg font-bold mb-3 text-zinc-950 group-hover:text-red-600 transition-colors leading-tight mt-2">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {description}
        </p>
        <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-red-600 font-bold text-xs tracking-wider uppercase">
          <span>View sector details</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}
