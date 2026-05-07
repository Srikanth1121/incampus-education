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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0 md:h-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
    <div className="flex items-center justify-between w-full md:w-auto">
      <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
        InCampus
      </h1>
    </div>

    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-700 font-medium text-sm sm:text-base">
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

    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <button
        onClick={() => setShortlistOpen(true)}
        className="inline-flex border border-blue-600 text-blue-600 hover:bg-blue-50 transition px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base"
      >
        Get a Free Shortlist
      </button>

      <button
        onClick={() => setOpen(true)}
        className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2.5 rounded-xl font-semibold shadow-lg transition text-sm sm:text-base"
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