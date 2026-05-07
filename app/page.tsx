

"use client";

import { useState } from "react";
import Image from "next/image";
import StudentPopup from "@/components/StudentPopup";

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <main className="bg-[#f5f7fb] text-gray-900 overflow-hidden">

     {/* HERO SECTION */}
<section className="relative bg-gradient-to-r from-[#0f172a] via-[#14213d] to-[#1e3a8a] text-white py-15 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT */}
    <div>
      <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
        Trusted Global Education Consultants
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
        Build Your Career Through
        <span className="text-blue-400"> Global Education</span>
      </h1>

      <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
        InCampus provides complete study abroad solutions including
        university admissions, visa processing, scholarships,
        career counselling, and pre-departure assistance for students
        aspiring to study internationally.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-xl"
        >
          Book Free Consultation
        </button>

        <a
          href="/universities"
          className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold"
        >
          Explore Universities
        </a>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[
          { value: "700+", label: "Universities" },
          { value: "30+", label: "Countries" },
          { value: "1000+", label: "Students" },
          { value: "95%", label: "Visa Success" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-blue-400">
              {item.value}
            </h3>

            <p className="text-gray-300 text-sm mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* IMAGE */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/students.jpg"
          alt="Students studying abroad"
          fill
          className="object-cover"
        />
      </div>

      
    </div>
  </div>
</section>

    {/* TRUST SECTION */}
<section className="bg-white py-20 border-y border-gray-200">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
        Global Presence
      </p>

      <h2 className="text-4xl font-bold mt-4">
        Trusted by Students Worldwide
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
        We help students achieve international education goals
        through personalized guidance, strategic university
        partnerships, and transparent admission processes.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          value: "700+",
          title: "Partner Universities",
          desc: "Across USA, UK, Canada, Australia & Ireland",
        },
        {
          value: "30+",
          title: "Study Destinations",
          desc: "Leading countries with global opportunities",
        },
        {
          value: "1000+",
          title: "Students Placed",
          desc: "Successful admissions and visa approvals",
        },
        {
          value: "95%",
          title: "Visa Success Rate",
          desc: "Reliable visa processing support",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition"
        >
          <h3 className="text-5xl font-bold text-blue-600">
            {item.value}
          </h3>

          <h4 className="text-xl font-semibold mt-5">
            {item.title}
          </h4>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>

      {/* SERVICES */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Our Expertise
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Complete Study Abroad Solutions
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
              From career planning to visa approvals, we provide
              comprehensive support at every stage of your
              international education journey.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Career Counselling",
                desc: "Personalized academic and career guidance based on student profile and goals.",
              },
              {
                title: "University Admissions",
                desc: "End-to-end application processing for globally recognized universities.",
              },
              {
                title: "Scholarship Assistance",
                desc: "Guidance for scholarships, tuition planning, and financial aid opportunities.",
              },
              {
                title: "Visa Support",
                desc: "Complete visa filing, interview training, and documentation assistance.",
              },
              {
                title: "Accommodation Support",
                desc: "Help with student housing, travel planning, and relocation services.",
              },
              {
                title: "Pre-Departure Services",
                desc: "Comprehensive orientation and support before students travel abroad.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DESTINATIONS */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Study Abroad Destinations
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Top Countries We Support
            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              {
                country: "USA",
                text: "World-class research and career opportunities.",
              },
              {
                country: "UK",
                text: "Globally respected universities and shorter degrees.",
              },
              {
                country: "Canada",
                text: "Affordable education with PR opportunities.",
              },
              {
                country: "Australia",
                text: "High-quality education and student lifestyle.",
              },
              {
                country: "Ireland",
                text: "Europe’s growing hub for global careers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-blue-600">
                  {item.country}
                </h3>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Our Process
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Simple & Structured Approach
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Consultation",
              "University Shortlisting",
              "Application & Documentation",
              "Visa Approval & Departure",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-10 text-center hover:shadow-xl transition"
              >
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-2xl font-bold">
                  {i + 1}
                </div>

                <h3 className="text-xl font-bold mt-8">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Student Testimonials
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Success Stories
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Rahul K",
                review:
                  "The entire admission and visa process was smooth and professionally handled.",
              },
              {
                name: "Priya S",
                review:
                  "I received admission into my dream university with complete support from InCampus.",
              },
              {
                name: "Aditya R",
                review:
                  "Excellent counselling team with transparent guidance throughout the journey.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition"
              >
                <div className="text-yellow-500 text-xl">
                  ★★★★★
                </div>

                <p className="text-gray-600 mt-6 leading-relaxed">
                  {item.review}
                </p>

                <h4 className="font-bold mt-8 text-lg">
                  {item.name}
                </h4>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-24 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold leading-tight">
            Begin Your International Education Journey
          </h2>

          <p className="text-gray-300 text-lg mt-6 leading-relaxed">
            Speak with our expert counsellors and explore the best
            universities, courses, and career opportunities abroad.
          </p>

          <button
  onClick={() => setOpen(true)}
  className="mt-10 bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl"
>
  Book Free Consultation
</button>

        </div>

      </section>

      
<StudentPopup open={open} onClose={() => setOpen(false)} />
    </main>
  );
}