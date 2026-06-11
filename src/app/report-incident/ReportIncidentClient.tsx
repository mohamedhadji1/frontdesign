"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { PrivacyNotice } from "@/components/ui/PrivacyNotice";
import { 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle,
  HeartHandshake,
  MessageSquareWarning,
  Clock,
  Sparkles,
  X,
  Copy
} from "lucide-react";
import { toast } from "sonner";

const PGP_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: ID utilisateur: <incident@csirt.tn>
Comment: Créé: 10/10/2018 09:55
Comment: Type: 2048-bit RSA (certificat secret disponible)
Comment: Utilisation: Signature, Chiffrement, Certification des identifiants utilisateur
Comment: Empreinte: A43527341381EBE956F96F5C617D591125DC4A3E

mQENBFu9vogBCAC+H9FPZETl//Z3V0JWd4bmbbP9XkHTV5BWxCA00OiAjKHY6qso
B6XuDZTjrGHI/LhdjK4jFTRyUXC61ARdnW+LjgNXLh5x6Yfvoch/VlcMja76rnks
XXkU6zd3n+yE3i43Qm+1wZ04S3GeW2lSEcQvFTxRPdETxBC6kxL8dpHgGBuSGAe5
lOWCJYekZaExBuXx1VufH4JVY8TeThxk4aX6lgJckVg5LeMOb7T514nwp+PGGME/
8mJjXsEKg+fZ2xyOeMHknlCDUH3J6sb9FinzSjwbpRqX5qzp5L7h9cyFLpDeYyjZ
3FnpLX7gFt3iAlZD0EK+HwEOmvOl9br3lyjdABEBAAG0EWluY2lkZW50QGNzaXJ0
LnRuiQFOBBMBCAA4FiEEpDUnNBOB6+lW+W9cYX1ZESXcSj4FAlu9vogCGwMFCwkI
BwIGFQoJCAsCBBYCAwECHgECF4AACgkQYX1ZESXcSj7bKgf+KwLhcn0SkH9WEg5W
mu0zky0lYWy4LZ+qjIZrgMB1cgkf6mfp9+oaLw/gd3rY4Kci3UhvKQCmnc3LkaZO
YSIW7n596okQx9Q5sc+zkaatJWQumNaigBd5kW2OAu++P/ka8v3ZwwRjcU37H9t4
yYKcAd/pB2hfv3kKQIii9btXmY1FNl2IHWD4kgIZTTq3/5ZFY1OoW+l7EjN7dvEf
bcdzGNo5dMzhEQcpR/t77KgYlPmr8eAas1cZXggikCJK04t7Z0n9o6L8tY7ift3v
6HiC7xwhawSAv0Pbhij1GFJeBL7PqfE5vdgbgKhwmT+SnHb7xzjbJNgx7CDJUfQq
E+h4xbkBDQRbvb6IAQgA7WI0eSTWGMjD20xmAHoOXmeYKt+vJVYT7DzMnAt6WGkN
dnrQc6P7CeaFBavLVtyKD6SteZrhaZzZhjNkWD115IUgXvBr1BQ/URroqk8g7kf1
vJJpprBpbjEe/itQAtPlw+Ic/+FxpCBL1QVA+X8/1/ow02954OsGgeZA7yUubV9u
//B0fIqZPNr8R02ukBiZJwVrTILcYUcyycBBCTF2NWIY/E5JdnuZqUab8x5ZZiEC
rCqgMZ3TCYKQ3e2+7sHJHujJg6oZEvyBqt88vV9J5OjjW8v8rfv2i/i6lFsPPp8U
rwf8O8ToxWopevuaUYefcFf+ZdqkHjVcJPO5FcrrwwARAQABiQE2BBgBCAAgFiEE
pDUnNBOB6+lW+W9cYX1ZESXcSj4FAlu9vogCGwwACgkQYX1ZESXcSj4CSggAsGIv
uL53tMOAyESbExGojmkVjcCjsqwvS3ES4qgVftwknxi7tFXOgm8M5XugSrYh8ijb
29XSk0SGOJkQ1Qo89WQcHjn4RiZSO6Sj+mBIikD/VX7xZiXHKNs0aRCRlF2KbGOQ
zeZVZxyreBGT3aYaXXNV5fpSXAVJMcklLE+VUTY8hgNDGdu3cRzjmoY0nQmzu7nf
wktty6QBOQV7M/XEL1lAnHsP1M7OQACjPAVUaBH7O4196Kad/4LqqlR9T3x+AKd6
qyFYWOT/aXOZb3Him8W32nhGUXkbdrKJHOxLquelAxhd2lyZLSLqgSP/Hszws2WI
iTSjsWopXdX/UOHmlA==
=GHNU
-----END PGP PUBLIC KEY BLOCK-----`;

export function ReportIncidentClient() {
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
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [showPgpModal, setShowPgpModal] = useState(false);
  const [copied, setCopied] = useState(false);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const nextValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: nextValue });
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent || !captchaToken) return;
    setStatus("loading");
 
    try {
      const structuredMessage = `
