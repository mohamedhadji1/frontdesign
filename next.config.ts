import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https:",
//  "upgrade-insecure-requests",
  "frame-src https://www.google.com https://maps.google.com",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ziedhamdi.com",
      },
    ],
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*.map",
          destination: "/404",
        },
      ],
    };
  },

  async headers() {
    return [
      {
        source: "/:path*.map",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
/*          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          }, */
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
