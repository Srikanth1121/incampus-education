"use client";

import { useEffect, useState } from "react";

type StudentPopupProps = {
  open: boolean;
  onClose: () => void;
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzBGuld3hYke1AHt_EgyjBajbe21_gA_GuGe18PWiiAoeC4HiFULpMZj3PVcaAuH-2DTA/exec";

export default function StudentPopup({ open, onClose }: StudentPopupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    education: "",
    otherEducation: "",
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
    body.append("education", formData.education);
    body.append("otherEducation", formData.otherEducation);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      education: "",
      otherEducation: "",
    });
setLoading(false);
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Student Application Form
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Fill in your details and our team will contact you.
        </p>

        {submitted ? (
          <div className="py-14 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-10 h-10 text-green-600"
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
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 mt-10"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                name="email"
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

        if (value.length <= 10 && (value === "" || /^[6-9]/.test(value))) {
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <select
                required
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="block text-sm font-medium text-gray-700">
                Education
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Education</option>
                <option>B.Com</option>
                <option>B.E</option>
                <option>B.Tech</option>
                <option>B.Sc</option>
                <option>MBA</option>
                <option>M.Tech</option>
                <option>Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                If Other, Specify
              </label>
              <input
                type="text"
                name="otherEducation"
                value={formData.otherEducation}
                onChange={handleChange}
                placeholder="Enter education details"
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
>
  {loading ? (
    <>
      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Submitting...
    </>
  ) : (
    "Submit Application"
  )}
</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}