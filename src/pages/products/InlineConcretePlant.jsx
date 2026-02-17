import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img126 from "../../images/126.webp";
import img128 from "../../images/128.webp";
import img129 from "../../images/129.webp"; 
import img130 from "../../images/130.webp";
import img131 from "../../images/131.webp";
import img132 from "../../images/132.webp";
import img133 from "../../images/133.webp";
import img134 from "../../images/134.webp";
import img135 from "../../images/135.webp";

import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ---------------- Gallery (UI SAME) ---------------- */
export function ProductGallery({ images, current, setCurrent }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, setCurrent]);

  const goPrev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <div>
      <div className="relative bg-white h-[420px] rounded-md overflow-hidden border">
        <img
          src={images[current]}
          alt="Product"
          className="w-full h-full object-contain transition-opacity duration-700"
        />

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-20 w-10 flex items-center justify-center text-5xl"
          type="button"
        >
          ‹
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center text-5xl"
          type="button"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function InlineConcretePlant() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Inline Concrete Batching Plant";

  const images = useMemo(
    () => [img126, img128, img129, img130, img131, img132, img133, img134, img135],
    []
  );

  const [current, setCurrent] = useState(0);

  const desc = (
    <>
      Fully automatic Stationary Concrete Plants are available upto{" "}
      <b>120 m³/hr</b> capacity. These plants are highly advanced and durable.
    </>
  );

  /* ✅ TABLE (Column style like your screenshot) */
  const columns = ["SCP-30", "SCP-45", "SCP-60"];

  const specRows = [
    ["Output (m³/hr)", "30", "45", "60"],
    ["Type of Sand / Aggregate Bin", "In Line", "In Line", "In Line"],
    ["No. of Bins", "4", "4", "4"],
    ["Bin Capacity (Each)", "8 m³", "10 m³", "15 m³"],
    ["Transfer Belt Width", "500 mm", "550 mm", "650 mm"],
    ["Type of Mixer", "Pan", "Twin Shaft", "Twin Shaft"],
    ["Cement / Filler Weighing System", "Included", "Included", "Included"],
    ["Water Weighing System", "Included", "Included", "Included"],
    ["Admixture Weighing System", "Included", "Included", "Included"],
    ["Air Compressor", "Included", "Included", "Included"],
    ["Controls", "SCADA Enabled", "SCADA Enabled", "SCADA Enabled"],
    ["Auto + Manual Mode", "Included", "Included", "Included"],
    ["Inventory Management", "Included", "Included", "Included"],
    ["Discharge Height", "4.1 m", "4.1 m", "4.1 m"],
  ];

  const features = [
    "Plants available in 30 / 45 / 60 / 75 / 90 / 120 m³/hr capacity.",
    "Equipped with Pan / Twin Shaft / Planetary Mixer.",
    "Inline storage of Aggregates & Sand.",
    "Aggregate & Sand weighing conveyor suspended on load cells.",
    "Inclined conveyor for feeding of Aggregate & Sand into mixer.",
    "Independent weighing system for Cement, Water & Additive.",
    "Operation through Fully Automatic Electronic Control Panel.",
    "Manufacturing is done with advanced, internationally recognized techniques at our State of the art facilities.",
    "Global presence with prompt after sales support.",
    "Dedicated R & D Department.",
  ];

  const accordion = [
    {
      title: "Mixer Features",
      text: `Outstanding Homogenity In Short Time
Low Wear Design
Easy & Low Maintenance`,
    },
    {
      title: "Controls",
      text: `PLC Based Control
SCADA Interface
Automatic & Manual Operation
Auto Correction of Water
Inventory Control Management`,
    },
    {
      title: "Optional",
      text: `Cement / Fly Ash storage & conveying system up to 100 MT capacity.
Radial Conveyor for feeding of aggregate into the bins.`,
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO (same UI) */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-3xl font-semibold">{title}</h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <ProductGallery images={images} current={current} setCurrent={setCurrent} />

            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">{desc}</p>

              {/* ✅ TECHNICAL SPECIFICATION (like screenshot) */}
              <div>
                <h2 className="text-3xl font-extrabold text-black tracking-wide">
                  TECHNICAL SPECIFICATION
                </h2>

                <div className="mt-6 border border-gray-200">
                  <table className="w-full text-left text-black border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="p-4 font-bold uppercase text-gray-700 w-[40%]">
                          Model
                        </th>
                        {columns.map((c) => (
                          <th key={c} className="p-4 text-center font-bold text-gray-700">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {specRows.map((row) => (
                        <tr key={row[0]} className="border-b">
                          <td className="p-4 text-gray-700">{row[0]}</td>
                          <td className="p-4 text-center">{row[1]}</td>
                          <td className="p-4 text-center">{row[2]}</td>
                          <td className="p-4 text-center">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ✅ Features */}
              <div>
                <h3 className="text-xl font-bold text-black">Features:</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* ✅ Accordion (same UI) */}
              <div className="mt-6 border border-gray-300 rounded">
                {accordion.map((item, idx) => (
                  <details
                    key={item.title}
                    open={idx === 0}
                    className="group border-b border-gray-300 last:border-b-0"
                  >
                    <summary className="cursor-pointer px-5 py-3 flex justify-between items-center bg-gray-100 font-semibold text-black">
                      {item.title}
                      <span className="text-xl group-open:hidden">+</span>
                      <span className="text-xl hidden group-open:block">−</span>
                    </summary>
                    <div className="px-5 py-4 text-black whitespace-pre-line">
                      {item.text}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR (same UI) */}
                 <div className="lg:col-span-4">
                             <div className="lg:sticky lg:top-24 space-y-8">
                               {/* Downloads */}
                               <div className="rounded-[8px] bg-gray-100 p-8 shadow-sm">
                                 <h3 className="text-2xl text-black font-semibold text-center">
                                   Downloads
                                 </h3>
                 
                                 <div className="h-[3px] w-16 bg-amber-400 mx-auto mt-3 mb-8" />
                 
                                 <a href={brochurePdf}
                   download="asphalt-and-concrete-plant-brochure.pdf"
                                     className="w-full flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md">
                                   <span className="text-lg text-black  font-medium">
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
                 
                               {/* Enquire Now */}
                               <div className="rounded-[8px] bg-amber-300/90 p-6 shadow-sm">
                                 <h3 className="text-2xl font-semibold text-black text-center">
                                   Enquire Now
                                 </h3>
                 
                                 <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                   <input
                                     className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                                     placeholder="Name"
                                     required
                                   />
                                   <input
                                     className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                                     placeholder="Email"
                                     required
                                   />
                                   <input
                                     className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                                     placeholder="Phone"
                                     required
                                   />
                                   <input
                                     className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                                     placeholder="Address"
                                   />
                                   <input
                                     className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                                     placeholder="Country"
                                   />
                 
                                   <textarea
                                     className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none min-h-[120px]"
                                     placeholder="Your Requirement"
                                   />
                 
                                   <button
                                     type="submit"
                                     className="w-full bg-amber-50 rounded text-gray-800 bg-white py-3 font-semibold hover:bg-gray-100"
                                   >
                                     submit
                                   </button>
                                 </form>
                               </div>
                             </div>
                           </div>
          {/* /RIGHT */}
        </div>
      </div>
    </div>
  );
}
