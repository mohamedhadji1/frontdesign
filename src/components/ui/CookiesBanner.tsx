"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, Settings } from "lucide-react";

export function CookiesBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small timeout to give a premium feel after initial load
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    setIsOpen(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          style={{ backgroundColor: "#09090b", borderColor: "#27272a", zIndex: 9999999 }}
          className="fixed bottom-6 left-6 right-6 mx-auto max-w-4xl rounded-[2rem] border text-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-md md:p-8"
        >
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <button
              onClick={handleDeclineAll}
              className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-900"
              aria-label="Close cookie consent banner"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 border border-red-500/20 shadow-md">
              <Cookie className="h-7 w-7 animate-pulse" />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  We value your privacy
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl font-medium">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies. Read our{" "}
                  <a href="/privacy" className="text-red-500 hover:underline font-semibold">
                    Privacy Policy
                  </a>{" "}
                  for more details.
                </p>
              </div>

              {showCustomize && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-zinc-800 pt-4 mt-4 space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        Strictly Necessary (Required)
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                        Essential for the website to function properly. They cannot be disabled.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-1 h-4 w-4 accent-red-600 cursor-not-allowed"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Settings className="w-4 h-4 text-blue-500" />
                        Performance & Analytics
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                        Help us understand how visitors interact with our website to improve our services.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 accent-red-600 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Cookie className="w-4 h-4 text-amber-500" />
                        Marketing & Targeting
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                        Used to deliver relevant advertisements and track marketing campaign effectiveness.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 accent-red-600 cursor-pointer"
                    />
                  </div>
                </motion.div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {showCustomize ? (
                  <button
                    onClick={handleSavePreferences}
                    className="rounded-full bg-white text-zinc-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
                  >
                    Save Preferences
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleAcceptAll}
                      className="rounded-full bg-red-600 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="rounded-full border border-zinc-700 text-zinc-200 px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors cursor-pointer"
                    >
                      Customize
                    </button>
                    <button
                      onClick={handleDeclineAll}
                      className="rounded-full border border-transparent text-zinc-400 px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                    >
                      Decline All
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
