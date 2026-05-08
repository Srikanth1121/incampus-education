// app/getshortlist/page.tsx
import type { Metadata } from "next";
import GetShortlistClient from "@/components/GetShortlistClient";

export const metadata: Metadata = {
  title: "Are You Planning to Study Abroad? Get a free personalized shortlist of universities directly on your email.| InCampus",
  description: "Fill your basic details and get a free personalized shortlist.",
  openGraph: {
    title: "Get Free Shortlist",
    description: "Fill your basic details and get a free personalized shortlist.",
    images: [
      {
        url: "https://incampus.web.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Get Free Shortlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free Shortlist",
    description: "Fill your basic details and get a free personalized shortlist.",
    images: ["https://incampus.web.app/og-banner.png"],
  },
};

export default function Page() {
  return <GetShortlistClient />;
}