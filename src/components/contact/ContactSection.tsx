"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { servicesDetails } from "@/components/navbar/ServicesDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PrivacyNotice } from "@/components/ui/PrivacyNotice";
import { CheckCircle2, X, Building2, Phone, Mail, AlertTriangle, Clock } from "lucide-react";

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

const offices = [
  {
    name: "Algeria Office",
    address: "Centre des Affaires Mohammadia Mall N°1272, ALGER",
    phone: "+213 21 600 000",
    email: "contact@keystone-corporation.com",
  },
    {
    name: "Mauritania Office",
    address: "N° 225 Ext Not module, L TVZ , Nouakchott",
    phone: "+222 45 250 000",
    email: "contact@keystone-corporation.com",
  },
  {
    name: "Tunisia Office",
    address: "Angle Rue El Waquidi, El Menzah 4 et du boulevard Charles Nicolle – Tunis",
    phone: "+216 71 860 000",
    email: "contact@keystone-corporation.com",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    service: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setStatus("loading");

    try {
      // Start the email fetch immediately
      const emailPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      // Log to Firestore asynchronously in the background
      addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      }).catch((err) => {
        console.error("Non-blocking Firestore logging error:", err);
      });

      // Await email delivery result
      const res = await emailPromise;
      if (!res.ok) throw new Error("Failed to send email");

      setStatus("success");
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        service: "",
        message: "",
        consent: false,
      });
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
    <section className="w-full min-h-screen py-28 flex items-center justify-center bg-[#f4f4f5]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Office Contacts and SLA Details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black text-gray-900 mb-4 tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base leading-relaxed text-gray-600"
            >
              Get in touch with our cybersecurity experts to discuss your organization's security posture, compliance programs, or training requirements.
            </motion.p>
          </div>

          {/* Response Commitment Box */}
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 flex gap-4 items-start">
            <Clock className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-gray-950 text-sm">Our Commitment</h2>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                We value your security response timelines. A representative will contact you within <span className="font-bold">one business day</span>.
              </p>
            </div>
          </div>

          {/* Emergency Alert Box */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex gap-4 items-start shadow-md text-white">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5 animate-pulse" />
            <div className="flex-1">
              <h2 className="font-bold text-sm text-red-400">Emergency Security Assistance?</h2>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                If you are currently experiencing a cyber attack or suspected breach, bypass the standard intake form for immediate containment support.
              </p>
              <ButtonLink href="/report-incident" variant="danger" className="mt-4 min-h-9 px-4 py-2 text-xs">
                Report an Incident
              </ButtonLink>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b pb-2">Regional Offices</p>
            {offices.map((office) => (
              <div key={office.name} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-sm text-gray-950 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-red-600" />
                  {office.name}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed font-medium">
                  {office.address}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-gray-50 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-zinc-400" />
                    {office.phone}
                  </span>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 hover:text-red-600 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-zinc-400" />
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Full B2B Intake Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 border-b pb-3 text-sm font-bold uppercase tracking-wider text-gray-900"
          >
            Security Inquiry Intake
          </motion.h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Business Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john.doe@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Phone Number *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +1 555-0199"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-company" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Company Name *</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  required
                  placeholder="e.g. Acme Corp"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-country" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Country *</label>
                <input
                  id="contact-country"
                  type="text"
                  name="country"
                  required
                  placeholder="e.g. Tunisia"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
                />
              </div>
              
              <div className="relative w-full">
                <label htmlFor="contact-service" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Service Needed *</label>
                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md appearance-none transition-all cursor-pointer font-medium"
                  >
                    <option value="" disabled className="text-zinc-500 bg-white">Select a Service...</option>
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
            </div>
            
            <div className="mt-2">
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Detailed Message *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we help your organization?"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-50 text-zinc-900 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-md transition-all resize-none font-medium"
              />
            </div>

            <PrivacyNotice />

            {/* Privacy Consent Checkbox */}
            <div className="flex items-start gap-3 mt-2 bg-gray-50 border border-gray-200/50 rounded-lg p-3.5">
              <input
                type="checkbox"
                name="consent"
                id="consent-checkbox"
                required
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 accent-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="consent-checkbox" className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
                I consent to Keystone collecting and storing my contact details in accordance with the <Link href="/privacy" className="text-red-600 hover:text-red-700 underline font-semibold">Privacy Policy</Link> for processing this security inquiry.
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
              <div className="w-full sm:w-auto">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // fallback test key if missing
                  onChange={(token) => setCaptchaToken(token)}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || !captchaToken || !formData.consent}
                className="w-full sm:w-auto bg-red-600 text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-red-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                {status === "loading" ? "Sending..." : "Submit Inquiry"}
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
