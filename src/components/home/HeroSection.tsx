"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { CertificationsMarquee } from "@/components/ui/CertificationsMarquee";

const MotionLink = motion.create(Link);

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block animate-none"
    >
      {text}
    </motion.span>
  );
}

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

export function HeroSection() {
  const [events, setEvents] = useState<KeystoneEvent[]>([
    {
      id: "default-event-1",
      title: "Keystone Enterprise Cyber Summit 2026",
      date: getFutureDate(12),
    },
    {
      id: "default-event-2",
      title: "Webinar: Threat Hunting & EASM Best Practices",
      date: getFutureDate(28),
    },
    {
      id: "default-event-3",
      title: "Workshop: Classifying & Securing Critical Infrastructure",
      date: getFutureDate(45),
    }
  ]);
  const [timeRemaining, setTimeRemaining] = useState<{
    d?: string;
    h?: string;
    m?: string;
    s?: string;
    started: boolean;
  } | null>(null);

  // Fetch events from Firebase
  useEffect(() => {
    // Only subscribe if firestore is initialized with real config 
    // to avoid early crashes if env vars are missing
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) return;

    const q = query(collection(db, "events"), orderBy("date", "asc"), limit(3));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || "Untitled",
        date: doc.data().date || new Date().toISOString(),
        ...doc.data(),
      })) as KeystoneEvent[];
      if (fetchedEvents.length > 0) {
        setEvents(fetchedEvents);
      }
    });

    return () => unsubscribe();
  }, []);

  // Countdown timer logic for the first event
  useEffect(() => {
    if (events.length === 0 || !events[0].date) {
      const timeout = setTimeout(() => setTimeRemaining(null), 0);
      return () => clearTimeout(timeout);
    }

    const targetDate = new Date(events[0].date).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeRemaining({ started: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({
        d: days.toString().padStart(2, "0"),
        h: hours.toString().padStart(2, "0"),
        m: minutes.toString().padStart(2, "0"),
        s: seconds.toString().padStart(2, "0"),
        started: false
      });
    };

    // Run it immediately but asynchronously to avoid synchronous effect updates
    const initialTimeout = setTimeout(updateTimer, 0);
    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [events]);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/vids/videoplayback.mp4" type="video/mp4" />
        </video>
        {/* Subtle Gradient Overlay so content remains quite visible */}
        <div className="absolute inset-0 bg-black/20 sm:bg-linear-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center gap-8 px-4 pt-28 pb-40 sm:px-6 sm:pt-32 sm:pb-48 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:pt-24 lg:pb-28 lg:overflow-visible">
        {/* Left Side: Hero Text */}
        <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6 lg:w-2/3 lg:items-start lg:gap-10 lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl uppercase"
          >
            Building the Digital Keystone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base font-medium tracking-wide text-zinc-300 sm:text-lg md:text-2xl leading-relaxed"
          >
            Intelligent cyber defense built to close the gap with advanced attacks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-2 flex w-full flex-col gap-3 text-white sm:mt-4 sm:w-auto sm:flex-row sm:gap-6"
          >
            <MotionLink
              href="/contact"
              whileHover={{ x: 10 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Talk to a Cybersecurity Expert
              <span>→</span>
            </MotionLink>
            <Link href="/about" className="w-full sm:w-auto">
              <motion.button whileHover={{ x: 10 }} className="flex w-full items-center justify-center gap-3 border-b border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-transparent sm:text-base">
                About Us
                <span>→</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Sidebar Events */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-20 mt-4 w-full max-w-md lg:mt-0 lg:ml-auto lg:w-1/3 lg:max-w-sm"
        >
          <div className="rounded-2xl border border-white/20 bg-black/40 p-4 shadow-2xl backdrop-blur-l sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-3">
              <motion.h2 className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl">Events</motion.h2>
              <span className="text-xs text-red-200 border border-red-500/30 font-bold px-2 py-1 rounded">Upcoming Events</span>
            </div>

            {events.length > 0 ? (
              <div className="flex flex-col gap-6">
                {events.map((event, idx) => (
                  <div key={event.id} className={`border-b border-white/10 pb-6 last:border-0 last:pb-0 ${idx > 0 ? "hidden sm:block" : ""}`}>
                    <motion.h2 className="text-white font-bold text-lg leading-snug">{event.title}</motion.h2>
                    <p className="flex items-center gap-1.5 text-gray-300 text-sm mt-2 font-medium">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    {idx === 0 && timeRemaining && !timeRemaining.started && (
                      <div className="mt-5">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Starts In</p>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-3 text-center shadow-inner">
                          <div className="flex flex-col w-10 sm:w-12 hover:scale-105 transition-transform">
                            <span className="text-lg sm:text-xl text-white font-bold font-mono">{timeRemaining.d}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase mt-0.5">Days</span>
                          </div>
                          <span className="text-gray-500 font-bold">:</span>
                          <div className="flex flex-col w-10 sm:w-12 hover:scale-105 transition-transform">
                            <span className="text-lg sm:text-xl text-white font-bold font-mono">{timeRemaining.h}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase mt-0.5">Hrs</span>
                          </div>
                          <span className="text-gray-500 font-bold">:</span>
                          <div className="flex flex-col w-10 sm:w-12 hover:scale-105 transition-transform">
                            <span className="text-lg sm:text-xl text-white font-bold font-mono">{timeRemaining.m}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase mt-0.5">Min</span>
                          </div>
                          <span className="text-gray-500 font-bold">:</span>
                          <div className="flex flex-col w-10 sm:w-12 hover:scale-105 transition-transform">
                            <span className="text-lg sm:text-xl text-red-400 font-bold font-mono">{timeRemaining.s}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase mt-0.5">Sec</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {idx === 0 && timeRemaining?.started && (
                      <div className="mt-4 inline-block bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-1.5 rounded-md text-xs font-bold animate-pulse">
                        Event is live
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 opacity-70">
                <div className="text-gray-400 mb-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <p className="text-gray-300 text-center font-medium">No upcoming events.</p>
                <p className="text-gray-500 text-xs text-center mt-1">Check back later for updates</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <CertificationsMarquee isAbsolute />

      {/* Scroll Down Indicator */}
      <ScrollIndicator className="pointer-events-none hidden bottom-28 lg:flex xl:bottom-36" />

    </motion.section>
  );
}
