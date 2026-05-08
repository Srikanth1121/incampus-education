import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
  google: "nLQmxkhjUkr-N3uzeCNNBeWpwD8OSpPKxww9GQ3Vs3k",
},
  title:
  
    "InCampus | Abroad Education Consultancy & Study Abroad Guidance",

  description:
    "InCampus is a trusted abroad education consultancy helping students study in top international universities. Get free university shortlists, admission guidance, visa support, and expert counselling for studying abroad.",

  keywords: [
    "abroad education consultancy",
    "study abroad consultancy",
    "study abroad consultants",
    "overseas education consultants",
    "international university admissions",
    "study abroad guidance",
    "student visa consultancy",
    "study in USA",
    "study in UK",
    "study in Canada",
    "study in Australia",
    "study in Europe",
    "free university shortlist",
    "education consultants",
    "foreign education consultancy",
    "InCampus Education",
  ],

  authors: [{ name: "InCampus Education" }],

  creator: "InCampus Education",

  publisher: "InCampus Education",

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

  openGraph: {
    title:
      "InCampus | Abroad Education Consultancy & Study Abroad Guidance",

    description:
      "Get expert counselling, university shortlists, admission guidance, and visa support for studying abroad.",

    url: "https://incampus.web.app",

    siteName: "InCampus Education",
images: [
  {
    url: "/og-banner.jpg",
    width: 1200,
    height: 630,
    alt: "InCampus Study Abroad",
  },
],
    locale: "en_US",

    type: "website",
  },

  twitter: {
    
    card: "summary_large_image",

    title:
      "InCampus | Abroad Education Consultancy & Study Abroad Guidance",

    description:
      "Get expert counselling, admission guidance, and university shortlists for studying abroad.",
  },
images: ["/og-banner.jpg"],
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}