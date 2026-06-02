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
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-6 inline-flex items-center gap-2.5 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]",
        className
      )}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <Fragment key={idx}>
            {idx > 0 && (
              <span className="text-red-500/60 font-bold select-none" aria-hidden="true">
                &gt;
              </span>
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-red-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-red-400">{item.label}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
