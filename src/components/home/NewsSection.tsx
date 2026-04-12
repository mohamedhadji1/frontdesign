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
    <section className="relative w-full overflow-hidden bg-white">
      <SectionDivider title="COMPANY NEWS" className="bg-transparent pt-0 pb-12 mix-blend-multiply z-20 relative" />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/background/bg6.png')" }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 lg:pb-28">
        
        {/* Header Area */}
        <div className="max-w-4xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-[2.75rem] leading-[1.1] font-medium text-gray-900 mb-6"
          >
            News from Keystone
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-800 text-lg leading-relaxed font-normal max-w-2xl"
          >
            Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet
          </motion.p>
        </div>

        {/* News Cards Carousel Area */}
        <div className="relative">
          {/* Main content slider container */}
          <div className="w-full relative min-h-[500px] lg:min-h-[350px] overflow-hidden px-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                {displayedItems.map((item, idx) => (
                  item && (
                  <div key={`${item.id}-${idx}`} className={`flex-col sm:flex-row bg-transparent h-auto sm:h-[320px] w-full ${idx > 0 ? "hidden lg:flex" : "flex"}`}>
                    {/* Left Image */}
                    <div
                      className="w-full sm:w-[45%] h-[250px] sm:h-full bg-gray-200 bg-cover bg-center shrink-0"
                      style={{ backgroundImage: `url('${item.image}')` }}       
                    />

                    {/* Right Content */}
                    <div className="w-full sm:w-[55%] flex flex-col justify-center items-center sm:items-start text-center sm:text-left py-6 pt-8 sm:py-0 sm:pl-8 lg:pl-10">
                      <h3 className="text-[22px] font-normal text-black mb-4 leading-snug px-4 sm:px-0">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-[16px] leading-relaxed mb-8 px-4 sm:px-0 sm:pr-4">
                        {item.excerpt}
                      </p>
                      <div className="mt-auto sm:mt-0 flex">
                        <a
                          href={item.link}
                          className="inline-flex items-center justify-center bg-[#ff0000] hover:bg-red-600 transition-colors text-white font-medium py-3 px-10 text-[15px] group rounded-sm"
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
          <div className="flex flex-col sm:flex-row justify-center items-center mt-12 lg:mt-8 gap-6 relative z-10">
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
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium transition-colors rounded-sm ${
                      currentIndex === i 
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
            <div className="flex sm:hidden items-center gap-2 order-1 w-full justify-center">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors shadow-sm"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <div className="flex items-center gap-1 mx-1">
                {[...Array(Math.max(1, newsItems.length))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      currentIndex === i 
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
    </section>
  );
}
