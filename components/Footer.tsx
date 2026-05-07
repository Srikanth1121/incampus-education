export default function Footer() {
  return (
    <footer className="bg-[#020817] text-white pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold">InCampus</h2>

          <p className="mt-8 text-gray-300 leading-relaxed">
            Global education guidance powered by expert counselling.
            We help students secure admissions, visas, scholarships,
            and successful international careers through trusted
            study abroad solutions.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <p className="uppercase tracking-[3px] text-gray-400 text-sm">
            Contact Us
          </p>

          <div className="mt-8 space-y-5">
            <p className="text-gray-200">Call : +91-9849839153</p>
            <p className="text-gray-200">Email : team@oregonsys.in</p>
          </div>

          <div className="mt-10">
            <p className="uppercase tracking-[3px] text-gray-400 text-sm mb-5">
              Follow Us
            </p>

            <div className="flex items-center gap-5 mt-4 text-gray-300">
              <a
  href="https://www.linkedin.com/company/inncampus/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.877v1.909h.041C12.32 8.824 13.797 8 15.66 8 19.077 8 20 10.042 20 13.071V22h-3v-7.091c0-1.692-.03-3.869-2.357-3.869-2.36 0-2.722 1.844-2.722 3.75V22h-3V8z" />
                </svg>
              </a>

              <a
  href="https://www.instagram.com/incampus.co/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.45a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM12 6.8A5.2 5.2 0 106 12a5.2 5.2 0 006-5.2zm0 1.8A3.4 3.4 0 118.6 12 3.4 3.4 0 0112 8.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="uppercase tracking-[3px] text-gray-400 text-sm">
            Get In Touch
          </p>

          <p className="mt-8 text-gray-300 leading-relaxed">
            Looking to study abroad, explore top universities,
            or receive expert visa guidance? Our team is ready
            to support your international education journey.
          </p>

          <button className="mt-10 bg-[#0f172a] border border-gray-700 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold">
            Contact InCampus
          </button>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 InCampus. All rights reserved.
        </p>

        <div className="flex gap-8 text-gray-500 text-sm">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}