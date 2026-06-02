"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
};

export function Card({
  children,
  className,
  hoverEffect = true,
  onClick,
}: CardProps) {
  const Component = onClick ? "button" : "div";

  const cardContent = (
    <div
      className={cn(
        "bg-white rounded-[2rem] p-6 sm:p-8 border border-zinc-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300",
        hoverEffect && "hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-zinc-200/60 hover:-translate-y-1.5",
        onClick && "w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (hoverEffect) {
    return (
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="h-full flex flex-col"
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