--- URGENT INCIDENT DISCLOSURE ---
 
Severity: ${formData.severity}
Incident Type: ${formData.incidentType}
Affected Systems: ${formData.affectedSystems}
Actions Taken So Far: ${formData.actionTaken || "None reported"}
 
Incident Details:
${formData.message}
      `;
 
      const incidentSubject = `[${formData.severity}] Incident Report - ${formData.company}`;
 
      // Start the email fetch immediately
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
          captchaToken: captchaToken,
        }),
      });
 
      if (!res.ok) throw new Error("Failed to send incident email alert");
 
      setStatus("success");
      toast.success("Incident reported securely!", {
        description: "An incident response coordinator will phone your callback line shortly.",
      });
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
        consent: false,
      });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setTimeout(() => setStatus("idle"), 10000);
    } catch (error) {
      console.error("Incident report submission failure:", error);
      setStatus("error");
      toast.error("Submission failed", {
        description: "A network error occurred. Please retry, or call our direct emergency callback hotlines on the left.",
      });
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 relative flex flex-col justify-center px-4 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 md:px-8 md:py-28 lg:px-12">
      
      {/* Extremely soft, friendly ambient glow in bottom left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-50/50 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center mt-10 sm:mt-14 md:mt-16">
      

        <div className="bg-white border border-zinc-200/80 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col lg:grid lg:grid-cols-12">
          
          {/* LEFT SIDE: Empathy & Human Reassurance Panel (5 cols) - Pure White */}
          <div className="lg:col-span-5 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200/60 p-6 sm:p-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 font-extrabold uppercase tracking-widest text-[8px]">
                <HeartHandshake size={11} className="animate-pulse" />
                <span>You are not alone</span>
              </div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3"
                >
                  We've got you covered.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xs text-zinc-500 font-medium leading-relaxed"
                >
                  Experiencing a security event can be critical. Our incident response team is on active alert, ready to triage and contain the threat.
                </motion.p>
              </div>
              {/* Action Steps Process */}
              <div className="space-y-3 pt-2">
                <p className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                  <Clock size={10} />
                  What happens next?
                </p>
                <div className="space-y-2.5 text-xs text-zinc-600 font-medium">
                  <div className="flex gap-2">
                    <span className="h-4.5 w-4.5 rounded-full bg-red-50 text-red-600 border border-red-100 font-bold flex items-center justify-center text-[9px] shrink-0">1</span>
                    <p>Alert goes instantly to our on-duty Incident Response coordinator.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-4.5 w-4.5 rounded-full bg-zinc-50 border border-zinc-200/60 text-zinc-600 font-bold flex items-center justify-center text-[9px] shrink-0">2</span>
                    <p>We contact you rapidly based on severity to establish secure communication channels using <button type="button" onClick={() => setShowPgpModal(true)} className="text-red-600 font-bold hover:underline cursor-pointer">PGP</button> and assign a Case ID.</p>
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
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 flex flex-col justify-center">
            
            <div className="mb-4 shrink-0">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="text-lg font-bold text-zinc-950 uppercase tracking-tight flex items-center gap-2"
              >
                <MessageSquareWarning size={18} className="text-red-500 shrink-0" />
                Structured Incident Report
              </motion.h2>
              <p className="text-xs text-zinc-500 font-semibold mt-0.5">Please provide as many operational details as possible so we can triage efficiently.</p>
              <PrivacyNotice 
                variant="security" 
                className="mt-3" 
                linkText="PGP"
                onPrivacyClick={(e) => {
                  e.preventDefault();
                  setShowPgpModal(true);
                }}
              />
              <div className="mt-2 text-[10px] text-zinc-700 bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 leading-relaxed font-semibold">
                For active emergencies, submit the minimum safe details here. Our team will establish a secure communication channel for logs, forensic artifacts, or evidence transfer.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 pr-0.5">
              
              {/* Grid block 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                      <option value="CRITICAL" className="text-red-600 font-bold">🔴 CRITICAL (Breach Active)</option>
                      <option value="HIGH" className="text-orange-500 font-bold">🟠 HIGH (System Outage)</option>
                      <option value="MEDIUM" className="text-amber-500 font-bold">🟡 MEDIUM (Phishing/Alert)</option>
                      <option value="LOW" className="text-zinc-500">🟢 LOW (Suspicious activity / information request)</option>
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

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start gap-3 mt-2 bg-zinc-50 border border-zinc-200 rounded-lg p-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent-checkbox"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 accent-red-600 focus:ring-red-500 border-zinc-300 rounded cursor-pointer shrink-0"
                />
                <label htmlFor="consent-checkbox" className="text-[10px] text-zinc-600 leading-relaxed cursor-pointer select-none font-semibold">
                  I consent to Keystone collecting and storing my contact details in accordance with the <Link href="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link> for processing this incident report.
                </label>
              </div>

              {/* Submit row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-1.5 pt-3.5 border-t border-zinc-200">
                <div className="w-full sm:w-auto">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || !captchaToken || !formData.consent}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-widest text-[9px] py-3.5 px-6 shadow-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <AlertTriangle className="shrink-0 text-red-600 mt-0.5" size={15} />
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
      
      {/* PGP Key Modal Popup */}
      <AnimatePresence>
        {showPgpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[85vh] min-w-0"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-zinc-100 bg-zinc-50">
                <div className="min-w-0">
                  <h3 className="text-xs font-extrabold text-zinc-950 uppercase tracking-wider truncate">
                    CSIRT.TN PGP Public Key
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-zinc-500 font-semibold mt-0.5 truncate">
                    Use this key to encrypt sensitive report communications.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowPgpModal(false);
                    setCopied(false);
                  }}
                  className="text-zinc-400 hover:text-zinc-800 transition-colors p-1.5 rounded-lg hover:bg-zinc-100 cursor-pointer shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-4 min-w-0">
                <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center bg-zinc-50 border border-zinc-150 rounded-xl px-4 py-3 min-w-0">
                  <div className="text-[9px] font-extrabold text-zinc-600 uppercase tracking-wide break-all sm:break-normal text-left">
                    Fingerprint: A435 2734 1381 EBE9 56F9 6F5C 617D 5911 25DC 4A3E
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(PGP_PUBLIC_KEY);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-widest text-[9px] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                  >
                    <Copy size={10} />
                    <span>{copied ? "Copied!" : "Copy Key"}</span>
                  </button>
                </div>

                <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-4 overflow-x-auto text-[9px] sm:text-[10px] font-mono text-zinc-300 leading-relaxed max-h-[45vh] min-w-0 text-left">
                  <pre className="select-all whitespace-pre-wrap break-all font-mono text-left">{PGP_PUBLIC_KEY}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
