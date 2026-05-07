export default function LeadForm() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Free Consultation
        </h2>

        <form className="flex flex-col gap-4">
          <input placeholder="Full Name" className="border p-3 rounded-lg" />
          <input placeholder="Email" className="border p-3 rounded-lg" />
          <input placeholder="Phone Number" className="border p-3 rounded-lg" />
          
          <select className="border p-3 rounded-lg">
            <option>Select Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Ireland</option>
          </select>

          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold">
            Submit
          </button>
        </form>

      </div>
    </section>
  );
}