import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartRep - AI Fitness Coach & Workout Analysis App",
  description: "Get instant AI analysis of your workouts, personalized meal plans, and 24/7 coaching. Stop guessing at the gym. Train smarter with SmartRep.",
  keywords: "fitness app, AI workout analysis, meal planning, personal trainer app, workout tracker, AI fitness coach, workout analysis, meal planning app",
  authors: [{ name: "SmartRep" }],
  creator: "SmartRep",
  publisher: "SmartRep",
  metadataBase: new URL("https://mysmartrep.com"),
  alternates: {
    canonical: "https://mysmartrep.com",
  },
  openGraph: {
    title: "SmartRep - Your AI Fitness Coach",
    description: "AI-powered workout analysis and personalized coaching. Stop guessing at the gym. Train smarter with SmartRep.",
    type: "website",
    url: "https://mysmartrep.com",
    siteName: "SmartRep",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartRep - AI Fitness Coach",
    description: "Stop guessing at the gym. Train smarter.",
    creator: "@smartrep",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

