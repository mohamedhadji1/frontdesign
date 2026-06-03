"use client";

import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "red" | "blue";
};

export function Breadcrumbs({ items, className, theme = "red" }: BreadcrumbsProps) {
  const textColorClass = theme === "blue" ? "text-blue-500" : "text-red-500";
  const slashColorClass = theme === "blue" ? "text-blue-500/60" : "text-red-500/60";
  const hoverColorClass = theme === "blue" ? "hover:text-blue-400" : "hover:text-red-400";
  const activeColorClass = theme === "blue" ? "text-blue-400" : "text-red-400";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-6 inline-flex items-center gap-2.5 font-bold uppercase tracking-[0.2em] text-[10px]",
        textColorClass,
        className
      )}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <Fragment key={idx}>
            {idx > 0 && (
              <span className={cn("font-bold select-none", slashColorClass)} aria-hidden="true">
                &gt;
              </span>
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn("transition-colors", hoverColorClass)}
              >
                {item.label}
              </Link>
            ) : (
              <span className={activeColorClass}>{item.label}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
