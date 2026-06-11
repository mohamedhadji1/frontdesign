"use client";

import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function AdminSecretUrl() {
  // AUTH STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // EVENTS STATE
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // NEWS STATE
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [newsImageFile, setNewsImageFile] = useState<File | null>(null);
  const [newsExcerpt, setNewsExcerpt] = useState("");
  const [newsLink, setNewsLink] = useState("#");
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsMessage, setNewsMessage] = useState("");

  // Check if user is logged in on mount securely via HttpOnly session checking
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/admin-auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "check-session" }),
        });
        if (response.ok) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Session check failed", error);
      } finally {
        setCheckingAuth(false);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", email, password, captchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Login failed");
      }

      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
      setLoginError("");
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoginLoading(false);
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
    } catch (error) {
      console.error("Logout failed", error);
    }
    
    setIsLoggedIn(false);
    setTitle("");
    setDate("");
    setNewsTitle("");
    setNewsDate("");
    setNewsExcerpt("");
    setNewsImageFile(null);
    setNewsLink("#");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "addEvent", data: { title, date } }),
      });

      const result = await response.json();

      if (response.status === 401) {
        setIsLoggedIn(false);
        throw new Error("Session expired. Please log in again.");
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to post event");
      }

      setMessage("Event successfully posted!");
      setTitle("");
      setDate("");
    } catch (error) {
      console.error(error);
      setMessage("Error posting event: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsDate || !newsExcerpt || !newsImageFile) {
      setNewsMessage("Please fill in all fields and select an image.");
      return;
    }

    setNewsLoading(true);
    setNewsMessage("");

    try {
      // 1. Convert image to base64
      const imageBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(newsImageFile);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
      });

      // 2. Save document via secure API (backend handles Cloudinary upload securely)
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "addNews",
          data: {
            title: newsTitle,
            date: newsDate,
            imageBase64,
            excerpt: newsExcerpt,
            link: newsLink,
          },
        }),
      });

      const result = await response.json();

      if (response.status === 401) {
        setIsLoggedIn(false);
        throw new Error("Session expired. Please log in again.");
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to post news");
      }

      setNewsMessage("News successfully posted with Cloudinary image!");
      setNewsTitle("");
      setNewsDate("");
      setNewsExcerpt("");
      setNewsImageFile(null);
      setNewsLink("#");
    } catch (error) {
      console.error(error);
      setNewsMessage("Error posting news: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setNewsLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-zinc-950 flex justify-center items-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[80px]" />
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="w-10 h-10 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
          <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest animate-pulse">Verifying Access...</div>
        </div>
      </div>
    );
  }

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-zinc-950 flex justify-center items-center px-6 relative overflow-hidden">
        {/* Background blurs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-md bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-zinc-800/80 relative z-10">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Admin Portal" },
              ]}
            />
          </div>
          <h1 className="text-3xl font-black mb-8 text-white tracking-wider text-center uppercase">
            Admin <span className="text-red-500">Login</span>
          </h1>

          {loginError && (
            <div className="p-4 rounded-xl mb-6 text-sm bg-red-950/50 border border-red-900/50 text-red-400">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@keystone.com"
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600 font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600 font-medium"
                required
              />
            </div>

            <div className="mt-2 flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={(token) => setCaptchaToken(token)}
                theme="dark"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading || !captchaToken}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-bold text-sm uppercase tracking-widest py-4 px-6 rounded-xl mt-4 transition-all duration-300 disabled:cursor-not-allowed shadow-lg shadow-red-600/20 active:scale-[0.98]"
            >
              {loginLoading ? "Verifying..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden flex flex-col pt-24">
      {/* Background blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[130px]" />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 pb-24 relative z-10 flex flex-col gap-10">
        
        {/* Title and Logout Section */}
        <div className="flex justify-between items-center border-b border-zinc-800/80 pb-6 w-full">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full" />
            <h1 className="text-xl font-black tracking-widest text-white uppercase flex items-center gap-2">
              Keystone <span className="text-red-500 font-semibold text-xs tracking-normal px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded-md">Admin</span>
            </h1>
          </div>
          {/* Logout button as SVG icon */}
          <button
            onClick={handleLogout}
            title="Logout"
            aria-label="Logout"
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-red-950/40 border border-zinc-800 hover:border-red-900 text-zinc-400 hover:text-red-500 transition-all duration-300 shadow-md group relative active:scale-95 flex items-center gap-2"
          >
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block pl-1">Logout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
          
          {/* EVENTS FORM */}
          <div className="bg-zinc-900/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col gap-6">
            <h2 className="text-xl font-black text-white tracking-wider flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600 rounded-full" />
              EVENTS <span className="text-red-500">ADMIN</span>
            </h2>

            {message && (
              <div className={`p-4 rounded-xl text-sm border font-medium ${message.includes("Error") ? "bg-red-950/50 border-red-900/50 text-red-400" : "bg-green-950/50 border-green-900/50 text-green-400"}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="title">
                  Event Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Next Webinar: Red Teaming"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="date">
                  Event Date
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-zinc-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all font-medium [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-bold text-sm uppercase tracking-widest py-3.5 px-6 rounded-xl mt-4 transition-all duration-300 disabled:cursor-not-allowed shadow-lg shadow-red-600/20 active:scale-[0.98]"
              >
                {loading ? "Posting..." : "Post Event"}
              </button>
            </form>
          </div>

          {/* NEWS FORM */}
          <div className="bg-zinc-900/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col gap-6">
            <h2 className="text-xl font-black text-white tracking-wider flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600 rounded-full" />
              NEWS <span className="text-red-500">ADMIN</span>
            </h2>

            {newsMessage && (
              <div className={`p-4 rounded-xl text-sm border font-medium ${newsMessage.includes("Error") ? "bg-red-950/50 border-red-900/50 text-red-400" : "bg-green-950/50 border-green-900/50 text-green-400"}`}>
                {newsMessage}
              </div>
            )}

            <form onSubmit={handleNewsSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="newsTitle">
                  News Title
                </label>
                <input
                  id="newsTitle"
                  type="text"
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  placeholder="e.g. New Board of Directors"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="newsExcerpt">
                  Excerpt / Short Description
                </label>
                <textarea
                  id="newsExcerpt"
                  value={newsExcerpt}
                  onChange={(e) => setNewsExcerpt(e.target.value)}
                  placeholder="A short summary of the news"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600 font-medium resize-none"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="newsDate">
                  News Date
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-zinc-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <input
                    id="newsDate"
                    type="date"
                    value={newsDate}
                    onChange={(e) => setNewsDate(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all font-medium [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="newsImage">
                  Image Upload
                </label>
                <div className="flex items-center gap-4 w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-2 focus-within:ring-2 focus-within:ring-red-600 focus-within:border-transparent transition-all">
                  <label
                    htmlFor="newsImage"
                    className="py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors shadow-md active:scale-[0.97] shrink-0"
                  >
                    Choose File
                  </label>
                  <span className="text-xs text-zinc-400 truncate pr-2 font-medium">
                    {newsImageFile ? newsImageFile.name : "No file chosen"}
                  </span>
                  <input
                    id="newsImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setNewsImageFile(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="newsLink">
                  Article Link
                </label>
                <input
                  id="newsLink"
                  type="text"
                  value={newsLink}
                  onChange={(e) => setNewsLink(e.target.value)}
                  placeholder="e.g. /news/123 or https://..."
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600 font-medium"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={newsLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-bold text-sm uppercase tracking-widest py-3.5 px-6 rounded-xl mt-4 transition-all duration-300 disabled:cursor-not-allowed shadow-lg shadow-red-600/20 active:scale-[0.98]"
              >
                {newsLoading ? "Posting..." : "Post News"}
              </button>
            </form>
          </div>
          
        </div>
      </main>
    </div>
  );
}
