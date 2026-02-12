import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

/* ✅ IMPORT IMAGES 158–173 */
import img158 from "../../images/158.webp";
import img159 from "../../images/159.webp";
import img160 from "../../images/160.webp";
import img161 from "../../images/161.webp";
import img162 from "../../images/162.webp";
import img163 from "../../images/163.webp";
import img164 from "../../images/164.webp";
import img165 from "../../images/165.webp";
import img166 from "../../images/166.webp";
import img167 from "../../images/167.webp";
import img168 from "../../images/168.webp";
import img169 from "../../images/169.webp";
import img170 from "../../images/170.webp";
import img171 from "../../images/171.webp";
import img172 from "../../images/172.webp";
import img173 from "../../images/173.webp";

import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ---------------- Gallery ---------------- */
function ProductGallery({ images, current, setCurrent }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, setCurrent]);

  return (
    <div className="relative bg-white h-[420px] rounded-md overflow-hidden border">
      <img
        src={images[current]}
        alt="Portable Concrete Plant"
        className="w-full h-full object-contain"
      />

      <button
        onClick={() =>
          setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((p) => (p + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl"
      >
        ›
      </button>
    </div>
  );
}

export default function PortableConcretePlant() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Portable Concrete Plant";
  const [current, setCurrent] = useState(0);

  const images = useMemo(
    () => [
      img158, img159, img160, img161, img162, img163,
      img164, img165, img166, img167, img168, img169,
      img170, img171, img172, img173,
    ],
    []
  );

  const specs = [
    ["Model", "PCP 20"],
    ["Output (m³/hr)", "20"],
    ["Type of Mixer", "Pan"],
    ["Mixer Motor Power", "30 hp"],
    ["Sand / Aggregate Hopper (Split Bin)", "4 Nos"],
    ["Hopper Capacity (Each)", "5 m³"],
    ["Water Pump", "1 No"],
    ["Additive Jar", "1 No"],
    ["Additive Pump", "1 No"],
    ["Controls", "Fully Automatic"],
    ["Weighing System", "Electronic Digital"],
    ["Weight (approx.)", "11000 kg"],
    ["Cement Hopper With Screw Conveyor", "1 Set"],
    ["Load Out Conveyor (optional)", "1 Set"],
    ["Power Requirement", "75 KVA"],
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-2 font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT SECTION */}
        <div className="lg:col-span-8">

          <ProductGallery
            images={images}
            current={current}
            setCurrent={setCurrent}
          />

          <div className="mt-8 space-y-6 text-gray-800">

            <p>
              These are highly Portable Concrete Plants & available in
              <b> 20 m³/hr </b> capacity. Extremely useful for contractors on
              the move.
            </p>

            {/* FEATURES */}
            <div>
              <h3 className="font-bold text-black">Features:</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Compact design</li>
                <li>Cost Efficient</li>
                <li>Quick Installation</li>
                <li>Low Maintenance Cost</li>
                <li>One Trailer Load</li>
                <li>Global Supplies & Support</li>
              </ul>
            </div>

            {/* OPTIONAL */}
            <div>
              <h3 className="font-bold text-black">Optional:</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Wheel & Axle for Mobility</li>
                <li>Cement Silo with Screw Conveyor and Accessories</li>
              </ul>
            </div>

            {/* TECHNICAL SPECIFICATION */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Technical Specification
              </h3>

              <div className="border border-gray-300 rounded overflow-hidden">
                <table className="w-full text-left text-black border-collapse">
                  <tbody>
                    {specs.map(([label, value], index) => (
                      <tr
                        key={label}
                        className={`border-b border-gray-300 ${
                          index === 0 ? "bg-gray-100" : ""
                        }`}
                      >
                        <td
                          className={`px-5 py-3 ${
                            label.trim().toLowerCase() === "model"
                              ? "font-bold"
                              : "font-medium"
                          }`}
                        >
                          {label}
                        </td>
                        <td
                          className={`px-5 py-3 ${
                            label.trim().toLowerCase() === "model"
                              ? "font-bold"
                              : ""
                          }`}
                        >
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-8">

            {/* DOWNLOADS */}
            <div className="rounded-[8px] bg-gray-100 p-8 shadow-sm">
              <h3 className="text-2xl text-black font-semibold text-center">
                Downloads
              </h3>

              <div className="h-[3px] w-16 bg-amber-400 mx-auto mt-3 mb-8" />

              <a
                href={brochurePdf}
                download="asphalt-and-concrete-plant-brochure.pdf"
                className="w-full flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md"
              >
                <span className="text-lg text-black font-medium">
                  Brochure
                </span>
                <span className="h-12 w-12 rounded bg-amber-400 text-white flex items-center justify-center text-xl">
                  →
                </span>
              </a>

              <button className="w-full mt-5 flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md">
                <span className="text-lg text-black font-medium">
                  Gallery
                </span>
                <span className="h-12 w-12 rounded bg-amber-400 text-white flex items-center justify-center text-xl">
                  →
                </span>
              </button>
            </div>

            {/* ENQUIRE FORM */}
            <div className="rounded-[8px] bg-amber-300/90 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-black text-center">
                Enquire Now
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none" placeholder="Name" required />
                <input className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none" placeholder="Email" required />
                <input className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none" placeholder="Phone" required />
                <input className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none" placeholder="Address" />
                <input className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none" placeholder="Country" />

                <textarea
                  className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none min-h-[120px]"
                  placeholder="Your Requirement"
                />

                <button
                  type="submit"
                  className="w-full bg-white rounded text-gray-800 py-3 font-semibold hover:bg-gray-100"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
