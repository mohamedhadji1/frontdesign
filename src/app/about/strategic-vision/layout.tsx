import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keystone Cybersecurity",
  description: "Landing page recreation built with Next.js micro-components."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
