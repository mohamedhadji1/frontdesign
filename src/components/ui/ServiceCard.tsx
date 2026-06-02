"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  className?: string;
};

export function ServiceCard({
  number,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link href={href} className={cn("block h-full group", className)}>
      <Card hoverEffect={true} className="flex flex-col h-full bg-white text-zinc-900 border border-zinc-100 hover:shadow-[0_20px_40px_rgba(220,38,38,0.06)] hover:border-red-500/20">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100/80 flex items-center justify-center text-red-600 font-black text-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
            {number}
          </div>
          <div className="text-zinc-400 group-hover:text-red-600 transition-colors">
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-zinc-950 group-hover:text-red-600 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </Card>
    </Link>
  );
}
