"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { careerSlug, careersDetails, jobSpecifications } from "@/lib/careers";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CyberSectionDivider } from "../ui/CyberSectionDivider";
import { SectionDivider } from "../ui/SectionDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Briefcase, MapPin, CheckCircle2, Award, ListTodo, Upload, AlertCircle, Check, ArrowRight, Star } from "lucide-react";
import { toast } from "sonner";

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
    linkedin: "",
    portfolio: "",
    offer: selectedOffer ?? "",
    message: "",
    consent: false,
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    setFormData((prev) => {
      const nextOffer = selectedOffer ?? (items.includes(prev.offer) ? prev.offer : "");
      if (prev.offer === nextOffer) return prev;
      return { ...prev, offer: nextOffer };
    });
  }, [items, selectedOffer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext !== "pdf") {
        setCvError("Only PDF files are allowed.");
        setCvFile(null);
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setCvError("File size must be under 10MB.");
        setCvFile(null);
        return;
      }
      setCvError(null);
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    if (!cvFile) {
      setCvError("CV file upload is required.");
      return;
    }
    setStatus("loading");

    try {
      const toBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            let encoded = reader.result?.toString().replace(/^data:(.*,)?/, '') || '';
            if (encoded.length % 4 > 0) {
              encoded += '='.repeat(4 - (encoded.length % 4));
            }
            resolve(encoded);
          };
          reader.onerror = error => reject(error);
        });

      const cvFileData = await toBase64(cvFile);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Career Application: ${formData.offer} (${category})`,
          cvFileName: cvFile.name,
          cvFileData,
          category,
          captchaToken,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send email");
      }

      setStatus("success");
      toast.success("Application submitted successfully!", {
        description: `Your application for ${formData.offer || "this position"} has been received.`,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        offer: selectedOffer ?? "",
        message: "",
        consent: false,
      });
      setCvFile(null);
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      toast.error("Submission failed", {
        description: "An error occurred during submission. Please try again.",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Jane Doe"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. jane.doe@company.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +216 98 123 456"
            required
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">LinkedIn Profile URL *</label>
          <input
            type="url"
            name="linkedin"
            placeholder="e.g. https://linkedin.com/in/username"
            required
            value={formData.linkedin}
            onChange={handleChange}
            className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Portfolio / GitHub URL (Optional)</label>
          <input
            type="url"
            name="portfolio"
            placeholder="e.g. https://github.com/username"
            value={formData.portfolio}
            onChange={handleChange}
            className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all font-medium"
          />
        </div>

        <div className="relative w-full">
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Position *</label>
          {selectedOffer ? (
            <input
              type="text"
              name="offer"
              value={formData.offer}
              readOnly
              required
              className="bg-zinc-100 text-zinc-700 px-4 py-3 w-full text-sm outline-none border border-gray-200 rounded-md font-medium cursor-not-allowed"
            />
          ) : (
            <div className="relative">
              <select
                name="offer"
                value={formData.offer}
                onChange={handleChange}
                required
                className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md appearance-none transition-all cursor-pointer font-medium"
              >
                <option value="" disabled>Select a Position...</option>
                {items.map((item) => (
                  <option key={item} value={item} className="bg-white text-zinc-900 font-normal">
                    {item}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Upload CV (PDF or DOCX, Max 10MB) *</label>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              name="cv"
              id="cv-upload-file"
              accept=".pdf"
              required
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="cv-upload-file"
              className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 hover:border-red-500 rounded-lg py-5 px-4 bg-gray-50 hover:bg-red-50/20 cursor-pointer transition-all text-center"
            >
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-xs font-semibold text-zinc-700">
                {cvFile ? `Selected: ${cvFile.name}` : "Click to select CV file"}
              </span>
            </label>
            {cvFile && (
              <p className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> File verified: {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            )}
            {cvError && (
              <p className="text-[10px] text-red-600 font-semibold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {cvError}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-2">
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Cover Letter / Motivation Message *</label>
        <textarea
          name="message"
          placeholder="Tell us why you want to join Keystone and how your skills align with this role..."
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 text-zinc-950 px-4 py-3 w-full text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-500 border border-gray-200 rounded-md transition-all resize-none font-medium"
        />
      </div>

      <div className="flex items-start gap-3 mt-2 bg-gray-50 border border-gray-200/50 rounded-lg p-3">
        <input
          type="checkbox"
          name="consent"
          id="careers-consent-checkbox"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 accent-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="careers-consent-checkbox" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer select-none">
          I consent to Keystone keeping my CV and personal information for consideration in current and future opportunities in accordance with their privacy policy.
        </label>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="w-full sm:w-auto flex justify-start">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={(token) => setCaptchaToken(token)}
          />
        </div>

        <div className="w-full sm:w-auto flex justify-start">
          <button
            type="submit"
            disabled={status === "loading" || !captchaToken || !formData.consent || !cvFile}
            className="w-full sm:w-auto bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-red-600/20 flex items-center justify-center gap-2"
          >
            {status === "loading" ? "Submitting..." : "Apply Now"}
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
  theme?: "red" | "blue";
}

export function CareersSection({
  category,
  items,
  title = "Join Our Team",
  description = "Ready to make an impact in the world of cybersecurity? Explore our opportunities and apply today.",
  selectedOffer,
  theme = "red",
}: CareersSectionProps) {
  const isGeneral = category === "General";
  const categoryPath = isGeneral ? "/careers" : `/careers/${careerSlug(category)}`;
  const heroTargetId = isGeneral ? "career-opportunities" : "application-form";
  const heroButtonLabel = isGeneral
    ? "View Opportunities"
    : selectedOffer
      ? "Apply for this role"
      : "Choose a position";

  const breadcrumbItems = [
    { label: "Careers", href: isGeneral ? undefined : "/careers" },
    ...(!isGeneral ? [{ label: category, href: selectedOffer ? categoryPath : undefined }] : []),
    ...(selectedOffer ? [{ label: selectedOffer }] : []),
  ];

  return (
    <div className="w-full">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-[100vh] min-h-[100vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-black/20 text-white"
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
            <Breadcrumbs items={breadcrumbItems} theme={theme} className="mb-6" />

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
              theme={theme}
            />

            <p className={`mb-10 text-lg font-medium leading-relaxed text-gray-300 md:text-xl lg:text-2xl border-l-2 pl-8 ${
              theme === "red" ? "border-red-600/30" : "border-red-600/30"
            }`}>
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() =>
                  document.getElementById(heroTargetId)?.scrollIntoView({ behavior: "smooth" })
                }
                className={`group flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white shadow-xl transition-colors ${
                  theme === "red"
                    ? "bg-red-600 hover:bg-red-700 shadow-red-600/20"
                    : "bg-red-600 hover:bg-red-700 shadow-red-600/20"
                }`}
              >
                {heroButtonLabel}
                <span className="transition-transform group-hover:translate-x-1">→</span>
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
                  We're hiring. <span className="text-red-600 font-extrabold">Join us.</span>
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

          {/* Employer Branding Section */}
          <CyberSectionDivider />
          <SectionDivider title="OUR CULTURE & ENVIRONMENT" className="bg-[#f4f4f5]" />
          <section className="relative w-full py-24 bg-[#f4f4f5]">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
              <div className="mb-16 text-center">
                <motion.p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-3">
                  Life at Keystone
                </motion.p>
                <motion.h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
                  Growth, Impact & Innovation
                </motion.h2>
                <motion.p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 font-medium">
                  We empower our security professionals to solve some of the world's most complex digital resilience challenges in a collaborative, learning-focused environment.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-red-600/30 transition-all duration-300">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4 font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-950 mb-3">Elite Team & Training</h3>
                    <p className="text-xs leading-relaxed text-zinc-500 font-medium">
                      Work alongside internationally certified experts (CISSP, OSCP, CISM). Every team member receives an annual training budget to master the latest technologies and certifications.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-red-600/30 transition-all duration-300">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4 font-bold">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-950 mb-3">Mission-Critical Projects</h3>
                    <p className="text-xs leading-relaxed text-zinc-500 font-medium">
                      From securing critical grids and banking platforms to operating sovereign security operation centers, you will work on projects that have a tangible impact on cyber defense.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-red-600/30 transition-all duration-300">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4 font-bold">
                      <Star className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-950 mb-3">Engineering-First Culture</h3>
                    <p className="text-xs leading-relaxed text-zinc-500 font-medium">
                      We believe in flexible hybrid arrangements, high-spec developer setups, and minimal meetings. Our environment is built by and for engineers who value technical quality.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-red-600/30 transition-all duration-300">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4 font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-950 mb-3">Global Resiliency Mission</h3>
                    <p className="text-xs leading-relaxed text-zinc-500 font-medium">
                      Help us bridge the security gap across Europe, the Middle East, and Africa. We foster local partnerships and support the digital maturation of developing markets.
                    </p>
                  </div>
                </div>
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
            (() => {
              const specKey = careerSlug(selectedOffer);
              const spec = jobSpecifications[specKey];

              return (
                <motion.section
                  id="application-form"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full py-20 bg-[#f4f4f5] overflow-hidden"
                >
                  <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left Column: Detailed Job Description */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm text-zinc-950">
                          <div className="border-b pb-6 mb-6">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-zinc-950">
                              {selectedOffer}
                            </h2>
                            <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-500">
                              <span className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-md">
                                <MapPin className="w-3.5 h-3.5 text-red-600" />
                                {spec?.location || "EMEA Region"}
                              </span>
                              <span className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-md">
                                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                                {spec?.employmentType || "Full-Time"}
                              </span>
                            </div>
                          </div>

                          {spec && (
                            <div className="space-y-6">
                              {/* Responsibilities */}
                              <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                  <ListTodo className="w-4 h-4 text-red-600" />
                                  Core Responsibilities
                                </h3>
                                <ul className="space-y-2.5 text-xs text-zinc-600 font-medium">
                                  {spec.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex gap-2.5 items-start">
                                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Requirements */}
                              <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                                  Requirements (Need-to-Have)
                                </h3>
                                <ul className="space-y-2.5 text-xs text-zinc-600 font-medium">
                                  {spec.requirements.map((req, i) => (
                                    <li key={i} className="flex gap-2.5 items-start">
                                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Nice to Have */}
                              {spec.niceToHave && spec.niceToHave.length > 0 && (
                                <div>
                                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                    <Star className="w-4 h-4 text-red-600" />
                                    Nice-to-Have Skills
                                  </h3>
                                  <ul className="space-y-2.5 text-xs text-zinc-600 font-medium">
                                    {spec.niceToHave.map((nice, i) => (
                                      <li key={i} className="flex gap-2.5 items-start">
                                        <span className="text-red-500 font-bold shrink-0">&bull;</span>
                                        <span>{nice}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Process */}
                              <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                  <Award className="w-4 h-4 text-red-600" />
                                  Application & Interview Process
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                                  {spec.process.map((step, idx) => (
                                    <div key={idx} className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5">
                                      <span className="h-5 w-5 rounded-full bg-red-100 text-red-600 font-black text-[10px] flex items-center justify-center shrink-0">
                                        0{idx + 1}
                                      </span>
                                      <span className="text-[10px] font-bold text-zinc-800 leading-snug">{step}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Application Form */}
                      <div className="lg:col-span-5 bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-zinc-950">
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-zinc-950 uppercase tracking-wider border-b pb-3 text-sm">
                            Apply For This Role
                          </h2>
                          <p className="text-xs text-zinc-400 mt-2">
                            Please fill out the intake form to submit your candidacy. All fields marked with * are required.
                          </p>
                        </div>

                        <CareersForm
                          category={category}
                          items={items}
                          selectedOffer={selectedOffer}
                          variant="contact"
                        />
                        
                        <div className="mt-8 text-center border-t pt-4 border-zinc-100">
                          <Link
                            href={categoryPath}
                            className="text-xs font-semibold text-gray-400 hover:text-red-600 transition-colors inline-flex items-center gap-1"
                          >
                            &larr; Back to Offers
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.section>
              );
            })()
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
