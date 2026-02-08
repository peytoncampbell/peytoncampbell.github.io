import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campbell Solutions | AI Automation Consulting",
  description:
    "AI automation that actually works. We turn manual processes into intelligent systems. Custom AI agents, workflow automation, and data analytics for your business.",
  keywords: [
    "AI automation",
    "consulting",
    "AI agents",
    "workflow automation",
    "data analytics",
    "machine learning",
  ],
  openGraph: {
    title: "Campbell Solutions | AI Automation Consulting",
    description:
      "AI automation that actually works. Custom AI agents, workflow automation, and data analytics.",
    url: "https://campbellsolutions.com",
    siteName: "Campbell Solutions",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Campbell Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campbell Solutions | AI Automation Consulting",
    description: "AI automation that actually works.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
