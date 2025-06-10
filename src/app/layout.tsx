import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranjal Kuhikar - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, responsive, and performant web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Pranjal Kuhikar" }],
  creator: "Pranjal Kuhikar",
  publisher: "Pranjal Kuhikar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.pranjalkuhikar.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  themeColor: "#1c1917",
  openGraph: {
    title: "Pranjal Kuhikar - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, responsive, and performant web applications.",
    url: "https://www.pranjalkuhikar.com",
    siteName: "Pranjal Kuhikar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranjal Kuhikar - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, responsive, and performant web applications.",
    creator: "@KuhikarPranjal",
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} antialiased bg-stone-200 text-stone-900 font-sans`}
      >
        {children}
        <ToastContainer />
        <Analytics />
        <GoogleAnalytics gaId="G-96HYY91J9V" />
      </body>
    </html>
  );
}
