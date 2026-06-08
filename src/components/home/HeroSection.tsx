"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";
import "@blossom-carousel/core/style.css";
import { Search } from "lucide-react";
import { SearchWizard } from "./SearchWizard";

const BlossomCarousel = dynamic(
  () => import("@blossom-carousel/react").then((mod) => mod.BlossomCarousel),
  { ssr: false }
) as any;

const MotionLink = motion.create(Link);

interface KeystoneEvent {
  id: string;
  title: string;
  date: string;
  [key: string]: unknown;
}

const getFutureDate = (daysAhead: number) => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  d.setHours(10, 0, 0, 0);
  return d.toISOString();
};

function EventSlide({ event, index }: { event: KeystoneEvent; index: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<{
    d?: string; h?: string; m?: string; s?: string; started: boolean;
  } | null>(null);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isMounted || !event?.date) return;
    const targetDate = new Date(event.date).getTime();
    const updateTimer = () => {
      const now = Date.now();
      const distance = targetDate - now;
      if (distance < 0) { setTimeRemaining({ started: true }); return; }
      setTimeRemaining({
        d: Math.floor(distance / 86400000).toString().padStart(2, "0"),
        h: Math.floor((distance % 86400000) / 3600000).toString().padStart(2, "0"),
        m: Math.floor((distance % 3600000) / 60000).toString().padStart(2, "0"),
        s: Math.floor((distance % 60000) / 1000).toString().padStart(2, "0"),
        started: false,
      });
    };
    const t = setTimeout(updateTimer, 0);
    const iv = setInterval(updateTimer, 1000);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [event.date, isMounted]);

  return (
    <div
      className="ec-slide snap-center snap-always select-none shrink-0 h-full w-full"
      style={{ "--sibling-index": index + 1 } as React.CSSProperties}
    >
      <div className="ec-card w-full h-full pb-2">
        <div className="relative overflow-hidden h-full rounded-2xl border border-white/20 bg-neutral-950/75 p-5 sm:p-6 shadow-[0_24px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05)] flex flex-col justify-between backdrop-blur-md ring-1 ring-white/10 ring-inset transition-all duration-300 hover:border-white/35 hover:shadow-[0_30px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.1)]">
          {/* Glass reflection sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.10] pointer-events-none" />
          <div className="w-full flex flex-col justify-between h-full relative z-10">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-3.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">Events</h2>
              <span className="text-[9px] text-red-200 border border-red-500/30 bg-red-500/10 font-bold px-2 py-0.5 rounded uppercase tracking-wider">Upcoming</span>
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg leading-snug min-h-[56px] line-clamp-2">{event.title}</h3>
            {isMounted ? (
              <>
                <p className="flex items-center gap-1.5 text-gray-300 text-sm mt-3 font-medium">
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                {timeRemaining && !timeRemaining.started && (
                  <div className="mt-4">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2">Starts In</p>
                    <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/25 p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.25)]">
                      {[
                        { val: timeRemaining.d, label: "Days" },
                        { val: timeRemaining.h, label: "Hrs" },
                        { val: timeRemaining.m, label: "Min" },
                        { val: timeRemaining.s, label: "Sec", red: true },
                      ].map((unit, i, arr) => (
                        <div key={unit.label} className="flex items-center">
                          <div className="flex flex-col w-11 hover:scale-105 transition-transform">
                            <span className={`text-sm sm:text-base font-bold font-mono ${unit.red ? "text-red-400" : "text-white"}`}>{unit.val}</span>
                            <span className="text-[8px] text-gray-400 font-bold uppercase mt-0.5">{unit.label}</span>
                          </div>
                          {i < arr.length - 1 && <span className="text-gray-500 font-bold pb-3">:</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {timeRemaining?.started && (
                  <div className="mt-4 inline-block bg-red-500/20 border border-red-500/30 text-red-200 px-3 py-1 rounded-md text-[10px] font-bold animate-pulse">
                    Event is live
                  </div>
                )}
              </>
            ) : (
              <div className="h-[106px]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [events, setEvents] = useState<KeystoneEvent[]>([
    { id: "default-event-1", title: "Keystone Enterprise Cyber Summit 2026", date: getFutureDate(12) },
    { id: "default-event-2", title: "Webinar: Threat Hunting & EASM Best Practices", date: getFutureDate(28) },
    { id: "default-event-3", title: "Workshop: Classifying & Securing Critical Infrastructure", date: getFutureDate(45) },
  ]);

  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/public-data?type=events&limit=3");
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        if (data?.length > 0) setEvents(data);
      } catch (e) {
        console.error("Error fetching events:", e);
      }
    };
    fetchEvents();
  }, []);

  // Desktop-only overscroll fan-out
  function handleOverscroll(e: any) {
    if (window.innerWidth < 1024) return;
    e.preventDefault();
    const overscroll = e.detail.left * 0.2;
    const el = carouselRef.current as HTMLElement | null;
    if (!el) return;
    const cw = el.clientWidth;
    Array.from(el.children).forEach((child) => {
      (child as HTMLElement).style.transform =
        `translateX(${overscroll}px) rotate(${(overscroll / cw) * 70}deg) scale(${1 - Math.abs(overscroll) / cw})`;
    });
  }

  const handleScroll = (e: any) => {
    const el = e.target as HTMLElement;
    setCurrentEventIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const scrollToIndex = (index: number) => {
    setCurrentEventIndex(index);
    const el = carouselRef.current as HTMLElement | null;
    if (el?.children?.[index]) {
      el.children[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  useEffect(() => {
    if (events.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => {
        const next = (prev + 1) % events.length;
        const el = carouselRef.current as HTMLElement | null;
        if (el?.children?.[next]) {
          el.children[next].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-center">
          <source src="/vids/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 sm:bg-linear-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center gap-8 px-4 pt-28 pb-40 sm:px-6 sm:pt-32 sm:pb-48 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:pt-24 lg:pb-28 lg:overflow-visible">

        {/* Left: Hero Text */}
        <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:w-2/3 lg:items-start lg:gap-10 lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl uppercase"
          >
            Building the Digital Keystone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base font-medium tracking-wide text-zinc-300 sm:text-lg md:text-2xl leading-relaxed"
          >
            Intelligent cyber defense built to close the gap with advanced attacks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-2 flex w-full flex-col gap-3 text-white sm:mt-4 sm:w-auto sm:flex-row sm:gap-6"
          >
            <motion.button
              onClick={() => setIsSearchOpen(true)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base cursor-pointer"
            >
              Search Services & Capabilities <Search className="w-4 h-4" />
            </motion.button>
            <Link href="/about" className="w-full sm:w-auto">
              <motion.button whileHover={{ x: 10 }} className="flex w-full items-center justify-center gap-3 border-b border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white sm:text-base">
                About Us <span>→</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right: Events */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}
          className="relative z-20 mt-4 w-full lg:mt-0 lg:ml-auto lg:w-auto overflow-visible"
        >
          {events.length > 0 ? (
            <>
              <style dangerouslySetInnerHTML={{ __html: `
                /* ── shared token ── */
                .ec-wrap { --cw: 22rem; }

                /* ════════════════════════════
                   MOBILE — plain snap scroll,
                   NO animation on .ec-card
                   (parallax breaks UI cards)
                ════════════════════════════ */
                .ec-wrap .ec-carousel {
                  display: grid;
                  grid-auto-flow: column;
                  grid-auto-columns: 100%;
                  scroll-snap-type: x mandatory;
                  width: 100%;
                  height: 330px;
                  overflow-x: auto;
                  scroll-behavior: smooth;
                  scrollbar-width: none;
                  -webkit-overflow-scrolling: touch;
                }
                .ec-wrap .ec-carousel::-webkit-scrollbar { display: none; }

                .ec-wrap .ec-slide {
                  width: 100%;
                  height: 100%;
                  /* clip so card stays within bounds */
                  overflow: hidden;
                  scroll-snap-align: center;
                  scroll-snap-stop: always;
                }

                /* On mobile .ec-card is static — no animation */
                .ec-wrap .ec-slide .ec-card {
                  width: 100%;
                  height: 100%;
                }

                /* ════════════════════════════
                   DESKTOP — iMessage card stack
                ════════════════════════════ */
                @media (min-width: 1024px) {
                  .ec-wrap .ec-carousel {
                    width: calc(var(--cw) * 3);
                    padding-inline: var(--cw);
                    margin-left: calc(-1 * var(--cw));
                    height: 370px;
                    overflow-x: scroll;
                    overflow-y: visible;
                    scrollbar-width: none;
                  }

                  .ec-wrap .ec-slide {
                    width: var(--cw);
                    overflow: visible;
                    position: sticky;
                    left:  calc(var(--cw) * -1);
                    right: calc(var(--cw) * -1);
                    transform-origin: center 70%;
                    will-change: transform;
                    view-timeline: --ec-cards inline;
                    animation: ec-stack linear both;
                    animation-timeline: --ec-cards;
                    animation-range: contain;
                  }

                  .ec-wrap .ec-slide .ec-card {
                    animation: ec-rotate linear both;
                    animation-timeline: --ec-cards;
                    animation-range: contain -50% contain 150%;
                  }

                  @keyframes ec-stack {
                    0%  { z-index: calc(100 - var(--sibling-index, 1)); }
                    40% { z-index: 1000; }
                    100%{ z-index: var(--sibling-index, 1); }
                  }

                  @keyframes ec-rotate {
                    0%   { transform: translateX(-80%) rotate(10deg)  scale(0.8); opacity: 0; }
                    25%  { transform: translateX(-90%) rotate(5deg)   scale(0.9); opacity: 0.35; }
                    50%  { transform: translateX(0%)   rotate(0deg)   scale(1);   opacity: 1; }
                    60%  { transform: translateX(-20%) rotate(-15deg) scale(0.6); opacity: 0.15; }
                    75%  { transform: translateX(90%)  rotate(-5deg)  scale(0.9); opacity: 0.35; }
                    100% { transform: translateX(80%)  rotate(-10deg) scale(0.8); opacity: 0; }
                  }
                }
              `}} />

              <div className="ec-wrap relative w-full lg:w-[var(--cw,22rem)] overflow-hidden lg:overflow-visible">
                <BlossomCarousel
                  ref={carouselRef}
                  onScroll={handleScroll}
                  onOverscroll={(e: any) => handleOverscroll(e)}
                  className="ec-carousel cursor-grab active:cursor-grabbing"
                >
                  {events.map((event, index) => (
                    <EventSlide key={event.id} event={event} index={index} />
                  ))}
                </BlossomCarousel>
              </div>

              {/* Dots — mobile only */}
              {events.length > 1 && (
                <div className="flex lg:hidden justify-center gap-1.5 mt-4 relative z-30">
                  {events.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentEventIndex === idx ? "w-6 bg-red-500" : "w-1.5 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to event ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="relative overflow-hidden flex flex-col items-center justify-center py-8 bg-neutral-950/75 rounded-2xl border border-white/20 p-6 w-full shadow-[0_24px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05)] backdrop-blur-md ring-1 ring-white/10 ring-inset">
              {/* Glass reflection sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.12] pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-gray-400 mb-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <p className="text-gray-300 text-center font-medium">No upcoming events.</p>
                <p className="text-gray-500 text-xs text-center mt-1">Check back later for updates</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <CertificationsMarquee isAbsolute />
      <ScrollIndicator className="pointer-events-none hidden bottom-28 lg:flex xl:bottom-36" />
      <SearchWizard isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </motion.section>
  );
}