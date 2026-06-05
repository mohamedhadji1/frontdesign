"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Severity = "CRITICAL" | "HIGH" | "MEDIUM";
type Filter = "ALL" | Severity;

type CVEItem = {
  cve: string;
  cvss: number;
  severity: Severity;
  year: string;
};

const cveData: CVEItem[] = [
  { cve: "CVE-2025-51543", cvss: 9.8, severity: "CRITICAL", year: "2025" },
  { cve: "CVE-2022-22897",  cvss: 9.8, severity: "CRITICAL", year: "2022" },
  { cve: "CVE-2022-40842",  cvss: 9.1, severity: "CRITICAL", year: "2022" },
  { cve: "CVE-2024-48646",  cvss: 8.1, severity: "HIGH",     year: "2024" },
  { cve: "CVE-2024-35430",  cvss: 8.1, severity: "HIGH",     year: "2024" },
  { cve: "CVE-2024-35433",  cvss: 8.1, severity: "HIGH",     year: "2024" },
  { cve: "CVE-2024-35431",  cvss: 7.5, severity: "HIGH",     year: "2024" },
  { cve: "CVE-2022-40839",  cvss: 7.5, severity: "HIGH",     year: "2022" },
  { cve: "CVE-2024-48647",  cvss: 7.2, severity: "HIGH",     year: "2024" },
  { cve: "CVE-2024-35428",  cvss: 7.1, severity: "HIGH",     year: "2024" },
  { cve: "CVE-2024-35429",  cvss: 6.5, severity: "MEDIUM",   year: "2024" },
  { cve: "CVE-2024-42697",  cvss: 6.1, severity: "MEDIUM",   year: "2024" },
  { cve: "CVE-2024-48648",  cvss: 6.1, severity: "MEDIUM",   year: "2024" },
  { cve: "CVE-2024-35432",  cvss: 6.1, severity: "MEDIUM",   year: "2024" },
  { cve: "CVE-2022-40840",  cvss: 6.1, severity: "MEDIUM",   year: "2022" },
  { cve: "CVE-2022-40841",  cvss: 6.1, severity: "MEDIUM",   year: "2022" },
  { cve: "CVE-2022-44897",  cvss: 6.1, severity: "MEDIUM",   year: "2023" },
  { cve: "CVE-2024-48392",  cvss: 5.4, severity: "MEDIUM",   year: "2025" },
];

const severityConfig: Record<
  Severity,
  {
    cardBg: string;
    cardBorder: string;
    textCve: string;
    textScore: string;
    textLabel: string;
    textYear: string;
    badgeBg: string;
    badgeText: string;
    barTrack: string;
    barFill: string;
    filterActive: string;
  }
> = {
  CRITICAL: {
    cardBg: "#fef2f2",
    cardBorder: "#fca5a5",
    textCve: "#991b1b",
    textScore: "#dc2626",
    textLabel: "#ef4444",
    textYear: "#7f1d1d",
    badgeBg: "#dc2626",
    badgeText: "#ffffff",
    barTrack: "#fee2e2",
    barFill: "#dc2626",
    filterActive: "bg-red-600 text-white border-red-600",
  },
  HIGH: {
    cardBg: "#fff7ed",
    cardBorder: "#fdba74",
    textCve: "#9a3412",
    textScore: "#ea580c",
    textLabel: "#f97316",
    textYear: "#7c2d12",
    badgeBg: "#ea580c",
    badgeText: "#ffffff",
    barTrack: "#ffedd5",
    barFill: "#ea580c",
    filterActive: "bg-orange-600 text-white border-orange-600",
  },
  MEDIUM: {
    cardBg: "#fefbeb",
    cardBorder: "#fde047",
    textCve: "#854d0e",
    textScore: "#ca8a04",
    textLabel: "#eab308",
    textYear: "#713f12",
    badgeBg: "#eab308",
    badgeText: "#451a03",
    barTrack: "#fef9c3",
    barFill: "#eab308",
    filterActive: "bg-amber-500 text-white border-amber-500",
  },
};

