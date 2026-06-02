import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  "aria-label"?: string;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 active:bg-red-800",
  secondary:
    "border border-zinc-300 bg-white text-zinc-950 hover:border-red-500 hover:text-red-600 active:bg-zinc-50",
  ghost:
    "border border-transparent bg-transparent text-current hover:border-current/30 hover:bg-white/10 active:bg-white/15",
  danger:
    "bg-red-700 text-white shadow-lg shadow-red-700/25 hover:bg-red-800 active:bg-red-900",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  external,
  ...props
}: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 sm:px-8",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
    </Link>
  );
}
