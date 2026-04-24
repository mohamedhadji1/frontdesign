"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";

type InteractiveExercisePanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    id: string;
    label: string;
    value: string;
    detail: string;
    icon: LucideIcon;
  }>;
};

export function InteractiveExercisePanel({
  eyebrow,
  title,
  description,
  items,
}: InteractiveExercisePanelProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [activeId, items],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;

        setPointer({ x, y });
      }}
      className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        animate={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(239, 68, 68, 0.16), transparent 28%)`,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
      />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-600">
            {eyebrow}
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600">{description}</p>

          <div className="space-y-3">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.id === activeItem?.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-red-200 bg-red-50 shadow-sm"
                      : "border-zinc-200 bg-white hover:border-red-100 hover:bg-zinc-50"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? "bg-red-600 text-white" : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-zinc-900">{item.label}</span>
                      <span className="text-xs font-bold uppercase tracking-[0.24em] text-red-600">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">{item.detail}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-6 text-white">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
                Active Exercise Layer
              </p>
              <h4 className="mt-2 text-2xl font-bold">{activeItem?.label}</h4>
            </div>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Module
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-100">{item.label}</p>
                <p className="mt-3 text-2xl font-bold text-red-400">{item.value}</p>
              </div>
            ))}
          </div>

          <motion.div
            key={activeItem?.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-400">
              Simulation Output
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {activeItem?.value}
            </p>
            <p className="mt-2 leading-relaxed text-zinc-400">
              {activeItem?.detail}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
