import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { CookiesBanner } from "@/components/ui/CookiesBanner";
import { DisableDevTools } from "@/components/DisableDevTools";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const gotham = localFont({
  src: [
    {
      path: "./fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keystone | B2B Cyber Defense & Enterprise Cyber Resilience",
  description: "Keystone is a leading international B2B cybersecurity advisory group. We deliver enterprise-grade threat intelligence, red teaming, managed security, and strategic GRC solutions.",
  icons: {
    icon: [
      {
        url: "/logos/site icon black.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logos/site icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/logos/site icon.png",
    apple: "/logos/site icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || "";

  return (
    <html
      lang="en"
      className={`${gotham.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <style dangerouslySetInnerHTML={{ __html: `
          .grecaptcha-badge {
            opacity: 0.15 !important;
            transition: opacity 0.3s ease-in-out !important;
          }
          .grecaptcha-badge:hover,
          .grecaptcha-badge:active,
          .grecaptcha-badge:focus-within {
            opacity: 1 !important;
          }
        `}} />
        <Script
          id="remove-heurio"
          strategy="beforeInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const removeHeurio = () => {
                  const app = document.getElementById('heurio-app');
                  const overlay = document.querySelector('.heurio-overlay');
                  if (app) app.remove();
                  if (overlay) overlay.remove();
                };
                removeHeurio();
                const observer = new MutationObserver(removeHeurio);
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true
                });
                window.addEventListener('load', () => {
                  observer.disconnect();
                });
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-gray-900 font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <BackToTop />
        <CookiesBanner />
        <DisableDevTools />
        <Toaster />
      </body>
    </html>
  );
}
