"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useSearchParams } from "next/navigation";
import { careersDetails } from "@/lib/careers";
import Link from "next/link";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";
import { SectionDivider } from "../ui/SectionDivider";

interface CareersFormProps {
  category: string;
  items: string[];
}

function CareersForm({ category, items }: CareersFormProps) {
  const searchParams = useSearchParams();
  const offerFromUrl = searchParams.get("offer");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    offer: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (offerFromUrl && items.includes(offerFromUrl)) {
      setFormData(prev => ({
        ...prev,
        offer: offerFromUrl
      }));
    }
  }, [offerFromUrl, items]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "career_applications"), {
        ...formData,
        category,
        createdAt: serverTimestamp(),
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Career Application: ${formData.offer} (${category})`
        }),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", offer: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="e.g. John Doe" 
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 px-6 py-4 w-full text-sm outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-red-600 transition-all border border-gray-100 hover:border-gray-200 rounded-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            placeholder="e.g. john@company.com" 
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 px-6 py-4 w-full text-sm outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-red-600 transition-all border border-gray-100 hover:border-gray-200 rounded-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            placeholder="+1 (555) 000-0000" 
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 px-6 py-4 w-full text-sm outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-red-600 transition-all border border-gray-100 hover:border-gray-200 rounded-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">Position</label>
          <div className="relative w-full">
            <select
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              required
              className="bg-gray-50 px-6 py-4 w-full text-sm outline-none text-gray-700 focus:ring-1 focus:ring-red-600 transition-all border border-gray-100 hover:border-gray-200 appearance-none pr-12 rounded-none"
            >
              <option value="" disabled>Select a position</option>
              {items.map(item => (
                <option key={item} value={item} className="bg-white text-gray-700 font-normal">
                  {item}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">Cover Letter / Message</label>
        <textarea 
          name="message"
          placeholder="Tell us about your expertise and why you want to join Keystone..." 
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 px-6 py-4 w-full text-sm outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-red-600 transition-all resize-none border border-gray-100 hover:border-gray-200 rounded-none"
        />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
        <p className="text-[11px] text-gray-400 max-w-xs leading-relaxed italic">
          By submitting this form, you agree to our privacy policy and the processing of your personal data.
        </p>
        <div className="flex items-center gap-4">
          {status === "success" && <span className="text-green-600 font-bold text-xs flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> SENT</span>}
          {status === "error" && <span className="text-red-600 font-bold text-xs">ERROR</span>}
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="group relative overflow-hidden bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] py-5 px-10 inline-flex items-center gap-4 transition-all hover:pr-12 disabled:opacity-70"
          >
            <span className="relative z-10">{status === "loading" ? "Processing..." : "Submit Application"}</span>
            <svg className="relative z-10 transition-transform group-hover:translate-x-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <div className="absolute inset-0 bg-red-600 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </div>
      </div>
    </form>
  );
}

interface CareersSectionProps {
  category: string;
  items: string[];
  title?: string;
  description?: string;
}

export function CareersSection({ 
  category, 
  items, 
  title = "Join Our Team", 
  description = "Ready to make an impact in the world of cybersecurity? Explore our opportunities and apply today." 
}: CareersSectionProps) {
  return (
    <div className="w-full">
      {/* Dark Hero Section (Red Team Design) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-black/20 text-white"
      >
        <div className="absolute inset-0 z-0 bg-black/20">
          <video
            src="/vids/herosection.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-[#0a1128]/10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center flex-wrap gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Link href="/" className="transition-colors hover:text-white">
                  HOME
                </Link>
                <span className="shrink-0 text-red-500/50">/</span>
                <Link href="/careers" className="transition-colors hover:text-white">
                  CAREERS
                </Link>
                <span className="shrink-0 text-red-500/50">/</span>
                <span className="text-white">{category}</span>
              </div>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
              {title}
            </h1>

            <HeroTypeLine
              items={[
                "Global Cyber Resilience",
                "Advanced Threat Defense",
                "Innovation in Security",
                "Mission-Critical Careers"
              ]}
            />

            <p className="mb-10 text-lg font-medium leading-relaxed text-gray-300 md:text-xl lg:text-2xl border-l-2 border-red-600/30 pl-8">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-bold text-white shadow-xl shadow-red-600/20 transition-colors hover:bg-red-700"
              >
                Apply Now
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {category === "General" ? (
        <>
          <CyberSectionDivider />
          <SectionDivider title="Opportunities" className="bg-[#fff]"/>
          <section className="relative w-full py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
              <div className="mb-16">
                <div className="flex items-center gap-3 text-[11px] font-bold text-red-600 uppercase tracking-[0.3em] mb-4">
                  <span className="w-10 h-[1px] bg-red-600" />
                  Opportunities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
                  We are hiring, <span className="text-black-400">Come join us.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {careersDetails.map((cat, idx) => (
                  <motion.div
                    key={cat.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-gray-50 border border-gray-100 p-8 hover:border-red-600/30 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 p-6 text-red-600/10 group-hover:text-red-600/20 transition-colors duration-500">
                      <span className="text-4xl font-black italic tracking-tighter">0{idx + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                      {cat.category}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px]">
                      {cat.description || "Join our team and help us build a more resilient digital world."}
                    </p>

                    <Link 
                      href={`/careers/${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-[11px] font-bold text-black uppercase tracking-widest group-hover:gap-4 transition-all group-hover:text-red-600"
                    >
                      {cat.cta || "View Offers"}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <CyberSectionDivider />
          <SectionDivider title="Application" className="py-12" />
        </>
      ) : (
        <>
          <CyberSectionDivider />
          <SectionDivider title="Application" className="py-12" />
        </>
      )}

      {/* Form Section (Always White) */}
      <section id="application-form" className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 text-[11px] font-bold text-red-600 uppercase tracking-[0.3em] mb-6">
                  <span className="w-10 h-[1px] bg-red-600" />
                  Application
                </div>
                <h2 className="text-4xl font-bold text-black tracking-tight mb-6">
                  Ready to <span className="text-gray-400 italic">Apply?</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {category === "General" 
                    ? "Choose a position and tell us why you're the perfect fit for Keystone. We're always looking for exceptional talent to join our mission."
                    : `Apply for our ${category} positions. Share your experience and aspirations with us.`}
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 bg-gray-50 flex items-center justify-center border border-gray-100">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-black mb-1">Response Time</h4>
                      <p className="text-xs text-gray-400">Our team usually responds within 48-72 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 bg-gray-50 flex items-center justify-center border border-gray-100">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-black mb-1">Privacy First</h4>
                      <p className="text-xs text-gray-400">Your data is handled with the highest security standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-2xl shadow-gray-200/50">
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest">Loading Application Form...</div>}>
                  <CareersForm category={category} items={items} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
