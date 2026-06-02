"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type SolutionCardProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function SolutionCard({
  title,
  subtitle,
  description,
  href,
  icon: Icon,
  className,
}: SolutionCardProps) {
  return (
    <Link href={href} className={cn("block h-full group", className)}>
      <Card hoverEffect={true} className="flex flex-col h-full bg-white text-zinc-900 border border-zinc-100 hover:shadow-[0_20px_40px_rgba(220,38,38,0.06)] hover:border-red-500/20">
        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm border border-red-100 group-hover:border-red-600 shrink-0">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{subtitle}</p>
        <h3 className="text-xl font-bold mb-4 text-zinc-950 leading-tight mt-3">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{description}</p>
        <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center text-red-600 font-bold text-sm tracking-wide uppercase group-hover:translate-x-1 transition-transform">
          Explore solution &rarr;
        </div>
      </Card>
    </Link>
  );
}
