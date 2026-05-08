// app/getshortlist/page.tsx
import type { Metadata } from "next";
import GetShortlistClient from "../../components/GetShortlistClient";

export const metadata: Metadata = {
  title: "Get Free Shortlist | InCampus",
  description: "Fill your basic details and get a free personalized shortlist.",
  openGraph: {
    title: "Get Free Shortlist",
    description: "Fill your basic details and get a free personalized shortlist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free Shortlist",
    description: "Fill your basic details and get a free personalized shortlist.",
  },
};

export default function Page() {
  return <GetShortlistClient />;
}