import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Funnel_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arcunsite - build portfolios that get you hired",
  icons: {
    icon: "/arcunsite.svg",
    shortcut: "/arcunsite.svg",
  },
  description: "arcunsite - build portfolios that get you hired",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${geistMono.variable} antialiased font-sans max-w-6xl mx-auto bg-black text-neutral-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
