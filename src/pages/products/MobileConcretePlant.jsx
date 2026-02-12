import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img175 from "../../images/175.webp";
import img176 from "../../images/176.webp";
import img177 from "../../images/177.webp";
import img178 from "../../images/178.webp";
import img179 from "../../images/179.webp";
import img180 from "../../images/180.webp";
import img181 from "../../images/181.webp";
import img182 from "../../images/182.webp";
import img183 from "../../images/183.webp";
import img184 from "../../images/184.webp";
import img185 from "../../images/185.webp";
import img186 from "../../images/186.webp";
import img187 from "../../images/187.webp";
import img188 from "../../images/188.webp";
import img189 from "../../images/189.webp";
import img190 from "../../images/190.webp";
import img191 from "../../images/191.webp";

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
        alt="Mobile Concrete Plant"
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

export default function MobileConcretePlant() {
  const title = "Mobile Concrete Plant";
  const [current, setCurrent] = useState(0);

  const images = useMemo(
    () => [
      img175, img176, img177, img178, img179,
      img180, img181, img182, img183, img184,
      img185, img186, img187, img188, img189,
      img190, img191,
    ],
    []
  );

  const specs = [
    ["Model", "MCP – 15"],
    ["Output (m³/hr)", "15"],
    ["Type of Mixer", "Pan"],
    ["Sand / Aggregate Hopper", "4 Nos."],
    ["Hopper Capacity (each)", "2.5 m³"],
    ["Number of Wheels", "6 Nos"],
    ["Water & Additive Tank", "In built"],
    ["Water & Additive Pump", "1 No. Each"],
    ["Cement Hopper with Screw Conveyor", "Included"],
    ["Controls", "Fully Automatic"],
    ["Concrete Discharge", "Through Conveyor Belt"],
    ["Approx. Weight", "11000 Kg"],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

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

        {/* LEFT CONTENT */}
        <div className="lg:col-span-8">

          <ProductGallery
            images={images}
            current={current}
            setCurrent={setCurrent}
          />

          <div className="mt-8 space-y-6 text-gray-800">

            <p>
              Compact design and fully automatic Mobile Concrete Plant is
              available in <b>15 m³/hr</b> capacity. Ease of erection and
              operation is the key feature of this plant.
            </p>

            {/* FEATURES */}
            <div>
              <h3 className="font-bold text-black">Features:</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Compact design</li>
                <li>Cost Efficient</li>
                <li>Low Maintenance</li>
                <li>One Trailer Load</li>
                <li>Top Quality Components</li>
                <li>Global Supplies & Support</li>
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

            {/* ENQUIRE NOW */}
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
