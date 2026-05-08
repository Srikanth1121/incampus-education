import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Study Abroad Consultancy in Telangana | InCampus",
  description:
    "InCampus helps students in Telangana apply for study abroad programs in the USA, UK, Canada, Australia, Ireland, and Europe with admissions, visa, and university shortlisting support.",
  alternates: {
    canonical: "https://incampus.web.app/study-abroad-consultancy-telangana",
  },
  openGraph: {
    title: "Top Study Abroad Consultancy in Telangana | InCampus",
    description:
      "Study abroad guidance in Telangana for USA, UK, Canada, Australia, and Europe.",
    url: "https://incampus.web.app/study-abroad-consultancy-telangana",
    siteName: "InCampus",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "InCampus Study Abroad Consultancy in Telangana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Study Abroad Consultancy in Telangana | InCampus",
    description:
      "Study abroad guidance in Telangana for USA, UK, Canada, Australia, and Europe.",
    images: ["/og-banner.jpg"],
  },
};

export default function TelanganaStudyAbroadPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gradient-to-r from-[#0f172a] via-[#14213d] to-[#1e3a8a] text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
            Telangana
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            Top Study Abroad Consultancy in Telangana
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
            InCampus helps students across Telangana choose the right
            university, prepare strong applications, and apply for study visas
            for the USA, UK, Canada, Australia, Ireland, and Europe.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Study in USA</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Get help with university shortlisting, SOP writing, application
              review, and US student visa support.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Study in UK</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Explore UK universities and courses with guidance on admissions,
              documents, and visas.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Study in Canada</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Find affordable universities in Canada with support for the full
              admission process.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Study in Australia</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Apply to Australian universities with expert help on course
              selection and student visa guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}