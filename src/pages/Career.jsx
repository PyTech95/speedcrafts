import React, { useState } from "react";
import bg from "../images/Untitled-design-10.webp";
import handshake1 from "../images/handshake.jpg";
import helmet from "../images/1-4.png";
import globe from "../images/2-4.png";
import award from "../images/3-3.png";
import handshake from "../images/4-2.png";

function Counter({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-22 w-22 bg-amber-400 rounded-full bg-gold-500 grid place-items-center">
        <img src={icon} alt="" className="h-20 w-25" />
      </div>
      <div>
        <div className="text-4xl font-black text-black">{value}</div>
        <div className="text-sm font-semibold text-black/80">{label}</div>
      </div>
    </div>
  );
}
export default function Career() {
  const title = "Career";

  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[250px] md:h-[340px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
            <p className="mt-2 text-xl md:text-2xl font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our People Are Our Greatest Asset
            </h2>

            <div className="space-y-5 text-gray-900 leading-relaxed">
              <p>
                We believe that the success of any organization lies in the
                strength and dedication of its people.
              </p>

              <ul className="list-disc pl-5 space-y-2 font-medium">
                <li>Sales and Marketing</li>
                <li>Service</li>
                <li>Production</li>
                <li>Quality Control</li>
                <li>Procurement</li>
                <li>Design Engineer</li>
              </ul>

              <p className="font-bold pt-4">TEAM SPEEDCRAFTS</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={handshake1}
              alt="Career Opportunity"
              className="w-full max-w-[520px] rounded-md shadow-md"
            />
          </div>
        </div>

        {/* ================= APPLY NOW SECTION ================= */}
        <div className="mt-28">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-2">
            Apply Now
          </h2>
          <p className="text-center text-gray-900 mb-14"> "Interested in working with us? Apply now" </p>

          <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-900">
            
            <input type="text" placeholder="Name*" className="border-b border-gray-600 py-2 focus:outline-none" required />
            <input type="tel" placeholder="Phone Number*" className="border-b border-gray-600 py-2 focus:outline-none" required />
            <input type="email" placeholder="Email Address*" className="border-b border-gray-600 py-2 focus:outline-none" required />
            <input type="text" placeholder="City Name" className="border-b border-gray-600 py-2 focus:outline-none" />
            <input type="text" placeholder="Position Applied For" className="border-b border-gray-600 py-2 focus:outline-none" />
            <input type="text" placeholder="Education Qualification" className="border-b border-gray-600 py-2 focus:outline-none" />
            <input type="text" placeholder="Work Experience" className="border-b border-gray-600 py-2 focus:outline-none" />

            <div className="md:col-span-2">
              <div className="flex items-center gap-4 border-b border-gray-600 pb-2">
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <label
                  htmlFor="resume"
                  className="px-4 py-1 border border-gray-600 rounded cursor-pointer text-sm hover:bg-gray-100"
                >
                  Choose File
                </label>

                <span className="text-sm text-gray-700">
                  {fileName}
                </span>
              </div>
            </div>

            <textarea
              placeholder="Message"
              rows="1"
              className="md:col-span-2 border-b border-gray-600 py-2 focus:outline-none"
            />

            <div className="md:col-span-2 flex justify-center mt-8">
              <button
                type="submit"
                className="px-12 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="bg-white py-12 ">
               <div className="mx-auto  px-4">
                 <div className="grid md:grid-cols-4 gap-10 items-center">
                   <Counter icon={helmet} value="350+" label="Engineers & Workers" />
                   <Counter icon={globe} value="5000+" label="Global Clients" />
                   <Counter icon={award} value="45+" label="Awards Received" />
                   <Counter icon={handshake} value="17100+" label="Machines Delivered" />
                 </div>
               </div>
             </section>
    </div>
  );
}
