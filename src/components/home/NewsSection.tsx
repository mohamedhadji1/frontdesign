"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface KeystoneNews {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  link: string;
  [key: string]: unknown;
}

export function NewsSection() {
  const [newsItems, setNewsItems] = useState<KeystoneNews[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch news from Firebase
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) return;

    const q = query(collection(db, "news"), orderBy("date", "desc"), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedNews = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || "Untitled",
        date: doc.data().date || new Date().toISOString(),
        image: doc.data().image || "/background/bg1.jpg", // fallback image
        excerpt: doc.data().excerpt || "No details available.",
        link: doc.data().link || "#",
        ...doc.data(),
      })) as KeystoneNews[];

      // Ensure we have at least some items to display or use fallbacks if DB is completely empty (for dev placeholder)
      if (fetchedNews.length === 0) {
        setNewsItems([
          {
            id: "1",
            image: "/background/bg1.jpg",
            title: "Keystone Holding’s 58th ordinary general assembly convened",
            excerpt: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
            link: "#",
            date: new Date().toISOString()
          },
          {
            id: "2",
            image: "/background/bg2.jpg",
            title: "Keystone Holding’s new Board of Directors has been determined.",
            excerpt: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
            link: "#",
            date: new Date().toISOString()
          }
        ]);
      } else {
        setNewsItems(fetchedNews);
      }
    });

    return () => unsubscribe();
  }, []);
  // Auto slide functionality
  useEffect(() => {
    if (newsItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1 >= newsItems.length ? 0 : prevIndex + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? Math.max(0, newsItems.length - 1) : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= newsItems.length ? 0 : prevIndex + 1));
  };

  // Calculate which item to display
  const displayedItems = newsItems.length > 0
    ? [
      newsItems[currentIndex],
      newsItems[(currentIndex + 1) % newsItems.length]
    ]
    : [];

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative w-full overflow-hidden bg-white">
      <SectionDivider title="COMPANY NEWS" className="bg-transparent pt-0 pb-12 mix-blend-multiply z-20 relative" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/background/bg6.png')" }}
      />

      <div className="container relative z-10 mx-auto px-4 pb-16 sm:px-6 lg:px-12 lg:pb-28">

        {/* Header Area */}
        <div className="mb-12 max-w-4xl sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-3xl font-medium leading-[1.1] text-gray-900 sm:text-[2.75rem]"
          >
            News from Keystone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl text-base font-normal leading-relaxed text-gray-800 sm:text-lg"
          >
            Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet
          </motion.p>
        </div>

        {/* News Cards Carousel Area */}
        <div className="relative">
          {/* Main content slider container */}
          <div className="relative min-h-[420px] w-full overflow-hidden px-1 sm:min-h-[500px] lg:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10"
              >
                {displayedItems.map((item, idx) => (
                  item && (
                    <div key={`${item.id}-${idx}`} className={`h-auto w-full overflow-hidden rounded-xl border border-zinc-100 bg-white/70 shadow-sm backdrop-blur-sm sm:h-[320px] ${idx > 0 ? "hidden lg:flex" : "flex"} flex-col sm:flex-row`}>
                      {/* Left Image */}
                      <div
                        className="h-[220px] w-full shrink-0 bg-gray-200 bg-cover bg-center sm:h-full sm:w-[45%]"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />

                      {/* Right Content */}
                      <div className="flex w-full flex-col items-center justify-center px-4 py-6 text-center sm:w-[55%] sm:items-start sm:py-0 sm:pl-8 sm:pr-4 sm:text-left lg:pl-10">
                        <motion.h2 className="mb-4 text-[22px] font-normal leading-snug text-black sm:px-0">
                          {item.title}
                        </motion.h2>
                        <p className="mb-8 text-[15px] leading-relaxed text-gray-500 sm:text-[16px] sm:pr-4">
                          {item.excerpt}
                        </p>
                        <div className="mt-auto flex w-full sm:mt-0 sm:w-auto">
                          <a
                            href={item.link}
                            className="group inline-flex w-full items-center justify-center rounded-sm bg-[#ff0000] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-red-600 sm:w-auto sm:px-10"
                          >
                            Read More
                            <span className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300 font-bold">
                              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[18px] h-[18px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation */}
          <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-6 sm:mt-12 sm:flex-row lg:mt-8">
            <div className="flex items-center gap-2 order-2 sm:order-1 hidden sm:flex">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Previous News"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Pagination Numbers */}
              <div className="flex items-center gap-1 mx-2">
                {[...Array(Math.max(1, newsItems.length))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium transition-colors rounded-sm ${currentIndex === i
                      ? 'text-white bg-[#ff0000]'
                      : 'text-gray-500 hover:text-black hover:bg-gray-100'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 bg-[#ff0000] text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-md"
                aria-label="Next News"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Mobile Pagination */}
            <div className="order-1 flex w-full items-center justify-center gap-2 sm:hidden">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors shadow-sm"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="no-scrollbar mx-1 flex max-w-[calc(100vw-8rem)] items-center gap-1 overflow-x-auto">
                {[...Array(Math.max(1, newsItems.length))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${currentIndex === i
                      ? 'text-white bg-[#ff0000]'
                      : 'text-gray-500 bg-white shadow-sm'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 bg-[#ff0000] text-white flex items-center justify-center shadow-md"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
