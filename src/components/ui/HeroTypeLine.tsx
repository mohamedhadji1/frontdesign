"use client";

import { TypeAnimation } from "react-type-animation";

type HeroTypeLineProps = {
  items: string[];
  className?: string;
  theme?: "red" | "blue";
};

export function HeroTypeLine({ items, className, theme = "red" }: HeroTypeLineProps) {
  const sequence = items.flatMap((item) => [item, 1200]);
  const textColorClass = theme === "blue" ? "text-blue-400" : "text-red-400";

  return (
    <div
      className={
        className ??
        `mb-3 text-sm font-bold uppercase tracking-[0.3em] ${textColorClass}`
      }
    >
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        repeat={Infinity}
        speed={58}
        deletionSpeed={72}
      />
    </div>
  );
}
