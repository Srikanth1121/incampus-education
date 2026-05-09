"use client";

import { useEffect, useState } from "react";

type ShortlistPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function ShortlistPopup({ open, onClose }: ShortlistPopupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    destinationCountry: "",
    course: "",
    ieltsToeflDuolingo: "",
    ieltsToeflDuolingoScore: "",
    greGmatScore: "",
    backlogs: "",
    workExperience: "",
    bachelorsGraduationYear: "",
    cgpa: "",
    cgpaScale: "",
  });

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);

    return () => clearTimeout(timer);
  }, [submitted, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const body = new URLSearchParams();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("state", formData.state);
    body.append("destinationCountry", formData.destinationCountry);
    body.append("course", formData.course);
    body.append("ieltsToeflDuolingo", formData.ieltsToeflDuolingo);
    body.append("ieltsToeflDuolingoScore", formData.ieltsToeflDuolingoScore);
    body.append("greGmatScore", formData.greGmatScore);
    body.append("backlogs", formData.backlogs);
    body.append("workExperience", formData.workExperience);
    body.append("bachelorsGraduationYear", formData.bachelorsGraduationYear);
    body.append("cgpa", formData.cgpa);
    body.append("cgpaScale", formData.cgpaScale);

    await fetch("https://script.google.com/macros/s/AKfycby7Xh1RwacjHPEoi1PU1p1oBwHzOPIoRkhk6IQ0yFLQGtDc8h7nv0lBxx8MJMBv-YNqqw/exec", {
      method: "POST",
      mode: "no-cors",
      body,
    });

    setLoading(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      destinationCountry: "",
      course: "",
      ieltsToeflDuolingo: "",
      ieltsToeflDuolingoScore: "",
      greGmatScore: "",
      backlogs: "",
      workExperience: "",
      bachelorsGraduationYear: "",
      cgpa: "",
      cgpaScale: "",
    });
  };

  if (!open) return null;
const fieldClass =
  "w-full mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

const labelClass = "block text-sm font-semibold text-slate-700";
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
       className="bg-white w-full max-w-4xl h-[90vh] rounded-[28px] shadow-2xl relative overflow-hidden border border-white/20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

<button
  onClick={onClose}
  className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-2xl text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
  aria-label="Close popup"
>
          ×
        </button>
<div className="flex-1 overflow-y-auto pr-10 [scrollbar-gutter:stable]">
        {submitted ? (
          <div className="flex flex-1 items-center justify-center px-6 py-14 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-10 w-10 text-emerald-600"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Submitted Successfully
            </h2>

            <p className="mt-3 text-gray-500">
              Thank you. Our team will contact you soon.
            </p>
          </div>
        ) : (
         <>
  <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-6 py-6 sm:px-8">
    
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
      Free University Shortlist
    </div>

    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      Get Your Free Shortlist
    </h2>

    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
      Fill the form and receive a personalized university shortlist on your email.
    </p>

  </div>

  <div className="px-6 py-6 pr-10 sm:px-8">

    <form
      onSubmit={handleSubmit}
      className="grid gap-5 md:grid-cols-2"
    >
              
              <div>
  <label className={labelClass}>Full Name</label>

  <input
    type="text"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    placeholder="Enter your name"
    className={fieldClass}
  />
</div>

              

              


              <div>
  <label className={labelClass}>State</label>

  <select
    name="state"
    required
    value={formData.state}
    onChange={handleChange}
    className={fieldClass}
  >
                  <option value="">Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Jammu and Kashmir</option>
                  <option>Ladakh</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
  <label className={labelClass}>Destination Country</label>

  <input
    type="text"
    name="destinationCountry"
    required
    value={formData.destinationCountry}
    onChange={handleChange}
    placeholder="Enter destination country Example - USA, UK, Canada"
    className={fieldClass}
  />
</div>

              <div className="md:col-span-2">
  <label className={labelClass}>Course</label>

  <input
    type="text"
    name="course"
    required
    value={formData.course}
    onChange={handleChange}
    placeholder="Enter course, Example -MS in Computer Science"
    className={fieldClass}
  />
</div>

              <div>
               <label className={labelClass}>
  IELTS / TOEFL / Duolingo
</label>

<select
  name="ieltsToeflDuolingo"
  required
  value={formData.ieltsToeflDuolingo}
  onChange={handleChange}
  className={fieldClass}
>
                  <option value="">Select</option>
                  <option>IELTS</option>
                  <option>TOEFL</option>
                  <option>Duolingo</option>
                </select>
              </div>

              <div>
  <label className={labelClass}>Score</label>

  <input
    type="text"
    name="ieltsToeflDuolingoScore"
    required
    value={formData.ieltsToeflDuolingoScore}
    onChange={handleChange}
    placeholder="Enter score"
    className={fieldClass}
  />
</div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  GRE / GMAT Score
                </label>
                <input
                  type="text"
                  name="greGmatScore"
                  value={formData.greGmatScore}
                  onChange={handleChange}
                  placeholder="If not written, ignore"
                  className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Backlogs Count
                </label>
                <select
                  name="backlogs"
                  required
                  value={formData.backlogs}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option>No Backlogs</option>
<option>1-5</option>
<option>5-10</option>
<option>10-15</option>
<option>15+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Work Experience (Years)
                </label>
                <input
                  type="number"
                  name="workExperience"
                  required
                  value={formData.workExperience}
                  onChange={handleChange}
                  placeholder="Enter years"
                  className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bachelor's Graduation Year
                </label>
                <input
                  type="number"
                  name="bachelorsGraduationYear"
                  required
                  value={formData.bachelorsGraduationYear}
                  onChange={handleChange}
                  placeholder="YYYY"
                  className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
  <label className="block text-sm font-medium text-gray-700">
    Bachelor's CGPA
  </label>

  <div className="flex mt-2">
    
    <input
      type="text"
      name="cgpa"
      required
      value={formData.cgpa}
      onChange={handleChange}
      placeholder="Enter CGPA"
      className="w-full border border-gray-300 rounded-l-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    />

    <select
      name="cgpaScale"
      required
      value={formData.cgpaScale}
      onChange={handleChange}
     className="w-28 border border-l-0 border-gray-300 rounded-r-xl px-3 py-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    >
      <option value="">Scale</option>
      <option>4</option>
      <option>5</option>
      <option>7</option>
      <option>10</option>
      <option>100</option>
    </select>

  </div>
</div>
<div>
  <label className="block text-sm font-medium text-gray-700">
    Email Address
  </label>
  <input
    type="email"
    name="email"
    required
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email"
    className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
<div>
  <label className="block text-sm font-medium text-gray-700">
    Phone Number
  </label>

  <div className="flex mt-2">
    
    <div className="flex items-center px-4 border border-r-0 border-gray-300 rounded-l-xl bg-gray-100 text-gray-700 font-medium">
      +91
    </div>

    <input
      type="tel"
      name="phone"
      required
      maxLength={10}
      value={formData.phone}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");

        if (
          value.length <= 10 &&
          (value === "" || /^[6-9]/.test(value))
        ) {
          setFormData({
            ...formData,
            phone: value,
          });
        }
      }}
      placeholder="Enter 10 digit number"
      className="w-full border border-gray-300 rounded-r-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    />

  </div>
</div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}