"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { servicesDetails } from "@/components/navbar/ServicesDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-950 text-white px-5 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-800/80 max-w-sm"
    >
      <div className="shrink-0 text-green-500 bg-green-500/10 p-2 rounded-xl">
        <CheckCircle2 size={18} className="animate-pulse" />
      </div>
      <div className="flex-1 text-xs font-bold uppercase tracking-wider text-zinc-200">
        {message}
      </div>
      <button onClick={onClose} type="button" className="text-zinc-500 hover:text-white transition-colors cursor-pointer p-1">
        <X size={14} />
      </button>
    </motion.div>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Start the email fetch immediately
      const emailPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      // Log to Firestore asynchronously in the background (does not block email sending)
      addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      }).catch(err => {
        console.error("Non-blocking Firestore logging error:", err);
      });

      // Await email delivery result
      const res = await emailPromise;
      if (!res.ok) throw new Error("Failed to send email");

      setStatus("success");
      setShowToast(true);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="w-full h-screen pt-20 pb-4 flex items-center justify-center bg-[#f4f4f5] overflow-hidden">
      <div className="w-full max-w-3xl px-4">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
          
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">Contact Us</h1>
            <p className="text-sm text-gray-500">
              Interested in our services? Send us a message and we'll be in touch.<br />
              <span className="font-semibold text-red-600">Need to report a security incident? <Link href="/report-incident" className="underline hover:text-red-700 transition-colors">Click here.</Link></span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              
              <div className="relative w-full md:col-span-2">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md appearance-none transition-all cursor-pointer"
                >
                  <option value="" disabled className="text-zinc-500 bg-white">Select a Service</option>
                  {servicesDetails.map(category => (
                    <option key={category.category} value={category.category} className="bg-white text-zinc-900 font-normal">
                      {category.category}
                    </option>
                  ))}
                  <option value="Other" className="bg-white text-zinc-900">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
            </div>
            
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all resize-none"
            />

            

            <div className="flex justify-between items-center mt-2">
              <div className="mt-2 w-full">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
              <button
                type="submit"
                disabled={status === "loading" || !captchaToken}
                className="bg-red-600 text-white text-sm font-semibold py-3 px-8 rounded-md hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-red-600/20"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>

        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <Toast
            message="Message sent successfully!"
            type="success"
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
