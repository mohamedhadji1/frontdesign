"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. Save to Firebase
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // 2. Send email via Next.js API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] py-24 flex items-center justify-center bg-[#f7f8f9] overflow-hidden">
      {/* Background Graphic Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: "url('/background/bg1.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply"
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 pt-16">
        
        {/* Header Area */}
        <div className="mb-20 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[52px] font-medium text-black mb-4 tracking-[-0.02em]"
          >
            Contact Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center text-[10px] font-bold text-gray-500 mb-16 uppercase tracking-wider gap-2"
          >
            <span className="text-gray-500">HOME</span>
            <span className="text-gray-400 font-normal">›</span>
            <span className="text-black">CONTACT US</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[22px] text-gray-800 font-medium max-w-2xl leading-relaxed"
          >
            Interested in our Cyber Security services or need advice? Then please
            <br className="hidden lg:block"/> get in touch and we&apos;ll be glad to help.
          </motion.p>
        </div>

        {/* Two Column Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 mb-12">
          
          {/* Left Column - Contact Informations */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-[22px] font-medium text-black mb-1">Contact Informations</h3>
            <p className="text-gray-500 text-sm mb-12">Get in touch and let us know how we can help</p>

            <div className="space-y-8">
              <div>
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone</h5>
                <p className="text-gray-900 font-medium">+0(850) 544 7514</p>
              </div>
              
              <div>
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Mail</h5>
                <a href="mailto:hello@keystone.com" className="text-gray-900 font-medium hover:text-[#e60000] inline-block transition-colors">
                  hello@keystone.com
                </a>
              </div>
              
              <div>
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Address</h5>
                <p className="text-gray-900 font-medium max-w-[200px] leading-relaxed">
                  One Apple Park Way; Cupertino CA<br/>95014, U.S.A.
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a 
                href="#"
                className="bg-[#e60000] text-white text-sm font-semibold py-3.5 px-6 inline-flex items-center gap-3 hover:bg-red-700 transition-colors"
              >
                Get Direction
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <a href="#" className="font-semibold text-sm underline underline-offset-4 decoration-1 decoration-gray-400 hover:text-[#e60000] hover:decoration-[#e60000] transition-colors">
                See on Map
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-[22px] font-medium text-black mb-1">Contact Form</h3>
            <p className="text-gray-500 text-sm mb-12">Get in touch and let us know how we can help</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name Surname" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white px-5 py-4 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#e60000]/20 transition-all border border-gray-100"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="E-Mail Address" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white px-5 py-4 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#e60000]/20 transition-all border border-gray-100"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white px-5 py-4 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#e60000]/20 transition-all border border-gray-100"
                />
                <input 
                  type="text" 
                  name="company"
                  placeholder="Your Company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white px-5 py-4 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#e60000]/20 transition-all border border-gray-100"
                />
              </div>
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-white px-5 py-4 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#e60000]/20 transition-all resize-none border border-gray-100"
              />
              
              <div className="flex justify-end items-center mt-2">
                {status === "success" && <span className="mr-6 text-green-600 font-semibold text-sm">Message sent successfully!</span>}
                {status === "error" && <span className="mr-6 text-red-600 font-semibold text-sm">Failed to send message. Check settings.</span>}
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-[#e60000] text-white text-sm font-semibold py-3.5 px-10 inline-flex items-center gap-3 hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}