"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { 
  ShieldAlert, 
  AlertTriangle, 
  PhoneCall, 
  Server, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle,
  ChevronRight,
  Flame,
  ArrowLeft,
  HeartHandshake,
  MessageSquareWarning,
  Clock,
  Sparkles
} from "lucide-react";

export default function ReportIncidentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    severity: "",
    incidentType: "",
    affectedSystems: "",
    actionTaken: "",
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
      await addDoc(collection(db, "incidents"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      const structuredMessage = `
--- URGENT INCIDENT DISCLOSURE ---

Severity: ${formData.severity}
Incident Type: ${formData.incidentType}
Affected Systems: ${formData.affectedSystems}
Actions Taken So Far: ${formData.actionTaken || "None reported"}

Incident Details:
${formData.message}
      `;

      const incidentSubject = `🚨 [${formData.severity}] Incident Report - ${formData.company}`;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: structuredMessage,
          subject: incidentSubject,
          captchaToken,
        }),
      });

      if (!res.ok) throw new Error("Failed to send incident email alert");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        severity: "",
        incidentType: "",
        affectedSystems: "",
        actionTaken: "",
        message: "",
      });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setTimeout(() => setStatus("idle"), 10000);
    } catch (error) {
      console.error("Incident report submission failure:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <main className="h-screen max-h-screen overflow-hidden bg-white text-zinc-900 relative flex flex-col justify-center p-4 md:p-6 lg:p-8 pt-24 md:pt-28">
      
      {/* Extremely soft, friendly ambient glow in bottom left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-50/50 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col h-full max-h-[700px] justify-center">
      

        <div className="bg-white border border-zinc-200/80 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col lg:grid lg:grid-cols-12 max-h-[92svh]">
          
          {/* LEFT SIDE: Empathy & Human Reassurance Panel (5 cols) - Pure White */}
          <div className="lg:col-span-5 bg-white border-r border-zinc-200/60 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 font-extrabold uppercase tracking-widest text-[8px]">
                <HeartHandshake size={11} className="animate-pulse" />
                <span>You are not alone</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3">
                  We've got your back.
                </h2>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                  Experiencing a security event can be extremely stressful. Our elite incident response squad is on active alert, ready to jump in and protect your infrastructure.
                </p>
              </div>

              {/* Direct Response Hotline cards */}
              <div className="bg-zinc-50/50 border border-zinc-200/60 rounded-2xl p-4">
                <h3 className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
                  <PhoneCall size={10} className="text-red-500" />
                  Direct Crisis Hotlines
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-700">Keystone Tunisia:</span>
                    <a href="tel:+21671000000" className="font-extrabold text-red-650 hover:underline">+216 71 000 000</a>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-200/40 pt-2">
                    <span className="font-semibold text-zinc-700">Keystone Algeria:</span>
                    <a href="tel:+21321000000" className="font-extrabold text-red-650 hover:underline">+213 21 000 000</a>
                  </div>
                </div>
              </div>

              {/* Action Steps Process */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                  <Clock size={10} />
                  What happens next?
                </h4>
                <div className="space-y-2.5 text-xs text-zinc-600 font-medium">
                  <div className="flex gap-2">
                    <span className="h-4.5 w-4.5 rounded-full bg-red-50 text-red-600 border border-red-100 font-bold flex items-center justify-center text-[9px] shrink-0">1</span>
                    <p>Alert goes instantly to our on-duty Lead Incident Responder.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-4.5 w-4.5 rounded-full bg-zinc-50 border border-zinc-200/60 text-zinc-600 font-bold flex items-center justify-center text-[9px] shrink-0">2</span>
                    <p>We phone you back within 15 minutes to establish secure channels.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-4.5 w-4.5 rounded-full bg-zinc-50 border border-zinc-200/60 text-zinc-600 font-bold flex items-center justify-center text-[9px] shrink-0">3</span>
                    <p>We analyze host logs, contain vectors, and stabilize operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-6 hidden lg:block">
              <p className="text-[10px] text-zinc-400 font-bold tracking-tight uppercase flex items-center gap-1.5">
                <Sparkles size={10} className="text-red-500" />
                KEYSTONE SECURITY OPERATIONS CENTER
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: The Compact Form (7 cols) - Pure White */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 flex flex-col justify-center overflow-y-auto max-h-full">
            
            <div className="mb-4 shrink-0">
              <h1 className="text-lg font-bold text-zinc-950 uppercase tracking-tight flex items-center gap-2">
                <MessageSquareWarning size={18} className="text-red-500 shrink-0" />
                Structured Incident disclosure
              </h1>
              <p className="text-xs text-zinc-400 mt-0.5">Please provide as much operational details as possible so we can triage efficiently.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 pr-0.5">
              
              {/* Grid block 1 */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="security@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Callback Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+216 98 000 000"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Corporation"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all focus:border-red-500"
                  />
                </div>
              </div>

              {/* Grid block 2 */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Severity / Urgency</label>
                  <div className="relative w-full">
                    <select
                      name="severity"
                      value={formData.severity}
                      onChange={handleChange}
                      required
                      className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg appearance-none transition-all cursor-pointer focus:border-red-500"
                    >
                      <option value="" disabled className="text-zinc-400">Select Severity</option>
                      <option value="CRITICAL" className="text-red-650 font-bold">🔴 CRITICAL (Breach Active)</option>
                      <option value="HIGH" className="text-orange-650 font-bold">🟠 HIGH (System Outage)</option>
                      <option value="MEDIUM" className="text-yellow-650 font-bold">🟡 MEDIUM (Phishing/Alert)</option>
                      <option value="LOW" className="text-zinc-650">🟢 LOW (Compliance Check)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Threat Category</label>
                  <div className="relative w-full">
                    <select
                      name="incidentType"
                      value={formData.incidentType}
                      onChange={handleChange}
                      required
                      className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg appearance-none transition-all cursor-pointer focus:border-red-500"
                    >
                      <option value="" disabled className="text-zinc-400">Select Category</option>
                      <option value="Ransomware" className="text-zinc-800">Ransomware / Extortion</option>
                      <option value="Phishing" className="text-zinc-800">Phishing Campaign</option>
                      <option value="Intrusion" className="text-zinc-800">System Intrusion</option>
                      <option value="DDoS" className="text-zinc-800">DDoS Attack</option>
                      <option value="Data Breach" className="text-zinc-800">Data Exfiltration</option>
                      <option value="Lost Device" className="text-zinc-800">Compromised Device</option>
                      <option value="Other" className="text-zinc-800">Other Anomaly</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Impacted Hosts</label>
                  <input
                    type="text"
                    name="affectedSystems"
                    placeholder="E.g. 5 cloud servers"
                    value={formData.affectedSystems}
                    onChange={handleChange}
                    className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Mitigations Taken</label>
                  <input
                    type="text"
                    name="actionTaken"
                    placeholder="E.g. isolated network"
                    value={formData.actionTaken}
                    onChange={handleChange}
                    className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all focus:border-red-500"
                  />
                </div>
              </div>

              {/* Textarea details */}
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Incident indicators & timeline</label>
                <textarea
                  name="message"
                  placeholder="Describe the incident (when it was spotted, suspicious IPs, domains, logs, file hashes, and specific containment help requested)."
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white text-zinc-950 px-3 py-1.5 w-full text-xs outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-red-500 border border-zinc-200 rounded-lg transition-all resize-none focus:border-red-500"
                />
              </div>

              {/* Recaptcha row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-1.5 pt-3.5 border-t border-zinc-200">
                <div className="w-full sm:w-auto">
                  <div className="scale-80 origin-left md:scale-85">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || !captchaToken}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer rounded-full bg-red-650 hover:bg-red-700 text-white font-extrabold uppercase tracking-widest text-[9px] py-3.5 px-6 shadow-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Dispatching..." : "Submit Incident Alert"}
                  <ArrowRight size={12} />
                </button>
              </div>

            </form>

            {/* Alert boxes */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-3.5 p-3 rounded-xl bg-green-50 border border-green-200 flex items-start gap-2 text-green-800 shrink-0"
                >
                  <CheckCircle className="shrink-0 text-green-600 mt-0.5" size={15} />
                  <div>
                    <h4 className="font-extrabold uppercase tracking-wider text-[9px] mb-0.5">Report Submitted</h4>
                    <p className="text-[10px] text-green-700 leading-relaxed font-medium">
                      Incident logged securely to Firestore. An incident response coordinator is analyzing your details and will phone your callback line shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-3.5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2 text-red-800 shrink-0"
                >
                  <AlertTriangle className="shrink-0 text-red-650 mt-0.5" size={15} />
                  <div>
                    <h4 className="font-extrabold uppercase tracking-wider text-[9px] mb-0.5">Submission Failed</h4>
                    <p className="text-[10px] text-red-700 leading-relaxed font-medium">
                      A network error occurred. Please retry, or call our direct emergency callback hotlines on the left.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </main>
  );
}
