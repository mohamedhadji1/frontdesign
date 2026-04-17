import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";

const gotham = localFont({
  src: [
    {
      path: "./fonts/GothamLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GothamMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GothamBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GothamBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keystone",
  description: "Keystone - Digital Transformation and Cybersecurity",
  icons: {
    icon: "/logos/site icon.png",
    shortcut: "/logos/site icon.png",
    apple: "/logos/site icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gotham.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-900 text-white font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