const counts = {
  total: cveData.length,
  CRITICAL: cveData.filter((c) => c.severity === "CRITICAL").length,
  HIGH: cveData.filter((c) => c.severity === "HIGH").length,
  MEDIUM: cveData.filter((c) => c.severity === "MEDIUM").length,
};

export function CVE() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const filtered =
    filter === "ALL" ? cveData : cveData.filter((c) => c.severity === filter);

  const filters: { label: string; value: Filter; activeClass: string }[] = [
    {
      label: "All",
      value: "ALL",
      activeClass: "bg-zinc-900 text-white border-zinc-900",
    },
    {
      label: "Critical",
      value: "CRITICAL",
      activeClass: severityConfig.CRITICAL.filterActive,
    },
    {
      label: "High",
      value: "HIGH",
      activeClass: severityConfig.HIGH.filterActive,
    },
    {
      label: "Medium",
      value: "MEDIUM",
      activeClass: severityConfig.MEDIUM.filterActive,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div className="mb-12">
          <motion.h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.92] text-zinc-900 mb-4">
            Responsible Disclosure
          </motion.h2>

          <p className="font-sans text-sm text-zinc-500 max-w-lg leading-relaxed">
            Responsibly disclosed zero-days across critical enterprise
            ecosystems by our vulnerability security research team.
          </p>
        </div>

        {/* ── Stats bar ── */}
        <div className="flex divide-x divide-zinc-100 border border-zinc-100 rounded-xl overflow-hidden mb-8">
          {[
            { label: "Total",    value: counts.total,    color: "#18181b" },
            { label: "Critical", value: counts.CRITICAL, color: "#dc2626"  },
            { label: "High",     value: counts.HIGH,     color: "#ea580c" },
            { label: "Medium",   value: counts.MEDIUM,   color: "#d97706"  },
          ].map(({ label, value, color }) => (
            <div key={label} className="flex-1 py-4 px-6 text-center bg-white">
              <span 
                style={{ color }}
                className="block font-sans text-2xl font-bold"
              >
                {value}
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(({ label, value, activeClass }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`font-sans text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-1.5 rounded-full border transition-all duration-150 ${
                filter === value
                  ? activeClass
                  : "border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => {
              const cfg = severityConfig[item.severity];
              const pct = (item.cvss / 10) * 100;

              return (
                <motion.div
                  key={item.cve}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  style={{ backgroundColor: cfg.cardBg, borderColor: cfg.cardBorder }}
                  className="relative border rounded-2xl p-4 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* CVE ID + badge */}
                  <div className="flex items-start justify-between mb-4 mt-1">
                    <span 
                      style={{ color: cfg.textCve }}
                      className="font-sans text-[10px] font-black leading-tight tracking-wider"
                    >
                      {item.cve}
                    </span>
                    <span
                      style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeText }}
                      className="font-sans text-[8px] font-black uppercase tracking-[0.12em] px-2 py-0.5 rounded"
                    >
                      {item.severity}
                    </span>
                  </div>

                  {/* CVSS score */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span 
                      style={{ color: cfg.textScore }}
                      className="font-sans text-3xl font-black leading-none"
                    >
                      {item.cvss}
                    </span>
                    <span 
                      style={{ color: cfg.textLabel }}
                      className="font-sans text-[9px] uppercase tracking-[0.08em] font-black"
                    >
                      CVSS
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div 
                    className="w-full h-[3px] rounded-full overflow-hidden mb-4"
                    style={{ backgroundColor: cfg.barTrack }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: cfg.barFill }}
                    />
                  </div>

                  {/* Footer */}
                  <div 
                    className="flex items-center justify-between border-t pt-3"
                    style={{ borderTopColor: cfg.cardBorder }}
                  >
                    <span 
                      style={{ color: cfg.textLabel }}
                      className="font-sans text-[9px] uppercase tracking-[0.08em] font-black"
                    >
                      Year
                    </span>
                    <span 
                      style={{ color: cfg.textYear }}
                      className="font-sans text-[11px] font-bold"
                    >
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}