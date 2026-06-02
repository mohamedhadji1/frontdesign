"use client";

import { LucideIcon, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 sm:p-12 border border-dashed border-zinc-200 bg-zinc-50/30 rounded-[2rem]",
        className
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-medium mb-6">
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
}
