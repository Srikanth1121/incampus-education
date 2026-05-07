"use client";

import { useState } from "react";
import StudentPopup from "@/components/StudentPopup";
import ShortlistPopup from "@/components/ShortlistPopup";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shortlistOpen, setShortlistOpen] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
            InCampus
          </h1>

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="/services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="/universities" className="hover:text-blue-600 transition">
              Universities
            </a>

          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShortlistOpen(true)}
              className="hidden sm:inline-flex border border-blue-600 text-blue-600 hover:bg-blue-50 transition px-5 py-2.5 rounded-xl font-semibold"
            >
              Get a Free Shortlist
            </button>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      <StudentPopup open={open} onClose={() => setOpen(false)} />
      <ShortlistPopup
        open={shortlistOpen}
        onClose={() => setShortlistOpen(false)}
      />
    </>
  );
}