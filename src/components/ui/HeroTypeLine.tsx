"use client";

import { TypeAnimation } from "react-type-animation";

type HeroTypeLineProps = {
  items: string[];
  className?: string;
};

export function HeroTypeLine({ items, className }: HeroTypeLineProps) {
  const sequence = items.flatMap((item) => [item, 1200]);

  return (
    <div
      className={
        className ??
        "mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-400"
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
