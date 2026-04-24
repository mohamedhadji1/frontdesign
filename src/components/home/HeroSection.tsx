"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Helper to animate text character by character
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const characters = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        hidden: {},
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface KeystoneEvent {
  id: string;
  title: string;
  date: string;
  [key: string]: unknown;
}

export function HeroSection() {
  const [events, setEvents] = useState<KeystoneEvent[]>([]);
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
      setEvents(fetchedEvents);
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
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative w-full h-auto min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:pt-32">
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
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start pt-12 pb-24 h-full overflow-y-auto lg:overflow-visible">
        {/* Left Side: Hero Text */}
        <div className="w-full lg:w-2/3 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-10 mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            <TypingText text="Building The Digital" delay={0} />
            <br />
            <TypingText text="Keystone" delay={1} />
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide">
            <TypingText text="We secure what matters most to you." delay={2} />
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg">
              Get Security Assessment
              <span>→</span>
            </button>
            <button className="border-b border-white/50 hover:border-white text-white font-medium py-3 px-6 flex items-center justify-center gap-3 transition-all bg-transparent hover:bg-transparent">
              Emergency Response
              <span>→</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Sidebar Events */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full lg:w-1/3 max-w-sm mt-12 lg:mt-0 lg:ml-auto"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider">Events</h2>
              <span className="text-xs text-red-200 border border-red-500/30 font-bold px-2 py-1 rounded">Coming Soon</span>
            </div>

            {events.length > 0 ? (
              <div className="flex flex-col gap-6">
                {events.map((event, idx) => (
                  <div key={event.id} className={`border-b border-white/10 pb-6 last:border-0 last:pb-0 ${idx > 0 ? "hidden sm:block" : ""}`}>
                    <h3 className="text-white font-bold text-lg leading-snug">{event.title}</h3>
                    <p className="flex items-center gap-1.5 text-gray-300 text-sm mt-2 font-medium">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    {idx === 0 && timeRemaining && !timeRemaining.started && (
                      <div className="mt-5">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Starts In</p>
                        <div className="flex bg-black/40 rounded-lg p-3 justify-between items-center text-center border border-white/10 shadow-inner">
                          <div className="flex flex-col w-12 hover:scale-105 transition-transform">
                            <span className="text-xl text-white font-bold font-mono">{timeRemaining.d}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">Days</span>
                          </div>
                          <span className="text-gray-500 font-bold">:</span>
                          <div className="flex flex-col w-12 hover:scale-105 transition-transform">
                            <span className="text-xl text-white font-bold font-mono">{timeRemaining.h}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">Hrs</span>
                          </div>
                          <span className="text-gray-500 font-bold">:</span>
                          <div className="flex flex-col w-12 hover:scale-105 transition-transform">
                            <span className="text-xl text-white font-bold font-mono">{timeRemaining.m}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">Min</span>
                          </div>
                          <span className="text-gray-500 font-bold">:</span>
                          <div className="flex flex-col w-12 hover:scale-105 transition-transform">
                            <span className="text-xl text-red-400 font-bold font-mono">{timeRemaining.s}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">Sec</span>
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

      {/* Infinite Certifications Marquee (Bottom of Hero) */}
      <div className="absolute bottom-0 left-0 w-full pb-8 z-10 overflow-hidden pointer-events-auto">
        <motion.div
          className="flex whitespace-nowrap gap-16 sm:gap-24 px-8 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 60, // Slower speed since we increased total length
            repeat: Infinity,
          }}
        >
          {Array(40).fill("/certif/27001.png").map((src, idx) => (
            <div
              key={idx}
              className="relative w-28 h-28 shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={src}
                alt="ISO 27001 Certification"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </motion.section>
  );
}
