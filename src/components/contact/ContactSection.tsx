"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { servicesDetails } from "@/components/navbar/ServicesDropdown";

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
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("success");
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
              <span className="font-semibold text-red-600">Need to report a security incident? <Link href="/report-incident" className="underline hover:text-red-700 transition-colors">Use our dedicated emergency reporting portal</Link> for 24/7 priority support.</span>
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
                className="bg-gray-50 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-50 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-50 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all"
              />
              
              <div className="relative w-full md:col-span-2">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 px-4 py-3 w-full text-sm outline-none text-gray-700 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md appearance-none transition-all cursor-pointer"
                >
                  <option value="" disabled>Select a Service</option>
                  {servicesDetails.map(category => (
                    <optgroup key={category.category} label={category.category} className="font-bold text-gray-900 bg-gray-100">
                      {category.items.map((item, idx) => {
                        const itemName = typeof item === 'string' ? item : item.name;
                        return (
                          <option key={`${category.category}-${idx}`} value={itemName} className="bg-white text-gray-700 font-normal">
                            {itemName}
                          </option>
                        );
                      })}
                    </optgroup>
                  ))}
                  <option value="Other">Other</option>
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
              className="bg-gray-50 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all resize-none"
            />

            

            <div className="flex justify-between items-center mt-2">
              <div className="mt-2 w-full">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
              <div className="flex-1">
                {status === "success" && <span className="text-green-600 font-medium text-sm">Message sent successfully!</span>}
                {status === "error" && <span className="text-red-600 font-medium text-sm">Failed to send message.</span>}
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
    </section>
  );
}
