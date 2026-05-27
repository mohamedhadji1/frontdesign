import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { DisableDevTools } from "@/components/DisableDevTools";

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
  title: "Keystone",
  description: "Keystone - Digital Transformation and Cybersecurity",
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
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-gray-900 font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <BackToTop />
        {/* <DisableDevTools /> */}
        {/* BEGIN PLERDY CODE */}
        <script
          type="text/javascript"
          defer
          data-plerdy_code="1"
          dangerouslySetInnerHTML={{
            __html: `
    var _protocol="https:"==document.location.protocol?"https://":"http://";
    _site_hash_code = "205a7b0a5ad5de1e85d6b3f45074d777",_suid=77038, plerdyScript=document.createElement("script");
    plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
    plerdyScript.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
    var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
    plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
    try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
`,
          }}
        />
        {/* END PLERDY CODE */}
      </body>
    </html>
  );
}
