"use client";
import { useState } from "react";
import StudentPopup from "@/components/StudentPopup";
import {
  GraduationCap,
  FileText,
  BadgeCheck,
  BookOpen,
  Award,
  Plane,
  Globe2,
  Briefcase,
  Users,
  Wallet,
  Building2,
  ShieldCheck,
} from "lucide-react";

import CountUp from "react-countup";

export default function Services() {
  const [open, setOpen] = useState(false);
  return (
    <main className="bg-[#f5f7fb] text-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="relative bg-linear-to-r from-[#0f172a] via-[#14213d] to-[#1e3a8a] text-white pt-10 pb-20 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
              Professional Study Abroad Services
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              End-to-End
              <span className="text-blue-400"> Student Success</span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Our services are built to simplify every stage of the
              international education process — from university
              applications and scholarships to visas, accommodation,
              and post-arrival support.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button
  onClick={() => setOpen(true)}
  className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-xl"
>
  Talk To Experts
</button>

              <a
                href="/contact"
                className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold"
              >
                Get Free Guidance
              </a>

            </div>

            {/* QUICK HIGHLIGHTS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

              {[
                { value: "Admissions", label: "Top Universities" },
                { value: "Visas", label: "Documentation Support" },
                { value: "Scholarships", label: "Financial Guidance" },
                { value: "Career", label: "Future Planning" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {item.value}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl">

            <h3 className="text-3xl font-bold mb-8">
              What We Handle For You
            </h3>

            <div className="space-y-6">

              {[
                "University applications & admissions",
                "SOP, LOR & documentation preparation",
                "Scholarship and education loan guidance",
                "Student visa filing & interview preparation",
                "Accommodation and travel assistance",
                "Pre-departure and post-arrival support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Our Expertise
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Complete Student Services
            </h2>

            <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
              We provide strategic guidance and operational support
              to ensure students achieve successful admissions and
              smooth international transitions.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "University Admissions",
                icon: GraduationCap,
                desc: "Application support for globally recognized universities and programs.",
              },
              {
                title: "Visa Assistance",
                icon: BadgeCheck,
                desc: "End-to-end visa filing, interview preparation, and documentation.",
              },
              {
                title: "SOP & Documentation",
                icon: FileText,
                desc: "Professional SOPs, resumes, recommendation letters, and applications.",
              },
              {
                title: "Scholarships",
                icon: Award,
                desc: "Scholarship opportunities and tuition optimization guidance.",
              },
              {
                title: "Test Preparation",
                icon: BookOpen,
                desc: "Guidance for IELTS, TOEFL, GRE, GMAT, and language preparation.",
              },
              {
                title: "Post-Arrival Support",
                icon: Plane,
                desc: "Accommodation, airport pickup, and settlement assistance.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
              >

                <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <service.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-8 group-hover:text-blue-600 transition">
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

      {/* ADVANTAGES */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Strategic Student Advantage
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: Globe2,
                title: "Global University Network",
                desc: "Access to universities across major destinations.",
              },
              {
                icon: Wallet,
                title: "Affordable Planning",
                desc: "Budget-focused university and scholarship guidance.",
              },
              {
                icon: Building2,
                title: "Dedicated Counsellors",
                desc: "One-on-one support throughout the process.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Process",
                desc: "Clear communication and structured execution.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition"
              >

                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <item.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  {item.desc}
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
              Workflow
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Simple & Structured Process
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Consultation",
                icon: Users,
              },
              {
                title: "University Selection",
                icon: Globe2,
              },
              {
                title: "Applications",
                icon: Briefcase,
              },
              {
                title: "Visa & Departure",
                icon: BadgeCheck,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-10 text-center hover:shadow-xl transition"
              >

                <div className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  <step.icon className="w-9 h-9" />
                </div>

                <div className="mt-8">

                  <p className="text-sm font-semibold text-blue-600">
                    STEP {i + 1}
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    {step.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                value: 1000,
                suffix: "+",
                title: "Students Guided",
              },
              {
                value: 95,
                suffix: "%",
                title: "Visa Approval Rate",
              },
              {
                value: 700,
                suffix: "+",
                title: "University Partnerships",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-12 text-center hover:shadow-xl transition"
              >

                <h3 className="text-6xl font-bold text-blue-600">
                  <CountUp end={item.value} duration={2} />
                  {item.suffix}
                </h3>

                <p className="text-xl text-gray-600 mt-5">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
              Testimonials
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Student Experiences
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "The admission and visa support was highly professional and smooth.",
              "Excellent counselling team helped me shortlist the right universities.",
              "Complete support from applications to accommodation abroad.",
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition"
              >

                <div className="text-yellow-500 text-xl">
                  ★★★★★
                </div>

                <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                  {review}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


<StudentPopup open={open} onClose={() => setOpen(false)} />
    </main>
  );
}