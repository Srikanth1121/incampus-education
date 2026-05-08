import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in USA for Indian Students | InCampus",
  description:
    "Study in USA with expert admission guidance, university shortlisting, SOP support, scholarships, and student visa assistance from InCampus.",

  alternates: {
    canonical: "https://incampus.web.app/study-in-usa",
  },

  openGraph: {
    title: "Study in USA for Indian Students | InCampus",

    description:
      "Get expert support for USA university admissions, scholarships, SOPs, and student visas.",

    url: "https://incampus.web.app/study-in-usa",

    siteName: "InCampus",

    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Study in USA with InCampus",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Study in USA for Indian Students | InCampus",

    description:
      "Get expert support for USA university admissions, scholarships, SOPs, and student visas.",

    images: ["/og-banner.jpg"],
  },
};

export default function StudyInUSA() {
  return (
    <main className="bg-white text-gray-900">

      <section className="bg-gradient-to-r from-[#0f172a] via-[#14213d] to-[#1e3a8a] text-white px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
            USA Admissions Guidance
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            Study in USA for Indian Students
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
            InCampus helps students apply to top universities in the USA with
            complete support for admissions, SOPs, scholarships, university
            shortlisting, and student visa guidance.
          </p>

        </div>

      </section>

      <section className="px-6 py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              Top Universities in USA
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Explore universities offering engineering, business,
              computer science, healthcare, and STEM programs.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              Student Visa Guidance
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Receive expert support for F1 visa applications,
              interview preparation, and documentation.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              Scholarships & Funding
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Find scholarships and financial guidance for studying
              in the United States.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              SOP & Application Support
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Build strong applications with expert SOP review,
              profile evaluation, and university shortlisting.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}