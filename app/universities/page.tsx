"use client";

import { useState } from "react";
import StudentPopup from "@/components/StudentPopup";

export default function UniversitiesPage() {
  const [open, setOpen] = useState(false);
  const universities = {
    USA: [
      "Harvard University",
      "Stanford University",
      "Massachusetts Institute of Technology",
      "University of California Berkeley",
      "University of California Los Angeles",
      "University of Arizona",
      "Arizona State University",
      "University of Delaware",
      "Temple University",
      "Drexel University",
      "Syracuse University",
      "Lehigh University",
      "Northeastern University",
      "Rowan University",
      "Pace University",
      "University of Connecticut",
      "University of Kansas",
      "University of Utah",
      "University of Illinois Chicago",
      "University of South Carolina",
    ],

    UK: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "King’s College London",
      "University of Edinburgh",
      "University of Manchester",
      "University of Bristol",
      "University of Glasgow",
      "University of Birmingham",
      "University of Leeds",
      "University of Liverpool",
      "University of Nottingham",
      "Newcastle University",
      "University of Sheffield",
    ],

    Canada: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Waterloo",
      "University of Alberta",
      "McMaster University",
      "Western University",
      "University of Calgary",
      "Queen’s University",
      "York University",
      "Concordia University",
      "Simon Fraser University",
      "University of Ottawa",
      "Dalhousie University",
      "University of Manitoba",
    ],

    Australia: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "Monash University",
      "University of Queensland",
      "UNSW Sydney",
      "University of Adelaide",
      "University of Western Australia",
      "RMIT University",
      "Deakin University",
      "Macquarie University",
      "Curtin University",
      "La Trobe University",
      "Queensland University of Technology",
      "Griffith University",
    ],

    Ireland: [
      "Trinity College Dublin",
      "University College Dublin",
      "University College Cork",
      "University of Galway",
      "Dublin City University",
      "Maynooth University",
      "University of Limerick",
      "Technological University Dublin",
      "National College of Ireland",
      "Griffith College",
      "Dublin Business School",
      "Independent College Dublin",
      "Royal College of Surgeons Ireland",
      "American College Dublin",
      "Dorset College Dublin",
    ],
  };

return (
  <>
    <main className="bg-[#f5f7fb] min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-blue-200 text-sm font-semibold">
            Global Education Network
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Popular Universities
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore globally recognized universities across
            the USA, UK, Canada, Australia, and Ireland with
            expert admission and visa guidance.
          </p>

        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        {Object.entries(universities).map(([country, list]) => (
          <div key={country} className="mb-24">

            {/* COUNTRY HEADER */}
            <div className="flex items-center justify-between mb-10 border-b pb-4">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {country}
                </h2>

                <p className="text-gray-500 mt-2">
                  Top universities and institutions
                </p>
              </div>

              <div className="hidden md:flex h-12 w-12 rounded-full bg-blue-600 text-white items-center justify-center font-bold text-lg shadow-lg">
                {list.length}
              </div>
            </div>

            {/* UNIVERSITY GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {list.map((uni) => (
                <div
                  key={uni}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
                        {uni}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2">
                        International Admissions Available
                      </p>
                    </div>

                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                      →
                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold">
            Start Your Global Education Journey
          </h2>

          <p className="mt-5 text-gray-300 text-lg">
            Get expert counselling for admissions, scholarships,
            applications, and student visas.
          </p>

          <button
  onClick={() => setOpen(true)}
  className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-white shadow-lg"
>
  Book Free Consultation
</button>

        </div>
      </section>

   </main>

<StudentPopup open={open} onClose={() => setOpen(false)} />

</>
);
}