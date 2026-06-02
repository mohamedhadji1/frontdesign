"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type JobCardProps = {
  title: string;
  department: string;
  location: string;
  type: string;
  href: string;
  className?: string;
};

export function JobCard({
  title,
  department,
  location,
  type,
  href,
  className,
}: JobCardProps) {
  return (
    <Link href={href} className={cn("block group h-full", className)}>
      <Card hoverEffect={true} className="flex flex-col h-full bg-white text-zinc-900 border border-zinc-100 hover:shadow-[0_20px_40px_rgba(220,38,38,0.06)] hover:border-red-500/20">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/60 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
            {department}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider">
            <Briefcase size={10} />
            {type}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-zinc-950 group-hover:text-red-600 transition-colors leading-snug">
          {title}
        </h3>
        <div className="mt-auto pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-zinc-400" />
            {location}
          </span>
          <span className="inline-flex items-center gap-1.5 text-red-600 font-bold group-hover:translate-x-1 transition-transform">
            View offer &rarr;
          </span>
        </div>
      </Card>
    </Link>
  );
}
