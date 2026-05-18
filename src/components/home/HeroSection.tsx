"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const MotionLink = motion.create(Link);

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        hidden: {},
      }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIndex !== words.length - 1 && " "}
        </span>
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

  const certImages = [
    { src: "/certif/27001.png", alt: "ISO 27001", slug: "iso-27001" },
    { src: "/certif/27002.svg", alt: "ISO 27002", slug: "iso-27002" },
    { src: "/certif/27005.png", alt: "ISO 27005", slug: "iso-27005" },
    { src: "/certif/27701.png", alt: "ISO 27701", slug: "iso-27701" },
    { src: "/certif/22301.png", alt: "ISO 22301", slug: "iso-22301" },
    { src: "/certif/GDPR.webp", alt: "GDPR", slug: "gdpr" },
    { src: "/certif/Nist.webp", alt: "NIST", slug: "nist-framework" },
    { src: "/certif/PCIDSS.png", alt: "PCI DSS", slug: "pci-dss" },
    { src: "/certif/SOC2.webp", alt: "SOC 2", slug: "soc-2" },
    { src: "/certif/SWIFT.png", alt: "SWIFT", slug: "swift-csp" },
    { src: "/certif/hipaa.png", alt: "HIPAA", slug: "hipaa" },
    { src: "/certif/nistcyber.svg", alt: "NIST Cybersecurity", slug: "nist-cybersecurity" }
  ];
  const repeatedImages = [...certImages, ...certImages, ...certImages, ...certImages];

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
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <TypingText text="Building The Digital" delay={0} />
            <br />
            <TypingText text="Keystone" delay={1} />
          </h1>

          <p className="text-base font-medium tracking-wide text-gray-300 sm:text-lg md:text-2xl">
            <TypingText text="We secure what matters most to you." delay={2} />
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-2 flex w-full flex-col gap-3 text-white sm:mt-4 sm:w-auto sm:flex-row sm:gap-6"
          >
            <MotionLink
              href="/contact"
              whileHover={{ x: 10 }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Get Security Assessment
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
          <div className="rounded-2xl border border-white/20 bg-black/40 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-3">
              <motion.h2 className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl">Events</motion.h2>
              <span className="text-xs text-red-200 border border-red-500/30 font-bold px-2 py-1 rounded">Coming Soon</span>
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

      {/* Infinite Certifications Marquee (Bottom of Hero) */}
      <div className="pointer-events-auto absolute bottom-0 left-0 z-10 w-full overflow-hidden pb-2 sm:pb-8">
        <motion.div
          className="flex w-max items-center gap-8 whitespace-nowrap px-4 sm:gap-16 sm:px-8 lg:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 60, // Slower speed since we increased total length
            repeat: Infinity,
          }}
        >
          {repeatedImages.map((img, idx) => (
            <Link
              key={idx}
              href={`/certifications#${img.slug}`}
              className="relative h-14 w-14 shrink-0 cursor-pointer opacity-70 transition-all duration-500 hover:opacity-100 sm:h-20 sm:w-20 lg:h-28 lg:w-28 block"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="112px"
                className="object-contain"
              />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <ScrollIndicator className="pointer-events-none hidden bottom-28 lg:flex xl:bottom-36" />

    </motion.section>
  );
}
