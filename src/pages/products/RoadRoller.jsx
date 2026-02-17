import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img204 from "../../images/204.webp";
import img205 from "../../images/205.webp";
import img206 from "../../images/206.webp";
import img207 from "../../images/207.webp";
import img208 from "../../images/208.webp";
import img209 from "../../images/209.webp";
import img210 from "../../images/210.webp";
import img211 from "../../images/211.webp";
import img212 from "../../images/212.webp";
import img213 from "../../images/213.webp";
import img214 from "../../images/214.webp";
import img215 from "../../images/215.webp";
import img216 from "../../images/216.webp";
import img217 from "../../images/217.webp";
import img219 from "../../images/219.webp";
import img220 from "../../images/220.webp";
import img221 from "../../images/221.webp";
import img222 from "../../images/222.webp";

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

export default function RoadRoller() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Diesel Road Roller";

  const images = useMemo(
    () => [
      img204,
      img205,
      img206,
      img207,
      img208,
      img209,
      img210,
      img211,
      img212,
      img213,
      img214,
      img215,
      img216,
      img217,
      img219,
      img220,
      img221,
      img222,
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  /* ✅ TECHNICAL TABLE */
  const specs = [
    ["Model", "DRR/10 (4 speed) & DRR-3/10 (3 speed)"],
    ["Unballasted Weight", "8,000 Kg."],
    ["Water Ballasted Weight", "9,000 Kg."],
    ["Sand Ballasted Weight", "10,000 Kg."],
    ["Engine S-4(I) / RB-33", "41.5/37.5 BHP. at 1500 RPM."],
    ["Overall Length", "4880 mm."],
    ["Rolling Width", "1810 mm."],
    ["Overall Height", "2860 mm."],
    ["Dia. of Rear Rolls", "1370 mm."],
    ["Width of Rear Rolls", "535 mm."],
    ["Dia. of Front Rolls", "1030 mm."],
    ["Width of Front Rolls", "940 mm."],

    ["Line Pressure (Minimum) - Front Rolls", "27.6 Kg./cm."],
    ["Line Pressure (Minimum) - Rear Rolls", "47.5 Kg./cm."],
    ["Line Pressure (Maximum) - Front Rolls", "41.1 Kg./cm."],
    ["Line Pressure (Maximum) - Rear Rolls", "61.7 Kg./cm."],

    ["Overlap of Rolls", "100 mm."],
    ["Wheel Base", "2800 mm."],
    ["Turning Radius", "3935 mm."],
    ["No. of Speeds (Model DRR/10)", "4 forward and 4 reverse"],
    ["No. of Speeds (Model DRR-3/10)", "3 forward and 3 reverse"],
    ["Speed (Model DRR/10)", "1.95 to 9.00 Km./hr."],
    ["Speed (Model DRR-3/10)", "1.74 to 7.47 Km./hr."],
    ["Gradient", "1 in 5."],
    ["Fuel Tank Capacity", "150 ltrs. (including spare tank)"],
    ["Water Tank Capacity", "225 ltrs. (including spare tank)"],
    ["Permissible Variation", "± 5%"],
  ];

  const typeText =
    "‘Speedcrafts’ 3-wheeled Diesel Road Roller, Model DRR/10 (4 speed) & Model DRR-3/10 (3 speed), capacity 8/10 tonnes.";

  /* ✅ ACCORDION */
  const accordion = [
    {
      title: "Chassis & Frame",
      text:
        "Fabricated out of mild structural steel and all joints checked and tested to performance. Easy accessibility to all parts for overhaul and inspection is given utmost importance in design of these Diesel Road Rollers.",
    },
    {
      title: "Prime Mover",
      text:
        "Powered by Simpson S-4(I) water cooled Diesel Engine with 12 volt electric starting system and an alternative hand start arrangement.",
    },
    {
      title: "Transmission",
      text:
        "The Clutch, Gearbox and Differential are integrated in a single unit. The clutch is of the heavy automotive double acting type, controlled by a single hand lever. A forward or backward movement of the lever gives a smooth and instantaneous corresponding direction of travel to the roller in any gear setting. The gears, pinions and shafts are housed in a mild steel fabricated gearbox and are made out of special and recommended alloy steels. A differential locking arrangement is provided and is operated from the driver’s seat.",
    },
    {
      title: "Lubrication",
      text:
        "Oil splash in gearbox and easily accessible grease nipples, cups and oiling holes.",
    },
    {
      title: "Rolls",
      text: "Fabricated out of mild steel plates.",
    },
    {
      title: "Brakes",
      text:
        "Fully self-wrapping, external contracting type, fitted with replaceable brake linings and adjustable; controlled by a foot-pedal or hand-wheel independently.",
    },
    {
      title: "Steering",
      text:
        "Easily operated mechanical steering comprising of worm shaft and gear. It is designed to give jerk free movement to the front rolls.",
    },
    {
      title: "Front Roll Yoke",
      text:
        "Mild steel fabricated construction, with an efficient and strong built-in pivot, designed to withstand sudden jerks and loads.",
    },
    {
      title: "Scrapers",
      text:
        "Adjustable & reversible scrapers are fitted to cover the entire width of all rolls.",
    },
    {
      title: "Controls",
      text:
        "All controls are within easy reach of the operator from a comfortable driver’s seat.",
    },
    {
      title: "Pressure Balancing Device",
      text:
        "A sliding weight in the chassis, operated by a handle, is provided to vary pressure on the front and rear rolls.",
    },
    {
      title: "Awning",
      text:
        "Made of steel sheets lined with hardboard and provided with side and end canvas curtains.",
    },
    {
      title: "Water Tank & Sprinklers",
      text:
        "Water is fed by gravity to the sprinklers above each wheel controlled by a wheel valve.",
    },
    {
      title: "Towing",
      text:
        "A bird-mouth with draw-pin is bolted to the rear of the chassis for towing trailers etc.",
    },
    {
      title: "Tool Box",
      text:
        "Provided at the rear of the roller with a standard set of tools.",
    },
    {
      title: "Ballast",
      text:
        "Arrangement for ballasting the roller with either sand or water is provided in all the rolls.",
    },
    {
      title: "Optional",
      text:
        "Fully enclosed cabin, hydraulic steering, scarifier, cold-starting equipment, higher horsepower engine for high altitudes etc. may be provided at an extra cost with these Diesel Road Compactors.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
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
            <ProductGallery
              images={images}
              current={current}
              setCurrent={setCurrent}
            />

            <div className="mt-8 space-y-6">
              {/* Technical Specification */}
              <div className="border border-gray-900 rounded">
                <div className="px-5 py-2 font-bold border-b text-center text-black">
                  TECHNICAL SPECIFICATION
                </div>
                <table className="w-full text-left text-black">
                  <tbody>
                    {specs.map(([label, value]) => (
                      <tr key={label}>
                        <td className="px-5 py-2 border-b font-medium">
                          {label}
                        </td>
                        <td
                          className={`px-5 py-2 border-b ${
                            label === "Model" ? "font-bold" : ""
                          }`}
                        >
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Type */}
              <div>
                <div className="font-semibold text-black">Type</div>
                <p className="text-black">{typeText}</p>
              </div>

              {/* Accordion */}
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

                <a
                  href={brochurePdf}
                  download="asphalt-and-concrete-plant-brochure.pdf"
                  className="w-full flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md"
                >
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
