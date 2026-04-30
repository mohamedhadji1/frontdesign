"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { careerSlug, careersDetails } from "@/lib/careers";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";
import { SectionDivider } from "../ui/SectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

interface CareersFormProps {
  category: string;
  items: string[];
  selectedOffer?: string;
  variant?: "default" | "contact";
}

function CareersForm({ category, items, selectedOffer, variant = "default" }: CareersFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    offer: selectedOffer ?? "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    setFormData((prev) => {
      const nextOffer = selectedOffer ?? (items.includes(prev.offer) ? prev.offer : "");

      if (prev.offer === nextOffer) {
        return prev;
      }

      return {
        ...prev,
        offer: nextOffer,
      };
    });
  }, [items, selectedOffer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          subject: `Career Application: ${formData.offer} (${category})`,
          captchaToken,
        }),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        offer: selectedOffer ?? "",
        message: "",
      });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  if (variant === "contact") {
    return (
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
          <div className="relative w-full">
            {selectedOffer ? (
              <input
                type="text"
                name="offer"
                value={formData.offer}
                readOnly
                required
                className="bg-gray-50 px-4 py-3 w-full text-sm outline-none text-gray-700 border border-gray-200 rounded-md"
              />
            ) : (
              <>
                <select
                  name="offer"
                  value={formData.offer}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 px-4 py-3 w-full text-sm outline-none text-gray-700 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md appearance-none transition-all cursor-pointer"
                >
                  <option value="" disabled>Select a Position</option>
                  {items.map((item) => (
                    <option key={item} value={item} className="bg-white text-gray-700 font-normal">
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </>
            )}
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Your Message / Cover Letter"
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
            {status === "success" && <span className="text-green-600 font-medium text-sm">Application sent!</span>}
            {status === "error" && <span className="text-red-600 font-medium text-sm">Failed to send.</span>}
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">
            Full Name
          </label>
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
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">
            Email Address
          </label>
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
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">
            Phone Number
          </label>
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
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">
            Position
          </label>
          <div className="relative w-full">
            {selectedOffer ? (
              <input
                type="text"
                name="offer"
                value={formData.offer}
                readOnly
                required
                className="bg-gray-50 px-6 py-4 w-full text-sm outline-none text-gray-700 border border-gray-100 rounded-none"
              />
            ) : (
              <>
                <select
                  name="offer"
                  value={formData.offer}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 px-6 py-4 w-full text-sm outline-none text-gray-700 focus:ring-1 focus:ring-red-600 transition-all border border-gray-100 hover:border-gray-200 appearance-none pr-12 rounded-none"
                >
                  <option value="" disabled>
                    Select a position
                  </option>
                  {items.map((item) => (
                    <option key={item} value={item} className="bg-white text-gray-700 font-normal">
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] ml-1">
          Cover Letter / Message
        </label>
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

      <div className="mt-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={(token) => setCaptchaToken(token)}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
        <p className="text-[11px] text-gray-400 max-w-xs leading-relaxed italic">
          By submitting this form, you agree to our privacy policy and the processing of your
          personal data.
        </p>
        <div className="flex items-center gap-4">
          {status === "success" && (
            <span className="text-green-600 font-bold text-xs flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              SENT
            </span>
          )}
          {status === "error" && <span className="text-red-600 font-bold text-xs">ERROR</span>}
          <button
            type="submit"
            disabled={status === "loading" || !captchaToken}
            className="group relative overflow-hidden bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] py-5 px-10 inline-flex items-center gap-4 transition-all hover:pr-12 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {status === "loading" ? "Processing..." : "Submit Application"}
            </span>
            <svg
              className="relative z-10 transition-transform group-hover:translate-x-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
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
  selectedOffer?: string;
}

export function CareersSection({
  category,
  items,
  title = "Join Our Team",
  description = "Ready to make an impact in the world of cybersecurity? Explore our opportunities and apply today.",
  selectedOffer,
}: CareersSectionProps) {
  const isGeneral = category === "General";
  const categoryPath = isGeneral ? "/careers" : `/careers/${careerSlug(category)}`;
  const heroTargetId = isGeneral ? "career-opportunities" : "application-form";
  const heroButtonLabel = isGeneral
    ? "View Opportunities"
    : selectedOffer
      ? "Apply for this role"
      : "Choose a position";

  return (
    <div className="w-full">
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
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Link href="/" className="transition-colors hover:text-white">
                  HOME
                </Link>
                <span className="shrink-0 text-red-500/50">/</span>
                <Link href="/careers" className="transition-colors hover:text-white">
                  CAREERS
                </Link>
                {!isGeneral && (
                  <>
                    <span className="shrink-0 text-red-500/50">/</span>
                    <Link href={categoryPath} className="transition-colors hover:text-white">
                      {category}
                    </Link>
                  </>
                )}
                {selectedOffer && (
                  <>
                    <span className="shrink-0 text-red-500/50">/</span>
                    <span className="text-white">{selectedOffer}</span>
                  </>
                )}
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
                "Mission-Critical Careers",
              ]}
            />

            <p className="mb-10 text-lg font-medium leading-relaxed text-gray-300 md:text-xl lg:text-2xl border-l-2 border-red-600/30 pl-8">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() =>
                  document.getElementById(heroTargetId)?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-bold text-white shadow-xl shadow-red-600/20 transition-colors hover:bg-red-700"
              >
                {heroButtonLabel}
                <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
              </button>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </motion.section>

      <CyberSectionDivider />

      {isGeneral ? (
        <>
          <SectionDivider title="Opportunities" className="bg-[#fff]" />
          <section
            id="career-opportunities"
            className="relative w-full py-24 bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
              <div className="mb-16">
                <motion.h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight text-center">
                  We are hiring, <span className="text-black-400">Come join us.</span>
                </motion.h2>
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
                      <span className="text-4xl font-black italic tracking-tighter">
                        0{idx + 1}
                      </span>
                    </div>

                    <motion.h2 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                      {cat.category}
                    </motion.h2>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 min-h-[60px]">
                      {cat.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {cat.items.map((item) => (
                        <Link
                          key={item}
                          href={`/careers/${careerSlug(cat.category)}/${careerSlug(item)}`}
                          className="flex items-start gap-2 text-sm text-gray-500 transition-colors hover:text-red-600"
                        >
                          <span className="mt-1 text-red-500">&bull;</span>
                          <span>{item}</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/careers/${careerSlug(cat.category)}`}
                      className="inline-flex items-center gap-2 text-[11px] font-bold text-black uppercase tracking-widest group-hover:gap-4 transition-all group-hover:text-red-600"
                    >
                      {cat.cta || "View Offers"}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {!selectedOffer && (
            <>
              <SectionDivider title="Open Positions" className="bg-[#fff]" />
              <section className="relative w-full py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="group relative overflow-hidden bg-gray-50 border border-gray-100 p-8 transition-all duration-300 hover:border-red-600/30 hover:bg-white"
                      >
                        <span className="absolute right-6 top-6 text-4xl font-black italic tracking-tighter text-red-600/10">
                          0{idx + 1}
                        </span>
                        <motion.h2 className="max-w-sm text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                          {item}
                        </motion.h2>
                        <p className="text-sm leading-relaxed text-gray-500 mb-8">
                          Apply directly for this role and tell us how your skills fit Keystone.
                        </p>
                        <Link
                          href={`${categoryPath}/${careerSlug(item)}`}
                          className="inline-flex items-center gap-2 text-[11px] font-bold text-black uppercase tracking-widest transition-all group-hover:gap-4 group-hover:text-red-600"
                        >
                          Apply for this role
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {selectedOffer ? (
            <motion.section
              id="application-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full py-20 flex items-center justify-center bg-[#f4f4f5] overflow-hidden"
            >
              <div className="w-full max-w-3xl px-4 relative z-10">
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                      Apply for {selectedOffer}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Submit your application for the {selectedOffer} position in the {category} team.
                    </p>
                  </div>

                  <CareersForm
                    category={category}
                    items={items}
                    selectedOffer={selectedOffer}
                    variant="contact"
                  />
                  
                  <div className="mt-8 text-center">
                    <Link
                      href={categoryPath}
                      className="text-xs font-semibold text-gray-400 hover:text-red-600 transition-colors"
                    >
                      &larr; Back to Offers
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.section
              id="application-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full py-20 flex items-center justify-center bg-[#f4f4f5] overflow-hidden"
            >
              <div className="w-full max-w-3xl px-4 relative z-10">
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                      General Application
                    </h2>
                    <p className="text-sm text-gray-500">
                      Interested in joining the {category} team? Select a role and send us your profile.
                    </p>
                  </div>

                  <CareersForm 
                    category={category} 
                    items={items} 
                    variant="contact" 
                  />
                  
                  <div className="mt-8 text-center">
                    <Link
                      href="/careers"
                      className="text-xs font-semibold text-gray-400 hover:text-red-600 transition-colors"
                    >
                      &larr; View All Careers
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </>
      )}
    </div>
  );
}
